const input =document.querySelector(`#todo`);
  const ol =document.querySelector(`.head`);

function renderscreen(){
      ol.innerHTML=``;
for (let i = 1; i < array.length; i++) {
 ol.innerHTML += (`<li>${array[i]} <button onclick="deletetodo(${i})"> Delete</button> <button onclick="edittodo(${i})">Edit</button></li>`)
    
};
};



  const array =[``];

function addTask(){
    array.push(input.value);
    renderscreen();



input.value =``;
};
function deletetodo(index){
array.splice(index,1,);
renderscreen();

};

function edittodo(index){
const newvalue = prompt(`enter new value`);
array.splice(index,1,newvalue);
renderscreen();


}

