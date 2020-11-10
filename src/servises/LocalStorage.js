class LocalStorage {

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
}

export default LocalStorage;