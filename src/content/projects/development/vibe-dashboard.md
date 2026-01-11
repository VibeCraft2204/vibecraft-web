---
title: "SaaS 대시보드 리팩토링"
category: "development"
subcategory: "vibe-refactor"
client: "스타트업 A사"
period: "2025.08 - 2025.10"
status: "completed"
featured: true
tags: ["React", "TypeScript", "리팩토링"]
metrics:
  - label: "번들 사이즈"
    value: "-45%"
  - label: "로딩 속도"
    value: "3배 향상"
techStack: ["React", "TypeScript", "Vite", "TailwindCSS", "React Query"]
summary: "레거시 CRA 프로젝트를 Vite + TypeScript로 전환. 번들 사이즈 45% 감소, 초기 로딩 속도 3배 향상."
---

## 프로젝트 개요

고객사의 SaaS 대시보드가 CRA(Create React App) 기반 JavaScript로 작성되어 있었습니다. 코드베이스가 커지면서 빌드 시간이 길어지고, 타입 안정성 부족으로 런타임 에러가 빈번했습니다. Vite + TypeScript로 전환하여 개발 생산성과 안정성을 크게 향상시켰습니다.

## 주요 작업

### 1. 빌드 시스템 마이그레이션
- CRA → Vite 전환
- Webpack 설정 → Vite 플러그인 마이그레이션
- 환경 변수 체계 정리

### 2. TypeScript 도입
- JavaScript → TypeScript 전환 (300+ 파일)
- 엄격한 타입 체계 수립
- API 응답 타입 자동 생성 (OpenAPI)

### 3. 상태 관리 최적화
- Redux → React Query + Zustand
- 불필요한 리렌더링 제거
- 캐싱 전략 수립

### 4. UI 시스템 개선
- styled-components → TailwindCSS
- 디자인 토큰 체계 구축
- 컴포넌트 라이브러리 정리

## 결과

| 지표 | 도입 전 | 도입 후 | 개선율 |
|------|---------|---------|--------|
| 번들 사이즈 | 2.1MB | 1.15MB | -45% |
| 초기 로딩 | 4.2초 | 1.4초 | -67% |
| 빌드 시간 | 180초 | 12초 | -93% |
| 런타임 에러 | 월 15건 | 월 2건 | -87% |

## 기술적 하이라이트

- **코드 스플리팅**: React.lazy + Suspense로 라우트별 분할
- **이미지 최적화**: WebP 자동 변환 + lazy loading
- **번들 분석**: 미사용 의존성 30개 제거
