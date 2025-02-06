from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.translation import translate_word
from app.generate_pin import generate_linguistic_pin

app = FastAPI()

# ✅ Allow frontend (localhost:3000) to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change ["*"] to ["http://localhost:3000"] for more security
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

@app.get("/")
def home():
    return {"message": "Multilingual PIN Generator API"}

@app.get("/generate-pin")
def get_pin(word: str, language: str):
    """
    API Endpoint:
    - Translates English word into selected language.
    - Generates a PIN based on visual complexity.
    """
    translated_word = translate_word(word, language)
    pin = generate_linguistic_pin(translated_word, language)
    return {"word": word, "translated": translated_word, "pin": pin}
