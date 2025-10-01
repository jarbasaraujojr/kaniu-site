// Captura o parâmetro id da URL
const params = new URLSearchParams(window.location.search);
const animalId = params.get("id");

async function loadAnimal() {
  try {
    const res = await fetch(`/api/animals/${animalId}`);
    if (!res.ok) {
      throw new Error("Animal não encontrado");
    }
    const animal = await res.json();

    document.getElementById("animal-details").innerHTML = `
      <div class="animal-card">
        <img src="${animal.picture_url || 'https://via.placeholder.com/300'}" alt="Foto de ${animal.name}">
        <h2>${animal.name}</h2>
        <p><strong>Espécie:</strong> ${animal.species || "-"}</p>
        <p><strong>Raça:</strong> ${animal.breed || "-"}</p>
        <p><strong>Porte:</strong> ${animal.size || "-"}</p>
        <p><strong>Sexo:</strong> ${animal.sex || "-"}</p>
        <p><strong>Faixa Etária:</strong> ${animal.age_range || "-"}</p>
        <p><strong>Abrigo:</strong> ${animal.shelter || "-"}</p>
      </div>
    `;
  } catch (err) {
    console.error("Erro ao carregar detalhes:", err);
    document.getElementById("animal-details").innerHTML =
      "<p>Erro ao carregar dados do animal.</p>";
  }
}

loadAnimal();
