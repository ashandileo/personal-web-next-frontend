import client from "./ApiClient"

export const getPortfolio = () => {
  return client("portfolios", { method: "GET" })
}

export const getPortfolioDetail = (id) => {
  return client(`portfolios/${id}`, { method: "GET" })
}

export const postPortfolio = (body) => {
  return client("portfolios", {
    body,
    method: "POST"
  })
}

export const updatePortfolio = (id, body) => {
  return client(`portfolios/${id}`, {
    body,
    method: "PATCH"
  })
}

export const deletePortfolio = (id) => {
  return client(`portfolios/${id}`, {
    method: "DELETE"
  })
}