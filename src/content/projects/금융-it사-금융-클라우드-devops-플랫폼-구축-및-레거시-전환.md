---
title: "금융 IT사 금융 클라우드 DevOps 플랫폼 구축 및 레거시 전환"
summary: "SVN + Change Flow 파일 단위 배포 환경을 에어갭 GitLab CI/CD로 전환. 기존 프라이빗 클라우드 위에 DevOps 도구셋 구축. 5개 팀 50명 개발자 대상. Helm Chart 해시 및 컨테이너 Digest 검증 기반 이미지 무결성 체계 구축."
company: "DevOps 전문기업"
field: [DevOps]
tech: [GitLab, Kubernetes, Prometheus, Docker]
team: []
period_start: 2025-01-01
cover: "../../assets/covers/금융-it사-금융-클라우드-devops-플랫폼-구축-및-레거시-전환.png"
notion_id: "31055bb2-024a-8152-8d70-ee808b39cc08"
featured: false
---
## 📖 상세 내용

**프로젝트 개요**
SVN + Change Flow 파일 단위 배포 환경을 에어갭 GitLab CI/CD로 전환했습니다.
기존 프라이빗 클라우드 인프라 위에 DevOps 도구셋을 구축하고 온프레미스 GitLab Runner를 연동하여 5개 팀 50명 개발자 대상으로 운영하고 있습니다.

**주요 성과**
- 기존 프라이빗 클라우드에 DevOps 도구셋 구축 + 온프레미스 Runner 연동, 5개 팀 50명 대상
- SVN + Change Flow 파일 단위 배포 → GitLab Runner CI/CD 전환
- Helm Chart 해시, 컨테이너 Digest 검증 기반 이미지 무결성 체계
- 에어갭 Kubernetes 환경에서 GitLab, Mattermost 안정 운영
## 🛠️ 사용 기술 및 라이브러리
- Platform: GitLab HA, Harbor, Mattermost
- Infra: Kubernetes, Helm
- Monitoring: Prometheus, Grafana
## 📱 담당 기능
### [DevOps 플랫폼]
- GitLab HA 클러스터 + Harbor 레지스트리
- ITSM 연동 브랜치 전략
### [이미지 무결성 검증]
- Helm Chart 해시 비교
- 컨테이너 Digest 검증 체계
