import client from "./ApiClient"

export const getSkill = () => {
  return client("skills", { method: "GET" })
}

export const postSkill = (body) => {
  return client("skills", {
    body,
    method: "POST"
  })
}

export const updateSkill = (id, body) => {
  return client(`skills/${id}`, {
    body,
    method: "PUT"
  })
}

export const deleteSkill = (id) => {
  return client(`skills/${id}`, {
    method: "DELETE"
  })
}