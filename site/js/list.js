const API_URL = "/api/animals";

async function loadAnimals() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    const container = document.getElementById("animal-list");
    container.innerHTML = "";

    data.animals.forEach(animal => {
      const card = document.createElement("div");
      card.className = "animal-card";

      card.innerHTML = `
        <img src="${animal.picture_url || 'https://via.placeholder.com/150'}" alt="${animal.name}">
        <h3>${animal.name}</h3>
        <div class="characteristics-container">
          <div class="characteristic-box">${animal.species || "-"}</div>
          <div class="characteristic-box">${animal.breed || "-"}</div>
          <div class="characteristic-box">${animal.color || "-"}</div>
          <div class="characteristic-box">${animal.size || "-"}</div>
          <div class="characteristic-box">${animal.sex || "-"}</div>
        </div>
      `;

      container.appendChild(card);
    });
  } catch (err) {
    console.error("Erro ao carregar animais:", err);
  }
}

loadAnimals();
