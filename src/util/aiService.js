const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

export const getEmbeddings = async (text) => {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/text-embedding-004:embedContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "models/text-embedding-004",
        content: { parts: [{ text }] },
      }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP error! Status: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  return data.embedding.values;
};

export const cosineSimilarity = (vecA, vecB) => {
  let dotProduct = 0, magnitudeA = 0, magnitudeB = 0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    magnitudeA += vecA[i] ** 2;
    magnitudeB += vecB[i] ** 2;
  }
  return magnitudeA && magnitudeB
    ? dotProduct / (Math.sqrt(magnitudeA) * Math.sqrt(magnitudeB))
    : 0;
};

