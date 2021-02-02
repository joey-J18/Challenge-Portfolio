var bezoeker = {
    voornaam : prompt("Wat is uw voornaam + Achternaam"),
   
    leeftijd : prompt("wat is uw leeftijd"),
};




document.querySelector("#Voornaam").innerHTML = (bezoeker.voornaam)

document.querySelector("#Leeftijd").innerHTML = (bezoeker.leeftijd)



if (bezoeker.leeftijd == 19){
    document.body.style.backgroundColor = "green";
}
if (bezoeker.leeftijd == null){
    document.body.style.backgroundColor = "purple";
};
