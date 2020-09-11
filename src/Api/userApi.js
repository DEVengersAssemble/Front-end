import axios from 'axios';

export const sendLogOutReq = async () => {
  const { data } = await axios.post('/back/signOut');
  console.log('sendLogOutReq: ', data);
  return data;
};
