# LinguisticHasher

**LinguisticHasher** is a **Python** and **React**-based application that generates numerical representations (**PINs**) of words by analyzing linguistic features of the **Devanagari script**.

## Features

- **Transliteration**: Converts English words to **Devanagari script** using the **indic-transliteration** library.
- **Linguistic Analysis**: Assigns numerical values based on the **curves and strokes** of characters.
- **PIN Generation**: Produces a **4-digit PIN** reflecting the structural aspects of the word.
- **FastAPI Backend**: Handles **transliteration** and processing tasks efficiently.
- **Chakra UI Frontend**: Offers a **clean and modern** user interface with **smooth animations**.

## Tech Stack

### Frontend

- **React (Next.js)**
- **Chakra UI** (for styling)
- **Framer Motion** (for animations)
- **Axios** (for HTTP requests)

### Backend

- **Python**
- **FastAPI**
- **indic-transliteration**

## Getting Started

### Prerequisites

- **Node.js** and **npm**
- **Python 3.7** or higher

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yashwanthvarre/LinguisticHasher.git
   cd LinguisticHasher
2. **Set up the backend**:
   
   ```bash
    cd backend
    python -m venv venv
    source venv/bin/activate
    # On Windows: venv\Scripts\activate
    pip install -r requirements.txt
    uvicorn app.main:app --reload

3. **Set up Frontend**
    ```bash
    cd ../frontend
    npm install
    npm run dev

### Access the application:
- Open your browser and navigate to http://localhost:3000 to use the application.
- Enter an English word into the input field.
- The application transliterates the word into Devanagari script.
- It analyzes the linguistic features and generates a unique 4-digit PIN.
- The PIN is displayed on the screen.

  ### Results:
![Result](https://github.com/yashwanthvarre/LinguisticHasher/blob/57f452faa6cdc7b280d362e06799b0e30adccf4f/Results/Screenshot%202025-06-09%20at%2010.17.20%E2%80%AFPM.png)

### License
This project is licensed under the MIT License. See the LICENSE file for details.
