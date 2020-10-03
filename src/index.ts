import { GraphQLSchema, isEnumType, isObjectType } from "graphql";

/**
 * Context: ../filename#ContextType
 *
 */
interface Config {
  exports?: string[];
  allObjectTypes?: boolean;
  allEnumTypes?: boolean;
}

export const plugin = (
  schema: GraphQLSchema,
  rawDocuments: any,
  config: Config
) => {
  const types = Object.keys(schema.getTypeMap());
  let exportNames = config.exports ? [...config.exports] : [];
  if (config.allObjectTypes) {
    exportNames = [
      ...exportNames,
      ...types
        .filter((a) => isObjectType(schema.getType(a)))
        .filter((a) => !a.startsWith("__")),
    ];
  }
  if (config.allEnumTypes) {
    exportNames = [
      ...exportNames,
      ...types
        .filter((a) => isEnumType(schema.getType(a)))
        .filter((a) => !a.startsWith("__")),
    ];
  }
  return `export {\n${exportNames
    .map((a) => `  ${a}`)
    .join(",\n")}\n}`;
};

// import {MessageHandlerContext} from '../types'
// import {AnswerAcceptQuery} from './event-consumer';

// export interface EventResolvers {
//   AnswerAccept: (msg: AnswerAcceptQuery, ctx: MessageHandlerContext) => Promise<any>,
// }
