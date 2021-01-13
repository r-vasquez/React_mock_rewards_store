export const headers = {
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmY0YzkwOWIxYjllMDAwMjA3OWJjYTUiLCJpYXQiOjE2MDk4Nzc3Njl9.6_JkzqPxY03pJpMbAxbSn16_-zRvQNrEM9Izo5qviXo'
  }
}

export const getUserInfoURL = 'https://coding-challenge-api.aerolab.co/user/me'

export const getProductsURL = 'https://coding-challenge-api.aerolab.co/products'

export const postRedeemCoinsURL = 'https://coding-challenge-api.aerolab.co/user/points'

export const postRequestOptions = rawBody => {
  let myHeaders = new Headers()

  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmY0YzkwOWIxYjllMDAwMjA3OWJjYTUiLCJpYXQiOjE2MDk4Nzc3Njl9.6_JkzqPxY03pJpMbAxbSn16_-zRvQNrEM9Izo5qviXo'
  )
  myHeaders.append('Content-Type', 'application/json')

  return {
    method: 'POST',
    headers: myHeaders,
    mode: 'cors',
    body: rawBody,
    redirect: 'follow'
  }
}
