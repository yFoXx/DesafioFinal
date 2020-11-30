function sharenoticia(titulo, texto, url){

  if (navigator.share){
    navigator.share({
      title: titulo,
      text: texto,
      url: url,
    })
    .then(() => console.log('Compartilhamento Concluído!'))
    .catch((error) => console.log('Erro no Compartilhamento!', error));
  }
}
