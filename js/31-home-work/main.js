//#1
async function getData(segment) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com${segment}`);
    
    if(!response.ok) {
        console.log('HTTP error:', response.status);
        return response.status;
    } 

    const data = await response.json();
    console.log(data);

    return data;
    
  } catch (error) {
    console.log('Мережева помилка', error.message);
    return error.message;
  }
}

//#2
async function postData(segment, data) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com${segment}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),

    });

    if(!response.ok) {
      console.log('HTTP error:', response.status);
      return response.status;
    }

    const result = await response.json();
    console.log('Result:', result);
    return result;

  } catch (error) {
    console.log('Мережева помилка', error.message);
    return error.message;
  }
}

//#3
async function putData(id, data) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });

    if(!response.ok) {
      console.log('url is not correct, status: ', response.status);
      return response.status;
    }

    const result = await response.json();
    console.log('result:', result);
    return result;

  } catch (error) {
    console.log('error', error.message);
    return error.message;
  }
}

//#4
async function patchData(id, data) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if(!response.ok) {
      console.log('server problems, status:', response.status);
      return response.status;
    }

    const result = await response.json();
    console.log('result', result);
    return result;
    
  } catch (error) {
    console.log('error', error.message);
    return error.message;
  }
}

//#5
async function deleteData(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });

    if(!response.ok) {
      console.log(`Failed to delete post with id ${id}. Status: `, response.status);
      return response.status;
    }

    console.log(`Post with id ${id} has been successfully deleted.`);
    return true;
  
  } catch (error) {
    console.log('Error during deletion:', error.message);
    return error.message;
  }
}
const data = {
    id: 2,
    name: 'news',
}

Promise.allSettled([
    getData('/post/1'), 
    postData('/post/1', data), 
    putData(3, data),
    patchData(4, data), 
    deleteData(1)])
    .then((results) => {results.forEach((result, index) => {
        console.log(`result${index + 1}:`, result);
        });
    });
