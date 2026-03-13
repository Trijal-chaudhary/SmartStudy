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
export const QuestionInfo = async ({ id }) => {
  const response = await fetch(`${backendUrl}/admin/QuestionInfo`, {
    method: "POST",
    headers: { "COntent-Type": "application/json" },
    body: JSON.stringify({ id }),
    credentials: "include"
  })
  return response.json();
}
export const AddYear = async ({ year, id }) => {
  const response = await fetch(`${backendUrl}/admin/addYear`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ year, id }),
    credentials: "include",
  })
  return response.json();
}
export const changeQuestDet = async (form) => {
  const response = await fetch(`${backendUrl}/admin/changeQues`, {
    method: "POST",
    // headers :{"Content-type" : "application/json"},
    body: form,
    credentials: "include"
  })
  return response.json();
}