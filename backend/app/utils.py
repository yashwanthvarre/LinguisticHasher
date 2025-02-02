from indic_transliteration import sanscript
from indic_transliteration.sanscript import transliterate

def analyze_character(char):
    """Dynamically analyze a Devanagari character for curves and strokes."""
    # Define character properties dynamically
    visual_complexity = {
        'अ': (1, 1),  # (curves, strokes)
        'आ': (2, 1),
        'इ': (1, 1),
        'ई': (2, 1),
        'उ': (1, 1),
        'ऊ': (2, 1),
        'ऋ': (2, 2),
        'ए': (1, 2),
        'ऐ': (2, 2),
        'ओ': (1, 2),
        'औ': (2, 2),
        'क': (1, 1),
        'ख': (1, 2),
        'ग': (2, 1),
        'घ': (2, 2),
        'ङ': (2, 2),
        'च': (1, 1),
        'छ': (2, 1),
        'ज': (2, 1),
        'झ': (2, 2),
        'ञ': (2, 2),
        'ट': (1, 1),
        'ठ': (1, 2),
        'ड': (2, 1),
        'ढ': (2, 2),
        'ण': (2, 2),
        'त': (1, 1),
        'थ': (1, 2),
        'द': (2, 1),
        'ध': (2, 2),
        'न': (2, 2),
        'प': (1, 1),
        'फ': (2, 1),
        'ब': (2, 1),
        'भ': (2, 2),
        'म': (2, 2),
        'य': (2, 1),  # Example: 2 curves, 1 stroke
        'र': (1, 1),
        'ल': (1, 1),
        'व': (2, 1),
        'श': (1, 1),
        'ष': (1, 1),
        'स': (1, 1),
        'ह': (1, 2)
    }

    # Extract visual complexity (curves and strokes)
    curves, strokes = visual_complexity.get(char, (0, 0))
    return curves * 3 + strokes * 4  # Weighted logic for scoring

def transliterate_to_devanagari(word):
    """Convert an English word to Devanagari script."""
    if not word.isalpha():
        raise ValueError("Input word must contain only alphabetic characters.")
    return transliterate(word, sanscript.ITRANS, sanscript.DEVANAGARI)

def generate_linguistic_pin(word):
    """Generate a PIN based on linguistic features of Devanagari script."""
    # Transliterate the word to Devanagari
    devnagari_word = transliterate_to_devanagari(word)
    
    # Analyze each character and calculate the PIN
    pin_scores = [analyze_character(char) for char in devnagari_word]
    pin = ''.join(str(score) for score in pin_scores)

    # Ensure the PIN is exactly 4 digits
    while len(pin) < 4:
        pin += pin[0]  # Repeat the first digit to pad
    return pin[:4], devnagari_word  # Truncate to 4 digits

