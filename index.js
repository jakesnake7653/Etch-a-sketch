let eraser=1
const conatiner = document.getElementById('container')
function create1(){
    let x = 10
    document.getElementById('container').style.gridTemplateColumns = "repeat(10, 1fr)"
 
 function create() {
    let cell = document.getElementById('container').appendChild(document.createElement('div'));
cell.className='cell'
cell.addEventListener('mouseover', function black(){
    cell.setAttribute('style', ' background-color: black;')})
cell.addEventListener('mouseover', function white(){
    if(eraser % 2 == 0 ){
    cell.setAttribute('style', ' background-color: white;')}})
}
for(let i =0; i<x*x;i++)create()
}

function create2(){
    let x = 25
    document.getElementById('container').style.gridTemplateColumns = "repeat(25, 1fr)"
 function create() {
    let cell = document.getElementById('container').appendChild(document.createElement('div'));
cell.className='cell'
cell.addEventListener('mouseover', function black(){
    cell.setAttribute('style', ' background-color: black;')})
cell.addEventListener('mouseover', function white(){
    if(eraser % 2 == 0 ){
    cell.setAttribute('style', ' background-color: white;')}})
}
for(let i =0; i<x*x;i++)create()
}

function create3(){
    let x = 50
    document.getElementById('container').style.gridTemplateColumns = "repeat(50, 1fr)"
 function create() {
    let cell = document.getElementById('container').appendChild(document.createElement('div'));
cell.className='cell';
cell.addEventListener('mouseover', function black(){
    cell.setAttribute('style', ' background-color: black;')})
cell.addEventListener('mouseover', function white(){
    if(eraser % 2 == 0 ){
    cell.setAttribute('style', ' background-color: white;')}})
}
for(let i =0; i<x*x;i++)create()
}

function eraserstat(){
    const e = document.getElementById('eraser')
    if (eraser %2 == 1){
    e.setAttribute('style', 'background-color: black; color:white');}
    if (eraser %2 == 0){e.setAttribute('style', 'background-color: white;');}
    return (eraser++)
}

function resetGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
