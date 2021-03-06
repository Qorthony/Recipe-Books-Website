class AppBar extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML=`
        <style>
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host{
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #3A3C42;
                color: #9CCD62;
                padding: 20px 0 !important;
            }
        </style>
        <h2>RecipeBooks</h2>`;
    }
}

customElements.define("app-bar", AppBar);