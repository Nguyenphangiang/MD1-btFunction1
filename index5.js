let inputStar = prompt("Enter Name Of Star");
let stars1 = ["Polaris", "Aldebaran","Deneb", "Vega", "Altair", "Dubhe" , "Regulus"];
let stars2 = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major","Leo"];
function inputStr(a){
    let i = 0;
    while(stars1[i]){
        if(a == stars1[i]){
            result = stars2[i];
            return result;
        }i++;
    }
    alert("Unknow");
}
result = inputStr(inputStar);
document.getElementById("display").innerHTML = result;
