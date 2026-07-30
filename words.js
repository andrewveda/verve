// words.js — Centralized Word Data Store

export const VOCAB_PACKS = [
  {
    category: "Vocabulary",
    id: "vocab1",
    name: "The Tenacious Lexicon",
    sub: "Hard work & perseverance",
    icon: "📖",
    words: [
      { id: 6000, phrase: "tenacious", theme: "Hard Work", hint: "Holding firm to a purpose or opinion.", dialogue: [{ s: "Speaker", t: "She was tenacious in pursuing her degree despite working two jobs." }, { s: "Listener", t: "Her persistence paid off." }] },
      { id: 6001, phrase: "assiduous", theme: "Hard Work", hint: "Showing great care and perseverance.", dialogue: [{ s: "Speaker", t: "His assiduous research resulted in a breakthrough." }, { s: "Listener", t: "Hard work truly bears fruit." }] }
    ]
  },
  {
    category: "Idioms",
    id: "idioms1",
    name: "Burn the Midnight Oil",
    sub: "Hard work, discipline & study",
    icon: "📘",
    words: [
      { id: 5000, phrase: "burn the midnight oil", theme: "Hard Work", hint: "To stay up late working or studying.", dialogue: [{ s: "Speaker", t: "I stayed up until 3 AM finishing my assignment." }, { s: "Listener", t: "You really burn the midnight oil when exams are near." }] },
      { id: 5001, phrase: "hit the books", theme: "Hard Work", hint: "To study or begin studying seriously.", dialogue: [{ s: "Speaker", t: "My finals are next week and I haven't started." }, { s: "Listener", t: "Then you'd better hit the books right now." }] },
      { id: 5002, phrase: "go the extra mile", theme: "Hard Work", hint: "To put in more effort than required.", dialogue: [{ s: "Speaker", t: "I added extra research to my slides." }, { s: "Listener", t: "You always go the extra mile." }] }
    ]
  },
  {
    category: "Other",
    id: "foreign",
    name: "Latin & Foreign Phrases",
    sub: "Latin, French, German & Greek",
    icon: "📌",
    words: [
      { id: 2000, phrase: "carpe diem", theme: "Philosophy", hint: "Seize the day; make the most of the present.", dialogue: [{ s: "Speaker", t: "Why delay your dreams until next year?" }, { s: "Listener", t: "Exactly, carpe diem!" }] }
    ]
  }
];
