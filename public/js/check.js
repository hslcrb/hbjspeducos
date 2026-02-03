/**
 * 일정관리 프로그램 - 일정등록 유효성 검사
 * 작성자: Antigravity
 */

function chk() {
    // 일정번호(do_code)가 입력되었는지 확인합니다.
    if (document.frm.do_code.value == "") {
        alert("일정번호가 입력되지 않았습니다");
        document.frm.do_code.focus();
        return false;
    }

    // 일정내용(do_content)이 입력되었는지 확인합니다.
    if (document.frm.do_content.value == "") {
        alert("일정내용이 입력되지 않았습니다");
        document.frm.do_content.focus();
        return false;
    }

    // 담당자(do_person)가 입력되었는지 확인합니다.
    if (document.frm.do_person.value == "") {
        alert("담당자가 입력되지 않았습니다");
        document.frm.do_person.focus();
        return false;
    }

    alert("일정이 정상적으로 등록되었습니다!");
    return true;
}