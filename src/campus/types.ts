export type CampusZoneId = 'overview' | 'home' | 'commercial' | 'offgrid';
export type SceneTime = 'day' | 'night';
export type LangCode = 'en' | 'zh';

export interface LocalizedText {
  en: string;
  zh: string;
}

export interface ZoneMeta {
  id: CampusZoneId;
  num: string;
  progress: number;
  title: LocalizedText;
  subtitle: LocalizedText;
  noteDay: LocalizedText;
  noteNight: LocalizedText;
}

export interface HotspotDef {
  id: string;
  zone: CampusZoneId;
  /** If defined, clicking this overview marker navigates camera to targetZone */
  targetZone?: CampusZoneId;
  worldPos: [number, number, number];
  kind: 'zone' | 'product' | 'info' | 'light';
  kicker: LocalizedText;
  title: LocalizedText;
  usage: LocalizedText;
  skuId?: string;
  modelCode?: string;
  img?: string;
  topic?: 'home' | 'business' | 'outdoor' | 'lighting';
  hrefEn?: string;
  hrefZh?: string;
}

export const ZONE_META: Record<CampusZoneId, ZoneMeta> = {
  overview: {
    id: 'overview',
    num: '00',
    progress: 0,
    title: {
      en: 'Clean Energy Campus',
      zh: '立体清洁能源园区',
    },
    subtitle: {
      en: 'Scroll or choose a zone to explore residential, commercial, and off-grid energy architectures in one landscape.',
      zh: '向下滚动或选择区域，连续探索家庭、工商业与偏远离网能源系统。',
    },
    noteDay: {
      en: 'Day: Solar generation & storage charging',
      zh: '白昼：光伏采集发电与储能蓄能',
    },
    noteNight: {
      en: 'Night: Stored battery supply & autonomous solar lighting',
      zh: '夜晚：储能放电供电与独立太阳能照明',
    },
  },
  home: {
    id: 'home',
    num: '01',
    progress: 0.34,
    title: {
      en: 'HOME ENERGY',
      zh: '家庭能源',
    },
    subtitle: {
      en: 'Rooftop PV, hybrid inverter, 16 kWh battery, utility meter & cutaway everyday appliances.',
      zh: '屋顶光伏、混合逆变器、16 kWh 家用储能、电表配电箱与室内家电负载。',
    },
    noteDay: {
      en: 'Day: Roof PV feeds hybrid inverter, home loads & 16 kWh battery',
      zh: '白昼：屋顶光伏经混合逆变器供电家居负载并为 16 kWh 电池蓄能',
    },
    noteNight: {
      en: 'Night: 16 kWh battery discharges via inverter with grid backup & yard solar light on',
      zh: '夜晚：16 kWh 储能经逆变器供能，电表配电提供网格支撑，庭院太阳能灯亮起',
    },
  },
  commercial: {
    id: 'commercial',
    num: '02',
    progress: 0.67,
    title: {
      en: 'COMMERCIAL & INDUSTRIAL',
      zh: '工商业能源',
    },
    subtitle: {
      en: 'Concept scenario: rooftop PV, HORIZON ESS cabinets, 50 kW conversion, switchgear & road lighting.',
      zh: '概念应用示意：大跨度光伏屋面、HORIZON 储能柜、50 kW 变流并网与园区路灯。',
    },
    noteDay: {
      en: 'Day: Facility PV array supplies operations & charges HORIZON ESS cabinets',
      zh: '白昼：工商业屋面光伏支撑建筑与空调负载并为 HORIZON 储能柜蓄能',
    },
    noteNight: {
      en: 'Night: HORIZON ESS & switchgear support facility loads while road solar lights illuminate drive',
      zh: '夜晚：HORIZON 储能与配电支持建筑负载，园区一体化太阳能路灯自动亮灯',
    },
  },
  offgrid: {
    id: 'offgrid',
    num: '03',
    progress: 1.0,
    title: {
      en: 'REMOTE & OFF-GRID',
      zh: '偏远与离网应用',
    },
    subtitle: {
      en: 'Disconnected from utility grid: standalone PV rack, SEED & Volt 1000 field power, and split street light.',
      zh: '独立于公用电网之外：独立光伏支架、SEED 储能与 Volt 1000 移动作业供电、分体式太阳能路灯。',
    },
    noteDay: {
      en: 'Day: Independent solar rack charges SEED storage & portable workstation power',
      zh: '白昼：离网光伏独立为 SEED 电池与移动工作台供电蓄能（无电网接入）',
    },
    noteNight: {
      en: 'Night: SEED & Volt 1000 power field tools & camp light; split street light runs independently',
      zh: '夜晚：SEED 与 Volt 1000 支撑移动仪器与营地灯，分体式太阳能路灯独立照明',
    },
  },
};

