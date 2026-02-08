export const handelUploadQues = async (form) => {
  const response = await fetch('http://localhost:3000/questionSubmit', {
    method: "POST",
    body: form,
    credentials: "include"
  })
  return response.json();
}