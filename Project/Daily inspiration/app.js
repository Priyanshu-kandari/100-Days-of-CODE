const quoteslist = [
  "Believe you can and you're halfway there 🌟",
  "Small steps every day lead to big results 🚀",
  "Don’t stop when you’re tired. Stop when you’re done 💪",
  "Your only limit is your mind 🧠",
  "Dream big. Start small. Act now ✨",
  "Great things never come from comfort zones 🔥",
  "One day or day one — you decide ⏳",
  "The future depends on what you do today 🌱",
  "Push yourself, because no one else will do it for you 🏋️‍♂️",
  "Focus on progress, not perfection 🎯",
  "Discipline is choosing what you want most over what you want now ⚔️",
  "Hard work beats talent when talent doesn’t work hard 🏆",
  "Don’t wait for opportunity. Create it 🔧",
  "Success is built on persistence, not motivation 🔁",
  "You are stronger than you think 🦁",
  "Believe in yourself and all that you are 🌈",
  "Success is a collection of small efforts repeated daily 🔄",
  "Doubt kills more dreams than failure ever will 💭",
  "Your future is created by what you do today, not tomorrow 📅",
  "Take the risk or lose the chance 🎲"
];



const quote = document.getElementById("quote")
let index = 0;
quote.innerText = quoteslist[index]

setInterval(() => {
    quote.classList.add("fade");

    setTimeout(()=>{
        index = (index+1)%quoteslist.length;
        quote.innerText = quoteslist[index]
        quote.classList.remove("fade");
    },500)
    
}, 3000);