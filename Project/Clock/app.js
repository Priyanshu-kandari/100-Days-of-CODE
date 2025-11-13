const timer = document.getElementById("root");

function timing(){
    const now = new Date();
    const IST = now.toLocaleTimeString();
    timer.innerHTML = IST;
}
setInterval(timing,1000)

timer.style.fontSize = "200px";
timer.style.display = "flex";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";
timer.style.height =  "100vh";