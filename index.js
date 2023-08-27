fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => loadData(json));

function loadData(users) {
  const showcase = document.getElementById("showcase");
  for (const user of users) {
    console.log(user);
    const div = document.createElement("div");
    div.classList.add('style')
    div.innerHTML = `
            Name: ${user.name} <br/>

            User-Name: ${user.username} <br/>

            Email: ${user.email}<br/>

            Address: 
              Street: ${user.address.street}<br/>
              Suite: ${user.address.suite}<br/>
              City: ${ user.address.city}<br/>
              Zip Code: ${user.address.zipcode}<br/>
              Latitude: ${user.address.geo.lat}<br/>
              Lantitude: ${user.address.geo.lng}<br/>
                        `;
    showcase.appendChild(div);
  }
}
