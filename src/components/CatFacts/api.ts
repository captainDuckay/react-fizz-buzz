export const getFacts = async (): Promise<Response> => {
  return await fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
}

