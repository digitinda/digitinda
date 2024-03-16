import axios from "axios";

var token = ''
// var base_url = "http://localhost:5000"
// var base_url = "https://alertroxas.com:4000"
var base_url = "https://xpsjobs.ph:4000"

if(typeof(window) != 'undefined'){
    token = localStorage.getItem('token')
}

export const instance = axios.create({
  baseURL: base_url,  
  timeout: 30000,
  headers: {
      Authorization: 'Bearer ' + token
  }
});

export const userapi = axios.create({
  baseURL: base_url + "/user",  
  timeout: 30000,
  headers: {
      Authorization: 'Bearer ' + token
  }
});


export const orderapi = axios.create({
  baseURL: base_url + "/order",  
  timeout: 30000,
  headers: {
      Authorization: 'Bearer ' + token
  }
});

export const reportapi = axios.create({
  baseURL: base_url + "/report",  
  timeout: 30000,
  headers: {
      Authorization: 'Bearer ' + token
  }
});


export const invapi = axios.create({
  baseURL: base_url + "/inventory",  
  timeout: 30000,
  headers: {
      Authorization: 'Bearer ' + token
  }
});