export const CAMPUS_HOTSPOTS: HotspotDef[] = [
  {id:'brand-office',zone:'overview',kind:'info',worldPos:[-1,10.6,-12.8],kicker:{en:'Brand architecture concept',zh:'品牌建筑概念'},title:{en:'Anthrise Technology · Concept Office',zh:'Anthrise Technology · 概念办公楼'},usage:{en:'A conceptual branded office in the energy landscape. Actual company contact details remain on the website.',zh:'能源场景中的品牌概念办公建筑，实际公司地址及联系信息以网站联系方式为准。'}},
  // Overview zone anchors
  {
    id: 'ov-home',
    zone: 'overview',
    targetZone: 'home',
    kind: 'zone',
    worldPos: [-11.5, 6.2, 2.0],
    kicker: { en: '01 · Residential', zh: '01 · 家庭场景' },
    title: { en: 'Home Energy', zh: '家庭能源' },
    usage: {
      en: 'Click to inspect rooftop solar, hybrid inverter, 16 kWh battery & cutaway appliances.',
      zh: '点击进入查看屋顶光伏、混合逆变器、16 kWh 电池与室内家电。',
    },
  },
  {
    id: 'ov-commercial',
    zone: 'overview',
    targetZone: 'commercial',
    kind: 'zone',
    worldPos: [18.8, 7.6, -7.2],
    kicker: { en: '02 · Commercial & Industrial', zh: '02 · 工商业场景' },
    title: { en: 'Commercial & Industrial', zh: '工商业能源' },
    usage: {
      en: 'Click to inspect C&I solar array, HORIZON ESS cabinets, switchgear & road lights.',
      zh: '点击进入查看工商业光伏屋面、HORIZON 储能柜、配电与道路照明。',
    },
  },
  {
    id: 'ov-offgrid',
    zone: 'overview',
    targetZone: 'offgrid',
    kind: 'zone',
    worldPos: [20.5, 5.4, 15.2],
    kicker: { en: '03 · Remote & Off-Grid', zh: '03 · 离网场景' },
    title: { en: 'Remote & Off-Grid', zh: '偏远与离网应用' },
    usage: {
      en: 'Click to explore standalone solar power beyond utility lines.',
      zh: '点击探索脱离市电网的独立光伏与便携储能系统。',
    },
  },

  // Zone 01 · HOME ENERGY
  {
    id: 'home-solar',
    zone: 'home',
    kind: 'product',
    worldPos: [-10.8, 5.2, 1.8],
    skuId: 'origAER400',
    modelCode: 'AE-R400',
    img: '/assets/images/stage-solar.png',
    topic: 'home',
    hrefEn: '/products/origAER400-en.html',
    hrefZh: '/products/origAER400-zh.html',
    kicker: { en: 'Photovoltaic modules · AE-R400', zh: '光伏组件 · AE-R400' },
    title: { en: 'Rooftop Solar Panels (400W)', zh: '屋顶光伏板（400W）' },
    usage: {
      en: 'Generates DC electricity during daylight and routes via PV isolation to the wall-mounted hybrid inverter.',
      zh: '日间产生清洁直流电，经光伏直流保护通道输送至建筑外墙混合逆变器。',
    },
  },
  {
    id: 'home-inverter',
    zone: 'home',
    kind: 'product',
    worldPos: [-15.8, 3.18, 4.72],
    skuId: 'hybrid6',
    modelCode: 'AE-I-HYBRID-6K',
    img: '/assets/images/products/hybrid6.png',
    topic: 'home',
    hrefEn: '/products/hybrid6-en.html',
    hrefZh: '/products/hybrid6-zh.html',
    kicker: { en: 'Power conversion · AE-I-HYBRID-6K', zh: '混合逆变器 · AE-I-HYBRID-6K' },
    title: { en: '6 kW LV Hybrid Inverter', zh: '6 kW 低压混合逆变器' },
    usage: {
      en: '6 kW / 40–60 V / up to 135 A battery current. The 51.2 V battery catalogue lists 200 A discharge. CAN/RS-485 protocol profile and final system approval require confirmation.',
      zh: '6 kW / 40–60 V / 电池充放电上限 135 A；51.2 V 电池目录标注放电 200 A。CAN/RS-485 协议配置和最终系统匹配仍需确认。',
    },
  },
  {
    id: 'home-battery',
    zone: 'home',
    kind: 'product',
    worldPos: [-14.25, 1.4, 4.95],
    skuId: 'ess16',
    modelCode: 'AE-E-DAWN-16',
    img: '/assets/images/stage-battery.png',
    topic: 'home',
    hrefEn: '/products/ess16-en.html',
    hrefZh: '/products/ess16-zh.html',
    kicker: { en: 'Home storage · AE-E-DAWN-16', zh: '户用储能 · AE-E-DAWN-16' },
    title: { en: '16 kWh Home Storage', zh: '16 kWh 储能电池' },
    usage: {
      en: '51.2V LiFePO4 residential unit storing surplus daytime solar energy through the hybrid inverter for evening household loads.',
      zh: '51.2V 磷酸铁锂户用储能单元，由混合逆变器协调日间蓄能与夜间住宅供电。',
    },
  },
  {
    id: 'home-grid',
    zone: 'home',
    kind: 'info',
    worldPos: [-19.8, 4.9, 1.05],
    topic: 'home',
    kicker: { en: 'AC interface · Utility & breaker', zh: '并网与配电接口' },
    title: { en: 'Grid Meter & AC Panel', zh: '电网接入、电表与配电箱' },
    usage: {
      en: 'Safely connects utility service metering and inverter AC output before feeding indoor household circuits.',
      zh: '将公用电网计量端口与混合逆变器交流输出安全汇入建筑内部配电回路。',
    },
  },
  {
    id: 'home-loads',
    zone: 'home',
    kind: 'info',
    worldPos: [-8.4, 2.05, 2.35],
    topic: 'home',
    kicker: { en: 'Indoor AC circuits · Cutaway', zh: '室内交流负载 · 剖视展示' },
    title: { en: 'Residential Appliances', zh: '室内日常电器' },
    usage: {
      en: 'Kitchen refrigeration, split climate control, lighting, and living room electronics supplied via the AC distribution panel.',
      zh: '包括空调、冰箱、室内照明与影音办公设备，均由户内交流配电回路规范供电。',
    },
  },
  {
    id: 'home-light',
    zone: 'home',
    kind: 'light',
    worldPos: [-4.4, 1.85, 6.4],
    skuId: 'jcLight28',
    modelCode: 'AE-L-BLOOM-01',
    img: '/assets/images/products/jcLight28.png',
    topic: 'lighting',
    hrefEn: '/products/jcLight28-en.html',
    hrefZh: '/products/jcLight28-zh.html',
    kicker: { en: 'Independent lighting · AE-L-BLOOM-01', zh: '独立庭院灯 · AE-L-BLOOM-01' },
    title: { en: 'Solar Courtyard Column Light', zh: '太阳能庭院柱灯' },
    usage: {
      en: 'Self-contained top PV panel and internal LiFePO4 battery — charges by day and illuminates garden walkways at night off-grid.',
      zh: '内置顶部光伏板与磷酸铁锂电池，白天自行充电、夜晚自动点亮庭院路径，不接入户内电网。',
    },
  },

  // Zone 02 · COMMERCIAL & INDUSTRIAL
  {
    id: 'ci-solar',
    zone: 'commercial',
    kind: 'product',
    worldPos: [19.8, 6.2, -7.8],
    skuId: 'origAER400',
    modelCode: 'AE-R400',
    img: '/assets/images/stage-solar.png',
    topic: 'business',
    hrefEn: '/products/origAER400-en.html',
    hrefZh: '/products/origAER400-zh.html',
    kicker: { en: 'Commercial array · AE-R400', zh: '屋面光伏阵列 · AE-R400' },
    title: { en: 'Commercial Rooftop PV Array', zh: '工商业屋面光伏' },
    usage: {
      en: 'Conceptual large-span photovoltaic roof generation feeding high-power conversion equipment by day.',
      zh: '概念屋面光伏系统，日间为工商业园区提供直流发电并接入高功率变流设备。',
    },
  },
  {
    id: 'ci-horizon',
    zone: 'commercial',
    kind: 'product',
    worldPos: [12.95, 2.25, -3.25],
    skuId: 'series_horizon',
    modelCode: 'AE-E-HORIZON',
    img: '/assets/images/products/series_horizon.png',
    topic: 'business',
    hrefEn: '/products/series_horizon-en.html',
    hrefZh: '/products/series_horizon-zh.html',
    kicker: { en: 'Concept BESS · AE-E-HORIZON', zh: '工商业储能柜 · AE-E-HORIZON' },
    title: { en: 'Commercial & Industrial ESS Cabinet', zh: '工商业储能柜' },
    usage: {
      en: 'Planned modular HV DC battery cabinets (e.g. 50 kW / 112 kWh pairing concept) coordinated externally via CAN/RS-485.',
      zh: '模块化高压直流储能柜方案（如 50 kW / 112 kWh 概念搭配），经外部变流与配电柜按项目工况配置。',
    },
  },
  {
    id: 'ci-inverter',
    zone: 'commercial',
    kind: 'product',
    worldPos: [15.6, 2.15, -3.25],
    skuId: 'hybrid50',
    modelCode: 'AE-I-HYBRID-50K',
    img: '/assets/images/products/hybrid50.png',
    topic: 'business',
    hrefEn: '/products/hybrid50-en.html',
    hrefZh: '/products/hybrid50-zh.html',
    kicker: { en: 'Three-phase HV · AE-I-HYBRID-50K', zh: '三相高压变流 · AE-I-HYBRID-50K' },
    title: { en: '50 kW Hybrid Inverter', zh: '50 kW 混网逆变器' },
    usage: {
      en: 'Three-phase power conversion bridging rooftop PV arrays, HORIZON ESS battery cabinets, and AC facility switchgear.',
      zh: '三相高压混网逆变核心，连接屋面光伏、HORIZON 储能柜与工商业交流配电母线。',
    },
  },
  {
    id: 'ci-loads',
    zone: 'commercial',
    kind: 'info',
    worldPos: [23.8, 3.1, -5.2],
    topic: 'business',
    kicker: { en: 'Switchgear & facility loads', zh: '配电母线与园区负载' },
    title: { en: 'Switchgear, HVAC & Office Loads', zh: '配电柜、暖通与办公负载' },
    usage: {
      en: 'Main AC distribution bay feeding rooftop cooling units, production bay lighting, and workspace circuits. Sizing requires site engineering review.',
      zh: '交流配电总柜统一调配屋面制冷、车间照明与办公负荷，具体配比按项目测算定制。',
    },
  },
  {
    id: 'ci-light',
    zone: 'commercial',
    kind: 'light',
    worldPos: [17.8, 4.3, 1.55],
    skuId: 'jcLight09',
    modelCode: 'AE-L-GUARD-05',
    img: '/assets/images/products/jcLight09.png',
    topic: 'lighting',
    hrefEn: '/products/jcLight09-en.html',
    hrefZh: '/products/jcLight09-zh.html',
    kicker: { en: 'Road luminaire · AE-L-GUARD-05', zh: '道路照明 · AE-L-GUARD-05' },
    title: { en: 'All-in-One Solar Street Light', zh: '一体化太阳能路灯' },
    usage: {
      en: 'Autonomous roadway luminaire with integrated PV and LiFePO4 battery illuminating commercial drives without trenching AC cable.',
      zh: '集成光伏板与磷酸铁锂电池的一体化路灯，无需开挖电缆即可为园区道路提供夜间照明。',
    },
  },

  // Zone 03 · REMOTE & OFF-GRID
  {
    id: 'off-solar',
    zone: 'offgrid',
    kind: 'product',
    worldPos: [15.8, 3.05, 14.5],
    skuId: 'origAESK1',
    modelCode: 'AE-SK1',
    img: '/assets/images/products/origAESK1.png',
    topic: 'outdoor',
    hrefEn: '/products/origAESK1-en.html',
    hrefZh: '/products/origAESK1-zh.html',
    kicker: { en: 'Off-grid generation · AE-SK1', zh: '离网光伏采集 · AE-SK1' },
    title: { en: 'Ground Solar Array & Kit', zh: '独立光伏发电单元' },
    usage: {
      en: 'Stand-alone tilted ground PV rack deployed where no utility poles reach, charging field storage by day.',
      zh: '部署于无市电覆盖区域的地面独立光伏阵列，日间直接为离网储能单元补电。',
    },
  },
  {
    id: 'off-seed',
    zone: 'offgrid',
    kind: 'product',
    worldPos: [18.9, 2.2, 16.85],
    skuId: 'series_seed24',
    modelCode: 'AE-E-SEED',
    img: '/assets/images/products/series_seed24.png',
    topic: 'outdoor',
    hrefEn: '/products/series_seed24-en.html',
    hrefZh: '/products/series_seed24-zh.html',
    kicker: { en: 'Deep-cycle storage · AE-E-SEED', zh: '深循环储能 · AE-E-SEED' },
    title: { en: '25.6V Deep Cycle LiFePO₄ Battery', zh: '25.6V 深循环磷酸铁锂电池' },
    usage: {
      en: '2.56 kWh deep-cycle battery storage serving remote cabins, monitoring gear, and off-grid field stations.',
      zh: '2.56 kWh 深循环磷酸铁锂电池，适用于偏远驻点、监测站与离网基础负荷储能。',
    },
  },
  {
    id: 'off-volt',
    zone: 'offgrid',
    kind: 'product',
    worldPos: [21.55, 2.15, 17.25],
    skuId: 'origAEV1000',
    modelCode: 'AE-E-VOLT-1000',
    img: '/assets/images/products/origAEV1000.png',
    topic: 'outdoor',
    hrefEn: '/products/origAEV1000-en.html',
    hrefZh: '/products/origAEV1000-zh.html',
    kicker: { en: 'Portable station · AE-E-VOLT-1000', zh: '便携电源 · AE-E-VOLT-1000' },
    title: { en: 'Volt 1000 Portable Power Station', zh: 'Volt 1000 户外便携电源' },
    usage: {
      en: '768 Wh / 1000 W LiFePO4 portable unit supplying modest mobile loads: field laptops, camp lighting, radios & portable coolers.',
      zh: '768 Wh / 1000 W 磷酸铁锂便携电源，专为移动工作站笔记本、通信设备、营地照明与车载小冷箱等轻量负载供电。',
    },
  },
  {
    id: 'off-light',
    zone: 'offgrid',
    kind: 'light',
    worldPos: [26.8, 5.15, 16.5],
    skuId: 'jcLight27',
    modelCode: 'AE-L-GUARD-06',
    img: '/assets/images/stage-light.png',
    topic: 'lighting',
    hrefEn: '/products/jcLight27-en.html',
    hrefZh: '/products/jcLight27-zh.html',
    kicker: { en: 'Off-grid street light · AE-L-GUARD-06', zh: '独立路灯 · AE-L-GUARD-06' },
    title: { en: 'Split Solar Street Light', zh: '分体式太阳能路灯' },
    usage: {
      en: 'IP66 weather-sealed luminaire with dedicated mast PV panel and integrated LiFePO4 battery — zero trenching or grid connection.',
      zh: 'IP66 户外防护等级，自带独立光伏板与磷酸铁锂电池包，无需拉线或电网接入即可夜间照明。',
    },
  },
];

