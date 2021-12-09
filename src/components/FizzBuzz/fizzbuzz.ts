export const fizzbuzzLogic = (count:number) => {

  if(count % 15 === 0) {
    return 'fizz buzz'
  } else if(count % 5 === 0) {
    return 'buzz'
  } else if(count % 3 === 0) {
    return 'fizz'
  } else {
    return count.toString()
  }

}

