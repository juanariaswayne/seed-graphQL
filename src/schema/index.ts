import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './schema.graphqls';
import resolvers from '../resolvers';

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

export default schema;
