const axios = require('axios');

const resolvers = {
    Query: {
        music: async () => {
            const { data: { results } } = await axios.get('https://itunes.apple.com/search?term=nujabes&media=music&limit=10');

            return results;
        }
    }
}

module.exports = resolvers;