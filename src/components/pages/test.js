import React from 'react'
const key = "zfT72xupnAj0BRcwlS6CXz9vSmZKS4P6"
// const key = "vDTXtsRlzUJ9TUIPdEIGFHjnZO8u2ObA"
async function  getWeather(id) {
    const base = "http://dataservice.accuweather.com/currentconditions/v1/"
    const query = `${id}?apikey=${key}`
    const responce = await fetch(base + query)
    const data = await responce.json()
    return data;
 }
// get city information
async function test(city) {
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search"
    const query = `?apikey=${key}&q=${city}`
    const responce = await fetch(base + query)
    const data = await responce.json();
    return data[0]
    // data[0].Key
}

export default test
// test("BAT YAM").then(responce => console.log(responce.Key))
// .then(data => console.log(data))
// .catch(error => console.log(error))




// 212477