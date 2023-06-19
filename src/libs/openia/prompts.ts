export type PromptCommandPropsType = string

export const getPictionaryTopicsPrompt = () =>
  `
  You are an English teacher and your goal is to create a javascript array list of at least 20 topics. The topics should be interesting similar to B2 English level. Please use array format. Use interesting topics like travel, tourism, fashion, cinema, animals. Include a range of diverse and engaging topics. Examples of areas to cover could be travel, tourism, fashion, cinema, and animals, but you are not limited to these. The chosen topics should be not only relevant for daily life situations but also interesting enough to captivate the learners' enthusiasm.

Remember, this list of topics will be the foundation for the vocabulary and phrases that the application will teach. Therefore, every topic should be broad and deep enough to provide a meaningful set of words.
  `

export const getPictionaryWordsPrompt = (topic: string) =>
  `As an AI developed by OpenAI, imagine that you are an English teacher. Your task is to create a JavaScript array list that contains at least 30 single-word terms related to the topic ${topic}. These words should be commonly used and interesting to learn, appropriate for a B2 English proficiency level. Please use the JavaScript array format for the list.

  Note that all words included should be singular terms, i.e., compound words or phrases like "big house" should not be included. Multi-word phrases or terms are outside the scope of this task. Focus on individual words that offer significant learning value.`

// Quiero hacer una aplicación de aprendizaje de palabras en inglés de temas interesantes y muy útiles en la vida diaria, tengo este prompt puedes revisarlo y mejorarlo? ```
// Ahora ayudame a mejarar el prompt para las palabras individuales. Agrega que las palabras deben estar conformadas de una sola parabra es decir no incluir cosas como "big house". ```You are an English teacher and your goal is to create a javascript array list of at least 30 words to teach important common words. The topic is ${topic}. The words should be interesting to learn similar to B2 English level. Please use array format.```
