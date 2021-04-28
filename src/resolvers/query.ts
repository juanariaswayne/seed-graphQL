import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {
        getOnePerson: async (parent, { id }, { models }): Promise<any> => {
            try {
                return models.Person.findById(id);
            } catch (e) {
                console.log(e);
                return null;
            }
        },
        getAllPerson: async (parent, args, { models }): Promise<Array<any> | null> => {
            try {
                return models.Person.find();
            } catch (e) {
                console.log(e);
                return [];
            }
        },
    },
};

// comment

export default query;
