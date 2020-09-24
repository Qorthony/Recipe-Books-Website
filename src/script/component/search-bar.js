class SearchBar extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value(){
        return this.shadowDOM.querySelector("#searchInput").value;
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
            #search-wrapper{
                max-width: 800px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 16px;
                border-radius: 5px;
                display: flex;
                position: sticky;
                top: 10px;
                background-color:white;
            }
            #search-wrapper > input{
                width: 75%;
                padding: 16px;
                border: 1px solid #9CCD62;
                border-radius: 20px;
                font-weight: bold;
            }
            #search-wrapper > input:focus{
                outline: 0;
                border: 1px solid #9CCD62;
            }
            #search-wrapper > button{
                width: 23%;
                cursor: pointer;
                margin-left: auto;
                padding: 16px;
                background-color: #9CCD62;
                color: white;
                border: 0;
                border-radius: 20px;
                text-transform: uppercase;
            }

            #search-wrapper > button:focus {
                outline: none;
            }
            @media screen and (max-width: 550px){
                #search-wrapper{
                    flex-direction: column;
                    position: static;
                }
                #search-wrapper > input{
                    width: 100%;
                    margin-bottom: 12px;
                }
                #search-wrapper > button {
                    width: 100%;
                }
            }
        </style>
        <div id="search-wrapper">
            <input id="searchInput" type="search" placeholder="ex. egg, teriyaki, honey">
            <button id="searchButton" type="submit">Cari</button>
        </div>`;

        this.shadowDOM.querySelector("#searchButton").addEventListener("click", this._clickEvent);
        
    }

}

customElements.define("search-bar", SearchBar);