import { IResolvers } from "graphql-tools"

const query:IResolvers = {
    Query: {
        hello(): string{
            return 'Hello world'
        },
        helloWithName(__:void,{name}):string{
            return `Hello world ${name}`
        },
        helloToCourse():string{
            return 'Hello world into graphQL course'
        }
    }
}

export default query;