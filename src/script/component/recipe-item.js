class RecipeItem extends HTMLElement {

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    set recipe(recipe){
        this._recipe = recipe;
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
            }
            .recipe-thumb{
                width: 100%;
                max-height: 300px;
                object-fit: cover;
                object-position: center;
            }
            .recipe-detail {
                padding: 20px;
            }
            .recipe-detail > h2 {
                color: #9CCD62;
                margin-bottom: 10px;
            }
            .recipe-detail > h5 {
                color: #3A3C42;
                margin-bottom: 10px;
            }
            .recipe-detail > hr {
                width: 100%;
                border: 0;
                border-top: 1px solid grey;
                margin-top: 10px;
                margin-bottom: 10px;
            }
            .recipe-detail > p {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10; /* number of lines to show */
            }
            
        </style>
        <img class="recipe-thumb" src="${this._recipe.strMealThumb}">
        <div class="recipe-detail">
            <h2>${this._recipe.strMeal}</h2>
            <h5>${this._recipe.strArea}</h5>
            <hr>
            <h3>Cara membuat :</h3>
            <p>${this._recipe.strInstructions}</p>
        </div>`;
    }
}

customElements.define("recipe-item", RecipeItem);