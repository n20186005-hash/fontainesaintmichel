import LEGACY_TOPICS from './legacy-topics';
import { NEARBY_PLACES, NEARBY_SLUGS, NEARBY_TOPICS } from './nearby-directory';

export type TopicSection = { heading: string } & ({ content: string } | { steps: string[] });
export type TopicFaq = { question: string; answer: string };
export type TopicContent = {
  title: string;
  description: string;
  h1: string;
  updated: string;
  lead: string;
  sections: TopicSection[];
  faq: TopicFaq[];
  nav: string;
  related?: string[];
};
export type TopicLocales = { en: TopicContent; fr: TopicContent; zh?: TopicContent };

/** Canonical order of existing topic guides plus the deduplicated 30-place nearby directory. */
export const ALL_TOPIC_SLUGS: string[] = [
  'history',
  'restoration',
  'how-to-get-there',
  'place-saint-michel',
  'things-to-do-near-fontaine-saint-michel',
  'from-charles-de-gaulle-airport',
  'from-orly-airport',
  'accessibility',
  'visiting-with-children',
  'visitor-guide',
  'public-toilets-and-facilities',
  'architecture',
  'sculptures-and-symbolism',
  'archangel-michael',
  'dragons-and-chimeras',
  'gabriel-davioud',
  'haussmann-paris',
  'inscriptions',
  'historic-photos',
  'nearby/notre-dame',
  'nearby/sainte-chapelle',
  'nearby/musee-de-cluny',
  'nearby/shakespeare-and-company',
  'nearby/saint-severin',
  'nearby/sorbonne',
  'nearby/pantheon',
  'nearby/luxembourg-gardens',
  'walks/30-minute-walk',
  'walks/latin-quarter-two-hours',
  'walks/half-day-itinerary',
  'walks/notre-dame-ile-de-la-cite',
  'walks/seine-bookstalls',
  'walks/saint-germain',
  'walks/free-things-to-do',
  'photos',
  'at-night',
  'where-to-eat',
  'where-to-stay',
  'saint-michel-vs-mont-saint-michel',
  'walks/paris-fountains',
  'from-beauvais-airport',
  'from-the-city-center',
  'travel-faq',
  'autumn-events',
  'spring-events',
  ...NEARBY_SLUGS,
];

export const RATP_LINE4_NOTE =
  'Métro line 4 — Saint-Michel station is closed for modernisation works from 14 September to 19 December 2026; trains do not stop there. Use the RER B/C station Saint-Michel–Notre-Dame, a separate station at the foot of the square, or Métro line 10 at Cluny–La Sorbonne. Check live status at ratp.fr.';

