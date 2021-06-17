const resolvers = {
  Query: {
    joke: async (_source, _args, { dataSources }) =>
      dataSources.jokesAPI.getJoke(_args.id),
    jokes: async (_source, _args, { dataSources }) =>
      dataSources.jokesAPI.getJokes(),
    rating: async (_source, { id }, { dataSources }) =>
      dataSources.ratingsAPI.getRating(id),
    ratings: async (_source, { jokeId }, { dataSources }) =>
      dataSources.ratingsAPI.getRatings({ jokeId }),
  },
  Joke: {
    ratings: async (parent, _args, { dataSources }) =>
      dataSources.ratingsAPI.getRatings({ jokeId: parent.id }),
  },
  Mutation: {
    rating: async (_source, { jokeId, score }, { dataSources }) => {
      const rating = await dataSources.ratingsAPI.postRating({ jokeId, score })
      return rating
    },
  },
}

module.exports = resolvers
