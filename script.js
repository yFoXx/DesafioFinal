.kitchen-sink-drawer {
  $custom-size 500px;
  @include bmd-drawer-x-out($custom-size);
  &:not(.bmd-drawer-out){
    @each $breakpoint in map-keys($grid-breakpoints){
      @include bmd-drawer-x-in-up($custom-size, $breakpoint);
    }
  }
}

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
