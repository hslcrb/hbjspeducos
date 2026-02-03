const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');
const path = require('path');

async function initDB() {
    const db = await open({
        filename: path.join(__dirname, 'database.db'),
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS member_tbl_02 (
            custno INTEGER NOT NULL,
            custname TEXT,
            phone TEXT,
            address TEXT,
            joindate TEXT,
            grade TEXT,
            city TEXT,
            PRIMARY KEY(custno)
        );

        CREATE TABLE IF NOT EXISTS money_tbl_02 (
            custno INTEGER NOT NULL,
            salenol INTEGER NOT NULL,
            pcost INTEGER,
            amount INTEGER,
            price INTEGER,
            pcode TEXT,
            sdate TEXT,
            PRIMARY KEY(custno, salenol)
        );
    `);

    // 초기 데이터 확인 후 삽입
    const count = await db.get('SELECT COUNT(*) as cnt FROM member_tbl_02');
    if (count.cnt === 0) {
        await db.run("INSERT INTO member_tbl_02 VALUES(100001,'김행복','010-1111-2222','서울 동대문구 휘경1동','20151202','A','01')");
        await db.run("INSERT INTO member_tbl_02 VALUES(100002,'이축복','010-1111-3333','서울 동대문구 휘경2동','20151206','B','01')");
        await db.run("INSERT INTO member_tbl_02 VALUES(100003,'장믿음','010-1111-4444','울릉군 울릉읍 독도1리','20151001','B','30')");
        await db.run("INSERT INTO member_tbl_02 VALUES(100004,'최사랑','010-1111-5555','울릉군 울릉읍 독도2리','20151113','A','30')");
        await db.run("INSERT INTO member_tbl_02 VALUES(100005,'진평화','010-1111-6666','제주도 제주시 외나무골','20151231','B','60')"); // 1235 -> 1231로 수정 (날짜 형식)
        await db.run("INSERT INTO member_tbl_02 VALUES(100006,'차공단','010-1111-7777','제주도 제주시 감나무골','20151211','C','90')");

        await db.run("INSERT INTO money_tbl_02 VALUES(100001,20160001,500,5,2500,'A001','20160101')");
    }

    return db;
}

module.exports = { initDB };
