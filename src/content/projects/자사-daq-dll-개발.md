---
title: "자사 DAQ DLL 개발"
summary: "DAQ 장비 제어 SDK 개발 (C++ DLL, Python 바인딩, API 문서)"
company: "계측 전문기업"
field: [B/E]
tech: [C++, Python]
team: []
period_start: 2021-02-02
period_end: 2021-03-25
cover: "../../assets/covers/자사-daq-dll-개발.png"
notion_id: "2f855bb2-024a-8103-b0d0-d7139b4bd351"
featured: false
---
## 📖 상세 내용
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/31855bb2-024a-81fc-927e-0003e1af3e7d/c4721f4f-9b56-40a1-b381-3e557b6ef4e0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3HG7CWX%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T152155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICPygAleBfK%2Bek0Xo8kJtAiAbzes9Mv%2FhNB8A65AbD%2B8AiByozT2Wfxzg69d2blkE7FXkDAeoVO6ax2wnx7pDNKwFSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM8sTfTSk0SDDPPHEKtwDvfxNomAr5BWuvA%2FvDKtOTa0cH3oBrGd%2BhJrTmNqV0m3azcdX5n90u7XMWxls7VOiiQv%2FKytbO5lYZl5JK9lzpMuCaY6HIx7F1beOthXb3EQ08tdbZONbPyvSW2dYAePlt6Z80iy4Xn8P4vIIdBicjhjw8MD6r17UWA3wwnj7b4joFQJKuzwpEnLrqvsMzvRKZxE%2Bvm5%2F1s%2Fjij3JRP2JSbBHH9%2BDfBZfElQxJuO%2BCkfqBEzah7uuaoMw7dsEQLuXNoMUvtdWL7BKh4mM5gvUnEveZCSfNS6Z4pfeDZZ8Z33fmfJRmHXUnHodiEMlTkKcXmJfQ6pjcqJrAo3bYEPD9y1aufPACgC7fDI%2Fx%2F1YJCIMW%2F3Gv5RQefgs4y9xtx9chz7ycSBUoG0PQaZmqWHhClTav9s6jGm4Gjl4E%2B6Fv9Y%2FELDMH9wQw4o03Ydkr%2B3H8dCt1%2FGICHs0OMIZFDX6UpIxROZzHr6QPTCsvqo3GnmVHbBx7OYPOYN3l9Gh2TmA8FWpOmErIgppcDsQPd8MyHyZqYAnyZ7P2XPAYKUlN0jbc%2B8Xdo8smFYgIxVtQAgNHaOB7XiM0mg%2FG%2FEHd0pSeiu1S8vNtMLmD%2B9dIv2Pk4%2FnpMG%2FXQxXbVxLWWAwr9LxzAY6pgGMY9QKDVhR9Rqkr3NhQV0ysaeZyfVWi8UWSt3WCVtUKlp5aEQ4d5uQ3lpv9D4iFIuEB3KfksXCq6b40chzj2MWjCpK1AROMw%2B2mTNN9qG2MA5hXrEBtGPlap43of%2BdwhAXmpKin4EvQQMHNWXDqjLgSK01RLZgxvoga5FW4CiwhuoVhmbexFq80d7uDN8n%2FjG8JqtsCefSkEplYnZxfYhyZWUwmtBK&X-Amz-Signature=fec114b4a202c415c40285419fe3ae0e1019612438dd157ef1885577c360014a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/31855bb2-024a-81fc-927e-0003e1af3e7d/e7430f8f-32d4-4257-8ebc-a51dc992f396/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3HG7CWX%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T152155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICPygAleBfK%2Bek0Xo8kJtAiAbzes9Mv%2FhNB8A65AbD%2B8AiByozT2Wfxzg69d2blkE7FXkDAeoVO6ax2wnx7pDNKwFSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM8sTfTSk0SDDPPHEKtwDvfxNomAr5BWuvA%2FvDKtOTa0cH3oBrGd%2BhJrTmNqV0m3azcdX5n90u7XMWxls7VOiiQv%2FKytbO5lYZl5JK9lzpMuCaY6HIx7F1beOthXb3EQ08tdbZONbPyvSW2dYAePlt6Z80iy4Xn8P4vIIdBicjhjw8MD6r17UWA3wwnj7b4joFQJKuzwpEnLrqvsMzvRKZxE%2Bvm5%2F1s%2Fjij3JRP2JSbBHH9%2BDfBZfElQxJuO%2BCkfqBEzah7uuaoMw7dsEQLuXNoMUvtdWL7BKh4mM5gvUnEveZCSfNS6Z4pfeDZZ8Z33fmfJRmHXUnHodiEMlTkKcXmJfQ6pjcqJrAo3bYEPD9y1aufPACgC7fDI%2Fx%2F1YJCIMW%2F3Gv5RQefgs4y9xtx9chz7ycSBUoG0PQaZmqWHhClTav9s6jGm4Gjl4E%2B6Fv9Y%2FELDMH9wQw4o03Ydkr%2B3H8dCt1%2FGICHs0OMIZFDX6UpIxROZzHr6QPTCsvqo3GnmVHbBx7OYPOYN3l9Gh2TmA8FWpOmErIgppcDsQPd8MyHyZqYAnyZ7P2XPAYKUlN0jbc%2B8Xdo8smFYgIxVtQAgNHaOB7XiM0mg%2FG%2FEHd0pSeiu1S8vNtMLmD%2B9dIv2Pk4%2FnpMG%2FXQxXbVxLWWAwr9LxzAY6pgGMY9QKDVhR9Rqkr3NhQV0ysaeZyfVWi8UWSt3WCVtUKlp5aEQ4d5uQ3lpv9D4iFIuEB3KfksXCq6b40chzj2MWjCpK1AROMw%2B2mTNN9qG2MA5hXrEBtGPlap43of%2BdwhAXmpKin4EvQQMHNWXDqjLgSK01RLZgxvoga5FW4CiwhuoVhmbexFq80d7uDN8n%2FjG8JqtsCefSkEplYnZxfYhyZWUwmtBK&X-Amz-Signature=4def8ecbae9e504c5d003fb63c25a55382aca6e3d16898790393034a7cdf9df3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
프로젝트 개요
C++ DLL 및 Python Package를 문서와 함께 제작하여 장비와 함께 납품할 수 있도록 API 마련
주요 목적
- DAQ 장비 제어 SDK 개발
- C++/Python 다중 언어 지원
- 고객 납품용 API 문서화
주요 기능
- C++ DLL 라이브러리
- Python Package 바인딩
- API 문서 및 샘플 코드
프로젝트 성과
- C++ 및 Python 양방향 지원으로 사용자 편의성 향상
- 장비 납품 시 함께 제공 가능한 완성도 높은 SDK
- 상세한 API 문서로 고객 기술 지원 효율화
## 🛠️ 사용 기술 및 라이브러리
- 언어: C++, Python
- Tool: DLL, Python Binding
## 📱 담당 기능
### [SDK 개발]
- C++ DLL
- Python 바인딩
- 문서화
