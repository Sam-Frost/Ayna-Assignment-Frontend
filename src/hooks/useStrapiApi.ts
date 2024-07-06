// File: hooks/useStrapiApi.js
import { useState } from 'react';
import axios from 'axios';
// import { BACKEND_URL, STRAPI_TOKEN } from '@/config';

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL; // Replace with your Strapi backend URL

const useStrapiApi = () => {
  const [loading, setLoading] = useState(false);
  const api = axios.create({
    baseURL ,
    // headers: {
    //   // 'Content-Type': 'application/json',
    //   // Assuming token is stored in localStorage or state
    //   // Authorization: `Bearer ${STRAPI_TOKEN}` // Replace with your method of token storage
    // }
  });

  // Function to fetch data from Strapi
  const fetchData = async (endpoint: string) => {
    setLoading(true);
    try {
      const response = await api.get(endpoint);
      return response.data;
    } catch (error) {
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Function to post data to Strapi
  const postData = async (endpoint: string, postData: {}) => {
    setLoading(true);
    try {
      const response = await api.post(endpoint, postData);

      console.log("Printing data from strapi hook");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log("PRITING ERROR", error)
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { loading, fetchData, postData };
};

export default useStrapiApi;
