# 🚀 배포 가이드

## GitHub 저장소 생성 및 업로드

### 1. GitHub에서 새 저장소 생성
1. [GitHub](https://github.com)에 로그인
2. "New repository" 클릭
3. Repository name: `my-diary-app` 
4. Public으로 설정
5. "Create repository" 클릭

### 2. 로컬에서 Git 초기화 및 업로드
```bash
# Git 초기화
git init

# 파일 추가
git add .

# 첫 번째 커밋
git commit -m "🎉 Initial commit: Simple diary web app"

# GitHub 저장소 연결 (본인의 GitHub 사용자명으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/my-diary-app.git

# 메인 브랜치로 설정
git branch -M main

# GitHub에 업로드
git push -u origin main
```

## Vercel 배포

### 방법 1: Vercel 웹사이트에서 배포 (추천)
1. [Vercel](https://vercel.com)에 가입/로그인
2. "New Project" 클릭
3. GitHub 계정 연결
4. `my-diary-app` 저장소 선택
5. "Deploy" 클릭
6. 배포 완료 후 제공되는 URL 확인

### 방법 2: Vercel CLI로 배포
```bash
# Vercel CLI 설치
npm install -g vercel

# Vercel에 로그인
vercel login

# 프로젝트 배포
vercel

# 프로덕션 배포
vercel --prod
```

## 배포 후 확인사항

### ✅ 체크리스트
- [ ] 웹사이트가 정상적으로 로드되는지 확인
- [ ] 일기 작성 기능 테스트
- [ ] 일기 저장 및 불러오기 테스트
- [ ] 모바일에서 반응형 디자인 확인
- [ ] 브라우저 호환성 확인

### 🔗 유용한 링크
- **GitHub Repository**: `https://github.com/YOUR_USERNAME/my-diary-app`
- **Live Demo**: Vercel에서 제공하는 URL
- **Vercel Dashboard**: `https://vercel.com/dashboard`

## 트러블슈팅

### 일반적인 문제들

1. **404 에러가 발생하는 경우**
   - `vercel.json` 파일의 라우팅 설정 확인
   - `index.html`이 루트 디렉토리에 있는지 확인

2. **스타일이 적용되지 않는 경우**
   - 파일 경로 확인 (`./style.css`)
   - HTTPS에서 HTTP 리소스 로드 문제 확인

3. **JavaScript가 작동하지 않는 경우**
   - 브라우저 콘솔에서 에러 메시지 확인
   - 파일 경로 확인 (`./script.js`)

## 추가 최적화

### SEO 개선
```html
<!-- index.html의 <head>에 추가 -->
<meta name="description" content="간단하고 아름다운 개인 일기장 웹앱">
<meta property="og:title" content="나의 일기장">
<meta property="og:description" content="온라인에서 쉽게 일기를 쓸 수 있는 웹앱">
<meta property="og:type" content="website">
```

### 성능 최적화
- 이미지 최적화 (WebP 포맷 사용)
- CSS/JS 파일 압축
- CDN 사용 고려

---

🎉 **축하합니다!** 일기장 웹앱이 성공적으로 배포되었습니다!
