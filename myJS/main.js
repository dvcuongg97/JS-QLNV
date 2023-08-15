////////////////////////// MAIN JS /////////////////////////////
///////////////////////////////////////////////////////////////

// localStorage
var arrNV = [];
var dataJSON = localStorage.getItem("dataJSON");
if (dataJSON != null) {
  var list = JSON.parse(dataJSON);
  arrNV = list.map((item) => {
    return new ClassNhanVien(
      item.taiKhoan,
      item.hoTen,
      item.email,
      item.pass,
      item.date,
      item.luongCB,
      item.chucVu,
      item.gioiLam
    );
  });
  renderData(arrNV);
}
console.log("🚀 ~ file: main.js:22 ~ arrNV:", arrNV);

// button thêm người dùng
document.getElementById("btnThemNV").addEventListener("click", function () {
  var nhanVien = layDataTuForm();

  // valid started
  var isValid =
    kiemTraInputTK(4, 6, "tbTKNV", nhanVien.taiKhoan) &
    kiemTraInputHoTen(2, 30, "tbTen", nhanVien.hoTen) &
    kiemTraInputEmail("tbEmail", nhanVien.email) &
    kiemTraInputMK("tbMatKhau", nhanVien.pass) &
    kiemTraInputLuongCB("tbLuongCB", nhanVien.luongCB) &
    kiemtraInputGioiLam("tbGiolam", nhanVien.gioiLam) &
    kiemTraChucVu("chucvu", "tbChucVu");

  if (!isValid) return;
  // valid ended

  arrNV.push(nhanVien);
  renderData(arrNV);

  var dataJSON = JSON.stringify(arrNV);
  localStorage.setItem("dataJSON", dataJSON);
});

// button xóa
function buttonXoa(id) {
  var index = timViTri(id, arrNV);
  arrNV.splice(index, 1);
  renderData(arrNV);

  var dataJSON = JSON.stringify(arrNV);
  localStorage.setItem("dataJSON", dataJSON);
}

// button sửa
function buttonSua(id) {
  var index = timViTri(id, arrNV);
  var sinhVien = arrNV[index];
  document.getElementById("tknv").readOnly = true;
  showThongTinLenForm(sinhVien);
}

// button cập nhật
document.getElementById("btnCapNhat").addEventListener("click", () => {
  sinhVien = layDataTuForm();
  var id = sinhVien.taiKhoan;
  var index = timViTri(id, arrNV);
  arrNV[index] = sinhVien;

  renderData(arrNV);

  var dataJSON = JSON.stringify(arrNV);
  localStorage.setItem("dataJSON", dataJSON);
});
