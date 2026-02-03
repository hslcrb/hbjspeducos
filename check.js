// 이 코드는 일정번호(do_code) 입력 여부를 검사하는 함수입니다.
// (이 주석은 실행되지 않으니 따라 작성하실 필요 없습니다)
// (//가 붙은것은 모두 주석입니다. 주석은 설명, 도움말이라 생각하시면 됩니다.)


function chk() {
    // form 이름이 frm인 곳의 do_code 값이 비어있는지 확인
    if (document.frm.do_code.value == "") {
        // 값이 비어있으면 경고창 띄움
        alert("일정번호가 입력되지 않았습니다");
        // do_code 입력창으로 포커스를 이동
        document.frm.do_code.focus();
        // false를 반환하여 이후 동작(예: form 제출)을 막음
        return false;
    }
}