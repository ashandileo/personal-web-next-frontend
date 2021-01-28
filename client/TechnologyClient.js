import client from "./ApiClient"

export const getTechnology = () => {
  return client("technologies", { method: "GET" })
}