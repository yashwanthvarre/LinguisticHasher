# 🔡 LinguisticHasher 🔢  
LinguisticHasher is a **Python + React** project that generates numerical representations (PINs) of words based on linguistic features of the **Devanagari script**.

## 📌 Features  
- **Transliteration**: Convert English words to Devanagari using `indic-transliteration`.  
- **Linguistic Analysis**: Assign numerical values based on **curves & strokes**.  
- **PIN Generation**: Generate a 4-digit PIN based on word structure.  
- **FastAPI Backend**: Handles transliteration & processing.  
- **Chakra UI Frontend**: Clean & modern UI with smooth animations.  

## 🚀 Tech Stack  
### **Frontend**  
- **React (Next.js)**  
- **Chakra UI** (for styling)  
- **Framer Motion** (for animations)  
- **Axios** (for API requests)  

### **Backend**  
- **Python (FastAPI)**  
- **Indic Transliteration Library**  
- **CORS Middleware**  

## 📂 Project Structure  
LinguisticHasher/  
│── backend/              # FastAPI backend  
│   ├── app/  
│   │   ├── main.py       # API Routes  
│   │   ├── utils.py      # Transliteration & PIN logic  
│   │   ├── models.py     # (Future scope)  
│   │   └── routes.py     # API route definitions  
│   ├── requirements.txt  # Python dependencies  
│   └── README.md         # Backend-specific docs  
│  
│── frontend/             # React frontend  
│   ├── src/  
│   │   ├── components/   # UI components  
│   │   ├── pages/        # Main pages  
│   │   ├── App.js        # Main entry  
│   │   └── api.js        # Axios API calls  
│   ├── package.json      # Frontend dependencies  
│   └── README.md         # Frontend-specific docs  
│  
│── .gitignore            # Ignore unnecessary files  
│── README.md             # Main project documentation  
│── LICENSE               # MIT License  
└── .env.example          # Environment variable sample  

## 🎯 How It Works  
1. **User enters a word** in the input field.  
2. **Word is sent to FastAPI**, which:  
   - Converts it to **Devanagari script**.  
   - Analyzes **curves, strokes & complexity**.  
   - Generates a **numerical PIN**.  
3. **Frontend displays** the Devanagari transliteration & PIN.  

## 🛠️ Setup Instructions  

### **1️⃣ Clone the Repository**  
git clone https://github.com/YOUR_USERNAME/LinguisticHasher.git  
cd LinguisticHasher  

### **2️⃣ Backend Setup (FastAPI)**  
cd backend  
python3 -m venv venv  # Create virtual environment  
source venv/bin/activate  # (For macOS/Linux)  
venv\Scripts\activate  # (For Windows)  

pip install -r requirements.txt  # Install dependencies  
uvicorn app.main:app --reload  # Start the server  

🔗 **API URL:** http://127.0.0.1:8000/generate-pin?word=yourword  

### **3️⃣ Frontend Setup (React)**  
cd frontend  
npm install  # Install dependencies  
npm run dev  # Start the React app  

🔗 **Frontend URL:** http://localhost:3000/  

## 🔥 API Endpoints  
| **Method** | **Endpoint**             | **Description**               |  
|-----------|------------------------|-----------------------------|  
| `GET`     | `/generate-pin?word=xyz` | Convert word to PIN & Devanagari |  

**Example Response**  
{  
  "word": "yashwanth",  
  "pin": "7352",  
  "devnagari_word": "यशवंत"  
}  

## 🎨 UI Preview  
| **Input** | **Output** |  
|-----------|-----------|  
| `"hello"` | `"हेलो"` |  
| `"yash"` | `"यश"` |  

🔹 **Styled with Chakra UI & Framer Motion animations**.  

## 🎯 Future Enhancements  
- ✅ Multi-language transliteration support.  
- ✅ More linguistic complexity rules for PIN generation.  
- ✅ UI enhancements & Dark Mode.  

## 📝 License  
This project is licensed under the **MIT License**.  

📌 **Contributions are welcome!** If you find a bug or want to add features, feel free to **fork & contribute**. 🚀  

## 📧 Contact  
- **GitHub**: (https://github.com/yashwanthvarre)  

