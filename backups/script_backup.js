/* ================================================================
   ROBOPOWER SOLUTIONS — script.js
   Language switching · Scroll animations · Counter animation
   ================================================================ */

'use strict';

/* ================================================================
   TRANSLATIONS
   ================================================================ */
const T = {
  de: {
    'nav.about':    'Über mich',
    'nav.services': 'Leistungen',
    'nav.projects': 'Projekte',
    'nav.contact':  'Kontakt',

    'hero.core':  'Robotic Engineering & Commissioning',
    'hero.by':    'Inhaber:',
    'hero.cta':   'Projekt anfragen',
    'hero.cta2':  'Leistungen',
    'hero.cv':    'Profil PDF',
    'hd.prog':    'Programmierung',
    'hd.safety':  'Safety',
    'hd.comm':    'Inbetriebnahme',
    'hd.opt':     'Optimierung',
    'hd.pm':      'Projektleitung / Consulting',

    'stats.years':     'Jahre Erfahrung',
    'stats.brands':    'Fabrikate',
    'stats.countries': 'Länder',
    'stats.certs':     'Zertifizierungen',

    'about.tag':   '01 / PROFIL',
    'about.title': 'Über mich',
    'about.role':  'Freiberuflicher Roboterprogrammierer',
    'about.avail': 'Ab sofort verfügbar',
    'about.text':  'Roboter-Spezialist mit 10+ Jahren Erfahrung in Automatisierung und Robotik. Spezialisiert auf KUKA (KRL, KRC4/KRC5, SafeOperation 3.4), FANUC (TP, Karel, DCS) und Yaskawa Motoman (FSU). INTEGRA W7 zertifiziert nach Mercedes-Benz OEM-Standard. Zuletzt Lead-Koordinator Roboterinbetriebnahme beim MBAG-Serienanlauf Gen5 – 10+ KUKA KRC5-Roboterzellen. Internationale Einsatzerfahrung: Deutschland, USA, Ungarn, Thailand, Mexiko, Tschechien.',

    'meta.location':   'Standort',
    'meta.deploy':     'Einsatz',
    'meta.deployVal':  'DE + International',
    'meta.lang':       'Sprachen',
    'meta.langVal':    'Deutsch · Englisch',
    'meta.type':       'Einsatzart',
    'meta.typeVal':    'Vor Ort & Remote',

    'focus.automotive': 'Automotive',
    'focus.plant':      'Anlagenbau',
    'focus.mfg':        'Fertigungsautomatisierung',

    'exp1.role':   'Lead-Koordinator Roboterinbetriebnahme',
    'exp1.detail': 'MBAG Gen5 Batterielinie · KUKA KRC5 · INTEGRA W7',
    'exp2.role':   'Roboterprogrammierer & Inbetriebnehmer',
    'exp3.role':   'Staatl. gepr. Techniker',
    'exp3.co':     'Max-Eyth Schule, Kirchheim u. T.',
    'exp3.detail': 'Automatisierungstechnik / Mechatronik',
    'exp4.role':   'Service- & Anwendungstechniker',
    'exp4.detail': '5-Achs-CNC-Maschinen · Thailand',
    'meta.legal':       'Rechtliches',
    'meta.legalVal':    'EU-Arbeitserlaubnis',
    'meta.insurance':   'Versicherung',
    'meta.insuranceVal':'Berufshaftpflicht aktiv',

    'cert.kuka1':   'Roboterprogrammierung 1 (2019)',
    'cert.kuka2':   'IBN KRC4 (2019)',
    'cert.kuka3':   'SafeOperation 3.x (2021)',
    'cert.kuka4':   'Roboterprogrammierung 2 (2021)',
    'cert.integra': 'Mercedes-Benz OEM-Standard (2023)',

    'services.tag':   '02 / LEISTUNGEN',
    'services.title': 'Kompetenzen & Technologien',

    'svc.kuka':       'Programmierung & IBN mit KRL, KRC4/KRC5. Offline-Simulation mit KUKA.Sim und WorkVisual Konfiguration.',
    'svc.fanuc':      'Programmierung & IBN mit TP und Karel. Simulation in Roboguide. R-30iB / iD Controller-Expertise.',
    'svc.yaskawa':    'Roboterprogrammierung & IBN Yaskawa Motoman. Offline-Simulation mit MotoSim EG-VRC.',
    'svc.safety.name':'Safety-Abnahmen',
    'svc.safety':     'Sicherheitskonfiguration, Zonen-Setup und Freigabe. SafeOperation 3.4, DCS und FSU — herstellerübergreifend.',
    'svc.integra':    'Standardisierung nach Mercedes-Benz AG Richtlinie. INTEGRA W7 konforme IBN von KUKA KRC5 Robotersystemen.',
    'svc.ibn.name':   'Inbetriebnahme & Projektleitung',
    'svc.ibn':        'Gesamtprojekt-IBN bis Serienreife. Teamleitung bei komplexen Anlageneinläufen. PROFINET/SPS-Anbindung.',

    'projects.tag':      '03 / REFERENZEN',
    'projects.title':    'Projektreferenzen',
    'projects.subtitle': 'Realisiert bei EMAG Systems GmbH (2019–2022) & GROB-WERKE / MBAG (2022–2026)',

    'proj1.name': 'MBAG Gen5 – Batterielinie',
    'proj1.role': 'Lead-Koordinator Roboterinbetriebnahme',
    'proj1.desc': 'Serienanlauf der Mercedes-Benz Gen5 Batteriemontagelinie. 4 Linien Deutschland + 1 Linie Thailand. 10+ KUKA KRC5-Roboterzellen, INTEGRA W7 konform — Prototyp bis Serie.',
    'proj2.role': 'Roboterintegration',
    'proj2.desc': 'Integration von FANUC & YASKAWA Robotern in eine HCM110 Doppelspindel-Fräsmaschine. Pendelspindelprinzip. IBN in Mexiko.',
    'proj3.role': 'Stapelzelle / Palettierung',
    'proj3.desc': 'Programmierung & IBN einer KUKA-Palettierroboterzelle für automatisiertes Zahnrad- und Wellen-Handling. Beladung einer Verzahnungsschleifmaschine.',
    'proj4.role': '3D-Bin-Picking | Hohlwellen',
    'proj4.desc': 'Erstimplementierung eines kameragestützten Bin-Picking-Systems: 3D-Punktwolkenerfassung per Keyence zur Lageerkennung von Hohlwellen aus dem Schüttgutbehälter.',
    'proj5.role': 'Doppelgreifer-System',
    'proj5.desc': 'Programmierung & IBN eines Doppelgreifer-Robotersystems zur simultanen Be- und Entladung mehrerer CNC-Bearbeitungszentren.',
    'proj6.role': 'Roboter-Handling | eldec-MIND',
    'proj6.desc': 'Programmierung & IBN eines Roboter-Handlingsystems für Lager-Außen- und -Innenringe. Vollautomatische Beladung einer eldec-MIND Induktionshärteanlage. IBN in den USA.',
    'proj7.name': 'Hawle Armaturen – Freilassing',
    'proj7.role': '3D-Bin-Picking | Armaturenteile',
    'proj7.desc': 'Kameragestütztes Bin-Picking-System zur Entnahme von Armaturenteilen aus dem Schüttgutbehälter. Robotergeführte Übergabe an EMAG-Drehmaschine zur vollautomatischen Bearbeitung.',
    'proj.details':     'Details anzeigen',
    'badge.flagship':   'Flagship-Projekt',
    'badge.binpicking': 'Bin-Picking',
    'badge.binpicking.sub': '3D-Kameragestütztes Greifen aus dem Schüttgut',

    'contact.tag':      '04 / KONTAKT',
    'contact.title':    'Projekt anfragen',
    'contact.intro':    'Sie suchen einen erfahrenen Roboterspezialisten für Ihr nächstes Automatisierungsprojekt? Ich freue mich auf Ihre Anfrage.',
    'contact.location': 'Raum Göppingen / Baden-Württemberg',
    'contact.avail':    'Ab sofort verfügbar · Bundesweit & International',

    'form.name':    'Name',
    'form.email':   'E-Mail',
    'form.company': 'Unternehmen',
    'form.msg':     'Projektbeschreibung',
    'form.submit':  'Anfrage senden',
    'form.note':    'Antwort innerhalb von 24 Stunden.',
    'form.sent':    'Gesendet ✓',

    'footer.tagline': 'Industrielle Roboterprogrammierung & Inbetriebnahme',
    'footer.vat':     'Inhaber: Jan Bremauer',
  },

  en: {
    'nav.about':    'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact':  'Contact',

    'hero.core':  'Robotic Engineering & Commissioning',
    'hero.by':    'Owner:',
    'hero.cta':   'Request project',
    'hero.cta2':  'Services',
    'hero.cv':    'Profile PDF',
    'hd.prog':    'Programming',
    'hd.safety':  'Safety',
    'hd.comm':    'Commissioning',
    'hd.opt':     'Optimization',
    'hd.pm':      'Project Management / Consulting',

    'stats.years':     'Years Experience',
    'stats.brands':    'Robot Brands',
    'stats.countries': 'Countries',
    'stats.certs':     'Certifications',

    'about.tag':   '01 / PROFILE',
    'about.title': 'About me',
    'about.role':  'Freelance Robot Programmer',
    'about.avail': 'Available immediately',
    'about.text':  'Robotics specialist with 10+ years of experience in automation and robotics. Specialized in KUKA (KRL, KRC4/KRC5, SafeOperation 3.4), FANUC (TP, Karel, DCS) and Yaskawa Motoman (FSU). INTEGRA W7 certified to Mercedes-Benz OEM standard. Most recently Lead Coordinator for robot commissioning on the MBAG Gen5 series launch — 10+ KUKA KRC5 robot cells. International experience: Germany, USA, Hungary, Thailand, Mexico, Czech Republic.',

    'meta.location':  'Location',
    'meta.deploy':    'Deployment',
    'meta.deployVal': 'DE + International',
    'meta.lang':      'Languages',
    'meta.langVal':   'German · English',
    'meta.type':      'Work mode',
    'meta.typeVal':   'On-site & Remote',

    'focus.automotive': 'Automotive',
    'focus.plant':      'Plant Engineering',
    'focus.mfg':        'Manufacturing Automation',

    'exp1.role':   'Lead Coordinator Robot Commissioning',
    'exp1.detail': 'MBAG Gen5 Battery Line · KUKA KRC5 · INTEGRA W7',
    'exp2.role':   'Robot Programmer & Commissioning Engineer',
    'exp3.role':   'State-certified Technician',
    'exp3.co':     'Max-Eyth School, Kirchheim u. T.',
    'exp3.detail': 'Automation Engineering / Mechatronics',
    'exp4.role':   'Service & Application Technician',
    'exp4.detail': '5-Axis CNC Machines · Thailand',
    'meta.legal':       'Legal',
    'meta.legalVal':    'EU Work Permit',
    'meta.insurance':   'Insurance',
    'meta.insuranceVal':'Professional liability active',

    'cert.kuka1':   'Robot Programming 1 (2019)',
    'cert.kuka2':   'Commissioning KRC4 (2019)',
    'cert.kuka3':   'SafeOperation 3.x (2021)',
    'cert.kuka4':   'Robot Programming 2 (2021)',
    'cert.integra': 'Mercedes-Benz OEM Standard (2023)',

    'services.tag':   '02 / SERVICES',
    'services.title': 'Expertise & Technologies',

    'svc.kuka':       'Programming & commissioning with KRL, KRC4/KRC5. Offline simulation with KUKA.Sim and WorkVisual configuration.',
    'svc.fanuc':      'Programming & commissioning with TP and Karel. Simulation in Roboguide. R-30iB / iD controller expertise.',
    'svc.yaskawa':    'Robot programming & commissioning Yaskawa Motoman. Offline simulation with MotoSim EG-VRC.',
    'svc.safety.name':'Safety Certifications',
    'svc.safety':     'Safety configuration, zone setup and sign-off. SafeOperation 3.4, DCS and FSU — across all robot brands.',
    'svc.integra':    'Standardization to Mercedes-Benz AG guidelines. INTEGRA W7 compliant commissioning of KUKA KRC5 robot systems.',
    'svc.ibn.name':   'Commissioning & Project Management',
    'svc.ibn':        'Full project commissioning to series readiness. Team leadership for complex system startups. PROFINET/PLC integration.',

    'projects.tag':      '03 / REFERENCES',
    'projects.title':    'Project References',
    'projects.subtitle': 'Realized at EMAG Systems GmbH (2019–2022) & GROB-WERKE / MBAG (2022–2026)',

    'proj1.name': 'MBAG Gen5 – Battery Line',
    'proj1.role': 'Lead Coordinator Robot Commissioning',
    'proj1.desc': 'Series launch of the Mercedes-Benz Gen5 battery assembly line. 4 lines in Germany + 1 line in Thailand. 10+ KUKA KRC5 robot cells, INTEGRA W7 compliant — prototype to series production.',
    'proj2.role': 'Robot Integration',
    'proj2.desc': 'Integration of FANUC & YASKAWA robots into an HCM110 double-spindle milling machine. Pendulum spindle principle. Commissioning in Mexico.',
    'proj3.role': 'Stacking Cell / Palletizing',
    'proj3.desc': 'Programming & commissioning of a KUKA palletizing robot cell for automated gear and shaft handling. Loading a gear grinding machine.',
    'proj4.role': '3D Bin-Picking | Hollow Shafts',
    'proj4.desc': 'First implementation of a camera-based bin-picking system: 3D point cloud detection via Keyence for position detection and individual extraction of hollow shafts from bulk containers.',
    'proj5.role': 'Dual Gripper System',
    'proj5.desc': 'Programming & commissioning of a dual gripper robot system for simultaneous loading and unloading of multiple CNC machining centers.',
    'proj6.role': 'Robot Handling | eldec-MIND',
    'proj6.desc': 'Programming & commissioning of a robot handling system for bearing outer and inner rings. Fully automatic loading of an eldec-MIND induction hardening system. Commissioning in the USA.',
    'proj7.name': 'Hawle Armaturen – Freilassing',
    'proj7.role': '3D Bin-Picking | Valve Components',
    'proj7.desc': 'Camera-based bin-picking system for extracting valve components from bulk containers. Robot-guided transfer to EMAG lathe for fully automated machining.',
    'proj.details':     'Show details',
    'badge.flagship':   'Flagship Project',
    'badge.binpicking': 'Bin-Picking',
    'badge.binpicking.sub': '3D camera-guided picking from bulk containers',

    'contact.tag':      '04 / CONTACT',
    'contact.title':    'Request a project',
    'contact.intro':    'Looking for an experienced robotics specialist for your next automation project? I look forward to your inquiry.',
    'contact.location': 'Göppingen region / Baden-Württemberg',
    'contact.avail':    'Available immediately · Nationwide & International',

    'form.name':    'Name',
    'form.email':   'Email',
    'form.company': 'Company',
    'form.msg':     'Project description',
    'form.submit':  'Send inquiry',
    'form.note':    'Response within 24 hours.',
    'form.sent':    'Sent ✓',

    'footer.tagline': 'Industrial Robot Programming & Commissioning',
    'footer.vat':     'Owner: Jan Bremauer',
  }
};

