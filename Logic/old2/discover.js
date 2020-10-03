var listAvailableServers = [];

function entablishConnection(e) {
    $(location).attr("href", "./Game/menu.html?url=" + e)
}

function availableServersToDiv(e) {
    if (e && e.includes(":") && e.includes(".")) {
        listAvailableServers.push(e);
        var t = e.split(":")[1].split("."),
            n = '<button class="btn-server" type="button" id="' + (e + 2) + '" class="buttonPr" onclick="entablishConnection(\'' + e + "');\" >" + ("Sala " + t[t.length - 1]) + "</button><br>";
        document.getElementById("availableServers").innerHTML += n
    }
}

function onFinishSearch() {
    document.getElementById("box-loading").style.opacity = "0"
}

function enableLoading() {
    var e = document.getElementById("btn-reload");
    e.className += e.className.replace(" disabled", ""), e.disabled = !1;
    var t = document.getElementById("btn-refresh");
    t.className += " disabled", t.disabled = !0, document.getElementById("box-loading").style.opacity = "1"
}

function hideLoading() {
    document.getElementById("box-loading").style.opacity = "0"
}
var Synapse = new window.Synapse(8080);

function findServers() {


    enableLoading(); 

    miworker = new Worker("worker.js");
    miworker.postMessage(0);

     miworker2 = new Worker("worker.js");
    miworker2.postMessage(16);

     miworker3 = new Worker("worker.js");
    miworker3.postMessage(32);

     miworker4 = new Worker("worker.js");
    miworker4.postMessage(48);

     miworker5 = new Worker("worker.js");
    miworker5.postMessage(64);

     miworker6 = new Worker("worker.js");
    miworker6.postMessage(80);

     miworker7 = new Worker("worker.js");
    miworker7.postMessage(96);

    miworker8 = new Worker("worker.js");
    miworker8.postMessage(112);

    miworker9 = new Worker("worker.js");
    miworker9.postMessage(128);

    miworker10 = new Worker("worker.js");
    miworker10.postMessage(144);

     miworker11 = new Worker("worker.js");
    miworker11.postMessage(160);

     miworker12 = new Worker("worker.js");
    miworker12.postMessage(176);

     miworker13 = new Worker("worker.js");
    miworker13.postMessage(192);

     miworker14 = new Worker("worker.js");
    miworker14.postMessage(208);

     miworker15 = new Worker("worker.js");
    miworker15.postMessage(224);

     miworker16 = new Worker("worker.js");
    miworker16.postMessage(240);
   // Synapse.findServers(15, 5000, availableServersToDiv, onFinishSearch, onFailServer,1,25)

   
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