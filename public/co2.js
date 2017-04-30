/*jshint esversion: 6*/
let co2 = [];
nasaCo2();

function nasaCo2(){
  oRex = new XMLHttpRequest();
  oRex.addEventListener('load', data);
  oRex.open('GET', '/co2.txt');
  oRex.send();
}

function data(){
  const requestData = (this.responseText);
  parseCo2( requestData);
}


function parseCo2( requestData ){
  let dataArray = requestData.split('\n');
    for(var i = 0; i< dataArray.length; i++){
      let saveArray =[];
      dataArray[i] = dataArray[i].split(' ');
      dataArray[i].map(function(index){
        if(index.length > 0){
          saveArray.push(index);
        }
      });
      dataArray[i] = saveArray;
    }
    dataArray.shift();
  washCo2(dataArray);
}

 let allco2Years =[];

function washCo2( arr ){
  for(var j=0; j<arr.length; j++){
    let co2Level = Number(arr[j][3]);
    let co2Year = arr[j][0];
    if(allco2Years.indexOf(co2Year) === -1){
      allco2Years.push(co2Year);
      let item ={
        year: co2Year,
        co2Level: co2Level
     };
     co2.push(item);
    }
  }
}





