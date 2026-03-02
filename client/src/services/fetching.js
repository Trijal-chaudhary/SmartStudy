const Url = 'http://localhost:3000';
export const questionsAre = async ({ Subject, Year }) => {
  const response = await fetch(`${Url}/client/gettingques`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ Subject, Year }),
    credentials: "include"
  })
  return response.json();
}