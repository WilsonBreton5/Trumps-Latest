const urls = [
        "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=af4e540b7f8e463d8825569da79b62c9",
        "https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=af4e540b7f8e463d8825569da79b62c9",
        "https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=af4e540b7f8e463d8825569da79b62c9",
        "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=af4e540b7f8e463d8825569da79b62c9",
        "https://newsapi.org/v1/articles?source=the-economist&sortBy=top&apiKey=af4e540b7f8e463d8825569da79b62c9",
        "https://newsapi.org/v1/articles?source=the-washington-post&sortBy=top&apiKey=af4e540b7f8e463d8825569da79b62c9",
        "https://newsapi.org/v1/articles?source=the-wall-street-journal&sortBy=top&apiKey=af4e540b7f8e463d8825569da79b62c9",
];

function createNode(element) {
  return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
}

function fetchData(){
  const ul = document.getElementById('articles')
  const trump = "Trump" 
  while (ul.firstChild) { // clear DOM
    ul.removeChild(ul.firstChild);
  }
  urls.forEach(function(url){
    fetch(url)
    .then((resp) => resp.json())  // convert api data to json so we can work with it
    .then(function(data){
    let articles = data.articles
    articles.map(function(article){  // loop through data
      if (article.title.includes('Trump')) { // does it involve trump?

      let li = createNode('li'), //  Create the elements we need
          img = createNode('img'),
          h3 = createNode('h3');
          span = createNode('span')

      img.src = article.urlToImage;  // Add the source of the image to be the src of the img element
      h3.innerHTML = `${article.title}`
      span.innerHTML = `${article.description}<br><a href="${article.url}">${article.url}</a><hr>`
     
      append(li, img); // Append all our elements
      append(li, h3);
      append(li, span)
      append(ul, li);      
    }
    })      
    })
  })
};

