export async function getSession() {
  const session = await fetch("http://localhost:3000/session", {
    credentials: "include",
    mode: "cors",
  });
  return session;
}
