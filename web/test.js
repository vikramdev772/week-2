let api = "http://40.0.37.57:8080/";

fetch(api)
  .then((res) => res.json())
  .then((data) => console.log(data));
