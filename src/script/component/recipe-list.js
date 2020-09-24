import './recipe-item.js';

class RecipeList extends HTMLElement {

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    set recipe(recipe) {
        this._recipe = recipe;
        this.render(); 
    }

    render(){
        this.shadowDOM.innerHTML = "";
        this._recipe.forEach(recipe => {
            const recipeItemElement = document.createElement("recipe-item");
            recipeItemElement.recipe = recipe;
            this.shadowDOM.appendChild(recipeItemElement);
        });
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
             .placeholder {
                   font-weight: lighter;
                   color: rgba(0,0,0,0.5);
                   -webkit-user-select: none;
                   -moz-user-select: none;
                   -ms-user-select: none;
                   user-select: none;
               }
        </style>`;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("recipe-list", RecipeList);