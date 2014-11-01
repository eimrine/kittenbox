var numberList = [1, -9, 0, 24, 55, -3];

var shuffle = document.getElementById("shuffleButton");

var numberListNegative = []; 
var numbers = document.getElementById("numbersButton");
numbers.onclick=function(){
//obj.addEventListener("click", 
    alert("hr!");
    console.log(numberList); 
    for (i=0;i<numberList.length;i++){
        if (numberList[i]<0){
            numberListNegative.push(numberList[i]);
        }
    }
};
//);


console.log(numberListNegative); 
