var dongho = {
  hangsx: 'casio',
  mau: 'den',
  gia: 50000000,
  gioitinh: 'nam',
  xemngay: function() {console.log('hom nay la ngay 28 thang 4');}
}

var hocvien = {
  ho: 'pham',
  ten:'nhat',
  chieucao: 170,
  namsinh: 1997,
  tuoi: 22,
  cannang: 65,
  tendaydu: function(){return this.ho + ' ' + this.ten ;},
  danhgia: function(){
    if (this.chieucao/this.cannang <3) {return 'deptrai'}
  }
}
console.log(hocvien.tendaydu());
console.log(hocvien.danhgia());
console.log(hocvien.tuoi);

