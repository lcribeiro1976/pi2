// ==================== CONFIG ====================
const API_URL = "http://localhost:3000/alunos"; // ajuste a porta/rota se necessário

// ==================== HELPERS ====================
const $ = (sel) => document.querySelector(sel);
const byId = (id) => document.getElementById(id);

function escapeHTML(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

async function parseError(resp) {
  try {
    const j = await resp.json();
    return j?.message || j?.erro || "";
  } catch {
    return "";
  }
}

// ==================== LISTAR ====================
async function carregarAlunos() {
  const tbody = $("#tabela-alunos tbody");
  tbody.innerHTML = `<tr><td colspan="4">Carregando...</td></tr>`;
  try {
    const r = await fetch(API_URL);
    if (!r.ok) throw new Error(`Falha ao listar (${r.status})`);
    const alunos = await r.json();

    tbody.innerHTML = "";
    for (const a of alunos) {
      const id = a._id || a.id;
      const tr = document.createElement("tr");
      tr.dataset.id = id;
      tr.innerHTML = `
        <td class="td-nome">${escapeHTML(a.nome ?? "")}</td>
        <td class="td-idade">${escapeHTML(a.idade ?? "")}</td>
        <td class="td-curso">${escapeHTML(a.curso ?? "")}</td>
        <td class="td-acoes">
          <button class="btn-editar" data-id="${id}">Editar</button>
          <button class="btn-deletar danger" data-id="${id}">Excluir</button>
        </td>
      `;
      tbody.appendChild(tr);
    }
    if (alunos.length === 0) {
      tbody.innerHTML = `<tr><td colspan="4">Sem registros.</td></tr>`;
    }
  } catch (e) {
    tbody.innerHTML = `<tr><td colspan="4">Erro: ${e.message}</td></tr>`;
  }
}

// ==================== CRIAR ====================
$("#form-criar").addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const payload = {
    nome: byId("create-nome").value.trim(),
    idade: Number(byId("create-idade").value),
    curso: byId("create-curso").value.trim(),
  };
  if (!payload.nome || !payload.curso || Number.isNaN(payload.idade)) {
    byId("create-status").textContent = "Preencha os campos corretamente.";
    return;
  }

  byId("create-status").textContent = "Salvando...";
  try {
    const r = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!r.ok) {
      const msg = await parseError(r);
      throw new Error(msg || `Falha ao criar (${r.status})`);
    }
    // limpa campos
    byId("create-nome").value = "";
    byId("create-idade").value = "";
    byId("create-curso").value = "";
    byId("create-status").textContent = "Criado!";
    carregarAlunos();
  } catch (e) {
    byId("create-status").textContent = `Erro: ${e.message}`;
  }
});

// ==================== DELETAR ====================
async function deletarAluno(id) {
  const r = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!r.ok) {
    const msg = await parseError(r);
    throw new Error(msg || `Falha ao deletar (${r.status})`);
  }
}

document.addEventListener("click", async (ev) => {
  const btnDel = ev.target.closest(".btn-deletar");
  const btnEdit = ev.target.closest(".btn-editar");

  if (btnDel) {
    const id = btnDel.dataset.id;
    if (confirm("Excluir este aluno?")) {
      try {
        await deletarAluno(id);
        carregarAlunos();
      } catch (e) {
        alert(e.message);
      }
    }
  }

  if (btnEdit) {
    abrirEdicao(btnEdit.dataset.id);
  }
});

// ==================== EDIT/UPDATE ====================
// abre modal preenchido
async function abrirEdicao(id) {
  try {
    const r = await fetch(`${API_URL}/${id}`);
    if (!r.ok) throw new Error(`Falha ao buscar (${r.status})`);
    const a = await r.json();

    byId("edit-id").value = a._id || a.id || id;
    byId("edit-nome").value = a.nome ?? "";
    byId("edit-idade").value = a.idade ?? "";
    byId("edit-curso").value = a.curso ?? "";
    byId("edit-status").textContent = "";

    byId("dlg-editar").showModal();
  } catch (e) {
    alert(e.message);
  }
}

// função pedida no enunciado
async function atualizarAluno(id, dados) {
  const r = await fetch(`${API_URL}/${id}`, {
    method: "PUT", // se usar PATCH no backend, troque aqui
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });

  // Alguns servidores retornam 204 sem corpo.
  if (r.status === 204) return;

  if (!r.ok) {
    const msg = await parseError(r);
    throw new Error(msg || `Falha ao atualizar (${r.status})`);
  }
  // Se houver corpo JSON, você pode usar: return r.json();
}

// submit do modal
byId("form-editar").addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const id = byId("edit-id").value;
  const payload = {
    nome: byId("edit-nome").value.trim(),
    idade: Number(byId("edit-idade").value),
    curso: byId("edit-curso").value.trim(),
  };

  if (!payload.nome || !payload.curso || Number.isNaN(payload.idade)) {
    byId("edit-status").textContent = "Preencha os campos corretamente.";
    return;
  }

  byId("btn-salvar-edicao").disabled = true;
  byId("edit-status").textContent = "Salvando...";

  try {
    await atualizarAluno(id, payload);
    byId("edit-status").textContent = "Salvo!";
    byId("dlg-editar").close();
    carregarAlunos();
  } catch (e) {
    byId("edit-status").textContent = `Erro: ${e.message}`;
  } finally {
    byId("btn-salvar-edicao").disabled = false;
  }
});

// cancelar
byId("btn-cancelar-edicao").addEventListener("click", () => byId("dlg-editar").close());

// ==================== INICIALIZAÇÃO ====================
byId("btn-recarregar").addEventListener("click", carregarAlunos);
carregarAlunos();
