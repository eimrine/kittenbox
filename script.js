var numberList = [1, -9, 0, 24, 55, -3];

var numbers = document.getElementById("numbersButton");
numbers.onclick=function(){
    var numberListNegative = [];
    for (i=0;i<numberList.length;i++){
        if (numberList[i]<0){
        numberListNegative.push(numberList[i]);
        }
    }
    console.log(numberListNegative); 
    return false;
};

var shuffle = document.getElementById("shuffleButton");
shuffle.onclick=function(){
    var ul = document.getElementById("kittenbox");
    for (var i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
    }
    return false;
};
