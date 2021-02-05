"use strict";
exports.__esModule = true;
exports.client = void 0;
var client_1 = require("@apollo/client");
exports.client = new client_1.ApolloClient({
    uri: process.env.NEXT_PUBLIC_BACKEND_URL,
    cache: new client_1.InMemoryCache({
        typePolicies: {
            User: {
                fields: {
                    roles: {
                        merge: function (_ignored, incoming) {
                            return incoming;
                        }
                    }
                }
            },
            Query: {
                fields: {
                    users: {
                        merge: function (_ignored, incoming) {
                            return incoming;
                        }
                    }
                }
            }
        }
    }),
    credentials: 'include'
});
