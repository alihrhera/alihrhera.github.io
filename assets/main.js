
// ─── i18n dictionary ─────────────────────────────────
const translations = {
    en: {
        'nav-home': 'Home', 'nav-about': 'About', 'nav-work': 'Portfolio', 'nav-contact': 'Contact',
        'nav-talk': "Let's Talk",
        'hero-status': 'Available · Lead Roles',
        'hero-eyebrow': 'Hi There,',
        'hero-h1': 'I\'m <span class="accent">Ali Hrhera</span>',
        'hero-iam': 'I am a',
        'hero-sub': 'Senior Android Engineer with 8+ years building offline-first, high-performance mobile systems and on-device AI.',
        'hero-cta-work': 'View My Work', 'hero-cta-contact': 'Contact Me',
        'terminal-thread': 'Main Thread: 1.2ms (Zero Jank)',
        'tag-remote': 'Global Remote', 'tag-since': 'Android since 2016',
        'about-lbl': '01 // About', 'about-h2': 'About Me',
        'about-p': 'I\'m <b>Ali Tarek Hrhera</b>, a Senior Android Engineer &amp; Systems Architect. I design mission-critical, offline-first mobile infrastructures across construction-tech, digital healthcare, and commerce using 100% Jetpack Compose, modular Kotlin coroutines, and on-device NPU inference. Outside work I contribute to open source and mentor Android engineers through VADT.',
        'tab-exp': 'Experience', 'tab-skills': 'Main Skills', 'tab-principles': 'Principles', 'tab-impact': 'Impact',
        'pr-badge-scale': '500k+ Active Field Units', 'pr-role': 'Senior Android Developer',
        'pr-location': 'Austria / Remote',
        'pr-desc': 'Scaled the core Android platform for construction documentation, BIM model rendering, and task inspection management. Pioneered high-throughput background sync strategies handling multi-gigabyte architectural blueprints and offline inspection reports with zero data loss. Modernized legacy components into modular Kotlin Clean Architecture.',
        'pr-m1-lbl': 'Blueprint Load', 'pr-m1-val': '60% Faster BIM Render',
        'pr-m2-lbl': 'Sync Integrity', 'pr-m2-val': 'Zero-Loss 2G Replay',
        'pr-m3-lbl': 'Codebase', 'pr-m3-val': '100% Jetpack Compose',
        'hc-badge-cert': 'HIPAA &amp; GDPR Certified', 'hc-role': 'Senior Android Developer',
        'hc-location': 'Health Tech',
        'hc-desc': 'Engineered patient-vital telemetry systems and low-latency telemedicine consultation pipelines. Enforced strict HIPAA data security protocols via SQLCipher database encryption and hardware-backed biometric keystore management. Maintained 99.98% crash-free sessions across intensive medical real-time video consults.',
        'hc-m1-lbl': 'Reliability SLA', 'hc-m1-val': '99.98% Crash-Free',
        'hc-m2-lbl': 'Streaming Latency', 'hc-m2-val': '&lt; 180ms WebRTC',
        'hc-m3-lbl': 'Security Layer', 'hc-m3-val': 'Hardware Keystore Enclave',
        'wn-badge-scale': 'Millions of Transactions', 'wn-role': 'Senior Android Developer',
        'wn-location': 'Scale-Up Commerce',
        'wn-desc': 'Architected the checkout, catalog, and high-concurrency order processing modules. Reduced cold application startup latency by 42% through baseline profile generation, lazy component initializers, and dependency graph pruning. Co-led the engineering transition from XML layouts to 100% Jetpack Compose.',
        'wn-m1-lbl': 'Startup Latency', 'wn-m1-val': '42% Faster Cold Boot',
        'wn-m2-lbl': 'Checkout Concurrency', 'wn-m2-val': 'Zero-Lock Queuing',
        'wn-m3-lbl': 'App Size', 'wn-m3-val': 'Dynamic Modules (-28%)',
        'em-role': 'M.S Android Developer',
        'em-desc': 'Led architectural refactoring from RxJava2 to Kotlin Coroutines, MVVM adoption, and multi-tier enterprise client software.',
        'it-role': 'Android Developer',
        'it-desc': 'High-throughput REST client integrations, disk-caching mechanisms, and reactive client-server communication channels.',
        'te-role': 'Android Developer',
        'te-desc': 'Native Android foundations, Java-to-Kotlin transition, layout rendering optimizations, and strict memory leak diagnostics.',
        'sk1-title': 'Core &amp; Kotlin', 'sk2-title': 'Architecture', 'sk3-title': 'Jetpack &amp; Libs',
        'sk4-title': 'AI on Android', 'sk5-title': 'Testing &amp; CI/CD',
        'p1-h3': 'Offline-First &amp; Resilient Sync',
        'p1-p': 'Encrypted SQLCipher databases, CRDT-inspired reconciliation, and durable WorkManager queues that recover from arbitrary network drops without data corruption.',
        'p2-h3': '100% Declarative Compose UI',
        'p2-p': 'Enterprise design token architectures, custom LayoutModifiers, accessibility semantics, and strict recomposition auditing for smooth 120Hz interactions.',
        'p3-h3': 'On-Device AI &amp; Edge Agents',
        'p3-p': 'Local INT8 quantization with MediaPipe and Gemini Nano. Edge document embeddings (Local Vector RAG) and real-time computer vision with zero server overhead.',
        'p4-h3': 'Modular Clean Architecture',
        'p4-p': 'Separation into :feature, :core, and :domain modules. Fast compile times via build-cache, Dagger-Hilt dependency injection, and comprehensive unit tests with Turbine.',
        'st-lt-stars': '⭐ LibreTube Stars', 'st-amaze-stars': '⭐ AmazeFileManager Stars',
        'st-forks': 'Forks on LibreTube', 'st-mentored': 'Engineers Mentored',
        'st-crash': 'Crash-Free Sessions', 'st-devices': 'Active Devices',
        'st-npu': 'NPU Latency', 'st-boot': 'Faster Cold Boot',
        'work-lbl': '02 // Portfolio', 'work-h2': 'Portfolio', 'work-sub': 'Here are some of my recent works',
        'f-all': 'All', 'f-android': 'Android', 'f-oss': 'Open Source', 'f-community': 'Community',
        'f-web': 'Full Stack',
        'cat-oss': 'Open Source', 'cat-android': 'Android App', 'cat-community': 'Community',
        'cat-web': 'Freelance · Full Stack',
        'tech-used': 'Technologies Used:', 'private': 'Private codebase',
        'view-more': 'View More', 'view-less': 'View Less',
        'oss-c1-h3': 'LibreTube Core Streaming Pipeline',
        'oss-c1-p': 'Critical media streaming stability updates for LibreTube, the privacy-respecting YouTube client. Optimized ExoPlayer / Media3 lifecycle handling and background buffer recovery under network latency.',
        'oss-c2-h3': 'LibreTube Advanced Optimization',
        'oss-c2-p': 'Performance work on background audio playback, network reconnection state transitions, and memory footprint during long media sessions.',
        'oss-c3-h3': 'Volunteer Android Devs Training (VADT)',
        'oss-c3-p': 'Founder &amp; lead mentor. 150+ engineers trained across cohorts in Kotlin Coroutines, Jetpack Compose, multi-module architecture, and production testing.',
        'pj-pr-h': 'PlanRadar Field Platform',
        'pj-pr-p': 'Offline-first construction documentation and BIM plan viewer used by 500k+ field units. 60% faster blueprint rendering with zero-loss background sync.',
        'pj-hc-h': 'HealloCare Telemedicine',
        'pj-hc-p': 'HIPAA-compliant patient telemetry and WebRTC video consults with &lt; 180ms latency and 99.98% crash-free sessions.',
        'pj-wn-h': 'WNDO Social Commerce',
        'pj-wn-p': 'Checkout, catalog and order modules handling millions of transactions. 42% faster cold start and a 28% smaller app via dynamic feature modules.',
        'pj-kn-h': 'KN Libya',
        'pj-kn-p': 'Full-stack Laravel platform for KN Libya, an all-in-one Libyan service hub covering money transfers, jobs, rides, a marketplace and messaging.',
        'pj-corc-h': 'CORC Championship',
        'pj-corc-p': 'Full-stack Laravel website for the Creators\' Open Championship, a robotics, programming and AI competition, with team registration, events and gallery.',
        'pj-wa-h': 'WhatsApp Message Gateway',
        'pj-wa-p': 'Full-stack Laravel SaaS for bulk WhatsApp messaging, with subscription plans, API access, delivery tracking and real-time analytics.',
        'pj-disha-h': 'Disha Market',
        'pj-disha-p': 'Full-stack Laravel web platform for Disha Market, a grocery delivery service in Egypt with fast home delivery and secure payments.',
        'pj-govo-h': 'Govo',
        'pj-govo-p': 'Full-stack Laravel web platform for Govo, an on-demand delivery service in Saudi Arabia.',
        'pj-zajil-h': 'Zajil',
        'pj-zajil-p': 'Full-stack Laravel web platform for Zajil, a multi-vendor ordering and delivery service in Egypt connecting customers, stores and couriers.',
        'pj-hadreen-h': 'Hadreen',
        'pj-hadreen-p': 'Full-stack Laravel web platform for Hadreen, a Saudi food delivery service connecting customers with restaurants, merchants and drivers.',
        'ct-lbl': '03 // Contact', 'ct-h2': 'Contact Me', 'ct-form-h': 'Send Me A Note',
        'ph-name': 'Name', 'ph-email': 'Email Address', 'ph-subject': 'Subject', 'ph-message': 'Your Message',
        'ct-send': 'Send Mail', 'ct-note': 'Opens your mail app with the message pre-filled.',
        'ct-li': 'View LinkedIn Profile', 'ct-catch': 'Catch Me On',
        'copy': 'Copy', 'copied': 'Copied!',
        'ft-copyright': '© 2026 Ali Tarek Hrhera. Crafted for high-performance edge architectures.',
        'ft-role': 'Senior Android Engineer &amp; Edge AI Systems Architect · Android Developer since 2016',
        roles: ['Android Architect', 'Edge AI Engineer', 'Kotlin & Compose Expert', 'Open Source Contributor'],
    },
    ar: {
        'nav-home': 'الرئيسية', 'nav-about': 'عني', 'nav-work': 'أعمالي', 'nav-contact': 'تواصل',
        'nav-talk': 'لنتحدث',
        'hero-status': 'متاح · مناصب قيادية',
        'hero-eyebrow': 'مرحباً،',
        'hero-h1': 'أنا <span class="accent">علي حرحيره</span>',
        'hero-iam': '',
        'hero-sub': 'مهندس برمجيات أول بخبرة تزيد عن 8 سنوات في بناء أنظمة هواتف عالية الأداء تعمل دون إنترنت، وتشغيل الذكاء الاصطناعي على الجهاز.',
        'hero-cta-work': 'تصفح أعمالي', 'hero-cta-contact': 'تواصل معي',
        'terminal-thread': 'الخيط الرئيسي: 1.2ms (بلا تلعثم)',
        'tag-remote': 'عن بُعد عالمياً', 'tag-since': 'أندرويد منذ 2016',
        'about-lbl': '01 // عني', 'about-h2': 'نبذة عني',
        'about-p': 'أنا <b>علي حرحيره</b>، مهندس برمجيات. أصمم بنيات تحتية حيوية للهواتف المحمولة تعمل دون إنترنت في قطاعات تقنية البناء والرعاية الصحية الرقمية والتجارة، باستخدام Jetpack Compose بالكامل وكوروتينات Kotlin المعيارية والاستدلال على المعالج العصبي. خارج العمل أساهم في المصدر المفتوح وأدرّب مطوري أندرويد عبر مبادرة VADT.',
        'tab-exp': 'الخبرة', 'tab-skills': 'المهارات', 'tab-principles': 'المبادئ', 'tab-impact': 'الأثر',
        'pr-badge-scale': '500k+ وحدة ميدانية نشطة', 'pr-role': 'مطور أندرويد أول',
        'pr-location': 'النمسا / عن بُعد',
        'pr-desc': 'توسيع نطاق منصة أندرويد الأساسية لتوثيق البناء وعرض نماذج BIM وإدارة مهام التفتيش. ريادة استراتيجيات المزامنة في الخلفية عالية الإنتاجية للتعامل مع المخططات المعمارية متعددة الجيجابايت وتقارير التفتيش دون إنترنت. تحديث المكونات القديمة إلى بنية Kotlin النظيفة المعيارية.',
        'pr-m1-lbl': 'تحميل المخطط', 'pr-m1-val': 'عرض BIM أسرع بـ 60%',
        'pr-m2-lbl': 'سلامة المزامنة', 'pr-m2-val': 'إعادة 2G بلا خسارة',
        'pr-m3-lbl': 'قاعدة الكود', 'pr-m3-val': '100% Jetpack Compose',
        'hc-badge-cert': 'معتمد HIPAA وGDPR', 'hc-role': 'مطور أندرويد أول',
        'hc-location': 'تقنية الصحة',
        'hc-desc': 'تصميم أنظمة قياس عن بُعد لمؤشرات المريض وخطوط الاستشارة الطبية عن بُعد منخفضة الزمن. تطبيق بروتوكولات أمان HIPAA الصارمة عبر تشفير SQLCipher وإدارة خزينة المفاتيح البيومترية. الحفاظ على معدل 99.98% من الجلسات الخالية من الأعطال.',
        'hc-m1-lbl': 'مستوى الخدمة', 'hc-m1-val': '99.98% خالٍ من الأعطال',
        'hc-m2-lbl': 'زمن البث', 'hc-m2-val': '&lt; 180ms WebRTC',
        'hc-m3-lbl': 'طبقة الأمان', 'hc-m3-val': 'حصن خزينة المفاتيح',
        'wn-badge-scale': 'ملايين المعاملات', 'wn-role': 'مطور أندرويد أول',
        'wn-location': 'تجارة سريعة النمو',
        'wn-desc': 'تصميم وحدات الدفع والكتالوج ومعالجة الطلبات عالية التزامن. خفض زمن بدء التشغيل البارد بنسبة 42% عبر ملفات تعريف الأساس والمُهيئات الكسولة وتقليم رسم التبعيات. قيادة الانتقال من تخطيطات XML إلى Jetpack Compose بالكامل.',
        'wn-m1-lbl': 'زمن بدء التشغيل', 'wn-m1-val': 'إقلاع بارد أسرع بـ 42%',
        'wn-m2-lbl': 'تزامن الدفع', 'wn-m2-val': 'طابور بلا قفل',
        'wn-m3-lbl': 'حجم التطبيق', 'wn-m3-val': 'وحدات ديناميكية (28%−)',
        'em-role': 'مطور أندرويد متقدم',
        'em-desc': 'قيادة إعادة الهيكلة المعمارية من RxJava2 إلى كوروتينات كوتلن، واعتماد MVVM، وبرمجيات مؤسسية متعددة الطبقات.',
        'it-role': 'مطور أندرويد',
        'it-desc': 'تكاملات عميل REST عالية الإنتاجية، وآليات التخزين المؤقت على القرص، وقنوات الاتصال التفاعلية بين العميل والخادم.',
        'te-role': 'مطور أندرويد',
        'te-desc': 'أسس أندرويد الأصلية، والانتقال من Java إلى Kotlin، وتحسينات عرض التخطيط، وتشخيص تسرب الذاكرة.',
        'sk1-title': 'الأساسيات وكوتلن', 'sk2-title': 'البنية المعمارية', 'sk3-title': 'Jetpack والمكتبات',
        'sk4-title': 'الذكاء الاصطناعي على أندرويد', 'sk5-title': 'الاختبار وCI/CD',
        'p1-h3': 'أولوية دون إنترنت والمزامنة المرنة',
        'p1-p': 'قواعد بيانات SQLCipher مشفرة، ومصالحة مستوحاة من CRDT، وقوائم انتظار WorkManager دائمة تتعافى من انقطاع الشبكة دون فساد البيانات.',
        'p2-h3': 'واجهة Compose التصريحية بالكامل',
        'p2-p': 'بنيات رموز التصميم للمؤسسات، ومعدّلات التخطيط المخصصة، ودلالات إمكانية الوصول، ومراجعة صارمة لإعادة التركيب لتفاعلات سلسة بـ 120 هرتز.',
        'p3-h3': 'الذكاء الاصطناعي على الجهاز وعوامل الحافة',
        'p3-p': 'ضغط INT8 محلي مع MediaPipe وGemini Nano. تضمينات المستندات على الحافة (Local Vector RAG) ورؤية الحاسوب في الوقت الفعلي بدون تكاليف خادم.',
        'p4-h3': 'بنية نظيفة معيارية',
        'p4-p': 'تقسيم إلى وحدات :feature و:core و:domain. أوقات تجميع سريعة عبر ذاكرة التخزين المؤقت، وحقن التبعيات عبر Dagger-Hilt، واختبارات وحدة شاملة مع Turbine.',
        'st-lt-stars': '⭐ نجوم LibreTube', 'st-amaze-stars': '⭐ نجوم AmazeFileManager',
        'st-forks': 'نسخة مشتقة من LibreTube', 'st-mentored': 'مهندس تم تدريبه',
        'st-crash': 'جلسات بلا أعطال', 'st-devices': 'جهاز نشط',
        'st-npu': 'زمن المعالج العصبي', 'st-boot': 'إقلاع بارد أسرع',
        'work-lbl': '02 // أعمالي', 'work-h2': 'معرض الأعمال', 'work-sub': 'إليك بعضاً من أحدث أعمالي',
        'f-all': 'الكل', 'f-android': 'أندرويد', 'f-oss': 'مصدر مفتوح', 'f-community': 'المجتمع',
        'f-web': 'Full Stack',
        'cat-oss': 'مصدر مفتوح', 'cat-android': 'تطبيق أندرويد', 'cat-community': 'المجتمع',
        'cat-web': 'عمل حر · Full Stack',
        'tech-used': 'التقنيات المستخدمة:', 'private': 'كود خاص',
        'view-more': 'عرض المزيد', 'view-less': 'عرض أقل',
        'oss-c1-h3': 'خط بث LibreTube الأساسي',
        'oss-c1-p': 'تحديثات استقرار بث الوسائط الحيوية ضمن LibreTube، عميل YouTube المحترم للخصوصية. تحسين معالجة دورة حياة ExoPlayer / Media3 واستعادة المخزن المؤقت في الخلفية.',
        'oss-c2-h3': 'تحسينات متقدمة لـ LibreTube',
        'oss-c2-p': 'تحسينات أداء لتشغيل الصوت في الخلفية، وانتقالات حالة إعادة الاتصال، وتقليل استهلاك الذاكرة خلال جلسات الوسائط الطويلة.',
        'oss-c3-h3': 'التدريب التطوعي لمطوري أندرويد (VADT)',
        'oss-c3-p': 'مؤسس ومرشد رئيسي. تدريب أكثر من 150 مهندساً عبر دفعات متعددة في كوروتينات كوتلن وJetpack Compose والمعمارية متعددة الوحدات واختبارات الإنتاج.',
        'pj-pr-h': 'منصة PlanRadar الميدانية',
        'pj-pr-p': 'توثيق مواقع البناء وعارض مخططات BIM يعمل دون إنترنت لأكثر من 500 ألف وحدة ميدانية. عرض مخططات أسرع بـ 60% ومزامنة خلفية بلا فقدان بيانات.',
        'pj-hc-h': 'HealloCare للطب عن بُعد',
        'pj-hc-p': 'قياس مؤشرات المرضى واستشارات فيديو WebRTC متوافقة مع HIPAA بزمن أقل من 180ms وجلسات خالية من الأعطال بنسبة 99.98%.',
        'pj-wn-h': 'WNDO للتجارة الاجتماعية',
        'pj-wn-p': 'وحدات الدفع والكتالوج والطلبات لملايين المعاملات. إقلاع أسرع بـ 42% وتطبيق أصغر بـ 28% عبر الوحدات الديناميكية.',
        'pj-kn-h': 'كن ليبيا',
        'pj-kn-p': 'منصة Laravel متكاملة (Full Stack) لـ "كن ليبيا"، مركز خدمات ليبي شامل يضم تحويل الأموال والوظائف والتوصيل والسوق والمراسلات.',
        'pj-corc-h': 'بطولة المبدعين المفتوحة',
        'pj-corc-p': 'موقع Laravel متكامل لبطولة المبدعين المفتوحة في الروبوتات والبرمجة والذكاء الاصطناعي، يشمل تسجيل الفرق والفعاليات ومعرض الصور.',
        'pj-wa-h': 'بوابة رسائل واتساب',
        'pj-wa-p': 'منصة SaaS متكاملة بـ Laravel لإرسال رسائل واتساب الجماعية، مع باقات اشتراك وواجهة API وتتبع التسليم وتحليلات لحظية.',
        'pj-disha-h': 'ديشا ماركت',
        'pj-disha-p': 'منصة ويب متكاملة بـ Laravel لـ "ديشا ماركت"، خدمة توصيل بقالة في مصر مع توصيل سريع للمنازل ودفع آمن.',
        'pj-govo-h': 'جوفو',
        'pj-govo-p': 'منصة ويب متكاملة بـ Laravel لـ "جوفو"، خدمة توصيل حسب الطلب في المملكة العربية السعودية.',
        'pj-zajil-h': 'زاجل',
        'pj-zajil-p': 'منصة ويب متكاملة بـ Laravel لـ "زاجل"، خدمة طلب وتوصيل متعددة المتاجر في مصر تربط العملاء بالمتاجر والمندوبين.',
        'pj-hadreen-h': 'هادرين',
        'pj-hadreen-p': 'منصة ويب متكاملة بـ Laravel لـ "هادرين"، خدمة توصيل طعام سعودية تربط العملاء بالمطاعم والتجار والسائقين.',
        'ct-lbl': '03 // تواصل', 'ct-h2': 'تواصل معي', 'ct-form-h': 'أرسل لي رسالة',
        'ph-name': 'الاسم', 'ph-email': 'البريد الإلكتروني', 'ph-subject': 'الموضوع', 'ph-message': 'رسالتك',
        'ct-send': 'إرسال', 'ct-note': 'سيفتح تطبيق البريد لديك والرسالة جاهزة.',
        'ct-li': 'عرض ملف LinkedIn', 'ct-catch': 'تجدني على',
        'copy': 'نسخ', 'copied': 'تم النسخ!',
        'ft-copyright': '© 2026 علي حرحيره. مُصمَّم لبنيات الحافة عالية الأداء.',
        'ft-role': 'مهندس أندرويد أول ومهندس بنية أنظمة الذكاء الاصطناعي على الحافة · مطور أندرويد منذ 2016',
        roles: ['مهندس برمجيات لأنظمة أندرويد', 'خبير Kotlin و Compose', 'مساهم في المصدر المفتوح'],
    }
};

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const t = key => translations[currentLang][key];

