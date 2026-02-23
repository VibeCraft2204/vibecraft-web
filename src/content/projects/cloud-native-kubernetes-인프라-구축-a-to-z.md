---
title: "Cloud Native Kubernetes 인프라 구축 (A to Z)"
summary: "PC 3대를 활용하여 MikroTik BGP+ECMP 네트워크, Cilium Gateway API, GPU 노드까지 프로덕션급 Kubernetes 클러스터를 직접 구축한 사이드 프로젝트."
company: "사이드 프로젝트"
field: [DevOps]
tech: [Kubernetes, Prometheus, Grafana, Docker, Linux]
team: []
period_start: 2024-09-01
cover: "covers/cloud-native-kubernetes-인프라-구축-a-to-z.png"
notion_id: "31055bb2-024a-8188-9daf-f56f1ec5b95f"
featured: false
---
## 📖 상세 내용
프로젝트 개요
MikroTik BGP+ECMP 네트워크, Cilium Gateway API, GPU 노드까지
프로덕션급 Kubernetes 클러스터를 직접 구축한 사이드 프로젝트입니다.
주요 성과
- 3 노드 베어메탈 클러스터 (Control Plane + Workers + RTX 3060)
- MikroTik BGP + ECMP 기반 고가용성 네트워크
- Cilium Gateway API (hostNetwork) + VIP 172.30.1.7
- ArgoCD GitOps + Self-hosted GitLab + GitHub ARC
## 🛠️ 사용 기술 및 라이브러리
- K8s: Kubespray, Cilium CNI, Gateway API, Longhorn
- Network: MikroTik hEX S, BGP (AS 64512), ECMP
- DevOps: ArgoCD GitOps, Self-hosted GitLab, GitHub ARC
- Observability: Prometheus, Grafana, Loki, Tempo, Langfuse
- AI: NVIDIA RTX 3060, Ollama, Open WebUI, MLflow
- Security: DefectDojo, SonarQube, Trivy, Sealed Secrets
## 📱 담당 기능
### [인프라]
- 베어메탈 K8s 클러스터 구축
- BGP+ECMP 네트워크 설계
- GPU 노드 (RTX 3060) 설정
### [DevOps 도구셋]
- ArgoCD GitOps 체계
- Observability Stack (Prometheus/Grafana/Loki/Tempo)
- DevSecOps (DefectDojo/SonarQube/Trivy)
