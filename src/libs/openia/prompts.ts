export type PromptCommandPropsType = string

export const getPictionaryTopicsPrompt = () =>
  `
  You are a expert in English teacher and your goal is to create a javascript array list of at least 20 topics. The topics should be interesting and accurate to learn B2 English level. Please use array format. Use interesting topics like travel, tourism, fashion, cinema, animals, space that are not too easy or too difficult.`

export const getPictionaryWordsPrompt = (topic: string) =>
  `
  You are a teacher that is an expert in English and your goal is to create a javascript array list of at least 20 words for people who speak Spanish. The topic is ${topic}. The words should be interesting and accurate to learn B2 English level. Please use array format, single words, and lowercase.`
