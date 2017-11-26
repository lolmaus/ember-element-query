'use strict';

define('dummy/tests/app.lint-test', [], function () {
  'use strict';

  describe('ESLint | app', function () {

    it('app.js', function () {
      // test passed
    });

    it('helpers/trim-markdown.js', function () {
      // test passed
    });

    it('initializers/showdown.js', function () {
      // test passed
    });

    it('pods/components/story-pagination/component.js', function () {
      // test passed
    });

    it('pods/components/x-block/component.js', function () {
      // test passed
    });

    it('pods/components/x-ember-forwarding/component.js', function () {
      // test passed
    });

    it('pods/components/y-ember-forwarding/component.js', function () {
      // test passed
    });

    it('pods/index/controller.js', function () {
      // test passed
    });

    it('resolver.js', function () {
      // test passed
    });

    it('router.js', function () {
      // test passed
    });
  });
});
define('dummy/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  var run = Ember.run;
  function destroyApp(application) {
    run(application, 'destroy');
  }
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('dummy/tests/helpers/start-app', ['exports', 'dummy/app', 'dummy/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  var merge = Ember.merge;
  var run = Ember.run;
  function startApp(attrs) {
    var attributes = merge({}, _environment.default.APP);
    attributes = merge(attributes, attrs); // use defaults, but you can override;

    return run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-mocha'], function (_resolver, _emberMocha) {
  'use strict';

  (0, _emberMocha.setResolver)(_resolver.default);
});
define('dummy/tests/tests.lint-test', [], function () {
  'use strict';

  describe('ESLint | tests', function () {

    it('helpers/destroy-app.js', function () {
      // test passed
    });

    it('helpers/module-for-acceptance.js', function () {
      // test passed
    });

    it('helpers/resolver.js', function () {
      // test passed
    });

    it('helpers/start-app.js', function () {
      // test passed
    });

    it('test-helper.js', function () {
      // test passed
    });

    it('unit/components/e-q-test.js', function () {
      // test passed
    });
  });
});
define('dummy/tests/unit/components/e-q-test', ['chai', 'mocha', 'ember-mocha'], function (_chai, _mocha, _emberMocha) {
  'use strict';

  (0, _mocha.describe)('Unit | Component | e q', function () {

    (0, _emberMocha.setupComponentTest)('e-q', {
      // Specify the other units that are required for this test
      needs: ['service:eq'],
      unit: true
    });

    (0, _mocha.it)('eqWidth, eqBPsFromActive, eqBPsToActive recalculate on updateEqWidth', function () {
      var subject = this.subject({ classNames: 'foo' });

      subject.set('eq.mapping', {
        foo: {
          from: [400, 500, 600],
          to: [399, 499, 599]
        }
      });

      this.render();

      this.$().width(450);
      subject.eqUpdateSizes();

      (0, _chai.expect)(subject.get('eqWidth')).equal(450);
      (0, _chai.expect)(subject.get('eqBPsFromActive')).eql([400]);
      (0, _chai.expect)(subject.get('eqBPsToActive')).eql([499, 599]);

      this.$().width(550);
      subject.eqUpdateSizes();

      (0, _chai.expect)(subject.get('eqWidth')).equal(550);
      (0, _chai.expect)(subject.get('eqBPsFromActive')).eql([400, 500]);
      (0, _chai.expect)(subject.get('eqBPsToActive')).eql([599]);
    });
  });
});
require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
