(()=>{
const root=document.querySelector('.showroom');if(!root)return;
const copy={en:['Explore the collection','Energy for every setting.','Select a product to explore its details.'],zh:['产品展厅','让能源融入每一种生活。','点击产品旁的圆点，查看型号与产品详情。'],es:['Nuestra colección','Energía para cada entorno.','Seleccione un producto para ver sus detalles.'],ru:['Наша коллекция','Энергия для любых задач.','Выберите продукт, чтобы узнать подробности.']};
function render(){const lang=document.documentElement.lang.split('-')[0],l=copy[lang]?lang:'en',c=copy[l];root.querySelector('p').textContent=c[0];root.querySelector('h2').textContent=c[1];root.querySelector('.showroom-heading>span').textContent=c[2];root.querySelectorAll('[data-product]').forEach(a=>{a.href='products/'+a.dataset.product+'-'+l+'.html';});}
render();new MutationObserver(render).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
})();