export const CAMPUS_UI_COPY = {
  en: {
    zones: {
      overview: 'Overview',
      home: '01 Home Energy',
      commercial: '02 Commercial',
      offgrid: '03 Off-Grid',
    },
    dayBtn: 'Day',
    nightBtn: 'Night',
    flowShow: 'Show energy flow',
    flowHide: 'Hide energy flow',
    pauseMotion: 'Pause motion',
    resumeMotion: 'Resume motion',
    pauseFollow: 'Pause Risey',
    resumeFollow: 'Resume Risey',
    productsBtn: 'Products',
    discussBtn: 'Discuss your project',
    legendPv: 'PV DC',
    legendBat: 'Battery DC',
    legendAc: 'AC Supply',
    legendGrid: 'Grid Tie',
    legendLight: 'Autonomous Solar Light',
    legendNote: 'Conceptual application diagram · Zones 01–02 grid-interfaced, Zone 03 isolated off-grid',
    viewSpecs: 'View specifications',
    inquireSetup: 'Discuss this setup',
    visitZone: 'Explore this zone',
    dragHint: 'Scroll to tour · Drag to orbit',
    fallbackTitle: '3D preview unavailable in this browser context',
    fallbackDesc: 'Use the section links below to browse Anthrise residential, commercial, and off-grid products.',
  },
  zh: {
    zones: {
      overview: '园区全景',
      home: '01 家庭能源',
      commercial: '02 工商业能源',
      offgrid: '03 偏远离网',
    },
    dayBtn: '白昼',
    nightBtn: '夜晚',
    flowShow: '查看能源流向',
    flowHide: '隐藏能源流向',
    pauseMotion: '暂停动效',
    resumeMotion: '恢复动效',
    pauseFollow: '暂停 Risey',
    resumeFollow: '恢复 Risey',
    productsBtn: '产品系列',
    discussBtn: '咨询您的项目',
    legendPv: '光伏直流',
    legendBat: '储能直流',
    legendAc: '交流供电',
    legendGrid: '并网线路',
    legendLight: '独立太阳能灯具',
    legendNote: '概念运行示意 · 区域 01–02 含市电接入，区域 03 完全离网运行',
    viewSpecs: '查看产品参数',
    inquireSetup: '咨询该方案',
    visitZone: '进入该区域',
    dragHint: '下滑漫游园区 · 拖拽微调视角',
    fallbackTitle: '当前环境暂不支持实时 3D 渲染',
    fallbackDesc: '您可通过下方入口浏览 Anthrise 家庭、工商业及偏远离网产品与方案。',
  },
} as const;
