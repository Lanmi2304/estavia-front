"use client";

export default function Client() {
  return (
    <div>
      <h1>Hello world</h1>
      <button
        onClick={async () => {
          try {
            const response = await fetch(
              "http://localhost:3000/api/auth/sign-in/email",
              {
                mode: "cors",
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: "milanpavlovic413@gmail.com",
                  password: "password123",
                }),
                credentials: "include",
              }
            );

            const data = await response.json();
            console.log("Login successful:", data);
          } catch (error) {
            console.error("Login failed:", error);
          }
        }}
      >
        Login
      </button>

      <br />
      <button> </button>
    </div>
  );
}