/* ================================================================
   STATE
   ================================================================ */
let lang            = 'de';
let countersStarted = false;

/* ================================================================
   LANGUAGE
   ================================================================ */
function applyLanguage(l) {
  lang = l;
  const t = T[l];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.documentElement.lang = l;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === l);
  });

  if (t['meta.title']) {
    document.title = l === 'de'
      ? 'RoboPower Solutions – Roboterprogrammierung & IBN | Jan Bremauer'
      : 'RoboPower Solutions – Robot Programming & Commissioning | Jan Bremauer';
  }
}

/* ================================================================
   NAVBAR
   ================================================================ */
function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const burger    = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  const sections  = document.querySelectorAll('section[id]');
  const linkEls   = document.querySelectorAll('.nav-link');

  /* Scroll → scrolled class + active link */
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Active section highlight */
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        linkEls.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });
  sections.forEach(s => sectionObserver.observe(s));

  /* Hamburger */
  burger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('.nav-link').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      burger.classList.remove('open');
    });
  });

  /* Language buttons */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });
}

/* ================================================================
   COUNTER ANIMATION
   ================================================================ */
function animateCount(el, target, duration) {
  const start = performance.now();
  const tick  = now => {
    const p    = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);          /* ease-out cubic */
    el.textContent = Math.floor(ease * target);
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  };
  requestAnimationFrame(tick);
}

