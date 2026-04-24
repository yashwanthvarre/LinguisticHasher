# LinguisticHasher

LinguisticHasher is a full-stack experiment that converts English input into another writing system and generates a four-digit PIN based on the visual structure of the translated characters. The project combines a FastAPI backend with a Next.js frontend and presents the result through a more polished, interactive interface than a typical utility demo.

## Why this project matters

This repo strengthens a frontend-focused resume because it shows:

- React and Next.js UI work beyond a static marketing page
- backend integration with a Python API
- a distinct product idea instead of a generic CRUD clone
- testable UI components and a real verification story

## Product flow

1. A user enters an English word.
2. The backend transliterates it into the selected script or language.
3. The backend analyzes the translated output and converts character complexity into a numeric PIN.
4. The frontend presents the translated result and generated PIN in a visual output panel.

## Tech stack

### Frontend

- Next.js
- React
- TypeScript
- Chakra UI
- Framer Motion
- Three.js / React Three Fiber

### Backend

- Python
- FastAPI
- Uvicorn

## Repository structure

```text
LinguisticHasher/
├── backend/
│   ├── app/
│   │   ├── generate_pin.py
│   │   ├── main.py
│   │   ├── translation.py
│   │   └── visual_features.py
│   └── requirements.txt
├── frontend/
│   ├── __tests__/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── theme.ts
│   │   └── utils/
│   └── package.json
└── Results/
```

## Getting started

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:3000`.

## API example

`GET /generate-pin?word=signal&language=japanese`

Example response:

```json
{
  "word": "signal",
  "translated": "シグナル",
  "pin": "1234"
}
```

The exact PIN depends on the translated output and character analysis logic.

## Improvements made

- fixed the frontend test suite so it reflects the current UI instead of stale copy
- added a shared Chakra test wrapper using the same theme as the app
- extracted the Chakra theme into a reusable module for app and test consistency
- replaced deprecated Framer Motion component creation with the current API
- rewrote project documentation around architecture, setup, and evidence-backed outcomes

## Results achieved

- frontend test suite now passes: `5/5` suites and `6/6` tests
- frontend production build succeeds with Next.js
- deprecation noise from the previous `motion()` usage was removed
- the repo now has a stronger explanation of what the hashing workflow actually does

## Evidence

- `npm test -- --runInBand --watchAll=false` passes in `frontend/`
- `npm run build` passes in `frontend/`
- coverage output confirms the tested UI components and API utility are exercised

## Limitations

- backend requirements are minimal and should be expanded to pin exact versions
- CORS is currently open to all origins in the FastAPI app and should be tightened before deployment
- frontend coverage is still low for the 3D scene and the full request lifecycle

## Future improvements

- add backend tests for transliteration and PIN generation
- pin Python and frontend dependency versions more tightly
- cover loading, error, and success flows with additional UI tests
- document the supported languages and exact hashing rules in more detail

## Resume-ready highlights

- Built a full-stack transliteration and PIN-generation tool using Next.js, TypeScript, and FastAPI, connecting an interactive frontend to a Python API workflow.
- Improved frontend reliability by aligning tests with the current UI, centralizing theme configuration, and restoring a clean passing test suite and production build.
