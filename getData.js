import axios from 'axios';
const getData = async (e) => {
  const { data: users } = await axios.get(`https://jsonplaceholder.typicode.com/users/${e}`);
  const { data: posts } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${e}`);

  users.posts = posts;

  return users;
};

export default getData;
