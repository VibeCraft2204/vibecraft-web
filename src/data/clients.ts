export interface Client {
  name: string;
  logo: string;
  industry: string;
}

export const clients: Client[] = [
  { name: '금융결제원', logo: '/vibecraft-web/images/clients/kftc.png', industry: '금융' },
  { name: 'IBK 기업은행', logo: '/vibecraft-web/images/clients/ibk.png', industry: '금융' },
  { name: '여신금융협회', logo: '/vibecraft-web/images/clients/crefia.png', industry: '금융' },
  { name: '한국의약품안전관리원', logo: '/vibecraft-web/images/clients/drugsafe.png', industry: '공공' },
  { name: '산림청', logo: '/vibecraft-web/images/clients/forest-service.png', industry: '공공' },
];
