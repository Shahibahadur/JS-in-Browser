let foot =  document.getElementById("foot");
let p = document.getElementById("para");
console.log(p);
p.textContent = "first paragraph ";;
let p2 = document.querySelector("main p.some");
console.log(p2);
p2.textContent = "Second paragraph ";
let ps = document.querySelectorAll(".main p");
console.log(ps);
for(var i=0, num=ps.length; i<num; i++){
    ps[i].textContent += "looped";

}


