import newPlaces from './nearby-paris.json';

type Locale = 'en' | 'fr' | 'zh';
export type ParisPlace = (typeof newPlaces)[number];

const city = { en: 'City of Paris', fr: 'Ville de Paris', zh: '巴黎市政府' };
const parisMusees = { en: 'Paris Musées', fr: 'Paris Musées', zh: '巴黎博物馆联盟' };

const operators: Record<string, Record<Locale, string>> = {
  city, closed: city, bridge: city,
  parismusees: parisMusees,
  defense: { en: 'French Ministry of the Armed Forces and Veterans Affairs (national remembrance site)', fr: 'Ministère des Armées et des Anciens combattants (haut lieu de la mémoire nationale)', zh: '法国武装部队与退伍军人事务部（国家纪念场所）' },
  curie: { en: 'Institut Curie and CNRS', fr: 'Institut Curie et CNRS', zh: '居里研究所与法国国家科学研究中心' },
  police: { en: 'Paris Police Prefecture', fr: 'Préfecture de police', zh: '巴黎警察总局' },
  university: { en: 'Université Paris Cité', fr: 'Université Paris Cité', zh: '巴黎西岱大学' },
  louvre: { en: 'Musée du Louvre', fr: 'Musée du Louvre', zh: '卢浮宫博物馆' },
  rmn: { en: 'GrandPalaisRmn', fr: 'GrandPalaisRmn', zh: '法国国家博物馆联合会－大皇宫' },
  shoah: { en: 'Mémorial de la Shoah', fr: 'Mémorial de la Shoah', zh: '犹太人大屠杀纪念馆' },
  mep: { en: 'Maison Européenne de la Photographie', fr: 'Maison Européenne de la Photographie', zh: '欧洲摄影之家' },
  orsay: { en: 'Musée d’Orsay and Musée de l’Orangerie public institution', fr: 'Établissement public du musée d’Orsay et du musée de l’Orangerie', zh: '奥赛博物馆与橘园博物馆公共机构' },
  mnhn: { en: 'Muséum national d’Histoire naturelle', fr: 'Muséum national d’Histoire naturelle', zh: '法国国家自然史博物馆' },
};

const copy = {
  en: {
    about: 'About', route: 'Approach and entrance', see: 'What to see on site',
    history: 'History and details to look for', walk: 'Suggested route', backgroundSource: 'Historical and site reference',
    plan: 'Hours, admission and access', sources: 'Official visitor information',
    minutes: (time: number) => `Suggested time: ${time} minutes.`,
    visit: 'Check the official schedule for entry times, reservation requirements and the current admission policy.',
    garden: 'The public garden is free. Check the city’s current opening schedule before using a gated entrance.',
    street: 'Walking across the public space is free. Follow any temporary access notices.',
    closed: 'Check the city’s reopening notice before planning to enter. Allow time only for a view from outside while the gates are closed.',
    manager: 'responsible for the visitor site',
    publicManager: 'responsible for the public space',
    photos: 'On-site photograph', photoCredit: 'Photograph source',
    reviews: 'View visitor reviews on Google Maps', iframe: 'Map of',
    arrivalQuestion: (name: string) => `Which approach leads to ${name}?`,
    detailQuestion: (name: string) => `Where should I start when visiting or viewing ${name}?`,
    accessQuestion: (name: string) => `How much time should I allow for ${name}, and what access should I check?`,
  },
  fr: {
    about: 'À propos de', route: 'Comment rejoindre l’entrée', see: 'À observer sur place',
    history: 'Histoire et détails à observer', walk: 'Parcours conseillé', backgroundSource: 'Source historique et repères sur le site',
    plan: 'Horaires, tarifs et accès', sources: 'Informations officielles aux visiteurs',
    minutes: (time: number) => `Prévoyez environ ${time} minutes.`,
    visit: 'Consultez les informations officielles pour les heures d’entrée, les éventuelles réservations et les tarifs en vigueur.',
    garden: 'Le jardin public est gratuit. Consultez les horaires municipaux si vous passez par une entrée fermée par une grille.',
    street: 'La traversée de l’espace public est gratuite. Suivez les éventuelles restrictions provisoires.',
    closed: 'Consultez l’annonce municipale de réouverture avant de prévoir une visite. Tant que les grilles sont fermées, prévoyez seulement un point de vue extérieur.',
    manager: 'en charge du site ouvert aux visiteurs',
    publicManager: 'en charge de l’espace public',
    photos: 'Photographie du lieu', photoCredit: 'Source de la photographie',
    reviews: 'Consulter les avis sur Google Maps', iframe: 'Carte de',
    arrivalQuestion: (name: string) => `Par où rejoindre le site « ${name} » ?`,
    detailQuestion: (name: string) => `Par quoi commencer sur le site « ${name} » ?`,
    accessQuestion: (name: string) => `Combien de temps prévoir pour « ${name} » et quel accès vérifier ?`,
  },
  zh: {
    about: '关于', route: '步行与入口', see: '现场看点',
    history: '历史及现场观察', walk: '建议游览路线', backgroundSource: '历史与现场资料',
    plan: '开放时间、费用与到访条件', sources: '官方访客资料',
    minutes: (time: number) => `建议预留 ${time} 分钟。`,
    visit: '请核对官方公布的入场时段、预约要求与现行票价。',
    garden: '公共花园免费。经有门禁的入口前，请查市政府公布的当日开放时间。',
    street: '公共空间可免费步行通过，如有临时限制请遵循现场标识。',
    closed: '出发前留意市政府重开通知，园门关闭期间只安排外围观览。',
    manager: '负责访客场地', publicManager: '负责维护公共空间',
    photos: '地点实景', photoCredit: '照片来源',
    reviews: '在 Google 地图查看访客评价', iframe: '专属地图',
    arrivalQuestion: (name: string) => `去${name}应从哪边走？`,
    detailQuestion: (name: string) => `到${name}后先看哪里？`,
    accessQuestion: (name: string) => `游览${name}要留多久，出发前核对哪些开放条件？`,
  },
};

export const NEW_PARIS_PLACES = newPlaces;

export function getParisVisit(place: ParisPlace, locale: Locale) {
  const labels = copy[locale];
  const name = place.name[locale];
  const publicSpace = ['city', 'closed', 'bridge'].includes(place.kind);
  const access = place.access?.[locale] ?? (place.kind === 'city' ? labels.garden
    : place.kind === 'closed' ? labels.closed
    : place.kind === 'bridge' ? labels.street : labels.visit);
  const visit = `${labels.minutes(place.minutes)} ${access}`;
  return {
    labels,
    management: `${operators[place.kind][locale]} · ${publicSpace ? labels.publicManager : labels.manager}`,
    sections: [
      { heading: labels.history, content: place.background[locale] },
      { heading: labels.route, content: place.arrival[locale] },
      { heading: labels.see, content: place.detail[locale] },
      { heading: labels.walk, steps: place.walkSteps[locale] },
      { heading: labels.plan, content: visit },
    ],
    faq: [
      { question: labels.arrivalQuestion(name), answer: place.arrival[locale] },
      { question: labels.detailQuestion(name), answer: place.detail[locale] },
      { question: labels.accessQuestion(name), answer: visit },
    ],
  };
}
