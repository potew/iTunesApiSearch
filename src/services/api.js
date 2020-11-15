// const axios = require('axios').default;

function handlErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

// export const fetchItems = async (term, entity) => {
//   await axios.get(`https://itunes.apple.com/search?term=${term}&entity=${entity}`)
//     .then(handlErrors)
//     .then((response) =>  console.log(response.results))
// };

export const fetchItems = (term, entity, limit) => {
  return fetch(`
    https://itunes.apple.com/search?term=${term}&entity=${entity}&limit=${limit}`)
    .then(handlErrors)
    .then((response) => response.json())
}