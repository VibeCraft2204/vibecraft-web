---
title: "LLM 기반 AI 문진 솔루션"
summary: "진료 준비부터 대화 기록, 사후 케어까지 의료진의 업무 부담을 대폭 줄이는 Medical Copilot AI 솔루션"
company: "의료 AI 기업"
field: [AI, Data]
tech: [Python, Linux, Kafka, gRPC]
team: []
period_start: 2025-01-03
cover: "../../assets/covers/industry/medical.png"
notion_id: "31d55bb2-024a-806c-99a2-d19b62f7e838"
featured: false
---
## 📖 상세 내용

**프로젝트 개요**
AI 기술을 활용해 환자의 증상에 맞춘 최적화된 문진 질문을 자동으로 생성하고, 이를 바탕으로 의료진에게 핵심 정보를 전달하는 건강 리포트를 작성하는 LLM 기반 AI 문진 솔루션의 AI 추론 파이프라인을 설계 및 구현했습니다.

백엔드로부터 환자의 문진 데이터가 Kafka 메시지로 수신되면, LLM이 대화형으로 필요한 질문을 생성하고 다시 백엔드로 반환하는 사이클을 반복합니다. 문진이 완료되면 의료진이 참조하는 최종 리포트를 생성합니다.

**주요 성과**
- LLM 기반 대화형 문진 AI 파이프라인 설계 및 구축
- Kafka + gRPC 기반 비동기 추론 아키텍처로 실시간 문진 처리 구현
- NLP 후처리를 통한 의료 문체 정제 및 리포트 품질 향상

## 🛠️ 사용 기술 및 라이브러리
- Messaging: Apache Kafka
- LLM Serving: vLLM
- Communication: gRPC (비동기)
- NLP/후처리: Python NLP 라이브러리 (문체 정제, 텍스트 정규화)
- Backend: Python

## 📱 담당 기능

**[Kafka Consumer]**
- 백엔드로부터 환자 문진 데이터 메시지 컨슈밍
- 메시지 유형(질문 생성 요청 / 리포트 생성 요청) 분기 처리

**[전처리 (Preprocessing)]**
- 컨슈밍된 환자 데이터를 LLM 입력 형식에 맞게 정규화
- 대화 컨텍스트(이전 문진 이력) 구성 및 프롬프트 조합

**[LLM 추론 (Inference)]**
- vLLM 기반 LLM 추론 서버에 gRPC 비동기 방식으로 요청 송신
- 환자 증상 기반 후속 질문 생성 → 백엔드 반환 사이클 반복
- 문진 완료 시점 감지 후 최종 의료진 참조 리포트 생성 요청

**[후처리 (Postprocessing)]**
- LLM 응답(질문 또는 리포트 텍스트) NLP 기반 문체 정제
- 의료 문서 형식에 맞는 텍스트 정규화 및 이상 출력 필터링
- 정제된 결과를 gRPC로 백엔드에 반환
