/*let n = prompt("Nhap vao mot so nguyen duong: ");
if (n>0){
    console.log("n la so nguyen duong");
} else if (n<0){
    console.log("n la so nguyen am");
} else{
    console.log("n bang 0");
}*/
/*let n = prompt("Nhap vao mot so nguyen: ");
if(n%2==0){
    console.log("n la so chan");
} else {
    console.log("n la so le");
}*/
/*let a = prompt("Nhap vao so thuc a: ");
let b = prompt("Nhap vao so thuc b: ");
let c = prompt("Nhap vao so thuc c: ");
if(a>b && a>c){
    console.log("a la so thuc lon nhat ");
} else if (b>a && b>c){
    console.log("b la so thuc lon nhat");

} else {
    console.log("c la so thuc lon nhat");
}*/
let year = prompt("Nhập vào năm: ");
if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
  console.log("Đây là năm nhuận");
} else {
  console.log("Đây không phải là năm nhuận");
}


let kwh = prompt("Nhập số kwh đã dùng: ");
let tienDien = 0;
if (kwh <= 50) {
  tienDien = kwh * 1.678;
} else if (kwh <= 100) {
  tienDien = 50 * 1.678 + (kwh - 50) * 1.734;
} else {
  tienDien = 50 * 1.678 + 50 * 1.734 + (kwh - 100) * 2.014;
}
tienDien = tienDien.toFixed(2);
console.log("Tien dien la: " + tienDien + "nghin dong");