// ─── Loader ──────────────────────────────────────────
const loader = document.getElementById('loader');
const hideLoader = () => loader.classList.add('done');
window.addEventListener('load', () => setTimeout(hideLoader, 300));
setTimeout(hideLoader, 2500); // never block the page on slow fonts/images

// ─── Navbar: shrink on scroll + mobile menu ──────────
const navbar = document.getElementById('navbar');
const ham = document.getElementById('ham');
const navElements = document.getElementById('nav-elements');

const onScroll = () => navbar.classList.toggle('floating', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

function setMenu(open) {
    ham.classList.toggle('active', open);
    ham.setAttribute('aria-expanded', open);
    navElements.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
}

ham.addEventListener('click', () => setMenu(!navElements.classList.contains('open')));
navElements.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

// ─── Active nav link on scroll ───────────────────────
const navLinks = document.querySelectorAll('.nav-link');
const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = '#' + entry.target.id;
        navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === id));
    });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach(s => navObserver.observe(s));

// ─── Scroll reveal ───────────────────────────────────
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ─── Code console tabs ───────────────────────────────
document.querySelectorAll('.console-tab').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.console-tab').forEach(b => b.classList.toggle('active', b === btn));
        document.querySelectorAll('.code').forEach(c => { c.hidden = c.id !== 'snippet-' + btn.dataset.snippet; });
    });
});

