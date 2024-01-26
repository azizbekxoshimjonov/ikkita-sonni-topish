var elTitle = document.querySelector('.title')
var elInp1 = document.querySelector('.inp1')
var elInp2 = document.querySelector('.inp2')
var elInp3 = document.querySelector('.inp3')





function fn() {
    var value1 = elInp1.value * 1;
    var value2 = elInp2.value * 1;
    var value3 = elInp3.value * 1;

    if(value1 < value2 && value2 < value3){
        elTitle.textContent = value2

    }if(value2 < value1 && value1 < value3){
        elTitle.textContent = value1

    }if(value1 < value3 && value3 < value2){
        elTitle.textContent = value3
    }

   
   


}





