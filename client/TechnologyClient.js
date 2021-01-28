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