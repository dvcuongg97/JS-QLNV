/////////////////////////////////////////////////////////
////////////////////////// Modal ///////////////////////////////
/////////////////////////////////////////////////////////

function ClassNhanVien(
  _taiKhoan,
  _hoTen,
  _email,
  _pass,
  _date,
  _luongCB,
  _chucVu,
  _gioiLam
) {
  (this.taiKhoan = _taiKhoan), (this.hoTen = _hoTen);
  this.email = _email;
  this.pass = _pass;
  this.date = _date;
  this.luongCB = _luongCB;
  this.chucVu = _chucVu;
  this.gioiLam = _gioiLam;
  this.tongLuong = function () {
    switch (this.chucVu) {
      case "Sếp":
        return (Number(this.luongCB) * 3).toLocaleString();
      case "Trưởng phòng":
        return (Number(this.luongCB) * 2).toLocaleString();
      case "Nhân viên":
        return Number(this.luongCB).toLocaleString();
    }
  };
  this.xepLoai = function () {
    if (this.gioiLam >= 192) {
      return "Nhân Viên Xuất Sắc";
    } else if (this.gioiLam >= 176) {
      return "Nhân Viên Giỏi";
    } else if (this.gioiLam >= 160) {
      return "Nhân Viên Khá";
    } else {
      return "Nhân Viên Trung Bình";
    }
  };
}
