var bezoeker = {
    voornaam : prompt("Welkom Wat is uw voornaam"),
    
    leeftijd : prompt("Wat is uw leeftijd"),
};




document.querySelector("#Voornaam").innerHTML = (bezoeker.voornaam)

document.querySelector("#Leeftijd").innerHTML = (bezoeker.leeftijd)


if (bezoeker.leeftijd == 16){
    document.body.style.backgroundColor = "orange";
}
if (bezoeker.leeftijd == 17){
    document.body.style.backgroundColor = "blue";
}
if (bezoeker.leeftijd == 18){
    document.body.style.backgroundColor = "gold";
}
if (bezoeker.leeftijd == 19){
    document.body.style.backgroundColor = "green";
}
if (bezoeker.leeftijd == null){
    document.body.style.backgroundColor = "purple";
};