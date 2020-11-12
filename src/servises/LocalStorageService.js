class LocalStorageService {

    storageKey = 'recipes';
    localStorage = window.localStorage;

    /**
     * Saves new recipe to LocalStorage
     * @param {Object} recipe
     */
    saveRecipe(recipe) {
        let existingArray = this.getAllRecipes();
        existingArray.push(recipe);
        let recipesJson = JSON.stringify(existingArray);
        localStorage.setItem(this.storageKey, recipesJson);
    }

    /**
     * Returns all recipes stored in LocalStorage
     * @returns {Array} recipes
     */
    getAllRecipes() {
        let existingStr = localStorage.getItem(this.storageKey);
        if (existingStr === null) {
            existingStr = "[]";
        }
        return JSON.parse(existingStr);
    }

    getRecipeById(id) {
        let allRecipes = this.getAllRecipes();
        let recipe = allRecipes.filter((recipe) => recipe.id == id );
        if(recipe.length !== 0 ){
            return recipe[0];
        }else{
            return null;
        }
    }
}

export default LocalStorageService;