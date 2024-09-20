import axios from "axios";

export const getProducts = async (callback, limit) => {
  axios.get(`https://api.escuelajs.co/api/v1/products?offset=1&limit=${limit}`).then((res) => {
    callback(res.data);
  });
};
