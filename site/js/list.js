const API_URL = "/api/animais"; // proxy do nginx → Supabase/n8n

async function loadAnimals() {
  try {
    const res = await fetch("/api/animals");
    const data = await res.json();

    const container = document.getElementById("animal-list");
    container.innerHTML = "";

    data.animals.forEach(animal => {
      const card = document.createElement("div");
      card.className = "animal-card";

      card.innerHTML = `
        <img src="${animal.picture_url || 'https://via.placeholder.com/150'}" alt="${animal.name}">
        <h3>${animal.name}</h3>
        <p>${animal.species || "-"} • ${animal.breed || "-"}</p>
        <p>${animal.color || "-"} • ${animal.size || "-"}</p>
        <p>${animal.sex || "-"}</p>
        <p>Nasc.: ${animal.birth_date || "-"}</p>
        <p>Abrigo: ${animal.shelter || "-"}</p>
      `;

      container.appendChild(card);
    });
  } catch (err) {
    console.error("Erro ao carregar animais:", err);
  }
}

loadAnimals();
