# ember-element-query

[![Travis build status](https://img.shields.io/travis/lolmaus/ember-element-query.svg)](https://travis-ci.org/lolmaus/ember-element-query)
[![Ember Observer Score](http://emberobserver.com/badges/ember-element-query.svg?cache_bust=1)](http://emberobserver.com/addons/ember-element-query)
[![npm package version](https://img.shields.io/npm/v/ember-element-query.svg)](https://www.npmjs.com/package/ember-element-query)
[![license MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/lolmaus/ember-element-query/blob/gen-1/LICENSE.md)
![ember-versions 1.13+](https://img.shields.io/badge/ember--versions-1.13%2B-yellowgreen.svg)
![node-versions 8.6+](https://img.shields.io/badge/node--versions-8.6%2B-red.svg)
![ember-cli 2.16.2](https://img.shields.io/badge/uses%20ember--cli-2.16.2-blue.svg)

This Ember addon lets you apply styles to elements conditionally based on their own width, instead of using media queries based on window width.

It lets you implement *reusable responsive components* — with encapsulated styles, decoupled from their parent context. Such components will realign their content depending on how much space is available to them.

For example, if you put a responsive component into a tight sidebar, it will align its content vertically. When the sidebar expands, the component will realign horizontally in order to efficiently use available space.



## Table of content

* [Table of content](#table-of-content)
* [Rationale](#rationale)
* [How it works](#how-it-works)
  * [With Sass](#with-sass)
* [Drawbacks](#drawbacks)
  * [Layout thrashing](#layout-thrashing)
  * [FastBoot incompatibility](#fastboot-incompatibility)
  * [Known issues](#known-issues)
    * [Delayed event propagation](#delayed-event-propagation)
* [Alternatives](#alternatives)
* [Demo](#demo)
* [Installation](#installation)
* [Usage](#usage)
  * [Enabling element queries on an existing Ember component](#enabling-element-queries-on-an-existing-ember-component)
  * [Enabling element queries on an HTML element](#enabling-element-queries-on-an-html-element)
  * [Triggering an update](#triggering-an-update)
  * [Working with element query data programmatically](#working-with-element-query-data-programmatically)
  * [Waiting for transitions to finish](#waiting-for-transitions-to-finish)
* [Using slices](#using-slices)
  * [What are slices](#what-are-slices)
* [Understanding slices](#understanding-slices)
  * [Edge cases of slices](#edge-cases-of-slices)
  * [Overriding $eq-slices definition for individual components](#overriding-eq-slices-definition-for-individual-components)
* [Upgrading](#upgrading)
  * [From v1 to v2](#from-v1-to-v2)
* [Development](#development)
  * [Do not use npm, use Yarn](#do-not-use-npm-use-yarn)
  * [Installation for development](#installation-for-development)
  * [Running](#running)
  * [Branch names](#branch-names)
  * [Code style](#code-style)
  * [Updating the table of contents](#updating-the-table-of-contents)
  * [Demo deployment](#demo-deployment)
* [Credits](#credits)
* [License](#license)




## Rationale

CSS media queries have a few disadvantages:

* They account for scrollbar width. On OSes with a scrollbar such as Windows and Linux, available document width is some 15px smaller than the one detected by a media query. This behavior may be inconsistent across browsers.
* They are designed for creating responsive layouts, whereas making *responsive components* is unreasonably hard:
  * If your responsive component appears in different contexts, you have to define media queries separately for each context and make sure they don't overlap.
  * If you want to make a reusable responsive component, you can't apply responsive styles directly. Instead, you have to offer them as preprocessor mixins or CSS snippets, for the consuming app developer to apply them by hand in every context.
  * Responsive components put into complex contexts (such as collapsible sidebars, grids, nested responsive components, etc) require extremely large media queries, which involve unreasonably complicated math. Check out [the demo](https://lolmaus.github.io/ember-element-query/).

All those problems wouldn't exist if we were able to apply styles conditionally based on element's own width:

```css
/* Hypothetical sample. I wish these were possible. */

/* When .my-menu is <= 499px, apply margin-bottom to .my-menu--item */
.my-menu:max-width(499px) .my-menu--item {
  margin-bottom: 10px;
}

/* When .my-menu is >= 500px, apply flex to it */
.my-menu:min-width(500px) {
  display: flex;
}
/* When .my-menu is >= 500px, apply margin-right to .my-menu--item */
.my-menu:min-width(500px) .my-menu--item {
  margin-right: 10px;
}
```

Unfortunately, CSS is not aware of element's current width, so pseudoselectors like `:min-width(500px)` are impossible... unless you use a tool like `ember-element-query`.



## How it works

`ember-element-query` lets you write CSS like this:

```css
/* When .my-menu is <= 499px, apply margin-bottom to .my-menu--item */
.my-menu[data-eq-to~=499px] .my-menu--item {
  margin-bottom: 10px;
}

/* When .my-menu is >= 500px, apply flex to it */
.my-menu[data-eq-from~=500px] {
  display: flex;
}

/* When .my-menu is >= 500px, apply margin-right to .my-menu--item */
.my-menu[data-eq-from~=500px] .my-menu--item {
  margin-right: 10px;
}
```

Read [here](https://css-tricks.com/almanac/selectors/a/attribute/) about the `~=` <abbr title="also known as">aka</abbr> "value is in a space-separated list" attribute selector, if you're not familiar with it.

`ember-element-query` makes `data-eq-from` and `data-eq-to` attribute selectors possible by parsing the CSS of your app and discovering which breakpoints are applied to which components. Every element query-driven component will apply relevant values to its `data-eq-from` and `data-eq-to` attributes. 

In your CSS, the `data-eq-from` and `data-eq-to` attribute selectors must always be paired with a semantic classname of a component. The same classname must be applied to the component in Ember via `class` or `classNames` property.

### With Sass

If you're lucky to use Sass, the above code can be simplified to:

```sass
@import node_modules/ember-element/query/addon/styles/mixins

.my-menu
  $breakpoint: 500px
  
  +eq-to($breakpoint)
    .my-menu--item
      margin-bottom: 10px
      
  +eq-from($breakpoint)
    display: flex

    .my-menu--item
      margin-right: 10px
```

Note: the `eq-to` mixin subtracts `1` from its argument, letting you reuse the same breakpoint value in both `eq-to` and `eq-from`. The resulting CSS will be identical to the previous example.

If you use a different preprocessor, you can make your own mixins. Don't hesitate to contribute them via a PR!



## Drawbacks

The Element Query technique is a double-edged weapon.



### Layout thrashing

Whenever a resize event is triggered, the topmost EQ component reads its `offsetWidth` and, if necessary, updates its `data-eq-from` and `data-eq-to` attributes. Then its EQ descendants, if any, do the same recursively.

Updating any attribute invalidates the browser layout. Reading `offsetWidth` when the layout has been invalidated will trigger a browser reflow. 

Subsequent `offsetWidth` reads will not trigger more reflows until the layout is invalidated again, and a single reflow typically takes a few milliseconds, depending on amount of elements and styles.

But an update of an EQ parent may cause all its EQ descendants to read-and-update recursively, resulting in a sequence of reflows and causing a performance impact known as [layout thrashing](http://kellegous.com/j/2013/01/26/layout-performance/).



### FastBoot incompatibility

The element query technique is incompatible with server-side rendering. The server is tragically unaware of client window size and can only render for some predefined page width.

When the JS app loads and element queries apply, the page may realign.

Hypothetically, you can use a JS snippet that runs early as `index.html` loads, reads window width and redirects, passing the width in a query param.



### Known issues

#### Delayed event propagation

Ember has a ridiculous way of detecting an infinite render loop: if a rerender has been triggered from a rerender 10 times in a row, the loop is considered infinite... and Ember chooses to crash the app! :dizzy_face:

See [source](https://github.com/emberjs/ember.js/blob/00c4c82a3f6fd03fe692601ad8e052f7bb5e2914/packages/ember-glimmer/lib/renderer.ts#L190-L195) and corresponding issue: [#15749](https://github.com/emberjs/ember.js/issues/15479#issuecomment-347006683).

To work around this problem, `ember-elemenet-query` wraps event propagation (from a parent to its children) into `Ember.run.next`. This prevents the crash and distributes layout thrashing over time, avoiding UI lock. But the cost is that nested EQ components realign sequentially rather than all at once, i. e. you can notice realignment spread from parents to children in a fraction of a second.

See the [heavy nesting demo](http://localhost:4200/#/?page=13).



## Alternatives

Every Element Query implementation is subject to both layout thrashing and FastBoot incompatibility.

The most promising alternative to this addon seems to be [EQCSS](http://elementqueries.com). It is an inspiration for the [CSS Element Queries proposal](https://tomhodgins.github.io/element-queries-spec/). The proposal is conceived by an individual developer and does not originate from an organization like W3C.

EQCSS requires writing CSS that is currently non-standard and may require [hacks](https://github.com/eqcss/eqcss/wiki/Using-EQCSS-with-CSS-Preprocessors) for your CSS pre/postprocessor.

[eq.js](https://github.com/Snugug/eq.js) is another viable alternative. It claims to be the fastest implementation, though it hasn't been updated in a while. It uses standard CSS syntax with optional Sass mixins, but requires assigning names to breakpoints in HTML, which is quite tedious.

`ember-element-query` aims to be the best of both worlds:

* Uses standard CSS syntax and offers handy Sass mixins that can be easily ported to other preprocessors.
* Lets you use px values directly in CSS without having to define them in HTML or JS. This is possible because the addon integrates into the Ember CLI pipeline and parses your CSS for element queries at build time.
* Relies on Ember for efficient DOM updates.
* Lets you trigger a resize on a specific EQ component and its descendants. This prevents the event from being triggered on unrelated components.



## Demo

https://lolmaus.github.io/ember-element-query/



## Installation

Install the addon:

    ember i ember-element-query

:warning: Add the `assets/element-query-mapping.js` script into your `app/index.html` and `tests/index.html`:

```html
    <script src="{{rootURL}}assets/vendor.js"></script>
    <script src="{{rootURL}}assets/app.js"></script>
    <script src="{{rootURL}}assets/element-query-mapping.js"></script>
```

Why: this file is a way to pass information from the build build pipeline into the client app. Element query selectors have to be extracted from *compiled* CSS and then provided as a JS module. Unfortunately, when compiled CSS becomes available in the Ember CLI pipeline, it's too late to manipulate JS modules, and instead a new JS file is provided.



## Usage

### Enabling element queries on an existing Ember component

If you want to apply element queries to the root element of your component, use the `ElementQueryMixin`.

You are also required to give your component a semantic HTML class via `classNames`:

```js
import Component from '@ember/component'
import {ElementQueryMixin} from 'ember-element-query'

export default Component.extend(ElementQueryMixin, {

  // Required
  classNames: ['x-card'],

  // Optional
  eqTransitionSelectors: [
    '#the-sidebar',
  ],
})
```

Then you can apply element queries in your CSS:

```css
.x-card[data-eq-from~=500px] { /*...*/ }
```

or Sass:

```sass
@import node_modules/ember-element/query/addon/styles/mixins

.x-card
  +eq-from(500)
    // ...
```

The addon will parse CSS on build, letting the `x-card` component know which breakpoints are used on it. The component will then apply.



### Enabling element queries on an HTML element

If you want to apply element queries to an HTML element in a template, replace it with the  `e-q` component:

Inline form: 

```handlebars
Before: <span class="x-card--icon"></span>

After: {{e-q tagName="span" class="x-card--icon"}}
```

Block form: 

```handlebars
<div class="x-card--icon">
  Before
</div>

{{#e-q class="x-card--icon"}}
  After
{{/e-q}}
```

Again, you are required to pass an semantic HTML class name into the component, so that it can look for relevant element query usages in CSS and apply them to itself. Note that when you pass the HTML classname from Handlebars, you use `class` instead of `classNames`.

All properties passed to the `e-q` component become HTML attributes:

```handlebars
{{e-q data-foo="bar"}}

becomes

<div data-foo="bar"></div>
```

You can prevent a property from being bound by passing its name into the `ignoredAttrs` array:

```
This button will not receive the `disabled` attribute:

{{#e-q
  tagName      = "button"
  disabled     = true
  ignoredAttrs = (array 'disabled')
  onclick      = (action 'save')
}}
  Save
{{/e-q}}
```

The example above also demonstrates how to attach an action to the `e-q` component.



### Triggering an update

`ember-element-query`-driven components update automatically on window resize.

But if you change the width of a parent element programmatically, e. g. expand/collapse a container, EQ components will not update automatically. You have to tell EQ components to update when necessary.

A common place to do so is in an action of a parent component/controller:

```js
{
  actions: {
    toggleSidebar() {
      this.toggleProperty('isSidebarExpanded')

      // <--- here
    }
  }
}
```

Or an observer:

```js
observer('isSidebarExpanded', function () {
  // <--- here
})
```

There are three ways to tell EQ components to update:

1. Run the `triggerResize` method on the `eq` service (recommended):

   ```js
   this.get('eq').triggerResize()
   ```

2. Trigger the `resize` event on `window`:

   ```js
   window.dispatchEvent(new Event('resize'))
   ```

3. The above ways will trigger the update on all EQ components on the page.

    You might have a tiny performance benefit if you trigger the update on a specific EQ component:

    ```js
    this.eqHandleResize()  // triggers update on current component and its EQ children
    this.eqTriggerResize() // triggers update on children only
    ```

    If your component isn't EQ-driven, but you want to trigger an update of its EQ children, you can include this mixin into it:

    ```js
    import {EventForwardingMixin} from 'ember-element-query'
    ```
    
    And then run `this.eqTriggerResize()` in it.
    
    :warning: This mixin can not be included into a controller.



### Working with element query data programmatically

The following properties are available on EQ-enabled components:

| Property name     | Type              | Description                                                                    |
|:------------------|:------------------|:-------------------------------------------------------------------------------|
| `eqWidth`         | Integer           | Current component width in px                                                  |
| `eqBPsFrom`       | Array of integers | List of breakpoints used on this component in CSS via `data-eq-from` attribute |
| `eqBPsTo`         | Array of integers | List of breakpoints used on this component in CSS via `data-eq-to` attribute   |
| `eqBPsFromActive` | Array of integers | Subset of `eqBPsFrom` breakpoints that match current component width           |
| `eqBPsToActive`   | Array of integers | Subset of `eqBPsTo` breakpoints that match current component width             |

All of them are read-only.

You can also access them like this:

```handlebars
{{#e-q as |data|}}
  <p>Width:  {{data.eqWidth}}</p>
{{/e-q}}
```


### Waiting for transitions to finish

Say, you trigger sidebar expanding/collapsing, which should cause some EQ components to realign.

But the sidebar is animated, and the resulting widths aren't available until after transition completes.

To resolve this problem, you can subscribe your EQ components to the transition end event on given selectors.

To do that, define `eqTransitionSelectors` array on a parent component, that contains both the sidebar and EQ components affected by sidebar width:

```js
import Component from '@ember/component'
import {ElementQueryMixin} from 'ember-element-query'

export default Component.extend(ElementQueryMixin, {

  classNames: ['main-layout'],
  eqTransitionSelectors: ['.main-layout--sidebar'],

})
```

Selectors are looked up among child elements only. If you need to react to a transition of an element that appears outside of given component, you should work with that element's nearest parent component (make it `EventForwardingMixin` or `ElementQueryMixin` and apply transition selectors there).



## Using slices

Slices are a feature from the v1 version of `ember-element-query`. The addon has been since rewritten to eliminate the need in slices.

The addon still supports slices for users who grew attached to them.

:warning: If you are upgrading from v1 or coming from [breakpoint-slicer](https://github.com/lolmaus/breakpoint-slicer], please mind that `eq-to` and the second argument of `eq-between` are now non-inclusive.

:warning: Slices are only available with Sass and are now defined in Sass.



### What are slices

Slices are ranges between breakpoints. Say, your component uses these breakpoints:

    Breakpoint:   0       200px     400px     600px     800px     1000px    1200px    1400px    
                  ├─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────>

See those intervals between numbers, e. g. 0—200, 200—400, etc? Those are "slices". Let's give them names:


    Breakpoint:   0       200px     400px     600px     800px     1000px    1200px    1400px  
                  ├─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────>
    Slice:        ·   xxs   ·    xs   ·    s    ·    m    ·    l    ·    xl   ·   xxl   ·   xxxl   


You can use slices in the mixins. For example, `eq-from(s)` is equivalent to `eq-from(400)`. See [Understanding slices](#understanding-slices) below for more info.

The above combination of breakpoints and slices is the default. If you want to adjust them, define a `$eq-slices` global variable with a Sass map like this:

```scss
$eq-slices: (
   xxs:    0,
    xs:  200,
     s:  400,
     m:  600,
     l:  800,
    xl: 1000,
   xxl: 1200,
  xxxl: 1400,
);
```

Breakpoints must be ordered in ascending order. The first breakpoint must always be zero.

The number next to a slice name indicates its left side. The slice will span up to where the next span starts.

In this example, `xss` is a slice ranging from `0` to `199px`, and `xs` ranges from `200px` to `399px`.



## Understanding slices

Given a slices definition like this:

```scss
$eq-slices: (
   xxs:    0,
    xs:  200,
     s:  400,
     m:  600,
     l:  800,
    xl: 1000,
);
```

Here is how some mixin calls look on an axis:


    Breakpoint:   0       200px     400px     600px     800px     1000px      
                  ├─────────┼─────────┼─────────┼─────────┼─────────┼─────────>
    Slice:        ·   xxs   ·    xs   ·    s    ·    m    ·    l    ·    xl    
                  ·         ·         ·         ·         ·         ·          
                  ·         ·         ·         ·  at(m)  ·         ·          
                  ·         ·         ·         ├────────┤·         ·          
                  ·         ·         ·         ·         ·         ·          
                  ·         ·         ·         ·         · from(m) ·          
                  ·         ·         ·         ├─────────────────────────────>
                  ·         ·         ·         ·         ·                    
                  ·         ·  to(m)  ·         ·         ·                    
                  ├────────────────────────────┤·         ·                    
                                      ·                   ·                    
                                      ·   between(s, l)   ·                    
                                      ├──────────────────┤·                    

Saying `eq-from(m)` is equivalent of `eq-from(600)` and produces `[data-eq-from~=600px]`.

Saying `eq-to(m)` is equivalent of `eq-to(600)` and produces `[data-eq-to~=599px]`. Note how this mixin is non-inclusive (the range does not include the `m` slice).

`eq-at(m)` is equivalent of `eq-between(600, 800)` and produces `[data-eq-from~=600px][data-eq-to~=799px]`.

`eq-between(s, l)` is equivalent of `eq-between(400, 800)` and produces `[data-eq-from~=600px][data-eq-to~=799px]`. Note how the right side of this mixin is non-inclusive (the range does not include the `l` slice).



### Edge cases of slices

Note that the largest slice does not have a right edge. When it is invoked, there will be no max-width limitation.

Thus, some mixin invocations are synonymous:

     Breakpoint:   0       200px     400px     600px     800px     1000px       
                   ├─────────┼─────────┼─────────┼─────────┼─────────┼─────────>
     Slice:            xxs        xs   ·    s    ·    m         l    ·    xl    
                                       ·         ·                   ·          
                                       ·   at(s) ·                   ·  at(xl)  
                                       ├────────┤·                   ├─────────>
                                       ·         ·                   ·          
                                      between(s, m)                  · from(xl) 
                                       ├────────┤·                   ├─────────>

Note: in this example `1000` is the largest slice.

Some become meaningless, they do not limit anything:

     Breakpoint:   0       200px     400px     600px     800px     1000px       
                   ├─────────┼─────────┼─────────┼─────────┼─────────┼─────────>
     Slice:        ·   xxs        xs        s         m         l         xl    
                   ·                                                            
                   ·  from(xxs)                                                 
                   ├───────────────────────────────────────────────────────────>

And some are impossible. This will trigger an error:

     Breakpoint:   0       200px     400px     600px     800px     1000px       
                   ├─────────┼─────────┼─────────┼─────────┼─────────┼─────────>
     Slice:        ·   xxs        xs        s         m         l         xl    
                   ·                                                            
          to(xxs)  ·                                                             
         ─────────┤·                                                            



### Overriding $eq-slices definition for individual components

The `$eq-slices` map can only be overridden globally. Overriding it locally does not work unless you use the `!global` flag:

```sass
// This will be applied globally
$eq-slices: (small: 0, medium: 300, large: 600)

.my-component

  // This will have no effect
  $eq-slices: (small: 0, large: 500)
  
  // This will be applied globally to all usages below this line, even outside `.my-component`
  $eq-slices: (small: 0, large: 500) !global
```

If you want to override slices for a single component, pass them as an additional argument to mixins:

```
.my-component
  $slices: (small: 0, large: 500)
  
  +eq-at(small, $slices)
    color: red
  
  +eq-from(large, $slices)
    color: blue
```



## Upgrading

### From v1 to v2

v2 is a complete rewrite. Upgrading from v1 requires many changes to your code:

1. Follow the new installation instructions.

2. Update import path in JS:

   ```js
   import {ElementQueryMixin} from 'ember-element-query'
   ```

3. Update import path in Sass:

   ```sass
   @import 'node_modules/ember-element/query/addon/styles/mixins'
   ```

4. Pass a semantic HTML classname to every EQ-driven component:

    * To `{{e-q}}` via `class="my-component"`
    * To `ElementQueryMixin` via `classNames: ['my-component']`

5. Update your styles to either use px breakpoints or define `$eq-slices` in Sass. See the docs above.

    Make sure your CSS selectors use the semantic HTML classnames.

6. If you chose to use slices, mind that `eq-to` and the second argument of `eq-between` are now non-inclusive.

    Before:
    
    ```sass
    +eq-to(xs)
      color: red

    +eq-from(s)
      color: red
    ```

    After:
    
    ```sass
    $bp: s

    +eq-to($bp)
      color: red

    +eq-from($bp)
      color: red
    ```

7. Remove `eqSlices` definitions from JS/Handlebars. 

8. Remove the `trigger` import in JS. See the docs above on how to trigger programmatically.




## Development

### Do not use npm, use Yarn

This project uses [Yarn](https://yarnpkg.com/) to lock dependencies. You can install yarn simply with `npm i -g yarn` or follow [installation instructions](https://yarnpkg.com/lang/en/docs/install/).



### Installation for development

* `git clone git@github.com:lolmaus/ember-element-query.git`
* `cd ember-element-query`
* `yarn install` :warning:

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).



### Running

* `ember serve`
* Visit the dummy app at [http://localhost:4200](http://localhost:4200).



### Branch names

Main branches are named as `gen-1`, `gen-2`, etc. Default branch on GitHub is where active development happens.

This branch naming scheme is due to the fact that this project uses SemVer. As a result of SemVer, major version number will rise very quickly, without any correlation with actual major changes in the app.

The number in the branch name, "generation", indicates a large update, bigger than a simple breaking change. The generation number is supposed to be incremented in these cases:
* A huge improvement or change happens in the addon.
* There's a change in the addon's API or architecture which introduces a necessity to maintain more than one branch at a time.
* The codebase is started from scratch.

Pull requests are welcome from feature branches. Make sure to discus proposed changes with addon maintainers to avoid wasted effort.



### Code style

Make sure to use ESLint and [EditorConfig](http://editorconfig.org/#download) to prevent tests from failing due to code style inconsistencies.



### Updating the table of contents

Maintaining the TOC by hand is extremely tedious. Use [this tiny webapp](https://lolmaus.github.io/tocdown/) to generate the TOC automatically. Enable the first two checkboxes there.



### Demo deployment

This command will deploy the dummy app to https://lolmaus.github.io/ember-element-query/ :

    ember deploy prod

Contributor permissions are required.



## Credits

Built by [@lolmaus](https://github.com/lolmaus) and [contributors](https://github.com/lolmaus/ember-element-query/graphs/contributors).

Uses inspiration or code fragments borrowed from:

* [@KOBA789](https://github.com/KOBA789)'s [gist](https://gist.github.com/KOBA789/da0c963d491700cc2422)
* [DockYard/ember-one-way-controls](https://github.com/DockYard/ember-one-way-controls/blob/v3.0.1/addon/-private/dynamic-attribute-bindings.js) ([MIT](https://github.com/DockYard/ember-one-way-controls/blob/v3.0.1/LICENSE.md))
* [html-next/flexi](https://github.com/html-next/flexi/blob/v1.1.9/addon/services/device/layout.js) ([MIT](https://github.com/html-next/flexi/blob/v1.1.9/LICENSE.md))
* [ember-engines/ember-asset-loader](https://github.com/ember-engines/ember-asset-loader/blob/v0.4.1/lib/utils/find-host.js) ([MIT](https://github.com/ember-engines/ember-asset-loader/blob/v0.4.1/LICENSE.md))
* [ef4/ember-browserify](https://github.com/ef4/ember-browserify/blob/v1.2.0/lib/stubs.js#L57) ([MIT](https://github.com/ef4/ember-browserify/blob/v1.2.0/LICENSE.md))



## License

[MIT](https://github.com/Deveo/ember-drag-sort/blob/gen-3/LICENSE.md).
