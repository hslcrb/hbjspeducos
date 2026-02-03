const express = require('express');
const app = express();
const path = require('path');

// EJS 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 정적 파일 설정 (CSS, JS 등)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// 라우트 설정
// 일정등록 -> index
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res) => {
    // 실제 데이터베이스 저장이 생략된 경우, 성공 알림 후 다시 렌더링
    res.redirect('/');
});

// 미용 -> reservation
app.get('/reservation', (req, res) => {
    res.render('reservation');
});

app.post('/reservation', (req, res) => {
    res.redirect('/reservation');
});

// 투표하기 -> vote
app.get('/vote', (req, res) => {
    res.render('vote');
});

app.post('/vote', (req, res) => {
    res.redirect('/vote');
});

// 서버 실행
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
