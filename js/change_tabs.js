    function toExchangeImage(element) {
    const mainImage = document.getElementById("img_main");
    mainImage.src = element.src;
  }

  function viewImage(src) {
    // opcional, si luego quieres modal o zoom
    console.log("Imagen clickeada:", src);
  }