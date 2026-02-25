export interface Service {
  slug: string;
  number: string;
  title: string;
  description: string;
  detail: string;
  techStack: string[];
  relatedFields: string[];
}

export const services: Service[] = [
  {
    slug: 'web-development',
    number: '01',
    title: '웹 개발',
    description:
      '비즈니스 요구에 맞는 웹 애플리케이션을 설계하고 구현합니다. React, Next.js, Astro 등 최신 프레임워크로 빠르고 안정적인 서비스를 만듭니다.',
    detail:
      '기획 단계부터 함께하여 비즈니스 목표에 맞는 최적의 아키텍처를 설계합니다. 정적 사이트부터 복잡한 SPA, SSR 애플리케이션까지 — 프로젝트 규모와 요구사항에 따라 적합한 기술 스택을 선택하고, 성능과 SEO를 고려한 웹 서비스를 구현합니다.',
    techStack: ['React', 'Next.js', 'Astro', 'TypeScript', 'JavaScript', 'JSP'],
    relatedFields: ['F/E', 'B/E', 'DB'],
  },
  {
    slug: 'app-development',
    number: '02',
    title: '앱 개발',
    description:
      'Flutter와 React Native로 iOS, Android 크로스플랫폼 앱을 개발합니다. 네이티브 수준의 성능과 일관된 사용자 경험을 제공합니다.',
    detail:
      '하나의 코드베이스로 iOS와 Android를 동시에 지원하는 크로스플랫폼 앱을 개발합니다. Flutter와 React Native의 강점을 살려 네이티브 수준의 성능을 유지하면서도 개발 효율을 극대화합니다. 데스크톱 애플리케이션도 필요에 따라 지원합니다.',
    techStack: ['Flutter', 'React Native', 'C++', 'MFC'],
    relatedFields: ['APP'],
  },
  {
    slug: 'data-ai',
    number: '03',
    title: '데이터 / AI',
    description:
      '데이터 파이프라인 구축부터 AI 모델 개발까지. 수집, 분석, 예측의 전 과정을 자동화하여 데이터 기반 의사결정을 지원합니다.',
    detail:
      '데이터 수집부터 전처리, 분석, AI 모델 서빙까지 전체 파이프라인을 설계하고 구현합니다. RAG 시스템, LLM 연동, 벡터 검색, 예측 모델 등 최신 AI 기술을 활용하여 비즈니스에 실질적인 가치를 제공하는 지능형 시스템을 만듭니다.',
    techStack: ['Python', 'LangChain', 'LangGraph', 'TensorFlow', 'ChromaDB', 'Airflow'],
    relatedFields: ['AI', 'Data'],
  },
  {
    slug: 'automation',
    number: '04',
    title: '자동화',
    description:
      'n8n, Airflow 등으로 반복 업무를 자동화합니다. 알림, 리포트 생성, 데이터 연동 등 운영 효율을 극대화하는 워크플로우를 설계합니다.',
    detail:
      '수작업으로 진행되는 반복 업무를 자동화하여 운영 효율을 극대화합니다. 데이터 연동, 알림, 리포트 생성, 배포 파이프라인 등 다양한 워크플로우를 설계하고, 안정적으로 운영되는 자동화 시스템을 구축합니다.',
    techStack: ['n8n', 'Airflow', 'Docker', 'Kubernetes', 'GitHub Actions'],
    relatedFields: ['Infra', 'IoT'],
  },
  {
    slug: 'consulting',
    number: '05',
    title: '컨설팅',
    description:
      '기술 스택 선정, 아키텍처 설계, 레거시 시스템 개선 등 기술 컨설팅을 제공합니다. 팀의 역량과 비즈니스 목표에 맞는 최적의 방향을 제안합니다.',
    detail:
      '기술적 의사결정이 필요한 순간, 경험에 기반한 방향을 제안합니다. 기술 스택 선정, 시스템 아키텍처 설계, 레거시 코드 개선 전략, DevOps 프로세스 구축 등 — 팀의 현재 역량과 비즈니스 목표를 고려한 실행 가능한 로드맵을 함께 만듭니다.',
    techStack: ['Architecture Design', 'DevOps', 'Code Review', 'Migration'],
    relatedFields: [],
  },
];
