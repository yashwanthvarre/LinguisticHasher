import axios from "axios";

interface PinResponse {
  pin: string;
  translated: string;
}

export async function fetchPin(word, language): Promise<PinResponse> {
  const response = await axios.get(
    `http://127.0.0.1:8000/generate-pin?word=${word}&language=${language}`
  );
  return response.data;
}
