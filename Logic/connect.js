var url;
function connect(o){
    webSocket.ws=new WebSocket(o),
    webSocket.ws.onmessage=function(o){
        obj=JSON.parse(o.data),
        cursors=obj.body.message,
        cursors&&(cursor=cursors,console.log(cursor))
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
function goPlayer2(){
    $(location).attr("href","../Game/player2.html?url="+url)
}
function establishConnectionGame(nombreDeJugador1, nombreDeJugador2){
    $(location).attr("href","../Game/gameTest.html?player1Name="+nombreDeJugador1+"&player2Name="+nombreDeJugador2+"&url="+url)
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