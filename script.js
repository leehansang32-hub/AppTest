// 일기 데이터 관리
class DiaryManager {
    constructor() {
        this.entries = this.loadEntries();
        this.initializeElements();
        this.attachEventListeners();
        this.setTodayDate();
        this.renderEntries();
    }

    // DOM 요소 초기화
    initializeElements() {
        this.dateInput = document.getElementById('date');
        this.moodSelect = document.getElementById('mood');
        this.titleInput = document.getElementById('title');
        this.contentTextarea = document.getElementById('content');
        this.saveBtn = document.getElementById('saveBtn');
        this.entriesContainer = document.getElementById('diaryEntries');
    }

    // 이벤트 리스너 등록
    attachEventListeners() {
        this.saveBtn.addEventListener('click', () => this.saveDiary());
        
        // Enter 키로 저장 (Ctrl + Enter)
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                this.saveDiary();
            }
        });

        // 입력 필드 변화 감지
        [this.dateInput, this.moodSelect, this.titleInput, this.contentTextarea].forEach(element => {
            element.addEventListener('input', () => this.validateForm());
        });
    }

    // 오늘 날짜로 기본 설정
    setTodayDate() {
        const today = new Date().toISOString().split('T')[0];
        this.dateInput.value = today;
    }

    // 폼 유효성 검사
    validateForm() {
        const isValid = this.dateInput.value && 
                       this.moodSelect.value && 
                       this.titleInput.value.trim() && 
                       this.contentTextarea.value.trim();
        
        this.saveBtn.disabled = !isValid;
        this.saveBtn.style.opacity = isValid ? '1' : '0.6';
    }

    // 일기 저장
    saveDiary() {
        if (!this.validateInputs()) return;

        const entry = {
            id: Date.now(),
            date: this.dateInput.value,
            mood: this.moodSelect.value,
            title: this.titleInput.value.trim(),
            content: this.contentTextarea.value.trim(),
            createdAt: new Date().toISOString()
        };

        // 같은 날짜의 일기가 있는지 확인
        const existingEntryIndex = this.entries.findIndex(e => e.date === entry.date);
        
        if (existingEntryIndex !== -1) {
            if (!confirm('같은 날짜의 일기가 이미 있습니다. 덮어쓰시겠습니까?')) {
                return;
            }
            this.entries[existingEntryIndex] = entry;
        } else {
            this.entries.unshift(entry);
        }

        this.saveEntries();
        this.renderEntries();
        this.clearForm();
        this.showSuccessMessage();
    }

    // 입력 유효성 검사
    validateInputs() {
        if (!this.dateInput.value) {
            alert('날짜를 선택해주세요.');
            this.dateInput.focus();
            return false;
        }

        if (!this.moodSelect.value) {
            alert('오늘의 기분을 선택해주세요.');
            this.moodSelect.focus();
            return false;
        }

        if (!this.titleInput.value.trim()) {
            alert('제목을 입력해주세요.');
            this.titleInput.focus();
            return false;
        }

        if (!this.contentTextarea.value.trim()) {
            alert('일기 내용을 입력해주세요.');
            this.contentTextarea.focus();
            return false;
        }

        return true;
    }

    // 폼 초기화
    clearForm() {
        this.titleInput.value = '';
        this.contentTextarea.value = '';
        this.moodSelect.value = '';
        this.setTodayDate();
        this.validateForm();
    }

    // 성공 메시지 표시
    showSuccessMessage() {
        const originalText = this.saveBtn.textContent;
        this.saveBtn.textContent = '✅ 저장완료!';
        this.saveBtn.style.background = '#4CAF50';
        
        setTimeout(() => {
            this.saveBtn.textContent = originalText;
            this.saveBtn.style.background = '';
        }, 2000);
    }

    // 일기 목록 렌더링
    renderEntries() {
        if (this.entries.length === 0) {
            this.entriesContainer.innerHTML = '<p class="no-entries">아직 작성된 일기가 없습니다. 첫 번째 일기를 써보세요!</p>';
            return;
        }

        const entriesHTML = this.entries.map(entry => this.createEntryHTML(entry)).join('');
        this.entriesContainer.innerHTML = entriesHTML;

        // 삭제 버튼 이벤트 등록
        this.entriesContainer.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const entryId = parseInt(e.target.dataset.id);
                this.deleteEntry(entryId);
            });
        });
    }

    // 개별 일기 HTML 생성
    createEntryHTML(entry) {
        const formattedDate = this.formatDate(entry.date);
        const previewContent = entry.content.length > 100 
            ? entry.content.substring(0, 100) + '...'
            : entry.content;

        return `
            <div class="entry" data-id="${entry.id}">
                <div class="entry-header">
                    <span class="entry-date">${formattedDate}</span>
                    <div>
                        <span class="entry-mood">${entry.mood}</span>
                        <button class="delete-btn" data-id="${entry.id}">삭제</button>
                    </div>
                </div>
                <h3 class="entry-title">${this.escapeHtml(entry.title)}</h3>
                <p class="entry-content">${this.escapeHtml(previewContent)}</p>
            </div>
        `;
    }

    // 날짜 포맷팅
    formatDate(dateString) {
        const date = new Date(dateString);
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            weekday: 'long'
        };
        return date.toLocaleDateString('ko-KR', options);
    }

    // HTML 이스케이프
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // 일기 삭제
    deleteEntry(entryId) {
        if (!confirm('정말로 이 일기를 삭제하시겠습니까?')) return;

        this.entries = this.entries.filter(entry => entry.id !== entryId);
        this.saveEntries();
        this.renderEntries();
        
        // 삭제 완료 알림
        this.showDeleteMessage();
    }

    // 삭제 완료 메시지
    showDeleteMessage() {
        const message = document.createElement('div');
        message.textContent = '일기가 삭제되었습니다.';
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ff6b6b;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 1000;
            animation: fadeIn 0.3s ease-out;
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => message.remove(), 300);
        }, 2000);
    }

    // 로컬 스토리지에서 데이터 로드
    loadEntries() {
        try {
            const stored = localStorage.getItem('diaryEntries');
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('일기 데이터 로드 실패:', error);
            return [];
        }
    }

    // 로컬 스토리지에 데이터 저장
    saveEntries() {
        try {
            localStorage.setItem('diaryEntries', JSON.stringify(this.entries));
        } catch (error) {
            console.error('일기 데이터 저장 실패:', error);
            alert('일기 저장에 실패했습니다. 브라우저 저장공간을 확인해주세요.');
        }
    }

    // 데이터 내보내기 (JSON)
    exportData() {
        const dataStr = JSON.stringify(this.entries, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `diary_backup_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
    }

    // 데이터 가져오기
    importData(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedEntries = JSON.parse(e.target.result);
                if (confirm('기존 일기를 모두 덮어쓰시겠습니까?')) {
                    this.entries = importedEntries;
                    this.saveEntries();
                    this.renderEntries();
                    alert('일기 데이터를 성공적으로 가져왔습니다.');
                }
            } catch (error) {
                alert('잘못된 파일 형식입니다.');
            }
        };
        reader.readAsText(file);
    }
}

// 애플리케이션 초기화
document.addEventListener('DOMContentLoaded', () => {
    const diaryManager = new DiaryManager();
    
    // 전역에서 접근 가능하도록 설정 (개발자 도구에서 테스트용)
    window.diaryManager = diaryManager;
    
    console.log('📔 일기장 앱이 준비되었습니다!');
    console.log('Ctrl + Enter로 빠른 저장이 가능합니다.');
});

// 페이지 언로드 시 확인
window.addEventListener('beforeunload', (e) => {
    const titleInput = document.getElementById('title');
    const contentTextarea = document.getElementById('content');
    
    if (titleInput.value.trim() || contentTextarea.value.trim()) {
        e.preventDefault();
        e.returnValue = '';
    }
});

// 서비스 워커 등록 (PWA 기능)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
