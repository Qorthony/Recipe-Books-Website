import "../component/search-bar.js";
import "../component/recipe-list.js";
import DataSource from "../data/data-source.js";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const recipeListElement = document.querySelector("recipe-list");

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchRecipe(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = result => {
        recipeListElement.recipe = result;
    };

    const fallbackResult = message => {
        recipeListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
}

export default main;