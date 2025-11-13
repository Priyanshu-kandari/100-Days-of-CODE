const olympicsdate = new Date("July 14, 2028 19:00:00").getTime()
function updatecountdown(){
    const now = new Date().getTime()
    const diff = olympicsdate - now


    const days = Math.floor(diff/(1000*60*60*24))
    const hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60))
    const minutes = Math.floor((diff%(1000*60*60))/(1000*60))
    const seconds = Math.floor((diff%(1000*60))/(1000))

    document.getElementById("box1").innerText = days
    document.getElementById("box2").innerText = hours
    document.getElementById("box3").innerText = minutes
    document.getElementById("box4").innerText = seconds

    if(diff <= 0){
        clearInterval(timer)
        document.querySelector(".countdown").innerHTML = "<h2>The Olympics 2028 Has Begun! 🎉</h2>"
    }
}

const timer = setInterval(updatecountdown,1000)
updatecountdown()