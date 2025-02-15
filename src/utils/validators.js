// validators.js
// email format check, password length check, etc.
function validateSignupInput(username, email, password) {
    if (!username || !email || !password) {
      throw new Error('All fields are required');
    }
  }
  
  module.exports = {
    validateSignupInput,
  };
  