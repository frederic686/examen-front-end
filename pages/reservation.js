document.getElementById("form").addEventListener('submit', function (event) {

    event.preventDefault();

const firstname = document.getElementById("firstname").value.trim();
const name = document.getElementById("name").value.trim();
const numrue = document.getElementById("num-rue").value.trim();
const namerue = document.getElementById("name-rue").value.trim();
const postal = document.getElementById("postal-code").value.trim();
const ville = document.getElementById("ville").value.trim();
const email = document.getElementById("email").value.trim();
const phone = document.getElementById("phone").value.trim();

const result = document.getElementById("result")

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^[0-9\s.\-()]{0,14}$/;
const numrueRegex = /^[0-9]+$/;

date();

const errors = []
if (firstname.length < 2 || firstname.length > 50) {
    errors.push("Le prénom et invalide entree entre 2 a 50");
}
if (name.length < 2 || name.length > 50) {
    errors.push("Le prénom et invalide entree entre 2 a 50");
}

if (!numrueRegex.test(numrue)) {
    errors.push("veuillez entrer un chiffre et pas de lettre");
  }

if (namerue.length <= 150) {
    
}else {
        errors.push("rue invalide entree moins de 150 caractere");
    
}
if (postal.length <= 5) {
    
}else {
        errors.push("code postal erreur veuillez taper 5 chiffre");
    
}
if (ville.length <= 100) {

}else {
    errors.push("vile invalide entree entre 2 a 100");

}


if (!emailRegex.test(email)) {
    errors.push("format email invalide");
  }

  if (!phoneRegex.test(phone)) {
    errors.push("format telephone invalide");
  }
  if (errors.length > 0) {
    result.innerHTML = errors.join("<br>");
    result.style.color = "red";
  } else {
    result.innerHTML = "Formulaire envoyé avec succès!";
    result.style.color = "green";
  }
});

function date() {
  const datearrive = document.getElementById("datearrive").value;
  const datedepart = document.getElementById("datedepart").value;

  const datearrivecorige = new Date(datearrive);
  const datedepartcorige = new Date(datedepart);

  const jourArrive = datearrivecorige.getDate().toString().padStart(2, '0');
  const moisArrive = (datearrivecorige.getMonth() + 1).toString().padStart(2, '0');
  const anneeArrive = datearrivecorige.getFullYear();

  const jourDepart = datedepartcorige.getDate().toString().padStart(2, '0');
  const moisDepart = (datedepartcorige.getMonth() + 1).toString().padStart(2, '0');
  const anneeDepart = datedepartcorige.getFullYear();

  const date = document.getElementById("date");
  const date1 = document.getElementById("date1");

  date.innerHTML = "date d'arrivé " + jourArrive + "/" + moisArrive + "/" + anneeArrive;
  date1.innerHTML = "date depart " + jourDepart + "/" + moisDepart + "/" + anneeDepart;
}

