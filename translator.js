// Translator module

const translations = {
    "hello": "Halo",
    "world": "dunia",
    "good": "baik",
    "morning": "pagi",
    "afternoon": "tengahari",
    "evening": "petang",
    "night": "malam",
    "how": "bagaimana",
    "are": "adalah",
    "you": "anda",
    "doing": "melakukan",
    "today": "hari ini",
    "thank": "terima kasih",
    "you": "anda",
    "for": "untuk",
    "using": "menggunakan",
    "this": "ini",
    "translator": "penterjemah",
    // Add more translations here
};

function translate(word) {
    return translations[word] || "Translation not found";
}

module.exports = translate;
