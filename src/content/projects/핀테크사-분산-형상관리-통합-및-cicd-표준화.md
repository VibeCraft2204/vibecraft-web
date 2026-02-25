---
title: "핀테크사 분산 형상관리 통합 및 CI/CD 표준화"
summary: "Jenkins 기반 100+ 프로젝트를 GitLab CI/CD로 마이그레이션. OS/빌드시스템/배포방식 조합별 표준 템플릿 체계 설계. Java JDK 버전별 컨테이너화(Kaniko)."
company: "DevOps 전문기업"
field: [DevOps]
tech: [GitLab, Docker, Prometheus]
team: []
period_start: 2025-07-01
period_end: 2025-11-30
cover: "../../assets/covers/핀테크사-분산-형상관리-통합-및-cicd-표준화.png"
notion_id: "31055bb2-024a-8178-bda5-e57a38e9d74d"
featured: true
---
## 📖 상세 내용

**프로젝트 개요**
Jenkins 기반 100+ 프로젝트를 GitLab CI/CD로 마이그레이션했습니다.
OS(Linux/Windows), 빌드시스템(Java/C), 배포방식(SSH/Kubernetes/Docker) 조합별 표준 템플릿 체계를 설계했습니다.

**주요 성과**
- Jenkins 기반 100+ 프로젝트 → GitLab CI/CD 마이그레이션
- OS/빌드시스템/배포방식 조합별 표준 템플릿 체계 설계, 50명+ 개발자 대상
- Java JDK 버전별 Dockerfile 작성 및 Kaniko 기반 컨테이너 빌드
- C 프로젝트: 서버 의존성 분석 후 단계적 전환 범위 설정
## 🛠️ 사용 기술 및 라이브러리
- CI/CD: GitLab CI/CD, Kaniko, Nexus
- Monitoring: Prometheus, Grafana
- Build: Java (Gradle/Maven), C
## 📱 담당 기능
### [형상관리 통합]
- SVN/자체 GitLab/로컬 빌드 → 단일 Omnibus GitLab 통합
- 히스토리 보존 마이그레이션
### [CI/CD 표준 템플릿]
- 언어별/빌드별 파이프라인 템플릿 개발
- Java JDK 버전별 Kaniko 기반 이미지 빌드
- include 기반 중앙 관리 체계
