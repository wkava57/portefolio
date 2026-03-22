/* ============================================================
   PORTFOLIO Wabutrune Prosper — script.js
   Traduction : MyMemory API (gratuit, sans clé, sans inscription)
   + traductions manuelles en fallback pour les 7 langues
   ── Toutes les données sont dans ce fichier, faciles à modifier
============================================================ */

/* ============================================================
   PARAMÈTRES GÉNÉRAUX
============================================================ */
const FULL_NAME  = "Wabutrune Prosper";
//const FULL_TITLE = "Conducteur de bus · Super poids lourd · Développeur web en apprentissage";
const TITLES = {
  fr: "Conducteur de bus · Super poids lourd · Développeur web en apprentissage",
  en: "Bus driver · Super heavy goods vehicle · Web developer in training",
  de: "Busfahrer · Schwertransport · Webentwickler in Ausbildung",
  es: "Conductor de autobús · Transporte pesado · Desarrollador web en formación",
  zh: "公交司机 · 重型运输 · 网页开发学员",
  ar: "سائق حافلة · نقل ثقيل · مطور ويب في التدريب",
  ru: "Водитель автобуса · Тяжёлый транспорт · Веб-разработчик на обучении"
};
const FULL_TITLE = TITLES.fr;
const QR_WHATSAPP = "https://wa.me/33782226199";
const QR_LINKEDIN = "https://www.linkedin.com/in/wabutrune-prosper"; // ← remplacez par votre vrai lien
const DEPART      = { name:"Paris", lat:48.86, lng:2.35 };
const FLIGHT_TIME = 2200;

