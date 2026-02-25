---
title: "금융권 C사 NKS 기반 컨테이너화 및 GitOps 체계 구축"
summary: "SSH 기반 배포 환경을 NKS + ArgoCD GitOps 체계로 전환. 애플리케이션 컨테이너화로 배포 패키징 표준화 및 이미지 단위 즉시 롤백 확보. 운영팀 10명 대상 GitOps 온사이트 교육 수행."
company: "DevOps 전문기업"
field: [DevOps]
tech: [Kubernetes, GitLab, Docker]
team: []
period_start: 2024-03-01
period_end: 2024-06-30
cover: "../../assets/covers/금융권-c사-nks-기반-컨테이너화-및-gitops-체계-구축.png"
notion_id: "31055bb2-024a-81d1-acdd-e68169fef1c9"
featured: false
---
## 📖 상세 내용

**프로젝트 개요**
SSH 기반 배포 환경을 NKS + ArgoCD GitOps 체계로 전환했습니다.
애플리케이션 컨테이너화를 통해 배포 패키징을 표준화하고 이미지 단위 즉시 롤백이 가능한 안정성을 확보했습니다.

**주요 성과**
- SSH 배포 → NKS + ArgoCD GitOps 전환 (2개 팀 10명)
- 애플리케이션 컨테이너화로 배포 패키징 표준화 및 이미지 단위 즉시 롤백
- Kustomize Overlay로 환경별 배포 관리 (Dev/Staging/Prod)
- 운영팀 10명 대상 GitOps 온사이트 교육 직접 수행
## 🛠️ 사용 기술 및 라이브러리
- Platform: NCP, NKS, ArgoCD
- Config: Kustomize, GitOps
- CI: GitLab Runner
## 📱 담당 기능
### [GitOps 체계]
- ArgoCD + NKS 연동
- Kustomize 기반 환경별 Overlay
### [교육]
- 운영팀 10명 GitOps 온사이트 교육
- ArgoCD 실습 워크숍
