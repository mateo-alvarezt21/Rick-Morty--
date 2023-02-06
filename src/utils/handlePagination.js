export const numbersPage = (location,RESIDENTS_PERPAGE ) =>{
    const quiantityPages = Math.ceil(location?.residents.length / RESIDENTS_PERPAGE)
    const arrayPages = []
    for(let i = 1; i <= quiantityPages; i++){
      arrayPages.push(i)
    }
    return arrayPages
  } 