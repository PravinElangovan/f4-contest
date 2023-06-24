export const login = async (username, password) => {
    // Mock implementation for login API call
    // Replace with the actual login API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'atuny0' && password === '9uQFF1Lh') {
          const response = {
            statusCode: 200,
            user: {
              id: '123',
              username: 'atuny0',
              name: 'Alice Tuny',
              email: 'alice@example.com',
            },
          };
          resolve(response);
        } else {
          const response = {
            statusCode: 401,
            message: 'Invalid username or password',
          };
          reject(response);
        }
      }, 1000); // Simulate API delay with setTimeout
    });
  };
  
  export const getUserById = async (id) => {
    // Mock implementation for retrieving user profile
    // Replace with the actual user retrieval API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === '123') {
          const response = {
            statusCode: 200,
            user: {
              id: '123',
              username: 'atuny0',
              name: 'Alice Tuny',
              email: 'alice@example.com',
              // Add other user details as needed
            },
          };
          resolve(response);
        } else {
          const response = {
            statusCode: 404,
            message: 'User not found',
          };
          reject(response);
        }
      }, 1000); // Simulate API delay with setTimeout
    });
  };
  