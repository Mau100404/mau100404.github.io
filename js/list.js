document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".btn.btn-primary").addEventListener("click", event => {
        // Hacer la llamada a la API de Rick and Morty
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(data => {
                // Obtener el primer personaje de la respuesta
                const character = data.results[0];

                // Rellenar la plantilla con los datos del personaje
                var itemList = document.getElementById("my-list");
                var template = document.getElementById("list-template");
                var total = itemList.childElementCount + 1;
                var clone = template.content.cloneNode(true);
                clone.querySelector("[data-id='number']").textContent = `${total}`;
                clone.querySelector("[data-id='image']").src = character.image;
                clone.querySelector("[data-id='name']").textContent = character.name;
                clone.querySelector("[data-id='status']").textContent = `Status: ${character.status}`;
                clone.querySelector("[data-id='especie']").textContent = `Especie: ${character.species}`;
                itemList.appendChild(clone);
            })
            .catch(error => console.error("Error fetching data from Rick and Morty API:", error));
    });

    document.querySelector(".btn.btn-light").addEventListener("click", event => {
        var itemList = document.getElementById("my-list");
        itemList.replaceChildren();
    });
});
