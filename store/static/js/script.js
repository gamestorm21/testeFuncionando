$(document).ready(function(){
  // Inicial Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Adicione rolagem suave a todos os links no link navbar + footer.
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Certifique-se de que this.hash tenha um valor antes de substituir o comportamento padrão.
    if (this.hash !== "") {
      // Evitar o comportamento padrão de clique da âncora.
      event.preventDefault();

      // Armazenar hash
      var hash = this.hash;

      // Usando o método animate () do jQuery para adicionar rolagem de página suave.
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        // Adicionar hash (#) ao URL quando terminar a rolagem (comportamento de clique padrão)
        window.location.hash = hash;
      });
    }
  });
})