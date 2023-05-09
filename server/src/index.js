//TODO
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone")
const typeDefs = require("./schema");

const startApolloServer = async () => {
    // instantiate ApolloServer
    const server = new ApolloServer({ typeDefs });
    // starts the server
    const { url } = await startStandaloneServer(server);
    console.log(`Server is running! Query at ${url}`);
}

startApolloServer();