

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


