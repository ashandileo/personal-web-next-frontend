import client from "./ApiClient"

export const getSkill = () => {
  return client("skills", { method: "GET" })
}

export const getSkillDetail = (id) => {
  return client(`skills/${id}`, { method: "GET" })
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
    method: "PATCH"
  })
}

export const deleteSkill = (id) => {
  return client(`skills/${id}`, {
    method: "DELETE"
  })
}