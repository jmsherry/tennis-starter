export async function fetchUser(creds) {
  console.log('creds', creds);
  try {
    const response = await fetch('http://localhost:8000/login', {
      method: "POST",
      headers: {
        "content-type": "Application/json",
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