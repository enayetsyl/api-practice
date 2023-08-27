fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((json) => loadData(json));

function loadData(photos) {
  const showcase = document.getElementById("showcase");
  for (const photo of photos) {
    const div = document.createElement("div");
    div.innerHTML = `
    AlbumId: ${photo.albumId}<br/>
    Id: ${photo.id}<br/>
    Title: ${photo.title}<br/>
    Url: ${photo.url}<br/>
    Thumbnail-Url: ${photo.thumbnailUrl}
        `;
    showcase.appendChild(div);
    div.style.margin = "20px";
    div.style.padding = "10px";
    div.style.fontSize = "20px";
    div.style.background = "green";
  }
}
