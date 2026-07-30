// words.js — Centralized Word & Pre-Study Data Bank

export const VOCAB_PACKS = [
  {
    category: "Vocabulary",
    id: "vocab1",
    name: "The Tenacious Lexicon",
    sub: "Hard work & perseverance",
    icon: "📖",
    words: [
      { 
        id: 6000, 
        phrase: "tenacious", 
        theme: "Hard Work", 
        hint: "Holding firm to a purpose or opinion; persistent.", 
        dialogue: [
          { s: "Speaker", t: "She was tenacious in pursuing her degree despite working two jobs." },
          { s: "Listener", t: "Her persistence paid off in the end." }
        ] 
      },
      { 
        id: 6001, 
        phrase: "assiduous", 
        theme: "Hard Work", 
        hint: "Showing great care, attention, and effort.", 
        dialogue: [
          { s: "Speaker", t: "His assiduous research resulted in a major academic breakthrough." },
          { s: "Listener", t: "Hard work truly bears fruit." }
        ] 
      }
    ]
  },
  {
    category: "Idioms",
    id: "idioms1",
    name: "Burn the Midnight Oil",
    sub: "Hard work, discipline & study",
    icon: "📘",
    words: [
      { 
        id: 5000, 
        phrase: "burn the midnight oil", 
        theme: "Hard Work", 
        hint: "To stay up late working or studying.", 
        dialogue: [
          { s: "Speaker", t: "I stayed up until 3 AM finishing my assignment." },
          { s: "Listener", t: "You really burn the midnight oil when exams are near." }
        ] 
      },
      { 
        id: 5001, 
        phrase: "hit the books", 
        theme: "Hard Work", 
        hint: "To study or begin studying seriously.", 
        dialogue: [
          { s: "Speaker", t: "My finals are next week and I haven't started." },
          { s: "Listener", t: "Then you'd better hit the books right now." }
        ] 
      }
    ]
  }
];
