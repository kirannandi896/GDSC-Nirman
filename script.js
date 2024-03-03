function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

  
function calpol(){
    if(confirm("Are you sure you want to call police?")){
        window.open("tel:100", "_self");
    }
}

function calfire(){
    if(confirm("Are you sure you want to call fire?")){
        window.open("tel:101", "_self");
    }
}

function calamb(){
    if(confirm("Are you sure you want to call ambulance?")){
        window.open("tel:102", "_self");
    }
}

function caldcu(){
    if(confirm("Are you sure you want to call disaster control unit?")){
        window.open("tel:108", "_self");
    }
}

function flood(){
    window.open("flood/flood.html", "_self");
}

function earthq(){
    window.open("earthq/earthq.html", "_self");
}
function tsunami(){
    window.open("tsunami/tsunami.html", "_self");
}
function wildfire(){
    window.open("wildfire/wildfire.html", "_self");
}
function hurricane(){
    window.open("hurricane/hurricane.html", "_self");
}
function drought(){
    window.open("drought/drought.html", "_self");
}
function tornado(){
    window.open("tornado/tornado.html", "_self");
}
function volcano(){
    window.open("volcano/volcano.html", "_self");
}
function accidents(){
    window.open("accidents/accidents.html", "_self");
}
function fire(){
    window.open("fire/fire.html", "_self");
}
function terrorist_atk(){
    window.open("terrorist_atk/terrorist_atk.html", "_self");
}
function landslides(){
    window.open("landslides/landslides.html", "_self");
}
function pandemic(){
    window.open("pandemic/pandemic.html", "_self");
}

