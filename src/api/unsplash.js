import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 7757c35c44e6e8e6d83f28a9fc3cd0b95d7cd448cc4bddbb6890bd349b0e2ec1'
  }
});
