# Node.js LTS 버전을 기반으로 합니다.
FROM node:18-slim

# 작업 디렉토리 설정
WORKDIR /app

# 패키지 파일 복사 및 설치
COPY package*.json ./
RUN npm install

# 소스 코드 복사
COPY . .

# 포트 설정
EXPOSE 3000

# 서버 실행
CMD ["npm", "start"]
