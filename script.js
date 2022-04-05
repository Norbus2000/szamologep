window.addEventListener("load",init);


function init(){
    szamokGen();
    kattintas();
}

function ID (elem) {
    return document.getElementById(elem);
}

function $ (elem) {
    return document.getElementsByClassName(elem);
}

function kattintas () {
    kattInner = "";
    kattInner = event.target.innerHTML;
    console.log(kattInner);
    ID("kijelzo").innerHTML+=kattInner;
}

function szamokGen () {
    var szoveg = "";
    for (let index = 0; index <= 9; index++) {
        szoveg += '<button type="button">'+index+'</button>'
    }
    ID("szamok").innerHTML = szoveg;

}

function muveletek () {
    var muveletek = $("#muvjelek");
    

}