/* ============================================================
   TRADUCTIONS MANUELLES — 7 langues
   Utilisées immédiatement (pas de délai réseau)
   MyMemory traduit en complément les textes non couverts
============================================================ */
const I18N = {
  fr:{nav_home:"Accueil",nav_skills:"Compétences",nav_career:"Parcours",nav_vehicles:"Matériel",nav_travels:"Voyages",nav_contact:"Contact",hero_desc:"Originaire de Nouvelle-Calédonie, 23 ans dans l'armée française. Une carrière forgée dans la discipline, la polyvalence et le dépassement de soi.",hero_badge:"En cours d'apprentissage — Développement web",skills_key:"Compétences clés",sk_bus:"Transport urbain & bus",sk_hgv:"Transport PL / SPL",sk_mil:"Management militaire",ongoing:"en cours",recent_career:"Parcours récent",job1_date:"2026 → aujourd'hui",job1_role:"Chauffeur de bus",job2_role:"Transport urbain",job3_role:"Formation Développeur Web",learning_web:"Apprentissage web",learning_desc:"Formation continue — ce portfolio est lui-même un projet d'apprentissage.",contact_lbl:"Contact",lang_val:"Français B2 · Anglais A2",btn_cv:"Télécharger le CV",btn_contact:"Me contacter",comp_page_title:"Compétences & formations",cat_pax:"🚌 Transport de personnes",cat_freight:"🚛 Transport de marchandise",cat_mil:"🪖 Militaire & management",cat_web:"💻 Développement web",sk_urban:"Transport urbain",sk_school:"Car scolaire",sk_artic:"Bus articulé",sk_supply:"Supply Chain",sk_fork:"Chariot élévateur 6T",sk_armor:"Véhicules blindés",sk_mgmt:"Management d'équipe",sk_log:"Logistique opérationnelle",lvl_expert:"Expert",lvl_ok:"Confirmé",permits_title:"Permis & certifications",lic_d:"Bus & transport en commun",lic_ce:"Super poids lourd",lic_c:"Poids lourd",lic_fco:"FIMO Personnel & Marchandise",lic_cl1:"SPL Canadien (XTL)",lic_car:"Cariste 6 tonnes",lic_vbl:"Pilote blindé léger",lic_mon:"Aide moniteur VL/PL/SPL",career_title:"Parcours professionnel",fil_mil:"Militaire",fil_mil_sub:"Armée de Terre · 23 ans",fil_freight:"Transport marchandise",fil_freight_sub:"PL, supply chain, collecte",fil_pax:"Transport personnes",fil_pax_sub:"Bus, car, urbain, scolaire",select_cat:"Sélectionne une catégorie",mat_intro:"Des blindés militaires aux bus articulés —",mat_select:"sélectionne une catégorie.",mat_mil:"Militaire",mat_mil_desc:"VAB, VBL, TRM 2000/4000, GBC 180, bâché, conteneur, plateau.",mat_mil_count:"8 véhicules",mat_civ:"Civil",mat_civ_desc:"Bus urbains, car scolaire, articulé et camion américain.",mat_civ_count:"4 véhicules",btn_back:"← Matériel",travel_title:"Destinations & Projections",leg_home:"Pays natal",leg_travel:"Voyages",leg_mil:"Projections militaires",leg_depart:"Paris CDG",globe_hint:"✈ Clique sur une destination depuis Paris",personal_travels:"Voyages personnels",mil_proj:"Projections militaires",contact_title:"Me contacter",contact_desc:"Disponible pour toute opportunité — transport ou développement web.",lbl_email:"Email",lbl_phone:"Téléphone",lbl_loc:"Localisation",lbl_lang:"Langues",qr_wa:"Contact international",qr_li:"Profil professionnel",form_title:"Envoyer un message",form_name:"Nom",form_msg:"Message",btn_send:"Envoyer le message",msg_sent:"Message envoyé ! Je vous répondrai dans les plus brefs délais.",ph_name:"Votre nom",ph_msg:"Votre message..."},

  en:{nav_home:"Home",nav_skills:"Skills",nav_career:"Career",nav_vehicles:"Equipment",nav_travels:"Travels",nav_contact:"Contact",hero_desc:"Originally from New Caledonia, 23 years in the French army. A career built on discipline, versatility and self-surpassing.",hero_badge:"Currently learning — Web Development",skills_key:"Key Skills",sk_bus:"Urban & bus transport",sk_hgv:"HGV / SPV Transport",sk_mil:"Military management",ongoing:"in progress",recent_career:"Recent career",job1_date:"2026 → today",job1_role:"Bus driver",job2_role:"Urban transport",job3_role:"Web Developer Training",learning_web:"Web learning",learning_desc:"Ongoing training — this portfolio is itself a learning project.",contact_lbl:"Contact",lang_val:"French B2 · English A2",btn_cv:"Download CV",btn_contact:"Contact me",comp_page_title:"Skills & Training",cat_pax:"🚌 Passenger transport",cat_freight:"🚛 Freight transport",cat_mil:"🪖 Military & management",cat_web:"💻 Web development",sk_urban:"Urban transport",sk_school:"School bus",sk_artic:"Articulated bus",sk_supply:"Supply Chain",sk_fork:"6T Forklift",sk_armor:"Armored vehicles",sk_mgmt:"Team management",sk_log:"Operational logistics",lvl_expert:"Expert",lvl_ok:"Proficient",permits_title:"Licences & certifications",lic_d:"Bus & public transport",lic_ce:"Super heavy goods vehicle",lic_c:"Heavy goods vehicle",lic_fco:"FIMO Passenger & Freight",lic_cl1:"Canadian SPV (XTL)",lic_car:"6-ton forklift",lic_vbl:"Light armored vehicle pilot",lic_mon:"Driving instructor VL/HGV",career_title:"Professional career",fil_mil:"Military",fil_mil_sub:"French Army · 23 years",fil_freight:"Freight transport",fil_freight_sub:"HGV, supply chain, collection",fil_pax:"Passenger transport",fil_pax_sub:"Bus, coach, urban, school",select_cat:"Select a category",mat_intro:"From military armored vehicles to articulated buses —",mat_select:"select a category.",mat_mil:"Military",mat_mil_desc:"VAB, VBL, TRM 2000/4000, GBC 180, tarpaulin, container, flatbed.",mat_mil_count:"8 vehicles",mat_civ:"Civil",mat_civ_desc:"City buses, school bus, articulated and American truck.",mat_civ_count:"4 vehicles",btn_back:"← Equipment",travel_title:"Destinations & Deployments",leg_home:"Home country",leg_travel:"Travels",leg_mil:"Military deployments",leg_depart:"Paris CDG",globe_hint:"✈ Click a destination to launch animation from Paris",personal_travels:"Personal travels",mil_proj:"Military deployments",contact_title:"Contact me",contact_desc:"Available for any professional opportunity — transport or web development.",lbl_email:"Email",lbl_phone:"Phone",lbl_loc:"Location",lbl_lang:"Languages",qr_wa:"International contact",qr_li:"Professional profile",form_title:"Send a message",form_name:"Name",form_msg:"Message",btn_send:"Send message",msg_sent:"Message sent! I will reply as soon as possible.",ph_name:"Your name",ph_msg:"Your message..."},

  de:{nav_home:"Startseite",nav_skills:"Kompetenzen",nav_career:"Werdegang",nav_vehicles:"Fahrzeuge",nav_travels:"Reisen",nav_contact:"Kontakt",hero_desc:"Aus Neukaledonien stammend, 23 Jahre in der französischen Armee. Eine Karriere geprägt von Disziplin, Vielseitigkeit und Selbstüberwindung.",hero_badge:"In Ausbildung — Webentwicklung",skills_key:"Kernkompetenzen",sk_bus:"Stadtverkehr & Bus",sk_hgv:"LKW / Schwertransport",sk_mil:"Militärisches Management",ongoing:"in Ausbildung",recent_career:"Letzter Werdegang",job1_date:"2026 → heute",job1_role:"Busfahrer",job2_role:"Stadtverkehr",job3_role:"Webentwickler-Ausbildung",learning_web:"Web-Lernen",learning_desc:"Laufende Ausbildung — dieses Portfolio ist selbst ein Lernprojekt.",contact_lbl:"Kontakt",lang_val:"Französisch B2 · Englisch A2",btn_cv:"Lebenslauf herunterladen",btn_contact:"Kontakt aufnehmen",comp_page_title:"Kompetenzen & Ausbildung",cat_pax:"🚌 Personentransport",cat_freight:"🚛 Gütertransport",cat_mil:"🪖 Militär & Management",cat_web:"💻 Webentwicklung",sk_urban:"Stadtverkehr",sk_school:"Schulbus",sk_artic:"Gelenkbus",sk_supply:"Lieferkette",sk_fork:"6T Gabelstapler",sk_armor:"Gepanzerte Fahrzeuge",sk_mgmt:"Teamführung",sk_log:"Operative Logistik",lvl_expert:"Experte",lvl_ok:"Fortgeschritten",permits_title:"Führerscheine & Zertifikate",lic_d:"Bus & ÖPNV",lic_ce:"Schwertransport",lic_c:"Schwerlastkraftwagen",lic_fco:"FIMO Personen & Güter",lic_cl1:"Kanadischer SPV",lic_car:"6-Tonnen-Gabelstapler",lic_vbl:"Leichter Panzerwagen",lic_mon:"Fahrlehrer VL/LKW",career_title:"Beruflicher Werdegang",fil_mil:"Militär",fil_mil_sub:"Französische Armee · 23 Jahre",fil_freight:"Gütertransport",fil_freight_sub:"LKW, Logistik, Sammlung",fil_pax:"Personentransport",fil_pax_sub:"Bus, Reisebus, Stadtbus, Schulbus",select_cat:"Kategorie auswählen",mat_intro:"Von Militärpanzern bis zu Gelenkbussen —",mat_select:"wähle eine Kategorie.",mat_mil:"Militär",mat_mil_desc:"VAB, VBL, TRM 2000/4000, GBC 180, Plane, Container, Plateau.",mat_mil_count:"8 Fahrzeuge",mat_civ:"Zivil",mat_civ_desc:"Stadtbusse, Schulbus, Gelenkbus und amerikanischer LKW.",mat_civ_count:"4 Fahrzeuge",btn_back:"← Fahrzeuge",travel_title:"Reiseziele & Einsätze",leg_home:"Heimatland",leg_travel:"Reisen",leg_mil:"Militäreinsätze",leg_depart:"Paris CDG",globe_hint:"✈ Klicke auf ein Ziel für Animation von Paris",personal_travels:"Persönliche Reisen",mil_proj:"Militäreinsätze",contact_title:"Kontakt aufnehmen",contact_desc:"Verfügbar für berufliche Möglichkeiten — Transport oder Webentwicklung.",lbl_email:"E-Mail",lbl_phone:"Telefon",lbl_loc:"Standort",lbl_lang:"Sprachen",qr_wa:"Internationaler Kontakt",qr_li:"Berufliches Profil",form_title:"Nachricht senden",form_name:"Name",form_msg:"Nachricht",btn_send:"Nachricht senden",msg_sent:"Nachricht gesendet! Ich antworte so bald wie möglich.",ph_name:"Ihr Name",ph_msg:"Ihre Nachricht..."},

  es:{nav_home:"Inicio",nav_skills:"Competencias",nav_career:"Trayectoria",nav_vehicles:"Material",nav_travels:"Viajes",nav_contact:"Contacto",hero_desc:"Originario de Nueva Caledonia, 23 años en el ejército francés. Una carrera forjada en la disciplina, la versatilidad y la superación personal.",hero_badge:"Aprendiendo — Desarrollo web",skills_key:"Competencias clave",sk_bus:"Transporte urbano y autobús",sk_hgv:"Transporte pesado / SPL",sk_mil:"Gestión militar",ongoing:"en curso",recent_career:"Trayectoria reciente",job1_date:"2026 → hoy",job1_role:"Conductor de autobús",job2_role:"Transporte urbano",job3_role:"Formación Desarrollador Web",learning_web:"Aprendizaje web",learning_desc:"Formación continua — este portfolio es en sí un proyecto de aprendizaje.",contact_lbl:"Contacto",lang_val:"Francés B2 · Inglés A2",btn_cv:"Descargar CV",btn_contact:"Contactarme",comp_page_title:"Competencias y formación",cat_pax:"🚌 Transporte de personas",cat_freight:"🚛 Transporte de mercancías",cat_mil:"🪖 Militar y gestión",cat_web:"💻 Desarrollo web",sk_urban:"Transporte urbano",sk_school:"Autobús escolar",sk_artic:"Autobús articulado",sk_supply:"Cadena de suministro",sk_fork:"Carretilla 6T",sk_armor:"Vehículos blindados",sk_mgmt:"Gestión de equipos",sk_log:"Logística operacional",lvl_expert:"Experto",lvl_ok:"Confirmado",permits_title:"Licencias y certificaciones",lic_d:"Autobús y transporte público",lic_ce:"Camión articulado",lic_c:"Vehículo pesado",lic_fco:"FIMO Personas y Mercancías",lic_cl1:"SPL Canadiense",lic_car:"Carretilla 6 toneladas",lic_vbl:"Piloto vehículo blindado",lic_mon:"Monitor conducción",career_title:"Trayectoria profesional",fil_mil:"Militar",fil_mil_sub:"Ejército francés · 23 años",fil_freight:"Transporte mercancías",fil_freight_sub:"Pesado, cadena suministro",fil_pax:"Transporte personas",fil_pax_sub:"Autobús, urbano, escolar",select_cat:"Selecciona una categoría",mat_intro:"De blindados militares a autobuses articulados —",mat_select:"selecciona una categoría.",mat_mil:"Militar",mat_mil_desc:"VAB, VBL, TRM 2000/4000, GBC 180, lona, contenedor, plataforma.",mat_mil_count:"8 vehículos",mat_civ:"Civil",mat_civ_desc:"Autobuses urbanos, escolar, articulado y camión americano.",mat_civ_count:"4 vehículos",btn_back:"← Material",travel_title:"Destinos y Proyecciones",leg_home:"País natal",leg_travel:"Viajes",leg_mil:"Proyecciones militares",leg_depart:"París CDG",globe_hint:"✈ Haz clic en un destino desde París",personal_travels:"Viajes personales",mil_proj:"Proyecciones militares",contact_title:"Contactarme",contact_desc:"Disponible para oportunidades — transporte o desarrollo web.",lbl_email:"Correo",lbl_phone:"Teléfono",lbl_loc:"Ubicación",lbl_lang:"Idiomas",qr_wa:"Contacto internacional",qr_li:"Perfil profesional",form_title:"Enviar mensaje",form_name:"Nombre",form_msg:"Mensaje",btn_send:"Enviar mensaje",msg_sent:"¡Mensaje enviado! Responderé lo antes posible.",ph_name:"Su nombre",ph_msg:"Su mensaje..."},

  zh:{nav_home:"首页",nav_skills:"技能",nav_career:"职业经历",nav_vehicles:"车辆",nav_travels:"旅行",nav_contact:"联系",hero_desc:"来自新喀里多尼亚，在法国军队服役23年。一段以纪律、多才多艺和自我超越为基础的职业生涯。",hero_badge:"学习中 — 网页开发",skills_key:"核心技能",sk_bus:"城市公交运输",sk_hgv:"重型运输",sk_mil:"军事管理",ongoing:"进行中",recent_career:"近期工作",job1_date:"2026年至今",job1_role:"公交司机",job2_role:"城市运输",job3_role:"网页开发培训",learning_web:"网页学习",learning_desc:"持续培训中 — 本作品集本身就是一个学习项目。",contact_lbl:"联系方式",lang_val:"法语B2 · 英语A2",btn_cv:"下载简历",btn_contact:"联系我",comp_page_title:"技能与培训",cat_pax:"🚌 客运",cat_freight:"🚛 货运",cat_mil:"🪖 军事与管理",cat_web:"💻 网页开发",sk_urban:"城市运输",sk_school:"校车",sk_artic:"铰接式公共汽车",sk_supply:"供应链",sk_fork:"6吨叉车",sk_armor:"装甲车辆",sk_mgmt:"团队管理",sk_log:"作战后勤",lvl_expert:"专家",lvl_ok:"熟练",permits_title:"驾照与认证",lic_d:"公共汽车运输",lic_ce:"超重型货车",lic_c:"重型货车",lic_fco:"FIMO客货",lic_cl1:"加拿大SPV",lic_car:"6吨叉车",lic_vbl:"轻型装甲车驾驶员",lic_mon:"驾驶教练",career_title:"职业经历",fil_mil:"军事",fil_mil_sub:"法国陆军 · 23年",fil_freight:"货运",fil_freight_sub:"重载，供应链",fil_pax:"客运",fil_pax_sub:"公共汽车，校车",select_cat:"选择一个类别",mat_intro:"从军用装甲车到铰接式公共汽车 —",mat_select:"选择一个类别。",mat_mil:"军事",mat_mil_desc:"VAB, VBL, TRM 2000/4000, GBC 180, 篷布, 集装箱, 平板。",mat_mil_count:"8辆",mat_civ:"民用",mat_civ_desc:"城市公交，校车，铰接式和美国卡车。",mat_civ_count:"4辆",btn_back:"← 车辆",travel_title:"目的地与军事部署",leg_home:"出生地",leg_travel:"旅行",leg_mil:"军事部署",leg_depart:"巴黎戴高乐",globe_hint:"✈ 点击目的地从巴黎启动动画",personal_travels:"个人旅行",mil_proj:"军事部署",contact_title:"联系我",contact_desc:"开放职业机会 — 运输或网页开发。",lbl_email:"电子邮件",lbl_phone:"电话",lbl_loc:"位置",lbl_lang:"语言",qr_wa:"国际联系",qr_li:"职业档案",form_title:"发送消息",form_name:"姓名",form_msg:"消息",btn_send:"发送消息",msg_sent:"消息已发送！我会尽快回复。",ph_name:"您的姓名",ph_msg:"您的消息..."},

  ar:{nav_home:"الرئيسية",nav_skills:"المهارات",nav_career:"المسار",nav_vehicles:"المعدات",nav_travels:"الرحلات",nav_contact:"التواصل",hero_desc:"من كاليدونيا الجديدة، 23 عامًا في الجيش الفرنسي. مسيرة مبنية على الانضباط والتنوع وتجاوز الذات.",hero_badge:"تعلّم مستمر — تطوير الويب",skills_key:"المهارات الرئيسية",sk_bus:"النقل الحضري والحافلات",sk_hgv:"نقل الشاحنات الثقيلة",sk_mil:"الإدارة العسكرية",ongoing:"قيد الدراسة",recent_career:"المسار الأخير",job1_date:"2026 ← حتى الآن",job1_role:"سائق حافلة",job2_role:"النقل الحضري",job3_role:"تدريب تطوير الويب",learning_web:"تعلّم الويب",learning_desc:"تدريب مستمر — هذا المحفظة نفسها مشروع تعليمي.",contact_lbl:"التواصل",lang_val:"الفرنسية B2 · الإنجليزية A2",btn_cv:"تحميل السيرة الذاتية",btn_contact:"تواصل معي",comp_page_title:"المهارات والتدريب",cat_pax:"🚌 نقل الركاب",cat_freight:"🚛 نقل البضائع",cat_mil:"🪖 العسكرية والإدارة",cat_web:"💻 تطوير الويب",sk_urban:"النقل الحضري",sk_school:"الحافلة المدرسية",sk_artic:"حافلة مفصلية",sk_supply:"سلسلة الإمداد",sk_fork:"رافعة شوكية 6 أطنان",sk_armor:"المركبات المدرعة",sk_mgmt:"إدارة الفريق",sk_log:"اللوجستيات العملياتية",lvl_expert:"خبير",lvl_ok:"متقدم",permits_title:"الرخص والشهادات",lic_d:"حافلة ونقل عام",lic_ce:"شاحنة ثقيلة جدًا",lic_c:"شاحنة ثقيلة",lic_fco:"FIMO للأشخاص والبضائع",lic_cl1:"SPV كندي",lic_car:"رافعة 6 أطنان",lic_vbl:"قائد مركبة مدرعة خفيفة",lic_mon:"مدرب قيادة",career_title:"المسار المهني",fil_mil:"عسكري",fil_mil_sub:"الجيش الفرنسي · 23 سنة",fil_freight:"نقل البضائع",fil_freight_sub:"شاحنات، سلسلة الإمداد",fil_pax:"نقل الركاب",fil_pax_sub:"حافلات، مدرسية، حضرية",select_cat:"اختر فئة",mat_intro:"من المركبات المدرعة إلى الحافلات المفصلية —",mat_select:"اختر فئة.",mat_mil:"عسكري",mat_mil_desc:"VAB, VBL, TRM 2000/4000, GBC 180، مشمّع، حاوية، منصة.",mat_mil_count:"8 مركبات",mat_civ:"مدني",mat_civ_desc:"حافلات حضرية، مدرسية، مفصلية وشاحنة أمريكية.",mat_civ_count:"4 مركبات",btn_back:"← المعدات",travel_title:"الوجهات والبعثات",leg_home:"البلد الأصلي",leg_travel:"رحلات",leg_mil:"البعثات العسكرية",leg_depart:"باريس",globe_hint:"✈ انقر على وجهة من باريس",personal_travels:"رحلات شخصية",mil_proj:"البعثات العسكرية",contact_title:"تواصل معي",contact_desc:"متاح لأي فرصة مهنية — نقل أو تطوير ويب.",lbl_email:"البريد الإلكتروني",lbl_phone:"الهاتف",lbl_loc:"الموقع",lbl_lang:"اللغات",qr_wa:"تواصل دولي",qr_li:"الملف المهني",form_title:"إرسال رسالة",form_name:"الاسم",form_msg:"الرسالة",btn_send:"إرسال الرسالة",msg_sent:"تم إرسال الرسالة! سأرد في أقرب وقت.",ph_name:"اسمك",ph_msg:"رسالتك..."},

  ru:{nav_home:"Главная",nav_skills:"Навыки",nav_career:"Карьера",nav_vehicles:"Техника",nav_travels:"Путешествия",nav_contact:"Контакты",hero_desc:"Родом из Новой Каледонии, 23 года во французской армии. Карьера, построенная на дисциплине, разносторонности и самопреодолении.",hero_badge:"Обучение — Веб-разработка",skills_key:"Ключевые навыки",sk_bus:"Городской и автобусный транспорт",sk_hgv:"Грузовой транспорт / СПВ",sk_mil:"Военный менеджмент",ongoing:"в процессе",recent_career:"Последний опыт",job1_date:"2026 → сегодня",job1_role:"Водитель автобуса",job2_role:"Городской транспорт",job3_role:"Обучение веб-разработке",learning_web:"Изучение веба",learning_desc:"Непрерывное обучение — это портфолио само по себе учебный проект.",contact_lbl:"Контакты",lang_val:"Французский B2 · Английский A2",btn_cv:"Скачать резюме",btn_contact:"Связаться",comp_page_title:"Навыки и обучение",cat_pax:"🚌 Пассажирский транспорт",cat_freight:"🚛 Грузовой транспорт",cat_mil:"🪖 Военное дело и управление",cat_web:"💻 Веб-разработка",sk_urban:"Городской транспорт",sk_school:"Школьный автобус",sk_artic:"Сочленённый автобус",sk_supply:"Цепочка поставок",sk_fork:"Вилочный погрузчик 6T",sk_armor:"Бронированные машины",sk_mgmt:"Управление командой",sk_log:"Оперативная логистика",lvl_expert:"Эксперт",lvl_ok:"Уверенный",permits_title:"Права и сертификаты",lic_d:"Автобус и общественный транспорт",lic_ce:"Сверхтяжёлый грузовик",lic_c:"Тяжёлый грузовик",lic_fco:"FIMO Пассажиры и грузы",lic_cl1:"Канадский СПВ",lic_car:"Погрузчик 6 тонн",lic_vbl:"Водитель лёгкой бронемашины",lic_mon:"Инструктор по вождению",career_title:"Профессиональный путь",fil_mil:"Военная служба",fil_mil_sub:"Французская армия · 23 года",fil_freight:"Грузовой транспорт",fil_freight_sub:"Тяжёлые грузовики, логистика",fil_pax:"Пассажирский транспорт",fil_pax_sub:"Автобус, школьный, городской",select_cat:"Выберите категорию",mat_intro:"От военной бронетехники до сочленённых автобусов —",mat_select:"выберите категорию.",mat_mil:"Военная техника",mat_mil_desc:"VAB, VBL, TRM 2000/4000, GBC 180, тент, контейнер, платформа.",mat_mil_count:"8 единиц",mat_civ:"Гражданская техника",mat_civ_desc:"Городские автобусы, школьный, сочленённый и американский грузовик.",mat_civ_count:"4 единицы",btn_back:"← Техника",travel_title:"Направления и Командировки",leg_home:"Родина",leg_travel:"Путешествия",leg_mil:"Военные командировки",leg_depart:"Париж CDG",globe_hint:"✈ Нажмите на пункт назначения от Парижа",personal_travels:"Личные путешествия",mil_proj:"Военные командировки",contact_title:"Связаться со мной",contact_desc:"Открыт для профессиональных возможностей.",lbl_email:"Email",lbl_phone:"Телефон",lbl_loc:"Местоположение",lbl_lang:"Языки",qr_wa:"Международный контакт",qr_li:"Профессиональный профиль",form_title:"Отправить сообщение",form_name:"Имя",form_msg:"Сообщение",btn_send:"Отправить",msg_sent:"Сообщение отправлено! Отвечу как можно скорее.",ph_name:"Ваше имя",ph_msg:"Ваше сообщение..."}
};

