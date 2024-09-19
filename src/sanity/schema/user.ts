import { SchemaTypeDefinition } from "sanity";

const user:SchemaTypeDefinition = {
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
        {
            name: 'first_name',
            type: 'string',
            title: 'First Name'
        }, 
        {
            name: 'age',
            type: 'number',
            title: 'Age'
        }, 
        {
            name: 'address',
            type: 'string',
            title: 'Address'
        },
         {
            name: 'image',
            type: 'image',
            title: 'Profile Picture'
        }, 
    ]
}

export default user