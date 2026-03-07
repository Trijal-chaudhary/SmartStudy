const backendUrl = 'http://localhost:3000'
export const handelUploadQues = async (form) => {
  const response = await fetch('http://localhost:3000/questionSubmit', {
    method: "POST",
    body: form,
    credentials: "include"
  })
  return response.json();
}
export const gettingQuest = async ({ subName, semName, QuesYear, year, marks, Level }) => {
  const response = await fetch(`${backendUrl}/admin/renderQues`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ subName, year, semName, QuesYear, marks, Level }),
    credentials: "include"
  })
  return response.json();
}