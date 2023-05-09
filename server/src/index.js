//TODO
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone")
const typeDefs = require("./schema");
const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const mocks = {
    Query: () => ({
        tracksForHomepage: () => [...new Array(6)],
    }),
    Track: () => ({
        id: () => "track_01",
        title: () => "Luna, The Moon Walker",
        author: () => {
            return {
                name: "Adil Ama",
                photo: "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
            };
        },
        thumbnail: () => "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
        length: () => 1828,
        modulesCount: () => 9,
    }),
}

const startApolloServer = async () => {
    // instantiate ApolloServer with mock data query
    const server = new ApolloServer({
        schema: addMocksToSchema({
            // random data based off our schema structure in typeDefs
            schema: makeExecutableSchema({ typeDefs }),
            // this adds our mock data
            mocks,
        })
    });
    // starts the server
    const { url } = await startStandaloneServer(server);
    console.log(`Server is running! Query at ${url}`);
}

startApolloServer();