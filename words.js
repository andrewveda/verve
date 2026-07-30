// words.js — Centralized Word & Pre-Study Data Store

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
      { id: 5000, phrase: "burn the midnight oil", theme: "Hard Work", hint: "To stay up late working or studying.", dialogue: [{ s: "Speaker", t: "I stayed up until 3 AM finishing my assignment last night." }, { s: "Listener", t: "You really burn the midnight oil when exams are near." }] },
      { id: 5001, phrase: "hit the books", theme: "Hard Work", hint: "To study or begin studying seriously.", dialogue: [{ s: "Speaker", t: "My finals are next week and I haven't started yet." }, { s: "Listener", t: "Then you'd better hit the books before it's too late." }] },
      { id: 5002, phrase: "go the extra mile", theme: "Hard Work", hint: "To put in more effort than what is required or expected.", dialogue: [{ s: "Speaker", t: "I added extra research and visuals to my presentation." }, { s: "Listener", t: "You always go the extra mile — that's why you stand out." }] },
      { id: 5003, phrase: "nose to the grindstone", theme: "Hard Work", hint: "To work hard and continuously without stopping.", dialogue: [{ s: "Speaker", t: "I barely took any breaks during the project week." }, { s: "Listener", t: "Keeping your nose to the grindstone really paid off." }] },
      { id: 5004, phrase: "bite the bullet", theme: "Hard Work", hint: "To endure a difficult situation with courage and determination.", dialogue: [{ s: "Speaker", t: "The syllabus looks overwhelming, but I have to get through it." }, { s: "Listener", t: "Sometimes you just have to bite the bullet and start." }] },
      { id: 5005, phrase: "pull an all-nighter", theme: "Hard Work", hint: "To stay awake the entire night to work or study.", dialogue: [{ s: "Speaker", t: "I couldn't sleep — I was writing my assignment until sunrise." }, { s: "Listener", t: "I had to pull an all-nighter too. But it is worth it!" }] }
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
