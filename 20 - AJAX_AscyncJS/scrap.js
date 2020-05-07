const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
  ];

  const getData = async function() {
      try {
          const [ users, posts, albums ] = await urls.map(url => fetch(url))
            
            console.log('users', users);
            console.log('posts', posts);
            console.log('albums', albums);
      } catch (err) {
          console.log('Whoopsie!', err);
      }
  }

