const url = "https://api.met.no/weatherapi/locationforecast/2.0/compact" + "?lat=59.9139&lon=10.7522";

const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const data = await fetchData(url);
console.log(data);