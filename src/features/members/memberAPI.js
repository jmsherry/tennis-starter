export async function fetchMembers() {
  try {
    const response = await fetch("http://localhost:8000/members");
    if (!response.ok) throw response;
    const data = await response.json();
    return data;
  } catch (err) {
    return Promise.reject(err.statusText || err.message);
  }
}
export async function fetchMember(id) {
  try {
    const response = await fetch(`http://localhost:8000/members/${id}`);
    if (!response.ok) throw response;
    const data = await response.json();
    return data;
  } catch (err) {
    return Promise.reject(err.statusText || err.message);
  }
}

export async function addMember(newMemberData) {
  try {
    const response = await fetch("http://localhost:8000/members", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMemberData),
    });
    if (!response.ok) throw response;
    const data = await response.json();
    return data;
  } catch (err) {
    return Promise.reject(err.statusText || err.message);
  }
}

export async function updateMember(updatedMember) {
  try {
    const response = await fetch(`http://localhost:8000/members/${updatedMember._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMember),
    });
    if (!response.ok) throw response;
    console.log('in PUT, returning', updatedMember)
    return updatedMember;
  } catch (err) {
    return Promise.reject(err.statusText || err.message);
  }
}

export async function removeMember(id) {
  try {
    const response = await fetch(`http://localhost:8000/members/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw response;
    return id; // no body on deletes
  } catch (err) {
    return Promise.reject(err.statusText || err.message);
  }
}
