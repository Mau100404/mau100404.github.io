document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".btn.btn-primary").addEventListener("click", event => {
        var itemList = document.getElementById("my-list");
        var template = document.getElementById("list-template");
        var total = itemList.childElementCount + 1;
        var clone = template.content.cloneNode(true);
        clone.querySelector("[data-id='number']").textContent = `${total}`;
        clone.querySelector("[data-id='image']").src = "https://pm1.narvii.com/6480/3795a9ab03a916314f8e0bf3fcd1649648b2b6e1_hq.jpg";
        clone.querySelector("[data-id='name']").textContent = "Morty";
        clone.querySelector("[data-id='status']").textContent = "Staus:";
        clone.querySelector("[data-id='especie']").textContent = "Especie:";
        itemList.appendChild(clone);
    });
    document.querySelector(".btn.btn-light").addEventListener("click", event => {
        var itemList = document.getElementById("my-list");
        itemList.replaceChildren();
    });
});