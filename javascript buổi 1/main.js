var luong_1_ngay = 100000;
var so_ngay = 30;    
var toTal = luong_1_ngay * so_ngay;
console.log("Tiền lương nhân viên trong 30 ngày :" +toTal);

var Number_1 = 1;
var Number_2 = 2;
var Number_3 = 3;
var Number_4 = 4;
var Number_5 = 5;
var toTal = (Number_1 + Number_2 + Number_3 + Number_4 + Number_5) / 5;
console.log(toTal);

function chuyenDoi(Tien){
    var tienChuyenDoi = Tien*23000;
    return tienChuyenDoi; 
}

document.getElementById('btnHienThi').onclick = function(event){
    event.preventDefault();
    var Tien = document.getElementById('tien').value;
    console.log(Tien);

    var tienChuyenDoi = chuyenDoi(Tien);
    console.log(tienChuyenDoi);

    document.getElementById('txtTien').innerHTML = tienChuyenDoi;
}
var chieudai = 5;
var chieurong = 5;
var chuvi = (chieudai) + (chieurong);
var dientich = chieudai * chieurong;
console.log(chuvi);
console.log(dientich);

var n = 12;

var hangchuc = Math.floor(n %10);
console.log(hangchuc);
var hangdonvi = Math.floor(n /10);
console.log(hangdonvi);
var toTal = hangchuc + hangdonvi;
console.log(toTal);
