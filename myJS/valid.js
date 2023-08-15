/////////////////////////////// Validation ////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// kiểm tra rỗng
function kiemTraRong(span, value) {
  if (value.trim().length == 0) {
    document.getElementById(span).style.display = "block";
    document.getElementById(span).innerText = "Nội dung không được để trống";
    return false;
  } else {
    document.getElementById(span).style.display = "none";
    return true;
  }
}

// kiểm tra độ dài
function kiemTraDoDai(min, max, span, value) {
  var length = value.trim().length;
  if (length < min || length > max) {
    document.getElementById(span).style.display = "block";
    document.getElementById(
      span
    ).innerHTML = ` Nội dung phải dài từ ${min} đến ${max} kí tự`;
    return false;
  } else {
    document.getElementById(span).style.display = "none";
    return true;
  }
}

// kiểm tra email
function kiemTraEmail(span, value) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (re.test(value)) {
    document.getElementById(span).style.display = "none";
    return true;
  } else {
    document.getElementById(span).style.display = "block";
    document.getElementById(span).innerText = "Email không hợp lệ";
    return false;
  }
}
// kiểm tra mật khẩu
function kiemTraMatKhau(span, value) {
  const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (re.test(value)) {
    document.getElementById(span).style.display = "none";
    return true;
  } else {
    document.getElementById(span).style.display = "block";
    document.getElementById(span).innerText =
      "Mật Khẩu từ 8 ký tự, chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt";
    return false;
  }
}
// kiểm tra kí tự
function kiemTraChu(span, value) {
  var letters = /^[a-zA-Z]+$/;
  if (letters.test(value)) {
    document.getElementById(span).style.display = "none";
    return true;
  } else {
    document.getElementById(span).style.display = "block";
    document.getElementById(span).innerText = "Chỉ Nhập Kí Tự Chữ";
    return false;
  }
}
// kiểm tra số
function kiemTraSo(span, value) {
  var letters = /^[0-9]+$/;
  if (letters.test(value)) {
    document.getElementById(span).style.display = "none";
    return true;
  } else {
    document.getElementById(span).style.display = "block";
    document.getElementById(span).innerText = "Chỉ Nhập Kí Tự Số";

    return false;
  }
}
// kiểm tra lương
function kiemTraLuongCB(span, value) {
  if (value >= 1e6 && value <= 20e6) {
    document.getElementById(span).style.display = "none";
    return true;
  } else {
    document.getElementById(span).style.display = "block";
    document.getElementById(span).innerText =
      "Lương cơ bản từ 1,000,000 - 20,000,000";
    return false;
  }
}
// kiem tra gioi lam
function kiemTraGioiLam(span, value) {
  if (value >= 80 && value <= 200) {
    document.getElementById(span).style.display = "none";
    return true;
  } else {
    document.getElementById(span).style.display = "block";
    document.getElementById(span).innerText =
      "Số giờ làm trong tháng 80 - 200 giờ";
    return false;
  }
}
// ///////////////////////////////

// tai khoan
function kiemTraInputTK(min, max, span, value) {
  var isValid = kiemTraRong(span, value);
  if (isValid) {
    isValid = kiemTraDoDai(min, max, span, value);
    if (isValid) {
      isValid = kiemTraSo(span, value);
    }
  }
  return isValid;
}
// ten
function kiemTraInputHoTen(min, max, span, value) {
  var isValid = kiemTraRong(span, value);
  if (isValid) {
    isValid = kiemTraChu(span, value);
    if (isValid) {
      isValid = kiemTraDoDai(min, max, span, value);
    }
  }
  return isValid;
}
//  email
function kiemTraInputEmail(span, value) {
  var isValid = kiemTraRong(span, value);
  if (isValid) {
    isValid = kiemTraEmail(span, value);
  }
  return isValid;
}
// mat khau
function kiemTraInputMK(span, value) {
  var isValid = kiemTraRong(span, value);
  if (isValid) {
    isValid = kiemTraMatKhau(span, value);
  }
  return isValid;
}
//luong
function kiemTraInputLuongCB(span, value) {
  var isValid = kiemTraRong(span, value);
  if (isValid) {
    isValid = kiemTraLuongCB(span, value);
  }
  return isValid;
}
//gioi lam
function kiemtraInputGioiLam(span, value) {
  var isValid = kiemTraRong(span, value);
  if (isValid) {
    isValid = kiemTraGioiLam(span, value);
  }
  return isValid;
}
//chức vụ
function kiemTraChucVu(id, span) {
  var theSelect = document.getElementById(id);
  if (theSelect.selectedIndex == 0) {
    document.getElementById(span).style.display = "block";
    document.getElementById(span).innerText = "Vui lòng chọn chức vụ";
    return false;
  } else {
    document.getElementById(span).style.display = "none";
    return true;
  }
}
