import ElementQueryModifier, {
  SizeObject,
  RangeDirection,
} from 'ember-element-query/-private/modifier';
import { module, test } from 'qunit';
import sinon from 'sinon';

let m: string;

module('Unit | element-query modifier', function (/* hooks */) {
  // prettier-ignore
  const defaultSizeObjects: SizeObject[] = [
    {name: 'xxs',  value: 0,    index: 0},
    {name: 'xs',   value: 200,  index: 1},
    {name: 's',    value: 400,  index: 2},
    {name: 'm',    value: 600,  index: 3},
    {name: 'l',    value: 800,  index: 4},
    {name: 'xl',   value: 1000, index: 5},
    {name: 'xxl',  value: 1200, index: 6},
    {name: 'xxxl', value: 1400, index: 7},
  ];

  // prettier-ignore
  const defaultSizeObjectsHeight: SizeObject[] = [
    {name: 'xxs-height',  value: 0,    index: 0},
    {name: 'xs-height',   value: 200,  index: 1},
    {name: 's-height',    value: 400,  index: 2},
    {name: 'm-height',    value: 600,  index: 3},
    {name: 'l-height',    value: 800,  index: 4},
    {name: 'xl-height',   value: 1000, index: 5},
    {name: 'xxl-height',  value: 1200, index: 6},
    {name: 'xxxl-height', value: 1400, index: 7},
  ];

  const sizes = { small: 0, medium: 300, large: 700 };

  // prettier-ignore
  const sizeObjects = [
    { name: 'small',  value: 0, index: 0 },
    { name: 'medium', value: 300, index: 1 },
    { name: 'large',  value: 700, index: 2 },
  ];

  ///

  test('measurements', function (assert) {
    let m;
    const modifier = new ElementQueryModifier(null, { positional: [], named: {} });

    const element = {
      clientWidth: 4,
      clientHeight: 2,
    };

    modifier._element = element as HTMLElement;

    m = '_element';
    assert.equal(modifier._element, element, m);

    m = 'width';
    assert.equal(modifier.width, 4, m);

    m = 'height';
    assert.equal(modifier.height, 2, m);

    m = 'ratio';
    assert.equal(modifier.ratio, 2, m);
  });

  ///

  module('sizeObjectsWidthSortedAsc', function (/* hooks */) {
    test('default sizes', function (assert) {
      const modifier = new ElementQueryModifier(null, { positional: [], named: {} });

      assert.deepEqual(modifier.sizeObjectsWidthSortedAsc, defaultSizeObjects);
    });

    test('custom sizes', function (assert) {
      const modifier = new ElementQueryModifier(null, { positional: [], named: { sizes } });

      assert.deepEqual(modifier.sizeObjectsWidthSortedAsc, sizeObjects);
    });

    test('throws on non-numeric sizes', function (assert) {
      const modifier = new ElementQueryModifier(null, {
        positional: [],
        // @ts-expect-error Testing invalid usage
        named: { sizes: { small: 0, large: '200' } },
      });

      assert.throws(() => {
        modifier.sizeObjectsWidthSortedAsc;
      }, /element-query: Expected sizes to be positive numbers, large was "200"/);
    });

    test('throws on duplicate sizes', function (assert) {
      const modifier = new ElementQueryModifier(null, {
        positional: [],
        named: { sizes: { small: 0, medium: 200, large: 200 } },
      });

      assert.throws(() => {
        modifier.sizeObjectsWidthSortedAsc;
      }, /element-query: Sizes large and medium have identical value 200. All sizes must be unique/);
    });

    test('throws when no 0 size', function (assert) {
      const modifier = new ElementQueryModifier(null, {
        positional: [],
        named: { sizes: { small: 200, large: 400 } },
      });

      assert.throws(() => {
        modifier.sizeObjectsWidthSortedAsc;
      }, /element-query: One of the sizes must be `0`/);
    });
  });

  ///

  module('sizeObjectsHeightSortedAsc', function (/* hooks */) {
    test('default sizes', function (assert) {
      const modifier = new ElementQueryModifier(null, { positional: [], named: {} });

      assert.deepEqual(modifier.sizeObjectsHeightSortedAsc, defaultSizeObjectsHeight);
    });

    test('custom sizes', function (assert) {
      const modifier = new ElementQueryModifier(null, {
        positional: [],
        named: { sizesHeight: sizes },
      });

      assert.deepEqual(modifier.sizeObjectsHeightSortedAsc, sizeObjects);
    });

    test('throws on non-numeric sizes', function (assert) {
      const modifier = new ElementQueryModifier(null, {
        positional: [],
        // @ts-expect-error Testing invalid usage
        named: { sizesHeight: { small: 0, large: '200' } },
      });

      assert.throws(() => {
        modifier.sizeObjectsHeightSortedAsc;
      }, /element-query: Expected sizes to be positive numbers, large was "200"/);
    });

    test('throws on duplicate sizes', function (assert) {
      const modifier = new ElementQueryModifier(null, {
        positional: [],
        named: { sizesHeight: { small: 0, medium: 200, large: 200 } },
      });

      assert.throws(() => {
        modifier.sizeObjectsHeightSortedAsc;
      }, /element-query: Sizes large and medium have identical value 200. All sizes must be unique/);
    });

    test('throws when no 0 size', function (assert) {
      const modifier = new ElementQueryModifier(null, {
        positional: [],
        named: { sizesHeight: { small: 200, large: 400 } },
      });

      assert.throws(() => {
        modifier.sizeObjectsHeightSortedAsc;
      }, /element-query: One of the sizes must be `0`/);
    });
  });

  ///

  module('sizeObject__At', function (/* hooks */) {
    module('defaultSizes', function (/* hooks */) {
      // prettier-ignore
      const cases = [
        { actualDimension: 0,    expectedIndex: 0 },
        { actualDimension: 400,  expectedIndex: 2 },
        { actualDimension: 550,  expectedIndex: 2 },
        { actualDimension: 599,  expectedIndex: 2 },
        { actualDimension: 600,  expectedIndex: 3 },
        { actualDimension: 1650, expectedIndex: 7 },
        { actualDimension: -100,                   throws: true},
      ];

      cases.forEach(({ actualDimension, expectedIndex, throws }) => {
        test(`sizeObjectWidthAt ${actualDimension}`, function (assert) {
          const modifier = new ElementQueryModifier(null, { positional: [], named: {} });

          modifier._element = {
            clientWidth: actualDimension,
            clientHeight: 330,
          } as HTMLElement;

          if (expectedIndex != null && !throws) {
            assert.deepEqual(modifier.sizeObjectWidthAt, defaultSizeObjects[expectedIndex]);
          } else if (expectedIndex == null && throws) {
            assert.throws(
              () => modifier.sizeObjectWidthAt,
              /Expected dimensions not to be negative/
            );
          } else if (expectedIndex != null && throws) {
            throw new Error(
              'Malformed test case: cannot use `expectedIndex` and `throws` together.'
            );
          } else {
            throw new Error('Malformed test case: expected either `expectedIndex` or `throws`');
          }
        });

        test(`sizeObjectHeightAt ${actualDimension}`, function (assert) {
          const modifier = new ElementQueryModifier(null, {
            positional: [],
            named: {},
          });

          modifier._element = {
            clientWidth: 330,
            clientHeight: actualDimension,
          } as HTMLElement;

          if (expectedIndex != null && !throws) {
            assert.deepEqual(modifier.sizeObjectHeightAt, defaultSizeObjectsHeight[expectedIndex]);
          } else if (expectedIndex == null && throws) {
            assert.throws(
              () => modifier.sizeObjectHeightAt,
              /Expected dimensions not to be negative/
            );
          } else if (expectedIndex != null && throws) {
            throw new Error(
              'Malformed test case: cannot use `expectedIndex` and `throws` together.'
            );
          } else {
            throw new Error('Malformed test case: expected either `expectedIndex` or `throws`');
          }
        });
      });
    });

    module('custom sizes', function (/* hooks */) {
      // prettier-ignore
      const cases = [
        { actualDimension: 0,    expectedIndex: 0 },
        { actualDimension: 150,  expectedIndex: 0 },
        { actualDimension: 299,  expectedIndex: 0 },
        { actualDimension: 300,  expectedIndex: 1 },
        { actualDimension: 450,  expectedIndex: 1 },
        { actualDimension: 699,  expectedIndex: 1 },
        { actualDimension: 700,  expectedIndex: 2 },
        { actualDimension: 1650, expectedIndex: 2 },
        { actualDimension: -100,                   throws: true},
      ];

      cases.forEach(({ actualDimension, expectedIndex, throws }) => {
        test(`sizeObjectWidthAt ${actualDimension}`, function (assert) {
          const modifier = new ElementQueryModifier(null, { positional: [], named: { sizes } });

          modifier._element = {
            clientWidth: actualDimension,
            clientHeight: 330,
          } as HTMLElement;

          if (expectedIndex != null && !throws) {
            assert.deepEqual(modifier.sizeObjectWidthAt, sizeObjects[expectedIndex]);
          } else if (expectedIndex == null && throws) {
            assert.throws(
              () => modifier.sizeObjectWidthAt,
              'Expected dimensions not to be negative'
            );
          } else if (expectedIndex != null && throws) {
            throw new Error(
              'Malformed test case: cannot use `expectedIndex` and `throws` together.'
            );
          } else {
            throw new Error('Malformed test case: expected either `expectedIndex` or `throws`');
          }
        });

        test(`sizeObjectHeightAt ${actualDimension}`, function (assert) {
          const modifier = new ElementQueryModifier(null, {
            positional: [],
            named: { sizesHeight: sizes },
          });

          modifier._element = {
            clientWidth: 330,
            clientHeight: actualDimension,
          } as HTMLElement;

          if (expectedIndex != null && !throws) {
            assert.deepEqual(modifier.sizeObjectHeightAt, sizeObjects[expectedIndex]);
          } else if (expectedIndex == null && throws) {
            assert.throws(
              () => modifier.sizeObjectHeightAt,
              /Expected dimensions not to be negative/
            );
          } else if (expectedIndex != null && throws) {
            throw new Error(
              'Malformed test case: cannot use `expectedIndex` and `throws` together.'
            );
          } else {
            throw new Error('Malformed test case: expected either `expectedIndex` or `throws`');
          }
        });
      });
    });
  });

  ///

  module('sizeObject__From', function (/* hooks */) {
    module('default sizes', function (/* hooks */) {
      let m;

      // prettier-ignore
      const cases = [
        { actualWidth: 0,    expectedIndexes: [0] },
        { actualWidth: 400,  expectedIndexes: [0, 1, 2] },
        { actualWidth: 550,  expectedIndexes: [0, 1, 2] },
        { actualWidth: 599,  expectedIndexes: [0, 1, 2] },
        { actualWidth: 600,  expectedIndexes: [0, 1, 2, 3] },
        { actualWidth: 1650, expectedIndexes: [0, 1, 2, 3, 4, 5, 6, 7] },
        { actualWidth: -100,                   throws: true},
      ];

      cases.forEach(({ actualWidth, expectedIndexes, throws }) => {
        test(`sizeObjectsWidthFrom ${actualWidth}`, function (assert) {
          const modifier = new ElementQueryModifier(null, { positional: [], named: {} });

          modifier._element = {
            clientWidth: actualWidth,
            clientHeight: 330,
          } as HTMLElement;

          if (expectedIndexes && !throws) {
            const sizeObjectsWidthFrom = modifier.sizeObjectsWidthFrom;

            m = 'count';
            assert.equal(sizeObjectsWidthFrom.length, expectedIndexes.length, m);

            expectedIndexes.forEach((expectedIndex, expectedIndexIndex) => {
              m = `#${expectedIndex} size`;
              assert.deepEqual(
                sizeObjectsWidthFrom[expectedIndexIndex],
                defaultSizeObjects[expectedIndex],
                m
              );
            });
          } else if (!expectedIndexes && throws) {
            assert.throws(
              () => modifier.sizeObjectsWidthFrom,
              /Expected dimensions not to be negative/
            );
          } else if (expectedIndexes && throws) {
            throw new Error(
              'Malformed test case: cannot use `expectedIndex` and `throws` together.'
            );
          } else {
            throw new Error('Malformed test case: expected either `expectedIndex` or `throws`');
          }
        });

        test(`sizeObjectsHeightFrom ${actualWidth}`, function (assert) {
          const modifier = new ElementQueryModifier(null, {
            positional: [],
            named: {},
          });

          modifier._element = {
            clientWidth: 300,
            clientHeight: actualWidth,
          } as HTMLElement;

          if (expectedIndexes && !throws) {
            const sizeObjectsHeightFrom = modifier.sizeObjectsHeightFrom;

            m = 'count';
            assert.equal(sizeObjectsHeightFrom.length, expectedIndexes.length, m);

            expectedIndexes.forEach((expectedIndex, expectedIndexIndex) => {
              m = `#${expectedIndex} size`;
              assert.deepEqual(
                sizeObjectsHeightFrom[expectedIndexIndex],
                defaultSizeObjectsHeight[expectedIndex],
                m
              );
            });
          } else if (!expectedIndexes && throws) {
            assert.throws(
              () => modifier.sizeObjectsHeightFrom,
              /Expected dimensions not to be negative/
            );
          } else if (expectedIndexes && throws) {
            throw new Error(
              'Malformed test case: cannot use `expectedIndex` and `throws` together.'
            );
          } else {
            throw new Error('Malformed test case: expected either `expectedIndex` or `throws`');
          }
        });
      });
    });

    module('custom sizes', function (/* hooks */) {
      let m;

      // prettier-ignore
      const cases = [
        { actualWidth: 0,    expectedIndexes: [0] },
        { actualWidth: 150,  expectedIndexes: [0] },
        { actualWidth: 299,  expectedIndexes: [0] },
        { actualWidth: 300,  expectedIndexes: [0, 1] },
        { actualWidth: 450,  expectedIndexes: [0, 1] },
        { actualWidth: 699,  expectedIndexes: [0, 1] },
        { actualWidth: 700,  expectedIndexes: [0, 1, 2] },
        { actualWidth: 1650, expectedIndexes: [0, 1, 2] },
        { actualWidth: -100,                   throws: true},
      ];

      cases.forEach(({ actualWidth, expectedIndexes, throws }) => {
        test(`sizeObjectsWidthFrom ${actualWidth}`, function (assert) {
          const modifier = new ElementQueryModifier(null, { positional: [], named: { sizes } });

          modifier._element = {
            clientWidth: actualWidth,
            clientHeight: 330,
          } as HTMLElement;

          if (expectedIndexes && !throws) {
            const sizeObjectsWidthFrom = modifier.sizeObjectsWidthFrom;

            m = 'count';
            assert.equal(sizeObjectsWidthFrom.length, expectedIndexes.length, m);

            expectedIndexes.forEach((expectedIndex, expectedIndexIndex) => {
              m = `#${expectedIndex} size`;
              assert.deepEqual(
                sizeObjectsWidthFrom[expectedIndexIndex],
                sizeObjects[expectedIndex],
                m
              );
            });
          } else if (!expectedIndexes && throws) {
            assert.throws(
              () => modifier.sizeObjectsWidthFrom,
              /Expected dimensions not to be negative/
            );
          } else if (expectedIndexes && throws) {
            throw new Error(
              'Malformed test case: cannot use `expectedIndex` and `throws` together.'
            );
          } else {
            throw new Error('Malformed test case: expected either `expectedIndex` or `throws`');
          }
        });

        test(`sizeObjectsHeightFrom ${actualWidth}`, function (assert) {
          const modifier = new ElementQueryModifier(null, {
            positional: [],
            named: { sizesHeight: sizes },
          });

          modifier._element = {
            clientWidth: 300,
            clientHeight: actualWidth,
          } as HTMLElement;

          if (expectedIndexes && !throws) {
            const sizeObjectsHeightFrom = modifier.sizeObjectsHeightFrom;

            m = 'count';
            assert.equal(sizeObjectsHeightFrom.length, expectedIndexes.length, m);

            expectedIndexes.forEach((expectedIndex, expectedIndexIndex) => {
              m = `#${expectedIndex} size`;
              assert.deepEqual(
                sizeObjectsHeightFrom[expectedIndexIndex],
                sizeObjects[expectedIndex],
                m
              );
            });
          } else if (!expectedIndexes && throws) {
            assert.throws(
              () => modifier.sizeObjectsHeightFrom,
              /Expected dimensions not to be negative/
            );
          } else if (expectedIndexes && throws) {
            throw new Error(
              'Malformed test case: cannot use `expectedIndex` and `throws` together.'
            );
          } else {
            throw new Error('Malformed test case: expected either `expectedIndex` or `throws`');
          }
        });
      });
    });
  });

  ///

  module('sizeObjects__To', function (/* hooks */) {
    module('default sizes', function (/* hooks */) {
      let m;

      // prettier-ignore
      const cases = [
      { actualWidth: 0,    expectedIndexes: [0, 1, 2, 3, 4, 5, 6, 7] },
      { actualWidth: 400,  expectedIndexes: [      2, 3, 4, 5, 6, 7] },
      { actualWidth: 550,  expectedIndexes: [      2, 3, 4, 5, 6, 7] },
      { actualWidth: 599,  expectedIndexes: [      2, 3, 4, 5, 6, 7] },
      { actualWidth: 600,  expectedIndexes: [         3, 4, 5, 6, 7] },
      { actualWidth: 1650, expectedIndexes: [                     7] },
      { actualWidth: -100,                   throws: true},
    ];

      cases.forEach(({ actualWidth, expectedIndexes, throws }) => {
        test(`sizeObjectsWidthTo ${actualWidth}`, function (assert) {
          const modifier = new ElementQueryModifier(null, { positional: [], named: {} });

          modifier._element = {
            clientWidth: actualWidth,
            clientHeight: 330,
          } as HTMLElement;

          if (expectedIndexes && !throws) {
            const sizeObjectsWidthTo = modifier.sizeObjectsWidthTo;

            m = 'count';
            assert.equal(sizeObjectsWidthTo.length, expectedIndexes.length, m);

            expectedIndexes.forEach((expectedIndex, expectedIndexIndex) => {
              m = `#${expectedIndex} size`;
              assert.deepEqual(
                sizeObjectsWidthTo[expectedIndexIndex],
                defaultSizeObjects[expectedIndex],
                m
              );
            });
          } else if (!expectedIndexes && throws) {
            assert.throws(
              () => modifier.sizeObjectsWidthTo,
              /Expected dimensions not to be negative/
            );
          } else if (expectedIndexes && throws) {
            throw new Error(
              'Malformed test case: cannot use `expectedIndex` and `throws` together.'
            );
          } else {
            throw new Error('Malformed test case: expected either `expectedIndex` or `throws`');
          }
        });

        test(`sizeObjectsHeightTo ${actualWidth}`, function (assert) {
          const modifier = new ElementQueryModifier(null, {
            positional: [],
            named: { dimension: 'height' },
          });

          modifier._element = {
            clientWidth: 330,
            clientHeight: actualWidth,
          } as HTMLElement;

          if (expectedIndexes && !throws) {
            const sizeObjectsHeightTo = modifier.sizeObjectsHeightTo;

            m = 'count';
            assert.equal(sizeObjectsHeightTo.length, expectedIndexes.length, m);

            expectedIndexes.forEach((expectedIndex, expectedIndexIndex) => {
              m = `#${expectedIndex} size`;
              assert.deepEqual(
                sizeObjectsHeightTo[expectedIndexIndex],
                defaultSizeObjectsHeight[expectedIndex],
                m
              );
            });
          } else if (!expectedIndexes && throws) {
            assert.throws(
              () => modifier.sizeObjectsHeightTo,
              /Expected dimensions not to be negative/
            );
          } else if (expectedIndexes && throws) {
            throw new Error(
              'Malformed test case: cannot use `expectedIndex` and `throws` together.'
            );
          } else {
            throw new Error('Malformed test case: expected either `expectedIndex` or `throws`');
          }
        });
      });
    });

    module('custom sizes', function (/* hooks */) {
      let m;

      // prettier-ignore
      const cases = [
      { actualWidth: 0,    expectedIndexes: [0, 1, 2] },
      { actualWidth: 150,  expectedIndexes: [0, 1, 2] },
      { actualWidth: 299,  expectedIndexes: [0, 1, 2] },
      { actualWidth: 300,  expectedIndexes: [   1, 2] },
      { actualWidth: 450,  expectedIndexes: [   1, 2] },
      { actualWidth: 699,  expectedIndexes: [   1, 2] },
      { actualWidth: 700,  expectedIndexes: [      2] },
      { actualWidth: 1650, expectedIndexes: [      2] },
      { actualWidth: -100, throws: true},
    ];

      cases.forEach(({ actualWidth, expectedIndexes, throws }) => {
        test(`sizeObjectsWidthTo ${actualWidth}`, function (assert) {
          const modifier = new ElementQueryModifier(null, { positional: [], named: { sizes } });

          modifier._element = {
            clientWidth: actualWidth,
            clientHeight: 330,
          } as HTMLElement;

          if (expectedIndexes && !throws) {
            const sizeObjectsWidthTo = modifier.sizeObjectsWidthTo;

            m = 'count';
            assert.equal(sizeObjectsWidthTo.length, expectedIndexes.length, m);

            expectedIndexes.forEach((expectedIndex, expectedIndexIndex) => {
              m = `#${expectedIndex} size`;
              assert.deepEqual(
                sizeObjectsWidthTo[expectedIndexIndex],
                sizeObjects[expectedIndex],
                m
              );
            });
          } else if (!expectedIndexes && throws) {
            assert.throws(
              () => modifier.sizeObjectsWidthTo,
              /Expected dimensions not to be negative/
            );
          } else if (expectedIndexes && throws) {
            throw new Error(
              'Malformed test case: cannot use `expectedIndex` and `throws` together.'
            );
          } else {
            throw new Error('Malformed test case: expected either `expectedIndex` or `throws`');
          }
        });

        test(`sizeObjectsHeightTo ${actualWidth}`, function (assert) {
          const modifier = new ElementQueryModifier(null, {
            positional: [],
            named: { sizesHeight: sizes },
          });

          modifier._element = {
            clientWidth: 330,
            clientHeight: actualWidth,
          } as HTMLElement;

          if (expectedIndexes && !throws) {
            const sizeObjectsHeightTo = modifier.sizeObjectsHeightTo;

            m = 'count';
            assert.equal(sizeObjectsHeightTo.length, expectedIndexes.length, m);

            expectedIndexes.forEach((expectedIndex, expectedIndexIndex) => {
              m = `#${expectedIndex} size`;
              assert.deepEqual(
                sizeObjectsHeightTo[expectedIndexIndex],
                sizeObjects[expectedIndex],
                m
              );
            });
          } else if (!expectedIndexes && throws) {
            assert.throws(
              () => modifier.sizeObjectsHeightTo,
              /Expected dimensions not to be negative/
            );
          } else if (expectedIndexes && throws) {
            throw new Error(
              'Malformed test case: cannot use `expectedIndex` and `throws` together.'
            );
          } else {
            throw new Error('Malformed test case: expected either `expectedIndex` or `throws`');
          }
        });
      });
    });
  });

  ///

  module('attributesRecord, attributesWidth and attributes', function (/* hooks */) {
    // prettier-ignore
    const cases = [
      { actualWidth: 0,    expectedAttributes: ['at-xxs',  'from-xxs', 'to-xxs',  'to-xs',  'to-s',   'to-m',   'to-l',    'to-xl',    'to-xxl',    'to-xxxl']},
      { actualWidth: 400,  expectedAttributes: ['at-s',    'from-xxs', 'from-xs', 'from-s', 'to-s',   'to-m',   'to-l',    'to-xl',    'to-xxl',    'to-xxxl']},
      { actualWidth: 550,  expectedAttributes: ['at-s',    'from-xxs', 'from-xs', 'from-s', 'to-s',   'to-m',   'to-l',    'to-xl',    'to-xxl',    'to-xxxl']},
      { actualWidth: 599,  expectedAttributes: ['at-s',    'from-xxs', 'from-xs', 'from-s', 'to-s',   'to-m',   'to-l',    'to-xl',    'to-xxl',    'to-xxxl']},
      { actualWidth: 600,  expectedAttributes: ['at-m',    'from-xxs', 'from-xs', 'from-s', 'from-m', 'to-m',   'to-l',    'to-xl',    'to-xxl',    'to-xxxl']},
      { actualWidth: 1650, expectedAttributes: ['at-xxxl', 'from-xxs', 'from-xs', 'from-s', 'from-m', 'from-l', 'from-xl', 'from-xxl', 'from-xxxl', 'to-xxxl']},
      { actualWidth: -100, throws: true},
    ];

    cases.forEach(({ actualWidth, expectedAttributes, throws }) => {
      test(`default sizes, width ${actualWidth}`, function (assert) {
        const modifier = new ElementQueryModifier(null, { positional: [], named: {} });

        modifier._element = {
          clientWidth: actualWidth,
          clientHeight: 330,
        } as HTMLElement;

        if (expectedAttributes && !throws) {
          m = 'attributesWidth';
          assert.deepEqual(modifier.attributesWidth, expectedAttributes, m);

          m = 'attributes';
          assert.deepEqual(modifier.attributes, expectedAttributes, m);

          m = 'attributesRecord key count';
          // Contains width and height attributes, so doubling the count
          assert.equal(
            Object.keys(modifier.attributesRecord).length,
            expectedAttributes.length * 2,
            m
          );

          expectedAttributes.forEach((attr) => {
            m = `attributesRecord key "${attr}"`;
            assert.equal(modifier.attributesRecord[attr], true, m);
          });
        } else if (!expectedAttributes && throws) {
          m = 'attributesWidth';
          assert.throws(
            () => modifier.attributesWidth,
            /Expected dimensions not to be negative/,
            m
          );

          m = 'attributes';
          assert.throws(() => modifier.attributes, /Expected dimensions not to be negative/, m);
        } else if (expectedAttributes && throws) {
          throw new Error('Malformed test case: cannot use `expectedIndex` and `throws` together.');
        } else {
          throw new Error('Malformed test case: expected either `expectedIndex` or `throws`');
        }
      });
    });
  });

  ///

  module('attributesWidthToRemove, attributesToRemove', function (/* hooks */) {
    // prettier-ignore
    const cases = [
      { actualWidth: 0,    expectedAttributes: [          'at-xs', 'at-s', 'at-m', 'at-l', 'at-xl', 'at-xxl', 'at-xxxl', 'from-xs', 'from-s', 'from-m', 'from-l', 'from-xl', 'from-xxl', 'from-xxxl']},
      { actualWidth: 400,  expectedAttributes: ['at-xxs', 'at-xs',         'at-m', 'at-l', 'at-xl', 'at-xxl', 'at-xxxl',                      'from-m', 'from-l', 'from-xl', 'from-xxl', 'from-xxxl', 'to-xxs', 'to-xs']},
      { actualWidth: 550,  expectedAttributes: ['at-xxs', 'at-xs',         'at-m', 'at-l', 'at-xl', 'at-xxl', 'at-xxxl',                      'from-m', 'from-l', 'from-xl', 'from-xxl', 'from-xxxl', 'to-xxs', 'to-xs']},
      { actualWidth: 599,  expectedAttributes: ['at-xxs', 'at-xs',         'at-m', 'at-l', 'at-xl', 'at-xxl', 'at-xxxl',                      'from-m', 'from-l', 'from-xl', 'from-xxl', 'from-xxxl', 'to-xxs', 'to-xs']},
      { actualWidth: 600,  expectedAttributes: ['at-xxs', 'at-xs', 'at-s',         'at-l', 'at-xl', 'at-xxl', 'at-xxxl',                                'from-l', 'from-xl', 'from-xxl', 'from-xxxl', 'to-xxs', 'to-xs', 'to-s']},
      { actualWidth: 1650, expectedAttributes: ['at-xxs', 'at-xs', 'at-s', 'at-m', 'at-l', 'at-xl', 'at-xxl',                                                                                         'to-xxs', 'to-xs', 'to-s', 'to-m',  'to-l', 'to-xl', 'to-xxl']},
      { actualWidth: -100, throws: true},
    ];

    cases.forEach(({ actualWidth, expectedAttributes, throws }) => {
      test(`default sizes, width ${actualWidth}`, function (assert) {
        const modifier = new ElementQueryModifier(null, { positional: [], named: {} });

        modifier._element = {
          clientWidth: actualWidth,
          clientHeight: 330,
        } as HTMLElement;

        if (expectedAttributes && !throws) {
          m = 'attributesWidthToRemove';
          assert.deepEqual(modifier.attributesWidthToRemove, expectedAttributes, m);

          m = 'attributesToRemove';
          assert.deepEqual(modifier.attributesToRemove, expectedAttributes, m);
        } else if (!expectedAttributes && throws) {
          m = 'attributesWidthToRemove';
          assert.throws(
            () => modifier.attributesWidthToRemove,
            /Expected dimensions not to be negative/
          );

          m = 'attributesToRemove';
          assert.throws(
            () => modifier.attributesToRemove,
            /Expected dimensions not to be negative/
          );
        } else if (expectedAttributes && throws) {
          throw new Error('Malformed test case: cannot use `expectedIndex` and `throws` together.');
        } else {
          throw new Error('Malformed test case: expected either `expectedIndex` or `throws`');
        }
      });
    });
  });

  ///

  module('attributesRecord, attributesHeight and attributes', function (/* hooks */) {
    // prettier-ignore
    const cases = [
      { actualHeight: 0,    expectedAttributes: ['at-xxs-height',  'from-xxs-height', 'to-xxs-height',  'to-xs-height',  'to-s-height',   'to-m-height',   'to-l-height',    'to-xl-height',    'to-xxl-height',    'to-xxxl-height']},
      { actualHeight: 400,  expectedAttributes: ['at-s-height',    'from-xxs-height', 'from-xs-height', 'from-s-height', 'to-s-height',   'to-m-height',   'to-l-height',    'to-xl-height',    'to-xxl-height',    'to-xxxl-height']},
      { actualHeight: 550,  expectedAttributes: ['at-s-height',    'from-xxs-height', 'from-xs-height', 'from-s-height', 'to-s-height',   'to-m-height',   'to-l-height',    'to-xl-height',    'to-xxl-height',    'to-xxxl-height']},
      { actualHeight: 599,  expectedAttributes: ['at-s-height',    'from-xxs-height', 'from-xs-height', 'from-s-height', 'to-s-height',   'to-m-height',   'to-l-height',    'to-xl-height',    'to-xxl-height',    'to-xxxl-height']},
      { actualHeight: 600,  expectedAttributes: ['at-m-height',    'from-xxs-height', 'from-xs-height', 'from-s-height', 'from-m-height', 'to-m-height',   'to-l-height',    'to-xl-height',    'to-xxl-height',    'to-xxxl-height']},
      { actualHeight: 1650, expectedAttributes: ['at-xxxl-height', 'from-xxs-height', 'from-xs-height', 'from-s-height', 'from-m-height', 'from-l-height', 'from-xl-height', 'from-xxl-height', 'from-xxxl-height', 'to-xxxl-height']},
      { actualHeight: -100, throws: true},
    ];

    cases.forEach(({ actualHeight, expectedAttributes, throws }) => {
      test(`default sizes, height ${actualHeight}`, function (assert) {
        const modifier = new ElementQueryModifier(null, {
          positional: [],
          named: { dimension: 'height' },
        });

        modifier._element = {
          clientWidth: 330,
          clientHeight: actualHeight,
        } as HTMLElement;

        if (expectedAttributes && !throws) {
          m = 'attributesHeight';
          assert.deepEqual(modifier.attributesHeight, expectedAttributes, m);

          m = 'attributes';
          assert.deepEqual(modifier.attributes, expectedAttributes, m);

          m = 'attributesRecord key count';
          // Contains width and height attributes, so doubling the count
          assert.equal(
            Object.keys(modifier.attributesRecord).length,
            expectedAttributes.length * 2,
            m
          );

          expectedAttributes.forEach((attr) => {
            m = `attributesRecord key "${attr}"`;
            assert.equal(modifier.attributesRecord[attr], true, m);
          });
        } else if (!expectedAttributes && throws) {
          m = 'attributesHeight';
          assert.throws(
            () => modifier.attributesHeight,
            /Expected dimensions not to be negative/,
            m
          );

          m = 'attributes';
          assert.throws(() => modifier.attributes, /Expected dimensions not to be negative/, m);
        } else if (expectedAttributes && throws) {
          throw new Error('Malformed test case: cannot use `expectedIndex` and `throws` together.');
        } else {
          throw new Error('Malformed test case: expected either `expectedIndex` or `throws`');
        }
      });
    });
  });

  ///

  module('attributesHeightToRemove and attributesToRemove', function (/* hooks */) {
    // prettier-ignore
    const cases = [
      { actualHeight: 0,    expectedAttributes: [                 'at-xs-height', 'at-s-height', 'at-m-height', 'at-l-height', 'at-xl-height', 'at-xxl-height', 'at-xxxl-height', 'from-xs-height', 'from-s-height', 'from-m-height', 'from-l-height', 'from-xl-height', 'from-xxl-height', 'from-xxxl-height']},
      { actualHeight: 400,  expectedAttributes: ['at-xxs-height', 'at-xs-height',                'at-m-height', 'at-l-height', 'at-xl-height', 'at-xxl-height', 'at-xxxl-height',                                    'from-m-height', 'from-l-height', 'from-xl-height', 'from-xxl-height', 'from-xxxl-height', 'to-xxs-height', 'to-xs-height']},
      { actualHeight: 550,  expectedAttributes: ['at-xxs-height', 'at-xs-height',                'at-m-height', 'at-l-height', 'at-xl-height', 'at-xxl-height', 'at-xxxl-height',                                    'from-m-height', 'from-l-height', 'from-xl-height', 'from-xxl-height', 'from-xxxl-height', 'to-xxs-height', 'to-xs-height']},
      { actualHeight: 599,  expectedAttributes: ['at-xxs-height', 'at-xs-height',                'at-m-height', 'at-l-height', 'at-xl-height', 'at-xxl-height', 'at-xxxl-height',                                    'from-m-height', 'from-l-height', 'from-xl-height', 'from-xxl-height', 'from-xxxl-height', 'to-xxs-height', 'to-xs-height']},
      { actualHeight: 600,  expectedAttributes: ['at-xxs-height', 'at-xs-height', 'at-s-height',                'at-l-height', 'at-xl-height', 'at-xxl-height', 'at-xxxl-height',                                                     'from-l-height', 'from-xl-height', 'from-xxl-height', 'from-xxxl-height', 'to-xxs-height', 'to-xs-height', 'to-s-height']},
      { actualHeight: 1650, expectedAttributes: ['at-xxs-height', 'at-xs-height', 'at-s-height', 'at-m-height', 'at-l-height', 'at-xl-height', 'at-xxl-height',                                                                                                                                                 'to-xxs-height', 'to-xs-height', 'to-s-height', 'to-m-height', 'to-l-height', 'to-xl-height', 'to-xxl-height']},
      { actualHeight: -100, throws: true},
    ];

    cases.forEach(({ actualHeight, expectedAttributes, throws }) => {
      test(`default sizes, height ${actualHeight}`, function (assert) {
        const modifier = new ElementQueryModifier(null, {
          positional: [],
          named: { dimension: 'height' },
        });

        modifier._element = {
          clientWidth: 330,
          clientHeight: actualHeight,
        } as HTMLElement;

        if (expectedAttributes && !throws) {
          m = 'attributesHeightToRemove';
          assert.deepEqual(modifier.attributesHeightToRemove, expectedAttributes, m);

          m = 'attributesToRemove';
          assert.deepEqual(modifier.attributesToRemove, expectedAttributes, m);
        } else if (!expectedAttributes && throws) {
          m = 'attributesHeightToRemove';
          assert.throws(
            () => modifier.attributesHeightToRemove,
            /Expected dimensions not to be negative/,
            m
          );

          m = 'attributesToRemove';
          assert.throws(
            () => modifier.attributesToRemove,
            /Expected dimensions not to be negative/,
            m
          );
        } else if (expectedAttributes && throws) {
          throw new Error('Malformed test case: cannot use `expectedIndex` and `throws` together.');
        } else {
          throw new Error('Malformed test case: expected either `expectedIndex` or `throws`');
        }
      });
    });
  });

  ///

  module('attributes with dimensions: both', function (/* hooks */) {
    // prettier-ignore
    const cases = [
      { actualDimension: 0,    expectedAttributes: ['at-xxs',  'from-xxs', 'to-xxs',  'to-xs',  'to-s',   'to-m',   'to-l',    'to-xl',    'to-xxl',    'to-xxxl', 'at-xxs-height',  'from-xxs-height', 'to-xxs-height',  'to-xs-height',  'to-s-height',   'to-m-height',   'to-l-height',    'to-xl-height',    'to-xxl-height',    'to-xxxl-height']},
      { actualDimension: 400,  expectedAttributes: ['at-s',    'from-xxs', 'from-xs', 'from-s', 'to-s',   'to-m',   'to-l',    'to-xl',    'to-xxl',    'to-xxxl', 'at-s-height',    'from-xxs-height', 'from-xs-height', 'from-s-height', 'to-s-height',   'to-m-height',   'to-l-height',    'to-xl-height',    'to-xxl-height',    'to-xxxl-height']},
      { actualDimension: 550,  expectedAttributes: ['at-s',    'from-xxs', 'from-xs', 'from-s', 'to-s',   'to-m',   'to-l',    'to-xl',    'to-xxl',    'to-xxxl', 'at-s-height',    'from-xxs-height', 'from-xs-height', 'from-s-height', 'to-s-height',   'to-m-height',   'to-l-height',    'to-xl-height',    'to-xxl-height',    'to-xxxl-height']},
      { actualDimension: 599,  expectedAttributes: ['at-s',    'from-xxs', 'from-xs', 'from-s', 'to-s',   'to-m',   'to-l',    'to-xl',    'to-xxl',    'to-xxxl', 'at-s-height',    'from-xxs-height', 'from-xs-height', 'from-s-height', 'to-s-height',   'to-m-height',   'to-l-height',    'to-xl-height',    'to-xxl-height',    'to-xxxl-height']},
      { actualDimension: 600,  expectedAttributes: ['at-m',    'from-xxs', 'from-xs', 'from-s', 'from-m', 'to-m',   'to-l',    'to-xl',    'to-xxl',    'to-xxxl', 'at-m-height',    'from-xxs-height', 'from-xs-height', 'from-s-height', 'from-m-height', 'to-m-height',   'to-l-height',    'to-xl-height',    'to-xxl-height',    'to-xxxl-height']},
      { actualDimension: 1650, expectedAttributes: ['at-xxxl', 'from-xxs', 'from-xs', 'from-s', 'from-m', 'from-l', 'from-xl', 'from-xxl', 'from-xxxl', 'to-xxxl', 'at-xxxl-height', 'from-xxs-height', 'from-xs-height', 'from-s-height', 'from-m-height', 'from-l-height', 'from-xl-height', 'from-xxl-height', 'from-xxxl-height', 'to-xxxl-height']},
      { actualDimension: -100, throws: true},
    ];

    cases.forEach(({ actualDimension, expectedAttributes, throws }) => {
      test(`default sizes, height ${actualDimension}`, function (assert) {
        const modifier = new ElementQueryModifier(null, {
          positional: [],
          named: { dimension: 'both' },
        });

        modifier._element = {
          clientWidth: actualDimension,
          clientHeight: actualDimension,
        } as HTMLElement;

        if (expectedAttributes && !throws) {
          m = 'attributes';
          assert.deepEqual(modifier.attributes, expectedAttributes, m);

          m = 'attributesRecord key count';
          assert.equal(Object.keys(modifier.attributesRecord).length, expectedAttributes.length, m);

          expectedAttributes.forEach((attr) => {
            m = `attributesRecord key "${attr}"`;
            assert.equal(modifier.attributesRecord[attr], true, m);
          });
        } else if (!expectedAttributes && throws) {
          assert.throws(() => modifier.attributes, /Expected dimensions not to be negative/);
        } else if (expectedAttributes && throws) {
          throw new Error('Malformed test case: cannot use `expectedIndex` and `throws` together.');
        } else {
          throw new Error('Malformed test case: expected either `expectedIndex` or `throws`');
        }
      });
    });
  });

  ///

  module('attributesToRemove with dimensions: both', function (/* hooks */) {
    // prettier-ignore
    const cases = [
      { actualDimension: 0,    expectedAttributes: [          'at-xs', 'at-s', 'at-m', 'at-l', 'at-xl', 'at-xxl', 'at-xxxl', 'from-xs', 'from-s', 'from-m', 'from-l', 'from-xl', 'from-xxl', 'from-xxxl',                                                                                 'at-xs-height', 'at-s-height', 'at-m-height', 'at-l-height', 'at-xl-height', 'at-xxl-height', 'at-xxxl-height', 'from-xs-height', 'from-s-height', 'from-m-height', 'from-l-height', 'from-xl-height', 'from-xxl-height', 'from-xxxl-height']},
      { actualDimension: 400,  expectedAttributes: ['at-xxs', 'at-xs',         'at-m', 'at-l', 'at-xl', 'at-xxl', 'at-xxxl',                      'from-m', 'from-l', 'from-xl', 'from-xxl', 'from-xxxl', 'to-xxs', 'to-xs',                                             'at-xxs-height', 'at-xs-height',                'at-m-height', 'at-l-height', 'at-xl-height', 'at-xxl-height', 'at-xxxl-height',                                    'from-m-height', 'from-l-height', 'from-xl-height', 'from-xxl-height', 'from-xxxl-height', 'to-xxs-height', 'to-xs-height']},
      { actualDimension: 550,  expectedAttributes: ['at-xxs', 'at-xs',         'at-m', 'at-l', 'at-xl', 'at-xxl', 'at-xxxl',                      'from-m', 'from-l', 'from-xl', 'from-xxl', 'from-xxxl', 'to-xxs', 'to-xs',                                             'at-xxs-height', 'at-xs-height',                'at-m-height', 'at-l-height', 'at-xl-height', 'at-xxl-height', 'at-xxxl-height',                                    'from-m-height', 'from-l-height', 'from-xl-height', 'from-xxl-height', 'from-xxxl-height', 'to-xxs-height', 'to-xs-height']},
      { actualDimension: 599,  expectedAttributes: ['at-xxs', 'at-xs',         'at-m', 'at-l', 'at-xl', 'at-xxl', 'at-xxxl',                      'from-m', 'from-l', 'from-xl', 'from-xxl', 'from-xxxl', 'to-xxs', 'to-xs',                                             'at-xxs-height', 'at-xs-height',                'at-m-height', 'at-l-height', 'at-xl-height', 'at-xxl-height', 'at-xxxl-height',                                    'from-m-height', 'from-l-height', 'from-xl-height', 'from-xxl-height', 'from-xxxl-height', 'to-xxs-height', 'to-xs-height']},
      { actualDimension: 600,  expectedAttributes: ['at-xxs', 'at-xs', 'at-s',         'at-l', 'at-xl', 'at-xxl', 'at-xxxl',                                'from-l', 'from-xl', 'from-xxl', 'from-xxxl', 'to-xxs', 'to-xs', 'to-s',                                     'at-xxs-height', 'at-xs-height', 'at-s-height',                'at-l-height', 'at-xl-height', 'at-xxl-height', 'at-xxxl-height',                                                     'from-l-height', 'from-xl-height', 'from-xxl-height', 'from-xxxl-height', 'to-xxs-height', 'to-xs-height', 'to-s-height']},
      { actualDimension: 1650, expectedAttributes: ['at-xxs', 'at-xs', 'at-s', 'at-m', 'at-l', 'at-xl', 'at-xxl',                                                                                         'to-xxs', 'to-xs', 'to-s', 'to-m',  'to-l', 'to-xl', 'to-xxl', 'at-xxs-height', 'at-xs-height', 'at-s-height', 'at-m-height', 'at-l-height', 'at-xl-height', 'at-xxl-height',                                                                                                                                                 'to-xxs-height', 'to-xs-height', 'to-s-height', 'to-m-height', 'to-l-height', 'to-xl-height', 'to-xxl-height']},
      { actualDimension: -100, throws: true},
    ];

    cases.forEach(({ actualDimension, expectedAttributes, throws }) => {
      test(`default sizes, height ${actualDimension}`, function (assert) {
        const modifier = new ElementQueryModifier(null, {
          positional: [],
          named: { dimension: 'both' },
        });

        modifier._element = {
          clientWidth: actualDimension,
          clientHeight: actualDimension,
        } as HTMLElement;

        if (expectedAttributes && !throws) {
          assert.deepEqual(modifier.attributesToRemove, expectedAttributes);
        } else if (!expectedAttributes && throws) {
          assert.throws(
            () => modifier.attributesToRemove,
            /Expected dimensions not to be negative/
          );
        } else if (expectedAttributes && throws) {
          throw new Error('Malformed test case: cannot use `expectedIndex` and `throws` together.');
        } else {
          throw new Error('Malformed test case: expected either `expectedIndex` or `throws`');
        }
      });
    });
  });

  ///

  module('convertSizeToAttribute', function (/* hooks */) {
    // prettier-ignore
    const cases = [
      { size: 'foo', rangeDirection: 'at',                       expected: 'at-foo'},
      { size: 'foo', rangeDirection: 'from',                     expected: 'from-foo'},
      { size: 'foo', rangeDirection: 'to',                       expected: 'to-foo'},
      { size: 'foo', rangeDirection: 'at',   prefix: 'data-eq-', expected: 'data-eq-at-foo'},
      { size: 'foo', rangeDirection: 'from', prefix: 'data-eq-', expected: 'data-eq-from-foo'},
      { size: 'foo', rangeDirection: 'to',   prefix: 'data-eq-', expected: 'data-eq-to-foo'},
    ];

    cases.forEach(
      ({
        size,
        rangeDirection,
        prefix,
        expected,
      }: {
        size: string;
        rangeDirection: RangeDirection;
        prefix?: string;
        expected: string;
      }) => {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        test(`size: ${size}, range direction: ${rangeDirection}, prefix: ${prefix}`, function (assert) {
          const modifier = new ElementQueryModifier(null, { positional: [], named: { prefix } });

          assert.equal(modifier.convertSizeToAttribute(size, rangeDirection), expected);
        });
      }
    );

    test('Throws when prefix is not a string', function (assert) {
      // @ts-expect-error Testing faulty usage
      const modifier = new ElementQueryModifier(null, { positional: [], named: { prefix: false } });

      assert.throws(() => {
        modifier.convertSizeToAttribute('xss', 'at');
      });
    });
  });

  ///

  test('applyAttributesToElement', function (assert) {
    let m;
    const modifier = new ElementQueryModifier(null, { positional: [], named: {} });

    const setAttribute = sinon.spy();
    const removeAttribute = sinon.spy();

    modifier._element = {
      clientWidth: 400,
      clientHeight: 330,
      setAttribute: setAttribute,
      removeAttribute: removeAttribute,
    } as unknown as HTMLElement;

    Object.defineProperty(modifier, 'attributes', {
      value: ['foo', 'bar', 'baz'],
    });

    Object.defineProperty(modifier, 'attributesToRemove', {
      value: ['quux', 'zomg'],
    });

    modifier.applyAttributesToElement();

    m = 'setAttribute call count';
    assert.equal(setAttribute.callCount, 3, m);

    m = 'setAttribute first call args';
    assert.deepEqual(setAttribute.firstCall.args, ['foo', '']);

    m = 'setAttribute second call args';
    assert.deepEqual(setAttribute.secondCall.args, ['bar', '']);

    m = 'setAttribute third call args';
    assert.deepEqual(setAttribute.thirdCall.args, ['baz', '']);

    m = 'setAtremoveAttributetribute call count';
    assert.equal(removeAttribute.callCount, 2, m);

    m = 'removeAttribute first call args';
    assert.deepEqual(removeAttribute.firstCall.args, ['quux']);

    m = 'removeAttribute second call args';
    assert.deepEqual(removeAttribute.secondCall.args, ['zomg']);
  });
});
