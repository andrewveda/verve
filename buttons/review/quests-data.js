const TESTS = [
  {
    id: "little-prince-75", questId: "Quest Video Review 1", category: "Literature", difficulty: "Intermediate",
    title: "The Little Prince turns 75 and still remains relevant. Here's why", youtubeId: "gDZ7PTzNJdg", durationHint: 249,
    description: "A short documentary looking at the history and enduring legacy of The Little Prince on its 75th anniversary.",
    questions: [
      { at: 10,  tier: 1, q: "How long has it been since 'The Little Prince' landed on Earth, according to the video?", options: ["50 years", "75 years", "100 years", "25 years"], correct: 1 },
      { at: 35,  tier: 2, q: "What is the designation of the Little Prince's tiny planet?", options: ["C-137", "A-113", "B-612", "Sector 7G"], correct: 2 },
      { at: 55,  tier: 1, q: "Who is the author and illustrator of 'The Little Prince'?", options: ["Victor Hugo", "Jules Verne", "Antoine de Saint-Exupéry", "Marcel Proust"], correct: 2 },
      { at: 75,  tier: 2, q: "The story is heavily based on the author's real-life experience of crashing his plane where?", options: ["The Sahara Desert", "The Amazon Rainforest", "The Swiss Alps", "The Gobi Desert"], correct: 0 },
      { at: 120, tier: 3, q: "How many languages has the book been translated into?", options: ["100", "50", "Over 1000", "345"], correct: 3 },
      { at: 180, tier: 3, q: "Where was the wreckage of Saint-Exupéry's plane finally discovered in 2000?", options: ["The Atlantic Ocean", "The Mediterranean Sea", "The Red Sea", "The English Channel"], correct: 1 }
    ]
  },
  {
    id: "great-books-prince", questId: "Quest Video Review 2", category: "Literature", difficulty: "Advanced",
    title: "The Little Prince: Great Books Explained", youtubeId: "A0wNMvPU16o", durationHint: 870,
    description: "An in-depth explanation of the themes, biographical ties, and philosophical depth of The Little Prince.",
    questions: [
      { at: 30,  tier: 2, q: "Before his fourth birthday, what tragedy struck Antoine de Saint-Exupéry's family?", options: ["His house burned down", "He lost his hearing", "His father died, leaving finances in a precarious state", "They were exiled from France"], correct: 2 },
      { at: 120, tier: 1, q: "What profession did Saint-Exupéry obsessively pursue after his military service?", options: ["Flying and postal aviation", "Naval engineering", "Architecture", "Teaching"], correct: 0 },
      { at: 250, tier: 2, q: "The Little Prince was written and illustrated while the author was in exile in which city?", options: ["London", "New York", "Geneva", "Montreal"], correct: 1 },
      { at: 350, tier: 3, q: "Why did Saint-Exupéry likely remove the drawing of the pilot narrator from the final book?", options: ["He ran out of pages", "His publisher disliked it", "It looked too much like him", "To avoid breaking the fourth wall between fantasy and reality"], correct: 3 },
      { at: 420, tier: 1, q: "What does the little prince draw that the pilot finally understands and accepts?", options: ["A box containing a sheep", "A boa constrictor eating an elephant", "A tiny planet", "A rose"], correct: 0 },
      { at: 550, tier: 3, q: "The invasive baobab trees that threaten the prince's planet are widely seen as a metaphor for what?", options: ["Nazism and fascism", "Environmental destruction", "Greed and capitalism", "Adulthood"], correct: 0 },
      { at: 650, tier: 2, q: "According to the fox, what happens when you tame something?", options: ["It loses its freedom", "You become responsible forever for it", "It will eventually betray you", "You must feed it every day"], correct: 1 },
      { at: 750, tier: 3, q: "How does the Little Prince arrange to return to the stars since his body is too heavy?", options: ["He builds a new airplane", "He negotiates to be bitten by a venomous snake", "He waits for a comet", "He falls asleep in the desert"], correct: 1 }
    ]
  },
  {
    id: "lana-blakely-reflection", questId: "Quest Video Review 3", category: "Book Review", difficulty: "Intermediate",
    title: "The Little Prince: Book Reflection", youtubeId: "4wK_3S5_wzE", durationHint: 466,
    description: "Lana Blakely shares her personal reflections and favorite quotes after reading The Little Prince.",
    questions: [
      { at: 60,  tier: 1, q: "According to the book, what do grown-ups love instead of essential matters like the sound of a person's voice?", options: ["Figures and numbers", "Fancy clothes", "Fast cars", "Long books"], correct: 0 },
      { at: 150, tier: 2, q: "In Lana's reflection, how does she suggest we should define people instead of their resumes?", options: ["By how much money they make", "By what they would write in their diary", "By their academic degrees", "By their physical appearance"], correct: 1 },
      { at: 240, tier: 1, q: "What object in the book symbolizes something you put time and effort into, making it uniquely important to you?", options: ["The Rose", "The Sheep", "The Baobab tree", "The Airplane"], correct: 0 },
      { at: 350, tier: 3, q: "What does the quote say you must endure if you wish to become acquainted with the butterflies?", options: ["The cold winter", "The sting of a bee", "The presence of a few caterpillars", "The darkness of night"], correct: 2 },
      { at: 420, tier: 2, q: "What concept does Lana ask the audience to define for themselves at the very end of the video?", options: ["Success", "Love", "Happiness", "Loneliness"], correct: 2 }
    ]
  },
  {
    id: "seven-life-lessons", questId: "Quest Video Review 4", category: "Philosophy", difficulty: "Intermediate",
    title: "7 life lessons from The Little Prince", youtubeId: "Bc1um5fd5lQ", durationHint: 232,
    description: "Jamil Francis breaks down seven practical life lessons hidden within the simple language of The Little Prince.",
    questions: [
      { at: 30,  tier: 2, q: "Why did the little prince religiously clean out his volcanoes and weed the baobab trees every day?", options: ["Because he was bored", "Because harmless problems can grow to incapacitate you if not handled early", "To impress the rose", "Because it was the law of his planet"], correct: 1 },
      { at: 75,  tier: 1, q: "What transforms a random plant into 'the rose', making it special and precious?", options: ["Its color", "Its smell", "The time and care you put into it", "The soil it grows in"], correct: 2 },
      { at: 120, tier: 1, q: "What did all the adults see when the narrator drew a picture of a boa constrictor digesting an elephant?", options: ["A mountain", "A hat", "A spaceship", "A rock"], correct: 1 },
      { at: 160, tier: 3, q: "How does the narrator interpret the Little Prince's frequent use of silence?", options: ["He forgot his lines", "He was too shy to speak", "He was angry", "Sometimes silence is the best response to avoid deeper misunderstandings"], correct: 3 },
      { at: 200, tier: 2, q: "Which famous quote from the book does the narrator use to wrap up the video?", options: ["To infinity and beyond", "I think, therefore I am", "It is only with the heart that one can see rightly...", "Not all those who wander are lost"], correct: 2 }
    ]
  },
  {
    id: "why-adults-should-read", questId: "Quest Video Review 5", category: "Literature", difficulty: "Intermediate",
    title: "Why Adults Should Read The Little Prince", youtubeId: "bVW1CqI_HlM", durationHint: 193,
    description: "Topher's Library explains why The Little Prince is not just a children's book, but a necessary reminder for adults.",
    questions: [
      { at: 15,  tier: 2, q: "What does the video say adults trade away for efficiency and productivity?", options: ["Wonder and joy", "Money and power", "Sleep and health", "Friendship and love"], correct: 0 },
      { at: 45,  tier: 3, q: "How does The Little Prince gently challenge the adult world?", options: ["By angrily lecturing the reader", "By promoting a political revolution", "By allowing a child to ask honest questions that reveal adult priorities as absurd", "By providing scientific facts"], correct: 2 },
      { at: 75,  tier: 1, q: "How are relationships framed in the story, according to the narrator?", options: ["By financial benefit", "By care and devotion rather than usefulness", "By physical distance", "By biological instinct"], correct: 1 },
      { at: 105, tier: 2, q: "Why are the most important truths in life often invisible?", options: ["Because they require presence and attention to be seen", "Because they are actively hidden from us", "Because they are too small", "Because they only exist in dreams"], correct: 0 },
      { at: 140, tier: 1, q: "Does the book call readers to become childish?", options: ["Yes, it says adults should act like toddlers", "No, it calls for strict maturity", "No, it calls them to recover what is childlike—attentiveness and curiosity", "Yes, by playing more games"], correct: 2 },
      { at: 170, tier: 3, q: "What does the video claim the world suffers from today?", options: ["A lack of information", "A lack of attention", "A lack of technology", "A lack of money"], correct: 1 }
    ]
  },
  {
    id: "six-important-lessons", questId: "Quest Video Review 6", category: "Philosophy", difficulty: "Advanced",
    title: "The 6 most important lessons I learned from 'The Little Prince'", youtubeId: "UAfNBOMUqiQ", durationHint: 860,
    description: "ImaginaryJeremy dives deep into the personal and profound lessons extracted from The Little Prince.",
    questions: [
      { at: 50,  tier: 1, q: "What is the first major lesson the narrator highlights from the opening of the book?", options: ["Always listen to adults", "Hold on to your creativity", "Learn to draw animals", "Never fly a plane"], correct: 1 },
      { at: 150, tier: 2, q: "What tragedy struck Antoine de Saint-Exupéry's family by the time he was 17?", options: ["His father and younger brother both died", "They lost their family home", "He was expelled from school", "They were exiled to South America"], correct: 0 },
      { at: 300, tier: 1, q: "How does the Little Prince react to the narrator's drawing of a box?", options: ["He throws it away", "He cries because it's not a sheep", "He loves it, seeing the exact sheep he wanted inside", "He asks for it to be painted"], correct: 2 },
      { at: 450, tier: 3, q: "Who is widely believed to be the real-life inspiration for the Rose's prickly but tender personality?", options: ["His mother", "His sister", "A childhood friend", "His wife, Consuelo Suncin"], correct: 3 },
      { at: 600, tier: 2, q: "What powerful lesson about love and relationships does the narrator pull from the story?", options: ["Love should always be easy", "To accept happiness is to accept the risk of sadness and loss", "Relationships are a waste of time", "Never trust a fox"], correct: 1 },
      { at: 750, tier: 3, q: "What remains even after a relationship is lost or someone is gone, according to the narrator's interpretation?", options: ["Only regret", "The good moments, memories, and the ways you changed each other", "A physical void", "A sense of relief"], correct: 1 }
    ]
  },
  {
    id: "tedx-lessons-little-prince", questId: "Quest Video Review 7", category: "Psychology", difficulty: "Intermediate",
    title: "Lessons from the 'Little Prince' | Yuliia Syrovatka | TEDxLCCUniversity", youtubeId: "okMH2-oHlh4", durationHint: 610,
    description: "A TEDx talk exploring the dangers of over-planning life and the value of spontaneity, using The Little Prince as a framework.",
    questions: [
      { at: 40,  tier: 1, q: "What line does the speaker say people cross when trying to predict every detail of their lives?", options: ["The line between work and play", "The line of morality", "The line between planning and over-planning", "The line of financial security"], correct: 2 },
      { at: 100, tier: 2, q: "In the movie version of The Little Prince, what does the mother put on her daughter's wall?", options: ["A beautiful painting", "A massive, highly detailed 'life plan' pin board", "A calendar of holidays", "A map of the stars"], correct: 1 },
      { at: 200, tier: 3, q: "According to the cited psychological research, what often dictates our initial desires and choices?", options: ["Social norms and expectations", "Pure genetics", "Our childhood dreams", "Random chance"], correct: 0 },
      { at: 350, tier: 2, q: "What does the speaker suggest over-planning can become a new form of?", options: ["Enlightenment", "Efficiency", "Procrastination", "Meditation"], correct: 2 },
      { at: 500, tier: 1, q: "What symbol from the movie destroys the rigidly organized 'life plan'?", options: ["A rogue asteroid", "A gust of wind", "A toy plane", "A drawing of a sheep"], correct: 2 },
      { at: 550, tier: 3, q: "What kind of intelligence is developed by facing unexpected circumstances and spontaneous decisions?", options: ["Artificial intelligence", "Emotional repression", "Practical intelligence", "Rote memorization"], correct: 2 }
    ]
  },
  {
    id: "academy-conversations-prince", questId: "Quest Video Review 8", category: "Film", difficulty: "Advanced",
    title: "Academy Conversations: The Little Prince", youtubeId: "_EytJo4N1u0", durationHint: 763,
    description: "The director discusses the creative process, animation challenges, and emotional weight of adapting The Little Prince.",
    questions: [
      { at: 30,  tier: 2, q: "Why did the director initially decline to make the movie?", options: ["He disliked the story", "He felt the book was too unique to each reader's imagination to put on screen", "He didn't have the budget", "He was working on Kung Fu Panda"], correct: 1 },
      { at: 80,  tier: 1, q: "Who gave the director a copy of The Little Prince 25 years ago?", options: ["His mother", "A famous producer", "His wife, when they were dating in college", "His college professor"], correct: 2 },
      { at: 150, tier: 3, q: "Who provided the voice for the Little Prince in the original version?", options: ["A famous child actor", "A computer-generated voice", "The director himself", "The director's son, Riley"], correct: 3 },
      { at: 300, tier: 2, q: "What unique approach did the production take to represent the two different worlds in the film?", options: ["Making the film in black and white", "Using CG animation for reality and stop-motion for the Little Prince's world", "Having no dialogue", "Using live-action actors for the adults"], correct: 1 },
      { at: 450, tier: 3, q: "What physical prop did the director use to pitch the movie hundreds of times?", options: ["A 'magic suitcase' full of art", "A fully animated trailer", "A 500-page script", "A drawing of a boa constrictor"], correct: 0 },
      { at: 650, tier: 3, q: "What material was used to build almost everything in the stop-motion segments?", options: ["Clay", "Lego bricks", "Paper", "Sand"], correct: 2 }
    ]
  },
  {
    id: "one-star-reviews-classics", questId: "Quest Video Review 9", category: "Literature", difficulty: "Advanced",
    title: "One star reviews of classic books that actually understood them perfectly", youtubeId: "pbSQ6zuZQQo", durationHint: 2755,
    description: "An analysis of one-star reviews that accurately capture the essence of classic novels, featuring The Great Gatsby, American Psycho, and more.",
    questions: [
      { at: 120, tier: 2, q: "In his defense of The Great Gatsby, what theme does the host say the novel explores extraordinarily well?", options: ["The beauty of unconditional love", "The mechanics of the stock market", "The existential failure of the characters to build a fortress against the future", "The importance of the American dream"], correct: 2 },
      { at: 600, tier: 3, q: "How does the host defend the flat, repetitive prose of American Psycho?", options: ["It was meant to be a children's book", "It reflects the shallow, status-obsessed, nihilistic mindset of the narrator", "The author was rushing to meet a deadline", "It is a direct translation from French"], correct: 1 },
      { at: 1400, tier: 2, q: "What boundary does Kafka frequently dissolve in his writing, according to the video?", options: ["The boundary between the inner psychological world and the external physical world", "The boundary between poetry and prose", "The boundary between human and animal", "The boundary between comedy and tragedy"], correct: 0 },
      { at: 1800, tier: 3, q: "How does the character of Jean-Baptiste Clamence present himself in Albert Camus's 'The Fall'?", options: ["As an innocent victim", "As a cynical 'judge-penitent'", "As a flawless saint", "As a brave soldier"], correct: 1 },
      { at: 2400, tier: 2, q: "How does the host suggest readers should approach Montaigne's essays?", options: ["As a strict historical textbook", "As undeniable facts", "As a conversation with a clever, intellectually humble partner", "As a work of pure fiction"], correct: 2 },
      { at: 2600, tier: 1, q: "What overarching insight does the host draw from these 1-star reviews?", options: ["They often deeply understand the core feature of the book, but view it as a flaw", "The reviewers didn't read the books", "The reviewers are always objectively wrong", "One-star reviews are useless"], correct: 0 }
    ]
  }
];
