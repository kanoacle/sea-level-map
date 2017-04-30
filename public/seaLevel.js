/*jshint esversion: 6*/
let objArray = [];

function nasa(){
  oReq = new XMLHttpRequest();
  oReq.addEventListener('load', data);
  oReq.open('GET', '/seaLevel.txt');
  oReq.send();
}

function data(){
  const requestData = (this.responseText);
   parse( requestData);
}

nasa();

function parse( requestData ){
  dataArray = requestData.split('\n');
  //console.log(dataArray);
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
console.log( dataArray);
  wash(dataArray);
}

let allYears =[];

function wash( arr ){
  for(var j=0; j<arr.length; j++){
    let firstLevel = Number(arr[j][11]);
    let firstYear = arr[j][2];
    if(firstYear !== undefined){
      newYear = firstYear.split('.')[0];
    }
    if(allYears.indexOf(newYear) === -1){
      allYears.push(newYear);
      let item ={
        year: newYear,
        seaLevel: 41.15 + firstLevel
     };
     objArray.push(item);
    }

  }
     console.log(objArray);
}



//module.exports = objArray;


