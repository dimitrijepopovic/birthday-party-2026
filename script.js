const mapUrl = "https://www.google.com/maps/place/44%C2%B003'32.5%22N+20%C2%B010'42.4%22E/@44.0590222,20.175857,788m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d44.0590184!4d20.1784319?entry=ttu&g_ep=EgoyMDI2MDcyNi4wIKXMDSoASAFQAw%3D%3D";

const content = [
  "SAVE THE DATE\n",
  "22.08.2026\n\n",

  "You are hereby cordially invited to the 5th Annual Popović Brothers’ Birthday Celebration (27th overall), held beneath the clear skies of Koštunići, Serbia.\n\n",

  "⸻\n\n",

  "TIME\n\n",
  "1500 hours\n\n",

  "LOCATION\n\n",
  { linkText: '44°03\'32.5"N 20°10\'42.4"E', url: mapUrl },

  "\n\n⸻\n\n",

  "DRESS CODE\n\n",
  "Copy and paste the following prompt into your favorite AI:\n\n",

  {
    boxText: "“Based on everything you know about me—my style, preferences, and personality—create an outfit for a countryside birthday party hosted by two friends. The party will take place on 22.08.2026 in Koštunići, Serbia.”"
  },

  "\n\n",
  "Come dressed exactly as your AI envisioned you.\n\n",

  "⸻\n\n",

  "PROGRAMME OF THE EVENING\n\n",
  "• Prompt readings\n",
  "• AI Fashion Show\n",
  "• Golden Raspberry Awards\n\n",

  "⸻\n\n",

  "RSVP\n\n",
  "Kindly confirm your attendance by 08.08.2026.\n\n",

  "⸻\n\n",

  "Yours sincerely,\n",
  "The Popović Brothers"
];

const container = document.getElementById("typewriter");
const cursor = document.createElement("span");
cursor.className = "cursor";
container.appendChild(cursor);

let itemIndex = 0;
let charIndex = 0;
let currentBoxElement = null;

function typeNextChar() {
  if (itemIndex >= content.length) return;

  const currentItem = content[itemIndex];

  if (typeof currentItem === 'string') {
    if (charIndex < currentItem.length) {
      const char = currentItem.charAt(charIndex);
      const target = char === '\n' ? document.createElement('br') : document.createTextNode(char);
      container.insertBefore(target, cursor);
      charIndex++;
      setTimeout(typeNextChar, 30);
    } else {
      itemIndex++;
      charIndex = 0;
      setTimeout(typeNextChar, 30);
    }
  } else if (typeof currentItem === 'object' && currentItem.url) {
    const a = document.createElement('a');
    a.href = currentItem.url;
    a.target = '_blank';
    a.textContent = currentItem.linkText;
    container.insertBefore(a, cursor);
    itemIndex++;
    setTimeout(typeNextChar, 30);
  } else if (typeof currentItem === 'object' && currentItem.boxText) {
    if (!currentBoxElement) {
      currentBoxElement = document.createElement('div');
      currentBoxElement.className = 'ticket-box';
      container.insertBefore(currentBoxElement, cursor);
    }
    
    if (charIndex < currentItem.boxText.length) {
      const char = currentItem.boxText.charAt(charIndex);
      currentBoxElement.appendChild(document.createTextNode(char));
      charIndex++;
      setTimeout(typeNextChar, 25);
    } else {
      currentBoxElement = null;
      itemIndex++;
      charIndex = 0;
      setTimeout(typeNextChar, 30);
    }
  }
}

typeNextChar();