const NEW_TOPICS: Record<string, TopicLocales> = {
  'from-charles-de-gaulle-airport': {
    en: {
      title: 'From Charles de Gaulle Airport to Fontaine Saint-Michel – CDG to Saint-Michel Fountain',
      description:
        'Step-by-step from CDG to Fontaine Saint-Michel: RER B to Saint-Michel–Notre-Dame, luggage and ticket tips, and the short walk to Place Saint-Michel, 75005 Paris.',
      h1: 'From Charles de Gaulle (CDG) to Fontaine Saint-Michel',
      updated: 'Last updated: October 2026',
      lead: 'The simplest public-transport link from Paris Charles de Gaulle Airport to the fountain is the RER B regional train, which stops at Saint-Michel–Notre-Dame right beside Place Saint-Michel.',
      sections: [
        { heading: 'Take the RER B', content: 'Follow signs for RER B / Paris by train inside CDG (Terminal 1 via the CDGVAL shuttle, Terminals 2 and 3 on foot). Board a southbound RER B towards Saint-Rémy-lès-Chevreuse or Robinson — not a CDG-branch train heading north.' },
        { heading: 'Ride and exit', content: 'Stay on the train for roughly 35–45 minutes to Saint-Michel – Notre-Dame. Follow the "Sortie Place Saint-Michel" signs and you are at the fountain; the RER B/C platforms are at the foot of the square.' },
        { heading: 'Ticket and luggage', content: 'Buy a Paris regional ticket (Île-de-France / Navigo Easy or a valid pass) before boarding; there is no onboard purchase. Trains have space for suitcases but avoid rush hours (08:00–10:00, 17:00–19:00) when they are crowded.' },
        { heading: 'Alternatives and the line 4 closure', content: 'A taxi or ride-hail takes about 45–60 minutes and costs far more; choose it mainly with heavy luggage or late arrivals. Note the Métro line 4 Saint-Michel station is closed for works from 14 September to 19 December 2026, but the RER station beside the fountain is unaffected — see ratp.fr for live status.' },
        { heading: 'Check before you travel', content: 'Confirm current fares and any service changes on the official Île-de-France Mobilités / RATP pages; this guide reflects information available in October 2026.' },
      ],
      faq: [
        { question: 'How do I get from CDG to Fontaine Saint-Michel?', answer: 'Take the RER B to Saint-Michel–Notre-Dame, then exit to Place Saint-Michel; the fountain is at the station exit.' },
        { question: 'How long is the trip?', answer: 'About 45–60 minutes including walking, depending on your terminal and connections.' },
        { question: 'Can I use the Métro instead?', answer: 'The Métro line 4 Saint-Michel station is closed for renovation 14 Sep–19 Dec 2026; use the RER B/C station at the square instead.' },
        { question: 'Is there a direct train from the airport?', answer: 'Yes — the RER B runs direct from CDG to Saint-Michel–Notre-Dame with no change.' },
      ],
      nav: 'From CDG airport',
      related: ['how-to-get-there', 'from-orly-airport', 'restoration', 'place-saint-michel'],
    },
    fr: {
      title: 'De l’aéroport Charles de Gaulle à la Fontaine Saint-Michel – CDG vers la fontaine',
      description:
        'Étape par étape de CDG à la Fontaine Saint-Michel : RER B jusqu’à Saint-Michel–Notre-Dame, conseils bagages et billets, et la marche vers la Place Saint-Michel, 75005 Paris.',
      h1: 'De Charles de Gaulle (CDG) à la Fontaine Saint-Michel',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'Le plus simple pour rejoindre la fontaine depuis l’aéroport Paris Charles de Gaulle est le RER B, qui s’arrête à Saint-Michel–Notre-Dame, juste à côté de la Place Saint-Michel.',
      sections: [
        { heading: 'Prendre le RER B', content: 'Suivez la signalétique RER B / Paris par le train à CDG (terminal 1 via la navette CDGVAL, terminaux 2 et 3 à pied). Montez dans un RER B en direction de Saint-Rémy-lès-Chevreuse ou Robinson — pas un train de la branche CDG vers le nord.' },
        { heading: 'Trajet et sortie', content: 'Restez environ 35–45 min jusqu’à Saint-Michel – Notre-Dame. Suivez « Sortie Place Saint-Michel » : la fontaine est sur la place, aux pieds de la gare RER B/C.' },
        { heading: 'Billet et bagages', content: 'Achetez un billet Île-de-France (Navigo Easy ou passe valide) avant de monter ; aucun achat à bord. Les trains acceptent les valises, mais évitez les heures de pointe (08:00–10:00, 17:00–19:00).' },
        { heading: 'Alternatives et fermeture ligne 4', content: 'Un taxi ou VTC met 45–60 min pour un coût bien plus élevé ; à réserver surtout avec beaucoup de bagages ou une arrivée tardive. La station de métro ligne 4 Saint-Michel est fermée pour travaux du 14 septembre au 19 décembre 2026, mais la gare RER attenante à la place ne l’est pas — voir ratp.fr.' },
        { heading: 'Vérifiez avant de partir', content: 'Confirmez tarifs et perturbations sur les pages officielles Île-de-France Mobilités / RATP ; ce guide reflète les informations d’octobre 2026.' },
      ],
      faq: [
        { question: 'Comment aller de CDG à la Fontaine Saint-Michel ?', answer: 'RER B jusqu’à Saint-Michel–Notre-Dame, sortie Place Saint-Michel ; la fontaine est à la sortie.' },
        { question: 'Combien de temps dure le trajet ?', answer: 'Environ 45–60 min avec la marche, selon le terminal.' },
        { question: 'Puis-je prendre le métro ?', answer: 'La station de métro ligne 4 Saint-Michel est fermée du 14 sept. au 19 déc. 2026 ; utilisez la gare RER B/C de la place.' },
        { question: 'Y a-t-il un train direct depuis l’aéroport ?', answer: 'Oui — le RER B relie CDG à Saint-Michel–Notre-Dame sans correspondance.' },
      ],
      nav: 'Depuis CDG',
      related: ['how-to-get-there', 'from-orly-airport', 'restoration', 'place-saint-michel'],
    },
    zh: {
      title: '从戴高乐机场到圣米歇尔喷泉（CDG → 圣米歇尔）',
      description: '从巴黎戴高乐机场到圣米歇尔喷泉的分步指南：RER B 至 Saint-Michel–Notre-Dame、行李与购票提示，以及步行到圣米歇尔广场的路线。',
      h1: '从戴高乐机场（CDG）到圣米歇尔喷泉',
      updated: '最后更新：2026 年 10 月',
      lead: '从戴高乐机场前往喷泉，最简便的公共交通是 RER B 区域快铁，停靠紧邻圣米歇尔广场的 Saint-Michel–Notre-Dame 站。',
      sections: [
        { heading: '搭乘 RER B', content: '在 CDG 航站楼内跟随「RER B / Paris by train」指示（1 号航站楼需先乘 CDGVAL 摆渡，2、3 号航站楼步行可达）。搭乘往 Saint-Rémy-lès-Chevreuse 或 Robinson 方向的南行 RER B，不要登上往北行驶的 CDG 支线列车。' },
        { heading: '车程与出站', content: '乘车约 35–45 分钟抵达 Saint-Michel – Notre-Dame。跟随「Sortie Place Saint-Michel」出站即可到达喷泉；RER B/C 站台就在广场脚下。' },
        { heading: '车票与行李', content: '上车前购买巴黎区域车票（Île-de-France / Navigo Easy 或有效通票），车上不能购票。列车可放行李，但请避开高峰时段（08:00–10:00、17:00–19:00）。' },
        { heading: '替代方式与 4 号线停运', content: '出租车或网约车约 45–60 分钟且费用更高，主要在行李多或深夜抵达时考虑。地铁 4 号线 Saint-Michel 站因改造于 2026 年 9 月 14 日至 12 月 19 日关闭，但广场旁的 RER 站不受影响——实时状态见 ratp.fr。' },
        { heading: '出发前核对', content: '请在 Île-de-France Mobilités / RATP 官方页面确认最新票价与运营变化；本指南基于 2026 年 10 月的信息。' },
      ],
      faq: [
        { question: '如何从 CDG 到圣米歇尔喷泉？', answer: '搭乘 RER B 至 Saint-Michel–Notre-Dame，出站即达圣米歇尔广场，喷泉就在站口。' },
        { question: '车程多久？', answer: '含步行约 45–60 分钟，视航站楼与换乘而定。' },
        { question: '可以坐地铁吗？', answer: '地铁 4 号线 Saint-Michel 站 2026 年 9 月 14 日至 12 月 19 日关闭改造，请改乘广场旁的 RER B/C 站。' },
        { question: '有从机场直达的列车吗？', answer: '有——RER B 从 CDG 直达 Saint-Michel–Notre-Dame，无需换乘。' },
      ],
      nav: '从戴高乐机场',
      related: ['how-to-get-there', 'from-orly-airport', 'restoration', 'place-saint-michel'],
    },
  },
  'from-orly-airport': {
    en: {
      title: 'From Orly Airport to Fontaine Saint-Michel – Orly to Saint-Michel Paris',
      description:
        'Compare routes from Orly to Fontaine Saint-Michel: Orlyval + RER B, tram + Métro, and taxi, with transfer tips and the walk to Place Saint-Michel.',
      h1: 'From Orly (ORY) to Fontaine Saint-Michel',
      updated: 'Last updated: October 2026',
      lead: 'Orly has no direct RER stop, so the usual public route chains Orlyval to the RER B, or a tram to a Métro line, then a short walk to the square.',
      sections: [
        { heading: 'Orlyval + RER B (fastest rail)', content: 'From Orly South or West take the Orlyval automated shuttle to Antony, then change to a southbound RER B towards Saint-Rémy-lès-Chevreuse or Robinson to Saint-Michel–Notre-Dame. Total time is about 50–70 minutes.' },
        { heading: 'Tram + Métro', content: 'Tramway T7 from Orly to Villejuif–Louis Aragon connects to Métro line 7, then change towards the centre; this is slower than Orlyval+RER B but useful if Orlyval is disrupted. Plan the change with a map app before travel.' },
        { heading: 'Ticket and luggage', content: 'Orlyval requires its own ticket in addition to the Île-de-France RER/Métro ticket; buy both before boarding. Allow extra time with suitcases, and avoid rush-hour trains.' },
        { heading: 'Taxi and the line 4 note', content: 'A taxi or ride-hail takes about 30–45 minutes and costs more. Remember the Métro line 4 Saint-Michel station is closed for works 14 Sep–19 Dec 2026; the RER B/C station at the square is the reliable drop-off and arrival point — see ratp.fr.' },
      ],
      faq: [
        { question: 'What is the easiest way from Orly to the fountain?', answer: 'Orlyval to Antony, then RER B to Saint-Michel–Notre-Dame; the fountain is at the exit.' },
        { question: 'How long does it take?', answer: 'About 50–70 minutes by rail including the Orlyval change, depending on connections.' },
        { question: 'Is there a direct train from Orly?', answer: 'No — Orly has no direct RER stop, so you change at Antony (Orlyval) or use a tram + Métro combination.' },
      ],
      nav: 'From Orly airport',
      related: ['how-to-get-there', 'from-charles-de-gaulle-airport', 'restoration', 'place-saint-michel'],
    },
    fr: {
      title: 'De l’aéroport d’Orly à la Fontaine Saint-Michel – Orly vers Paris',
      description:
        'Comparez les itinéraires d’Orly à la Fontaine Saint-Michel : Orlyval + RER B, tramway + métro et taxi, avec conseils de correspondance et la marche vers la Place Saint-Michel.',
      h1: 'D’Orly (ORY) à la Fontaine Saint-Michel',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'Orly n’a pas de gare RER directe : l’itinéraire habituel enchaîne Orlyval et RER B, ou un tramway puis une ligne de métro, puis une courte marche jusqu’à la place.',
      sections: [
        { heading: 'Orlyval + RER B (plus rapide)', content: 'Depuis Orly Sud ou Ouest, prenez l’Orlyval jusqu’à Antony, puis correspondance avec un RER B vers Saint-Rémy-lès-Chevreuse ou Robinson jusqu’à Saint-Michel–Notre-Dame. Comptez environ 50–70 min.' },
        { heading: 'Tramway + métro', content: 'Le tramway T7 d’Orly à Villejuif–Louis Aragon rejoint la ligne 7 du métro ; plus lent que Orlyval+RER B, mais utile en cas de perturbation de l’Orlyval. Prévoyez la correspondance avec une appli de plan.' },
        { heading: 'Billet et bagages', content: 'L’Orlyval nécessite un billet propre en plus du billet RER/métro Île-de-France ; achetez les deux avant de monter. Prévoyez du temps avec les valises et évitez les heures de pointe.' },
        { heading: 'Taxi et note ligne 4', content: 'Un taxi ou VTC met 30–45 min pour un coût supérieur. La station de métro ligne 4 Saint-Michel est fermée du 14 sept. au 19 déc. 2026 ; la gare RER B/C de la place est le point d’arrivée sûr — voir ratp.fr.' },
      ],
      faq: [
        { question: 'Quel est le plus simple depuis Orly ?', answer: 'Orlyval jusqu’à Antony, puis RER B jusqu’à Saint-Michel–Notre-Dame ; la fontaine est à la sortie.' },
        { question: 'Combien de temps cela prend-il ?', answer: 'Environ 50–70 min par le rail avec la correspondance Orlyval, selon les liaisons.' },
        { question: 'Y a-t-il un train direct depuis Orly ?', answer: 'Non — Orly n’a pas de gare RER directe ; on change à Antony (Orlyval) ou par tramway + métro.' },
      ],
      nav: 'Depuis Orly',
      related: ['how-to-get-there', 'from-charles-de-gaulle-airport', 'restoration', 'place-saint-michel'],
    },
  },
  accessibility: {
    en: {
      title: 'Fontaine Saint-Michel Accessibility – Wheelchair Access & Viewing',
      description:
        'Step-free access, surfaces, where to view the fountain from a wheelchair, and how to check lift status for the RER at Place Saint-Michel, 75005 Paris.',
      h1: 'Accessibility at Fontaine Saint-Michel',
      updated: 'Last updated: October 2026',
      lead: 'The fountain sits on an open, mostly flat public square, so the monument itself is viewable without steps; the main variable is the step-free status of the transport links.',
      sections: [
        { heading: 'The square and viewing', content: 'Place Saint-Michel is paved and level with the surrounding pavements, so the fountain can be viewed and photographed from the boulevard edge and the square without climbing. The monument is a wall fountain against a building, so there is no interior to enter.' },
        { heading: 'RER step-free access', content: 'RER B/C Saint-Michel–Notre-Dame has step-free access but lift availability changes; check the official RATP / Île-de-France Mobilités "accessibility" status before travelling. The Métro line 10 Cluny–La Sorbonne entrance is also an option a few minutes away.' },
        { heading: 'Getting there by car', content: 'Dropping off by car is easiest on Boulevard Saint-Michel or Quai Saint-Michel; note the Métro line 4 Saint-Michel station is closed for works 14 Sep–19 Dec 2026, so rely on the RER or line 10. Blue badge parking is limited in the central Latin Quarter — verify a nearby space in advance.' },
        { heading: 'What to expect', content: 'Crowds peak midday and early evening; mornings are calmer for wheelchair users. Benches line the boulevard for rests. Assistance from station staff can be arranged through the operators’ accessibility services.' },
      ],
      faq: [
        { question: 'Is Fontaine Saint-Michel wheelchair accessible?', answer: 'Yes — the square is flat and step-free, and the fountain is viewed from outside; only the transport links vary in lift availability.' },
        { question: 'Is the RER station step-free?', answer: 'RER B/C Saint-Michel–Notre-Dame has step-free access, but check live lift status on the RATP accessibility page before you travel.' },
        { question: 'Can I drive close to the fountain?', answer: 'Yes, drop-off is possible on the boulevard or quay; dedicated disabled parking is limited, so confirm a space in advance.' },
      ],
      nav: 'Accessibility',
      related: ['how-to-get-there', 'visitor-guide', 'public-toilets-and-facilities', 'restoration'],
    },
    fr: {
      title: 'Accessibilité de la Fontaine Saint-Michel – accès PMR et vue',
      description:
        'Accès sans marches, revêtements, où voir la fontaine en fauteuil, et vérification des ascenseurs du RER sur la Place Saint-Michel, 75005 Paris.',
      h1: 'Accessibilité à la Fontaine Saint-Michel',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'La fontaine se trouve sur une place publique majoritairement plane : le monument se voit sans marches ; la variable principale est l’accessibilité sans marches des transports.',
      sections: [
        { heading: 'La place et la vue', content: 'La Place Saint-Michel est pavée et de niveau avec les trottoirs : la fontaine se voit et se photographie depuis le boulevard et la place, sans gravir d’escalier. C’est une fontaine-murale, il n’y a pas d’intérieur à visiter.' },
        { heading: 'Accès sans marches du RER', content: 'Le RER B/C Saint-Michel–Notre-Dame est accessible sans marches, mais les ascenseurs varient ; vérifiez l’état « accessibilité » officiel RATP / Île-de-France Mobilités avant de partir. La ligne 10 Cluny–La Sorbonne, à quelques minutes, est une autre option.' },
        { heading: 'Y accéder en voiture', content: 'La descente en voiture est facile boulevard Saint-Michel ou quai Saint-Michel ; la station de métro ligne 4 Saint-Michel est fermée du 14 sept. au 19 déc. 2026, privilégiez le RER ou la ligne 10. Les places PMR sont rares dans le Quartier latin — vérifiez à l’avance.' },
        { heading: 'Ce à quoi s’attendre', content: 'Le plus de monde est à midi et en début de soirée ; les matinées sont plus calmes. Des bancs bordent le boulevard pour se reposer. Une aide en gare est possible via les services d’accessibilité des opérateurs.' },
      ],
      faq: [
        { question: 'La Fontaine Saint-Michel est-elle accessible en fauteuil ?', answer: 'Oui — la place est plane et sans marches, et la fontaine se voit de l’extérieur ; seuls les transports varient en ascenseurs.' },
        { question: 'La gare RER est-elle sans marches ?', answer: 'Le RER B/C Saint-Michel–Notre-Dame est accessible sans marches, mais vérifiez l’état des ascenseurs sur la page accessibilité RATP.' },
        { question: 'Puis-je me garer près de la fontaine ?', answer: 'Oui, la descente est possible boulevard ou quai ; les places PMR sont limitées, confirmez-en une à l’avance.' },
      ],
      nav: 'Accessibilité',
      related: ['how-to-get-there', 'visitor-guide', 'public-toilets-and-facilities', 'restoration'],
    },
    zh: {
      title: '圣米歇尔喷泉无障碍指南（轮椅与观赏）',
      description: '圣米歇尔广场的无障碍通道、路面、轮椅观赏位置，以及如何查询 RER 电梯状态。',
      h1: '圣米歇尔喷泉的无障碍',
      updated: '最后更新：2026 年 10 月',
      lead: '喷泉位于基本平坦的开放公共广场，本身无需台阶即可观赏；变量主要在于交通接驳的无障碍状况。',
      sections: [
        { heading: '广场与观赏', content: '圣米歇尔广场为铺装地面，与周边人行道齐平；可在大道边缘与广场上无障碍观赏、拍摄喷泉。它是贴墙式喷泉，没有室内空间可进入。' },
        { heading: 'RER 无障碍', content: 'RER B/C 的 Saint-Michel–Notre-Dame 站设有无障碍通道，但电梯状态会变化；出发前请在 RATP / Île-de-France Mobilités 的「无障碍」页面查询。步行几分钟外的地铁 10 号线 Cluny–La Sorbonne 也是备选。' },
        { heading: '自驾到达', content: '圣米歇尔大道或圣米歇尔堤岸可就近下车；地铁 4 号线 Saint-Michel 站 2026 年 9 月 14 日至 12 月 19 日关闭改造，请依赖 RER 或 10 号线。拉丁区中心残疾人车位有限，请提前确认。' },
        { heading: '注意事项', content: '中午与傍晚人流最密集，上午较安静；大道沿线有长椅可休息。可通过运营商无障碍服务预约车站协助。' },
      ],
      faq: [
        { question: '圣米歇尔喷泉对轮椅友好吗？', answer: '友好——广场平坦无台阶，喷泉在室外即可观赏；仅交通接驳的电梯状态会有变化。' },
        { question: 'RER 站有无障碍吗？', answer: 'RER B/C 的 Saint-Michel–Notre-Dame 站可无障碍通行，但请出发前在 RATP 无障碍页面查询电梯实时状态。' },
        { question: '可以开车靠近喷泉吗？', answer: '可以，大道或堤岸可就近下车；专用残疾人车位有限，请提前确认。' },
      ],
      nav: '无障碍',
      related: ['how-to-get-there', 'visitor-guide', 'public-toilets-and-facilities', 'restoration'],
    },
  },
  'visiting-with-children': {
    en: {
      title: 'Visiting Fontaine Saint-Michel with Children – Family Tips',
      description:
        'A kid-friendly plan for the fountain: statue-spotting games, pushchair routes, rest points and nearby family stops around Place Saint-Michel, 75005 Paris.',
      h1: 'Visiting Fontaine Saint-Michel with children',
      updated: 'Last updated: October 2026',
      lead: 'The fountain is a free, open-air monument that works well as a first stop with children: it is easy to reach, safe to view from the square, and full of things to spot.',
      sections: [
        { heading: 'A statue-spotting game', content: 'Challenge children to find the archangel, the two winged dragons, and the four virtue statues (Prudence, Force, Justice, Temperance). The 26-metre façade is like a picture book you read from the pavement.' },
        { heading: 'Pushchair routes', content: 'The square and the riverside quays are flat and pushchair-friendly. Cross the Pont Saint-Michel to the Île de la Cité for a short, buggy-smooth loop with river views.' },
        { heading: 'Rest and refreshments', content: 'Benches line Boulevard Saint-Michel; the surrounding streets (Rue de la Huchette, Rue de la Bûcherie) have crêpe stands and cafés. Toilets are listed on our facilities page.' },
        { heading: 'Nearby family stops', content: 'The Jardin du Luxembourg (about 15–20 minutes’ walk) has a pond, orchard and playgrounds; the riverside bouquinistes are a gentle treasure-hunt for postcards and old books.' },
      ],
      faq: [
        { question: 'Is the fountain good for young children?', answer: 'Yes — it is free, outdoors and viewed from a flat square, with a simple statue-spotting game to keep them engaged.' },
        { question: 'Are pushchairs allowed?', answer: 'Yes — the square and quays are step-free and buggy-friendly; the short Île de la Cité loop is smooth.' },
        { question: 'Where can we rest nearby?', answer: 'Benches on the boulevard and cafés on the side streets; the Luxembourg Gardens further on have playgrounds and open space.' },
      ],
      nav: 'With children',
      related: ['visitor-guide', 'public-toilets-and-facilities', 'nearby/luxembourg-gardens', 'walks/30-minute-walk'],
    },
    fr: {
      title: 'Visiter la Fontaine Saint-Michel avec des enfants – conseils famille',
      description:
        'Un plan adapté aux familles : jeu de repérage des statues, itinéraire poussette, pauses et arrêts proches de la Place Saint-Michel, 75005 Paris.',
      h1: 'Visiter la Fontaine Saint-Michel avec des enfants',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'La fontaine est un monument gratuit en plein air, idéal comme première étape avec des enfants : facile d’accès, visible sans danger depuis la place, et riche en choses à repérer.',
      sections: [
        { heading: 'Jeu de repérage des statues', content: 'Proposez aux enfants de trouver l’archange, les deux dragons ailés et les quatre statues de vertus (Prudence, Force, Justice, Tempérance). La façade de 26 m est comme un album à lire depuis le trottoir.' },
        { heading: 'Itinéraire poussette', content: 'La place et les quais sont plats et adaptés aux poussettes. Franchissez le Pont Saint-Michel vers l’Île de la Cité pour une courte boucle tout-terrain avec vue sur le fleuve.' },
        { heading: 'Repos et rafraîchissements', content: 'Des bancs bordent le boulevard Saint-Michel ; les rues voisines (rue de la Huchette, rue de la Bûcherie) ont des crêpes et des cafés. Les toilettes sont sur notre page « équipements ».' },
        { heading: 'Arrêts famille à proximité', content: 'Le Jardin du Luxembourg (environ 15–20 min à pied) offre un bassin, un verger et des aires de jeux ; les bouquinistes des quais sont une chasse aux trésors pour cartes postales et vieux livres.' },
      ],
      faq: [
        { question: 'La fontaine convient-elle aux jeunes enfants ?', answer: 'Oui — gratuite, en plein air et visible depuis une place plane, avec un jeu de repérage des statues.' },
        { question: 'Les poussettes sont-elles admises ?', answer: 'Oui — la place et les quais sont sans marches ; la courte boucle de l’Île de la Cité est lisse.' },
        { question: 'Où se reposer à proximité ?', answer: 'Des bancs sur le boulevard et des cafés dans les rues voisines ; plus loin, le Luxembourg a des aires de jeux.' },
      ],
      nav: 'Avec enfants',
      related: ['visitor-guide', 'public-toilets-and-facilities', 'nearby/luxembourg-gardens', 'walks/30-minute-walk'],
    },
  },
  'visitor-guide': {
    en: {
      title: 'Fontaine Saint-Michel Visitor Guide – Free Entry, Hours & How Long to Stay',
      description:
        'Is Fontaine Saint-Michel free? Opening hours, how long to spend, what you can see, and the difference between viewing the monument and the water feature.',
      h1: 'Visitor guide to Fontaine Saint-Michel',
      updated: 'Last updated: October 2026',
      lead: 'Fontaine Saint-Michel is a public monument on a public square: it is free to view at any hour, with no ticket office and no fixed opening times.',
      sections: [
        { heading: 'Free and always open', content: 'Because it is an open-air wall fountain on Place Saint-Michel, there is no entry fee and no closing time — you can walk up to it 24 hours a day, year-round. The square is a through-space, not a gated site.' },
        { heading: 'How long to spend', content: 'Most visitors spend 10–20 minutes viewing the façade and taking photos, plus more if they sit on the square or extend into the riverside walk. Allow 1–2 hours if you combine it with the nearby Latin Quarter streets.' },
        { heading: 'What you can see', content: 'You view the full 26-metre elevation from the square: the central Archangel Michael group by Francisque Duret, the two winged dragons by Henri Alfred Jacquemart, and the four cardinal-virtue statues at the base. There is no interior to enter.' },
        { heading: 'Viewing vs. the water feature', content: 'The monument is visible whenever you visit. The active water jets are a separate matter: after the 2025–2026 conservation works the fountain was unveiled again in August 2026 and the water feature was scheduled to restart in autumn 2026 — check the restoration page for the latest confirmed status.' },
      ],
      faq: [
        { question: 'Is Fontaine Saint-Michel free to visit?', answer: 'Yes — it is a public fountain on a public square, free to view at any time with no ticket.' },
        { question: 'What are the opening hours?', answer: 'There are no set hours; the square is accessible around the clock, every day of the year.' },
        { question: 'How long should I plan for?', answer: 'About 15–30 minutes at the fountain, or 1–2 hours including the surrounding streets and river walk.' },
        { question: 'Can I go inside the fountain?', answer: 'No — it is a wall fountain viewed from outside; there is no interior to enter.' },
      ],
      nav: 'Visitor guide',
      related: ['restoration', 'how-to-get-there', 'photos', 'things-to-do-near-fontaine-saint-michel'],
    },
    fr: {
      title: 'Guide visiteur de la Fontaine Saint-Michel – gratuité, horaires et durée',
      description:
        'La Fontaine Saint-Michel est-elle gratuite ? Horaires, temps de visite, ce que l’on voit, et la différence entre voir le monument et le jeu d’eau.',
      h1: 'Guide visiteur de la Fontaine Saint-Michel',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'La Fontaine Saint-Michel est un monument public sur une place publique : elle se voit gratuitement à toute heure, sans billetterie ni horaire fixe.',
      sections: [
        { heading: 'Gratuit et toujours ouvert', content: 'Fontaine-murale en plein air sur la Place Saint-Michel, elle est sans droit d’entrée et sans fermeture : on peut s’en approcher 24h/24, toute l’année. La place est un passage, pas un site clôturé.' },
        { heading: 'Temps de visite', content: 'La plupart restent 10–20 min à contempler la façade et photographier, plus si l’on s’assoit ou que l’on prolonge vers les quais. Comptez 1–2 h avec les rues du Quartier latin.' },
        { heading: 'Ce que l’on voit', content: 'On voit toute l’élévation de 26 m depuis la place : le groupe central de l’archange Michel par Francisque Duret, les deux dragons ailés d’Henri Alfred Jacquemart, et les quatre statues des vertus cardinales à la base. Pas d’intérieur à visiter.' },
        { heading: 'Voir le monument et le jeu d’eau', content: 'Le monument est visible à toute visite. Les jets actifs sont un autre sujet : après les travaux 2025–2026, la fontaine a été dévoilée à nouveau en août 2026 et le jeu d’eau était programmé pour l’automne 2026 — voyez la page « restauration » pour l’état confirmé.' },
      ],
      faq: [
        { question: 'La Fontaine Saint-Michel est-elle gratuite ?', answer: 'Oui — fontaine publique sur place publique, gratuite à toute heure, sans billet.' },
        { question: 'Quels sont les horaires ?', answer: 'Pas d’horaire fixe ; la place est accessible en permanence, toute l’année.' },
        { question: 'Combien de temps prévoir ?', answer: 'Environ 15–30 min à la fontaine, ou 1–2 h avec les rues et les quais.' },
        { question: 'Peut-on entrer dans la fontaine ?', answer: 'Non — c’est une fontaine-murale vue de l’extérieur ; pas d’intérieur.' },
      ],
      nav: 'Guide visiteur',
      related: ['restoration', 'how-to-get-there', 'photos', 'things-to-do-near-fontaine-saint-michel'],
    },
    zh: {
      title: '圣米歇尔喷泉参观指南（免费、开放时间与停留建议）',
      description: '圣米歇尔喷泉是否免费？开放时间、建议停留时长、可观看到什么，以及观赏喷泉与喷水的区别。',
      h1: '圣米歇尔喷泉参观指南',
      updated: '最后更新：2026 年 10 月',
      lead: '圣米歇尔喷泉是公共广场上的公共纪念碑：全天免费观赏，无售票处，也无固定开放时间。',
      sections: [
        { heading: '免费且全天开放', content: '作为圣米歇尔广场上的露天贴墙喷泉，它不设门票、不设关闭时间——全年每天 24 小时都可走近观赏。广场是通行空间，并非封闭景点。' },
        { heading: '建议停留', content: '多数游客花 10–20 分钟观看立面并拍照；若在广场坐下或顺延至河畔步行则更久。若结合周边拉丁区街巷，可预留 1–2 小时。' },
        { heading: '可观看到什么', content: '从广场可看到完整的 26 米立面：中央弗朗西斯克·迪雷所作大天使米歇尔群雕、亨利·阿尔弗雷德·雅克马尔所作双翼龙，以及柱脚四尊枢德雕像。没有室内空间可进入。' },
        { heading: '观赏与喷水', content: '无论何时造访都能看到纪念碑。喷水装置另当别论：2025–2026 年修复后，喷泉于 2026 年 8 月再次揭幕，喷水装置原计划 2026 年秋季恢复；最新确认状态请见「修复」页面。' },
      ],
      faq: [
        { question: '圣米歇尔喷泉免费吗？', answer: '免费——它是公共广场上的公共喷泉，随时可免费观赏，无需门票。' },
        { question: '开放时间是什么？', answer: '无固定时间；广场全年全天候可进入。' },
        { question: '建议预留多久？', answer: '喷泉处约 15–30 分钟；含周边街巷与河堤步行约 1–2 小时。' },
        { question: '可以进入喷泉内部吗？', answer: '不可以——它是从外部观赏的贴墙喷泉，没有室内空间。' },
      ],
      nav: '参观指南',
      related: ['restoration', 'how-to-get-there', 'photos', 'things-to-do-near-fontaine-saint-michel'],
    },
  },
  'public-toilets-and-facilities': {
    en: {
      title: 'Toilets & Facilities near Fontaine Saint-Michel – Saint-Michel Paris',
      description:
        'Public toilets, drinking water, seating and baby-change near the fountain, with verified locations around Place Saint-Michel, 75005 Paris (checked October 2026).',
      h1: 'Public toilets and facilities near Fontaine Saint-Michel',
      updated: 'Last updated: October 2026',
      lead: 'The fountain itself has no facilities (it is a monument), but public toilets, water fountains and seating are within a short walk on the square and boulevard.',
      sections: [
        { heading: 'Public toilets (sanisettes)', content: 'Paris operates self-cleaning public toilets (sanisettes) at several points around the Latin Quarter. The nearest are typically on the boulevards near the square and along the Seine quays; locations rotate with maintenance, so check the map screen on the official Paris toilet finder before relying on one.' },
        { heading: 'Drinking water', content: 'Free public water fountains (including some "Wall of Water" points) appear along the Seine quays and in nearby gardens; bring a bottle and refill rather than buying plastic. Verify the nearest point on the day with the city’s fountain map.' },
        { heading: 'Seating and shade', content: 'Benches line Boulevard Saint-Michel and the square edges; the riverside quays offer rail seating with shade in places. For a greener rest, the Jardin du Luxembourg is about 15–20 minutes away.' },
        { heading: 'Baby change and accessibility', content: 'Some sanisettes include baby-change; step-free access varies by unit. Check the official finder for the facilities at each location, and see our accessibility page for the step-free RER route.' },
        { heading: 'Verify before you go', content: 'This list reflects facilities known in October 2026. Because public units are maintained and relocated, always confirm the live location on the official Paris "toilettes publiques" map.' },
      ],
      faq: [
        { question: 'Are there toilets at the fountain?', answer: 'No — the fountain is a monument, but public sanisettes are a short walk away on the boulevard and quays; check the official map for live locations.' },
        { question: 'Is there free drinking water nearby?', answer: 'Yes — public water fountains sit along the Seine quays and in nearby gardens; confirm the nearest on the city map.' },
        { question: 'Where can I sit with children?', answer: 'Benches line the boulevard and square; the Luxembourg Gardens further on have lawns, a pond and playgrounds.' },
      ],
      nav: 'Toilets & facilities',
      related: ['accessibility', 'visiting-with-children', 'visitor-guide', 'nearby/luxembourg-gardens'],
    },
    fr: {
      title: 'Toilettes et équipements près de la Fontaine Saint-Michel – Paris',
      description:
        'Toilettes publiques, eau potable, assises et table à langer près de la fontaine, autour de la Place Saint-Michel, 75005 Paris (vérifié en octobre 2026).',
      h1: 'Toilettes publiques et équipements près de la Fontaine Saint-Michel',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'La fontaine n’a pas d’équipements (c’est un monument), mais toilettes, fontaines et bancs sont à quelques pas sur la place et le boulevard.',
      sections: [
        { heading: 'Toilettes publiques (sanisettes)', content: 'Paris gère des toilettes automatiques (sanisettes) à plusieurs endroits du Quartier latin. Les plus proches sont généralement sur les boulevards près de la place et le long des quais ; les emplacements évoluent, vérifiez la carte officielle « toilettes » avant de compter dessus.' },
        { heading: 'Eau potable', content: 'Des fontaines publiques gratuites (dont des « murs d’eau ») longent les quais et les jardins voisins ; emportez une gourde. Confirmez le point le plus proche sur la carte de la ville le jour J.' },
        { heading: 'Assises et ombre', content: 'Des bancs bordent le boulevard Saint-Michel et les bords de la place ; les quais offrent des assises avec parfois de l’ombre. Pour un repos plus vert, le Jardin du Luxembourg est à environ 15–20 min.' },
        { heading: 'Table à langer et accessibilité', content: 'Certaines sanisettes ont une table à langer ; l’accès sans marches varie. Vérifiez sur l’annuaire officiel et voir notre page accessibilité pour le RER sans marches.' },
        { heading: 'Vérifiez avant de partir', content: 'Cette liste reflète les équipements connus en octobre 2026 ; comme les unités publiques sont entretenues et déplacées, confirmez toujours l’emplacement sur la carte officielle « toilettes publiques ».' },
      ],
      faq: [
        { question: 'Y a-t-il des toilettes à la fontaine ?', answer: 'Non — la fontaine est un monument, mais des sanisettes sont à quelques pas sur le boulevard et les quais ; voyez la carte officielle.' },
        { question: 'Y a-t-il de l’eau potable gratuite ?', answer: 'Oui — des fontaines publiques longent les quais et les jardins ; confirmez la plus proche sur la carte.' },
        { question: 'Où m’asseoir avec des enfants ?', answer: 'Des bancs bordent le boulevard et la place ; plus loin, le Luxembourg a pelouses, bassin et aires de jeux.' },
      ],
      nav: 'Toilettes',
      related: ['accessibility', 'visiting-with-children', 'visitor-guide', 'nearby/luxembourg-gardens'],
    },
  },
  architecture: {
    en: {
      title: 'Fontaine Saint-Michel Architecture – Façade, Columns & Materials',
      description:
        'How the 26-metre wall fountain is built: the triumphal-arch layout, red-marble Corinthian columns, niche, basins and the materials used by Gabriel Davioud.',
      h1: 'The architecture of Fontaine Saint-Michel',
      updated: 'Last updated: October 2026',
      lead: 'Fontaine Saint-Michel is a "wall fountain" — a monumental stone screen about 26 metres high and 15 metres wide, designed by Gabriel Davioud as a decorative end to Rue Danton.',
      sections: [
        { heading: 'A triumphal-arch plan', content: 'The façade reads like a reduced triumphal arch: a wide base, a central niche framed by columns, and an attic storey above. It was conceived to close the perspective of Rue Danton and to mask the bare gable of the block behind it.' },
        { heading: 'Columns and niche', content: 'Four red-marble Corinthian columns rise around the central niche that holds the Archangel Michael group. Above, an entablature and attic carry the monument’s upper decoration and the original imperial emblem (later replaced by the city coat of arms).' },
        { heading: 'Materials', content: 'The body is Saint-Maximin limestone, chosen for its pale, even grain; the columns are red marble. The 2025–2026 conservation cleaned the limestone, treated the red marble and renewed the cast-iron water spouts and the recirculation basin.' },
        { heading: 'Water and basins', content: 'Water is drawn up and returned through a recirculation circuit; four spouts feed the lower basin. The basin and ironwork were refurbished in the recent campaign so the feature can run again.' },
      ],
      faq: [
        { question: 'What style is the fountain?', answer: 'It is a Second Empire wall fountain in a triumphal-arch idiom, about 26 m high, by Gabriel Davioud.' },
        { question: 'What is it made of?', answer: 'Saint-Maximin limestone for the body and red marble for the columns, with cast-iron spouts and a recirculation basin.' },
        { question: 'Why is it called a wall fountain?', answer: 'Because it is built against a building as a decorative screen, not as a free-standing basin in the middle of a square.' },
      ],
      nav: 'Architecture',
      related: ['history', 'sculptures-and-symbolism', 'gabriel-davioud', 'haussmann-paris'],
    },
    fr: {
      title: 'Architecture de la Fontaine Saint-Michel – façade, colonnes et matériaux',
      description:
        'Comment est construit ce mur de 26 m : plan en arc de triomphe, colonnes corinthiennes en marbre rouge, niche, bassins et matériaux de Gabriel Davioud.',
      h1: 'L’architecture de la Fontaine Saint-Michel',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'La Fontaine Saint-Michel est une « fontaine-murale » : un écran de pierre monumental d’environ 26 m de haut et 15 m de large, conçu par Gabriel Davioud pour fermer la perspective de la rue Danton.',
      sections: [
        { heading: 'Un plan en arc de triomphe', content: 'La façade se lit comme un arc de triomphe réduit : une base large, une niche centrale encadrée de colonnes, et un étage d’attique. Elle ferme la perspective de la rue Danton et masque le pignon nu de l’immeuble derrière.' },
        { heading: 'Colonnes et niche', content: 'Quatre colonnes corinthiennes en marbre rouge encadrent la niche centrale qui abrite le groupe de l’archange Michel. Au-dessus, un entablement et un attique portent la décoration haute et l’emblème impérial d’origine (remplacé ensuite par les armes de la ville).' },
        { heading: 'Matériaux', content: 'Le corps est en calcaire de Saint-Maximin, à grain clair et régulier ; les colonnes en marbre rouge. La campagne 2025–2026 a nettoyé le calcaire, traité le marbre rouge et renouvelé les bouches de fonte et le bassin de recirculation.' },
        { heading: 'Eau et bassins', content: 'L’eau monte et revient par un circuit de recirculation ; quatre bouches alimentent le bassin bas. Bassin et ferronnerie ont été refaits pour que le jeu d’eau puisse reprendre.' },
      ],
      faq: [
        { question: 'Quel est le style de la fontaine ?', answer: 'Fontaine-murale du Second Empire, en forme d’arc de triomphe, environ 26 m de haut, par Gabriel Davioud.' },
        { question: 'En quoi est-elle faite ?', answer: 'Calcaire de Saint-Maximin pour le corps, marbre rouge pour les colonnes, avec bouches de fonte et bassin de recirculation.' },
        { question: 'Pourquoi "fontaine-murale" ?', answer: 'Car elle est construite contre un immeuble comme écran décoratif, non comme un bassin isolé au milieu d’une place.' },
      ],
      nav: 'Architecture',
      related: ['history', 'sculptures-and-symbolism', 'gabriel-davioud', 'haussmann-paris'],
    },
    zh: {
      title: '圣米歇尔喷泉建筑解读（立面、柱式与材料）',
      description: '这座约 26 米高的贴墙喷泉如何建成：凯旋门式布局、红色大理石科林斯柱、壁龛、水池，以及达维乌德所用的材料。',
      h1: '圣米歇尔喷泉的建筑',
      updated: '最后更新：2026 年 10 月',
      lead: '圣米歇尔喷泉是一座「贴墙喷泉」——约 26 米高、15 米宽的纪念碑式石屏，由加布里埃尔·达维乌德设计，作为 Rue Danton 街道尽端的装饰收尾。',
      sections: [
        { heading: '凯旋门式布局', content: '立面如同缩小的凯旋门：宽厚底座、由立柱围合的中央壁龛，以及上方的顶层。它旨在收束 Rue Danton 的视线，并遮掩后方建筑的秃山墙。' },
        { heading: '柱列与壁龛', content: '四根红色大理石科林斯柱环绕中央壁龛，内置大天使米歇尔群雕。其上檐部与顶层承载上部装饰，以及最初的帝国徽记（后被城市徽章取代）。' },
        { heading: '材料', content: '主体为圣马克西曼（Saint-Maximin）石灰岩，纹理浅淡均匀；柱身为红色大理石。2025–2026 年修复清洗了石灰岩、处理红色大理石，并更新了铸铁喷口与循环水池。' },
        { heading: '水与水池', content: '水经循环回路提升并回流；四个喷口注入下层水池。水池与铁件已在近期工程中翻修，使喷泉得以重新运行。' },
      ],
      faq: [
        { question: '喷泉是什么风格？', answer: '第二帝国贴墙喷泉，凯旋门语汇，约 26 米高，出自达维乌德。' },
        { question: '由什么建成？', answer: '主体为圣马克西曼石灰岩，柱身为红色大理石，配铸铁喷口与循环水池。' },
        { question: '为何称为贴墙喷泉？', answer: '因为它贴附建筑作为装饰屏，而非立于广场中央的独立水池。' },
      ],
      nav: '建筑',
      related: ['history', 'sculptures-and-symbolism', 'gabriel-davioud', 'haussmann-paris'],
    },
  },
  'sculptures-and-symbolism': {
    en: {
      title: 'Fontaine Saint-Michel Sculptures & Symbolism – Statues Meaning',
      description:
        'An index of every statue: the central Archangel Michael, the two winged dragons, and the four cardinal-virtue figures, with their sculptors and meanings.',
      h1: 'Sculptures and symbolism of Fontaine Saint-Michel',
      updated: 'Last updated: October 2026',
      lead: 'The monument’s sculpture was spread across nine artists. The programme sets the Archangel Michael at the centre, two dragons at the niche base, and four cardinal-virtue statues at the foot of the columns.',
      sections: [
        { heading: 'Central group: Archangel Michael', content: 'The dramatic group of the Archangel Michael overcoming the devil is by Francisque-Joseph Duret. It crowns the niche and gives the fountain its name and theme.' },
        { heading: 'The two winged dragons', content: 'At the base of the central niche, two winged dragons (chimères) are by Henri Alfred Jacquemart. They frame the lower basin and are a favourite detail for photographers.' },
        { heading: 'Four cardinal virtues', content: 'At the foot of the columns stand four statues of the cardinal virtues: Prudence (serpent and mirror, by Jean-Auguste Barre), Force (club, by Claude-Jean Guillaume), Justice (scales and rod, by Louis-Valentin Robert) and Temperance (bridle, by Charles-Alphonse Guméry).' },
        { heading: 'Other carved work', content: 'The rock beneath Michael is by Félix Saupin; low reliefs and foliage are by Marie-Noémi Cadiot (Noémi Constant); further reliefs with the city arms are by Auguste-Hyacinthe Debay. The full group was restored in the 2025–2026 campaign.' },
      ],
      faq: [
        { question: 'Who sculpted the central statue?', answer: 'Francisque-Joseph Duret made the Archangel Michael group; the two dragons are by Henri Alfred Jacquemart.' },
        { question: 'What do the four statues represent?', answer: 'The four cardinal virtues — Prudence, Force, Justice and Temperance — each by a different 19th-century sculptor.' },
        { question: 'Why a dragon?', answer: 'The dragon is the devil whom Michael defeats; two winged dragons sit at the niche base as part of the victory scene.' },
      ],
      nav: 'Sculptures',
      related: ['archangel-michael', 'dragons-and-chimeras', 'architecture', 'history'],
    },
    fr: {
      title: 'Sculptures et symbolisme de la Fontaine Saint-Michel – signification',
      description:
        'Index de chaque statue : l’archange Michel au centre, les deux dragons ailés et les quatre vertus cardinales, avec sculpteurs et sens.',
      h1: 'Sculptures et symbolisme de la Fontaine Saint-Michel',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'La sculpture du monument a mobilisé neuf artistes. Le programme place l’archange Michel au centre, deux dragons à la base de la niche, et quatre statues de vertus cardinales au pied des colonnes.',
      sections: [
        { heading: 'Groupe central : l’archange Michel', content: 'Le groupe spectaculaire de l’archange Michel terrassant le démon est de Francisque-Joseph Duret. Il couronne la niche et donne son nom et son thème à la fontaine.' },
        { heading: 'Les deux dragons ailés', content: 'À la base de la niche centrale, deux dragons ailés (chimères) sont d’Henri Alfred Jacquemart. Ils encadrent le bassin bas et sont un détail prisé des photographes.' },
        { heading: 'Les quatre vertus cardinales', content: 'Au pied des colonnes, quatre statues des vertus cardinales : la Prudence (serpent et miroir, Jean-Auguste Barre), la Force (massue, Claude-Jean Guillaume), la Justice (balance et verge, Louis-Valentin Robert) et la Tempérance (bride, Charles-Alphonse Guméry).' },
        { heading: 'Autres sculptures', content: 'Le rocher sous Michel est de Félix Saupin ; bas-reliefs et feuillages de Marie-Noémi Cadiot (Noémi Constant) ; d’autres reliefs aux armes de la ville par Auguste-Hyacinthe Debay. L’ensemble a été restauré en 2025–2026.' },
      ],
      faq: [
        { question: 'Qui a sculpté la statue centrale ?', answer: 'Francisque-Joseph Duret a fait le groupe de l’archange Michel ; les deux dragons sont d’Henri Alfred Jacquemart.' },
        { question: 'Que représentent les quatre statues ?', answer: 'Les quatre vertus cardinales — Prudence, Force, Justice et Tempérance — chacune par un sculpteur différent du XIXe siècle.' },
        { question: 'Pourquoi un dragon ?', answer: 'Le dragon est le démon que Michel terrasse ; deux dragons ailés bordent la niche dans la scène de victoire.' },
      ],
      nav: 'Sculptures',
      related: ['archangel-michael', 'dragons-and-chimeras', 'architecture', 'history'],
    },
    zh: {
      title: '圣米歇尔喷泉雕像与寓意（雕像含义）',
      description: '逐座雕像索引：中央大天使米歇尔、双翼龙，以及四尊枢德雕像，含雕塑家与寓意。',
      h1: '圣米歇尔喷泉的雕像与寓意',
      updated: '最后更新：2026 年 10 月',
      lead: '纪念碑的雕塑由九位艺术家共同完成。构图中：中央为大天使米歇尔，壁龛基座为双翼龙，柱脚为四尊枢德雕像。',
      sections: [
        { heading: '中央群雕：大天使米歇尔', content: '「大天使米歇尔制服魔鬼」群雕出自弗朗西斯克-约瑟夫·迪雷（Francisque-Joseph Duret），位于壁龛顶端，也是喷泉名称与主题的由来。' },
        { heading: '双翼龙', content: '中央壁龛基座两侧的有翼龙（chimères）出自亨利·阿尔弗雷德·雅克马尔（Henri Alfred Jacquemart），框住下层水池，是摄影师的钟爱细节。' },
        { heading: '四枢德', content: '柱脚四尊雕像代表四枢德：审慎（持蛇与镜，Jean-Auguste Barre 作）、力量（持棍棒，Claude-Jean Guillaume 作）、正义（持天平与杖，Louis-Valentin Robert 作）、节制（持缰绳，Charles-Alphonse Guméry 作）。' },
        { heading: '其他雕刻', content: '米歇尔脚下的岩石出自 Félix Saupin；浅浮雕与叶饰出自 Marie-Noémi Cadiot（Noémi Constant）；带城市徽章的浅浮雕出自 Auguste-Hyacinthe Debay。整组在 2025–2026 年工程中修复。' },
      ],
      faq: [
        { question: '中央雕像是谁雕刻的？', answer: '弗朗西斯克-约瑟夫·迪雷作大天使米歇尔群雕；双翼龙出自亨利·阿尔弗雷德·雅克马尔。' },
        { question: '四尊雕像代表什么？', answer: '四枢德——审慎、力量、正义、节制，各由一位 19 世纪雕塑家完成。' },
        { question: '为何有龙？', answer: '龙即米歇尔所制服的魔鬼；两只翼龙位于壁龛基座，属于胜利场景的一部分。' },
      ],
      nav: '雕像',
      related: ['archangel-michael', 'dragons-and-chimeras', 'architecture', 'history'],
    },
  },
  'archangel-michael': {
    en: {
      title: 'The Archangel Michael Statue at Fontaine Saint-Michel – Who & Why',
      description:
        'Who the central statue depicts, the story it tells, its sculptor Francisque Duret, and why the fountain bears Saint Michael’s name.',
      h1: 'The Archangel Michael at Fontaine Saint-Michel',
      updated: 'Last updated: October 2026',
      lead: 'The centrepiece is the Archangel Michael overcoming the devil — a victory-of-good-over-evil scene that gave the fountain, the square and the boulevard their name.',
      sections: [
        { heading: 'The story shown', content: 'Michael, leader of the heavenly army, is shown defeating the devil in the form of a dragon. The subject suited a monument placed under the Second Empire and aligned with the feast of the Assumption (15 August), the patronal feast of Michael.' },
        { heading: 'The sculptor', content: 'The group is by Francisque-Joseph Duret (1804–1865), a leading academic sculptor of the period. An earlier 1856 design had proposed a "Peace" figure and an 1858 variant a Napoleon statue, before Michael was chosen after public objection.' },
        { heading: 'Where it sits', content: 'The group crowns the central niche, above the two winged dragons by Henri Alfred Jacquemart and the four virtue statues. From the square you read it from the pavement up — about 26 metres of façade.' },
        { heading: 'Why "Saint-Michel"', content: 'The name comes from the historic Saint-Michel chapel on the Île de la Cité and the boulevard named for it; the fountain and square inherit the dedication through the boulevard.' },
      ],
      faq: [
        { question: 'Who is the statue at the fountain?', answer: 'The Archangel Michael defeating the devil, by Francisque-Joseph Duret.' },
        { question: 'Why is it called Saint-Michel?', answer: 'After the Saint-Michel chapel and boulevard; the fountain and square take the name from the boulevard.' },
        { question: 'When was the group made?', answer: 'It was carved for the 1858–1860 fountain and unveiled at the 1860 inauguration.' },
      ],
      nav: 'Archangel Michael',
      related: ['sculptures-and-symbolism', 'dragons-and-chimeras', 'history', 'gabriel-davioud'],
    },
    fr: {
      title: 'La statue de l’archange Michel à la Fontaine Saint-Michel – qui et pourquoi',
      description:
        'Qui représente la statue centrale, l’histoire racontée, son sculpteur Francisque Duret, et pourquoi la fontaine porte le nom de saint Michel.',
      h1: 'L’archange Michel à la Fontaine Saint-Michel',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'La pièce maîtresse est l’archange Michel terrassant le démon — scène de la victoire du bien sur le mal qui a donné son nom à la fontaine, à la place et au boulevard.',
      sections: [
        { heading: 'L’histoire montrée', content: 'Michel, chef de l’armée céleste, terrasse le démon sous forme de dragon. Le sujet convenait à un monument du Second Empire, aligné sur la fête de l’Assomption (15 août), fête patronale de Michel.' },
        { heading: 'Le sculpteur', content: 'Le groupe est de Francisque-Joseph Duret (1804–1865). Un projet de 1856 proposait une « Paix », et une variante de 1858 un Napoléon, avant que Michel soit choisi après objection du public.' },
        { heading: 'Où il se trouve', content: 'Le groupe couronne la niche centrale, au-dessus des deux dragons ailés d’Henri Alfred Jacquemart et des quatre statues de vertus. Depuis la place, on le lit de bas en haut — environ 26 m de façade.' },
        { heading: 'Pourquoi « Saint-Michel »', content: 'Le nom vient de la chapelle Saint-Michel de l’Île de la Cité et du boulevard qui en porte le nom ; la fontaine et la place héritent de la dédicace par le boulevard.' },
      ],
      faq: [
        { question: 'Qui est la statue de la fontaine ?', answer: 'L’archange Michel terrassant le démon, par Francisque-Joseph Duret.' },
        { question: 'Pourquoi « Saint-Michel » ?', answer: 'Du nom de la chapelle et du boulevard Saint-Michel ; la fontaine et la place le tiennent du boulevard.' },
        { question: 'Quand le groupe a-t-il été fait ?', answer: 'Taillé pour la fontaine de 1858–1860 et dévoilé à l’inauguration de 1860.' },
      ],
      nav: 'Archange Michel',
      related: ['sculptures-and-symbolism', 'dragons-and-chimeras', 'history', 'gabriel-davioud'],
    },
    zh: {
      title: '圣米歇尔喷泉中央大天使米歇尔雕像',
      description: '中央雕像描绘谁、讲述什么故事、雕塑家弗朗西斯克·迪雷，以及喷泉为何名为圣米歇尔。',
      h1: '圣米歇尔喷泉的大天使米歇尔',
      updated: '最后更新：2026 年 10 月',
      lead: '核心是大天使米歇尔制服魔鬼——善恶相争的场景，也赋予了喷泉、广场与大道以圣米歇尔之名。',
      sections: [
        { heading: '所表现的故事', content: '米歇尔作为天军统帅，击败化作龙的魔鬼。该题材契合第二帝国时期的纪念碑，并与圣母升天节（8 月 15 日，米歇尔的主保庆日）相呼应。' },
        { heading: '雕塑家', content: '群雕出自弗朗西斯克-约瑟夫·迪雷（Francisque-Joseph Duret，1804–1865）。1856 年的方案曾拟用「和平」像，1858 年又拟用拿破仑像，后因公众反对改回米歇尔。' },
        { heading: '所在位置', content: '群雕位于中央壁龛顶端，之上为亨利·阿尔弗雷德·雅克马尔的双翼龙与四尊美德雕像。从广场由下往上看，约 26 米立面尽收眼底。' },
        { heading: '为何称圣米歇尔', content: '名称源自城岛上的圣米歇尔小堂及以其命名的大道；喷泉与广场通过大道继承此名。' },
      ],
      faq: [
        { question: '喷泉的雕像是谁？', answer: '大天使米歇尔制服魔鬼，由弗朗西斯克-约瑟夫·迪雷所作。' },
        { question: '为何叫圣米歇尔？', answer: '取自圣米歇尔小堂与大道；喷泉与广场因大道而得名。' },
        { question: '群雕何时完成？', answer: '为 1858–1860 年喷泉雕刻，并在 1860 年揭幕时亮相。' },
      ],
      nav: '大天使米歇尔',
      related: ['sculptures-and-symbolism', 'dragons-and-chimeras', 'history', 'gabriel-davioud'],
    },
  },
  'dragons-and-chimeras': {
    en: {
      title: 'The Dragons of Fontaine Saint-Michel – Winged Chimeras',
      description:
        'Identify the two winged dragons at the niche base, their sculptor Henri Alfred Jacquemart, what they symbolise, and the best angles to photograph them.',
      h1: 'The dragons and chimeras of Fontaine Saint-Michel',
      updated: 'Last updated: October 2026',
      lead: 'Two winged dragons (chimères) crouch at the base of the central niche, flanking the lower basin — easy to miss but among the most photogenic details.',
      sections: [
        { heading: 'Where they are', content: 'Look low, at the foot of the central niche: one dragon on each side of the lower basin. They sit below the Archangel Michael group and above the four virtue statues.' },
        { heading: 'The sculptor', content: 'Both dragons are by Henri Alfred Jacquemart, one of the nine sculptors on the monument. Their scaly, wing-spreading forms contrast with the calm classical columns.' },
        { heading: 'What they mean', content: 'The dragons are the devil’s form in the victory scene — Michael defeats the dragon above, while the creatures at the base complete the narrative of the triumph of good. They are "chimeras" in the decorative sense: composite, imaginary beasts.' },
        { heading: 'Photographing them', content: 'From the square, a low angle with a wide lens captures a dragon with the upper façade behind it. Early morning side-light defines the scales; see our photos page for full shooting tips.' },
      ],
      faq: [
        { question: 'Who made the dragons?', answer: 'Henri Alfred Jacquemart sculpted both winged dragons at the niche base.' },
        { question: 'Are they dragons or chimeras?', answer: 'They are winged dragon forms; "chimera" is used here in the decorative sense of a composite imaginary beast.' },
        { question: 'Why are there dragons?', answer: 'They represent the devil Michael defeats; they complete the victory scene at the base of the niche.' },
      ],
      nav: 'Dragons',
      related: ['sculptures-and-symbolism', 'archangel-michael', 'photos', 'architecture'],
    },
    fr: {
      title: 'Les dragons de la Fontaine Saint-Michel – chimères ailées',
      description:
        'Repérez les deux dragons ailés à la base de la niche, leur sculpteur Henri Alfred Jacquemart, leur sens, et les meilleurs angles pour les photographier.',
      h1: 'Les dragons et chimères de la Fontaine Saint-Michel',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'Deux dragons ailés (chimères) se blottissent à la base de la niche centrale, encadrant le bassin bas — faciles à manquer mais parmi les détails les plus photogéniques.',
      sections: [
        { heading: 'Où ils se trouvent', content: 'Regardez en bas, au pied de la niche centrale : un dragon de chaque côté du bassin bas. Ils sont sous le groupe de l’archange Michel et au-dessus des quatre statues de vertus.' },
        { heading: 'Le sculpteur', content: 'Les deux dragons sont d’Henri Alfred Jacquemart, l’un des neuf sculpteurs du monument. Leurs formes écailleuses et déployées contrastent avec les colonnes classiques calmes.' },
        { heading: 'Ce qu’ils signifient', content: 'Les dragons sont la forme du démon dans la scène de victoire — Michel terrasse le dragon plus haut, tandis que les créatures à la base achèvent le récit du triomphe du bien. Ce sont des « chimères » au sens décoratif : bêtes imaginaires composites.' },
        { heading: 'Les photographier', content: 'Depuis la place, un angle bas avec un grand-angle capture un dragon avec la façade haute derrière. La lumière rasante du matin révèle les écailles ; voir notre page « photos » pour le reste.' },
      ],
      faq: [
        { question: 'Qui a fait les dragons ?', answer: 'Henri Alfred Jacquemart a sculpté les deux dragons ailés à la base de la niche.' },
        { question: 'Dragons ou chimères ?', answer: 'Ce sont des formes de dragons ailés ; « chimère » est ici au sens décoratif de bête imaginaire composite.' },
        { question: 'Pourquoi des dragons ?', answer: 'Ils représentent le démon que Michel terrasse ; ils achèvent la scène de victoire à la base de la niche.' },
      ],
      nav: 'Dragons',
      related: ['sculptures-and-symbolism', 'archangel-michael', 'photos', 'architecture'],
    },
  },
  'gabriel-davioud': {
    en: {
      title: 'Gabriel Davioud & Fontaine Saint-Michel – The Architect',
      description:
        'Who designed the fountain: Gabriel Davioud, Haussmann’s architect, and his other Paris works connected to the monument.',
      h1: 'Gabriel Davioud, architect of Fontaine Saint-Michel',
      updated: 'Last updated: October 2026',
      lead: 'The fountain’s architecture is by Gabriel Davioud (1824–1881), the Second Empire architect most associated with Paris street furniture and public fountains.',
      sections: [
        { heading: 'Davioud and Haussmann', content: 'As architect for the Service des Promenades et Plantations under Baron Haussmann, Davioud designed kiosks, theatres, gates and fountains that still shape the look of Paris — including the Fontaine Saint-Michel (1858–1860).' },
        { heading: 'His other fountains', content: 'Davioud also worked on the great Haussmannian fountains of the Châtelet and the Observatoire, and the fonts of the boulevards. The Saint-Michel fountain is generally cited as the last of the major Second Empire fountains completed.' },
        { heading: 'Style and craft', content: 'He favoured clear, classical façades with rich sculptural programmes, using pale limestone and coloured marble — the same language seen across the rebuilt boulevards of the Left Bank.' },
      ],
      faq: [
        { question: 'Who designed the fountain?', answer: 'Gabriel Davioud, Haussmann’s architect for public works, designed it in 1858–1860.' },
        { question: 'Did he design other Paris fountains?', answer: 'Yes — including the Châtelet and Observatoire fountains and many boulevard fonts.' },
        { question: 'When did Davioud live?', answer: 'He lived 1824–1881.' },
      ],
      nav: 'Gabriel Davioud',
      related: ['history', 'architecture', 'haussmann-paris', 'sculptures-and-symbolism'],
    },
    fr: {
      title: 'Gabriel Davioud et la Fontaine Saint-Michel – l’architecte',
      description:
        'Qui a conçu la fontaine : Gabriel Davioud, architecte d’Haussmann, et ses autres œuvres parisiennes liées au monument.',
      h1: 'Gabriel Davioud, architecte de la Fontaine Saint-Michel',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'L’architecture de la fontaine est de Gabriel Davioud (1824–1881), l’architecte du Second Empire le plus lié au mobilier urbain et aux fontaines de Paris.',
      sections: [
        { heading: 'Davioud et Haussmann', content: 'Architecte du Service des Promenades et Plantations sous le baron Haussmann, Davioud a dessiné kiosques, théâtres, grilles et fontaines qui façonnent encore Paris — dont la Fontaine Saint-Michel (1858–1860).' },
        { heading: 'Ses autres fontaines', content: 'Davioud a aussi travaillé aux grandes fontaines haussmanniennes du Châtelet et de l’Observatoire, et aux fontaines des boulevards. La fontaine Saint-Michel est généralement citée comme la dernière des grandes fontaines du Second Empire achevées.' },
        { heading: 'Style et savoir-faire', content: 'Il aimait les façades classiques nettes à riche programme sculpté, en calcaire clair et marbre coloré — le même langage que sur les boulevards reconstruits de la Rive gauche.' },
      ],
      faq: [
        { question: 'Qui a conçu la fontaine ?', answer: 'Gabriel Davioud, architecte des travaux publics d’Haussmann, l’a conçue en 1858–1860.' },
        { question: 'A-t-il dessiné d’autres fontaines ?', answer: 'Oui — dont les fontaines du Châtelet et de l’Observatoire et nombre de fontaines de boulevard.' },
        { question: 'Quand Davioud a-t-il vécu ?', answer: 'Il a vécu de 1824 à 1881.' },
      ],
      nav: 'Gabriel Davioud',
      related: ['history', 'architecture', 'haussmann-paris', 'sculptures-and-symbolism'],
    },
  },
  'haussmann-paris': {
    en: {
      title: 'Fontaine Saint-Michel & Haussmann’s Paris – Urban Context',
      description:
        'Why the fountain exists: Haussmann’s rebuilding of Paris, the new boulevards, and how the square and fountain fit the plan.',
      h1: 'Fontaine Saint-Michel in Haussmann’s Paris',
      updated: 'Last updated: October 2026',
      lead: 'The fountain was a piece of urban theatre: a monumental screen placed where Haussmann’s new Boulevard Saint-Michel met the old Left Bank street grid.',
      sections: [
        { heading: 'A new boulevard', content: 'Under Baron Haussmann, Paris cut wide, straight boulevards to improve circulation and surveillance. Boulevard Saint-Michel (opened in the 1850s–60s) needed a strong focal point at its entrance to the Latin Quarter.' },
        { heading: 'Closing a view', content: 'The fountain was built as a wall fountain to mask the bare gable of the block behind Rue Danton and to give the boulevard a decorated terminus — a typical Haussmannian move of turning infrastructure into spectacle.' },
        { heading: 'Square and city', content: 'Place Saint-Michel was laid out with the boulevard as a Hygia-geometric crossroads. The fountain, the bridge to the Île de la Cité and the quays were knit into one continuous public space.' },
      ],
      faq: [
        { question: 'Why was the fountain built?', answer: 'As a Haussmannian monument to close the view of Rue Danton and anchor the new Boulevard Saint-Michel.' },
        { question: 'When was the boulevard made?', answer: 'Boulevard Saint-Michel was opened in the 1850s–1860s under Haussmann.' },
        { question: 'Is it typical of Haussmann’s style?', answer: 'Yes — a classical, monumental public work that doubles as urban infrastructure and decoration.' },
      ],
      nav: 'Haussmann Paris',
      related: ['history', 'gabriel-davioud', 'place-saint-michel', 'architecture'],
    },
    fr: {
      title: 'La Fontaine Saint-Michel et le Paris d’Haussmann – contexte urbain',
      description:
        'Pourquoi la fontaine existe : la reconstruction de Paris par Haussmann, les nouveaux boulevards, et la place de la place et de la fontaine dans le plan.',
      h1: 'La Fontaine Saint-Michel dans le Paris d’Haussmann',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'La fontaine était un morceau de théâtre urbain : un écran monumental là où le nouveau boulevard Saint-Michel d’Haussmann rencontrait la trame ancienne de la Rive gauche.',
      sections: [
        { heading: 'Un nouveau boulevard', content: 'Sous le baron Haussmann, Paris a percé de larges boulevards droits pour la circulation et la surveillance. Le boulevard Saint-Michel (ouvert dans les années 1850–60) avait besoin d’un point focal à l’entrée du Quartier latin.' },
        { heading: 'Fermer une vue', content: 'La fontaine a été construite en fontaine-murale pour masquer le pignon nu de l’immeuble derrière la rue Danton et donner au boulevard une terminaison décorée — geste haussmannien typique d’infrastructure spectacle.' },
        { heading: 'Place et ville', content: 'La Place Saint-Michel a été tracée avec le boulevard en carrefour géométrique. La fontaine, le pont vers l’Île de la Cité et les quais forment un espace public continu.' },
      ],
      faq: [
        { question: 'Pourquoi la fontaine a-t-elle été construite ?', answer: 'Monument haussmannien pour fermer la vue de la rue Danton et ancrer le nouveau boulevard Saint-Michel.' },
        { question: 'Quand le boulevard a-t-il été percé ?', answer: 'Le boulevard Saint-Michel a été ouvert dans les années 1850–1860 sous Haussmann.' },
        { question: 'Est-ce typique du style Haussmann ?', answer: 'Oui — une œuvre publique classique et monumentale, à la fois infrastructure et décor.' },
      ],
      nav: 'Paris d’Haussmann',
      related: ['history', 'gabriel-davioud', 'place-saint-michel', 'architecture'],
    },
  },
  inscriptions: {
    en: {
      title: 'Inscriptions on Fontaine Saint-Michel – Text & Translation',
      description:
        'What is written on the fountain: the dedication, dates and any carved text, with a plain reading and short translation.',
      h1: 'The inscriptions of Fontaine Saint-Michel',
      updated: 'Last updated: October 2026',
      lead: 'The monument carries carved lettering rather than a long inscription — mainly the dedication to Saint Michael and the construction date, readable from the square.',
      sections: [
        { heading: 'What to look for', content: 'On the façade you will find the dates 1858 and 1860 (the start and the inauguration of the works) and the dedication to Saint Michael, picked out in the stone. Bring binoculars or a zoom lens; the lettering is high on the elevation.' },
        { heading: 'A reading', content: 'The key carved facts are the construction span "1858–1860" and the 15 August 1860 inauguration, aligned with the feast of the Assumption and Michael’s patronal day. Later repairs added the city coat of arms in place of the original imperial emblem.' },
        { heading: 'Accuracy note', content: 'Because the text is high and weathered, transcriptions vary between sources. Treat any single reading as indicative; the dates above are the ones consistently cited by the Ville de Paris and reference histories.' },
      ],
      faq: [
        { question: 'What is written on the fountain?', answer: 'Mainly the dates 1858–1860 and the dedication to Saint Michael, carved high on the façade.' },
        { question: 'Is there a long Latin inscription?', answer: 'No — the lettering is limited to dates and the dedication, not a long text.' },
        { question: 'Can I read it from the square?', answer: 'The dates are legible with effort; a zoom lens or binoculars helps for the higher text.' },
      ],
      nav: 'Inscriptions',
      related: ['architecture', 'history', 'sculptures-and-symbolism', 'historic-photos'],
    },
    fr: {
      title: 'Inscriptions de la Fontaine Saint-Michel – texte et traduction',
      description:
        'Ce qui est écrit sur la fontaine : dédicace, dates et textes gravés, avec lecture et courte traduction.',
      h1: 'Les inscriptions de la Fontaine Saint-Michel',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'Le monument porte des lettres gravées plutôt qu’une longue inscription — surtout la dédicace à saint Michel et la date, lisibles depuis la place.',
      sections: [
        { heading: 'Que chercher', content: 'Sur la façade figurent les dates 1858 et 1860 (début et inauguration des travaux) et la dédicace à saint Michel, inscrites dans la pierre. Emportez des jumelles ou un zoom ; les lettres sont hautes.' },
        { heading: 'Lecture', content: 'Les faits gravés clés sont la période « 1858–1860 » et l’inauguration du 15 août 1860, alignée sur la fête de l’Assomption et la fête patronale de Michel. Les réparations ultérieures ont mis les armes de la ville à la place de l’emblème impérial d’origine.' },
        { heading: 'Note de précision', content: 'Comme le texte est haut et marqué, les transcriptions varient. Toute lecture unique est indicative ; les dates ci-dessus sont celles citées par la Ville de Paris et les histoires de référence.' },
      ],
      faq: [
        { question: 'Qu’écrit-on sur la fontaine ?', answer: 'Surtout les dates 1858–1860 et la dédicace à saint Michel, gravées en haut de la façade.' },
        { question: 'Y a-t-il une longue inscription latine ?', answer: 'Non — les lettres se limitent à des dates et à la dédicace, pas à un long texte.' },
        { question: 'Puis-je lire depuis la place ?', answer: 'Les dates se lisent avec effort ; un zoom ou des jumelles aident pour le haut.' },
      ],
      nav: 'Inscriptions',
      related: ['architecture', 'history', 'sculptures-and-symbolism', 'historic-photos'],
    },
  },
  'historic-photos': {
    en: {
      title: 'Historic Photos of Fontaine Saint-Michel – Then & Now',
      description:
        'Old images of the fountain and how the monument has changed, with notes on sourcing clearly licensed historical pictures.',
      h1: 'Historic photos of Fontaine Saint-Michel',
      updated: 'Last updated: October 2026',
      lead: 'Because the fountain is a 19th-century public monument, a large body of historical photography exists — but reuse rights vary, so we point to clearly licensed sources.',
      sections: [
        { heading: 'Where the old images live', content: 'Archives such as Paris Musées (many municipal collections are free to reuse) and Wikimedia Commons hold 19th- and early-20th-century views of the fountain and the square. Always confirm the licence on the source page before reusing.' },
        { heading: 'What changed', content: 'The main changes since 1860 are the 1862–63 replacement of the cornice decoration with Noémi Cadiot’s scrolls and children, the loss of the lead imperial eagle in the 1871 Commune, and the later swap of the imperial arms for the city coat of arms. The 2025–2026 campaign cleaned and consolidated the whole elevation.' },
        { heading: 'Then and now', content: 'A useful comparison pairs a 19th-century boulevard view with the same sightline today: the fountain is unchanged in outline, while the square, trams and dress have moved on. We add our own modern photos on the main gallery and photos page.' },
      ],
      faq: [
        { question: 'Where can I find old photos?', answer: 'Paris Musées and Wikimedia Commons hold historical views; check each image’s licence before reuse.' },
        { question: 'Has the fountain changed much?', answer: 'The outline is unchanged since 1860; the cornice decoration and the city arms were altered in the 19th century.' },
        { question: 'Can I reuse the images here?', answer: 'We link to sources with clear licences; verify the specific licence on the original page.' },
      ],
      nav: 'Historic photos',
      related: ['photos', 'history', 'architecture', 'inscriptions'],
    },
    fr: {
      title: 'Photos anciennes de la Fontaine Saint-Michel – hier et aujourd’hui',
      description:
        'Vieux clichés de la fontaine et ce qui a changé, avec des notes sur les sources clairement licenciées.',
      h1: 'Photos anciennes de la Fontaine Saint-Michel',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'Monument public du XIXe siècle, la fontaine a généré beaucoup de photographies historiques — mais les droits varient, nous renvoyons donc à des sources clairement licenciées.',
      sections: [
        { heading: 'Où sont les vieilles images', content: 'Des archives comme Paris Musées (beaucoup de fonds municipaux libres) et Wikimedia Commons conservent des vues des XIXe et début XXe siècles. Confirmez toujours la licence sur la page source.' },
        { heading: 'Ce qui a changé', content: 'Depuis 1860 : remplacement en 1862–63 de la décoration de corniche par les volutes et enfants de Noémi Cadiot, perte de l’aigle impérial de plomb en 1871, puis échange des armes impériales contre celles de la ville. La campagne 2025–2026 a nettoyé l’élévation.' },
        { heading: 'Hier et aujourd’hui', content: 'Utile : appairer une vue de boulevard du XIXe avec le même axe aujourd’hui. Le contour est stable ; la place, les tramways et les costumes ont évolué. Nos photos modernes sont sur la galerie et la page « photos ».' },
      ],
      faq: [
        { question: 'Où trouver de vieilles photos ?', answer: 'Paris Musées et Wikimedia Commons ; vérifiez la licence de chaque image.' },
        { question: 'La fontaine a-t-elle beaucoup changé ?', answer: 'Le contour est stable depuis 1860 ; corniche et armes de la ville ont été modifiées au XIXe siècle.' },
        { question: 'Puis-je réutiliser les images ?', answer: 'Nous renvoyons à des sources clairement licenciées ; vérifiez la licence sur la page d’origine.' },
      ],
      nav: 'Photos anciennes',
      related: ['photos', 'history', 'architecture', 'inscriptions'],
    },
  },
  'nearby/notre-dame': {
    en: {
      title: 'From Fontaine Saint-Michel to Notre-Dame – Walk & Visit',
      description:
        'The short walk from the fountain to Notre-Dame de Paris: crossing the Seine, viewing the façade, and linking to the official interior-visit reservation.',
      h1: 'From the fountain to Notre-Dame de Paris',
      updated: 'Last updated: October 2026',
      lead: 'Notre-Dame de Paris is about a 5-minute walk from the fountain across the Pont Saint-Michel — the most obvious first extension of any visit.',
      sections: [
        { heading: 'The walk', content: 'From Place Saint-Michel cross the Pont Saint-Michel to the Île de la Cité, then follow the parvis to the west façade of Notre-Dame. The route is flat and about 400–500 metres.' },
        { heading: 'Visiting Notre-Dame', content: 'Notre-Dame reopened to visitors in December 2024 after the restoration following the 2019 fire. Entry to the cathedral is free, but timed interior visiting is managed through the official reservation system — check notredamedeparis.fr before you go.' },
        { heading: 'Combine with the fountain', content: 'A natural loop is fountain → Pont Saint-Michel → Notre-Dame parvis → Petit Pont back to the riverside bookstalls. Allow extra time if you enter the cathedral.' },
      ],
      faq: [
        { question: 'How far is Notre-Dame from the fountain?', answer: 'About 5 minutes on foot (400–500 m) across the Pont Saint-Michel.' },
        { question: 'Is Notre-Dame open again?', answer: 'Yes — it reopened to visitors in December 2024; interior visiting uses the official reservation system.' },
        { question: 'Do I need a ticket for Notre-Dame?', answer: 'Entry is free, but book the timed interior visit on the official Notre-Dame site.' },
      ],
      nav: 'To Notre-Dame',
      related: ['things-to-do-near-fontaine-saint-michel', 'walks/notre-dame-ile-de-la-cite', 'nearby/sainte-chapelle', 'place-saint-michel'],
    },
    fr: {
      title: 'De la Fontaine Saint-Michel à Notre-Dame – marche et visite',
      description:
        'La courte marche de la fontaine à Notre-Dame de Paris : traverser la Seine, voir la façade, et le lien vers la réservation officielle.',
      h1: 'De la fontaine à Notre-Dame de Paris',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'Notre-Dame de Paris est à environ 5 min à pied de la fontaine, par le Pont Saint-Michel — la première extension évidente de toute visite.',
      sections: [
        { heading: 'La marche', content: 'Depuis la Place Saint-Michel, franchissez le Pont Saint-Michel vers l’Île de la Cité, puis le parvis jusqu’à la façade ouest de Notre-Dame. Itinéraire plat d’environ 400–500 m.' },
        { heading: 'Visiter Notre-Dame', content: 'Notre-Dame a rouvert au public en décembre 2024 après la restauration suivant l’incendie de 2019. L’entrée est gratuite, mais la visite intérieure est gérée par réservation officielle — voyez notredamedeparis.fr avant de partir.' },
        { heading: 'Combiner avec la fontaine', content: 'Boucle naturelle : fontaine → Pont Saint-Michel → parvis Notre-Dame → Petit Pont vers les bouquinistes. Prévoyez du temps si vous entrez dans la cathédrale.' },
      ],
      faq: [
        { question: 'À quelle distance Notre-Dame est-elle de la fontaine ?', answer: 'Environ 5 min à pied (400–500 m) par le Pont Saint-Michel.' },
        { question: 'Notre-Dame est-elle rouverte ?', answer: 'Oui — rouverte en décembre 2024 ; la visite intérieure use la réservation officielle.' },
        { question: 'Faut-il un billet pour Notre-Dame ?', answer: 'L’entrée est gratuite, mais réservez la visite intérieure sur le site officiel.' },
      ],
      nav: 'Vers Notre-Dame',
      related: ['things-to-do-near-fontaine-saint-michel', 'walks/notre-dame-ile-de-la-cite', 'nearby/sainte-chapelle', 'place-saint-michel'],
    },
    zh: {
      title: '从圣米歇尔喷泉到巴黎圣母院（步行与参观）',
      description: '从喷泉到巴黎圣母院的短途步行：过塞纳河、观看立面，并链接官方室内参观预约。',
      h1: '从喷泉到巴黎圣母院',
      updated: '最后更新：2026 年 10 月',
      lead: '巴黎圣母院距喷泉步行约 5 分钟，经圣米歇尔桥即可到达——是最自然的第一延伸路线。',
      sections: [
        { heading: '步行', content: '从圣米歇尔广场过圣米歇尔桥（Pont Saint-Michel）到城岛，再沿广场前往圣母院西立面。路线平坦，约 400–500 米。' },
        { heading: '参观圣母院', content: '圣母院在 2019 年火灾后的修复完成后，已于 2024 年 12 月重新对公众开放。入内免费，但室内参观通过官方预约系统管理——出发前请查看 notredamedeparis.fr。' },
        { heading: '与喷泉串联', content: '自然环线：喷泉 → 圣米歇尔桥 → 圣母院广场 → 小桥回到河畔旧书摊。若进入教堂请预留额外时间。' },
      ],
      faq: [
        { question: '圣母院离喷泉多远？', answer: '步行约 5 分钟（400–500 米），经圣米歇尔桥。' },
        { question: '圣母院重新开放了吗？', answer: '是的——2024 年 12 月重新开放；室内参观使用官方预约系统。' },
        { question: '需要圣母院门票吗？', answer: '入内免费，但请在圣母院官网预约定时室内参观。' },
      ],
      nav: '前往圣母院',
      related: ['things-to-do-near-fontaine-saint-michel', 'walks/notre-dame-ile-de-la-cite', 'nearby/sainte-chapelle', 'place-saint-michel'],
    },
  },
  'nearby/sainte-chapelle': {
    en: {
      title: 'From Fontaine Saint-Michel to Sainte-Chapelle – Walk & Tickets',
      description:
        'The walk from the fountain to Sainte-Chapelle on the Île de la Cité, security, tickets and how to fit it into a half-day.',
      h1: 'From the fountain to Sainte-Chapelle',
      updated: 'Last updated: October 2026',
      lead: 'Sainte-Chapelle, famous for its 15-metre stained-glass windows, is about a 10-minute walk from the fountain on the Île de la Cité.',
      sections: [
        { heading: 'The walk', content: 'Cross the Pont Saint-Michel, skirt the Notre-Dame parvis, and follow the quai to the Boulevard du Palais and the Sainte-Chapelle / Conciergerie entrance. The route is flat and well signposted.' },
        { heading: 'Tickets and security', content: 'Sainte-Chapelle is managed by the Centre des Monuments Nationaux and needs a timed ticket; allow time for airport-style security. Book online to skip the longest queues, especially in spring and summer.' },
        { heading: 'Fitting it in', content: 'Pair it with Notre-Dame and the riverside walk for a half-day Île de la Cité loop; see our half-day itinerary for timing. The upper chapel’s glass is best in bright, midday light.' },
      ],
      faq: [
        { question: 'How far is Sainte-Chapelle from the fountain?', answer: 'About 10 minutes on foot on the Île de la Cité.' },
        { question: 'Do I need a ticket?', answer: 'Yes — timed tickets via the Centre des Monuments Nationaux, with security screening.' },
        { question: 'When is the light best?', answer: 'Midday on a clear day, when the stained glass reads most vividly.' },
      ],
      nav: 'To Sainte-Chapelle',
      related: ['nearby/notre-dame', 'walks/half-day-itinerary', 'walks/notre-dame-ile-de-la-cite', 'things-to-do-near-fontaine-saint-michel'],
    },
    fr: {
      title: 'De la Fontaine Saint-Michel à la Sainte-Chapelle – marche et billets',
      description:
        'La marche de la fontaine à la Sainte-Chapelle sur l’Île de la Cité, sécurité, billets et comment l’insérer dans une demi-journée.',
      h1: 'De la fontaine à la Sainte-Chapelle',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'La Sainte-Chapelle, célèbre pour ses vitraux de 15 m, est à environ 10 min à pied de la fontaine, sur l’Île de la Cité.',
      sections: [
        { heading: 'La marche', content: 'Franchissez le Pont Saint-Michel, longez le parvis de Notre-Dame, puis le quai jusqu’au Boulevard du Palais et l’entrée Sainte-Chapelle / Conciergerie. Itinéraire plat et fléché.' },
        { heading: 'Billets et sécurité', content: 'La Sainte-Chapelle est gérée par le Centre des Monuments Nationaux et demande un billet daté ; prévoyez le contrôle de sécurité. Réservez en ligne pour éviter les plus longues files.' },
        { heading: 'L’insérer', content: 'Associez-la à Notre-Dame et à la promenade des quais pour une demi-journée sur l’Île de la Cité ; voir notre itinéraire demi-journée. La verrière haute est meilleure en pleine lumière de midi.' },
      ],
      faq: [
        { question: 'À quelle distance la Sainte-Chapelle est-elle de la fontaine ?', answer: 'Environ 10 min à pied sur l’Île de la Cité.' },
        { question: 'Faut-il un billet ?', answer: 'Oui — billet daté via le Centre des Monuments Nationaux, avec contrôle.' },
        { question: 'Quelle est la meilleure lumière ?', answer: 'Midi par beau temps, quand les vitraux sont les plus vifs.' },
      ],
      nav: 'Vers Sainte-Chapelle',
      related: ['nearby/notre-dame', 'walks/half-day-itinerary', 'walks/notre-dame-ile-de-la-cite', 'things-to-do-near-fontaine-saint-michel'],
    },
  },
  'nearby/musee-de-cluny': {
    en: {
      title: 'From Fontaine Saint-Michel to the Musée de Cluny – Route & Visit',
      description:
        'The walk from the fountain to the Musée de Cluny (Musée national du Moyen Âge), what it holds, and how to pair it with the Latin Quarter.',
      h1: 'From the fountain to the Musée de Cluny',
      updated: 'Last updated: October 2026',
      lead: 'The Musée de Cluny, France’s national museum of the Middle Ages, sits about 10–12 minutes’ walk from the fountain in the heart of the Latin Quarter.',
      sections: [
        { heading: 'The walk', content: 'Head up Boulevard Saint-Michel or via Rue des Écoles to 28 Rue du Sommerard. The route passes the Sorbonne and the medieval street grid the fountain was built to decorate.' },
        { heading: 'What to see', content: 'The museum holds the Lady and the Unicorn tapestries, medieval sculpture and the remains of the Gallo-Roman baths (thermae) beneath it. It is a calm, cool counterpoint to the busy square.' },
        { heading: 'Pairing it', content: 'Combine Cluny with the Sorbonne, Saint-Séverin and the boulevard bookshops for a medieval-themed half-day; the nearby Jardin du Luxembourg is a short continuation.' },
      ],
      faq: [
        { question: 'How far is the Musée de Cluny?', answer: 'About 10–12 minutes on foot from the fountain.' },
        { question: 'What is it known for?', answer: 'The Lady and the Unicorn tapestries and the Gallo-Roman baths.' },
        { question: 'Is it worth a visit from the fountain?', answer: 'Yes — it is close, cool and quiet, with world-class medieval collections.' },
      ],
      nav: 'To Cluny Museum',
      related: ['nearby/sorbonne', 'nearby/saint-severin', 'walks/half-day-itinerary', 'nearby/luxembourg-gardens'],
    },
    fr: {
      title: 'De la Fontaine Saint-Michel au Musée de Cluny – itinéraire et visite',
      description:
        'La marche de la fontaine au Musée de Cluny (Musée national du Moyen Âge), ce qu’il contient, et comment le coupler au Quartier latin.',
      h1: 'De la fontaine au Musée de Cluny',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'Le Musée de Cluny, musée national du Moyen Âge, est à environ 10–12 min à pied de la fontaine, au cœur du Quartier latin.',
      sections: [
        { heading: 'La marche', content: 'Remontez le boulevard Saint-Michel ou par la rue des Écoles jusqu’au 28 rue du Sommerard. L’itinéraire passe la Sorbonne et la trame médiévale que la fontaine décorait.' },
        { heading: 'Que voir', content: 'Le musée abrite la Dame à la licorne, la sculpture médiévale et les thermes gallo-romains sous l’édifice. Contrepoint calme et frais à la place animée.' },
        { heading: 'Le coupler', content: 'Associez Cluny à la Sorbonne, Saint-Séverin et aux librairies du boulevard pour une demi-journée médiévale ; le Jardin du Luxembourg prolonge à pied.' },
      ],
      faq: [
        { question: 'À quelle distance le Musée de Cluny ?', answer: 'Environ 10–12 min à pied de la fontaine.' },
        { question: 'Par quoi est-il connu ?', answer: 'La Dame à la licorne et les thermes gallo-romains.' },
        { question: 'En vaut-il la visite depuis la fontaine ?', answer: 'Oui — proche, frais et calme, avec des collections médiévales de premier plan.' },
      ],
      nav: 'Vers Cluny',
      related: ['nearby/sorbonne', 'nearby/saint-severin', 'walks/half-day-itinerary', 'nearby/luxembourg-gardens'],
    },
  },
  'nearby/shakespeare-and-company': {
    en: {
      title: 'From Fontaine Saint-Michel to Shakespeare and Company – Walk & Books',
      description:
        'The walk from the fountain to the Shakespeare and Company bookshop, its literary setting, and nearby English-book stops.',
      h1: 'From the fountain to Shakespeare and Company',
      updated: 'Last updated: October 2026',
      lead: 'The famous English-language bookshop Shakespeare and Company sits across the river from the fountain, about a 10-minute walk via the Petit Pont.',
      sections: [
        { heading: 'The walk', content: 'From the square take the Petit Pont across the Seine to the quai de Montebello, then a few steps to 37 Rue de la Bûcherie, facing Notre-Dame. The route is flat and scenic.' },
        { heading: 'The bookshop', content: 'Shakespeare and Company is an independent English-bookshop with a literary history tied to Joyce, Hemingway and the Lost Generation. The exterior and window tables are freely visible; inside browsing is welcome during opening hours.' },
        { heading: 'Literary neighbours', content: 'Pair it with the riverside bouquinistes and the Île de la Cité for a book-themed loop; the fountain’s own Rue de la Huchette and Rue de la Bûcherie bookshops extend the theme on the Left Bank.' },
      ],
      faq: [
        { question: 'How far is Shakespeare and Company?', answer: 'About 10 minutes on foot across the Petit Pont.' },
        { question: 'Can I go inside?', answer: 'Yes — browsing is welcome in opening hours; the exterior and window tables are always visible.' },
        { question: 'Is it free?', answer: 'Browsing is free; only purchases cost.' },
      ],
      nav: 'To Shakespeare & Co',
      related: ['walks/seine-bookstalls', 'nearby/notre-dame', 'nearby/saint-severin', 'walks/saint-germain'],
    },
    fr: {
      title: 'De la Fontaine Saint-Michel à Shakespeare and Company – marche et livres',
      description:
        'La marche de la fontaine à la librairie Shakespeare and Company, son cadre littéraire, et les arrêts de livres en anglais à proximité.',
      h1: 'De la fontaine à Shakespeare and Company',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'La célèbre librairie anglophone Shakespeare and Company se trouve de l’autre côté du fleuve, à environ 10 min à pied par le Petit Pont.',
      sections: [
        { heading: 'La marche', content: 'Depuis la place, prenez le Petit Pont jusqu’au quai de Montebello, puis quelques pas au 37 rue de la Bûcherie, face à Notre-Dame. Itinéraire plat et pittoresque.' },
        { heading: 'La librairie', content: 'Shakespeare and Company est une librairie anglophone indépendante liée à Joyce, Hemingway et la « Génération perdue ». L’extérieur et les tables de devanture se voient librement ; la consultation est welcome aux heures d’ouverture.' },
        { heading: 'Voisins littéraires', content: 'Associez-la aux bouquinistes des quais et à l’Île de la Cité pour une boucle livre ; les librairies de la rue de la Huchette et de la Bûcherie prolongent le thème rive gauche.' },
      ],
      faq: [
        { question: 'À quelle distance Shakespeare and Company ?', answer: 'Environ 10 min à pied par le Petit Pont.' },
        { question: 'Peut-on entrer ?', answer: 'Oui — la consultation est welcome aux heures d’ouverture ; l’extérieur et les tables se voient toujours.' },
        { question: 'Est-ce gratuit ?', answer: 'La consultation est gratuite ; seuls les achats sont payants.' },
      ],
      nav: 'Vers Shakespeare',
      related: ['walks/seine-bookstalls', 'nearby/notre-dame', 'nearby/saint-severin', 'walks/saint-germain'],
    },
  },
  'nearby/saint-severin': {
    en: {
      title: 'From Fontaine Saint-Michel to Saint-Séverin – Walk & Church',
      description:
        'The short walk from the fountain to the Church of Saint-Séverin, its Gothic features, and visiting etiquette.',
      h1: 'From the fountain to Saint-Séverin',
      updated: 'Last updated: October 2026',
      lead: 'The Church of Saint-Séverin, a gem of Flamboyant Gothic, is about a 5-minute walk from the fountain in the medieval Latin Quarter.',
      sections: [
        { heading: 'The walk', content: 'From the square climb Rue de la Huchette and Rue Saint-Séverin into the old street grid. The church stands at 3 Rue des Prêtres-Saint-Séverin.' },
        { heading: 'What to see', content: 'Look for the twisted pillar in the nave, the double ambulatory and the 18th-century organ. It is one of the oldest parish churches on the Left Bank, with a calm interior away from the square.' },
        { heading: 'Visiting etiquette', content: 'The church is free to enter for prayer and quiet visits during opening hours; dress modestly and keep voices low. Services may limit interior access at times.' },
      ],
      faq: [
        { question: 'How far is Saint-Séverin?', answer: 'About 5 minutes on foot from the fountain.' },
        { question: 'Is it free to enter?', answer: 'Yes — free for prayer and quiet visits in opening hours.' },
        { question: 'What is it famous for?', answer: 'Its Flamboyant Gothic nave, the twisted pillar and the double ambulatory.' },
      ],
      nav: 'To Saint-Séverin',
      related: ['nearby/sorbonne', 'nearby/musee-de-cluny', 'walks/latin-quarter-two-hours', 'visiting-with-children'],
    },
    fr: {
      title: 'De la Fontaine Saint-Michel à Saint-Séverin – marche et église',
      description:
        'La courte marche de la fontaine à l’église Saint-Séverin, ses traits gothiques, et l’étiquette de visite.',
      h1: 'De la fontaine à Saint-Séverin',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'L’église Saint-Séverin, joyau du gothique flamboyant, est à environ 5 min à pied de la fontaine, dans le Quartier latin médiéval.',
      sections: [
        { heading: 'La marche', content: 'Depuis la place, montez la rue de la Huchette et la rue Saint-Séverin dans la vieille trame. L’église est au 3 rue des Prêtres-Saint-Séverin.' },
        { heading: 'Que voir', content: 'Cherchez la colonne torsadée de la nef, le double déambulatoire et l’orgue du XVIIIe siècle. L’une des plus anciennes paroisses rive gauche, avec un intérieur calme loin de la place.' },
        { heading: 'Étiquette', content: 'Entrée gratuite pour la prière et la visite calme aux heures d’ouverture ; tenue modeste et voix basses. Les offices peuvent limiter l’accès.' },
      ],
      faq: [
        { question: 'À quelle distance Saint-Séverin ?', answer: 'Environ 5 min à pied de la fontaine.' },
        { question: 'L’entrée est-elle gratuite ?', answer: 'Oui — gratuite pour la prière et la visite calme aux heures d’ouverture.' },
        { question: 'Par quoi est-elle célèbre ?', answer: 'Sa nef gothique flamboyante, la colonne torsadée et le double déambulatoire.' },
      ],
      nav: 'Vers Saint-Séverin',
      related: ['nearby/sorbonne', 'nearby/musee-de-cluny', 'walks/latin-quarter-two-hours', 'visiting-with-children'],
    },
  },
  'nearby/sorbonne': {
    en: {
      title: 'From Fontaine Saint-Michel to the Sorbonne – Walk & Quarter',
      description:
        'The walk from the fountain into the Sorbonne quarter: what is publicly viewable, campus access limits, and the Latin Quarter streets around it.',
      h1: 'From the fountain to the Sorbonne',
      updated: 'Last updated: October 2026',
      lead: 'The Sorbonne and its quarter are about a 5–10 minute walk from the fountain — more a district to wander than a single sight to enter.',
      sections: [
        { heading: 'The walk', content: 'Climb Rue Saint-Jacques or Rue des Écoles from the square to the Place de la Sorbonne. The streets here are the historic heart of the Latin Quarter’s student life.' },
        { heading: 'What you can see', content: 'The Sorbonne chapel and the façades around the Place de la Sorbonne are visible from outside; the university interior is generally not open to casual visitors. The surrounding streets, bookshops and cafés are the real draw.' },
        { heading: 'Make the most of it', content: 'Pair the quarter with Saint-Séverin, the Musée de Cluny and the boulevard bookshops for a student-and-medieval themed loop; the Panthéon is a further climb up Rue Soufflot.' },
      ],
      faq: [
        { question: 'How far is the Sorbonne?', answer: 'About 5–10 minutes on foot from the fountain.' },
        { question: 'Can I go inside the Sorbonne?', answer: 'Generally no for casual visitors; you view the chapels and façades from outside and enjoy the quarter.' },
        { question: 'What is the area known for?', answer: 'Historic student life, bookshops, cafés and medieval streets.' },
      ],
      nav: 'To the Sorbonne',
      related: ['nearby/saint-severin', 'nearby/musee-de-cluny', 'nearby/pantheon', 'walks/latin-quarter-two-hours'],
    },
    fr: {
      title: 'De la Fontaine Saint-Michel à la Sorbonne – marche et quartier',
      description:
        'La marche de la fontaine au quartier de la Sorbonne : ce qui se voit, limites d’accès au campus, et les rues du Quartier latin.',
      h1: 'De la fontaine à la Sorbonne',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'La Sorbonne et son quartier sont à environ 5–10 min à pied de la fontaine — plus un quartier à arpenter qu’un seul site à entrer.',
      sections: [
        { heading: 'La marche', content: 'Montez la rue Saint-Jacques ou la rue des Écoles depuis la place jusqu’à la Place de la Sorbonne. Ces rues sont le cœur historique de la vie étudiante du Quartier latin.' },
        { heading: 'Ce que l’on voit', content: 'La chapelle et les façades autour de la place se voient de l’extérieur ; l’intérieur de l’université n’est généralement pas ouvert au passageant. Les rues, librairies et cafés sont l’attrait.' },
        { heading: 'En profiter', content: 'Associez le quartier à Saint-Séverin, au Musée de Cluny et aux librairies du boulevard pour une boucle étudiante et médiévale ; le Panthéon poursuit par la rue Soufflot.' },
      ],
      faq: [
        { question: 'À quelle distance la Sorbonne ?', answer: 'Environ 5–10 min à pied de la fontaine.' },
        { question: 'Peut-on entrer à la Sorbonne ?', answer: 'Généralement non pour le visiteur occasionnel ; on voit chapelles et façades de l’extérieur.' },
        { question: 'Par quoi le quartier est-il connu ?', answer: 'Vie étudiante historique, librairies, cafés et rues médiévales.' },
      ],
      nav: 'Vers la Sorbonne',
      related: ['nearby/saint-severin', 'nearby/musee-de-cluny', 'nearby/pantheon', 'walks/latin-quarter-two-hours'],
    },
  },
  'nearby/pantheon': {
    en: {
      title: 'From Fontaine Saint-Michel to the Panthéon – Walk & Visit',
      description:
        'The walk from the fountain up to the Panthéon: the climb, the view, tickets and what is buried there.',
      h1: 'From the fountain to the Panthéon',
      updated: 'Last updated: October 2026',
      lead: 'The Panthéon crowns the hill of the Latin Quarter about 12 minutes’ walk (uphill) from the fountain.',
      sections: [
        { heading: 'The walk and the climb', content: 'From Place Saint-Michel go up Rue Saint-Jacques or Rue Soufflot to the Place du Panthéon. The last stretch rises gently; the view back down the boulevard to the fountain is worth the stop.' },
        { heading: 'Tickets and what is inside', content: 'The Panthéon is a paid monument (Centre des Monuments Nationaux) holding the tombs of Voltaire, Rousseau, Victor Hugo, Marie Curie and others. Book a timed ticket in peak season.' },
        { heading: 'Combine it', content: 'Pair it with the Sorbonne and the Luxembourg Gardens for a half-day; the fountain is the natural downhill start. The dome and the crypt are the highlights.' },
      ],
      faq: [
        { question: 'How far is the Panthéon?', answer: 'About 12 minutes on foot uphill from the fountain.' },
        { question: 'Is it free?', answer: 'No — it is a paid monument; timed tickets help in peak season.' },
        { question: 'Who is buried there?', answer: 'Voltaire, Rousseau, Victor Hugo, Marie Curie and other figures of France.' },
      ],
      nav: 'To the Panthéon',
      related: ['nearby/sorbonne', 'nearby/luxembourg-gardens', 'walks/half-day-itinerary', 'walks/latin-quarter-two-hours'],
    },
    fr: {
      title: 'De la Fontaine Saint-Michel au Panthéon – marche et visite',
      description:
        'La marche de la fontaine jusqu’au Panthéon : la montée, la vue, les billets et qui y repose.',
      h1: 'De la fontaine au Panthéon',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'Le Panthéon couronne la colline du Quartier latin, à environ 12 min à pied (en montée) de la fontaine.',
      sections: [
        { heading: 'La marche et la montée', content: 'Depuis la Place Saint-Michel, montez la rue Saint-Jacques ou la rue Soufflot jusqu’à la Place du Panthéon. La dernière partie monte doucement ; la vue en retour vers la fontaine vaut l’arrêt.' },
        { heading: 'Billets et intérieur', content: 'Le Panthéon est un monument payant (Centre des Monuments Nationaux) abritant les tombes de Voltaire, Rousseau, Victor Hugo, Marie Curie et d’autres. Réservez un billet daté en saison.' },
        { heading: 'Le combiner', content: 'Associez-le à la Sorbonne et au Jardin du Luxembourg pour une demi-journée ; la fontaine est le point de départ naturel en descente. Dôme et crypte sont les temps forts.' },
      ],
      faq: [
        { question: 'À quelle distance le Panthéon ?', answer: 'Environ 12 min à pied en montée depuis la fontaine.' },
        { question: 'Est-ce gratuit ?', answer: 'Non — monument payant ; billet daté utile en saison.' },
        { question: 'Qui y repose ?', answer: 'Voltaire, Rousseau, Victor Hugo, Marie Curie et d’autres figures de France.' },
      ],
      nav: 'Vers le Panthéon',
      related: ['nearby/sorbonne', 'nearby/luxembourg-gardens', 'walks/half-day-itinerary', 'walks/latin-quarter-two-hours'],
    },
  },
  'nearby/luxembourg-gardens': {
    en: {
      title: 'From Fontaine Saint-Michel to the Luxembourg Gardens – Walk & Rest',
      description:
        'The walk from the fountain to the Jardin du Luxembourg: entrances, the Medici Fountain, playgrounds and a calm rest stop.',
      h1: 'From the fountain to the Luxembourg Gardens',
      updated: 'Last updated: October 2026',
      lead: 'The Jardin du Luxembourg is about 15–20 minutes’ walk from the fountain — a green, calm counterpoint to the busy square.',
      sections: [
        { heading: 'Which entrance', content: 'From Place Saint-Michel the easiest gate is the lower entrance on Rue de Médicis / Rue Guillaume Apollinaire; the main southern entrance on Rue de Vaugirard is a longer walk. Pick the gate by how much of the boulevard you want to keep.' },
        { heading: 'What to see', content: 'The Medici Fountain, the central basin, the orchard and the bee house are highlights. The gardens are free to enter; some paid activities (pontoon boats, puppet theatre, tennis) run in season.' },
        { heading: 'Rest and families', content: 'Benches, lawns (some open) and a playground make it ideal for a break. It pairs naturally with the Sorbonne and Panthéon for a half-day Latin Quarter walk.' },
      ],
      faq: [
        { question: 'How far are the Luxembourg Gardens?', answer: 'About 15–20 minutes on foot from the fountain.' },
        { question: 'Is entry free?', answer: 'Yes — the gardens are free; some activities inside are paid in season.' },
        { question: 'What should I see?', answer: 'The Medici Fountain, the central basin, the orchard and the bee house.' },
      ],
      nav: 'To Luxembourg Gardens',
      related: ['nearby/sorbonne', 'nearby/pantheon', 'walks/half-day-itinerary', 'visiting-with-children'],
    },
    fr: {
      title: 'De la Fontaine Saint-Michel au Jardin du Luxembourg – marche et repos',
      description:
        'La marche de la fontaine au Jardin du Luxembourg : entrées, la fontaine Médicis, aires de jeux et une pause calme.',
      h1: 'De la fontaine au Jardin du Luxembourg',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'Le Jardin du Luxembourg est à environ 15–20 min à pied de la fontaine — un contrepoint vert et calme à la place animée.',
      sections: [
        { heading: 'Quelle entrée', content: 'Depuis la Place Saint-Michel, la grille la plus facile est l’entrée basse rue de Médicis / rue Guillaume Apollinaire ; l’entrée sud rue de Vaugirard est plus longue. Choisissez selon le boulevard à garder.' },
        { heading: 'Que voir', content: 'La fontaine Médicis, le bassin central, le verger et la ruche sont les temps forts. Le jardin est gratuit ; quelques activités payantes (barques, marionnettes, tennis) en saison.' },
        { heading: 'Repos et familles', content: 'Bancs, pelouses (parfois ouvertes) et aire de jeux en font une pause idéale. Il s’associe à la Sorbonne et au Panthéon pour une demi-journée.' },
      ],
      faq: [
        { question: 'À quelle distance le Jardin du Luxembourg ?', answer: 'Environ 15–20 min à pied de la fontaine.' },
        { question: 'L’entrée est-elle gratuite ?', answer: 'Oui — le jardin est gratuit ; quelques activités payantes en saison.' },
        { question: 'Que faut-il voir ?', answer: 'La fontaine Médicis, le bassin central, le verger et la ruche.' },
      ],
      nav: 'Vers le Luxembourg',
      related: ['nearby/sorbonne', 'nearby/pantheon', 'walks/half-day-itinerary', 'visiting-with-children'],
    },
  },
  'walks/30-minute-walk': {
    en: {
      title: 'A 30-Minute Walk Around Fontaine Saint-Michel – Short Route',
      description:
        'A tight loop from the fountain taking in the square, the river and a bookstall stretch — for short stays and connections.',
      h1: 'A 30-minute walk around Fontaine Saint-Michel',
      updated: 'Last updated: October 2026',
      lead: 'If you only have half an hour, this flat loop covers the fountain, the Seine and the riverside bookstalls without losing your bearings.',
      sections: [
        { heading: 'The loop', content: 'Start at the fountain on Place Saint-Michel → cross to the Pont Saint-Michel parapet for a river view → walk the Quai de Montebello bookstalls for 5 minutes → return via the Petit Pont to the square. About 30 minutes, almost entirely flat.' },
        { heading: 'Why it works', content: 'It gives you the monument, a bridge view of Notre-Dame, and the bouquinistes in one compact, signposted circuit — ideal between metro connections or before a reservation.' },
        { heading: 'Add-ons if time allows', content: 'With 10 more minutes, detour into Rue de la Huchette for its cafés, or extend the quay toward the Île de la Cité. See our 2-hour route for the fuller Latin Quarter.' },
      ],
      faq: [
        { question: 'Can I see the fountain in 30 minutes?', answer: 'Yes — this loop takes in the monument, the river and the bookstalls in about half an hour.' },
        { question: 'Is it flat?', answer: 'Almost entirely; the route stays on the square and the quays.' },
        { question: 'What if I have more time?', answer: 'Add Rue de la Huchette or extend toward the Île de la Cité; our 2-hour walk covers more.' },
      ],
      nav: '30-min walk',
      related: ['walks/latin-quarter-two-hours', 'nearby/notre-dame', 'walks/seine-bookstalls', 'visitor-guide'],
    },
    fr: {
      title: 'Une promenade de 30 minutes autour de la Fontaine Saint-Michel',
      description:
        'Une boucle serrée depuis la fontaine : la place, la Seine et les bouquinistes — pour les courts séjours.',
      h1: 'Une promenade de 30 minutes autour de la Fontaine Saint-Michel',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'Si vous n’avez qu’une demi-heure, cette boucle plate couvre la fontaine, la Seine et les bouquinistes sans vous perdre.',
      sections: [
        { heading: 'La boucle', content: 'Départ à la fontaine sur la Place Saint-Michel → parapet du Pont Saint-Michel pour la vue → quai de Montebello et ses bouquinistes 5 min → retour par le Petit Pont. Environ 30 min, presque plat.' },
        { heading: 'Pourquoi ça marche', content: 'Monument, vue sur Notre-Dame depuis un pont et bouquinistes dans un circuit compact et fléché — idéal entre deux métros ou avant une réservation.' },
        { heading: 'Si le temps le permet', content: 'Avec 10 min de plus, détour par la rue de la Huchette, ou prolongez le quai vers l’Île de la Cité. Notre route 2 h couvre plus.' },
      ],
      faq: [
        { question: 'Peut-on voir la fontaine en 30 min ?', answer: 'Oui — cette boucle prend le monument, la Seine et les bouquinistes en une demi-heure.' },
        { question: 'Est-ce plat ?', answer: 'Presque entièrement ; la route reste sur la place et les quais.' },
        { question: 'Et si j’ai plus de temps ?', answer: 'Ajoutez la rue de la Huchette ou prolongez vers l’Île de la Cité ; notre marche 2 h en dit plus.' },
      ],
      nav: 'Marche 30 min',
      related: ['walks/latin-quarter-two-hours', 'nearby/notre-dame', 'walks/seine-bookstalls', 'visitor-guide'],
    },
  },
  'walks/latin-quarter-two-hours': {
    en: {
      title: 'A 2-Hour Latin Quarter Walking Tour from the Fountain',
      description:
        'A concentrated Latin Quarter route from the fountain with timed stops: the square, Notre-Dame approaches, Sainte-Chapelle area, medieval streets and the Sorbonne.',
      h1: 'A 2-hour Latin Quarter walk from the fountain',
      updated: 'Last updated: October 2026',
      lead: 'This two-hour route stays in the dense core around the fountain — more stops than the 30-minute loop, but no paid interior visits required.',
      sections: [
        { heading: 'Timing the stops', content: '0:00 Fountain & square (15 min) → 0:15 Pont Saint-Michel + Notre-Dame parvis view (20 min) → 0:35 Quai bookstalls (15 min) → 0:50 Rue de la Huchette & Saint-Séverin (25 min) → 1:15 Sorbonne quarter & boulevard bookshops (30 min) → 1:45 back to the square. About 2 hours at an easy pace.' },
        { heading: 'What makes it "Latin Quarter"', content: 'The route threads the medieval street grid the fountain was built to ornament: student streets, old churches and bookshops rather than grand avenues.' },
        { heading: 'If you want an interior', content: 'To add Sainte-Chapelle or the Musée de Cluny, switch to our half-day itinerary, which budgets timed tickets and security.' },
      ],
      faq: [
        { question: 'What does the 2-hour walk cover?', answer: 'The fountain, the Notre-Dame parvis view, the bookstalls, Saint-Séverin and the Sorbonne quarter.' },
        { question: 'Are tickets needed?', answer: 'No — it stays outdoors; interiors are optional on the half-day route.' },
        { question: 'How is it different from the 30-min loop?', answer: 'More stops and more of the medieval core, but still no paid entries.' },
      ],
      nav: '2-hour walk',
      related: ['walks/30-minute-walk', 'walks/half-day-itinerary', 'nearby/saint-severin', 'nearby/sorbonne'],
    },
    fr: {
      title: 'Une visite à pied du Quartier latin de 2 h depuis la fontaine',
      description:
        'Itinéraire concentré du Quartier latin depuis la fontaine, avec arrêts chronométrés : place, abords de Notre-Dame, Sainte-Chapelle, rues médiévales et Sorbonne.',
      h1: 'Une marche de 2 h dans le Quartier latin depuis la fontaine',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'Cet itinéraire de deux heures reste dans le cœur dense autour de la fontaine — plus d’arrêts que la boucle 30 min, sans visite payante.',
      sections: [
        { heading: 'Chronométrer', content: '0:00 Fontaine et place (15 min) → 0:15 Pont Saint-Michel + vue du parvis (20 min) → 0:35 Bouquinistes du quai (15 min) → 0:50 rue de la Huchette et Saint-Séverin (25 min) → 1:15 Quartier Sorbonne et librairies (30 min) → 1:45 retour place. Environ 2 h.' },
        { heading: 'Pourquoi « Quartier latin »', content: 'L’itinéraire suit la trame médiévale que la fontaine ornait : rues étudiantes, vieilles églises et librairies plutôt que grands axes.' },
        { heading: 'Si vous voulez un intérieur', content: 'Pour ajouter Sainte-Chapelle ou le Musée de Cluny, passez à notre demi-journée, qui budgétise billets et sécurité.' },
      ],
      faq: [
        { question: 'Que couvre la marche 2 h ?', answer: 'La fontaine, la vue du parvis Notre-Dame, les bouquinistes, Saint-Séverin et le quartier Sorbonne.' },
        { question: 'Faut-il des billets ?', answer: 'Non — tout est en extérieur ; les intérieurs sont optionnels en demi-journée.' },
        { question: 'En quoi diffère-t-elle de la boucle 30 min ?', answer: 'Plus d’arrêts et plus du cœur médiéval, sans entrées payantes.' },
      ],
      nav: 'Marche 2 h',
      related: ['walks/30-minute-walk', 'walks/half-day-itinerary', 'nearby/saint-severin', 'nearby/sorbonne'],
    },
  },
  'walks/half-day-itinerary': {
    en: {
      title: 'A Half-Day Itinerary from Fontaine Saint-Michel',
      description:
        'A half-day Latin Quarter plan from the fountain that includes one paid interior (Sainte-Chapelle or the Musée de Cluny) plus free stops.',
      h1: 'A half-day itinerary from Fontaine Saint-Michel',
      updated: 'Last updated: October 2026',
      lead: 'This plan budgets about four hours and includes one timed interior visit, so it goes further than the 2-hour outdoor route.',
      sections: [
        { heading: 'The plan', content: '0:00 Fountain & square → 0:30 Pont Saint-Michel to Notre-Dame parvis (exterior) → 1:00 Sainte-Chapelle timed ticket (or Musée de Cluny) → 2:30 Saint-Séverin & medieval streets → 3:15 Sorbonne quarter → 3:45 Jardin du Luxembourg for a rest. Allow buffer for security and queues.' },
        { heading: 'Paid vs free', content: 'Only the one interior (Sainte-Chapelle / Cluny) is paid; the fountain, Notre-Dame exterior, streets, Saint-Séverin and the Luxembourg Gardens are free. Book the interior ticket in advance.' },
        { heading: 'Why not the 2-hour route', content: 'The 2-hour walk is outdoors only; choose this half-day when you want a major collection or the stained glass without a full-day commitment.' },
      ],
      faq: [
        { question: 'What is in the half-day plan?', answer: 'The fountain, Notre-Dame exterior, one timed interior (Sainte-Chapelle or Cluny), Saint-Séverin, the Sorbonne and the Luxembourg Gardens.' },
        { question: 'How long does it take?', answer: 'About four hours with a buffer for tickets and security.' },
        { question: 'Is only one thing paid?', answer: 'Yes — just the one interior; the rest is free to view.' },
      ],
      nav: 'Half-day plan',
      related: ['walks/latin-quarter-two-hours', 'nearby/sainte-chapelle', 'nearby/musee-de-cluny', 'nearby/luxembourg-gardens'],
    },
    fr: {
      title: 'Une demi-journée depuis la Fontaine Saint-Michel',
      description:
        'Un plan Quartier latin d’une demi-journée depuis la fontaine, avec une visite intérieure payante (Sainte-Chapelle ou Musée de Cluny) et des arrêts gratuits.',
      h1: 'Une demi-journée depuis la Fontaine Saint-Michel',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'Ce plan prévoit environ quatre heures et inclut une visite intérieure datée, allant plus loin que la route extérieure de 2 h.',
      sections: [
        { heading: 'Le plan', content: '0:00 Fontaine et place → 0:30 Pont Saint-Michel vers le parvis Notre-Dame (extérieur) → 1:00 billet daté Sainte-Chapelle (ou Musée de Cluny) → 2:30 Saint-Séverin et rues médiévales → 3:15 Quartier Sorbonne → 3:45 Jardin du Luxembourg. Prévoyez une marge pour sécurité et files.' },
        { heading: 'Payant ou gratuit', content: 'Une seule intérieure (Sainte-Chapelle / Cluny) est payante ; la fontaine, l’extérieur Notre-Dame, les rues, Saint-Séverin et le Luxembourg sont gratuits. Réservez l’intérieure à l’avance.' },
        { heading: 'Pourquoi pas la route 2 h', content: 'La marche 2 h est en extérieur seulement ; choisissez cette demi-journée si vous voulez une grande collection ou les vitraux sans la journée entière.' },
      ],
      faq: [
        { question: 'Que contient la demi-journée ?', answer: 'La fontaine, l’extérieur Notre-Dame, une intérieure datée (Sainte-Chapelle ou Cluny), Saint-Séverin, la Sorbonne et le Luxembourg.' },
        { question: 'Combien de temps ?', answer: 'Environ quatre heures avec marge pour billets et sécurité.' },
        { question: 'Une seule chose payante ?', answer: 'Oui — une seule intérieure ; le reste est gratuit.' },
      ],
      nav: 'Demi-journée',
      related: ['walks/latin-quarter-two-hours', 'nearby/sainte-chapelle', 'nearby/musee-de-cluny', 'nearby/luxembourg-gardens'],
    },
  },
  'walks/notre-dame-ile-de-la-cite': {
    en: {
      title: 'Fontaine Saint-Michel to Notre-Dame Walking Route – Île de la Cité',
      description:
        'A walking route across to the Île de la Cité: bridges, island sights and how to link the cathedral reservation.',
      h1: 'A walking route to Notre-Dame and the Île de la Cité',
      updated: 'Last updated: October 2026',
      lead: 'This route uses the Pont Saint-Michel and Petit Pont to turn the fountain and Notre-Dame into one island circuit.',
      sections: [
        { heading: 'The crossing', content: 'From the square take the Pont Saint-Michel onto the Île de la Cité, circle the Notre-Dame parvis (exterior), then return via the Petit Pont. Flat, about 1 km round trip.' },
        { heading: 'Island add-ons', content: 'If time allows, the flower market (Marché aux Fleurs) and the Memorial des Martyrs de la Déportation sit nearby; Sainte-Chapelle is a short walk along the quai (timed ticket).' },
        { heading: 'Linking the reservation', content: 'Notre-Dame reopened in December 2024; book the timed interior visit on notredamedeparis.fr and time your crossing around it.' },
      ],
      faq: [
        { question: 'How do I walk to Notre-Dame from the fountain?', answer: 'Pont Saint-Michel onto the island, view the parvis, return via the Petit Pont — about 1 km.' },
        { question: 'Can I walk the whole island?', answer: 'Yes — the route can extend to the flower market and the Déportation memorial.' },
        { question: 'Do I need to book Notre-Dame?', answer: 'Entry is free but the interior uses the official timed reservation.' },
      ],
      nav: 'Île de la Cité walk',
      related: ['nearby/notre-dame', 'nearby/sainte-chapelle', 'walks/30-minute-walk', 'things-to-do-near-fontaine-saint-michel'],
    },
    fr: {
      title: 'Itinéraire à pied Fontaine Saint-Michel – Notre-Dame – Île de la Cité',
      description:
        'Un itinéraire vers l’Île de la Cité : ponts, sites de l’île et lien avec la réservation de la cathédrale.',
      h1: 'Itinéraire à pied vers Notre-Dame et l’Île de la Cité',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'Cet itinéraire utilise le Pont Saint-Michel et le Petit Pont pour faire de la fontaine et Notre-Dame une seule boucle insulaire.',
      sections: [
        { heading: 'La traversée', content: 'Depuis la place, le Pont Saint-Michel vers l’Île de la Cité, le parvis Notre-Dame (extérieur), retour par le Petit Pont. Plat, environ 1 km aller-retour.' },
        { heading: 'Ajouts sur l’île', content: 'Si le temps le permet, le Marché aux Fleurs et le Mémorial des Martyrs de la Déportation sont proches ; la Sainte-Chapelle est à quelques pas le long du quai (billet daté).' },
        { heading: 'Lien réservation', content: 'Notre-Dame a rouvert en décembre 2024 ; réservez la visite intérieure sur notredamedeparis.fr et caliez la traversée.' },
      ],
      faq: [
        { question: 'Comment aller à Notre-Dame à pied depuis la fontaine ?', answer: 'Pont Saint-Michel vers l’île, parvis, retour Petit Pont — environ 1 km.' },
        { question: 'Peut-on faire toute l’île ?', answer: 'Oui — jusqu’au marché aux fleurs et au Mémorial de la Déportation.' },
        { question: 'Faut-il réserver Notre-Dame ?', answer: 'Entrée gratuite mais visite intérieure sur réservation officielle datée.' },
      ],
      nav: 'Marche Île de la Cité',
      related: ['nearby/notre-dame', 'nearby/sainte-chapelle', 'walks/30-minute-walk', 'things-to-do-near-fontaine-saint-michel'],
    },
  },
  'walks/seine-bookstalls': {
    en: {
      title: 'A Seine Bookstalls Walk from Fontaine Saint-Michel',
      description:
        'A riverside walk from the fountain along the bouquinistes: where they are, what to browse, and the best photo spots.',
      h1: 'A Seine bookstalls walk from the fountain',
      updated: 'Last updated: October 2026',
      lead: 'The green bouquinistes boxes along the Seine are a short step from the square — a flat, photographic walk with old books, postcards and prints.',
      sections: [
        { heading: 'Where they are', content: 'From Place Saint-Michel the boxes line the Quai de Montebello (right bank side opposite) and the Quai Saint-Michel / Quai de la Tournelle. Cross the Pont Saint-Michel or Petit Pont to reach them.' },
        { heading: 'What to browse', content: 'Expect second-hand books, vintage postcards, prints and small antiques. Hours vary by vendor; mornings and late afternoons are best, and some close in poor weather.' },
        { heading: 'Photo spots', content: 'The bookstalls with Notre-Dame behind them are the classic shot; the Pont Saint-Michel parapet gives a clean river-and-cathedral frame. See our photos page for more.' },
      ],
      faq: [
        { question: 'Where are the bookstalls from the fountain?', answer: 'Along the Quai de Montebello and Quai Saint-Michel, a short bridge crossing away.' },
        { question: 'What can I buy?', answer: 'Old books, postcards, prints and small antiques; hours vary by vendor.' },
        { question: 'When is the light best?', answer: 'Mornings and late afternoons; some boxes close in bad weather.' },
      ],
      nav: 'Bookstalls walk',
      related: ['photos', 'nearby/shakespeare-and-company', 'walks/30-minute-walk', 'at-night'],
    },
    fr: {
      title: 'Une promenade des bouquinistes de la Seine depuis la Fontaine Saint-Michel',
      description:
        'Une marche des quais depuis la fontaine le long des bouquinistes : où ils sont, quoi regarder, et les meilleurs spots photo.',
      h1: 'Une promenade des bouquinistes depuis la fontaine',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'Les boîtes vertes des bouquinistes bordent la Seine à deux pas de la place — une marche plate et photogénique avec livres anciens, cartes et estampes.',
      sections: [
        { heading: 'Où ils sont', content: 'Depuis la Place Saint-Michel, les boîtes longent le quai de Montebello et le quai Saint-Michel / quai de la Tournelle. Franchissez le Pont Saint-Michel ou le Petit Pont.' },
        { heading: 'Que regarder', content: 'Livres d’occasion, cartes postales vintage, estampes et petits objets. Horaires variables ; matins et fins d’après-midi sont meilleurs, certains ferment par mauvais temps.' },
        { heading: 'Spots photo', content: 'Les bouquinistes avec Notre-Dame derrière : le cliché classique ; le parapet du Pont Saint-Michel cadre bien fleuve et cathédrale. Voir notre page « photos ».' },
      ],
      faq: [
        { question: 'Où sont les bouquinistes depuis la fontaine ?', answer: 'Le long du quai de Montebello et du quai Saint-Michel, à un pont.' },
        { question: 'Que peut-on acheter ?', answer: 'Livres anciens, cartes, estampes et petits objets ; horaires variables.' },
        { question: 'Quelle lumière ?', answer: 'Matins et fins d’après-midi ; certaines boîtes ferment par mauvais temps.' },
      ],
      nav: 'Marche bouquinistes',
      related: ['photos', 'nearby/shakespeare-and-company', 'walks/30-minute-walk', 'at-night'],
    },
  },
  'walks/saint-germain': {
    en: {
      title: 'A Saint-Germain-des-Prés Walk from Fontaine Saint-Michel',
      description:
        'A literary walk from the fountain across to Saint-Germain: cafés, bookshops and the abbey church, with rest stops.',
      h1: 'A Saint-Germain-des-Prés walk from the fountain',
      updated: 'Last updated: October 2026',
      lead: 'Saint-Germain-des-Prés, the historic literary quarter across the river, is about a 15–20 minute walk from the fountain via the Pont Saint-Michel and the boulevards.',
      sections: [
        { heading: 'The route', content: 'From the square cross the Pont Saint-Michel, continue along the Quai des Grands-Augustins and up Rue de Buci / Rue de Seine to the Église Saint-Germain-des-Prés and its café-lined square.' },
        { heading: 'Literary stops', content: 'The quarter is known for the Café de Flore and Les Deux Magots, historic bookshops and the abbey church — a calm contrast to the fountain’s bustle. Allow time for a café terrace.' },
        { heading: 'Rest and return', content: 'Benches and terraces line the route; return the same way or via the Pont Neuf for a different river view. Pair it with the bookstalls walk.' },
      ],
      faq: [
        { question: 'How far is Saint-Germain from the fountain?', answer: 'About 15–20 minutes on foot across the Pont Saint-Michel.' },
        { question: 'What is it known for?', answer: 'Literary cafés, bookshops and the abbey church of Saint-Germain-des-Prés.' },
        { question: 'Is it worth the walk?', answer: 'Yes — a calm, historic quarter with a different feel from the Latin Quarter core.' },
      ],
      nav: 'Saint-Germain walk',
      related: ['nearby/shakespeare-and-company', 'walks/seine-bookstalls', 'walks/saint-germain', 'things-to-do-near-fontaine-saint-michel'],
    },
    fr: {
      title: 'Une promenade Saint-Germain-des-Prés depuis la Fontaine Saint-Michel',
      description:
        'Une marche littéraire depuis la fontaine vers Saint-Germain : cafés, librairies et abbaye, avec pauses.',
      h1: 'Une promenade Saint-Germain-des-Prés depuis la fontaine',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'Saint-Germain-des-Prés, le quartier littéraire d’en face, est à environ 15–20 min à pied de la fontaine par le Pont Saint-Michel.',
      sections: [
        { heading: 'L’itinéraire', content: 'Depuis la place, le Pont Saint-Michel, le quai des Grands-Augustins puis la rue de Buci / rue de Seine jusqu’à l’église Saint-Germain-des-Prés et sa place cafés.' },
        { heading: 'Arrêts littéraires', content: 'Le quartier est connu pour le Café de Flore et Les Deux Magots, ses librairies et l’abbaye — contraste calme avec la place. Prévoyez une terrasse.' },
        { heading: 'Repos et retour', content: 'Bancs et terrasses jalonnent le trajet ; retour par le même chemin ou le Pont Neuf pour une autre vue. À coupler avec la marche des bouquinistes.' },
      ],
      faq: [
        { question: 'À quelle distance Saint-Germain de la fontaine ?', answer: 'Environ 15–20 min à pied par le Pont Saint-Michel.' },
        { question: 'Par quoi est-il connu ?', answer: 'Cafés littéraires, librairies et l’abbaye Saint-Germain-des-Prés.' },
        { question: 'La marche en vaut-elle la peine ?', answer: 'Oui — quartier calme et historique, autre ambiance que le cœur du Quartier latin.' },
      ],
      nav: 'Marche Saint-Germain',
      related: ['nearby/shakespeare-and-company', 'walks/seine-bookstalls', 'things-to-do-near-fontaine-saint-michel', 'walks/30-minute-walk'],
    },
  },
  'walks/free-things-to-do': {
    en: {
      title: 'Free Things to Do Near Fontaine Saint-Michel – Paris',
      description:
        'What is free around the fountain versus what needs a ticket: the monument, squares, exteriors, quays, gardens and churches.',
      h1: 'Free things to do near Fontaine Saint-Michel',
      updated: 'Last updated: October 2026',
      lead: 'Much of what makes the area worth visiting is free — the fountain, the river, the squares and most church exteriors cost nothing.',
      sections: [
        { heading: 'Always free', content: 'The fountain and Place Saint-Michel, the Seine quays and bookstalls (browsing), the exterior of Notre-Dame (reopened Dec 2024; interior via free reservation), the riverside walk, and the Jardin du Luxembourg gardens.' },
        { heading: 'Free with limits', content: 'Saint-Séverin and the Sorbonne chapels are free to enter for quiet visits in opening hours. The Panthéon and Sainte-Chapelle are paid; the Musée de Cluny is paid.' },
        { heading: 'Paid only if you choose', content: 'Timed interior visits (Notre-Dame reservation, Sainte-Chapelle, Cluny, Panthéon) and in-garden activities (pontoon boats, tennis) are the main costs. Everything else on our walks is free to view.' },
      ],
      faq: [
        { question: 'What is free near the fountain?', answer: 'The fountain, the square, the quays, Notre-Dame exterior, the bookstalls and the Luxembourg Gardens are free.' },
        { question: 'Are the churches free?', answer: 'Saint-Séverin is free to enter; Notre-Dame interior is free but reservation-only. Sainte-Chapelle and the Panthéon are paid.' },
        { question: 'Do I need tickets for anything free?', answer: 'Only Notre-Dame’s interior needs a free reservation; the rest is open.' },
      ],
      nav: 'Free things',
      related: ['visitor-guide', 'nearby/notre-dame', 'nearby/saint-severin', 'walks/30-minute-walk'],
    },
    fr: {
      title: 'Choses gratuites près de la Fontaine Saint-Michel – Paris',
      description:
        'Ce qui est gratuit autour de la fontaine et ce qui demande un billet : monument, places, extérieurs, quais, jardins et églises.',
      h1: 'Choses gratuites près de la Fontaine Saint-Michel',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'Une bonne part de l’intérêt du quartier est gratuite — la fontaine, la Seine, les places et la plupart des extérieurs d’églises ne coûtent rien.',
      sections: [
        { heading: 'Toujours gratuit', content: 'La fontaine et la Place Saint-Michel, les quais et les bouquinistes (voir), l’extérieur de Notre-Dame (rouverte déc. 2024 ; intérieur sur réservation gratuite), la promenade des quais et le Jardin du Luxembourg.' },
        { heading: 'Gratuit avec limites', content: 'Saint-Séverin et les chapelles de la Sorbonne sont libres d’accès en visite calme aux heures d’ouverture. Le Panthéon et la Sainte-Chapelle sont payants ; le Musée de Cluny est payant.' },
        { heading: 'Payant si vous le souhaitez', content: 'Les visites intérieures datées (Notre-Dame, Sainte-Chapelle, Cluny, Panthéon) et les activités du jardin (barques, tennis) sont les principaux coûts. Le reste de nos marches est gratuit.' },
      ],
      faq: [
        { question: 'Qu’y a-t-il de gratuit près de la fontaine ?', answer: 'La fontaine, la place, les quais, l’extérieur Notre-Dame, les bouquinistes et le Luxembourg sont gratuits.' },
        { question: 'Les églises sont-elles gratuites ?', answer: 'Saint-Séverin est libre ; l’intérieur Notre-Dame est gratuit sur réservation. Sainte-Chapelle et le Panthéon sont payants.' },
        { question: 'Faut-il des billets pour le gratuit ?', answer: 'Seul l’intérieur Notre-Dame demande une réservation gratuite ; le reste est ouvert.' },
      ],
      nav: 'Gratuit',
      related: ['visitor-guide', 'nearby/notre-dame', 'nearby/saint-severin', 'walks/30-minute-walk'],
    },
  },
  photos: {
    en: {
      title: 'Fontaine Saint-Michel Photos – Spots, Angles & Tips',
      description:
        'Where to photograph the fountain: sightlines from the square and the bridges, the best light, and how to handle crowds.',
      h1: 'Photographing Fontaine Saint-Michel',
      updated: 'Last updated: October 2026',
      lead: 'The 26-metre façade reads best from straight on, across the square or a bridge — and it is lit after dark, so it photographs day or night.',
      sections: [
        { heading: 'Shooting from the square', content: 'Stand in the middle of Place Saint-Michel for a centred, full-façade frame. A wide lens (16–24 mm) takes in the whole elevation; a short telephoto isolates the Archangel Michael group high up.' },
        { heading: 'Bridges and river', content: 'The Pont Saint-Michel parapet frames the fountain with the boulevard; from the Quai de Montebello the bookstalls sit in front of Notre-Dame, a different subject. Cross to the opposite bank for a three-quarter view.' },
        { heading: 'Light and crowds', content: 'Side-light in the morning defines the sculpture; the floodlit façade after dusk is the night shot. Crowds peak midday — shoot early or late for clean frames, and be mindful of people in the square.' },
        { heading: 'Detail shots', content: 'The two winged dragons at the niche base and the four virtue statues reward a zoom. See our dragons page for identifying them.' },
      ],
      faq: [
        { question: 'Where is the best photo spot?', answer: 'Centred on Place Saint-Michel for the full façade; the Pont Saint-Michel for a framed view.' },
        { question: 'Is it lit at night?', answer: 'Yes — the façade is floodlit, making it a strong night subject.' },
        { question: 'How do I avoid crowds?', answer: 'Shoot early morning or late evening; use a longer lens to isolate details.' },
      ],
      nav: 'Photos',
      related: ['at-night', 'dragons-and-chimeras', 'walks/seine-bookstalls', 'visitor-guide'],
    },
    fr: {
      title: 'Photos de la Fontaine Saint-Michel – spots, angles et conseils',
      description:
        'Où photographier la fontaine : axes depuis la place et les ponts, la meilleure lumière, et la gestion de la foule.',
      h1: 'Photographier la Fontaine Saint-Michel',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'La façade de 26 m se lit bien de face, depuis la place ou un pont — et elle est éclairée la nuit, donc photogénique jour et nuit.',
      sections: [
        { heading: 'Depuis la place', content: 'Placez-vous au centre de la Place Saint-Michel pour un cadre frontal de toute la façade. Un grand-angle (16–24 mm) prend l’élévation ; un court télé isole le groupe de l’archange en haut.' },
        { heading: 'Ponts et Seine', content: 'Le parapet du Pont Saint-Michel cadre la fontaine avec le boulevard ; depuis le quai de Montebello, les bouquinistes devant Notre-Dame, un autre sujet. Passez rive opposée pour une vue de trois quarts.' },
        { heading: 'Lumière et foule', content: 'La lumière rasante du matin révèle la sculpture ; la façade éclairée le soir est la photo de nuit. Foule à midi — photographez tôt ou tard, et respectez les passants.' },
        { heading: 'Détails', content: 'Les deux dragons ailés à la base et les quatre vertus se prêtent au zoom. Voir notre page « dragons ».' },
      ],
      faq: [
        { question: 'Quel est le meilleur spot ?', answer: 'Centré sur la Place Saint-Michel pour la façade ; le Pont Saint-Michel pour un cadrage.' },
        { question: 'Est-elle éclairée la nuit ?', answer: 'Oui — façade éclairée, sujet de nuit fort.' },
        { question: 'Comment éviter la foule ?', answer: 'Tôt le matin ou tard le soir ; un télé pour isoler les détails.' },
      ],
      nav: 'Photos',
      related: ['at-night', 'dragons-and-chimeras', 'walks/seine-bookstalls', 'visitor-guide'],
    },
    zh: {
      title: '圣米歇尔喷泉摄影指南（机位、角度与技巧）',
      description: '在哪里拍摄喷泉：从广场与桥梁的视线、最佳光线，以及如何处理人流。',
      h1: '拍摄圣米歇尔喷泉',
      updated: '最后更新：2026 年 10 月',
      lead: '26 米立面从正前方（广场或桥上）观看效果最佳；入夜后有照明，因此白天与夜晚都适合拍摄。',
      sections: [
        { heading: '广场拍摄', content: '站在圣米歇尔广场中央可获得居中的完整立面构图。广角（16–24mm）能纳入整座立面；中长焦可单独突出高处的米歇尔群雕。' },
        { heading: '桥梁与河景', content: '圣米歇尔桥的栏杆可把喷泉与大道同框；从蒙特贝洛堤岸看，旧书摊位于圣母院前方，是另一主题。过到对岸可取得四分之三视角。' },
        { heading: '光线与人流', content: '上午的侧光勾勒雕塑细节；傍晚亮灯后的立面是夜景佳作。中午人流最密——清晨或傍晚拍摄更干净，并请注意广场上的行人。' },
        { heading: '细节', content: '壁龛基座的双翼龙与四尊美德雕像值得用长焦特写。识别方法见「双翼龙」页面。' },
      ],
      faq: [
        { question: '最佳拍摄点在哪里？', answer: '圣米歇尔广场中央拍完整立面；圣米歇尔桥可取得框景。' },
        { question: '夜间有照明吗？', answer: '有——立面有泛光照明，是很好的夜景题材。' },
        { question: '如何避开人流？', answer: '清晨或傍晚拍摄；用较长焦段突出细节。' },
      ],
      nav: '摄影',
      related: ['at-night', 'dragons-and-chimeras', 'walks/seine-bookstalls', 'visitor-guide'],
    },
  },
  'at-night': {
    en: {
      title: 'Fontaine Saint-Michel at Night – Night Visit & Photos',
      description:
        'What the fountain looks like after dark, the lighting, a safe night walk, and where to photograph the lit façade.',
      h1: 'Fontaine Saint-Michel at night',
      updated: 'Last updated: October 2026',
      lead: 'After dark the fountain is floodlit and the square stays lively, making it one of the easier Paris monuments to enjoy in the evening.',
      sections: [
        { heading: 'The lighting', content: 'Uplights pick out the columns, the Archangel Michael group and the dragons; the 26-metre façade reads clearly against the night sky. The effect is strongest after full dusk.' },
        { heading: 'A night walk', content: 'A short evening loop runs along the Quai Saint-Michel and Quai de Montebello for reflections of Notre-Dame on the river, then back to the lit square. The area is busy and well-lit, generally fine on foot.' },
        { heading: 'Night photos', content: 'A tripod or a steady phone on a parapet helps in low light. Frame the lit façade from the centre of the square, or capture the river reflections from the Pont Saint-Michel. See our photos page for angles.' },
        { heading: 'Getting back', content: 'The RER B/C Saint-Michel–Notre-Dame and Métro line 10 Cluny–La Sorbonne run late; note the Métro line 4 Saint-Michel station is closed for works 14 Sep–19 Dec 2026 — use the RER or line 10.' },
      ],
      faq: [
        { question: 'Is the fountain lit at night?', answer: 'Yes — it is floodlit after dark and the square stays busy.' },
        { question: 'Is it safe to visit at night?', answer: 'The area is well-lit and frequented; standard city caution applies as anywhere.' },
        { question: 'How do I get back late?', answer: 'RER B/C and Métro line 10 run late; avoid the closed line 4 Saint-Michel station and use the RER or line 10.' },
      ],
      nav: 'At night',
      related: ['photos', 'walks/seine-bookstalls', 'how-to-get-there', 'place-saint-michel'],
    },
    fr: {
      title: 'La Fontaine Saint-Michel la nuit – visite et photos',
      description:
        'Ce que donne la fontaine après la tombée de la nuit, l’éclairage, une marche nocturne sûre, et où photographier la façade éclairée.',
      h1: 'La Fontaine Saint-Michel la nuit',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'Après la tombée de la nuit, la fontaine est éclairée et la place reste animée, ce qui en fait un des monuments parisiens faciles à voir le soir.',
      sections: [
        { heading: 'L’éclairage', content: 'Des projecteurs soulignent les colonnes, le groupe de l’archange et les dragons ; la façade de 26 m se lit nettement contre le ciel. L’effet est maximal après la pleine nuit.' },
        { heading: 'Une marche nocturne', content: 'Une courte boucle le long du quai Saint-Michel et du quai de Montebello donne les reflets de Notre-Dame sur la Seine, puis retour à la place éclairée. Zone animée et éclairée, généralement sûre à pied.' },
        { heading: 'Photos de nuit', content: 'Un trépied ou un téléphone posé sur un parapet aide en basse lumière. Cadrez la façade éclairée depuis le centre de la place, ou les reflets depuis le Pont Saint-Michel. Voir notre page « photos ».' },
        { heading: 'Le retour', content: 'Le RER B/C Saint-Michel–Notre-Dame et la ligne 10 Cluny–La Sorbonne roulent tard ; la station ligne 4 Saint-Michel est fermée du 14 sept. au 19 déc. 2026 — utilisez le RER ou la ligne 10.' },
      ],
      faq: [
        { question: 'La fontaine est-elle éclairée la nuit ?', answer: 'Oui — éclairée après la tombée de la nuit, la place reste animée.' },
        { question: 'Est-ce sûr la nuit ?', answer: 'Zone éclairée et fréquentée ; prudence urbaine habituelle.' },
        { question: 'Comment rentrer tard ?', answer: 'RER B/C et ligne 10 roulent tard ; évitez la ligne 4 fermée et utilisez le RER ou la ligne 10.' },
      ],
      nav: 'La nuit',
      related: ['photos', 'walks/seine-bookstalls', 'how-to-get-there', 'place-saint-michel'],
    },
    zh: {
      title: '圣米歇尔喷泉夜间游览（夜景与摄影）',
      description: '喷泉入夜后的样子、照明、安全的夜走路线，以及在哪里拍摄亮灯立面。',
      h1: '圣米歇尔喷泉的夜晚',
      updated: '最后更新：2026 年 10 月',
      lead: '入夜后喷泉有泛光照明，广场依然热闹，是巴黎较易在晚间欣赏的纪念碑之一。',
      sections: [
        { heading: '照明', content: '底部投光照亮柱列、米歇尔群雕与双翼龙；26 米立面在夜空中清晰可辨。日落后全黑时效果最佳。' },
        { heading: '夜走路线', content: '短程夜走沿圣米歇尔堤岸与蒙特贝洛堤岸，可拍圣母院在河面的倒影，再回到亮灯的广场。区域照明充足、人流不断，步行总体安全。' },
        { heading: '夜间摄影', content: '三脚架或将手机稳放在栏杆有助于低光拍摄。从广场中央框住亮灯立面，或从圣米歇尔桥捕捉河面倒影。角度见「摄影」页面。' },
        { heading: '返程', content: 'RER B/C 与地铁 10 号线 Cluny–La Sorbonne 运营至较晚；地铁 4 号线 Saint-Michel 站 2026 年 9 月 14 日至 12 月 19 日关闭——请乘 RER 或 10 号线。' },
      ],
      faq: [
        { question: '喷泉夜间有照明吗？', answer: '有——日落后泛光照明，广场仍热闹。' },
        { question: '夜间参观安全吗？', answer: '区域照明充足、人流不断；与任何城市一样保持基本注意。' },
        { question: '深夜如何返程？', answer: 'RER B/C 与地铁 10 号线运营较晚；避开关闭的 4 号线 Saint-Michel 站，改乘 RER 或 10 号线。' },
      ],
      nav: '夜游',
      related: ['photos', 'walks/seine-bookstalls', 'how-to-get-there', 'place-saint-michel'],
    },
  },
  'where-to-eat': {
    en: {
      title: 'Where to Eat Near Fontaine Saint-Michel – By Area & Budget',
      description:
        'Eating around the fountain by neighbourhood and budget: the square’s surrounds, the Latin Quarter streets, and the river side, with a verification date.',
      h1: 'Where to eat near Fontaine Saint-Michel',
      updated: 'Last updated: October 2026 (prices and openings change — verify on the day)',
      lead: 'The fountain sits in the middle of Paris’s densest restaurant cluster, so choice is wide — from crêpe stands to formal bistros — within a few minutes’ walk.',
      sections: [
        { heading: 'Around the square', content: 'Rue de la Huchette and the streets just off the square are busy and tourist-centric, with crêperies, pizza and kebab stands at lower prices and quick turnover. Good for a fast, cheap bite between sights.' },
        { heading: 'Latin Quarter side streets', content: 'A few minutes into Rue des Écoles, Rue de la Harpe and the Sorbonne area you find more bistros and brasseries at mid-range prices, often with terraces. Booking helps in the evening.' },
        { heading: 'River and Saint-Germain', content: 'Towards the Quai des Grands-Augustins and Saint-Germain-des-Prés, prices rise and the cafés (Flore, Les Deux Magots) are as much about the setting as the food. Cross the Pont Saint-Michel for this quieter, pricier quarter.' },
        { heading: 'Practical notes', content: 'Menus and opening hours shift seasonally; check current reviews and the venue’s own page before you commit. The square itself has no seated table with a fountain view — the view is from the pavement.' },
      ],
      faq: [
        { question: 'Where is the cheapest food?', answer: 'The crêpe and kebab stands on Rue de la Huchette by the square are the quick, low-cost option.' },
        { question: 'Where are the best bistros?', answer: 'The Latin Quarter side streets and Saint-Germain-des-Prés have more sit-down bistros; book in the evening.' },
        { question: 'Is there a view restaurant?', answer: 'No seated terrace overlooks the fountain; the monument is viewed from the pavement and bridges.' },
      ],
      nav: 'Where to eat',
      related: ['where-to-stay', 'walks/saint-germain', 'visitor-guide', 'place-saint-michel'],
    },
    fr: {
      title: 'Où manger près de la Fontaine Saint-Michel – par quartier et budget',
      description:
        'Manger autour de la fontaine par quartier et budget : alentours de la place, rues du Quartier latin, et le bord de Seine, avec date de vérification.',
      h1: 'Où manger près de la Fontaine Saint-Michel',
      updated: 'Dernière mise à jour : octobre 2026 (prix et ouvertures varient — vérifiez le jour)',
      lead: 'La fontaine se trouve au cœur du quartier le plus dense en restaurants de Paris : crêperies comme bistrots, à quelques minutes.',
      sections: [
        { heading: 'Autour de la place', content: 'La rue de la Huchette et les rues proches sont animées et touristiques, avec crêperies, pizzas et kebabs à petits prix et fort turnover. Pratique pour une bouchée rapide.' },
        { heading: 'Rues du Quartier latin', content: 'Quelques minutes dans la rue des Écoles, rue de la Harpe et le quartier Sorbonne : plus de bistrots et brasseries à prix moyens, souvent en terrasse. Réserver le soir.' },
        { heading: 'Seine et Saint-Germain', content: 'Vers le quai des Grands-Augustins et Saint-Germain-des-Prés, les prix montent et les cafés (Flore, Les Deux Magots) valent autant pour le cadre. traversez le Pont Saint-Michel pour ce quartier plus calme et plus cher.' },
        { heading: 'Notes pratiques', content: 'Menus et horaires varient ; vérifiez avis récents et page du lieu. Aucune terrasse assise ne donne sur la fontaine — la vue est depuis le trottoir.' },
      ],
      faq: [
        { question: 'Où est la nourriture la moins chère ?', answer: 'Les crêpes et kebabs de la rue de la Huchette, près de la place.' },
        { question: 'Où sont les meilleurs bistrots ?', answer: 'Les rues du Quartier latin et Saint-Germain-des-Prés ; réservez le soir.' },
        { question: 'Y a-t-il un restaurant avec vue ?', answer: 'Aucune terrasse assise ne donne sur la fontaine ; le monument se voit du trottoir et des ponts.' },
      ],
      nav: 'Où manger',
      related: ['where-to-stay', 'walks/saint-germain', 'visitor-guide', 'place-saint-michel'],
    },
    zh: {
      title: '圣米歇尔喷泉周边用餐（按区域与预算）',
      description: '按街区与预算在喷泉周边用餐：广场周边、拉丁区街巷与河岸一侧，并标注核实日期。',
      h1: '圣米歇尔喷泉周边哪里吃',
      updated: '最后更新：2026 年 10 月（价格与营业状态会变，请当天核实）',
      lead: '喷泉位于巴黎餐厅最密集的地带，几分钟内选择极广——从可丽饼摊到正式小酒馆皆有。',
      sections: [
        { heading: '广场周边', content: '屠宰场街（Rue de la Huchette）及广场旁街巷热闹且偏游客向，有可丽饼、披萨与烤肉串摊位，价格低、翻台快，适合景点间的快捷一餐。' },
        { heading: '拉丁区街巷', content: '往 Écoles 街、Harpe 街与索邦一带步行几分钟，有更多中等价位的小酒馆与啤酒店，常设露台。晚上建议预约。' },
        { heading: '河畔与圣日耳曼', content: '往 Grands-Augustins 堤岸与圣日耳曼-德-普雷，价格偏高，咖啡馆（Flore、双偶）卖的更多是氛围。过圣米歇尔桥即达这个更安静也更贵的街区。' },
        { heading: '实用提示', content: '菜单与营业时间随季节变化；决定前请查看近期评价与店家页面。广场本身没有能看喷泉的坐席露台——景观来自人行道与桥梁。' },
      ],
      faq: [
        { question: '最便宜的食物在哪里？', answer: '广场旁屠宰场街的可丽饼与烤肉串摊位是快捷低价的选项。' },
        { question: '最好的小酒馆在哪里？', answer: '拉丁区街巷与圣日耳曼-德-普雷有更多堂食小酒馆；晚上请预约。' },
        { question: '有景观餐厅吗？', answer: '没有正对喷泉的坐席露台；纪念碑需从人行道与桥梁观赏。' },
      ],
      nav: '周边用餐',
      related: ['where-to-stay', 'walks/saint-germain', 'visitor-guide', 'place-saint-michel'],
    },
  },
  'where-to-stay': {
    en: {
      title: 'Where to Stay Near Fontaine Saint-Michel – Areas Compared',
      description:
        'Staying near the fountain: the Latin Quarter, Saint-Germain and the islands compared for transport, noise and walkability.',
      h1: 'Where to stay near Fontaine Saint-Michel',
      updated: 'Last updated: October 2026',
      lead: 'Staying within a few minutes of the fountain puts you in the Latin Quarter or Saint-Germain — central, walkable, but with trade-offs in noise and price.',
      sections: [
        { heading: 'Latin Quarter (closest)', content: 'Hotels around the square and Rue Saint-Jacques are the shortest walk to the fountain and the RER. Expect street noise at night and tourist pricing; upper floors and courtyard rooms are quieter.' },
        { heading: 'Saint-Germain-des-Prés', content: 'A few minutes across the Pont Saint-Michel, this quarter is calmer and more upmarket, with more boutique hotels. Slightly longer walk but a different, quieter feel.' },
        { heading: 'Île de la Cité / Île Saint-Louis', content: 'Just across the bridges, these islands are peaceful at night but have few hotels and higher prices; the fountain is a 5–10 minute walk away.' },
        { heading: 'Transport trade-off', content: 'All three put the RER B/C Saint-Michel–Notre-Dame within reach. Remember the Métro line 4 Saint-Michel station is closed for works 14 Sep–19 Dec 2026, so rely on the RER or line 10 for late moves.' },
      ],
      faq: [
        { question: 'Is it noisy near the fountain?', answer: 'The square is busy late; choose upper or courtyard rooms for quiet.' },
        { question: 'Which area is calmest?', answer: 'Saint-Germain-des-Prés and the islands are quieter than the square itself.' },
        { question: 'Is transport easy from here?', answer: 'Yes — RER B/C and Métro line 10 are close; avoid the closed line 4 Saint-Michel station.' },
      ],
      nav: 'Where to stay',
      related: ['where-to-eat', 'how-to-get-there', 'place-saint-michel', 'at-night'],
    },
    fr: {
      title: 'Où dormir près de la Fontaine Saint-Michel – quartiers comparés',
      description:
        'Loger près de la fontaine : Quartier latin, Saint-Germain et îles comparés pour transport, bruit et marche.',
      h1: 'Où dormir près de la Fontaine Saint-Michel',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'Loger à quelques minutes de la fontaine place au Quartier latin ou à Saint-Germain — central, piéton, mais avec bruits et prix.',
      sections: [
        { heading: 'Quartier latin (le plus proche)', content: 'Hôtels autour de la place et rue Saint-Jacques : la plus courte marche vers la fontaine et le RER. Bruits de rue le soir et prix touristiques ; étages supérieurs et cours plus calmes.' },
        { heading: 'Saint-Germain-des-Prés', content: 'Quelques minutes par le Pont Saint-Michel, quartier plus calme et haut de gamme, plus de boutiques-hôtels. Marche un peu plus longue mais ambiance différente.' },
        { heading: 'Île de la Cité / Saint-Louis', content: 'Juste de l’autre côté des ponts, îles paisibles la nuit mais peu d’hôtels et prix élevés ; la fontaine est à 5–10 min.' },
        { heading: 'Compromis transport', content: 'Les trois donnent le RER B/C Saint-Michel–Notre-Dame à portée. La station ligne 4 Saint-Michel est fermée du 14 sept. au 19 déc. 2026 ; comptez sur le RER ou la ligne 10.' },
      ],
      faq: [
        { question: 'Est-ce bruyant près de la fontaine ?', answer: 'La place est animée tard ; préférez étages supérieurs ou cours.' },
        { question: 'Quel quartier est le plus calme ?', answer: 'Saint-Germain-des-Prés et les îles sont plus calmes que la place.' },
        { question: 'Le transport est-il facile ?', answer: 'Oui — RER B/C et ligne 10 proches ; évitez la ligne 4 fermée.' },
      ],
      nav: 'Où dormir',
      related: ['where-to-eat', 'how-to-get-there', 'place-saint-michel', 'at-night'],
    },
    zh: {
      title: '圣米歇尔喷泉周边住宿（区域比较）',
      description: '住在喷泉附近：拉丁区、圣日耳曼与城岛在交通、噪音与步行便利性上的比较。',
      h1: '圣米歇尔喷泉周边哪里住',
      updated: '最后更新：2026 年 10 月',
      lead: '住在喷泉几分钟范围内，即位于拉丁区或圣日耳曼——中心、可步行，但在噪音与价格上需权衡。',
      sections: [
        { heading: '拉丁区（最近）', content: '广场周边与 Saint-Jacques 街的酒店离喷泉与 RER 最近。夜晚街道有噪音、偏游客价；高楼层或庭院房更安静。' },
        { heading: '圣日耳曼-德-普雷', content: '过圣米歇尔桥几分钟即达，街区更安静、更高档，精品酒店更多。步行稍远，但氛围不同。' },
        { heading: '城岛 / 圣路易岛', content: '过桥即达，夜晚安静但酒店少、价格高；喷泉步行约 5–10 分钟。' },
        { heading: '交通权衡', content: '三者都靠近 RER B/C 的 Saint-Michel–Notre-Dame。请记住地铁 4 号线 Saint-Michel 站 2026 年 9 月 14 日至 12 月 19 日关闭，晚间请依赖 RER 或 10 号线。' },
      ],
      faq: [
        { question: '喷泉附近吵吗？', answer: '广场入夜热闹；选高楼层或庭院房更安静。' },
        { question: '哪个区域最安静？', answer: '圣日耳曼-德-普雷与城岛比广场本身更安静。' },
        { question: '交通方便吗？', answer: '方便——RER B/C 与地铁 10 号线近在咫尺；避开关闭的 4 号线 Saint-Michel 站。' },
      ],
      nav: '周边住宿',
      related: ['where-to-eat', 'how-to-get-there', 'place-saint-michel', 'at-night'],
    },
  },
  'saint-michel-vs-mont-saint-michel': {
    en: {
      title: 'Saint-Michel Paris vs Mont Saint-Michel – What’s the Difference',
      description:
        'The two very different "Saint Michel" sites in France: a Paris fountain and the Normandy island abbey, with distance, type and trip planning.',
      h1: 'Saint-Michel in Paris vs Mont Saint-Michel',
      updated: 'Last updated: October 2026',
      lead: 'They share a name but are not the same place: one is a Paris fountain on the Left Bank, the other a tidal-island abbey in Normandy about 360 km away.',
      sections: [
        { heading: 'Two different places', content: 'Fontaine Saint-Michel is a 19th-century public fountain on Place Saint-Michel in Paris — free, in the city, reached by Métro/RER. Mont Saint-Michel is a medieval abbey village on a tidal island in Manche, Normandy, and is a UNESCO site.' },
        { heading: 'Distance and trip type', content: 'The fountain is a 5-minute walk from Notre-Dame. Mont Saint-Michel is roughly a 3.5–4.5 hour train + shuttle trip from Paris, or a long drive; it needs a full day or an overnight stay, not a city stroll.' },
        { heading: 'Which to plan', content: 'If you are in Paris for the fountain, Mont Saint-Michel is a separate Normandy trip. Don’t confuse the two when booking transport or hotels — search "Mont Saint-Michel" specifically for the abbey.' },
      ],
      faq: [
        { question: 'Are they the same place?', answer: 'No — one is a Paris fountain, the other a Normandy island abbey about 360 km away.' },
        { question: 'How far is Mont Saint-Michel from Paris?', answer: 'About 360 km; roughly 3.5–4.5 hours by train and shuttle, or a long drive.' },
        { question: 'Can I see both in one day?', answer: 'The Paris fountain yes; Mont Saint-Michel needs its own full-day or overnight trip from Paris.' },
      ],
      nav: 'Paris vs Mont',
      related: ['history', 'place-saint-michel', 'visitor-guide', 'how-to-get-there'],
    },
    fr: {
      title: 'Saint-Michel à Paris vs Mont Saint-Michel – quelle différence',
      description:
        'Les deux sites « Saint Michel » très différents : une fontaine parisienne et l’abbaye normande, avec distance, type et organisation.',
      h1: 'Saint-Michel à Paris vs Mont Saint-Michel',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'Ils partagent un nom mais ne sont pas le même lieu : une fontaine parisienne rive gauche, et une abbaye sur île à marée en Normandie, à environ 360 km.',
      sections: [
        { heading: 'Deux lieux différents', content: 'La Fontaine Saint-Michel est une fontaine publique du XIXe siècle sur la Place Saint-Michel à Paris — gratuite, en ville, en Métro/RER. Le Mont Saint-Michel est un village abbatial médiéval sur île à marée dans la Manche, site UNESCO.' },
        { heading: 'Distance et type', content: 'La fontaine est à 5 min de Notre-Dame. Le Mont Saint-Michel est à environ 3,5–4,5 h train + navette depuis Paris, ou longue route ; il faut une journée ou une nuit, pas une flânerie urbaine.' },
        { heading: 'Que prévoir', content: 'Si vous êtes à Paris pour la fontaine, le Mont est un autre voyage en Normandie. Ne confondez pas les deux en réservant ; cherchez « Mont Saint-Michel » pour l’abbaye.' },
      ],
      faq: [
        { question: 'Est-ce le même lieu ?', answer: 'Non — une fontaine parisienne, et une abbaye normande à environ 360 km.' },
        { question: 'À quelle distance le Mont de Paris ?', answer: 'Environ 360 km ; 3,5–4,5 h train + navette, ou longue route.' },
        { question: 'Peut-on voir les deux en un jour ?', answer: 'La fontaine oui ; le Mont demande sa propre journée ou nuit depuis Paris.' },
      ],
      nav: 'Paris vs Mont',
      related: ['history', 'place-saint-michel', 'visitor-guide', 'how-to-get-there'],
    },
  },
  'walks/paris-fountains': {
    en: {
      title: 'A Paris Fountains Walking Tour – Fontaine Saint-Michel & Beyond',
      description:
        'A fountain-themed route linking Fontaine Saint-Michel with other Paris fountains: the Châtelet and Observatoire fountains, the Palais-Royal and the Tuileries, with timings.',
      h1: 'A Paris fountains walking tour',
      updated: 'Last updated: October 2026',
      lead: 'If you like the Saint-Michel fountain, a fountain trail connects it to other Davioud and Haussmannian fountains across the Left Bank and beyond.',
      sections: [
        { heading: 'The trail', content: 'Start at Fontaine Saint-Michel → north to the Place du Châtelet fountains (also Davioud/Haussmann) → cross to the Right Bank and the Palais-Royal gardens → west to the Tuileries and the Louvre fountains. About 3–4 km, mostly flat.' },
        { heading: 'Why these fountains', content: 'The Châtelet and Observatoire fountains share the same Second Empire programme as Saint-Michel; the Palais-Royal and Tuileries show earlier and later royal fountain design. Together they tell the story of Paris water as spectacle.' },
        { heading: 'Timing and themes', content: 'Allow half a day with stops; the Observatoire fountain is a longer southern extension. Each stop is free to view. Pair the northern part with the Louvre if you want an interior.' },
      ],
      faq: [
        { question: 'Which fountains are on the trail?', answer: 'Saint-Michel, the Châtelet fountains, Palais-Royal, the Tuileries and (further) the Observatoire fountain.' },
        { question: 'How long is the walk?', answer: 'About 3–4 km, half a day with stops; mostly flat.' },
        { question: 'Are they all free?', answer: 'Yes — all the fountains on the trail are free to view from outside.' },
      ],
      nav: 'Paris fountains',
      related: ['gabriel-davioud', 'haussmann-paris', 'walks/half-day-itinerary', 'photos'],
    },
    fr: {
      title: 'Une visite des fontaines de Paris – Fontaine Saint-Michel et au-delà',
      description:
        'Un itinéraire des fontaines liant la Fontaine Saint-Michel à d’autres : Châtelet, Observatoire, Palais-Royal et Tuileries, avec durées.',
      h1: 'Une visite des fontaines de Paris',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'Si la fontaine Saint-Michel vous plaît, un circuit des fontaines la relie à d’autres fontaines de Davioud et d’Haussmann rive gauche et au-delà.',
      sections: [
        { heading: 'Le circuit', content: 'Départ Fontaine Saint-Michel → nord vers les fontaines de la Place du Châtelet (aussi Davioud/Haussmann) → rive droite et jardins du Palais-Royal → ouest vers les Tuileries et le Louvre. Environ 3–4 km, plutôt plat.' },
        { heading: 'Pourquoi ces fontaines', content: 'Les fontaines du Châtelet et de l’Observatoire partagent le même programme du Second Empire que Saint-Michel ; Palais-Royal et Tuileries montrent des fontaines royales antérieures et postérieures. Ensemble, l’histoire de l’eau spectaculaire à Paris.' },
        { heading: 'Durée et thèmes', content: 'Comptez une demi-journée avec arrêts ; l’Observatoire est un prolongement sud. Chaque arrêt est gratuit. Associez la partie nord au Louvre pour un intérieur.' },
      ],
      faq: [
        { question: 'Quelles fontaines sur le circuit ?', answer: 'Saint-Michel, les fontaines du Châtelet, Palais-Royal, les Tuileries et (plus loin) l’Observatoire.' },
        { question: 'Longueur de la marche ?', answer: 'Environ 3–4 km, demi-journée avec arrêts ; plutôt plat.' },
        { question: 'Toutes gratuites ?', answer: 'Oui — toutes les fontaines du circuit se voient gratuitement.' },
      ],
      nav: 'Fontaines de Paris',
      related: ['gabriel-davioud', 'haussmann-paris', 'walks/half-day-itinerary', 'photos'],
    },
  },
  'from-beauvais-airport': {
    en: {
      title: 'From Beauvais Airport to Fontaine Saint-Michel – BVA to Saint-Michel Paris',
      description:
        'Budget-airline travellers: the Beauvais shuttle to Paris, then RER to Saint-Michel–Notre-Dame, with timings and the walk to Place Saint-Michel, 75005 Paris.',
      h1: 'From Beauvais (BVA) to Fontaine Saint-Michel',
      updated: 'Last updated: October 2026',
      lead: 'Paris Beauvais Airport (BVA) is about 85 km north of the city and has no train station, so the standard route is the official airport shuttle bus into Paris, then the RER to Saint-Michel–Notre-Dame beside the square.',
      sections: [
        { heading: 'Take the airport shuttle bus', content: 'Most Ryanair and budget flights use BVA. The official Paris Beauvais Airport Shuttle (Le Bus) runs to Porte Maillot (Pershing terminal) in about 1h15–1h30; book it with your flight and allow buffer time. There is no direct train from the airport.' },
        { heading: 'Porte Maillot to the fountain', content: 'At Porte Maillot take Métro line 1 (direction Château de Vincennes) to Châtelet, then change to a southbound RER B or to RER C to Saint-Michel–Notre-Dame; the fountain is a short walk from the station exit.' },
        { heading: 'Ticket and luggage', content: 'The shuttle needs its own ticket (bought online or at the airport); in Paris you then need a separate Île-de-France Métro/RER ticket (Navigo Easy or a valid pass). Trains have room for suitcases but avoid rush hours.' },
        { heading: 'Taxi and the line 4 closure', content: 'A taxi or ride-hail from BVA costs roughly €150–200 and takes 1h30–2h; it is rarely worth it. Note the Métro line 4 Saint-Michel station is closed for works 14 Sep–19 Dec 2026, so rely on the RER B/C station at the square — see ratp.fr.' },
        { heading: 'Verify before you travel', content: 'Confirm the current shuttle timetable and fares on the official Beauvais airport site and RATP/Île-de-France Mobilités pages; this guide reflects information available in October 2026.' },
      ],
      faq: [
        { question: 'How do I get from Beauvais to Fontaine Saint-Michel?', answer: 'Take the official shuttle bus to Porte Maillot, then Métro line 1 to Châtelet and RER B/C to Saint-Michel–Notre-Dame; the fountain is at the exit.' },
        { question: 'How long does the trip take?', answer: 'About 2 to 2h30 in total, including the shuttle and the Métro/RER connection.' },
        { question: 'Is there a train from Beauvais airport?', answer: 'No — BVA has no train station; the shuttle bus is the standard public link into Paris.' },
        { question: 'Can I use the Métro line 4?', answer: 'The line 4 Saint-Michel station is closed for renovation 14 Sep–19 Dec 2026; use the RER B/C station beside the fountain instead.' },
      ],
      nav: 'From Beauvais airport',
      related: ['from-charles-de-gaulle-airport', 'from-orly-airport', 'how-to-get-there', 'place-saint-michel'],
    },
    fr: {
      title: 'De l’aéroport de Beauvais à la Fontaine Saint-Michel – BVA vers Paris',
      description:
        'Voyageurs low-cost : navette Beauvais vers Paris, puis RER jusqu’à Saint-Michel–Notre-Dame, avec durées et la marche vers la Place Saint-Michel, 75005 Paris.',
      h1: 'De Beauvais (BVA) à la Fontaine Saint-Michel',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'L’aéroport de Paris Beauvais (BVA) est à environ 85 km au nord de Paris et n’a pas de gare : l’itinéraire habituel est la navette officielle jusqu’à Paris, puis le RER jusqu’à Saint-Michel–Notre-Dame, à côté de la place.',
      sections: [
        { heading: 'Prendre la navette aéroport', content: 'La plupart des vols low-cost et Ryanair utilisent BVA. La navette officielle Paris Beauvais (Le Bus) rejoint la Porte Maillot (terminal Pershing) en environ 1h15–1h30 ; réservez-la avec votre vol et prévoyez une marge. Aucun train direct depuis l’aéroport.' },
        { heading: 'Porte Maillot vers la fontaine', content: 'À la Porte Maillot, prenez le métro ligne 1 (direction Château de Vincennes) jusqu’à Châtelet, puis correspondance avec un RER B vers le sud ou le RER C jusqu’à Saint-Michel–Notre-Dame ; la fontaine est à quelques pas de la sortie.' },
        { heading: 'Billet et bagages', content: 'La navette a son propre billet (en ligne ou à l’aéroport) ; à Paris, il faut ensuite un billet Île-de-France séparé (Navigo Easy ou passe valide). Les trains acceptent les valises, mais évitez les heures de pointe.' },
        { heading: 'Taxi et fermeture ligne 4', content: 'Un taxi ou VTC depuis BVA coûte environ 150–200 € pour 1h30–2h ; peu rentable. La station de métro ligne 4 Saint-Michel est fermée pour travaux du 14 sept. au 19 déc. 2026 : privilégiez la gare RER B/C de la place — voir ratp.fr.' },
        { heading: 'Vérifiez avant de partir', content: 'Confirmez horaires et tarifs de la navette sur le site officiel de Beauvais et les pages RATP / Île-de-France Mobilités ; ce guide reflète les infos d’octobre 2026.' },
      ],
      faq: [
        { question: 'Comment aller de Beauvais à la Fontaine Saint-Michel ?', answer: 'Navette officielle jusqu’à la Porte Maillot, métro ligne 1 jusqu’à Châtelet puis RER B/C jusqu’à Saint-Michel–Notre-Dame ; la fontaine est à la sortie.' },
        { question: 'Combien de temps dure le trajet ?', answer: 'Environ 2 à 2h30 au total, navette et correspondance comprises.' },
        { question: 'Y a-t-il un train depuis Beauvais ?', answer: 'Non — BVA n’a pas de gare ; la navette est la liaison publique habituelle vers Paris.' },
        { question: 'Puis-je prendre la ligne 4 ?', answer: 'La station ligne 4 Saint-Michel est fermée du 14 sept. au 19 déc. 2026 ; utilisez la gare RER B/C attenante.' },
      ],
      nav: 'Depuis Beauvais',
      related: ['from-charles-de-gaulle-airport', 'from-orly-airport', 'how-to-get-there', 'place-saint-michel'],
    },
    zh: {
      title: '从博韦机场到圣米歇尔喷泉（BVA → 圣米歇尔）',
      description: '廉价航空旅客指南：博韦机场班车进巴黎，再转 RER 至 Saint-Michel–Notre-Dame，含时长与步行到圣米歇尔广场的路线。',
      h1: '从博韦机场（BVA）到圣米歇尔喷泉',
      updated: '最后更新：2026 年 10 月',
      lead: '巴黎博韦机场（BVA）位于市区以北约 85 公里，没有火车站，因此通常路线是先乘官方机场班车进巴黎，再转 RER 到紧邻广场的 Saint-Michel–Notre-Dame 站。',
      sections: [
        { heading: '搭乘机场班车', content: '多数瑞安航空与廉价航班使用 BVA。官方「巴黎博韦机场班车（Le Bus）」约 1 小时 15 分–1 小时 30 分到达 Porte Maillot（Pershing 终点站）；请与机票一并预订并预留缓冲。机场没有直达列车。' },
        { heading: '从 Porte Maillot 到喷泉', content: '在 Porte Maillot 乘地铁 1 号线（往 Château de Vincennes 方向）到 Châtelet，再换乘南行 RER B 或 RER C 至 Saint-Michel–Notre-Dame；喷泉距出站口仅数步之遥。' },
        { heading: '车票与行李', content: '班车需单独购票（线上或机场购买）；在巴黎还需另购区域车票（Navigo Easy 或有效通票）。列车可放行李，但请避开高峰时段。' },
        { heading: '出租车与 4 号线停运', content: '从 BVA 打车或网约车约 150–200 欧元、耗时 1.5–2 小时，通常并不划算。地铁 4 号线 Saint-Michel 站因改造于 2026 年 9 月 14 日至 12 月 19 日关闭，请改乘广场旁的 RER B/C 站——实时状态见 ratp.fr。' },
        { heading: '出发前核对', content: '请在博韦机场官网与 RATP / Île-de-France Mobilités 页面确认班车时刻与票价；本指南基于 2026 年 10 月的信息。' },
      ],
      faq: [
        { question: '如何从博韦到圣米歇尔喷泉？', answer: '乘官方班车到 Porte Maillot，转地铁 1 号线到 Châtelet，再乘 RER B/C 至 Saint-Michel–Notre-Dame，喷泉就在出站口。' },
        { question: '车程多久？', answer: '含班车与地铁/RER 换乘，总计约 2–2.5 小时。' },
        { question: '博韦机场有火车吗？', answer: '没有——BVA 无火车站，班车是进巴黎的常规公共交通方式。' },
        { question: '可以坐地铁 4 号线吗？', answer: '4 号线 Saint-Michel 站 2026 年 9 月 14 日至 12 月 19 日关闭改造，请改乘广场旁的 RER B/C 站。' },
      ],
      nav: '从博韦机场',
      related: ['from-charles-de-gaulle-airport', 'from-orly-airport', 'how-to-get-there', 'place-saint-michel'],
    },
  },
  'from-the-city-center': {
    en: {
      title: 'From Central Paris & Train Stations to Fontaine Saint-Michel',
      description: 'How to reach Fontaine Saint-Michel from the main Paris stations (Gare du Nord, Gare de Lyon, Montparnasse, Saint-Lazare) and central districts via RER B/C and Métro.',
      h1: 'From central Paris and the train stations',
      updated: 'Last updated: October 2026',
      lead: 'The fountain sits in the heart of the Left Bank, so most central journeys end at the RER B/C station Saint-Michel–Notre-Dame, a few steps from the square — or on a short walk from Île de la Cité.',
      sections: [
        { heading: 'The easiest link: RER B/C', content: 'Saint-Michel–Notre-Dame is served by both RER B and RER C. From almost anywhere central, ride the RER to that station; the fountain is at the exit on Place Saint-Michel.' },
        { heading: 'From Gare du Nord & Gare de l’Est', content: 'Both stations sit on RER B. Board a southbound RER B (towards Saint-Rémy-lès-Chevreuse or Robinson) and ride to Saint-Michel–Notre-Dame — no change needed, about 10–15 minutes.' },
        { heading: 'From Gare de Lyon & Montparnasse', content: 'From Gare de Lyon take RER A to Châtelet–Les Halles, then RER B or C to Saint-Michel–Notre-Dame; from Montparnasse use RER C (nearby stations) or a short Métro trip, since the Métro line 4 Saint-Michel station is closed for works until 19 December 2026.' },
        { heading: 'On foot from the centre', content: 'The fountain is about a 10-minute walk from Châtelet, 15 minutes from Notre-Dame and the Île de la Cité, and 20 minutes along the Seine from the Louvre area — pleasant if you are already strolling the Right Bank.' },
        { heading: 'Line 4 closure and tips', content: 'The Métro line 4 Saint-Michel station is closed 14 Sep–19 Dec 2026; use the RER B/C station or Métro line 10 at Cluny–La Sorbonne instead. Check live status at ratp.fr before travelling.' },
      ],
      faq: [
        { question: 'How do I get from Gare du Nord to the fountain?', answer: 'Take a southbound RER B directly to Saint-Michel–Notre-Dame; the fountain is at the station exit, about 10–15 minutes.' },
        { question: 'Can I walk from central Paris?', answer: 'Yes — it is roughly a 10–20 minute walk from Châtelet, Notre-Dame or the Louvre along the Seine.' },
        { question: 'Which Métro line reaches the square?', answer: 'The line 4 Saint-Michel station is closed until 19 Dec 2026; use RER B/C or Métro line 10 at Cluny–La Sorbonne.' },
        { question: 'Is the fountain central?', answer: 'Yes — it is on Place Saint-Michel in the Latin Quarter, a short RER ride or walk from the main stations and islands.' },
      ],
      nav: 'From the city centre',
      related: ['how-to-get-there', 'from-charles-de-gaulle-airport', 'from-orly-airport', 'place-saint-michel'],
    },
    fr: {
      title: 'Du centre de Paris et des gares à la Fontaine Saint-Michel',
      description: 'Comment rejoindre la Fontaine Saint-Michel depuis les grandes gares parisiennes (Gare du Nord, Gare de Lyon, Montparnasse, Saint-Lazare) et les quartiers centraux par RER B/C et métro.',
      h1: 'Du centre de Paris et des gares',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'La fontaine se trouve en plein cœur de la Rive gauche : la plupart des trajets se terminent à la gare RER B/C Saint-Michel–Notre-Dame, à deux pas de la place, ou après une courte marche depuis l’Île de la Cité.',
      sections: [
        { heading: 'Le plus simple : RER B/C', content: 'Saint-Michel–Notre-Dame est desservie par le RER B et le RER C. Depuis presque tout le centre, prenez le RER jusqu’à cette gare ; la fontaine est à la sortie sur la Place Saint-Michel.' },
        { heading: 'Depuis Gare du Nord et Gare de l’Est', content: 'Ces deux gares sont sur le RER B. Montez dans un RER B vers le sud (Saint-Rémy-lès-Chevreuse ou Robinson) jusqu’à Saint-Michel–Notre-Dame : sans correspondance, environ 10–15 min.' },
        { heading: 'Depuis Gare de Lyon et Montparnasse', content: 'Depuis Gare de Lyon, RER A jusqu’à Châtelet–Les Halles puis RER B ou C vers Saint-Michel–Notre-Dame ; depuis Montparnasse, utilisez le RER C (gares proches) ou un court trajet de métro, car la station ligne 4 Saint-Michel est fermée jusqu’au 19 déc. 2026.' },
        { heading: 'À pied depuis le centre', content: 'La fontaine est à environ 10 min de Châtelet, 15 min de Notre-Dame et de l’Île de la Cité, et 20 min le long de la Seine depuis le Louvre — agréable si vous flânez déjà sur la Rive droite.' },
        { heading: 'Fermeture ligne 4 et conseils', content: 'La station de métro ligne 4 Saint-Michel est fermée du 14 sept. au 19 déc. 2026 ; préférez le RER B/C ou le métro ligne 10 à Cluny–La Sorbonne. Vérifiez sur ratp.fr avant de partir.' },
      ],
      faq: [
        { question: 'Comment aller de la Gare du Nord à la fontaine ?', answer: 'RER B vers le sud jusqu’à Saint-Michel–Notre-Dame ; la fontaine est à la sortie, environ 10–15 min.' },
        { question: 'Peut-on y aller à pied du centre ?', answer: 'Oui — environ 10–20 min de Châtelet, Notre-Dame ou le Louvre le long de la Seine.' },
        { question: 'Quelle ligne de métro rejoint la place ?', answer: 'La station ligne 4 Saint-Michel est fermée jusqu’au 19 déc. 2026 ; utilisez le RER B/C ou le métro ligne 10 à Cluny–La Sorbonne.' },
        { question: 'La fontaine est-elle centrale ?', answer: 'Oui — sur la Place Saint-Michel, dans le Quartier latin, à un court RER ou à pied des grandes gares et des îles.' },
      ],
      nav: 'Depuis le centre',
      related: ['how-to-get-there', 'from-charles-de-gaulle-airport', 'from-orly-airport', 'place-saint-michel'],
    },
    zh: {
      title: '从巴黎市中心与火车站到圣米歇尔喷泉',
      description: '从巴黎主要火车站（北站、里昂站、蒙帕纳斯、圣拉扎尔）及中心城区，经 RER B/C 与地铁前往圣米歇尔喷泉。',
      h1: '从巴黎市中心与火车站',
      updated: '最后更新：2026 年 10 月',
      lead: '喷泉位于左岸核心地带，因此多数市中心行程都终到紧邻广场的 RER B/C 站 Saint-Michel–Notre-Dame，或步行自西岱岛抵达。',
      sections: [
        { heading: '最便捷：RER B/C', content: 'Saint-Michel–Notre-Dame 同时由 RER B 与 RER C 服务。从市区几乎任何地方都可乘 RER 到该站；喷泉就在圣米歇尔广场的站口。' },
        { heading: '从北站与东站', content: '两站都在 RER B 线上。搭乘南行 RER B（往 Saint-Rémy-lès-Chevreuse 或 Robinson 方向）直达 Saint-Michel–Notre-Dame，无需换乘，约 10–15 分钟。' },
        { heading: '从里昂站与蒙帕纳斯', content: '从里昂站乘 RER A 到 Châtelet–Les Halles，再换乘 RER B/C 至 Saint-Michel–Notre-Dame；从蒙帕纳斯可乘邻近的 RER C 或短途地铁，因地铁 4 号线 Saint-Michel 站改造关闭至 2026 年 12 月 19 日。' },
        { heading: '市中心步行可达', content: '喷泉距 Châtelet 约 10 分钟步行、距巴黎圣母院与西岱岛约 15 分钟、沿塞纳河从卢浮宫一带约 20 分钟——若你已在右岸散步，十分惬意。' },
        { heading: '4 号线停运与提示', content: '地铁 4 号线 Saint-Michel 站 2026 年 9 月 14 日至 12 月 19 日关闭；请改乘 RER B/C 站或 Cluny–La Sorbonne 的地铁 10 号线。出行前请查 ratp.fr 实时状态。' },
      ],
      faq: [
        { question: '从北站怎么到喷泉？', answer: '乘南行 RER B 直达 Saint-Michel–Notre-Dame，喷泉就在站口，约 10–15 分钟。' },
        { question: '可以步行从市中心过去吗？', answer: '可以——沿塞纳河从 Châtelet、巴黎圣母院或卢浮宫步行约 10–20 分钟。' },
        { question: '哪条地铁线到广场？', answer: '4 号线 Saint-Michel 站关闭至 2026 年 12 月 19 日；请乘 RER B/C 或 Cluny–La Sorbonne 的地铁 10 号线。' },
        { question: '喷泉在市中心吗？', answer: '是的——位于拉丁区圣米歇尔广场，距主要火车站与岛屿仅短途 RER 或步行。' },
      ],
      nav: '从市中心',
      related: ['how-to-get-there', 'from-charles-de-gaulle-airport', 'from-orly-airport', 'place-saint-michel'],
    },
  },
  'travel-faq': {
    en: {
      title: 'Fontaine Saint-Michel Travel FAQ – Getting There, Tickets, Safety & Best Time',
      description: 'Quick answers for visiting Fontaine Saint-Michel: how to get there, is it free, best time to visit, tickets, nearby facilities and safety tips for the 75005 Paris monument.',
      h1: 'Fontaine Saint-Michel travel FAQ',
      updated: 'Last updated: October 2026',
      lead: 'A compact FAQ covering the practical questions travellers ask before visiting the fountain on Place Saint-Michel — transport, cost, timing, facilities and staying safe.',
      sections: [
        { heading: 'Getting there', content: 'The monument is beside the RER B/C station Saint-Michel–Notre-Dame, in the Latin Quarter. From CDG take the RER B direct; from Orly use Orlyval + RER B; from Beauvais take the shuttle to Porte Maillot then Métro/RER. Note the Métro line 4 Saint-Michel station is closed for works 14 Sep–19 Dec 2026.' },
        { heading: 'Cost and opening', content: 'The fountain is a public monument on a public square: free to view, with no ticket office and no set opening hours — you can visit at any time, day or night.' },
        { heading: 'Tickets and payment', content: 'In Paris use a single Île-de-France ticket, a Navigo Easy card, a Navigo pass or contactless payment for Métro/RER. Buy before boarding; there is no onboard purchase on trains.' },
        { heading: 'Best time to visit', content: 'Mornings and evenings are calmer and best for photos; the square is lit at night. Spring and autumn are pleasant for walking the surrounding Latin Quarter and riverbanks.' },
        { heading: 'Facilities and safety', content: 'There are no toilets at the monument, but public sanisettes and water fountains are a short walk away. Watch for pickpockets on busy RER trains and around the square, and keep bags zipped.' },
      ],
      faq: [
        { question: 'How do I get to Fontaine Saint-Michel?', answer: 'Ride the RER B or C to Saint-Michel–Notre-Dame; the fountain is at the station exit. From CDG the RER B runs direct.' },
        { question: 'Is the fountain free to visit?', answer: 'Yes — it is a public fountain on a public square, free to view at any hour with no ticket.' },
        { question: 'What is the best time to go?', answer: 'Early morning or evening for fewer crowds and good light; the square is lit after dark.' },
        { question: 'Is it safe around the fountain?', answer: 'The area is generally safe, but mind pickpockets on crowded RER trains and on the busy square; keep valuables secure.' },
      ],
      nav: 'Travel FAQ',
      related: ['how-to-get-there', 'visitor-guide', 'accessibility', 'public-toilets-and-facilities'],
    },
    fr: {
      title: 'FAQ voyage Fontaine Saint-Michel – accès, billets, sécurité et meilleure période',
      description: 'Réponses rapides pour visiter la Fontaine Saint-Michel : y aller, gratuité, meilleure période, billets, équipements et conseils de sécurité pour le monument du 75005 Paris.',
      h1: 'FAQ voyage Fontaine Saint-Michel',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'Une FAQ compacte sur les questions pratiques avant de visiter la fontaine de la Place Saint-Michel : transport, prix, horaires, équipements et sécurité.',
      sections: [
        { heading: 'Y aller', content: 'Le monument est à côté de la gare RER B/C Saint-Michel–Notre-Dame, dans le Quartier latin. Depuis CDG, RER B direct ; depuis Orly, Orlyval + RER B ; depuis Beauvais, navette jusqu’à la Porte Maillot puis métro/RER. La station ligne 4 Saint-Michel est fermée du 14 sept. au 19 déc. 2026.' },
        { heading: 'Prix et horaires', content: 'La fontaine est un monument public sur place publique : gratuite à voir, sans billetterie ni horaire fixe — visitable à toute heure, jour et nuit.' },
        { heading: 'Billets et paiement', content: 'À Paris, un billet Île-de-France, une carte Navigo Easy, un passe Navigo ou le sans-contact suffisent pour métro/RER. Achetez avant de monter ; aucun achat à bord.' },
        { heading: 'Meilleure période', content: 'Matinées et soirées sont plus calmes et idéales pour les photos ; la place est éclairée la nuit. Printemps et automne sont agréables pour flâner dans le Quartier latin et le long de la Seine.' },
        { heading: 'Équipements et sécurité', content: 'Pas de toilettes au monument, mais des sanisettes et fontaines publiques sont à quelques pas. Méfiez-vous des pickpockets dans les RER bondés et sur la place ; sacs fermés.' },
      ],
      faq: [
        { question: 'Comment aller à la Fontaine Saint-Michel ?', answer: 'RER B ou C jusqu’à Saint-Michel–Notre-Dame ; la fontaine est à la sortie. Depuis CDG, le RER B est direct.' },
        { question: 'La fontaine est-elle gratuite ?', answer: 'Oui — fontaine publique sur place publique, gratuite à toute heure, sans billet.' },
        { question: 'Quelle est la meilleure période ?', answer: 'Tôt le matin ou en soirée pour moins de monde et une belle lumière ; la place est illuminée la nuit.' },
        { question: 'Est-ce sûr autour de la fontaine ?', answer: 'La zone est globalement sûre, mais attention aux pickpockets dans les RER bondés et sur la place ; sécurisez vos affaires.' },
      ],
      nav: 'FAQ voyage',
      related: ['how-to-get-there', 'visitor-guide', 'accessibility', 'public-toilets-and-facilities'],
    },
    zh: {
      title: '圣米歇尔喷泉旅行 FAQ（交通、门票、安全与最佳时段）',
      description: '参观圣米歇尔喷泉的常见问题：如何到达、是否免费、最佳时段、车票、周边设施与安全提示。',
      h1: '圣米歇尔喷泉旅行 FAQ',
      updated: '最后更新：2026 年 10 月',
      lead: '一份精简的旅行问答，涵盖造访圣米歇尔广场喷泉前的实际问题：交通、费用、时间、设施与安全。',
      sections: [
        { heading: '如何到达', content: '纪念碑紧邻拉丁区的 RER B/C 站 Saint-Michel–Notre-Dame。从 CDG 乘 RER B 直达；从 Orly 乘 Orlyval 转 RER B；从博韦乘班车到 Porte Maillot 再转地铁/RER。地铁 4 号线 Saint-Michel 站因改造于 2026 年 9 月 14 日至 12 月 19 日关闭。' },
        { heading: '费用与开放', content: '喷泉是公共广场上的公共纪念碑：免费观赏，无售票处，也无固定开放时间——任何时间（白天或夜晚）都可参观。' },
        { heading: '车票与支付', content: '在巴黎乘地铁/RER，使用单程区域车票、Navigo Easy 卡、Navigo 通票或银行卡非接触支付均可。请上车前购票；列车上不售车票。' },
        { heading: '最佳时段', content: '清晨与傍晚人少且光线好，适合拍照；广场夜间有灯光。春、秋两季在周边拉丁区与河堤散步最为惬意。' },
        { heading: '设施与安全', content: '纪念碑处无厕所，但步行不远即有公共 sanisette 与饮水喷泉。繁忙的 RER 车厢与广场上注意防盗，包袋拉好。' },
      ],
      faq: [
        { question: '怎么去圣米歇尔喷泉？', answer: '乘 RER B 或 C 到 Saint-Michel–Notre-Dame，喷泉就在站口；从 CDG 乘 RER B 可直达。' },
        { question: '喷泉免费吗？', answer: '免费——它是公共广场上的公共喷泉，随时可免费观赏，无需门票。' },
        { question: '什么时间去最好？', answer: '清晨或傍晚人少、光线好；入夜后广场有照明。' },
        { question: '喷泉周边安全吗？', answer: '整体安全，但在拥挤的 RER 车厢与繁忙广场上注意防盗，贵重物品妥善保管。' },
      ],
      nav: '旅行 FAQ',
      related: ['how-to-get-there', 'visitor-guide', 'accessibility', 'public-toilets-and-facilities'],
    },
  },
  'autumn-events': {
    en: {
      title: 'Autumn Events near Fontaine Saint-Michel – Paris in the Fall',
      description: 'Seasonal events around the fountain from September to November: Saint Michael’s Day, Nuit Blanche, Festival d’Automne, Heritage Days and autumn light for photography.',
      h1: 'Autumn events near Fontaine Saint-Michel',
      updated: 'Last updated: October 2026',
      lead: 'The Latin Quarter and Île de la Cité around the fountain host several autumn happenings — from the patron feast of the fountain to all-night art — that pair well with a visit.',
      sections: [
        { heading: 'Saint Michael’s Day (29 September)', content: 'The fountain is dedicated to the Archangel Michael, whose feast day is 29 September. While there is no ticketed event at the monument, the date is a natural moment to appreciate the Archangel Michael group by Davioud and the name of the square.' },
        { heading: 'Nuit Blanche (October)', content: 'The Paris all-night arts festival usually falls on the first Saturday of October, with installations and performances across the Latin Quarter and Île de la Cité — often within walking distance of the fountain. Check the city programme for the exact date.' },
        { heading: 'Festival d’Automne (Sep–Dec)', content: 'This long-running festival brings concerts, theatre and dance to venues near the centre, including spaces a short walk from the square. Programmes are released in advance on the festival site.' },
        { heading: 'European Heritage Days (September)', content: 'On a weekend in mid-September, normally closed monuments and buildings open to the public; nearby sites such as Sainte-Chapelle and the Panthéon join, making it a good time to combine with the fountain.' },
        { heading: 'Autumn light and the water feature', content: 'Low autumn sun makes the limestone façade glow, and the restored water feature was scheduled to return in autumn 2026 after the conservation works — see the restoration page for the latest confirmed status. Verify all dates on official sites before travelling.' },
      ],
      faq: [
        { question: 'Are there events at the fountain in autumn?', answer: 'The monument itself has no ticketed events, but Saint Michael’s Day (29 Sep), Nuit Blanche and nearby Heritage Days and Festival d’Automne make autumn lively around it.' },
        { question: 'When is Nuit Blanche?', answer: 'Usually the first Saturday of October; confirm the exact date on the Paris events calendar.' },
        { question: 'Is the fountain lit at night?', answer: 'Yes — the square is illuminated after dark; see our at-night page for the evening atmosphere.' },
        { question: 'Is autumn good for photos?', answer: 'Yes — the low autumn sun and the returning water feature make it a strong season for photography.' },
      ],
      nav: 'Autumn events',
      related: ['at-night', 'restoration', 'walks/notre-dame-ile-de-la-cite', 'nearby/sainte-chapelle'],
    },
    fr: {
      title: 'Événements d’automne près de la Fontaine Saint-Michel – Paris en automne',
      description: 'Événements saisonniers autour de la fontaine de septembre à novembre : Saint-Michel, Nuit Blanche, Festival d’automne, Journées du Patrimoine et lumière automnale.',
      h1: 'Événements d’automne près de la Fontaine Saint-Michel',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'Le Quartier latin et l’Île de la Cité autour de la fontaine accueillent plusieurs rendez-vous d’automne — de la fête du saint patron à l’art toute la nuit — qui s’associent bien à une visite.',
      sections: [
        { heading: 'Saint-Michel (29 septembre)', content: 'La fontaine est dédiée à l’archange Michel, dont la fête tombe le 29 septembre. Aucun événement payant au monument, mais la date invite à contempler le groupe de l’archange de Davioud et le nom de la place.' },
        { heading: 'Nuit Blanche (octobre)', content: 'La nuit blanche des arts de Paris a lieu généralement le premier samedi d’octobre, avec installations et performances dans le Quartier latin et l’Île de la Cité, souvent à pied de la fontaine. Vérifiez le programme officiel pour la date.' },
        { heading: 'Festival d’automne (sep–déc)', content: 'Ce festival historique propose concerts, théâtre et danse dans des lieux proches du centre, parfois à quelques pas de la place. Les programmes sont publiés à l’avance.' },
        { heading: 'Journées du Patrimoine (septembre)', content: 'Un week-end mi-septembre, des monuments habituellement fermés ouvrent ; la Sainte-Chapelle et le Panthéon participent, ce qui combine bien avec la fontaine.' },
        { heading: 'Lumière d’automne et jeu d’eau', content: 'Le soleil bas de l’automne fait resplendir la façade de calcaire, et le jeu d’eau restauré était programmé pour l’automne 2026 après les travaux — voyez la page restauration. Vérifiez les dates sur les sites officiels.' },
      ],
      faq: [
        { question: 'Y a-t-il des événements à la fontaine en automne ?', answer: 'Le monument n’a pas d’événement payant, mais la Saint-Michel (29 sep), la Nuit Blanche et les Journées du Patrimoine à proximité rendent l’automne animé.' },
        { question: 'Quand a lieu la Nuit Blanche ?', answer: 'Généralement le premier samedi d’octobre ; confirmez la date au calendrier officiel de Paris.' },
        { question: 'La fontaine est-elle illuminée la nuit ?', answer: 'Oui — la place est éclairée après la tombée de la nuit ; voir notre page « de nuit ».' },
        { question: 'L’automne est-il bon pour les photos ?', answer: 'Oui — le soleil bas et le retour du jeu d’eau en font une belle saison.' },
      ],
      nav: 'Événements d’automne',
      related: ['at-night', 'restoration', 'walks/notre-dame-ile-de-la-cite', 'nearby/sainte-chapelle'],
    },
    zh: {
      title: '圣米歇尔喷泉周边秋季活动（巴黎之秋）',
      description: '9 月至 11 月喷泉周边的季节性活动：圣米歇尔节、白夜、秋季艺术节、欧洲遗产日与秋季摄影光线。',
      h1: '圣米歇尔喷泉周边秋季活动',
      updated: '最后更新：2026 年 10 月',
      lead: '喷泉周边的拉丁区与西岱岛在秋季有多场活动——从喷泉的主保圣人庆日到大夜艺术节——与参观相得益彰。',
      sections: [
        { heading: '圣米歇尔节（9 月 29 日）', content: '喷泉献给大天使米歇尔，其庆日为 9 月 29 日。纪念碑本身不设售票活动，但这一天正适合欣赏达维乌所作大天使米歇尔群雕，以及广场的同名由来。' },
        { heading: '白夜（Nuit Blanche，10 月）', content: '巴黎通宵艺术节通常在 10 月第一个周六举行，拉丁区与西岱岛遍布装置与演出，往往距喷泉步行可达。确切日期请查市政府节目单。' },
        { heading: '秋季艺术节（9–12 月）', content: '这一历史悠久的节庆带来音乐会、戏剧与舞蹈，场馆多位于市中心，部分距广场仅数步之遥；节目单会提前在官网发布。' },
        { heading: '欧洲遗产日（9 月）', content: '9 月中旬的某个周末，平时关闭的纪念建筑向公众开放；邻近的圣礼拜堂与先贤祠均参与，适宜与喷泉一并游览。' },
        { heading: '秋日光线与喷水', content: '低斜的秋日阳光令石灰岩立面熠熠生辉；修复后的喷水装置原计划 2026 年秋季在养护工程后恢复——最新确认状态见「修复」页面。出行前请在官网核实所有日期。' },
      ],
      faq: [
        { question: '秋季喷泉有活动吗？', answer: '纪念碑本身不设售票活动，但圣米歇尔节（9/29）、白夜及周边的遗产日与秋季艺术节让秋季格外热闹。' },
        { question: '白夜是什么时候？', answer: '通常在 10 月第一个周六；确切日期请查巴黎活动日历。' },
        { question: '喷泉夜间有灯光吗？', answer: '有——入夜后广场有照明；夜晚氛围见「夜间」页面。' },
        { question: '秋季适合拍照吗？', answer: '适合——低斜秋阳与恢复喷水的装置，使其成为不错的摄影季节。' },
      ],
      nav: '秋季活动',
      related: ['at-night', 'restoration', 'walks/notre-dame-ile-de-la-cite', 'nearby/sainte-chapelle'],
    },
  },
  'spring-events': {
    en: {
      title: 'Spring Events near Fontaine Saint-Michel – Paris in the Spring',
      description: 'Seasonal events around the fountain from March to June: Fête de la Musique, Nuit des Musées, the Paris Marathon, garden blooms and long riverbank evenings.',
      h1: 'Spring events near Fontaine Saint-Michel',
      updated: 'Last updated: October 2026',
      lead: 'As days lengthen, the Latin Quarter and Seine around the fountain fill with free music, late-opening museums and blossom — a lively season to visit Place Saint-Michel.',
      sections: [
        { heading: 'Fête de la Musique (21 June)', content: 'On the summer solstice, free concerts spill across the Latin Quarter and Île de la Cité; the streets around the fountain often host live music late into the evening. It is free and open to all.' },
        { heading: 'Nuit des Musées (May)', content: 'On one Saturday in May, museums across Paris — including ones a short walk from the square such as the Cluny Museum — stay open late into the night with free entry.' },
        { heading: 'Paris Marathon (April)', content: 'The marathon course runs along the Seine and past the islands; nearby quays and bridges can be busy or partially closed on race morning, so plan your arrival via the RER B/C.' },
        { heading: 'Spring in the gardens', content: 'The Jardin du Luxembourg, about 15–20 minutes away, is at its best in spring with chestnut blooms and deckchairs; a pleasant add-on to a fountain visit.' },
        { heading: 'Longer days by the river', content: 'With extended daylight, the Seine bookstalls and riverbank walks are at their easiest; combine the fountain with a sunset stroll. Verify all dates on official event sites before travelling.' },
      ],
      faq: [
        { question: 'Are there events at the fountain in spring?', answer: 'The monument has no ticketed events, but Fête de la Musique, Nuit des Musées and the Paris Marathon make spring lively nearby.' },
        { question: 'When is Fête de la Musique?', answer: 'Every 21 June, with free music across the city; the Latin Quarter around the fountain joins in.' },
        { question: 'Are museums open late in spring?', answer: 'Yes — Nuit des Musées in May opens many museums, including the Cluny Museum near the square, into the night.' },
        { question: 'Is spring good for walking?', answer: 'Yes — longer daylight, garden blooms and easy riverbank strolls make it a great season around the fountain.' },
      ],
      nav: 'Spring events',
      related: ['at-night', 'nearby/musee-de-cluny', 'walks/seine-bookstalls', 'nearby/luxembourg-gardens'],
    },
    fr: {
      title: 'Événements de printemps près de la Fontaine Saint-Michel – Paris au printemps',
      description: 'Événements saisonniers autour de la fontaine de mars à juin : Fête de la Musique, Nuit des Musées, Marathon de Paris, floraisons et longues soirées près de la Seine.',
      h1: 'Événements de printemps près de la Fontaine Saint-Michel',
      updated: 'Dernière mise à jour : octobre 2026',
      lead: 'Avec les jours qui rallongent, le Quartier latin et la Seine autour de la fontaine se remplissent de musique gratuite, de musées ouverts tard et de fleurs — une saison animée pour la Place Saint-Michel.',
      sections: [
        { heading: 'Fête de la Musique (21 juin)', content: 'Au solstice d’été, des concerts gratuits envahissent le Quartier latin et l’Île de la Cité ; les rues autour de la fontaine accueillent souvent de la musique live en soirée. C’est gratuit et ouvert à tous.' },
        { heading: 'Nuit des Musées (mai)', content: 'Un samedi de mai, les musées de Paris — dont le Musée de Cluny, à quelques pas de la place — restent ouverts tard, entrée gratuite.' },
        { heading: 'Marathon de Paris (avril)', content: 'Le parcours du marathon longe la Seine et les îles ; les quais et ponts proches peuvent être chargés ou fermés le matin de la course, prévoyez l’arrivée par le RER B/C.' },
        { heading: 'Le printemps dans les jardins', content: 'Le Jardin du Luxembourg, à environ 15–20 min, est superbe au printemps avec ses marronniers et ses chaises ; une belle extension à la visite de la fontaine.' },
        { heading: 'Journées plus longues près du fleuve', content: 'Avec la lumière prolongée, les bouquinistes et la promenade des quais sont aisés ; associez la fontaine à une flânerie au coucher du soleil. Vérifiez les dates sur les sites officiels.' },
      ],
      faq: [
        { question: 'Y a-t-il des événements à la fontaine au printemps ?', answer: 'Le monument n’a pas d’événement payant, mais la Fête de la Musique, la Nuit des Musées et le Marathon de Paris animent le printemps alentour.' },
        { question: 'Quand a lieu la Fête de la Musique ?', answer: 'Chaque 21 juin, musique gratuite dans tout Paris ; le Quartier latin autour de la fontaine participe.' },
        { question: 'Les musées ouvrent-ils tard au printemps ?', answer: 'Oui — la Nuit des Musées en mai ouvre tard de nombreux musées, dont Cluny près de la place.' },
        { question: 'Le printemps est-il bon pour marcher ?', answer: 'Oui — journées plus longues, floraisons et quais faciles en font une belle saison autour de la fontaine.' },
      ],
      nav: 'Événements de printemps',
      related: ['at-night', 'nearby/musee-de-cluny', 'walks/seine-bookstalls', 'nearby/luxembourg-gardens'],
    },
    zh: {
      title: '圣米歇尔喷泉周边春季活动（巴黎之春）',
      description: '3 月至 6 月喷泉周边的季节性活动：音乐节、博物馆之夜、巴黎马拉松、花园花事与塞纳河漫长傍晚。',
      h1: '圣米歇尔喷泉周边春季活动',
      updated: '最后更新：2026 年 10 月',
      lead: '白昼渐长，喷泉周边的拉丁区与塞纳河充满免费音乐、深夜开放的博物馆与鲜花——是造访圣米歇尔广场的热闹季节。',
      sections: [
        { heading: '音乐节（6 月 21 日）', content: '夏至之日，免费音乐会遍布拉丁区与西岱岛；喷泉周边街道常常深夜仍有现场音乐。活动免费、面向所有人。' },
        { heading: '博物馆之夜（5 月）', content: '5 月某个周六，巴黎众多博物馆——包括距广场不远的克吕尼博物馆——延长开放至深夜并免费入场。' },
        { heading: '巴黎马拉松（4 月）', content: '马拉松路线沿塞纳河并经岛屿；比赛当日清晨邻近河堤与桥梁可能拥挤或局部封闭，建议经 RER B/C 抵达。' },
        { heading: '花园之春', content: '约 15–20 分钟外的卢森堡花园春季最美，栗树开花、长椅遍布，是喷泉之行的惬意延伸。' },
        { heading: '河畔长日', content: '白昼延长，塞纳河书摊与河堤漫步最为轻松；可将喷泉与落日散步结合。出行前请在官网核实所有日期。' },
      ],
      faq: [
        { question: '春季喷泉有活动吗？', answer: '纪念碑本身不设售票活动，但音乐节、博物馆之夜与巴黎马拉松让周边春季热闹非凡。' },
        { question: '音乐节是什么时候？', answer: '每年 6 月 21 日，全城免费音乐；喷泉周边的拉丁区也会参与。' },
        { question: '春季博物馆会深夜开放吗？', answer: '会——5 月的博物馆之夜让众多博物馆（含邻近的克吕尼博物馆）开放至深夜。' },
        { question: '春季适合散步吗？', answer: '适合——白昼更长、花园花开、河堤易行，是喷泉周边不错的季节。' },
      ],
      nav: '春季活动',
      related: ['at-night', 'nearby/musee-de-cluny', 'walks/seine-bookstalls', 'nearby/luxembourg-gardens'],
    },
  },
};

export const TOPICS: Record<string, TopicLocales> = { ...LEGACY_TOPICS, ...NEW_TOPICS };

export function getTopic(slug: string): TopicLocales | undefined {
  const base = TOPICS[slug];
  const nearby = NEARBY_TOPICS[slug];
  if (!nearby) return base;
  return { ...nearby, ...base, en: base?.en ?? nearby.en, fr: base?.fr ?? nearby.fr, zh: base?.zh ?? nearby.zh };
}

export function topicLocales(slug: string): Array<'en' | 'fr' | 'zh'> {
  if (slug === 'nearby' || NEARBY_PLACES.some((place) => `nearby/${place.slug}` === slug)) return ['en', 'fr', 'zh'];
  const entry = TOPICS[slug];
  const locales: Array<'en' | 'fr' | 'zh'> = ['en', 'fr'];
  if (entry?.zh) locales.push('zh');
  return locales;
}

export function topicPath(slug: string): string {
  return `/${slug}`;
}
