const { API_URL = "http://localhost:8000" } = process.env;

export async function fetchUser(creds) {
  console.log("url", API_URL);
  console.log('creds', creds);
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(creds)
    });
    if (!response.ok) throw response;
    const data = await response.json();
    return data;
  } catch (err) {
    return Promise.reject(err.statusText || err.message);
  }
}