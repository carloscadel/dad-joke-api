const { RESTDataSource } = require('apollo-datasource-rest')

class JokesAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'http://localhost:3000/'
  }

  async getJoke(id) {
    return this.get(`jokes/${id}`)
  }

  async getJokes() {
    return this.get('jokes')
  }

  async postJoke(jokeContent) {
    return this.post('jokes', jokeContent)
  }

  async replaceJoke(joke) {
    return this.put('jokes', joke)
  }

  async updateJoke(joke) {
    return this.patch('jokes', { id: joke.id, joke })
  }

  async deleteJoke(id) {
    return this.delete(`jokes/${id}`)
  }
}

module.exports = JokesAPI
