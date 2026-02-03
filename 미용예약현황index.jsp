<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="UTF-8">
        <title>투표하기</title>
    </head>

    <body>
        <h1 align="center">투표하기</h1>
        <form name="frm" action="" method="post">
            <table border="1" align="center">
                <tr>
                    <td align="center" width="100">주민번호</td>
                    <td width="400">
                        <input type="text" name="v_jumin"> 예: 8906153154726
                    </td>
                </tr>
                <tr>
                    <td align="center">성명</td>
                    <td>
                        <input type="text" name="v_name">
                    </td>
                </tr>
                <tr>
                    <td align="center">후보번호</td>
                    <td>
                        <select name="m_no">
                            <option value="">후보명</option>
                            <option value="1">[1]김후보</option>
                            <option value="2">[2]이후보</option>
                            <option value="3">[3]박후보</option>
                            <option value="4">[4]조후보</option>
                            <option value="5">[5]최후보</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="center">투푯시간</td>
                    <td>
                        <input type="text" name="v_time">
                    </td>
                </tr>
                <tr>
                    <td align="center">투표장소</td>
                    <td>
                        <input type="text" name="v_area">
                    </td>
                </tr>
                <tr>
                    <td align="center">유권자 확인</td>
                    <td>
                        <input type="radio" name="v_confirm" value="Y"> 확인 &emsp;
                        <input type="radio" name="v_confirm" value="N"> 미확인
                    </td>
                </tr>
                <tr>
                    <td colspan="2" align="center">
                        <input type="submit" value="투표하기" onclick="return chk();">
                        <input type="reset" value="다시하기" onclick="return re();">
                    </td>
                </tr>
            </table>
        </form>
    </body>

    </html>