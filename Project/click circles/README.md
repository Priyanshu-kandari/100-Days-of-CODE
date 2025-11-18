# HelloRipple 🌈  
An interactive ripple effect project where every tap creates a colorful expanding circle with a random "Hello" from 20+ Indian languages.  
Built using **HTML, CSS, and JavaScript** — no libraries, just pure front-end fun.

---

## 🚀 Features
- 🎨 Colorful animated ripple effect  
- 👆 Appears exactly where the user taps/clicks  
- 🌍 Displays “Hello” in 20+ Indian languages  
- 📱 Fully responsive (auto smaller ripples on mobile)  
- ⚡ Lightweight, smooth, zero dependencies  
- 🧹 Auto-removing ripples for clean DOM  

---

## 🛠️ Tech Stack
- **HTML5**
- **CSS3** (Animations, calc(), variables, media queries)
- **Vanilla JavaScript** (DOM creation, events, randomness)

---

## 📸 Demo  
*(Add your Vercel link here)*  
👉 Live Demo: **https://your-link.vercel.app**

---

## 📁 Project Structure
index.html
style.css
script.js


---

## 🔧 How It Works
- On pointer/touch, a ripple `<div>` is created dynamically.
- JS assigns:
  - Random size  
  - Random background color  
  - A random “Hello” from the array  
- CSS handles animation + responsive adjustments.
- Ripple auto-fades and removes after 5 seconds.

---

## 📱 Responsive Behavior
On screens below **600px**, ripple size automatically reduces:
```css
height: calc(var(--size) - 50px);
width:  calc(var(--size) - 50px);
