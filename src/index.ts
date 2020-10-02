/**
 * Context: ../filename#ContextType
 *
 */
interface Config {
  exports: string[];
}

export const plugin = (
  schema: any,
  rawDocuments: any,
  config: Config
) => {
  return `export {\n${config.exports
    .map((a) => `  ${a}`)
    .join(",\n")}\n}`;
};

// import {MessageHandlerContext} from '../types'
// import {AnswerAcceptQuery} from './event-consumer';

// export interface EventResolvers {
//   AnswerAccept: (msg: AnswerAcceptQuery, ctx: MessageHandlerContext) => Promise<any>,
// }
