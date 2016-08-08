import { GET_HEADER_DATA } from './HeaderActionTypes'

export const getHeaderData = (data) => {
  return {
    type: GET_HEADER_DATA,
    payload: {
      title: 'What the Flux',
      tagline: 'React / Redux Boilerplate',
      imageUrl: './assets/react.svg'
    }
  }
}