function initCounters() {
  const nums = document.querySelectorAll('.stat-num[data-target]');
  if (!nums.length) return;

  const io = new IntersectionObserver(entries => {
    if (!countersStarted && entries.some(e => e.isIntersecting)) {
      countersStarted = true;
      nums.forEach((el, i) => {
        setTimeout(() => animateCount(el, parseInt(el.dataset.target, 10), 1400), i * 160);
      });
    }
  }, { threshold: 0.4 });

  const bar = document.querySelector('.hero-stats');
  if (bar) io.observe(bar);
}

/* ================================================================
   SCROLL REVEAL
   ================================================================ */
function initReveal() {
  const selectors = [
    '.svc-card', '.proj-card', '.bp-group', '.cert-row',
    '.tl-item',  '.section-header', '.contact-grid',
    '.about-grid', '.contact-info', '.contact-form',
    '.focus-tags', '.profile-card', '.meta-grid',
  ];

  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${(i % 6) * 0.07}s`;
    });
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ================================================================
   SMOOTH SCROLL (offset for fixed nav)
   ================================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navH = document.getElementById('navbar').offsetHeight;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ================================================================
   CONTACT FORM — Formspree
   ► Ersetze DEINE_FORM_ID mit der ID aus formspree.io/f/XXXXXXXX
   ================================================================ */
const FORMSPREE_ID = 'mgopbeyr';

function initForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn  = form.querySelector('.form-submit');
    const orig = btn.textContent;

    btn.textContent = '...';
    btn.disabled    = true;

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method:  'POST',
        headers: { 'Accept': 'application/json' },
        body:    new FormData(form),
      });

      if (res.ok) {
        btn.textContent = T[lang]['form.sent'];
        btn.classList.add('sent');
        form.reset();
        setTimeout(() => {
          btn.textContent = orig;
          btn.classList.remove('sent');
          btn.disabled = false;
        }, 4000);
      } else {
        const data = await res.json();
        const msg  = data?.errors?.map(e => e.message).join(', ') || 'Fehler beim Senden.';
        btn.textContent = msg;
        btn.style.background = '#ef4444';
        setTimeout(() => {
          btn.textContent      = orig;
          btn.style.background = '';
          btn.disabled         = false;
        }, 4000);
      }
    } catch {
      btn.textContent = 'Netzwerkfehler.';
      setTimeout(() => {
        btn.textContent = orig;
        btn.disabled    = false;
      }, 3000);
    }
  });
}

/* ================================================================
   INIT
   ================================================================ */
/* ================================================================
   PROJECT MODAL — data-driven
   ================================================================ */
const PROJECTS = {
  mbag: {
    brand:'KUKA', brandClass:'pb-kuka', year:'Sept. 2022 – April 2026',
    title:'MBAG Gen5 – Batterielinie',
    subtitle:'Roboterteamleitung | 4 Linien DE + 1 Linie Thailand | Prototyp bis Serie',
    context:'Festanstellung bei GROB-WERKE GmbH im Auftrag Mercedes-Benz AG',
    facts:[
      {l:'Auftraggeber', v:'MBAG (Mercedes-Benz AG)'},
      {l:'Umfang',       v:'5 Fertigungslinien'},
      {l:'Region',       v:'Deutschland + Thailand'},
      {l:'Phase',        v:'Prototyp bis Serie'},
      {l:'Rolle',        v:'IBN-Roboterteamleiter'},
      {l:'Fabrikat',     v:'KUKA KRC5'},
      {l:'Standard',     v:'INTEGRA W7 (MBAG)'},
      {l:'Besonderheit', v:'Intl. Einsatz · Klebe- & Kamera-IBN'},
    ],
    apps:[
      {n:'Schraubroboter',            d:'Vollautom. Verschrauben von Batteriemodulen nach definierten Anzugsmomenten'},
      {n:'Dichtmittelauftrag',         d:'Robotergeführter Dichtmittelauftrag mit dynamischer Bahnhöhenregelung'},
      {n:'Batterieentnahme (Blister)', d:'Vollachsige Batterieentnahme aus Blister mit Kamera- & Laserlagekorrektur'},
      {n:'Zellblock-Kombiklebestation',d:'Wärmeleitpaste-Auftrag & Verpressen nach Messtaster-Sollwerten'},
      {n:'2K-Kleber-Fügeprozess',      d:'Dyn. Geschwindigkeits- & Parallelitätsregelung für exaktes Fixierkleben der Batterie'},
      {n:'Roboter auf 7. Achse',       d:'Sicheres Batterie-Unterteil-Handling auf KUKA Linearachse (INTEGRA W7)'},
      {n:'Schraubenbestückung',        d:'Kameragestützte Positionierung & Schraubenstecken ins Batterie-Unterteil'},
    ],
    appsLabel:'Realisierte Applikationen',
    appsSub:'KUKA INTEGRA Welle 7',
    chips:['Mercedes-Benz AG','GROB-WERKE','INTEGRA W7','5 Linien','International'],
  },
  emag: {
    brand:'FANUC / YASKAWA', brandClass:'pb-fanuc', year:'2019–2022',
    title:'EMAG – HCM110',
    subtitle:'Roboterintegration | Kugelkäfig-Fräsung',
    context:'EMAG Systems GmbH',
    facts:[
      {l:'Fabrikate',  v:'FANUC & YASKAWA'},
      {l:'Maschine',   v:'HCM110 Doppelspindel-Fräsmaschine'},
      {l:'Prinzip',    v:'Pendelspindelprinzip'},
      {l:'IBN-Region', v:'Mexiko (international)'},
    ],
    desc:'Integration von FANUC & YASKAWA Robotern in eine HCM110 Doppelspindel-Fräsmaschine nach dem Pendelspindelprinzip. Vollständige Programmierung & Inbetriebnahme vor Ort in Mexiko.',
    chips:['EMAG','Mexiko','Handling','CNC'],
  },
  festool: {
    brand:'KUKA', brandClass:'pb-kuka', year:'2019–2022',
    title:'Festool – Tschechien',
    subtitle:'KUKA Stapelzelle | Palettierung',
    context:'EMAG Systems GmbH',
    facts:[
      {l:'Fabrikat',   v:'KUKA'},
      {l:'Applikation',v:'Palettierroboterzelle'},
      {l:'Handling',   v:'Zahnräder & Wellen'},
      {l:'IBN-Region', v:'Tschechien (international)'},
    ],
    desc:'Programmierung & IBN einer KUKA-Palettierroboterzelle für automatisiertes Zahnrad- und Wellen-Handling. Vollständige Beladung einer Verzahnungsschleifmaschine. IBN vor Ort in Tschechien.',
    chips:['Festool','Tschechien','Palettierung','KUKA'],
  },
  sew: {
    brand:'KUKA', brandClass:'pb-kuka', year:'2019–2022',
    title:'SEW-Eurodrive',
    subtitle:'3D-Bin-Picking | Hohlwellen',
    context:'EMAG Systems GmbH',
    facts:[
      {l:'Fabrikat',  v:'KUKA'},
      {l:'Sensor',    v:'Keyence 3D-Kamera'},
      {l:'Methode',   v:'3D-Punktwolkenerfassung'},
      {l:'Bauteil',   v:'Hohlwellen aus Schüttgut'},
    ],
    desc:'Erstimplementierung eines kameragestützten Bin-Picking-Systems: 3D-Punktwolkenerfassung per Keyence zur Lageerkennung und Einzelentnahme von Hohlwellen aus dem Schüttgutbehälter.',
    chips:['SEW','Keyence','Bin-Picking','KUKA'],
  },
  schmidt: {
    brand:'FANUC', brandClass:'pb-fanuc', year:'2019–2022',
    title:'Schmidt Automotive',
    subtitle:'Doppelgreifer-System',
    context:'EMAG Systems GmbH',
    facts:[
      {l:'Fabrikat',   v:'FANUC'},
      {l:'System',     v:'Doppelgreifer-Robotersystem'},
      {l:'Aufgabe',    v:'Be- & Entladung CNC-Zentren'},
      {l:'Betrieb',    v:'Simultaner Doppelbetrieb'},
    ],
    desc:'Programmierung & IBN eines Doppelgreifer-Robotersystems zur simultanen Be- und Entladung mehrerer CNC-Bearbeitungszentren.',
    chips:['Automotive','CNC','Handling','FANUC'],
  },
  eldec: {
    brand:'FANUC', brandClass:'pb-fanuc', year:'2019–2022',
    title:'Eldec – Charleston, USA',
    subtitle:'Roboter-Handling | eldec-MIND',
    context:'EMAG Systems GmbH',
    facts:[
      {l:'Fabrikat',   v:'FANUC'},
      {l:'Anlage',     v:'eldec-MIND Induktionshärteanlage'},
      {l:'Bauteile',   v:'Lager-Außen- & Innenringe'},
      {l:'IBN-Region', v:'Charleston, USA (international)'},
    ],
    desc:'Programmierung & IBN eines Roboter-Handlingsystems für Lager-außen- und -innenringe. Vollautomatische Beladung einer eldec-MIND Induktionshärteanlage. Internationaler Einsatz in Charleston, USA.',
    chips:['Eldec','USA','International','FANUC'],
  },
  hawle: {
    brand:'KUKA', brandClass:'pb-kuka', year:'2019–2022',
    title:'Hawle Armaturen – Freilassing',
    subtitle:'3D-Bin-Picking | Armaturenteile',
    context:'EMAG Systems GmbH',
    facts:[
      {l:'Fabrikat',   v:'KUKA'},
      {l:'Sensor',     v:'Kamerasystem'},
      {l:'Bauteil',    v:'Armaturenteile aus Schüttgut'},
      {l:'Übergabe',   v:'EMAG-Drehmaschine'},
    ],
    desc:'Kameragestütztes Bin-Picking-System zur Entnahme von Armaturenteilen aus dem Schüttgutbehälter. Robotergeführte Übergabe an EMAG-Drehmaschine zur vollautomatischen Bearbeitung.',
    chips:['Hawle Armaturen','Freilassing','Bin-Picking'],
  },
};

function renderModal(id) {
  const p = PROJECTS[id];
  if (!p) return '';

  const factsHTML = p.facts.map(f =>
    `<div class="mf-cell"><span class="mf-label">${f.l}</span><span class="mf-val">${f.v}</span></div>`
  ).join('');

  const appsHTML = p.apps ? `
    <div class="modal-section">
      <div class="modal-section-title">${p.appsLabel || 'Applikationen'}<span class="modal-apps-sub">${p.appsSub || ''}</span></div>
      <div class="modal-app-list">
        ${p.apps.map(a => `
          <div class="modal-app-item">
            <div class="modal-app-name">${a.n}</div>
            <div class="modal-app-desc">${a.d}</div>
          </div>`).join('')}
      </div>
    </div>` : '';

  const descHTML = p.desc ? `
    <div class="modal-section">
      <p class="modal-desc">${p.desc}</p>
      <div class="modal-chips">${p.chips.map(c => `<span>${c}</span>`).join('')}</div>
    </div>` : '';

  const chipsOnlyHTML = (!p.desc && p.chips) ? `
    <div class="modal-section">
      <div class="modal-chips">${p.chips.map(c => `<span>${c}</span>`).join('')}</div>
    </div>` : '';

  return `
    <div class="modal-header">
      <div class="modal-meta">
        <span class="proj-brand ${p.brandClass}">${p.brand}</span>
        <span class="modal-year">${p.year}</span>
      </div>
      <h2 class="modal-title" id="modalTitle">${p.title}</h2>
      <div class="modal-subtitle">${p.subtitle}</div>
      <div class="modal-context">${p.context}</div>
    </div>
    <div class="modal-section">
      <div class="modal-section-title">Projekteckdaten</div>
      <div class="modal-facts-grid">${factsHTML}</div>
    </div>
    ${appsHTML}
    ${descHTML}
    ${chipsOnlyHTML}
  `;
}

function initModal() {
  const modal    = document.getElementById('projectModal');
  const content  = document.getElementById('modalContent');
  const closeBtn = document.getElementById('modalClose');
  if (!modal) return;

  const open = id => {
    content.innerHTML = renderModal(id);
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-project]').forEach(card => {
    card.addEventListener('click', () => open(card.dataset.project));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') open(card.dataset.project); });
  });

  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ================================================================
   BACK TO TOP
   ================================================================ */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

document.addEventListener('DOMContentLoaded', () => {
  applyLanguage('de');
  initNavbar();
  initCounters();
  initReveal();
  initSmoothScroll();
  initForm();
  initModal();
  initBackToTop();
});
