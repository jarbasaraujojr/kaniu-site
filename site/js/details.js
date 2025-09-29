const API_URL = "/api/animal"; // proxy do nginx → Supabase/n8n

async function loadAnimal() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (!id) return;

  const res = await fetch(`${API_URL}?id=${id}`);
  const animal = await res.json();

  document.getElementById("animal-photo").src = animal.foto;
  document.getElementById("animal-nome").textContent = animal.nome;

  // Render detalhes
  const details = `
    <div><strong>Espécie:</strong> ${animal.especie}</div>
    <div><strong>Raça:</strong> ${animal.raça}</div>
    <div><strong>Sexo:</strong> ${animal.sexo}</div>
    <div><strong>Porte:</strong> ${animal.porte}</div>
    <div><strong>Cor:</strong> ${animal.cor}</div>
    <div><strong>Pelagem:</strong> ${animal.pelagem}</div>
    <div><strong>Idade:</strong> ${animal.faixa_etaria}</div>
    <div><strong>Peso:</strong> ${animal.peso || "-"} kg</div>`;
  document.getElementById("animal-details").innerHTML = details;
}

loadAnimal();
