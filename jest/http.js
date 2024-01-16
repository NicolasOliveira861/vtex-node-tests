const axios = require('axios')

class HttpService {
  constructor() {
    this.http = axios.create({
      baseURL: 'https://nicolas--corelabiz.myvtex.com/_v',
      timeout: 10000,
    })
  }

  async get(url) {
    try {
      const { data, status } = await this.http.get(url)

      return {
        data,
        status,
      }
    } catch (err) {
      throw new Error(err)
    }
  }

  async post(url, body) {
    try {
      const { data, status } = await this.http.post(url, {
        body,
      })

      return {
        data,
        status,
      }
    } catch (err) {
      throw new Error(err)
    }
  }
}

module.exports = { HttpService }
