var userSelection = Cookies.get('selection');


if(userSelection == 'Veritech') {
   document.getElementById("selection-container").innerHTML = "<p> Veritech </p>"
} else if(userSelection == 'Destroid') {
document.getElementById("selection-container").innerHTML = "<p> Destroid </p>"
} else if(userSelection == 'Cyclone') {
    document.getElementById("selection-container").innerHTML = "<p> Cyclone </p>"
} else {
    document.getElementById("selection-container").innerHTML = "<p> Invalid Choice </p>"

}