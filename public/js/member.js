function check() {
    if (document.frm.custname.value == "") {
        alert("회원성명이 입력되지 않았습니다.");
        document.frm.custname.focus();
        return false;
    }
    if (document.frm.phone.value == "") {
        alert("회원전화가 입력되지 않았습니다.");
        document.frm.phone.focus();
        return false;
    }
    if (document.frm.address.value == "") {
        alert("회원주소가 입력되지 않았습니다.");
        document.frm.address.focus();
        return false;
    }
    if (document.frm.joindate.value == "") {
        alert("가입일자가 입력되지 않았습니다.");
        document.frm.joindate.focus();
        return false;
    }
    if (document.frm.grade.value == "") {
        alert("고객등급이 입력되지 않았습니다.");
        document.frm.grade.focus();
        return false;
    }
    if (document.frm.city.value == "") {
        alert("거주지역이 입력되지 않았습니다.");
        document.frm.city.focus();
        return false;
    }
    alert("회원등록이 완료되었습니다!");
    return true;
}

function res() {
    alert("정보를 지우고 처음부터 다시 입력합니다.");
    document.frm.reset();
    document.frm.custname.focus();
}
