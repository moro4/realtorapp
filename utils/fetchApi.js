import axios from 'axios';

export const baseurl = 'https://bayut.p.rapidapi.com'

export async function fetchApi(url) {
   const {data} = await axios.get(url, {
      headers: {
         'X-RapidAPI-Key': 'fc0b73a978mshec87772df5eac31p13c464jsn38ac2b84158e',
         'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
       }
   })
   return data;
}