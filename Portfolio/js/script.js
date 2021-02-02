var bezoeker = {
    voornaam : prompt("Wat is je voornaam"),
   
    leeftijd : prompt("wat is je leeftijd"),
};




document.querySelector("#Voornaam").innerHTML = (bezoeker.voornaam)

document.querySelector("#Leeftijd").innerHTML = (bezoeker.leeftijd)



if (bezoeker.leeftijd == 19){
    document.body.style.backgroundColor = "green";
}
if (bezoeker.leeftijd == null){
    document.body.style.backgroundColor = "purple";
};
