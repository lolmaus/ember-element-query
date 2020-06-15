import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, waitUntil } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import sinon, { SinonSpy } from 'sinon';
import { TestContext } from 'ember-test-helpers';
import { Sizes } from 'ember-element-query/-private/modifier';

interface TestContextCustom extends TestContext {
  callback?: SinonSpy;
  actualWidth?: number;
  actualHeight?: number;
  sizes?: Sizes;
  prefix?: string;
}

module('Integration | Modifier | element-query', function (hooks) {
  setupRenderingTest(hooks);

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  test('calls the onResize callback', async function (this: TestContextCustom, assert) {
    let callCount = 0;
    this.callback = sinon.spy(() => callCount++);

    await render(hbs`
      {{! template-lint-disable no-inline-styles }}
      <div
        id="test-subject"
        style="width: 300px; height: 100px;"
        {{element-query onResize=this.callback}}
      >
      </div>
    `);

    const element = document.getElementById('test-subject');
    if (!element) throw new Error('Expected element to exist');

    await waitUntil(() => callCount === 1);

    sinon.assert.calledWithExactly(
      this.callback.firstCall,
      sinon.match({
        element,
        width: 300,
        height: 100,
        ratio: 3,
      })
    );

    element.style.width = '400px';

    await waitUntil(() => callCount === 2);

    // prettier-ignore
    sinon.assert.calledWithMatch(
      this.callback.secondCall,
      {
        element,
        width: 400,
        height: 100,
        ratio: 4,
      }
    );

    assert.ok(true);
  });

  ///

  module('attributes', function (/* hooks */) {
    module('default dimension', function (/* hooks */) {
      module('default sizes', function (/* hooks */) {
        // prettier-ignore
        const cases = [
          { actualWidth: 0,                        expectedAttributes: ['at-xxs',  'from-xxs', 'to-xxs',  'to-xs',  'to-s',   'to-m',   'to-l',    'to-xl',    'to-xxl',    'to-xxxl']},
          { actualWidth: 400,                      expectedAttributes: ['at-s',    'from-xxs', 'from-xs', 'from-s', 'to-s',   'to-m',   'to-l',    'to-xl',    'to-xxl',    'to-xxxl']},
          { actualWidth: 550,                      expectedAttributes: ['at-s',    'from-xxs', 'from-xs', 'from-s', 'to-s',   'to-m',   'to-l',    'to-xl',    'to-xxl',    'to-xxxl']},
          { actualWidth: 599,                      expectedAttributes: ['at-s',    'from-xxs', 'from-xs', 'from-s', 'to-s',   'to-m',   'to-l',    'to-xl',    'to-xxl',    'to-xxxl']},
          { actualWidth: 600,                      expectedAttributes: ['at-m',    'from-xxs', 'from-xs', 'from-s', 'from-m', 'to-m',   'to-l',    'to-xl',    'to-xxl',    'to-xxxl']},
          { actualWidth: 1650,                     expectedAttributes: ['at-xxxl', 'from-xxs', 'from-xs', 'from-s', 'from-m', 'from-l', 'from-xl', 'from-xxl', 'from-xxxl', 'to-xxxl']},
          { actualWidth: 0,    prefix: 'data-eq-', expectedAttributes: ['data-eq-at-xxs',  'data-eq-from-xxs', 'data-eq-to-xxs',  'data-eq-to-xs',  'data-eq-to-s',   'data-eq-to-m',   'data-eq-to-l',    'data-eq-to-xl',    'data-eq-to-xxl',    'data-eq-to-xxxl']},
          { actualWidth: 400,  prefix: 'data-eq-', expectedAttributes: ['data-eq-at-s',    'data-eq-from-xxs', 'data-eq-from-xs', 'data-eq-from-s', 'data-eq-to-s',   'data-eq-to-m',   'data-eq-to-l',    'data-eq-to-xl',    'data-eq-to-xxl',    'data-eq-to-xxxl']},
          { actualWidth: 550,  prefix: 'data-eq-', expectedAttributes: ['data-eq-at-s',    'data-eq-from-xxs', 'data-eq-from-xs', 'data-eq-from-s', 'data-eq-to-s',   'data-eq-to-m',   'data-eq-to-l',    'data-eq-to-xl',    'data-eq-to-xxl',    'data-eq-to-xxxl']},
          { actualWidth: 599,  prefix: 'data-eq-', expectedAttributes: ['data-eq-at-s',    'data-eq-from-xxs', 'data-eq-from-xs', 'data-eq-from-s', 'data-eq-to-s',   'data-eq-to-m',   'data-eq-to-l',    'data-eq-to-xl',    'data-eq-to-xxl',    'data-eq-to-xxxl']},
          { actualWidth: 600,  prefix: 'data-eq-', expectedAttributes: ['data-eq-at-m',    'data-eq-from-xxs', 'data-eq-from-xs', 'data-eq-from-s', 'data-eq-from-m', 'data-eq-to-m',   'data-eq-to-l',    'data-eq-to-xl',    'data-eq-to-xxl',    'data-eq-to-xxxl']},
          { actualWidth: 1650, prefix: 'data-eq-', expectedAttributes: ['data-eq-at-xxxl', 'data-eq-from-xxs', 'data-eq-from-xs', 'data-eq-from-s', 'data-eq-from-m', 'data-eq-from-l', 'data-eq-from-xl', 'data-eq-from-xxl', 'data-eq-from-xxxl', 'data-eq-to-xxxl']},
        ];

        const allAttributes = [
          'to-xxs',
          'to-xs',
          'to-s',
          'to-m',
          'to-l',
          'to-xl',
          'to-xxl',
          'to-xxxl',
          'from-xxs',
          'from-xs',
          'from-s',
          'from-m',
          'from-l',
          'from-xl',
          'from-xxl',
          'from-xxxl',
          'at-xxs',
          'at-xs',
          'at-s',
          'at-m',
          'at-l',
          'at-xl',
          'at-xxl',
          'at-xxxl',
        ];

        cases.forEach(({ actualWidth, expectedAttributes, prefix }) => {
          // eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/restrict-template-expressions
          test(`width ${actualWidth}, prefix ${prefix}`, async function (this: TestContextCustom, assert) {
            let m;
            this.actualWidth = actualWidth;
            this.prefix = prefix;

            let allAttributesEffective = allAttributes;
            if (prefix) {
              allAttributesEffective = allAttributesEffective.map((attr) => prefix + attr);
            }

            const missingAttributes = allAttributesEffective.filter(
              (attr) => !expectedAttributes?.includes(attr)
            );

            await render(hbs`
              {{! template-lint-disable no-inline-styles style-concatenation }}
              <div
                id="test-subject"
                style="width: {{this.actualWidth}}px; height: 100px;"
                {{element-query prefix=this.prefix}}
              >
              </div>
            `);

            const element = document.getElementById('test-subject');
            if (!element) throw new Error('Expected element to exist');

            for (const attr of expectedAttributes) {
              await waitUntil(() => element.getAttribute(attr) != null);
              m = `Attribute ${attr} is expected to exist on the element`;
              assert.ok(true, m);
            }

            for (const attr of missingAttributes) {
              await waitUntil(() => element.getAttribute(attr) == null);
              m = `Attribute ${attr} is expected NOT to exist on the element`;
              assert.ok(true, m);
            }
          });
        });
      });

      module('custom sizes', function (/* hooks */) {
        const sizes = { small: 0, medium: 300, large: 700 };

        // prettier-ignore
        const cases = [
          { actualWidth: 299,                     expectedAttributes: ['at-small',  'from-small', 'to-small',    'to-medium',  'to-large']},
          { actualWidth: 0,                       expectedAttributes: ['at-small',  'from-small', 'to-small',    'to-medium',  'to-large']},
          { actualWidth: 150,                     expectedAttributes: ['at-small',  'from-small', 'to-small',    'to-medium',  'to-large']},
          { actualWidth: 300,                     expectedAttributes: ['at-medium', 'from-small', 'from-medium', 'to-medium',  'to-large']},
          { actualWidth: 450,                     expectedAttributes: ['at-medium', 'from-small', 'from-medium', 'to-medium',  'to-large']},
          { actualWidth: 699,                     expectedAttributes: ['at-medium', 'from-small', 'from-medium', 'to-medium',  'to-large']},
          { actualWidth: 700,                     expectedAttributes: ['at-large',  'from-small', 'from-medium', 'from-large', 'to-large']},
          { actualWidth: 299, prefix: 'data-eq-', expectedAttributes: ['data-eq-at-small',  'data-eq-from-small', 'data-eq-to-small',    'data-eq-to-medium',  'data-eq-to-large']},
          { actualWidth: 0,   prefix: 'data-eq-', expectedAttributes: ['data-eq-at-small',  'data-eq-from-small', 'data-eq-to-small',    'data-eq-to-medium',  'data-eq-to-large']},
          { actualWidth: 150, prefix: 'data-eq-', expectedAttributes: ['data-eq-at-small',  'data-eq-from-small', 'data-eq-to-small',    'data-eq-to-medium',  'data-eq-to-large']},
          { actualWidth: 300, prefix: 'data-eq-', expectedAttributes: ['data-eq-at-medium', 'data-eq-from-small', 'data-eq-from-medium', 'data-eq-to-medium',  'data-eq-to-large']},
          { actualWidth: 450, prefix: 'data-eq-', expectedAttributes: ['data-eq-at-medium', 'data-eq-from-small', 'data-eq-from-medium', 'data-eq-to-medium',  'data-eq-to-large']},
          { actualWidth: 699, prefix: 'data-eq-', expectedAttributes: ['data-eq-at-medium', 'data-eq-from-small', 'data-eq-from-medium', 'data-eq-to-medium',  'data-eq-to-large']},
          { actualWidth: 700, prefix: 'data-eq-', expectedAttributes: ['data-eq-at-large',  'data-eq-from-small', 'data-eq-from-medium', 'data-eq-from-large', 'data-eq-to-large']},
        ];

        const allAttributes = [
          'at-small',
          'at-medium',
          'at-large',
          'from-small',
          'from-medium',
          'from-large',
          'to-small',
          'to-medium',
          'to-large',
        ];

        cases.forEach(({ actualWidth, expectedAttributes, prefix }) => {
          // eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/restrict-template-expressions
          test(`width ${actualWidth}, prefix: ${prefix}`, async function (this: TestContextCustom, assert) {
            let m;
            this.actualWidth = actualWidth;
            this.sizes = sizes;
            this.prefix = prefix;

            let allAttributesEffective = allAttributes;
            if (prefix) {
              allAttributesEffective = allAttributesEffective.map((attr) => prefix + attr);
            }

            const missingAttributes = allAttributesEffective.filter(
              (attr) => !expectedAttributes?.includes(attr)
            );

            await render(hbs`
              {{! template-lint-disable no-inline-styles style-concatenation }}
              <div
                id="test-subject"
                style="width: {{this.actualWidth}}px; height: 100px;"
                {{element-query sizes=this.sizes prefix=this.prefix}}
              >
              </div>
            `);

            const element = document.getElementById('test-subject');
            if (!element) throw new Error('Expected element to exist');

            for (const attr of expectedAttributes) {
              await waitUntil(() => element.getAttribute(attr) != null);
              m = `Attribute ${attr} is expected to exist on the element`;
              assert.ok(true, m);
            }

            for (const attr of missingAttributes) {
              await waitUntil(() => element.getAttribute(attr) == null);
              m = `Attribute ${attr} is expected NOT to exist on the element`;
              assert.ok(true, m);
            }
          });
        });
      });
    });

    module('dimension height', function (/* hooks */) {
      module('default sizes', function (/* hooks */) {
        // prettier-ignore
        const cases = [
          { actualHeight: 0,                        expectedAttributes: ['at-xxs',  'from-xxs', 'to-xxs',  'to-xs',  'to-s',   'to-m',   'to-l',    'to-xl',    'to-xxl',    'to-xxxl']},
          { actualHeight: 400,                      expectedAttributes: ['at-s',    'from-xxs', 'from-xs', 'from-s', 'to-s',   'to-m',   'to-l',    'to-xl',    'to-xxl',    'to-xxxl']},
          { actualHeight: 550,                      expectedAttributes: ['at-s',    'from-xxs', 'from-xs', 'from-s', 'to-s',   'to-m',   'to-l',    'to-xl',    'to-xxl',    'to-xxxl']},
          { actualHeight: 599,                      expectedAttributes: ['at-s',    'from-xxs', 'from-xs', 'from-s', 'to-s',   'to-m',   'to-l',    'to-xl',    'to-xxl',    'to-xxxl']},
          { actualHeight: 600,                      expectedAttributes: ['at-m',    'from-xxs', 'from-xs', 'from-s', 'from-m', 'to-m',   'to-l',    'to-xl',    'to-xxl',    'to-xxxl']},
          { actualHeight: 1650,                     expectedAttributes: ['at-xxxl', 'from-xxs', 'from-xs', 'from-s', 'from-m', 'from-l', 'from-xl', 'from-xxl', 'from-xxxl', 'to-xxxl']},
          { actualHeight: 0,    prefix: 'data-eq-', expectedAttributes: ['data-eq-at-xxs',  'data-eq-from-xxs', 'data-eq-to-xxs',  'data-eq-to-xs',  'data-eq-to-s',   'data-eq-to-m',   'data-eq-to-l',    'data-eq-to-xl',    'data-eq-to-xxl',    'data-eq-to-xxxl']},
          { actualHeight: 400,  prefix: 'data-eq-', expectedAttributes: ['data-eq-at-s',    'data-eq-from-xxs', 'data-eq-from-xs', 'data-eq-from-s', 'data-eq-to-s',   'data-eq-to-m',   'data-eq-to-l',    'data-eq-to-xl',    'data-eq-to-xxl',    'data-eq-to-xxxl']},
          { actualHeight: 550,  prefix: 'data-eq-', expectedAttributes: ['data-eq-at-s',    'data-eq-from-xxs', 'data-eq-from-xs', 'data-eq-from-s', 'data-eq-to-s',   'data-eq-to-m',   'data-eq-to-l',    'data-eq-to-xl',    'data-eq-to-xxl',    'data-eq-to-xxxl']},
          { actualHeight: 599,  prefix: 'data-eq-', expectedAttributes: ['data-eq-at-s',    'data-eq-from-xxs', 'data-eq-from-xs', 'data-eq-from-s', 'data-eq-to-s',   'data-eq-to-m',   'data-eq-to-l',    'data-eq-to-xl',    'data-eq-to-xxl',    'data-eq-to-xxxl']},
          { actualHeight: 600,  prefix: 'data-eq-', expectedAttributes: ['data-eq-at-m',    'data-eq-from-xxs', 'data-eq-from-xs', 'data-eq-from-s', 'data-eq-from-m', 'data-eq-to-m',   'data-eq-to-l',    'data-eq-to-xl',    'data-eq-to-xxl',    'data-eq-to-xxxl']},
          { actualHeight: 1650, prefix: 'data-eq-', expectedAttributes: ['data-eq-at-xxxl', 'data-eq-from-xxs', 'data-eq-from-xs', 'data-eq-from-s', 'data-eq-from-m', 'data-eq-from-l', 'data-eq-from-xl', 'data-eq-from-xxl', 'data-eq-from-xxxl', 'data-eq-to-xxxl']},
        ];

        const allAttributes = [
          'to-xxs',
          'to-xs',
          'to-s',
          'to-m',
          'to-l',
          'to-xl',
          'to-xxl',
          'to-xxxl',
          'from-xxs',
          'from-xs',
          'from-s',
          'from-m',
          'from-l',
          'from-xl',
          'from-xxl',
          'from-xxxl',
          'at-xxs',
          'at-xs',
          'at-s',
          'at-m',
          'at-l',
          'at-xl',
          'at-xxl',
          'at-xxxl',
        ];

        cases.forEach(({ actualHeight, expectedAttributes, prefix }) => {
          // eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/restrict-template-expressions
          test(`height ${actualHeight}, prefix ${prefix}`, async function (this: TestContextCustom, assert) {
            let m;
            this.actualHeight = actualHeight;
            this.prefix = prefix;

            let allAttributesEffective = allAttributes;
            if (prefix) {
              allAttributesEffective = allAttributesEffective.map((attr) => prefix + attr);
            }

            const missingAttributes = allAttributesEffective.filter(
              (attr) => !expectedAttributes?.includes(attr)
            );

            await render(hbs`
              {{! template-lint-disable no-inline-styles style-concatenation }}
              <div
                id="test-subject"
                style="width: 300px; height: {{this.actualHeight}}px;"
                {{element-query prefix=this.prefix dimension="height"}}
              >
              </div>
            `);

            const element = document.getElementById('test-subject');
            if (!element) throw new Error('Expected element to exist');

            for (const attr of expectedAttributes) {
              await waitUntil(() => element.getAttribute(attr) != null);
              m = `Attribute ${attr} is expected to exist on the element`;
              assert.ok(true, m);
            }

            for (const attr of missingAttributes) {
              await waitUntil(() => element.getAttribute(attr) == null);
              m = `Attribute ${attr} is expected NOT to exist on the element`;
              assert.ok(true, m);
            }
          });
        });
      });

      module('custom sizes', function (/* hooks */) {
        const sizes = { small: 0, medium: 300, large: 700 };

        // prettier-ignore
        const cases = [
          { actualHeight: 299,                     expectedAttributes: ['at-small',  'from-small', 'to-small',    'to-medium',  'to-large']},
          { actualHeight: 0,                       expectedAttributes: ['at-small',  'from-small', 'to-small',    'to-medium',  'to-large']},
          { actualHeight: 150,                     expectedAttributes: ['at-small',  'from-small', 'to-small',    'to-medium',  'to-large']},
          { actualHeight: 300,                     expectedAttributes: ['at-medium', 'from-small', 'from-medium', 'to-medium',  'to-large']},
          { actualHeight: 450,                     expectedAttributes: ['at-medium', 'from-small', 'from-medium', 'to-medium',  'to-large']},
          { actualHeight: 699,                     expectedAttributes: ['at-medium', 'from-small', 'from-medium', 'to-medium',  'to-large']},
          { actualHeight: 700,                     expectedAttributes: ['at-large',  'from-small', 'from-medium', 'from-large', 'to-large']},
          { actualHeight: 299, prefix: 'data-eq-', expectedAttributes: ['data-eq-at-small',  'data-eq-from-small', 'data-eq-to-small',    'data-eq-to-medium',  'data-eq-to-large']},
          { actualHeight: 0,   prefix: 'data-eq-', expectedAttributes: ['data-eq-at-small',  'data-eq-from-small', 'data-eq-to-small',    'data-eq-to-medium',  'data-eq-to-large']},
          { actualHeight: 150, prefix: 'data-eq-', expectedAttributes: ['data-eq-at-small',  'data-eq-from-small', 'data-eq-to-small',    'data-eq-to-medium',  'data-eq-to-large']},
          { actualHeight: 300, prefix: 'data-eq-', expectedAttributes: ['data-eq-at-medium', 'data-eq-from-small', 'data-eq-from-medium', 'data-eq-to-medium',  'data-eq-to-large']},
          { actualHeight: 450, prefix: 'data-eq-', expectedAttributes: ['data-eq-at-medium', 'data-eq-from-small', 'data-eq-from-medium', 'data-eq-to-medium',  'data-eq-to-large']},
          { actualHeight: 699, prefix: 'data-eq-', expectedAttributes: ['data-eq-at-medium', 'data-eq-from-small', 'data-eq-from-medium', 'data-eq-to-medium',  'data-eq-to-large']},
          { actualHeight: 700, prefix: 'data-eq-', expectedAttributes: ['data-eq-at-large',  'data-eq-from-small', 'data-eq-from-medium', 'data-eq-from-large', 'data-eq-to-large']},
        ];

        const allAttributes = [
          'at-small',
          'at-medium',
          'at-large',
          'from-small',
          'from-medium',
          'from-large',
          'to-small',
          'to-medium',
          'to-large',
        ];

        cases.forEach(({ actualHeight, expectedAttributes, prefix }) => {
          // eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/restrict-template-expressions
          test(`height ${actualHeight}, prefix: ${prefix}`, async function (this: TestContextCustom, assert) {
            let m;
            this.actualHeight = actualHeight;
            this.sizes = sizes;
            this.prefix = prefix;

            let allAttributesEffective = allAttributes;
            if (prefix) {
              allAttributesEffective = allAttributesEffective.map((attr) => prefix + attr);
            }

            const missingAttributes = allAttributesEffective.filter(
              (attr) => !expectedAttributes?.includes(attr)
            );

            await render(hbs`
              {{! template-lint-disable no-inline-styles style-concatenation }}
              <div
                id="test-subject"
                style="width: 300px; height: {{this.actualHeight}}px;"
                {{element-query sizes=this.sizes prefix=this.prefix dimension="height"}}
              >
              </div>
            `);

            const element = document.getElementById('test-subject');
            if (!element) throw new Error('Expected element to exist');

            for (const attr of expectedAttributes) {
              await waitUntil(() => element.getAttribute(attr) != null);
              m = `Attribute ${attr} is expected to exist on the element`;
              assert.ok(true, m);
            }

            for (const attr of missingAttributes) {
              await waitUntil(() => element.getAttribute(attr) == null);
              m = `Attribute ${attr} is expected NOT to exist on the element`;
              assert.ok(true, m);
            }
          });
        });
      });
    });
  });
});