/* ============================================================
   GESTION DE LA LANGUE
============================================================ */
let currentLang = 'fr';
const RTL_LANGS  = ['ar'];
const LANG_FLAGS = { fr:'🇫🇷', en:'🇬🇧', de:'🇩🇪', es:'🇪🇸', zh:'🇨🇳', ar:'🇸🇦', ru:'🇷🇺' };
// Cache pour éviter de retraduire la même langue deux fois
const translationCache = { fr: I18N.fr };

function toggleLangMenu() {
  document.getElementById('langBtn').classList.toggle('open');
}
// Fermer le dropdown au clic extérieur
document.addEventListener('click', e => {
  if (!e.target.closest('#langBtn'))
    document.getElementById('langBtn').classList.remove('open');
});

async function setLang(code, el) {
  if (code === currentLang) return;
  currentLang = code;

  // Mettre à jour le bouton nav
  document.getElementById('langCurrent').textContent = LANG_FLAGS[code] + ' ' + code.toUpperCase();
  document.querySelectorAll('.lang-item').forEach(i => i.classList.remove('active'));
  if (el) el.classList.add('active');
  document.getElementById('langBtn').classList.remove('open');

  // RTL pour l'arabe
  document.documentElement.setAttribute('lang', code);
  document.documentElement.setAttribute('dir', RTL_LANGS.includes(code) ? 'rtl' : 'ltr');

  // Appliquer les traductions manuelles immédiatement (sans délai)
  applyTranslations(I18N[code]);

  // Si on a déjà le cache complet pour cette langue, on s'arrête là
  if (translationCache[code]) return;

  // Sinon, on complète avec MyMemory pour les textes non couverts par I18N
  // MyMemory traduit des textes libres (hero_desc, etc.) avec meilleure fluidité
  try {
    showTransBar(true);
    const keysToTranslate = ['hero_desc', 'hero_badge', 'learning_desc', 'contact_desc', 'msg_sent'];
    const sourceLang = 'fr';
    const translations = {};

    // MyMemory : 1 requête par texte (API gratuite, sans clé)
    for (const key of keysToTranslate) {
      const text = I18N.fr[key];
      if (!text) continue;
      try {
        const langPair = `${sourceLang}|${code}`;
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langPair}`;
        const res  = await fetch(url);
        const data = await res.json();
        if (data.responseStatus === 200 && data.responseData?.translatedText) {
          translations[key] = data.responseData.translatedText;
        }
      } catch (_) { /* silencieux — on garde la traduction manuelle */ }
    }

    // Fusionner les résultats MyMemory avec les traductions manuelles
    translationCache[code] = { ...I18N[code], ...translations };
    applyTranslations(translationCache[code]);
  } catch (e) {
    console.warn('MyMemory indisponible, traductions manuelles utilisées.');
  } finally {
    showTransBar(false);
  }
}

function applyTranslations(t) {
  if (!t) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  // ── Mettre à jour le titre typewriter ──
  const titleEl = document.getElementById('heroTitle');
  if (titleEl && TITLES[currentLang]) {
    titleEl.textContent = TITLES[currentLang];
  }
}

function showTransBar(show) {
  document.getElementById('transBar').classList.toggle('show', show);
}

/* ============================================================
   NAVIGATION
============================================================ */
function goPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  ['accueil','competences','parcours','materiel','voyages','contact'].forEach((p, i) => {
    if (p === id) document.querySelectorAll('.nav-link')[i]?.classList.add('active');
  });
  if (id === 'materiel') {
    document.getElementById('matHome').style.display = 'block';
    document.getElementById('matSub').style.display  = 'none';
  }
  if (id === 'voyages') setTimeout(initGlobe, 80);
}

/* ============================================================
   DONNÉES PARCOURS
============================================================ */
const PARCOURS = {
  militaire: { label:"Militaire — Armée de Terre", items:[
    {date:"05/1995 – 07/2018", co:"Armée de Terre",         role:"23 ans de service",      note:"Pilote VBL · Aide moniteur VL/PL/SPL · Management · Logistique"},
    {date:"2006",              co:"Permis CE",               role:"Super poids lourd (SPL)"},
    {date:"2005",              co:"Cariste 6 tonnes",        role:"Chariot élévateur lourd"},
    {date:"2004",              co:"Aide Moniteur Auto-École",role:"Formation VL / PL / SPL"},
    {date:"1998",              co:"Permis C + Pilote VBL",   role:"Poids lourd · Véhicule blindé léger"}
  ]},
  marchandise: { label:"Transport de marchandise", items:[
    {date:"05/2021 – 07/2021", co:"DIFCO",                  role:"Chauffeur livreur"},
    {date:"11/2020 – 04/2021", co:"Transport de Savoie",    role:"Chauffeur Supply Chain"},
    {date:"04/2020 – 06/2020", co:"BIO LAIT",               role:"Collecteur de lait",   note:"Bâché · Plateau · Conteneur · Citerne"},
    {date:"12/2019 – 02/2020", co:"XTL Transport · Canada", role:"Chauffeur SPL canadien",note:"Semi-truck · Permis Classe 1"},
    {date:"03/2019 – 10/2019", co:"Transport de Savoie",    role:"Chauffeur Supply Chain"},
    {date:"09/2018 – 11/2018", co:"LACTOCOL",               role:"Collecteur de lait",   note:"Tire palette · Ampli-roll"}
  ]},
  personnes: { label:"Transport de personnes", items:[
    {date:"01/2026 → aujourd'hui", co:"Deutsche Bahn · Leverkusen", role:"Chauffeur de bus", active:true},
    {date:"09/2025 – 11/2025",     co:"Deutsche Bahn · Brieselang", role:"Chauffeur de bus"},
    {date:"06/2025 – 08/2025",     co:"ÉcoVista · Berlin–Hambourg", role:"Transport urbain"},
    {date:"12/2024 – 04/2025",     co:"Transdev Savoie · Méribel",  role:"Conducteur urbain"},
    {date:"05/2024 – 07/2024",     co:"Transport de l'Ain",         role:"Conducteur car scolaire"},
    {date:"12/2023 – 04/2024",     co:"Transdev · Méribel",         role:"Conducteur urbain"}
  ]}
};

function setFilter(cat) {
  document.querySelectorAll('.fb').forEach(b => b.classList.remove('active'));
  const ids = { militaire:'fb-mil', marchandise:'fb-march', personnes:'fb-pers' };
  document.getElementById(ids[cat])?.classList.add('active');
  const d = PARCOURS[cat];
  let h = `<div class="tlh">${d.label}</div>`;
  d.items.forEach((it, i) => {
    const last = i === d.items.length - 1;
    h += `<div class="tli">
      <div class="tll">
        <div class="tld${it.active?' on':''}"></div>
        ${last ? '' : '<div class="tlln"></div>'}
      </div>
      <div class="tlc">
        <div class="tldate">${it.date}</div>
        <div class="tlco">${it.co}</div>
        <div class="tlrole">${it.role}</div>
        ${it.note ? `<div class="tlnote">${it.note}</div>` : ''}
      </div>
    </div>`;
  });
  document.getElementById('tlZone').innerHTML = h;
}

/* ============================================================
   DONNÉES VÉHICULES
============================================================ */
const VEHICLES = {
  mil:[
    {name:"VAB",           sub:"Véhicule de l'Avant Blindé",  img:"photos/vab.jpg",                          badge:"vb-m",bl:"Militaire",desc:"Transporteur de troupes blindé à roues. OPEX multiples.",    specs:[["Masse","13 t"],["Vitesse","92 km/h"],["Équipage","2+10"],["Moteur","Renault MIDR"]],       tags:["Blindé","4x4","OPEX"]},
    {name:"VBL",           sub:"Véhicule Blindé Léger",       img:"photos/4x4 blinde.jpg",                   badge:"vb-m",bl:"Militaire",desc:"Véhicule léger de reconnaissance et liaison.",               specs:[["Masse","3,5 t"],["Vitesse","95 km/h"],["Équipage","2-3"],["Moteur","Peugeot XD3T"]],       tags:["Blindé léger","4x4","Liaison"]},
    {name:"TRM 2000",      sub:"Camion militaire léger",       img:"photos/trm2k.jpg",                       badge:"vb-m",bl:"Militaire",desc:"Camion léger polyvalent tout terrain.",                      specs:[["Charge","2 t"],["Trans.","4x4"],["Usage","Léger"],["Moteur","Diesel"]],                    tags:["TRM 2000","Léger","4x4"]},
    {name:"TRM 4000",      sub:"Camion militaire moyen",       img:"photos/trm4k.jpg",                       badge:"vb-m",bl:"Militaire",desc:"Transport de charges moyennes en opérations.",               specs:[["Charge","4 t"],["Trans.","4x4/6x6"],["Usage","Moyen"],["Moteur","Berliet"]],               tags:["TRM 4000","Moyen","Logistique"]},
    {name:"GBC 180",       sub:"Camion lourd 6x6",             img:"photos/gbc.jpg",                         badge:"vb-m",bl:"Militaire",desc:"Camion militaire lourd 6x6 de référence.",                   specs:[["Charge","6 t"],["Trans.","6x6"],["Vitesse","90 km/h"],["Moteur","Berliet V8"]],            tags:["GBC 180","Lourd","6x6"]},
    {name:"Bâché mil.",    sub:"Transport couvert militaire",  img:"photos/vtlbaché.jpg",                    badge:"vb-m",bl:"Militaire",desc:"Transport couvert de matériel et munitions.",                specs:[["Usage","Couvert"],["Type","Bâché"],["Terrain","Tout"],["Période","1995-2018"]],            tags:["Bâché","Logistique","Armée"]},
    {name:"Conteneur mil.",sub:"Porte-conteneur logistique",   img:"photos/vtlcontener.jpg",                 badge:"vb-m",bl:"Militaire",desc:"Transport de conteneurs militaires sur châssis.",            specs:[["Usage","Conteneurs"],["Taille","20'/40'"],["Trans.","6x4"],["Période","1995-2018"]],       tags:["Conteneur","Logistique"]},
    {name:"Plateau mil.",  sub:"Charges lourdes — blindés",    img:"photos/vtlplateau.jpg",                  badge:"vb-m",bl:"Militaire",desc:"Transport de blindés et engins lourds.",                     specs:[["Usage","Blindés"],["Type","Fixe/ridelles"],["Arrim.","Sangles"],["Période","1995-2018"]],  tags:["Plateau","Blindés","Armée"]},
    {name:"Plateau mil.",  sub:"Charges lourdes — blindés",    img:"photos/pplog.jpg",                       badge:"vb-m",bl:"Militaire",desc:"Transport de blindés et engins lourds.",                     specs:[["Usage","Blindés"],["Type","Fixe/ridelles"],["Arrim.","Sangles"],["Période","1995-2018"]],  tags:["Plateau","Blindés","Armée"]}
  ],
  civ:[
    {name:"Bus urbain articulé 18 m",    sub:"Transport en commun",                  img:"photos/busarticule.jpg",            badge:"vb-c",bl:"Civil",   desc:"Bus standard 12m. Deutsche Bahn, Transdev et ÉcoVista.",  specs:[["Longueur","12 m"],["Capacité","~80 pass."],["Moteur","Diesel/GNC"],["Usage","Urbain"]],    tags:["Urbain","Allemagne","France"]},
    {name:"Bus urbain 12 m",             sub:"Haute capacité",                       img:"photos/busurbain.jpg",              badge:"vb-c",bl:"Civil",   desc:"Bus articulé 18m. Berlin–Hambourg avec ÉcoVista.",        specs:[["Longueur","18 m"],["Capacité","~150 pass."],["Moteur","Hybride"],["Usage","BRT"]],         tags:["Articulé","Berlin","Hambourg"]},
    {name:"Bus urbain 14 m",             sub:"Station de Ski",                       img:"photos/meribus.jpg",                badge:"vb-c",bl:"Civil",   desc:"Bus urbain sation de ski. Méribel Savoie avec Transdev.", specs:[["Longueur","14 m"],["Capacité","~150 pass."],["Moteur","Hybride"],["Usage","BRT"]],         tags:["urbain","Méribel","Savoie"]},
    {name:"Car scolaire",                sub:"Transport d'élèves",                   img:"photos/carscolaire.jpg",            badge:"vb-c",bl:"Civil",   desc:"Transport d'élèves pour Transport de l'Ain.",             specs:[["Capacité","55 passagers"],["Permis","D"],["Sécurité","Ceintures"],["Usage","Scolaire"]],   tags:["Scolaire","Permis D","Ain"]},
    {name:"Semi-Remorque",               sub:"Semi-Remorque · Transport de Savoie",  img:"photos/semiremorque.jpg",           badge:"vb-c",bl:"Civil",   desc:"Livraison de marchandise sec au supermarché Carrefour.",  specs:[["Capacité","44 tonnes"],["Permis","CE"],["Sécurité","Conduite"],["Usage","Supply Chain"]],  tags:["Marchandise","Permis CE","Ain"]},
    {name:"Camion américain",            sub:"Semi-truck · XTL Canada",              img:"photos/xtl.jpg",                    badge:"vb-us",bl:"Canada", desc:"Semi-truck nord-américain avec XTL Transport Canada.",    specs:[["Permis","Classe 1"],["PTAC","≈36 t"],["Exp.","Canada 2019-20"],["Marque","Kenworth"]],     tags:["Canada","XTL","Classe 1"],us:true},
    {name:"Camion Citerne",              sub:"Semi-Remorque · Biolait",              img:"photos/citerne.jpg",                badge:"vb-us",bl:"Canada", desc:"Semi-Remorque Bretagne pour la Collecte de lait.",        specs:[["Permis","CE"],["PTAC","44 t"],["Exp.","2020 pendant le COVID"],["Marque","Kenworth"]],     tags:["Canada","XTL","Classe 1"],us:true},
  ]
};

function showMat(cat) {
  document.getElementById('matHome').style.display = 'none';
  document.getElementById('matSub').style.display  = 'block';
  document.getElementById('matSubTitle').textContent = cat==='mil' ? '🪖 Véhicules militaires' : '🚌 Véhicules civils';
  const other = cat==='mil' ? 'civ' : 'mil';
  const btn = document.getElementById('swBtn');
  btn.textContent = cat==='mil' ? '🚌 Voir Civil' : '🪖 Voir Militaire';
  btn.onclick = () => showMat(other);
  const grid = document.getElementById('vGrid'); grid.innerHTML = '';
  VEHICLES[cat].forEach((v, i) => {
    const c = document.createElement('div'); c.className = 'vcard';
    const ph = cat==='mil' ? '🪖' : (v.us ? '🇨🇦' : '🚌');
    c.innerHTML = `
      <div class="vimgw">
        ${v.img
          ? `<img class="vimg" src="${v.img}" onerror="this.parentElement.innerHTML='<div class=vph>${ph}</div>'" alt="${v.name}">`
          : `<div class="vph">${ph}</div>`}
      </div>
      ${v.us ? '<div class="usflag">🇨🇦</div>' : ''}
      <div class="vinf">
        <div class="vname">${v.name}</div>
        <div class="vtype">${v.sub}</div>
        <span class="vbadge ${v.badge}">${v.bl}</span>
      </div>`;
    c.onclick = () => openModal(cat, i);
    grid.appendChild(c);
  });
}
function backMat() {
  document.getElementById('matHome').style.display = 'block';
  document.getElementById('matSub').style.display  = 'none';
}
function openModal(cat, idx) {
  const v = VEHICLES[cat][idx];
  const ph = cat==='mil' ? '🪖' : (v.us ? '🇨🇦' : '🚌');
  document.getElementById('mImgZone').innerHTML = v.img
    ? `<img class="mimg" src="${v.img}" onerror="this.outerHTML='<div class=mph>${ph}</div>'" alt="${v.name}">`
    : `<div class="mph">${ph}</div>`;
  document.getElementById('mTitle').textContent = v.name;
  document.getElementById('mSub').textContent   = v.sub;
  document.getElementById('mDesc').textContent  = v.desc;
  document.getElementById('mSpecs').innerHTML = v.specs.map(s =>
    `<div class="mspec"><div class="mslbl">${s[0]}</div><div class="msval">${s[1]}</div></div>`).join('');
  document.getElementById('mTags').innerHTML = v.tags.map(t =>
    `<span class="mtag${v.us?' us':''}">${t}</span>`).join('');
  document.getElementById('mwrap').classList.add('open');
}
function closeModD() { document.getElementById('mwrap').classList.remove('open'); }
function sendMsg()   {
  document.getElementById('fok').style.display = 'block';
  setTimeout(() => document.getElementById('fok').style.display = 'none', 4000);
}

/* ============================================================
   GLOBE (Globe.GL)
============================================================ */
const FLAGS = {"Nouvelle-Calédonie":"🇳🇨","Sydney":"🇦🇺","Madagascar":"🇲🇬","Malaisie":"🇲🇾","Singapour":"🇸🇬","Bornéo":"🇲🇾","Thaïlande":"🇹🇭","Laos":"🇱🇦","Vietnam":"🇻🇳","Cambodge":"🇰🇭","Québec":"🇨🇦","Allemagne":"🇩🇪","Pologne":"🇵🇱","Slovaquie":"🇸🇰","Autriche":"🇦🇹","Suisse":"🇨🇭","Rome":"🇮🇹","Barcelone":"🇪🇸","Athènes":"🇬🇷","Malte":"🇲🇹","Lisbonne":"🇵🇹","Monaco":"🇲🇨","RCA":"🇨🇫","Tchad":"🇹🇩","Gabon":"🇬🇦","Congo":"🇨🇬","Zaïre/RDC":"🇨🇩","Djibouti":"🇩🇯","Macédoine":"🇲🇰","Kosovo":"🇽🇰","La Réunion":"🇷🇪","N.-Calédonie (mil.)":"🇳🇨","Guadeloupe":"🇬🇵","Marie-Galante":"🇬🇵","Afghanistan":"🇦🇫"};

const DESTINATIONS = [
  {name:"Nouvelle-Calédonie",     label:"Mon pays natal ❤️",                          lat:-21.1, lng:165.6, type:"heart"},
  {name:"Sydney",                  label:"Voyage personnel",                            lat:-33.9, lng:151.2, type:"travel"},
  {name:"Madagascar",              label:"Voyage personnel",                            lat:-18.9, lng:47.5,  type:"travel"},
  {name:"Malaisie",                label:"Voyage personnel",                            lat:4.2,   lng:108.0, type:"travel"},
  {name:"Singapour",               label:"Voyage personnel",                            lat:1.3,   lng:103.8, type:"travel"},
  {name:"Bornéo",                  label:"Voyage personnel",                            lat:4.0,   lng:114.0, type:"travel"},
  {name:"Thaïlande",               label:"Voyage personnel",                            lat:15.9,  lng:100.9, type:"travel"},
  {name:"Laos",                    label:"Voyage personnel",                            lat:19.9,  lng:102.5, type:"travel"},
  {name:"Vietnam",                 label:"Voyage personnel",                            lat:14.1,  lng:108.3, type:"travel"},
  {name:"Cambodge",                label:"Voyage personnel",                            lat:12.6,  lng:104.9, type:"travel"},
  {name:"Québec",                  label:"Voyage & travail · XTL Transport",           lat:46.8,  lng:-71.2, type:"travel"},
  {name:"Allemagne",               label:"Travail · Deutsche Bahn",                    lat:51.2,  lng:10.4,  type:"travel"},
  {name:"Pologne",                 label:"Voyage personnel",                            lat:51.9,  lng:19.1,  type:"travel"},
  {name:"Slovaquie",               label:"Voyage personnel",                            lat:48.7,  lng:19.7,  type:"travel"},
  {name:"Autriche",                label:"Voyage personnel",                            lat:47.5,  lng:14.5,  type:"travel"},
  {name:"Suisse",                  label:"Voyage personnel",                            lat:46.8,  lng:8.2,   type:"travel"},
  {name:"Rome",                    label:"Voyage personnel",                            lat:41.9,  lng:12.5,  type:"travel"},
  {name:"Barcelone",               label:"Voyage personnel",                            lat:41.4,  lng:2.2,   type:"travel"},
  {name:"Athènes",                 label:"Voyage personnel",                            lat:37.9,  lng:23.7,  type:"travel"},
  {name:"Malte",                   label:"Voyage personnel",                            lat:35.9,  lng:14.5,  type:"travel"},
  {name:"Lisbonne",                label:"Voyage personnel",                            lat:38.7,  lng:-9.1,  type:"travel"},
  {name:"Monaco",                  label:"Voyage personnel",                            lat:43.7,  lng:7.4,   type:"travel"},
  {name:"RCA",                     label:"OPEX Sangaris · Armée de Terre",             lat:7.0,   lng:21.0,  type:"military"},
  {name:"Tchad",                   label:"OPEX Épervier · Armée de Terre",             lat:15.5,  lng:18.7,  type:"military"},
  {name:"Gabon",                   label:"OPEX Gabon · Détachement",                  lat:-0.8,  lng:11.6,  type:"military"},
  {name:"Congo",                   label:"OPEX Congo · Détachement",                  lat:-4.3,  lng:15.3,  type:"military"},
  {name:"Zaïre/RDC",               label:"OPEX · Armée de Terre",                     lat:-4.0,  lng:21.8,  type:"military"},
  {name:"Djibouti",                label:"Base permanente française",                  lat:11.8,  lng:43.1,  type:"military"},
  {name:"Macédoine",               label:"OPEX Balkans · OTAN",                       lat:41.6,  lng:21.7,  type:"military"},
  {name:"Kosovo",                  label:"OPEX KFOR · OTAN",                          lat:42.6,  lng:20.9,  type:"military"},
  {name:"La Réunion",              label:"DOM · Détachement militaire",               lat:-21.1, lng:55.5,  type:"military"},
  {name:"N.-Calédonie (mil.)",     label:"DOM-COM · Détachement militaire",           lat:-21.5, lng:165.9, type:"military"},
  {name:"Guadeloupe",              label:"DOM · Détachement militaire",               lat:16.3,  lng:-61.4, type:"military"},
  {name:"Marie-Galante",           label:"DOM · Détachement militaire",               lat:15.9,  lng:-61.3, type:"military"},
  {name:"Afghanistan",             label:"OPEX Afghanistan · ISAF / Armée de Terre",  lat:33.9,  lng:67.7,  type:"military"}
];

let globeInited = false, globe, visitedMarkers = [];

function initGlobe() {
  if (globeInited) return;
  globeInited = true;

  // Remplir listes tags
  const tT = document.getElementById('tTags');
  const mT = document.getElementById('mTags');

  // Accordéon destinations sur mobile
document.querySelectorAll('.dest-col').forEach(col => {
  const h3 = col.querySelector('h3');
  if (!h3) return;
  h3.addEventListener('click', () => {
    col.classList.toggle('open');
  });
  // Ouvrir le premier par défaut
  if (col === document.querySelector('.dest-col')) col.classList.add('open');
});

  const hEl = document.createElement('span');
  hEl.className = 'dtag h'; hEl.innerHTML = '❤️ Nouvelle-Calédonie';
  hEl.onclick = () => flyTo(DESTINATIONS[0], hEl);
  tT.appendChild(hEl);
  DESTINATIONS.forEach(d => {
    if (d.type === 'heart') return;
    const el = document.createElement('span');
    el.className = 'dtag ' + d.type;
    el.innerHTML = `<span class="dtag-dot ${d.type==='travel'?'t':'m'}"></span>${FLAGS[d.name]||''} ${d.name}`;
    el.onclick = () => flyTo(d, el);
    (d.type==='travel' ? tT : mT).appendChild(el);
  });

  const allPoints = [
    { name:"Paris (départ)", lat:DEPART.lat, lng:DEPART.lng, type:"depart" },
    ...DESTINATIONS
  ];

  globe = Globe()(document.getElementById('globeViz'))
    .globeImageUrl('//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg')
    .backgroundImageUrl('//cdn.jsdelivr.net/npm/three-globe/example/img/night-sky.png')
    .atmosphereColor('rgba(201,168,76,0.15)')
    .atmosphereAltitude(0.15)
    .pointsData(allPoints)
    .pointLat('lat').pointLng('lng')
    .pointColor(d => d.type==='depart' ? '#ffffff' : d.type==='heart' ? '#ff4d6d' : d.type==='military' ? '#aa44cc' : '#C9A84C')
    .pointAltitude(d => d.type==='depart' ? 0.02 : 0.01)
    .pointRadius(d => d.type==='depart' ? 0.6 : 0.5)
    .pointsMerge(false)
    .htmlElementsData([])
    .htmlLat('lat').htmlLng('lng').htmlAltitude(0.05)
    .htmlElement(d => {
      const el = document.createElement('div');
      el.style.cssText = 'font-size:18px;cursor:pointer;filter:drop-shadow(0 0 4px rgba(201,168,76,.6));transition:transform .4s;transform:scale(0);';
      el.textContent = FLAGS[d.name] || '🏳';
      el.title = d.name;
      el.onclick = () => flyTo(d);
      requestAnimationFrame(() => { el.style.transform = 'scale(1)'; });
      return el;
    })
    .arcsData([])
    .arcStartLat('startLat').arcStartLng('startLng')
    .arcEndLat('endLat').arcEndLng('endLng')
    .arcColor('color')
    .arcStroke(1.4)
    .arcDashLength(0.4)
    .arcDashGap(0.15)
    .arcDashInitialGap(1)
    .arcDashAnimateTime(FLIGHT_TIME)
    .arcsTransitionDuration(0)
    .onPointClick(p => { if (p.type !== 'depart') flyTo(p); });

  globe.width(document.getElementById('globeViz').offsetWidth);
  /*globe.height(480);*/
  // Hauteur responsive selon la taille de l'écran
function getGlobeHeight() {
  const w = window.innerWidth;
  if (w < 480)  return 220;
  if (w < 640)  return 280;
  if (w < 768)  return 340;
  if (w < 1024) return 400;
  return 480;
}
globe.height(getGlobeHeight());

  globe.pointOfView({ lat:30, lng:10, altitude:2 }, 0);
  setTimeout(() => { globe.controls().autoRotate = true; globe.controls().autoRotateSpeed = 0.4; }, 600);
  globe.onPointHover(p => {
    if (!p) return;
    const flag = FLAGS[p.name] || '';
    const typeStr = p.type==='depart' ? '🛫 Point de départ' : p.type==='heart' ? '❤️ Pays natal' : p.type==='travel' ? '✈ Voyage personnel' : '🪖 Projection militaire';
    document.getElementById('globeInfo').innerHTML =
      `<span style="color:#aaa">${flag} <strong>${p.name}</strong></span>
       <span style="color:#555;font-size:10px"> ${typeStr}${p.label?' — '+p.label:''}</span>
       ${p.type!=='depart' ? '<span style="color:#C9A84C;font-size:10px;margin-left:8px">Clic → décollage ✈</span>' : ''}`;
  });

  /*window.addEventListener('resize', () => {
    if (globe) globe.width(document.getElementById('globeViz').offsetWidth);
  });*/
  window.addEventListener('resize', () => {
  if (!globe) return;
  globe.width(document.getElementById('globeViz').offsetWidth);
  globe.height(getGlobeHeight());
  document.getElementById('globeViz').style.height = getGlobeHeight() + 'px';
});
}

function flyTo(dest, tagEl) {
  if (!globe) return;
  document.querySelectorAll('.dtag').forEach(x => x.classList.remove('fly'));
  if (tagEl) tagEl.classList.add('fly');
  globe.controls().autoRotate = false;
  const col = dest.type==='military'
    ? ['rgba(170,68,204,0.1)','rgba(170,68,204,0.9)']
    : dest.type==='heart'
      ? ['rgba(255,77,109,0.1)','rgba(255,77,109,0.9)']
      : ['rgba(201,168,76,0.1)','rgba(201,168,76,0.9)'];
  globe.arcsData([{ startLat:DEPART.lat, startLng:DEPART.lng, endLat:dest.lat, endLng:dest.lng, color:col }]);
  globe.pointOfView({ lat:(DEPART.lat+dest.lat)/2, lng:(DEPART.lng+dest.lng)/2, altitude:2.2 }, FLIGHT_TIME*.8);
  const flag    = FLAGS[dest.name] || '';
  const col2    = dest.type==='military' ? '#aa44cc' : dest.type==='heart' ? '#ff4d6d' : '#C9A84C';
  const typeStr = dest.type==='heart' ? '❤️ Pays natal' : dest.type==='travel' ? '✈ Voyage' : '🪖 Projection militaire';
  document.getElementById('globeInfo').innerHTML =
    `<span style="color:${col2};font-weight:500">✈ En route vers ${flag} ${dest.name}…</span>
     <span style="color:#555;font-size:10px">${dest.label}</span>`;
  setTimeout(() => {
    globe.arcsData([]);
    const already = visitedMarkers.find(m => m.name === dest.name);
    if (!already) { visitedMarkers.push({...dest}); globe.htmlElementsData([...visitedMarkers]); }
    document.getElementById('globeInfo').innerHTML =
      `<span style="color:${col2};font-size:14px">${flag} ${dest.name}</span>
       <span style="color:#555;font-size:10px"> — ${typeStr} — ${dest.label}</span>`;
    setTimeout(() => { globe.controls().autoRotate = true; globe.controls().autoRotateSpeed = 0.4; }, 2000);
  }, FLIGHT_TIME + 200);
}

/* ============================================================
   QR CODES
============================================================ */
window.addEventListener('load', () => {
  setTimeout(() => {
    try { new QRCode(document.getElementById('qrWA'), { text:QR_WHATSAPP, width:64, height:64, colorDark:'#25D366',  colorLight:'#0d0d0d', correctLevel:QRCode.CorrectLevel.M }); } catch(e){}
    try { new QRCode(document.getElementById('qrLI'), { text:QR_LINKEDIN, width:64, height:64, colorDark:'#0A66C2',  colorLight:'#0d0d0d', correctLevel:QRCode.CorrectLevel.M }); } catch(e){}
  }, 500);
});

/* ============================================================
   TYPEWRITER
============================================================ */
const palette = ['#ffffff','#e8c87a','#C9A84C','#ffdd88','#f0c060','#d4a843','#ffe090','#C9A84C','#f5d070','#e8c87a','#ffffff','#C9A84C','#ffdd88','#e0b050','#f0f0f0','#C9A84C','#e8c87a'];
function initTypewriter() {
  const nameEl  = document.getElementById('heroName');
  const titleEl = document.getElementById('heroTitle');
  const caretEl = document.getElementById('caret');
  const descEl  = document.getElementById('heroDesc');
  const badgeEl = document.getElementById('heroBadge');
  nameEl.innerHTML = '';
  let ci = 0;
  FULL_NAME.split('').forEach(ch => {
    if (ch === ' ') { const s = document.createElement('span'); s.className='sp'; nameEl.appendChild(s); }
    else { const s = document.createElement('span'); s.className='ch'; s.textContent=ch; s.dataset.color=palette[ci%palette.length]; ci++; nameEl.appendChild(s); }
  });
  nameEl.appendChild(caretEl);
  function hd(b) { return b + Math.random()*b*.9 - b*.2; }
  function typeName(cb) {
    const chars = nameEl.querySelectorAll('.ch'); let i = 0;
    function next() { if(i>=chars.length){cb&&cb();return;} chars[i].classList.add('vis'); chars[i].style.color=chars[i].dataset.color; i++; setTimeout(next,hd(100)); }
    setTimeout(next, 500);
  }
  function typeTitle(cb) {
    titleEl.textContent=''; let i=0;
    setTimeout(() => {
      function next() { if(i>=FULL_TITLE.length){caretEl.classList.add('hide');setTimeout(startShimmer,200);cb&&cb();return;} titleEl.textContent+=FULL_TITLE[i]; i++; setTimeout(next,hd(35)); }
      next();
    }, 350);
  }
  function startShimmer() {
    const chars = Array.from(nameEl.querySelectorAll('.ch'));
    const wave = ['#ffffff','#f5d888','#C9A84C','#ffee99','#e8c87a','#C9A84C','#f0f0f0'];
    let off = 0;
    setInterval(() => { chars.forEach((c,i)=>{c.style.color=wave[(i-off+wave.length*10)%wave.length];c.style.transition='color .35s ease';}); off=(off+1)%wave.length; }, 280);
  }
  typeName(() => typeTitle(() => {
    setTimeout(() => descEl.classList.add('vis'), 200);
    setTimeout(() => badgeEl.classList.add('vis'), 700);
  }));
}

/* ============================================================
   AVATAR ROTATIF
============================================================ */
function initAvatar() {
  let flipped = false, autoT = null;
  function flip() { flipped=!flipped; document.getElementById('avatarInner').classList.toggle('flipped',flipped); document.getElementById('dot0').classList.toggle('on',!flipped); document.getElementById('dot1').classList.toggle('on',flipped); }
  function startAuto() { autoT = setInterval(flip, 30000); }
  const aw = document.getElementById('avatarWrap');
  aw.addEventListener('mouseenter', () => { clearInterval(autoT); if(!flipped) flip(); });
  aw.addEventListener('mouseleave', () => { if(flipped) flip(); startAuto(); });
  aw.addEventListener('click',      () => { clearInterval(autoT); flip(); startAuto(); });
  startAuto();
}

/* ============================================================
   RAYONS DE SOLEIL
============================================================ */
function initSunRays() {
  const sc    = document.getElementById('sunCanvas');
  const ctx   = sc.getContext('2d');
  const hero  = document.getElementById('hero');
  const rays  = Array.from({length:18}, (_, i) => ({
    angle:   (i/18)*Math.PI*2,
    speed:   .0002 + Math.random()*.0003,
    width:   .04 + Math.random()*.06,
    opacity: .03 + Math.random()*.05,
    length:  .7 + Math.random()*.4
  }));
  let ox=.15, oy=.5, tx=.15, ty=.5;
  /*hero.addEventListener('mousemove', e => { const r=hero.getBoundingClientRect(); tx=(e.clientX-r.left)/r.width; ty=(e.clientY-r.top)/r.height; });
  hero.addEventListener('mouseleave', () => { tx=.15; ty=.5; });*/
  // Utiliser document au lieu du hero pour capturer même sous la nav
document.addEventListener('mousemove', e => {
  const r = hero.getBoundingClientRect();
  // Calculer la position relative au hero même si la souris est sur la nav
  const x = (e.clientX - r.left) / r.width;
  const y = (e.clientY - r.top)  / r.height;
  // Seulement mettre à jour si la souris est dans la zone visible
  if (x >= 0 && x <= 1 && y >= -0.5 && y <= 1.5) {
    tx = Math.max(0, Math.min(1, x));
    ty = Math.max(0, Math.min(1, y));
  }
});

// Retour au centre quand la souris quitte complètement la fenêtre
document.addEventListener('mouseleave', () => { tx=.15; ty=.5; });
  function rsz() { sc.width=hero.offsetWidth; sc.height=hero.offsetHeight; } rsz();
  new ResizeObserver(rsz).observe(hero);
  function draw(ts) {
    const t=ts*.001; ox+=(tx-ox)*.04; oy+=(ty-oy)*.04;
    const W=sc.width, H=sc.height, cx=ox*W, cy=oy*H, mR=Math.sqrt(W*W+H*H);
    ctx.clearRect(0,0,W,H);
    rays.forEach(r => {
      const a=r.angle+t*r.speed*60, a1=a-r.width/2, a2=a+r.width/2, len=mR*r.length;
      ctx.beginPath(); ctx.moveTo(cx,cy);
      ctx.lineTo(cx+Math.cos(a1)*len, cy+Math.sin(a1)*len);
      ctx.lineTo(cx+Math.cos(a2)*len, cy+Math.sin(a2)*len);
      ctx.closePath();
      const g = ctx.createRadialGradient(cx,cy,0,cx,cy,len);
      g.addColorStop(0, `rgba(201,168,76,${r.opacity*2.5})`);
      g.addColorStop(.3,`rgba(201,168,76,${r.opacity})`);
      g.addColorStop(1, 'rgba(201,168,76,0)');
      ctx.fillStyle=g; ctx.fill();
    });
    const h = ctx.createRadialGradient(cx,cy,0,cx,cy,120);
    h.addColorStop(0,'rgba(201,168,76,0.08)'); h.addColorStop(.5,'rgba(201,168,76,0.03)'); h.addColorStop(1,'rgba(201,168,76,0)');
    ctx.beginPath(); ctx.arc(cx,cy,120,0,Math.PI*2); ctx.fillStyle=h; ctx.fill();
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}

/* ============================================================
   INIT
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  initAvatar();
  initSunRays();
});