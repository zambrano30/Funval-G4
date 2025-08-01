let contenedor = document.querySelector("#contenedor");

/* fetch("https://jsonplaceholder.typicode.com/users")
  .then(respuesta => respuesta.json())
  .then(data => {
    data.forEach(usuario => {
      contenedor.innerHTML  += `
        <div class=" size-auto card p-8 m-4 bg-gray-500 hover:bg-gray-200 hover:p-4">
          <h3 class="text-xl font-bold" {
            constructor(parameters) {
                
            }
          }>${usuario.name}</h3>
          <p><strong>Usuario:</strong> ${usuario.username}</p>
          <p><strong>Email:</strong> ${usuario.email}</p>
          <p><strong>Ciudad:</strong> ${usuario.address.city}</p>
          <p><strong>Teléfono:</strong> ${usuario.phone}</p>
           <p><strong>Compañia:</strong> ${usuario.company.name}</p>
        </div>
      `;
    });
    
  }); */
  async function fetchData() {
    let respuesta = await fetch("https://dog.ceo/api/breeds/image/random/8");
    let data = await respuesta.json();
    data.message.forEach((url) => {
      contenedor.innerHTML += `
        <div class="size-auto card p-8 m-4 bg-gray-500 hover:bg-gray-200 hover:p-4">
         <img src="${url}">
        </div>
      `;
    });
  }

 fetchData();

