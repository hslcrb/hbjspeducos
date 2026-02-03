// 투표하기 유효성 검사 함수
function chk() {
    // 주민번호 입력 여부 확인
    if (document.frm.v_jumin.value == "") {
        alert("주민번호가 입력되지 않았습니다");
        document.frm.v_jumin.focus();
        return false;
    }
    // 성명 입력 여부 확인
    if (document.frm.v_name.value == "") {
        alert("성명이 입력되지 않았습니다");
        document.frm.v_name.focus();
        return false;
    }
    // 후보번호 선택 여부 확인
    if (document.frm.m_no.value == "") {
        alert("후보번호 선택되지 않았습니다");
        document.frm.m_no.focus();
        return false;
    }
    // 투표시간 입력 여부 확인
    if (document.frm.v_time.value == "") {
        alert("투표시간이 입력되지 않았습니다");
        document.frm.v_time.focus();
        return false;
    }
    // 투표장소 입력 여부 확인
    if (document.frm.v_area.value == "") {
        alert("투표장소가 입력되지 않았습니다");
        document.frm.v_area.focus();
        return false;
    }
    // 유권자확인 선택 여부 확인
    if (document.frm.v_confirm.value == "") {
        alert("유권자확인이 선택되지 않았습니다");
        return false;
    }

    alert("투표하기 정보가 정상적으로 등록되었습니다!");
    return true;
}

// 다시하기 버튼 함수
function re() {
    alert("정보를 지우고 처음부터 다시 입력합니다");
    document.frm.reset();
    document.frm.v_jumin.focus();
}
