// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'success!');
})

// #2) Run the above promise and make it console.log "success"

promise1.then(console.log)
promise1.then(result => console.log(result));



// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"

const promise2 = Promise.resolve(
    setTimeout(() => {
      console.log('Success!');
    }, 4000)
);

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed').catch(console.log('Ooops something went wrong'));


// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
// No longer works!
// const urls = [
//   'https://swapi.co/api/people/1',
//   'https://swapi.co/api/people/2',
//   'https://swapi.co/api/people/3',
//   'https://swapi.co/api/people/4'
// ]

const urls = [
  'https://jsonplaceholder.typicode.com/users/1',
  'https://jsonplaceholder.typicode.com/users/2',
  'https://jsonplaceholder.typicode.com/users/3',
  'https://jsonplaceholder.typicode.com/users/4'
];

Promise.all(urls.map(url => {
  return fetch(url).then(resp => resp.json());
})).then(results => {
  console.log(results[0].name);
  console.log(results[1].name);
  console.log(results[2].name);
  console.log(results[3].name);
}).catch(error => console.log('Errrorrrrrr', error));



// try with for of

Promise.all(urls.map(url => {
  return fetch(url).then(resp => resp.json());
})).then(results => { for (const person of results) {
  console.log(person.name);
}}).catch(error => console.log('Errrorrrrrr', error));

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it? 
// Yes