import { Configuration, OpenAIApi } from 'openai'
import { getPictionaryTopicsPrompt, getPictionaryWordsPrompt } from './prompts'
import { defaultTopics, defaultWords } from './defaults'
import { delay } from 'utils'

const apiKey = import.meta.env.VITE_OPENAI_API_KEY

const configuration = new Configuration({
  apiKey
})

const openai = new OpenAIApi(configuration)

interface ChatCompletion {
  id: string
  object: string
  created: number
  model: string
  usage: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
  choices: Array<{
    message: {
      role: string
      content: string
    }
    finish_reason: string
    index: number
  }>
}

function getArrayFromResponse(
  response: ChatCompletion,
  itemRegex: RegExp = /['"](.*?)['"]/g
): string[] {
  if (response.choices.length > 0) {
    const message = response.choices[0].message
    const itemMatches = message.content.match(itemRegex)

    if (itemMatches) {
      return itemMatches.map((item) => item.replace(/['"]/g, ''))
    }
  }

  return []
}

async function callOpenIAWithRetry(
  prompt: string,
  defaultResponse: any,
  transformResponse: (response: any) => any,
  retryCount: number = 0,
  maxRetries: number = 5
) {
  if (!apiKey) {
    return defaultResponse
  }
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant.'
        },
        {
          role: 'user',
          content: prompt
        }
      ]
    })
    const transformedResponse = transformResponse(
      completion.data as unknown as ChatCompletion
    )
    return transformedResponse
  } catch (error) {
    console.log('[error]', error)

    if (retryCount < maxRetries) {
      console.log(`Retrying (${retryCount + 1}/${maxRetries})...`)

      // Wait for a second (or any other time of your choosing)
      await delay(1000)

      return callOpenIAWithRetry(
        prompt,
        defaultResponse,
        transformResponse,
        retryCount + 1,
        maxRetries
      )
    } else {
      console.log('Max retries reached. Returning default response.')
      return defaultResponse
    }
  }
}

export const getPictinaryTopics = () => {
  return callOpenIAWithRetry(
    getPictionaryTopicsPrompt(),
    defaultTopics,
    (completionData) =>
      getArrayFromResponse(completionData as unknown as ChatCompletion)
  )
}

export const getPictinaryWords = (topic: string) => {
  return callOpenIAWithRetry(
    getPictionaryWordsPrompt(topic),
    defaultWords,
    (completionData) =>
      getArrayFromResponse(completionData as unknown as ChatCompletion)
  )
}
