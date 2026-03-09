---
title: "금융권 B사 에어갭 Kubernetes 플랫폼 구축 및 DX 혁신"
summary: "VDI 리소스 부족으로 빌드조차 불가능했던 환경을 Kubernetes 기반 개인 개발환경으로 전환. 동적 와일드카드 도메인으로 10명 개발자별 독립 환경 제공 및 JetBrains Remote Debug 지원. PoC 도입 후 정식 사업 확대."
company: "DevOps 전문기업"
field: [DevOps]
tech: [Kubernetes, GitLab, Prometheus, Grafana]
team: []
period_start: 2024-10-01
period_end: 2025-01-31
cover: "../../assets/covers/industry/finance.png"
notion_id: "31055bb2-024a-811b-9f64-ef81f20291b7"
featured: false
---
## 📖 상세 내용

**프로젝트 개요**
VDI 리소스 부족으로 빌드조차 불가능했던 환경을 Kubernetes 기반 개인 개발환경으로 전환했습니다.
동적 와일드카드 도메인(*.dev.example.com)으로 10명 개발자별 독립 환경을 제공하고, JetBrains Remote Debug를 지원했습니다.

**주요 성과**
- VDI 빌드 불가 환경 → K8s 기반 개인 개발환경 전환 (10명 개발자)
- 동적 와일드카드 도메인 + JetBrains Remote Debug로 개발 경험 혁신
- 고객사 L4 스위치 환경에 맞춰 MetalLB → NodePort 기반으로 아키텍처 현장 적응
- PoC 도입 후 정식 사업으로 확대 결정
## 🛠️ 사용 기술 및 라이브러리
- Platform: Kubernetes (kubeadm), Harbor, GitLab Agent/Runner
- Monitoring: Prometheus, Grafana, Loki, JMX
- Ingress: NGINX Ingress, cert-manager Wildcard TLS
## 📱 담당 기능
### [K8s 클러스터 구축]
- 에어갭 kubeadm K8s 1.31 클러스터
- NodePort 기반 로드밸런싱
- NGINX Ingress + Wildcard TLS
### [개발자 경험 혁신]
- 동적 와일드카드 도메인 (개발자별 Namespace)
- JetBrains Remote Debug 환경
- Jenkins → GitLab CI/CD 전환
