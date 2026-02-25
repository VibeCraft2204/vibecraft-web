---
title: "Multiview Annotation Tool"
summary: "멀티카메라 동기화 비디오에서 Audio Source 위치 특정 및 Unsupervised Learning 연구를 위한 CVAT 기반 어노테이션 도구"
company: "대학 연구실"
field: [B/E, F/E, DB, Data]
tech: [Python, JS, Django, React, Sqlite, Git, Github Action, AWS]
team: []
period_start: 2025-12-22
cover: "../../assets/covers/multiview-annotation-tool.png"
notion_id: "2f855bb2-024a-8105-8194-feb12b3e85f0"
featured: true
---
## 📖 상세 내용
프로젝트 개요
Multiview에서 촬영된 다각도의 카메라에서 기존 Object Detection에서 벗어나 Audio Source에 대한 정확한 위치를 파악하고 Unsupervised Learning Model 연구를 보조하기 위한 CVAT을 커스텀하여 Multiview Annotation Tool 제작
주요 목적
- 멀티카메라 환경에서의 Audio Source Localization 연구 지원
- 기존 CVAT의 단일 비디오 한계 극복
- Unsupervised Learning 모델 학습을 위한 고품질 라벨링 데이터 생성
주요 기능
- 1-10개 카메라 동시 시각화 및 동기화 재생
- Pre-computed Spectrogram 오디오 시각화
- view_id 기반 뷰별 독립 어노테이션 관리
- Keyframe 전용 Export로 데이터 정확도 향상
- 스펙트로그램 클릭 시 해당 시간으로 즉시 이동
프로젝트 성과
- Export 파일 크기 80% 감소, 속도 3-5배 향상
- 기존 단일 비디오에서 최대 10개 카메라로 확장
- 자율주행, CCTV, 스포츠 분석 등 다양한 분야 적용 가능
## 🛠️ 사용 기술 및 라이브러리
- F/E: React 18.2.0, TypeScript 5.0.2, Redux 4.1.1, Fabric.js 5.2.1
- B/E: Django, Django REST Framework
- DB: PostgreSQL
- Tool: Docker, Docker Compose, Webpack 5.94.0, FFmpeg
- AI/ML: Web Audio API (STFT Spectrogram)
## 📱 담당 기능
### [Frontend - React/TypeScript]
- 멀티뷰 워크스페이스 개발
- 오디오 시각화 시스템
- 어노테이션 시스템
### [Backend - Django]
- REST API 확장
### [DevOps]
- 컨테이너화
