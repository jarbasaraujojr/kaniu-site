const API_URL = "/api/animais"; // proxy do nginx → Supabase/n8n

async function loadAnimals() {
  try {
    const res = await fetch("/api/animals");
    const data = await res.json();

    const container = document.getElementById("animal-list");
    container.innerHTML = "";

    data.animals.forEach(animal => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${animal.picture_url || 'https://via.placeholder.com/150'}" alt="${animal.name}">
        <h3>${animal.name}</h3>
        <p><strong>Espécie:</strong> ${animal.species || "-"}</p>
        <p><strong>Raça:</strong> ${animal.breed || "-"}</p>
        <p><strong>Cor:</strong> ${animal.color || "-"}</p>
        <p><strong>Porte:</strong> ${animal.size || "-"}</p>
        <p><strong>Sexo:</strong> ${animal.sex || "-"}</p>
        <p><strong>Nascimento:</strong> ${animal.birth_date || "-"}</p>
        <p><strong>Abrigo:</strong> ${animal.shelter || "-"}</p>
        <p><strong>Peso atual:</strong> ${animal.latest_weight ? animal.latest_weight + " kg" : "-"}</p>
        <p><strong>Favoritos:</strong> ${animal.favorites_count}</p>
      `;

      container.appendChild(card);
    });
  } catch (err) {
    console.error("Erro ao carregar animais:", err);
  }
}

// carregar ao iniciar
loadAnimals();
