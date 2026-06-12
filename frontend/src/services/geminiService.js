import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

console.log("Gemini Key Loaded:", !!API_KEY);

const genAI = new GoogleGenerativeAI(API_KEY);

export async function generateResumeFeedback(
  resumeText,
  jobDescription,
  role
) {
  try {
    if (!API_KEY) {
      throw new Error(
        "VITE_GEMINI_API_KEY is not configured"
      );
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const prompt = `
You are an ATS Resume Analyzer.

Analyze the following resume against the job description.

Role:
${role}

Resume:
${resumeText}

Job Description:
${jobDescription}

Provide the response in the following format:

ATS Analysis:
- Overall ATS compatibility

Strengths:
- List key strengths

Weaknesses:
- List weaknesses

Missing Skills:
- Skills missing from the resume

Recommendations:
- Specific improvements

Final Verdict:
- Short hiring recommendation
`;

    const result =
      await model.generateContent(prompt);

    const response =
      await result.response;

    return response.text();

  } catch (error) {
    console.error(
      "Gemini API Error:",
      error
    );

    return `AI feedback is currently unavailable.

Error:
${error?.message || "Unknown Error"}`;
  }
}