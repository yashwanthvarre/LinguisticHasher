from deep_translator import GoogleTranslator

def translate_word(word, language):
    """
    Translates an English word into the selected language.
    """
    lang_map = {
        "devanagari": "hi",  # Hindi
        "korean": "ko",
        "japanese": "ja",
        "french": "fr",
        "german": "de"
    }
    
    if language not in lang_map:
        return "Language not supported"
    
    translated = GoogleTranslator(source='en', target=lang_map[language]).translate(word)
    return translated
