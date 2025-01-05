export async function getSession() {
  const session = await fetch("http://localhost:3000/session", {
    credentials: "include",
    mode: "cors",
  });
  //   console.log(session);
  return session;
}
