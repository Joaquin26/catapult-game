var Synapse = new window.Synapse(8080);
var ipMin;
self.addEventListener("message", function(e){
	ipMin = e.data
})
function busqueda()
{
Synapse.findServers(15, 5000, availableServersToDiv, onFinishSearch, onFailServer,ipMin,ipMin + 15, -1)

for (var i = 0; i < 256; i++) {
 
 Synapse.findServers(15, 5000, availableServersToDiv, onFinishSearch, onFailServer,ipMin,ipMin + 15, i)

}
}
busqueda();

