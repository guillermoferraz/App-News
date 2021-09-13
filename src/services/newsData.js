import axios from 'axios'
import config from '../config'
const API_HOST = config.API_HOST
const API_KEY = config.API_KEY
const URI = config.URI

const newsData = {
    getNews: (data) => {
        console.log("data service:",data)
        
        const options = {
            method: 'GET',
            url: URI,
            params: {
                q: data ? data : '',
                safeSearch: 'Off', 
                textFormat: 'Raw', 
                freshness: 'Day',
                setLang: 'ES',
                count:'100'
            
                
            },
            headers: {
              'x-bingapis-sdk': 'true',
              'x-rapidapi-host': API_HOST,
              'x-rapidapi-key': API_KEY
            }
          };
          
          const res = axios.request(options).then(function (response) {
            
              return response.data.value
          }).catch(function (error) {
              console.error(error);
          });
          return res          

       
    }
}

export default newsData