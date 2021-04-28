import { IResolvers } from 'graphql-tools';

const mutation: IResolvers = {
    Mutation: {
        createPerson: async (parent, { fields }, { models }): Promise<any> => {
            try {
                const pp = new models.Person(fields);
                return await pp.save();
            } catch (e) {
                console.log(e);
                return null;
            }
        },
        editPerson: async (parent, { id, fields }, { models }): Promise<boolean | null> => {
            try {
                const { nModified } = await models.Person.updateOne({ _id: id }, fields);
                return nModified > 0;
            } catch (e) {
                console.log(e);
                return null;
            }
        },
        deletePerson: async (parent, { id }, { models }): Promise<boolean | null> => {
            try {
                const { deletedCount } = await models.Person.deleteOne({ _id: id });
                return deletedCount > 0;
            } catch (e) {
                console.log(e);
                return null;
            }
        },
    },
};

export default mutation;
