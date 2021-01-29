import client from "./ApiClient"

export function uploadFile (body) {
  return client("upload", {
    method: "POST",
    body
  })
}