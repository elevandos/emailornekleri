/**
 * Maks API call to OPEN AI
 * @param {string} query Search input text
 * @returns {string} Result based on query passed
 */
export const fetchResult = async (query) => {
  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchQuery: query }),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
