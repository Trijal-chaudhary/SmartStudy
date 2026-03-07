const backendUrl = 'http://localhost:3000'
export const handelUploadQues = async (form) => {
  const response = await fetch('http://localhost:3000/questionSubmit', {
    method: "POST",
    body: form,
    credentials: "include"
  })
  return response.json();
}
export const gettingQuest = async ({ sub }) => {
  const response = await fetch(`${backendUrl}/admin/renderQues`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ sub }),
    credentials: "include"
  })
  return response.json();
}