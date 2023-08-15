////////// CONTROLLER //////////
////////////////////////////////

// lấy thông tin từ form
function layDataTuForm() {
  var _taiKhoan = document.getElementById("tknv").value;
  var _hoTen = document.getElementById("hoTen").value;
  var _email = document.getElementById("email").value;
  var _pass = document.getElementById("password").value;
  var _date = document.getElementById("datepicker").value;
  var _luongCB = document.getElementById("luongCB").value;
  var _chucVu =
    document.getElementById("chucvu").options[
      document.getElementById("chucvu").selectedIndex
    ].text;
  var _gioiLam = document.getElementById("gioLam").value;

  return (data = new ClassNhanVien(
    _taiKhoan,
    _hoTen,
    _email,
    _pass,
    _date,
    _luongCB,
    _chucVu,
    _gioiLam
  ));
}

//  render data
function renderData(arrNV) {
  var contentHTML = "";
  for (var i = 0; i < arrNV.length; i++) {
    data = arrNV[i];
    contentTr = `<tr>
<td>${data.taiKhoan}</td>
<td>${data.hoTen}</td>
<td>${data.email}</td>
<td>${data.date}</td>
<td>${data.chucVu}</td>
<td>${data.tongLuong()}</td>
<td>${data.xepLoai()}</td>
<td>
<button class="btn btn-warning" data-toggle="modal" data-target="#myModal" onclick="buttonSua('${
      data.taiKhoan
    }')">Sửa</button>
<button class="btn btn-danger" onclick="buttonXoa('${
      data.taiKhoan
    }')">Xóa</button>
</td>
</tr>`;
    contentHTML += contentTr;
  }
  document.getElementById("tableDanhSach").innerHTML = contentHTML;
}

// tìm vị trí
function timViTri(id, arrNV) {
  return arrNV.findIndex((item) => {
    return item.taiKhoan == id;
  });
}

// show thông tin lên form
function showThongTinLenForm(sinhVien) {
  document.getElementById("tknv").value = sinhVien.taiKhoan;
  document.getElementById("hoTen").value = sinhVien.hoTen;
  document.getElementById("email").value = sinhVien.email;
  document.getElementById("password").value = sinhVien.pass;
  document.getElementById("datepicker").value = sinhVien.date;
  document.getElementById("luongCB").value = sinhVien.luongCB;
  document.getElementById("chucvu").options[
    document.getElementById("chucvu").selectedIndex
  ].text = sinhVien.chucVu;
  document.getElementById("gioLam").value = sinhVien.gioiLam;
}

// tìm kiếm
function timKiem() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchName");
  filter = input.value.toUpperCase();
  table = document.getElementById("tableDanhSach");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[6];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
