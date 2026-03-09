export interface Client {
  name: string;
  industry: string;
  type: string;
  logo: string;
}

export const clients: Client[] = [
  { name: '금융결제원', industry: '금융', type: '공공기관', logo: '/vibecraft-web/images/clients/kftc.png' },
  { name: 'IBK 기업은행', industry: '금융', type: '은행', logo: '/vibecraft-web/images/clients/ibk.png' },
  { name: '여신금융협회', industry: '금융', type: '협회', logo: '/vibecraft-web/images/clients/crefia.png' },
  { name: '한국의약품안전관리원', industry: '의약', type: '공공기관', logo: '/vibecraft-web/images/clients/drugsafe.png' },
  { name: '산림청', industry: '환경', type: '정부기관', logo: '/vibecraft-web/images/clients/forest-service.png' },
];
