$(document).ready(function () {
  $("header button").click(function () {
    //quando clicar no botão 'NOVA IMAGEM'
    $("form").slideDown(); // o menu será expandido
  });

  $("#botao-cancelar").click(function () {
    //quando clicar no botão 'CANCELAR'
    $("form").slideUp(); // o menu vai subir se recolhendo
  });

  //Previne o comportamento padrão da pagina quando ele é subimetido (submit)
  $('form').on('submit', function (e) {
    e.preventDefault();

    const enderecoDaNovaImagem = $("#endereco-imagem-nova").val(); /* ID do input html */
    const novoItem = $('<li style= "display: none;"></li>');
    $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
    $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title= "Ver imagem em tamanho real">
                    ver imagem em tamanho real
                </a>

            </div>
      `).appendTo(novoItem);
        $(novoItem).appendTo('ul');

      $(novoItem).fadeIn(1000);
      $('#endereco-imagem-nova').val('')
  })
});
