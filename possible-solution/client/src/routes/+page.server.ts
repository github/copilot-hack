// // create sveltekit server function to return data to page on load
// export async function load({ fetch }) {
//   const res = await fetch(`http://localhost:5000/predict?day_of_week=3&airport_id=14771`)
//   const result = await res.json()
//   console.log(result)
//   return result
// }

export async function load({ fetch }) {
  const res = await fetch(`http://localhost:5000/airports`);
  const airports = await res.json();
  // console.log({airports})
  return {airports};
}

export const actions = {
  getDelay: async ({fetch, request}) => {
    // get form data
    const data = await request.formData();

    const day_of_week = data.get('day');
    const airport_id = data.get('airport');

    // make request to server
    const res = await fetch(`http://localhost:5000/predict?day_of_week=${day_of_week}&airport_id=${airport_id}`)
    const result = await res.json();
    return {result};
  }
}