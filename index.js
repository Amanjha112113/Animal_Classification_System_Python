import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENAI_API_KEY);

app.post("/animal-info", async (req, res) => {
  const { animalName } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" }); 

    const result = await model.generateContent(`Give detailed and interesting information about the animal: ${animalName}. Cover appearance, behaviour, facts.`);
    const response = await result.response;

    res.json({ info: response.text() });
  } catch (error) {
    console.error("Gemini API error:", error);
    res.status(500).json({ error: "Gemini API error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});



/*import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY });

app.post("/animal-info", async (req, res) => {
  const { animalName } = req.body;

  try {
    const result = await ai.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: `Give detailed and interesting information about the animal: ${animalName}. Cover appearance, behaviour, facts.` }]
        }
      ],
    });

  app.get("/", (req, res) => {
  res.send("Backend is working ✅");
  });

    res.json({ info: result.text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gemini API error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
*/
