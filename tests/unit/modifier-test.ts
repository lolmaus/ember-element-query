import ElementQueryModifier, {
  SizeObject,
  RangeDirection,
} from 'ember-element-query/-private/modifier';
import { module, test } from 'qunit';
import sinon from 'sinon';

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

    modifier._element = element;

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

  module('dimension', function () {
    test('dimension default', function (assert) {
      const modifier = new ElementQueryModifier(null, { positional: [], named: {} });

      modifier._element = {
        clientWidth: 770,
        clientHeight: 330,
      };

      assert.equal(modifier.dimension, 770);
    });

    test('dimension height', function (assert) {
      const modifier = new ElementQueryModifier(null, {
        positional: [],
        named: { dimension: 'height' },
      });

      modifier._element = {
        clientWidth: 770,
        clientHeight: 330,
      };

      assert.equal(modifier.dimension, 330);
    });
  });

  ///

  module('sizeObjectsSortedAsc', function (/* hooks */) {
    test('default sizes', function (assert) {
      const modifier = new ElementQueryModifier(null, { positional: [], named: {} });

      assert.deepEqual(modifier.sizeObjectsSortedAsc, defaultSizeObjects);
    });
  });

  ///

  module('sizeObjectAt', function (/* hooks */) {
    module('defaultSizes', function (/* hooks */) {
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
        test(`width ${actualWidth}`, function (assert) {
          const modifier = new ElementQueryModifier(null, { positional: [], named: {} });

          modifier._element = {
            clientWidth: actualWidth,
            clientHeight: 330,
          };

          if (expectedIndex != null && !throws) {
            assert.deepEqual(modifier.sizeObjectAt, defaultSizeObjects[expectedIndex]);
          } else if (expectedIndex == null && throws) {
            assert.throws(() => modifier.sizeObjectAt, 'Expected dimensions not to be negative');
          } else if (expectedIndex != null && throws) {
            throw new Error(
              'Malformed test case: cannot use `expectedIndex` and `throws` together.'
            );
          } else {
            throw new Error('Malformed test case: expected either `expectedIndex` or `throws`');
          }
        });

        test(`height ${actualWidth}`, function (assert) {
          const modifier = new ElementQueryModifier(null, {
            positional: [],
            named: { dimension: 'height' },
          });

          modifier._element = {
            clientWidth: 330,
            clientHeight: actualWidth,
          };

          if (expectedIndex != null && !throws) {
            assert.deepEqual(modifier.sizeObjectAt, defaultSizeObjects[expectedIndex]);
          } else if (expectedIndex == null && throws) {
            assert.throws(() => modifier.sizeObjectAt, 'Expected dimensions not to be negative');
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
        { actualWidth: 0,    expectedIndex: 0 },
        { actualWidth: 150,  expectedIndex: 0 },
        { actualWidth: 299,  expectedIndex: 0 },
        { actualWidth: 300,  expectedIndex: 1 },
        { actualWidth: 450,  expectedIndex: 1 },
        { actualWidth: 699,  expectedIndex: 1 },
        { actualWidth: 700,  expectedIndex: 2 },
        { actualWidth: 1650, expectedIndex: 2 },
        { actualWidth: -100,                   throws: true},
      ];

      cases.forEach(({ actualWidth, expectedIndex, throws }) => {
        test(`width ${actualWidth}`, function (assert) {
          const modifier = new ElementQueryModifier(null, { positional: [], named: { sizes } });

          modifier._element = {
            clientWidth: actualWidth,
            clientHeight: 330,
          };

          if (expectedIndex != null && !throws) {
            assert.deepEqual(modifier.sizeObjectAt, sizeObjects[expectedIndex]);
          } else if (expectedIndex == null && throws) {
            assert.throws(() => modifier.sizeObjectAt, 'Expected dimensions not to be negative');
          } else if (expectedIndex != null && throws) {
            throw new Error(
              'Malformed test case: cannot use `expectedIndex` and `throws` together.'
            );
          } else {
            throw new Error('Malformed test case: expected either `expectedIndex` or `throws`');
          }
        });

        test(`height ${actualWidth}`, function (assert) {
          const modifier = new ElementQueryModifier(null, {
            positional: [],
            named: { dimension: 'height', sizes },
          });

          modifier._element = {
            clientWidth: 330,
            clientHeight: actualWidth,
          };

          if (expectedIndex != null && !throws) {
            assert.deepEqual(modifier.sizeObjectAt, sizeObjects[expectedIndex]);
          } else if (expectedIndex == null && throws) {
            assert.throws(() => modifier.sizeObjectAt, 'Expected height not to be negative');
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

  module('sizeObjectsFrom', function (/* hooks */) {
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
        test(`width ${actualWidth}`, function (assert) {
          const modifier = new ElementQueryModifier(null, { positional: [], named: {} });

          modifier._element = {
            clientWidth: actualWidth,
            clientHeight: 330,
          };

          if (expectedIndexes && !throws) {
            const sizeObjectsFrom = modifier.sizeObjectsFrom;

            m = 'count';
            assert.equal(sizeObjectsFrom.length, expectedIndexes.length, m);

            expectedIndexes.forEach((expectedIndex, expectedIndexIndex) => {
              m = `#${expectedIndex} size`;
              assert.deepEqual(
                sizeObjectsFrom[expectedIndexIndex],
                defaultSizeObjects[expectedIndex],
                m
              );
            });
          } else if (!expectedIndexes && throws) {
            assert.throws(() => modifier.sizeObjectsFrom, 'Expected dimensions not to be negative');
          } else if (expectedIndexes && throws) {
            throw new Error(
              'Malformed test case: cannot use `expectedIndex` and `throws` together.'
            );
          } else {
            throw new Error('Malformed test case: expected either `expectedIndex` or `throws`');
          }
        });

        test(`height ${actualWidth}`, function (assert) {
          const modifier = new ElementQueryModifier(null, {
            positional: [],
            named: { dimension: 'height' },
          });

          modifier._element = {
            clientWidth: 300,
            clientHeight: actualWidth,
          };

          if (expectedIndexes && !throws) {
            const sizeObjectsFrom = modifier.sizeObjectsFrom;

            m = 'count';
            assert.equal(sizeObjectsFrom.length, expectedIndexes.length, m);

            expectedIndexes.forEach((expectedIndex, expectedIndexIndex) => {
              m = `#${expectedIndex} size`;
              assert.deepEqual(
                sizeObjectsFrom[expectedIndexIndex],
                defaultSizeObjects[expectedIndex],
                m
              );
            });
          } else if (!expectedIndexes && throws) {
            assert.throws(() => modifier.sizeObjectsFrom, 'Expected dimensions not to be negative');
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
        test(`width ${actualWidth}`, function (assert) {
          const modifier = new ElementQueryModifier(null, { positional: [], named: { sizes } });

          modifier._element = {
            clientWidth: actualWidth,
            clientHeight: 330,
          };

          if (expectedIndexes && !throws) {
            const sizeObjectsFrom = modifier.sizeObjectsFrom;

            m = 'count';
            assert.equal(sizeObjectsFrom.length, expectedIndexes.length, m);

            expectedIndexes.forEach((expectedIndex, expectedIndexIndex) => {
              m = `#${expectedIndex} size`;
              assert.deepEqual(sizeObjectsFrom[expectedIndexIndex], sizeObjects[expectedIndex], m);
            });
          } else if (!expectedIndexes && throws) {
            assert.throws(() => modifier.sizeObjectsFrom, 'Expected dimensions not to be negative');
          } else if (expectedIndexes && throws) {
            throw new Error(
              'Malformed test case: cannot use `expectedIndex` and `throws` together.'
            );
          } else {
            throw new Error('Malformed test case: expected either `expectedIndex` or `throws`');
          }
        });

        test(`height ${actualWidth}`, function (assert) {
          const modifier = new ElementQueryModifier(null, {
            positional: [],
            named: { dimension: 'height', sizes },
          });

          modifier._element = {
            clientWidth: 300,
            clientHeight: actualWidth,
          };

          if (expectedIndexes && !throws) {
            const sizeObjectsFrom = modifier.sizeObjectsFrom;

            m = 'count';
            assert.equal(sizeObjectsFrom.length, expectedIndexes.length, m);

            expectedIndexes.forEach((expectedIndex, expectedIndexIndex) => {
              m = `#${expectedIndex} size`;
              assert.deepEqual(sizeObjectsFrom[expectedIndexIndex], sizeObjects[expectedIndex], m);
            });
          } else if (!expectedIndexes && throws) {
            assert.throws(() => modifier.sizeObjectsFrom, 'Expected dimensions not to be negative');
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

  module('sizeObjectsTo', function (/* hooks */) {
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
        test(`width ${actualWidth}`, function (assert) {
          const modifier = new ElementQueryModifier(null, { positional: [], named: {} });

          modifier._element = {
            clientWidth: actualWidth,
            clientHeight: 330,
          };

          if (expectedIndexes && !throws) {
            const sizeObjectsTo = modifier.sizeObjectsTo;

            m = 'count';
            assert.equal(sizeObjectsTo.length, expectedIndexes.length, m);

            expectedIndexes.forEach((expectedIndex, expectedIndexIndex) => {
              m = `#${expectedIndex} size`;
              assert.deepEqual(
                sizeObjectsTo[expectedIndexIndex],
                defaultSizeObjects[expectedIndex],
                m
              );
            });
          } else if (!expectedIndexes && throws) {
            assert.throws(() => modifier.sizeObjectsTo, 'Expected dimensions not to be negative');
          } else if (expectedIndexes && throws) {
            throw new Error(
              'Malformed test case: cannot use `expectedIndex` and `throws` together.'
            );
          } else {
            throw new Error('Malformed test case: expected either `expectedIndex` or `throws`');
          }
        });

        test(`height ${actualWidth}`, function (assert) {
          const modifier = new ElementQueryModifier(null, {
            positional: [],
            named: { dimension: 'height' },
          });

          modifier._element = {
            clientWidth: 330,
            clientHeight: actualWidth,
          };

          if (expectedIndexes && !throws) {
            const sizeObjectsTo = modifier.sizeObjectsTo;

            m = 'count';
            assert.equal(sizeObjectsTo.length, expectedIndexes.length, m);

            expectedIndexes.forEach((expectedIndex, expectedIndexIndex) => {
              m = `#${expectedIndex} size`;
              assert.deepEqual(
                sizeObjectsTo[expectedIndexIndex],
                defaultSizeObjects[expectedIndex],
                m
              );
            });
          } else if (!expectedIndexes && throws) {
            assert.throws(() => modifier.sizeObjectsTo, 'Expected dimensions not to be negative');
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
        test(`width ${actualWidth}`, function (assert) {
          const modifier = new ElementQueryModifier(null, { positional: [], named: { sizes } });

          modifier._element = {
            clientWidth: actualWidth,
            clientHeight: 330,
          };

          if (expectedIndexes && !throws) {
            const sizeObjectsTo = modifier.sizeObjectsTo;

            m = 'count';
            assert.equal(sizeObjectsTo.length, expectedIndexes.length, m);

            expectedIndexes.forEach((expectedIndex, expectedIndexIndex) => {
              m = `#${expectedIndex} size`;
              assert.deepEqual(sizeObjectsTo[expectedIndexIndex], sizeObjects[expectedIndex], m);
            });
          } else if (!expectedIndexes && throws) {
            assert.throws(() => modifier.sizeObjectsTo, 'Expected dimensions not to be negative');
          } else if (expectedIndexes && throws) {
            throw new Error(
              'Malformed test case: cannot use `expectedIndex` and `throws` together.'
            );
          } else {
            throw new Error('Malformed test case: expected either `expectedIndex` or `throws`');
          }
        });

        test(`height ${actualWidth}`, function (assert) {
          const modifier = new ElementQueryModifier(null, {
            positional: [],
            named: { dimension: 'height', sizes },
          });

          modifier._element = {
            clientWidth: 330,
            clientHeight: actualWidth,
          };

          if (expectedIndexes && !throws) {
            const sizeObjectsTo = modifier.sizeObjectsTo;

            m = 'count';
            assert.equal(sizeObjectsTo.length, expectedIndexes.length, m);

            expectedIndexes.forEach((expectedIndex, expectedIndexIndex) => {
              m = `#${expectedIndex} size`;
              assert.deepEqual(sizeObjectsTo[expectedIndexIndex], sizeObjects[expectedIndex], m);
            });
          } else if (!expectedIndexes && throws) {
            assert.throws(() => modifier.sizeObjectsTo, 'Expected dimensions not to be negative');
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

  module('attributes', function (/* hooks */) {
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
        };

        if (expectedAttributes && !throws) {
          assert.deepEqual(modifier.attributes, expectedAttributes);
        } else if (!expectedAttributes && throws) {
          assert.throws(() => modifier.sizeObjectsFrom, 'Expected dimensions not to be negative');
        } else if (expectedAttributes && throws) {
          throw new Error('Malformed test case: cannot use `expectedIndex` and `throws` together.');
        } else {
          throw new Error('Malformed test case: expected either `expectedIndex` or `throws`');
        }
      });
    });
  });

  ///

  module('attributesToRemove', function (/* hooks */) {
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
        };

        if (expectedAttributes && !throws) {
          assert.deepEqual(modifier.attributesToRemove, expectedAttributes);
        } else if (!expectedAttributes && throws) {
          assert.throws(() => modifier.sizeObjectsFrom, 'Expected dimensions not to be negative');
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
    };

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
