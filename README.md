# ember-element-query

[![Travis build status](https://img.shields.io/travis/lolmaus/ember-element-query.svg)](https://travis-ci.org/lolmaus/ember-element-query)
[![Ember Observer Score](http://emberobserver.com/badges/ember-element-query.svg?cache_bust=1)](http://emberobserver.com/addons/ember-element-query)
[![npm package version](https://img.shields.io/npm/v/ember-element-query.svg)](https://www.npmjs.com/package/ember-element-query)
[![license MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/lolmaus/ember-element-query/blob/gen-1/LICENSE.md)
![ember-versions 1.13+](https://img.shields.io/badge/ember--versions-1.13%2B-yellowgreen.svg)
![node-versions 6+](https://img.shields.io/badge/node--versions-6%2B-yellowgreen.svg)
![ember-cli 2.16.2](https://img.shields.io/badge/uses%20ember--cli-2.16.2-blue.svg)

This Ember addon lets you apply styles to elements conditionally based on their own width, instead of using media queries based on window width.

It lets you implement *reusable responsive components* — with encapsulated styles, decoupled from their parent context. Such components will realign their content depending on how much space is available to them.

For example, if you put a responsive component into a tight sidebar, it will align its content vertically. When the sidebar expands, the component will realign horizontally in order to efficiently use available space.



## Rationale

CSS media queries have a few disadvantages:

* They account for scrollbar width. On OSes with a scrollbar such as Windows and Linux, available viewport width is some 15px smaller than the one detected by a media query. This behavior may be inconsistent across browsers.
* They are designed for creating responsive layouts, whereas making *responsive components* is unreasonably hard:
  * If your responsive component appears in different contexts, you have to define media queries separately for each context and make sure they don't overlap.
  * If you want to make a reusable responsive component, you can't apply responsive styles directly. Instead, you have to offer them as Sass mixins or CSS snippets, for the consumer to apply them by hand in every context.
  * Responsive components put into complex contexts (such as collapsible sidebars, grids, nested responsive components, etc) require extremely large media queries, which involve unreasonably complicated math. Check out [this demo](https://lolmaus.github.io/ember-element-query/).

All those problems didn't exist if we were able to apply styles conditionally based on element's own width:

```css
/* Hypothetical sample. I wish this were possible. */

.my-menu:max-width(499px) .my-menu--item:not(:last-child) {
  margin-bottom: 10px;
}

.my-menu:min-width(500px) {
  display: flex;
}
.my-menu:min-width(500px) .my-menu--item:not(:last-child) {
  margin-right: 10px;
}
```

Unfortunately, CSS is not aware of element's current width, so pseudoselectors like `:min-width(500px)` are impossible.



## How it works

The `ember-element-query` addon applies data attributes to elements that indicate component's current width, letting you apply CSS conditionally based on those attributes.

Ideally it would looks something like this (read [here](https://css-tricks.com/almanac/selectors/a/attribute/) about the "value is in a space-separated list" attribute selector):

```css
/* Hypothetical sample. This would be equivalent to `.my-menu:min-width(500px)` */
.my-menu[data-eq-from~="500px"] {
  display: flex;
}
```

Unfortunately, this will require data attributes to be unreasonably long, with thousands of space-separated values, one for each pixel of possible width.

Instead, `ember-element-query` requires that you define breakpoints on the element. Here's the default definition, you don't have to define anything if you are happy with the default:

```js
{
    0    : 'xxs',
    200  : 'xs',
    400  : 's',
    600  : 'm',
    800  : 'l',
    1000 : 'xl',
    1200 : 'xxl',
    1400 : 'xxxl',
}
```

This defines *slices* — ranges between breakpoints. **The first item must always be zero**.

Here is how this definition is interpreted:

| Range         | Slice name |
|:--------------|:-----------|
| 0—199px       | `xxs`      |
| 200px—399px   | `xs`       |
| 400px—599px   | `s`        |
| 600px—799px   | `m`        |
| 800px—999px   | `l`        |
| 1000px—1199px | `xl`       |
| 1200px—1399px | `xxl`      |
| 1400px+       | `xxxl`     |

You are able to apply styles to your component conditionally based on which slice (width range) the component currently falls into:

```css
/* when component's width is within the `m` slice (600px—799px) */
.my-component[data-eq-current="m"] {
  color: deeppink;
}

/* when component's width is within the `m` slice or more (600px+) */
.my-component[data-eq-from~="m"] {
  color: deepskyblue;
}

/* when component's width is within the `m` slice or less (0—799px) */
.my-component[data-eq-to~="m"] {
  color: palegreen;
}

/* when component's width is between the `s` and `l` slices inclusively (400px—999px) */
.my-component[data-eq-current="m"] {
  color: rebeccapurple;
}
```


## Sass mixins

These CSS selectors look a bit weird. If you're lucky to use Sass, you can use these mixins instead:

| CSS attribute selector     | Sass mixin         | Result in MQ notation (assuming default slices definition) |
|:---------------------------|:-------------------|:-----------------------------------------------------------|
| `[data-eq-current="m"]`    | `eq-at(m)`         | `(min-width: 600px) and (max-width: 799px)`                |
| `[data-eq-from~="m"]`      | `eq-from(m)`       | `(min-width: 600px)                       `                |
| `[data-eq-to~="m"]`        | `eq-to(m)`         | `                       (max-width: 799px)`                |
| `[data-eq-between~="s-l"]` | `eq-between(s, l)` | `(min-width: 400px) and (max-width: 999px)`                |

```scss
// .scss

@import 'node_modules/ember-element-query/addon/mixins';

.my-component {
  
  @include eq-at(m) {
    color: deeppink;
  }

  @include eq-from(m) {
    color: deepskyblue;
  }

  @include eq-to(m) {
    color: palegreen;
  }

  @include eq-between(s, l) {
    color: rebeccapurple;
  }
}
```

I prefer using the indentation-driven syntax to avoid visual noise:

```sass
// .sass

@import node_modules/ember-element-query/addon/mixins

.my-component
  
  +eq-at(m)
    color: deeppink

  +eq-from(m)
    color: deepskyblue

  +eq-to(m)
    color: palegreen

  +eq-between(s, l)
    color: rebeccapurple
```



## Understanding slices

Try imagining this definition on an axis of possible component widths:

```js
{
    0    : 'xxs',
    200  : 'xs',
    400  : 's',
    600  : 'm',
    800  : 'l',
    1000 : 'xl',
    1200 : 'xxl',
    1400 : 'xxxl',
}
```

     Breakpoint:   0       200px     400px     600px     800px     1000px      
                  ├─────────┼─────────┼─────────┼─────────┼─────────┼─────────>
     Slice:        ·   xxs   ·    xs   ·    s    ·    m    ·    l    ·    xl   
                   ·         ·         ·         ·         ·         ·         
                   ·         ·         ·         ·  at(m)  ·         ·         
                   ·         ·         ·         ├─────────┤         ·         
                   ·         ·         ·         ·         ·         ·         
                   ·         ·         ·         · from(m) ·         ·         
                   ·         ·         ·         ├─────────────────────────────>
                   ·         ·         ·                   ·         ·          
                   ·         ·         ·            to(m)  ·         ·          
                   ├───────────────────────────────────────┤         ·          
                                       ·                             ·          
                                       ·         between(s, l)       ·          
                                       ├─────────────────────────────┤          



## Edge cases of slices

Note that the largest slice does not have a right edge. When it is invoked, there will be no max-width limitation.

Thus, some mixin invocations are synonymous:

     Breakpoint:   0       200px     400px     600px     800px     1000px       
                   ├─────────┼─────────┼─────────┼─────────┼─────────┼─────────>
     Slice:            xxs        xs   ·    s    ·    m         l    ·    xl    
                                       ·         ·                   ·          
                                       ·   at(s) ·                   ·  at(xl)  
                                       ├─────────┤                   ├─────────>
                                       ·         ·                   ·          
                                      between(s, s)                  · from(xl) 
                                       ├─────────┤                   ├─────────>
                                       ·                                        
                                       ·                 from(s)                
                                       ├───────────────────────────────────────>
                                       ·                                        
                                       ·             between(s, xl)             
                                       ├───────────────────────────────────────>

…and some become meaningless, they do not limit anything:

     Breakpoint:   0       200px     400px     600px     800px     1000px       
                   ├─────────┼─────────┼─────────┼─────────┼─────────┼─────────>
     Slice:        ·   xxs        xs        s         m         l         xl    
                   ·                                                            
                   ·                                                    to(xl)  
                   ├───────────────────────────────────────────────────────────>
                   ·                                                            
                   ·  from(xxs)                                                 
                   ├───────────────────────────────────────────────────────────>



## Installation

    ember i ember-element-query
    
    
## Dependencies

This addon uses jQuery for events, weakly-bound data attributes and traversing the parents hierarchy.



## Usage

### Enabling element queries on an Ember component

If you want to apply element queries to the root element of your component, use the mixin:

```js
import Component from '@ember/component'
import {ElementQueryMixin} from 'ember-element-query'

export default Component.extend(ElementQueryMixin, {
  
  
  // Optional
  eqSlices: {
    0    : 'xxs',
    200  : 'xs',
    400  : 's',
    600  : 'm',
    800  : 'l',
    1000 : 'xl',
    1200 : 'xxl',
    1400 : 'xxxl',
  },
  
  // Optional
  eqTransitionSelectors: [
    '#the-sidebar',
  ],
})
```



### Enabling element queries on an HTML element

If you want to apply element queries to an HTML element in a template, use the `e-q` component:

Inline form: 

```handlebars
Before: <span class="foo"></span>

After: {{e-q class="foo" tagName="span"}}
```

Block form: 

```handlebars
<div class="foo">
  Before
</div>

{{#e-q class="foo"}}
  After
{{/e-q}}
```

All properties passed to the component become HTML attributes:

```handlebars
{{e-q data-foo="bar"}}

becomes

<div data-foo="bar"></div>
```

You can prevent a property from being bound by passing its name in the `ignoredAttrs` array:

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

This example also demonstrates how to attach an action to the component.




### Triggering an update

`ember-element-query`-driven components update automatically on window resize.

If you change the width of a container programmatically, e. g. expand/collapse a container, element query components will not update automatically.

There are three ways to tell them to update.

1. Run the `triggerResize` method on the `eq` service:

   ```js
   this.get('eq').triggerResize()
   ```

2. Trigger the `resize` event on `window` with jQuery:

   ```js
   $(window).resize()
   ```

3. Two previous ways trigger the update on all EQ components on the page.

    You might have a tiny performance benefit if you trigger the update on a specific EQ component:

    ```js
    this.eqHandleResize()  // triggers update on current component and its EQ children
    this.eqTriggerResize() // triggers update on children only
    ```

    If your component isn't EQ-driven, but you want to trigger an update of its EQ children, you can include this mixin into it:

    ```js
    import {EventForwardingMixin} from 'ember-element-query'
    ```


A common place to run these is in an action:

```js
{
  actions: {
    toggleSidebar() {
      this.toggleProperty('isSidebarExpanded')

      // ---> here <---
    }
  }
}
```

Or an observer:

```js
observer('isSidebarExpanded', function () {
  // ---> here <---
})
```



### Working with element query data programmatically

The following properties are available on EQ-enabled components:

| Property name       | Type                        | Description                                                                                                      | Read only |
|:--------------------|:----------------------------|:-----------------------------------------------------------------------------------------------------------------|:----------|
| `eqSlices`          | Object                      | Slices definition, see above                                                                                     | No        |
| `eqWidth`           | Integer                     | Current component width in px                                                                                    | Yes       |
| `eqHeight`          | Integer                     | Current component height in px                                                                                   | Yes       |
| `eqSliceCurrent`    | String                      | Name of the current slice                                                                                        | Yes       |
| `eqSlicesFrom`      | Array of strings            | Array of all slice names that the `eq-from` selector should match. Includes current slice and all smaller slices | Yes       |
| `eqSlicesTo`        | Array of strings            | Array of all slice names that the `eq-to` selector should match. Includes current slice and all larger slices    | Yes       |
| `eqSlicesBetween`   | Array of arrays of strings  | Array of all slice name pairs that the `eq-to` selector should match                                             | Yes       |
| `eqBPCurrent`       | Integer                     | Corresponds to `eqSliceCurrent`. Left breakpoint of current slice in px                                          | Yes       |
| `eqBPsFrom`         | Array of integers           | Corresponds to `eqSlicesFrom`. Array including left breakpoints of current slice all smaller ones                | Yes       |
| `eqBPsTo`           | Array of integers           | Corresponds to `eqSlicesTo`. Array including left breakpoint of current slice and all larger ones                | Yes       |
| `eqBPsBetween`      | Array of arrays of integers | Corresponds to `eqSlicesBetween`.                                                                                | Yes       |
| `eqBreakpointsAsc`  | Array of integers           | Array of defined breakpoints, sorted in ascending order                                                          | Yes       |
| `eqBreakpointsDesc` | Array of integers           | Array of defined breakpoints, sorted in descending order                                                         | Yes       |
| `eqBPCurrentIndex`  | Integer                     | The index of the current breakpoint in the `eqBreakpointsAsc` array                                              | Yes       |

You can also access them like this:

```handlebars
{{#e-q as |data|}}
  <p>Width:  {{data.eqWidth}}</p>
  <p>Height: {{data.eqHeight}}</p>
{{/e-q}}
```


### Waiting for transitions to finish

Say, you trigger sidebar expanding/collapsing, which should cause some EQ components to realign.

But sidebar is animated, and the resulting widths aren't available until after transition completes.

To resolve this problem, you can subscribe your EQ components to the transition end event on given selectors.

To do that, define `eqTransitionSelectors` array on your component:

```js
import Component from '@ember/component'
import {ElementQueryMixin} from 'ember-element-query'

export default Component.extend(ElementQueryMixin, {

  eqTransitionSelectors: ['#the-sidebar'],

})
```

Note: selectors are looked up globally.



### Demo

https://lolmaus.github.io/ember-element-query/
