import client from "./ApiClient"

export const getTechnology = () => {
  return client("technologies", { method: "GET" })
}

export const postTechnology = (body) => {
  return client("technologies", {
    body,
    method: "POST"
  })
}

export const updateTechnology = (id, body) => {
  return client(`technologies/${id}`, {
    body,
    method: "PUT"
  })
}

export const deleteTechnology = (id) => {
  return client(`technologies/${id}`, {
    method: "DELETE"
  })
}