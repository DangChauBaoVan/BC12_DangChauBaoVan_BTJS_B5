//BÀI 1:


var soDo1 = document.getElementById('soDo1');
var x = document.getElementById("soDoBaKhoi1");
x.style.display = "none";
soDo1.onclick = function(){
    
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
     x.style.display = "none";
    }
}
var tongDiem = 0;
document.getElementById('btnCheck').onclick = function(){
    var diemChuan = Number(document.getElementById('ipDiemChuan').value);
    var diemMon1 = Number(document.getElementById('monThuNhat').value);
    var diemMon2 = Number(document.getElementById('monThuHai').value);
    var diemMon3 = Number(document.getElementById('monThuBa').value);
    var maKhuVuc = document.getElementById('ipMaKhuVuc').value;
    var maDoiTuong = document.getElementById('ipMaDoiTuong').value;
    if(diemChuan == 0){
        swal({
            title: "Vui lòng nhập điểm chuẩn!",
            icon: "warning",
            dangerMode: true,
          });
          return;
    }else if(diemChuan <0 || diemChuan > 30){
        swal({
            title: "Vui lòng nhập đúng điểm chuẩn!",
            text: "Điểm chuẩn phải lớn hơn 0 và nhỏ hơn 30",
            icon: "warning",
            dangerMode: true,
          });
          return;
    }
    if(document.getElementById('monThuNhat').value.length == 0){
        swal({
            title: "Vui lòng nhập điểm môn thứ nhất!",
            icon: "warning",
            dangerMode: true,
          });
          return;
    }
    if(document.getElementById('monThuHai').value.length == 0){
        swal({
            title: "Vui lòng nhập điểm môn thứ Hai!",
            icon: "warning",
            dangerMode: true,
          });
          return;
    }
    if(document.getElementById('monThuBa').value.length == 0){
        swal({
            title: "Vui lòng nhập điểm môn thứ Ba!",
            icon: "warning",
            dangerMode: true,
          });
          return;
    }
    if((diemMon1 < 0 || diemMon1 > 10) || (diemMon2 < 0 || diemMon2>10) || (diemMon3 < 0 || diemMon3>10)){
        swal({
            title: "Vui lòng nhập đúng định dạng điểm!",
            text: "Điểm phải lớn hơn 0 và nhỏ hơn 10",
            icon: "warning",
            dangerMode: true,
          });
          return;
    }
    tongDiem = diemMon1 + diemMon2 + diemMon3;
   
    if(maKhuVuc == 'A' || maKhuVuc == 'a'){
        tongDiem = tongDiem + 2;
    }else if(maKhuVuc == 'B' || maKhuVuc == 'b'){
        tongDiem = tongDiem + 1;
    }else if(maKhuVuc == 'C' || maKhuVuc == 'c'){
        tongDiem = tongDiem + 0.5;
    }else if(maKhuVuc == 'X' || maKhuVuc == 'x'){

    }else{
        swal({
            title: "Vui lòng nhập đúng định dạng mã khu vực!",
            text: "Mã khu vực là các chữ A,B,C,X",
            icon: "warning",
            dangerMode: true,
          });
          return;
    }
    if (maDoiTuong == "1"){
        tongDiem = tongDiem +2.5;
    }else if(maDoiTuong =="2"){
        tongDiem = tongDiem +1.5;
    }
    else if(maDoiTuong =="3"){
        tongDiem = tongDiem + 1;
    }else if(maDoiTuong =="0"){

    }else{
        swal({
            title: "Vui lòng nhập đúng định dạng mã đối tượng!",
            text: "Mã khu vực là các số 0,1,2,3",
            icon: "warning",
            dangerMode: true,
          });
          return;
    }
    if(tongDiem >= diemChuan){
        swal({
            title: "Chúc Mừng! Bạn đã đậu rồi",
            text: "Tổng điểm của bạn là: " + tongDiem,
            icon: "success",
            button: "Yeah!",
          });
    }else{
        swal({
            title: "Rất Tiết! Bạn rớt rồi",
            text: "Tổng điểm của bạn là: " + tongDiem,
            icon: "error",
          });
    }

}


// Bài 2: TÍNH GIÁ TRỊ TRUNG BÌNH 5 SỐ

var soDo2 = document.getElementById('soDo2');
var x2 = document.getElementById("soDoBaKhoi2");
x2.style.display = "none";
soDo2.onclick = function(){
    if (x2.style.display === "none") {
    x2.style.display = "block";
    } else {
     x2.style.display = "none";
    }
}
var tienDien;
document.getElementById('btnTinhTien').onclick = function(){
    var soDien = Number(document.getElementById('soDien').value);
    var ten = document.getElementById('ten').value;
    
    if( ten.length == 0){
        swal({
            title: "Vui lòng nhập tên của bạn!",
            text: "Tên không được bỏ trống",
            icon: "warning",
            dangerMode: true,
          });
          return;
    }
    if (soDien <= 0){
        swal({
            title: "Vui lòng nhập số điện!",
            text: "Số điện phải lớn hơn 0",
            icon: "warning",
            dangerMode: true,
          });
          return;
    }
    if (soDien <=50 ){
        tienDien = soDien * 500;
    }else if( soDien > 50 && soDien <= 100){
        tienDien = 50 * 500 + (soDien - 50)*650;
    }else if ( soDien > 100 && soDien <= 200){
        tienDien = 50 * 500 + 50 * 650 + (soDien - 100)*850;
    }else if( soDien > 200 && soDien <= 350){
        tienDien = 50* 500 + 50*650 + 100*850 + (soDien - 200)*1100;
    }else{
        tienDien = 50*500 +50*650 +100*850 + 150*1100 + (soDien-350)*1300;
    }
    tienDien = Intl.NumberFormat().format(tienDien);
    swal({
        title: "Tiền Điện",
        text: "Tổng tiền điện của "+ ten + ' là ' + tienDien + ' VNĐ',
        icon: "success",
        button: "Ok!",
      });
}

