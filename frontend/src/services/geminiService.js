import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

export async function generateResumeFeedback(
  resumeText,
  jobDescription,
  role
) {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const prompt = `
Role: ${role}

Resume:
${resumeText}

Job Description:
${jobDescription}

Give ATS analysis, strengths, weaknesses, missing skills and recommendations.
`;

  const result =
    await model.generateContent(prompt);

  return result.response.text();
}