import unicodedata

def count_strokes(char):
    """
    Determines stroke complexity of a character.
    - Uses Unicode decomposition for Hangul.
    - Uses stroke count data for Kanji (Japanese).
    - Uses simple heuristic for other scripts.
    """
    strokes = 0

    # Korean: Count jamo components
    if 'Hangul' in unicodedata.name(char):
        strokes += len(unicodedata.normalize('NFD', char))  # More jamo = More complexity
    
    # Japanese Kanji: Assign arbitrary stroke count (database lookup can improve this)
    kanji_stroke_data = {'日': 4, '本': 5, '学': 8, '生': 5}
    if char in kanji_stroke_data:
        strokes += kanji_stroke_data[char]

    # General heuristic for other languages (curves = more strokes)
    if char in "आईऊघठधफझशष":
        strokes += 3  # More curves
    elif char in "कगटडतदनपबमयरल":
        strokes += 2  # Medium complexity
    else:
        strokes += 1  # Simple characters

    return strokes
