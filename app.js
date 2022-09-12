// https://www.omnicalculator.com/conversion/acreage

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const areaRadio = document.getElementById('areaRadio');
const widthRadio = document.getElementById('widthRadio');
const lengthRadio = document.getElementById('lengthRadio');

let area;
let width = v1;
let length = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

areaRadio.addEventListener('click', function() {
  variable1.textContent = 'Width';
  variable2.textContent = 'Length';
  width = v1;
  length = v2;
  result.textContent = '';
});

widthRadio.addEventListener('click', function() {
  variable1.textContent = 'Area';
  variable2.textContent = 'Length';
  area = v1;
  length = v2;
  result.textContent = '';
});

lengthRadio.addEventListener('click', function() {
  variable1.textContent = 'Area';
  variable2.textContent = 'Width';
  area = v1;
  width = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(areaRadio.checked)
    result.textContent = `Area = ${computearea().toFixed(2)}`;

  else if(widthRadio.checked)
    result.textContent = `Width = ${computewidth().toFixed(2)}`;

  else if(lengthRadio.checked)
    result.textContent = `Length = ${computelength().toFixed(2)}`;
})

// calculation

function computearea() {
  return (Number(width.value) * Number(length.value)) / 4840;
}

function computewidth() {
  return (Number(area.value) * 4840) / Number(length.value);
}

function computelength() {
  return (Number(area.value) * 4840) / Number(width.value);
}