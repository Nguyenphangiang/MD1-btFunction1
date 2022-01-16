function compareNum(a,b){
    if(a>b){
        alert( a + "Lớn hơn " + b)
    }
    else if (a<=b){
        alert(a+b) ;
    }
}
let inputNum1= +prompt("Enter the first number: ");
let inputNUm2= +prompt("Enter the second number: ");
compareNum(inputNum1,inputNUm2);