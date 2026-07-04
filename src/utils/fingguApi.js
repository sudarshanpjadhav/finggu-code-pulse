const FINGGU_API_URL = 'http://localhost:5000/api';

const finggu_fetchData = async (code) => {
  try {
    const response = await fetch(`${FINGGU_API_URL}/analyze`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code })
    });
    const data = await response.json();
    return data.feedback;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export { finggu_fetchData, FINGGU_API_URL };