// ─── About tabs ──────────────────────────────────────
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(x => {
            x.classList.toggle('active', x === tab);
            x.setAttribute('aria-selected', x === tab);
        });
        document.querySelectorAll('.tab-panel').forEach(p => {
            p.classList.toggle('active', p.id === 'panel-' + tab.dataset.tab);
        });
    });
});

// ─── Portfolio: filter, view more, tap-to-expand ─────
const cards = [...document.querySelectorAll('.project-card')];
const viewMoreBtn = document.getElementById('view-more');
const INITIAL_COUNT = 3;
let activeFilter = 'all';
let showAll = false;

function renderWorks() {
    const matches = cards.filter(c => activeFilter === 'all' || c.dataset.cat === activeFilter);
    const limit = activeFilter === 'all' && !showAll ? INITIAL_COUNT : Infinity;
    cards.forEach(c => c.classList.add('is-hidden'));
    matches.forEach((c, i) => c.classList.toggle('is-hidden', i >= limit));
    viewMoreBtn.hidden = activeFilter !== 'all' || matches.length <= INITIAL_COUNT;
    viewMoreBtn.innerHTML = t(showAll ? 'view-less' : 'view-more');
}

document.querySelectorAll('.project-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.project-tab').forEach(x => x.classList.toggle('active', x === tab));
        activeFilter = tab.dataset.filter;
        renderWorks();
    });
});

