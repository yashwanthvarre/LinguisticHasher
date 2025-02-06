from app.visual_features import count_strokes

def generate_linguistic_pin(word, language):
    """
    Generates a PIN based on the complexity of translated characters.
    """
    pin = ''.join(str(count_strokes(char)) for char in word)

    # Ensure 4-digit PIN
    while len(pin) < 4:
        pin += pin[0]  # Append first digit if too short
    return pin[:4]  # Trim if too long
