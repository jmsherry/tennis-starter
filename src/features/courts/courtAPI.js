const { API_URL = "http://localhost:8000" } = process.env;

export async function fetchCourts() {
  try {
    const response = await fetch(`${API_URL}/courts`);
    if (!response.ok) throw response;
    const data = await response.json();
    return data;  
  } catch (err) {
    return Promise.reject(err.statusText || err.message);
  }
}
export async function fetchCourt(id) {
  try {
    const response = await fetch(`${API_URL}/courts/${id}`);
    if (!response.ok) throw response;
    const data = await response.json();
    return data;
  } catch (err) {
    return Promise.reject(err.statusText || err.message);
  }
}

export async function addCourt(newCourtData) {
  try {
    const response = await fetch(`${API_URL}/courts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCourtData),
    });
    if (!response.ok) throw response;
    const data = await response.json();
    return data;
  } catch (err) {
    return Promise.reject(err.statusText || err.message);
  }
}

export async function updateCourt(updatedCourt) {
  try {
    const response = await fetch(`${API_URL}/courts/${updatedCourt._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCourt),
    });
    if (!response.ok) throw response;
    console.log("in PUT, returning", updatedCourt);
    return updatedCourt;
  } catch (err) {
    return Promise.reject(err.statusText || err.message);
  }
}

export async function removeCourt(id) {
  try {
    const response = await fetch(`${API_URL}/courts/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw response;
    return id; // no body on deletes
  } catch (err) {
    return Promise.reject(err.statusText || err.message);
  }
}
