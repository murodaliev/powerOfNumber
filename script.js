let n = +prompt('biror bir son kiriting');
let power = +prompt('kiritgan sonni nechinchi darajaga oshirmoqchisiz?');
while(isNaN(n) || n == 0) {
    alert("Birinchi kiritilgan ma'lumot xato");
    n = +prompt("qaytadan son kiriting");
}
while(isNaN(power)){
    alert("darajaga oshirish uchun berilgan ma'lumot xato");
    power = +prompt('qaytadan son kiriting');
}
if(!isNaN(n) && !isNaN(power)){
    alert("("+ n +")" + "^" + power + " = " + n**power);
}