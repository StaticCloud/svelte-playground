const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Music {
        trackCensoredName: String
    }

    type Query {
        music: [Music]
    }
`;

module.exports = typeDefs;