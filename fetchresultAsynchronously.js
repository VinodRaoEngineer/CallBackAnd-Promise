// 6. Fetch results asynchronously.
// Write a function that asynchronously fetches data from an API
// [ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.

async function fetchDataFromAPI() {
    try {
      
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      
      const data = await response.json();
  
      
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  
  fetchDataFromAPI();
  