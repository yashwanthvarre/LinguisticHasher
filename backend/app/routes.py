from fastapi import APIRouter
from app.utils import generate_linguistic_pin

router = APIRouter()

@router.get("/generate-pin")
def get_pin(word: str):
    pin, devnagari_word = generate_linguistic_pin(word)
    return {"word": word, "pin": pin, "devnagari_word": devnagari_word} 