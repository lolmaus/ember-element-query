import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, waitUntil } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import sinon, { SinonSpy } from 'sinon';
import { TestContext } from 'ember-test-helpers';

interface TestContextCustom extends TestContext {
  callback?: SinonSpy;
  actualWidth?: number;
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
    // prettier-ignore
    const cases = [
      { actualWidth: 0,    expectedAttributes: ['at-xxs',  'from-xxs', 'to-xxs',  'to-xs',  'to-s',   'to-m',   'to-l',    'to-xl',    'to-xxl',    'to-xxxl']},
      { actualWidth: 400,  expectedAttributes: ['at-s',    'from-xxs', 'from-xs', 'from-s', 'to-s',   'to-m',   'to-l',    'to-xl',    'to-xxl',    'to-xxxl']},
      { actualWidth: 550,  expectedAttributes: ['at-s',    'from-xxs', 'from-xs', 'from-s', 'to-s',   'to-m',   'to-l',    'to-xl',    'to-xxl',    'to-xxxl']},
      { actualWidth: 599,  expectedAttributes: ['at-s',    'from-xxs', 'from-xs', 'from-s', 'to-s',   'to-m',   'to-l',    'to-xl',    'to-xxl',    'to-xxxl']},
      { actualWidth: 600,  expectedAttributes: ['at-m',    'from-xxs', 'from-xs', 'from-s', 'from-m', 'to-m',   'to-l',    'to-xl',    'to-xxl',    'to-xxxl']},
      { actualWidth: 1650, expectedAttributes: ['at-xxxl', 'from-xxs', 'from-xs', 'from-s', 'from-m', 'from-l', 'from-xl', 'from-xxl', 'from-xxxl', 'to-xxxl']},
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

    cases.forEach(({ actualWidth, expectedAttributes }) => {
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      test(`default sizes, width ${actualWidth}`, async function (this: TestContextCustom, assert) {
        let m;
        this.actualWidth = actualWidth;

        const missingAttributes = allAttributes.filter(
          (attr) => !expectedAttributes?.includes(attr)
        );

        await render(hbs`
          {{! template-lint-disable no-inline-styles style-concatenation }}
          <div
            id="test-subject"
            style="width: {{this.actualWidth}}px; height: 100px;"
            {{element-query}}
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
