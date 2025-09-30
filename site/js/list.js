const API_URL = "/api/animals"; // proxy do nginx → FastAPI

async function loadAnimals() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    const container = document.getElementById("animal-list");
    container.innerHTML = "";

    if (!data || !data.animals || data.animals.length === 0) {
      container.innerHTML = "<p>Nenhum animal encontrado.</p>";
      return;
    }

    data.animals.forEach(animal => {
      const card = `
        <a href="animal.html?id=${animal.id}" class="animal-list-link">
          <div class="animal-strip">
            <div class="animal-photo-list-container">
              <img class="animal-photo-list" src="${animal.picture_url || 'https://via.placeholder.com/150'}" alt="Foto de ${animal.name}"/>
            </div>
            <div class="list-content">
              <h3>${animal.name}</h3>
              <div class="characteristics-container">
                <span class="characteristic-box">${animal.species || "-"}</span>
                <span class="characteristic-box">${animal.sex || "-"}</span>
                <span class="characteristic-box">${animal.size || "-"}</span>
                <span class="characteristic-box">${animal.color || "-"}</span>
              </div>
            </div>
          </div>
        </a>`;
      container.insertAdjacentHTML("beforeend", card);
    });
  } catch (err) {
    console.error("Erro ao carregar animais:", err);
    document.getElementById("animal-list").innerHTML =
      "<p>Erro ao carregar animais.</p>";
  }
}

loadAnimals();
