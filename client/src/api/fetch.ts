const BASE_URL = process.env.NEST_BACKEND_URL;

const fetchAPI = async (url: string, options: RequestInit = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export default fetchAPI;