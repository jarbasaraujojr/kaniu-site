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

      // mapeamento de valores
      const sex = animal.sex === true ? "Macho" : animal.sex === false ? "Fêmea" : "-";
      const size = animal.size || "-";
      const species = animal.species || "-";
      const breed = animal.breed || "-";
      const color = animal.color || "-";
      const birth = animal.birth_date || "-";
      const shelter = animal.shelter || "-";

      card.innerHTML = `
        <img src="${animal.picture_url || 'https://via.placeholder.com/150'}" alt="${animal.name}">
        <h3>${animal.name}</h3>
        <p>${species} • ${breed}</p>
        <p>${color} • ${size}</p>
        <p>${sex}</p>
        <p>Nasc.: ${birth}</p>
        <p>Abrigo: ${shelter}</p>
      `;

      container.appendChild(card);
    });
  } catch (err) {
    console.error("Erro ao carregar animais:", err);
  }
}

loadAnimals();
