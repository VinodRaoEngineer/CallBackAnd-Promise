// 8. Get Data from API and Display it on the browser console.
// Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then logs the data to
// the console. For example, you could use the API at https://jsonplaceholder.typicode.com/posts to retrieve a list
// of posts, and then display them to the browser console.


async function fetchDataAndDisplay() {
    try {
      
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
    
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      
      const data = await response.json();
  
      
      console.log('Data from the API:', data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  
  
  fetchDataAndDisplay();
  