const Url = 'http://localhost:3000';
export const questionsAre = async ({ Subject, Year, sem,
  QuesYear,
  marks,
  level }) => {
  const response = await fetch(`${Url}/client/gettingques`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ Subject, Year, sem, QuesYear, marks, level }),
    credentials: "include"
  })
  return response.json();
}