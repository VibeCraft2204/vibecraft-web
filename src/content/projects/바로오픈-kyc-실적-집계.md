---
title: "바로오픈 KYC 실적 집계 프로그램"
summary: "바로오픈 서비스 이용 사업자의 KYC(고객확인제도) 이행 대상 선별 업무 자동화"
company: "금융 IT사"
field: [B/E, F/E, DB]
tech: [Struts, Spring Framework, Oracle, Cron Job, MyBatis, JSP]
team: []
period_start: 2024-07-01
period_end: 2024-08-31
cover: "../../assets/covers/industry/finance.png"
notion_id: "31d55bb2-024a-8094-b372-f204e4a758c7"
featured: false
---
## 📖 상세 내용

**배경 및 개요**
- 바로오픈 서비스 이용 사업자 중 KYC(고객확인제도) 이행 대상 선별 과정에서 수기 작업에 따른 업무 과부하 및 대상자 누락 리스크 방지
- 분산된 결제 실적을 집계하여 대상자를 식별하고 안내 메일을 자동 발송하는 시스템을 구축하여 규제 준수 체계 강화 및 운영 효율화

**주요 수행 내용**
- 결제 수단별로 분산된 거래 승인 금액을 매일 지정된 기간(D-7~D-1) 기준으로 합산 처리하는 대용량 실적 집계 배치 프로그램 개발
- 1천만 원 이상의 실적이 발생한 경우에 대상 사업자를 자동 필터링하고, 즉시 계약 이행 안내 메일을 발송하는 자동화 프로세스 구축
- 대상 사업자 목록과 메일 발송 이력, KYC 이행 상태를 시각화하여 미이행 건에 대해 집중 관리를 지원하는 통합 모니터링 대시보드 구현

**주요 성과**
- KYC 대상 식별 프로세스를 100% 자동화하여 현업 운영팀의 모니터링 시간 99% 이상 단축을 통한 인적 자원 확보
- 실적 달성 직후 즉각적인 안내 메일 발송 체계를 마련하여 계약 이행률 제고 및 법적 규제 미준수 리스크 사전 차단

## 🛠️ 사용 기술
- Backend: Struts, Spring Framework, MyBatis, Cron Job (Unix)
- Frontend: JSP, Javascript, jQuery
- Database: Oracle

## 📱 담당 기능

**[Backend - Struts & Spring Framework]**
- 웹 서비스
- 배치 프로그램
