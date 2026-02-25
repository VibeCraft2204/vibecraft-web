---
title: "IoT 엣지 온프레미스 장비 개발"
summary: "온오프라인 환경 지원 실내 공기질 모니터링 IoT 엣지 장비 개발"
company: "IoT 전문기업"
field: [APP(Cross Platform), B/E, DB]
tech: [Flutter, FastAPI, Docker, Bash Shell, Sqlite, Github Action]
team: []
period_start: 2023-02-01
period_end: 2023-06-16
cover: "../../assets/covers/iot-엣지-모니터링-장비-개발.png"
notion_id: "2f855bb2-024a-8192-878d-f896d26a80bf"
featured: false
---
## 📖 상세 내용

**프로젝트 개요**
IoT 엣지에 연동된 실내 공기질 측정 장비 데이터 수신 / 중계(Broker) 및 Logger 기능을 수행하며 on/offline 환경에서 실내 공기질 모니터링 UI를 제공하는 IoT 장비 개발

**주요 목적**
- 온/오프라인 환경 지원 Edge 서버
- 센서 데이터 로컬 처리 및 클라우드 배치 업로드
- IoT 장비 Broker 기능

**주요 기능**
- MQTT 및 Serial 통신 IoT 시스템
- Poetry 패키지 관리
- GitHub Actions CI/CD (Python 3.9/3.10/3.11)
- 멀티 아키텍처 빌드 (amd64, arm64)
- Raspberry Pi 배포 자동화

**프로젝트 성과**
- 멀티 아키텍처 빌드로 다양한 환경 지원
- init.sh 10단계 자동 설정으로 배포 시간 단축
- Edge Computing으로 네트워크 대역폭 효율화
## 🛠️ 사용 기술 및 라이브러리
- B/E: FastAPI, Poetry
- DB: SQLite, PostgreSQL
- IoT: MQTT, Serial 통신
- Tool: Docker, Docker Compose, GitHub Actions, Raspberry Pi
## 📱 담당 기능
### [Edge Server - FastAPI]
- IoT 통신
- 데이터 처리
### [DevOps]
- CI/CD
- 자동화
