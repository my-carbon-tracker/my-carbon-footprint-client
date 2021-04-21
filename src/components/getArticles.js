export function getArticles() {
    return fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=climate&api-key=6OkBeVyUZAriSTuQI8y3Ls8ZAJJhTVGw`,{
        method:'GET',
        headers:{
          "Accept": "application/json",
        }
     })
      .then(response => response.json())
}