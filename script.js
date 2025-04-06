

/* choix des hotel */



const hotelchoice = document.getElementById("hotel-choice")

hotelchoice.addEventListener("change",function () {
    let choix = this.value;
    
    if (choix == "hotel-feu"){
       window.location.href = "./pages/feu.html";
    }else if (choix == "hotel-eau"){
        window.location.href = "./pages/eau.html";
    }else if (choix == "hotel-terre"){
        window.location.href = "./pages/terre.html";
    }else if (choix == "hotel-air"){
        window.location.href = "./pages/air.html";
    }       

})

/* choix des image*/

const image1 = document.getElementById("image-1");
const image2 = document.getElementById("image-2");
const image3 = document.getElementById("image-3");
const image4 = document.getElementById("image-4");
const image5 = document.getElementById("image-5");
const image6 = document.getElementById("image-6");
const image7 = document.getElementById("image-7");
const image8 = document.getElementById("image-8");


// image hotel  feu
image1.addEventListener('click', function() {
  if (image1 && image2) {
    const image1scr = image1.src;
    const image2src = image2.src;
    const image1alt = image1.alt;
    const image2alt = image2.alt;

    if (image1.src === image1scr) {
      image1.src = image2src;
      image1.alt = image2alt;
    }
    if (image2.src === image2src) {
      image2.src = image1scr;
      image2.alt = image1alt;
    }
  }
});

image2.addEventListener('click', function() {
  if (image1 && image2) {
    const image1scr = image1.src;
    const image2scr = image2.src;
    const image1alt = image1.alt;
    const image2alt = image2.alt;

    if (image2.src === image2scr) {
      image2.src = image1.scr;
      image2.alt = image1alt;
    }
    if (image1.src === image1scr.scr) {
      image1.src = image2scr;
      image1.alt = image2alt;
    }
  }
});
// image hotel air 
image3.addEventListener('click', function() {
  if (image3 && image4) {
    const image3scr = image3.src;
    const image4src = image4.src;
    const image3alt = image3.alt;
    const image4alt = image4.alt;

    if (image3.src === image3scr) {
      image3.src = image4src;
      image3.alt = image4alt;
    }
    if (image4.src === image4src) {
      image4.src = image3scr;
      image4.alt = image3alt;
    }
  }
});

image4.addEventListener('click', function() {
  if (image3 && image4) {
    const image3scr = image3.src;
    const image4scr = image4.src;
    const image3alt = image3.alt;
    const image4alt = image4.alt;

    if (image4.src === image4scr) {
      image4.src = image3.scr;
      image4.alt = image3alt;
    }
    if (image3.src === image3scr.scr) {
      image3.src = image4scr;
      image3.alt = image4alt;
    }
  }
});
// image hotel terre
image5.addEventListener('click', function() {
  if (image5 && image6) {
    const image5scr = image5.src;
    const image6src = image6.src;
    const image5alt = image5.alt;
    const image6alt = image6.alt;

    if (image5.src === image5scr) {
      image5.src = image6src;
      image5.alt = image6alt;
    }
    if (image6.src === image6src) {
      image6.src = image5scr;
      image6.alt = image5alt;
    }
  }
});

image6.addEventListener('click', function() {
  if (image5 && image6) {
    const image5scr = image5.src;
    const image6scr = image6.src;
    const image5alt = image5.alt;
    const image6alt = image6.alt;

    if (image6.src === image6scr) {
      image6.src = image5.scr;
      image6.alt = image5alt;
    }
    if (image5.src === image5scr.scr) {
      image5.src = image6scr;
      image5.alt = image6alt;
    }
  }
});
// image hotel eau
image7.addEventListener('click', function() {
  if (image7 && image8) {
    const image7scr = image7.src;
    const image8src = image8.src;
    const image7alt = image7.alt;
    const image8alt = image8.alt;

    if (image7.src === image7scr) {
      image7.src = image8src;
      image7.alt = image8alt;
    }
    if (image8.src === image8src) {
      image8.src = image7scr;
      image8.alt = image7alt;
    }
  }
});

image8.addEventListener('click', function() {
  if (image7 && image8) {
    const image7scr = image7.src;
    const image8scr = image8.src;
    const image7alt = image7.alt;
    const image8alt = image8.alt;

    if (image8.src === image8scr) {
      image8.src = image7.scr;
      image8.alt = image7alt;
    }
    if (image7.src === image7scr.scr) {
      image7.src = image8scr;
      image7.alt = image8alt;
    }
  }
});