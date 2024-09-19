import { type SchemaTypeDefinition } from 'sanity'
import user from '../schema/user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [user],
}
