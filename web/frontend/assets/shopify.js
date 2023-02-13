console.log('Hello from Shopify!');

// get data using fetch without await

fetch('https://api.github.com/users/octocat')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let htmlData = data.data.html

        console.log(htmlData)
    });
