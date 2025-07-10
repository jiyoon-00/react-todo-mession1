# 리액트 투두 앱 만들기 미션 레포

# React-Vite Todo App

간단한 React + Vite 기반 Todo 리스트 애플리케이션입니다.  
로컬스토리지에 할 일 데이터를 저장하여 페이지 새로고침 후에도 유지됩니다.

---

## 개발 기간

📅 2025.07.08 – 2025.07.09

---

## 주요 기능

- ✅ 할 일 추가
  - 인풋에 텍스트 입력 후 Enter 또는 “등록” 버튼 클릭
- ☑️ 완료 체크
  - 체크박스를 클릭하면 완료 상태로 토글
  - 완료된 항목은 ~~취소선~~ 스타일 적용
- 🗑️ 삭제
  - “삭제” 버튼 클릭으로 해당 할 일 즉시 제거
- 💾 localStorage 연동
  - 상태 변경 시 자동 저장 → 새로고침해도 데이터 유지 \
- 📆 날짜/시간 표시
  - 페이지 상단에 실시간으로 현재 날짜와 시간을 보여줍니다.

---

## 기술 스택

- **프레임워크**: React (v18) + Vite
- **스타일**: Tailwind CSS
- **상태 관리**: React Hooks (`useState`, `useEffect`, `useRef`)
- **데이터 지속성**: `localStorage` (커스텀 유틸 `getStorage`/`setStorage`)

---

## 실행 이미지

![image](https://github.com/user-attachments/assets/632039ba-0101-4b75-8dce-22ad174beaa5)
