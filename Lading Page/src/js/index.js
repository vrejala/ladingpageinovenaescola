const form = document.getElementById("leadForm");
const submitButton = form.querySelector("button[type='submit']");
const successMessage = document.getElementById("formSuccess");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Desativa o botão e muda o texto
  submitButton.disabled = true;
  submitButton.innerText = "Enviando...";

  // Esconde o formulário e mostra a mensagem imediatamente
  form.classList.add("d-none");
  successMessage.classList.remove("d-none");

  const formData = new FormData(form);
  const url = "https://script.google.com/macros/s/AKfycbzj8fSK7o6fsqsepxODZd2FwSvpcPKfCnnHmfGfmjVxFTh4arEUwoWtxCWO2Ev0UNgv/exec";

  fetch(url, {
    method: "POST",
    mode: "no-cors",
    body: formData
  });
});