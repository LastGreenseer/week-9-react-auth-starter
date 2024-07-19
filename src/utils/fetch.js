const API_URL = "http://localhost:5001";

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong");
  }
  return response.json();
};

export const registerUser = async (username, password) => {
  const response = await fetch("http://localhost:5001/user/registerUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  return handleResponse(response);
};


