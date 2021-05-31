var listAvailableServers = [];

function entablishConnection(e) {
    //$(location).attr("href", "./Game/menu.html?url=" + e)
    $(location).attr("href", "./Game/player1.html?url=" + e)
}

function availableServersToDiv(e, name) {
    //alert("discover.js availableServersToDiv name: "+name); //test wwun
    if (e && e.includes(":") && e.includes(".") && name.includes("+")) {
        var nombre = name.split('+')[1];
        //var nombre = 'Test';
        listAvailableServers.push(e);
        var t = e.split(":")[1].split("."),
            n = '<button class="btn-server" type="button" id="' + (e + 2) + '" class="buttonPr" onclick="entablishConnection(\'' + e + "');\" >" + ("Sala" + nombre) + "</button><br>";
        document.getElementById("availableServers").innerHTML += n
    }
    //alert("e: "+e); //wwun
}
var findIpBtimer = 0;
var findIpB = 0;
function onFinishSearch() {
    document.getElementById("box-loading").style.opacity = "0";
    findIpBtimer = findIpBtimer +1;
    if(findIpBtimer> 255)
    {
        findIpBtimer = findIpBtimer=0;
        findIpB= findIpB+1;
    
    //findServers() comentado MHB 

    }
}

function enableLoading() {
    var e = document.getElementById("btn-reload");
    e.className += e.className.replace("disabled", ""), e.disabled = !1;
    var t = document.getElementById("btn-refresh");
    t.className += " disabled", t.disabled = !0, document.getElementById("box-loading").style.opacity = "1"
}

function hideLoading() {
    document.getElementById("box-loading").style.opacity = "0"
}
var Synapse = new window.Synapse(8080);

function findServers() {

if(findIpB==0)
    enableLoading(); 

 //Synapse.findServers(255, 5000, availableServersToDiv, onFinishSearch, onFinishSearch,0,255, findIpB)
 Synapse.findServers(16, 5000, availableServersToDiv, onFinishSearch, onFinishSearch,0,255, -1)
}

function renderLitleStars() {
    for (var e = "", t = 0; t < littleStars.length; t++) e += '<div class="litle-star" style="top: ' + littleStars[t].top + "%;left: " + littleStars[t].left + '%;"></div>';
    document.getElementById("body").innerHTML += e
}

function renderStars() {
    for (var e = "", t = 0; t < stars.length; t++) e += '<img class="star" style="top: calc(' + stars[t].top + "% - 23px); left: calc(" + stars[t].left + '% - 24px);"></img>';
    document.getElementById("body").innerHTML += e
}
$(document).ready(function() {
    hideLoading();
    var e = document.getElementById("btn-refresh");
    e.className += " disabled", e.disabled = !0;
    var t = document.getElementById("btn-reload");
    t.className += " disabled", t.disabled = !0, renderStars(), renderLitleStars(), setTimeout(function() {
        var e = document.getElementById("btn-refresh");
        e.disabled = !1, e.className = e.className.replace("disabled", "enabled")
    }, 2e3)
});