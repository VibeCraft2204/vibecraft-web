---
title: "SYC 플랫폼 개발"
category: "development"
subcategory: "outsourcing"
client: "SYC"
period: "2025.06 - 2025.11"
status: "completed"
featured: false
tags: ["풀스택", "Next.js", "PostgreSQL"]
metrics:
  - label: "개발 기간"
    value: "6개월"
  - label: "API 엔드포인트"
    value: "50+"
techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Docker", "AWS"]
summary: "SYC 서비스를 위한 풀스택 플랫폼 개발. 백엔드, 프론트엔드, 인프라 전체 구축."
---

## 프로젝트 개요

SYC의 핵심 서비스 플랫폼을 처음부터 설계하고 구축한 프로젝트입니다. 사용자 인증, 데이터 관리, 대시보드 등 전체 시스템을 개발했습니다.

## 주요 작업

### 1. 백엔드 개발
- Next.js API Routes 기반 REST API
- Prisma ORM + PostgreSQL
- JWT 기반 인증 시스템
- 파일 업로드 (S3)

### 2. 프론트엔드 개발
- Next.js App Router
- TailwindCSS + shadcn/ui
- React Hook Form + Zod 검증
- 반응형 디자인

### 3. 인프라 구축
- Docker 컨테이너화
- AWS ECS 배포
- GitHub Actions CI/CD
- 모니터링 (CloudWatch)

## 시스템 아키텍처

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Client    │────▶│   Next.js   │────▶│ PostgreSQL  │
│   (Web)     │     │   (ECS)     │     │   (RDS)     │
└─────────────┘     └─────────────┘     └─────────────┘
                           │
                           ▼
                    ┌─────────────┐
                    │     S3      │
                    │  (파일저장) │
                    └─────────────┘
```

## 결과

- **안정적인 서비스 운영**: 99.9% 가동률
- **확장 가능한 아키텍처**: 트래픽 증가에 유연하게 대응
- **완전한 문서화**: API 문서, 배포 가이드 제공
