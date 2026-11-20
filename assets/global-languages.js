(() => {
 'use strict';
 const keys=['About','Products','Solutions','Selection tools','Partnership','Get in touch','Day','Night','Show energy flow','Hide energy flow','Pause motion','Resume motion','Pause Risey','Resume Risey','ENERGY STORAGE','SOLAR & INVERTERS','SOLAR LIGHTING','View product','Close'];
 const rows={
  fr:['À propos','Produits','Solutions','Outils de sélection','Partenariat','Nous contacter','Jour','Nuit','Afficher les flux','Masquer les flux','Pause animation','Reprendre animation','Pause Risey','Reprendre Risey','STOCKAGE D’ÉNERGIE','SOLAIRE ET ONDULEURS','ÉCLAIRAGE SOLAIRE','Voir le produit','Fermer'],
  es:['Empresa','Productos','Soluciones','Selección','Colaboración','Contáctenos','Día','Noche','Mostrar flujo','Ocultar flujo','Pausar animación','Reanudar animación','Pausar Risey','Reanudar Risey','ALMACENAMIENTO','SOLAR E INVERSORES','ILUMINACIÓN SOLAR','Ver producto','Cerrar'],
  'pt-BR':['Sobre nós','Produtos','Soluções','Seleção','Parcerias','Fale conosco','Dia','Noite','Mostrar fluxo','Ocultar fluxo','Pausar animação','Retomar animação','Pausar Risey','Retomar Risey','ARMAZENAMENTO','SOLAR E INVERSORES','ILUMINAÇÃO SOLAR','Ver produto','Fechar'],
  de:['Über uns','Produkte','Lösungen','Auswahlhilfen','Partnerschaft','Kontakt','Tag','Nacht','Energiefluss zeigen','Energiefluss ausblenden','Animation pausieren','Animation fortsetzen','Risey pausieren','Risey fortsetzen','ENERGIESPEICHER','SOLAR UND WECHSELRICHTER','SOLARBELEUCHTUNG','Produkt ansehen','Schließen'],
  it:['Chi siamo','Prodotti','Soluzioni','Selezione','Collaborazioni','Contattaci','Giorno','Notte','Mostra flussi','Nascondi flussi','Pausa animazione','Riprendi animazione','Pausa Risey','Riprendi Risey','ACCUMULO ENERGIA','SOLARE E INVERTER','ILLUMINAZIONE SOLARE','Vedi prodotto','Chiudi'],
  nl:['Over ons','Producten','Oplossingen','Selectiehulp','Samenwerking','Contact','Dag','Nacht','Energiestroom tonen','Energiestroom verbergen','Animatie pauzeren','Animatie hervatten','Risey pauzeren','Risey hervatten','ENERGIEOPSLAG','ZONNEPANELEN EN OMVORMERS','ZONNEVERLICHTING','Product bekijken','Sluiten'],
  ru:['О компании','Продукция','Решения','Подбор','Партнёрство','Связаться','День','Ночь','Показать потоки','Скрыть потоки','Пауза анимации','Продолжить анимацию','Пауза Risey','Продолжить Risey','НАКОПЛЕНИЕ ЭНЕРГИИ','СОЛНЕЧНЫЕ СИСТЕМЫ И ИНВЕРТОРЫ','СОЛНЕЧНОЕ ОСВЕЩЕНИЕ','Открыть продукт','Закрыть'],
  pl:['O nas','Produkty','Rozwiązania','Dobór','Współpraca','Kontakt','Dzień','Noc','Pokaż przepływ','Ukryj przepływ','Wstrzymaj animację','Wznów animację','Wstrzymaj Risey','Wznów Risey','MAGAZYNOWANIE ENERGII','FOTOWOLTAIKA I FALOWNIKI','OŚWIETLENIE SOLARNE','Zobacz produkt','Zamknij'],
  tr:['Hakkımızda','Ürünler','Çözümler','Seçim araçları','İş ortaklığı','İletişim','Gündüz','Gece','Enerji akışını göster','Enerji akışını gizle','Animasyonu duraklat','Animasyonu sürdür','Risey duraklat','Risey sürdür','ENERJİ DEPOLAMA','GÜNEŞ VE İNVERTÖRLER','GÜNEŞ AYDINLATMA','Ürünü görüntüle','Kapat'],
  ar:['من نحن','المنتجات','الحلول','أدوات الاختيار','الشراكة','تواصل معنا','نهار','ليل','عرض تدفق الطاقة','إخفاء تدفق الطاقة','إيقاف الحركة','استئناف الحركة','إيقاف Risey','استئناف Risey','تخزين الطاقة','الطاقة الشمسية والمحولات','الإضاءة الشمسية','عرض المنتج','إغلاق'],
  fa:['درباره ما','محصولات','راهکارها','ابزار انتخاب','همکاری','تماس با ما','روز','شب','نمایش جریان انرژی','پنهان کردن جریان','توقف حرکت','ادامه حرکت','توقف Risey','ادامه Risey','ذخیره انرژی','خورشیدی و اینورتر','روشنایی خورشیدی','نمایش محصول','بستن'],
  he:['אודות','מוצרים','פתרונות','כלי בחירה','שותפות','יצירת קשר','יום','לילה','הצגת זרימת אנרגיה','הסתרת זרימת אנרגיה','השהיית הנפשה','המשך הנפשה','השהיית Risey','המשך Risey','אגירת אנרגיה','סולארי וממירים','תאורה סולארית','הצגת מוצר','סגירה'],
  hi:['हमारे बारे में','उत्पाद','समाधान','चयन उपकरण','साझेदारी','संपर्क करें','दिन','रात','ऊर्जा प्रवाह दिखाएँ','ऊर्जा प्रवाह छिपाएँ','एनीमेशन रोकें','एनीमेशन चलाएँ','Risey रोकें','Risey चलाएँ','ऊर्जा भंडारण','सौर और इन्वर्टर','सौर प्रकाश','उत्पाद देखें','बंद करें'],
  bn:['আমাদের সম্পর্কে','পণ্য','সমাধান','নির্বাচন সরঞ্জাম','অংশীদারিত্ব','যোগাযোগ','দিন','রাত','শক্তির প্রবাহ দেখান','শক্তির প্রবাহ লুকান','অ্যানিমেশন থামান','অ্যানিমেশন চালান','Risey থামান','Risey চালান','শক্তি সঞ্চয়','সৌর ও ইনভার্টার','সৌর আলো','পণ্য দেখুন','বন্ধ করুন'],
  ur:['ہمارے بارے میں','مصنوعات','حل','انتخاب کے اوزار','شراکت داری','رابطہ کریں','دن','رات','توانائی کا بہاؤ دکھائیں','توانائی کا بہاؤ چھپائیں','حرکت روکیں','حرکت جاری کریں','Risey روکیں','Risey جاری کریں','توانائی ذخیرہ','شمسی اور انورٹر','شمسی روشنی','مصنوعات دیکھیں','بند کریں'],
  id:['Tentang kami','Produk','Solusi','Alat pemilihan','Kemitraan','Hubungi kami','Siang','Malam','Tampilkan aliran energi','Sembunyikan aliran','Jeda animasi','Lanjutkan animasi','Jeda Risey','Lanjutkan Risey','PENYIMPANAN ENERGI','SURYA DAN INVERTER','PENERANGAN SURYA','Lihat produk','Tutup'],
  ms:['Tentang kami','Produk','Penyelesaian','Alat pemilihan','Kerjasama','Hubungi kami','Siang','Malam','Papar aliran tenaga','Sembunyi aliran','Jeda animasi','Sambung animasi','Jeda Risey','Sambung Risey','PENYIMPANAN TENAGA','SURIA DAN INVERTER','PENCAHAYAAN SURIA','Lihat produk','Tutup'],
  vi:['Về chúng tôi','Sản phẩm','Giải pháp','Công cụ lựa chọn','Hợp tác','Liên hệ','Ngày','Đêm','Hiện dòng năng lượng','Ẩn dòng năng lượng','Tạm dừng chuyển động','Tiếp tục chuyển động','Tạm dừng Risey','Tiếp tục Risey','LƯU TRỮ NĂNG LƯỢNG','ĐIỆN MẶT TRỜI VÀ BIẾN TẦN','CHIẾU SÁNG MẶT TRỜI','Xem sản phẩm','Đóng'],
  th:['เกี่ยวกับเรา','ผลิตภัณฑ์','โซลูชัน','เครื่องมือเลือก','พันธมิตร','ติดต่อเรา','กลางวัน','กลางคืน','แสดงการไหลพลังงาน','ซ่อนการไหลพลังงาน','หยุดการเคลื่อนไหว','เล่นการเคลื่อนไหว','หยุด Risey','เล่น Risey','ระบบกักเก็บพลังงาน','โซลาร์และอินเวอร์เตอร์','ไฟพลังงานแสงอาทิตย์','ดูผลิตภัณฑ์','ปิด'],
  ja:['会社情報','製品','ソリューション','選定ツール','パートナー','お問い合わせ','昼','夜','電力の流れを表示','電力の流れを非表示','動作を一時停止','動作を再開','Riseyを一時停止','Riseyを再開','蓄電システム','太陽光・インバーター','ソーラー照明','製品を見る','閉じる'],
  ko:['회사 소개','제품','솔루션','선정 도구','파트너십','문의하기','낮','밤','에너지 흐름 표시','에너지 흐름 숨기기','동작 일시정지','동작 재개','Risey 일시정지','Risey 재개','에너지 저장','태양광 및 인버터','태양광 조명','제품 보기','닫기'],
  sw:['Kuhusu sisi','Bidhaa','Suluhisho','Zana za kuchagua','Ushirikiano','Wasiliana nasi','Mchana','Usiku','Onyesha mtiririko','Ficha mtiririko','Sitisha mwendo','Endeleza mwendo','Sitisha Risey','Endeleza Risey','HIFADHI YA NISHATI','JUA NA INVETA','TAA ZA JUA','Tazama bidhaa','Funga'],
  ha:['Game da mu','Kayayyaki','Mafita','Kayan zaɓi','Haɗin gwiwa','Tuntuɓe mu','Rana','Dare','Nuna kwararar makamashi','Ɓoye kwararar makamashi','Dakatar da motsi','Ci gaba da motsi','Dakatar da Risey','Ci gaba da Risey','AJIYAR MAKAMASHI','HASKEN RANA DA INVERTER','FITILUN HASKEN RANA','Duba samfur','Rufe'],
  zu:['Mayelana nathi','Imikhiqizo','Izixazululo','Amathuluzi okukhetha','Ubambiswano','Xhumana nathi','Emini','Ebusuku','Bonisa ukugeleza','Fihla ukugeleza','Misa ukunyakaza','Qhubeka nokunyakaza','Misa uRisey','Qhubeka noRisey','UKUGCINWA KWAMANDLA','ILANGA NAMA-INVERTER','UKUKHANYISA NGELANGA','Buka umkhiqizo','Vala'],
  af:['Oor ons','Produkte','Oplossings','Keusehulpmiddels','Vennootskap','Kontak ons','Dag','Nag','Wys energievloei','Verberg energievloei','Onderbreek beweging','Hervat beweging','Onderbreek Risey','Hervat Risey','ENERGIEBERGING','SONKRAG EN OMSETTERS','SONBELIGTING','Bekyk produk','Sluit'],
  mi:['Mō mātou','Ngā hua','Ngā otinga','Ngā taputapu kōwhiri','Mahi tahi','Whakapā mai','Ao','Pō','Whakaatu rere pūngao','Huna rere pūngao','Whakatā nekehanga','Haere tonu','Whakatā Risey','Haere tonu Risey','ROKIROKI PŪNGAO','PŪNGAO RĀ ME NGĀ INVERTER','RAMA PŪNGAO RĀ','Tirohia te hua','Katia'],
  fil:['Tungkol sa amin','Mga produkto','Mga solusyon','Mga tool sa pagpili','Pakikipagtulungan','Makipag-ugnayan','Araw','Gabi','Ipakita ang daloy','Itago ang daloy','I-pause ang galaw','Ipagpatuloy ang galaw','I-pause si Risey','Ipagpatuloy si Risey','IMBAKAN NG ENERHIYA','SOLAR AT MGA INVERTER','SOLAR NA ILAW','Tingnan ang produkto','Isara'],
  'zh-Hant':['關於我們','產品','解決方案','選型工具','合作夥伴','聯絡我們','白晝','夜晚','顯示能量流','隱藏能量流','暫停動效','恢復動效','暫停 Risey','恢復 Risey','儲能系統','光伏與逆變器','太陽能照明','查看產品','關閉'],
 };
 const names={en:'English',zh:'简体中文','zh-Hant':'繁體中文',es:'Español','pt-BR':'Português (Brasil)',fr:'Français',de:'Deutsch',it:'Italiano',nl:'Nederlands',ru:'Русский',pl:'Polski',tr:'Türkçe',ar:'العربية',fa:'فارسی',he:'עברית',hi:'हिन्दी',bn:'বাংলা',ur:'اردو',id:'Bahasa Indonesia',ms:'Bahasa Melayu',vi:'Tiếng Việt',th:'ไทย',ja:'日本語',ko:'한국어',sw:'Kiswahili',ha:'Hausa',zu:'isiZulu',af:'Afrikaans',mi:'Te reo Māori',fil:'Filipino'};
 const groups=[['150',['en','fr','de','it','nl','pl','ru','tr']],['030',['zh','zh-Hant','ja','ko']],['034',['hi','bn','ur']],['035',['id','ms','vi','th','fil']],['145',['ar','fa','he']],['002',['en','fr','pt-BR','ar','sw','ha','zu','af']],['019',['en','es','pt-BR','fr']],['009',['en','fr','mi']]];
 const nativePaths={en:'/',zh:'/home-zh.html',es:'/home-es.html',ru:'/home-ru.html'};
 const query=new URLSearchParams(location.search).get('lang');
 const defaultLang=document.documentElement.lang.startsWith('zh')?'zh':document.documentElement.lang.split('-')[0];
 const language=Object.hasOwn(names,query)?query:Object.hasOwn(names,defaultLang)?defaultLang:'en';
 const home=(lang=language)=>nativePaths[lang]||'/?lang='+encodeURIComponent(lang);
 window.ANTHRISE_I18N={language,home,languages:Object.keys(names)};
 const dictionary=Object.fromEntries(keys.map((key,i)=>[key,rows[language]?.[i]||key]));
 const reverse=new Map(keys.map(k=>[k.toLowerCase(),k]));
 for(const row of Object.values(rows))row.forEach((value,i)=>reverse.set(value.toLowerCase(),keys[i]));
 const extras=language==='fr'?{'Home Energy':'Énergie résidentielle','Commercial & Industrial':'Commerce et industrie','Remote & Off-Grid':'Sites isolés et hors réseau','Clean Energy Campus':'Campus d’énergie propre','Overview':'Vue d’ensemble'}:{};
 function mount(){
  const header=document.querySelector('header');if(!header)return;
  let picker=header.querySelector('.site-language-picker');
  if(!picker){picker=document.createElement('details');picker.className='site-language-picker';(header.querySelector('.nav-tools,.header-actions')||header.querySelector('.header-inner')||header).append(picker);}
  const svg=window.ANTHRISE_SHELL_DATA?.globe||'';
  picker.innerHTML='<summary>'+svg+'<span class="site-language-code">'+({zh:'中','zh-Hant':'繁','pt-BR':'PT'}[language]||language.toUpperCase())+'</span><span aria-hidden="true">⌄</span></summary>';
  const panel=document.createElement('div');panel.className='global-language-panel';
  const heading=document.createElement('strong');heading.textContent=({zh:'选择区域与语言',fr:'Région et langue',es:'Región e idioma',ar:'المنطقة واللغة',ja:'地域と言語'}[language]||'Region & language')+' · '+names[language];panel.append(heading);
  const regionNames=new Intl.DisplayNames([language],{type:'region'});
  const regionText={en:['Europe','East Asia','South Asia','Southeast Asia','Middle East','Africa','Americas','Oceania'],zh:['欧洲','东亚','南亚','东南亚','中东','非洲','美洲','大洋洲'],fr:['Europe','Asie de l’Est','Asie du Sud','Asie du Sud-Est','Moyen-Orient','Afrique','Amériques','Océanie'],es:['Europa','Asia Oriental','Asia del Sur','Sudeste Asiático','Oriente Medio','África','Américas','Oceanía'],ar:['أوروبا','شرق آسيا','جنوب آسيا','جنوب شرق آسيا','الشرق الأوسط','أفريقيا','الأمريكتان','أوقيانوسيا'],ja:['ヨーロッパ','東アジア','南アジア','東南アジア','中東','アフリカ','南北アメリカ','オセアニア']};
  const grid=document.createElement('div');grid.className='global-language-grid';
  for(const [i,[region,codes]] of groups.entries()){const section=document.createElement('section'),title=document.createElement('h3');title.textContent=(regionText[language]||regionText.en)[i];section.append(title);for(const code of codes){const a=document.createElement('a');a.href=home(code);a.lang=code;a.textContent=names[code];a.dataset.language=code;if(code===language)a.setAttribute('aria-current','page');section.append(a);}grid.append(section);}panel.append(grid);picker.append(panel);
  picker.querySelector('summary').setAttribute('aria-label','Language · '+names[language]);
  document.body.classList.add('has-global-language-picker');
  document.addEventListener('click',e=>{if(!picker.contains(e.target))picker.open=false});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&picker.open){picker.open=false;picker.querySelector('summary').focus();}});
  if(!nativePaths[language]){
   document.documentElement.dataset.siteLocale=language;
   document.documentElement.lang=language;
   document.documentElement.dir=['ar','fa','he','ur'].includes(language)?'rtl':'ltr';
  }
  const translate=(root=document.body)=>{
   if(language==='en'||language==='zh')return;
   const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(node){return node.parentElement?.closest('script,style,textarea,.global-language-panel,.site-language-picker summary')?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}});
   const edits=[];let node;
   while((node=walker.nextNode())){const raw=node.nodeValue.trim(),key=reverse.get(raw.toLowerCase()),value=extras[raw]||(key?dictionary[key]:null);if(value&&value!==raw)edits.push([node,node.nodeValue.replace(raw,value)]);}
   edits.forEach(([node,text])=>{node.nodeValue=text});
   // Unsupported document translations explicitly retain the original verified English specifications.
   if(!nativePaths[language]){
    const detail=document.querySelector('.stage-detail-panel');
    if(detail&&!detail.querySelector('.technical-language-note')){const note=document.createElement('p');note.className='technical-language-note';note.lang='en';note.textContent='Technical specifications and product documents are currently provided in English.';detail.prepend(note);}
    root.querySelectorAll?.('a[href*="products/"]').forEach(a=>{const url=new URL(a.href,location.href);if(url.origin!==location.origin||!url.pathname.endsWith('.html'))return;if(!/-(en|zh|es|ru)\.html$/.test(url.pathname))url.pathname=url.pathname.replace(/-[a-z]{2,3}\.html$/,'-en.html');url.searchParams.set('lang',language);const target=url.pathname+url.search+url.hash;if(a.getAttribute('href')!==target)a.setAttribute('href',target);});
   }
  };
  let queued=false;const pending=new Set();
  new MutationObserver(records=>{for(const record of records){const root=record.target.nodeType===Node.TEXT_NODE?record.target.parentElement:record.target;if(root?.isConnected)pending.add(root);}if(queued)return;queued=true;queueMicrotask(()=>{queued=false;for(const root of pending)if(root.isConnected)translate(root);pending.clear();})}).observe(document.body,{subtree:true,childList:true,characterData:true});
  translate();
  window.dispatchEvent(new Event('anthrise:language-ready'));
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount,{once:true});else mount();
})();
