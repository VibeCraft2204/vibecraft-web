---
title: "금융권 A사 DevOps 도구셋 구축 및 AI 코드 리뷰 자동화"
summary: "SVN + ChangeFlow 환경을 GitLab 기반으로 전환하여 5개 팀 100명+ 개발자 대상 DevOps 도구셋 설계. ITSM 통제 환경에 맞는 Git 전략 수립 및 47개 시나리오 운영 가이드 작성. vLLM(Solar Pro 2) 기반 AI 코드 리뷰 자동화."
company: "DevOps 전문기업"
field: [DevOps]
tech: [GitLab, Prometheus, Grafana, Keycloak, N8N]
team: []
period_start: 2025-08-01
period_end: 2026-02-28
cover: "../../assets/covers/금융권-a사-devops-도구셋-구축-및-ai-코드-리뷰-자동화.png"
notion_id: "31055bb2-024a-812a-9d89-c00d9e5ad587"
featured: true
---
## 📖 상세 내용

**프로젝트 개요**
SVN + ChangeFlow 환경을 GitLab 기반으로 전환하여 5개 팀 100명+ 개발자 대상 DevOps 도구셋을 설계했습니다.
ITSM 통제 환경(squash/rebase/force push 금지)에 맞는 Git 전략을 수립하고, 47개 시나리오 기반 운영 가이드를 작성했습니다.

**주요 성과**
- 5개 팀 100명+ 개발자 대상 DevOps 도구셋 설계
- ITSM 통제 환경에 맞는 Git 전략 수립 및 47개 시나리오 운영 가이드 작성
- Left Shift 코드 품질 3종 검사 (CodePrism, Clarity, Fortify)
- vLLM(Solar Pro 2) 기반 AI 코드 리뷰 자동화
- 보안 감사 대응: Rootless Docker + Air-gap 제약사항 해결
## 🛠️ 사용 기술 및 라이브러리
- Platform: GitLab HA, Mattermost, HashiCorp Vault
- Observability: Prometheus, Grafana, Loki
- AI: vLLM (Solar Pro 2), N8N
- Auth: Keycloak SSO/SAML
## 📱 담당 기능
### [DevOps 플랫폼]
- GitLab HA 클러스터 구축 (에어갭, Rootless Docker)
- Left Shift 품질 검사 (CodePrism, Clarity, Fortify)
- Observability Stack (Prometheus, Grafana, Loki)
### [AI 코드 리뷰 자동화]
- vLLM 기반 LLM 추론 서버 구축
- N8N MR 이벤트 트리거 → AI 리뷰 자동 코멘트
