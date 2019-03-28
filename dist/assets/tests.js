'use strict';

define("tree/tests/integration/components/treebranch-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | treebranch', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "1ZIN9WB+",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"treebranch\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "WjO3xcBj",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"treebranch\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("tree/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/treebranch.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/treebranch.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('utils/search.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/search.js should pass ESLint\n\n');
  });
});
define("tree/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('tree/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tree/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('tree/templates/components/treebranch.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tree/templates/components/treebranch.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('tree/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tree/templates/index.hbs should pass TemplateLint.\n\n');
  });
});
define("tree/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/treebranch-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/treebranch-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/controllers/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/utils/search-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/search-test.js should pass ESLint\n\n');
  });
});
define("tree/tests/test-helper", ["tree/app", "tree/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("tree/tests/unit/controllers/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:index');
      assert.ok(controller);
    });
  });
});
define("tree/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("tree/tests/unit/utils/search-test", ["tree/utils/search", "qunit"], function (_search, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Utility | search', function () {
    // Replace this with your real tests.
    (0, _qunit.test)('it works', function (assert) {
      let result = (0, _search.default)();
      assert.ok(result);
    });
  });
});
define('tree/config/environment', [], function() {
  var prefix = 'tree';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('tree/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
