/*jshint esversion: 6*/
const dataReq = (source, element, func) => {
  const dReq = new XMLHttpRequest();

  dReq.addEventListener(`load`, function () {
    const data = JSON.parse(this.responseText);
    console.log(data);
    func(source, data, element);
  });
  dReq.open(`GET`, source);
  dReq.send();
};
const apiData = document.querySelector('#data');
const showData = (source, data, element) => {
  return data;
};
dataReq(`https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&begin=2014-02-01&api_key=${API_KEY}`, apiData, showData);