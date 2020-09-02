var mecha = ["mecha_1","mecha_2","mecha_3"];

function game(mecha_name){

    Cookies.set("user_mecha",mecha_name);
    var comp_mecha = mecha[Math.floor(Math.random()*3)];
    Cookies.set("com_mecha",comp_mecha);
    Cookies.set("user_currentHealth","100");
    Cookies.set("computer_currentHealth","100");
    Cookies.set("user_maximum","100");
    Cookies.set("comp_maximum","100");

    window.open("selection.html");

}

