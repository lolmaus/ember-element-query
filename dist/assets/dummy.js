"use strict";



define('dummy/app', ['exports', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Application = Ember.Application;


  var App = Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('dummy/components/e-q', ['exports', 'ember-element-query/components/e-q'], function (exports, _eQ) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _eQ.default;
    }
  });
});
define('dummy/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
define('dummy/components/fork-me', ['exports', 'ember-fork-me/components/fork-me'], function (exports, _forkMe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _forkMe.default;
    }
  });
});
define('dummy/components/markdown-to-html', ['exports', 'ember-cli-showdown/components/markdown-to-html'], function (exports, _markdownToHtml) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _markdownToHtml.default;
    }
  });
});
define('dummy/ember-element-query/tests/addon.lint-test', [], function () {
  'use strict';

  describe('ESLint | addon', function () {

    it('ember-element-query/-private/throttle-before-after.js', function () {
      // test passed
    });

    it('ember-element-query/components/e-q.js', function () {
      // test passed
    });

    it('ember-element-query/constants.js', function () {
      // test passed
    });

    it('ember-element-query/index.js', function () {
      // test passed
    });

    it('ember-element-query/mixins/dynamic-attributes.js', function () {
      // test passed
    });

    it('ember-element-query/mixins/element-query.js', function () {
      // test passed
    });

    it('ember-element-query/mixins/event-forwarding.js', function () {
      // test passed
    });

    it('ember-element-query/services/eq.js', function () {
      // test passed
    });
  });
});
define('dummy/ember-element-query/tests/app.lint-test', [], function () {
  'use strict';

  describe('ESLint | app', function () {

    it('ember-element-query/components/e-q.js', function () {
      // test passed
    });

    it('ember-element-query/services/eq.js', function () {
      // test passed
    });
  });
});
define('dummy/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
define('dummy/helpers/append', ['exports', 'ember-composable-helpers/helpers/append'], function (exports, _append) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _append.default;
    }
  });
  Object.defineProperty(exports, 'append', {
    enumerable: true,
    get: function () {
      return _append.append;
    }
  });
});
define('dummy/helpers/array', ['exports', 'ember-composable-helpers/helpers/array'], function (exports, _array) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _array.default;
    }
  });
  Object.defineProperty(exports, 'array', {
    enumerable: true,
    get: function () {
      return _array.array;
    }
  });
});
define('dummy/helpers/chunk', ['exports', 'ember-composable-helpers/helpers/chunk'], function (exports, _chunk) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _chunk.default;
    }
  });
  Object.defineProperty(exports, 'chunk', {
    enumerable: true,
    get: function () {
      return _chunk.chunk;
    }
  });
});
define('dummy/helpers/compact', ['exports', 'ember-composable-helpers/helpers/compact'], function (exports, _compact) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _compact.default;
    }
  });
  Object.defineProperty(exports, 'compact', {
    enumerable: true,
    get: function () {
      return _compact.compact;
    }
  });
});
define('dummy/helpers/compute', ['exports', 'ember-composable-helpers/helpers/compute'], function (exports, _compute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _compute.default;
    }
  });
  Object.defineProperty(exports, 'compute', {
    enumerable: true,
    get: function () {
      return _compute.compute;
    }
  });
});
define('dummy/helpers/contains', ['exports', 'ember-composable-helpers/helpers/contains'], function (exports, _contains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contains.default;
    }
  });
  Object.defineProperty(exports, 'contains', {
    enumerable: true,
    get: function () {
      return _contains.contains;
    }
  });
});
define('dummy/helpers/dec', ['exports', 'ember-composable-helpers/helpers/dec'], function (exports, _dec) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dec.default;
    }
  });
  Object.defineProperty(exports, 'dec', {
    enumerable: true,
    get: function () {
      return _dec.dec;
    }
  });
});
define('dummy/helpers/drop', ['exports', 'ember-composable-helpers/helpers/drop'], function (exports, _drop) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _drop.default;
    }
  });
  Object.defineProperty(exports, 'drop', {
    enumerable: true,
    get: function () {
      return _drop.drop;
    }
  });
});
define('dummy/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
define('dummy/helpers/filter-by', ['exports', 'ember-composable-helpers/helpers/filter-by'], function (exports, _filterBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _filterBy.default;
    }
  });
  Object.defineProperty(exports, 'filterBy', {
    enumerable: true,
    get: function () {
      return _filterBy.filterBy;
    }
  });
});
define('dummy/helpers/filter', ['exports', 'ember-composable-helpers/helpers/filter'], function (exports, _filter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _filter.default;
    }
  });
  Object.defineProperty(exports, 'filter', {
    enumerable: true,
    get: function () {
      return _filter.filter;
    }
  });
});
define('dummy/helpers/find-by', ['exports', 'ember-composable-helpers/helpers/find-by'], function (exports, _findBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _findBy.default;
    }
  });
  Object.defineProperty(exports, 'findBy', {
    enumerable: true,
    get: function () {
      return _findBy.findBy;
    }
  });
});
define('dummy/helpers/flatten', ['exports', 'ember-composable-helpers/helpers/flatten'], function (exports, _flatten) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flatten.default;
    }
  });
  Object.defineProperty(exports, 'flatten', {
    enumerable: true,
    get: function () {
      return _flatten.flatten;
    }
  });
});
define('dummy/helpers/group-by', ['exports', 'ember-composable-helpers/helpers/group-by'], function (exports, _groupBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _groupBy.default;
    }
  });
  Object.defineProperty(exports, 'groupBy', {
    enumerable: true,
    get: function () {
      return _groupBy.groupBy;
    }
  });
});
define('dummy/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
define('dummy/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
define('dummy/helpers/has-next', ['exports', 'ember-composable-helpers/helpers/has-next'], function (exports, _hasNext) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasNext.default;
    }
  });
  Object.defineProperty(exports, 'hasNext', {
    enumerable: true,
    get: function () {
      return _hasNext.hasNext;
    }
  });
});
define('dummy/helpers/has-previous', ['exports', 'ember-composable-helpers/helpers/has-previous'], function (exports, _hasPrevious) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasPrevious.default;
    }
  });
  Object.defineProperty(exports, 'hasPrevious', {
    enumerable: true,
    get: function () {
      return _hasPrevious.hasPrevious;
    }
  });
});
define('dummy/helpers/inc', ['exports', 'ember-composable-helpers/helpers/inc'], function (exports, _inc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inc.default;
    }
  });
  Object.defineProperty(exports, 'inc', {
    enumerable: true,
    get: function () {
      return _inc.inc;
    }
  });
});
define('dummy/helpers/intersect', ['exports', 'ember-composable-helpers/helpers/intersect'], function (exports, _intersect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _intersect.default;
    }
  });
  Object.defineProperty(exports, 'intersect', {
    enumerable: true,
    get: function () {
      return _intersect.intersect;
    }
  });
});
define('dummy/helpers/invoke', ['exports', 'ember-composable-helpers/helpers/invoke'], function (exports, _invoke) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _invoke.default;
    }
  });
  Object.defineProperty(exports, 'invoke', {
    enumerable: true,
    get: function () {
      return _invoke.invoke;
    }
  });
});
define('dummy/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
define('dummy/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('dummy/helpers/join', ['exports', 'ember-composable-helpers/helpers/join'], function (exports, _join) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _join.default;
    }
  });
  Object.defineProperty(exports, 'join', {
    enumerable: true,
    get: function () {
      return _join.join;
    }
  });
});
define('dummy/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
define('dummy/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
define('dummy/helpers/map-by', ['exports', 'ember-composable-helpers/helpers/map-by'], function (exports, _mapBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mapBy.default;
    }
  });
  Object.defineProperty(exports, 'mapBy', {
    enumerable: true,
    get: function () {
      return _mapBy.mapBy;
    }
  });
});
define('dummy/helpers/map', ['exports', 'ember-composable-helpers/helpers/map'], function (exports, _map) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _map.default;
    }
  });
  Object.defineProperty(exports, 'map', {
    enumerable: true,
    get: function () {
      return _map.map;
    }
  });
});
define('dummy/helpers/next', ['exports', 'ember-composable-helpers/helpers/next'], function (exports, _next) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _next.default;
    }
  });
  Object.defineProperty(exports, 'next', {
    enumerable: true,
    get: function () {
      return _next.next;
    }
  });
});
define('dummy/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
define('dummy/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
define('dummy/helpers/object-at', ['exports', 'ember-composable-helpers/helpers/object-at'], function (exports, _objectAt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _objectAt.default;
    }
  });
  Object.defineProperty(exports, 'objectAt', {
    enumerable: true,
    get: function () {
      return _objectAt.objectAt;
    }
  });
});
define('dummy/helpers/optional', ['exports', 'ember-composable-helpers/helpers/optional'], function (exports, _optional) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _optional.default;
    }
  });
  Object.defineProperty(exports, 'optional', {
    enumerable: true,
    get: function () {
      return _optional.optional;
    }
  });
});
define('dummy/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
define('dummy/helpers/pipe-action', ['exports', 'ember-composable-helpers/helpers/pipe-action'], function (exports, _pipeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pipeAction.default;
    }
  });
});
define('dummy/helpers/pipe', ['exports', 'ember-composable-helpers/helpers/pipe'], function (exports, _pipe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pipe.default;
    }
  });
  Object.defineProperty(exports, 'pipe', {
    enumerable: true,
    get: function () {
      return _pipe.pipe;
    }
  });
});
define('dummy/helpers/previous', ['exports', 'ember-composable-helpers/helpers/previous'], function (exports, _previous) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _previous.default;
    }
  });
  Object.defineProperty(exports, 'previous', {
    enumerable: true,
    get: function () {
      return _previous.previous;
    }
  });
});
define('dummy/helpers/queue', ['exports', 'ember-composable-helpers/helpers/queue'], function (exports, _queue) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _queue.default;
    }
  });
  Object.defineProperty(exports, 'queue', {
    enumerable: true,
    get: function () {
      return _queue.queue;
    }
  });
});
define('dummy/helpers/range', ['exports', 'ember-composable-helpers/helpers/range'], function (exports, _range) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _range.default;
    }
  });
  Object.defineProperty(exports, 'range', {
    enumerable: true,
    get: function () {
      return _range.range;
    }
  });
});
define('dummy/helpers/reduce', ['exports', 'ember-composable-helpers/helpers/reduce'], function (exports, _reduce) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _reduce.default;
    }
  });
  Object.defineProperty(exports, 'reduce', {
    enumerable: true,
    get: function () {
      return _reduce.reduce;
    }
  });
});
define('dummy/helpers/reject-by', ['exports', 'ember-composable-helpers/helpers/reject-by'], function (exports, _rejectBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _rejectBy.default;
    }
  });
  Object.defineProperty(exports, 'rejectBy', {
    enumerable: true,
    get: function () {
      return _rejectBy.rejectBy;
    }
  });
});
define('dummy/helpers/repeat', ['exports', 'ember-composable-helpers/helpers/repeat'], function (exports, _repeat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _repeat.default;
    }
  });
  Object.defineProperty(exports, 'repeat', {
    enumerable: true,
    get: function () {
      return _repeat.repeat;
    }
  });
});
define('dummy/helpers/reverse', ['exports', 'ember-composable-helpers/helpers/reverse'], function (exports, _reverse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _reverse.default;
    }
  });
  Object.defineProperty(exports, 'reverse', {
    enumerable: true,
    get: function () {
      return _reverse.reverse;
    }
  });
});
define('dummy/helpers/shuffle', ['exports', 'ember-composable-helpers/helpers/shuffle'], function (exports, _shuffle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _shuffle.default;
    }
  });
  Object.defineProperty(exports, 'shuffle', {
    enumerable: true,
    get: function () {
      return _shuffle.shuffle;
    }
  });
});
define('dummy/helpers/slice', ['exports', 'ember-composable-helpers/helpers/slice'], function (exports, _slice) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slice.default;
    }
  });
  Object.defineProperty(exports, 'slice', {
    enumerable: true,
    get: function () {
      return _slice.slice;
    }
  });
});
define('dummy/helpers/sort-by', ['exports', 'ember-composable-helpers/helpers/sort-by'], function (exports, _sortBy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sortBy.default;
    }
  });
  Object.defineProperty(exports, 'sortBy', {
    enumerable: true,
    get: function () {
      return _sortBy.sortBy;
    }
  });
});
define('dummy/helpers/take', ['exports', 'ember-composable-helpers/helpers/take'], function (exports, _take) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _take.default;
    }
  });
  Object.defineProperty(exports, 'take', {
    enumerable: true,
    get: function () {
      return _take.take;
    }
  });
});
define('dummy/helpers/toggle-action', ['exports', 'ember-composable-helpers/helpers/toggle-action'], function (exports, _toggleAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggleAction.default;
    }
  });
});
define('dummy/helpers/toggle', ['exports', 'ember-composable-helpers/helpers/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
  Object.defineProperty(exports, 'toggle', {
    enumerable: true,
    get: function () {
      return _toggle.toggle;
    }
  });
});
define("dummy/helpers/trim-markdown", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.trimMarkdown = trimMarkdown;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var helper = Ember.Helper.helper;
  function trimMarkdown(_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        str = _ref2[0];

    var lines = str.split("\n");

    if (!lines[0].length) lines.shift();

    var indentation = lines[0].match(/^\s*/)[0].replace(/\s/g, "\\s");
    var regex = new RegExp("^" + indentation);

    return lines.map(function (line) {
      return line.replace(regex, "");
    }).join("\n");
  }

  exports.default = helper(trimMarkdown);
});
define('dummy/helpers/union', ['exports', 'ember-composable-helpers/helpers/union'], function (exports, _union) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _union.default;
    }
  });
  Object.defineProperty(exports, 'union', {
    enumerable: true,
    get: function () {
      return _union.union;
    }
  });
});
define('dummy/helpers/without', ['exports', 'ember-composable-helpers/helpers/without'], function (exports, _without) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _without.default;
    }
  });
  Object.defineProperty(exports, 'without', {
    enumerable: true,
    get: function () {
      return _without.without;
    }
  });
});
define('dummy/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/export-application-global', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/showdown', ['exports', 'showdown', 'npm:highlight.js'], function (exports, _showdown, _npmHighlight) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    _showdown.default.setFlavor('github');
    _showdown.default.setOption('ghCodeBlocks', true);
    _showdown.default.setOption('tablesHeaderId', true);
    _showdown.default.setOption('tables', true);
    _showdown.default.setOption('strikethrough', true);

    _showdown.default.extension('hljs', function () {
      function htmlunencode(text) {
        return text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
      }

      function replacement(wholeMatch, match, left, right) {
        var regex = /class="(.+?)"/;

        // unescape match to prevent double escaping
        match = htmlunencode(match);
        var newLeft = regex.test(left) ? left.replace(regex, 'class="$1 hljs"') : left.replace(/>$/, ' class="hljs">');

        return newLeft + _npmHighlight.default.highlightAuto(match).value + right;
      }

      return {
        type: 'output',
        filter: function filter(text, converter, options) {
          // use new showdown's regexp engine to conditionally parse code blocks
          var left = '<pre.*?><code.*?>';
          var right = '</code></pre>';
          var flags = 'g';
          return _showdown.default.helper.replaceRecursiveRegExp(text, replacement, left, right, flags);
        }
      };
    });
  }

  exports.default = {
    name: 'showdown',
    initialize: initialize
  };
});
define("dummy/pods/application/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "pkXyd9Ed", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"route-application\"],[7],[0,\"\\n  \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[25,\"fork-me\",[\"https://github.com/lolmaus/ember-element-query/\"],null],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/application/template.hbs" } });
});
define("dummy/pods/bar/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "xRDlluZy", "block": "{\"symbols\":[],\"statements\":[[4,\"link-to\",[\"foo\"],null,{\"statements\":[[0,\"foo\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/bar/template.hbs" } });
});
define('dummy/pods/components/story-pagination/component', ['exports', 'dummy/pods/components/story-pagination/template'], function (exports, _template) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend({
    currentPage: null,
    pages: null,

    layout: _template.default
  });
});
define("dummy/pods/components/story-pagination/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "SkvHCHm0", "block": "{\"symbols\":[\"i\"],\"statements\":[[4,\"unless\",[[25,\"lte\",[[20,[\"currentPage\"]],0],null]],null,{\"statements\":[[0,\"  \"],[4,\"link-to\",[[25,\"query-params\",null,[[\"page\"],[[25,\"dec\",[[20,[\"currentPage\"]]],null]]]]],null,{\"statements\":[[0,\"←Back\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"each\",[[20,[\"pages\"]]],null,{\"statements\":[[0,\"  \"],[4,\"link-to\",[[25,\"query-params\",null,[[\"page\"],[[19,1,[]]]]]],[[\"class\"],[[25,\"concat\",[\"story-pagination-number\",[25,\"if\",[[25,\"eq\",[[19,1,[]],[20,[\"currentPage\"]]],null],\" -current\"],null]],null]]],{\"statements\":[[1,[19,1,[]],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"],[4,\"unless\",[[25,\"gte\",[[20,[\"currentPage\"]],[20,[\"pages\",\"lastObject\"]]],null]],null,{\"statements\":[[0,\"  \"],[4,\"link-to\",[[25,\"query-params\",null,[[\"page\"],[[25,\"inc\",[[20,[\"currentPage\"]]],null]]]]],null,{\"statements\":[[0,\"Next→\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/components/story-pagination/template.hbs" } });
});
define('dummy/pods/components/x-block/component', ['exports', 'ember-element-query/mixins/element-query', 'dummy/pods/components/x-block/template'], function (exports, _elementQuery, _template) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend(_elementQuery.default, {

    // ----- Element Query -----
    eqSlices: {
      0: 'vertical',
      500: 'horizontal'
    },

    // ----- Overridden properties -----
    classNames: ['xBlock'],
    layout: _template.default
  });
});
define("dummy/pods/components/x-block/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "n57lTCQo", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"xBlock-image-wrapper\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"xBlock-image-wrapper-intrinsic-ratio\"],[7],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\\n\\n\"],[6,\"div\"],[9,\"class\",\"xBlock-content\"],[7],[0,\"\\n\"],[4,\"if\",[[22,1]],null,{\"statements\":[[0,\"    \"],[11,1],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[6,\"p\"],[7],[0,\"\\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna.\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"p\"],[7],[0,\"\\n      Mauris sit amet massa vitae tortor. Iaculis nunc sed augue lacus viverra vitae congue.\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[8]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/components/x-block/template.hbs" } });
});
define('dummy/pods/components/x-ember-forwarding/component', ['exports', 'dummy/pods/components/x-ember-forwarding/template', 'ember-element-query/mixins/element-query'], function (exports, _template, _elementQuery) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  var computed = Ember.computed;
  exports.default = Component.extend(_elementQuery.default, {
    layout: _template.default,

    classNames: ['demo-component'],

    name: null,

    effectiveName: computed('name', 'eqParent.effectiveName', function () {
      var name = this.get('name');
      var parentName = this.get('eqParent.effectiveName');

      return parentName ? parentName + '-' + name : name;
    }),

    eqHandleResize: function eqHandleResize() {
      console.log('Handle resize!', this.get('effectiveName'));

      this._super.apply(this, arguments);
    },
    didInsertParent: function didInsertParent() {
      this._super.apply(this, arguments);

      console.log('didInsertParent', this.get('effectiveName'));
    },
    willDestroyParent: function willDestroyParent() {
      this._super.apply(this, arguments);

      console.log('willDestroyParent', this.get('effectiveName'));
    }
  });
});
define("dummy/pods/components/x-ember-forwarding/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3W7AWgJF", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"p\"],[9,\"class\",\"name\"],[7],[0,\"\\n  \"],[1,[18,\"effectiveName\"],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"children\"],[7],[0,\"\\n\\n\"],[4,\"y-ember-forwarding\",null,[[\"name\"],[\"y1\"]],{\"statements\":[[0,\"    \"],[1,[25,\"y-ember-forwarding\",null,[[\"name\"],[\"y2\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[11,1],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/components/x-ember-forwarding/template.hbs" } });
});
define('dummy/pods/components/y-ember-forwarding/component', ['exports', 'dummy/pods/components/y-ember-forwarding/template', 'ember-element-query/mixins/element-query'], function (exports, _template, _elementQuery) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  var computed = Ember.computed;
  exports.default = Component.extend(_elementQuery.default, {
    layout: _template.default,

    classNames: ['demo-component'],

    name: null,

    effectiveName: computed('name', 'eqParent.effectiveName', function () {
      var name = this.get('name');
      var parentName = this.get('eqParent.effectiveName');

      return parentName ? parentName + '-' + name : name;
    }),

    eqHandleResize: function eqHandleResize() {
      console.log('Handle resize!', this.get('effectiveName'));

      this._super.apply(this, arguments);
    },
    didInsertParent: function didInsertParent() {
      this._super.apply(this, arguments);

      console.log('didInsertParent', this.get('effectiveName'));
    },
    willDestroyParent: function willDestroyParent() {
      this._super.apply(this, arguments);

      console.log('willDestroyParent', this.get('effectiveName'));
    }
  });
});
define("dummy/pods/components/y-ember-forwarding/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rvLnpdl2", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"p\"],[9,\"class\",\"name\"],[7],[0,\"\\n  \"],[1,[18,\"effectiveName\"],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"children\"],[7],[0,\"\\n  \"],[11,1],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/components/y-ember-forwarding/template.hbs" } });
});
define("dummy/pods/foo/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "+9wcyMEJ", "block": "{\"symbols\":[],\"statements\":[[4,\"link-to\",[\"bar\"],null,{\"statements\":[[0,\"bar\"]],\"parameters\":[]},null],[0,\"\\n\\n\"],[4,\"x-ember-forwarding\",null,[[\"name\"],[\"x1\"]],{\"statements\":[[0,\"  \"],[1,[25,\"x-ember-forwarding\",null,[[\"name\"],[\"x2\"]]],false],[0,\"\\n  \"],[1,[25,\"y-ember-forwarding\",null,[[\"name\"],[\"y1\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\\n\"],[4,\"x-ember-forwarding\",null,[[\"name\"],[\"x3\"]],{\"statements\":[[0,\"  \"],[1,[25,\"y-ember-forwarding\",null,[[\"name\"],[\"y2\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[1,[25,\"y-ember-forwarding\",null,[[\"name\"],[\"y3\"]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/foo/template.hbs" } });
});
define('dummy/pods/index/controller', ['exports', 'ember-macro-helpers/computed', 'lodash'], function (exports, _computed, _lodash) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Controller = Ember.Controller;
  var observer = Ember.observer;
  var A = Ember.A;
  var service = Ember.inject.service;
  exports.default = Controller.extend({

    // ----- Services -----
    eq: service('eq'),

    // ----- Overridden properties -----
    queryParams: ['page'],
    page: '0',

    // ----- Static properties -----
    maxPage: 13,
    isSidebarExpanded: false,

    // ----- Computed properties -----
    currentPage: (0, _computed.default)('page', function (page) {
      return parseInt(page, 10);
    }),
    pages: (0, _computed.default)('maxPage', function (max) {
      return A(_lodash.default.times(max + 1));
    }),

    // ----- Observers -----
    scrollToTop: observer('page', function () {
      return window.scrollTo(0, 0);
    }),

    resizeOnSidebarToggle: observer('isSidebarExpanded', function () {
      var service = this.get('eq');
      service.triggerResize();
    })

  });
});
define("dummy/pods/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "X9j9vjQ/", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"route-index\"],[7],[0,\"\\n\\n  \"],[1,[25,\"markdown-to-html\",[[25,\"trim-markdown\",[\"\\n    # A tale about media queries and responsive components\\n  \"],null]],[[\"extensions\",\"class\"],[\"hljs\",\"pr-copy pr-p\"]]],false],[0,\"\\n\\n\\n\\n  \"],[1,[25,\"story-pagination\",null,[[\"pages\",\"currentPage\"],[[20,[\"pages\"]],[20,[\"currentPage\"]]]]],false],[0,\"\\n\\n\\n\\n\"],[4,\"if\",[[25,\"eq\",[[20,[\"currentPage\"]],0],null]],null,{\"statements\":[[0,\"\\n    \"],[1,[25,\"markdown-to-html\",[[25,\"trim-markdown\",[\"\\n      I'm gonna tell you a story about media queries.\\n\\n      ## TL/DR\\n\\n      Skip to [11. Enter element query](#/?page=11) to see it in action.\\n\\n      ## The narration is broken into numbered sections\\n\\n      I'm showing some style code samples in each section. Those code samples aren't explicit, only relevants parts are shown. You'll have to imagine the rest.\\n\\n      And I'm not repeating style code listings in every section. Styles described in one section also apply to subsequent sections, until overridden.\\n\\n      For example, section #3 applies a media query with `min-width: 500px`. And section #5 applies `min-width: 1000px`. This means that `min-width: 500px` is also assumed to be applied to section #4.\\n\\n      ## View this on desktop!\\n\\n      This demo is supposed to be viewed on a very large screen and in a desktop browser. Try zooming out!\\n\\n      Next: [1. We start with a simple component](#/?page=1)\\n    \"],null]],[[\"extensions\",\"class\"],[\"hljs\",\"pr-copy pr-p\"]]],false],[0,\"\\n\\n\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"currentPage\"]],1],null]],null,{\"statements\":[[0,\"\\n    \"],[1,[25,\"markdown-to-html\",[[25,\"trim-markdown\",[\"\\n      ## 1. We start with a simple component\\n\\n      It's a block with an image and some text. Useful for previewing articles, displaying news, etc. It could look like this:\\n    \"],null]],[[\"extensions\",\"class\"],[\"hljs\",\"pr-copy pr-p\"]]],false],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"route-index-demo _1\"],[7],[0,\"\\n      \"],[1,[25,\"x-block\",null,[[\"eqEnabled\",\"class\"],[false,\"_static\"]]],false],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[1,[25,\"markdown-to-html\",[[25,\"trim-markdown\",[\"\\n      Next: [2. It doesn't look good when wide](#/?page=2)\\n    \"],null]],[[\"extensions\",\"class\"],[\"hljs\",\"pr-copy pr-p\"]]],false],[0,\"\\n\\n\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"currentPage\"]],2],null]],null,{\"statements\":[[0,\"\\n\\n\\n    \"],[1,[25,\"markdown-to-html\",[[25,\"trim-markdown\",[\"\\n      ## 2. It doesn't look good when wide\\n\\n      The width of our component in the previous example has been limited by 200px.\\n\\n      When the width isn't restricted, the image becomes too large:\\n    \"],null]],[[\"extensions\",\"class\"],[\"hljs\",\"pr-copy pr-p\"]]],false],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"route-index-demo\"],[7],[0,\"\\n      \"],[1,[25,\"x-block\",null,[[\"eqEnabled\",\"class\"],[false,\"_static\"]]],false],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[1,[25,\"markdown-to-html\",[[25,\"trim-markdown\",[\"\\n      Next: [3. Let's try to tame it with media queries](#/?page=3)\\n    \"],null]],[[\"extensions\",\"class\"],[\"hljs\",\"pr-copy pr-p\"]]],false],[0,\"\\n\\n\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"currentPage\"]],3],null]],null,{\"statements\":[[0,\"\\n\\n\\n    \"],[1,[25,\"markdown-to-html\",[[25,\"trim-markdown\",[\"\\n      ## 3. Let's try to tame it with media queries\\n\\n      I want this component to respond by switching from a horizontal to a vertical layout when its width reaches the breakpoint of 500px\\n\\n      Let's try a simple media query:\\n\\n\\n\\n      ```css\\n      @media (max-width: 564px) {\\n        .xBlock .xBlock-image-wrapper {\\n          margin-bottom : 1rem;\\n        }\\n      }\\n\\n      @media (min-width: 565px) {\\n        .xBlock {\\n          display : flex;\\n        }\\n\\n        .xBlock .xBlock-image-wrapper {\\n          width        : 30%;\\n          flex-shrink  : 0;\\n          margin-right : 1rem;\\n        }\\n      }\\n      ```\\n\\n      Note: I used 565px instead of 500px because I also had to account for padding of containers.\\n\\n      I also included extra 15px for the scrollbar. **Depending on your scrollbar size, the result will be a little bit off**.\\n\\n      Try fiddling with window width to see how it responds:\\n    \"],null]],[[\"extensions\",\"class\"],[\"hljs\",\"pr-copy pr-p\"]]],false],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"route-index-demo _3\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"route-index-grid _ruler\"],[7],[0,\"\\n        \"],[1,[25,\"x-block\",null,[[\"eqEnabled\"],[false]]],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[1,[25,\"markdown-to-html\",[[25,\"trim-markdown\",[\"\\n      I've added a vertial line exactly at 500px, to see whether the component should respond.\\n\\n      This will be our **primary requirement: whenever the component is 500px or larger, it use horizonal layout. When smaller than 500px, use a vertical layout**.\\n\\n      So far, so good!\\n\\n      Next: [4. Now let's try to put our element into a two-column grid](#/?page=4)\\n    \"],null]],[[\"extensions\",\"class\"],[\"hljs\",\"pr-copy pr-p\"]]],false],[0,\"\\n\\n\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"currentPage\"]],4],null]],null,{\"statements\":[[0,\"\\n\\n\\n    \"],[1,[25,\"markdown-to-html\",[[25,\"trim-markdown\",[\"\\n      ## 4. Now let's try to put our element into a two-column grid.\\n\\n      We'll try to do it in a straightforward way:\\n\\n      ```css\\n      .grid {\\n        display   : flex;\\n        flex-wrap : wrap;\\n      }\\n\\n      .grid .xBlock {\\n        width         : 49%;\\n        margin-bottom : 2%;\\n      }\\n\\n      .grid .xBlock:nth-child(2n+1) {\\n        margin-right : 2%;\\n      }\\n      ```\\n\\n      Try fiddling with page width.\\n    \"],null]],[[\"extensions\",\"class\"],[\"hljs\",\"pr-copy pr-p\"]]],false],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"route-index-demo _4\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"route-index-grid _ruler\"],[7],[0,\"\\n        \"],[1,[25,\"x-block\",null,[[\"eqEnabled\"],[false]]],false],[0,\"\\n        \"],[1,[25,\"x-block\",null,[[\"eqEnabled\"],[false]]],false],[0,\"\\n        \"],[1,[25,\"x-block\",null,[[\"eqEnabled\"],[false]]],false],[0,\"\\n        \"],[1,[25,\"x-block\",null,[[\"eqEnabled\"],[false]]],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[1,[25,\"markdown-to-html\",[[25,\"trim-markdown\",[\"\\n      Notice something? Now our components respond incorrectly!\\n\\n      When page width is over 500px, every block switches to horizontal layout. But as components are in a two-column grid, each component's width is only about 300px when it responds.\\n\\n      Next: [5. It's easy to fix, right?](#/?page=5)\\n    \"],null]],[[\"extensions\",\"class\"],[\"hljs\",\"pr-copy pr-p\"]]],false],[0,\"\\n\\n\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"currentPage\"]],5],null]],null,{\"statements\":[[0,\"\\n\\n\\n    \"],[1,[25,\"markdown-to-html\",[[25,\"trim-markdown\",[\"\\n      ## 5. It's easy to fix, right?\\n\\n      All we need to do is to update our media query to use double width, 1000 instead of 500:\\n\\n      ```css\\n      @media (max-width: 1064px) {\\n      ```\\n\\n      ```css\\n      @media (min-width: 1065px) {\\n      ```\\n\\n      Again, I used more than 1000 to account for padding and scrollbar.\\n\\n      Now everything is back to normal:\\n    \"],null]],[[\"extensions\",\"class\"],[\"hljs\",\"pr-copy pr-p\"]]],false],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"route-index-demo _5\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"route-index-grid _ruler\"],[7],[0,\"\\n        \"],[1,[25,\"x-block\",null,[[\"eqEnabled\"],[false]]],false],[0,\"\\n        \"],[1,[25,\"x-block\",null,[[\"eqEnabled\"],[false]]],false],[0,\"\\n        \"],[1,[25,\"x-block\",null,[[\"eqEnabled\"],[false]]],false],[0,\"\\n        \"],[1,[25,\"x-block\",null,[[\"eqEnabled\"],[false]]],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[1,[25,\"markdown-to-html\",[[25,\"trim-markdown\",[\"\\n      Next: [6. But now we're told to make our grid responsive too](#/?page=6)\\n    \"],null]],[[\"extensions\",\"class\"],[\"hljs\",\"pr-copy pr-p\"]]],false],[0,\"\\n\\n\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"currentPage\"]],6],null]],null,{\"statements\":[[0,\"\\n\\n\\n    \"],[1,[25,\"markdown-to-html\",[[25,\"trim-markdown\",[\"\\n      ## 6. But now we're told to make our grid responsive too\\n\\n      By \\\"responsive grid\\\" I mean that the amount of columns in a grid should by dynamic, depending on page width.\\n\\n      We can easily do it with `flex-basis`:\\n\\n      ```css\\n      .grid {\\n        display: flex;\\n        flex-wrap: wrap;\\n        margin-right  : -2%;\\n        margin-bottom : -2%;\\n      }\\n\\n      .grid .xBlock {\\n        flex-basis    : 450px;\\n        flex-grow     : 1;\\n        margin-bottom : 2%;\\n        margin-right  : 2%;\\n      }\\n      ```\\n\\n      `flex-basis: 450px` means: put as many 450px-wide components per row as the container can fit. For example, when the container is 1000px wide, two components will fit, and there will be 100px left.\\n\\n      Then `flex-grow: 1` makes components stretch to occupy all remaining width.\\n\\n      This means that depending on container width, each element's width will be either below or above 500px -- a breakpoint that we've agreed upon in #3.\\n    \"],null]],[[\"extensions\",\"class\"],[\"hljs\",\"pr-copy pr-p\"]]],false],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"route-index-demo _6\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"route-index-grid _ruler\"],[7],[0,\"\\n        \"],[1,[25,\"x-block\",null,[[\"eqEnabled\"],[false]]],false],[0,\"\\n        \"],[1,[25,\"x-block\",null,[[\"eqEnabled\"],[false]]],false],[0,\"\\n        \"],[1,[25,\"x-block\",null,[[\"eqEnabled\"],[false]]],false],[0,\"\\n        \"],[1,[25,\"x-block\",null,[[\"eqEnabled\"],[false]]],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[1,[25,\"markdown-to-html\",[[25,\"trim-markdown\",[\"\\n      You can see that when component's width passes the breakpoint, the component doesn't respond!\\n\\n      Well, that's because we had told our components to respond at 1000px, but now we need them to be smarter.\\n\\n      Next: [7. We'll need multiple media query ranges to fix this](#/?page=7)\\n    \"],null]],[[\"extensions\",\"class\"],[\"hljs\",\"pr-copy pr-p\"]]],false],[0,\"\\n\\n\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"currentPage\"]],7],null]],null,{\"statements\":[[0,\"\\n\\n\\n    \"],[1,[25,\"markdown-to-html\",[[25,\"trim-markdown\",[\"\\n      ## 7. We'll need multiple media query ranges to fix this\\n\\n      Let's revise what we've got so far:\\n\\n      * `flex-basis` tries to fit as much 450px-wide components per grid row as possible.\\n      * `flex-grow` then makes components fluid, making them occupy the remaining width in every row.\\n\\n      This means that ss the user adjusts the width of the page from narrowest to widest, the width of every component varies from around 400px to 600px and back multiple times.\\n\\n      According to our primary requirement from section #3, we need to make them respond at 500px.\\n\\n      But media queries only allow us to apply styles based on *window* width, not *element* width. This means that we'll need more elaborate media queries with ranges:\\n\\n      ```css\\n      @media\\n        (max-width:  549px),\\n        (min-width:  970px) and (max-width: 1069px),\\n        (min-width: 1459px) and (max-width: 1616px),\\n        (min-width: 1969px) and (max-width: 2181px)\\n      {\\n        /* Horizontal layout */\\n      }\\n      ```\\n\\n      ```css\\n      @media\\n        (min-width:  550px) and (max-width: 969px),\\n        (min-width: 1070px) and (max-width: 1458px),\\n        (min-width: 1617px) and (max-width: 1968px),\\n        (min-width: 2182px)\\n      {\\n        /* Vertical layout */\\n      }\\n      ```\\n\\n      This gets quite unwieldy already.\\n\\n      But even worse, it's very imprecise. I failed to figure out the math to generate exact breakpoints, so I just measured approximate values with a screen ruler.\\n\\n      The component responds incorrectly near the breakpoints, but mostly it works fine:\\n    \"],null]],[[\"extensions\",\"class\"],[\"hljs\",\"pr-copy pr-p\"]]],false],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"route-index-demo _7\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"route-index-grid _ruler\"],[7],[0,\"\\n        \"],[1,[25,\"x-block\",null,[[\"eqEnabled\"],[false]]],false],[0,\"\\n        \"],[1,[25,\"x-block\",null,[[\"eqEnabled\"],[false]]],false],[0,\"\\n        \"],[1,[25,\"x-block\",null,[[\"eqEnabled\"],[false]]],false],[0,\"\\n        \"],[1,[25,\"x-block\",null,[[\"eqEnabled\"],[false]]],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[1,[25,\"markdown-to-html\",[[25,\"trim-markdown\",[\"\\n      OK, so it mostly works fine.\\n\\n      You've probably noticed that components in the last row don't respond correctly, but let's ignore that for now.\\n\\n      Can this get even worse?\\n\\n      Next: [8. Now let's try adding a collapsible sidebar!](#/?page=8)\\n    \"],null]],[[\"extensions\",\"class\"],[\"hljs\",\"pr-copy pr-p\"]]],false],[0,\"\\n\\n\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"currentPage\"]],8],null]],null,{\"statements\":[[0,\"\\n\\n\\n    \"],[1,[25,\"markdown-to-html\",[[25,\"trim-markdown\",[\"\\n      ## 8. Now let's try adding a collapsible sidebar!\\n\\n      :trollface:\\n\\n      When the sidebar is expanded, our media queries will no longer be correct:\\n    \"],null]],[[\"extensions\",\"class\"],[\"hljs\",\"pr-copy pr-p\"]]],false],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"route-index-demo _8\"],[7],[0,\"\\n\\n      \"],[6,\"p\"],[9,\"class\",\"pr-p\"],[7],[0,\"\\n        \"],[6,\"a\"],[9,\"href\",\"\"],[3,\"action\",[[19,0,[]],[25,\"toggle\",[\"isSidebarExpanded\",[19,0,[]]],null]]],[7],[0,\"\\n          \"],[1,[25,\"if\",[[20,[\"isSidebarExpanded\"]],\"Collapse\",\"Expand\"],null],false],[0,\" the sidebar\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\\n      \"],[6,\"div\"],[10,\"class\",[26,[\"\\n          route-index-sidebar-wrapper\\n          \",[25,\"if\",[[20,[\"isSidebarExpanded\"]],\"-expanded\",\"-collapsed\"],null],\"\\n        \"]]],[7],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"route-index-sidebar\"],[7],[0,\"\\n          The sidebar\\n        \"],[8],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"route-index-grid _ruler\"],[7],[0,\"\\n          \"],[1,[25,\"x-block\",null,[[\"eqEnabled\"],[false]]],false],[0,\"\\n          \"],[1,[25,\"x-block\",null,[[\"eqEnabled\"],[false]]],false],[0,\"\\n          \"],[1,[25,\"x-block\",null,[[\"eqEnabled\"],[false]]],false],[0,\"\\n          \"],[1,[25,\"x-block\",null,[[\"eqEnabled\"],[false]]],false],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[1,[25,\"markdown-to-html\",[[25,\"trim-markdown\",[\"\\n      Next: [9. Fixing the media queries for the sidebar](#/?page=9)\\n    \"],null]],[[\"extensions\",\"class\"],[\"hljs\",\"pr-copy pr-p\"]]],false],[0,\"\\n\\n\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"currentPage\"]],9],null]],null,{\"statements\":[[0,\"\\n\\n\\n    \"],[1,[25,\"markdown-to-html\",[[25,\"trim-markdown\",[\"\\n      ## 9. Fixing the media queries for the sidebar\\n\\n      We'll need two sets of media queries, for collapsed and expanded states:\\n\\n      ```css\\n      @media\\n        (max-width:  549px),\\n        (min-width:  970px) and (max-width: 1069px),\\n        (min-width: 1459px) and (max-width: 1616px),\\n        (min-width: 1969px) and (max-width: 2181px)\\n      {\\n        .sidebar-is-collapsed {\\n          /* Horizontal layout */\\n        }\\n      }\\n      ```\\n\\n      ```css\\n      @media\\n        (min-width:  550px) and (max-width: 969px),\\n        (min-width: 1070px) and (max-width: 1458px),\\n        (min-width: 1617px) and (max-width: 1968px),\\n        (min-width: 2182px)\\n      {\\n        .sidebar-is-collapsed {\\n          /* Vertical layout */\\n        }\\n      }\\n      ```\\n\\n      ```css\\n      @media\\n      (max-width:  749px),\\n      (min-width: 1170px) and (max-width: 1269px),\\n      (min-width: 1459px) and (max-width: 1816px),\\n      (min-width: 2169px) and (max-width: 2181px)\\n        .sidebar-is-expanded {\\n          /* Horizontal layout */\\n        }\\n      }\\n      ```\\n\\n      ```css\\n      @media\\n        (min-width:  750px) and (max-width: 1169px),\\n        (min-width: 1270px) and (max-width: 1658px),\\n        (min-width: 1817px) and (max-width: 2168px),\\n        (min-width: 2382px)\\n      {\\n        .sidebar-is-expanded {\\n          /* Vertical layout */\\n        }\\n      }\\n      ```\\n    \"],null]],[[\"extensions\",\"class\"],[\"hljs\",\"pr-copy pr-p\"]]],false],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"route-index-demo _9\"],[7],[0,\"\\n\\n      \"],[6,\"p\"],[9,\"class\",\"pr-p\"],[7],[0,\"\\n        \"],[6,\"a\"],[9,\"href\",\"\"],[3,\"action\",[[19,0,[]],[25,\"toggle\",[\"isSidebarExpanded\",[19,0,[]]],null]]],[7],[0,\"\\n          \"],[1,[25,\"if\",[[20,[\"isSidebarExpanded\"]],\"Collapse\",\"Expand\"],null],false],[0,\" the sidebar\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\\n      \"],[6,\"div\"],[10,\"class\",[26,[\"\\n          route-index-sidebar-wrapper\\n          \",[25,\"if\",[[20,[\"isSidebarExpanded\"]],\"-expanded\",\"-collapsed\"],null],\"\\n        \"]]],[7],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"route-index-sidebar\"],[7],[0,\"\\n          The sidebar\\n        \"],[8],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"route-index-grid _ruler\"],[7],[0,\"\\n          \"],[1,[25,\"x-block\",null,[[\"eqEnabled\"],[false]]],false],[0,\"\\n          \"],[1,[25,\"x-block\",null,[[\"eqEnabled\"],[false]]],false],[0,\"\\n          \"],[1,[25,\"x-block\",null,[[\"eqEnabled\"],[false]]],false],[0,\"\\n          \"],[1,[25,\"x-block\",null,[[\"eqEnabled\"],[false]]],false],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[1,[25,\"markdown-to-html\",[[25,\"trim-markdown\",[\"\\n      Let's sum it up.\\n\\n      Next: [10. It kinda works, but the result is unsatisfactory](#/?page=10)\\n    \"],null]],[[\"extensions\",\"class\"],[\"hljs\",\"pr-copy pr-p\"]]],false],[0,\"\\n\\n\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"currentPage\"]],10],null]],null,{\"statements\":[[0,\"\\n\\n\\n    \"],[1,[25,\"markdown-to-html\",[[25,\"trim-markdown\",[\"\\n      ## 10. It kinda works, but the result is unsatisfactory\\n\\n\\n      Let's sum up what we have acheived.\\n\\n      We've built a grid with a variable number of columns and a collapsible sidebar, where each item is itself responsive around 500px of its own width.\\n\\n      It works, but we've got *lots of problems:\\n\\n      * The amount of breakpoints we've had to introduce is absolutely ridiculous.\\n      * The math for calculating them precisely is *way* too complicated. Setting breakpoints approximately results in a very messy experience.\\n      * We can't account for the scrollbar without a JS hack like Modernizr.\\n      * **If we make our component reusable, we can't make it responsive** because responsive styles depend on the external context.\\n\\n      ![What if I told you there's a simple solution to all these problems?](./morpheus.jpg)\\n\\n      Next: [11. Enter element query](#/?page=11)\\n    \"],null]],[[\"extensions\",\"class\"],[\"hljs\",\"pr-copy pr-p\"]]],false],[0,\"\\n\\n\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"currentPage\"]],11],null]],null,{\"statements\":[[0,\"\\n\\n\\n    \"],[1,[25,\"markdown-to-html\",[[25,\"trim-markdown\",[\"\\n      ## 11. Enter element query\\n\\n      The techinque to solve all those problems is called *element query*. The idea is very simple: instead of applying styles conditionally based on window width, you apply styles conditionally based on component's own width!\\n\\n      The Ember addon that provides the technique is [ember-element-query](https://github.com/lolmaus/ember-element-query).\\n\\n      Let's try the responsive grid with a collapsible sidebar again, but this time we're gonna crank it up with `ember-element-query`.\\n\\n      All we need to do is:\\n\\n      1. Include the element query mixin into the component and define the breakpoints (slices):\\n\\n          ```js\\n          import Component from '@ember/component';\\n          import EQMixin from 'ember-element-query/mixins/element-query'\\n\\n          export default Component.extend(EQMixin, {\\n            // ...\\n          });\\n          ```\\n\\n      2. Apply styles to the component:\\n\\n          ```css\\n          .xBlock[data-eq-to~=\\\"499px\\\"] {\\n            margin-bottom: 1rem;\\n          }\\n\\n          .xBlock[data-eq-from~=\\\"500px\\\"] {\\n            display: flex;\\n          }\\n\\n          .xBlock[data-eq-from~=\\\"500px\\\"] .xBlock-image-wrapper {\\n            width: 30%;\\n            flex-shrink: 0;\\n            margin-right: 1rem;\\n          }\\n          ```\\n\\n      3. Tell the sidebar to trigger resize:\\n\\n          ```js\\n          resizeOnSidebarToggle : observer('isSidebarExpanded', function () {\\n            const service = this.get('eq')\\n            service.triggerResize()\\n          }),\\n          ```\\n\\n      And you've got perfectly responsive and reusable components:\\n    \"],null]],[[\"extensions\",\"class\"],[\"hljs\",\"pr-copy pr-p\"]]],false],[0,\"\\n\\n\\n    \"],[6,\"div\"],[9,\"class\",\"route-index-demo _11\"],[7],[0,\"\\n\\n      \"],[6,\"p\"],[9,\"class\",\"pr-p\"],[7],[0,\"\\n        \"],[6,\"a\"],[9,\"href\",\"\"],[3,\"action\",[[19,0,[]],[25,\"toggle\",[\"isSidebarExpanded\",[19,0,[]]],null]]],[7],[0,\"\\n          \"],[1,[25,\"if\",[[20,[\"isSidebarExpanded\"]],\"Collapse\",\"Expand\"],null],false],[0,\" the sidebar\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\\n      \"],[6,\"div\"],[10,\"class\",[26,[\"\\n          route-index-sidebar-wrapper\\n          \",[25,\"if\",[[20,[\"isSidebarExpanded\"]],\"-expanded\",\"-collapsed\"],null],\"\\n        \"]]],[7],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"route-index-sidebar\"],[7],[0,\"\\n          The sidebar\\n        \"],[8],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"route-index-grid _ruler\"],[7],[0,\"\\n          \"],[1,[18,\"x-block\"],false],[0,\"\\n          \"],[1,[18,\"x-block\"],false],[0,\"\\n          \"],[1,[18,\"x-block\"],false],[0,\"\\n          \"],[1,[18,\"x-block\"],false],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[1,[25,\"markdown-to-html\",[[25,\"trim-markdown\",[\"\\n      BTW, the above styles look even better with Sass:\\n\\n      ```sass\\n      @import node_modules/ember-element/query/addon/styles/mixins\\n\\n      .xBlock\\n        $breakpoint: 500px\\n\\n        +eq-to($breakpoint)\\n          > .xBlock-image-wrapper\\n            margin-bottom: 1rem\\n\\n        +eq-from($breakpoint)\\n          display : flex\\n\\n          > .xBlock-image-wrapper\\n            width        : 30%\\n            flex-shrink  : 0\\n            margin-right : 1rem\\n      ```\\n\\n      The `eq-to` mixin subtracts 1 from the argument, letting you reuse the breakpoint value.\\n\\n      Let's try nested components as well!\\n\\n      Next: [12. Nested components with ember-element-query](#/?page=12)\\n    \"],null]],[[\"extensions\",\"class\"],[\"hljs\",\"pr-copy pr-p\"]]],false],[0,\"\\n\\n\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"currentPage\"]],12],null]],null,{\"statements\":[[0,\"\\n\\n\\n    \"],[1,[25,\"markdown-to-html\",[[25,\"trim-markdown\",[\"\\n      ## 12. Nested components with ember-element-query\\n\\n      In the example below I used the EQ setup from the previous page, but instead of building a grid I nested components like this:\\n\\n      ```handlebars\\n      {{#x-block}}\\n        {{#x-block}}\\n          {{#x-block}}\\n            {{x-block}}\\n          {{/x-block}}\\n        {{/x-block}}\\n      {{/x-block}}\\n      ```\\n\\n      The `x-block` is designed to render lorem ipsum when it has no content block.\\n    \"],null]],[[\"extensions\",\"class\"],[\"hljs\",\"pr-copy pr-p\"]]],false],[0,\"\\n\\n\\n    \"],[6,\"div\"],[9,\"class\",\"route-index-demo _12\"],[7],[0,\"\\n\\n      \"],[6,\"p\"],[9,\"class\",\"pr-p\"],[7],[0,\"\\n        \"],[6,\"a\"],[9,\"href\",\"\"],[3,\"action\",[[19,0,[]],[25,\"toggle\",[\"isSidebarExpanded\",[19,0,[]]],null]]],[7],[0,\"\\n          \"],[1,[25,\"if\",[[20,[\"isSidebarExpanded\"]],\"Collapse\",\"Expand\"],null],false],[0,\" the sidebar\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\\n      \"],[6,\"div\"],[10,\"class\",[26,[\"\\n          route-index-sidebar-wrapper\\n          \",[25,\"if\",[[20,[\"isSidebarExpanded\"]],\"-expanded\",\"-collapsed\"],null],\"\\n        \"]]],[7],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"route-index-sidebar\"],[7],[0,\"\\n          The sidebar\\n        \"],[8],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"route-index-grid\"],[7],[0,\"\\n\"],[4,\"x-block\",null,null,{\"statements\":[[4,\"x-block\",null,null,{\"statements\":[[4,\"x-block\",null,null,{\"statements\":[[0,\"                \"],[1,[18,\"x-block\"],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\\n\"],[0,\"        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[1,[25,\"markdown-to-html\",[[25,\"trim-markdown\",[\"\\n      Implementing this example with media queries is unreasonably daunting. Just thinking about it gives me a headache.\\n\\n      But with `ember-element-query` we didn't need to configure *anything*. We just reused a EQ-enabled component.\\n\\n      Thank you for your attention!\\n\\n      Andrey Mikhaylov aka [lolmaus](https://github.com/lolmaus/)\\n\\n      Next: [13. Heavy nesting test](#/?page=13)\\n    \"],null]],[[\"extensions\",\"class\"],[\"hljs\",\"pr-copy pr-p\"]]],false],[0,\"\\n\\n\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"currentPage\"]],13],null]],null,{\"statements\":[[0,\"\\n\\n\\n    \"],[1,[25,\"markdown-to-html\",[[25,\"trim-markdown\",[\"\\n      ## 13. Heavy nesting test\\n\\n      Ember has a ridiculous way of detecting an infinite render loop: if a rerender has been triggered from a rerender 10 times in a row, the loop is considered infinite... and Ember chooses to crash the app! :dizzy_face:\\n\\n      See [source](https://github.com/emberjs/ember.js/blob/00c4c82a3f6fd03fe692601ad8e052f7bb5e2914/packages/ember-glimmer/lib/renderer.ts#L190-L195) and corresponding issue: [#15749](https://github.com/emberjs/ember.js/issues/15479#issuecomment-347006683).\\n\\n      To work around this problem, `ember-elemenet-query` wraps event propagation (from a parent to its children) into `Ember.run.next`. This prevents the crash and distributes layout thrashing over time, avoiding UI lock. But the cost is that nested EQ components realign sequentially rather than all at once, i. e. you can notice realignment spread from parents to children in a fraction of a second.\\n\\n      This rectangle contains 101 nested components. When they cross the 500px width, they change color. Sometimes it happens instantly, sometimes you can see the color change propagate:\\n    \"],null]],[[\"extensions\",\"class\"],[\"hljs\",\"pr-copy pr-p\"]]],false],[0,\"\\n\\n\\n    \"],[6,\"div\"],[9,\"class\",\"route-index-demo _13\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"route-index-grid _ruler\"],[7],[0,\"\\n\\n\"],[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[4,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]],{\"statements\":[[0,\"         \"],[1,[25,\"e-q\",null,[[\"class\"],[\"route-index-xFoo\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n\"],[0,\"\\n  \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"\\n  \"],[6,\"br\"],[7],[8],[6,\"br\"],[7],[8],[0,\"\\n\\n  \"],[1,[25,\"story-pagination\",null,[[\"pages\",\"currentPage\"],[[20,[\"pages\"]],[20,[\"currentPage\"]]]]],false],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "dummy/pods/index/template.hbs" } });
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('dummy/router', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var EmberRouter = Ember.Router;


  var Router = EmberRouter.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('foo');
    this.route('bar');
  });

  exports.default = Router;
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('dummy/services/eq', ['exports', 'ember-element-query/services/eq'], function (exports, _eq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _eq.default;
    }
  });
});


define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("dummy/app")["default"].create({});
}
//# sourceMappingURL=dummy.map
