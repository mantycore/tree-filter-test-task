import Controller from '@ember/controller';
import search from 'tree/utils/search';

export default Controller.extend({
    searchTerm: "",
    filteredTree: null,
    actions: {
        updateSearchTerm (value) {
            //let value = target.target.value;
            this.set('searchTerm', value);
            this.set('filteredTree', search(this.model.treeRoot, value.toLowerCase()));
            //console.log(value);
        }
    }
});
