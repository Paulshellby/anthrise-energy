/* Application environments are conceptual, not installation references. */
(function () {
  'use strict';
  const scenes = {
    balcony:['Balcony solar self-consumption','阳台光伏自用','Autoconsumo solar en balcón','Балконное солнечное энергоснабжение'],
    home: ['Residential energy','住宅能源','Energía residencial','Энергоснабжение дома'],
    business: ['Shops & small businesses','门店与小型商业','Tiendas y comercios','Магазины и малый бизнес'],
    industrial: ['Factories & warehouses','工厂与仓库','Fábricas y almacenes','Заводы и склады'],
    camp: ['Camping & mobile work','露营与移动作业','Camping y trabajo móvil','Кемпинг и выездная работа'],
    road: ['Access roads & public paths','通行道路与步道','Vías de acceso y senderos','Подъездные дороги и дорожки'],
    garden: ['Gardens & landscaped paths','庭院与景观步道','Jardines y senderos','Сады и парковые дорожки'],
    patio: ['Courtyards & outdoor hospitality','庭院与户外休闲','Patios y hostelería exterior','Дворы и открытые террасы'],
    workshop: ['Workshops & indoor warehouses','车间与室内仓储','Talleres y almacenes interiores','Мастерские и крытые склады'],
    parking:['Parking & site entrances','停车场与园区出入口','Aparcamientos y accesos','Парковки и въезды'],
    rural:['Rural homes & remote sites','乡村住宅与偏远站点','Viviendas rurales y lugares remotos','Сельские дома и удалённые объекты'],
    terrace:['Residential terraces','住宅露台','Terrazas residenciales','Террасы жилых домов'],
    pool:['Poolside leisure spaces','泳池与休闲空间','Piscinas y zonas de ocio','Бассейны и зоны отдыха'],
    indoor:['Indoor living & study','室内起居与学习空间','Interiores y zonas de estudio','Жилые помещения и учебные зоны'],
    greenhouse:['Plant nurseries & landscaped grounds','苗圃与园林空间','Viveros y zonas ajardinadas','Питомники растений и озеленённые территории'],
    worksite:['Mobile maintenance & field work','移动维护与现场作业','Mantenimiento móvil y trabajo de campo','Выездное обслуживание и полевые работы']
  };
  function applicationKeys(p) {
    if(p.id==='balconyBess')return ['balcony','terrace','home'];
    if (p.id==='series_horizon'||p.id==='hybrid50'||p.id==='series_beacon') return ['industrial','business','workshop'];
    if (p.id==='origAEADC'||p.id==='series_seed12'||p.id==='series_seed24') return ['camp','worksite','rural'];
    if (p.category==='portable'||/origAER(60|100|200)|origAESK1/.test(p.id)) return ['camp','worksite','rural'];
    if(p.category!=='lighting') return ['home','business','rural'];
    if (p.id==='jcLight32') return ['workshop','industrial','business'];
    if (['jcLight09','jcLight27','jcLight33','jcLight25'].includes(p.id)) return ['road','parking','industrial'];
    if(p.id==='jcLight31') return ['industrial','parking','workshop'];
    if(p.id==='jcLight29') return ['pool','terrace','patio'];
    if(p.id==='jcLight21'||p.id==='jcLight22') return ['terrace','patio','garden'];
    if(['jcLight15','jcLight16','jcLight17','jcLight18','jcLight30'].includes(p.id))return ['indoor','rural','worksite'];
    if(p.family==='garden'||p.id==='gardenLighting'||p.id==='tieredLandscape'||p.id==='jcLight26') return ['garden','patio','greenhouse'];
    if(p.family==='decorative') return ['patio','garden','terrace'];
    if(p.family==='offgrid') return ['camp','worksite','rural'];
    return ['business','garden','parking'];
  }
  function guide(p) {return p.category==='lighting'?'lighting':p.category==='portable'?'portable':p.category==='inverter'?'inverter':p.category==='solar'?'solar':'storage';}
  window.ANTHRISE_RESOURCES={legalName:'深圳市昂旭启元科技有限公司',scenes,applicationKeys,guide};
})();
