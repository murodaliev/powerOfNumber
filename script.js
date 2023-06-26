let n = +prompt('biror bir son kiriting');
let power = +prompt('kiritgan sonni nechinchi darajaga oshirmoqchisiz?');
let num = 1;
while(isNaN(n) || n == 0) {
    alert("Birinchi kiritilgan ma'lumot xato");
    n = +prompt("qaytadan son kiriting");
}
while(isNaN(power) || power == 0){
    alert("darajaga oshirish uchun berilgan ma'lumot xato");
    power = +prompt('qaytadan son kiriting');
}
for(let i = 0; i < power; i++){
    alert(num = num*n);
}
