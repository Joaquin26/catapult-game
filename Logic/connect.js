var url;
function connect(o){
    webSocket.ws=new WebSocket(o),
    webSocket.ws.onmessage=function(o){
        obj=JSON.parse(o.data),
        cursors=obj.body.message,
        cursors&&(cursor=cursors)
        //cursors&&(cursor=cursors,console.log(cursor))
    },
    webSocket.ws.onclose=function(){
        window.history.go(-2),
        console.log("WS Connection closed.")
    },
    webSocket.ws.onopen=function(){
        console.log("WS Connection opened.")
    }
}
function getParameterByName(o){
    o=o.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
    var e=new RegExp("[\\?&]"+o+"=([^&#]*)").exec(location.search);
    return null===e?"":decodeURIComponent(e[1].replace(/\+/g," "))
}
function goPlayer1(){
    $(location).attr("href","../Game/player1.html?url="+url)
}
/*function goPlayer2(){
    $(location).attr("href","../Game/player2.html?url="+url)
}*/
function goPlayer2(nombreyAvatarDeJugador1){
    //$(location).attr("href","../Game/player2.html?url="+url)
    $(location).attr("href","../Game/player2.html?url="+url+"&player1NameAndAvatar="+nombreyAvatarDeJugador1)
}
function establishConnectionGame(nombreyAvatarDeJugador1="test|batman", nombreyAvatarDeJugador2="Machine|ironman"){
//function establishConnectionGame(nombreyAvatarDeJugador1="test|batman", nombreDeJugador2="Machine", avatarSelectedName2="ironman"){
    $(location).attr("href","../Game/gameTest.html?player1Name="+nombreyAvatarDeJugador1+"&player2Name="+nombreyAvatarDeJugador2+"&url="+url)
}
function goToMenu(nombreyAvatarDeJugador1){ //este es
    $(location).attr("href","../Game/menu.html?player1NameAndAvatar="+nombreyAvatarDeJugador1+"&url="+url)
    //$(location).attr("href","../Game/menu.html?player1NameAndAvatar="+nombreyAvatarDeJugador1+"&url="+url)
}

//wwun: funciones temporales para las pruebas de concepto
function tmpEstablishConnectionGameCue(){
    $(location).attr("href","../Game/pocSensors.html?url="+url)//llama al html del taco
}
function tmpEstablishConnectionGameWhiteBall(){
    $(location).attr("href","../Game/movingWhiteBall.html?url="+url)
}
//fin de funciones temporales para las pruebas de concepto

function goInstructions(){
    $(location).attr("href","../Game/instructions.html")
}
function goBackHome(){
    $(location).attr("href","../index.html")
}
$(document).ready(function(){
    connect(url=getParameterByName("url"))
});