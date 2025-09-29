const API_URL = "/api/animais"; // proxy do nginx → Supabase/n8n

async function loadAnimals() {
  const res = await fetch(API_URL);
  const data = await res.json();

  const container = document.getElementById("animal-list");
  container.innerHTML = "";

  if (!data || data.length === 0) {
    container.innerHTML = "<p>Nenhum animal encontrado.</p>";
    return;
  }

  data.forEach(animal => {
    const card = `
      <a href="animal.html?id=${animal.animal_id}" class="animal-list-link">
        <div class="animal-strip">
          <div class="animal-photo-list-container">
            <img class="animal-photo-list" src="${animal.foto}" alt="Foto de ${animal.nome}"/>
          </div>
          <div class="list-content">
            <h3>${animal.nome}</h3>
            <div class="characteristics-container">
              <span class="characteristic-box">${animal.especie}</span>
              <span class="characteristic-box">${animal.sexo}</span>
              <span class="characteristic-box">${animal.faixa_etaria}</span>
              <span class="characteristic-box">${animal.porte}</span>
            </div>
          </div>
        </div>
      </a>`;
    container.insertAdjacentHTML("beforeend", card);
  });
}

loadAnimals();
