export const PAST_SIMPLE_VERBS = [
  { infinitive: "sleep", past: "slept", spanish: "dormir" },
  { infinitive: "play", past: "played", spanish: "jugar" },
  { infinitive: "work", past: "worked", spanish: "trabajar" },
  { infinitive: "clean", past: "cleaned", spanish: "limpiar" },
  { infinitive: "open", past: "opened", spanish: "abrir" },
  { infinitive: "close", past: "closed", spanish: "cerrar" },
  { infinitive: "study", past: "studied", spanish: "estudiar" },
  { infinitive: "run", past: "ran", spanish: "correr" },
  { infinitive: "go", past: "went", spanish: "ir" },
  { infinitive: "eat", past: "ate", spanish: "comer" },
  { infinitive: "jump", past: "jumped", spanish: "saltar" },
  { infinitive: "dance", past: "danced", spanish: "bailar" },
  { infinitive: "help", past: "helped", spanish: "ayudar" },
  { infinitive: "live", past: "lived", spanish: "vivir" },
  { infinitive: "drink", past: "drank", spanish: "beber" },
  { infinitive: "speak", past: "spoke", spanish: "hablar" },
  { infinitive: "love", past: "loved", spanish: "amar" },
  { infinitive: "hate", past: "hated", spanish: "odiar" },
  { infinitive: "stop", past: "stopped", spanish: "detener" },
  { infinitive: "finish", past: "finished", spanish: "terminar" },
  { infinitive: "visit", past: "visited", spanish: "visitar" },
  { infinitive: "talk", past: "talked", spanish: "hablar / platicar" },
  { infinitive: "brush", past: "brushed", spanish: "cepillar" }, // Replaced second "work" with "brush" for variety
  { infinitive: "feel", past: "felt", spanish: "sentir" }, // Fixed "fell" typo from user request to "felt"
  { infinitive: "come", past: "came", spanish: "venir" },
];

export const EXERCISES = [
  { id: 1, type: "choice", question: "Yesterday, I ___ (go) to the park.", options: ["goes", "went", "goed"], correct: "went" },
  { id: 2, type: "fill", question: "She ___ (watch) a movie last night.", correct: "watched" },
  { id: 3, type: "choice", question: "They ___ (not / eat) dinner at home.", options: ["didn't eat", "don't eat", "didn't ate"], correct: "didn't eat" },
  { id: 4, type: "fill", question: "We ___ (buy) a new car two weeks ago.", correct: "bought" },
  { id: 5, type: "choice", question: "He ___ (drink) all the coffee this morning.", options: ["drank", "drinks", "drunk"], correct: "drank" },
  { id: 6, type: "fill", question: "I ___ (study) hard for the exam.", correct: "studied" },
  { id: 7, type: "choice", question: "Did you ___ (see) the game last night?", options: ["saw", "see", "seen"], correct: "see" },
  { id: 8, type: "fill", question: "They ___ (play) football on Friday.", correct: "played" },
  { id: 9, type: "choice", question: "We ___ (not / go) to the beach yesterday.", options: ["didn't go", "didn't went", "doesn't go"], correct: "didn't go" },
  { id: 10, type: "fill", question: "She ___ (clean) her room this morning.", correct: "cleaned" },
];

export const IDENTIFICATION_EXERCISES = [
  { sentence: "She played her guitar yesterday.", type: "AFFIRMATIVE" },
  { sentence: "They did not eat dinner at home.", type: "NEGATIVE" },
  { sentence: "Did you visit your grandparents?", type: "INTERROGATIVE" },
  { sentence: "I went to the store this morning.", type: "AFFIRMATIVE" },
  { sentence: "He didn't finish the report on time.", type: "NEGATIVE" },
];

export const TEST_QUESTIONS = [
  {
    question: "I ___ (play) football yesterday.",
    options: ["play", "played", "playing"],
    correct: "played",
  },
  {
    question: "She ___ (go) to school this morning.",
    options: ["go", "goes", "went"],
    correct: "went",
  },
  {
    question: "We ___ (not / like) the movie.",
    options: ["didn't like", "don't like", "not liked"],
    correct: "didn't like",
  },
  {
    question: "___ you eat lunch?",
    options: ["Do", "Did", "Does"],
    correct: "Did",
  },
  {
    question: "They ___ (be) very happy.",
    options: ["was", "were", "are"],
    correct: "were",
  },
  {
    question: "He ___ (see) his friend.",
    options: ["see", "saw", "seed"],
    correct: "saw",
  },
  {
    question: "I ___ (not / study) last night.",
    options: ["didn't study", "don't study", "didn't studied"],
    correct: "didn't study",
  },
  {
    question: "___ she clean her room?",
    options: ["Does", "Did", "Do"],
    correct: "Did",
  },
  {
    question: "We ___ (buy) a new book.",
    options: ["buy", "bought", "buys"],
    correct: "bought",
  },
  {
    question: "They ___ (drink) water.",
    options: ["drinked", "drank", "drinks"],
    correct: "drank",
  },
];
