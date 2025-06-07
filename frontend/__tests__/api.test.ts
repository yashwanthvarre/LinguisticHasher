import axios from "axios";
import { fetchPin } from "../src/utils/api";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;
describe("fetchPin", () => {
  it("fetches PIN and translated word from API", async () => {
    const mockData = {
      data: { pin: "9999", translated: "ありがとう" },
    };
    mockedAxios.get.mockResolvedValue(mockData);
    const result = await fetchPin("hello", "japanese");
    expect(result.pin).toBe("9999");
    expect(result.translated).toBe("ありがとう");
    expect(mockedAxios.get).toHaveBeenCalledWith(
      "http://127.0.0.1:8000/generate-pin?word=hello&language=japanese"
    );
  });
});
