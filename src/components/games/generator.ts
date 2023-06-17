const words = [
  'front',
  'desk',
  'cot',
  'crib',
  'express',
  'checkout',
  'kiosk',
  'fitness',
  'centre',
  'hairdryer',
  'indoor',
  'swimming',
  'pool',
  'in-room',
  'safe',
  'iron',
  'laundry',
  'service',
  'walk-in',
  'shower',
  'blanket',
  'duvet',
  'hand',
  'lotion',
  'pillow',
  'shampoo',
  'sheet',
  'shower',
  'gel',
  'soap',
  'Toiletries',
  'Bedclothes'
]

// Spanish translations for the words
const translations: Record<string, string> = {
  '24-hour': '24 horas',
  front: 'frente',
  desk: 'escritorio',
  cot: 'cuna',
  crib: 'cuna',
  express: 'expreso',
  checkout: 'salida',
  kiosk: 'quiosco',
  fitness: 'aptitud',
  centre: 'centro',
  hairdryer: 'secador de pelo',
  indoor: 'interior',
  swimming: 'natación',
  pool: 'piscina',
  'in-room': 'en habitación',
  safe: 'seguro',
  iron: 'hierro',
  laundry: 'lavandería',
  service: 'servicio',
  'walk-in': 'de paso',
  shower: 'ducha',
  blanket: 'manta',
  duvet: 'edredón',
  hand: 'mano',
  lotion: 'loción',
  pillow: 'almohada',
  shampoo: 'champú',
  sheet: 'sábana',
  gel: 'gel',
  soap: 'jabón',
  Toiletries: 'Artículos de aseo',
  Bedclothes: 'Ropa de cama'
}

const generateQuestions = (words: string[]) => {
  return words.map((word) => {
    const incorrectOptions = words
      .filter((option) => option !== word)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)

    const options = [word, ...incorrectOptions].sort(() => 0.5 - Math.random())

    return {
      word,
      label: '',
      options: options,
      correctAnswerIndex: options.indexOf(word),
      correctAnswerTranslation: translations[word] || ''
    }
  })
}

export const questions = generateQuestions(words)
