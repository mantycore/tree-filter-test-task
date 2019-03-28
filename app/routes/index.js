import Route from '@ember/routing/route';
import search from 'tree/utils/search';

export default Route.extend({
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('filteredTree', search(model.treeRoot, ""));
  },
  model() {
        return {
            treeRoot: {
                name: "root",
                children: [
                    {
                        name: "left branch",
                        children: [
                            {
                                name: "left leaf 1",
                                children: []
                            },
                            {
                                name: "left leaf 2",
                                children: []
                            },
                            {
                                name: "left leaf 3",
                                children: []
                            }
                        ]
                    },
                    {
                        name: "right branch",
                        children: [
                            {
                                name: "right leaf 1",
                                children: []
                            },
                            {
                                name: "right leaf 2",
                                children: []
                            },
                            {
                                name: "right leaf 3",
                                children: []
                            }
                        ]
                    },
                ]
            }
        };
    }
});
