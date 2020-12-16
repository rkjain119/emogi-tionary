import React, { useState } from "react";
import "./styles.css";

const emojiData = {
  "😀": "Grinning Face",
  "😉": "winking",
  "😅": "grinning face with sweat",
  "😊": "smiling",
  "😪": "sleepy",
  "🤔": "Thinking Face",
  "🤩": "star struck",
  "❤️": "love",
  "🤑": "money mouth",
  "✌️": "Victory Hand",
  "🤯": "Exploding Head"
};

let emojisInData = Object.keys(emojiData);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function handleUserInput(event) {
    let userInput = event.target.value;
    let meaning = emojiData[userInput];

    if (meaning === undefined) {
      meaning = "Sorry emoji not found 😅";
    }
    setMeaning(meaning);
  }

  function handleUserClick(emoji) {
    let meaning = emojiData[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji-tionary 📖</h1>
      <h3>Find Your Emoji 🔍</h3>
      <input
        placeholder="Enter Emoji or Click on Emoji's"
        onChange={handleUserInput}
      />
      <h2>👉 {meaning} 👈</h2>
      <h3>Emoji's List ✔️</h3>

      {emojisInData.map((emoji) => {
        return (
          <span
            onClick={() => handleUserClick(emoji)}
            style={{ padding: "0.4rem", fontSize: "2rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
//https://emoji-api.com/emojis?search=computer&access_key=2ad4793ba8ac476ccbabd6d1a906305b608ebca8
