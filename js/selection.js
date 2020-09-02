
var mecha_images={
    mecha_1: "https://external-preview.redd.it/yWpSKAumCrD6OBcs0geVMQQb2I-5H98Vi1ZegyokHUY.jpg?auto=webp&s=3d19368e9c2968e1740e6c3c195a896209a283dc",
    mecha_2: "https://images4.sw-cdn.net/product/picture/710x528_28048643_15130128_1561483761.jpg",
    mecha_3: "https://www.kent.net/robotech/mecha/rdf/vf-1j-battloid.gif"
}







var user = {
    mecha_name : Cookies.get("user_mecha"),
    current_health : Cookies.get("user_currentHealth"),
    maximum:Cookies.get("user_maximum")
}

var comp = {
    mecha_name : Cookies.get("com_mecha"),
    current_health : Cookies.get("computer_currentHealth"),
    maximum:Cookies.get("comp_maximum")
}
checkWinner()
var user_html = document.getElementById("user");

var user_image = document.createElement("img");
user_image.setAttribute("src",mecha_images[user.mecha_name]);

user_html.appendChild(user_image);

var comp_html = document.getElementById("computer");

var comp_image = document.createElement("img");
comp_image.setAttribute("src",mecha_images[comp.mecha_name]);

comp_html.appendChild(comp_image);

var user_score = document.createElement("h3");
var comp_score = document.createElement("h3");

user_score.innerHTML= user.current_health + "/" + user.maximum;
user_score.setAttribute("id","user_score");

user_html.appendChild(user_score);

comp_score.innerHTML= comp.current_health + "/" + comp.maximum;
comp_score.setAttribute("id","comp_score");

comp_html.appendChild(comp_score);


function attack1(lower_limit,upperlimit){

    console.log(lower_limit);
    var randomdg =lower_limit + Math.round(Math.random()*(upperlimit-lower_limit));
    comp.current_health -= randomdg;
    updateCookies()
    checkWinner();
    computer_attack();
    updateCookies()
    checkWinner();
    updateHtml();

    
}





function updateCookies(){
    Cookies.set("user_currentHealth",user.current_health);
    Cookies.set("computer_currentHealth",comp.current_health);

}
function updateHtml(){

    var user_score = document.getElementById("user_score");
    user_score.innerHTML= user.current_health + "/" + user.maximum;
    var comp_score = document.getElementById("comp_score");
    comp_score.innerHTML= comp.current_health + "/" + comp.maximum;

   
}

function computer_attack(){
    var randomdg = Math.round(Math.random()*35);
    user.current_health -= randomdg;

}
function checkWinner(){
    var body_html = document.getElementsByTagName("body");
    if(user.current_health <= 0){
        body_html[0].innerHTML = " YOU LOST ";

    }
    else  if(comp.current_health <= 0){
        body_html[0].innerHTML = " YOU WIN, CONGRATS ";

    }

}


