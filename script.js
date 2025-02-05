// Array of 50 random nouns (subjects or objects)
const nouns = [
    "cat", "dog", "bird", "fish", "elephant", "tiger", "lion", "monkey", "rabbit", "horse",
    "car", "train", "boat", "plane", "bicycle", "motorcycle", "truck", "rocket", "submarine", "bus",
    "child", "teacher", "doctor", "farmer", "artist", "dancer", "musician", "engineer", "chef", "scientist",
    "apple", "banana", "orange", "grape", "watermelon", "strawberry", "mango", "cherry", "pineapple", "peach",
    "computer", "phone", "robot", "guitar", "piano", "drum", "book", "camera", "lamp", "television"
];

// Array of 50 verbs (actions that work well with the nouns)
const verbs = [
    "jumps", "runs", "flies", "swims", "climbs", "dances", "sings", "paints", "reads", "writes",
    "drives", "rides", "throws", "catches", "kicks", "hugs", "waves", "laughs", "cries", "smiles",
    "builds", "destroys", "fixes", "opens", "closes", "pushes", "pulls", "draws", "cooks", "eats",
    "drinks", "listens", "speaks", "whispers", "shouts", "thinks", "jokes", "teaches", "learns", "practices",
    "sneezes", "coughs", "sleeps", "wakes", "dreams", "explores", "discovers", "hides", "searches", "finds"
];

// Array of 50 adverbs (describe how the verb is performed)
const adverbs = [
    "quickly", "slowly", "gracefully", "awkwardly", "happily", "sadly", "angrily", "gently", "loudly", "quietly",
    "eagerly", "reluctantly", "cautiously", "boldly", "bravely", "nervously", "clumsily", "smoothly", "wildly", "calmly",
    "cheerfully", "seriously", "silently", "noisily", "fiercely", "tenderly", "elegantly", "warmly", "coldly", "politely",
    "rudely", "mysteriously", "curiously", "urgently", "carefully", "recklessly", "joyfully", "thoughtfully", "diligently", "passionately",
    "unexpectedly", "generously", "selfishly", "sensibly", "irrationally", "dramatically", "casually", "enthusiastically", "deliberately", "hastily"
];

// Function to generate a random message
function generateRandomMessage() {
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomAdverb = adverbs[Math.floor(Math.random() * adverbs.length)];
    
    return `The ${randomNoun} ${randomVerb} ${randomAdverb}.`;
}

// Testing the function
console.log(generateRandomMessage());