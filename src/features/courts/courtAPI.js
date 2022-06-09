export async function fetchCourts() {
  try {
    const response = await fetch('http://localhost:8000/courts');
    if (!response.ok) throw response;
    const data = await response.json();
    return data;
  } catch (err) {
    return Promise.reject(err.statusText || err.message);
  }
}
