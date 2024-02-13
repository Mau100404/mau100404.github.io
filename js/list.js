document.addEventListener("DOMContentLoaded", () => {
    let charactersCache = [];

    document.querySelector(".btn.btn-primary").addEventListener("click", event => {
        // Hacer la llamada a la API de Rick and Morty
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(data => {
                // Filtrar personajes que no han sido mostrados aún
                const availableCharacters = data.results.filter(character => !charactersCache.includes(character.id));

                // Verificar si hay personajes disponibles
                if (availableCharacters.length > 0) {
                    // Obtener un personaje aleatorio de los disponibles
                    const randomIndex = Math.floor(Math.random() * availableCharacters.length);
                    const character = availableCharacters[randomIndex];

                    // Agregar el personaje al caché
                    charactersCache.push(character.id);

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
                } else {
                    console.error("No hay más personajes disponibles.");
                }
            })
            .catch(error => console.error("Error fetching data from Rick and Morty API:", error));
    });

    document.querySelector(".btn.btn-light").addEventListener("click", event => {
        var itemList = document.getElementById("my-list");
        itemList.replaceChildren();
        // Limpiar el caché cuando se reinicia la lista
        charactersCache = [];
    });
});
