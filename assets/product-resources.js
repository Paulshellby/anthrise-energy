/* Application environments are conceptual, not installation references. */
(function () {
  'use strict';
  const scenes = {
    home: ['Residential energy','住宅能源','Energía residencial','Энергоснабжение дома'],
    business: ['Shops & small businesses','门店与小型商业','Tiendas y comercios','Магазины и малый бизнес'],
    industrial: ['Factories & warehouses','工厂与仓库','Fábricas y almacenes','Заводы и склады'],
    camp: ['Camping & mobile work','露营与移动作业','Camping y trabajo móvil','Кемпинг и выездная работа'],
    road: ['Access roads & public paths','通行道路与步道','Vías de acceso y senderos','Подъездные дороги и дорожки'],
    garden: ['Gardens & landscaped paths','庭院与景观步道','Jardines y senderos','Сады и парковые дорожки'],
    patio: ['Courtyards & outdoor hospitality','庭院与户外休闲','Patios y hostelería exterior','Дворы и открытые террасы'],
    workshop: ['Workshops & indoor warehouses','车间与室内仓储','Talleres y almacenes interiores','Мастерские и крытые склады']
  };
  function applicationKeys(p) {
    if (p.id==='series_horizon'||p.id==='hybrid50'||p.id==='series_beacon') return ['industrial','business'];
    if (p.id==='origAEADC'||p.id==='series_seed12'||p.id==='series_seed24') return ['camp'];
    if (p.category==='portable'||/origAER(60|100|200)|origAESK1/.test(p.id)) return ['camp','home'];
    if(p.category!=='lighting') return ['home','business'];
    if (p.id==='jcLight32') return ['workshop'];
    if (['jcLight09','jcLight27','jcLight33','jcLight25'].includes(p.id)) return ['road'];
    if(p.id==='jcLight31') return ['industrial','workshop'];
    if(p.family==='garden'||p.id==='gardenLighting'||p.id==='tieredLandscape'||p.id==='jcLight26') return ['garden','patio'];
    if(p.family==='decorative') return ['patio','garden'];
    if(p.family==='offgrid') return ['camp','home'];
    return ['business','garden'];
  }
  function guide(p) {return p.category==='lighting'?'lighting':p.category==='portable'?'portable':p.category==='inverter'?'inverter':p.category==='solar'?'solar':'storage';}
  window.ANTHRISE_RESOURCES={legalName:'深圳市昂旭启元科技有限公司',scenes,applicationKeys,guide};
})();
