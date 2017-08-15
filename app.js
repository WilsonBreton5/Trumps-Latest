const url = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=af4e540b7f8e463d8825569da79b62c9";
 function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
  }

  function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
  }

function fetchData(){
  const ul = document.getElementById('articles')
  fetch(url)
    .then((resp) => resp.json())  
    .then(function(data){
      let articles = data.articles
      return articles.map(function(article){
        let li = createNode('li'), //  Create the elements we need
            img = createNode('img'),
            span = createNode('span'),
            p = createNode('p'),
            h1 = createNode('h1');

      img.src = article.urlToImage;  // Add the source of the image to be the src of the img element
      span.innerHTML = `${article.title} ${article.description} ${article.url}`;

      append(li, img); // Append all our elements
      append(li, h1);
      append(ul, li)
      })   
  })
}


