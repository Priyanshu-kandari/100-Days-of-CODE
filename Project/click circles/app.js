const hellos = ["Hello", "नमस्ते", "নমস্কার", "வணக்கம்", "హలో", "ಹಲೋ", "ഹലോ", "નમસ્તે", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", "ନମସ୍କାର", "নমস্কাৰ", "नमस्कारम्", "जोहा", "कुज़ ज़ांगपो", "राम राम", "जुलाई", "नमस्कार", "नमस्कारम्", "Hello"];

const rand = (arr)=> arr[Math.floor(Math.random()*arr.length)]

function spawnCircle(x,y){
    const circle = document.createElement("div")
    circle.className= ("ripple")

    const size = Math.floor(Math.random()*200)+150;
    circle.style.setProperty("--size", size+"px")

    circle.style.left = x+"px";
    circle.style.top = y+"px"

    const hue = Math.floor(Math.random()*360);
    circle.style.background = `hsl(${hue},70%,60%)`

    const label = document.createElement("div")
    label.className = "label"
    label.textContent = rand(hellos)
    circle.appendChild(label);

    document.body.appendChild(circle)

      setTimeout(() => circle.remove(), 5000);
 }

window.addEventListener("pointerdown", (e) => {
  spawnCircle(e.clientX, e.clientY);
});