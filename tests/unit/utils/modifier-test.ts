import ElementQueryModifier, { Size } from 'ember-element-query/modifiers/element-query';
import { module, test } from 'qunit';

module('Unit | element-query modifier', function (/* hooks */) {
  // prettier-ignore
  const defaultSizes: Size[] = [
    {name: 'xxs',  value: 0,    index: 0},
    {name: 'xs',   value: 200,  index: 1},
    {name: 's',    value: 400,  index: 2},
    {name: 'm',    value: 600,  index: 3},
    {name: 'l',    value: 800,  index: 4},
    {name: 'xl',   value: 1000, index: 5},
    {name: 'xxl',  value: 1200, index: 6},
    {name: 'xxxl', value: 1400, index: 7},
  ];

  ///

  module('sizesSortedAsc', function (/* hooks */) {
    test('default sizes', function (assert) {
      const modifier = new ElementQueryModifier(null, { positional: [], named: {} });

      assert.deepEqual(modifier.sizesSortedAsc, defaultSizes);
    });
  });

  ///

  module('currentSize', function (/* hooks */) {
    // prettier-ignore
    const cases = [
      { actualWidth: 0,    expectedIndex: 0 },
      { actualWidth: 400,  expectedIndex: 2 },
      { actualWidth: 550,  expectedIndex: 2 },
      { actualWidth: 599,  expectedIndex: 2 },
      { actualWidth: 600,  expectedIndex: 3 },
      { actualWidth: 1650, expectedIndex: 7 },
      { actualWidth: -100,                   throws: true},
    ];

    cases.forEach(({ actualWidth, expectedIndex, throws }) => {
      test(`default sizes, width ${actualWidth}`, function (assert) {
        const modifier = new ElementQueryModifier(null, { positional: [], named: {} });

        modifier._element = {
          clientWidth: actualWidth,
          clientHeight: 330,
        };

        if (expectedIndex != null && !throws) {
          assert.deepEqual(modifier.currentSize, defaultSizes[expectedIndex]);
        } else if (expectedIndex == null && throws) {
          assert.throws(() => modifier.currentSize, 'Expected width not to be negative');
        } else if (expectedIndex != null && throws) {
          throw new Error('Malformed test case: cannot use `expectedInded` and `throws` together.');
        } else {
          throw new Error('Malformed test case: expected either `expectedInded` or `throws`');
        }
      });
    });
  });

  ///

  module('atAttribute', function (/* hooks */) {
    // prettier-ignore
    const cases = [
      { actualWidth: 0,    expectedAttr: 'at-xxs' },
      { actualWidth: 550,  expectedAttr: 'at-s' },
      { actualWidth: 1650, expectedAttr: 'at-xxxl' },
    ];

    cases.forEach(({ actualWidth, expectedAttr }) => {
      test(`default sizes, width ${actualWidth}`, function (assert) {
        const modifier = new ElementQueryModifier(null, { positional: [], named: {} });

        modifier._element = {
          clientWidth: actualWidth,
          clientHeight: 330,
        };

        assert.equal(modifier.atAttribute, expectedAttr);
      });
    });
  });
});
