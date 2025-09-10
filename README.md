# 📔 나의 일기장

간단하고 아름다운 웹 기반 일기장 애플리케이션입니다.

## ✨ 주요 기능

- 📝 **일기 작성**: 날짜, 기분, 제목, 내용을 포함한 완전한 일기 작성
- 💾 **로컬 저장**: 브라우저 로컬 스토리지를 사용한 데이터 저장
- 📱 **반응형 디자인**: 모바일과 데스크톱 모두에서 최적화된 사용자 경험
- 🎨 **현대적인 UI**: 그라디언트와 애니메이션을 활용한 아름다운 인터페이스
- 🗑️ **일기 관리**: 작성된 일기 보기 및 삭제 기능
- ⌨️ **키보드 단축키**: Ctrl + Enter로 빠른 저장
- 🔒 **데이터 보안**: 모든 데이터는 사용자의 브라우저에만 저장

## 🚀 빠른 시작

### 온라인에서 사용하기
[https://my-diary-app.vercel.app](https://my-diary-app.vercel.app)에서 바로 사용할 수 있습니다.

### 로컬에서 실행하기

1. **저장소 복제**
   ```bash
   git clone https://github.com/MIRACLE/my-diary-app.git
   cd my-diary-app
   ```

2. **의존성 설치**
   ```bash
   npm install
   ```

3. **개발 서버 시작**
   ```bash
   npm run dev
   ```

4. 브라우저에서 `http://localhost:3000` 열기

## 📁 프로젝트 구조

```
my-diary-app/
├── index.html          # 메인 HTML 파일
├── style.css           # CSS 스타일시트
├── script.js           # JavaScript 로직
├── package.json        # 프로젝트 설정
├── vercel.json         # Vercel 배포 설정
├── .gitignore          # Git 무시 파일
└── README.md           # 프로젝트 문서
```

## 🎯 사용 방법

1. **일기 작성하기**
   - 날짜를 선택하세요 (기본값: 오늘)
   - 오늘의 기분을 선택하세요
   - 제목과 내용을 입력하세요
   - "💾 일기 저장하기" 버튼을 클릭하거나 Ctrl + Enter를 누르세요

2. **일기 보기**
   - 저장된 일기들이 오른쪽 패널에 표시됩니다
   - 최신 일기가 맨 위에 나타납니다

3. **일기 삭제하기**
   - 각 일기 항목의 "삭제" 버튼을 클릭하세요
   - 확인 대화상자에서 삭제를 확인하세요

## 🛠️ 기술 스택

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Storage**: LocalStorage API
- **Font**: Noto Sans KR (Google Fonts)
- **Deployment**: Vercel
- **Package Manager**: npm

## 🌟 특징

### 사용자 경험
- 직관적이고 깔끔한 인터페이스
- 부드러운 애니메이션 효과
- 실시간 폼 유효성 검사
- 반응형 레이아웃 (모바일 친화적)

### 데이터 관리
- 브라우저 로컬 스토리지 사용
- 자동 데이터 저장 및 복구
- 같은 날짜 일기 덮어쓰기 확인

### 접근성
- 키보드 네비게이션 지원
- 명확한 레이블과 피드백
- 한국어 최적화

## 📱 PWA 준비

이 앱은 Progressive Web App(PWA) 기능을 위한 기본 구조를 포함하고 있어, 향후 오프라인 지원과 앱 설치 기능을 쉽게 추가할 수 있습니다.

## 🔧 개발

### 로컬 개발 환경
```bash
# 개발 서버 시작
npm run dev

# 정적 서버 시작
npm start
```

### Vercel 배포
```bash
# Vercel CLI 설치 (한 번만)
npm install -g vercel

# 배포
npm run deploy
```

## 📄 라이선스

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 🤝 기여하기

1. 이 저장소를 포크하세요
2. 새로운 기능 브랜치를 만드세요 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋하세요 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시하세요 (`git push origin feature/amazing-feature`)
5. Pull Request를 열어주세요

## 💡 향후 계획

- [ ] 일기 검색 기능
- [ ] 일기 내보내기/가져오기
- [ ] 테마 변경 기능
- [ ] 이미지 첨부 기능
- [ ] 클라우드 동기화
- [ ] PWA 지원 완성

## 📞 문의

버그 리포트나 기능 제안은 [Issues](https://github.com/MIRACLE/my-diary-app/issues)에서 해주세요.

---

💝 이 프로젝트가 마음에 드셨다면 ⭐️를 눌러주세요!
