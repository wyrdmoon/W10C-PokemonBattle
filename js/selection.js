var userSelection = Cookies.get('selection');
var Veritech = "Veritech(selection-1)";
var Destroid = "Destroid(selection-2)";
var Cyclone = "Cyclone(selection-3)"; 




if(userSelection == 'Veritech') {
   document.getElementById("selection-container").innerHTML = "<p> Veritech </p>"+
   '<img src="http://3.bp.blogspot.com/-13bXDnDVvwM/VMQCtyoVmOI/AAAAAAAAM8g/TGKaZlftUIA/s1600/vf-1s-gerwalk.gif" alt="Veritech">'
} else if(userSelection == 'Destroid') {
document.getElementById("selection-container").innerHTML = "<p> Destroid </p>"+
'<img src="https://vignette.wikia.nocookie.net/macross/images/b/bf/Destroid-tomahawk.gif/revision/latest?cb=20181001001929" alt="Destroid">'
} else if(userSelection == 'Cyclone') {
    document.getElementById("selection-container").innerHTML = "<p> Cyclone </p>"+
    '<img src="http://www.kent.net/robotech/gallery/images/firing.gif" alt="Cyclone">'
} else {
    document.getElementById("selection-container").innerHTML = "<p> Invalid Choice </p>"

}

var userSelection = document.getElementById("userHP");
userSelection.innerHTML = 50;

var computer = document.getElementById("computer");
computer.innerHTML = 50; 

function attackOne() {
    computer.innerHTML = computer.innerHTML -10;
    userSelection.innerHTML = userSelection.innerHTML -5;

    if(computer.innerHTML = computer.innerHTML <=0) {
        document.querySelector('body').innerHTML = "<p>VICTORY</p>"
    }
    
    }
    
    function attackTwo() {
        computer.innerHTML = computer.innerHTML -5;
        userSelection.innerHTML = userSelection.innerHTML -10;
    
        if(computer.innerHTML = computer.innerHTML <=0) {
            document.querySelector('body').innerHTML = "<p>VICTORY</p>"
        }

    }
    function attackThree() {
        computer.innerHTML = computer.innerHTML -5;
        userSelection.innerHTML = userSelection.innerHTML -3;
    
        if(computer.innerHTML = computer.innerHTML <=0) {
            document.querySelector('body').innerHTML = "<p>VICTORY</p>"
        }
    }

    function attackFour() { 
        computer.innerHTML = computer.innerHTML -3;
        userSelection.innerHTML = userSelection.innerHTML -2;
    
        if(computer.innerHTML = computer.innerHTML <=0) {
            document.querySelector('body').innerHTML = "<p>VICTORY</p>"
        }
    }

