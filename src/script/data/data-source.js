class DataSource {
    static searchRecipe(keyword) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
                    .then(res=>{
                        return res.json()
                    })
                    .then(resJson=>{
                        if (resJson.meals) {
                            return Promise.resolve(resJson.meals)
                        } else {
                            return Promise.reject(`${keyword} is not found`)
                        }
                    })
    }
}

export default DataSource;