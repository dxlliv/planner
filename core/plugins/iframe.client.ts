export default defineNuxtPlugin(nuxtApp => {
  // Controlla se ci troviamo lato client
  const url = window.location.hash;

  // Verifica se l'URL contiene "#iframe"
  if (url.includes('#iframe')) {
    // Aggiungi la classe "is-iframe" al body
    document.body.classList.add('is-iframe');
  }
})