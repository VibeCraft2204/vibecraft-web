---
title: "의료 AI 환자상태 악화 예측 시스템"
summary: "환자상태 악화 예측 시스템 데이터 파이프라인 구현 참여"
company: "의료 AI 기업"
field: [Data, B/E]
tech: [Python, MySQL, Docker, Linux]
team: []
period_start: 2023-11-24
period_end: 2025-06-24
cover: "../../assets/covers/industry/medical.png"
notion_id: "31d55bb2-024a-80fc-a79a-dc295371f434"
featured: false
---
## 📖 상세 내용

**프로젝트 개요**
병원 전자기록 시스템(EMR) 데이터 수집·매핑·적재 기능을 수행하는 Pure Python ETL 시스템을 설계 및 구축했습니다. 인터페이스 Adapter화, Snapshot 기반 파이프라인, CI 자동화까지 포함한 의료 AI 플랫폼의 데이터 기반을 담당했습니다.

**주요 성과**
- FDA 510(k) 인증 취득 (국내 최초 바이탈 AI SW)
- 상용화를 통해 연매출 100억 규모 달성 기여

## 🛠️ 사용 기술 및 라이브러리
- Platform: Linux, Docker
- Language/Framework: Python
- DB: Oracle, MySQL, MSSQL, Sybase
- CI/CD: GitHub Actions

## 📱 담당 기능

**[인터페이스]**
- 인터페이스 접속도구 Adapter화
- Template 방식의 인터페이스 Mapper 구현으로 유연성 최대화

**[ETL 파이프라인]**
- 도메인 룰을 반영한 Snapshot 기반 데이터 파이프라인 구축
- UID 및 버전 관리로 데이터 이력 추적성·정합성 확보

**[배포도구 운영/제어]**
- 병원별 Docker/Compose 배포도구 형상관리
- Git Actions 기반 이미지 빌드 및 릴리즈 테스트 자동화, CI 환경 구축

**[테스트 환경 구축]**
- Interface에 대한 Mock DB/API 테스트 도구 개발
- Unit/Integration Test 코드 및 환경 구현
