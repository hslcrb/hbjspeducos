const express = require('express');
const app = express();
const path = require('path');
const { initDB } = require('./db');

let db;

// EJS 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 정적 파일 설정 (CSS, JS 등)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// DB 초기화 함수
async function start() {
    db = await initDB();
    console.log("Database initialized");

    // 라우트 설정
    // 메인 인덱스 -> 정적 html 서빙
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

    // 기존 일정관리 앱
    app.get('/app', (req, res) => {
        res.render('index');
    });

    // 미용 -> reservation
    app.get('/reservation', (req, res) => {
        res.render('reservation');
    });

    // 투표하기 -> vote
    app.get('/vote', (req, res) => {
        res.render('vote');
    });

    // --- 20251223 버전 라우트 ---
    const v25 = '/20251223';

    app.get(`${v25}/`, (req, res) => {
        res.render('20251223/index');
    });

    app.get(`${v25}/list`, async (req, res) => {
        const members = await db.all("SELECT * FROM member_tbl_02");
        res.render('20251223/list', { members });
    });

    app.get(`${v25}/join`, async (req, res) => {
        const row = await db.get("SELECT MAX(custno) as maxNo FROM member_tbl_02");
        const nextNo = row.maxNo + 1;
        const today = new Date().toISOString().slice(0, 10).replace(/-/g, '');
        res.render('20251223/join', { nextNo, today });
    });

    app.post(`${v25}/join`, async (req, res) => {
        const { custno, custname, phone, address, joindate, grade, city } = req.body;
        await db.run("INSERT INTO member_tbl_02 VALUES(?,?,?,?,?,?,?)",
            [custno, custname, phone, address, joindate, grade, city]);
        res.redirect(`${v25}/list`);
    });

    app.get(`${v25}/update/:custno`, async (req, res) => {
        const m = await db.get("SELECT * FROM member_tbl_02 WHERE custno = ?", [req.params.custno]);
        res.render('20251223/update', { m });
    });

    app.post(`${v25}/update`, async (req, res) => {
        const { custno, custname, phone, address, joindate, grade, city } = req.body;
        await db.run("UPDATE member_tbl_02 SET custname=?, phone=?, address=?, joindate=?, grade=?, city=? WHERE custno=?",
            [custname, phone, address, joindate, grade, city, custno]);
        res.redirect(`${v25}/list`);
    });

    app.get(`${v25}/sales`, async (req, res) => {
        const sql = `
            SELECT m.custno, m.custname, m.grade, SUM(p.price) as total_price
            FROM member_tbl_02 m
            JOIN money_tbl_02 p ON m.custno = p.custno
            GROUP BY m.custno, m.custname, m.grade
            ORDER BY total_price DESC
        `;
        const sales = await db.all(sql);
        res.render('20251223/sales', { sales });
    });

    // 서버 실행
    const PORT = process.env.PORT || 3000;
    if (process.env.NODE_ENV !== 'production') {
        app.listen(PORT, () => {
            console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
        });
    }
}

start().catch(err => {
    console.error("Failed to start server:", err);
});

module.exports = app;
