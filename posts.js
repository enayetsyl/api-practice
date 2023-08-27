fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => loadData(json))

function loadData(posts){
    const showcase = document.getElementById('showcase')
    for (const post of posts){
        const div = document.createElement('div');
        div.classList.add('style');
        div.style.border = '1px solid black';
        div.style.padding = '20px';
        div.style.margin = '10px';
        div.style.background = 'pink';
        div.style.fontSize = '20px';
        div.style.fontWeight = 'bold';
        div.innerHTML = `
        User Id: ${post.userId}<br/>
        Id: ${post.id}<br/>
        Title: ${post.title}<br/>
        Message: ${post.body}
        `
        showcase.appendChild(div);
    }
}