viewMoreBtn.addEventListener('click', () => {
    showAll = !showAll;
    renderWorks();
    if (!showAll) document.getElementById('work').scrollIntoView();
});

// Touch devices have no hover, so a tap toggles the expanded card details.
cards.forEach(card => {
    const toggle = () => {
        const open = !card.classList.contains('expanded');
        cards.forEach(c => { c.classList.remove('expanded'); c.setAttribute('aria-expanded', 'false'); });
        card.classList.toggle('expanded', open);
        card.setAttribute('aria-expanded', open);
    };
    card.addEventListener('click', e => { if (!e.target.closest('a')) toggle(); });
    card.addEventListener('keydown', e => {
        if ((e.key === 'Enter' || e.key === ' ') && e.target === card) { e.preventDefault(); toggle(); }
    });
});

// ─── Typing effect ───────────────────────────────────
const typedEl = document.getElementById('typed');
let typeTimer;

function startTyping() {
    clearTimeout(typeTimer);
    const roles = t('roles');
    if (reducedMotion) { typedEl.textContent = roles[0]; return; }
    let roleIdx = 0, charIdx = 0, deleting = false;
    const tick = () => {
        const word = roles[roleIdx];
        charIdx += deleting ? -1 : 1;
        typedEl.textContent = word.slice(0, charIdx);
        let delay = deleting ? 45 : 90;
        if (!deleting && charIdx === word.length) { deleting = true; delay = 1800; }
        else if (deleting && charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; delay = 400; }
        typeTimer = setTimeout(tick, delay);
    };
    tick();
}

// ─── Copy email to clipboard ────────────────────────
const copyBtn = document.getElementById('copy-email');
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('alihrhera1@gmail.com').then(() => {
        copyBtn.textContent = t('copied');
        setTimeout(() => { copyBtn.textContent = t('copy'); }, 2000);
    });
});

// ─── i18n ────────────────────────────────────────────
let currentLang = 'ar';
try {
    currentLang = localStorage.getItem('lang') || (navigator.language.startsWith('ar') ? 'ar' : 'en');
} catch (e) { /* storage blocked */ }

function applyLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('.lang-label').forEach(el => { el.textContent = lang === 'ar' ? 'EN' : 'AR'; });
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const val = translations[lang][el.dataset.i18n];
        if (val !== undefined) el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        el.placeholder = translations[lang][el.dataset.i18nPh];
    });
    try { localStorage.setItem('lang', lang); } catch (e) { /* storage blocked */ }
    renderWorks();
    startTyping();
}

function toggleLang() { applyLang(currentLang === 'en' ? 'ar' : 'en'); }

window.toggleLang = toggleLang;

applyLang(currentLang);