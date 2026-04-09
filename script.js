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
    'nav.about':    'Über uns',
    'nav.services': 'Leistungen',
    'nav.projects': 'Projekte',
    'nav.contact':  'Kontakt',

    'hero.core':  'Robotik. Präzise. Zuverlässig. Serienreif.',
    'hero.by':    'Gründer & Inhaber:',
    'hero.cta':   'Kontakt aufnehmen',
    'hero.cta2':  'Leistungen entdecken',
    'hero.cv':    'Kompetenzprofil',
    'hd.prog':    'Programmierung',
    'hd.safety':  'Safety',
    'hd.comm':    'Inbetriebnahme',
    'hd.opt':     'Optimierung',
    'hd.pm':      'Projektleitung / Consulting',

    'stats.years':     'Jahre Erfahrung',
    'stats.brands':    'Fabrikate',
    'stats.countries': 'Länder',
    'stats.certs':     'Zertifizierungen',

    'about.tag':   '01 / ÜBER UNS',
    'about.title': 'Wer wir sind',
    'about.role':  'Ihr Spezialist für industrielle Robotik',
    'about.avail': 'Ab sofort verfügbar',
    'about.text':  'RoboPower Solutions ist ein spezialisierter Robotik-Dienstleister für Automotive, Maschinenbau und Anlagenbau. Wir bringen 10+ Jahre Projekterfahrung in Programmierung, Safety-Abnahmen und Inbetriebnahme mit — von der ersten Codezeile bis zum Serienstart. Als inhabergeführtes Unternehmen agieren wir mit kurzen Entscheidungswegen und einem persönlichen Ansprechpartner. Unser Ziel: zuverlässige Lösungen, die im ersten Anlauf funktionieren. Wir arbeiten bundesweit und international — flexibel, termingebunden, ergebnisorientiert.',

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
    'services.title': 'Was wir leisten',

    'svc.kuka':       'Wir programmieren und nehmen KUKA-Roboter mit KRL auf KRC4- und KRC5-Steuerungen in Betrieb. Offline-Simulation mit KUKA.Sim, Konfiguration mit WorkVisual — vom Einzelsystem bis zur Serienanlage. Ihr Nutzen: kürzere Anlaufzeiten, reproduzierbare Qualität.',
    'svc.fanuc':      'Programmierung & IBN mit TP und Karel. Simulation in Roboguide. Umfassende Expertise auf R-30iB / iD Controllern. Ihr Nutzen: bewährte Methodik, direkt einsetzbar.',
    'svc.yaskawa':    'Roboterprogrammierung & IBN für Yaskawa Motoman. Offline-Simulation mit MotoSim EG-VRC. Ihr Nutzen: herstellerübergreifende Kompetenz aus einer Hand.',
    'svc.safety.name':'Safety-Abnahmen',
    'svc.safety':     'Sicherheitskonfiguration, Zonen-Setup und Freigabe nach Maschinenrichtlinie. SafeOperation 3.4, DCS und FSU — herstellerübergreifend. Ihr Nutzen: rechtssichere Abnahmen ohne Verzögerung.',
    'svc.integra':    'Standardisierung nach Mercedes-Benz AG Richtlinie INTEGRA W7. Konforme IBN von KUKA KRC5 Robotersystemen im OEM-Umfeld. Ihr Nutzen: direkte OEM-Freigabe, keine Nacharbeiten.',
    'svc.ibn.name':   'Inbetriebnahme & Projektleitung',
    'svc.ibn':        'Wir übernehmen die Gesamtprojekt-IBN bis zur Serienreife — inklusive Teamkoordination bei komplexen Anlageneinläufen und PROFINET/SPS-Anbindung. Ihr Nutzen: ein Ansprechpartner, volle Verantwortung.',

    'projects.tag':      '03 / REFERENZEN',
    'projects.title':    'Unsere Projektreferenzen',
    'projects.subtitle': 'Realisiert bei EMAG Systems GmbH (2019–2022) & GROB-WERKE / MBAG (2022–2026)',

    'proj1.name': 'MBAG Gen5 – Batterielinie',
    'proj1.role': 'Lead-Koordinator Roboterinbetriebnahme',
    'proj1.desc': 'Wir koordinierten den Serienanlauf der Mercedes-Benz Gen5 Batteriemontagelinie — 4 Linien in Deutschland, 1 Linie in Thailand. Verantwortlich für über 10 KUKA KRC5-Roboterzellen, INTEGRA W7 konform, vom Prototyp bis zur Serienfreigabe.',
    'proj2.role': 'Roboterintegration',
    'proj2.desc': 'Wir integrierten FANUC- und YASKAWA-Roboter in eine HCM110 Doppelspindel-Fräsmaschine nach dem Pendelspindelprinzip. Inbetriebnahme und Serienanlauf erfolgten vor Ort in Mexiko.',
    'proj3.role': 'Stapelzelle / Palettierung',
    'proj3.desc': 'Wir programmierten und nahmen eine KUKA-Palettierroboterzelle für automatisiertes Zahnrad- und Wellen-Handling in Betrieb — vollautomatische Beladung einer Verzahnungsschleifmaschine.',
    'proj4.role': '3D-Bin-Picking | Hohlwellen',
    'proj4.desc': 'Wir realisierten die Erstimplementierung eines kameragestützten Bin-Picking-Systems: 3D-Punktwolkenerfassung per Keyence-Kamera zur präzisen Lageerkennung und Einzelentnahme von Hohlwellen aus dem Schüttgutbehälter.',
    'proj5.role': 'Doppelgreifer-System',
    'proj5.desc': 'Wir programmierten und nahmen ein Doppelgreifer-Robotersystem zur simultanen Be- und Entladung mehrerer CNC-Bearbeitungszentren in Betrieb — maximale Maschinenauslastung durch optimierte Taktzeiten.',
    'proj6.role': 'Roboter-Handling | eldec-MIND',
    'proj6.desc': 'Wir realisierten ein vollautomatisches Roboter-Handlingsystem für Lager-Außen- und -Innenringe zur Beladung einer eldec-MIND Induktionshärteanlage. Inbetriebnahme erfolgte vor Ort in den USA.',
    'proj7.name': 'Hawle Armaturen – Freilassing',
    'proj7.role': '3D-Bin-Picking | Armaturenteile',
    'proj7.desc': 'Wir implementierten ein kameragestütztes Bin-Picking-System zur vollautomatischen Entnahme von Armaturenteilen aus dem Schüttgut. Robotergeführte Übergabe an eine EMAG-Drehmaschine zur Weiterbearbeitung.',
    'proj.details':     'Details anzeigen',
    'badge.flagship':   'Flagship-Projekt',
    'badge.binpicking': 'Bin-Picking',
    'badge.binpicking.sub': '3D-Kameragestütztes Greifen aus dem Schüttgut',

    'contact.tag':      '04 / KONTAKT',
    'contact.title':    'Projekt anfragen',
    'contact.intro':    'Sie suchen einen zuverlässigen Robotik-Dienstleister für Ihr nächstes Automatisierungsprojekt? Wir sind Ihr direkter Ansprechpartner — ohne Umwege, mit klarer Verantwortung. Sprechen Sie uns an.',
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
    'nav.about':    'About Us',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact':  'Contact',

    'hero.core':  'Robotics. Precise. Reliable. Production-Ready.',
    'hero.by':    'Founder & Owner:',
    'hero.cta':   'Get in touch',
    'hero.cta2':  'Explore services',
    'hero.cv':    'Capability Profile',
    'hd.prog':    'Programming',
    'hd.safety':  'Safety',
    'hd.comm':    'Commissioning',
    'hd.opt':     'Optimization',
    'hd.pm':      'Project Management / Consulting',

    'stats.years':     'Years Experience',
    'stats.brands':    'Robot Brands',
    'stats.countries': 'Countries',
    'stats.certs':     'Certifications',

    'about.tag':   '01 / ABOUT US',
    'about.title': 'Who we are',
    'about.role':  'Your specialist for industrial robotics',
    'about.avail': 'Available immediately',
    'about.text':  'RoboPower Solutions is a specialized robotics service provider for the automotive, mechanical engineering and plant engineering sectors. We bring 10+ years of project experience in programming, safety sign-offs and commissioning — from the first line of code to series production launch. As an owner-managed company, we operate with short decision-making paths and a dedicated point of contact. Our goal: reliable solutions that work the first time. We work nationwide and internationally — flexible, deadline-driven and results-oriented.',

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
    'services.title': 'What we deliver',

    'svc.kuka':       'We program and commission KUKA robots using KRL on KRC4 and KRC5 controllers. Offline simulation with KUKA.Sim, configuration with WorkVisual — from single systems to full production lines. Your benefit: faster ramp-up times, reproducible quality.',
    'svc.fanuc':      'Programming & commissioning with TP and Karel. Simulation in Roboguide. In-depth expertise on R-30iB / iD controllers. Your benefit: proven methodology, immediately deployable.',
    'svc.yaskawa':    'Robot programming & commissioning for Yaskawa Motoman. Offline simulation with MotoSim EG-VRC. Your benefit: cross-brand expertise from a single source.',
    'svc.safety.name':'Safety Sign-offs',
    'svc.safety':     'Safety configuration, zone setup and sign-off to Machinery Directive standards. SafeOperation 3.4, DCS and FSU — across all robot brands. Your benefit: legally compliant approvals without delays.',
    'svc.integra':    'Standardization to Mercedes-Benz AG guideline INTEGRA W7. Compliant commissioning of KUKA KRC5 robot systems in OEM environments. Your benefit: direct OEM approval, no rework.',
    'svc.ibn.name':   'Commissioning & Project Management',
    'svc.ibn':        'We handle full project commissioning through to series readiness — including team coordination for complex system startups and PROFINET/PLC integration. Your benefit: one point of contact, full accountability.',

    'projects.tag':      '03 / REFERENCES',
    'projects.title':    'Our Project References',
    'projects.subtitle': 'Realized at EMAG Systems GmbH (2019–2022) & GROB-WERKE / MBAG (2022–2026)',

    'proj1.name': 'MBAG Gen5 – Battery Line',
    'proj1.role': 'Lead Coordinator Robot Commissioning',
    'proj1.desc': 'We coordinated the series launch of the Mercedes-Benz Gen5 battery assembly line — 4 lines in Germany, 1 line in Thailand. Responsible for over 10 KUKA KRC5 robot cells, INTEGRA W7 compliant, from prototype to series approval.',
    'proj2.role': 'Robot Integration',
    'proj2.desc': 'We integrated FANUC and YASKAWA robots into an HCM110 double-spindle milling machine using the pendulum spindle principle. Commissioning and series launch were carried out on-site in Mexico.',
    'proj3.role': 'Stacking Cell / Palletizing',
    'proj3.desc': 'We programmed and commissioned a KUKA palletizing robot cell for automated gear and shaft handling — fully automatic loading of a gear grinding machine.',
    'proj4.role': '3D Bin-Picking | Hollow Shafts',
    'proj4.desc': 'We realized the first implementation of a camera-based bin-picking system: 3D point cloud detection via Keyence camera for precise position recognition and individual extraction of hollow shafts from bulk containers.',
    'proj5.role': 'Dual Gripper System',
    'proj5.desc': 'We programmed and commissioned a dual gripper robot system for simultaneous loading and unloading of multiple CNC machining centers — maximum machine utilization through optimized cycle times.',
    'proj6.role': 'Robot Handling | eldec-MIND',
    'proj6.desc': 'We realized a fully automated robot handling system for bearing outer and inner rings for loading an eldec-MIND induction hardening system. Commissioning was carried out on-site in the USA.',
    'proj7.name': 'Hawle Armaturen – Freilassing',
    'proj7.role': '3D Bin-Picking | Valve Components',
    'proj7.desc': 'We implemented a camera-based bin-picking system for fully automated extraction of valve components from bulk containers. Robot-guided transfer to an EMAG lathe for further machining.',
    'proj.details':     'Show details',
    'badge.flagship':   'Flagship Project',
    'badge.binpicking': 'Bin-Picking',
    'badge.binpicking.sub': '3D camera-guided picking from bulk containers',

    'contact.tag':      '04 / CONTACT',
    'contact.title':    'Request a project',
    'contact.intro':    'Looking for a reliable robotics partner for your next automation project? We are your direct point of contact — straightforward, with clear accountability. Get in touch with us.',
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

  /* Mobile: show nav logo only when hero logo scrolled out of view */
  const heroLogo = document.querySelector('.hero-logo-img');
  if (heroLogo) {
    const logoObserver = new IntersectionObserver(entries => {
      navbar.classList.toggle('nav-logo-visible', !entries[0].isIntersecting);
    }, { threshold: 0 });
    logoObserver.observe(heroLogo);
  }

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
    chips:['Mercedes-Benz AG','GROB-WERKE','INTEGRA W7','5 Lines','International'],
    de:{
      title:'MBAG Gen5 – Batterielinie',
      subtitle:'Roboterteamleitung | 4 Linien DE + 1 Linie Thailand | Prototyp bis Serie',
      context:'Festanstellung bei GROB-WERKE GmbH im Auftrag Mercedes-Benz AG',
      factsLabel:'Projekteckdaten',
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
      appsLabel:'Realisierte Applikationen',
      appsSub:'KUKA INTEGRA Welle 7',
      apps:[
        {n:'Schraubroboter',            d:'Vollautom. Verschrauben von Batteriemodulen nach definierten Anzugsmomenten'},
        {n:'Dichtmittelauftrag',         d:'Robotergeführter Dichtmittelauftrag mit dynamischer Bahnhöhenregelung'},
        {n:'Batterieentnahme (Blister)', d:'Vollachsige Batterieentnahme aus Blister mit Kamera- & Laserlagekorrektur'},
        {n:'Zellblock-Kombiklebestation',d:'Wärmeleitpaste-Auftrag & Verpressen nach Messtaster-Sollwerten'},
        {n:'2K-Kleber-Fügeprozess',      d:'Dyn. Geschwindigkeits- & Parallelitätsregelung für exaktes Fixierkleben der Batterie'},
        {n:'Roboter auf 7. Achse',       d:'Sicheres Batterie-Unterteil-Handling auf KUKA Linearachse (INTEGRA W7)'},
        {n:'Schraubenbestückung',        d:'Kameragestützte Positionierung & Schraubenstecken ins Batterie-Unterteil'},
      ],
    },
    en:{
      title:'MBAG Gen5 – Battery Line',
      subtitle:'Robot Team Lead | 4 Lines DE + 1 Line Thailand | Prototype to Series',
      context:'Permanent position at GROB-WERKE GmbH on behalf of Mercedes-Benz AG',
      factsLabel:'Project Facts',
      facts:[
        {l:'Client',      v:'MBAG (Mercedes-Benz AG)'},
        {l:'Scope',       v:'5 Production Lines'},
        {l:'Region',      v:'Germany + Thailand'},
        {l:'Phase',       v:'Prototype to Series'},
        {l:'Role',        v:'Robot Commissioning Team Lead'},
        {l:'Brand',       v:'KUKA KRC5'},
        {l:'Standard',    v:'INTEGRA W7 (MBAG)'},
        {l:'Highlight',   v:'Intl. deployment · Adhesive & camera IBN'},
      ],
      appsLabel:'Realized Applications',
      appsSub:'KUKA INTEGRA Wave 7',
      apps:[
        {n:'Screw Robot',              d:'Fully automated tightening of battery modules to defined torque specs'},
        {n:'Sealant Application',      d:'Robot-guided sealant application with dynamic path height control'},
        {n:'Battery Extraction (Blister)',d:'Full-axis battery extraction from blister with camera & laser position correction'},
        {n:'Cell Block Bonding Station',d:'Thermal paste application & pressing to probe setpoints'},
        {n:'2K Adhesive Joining',      d:'Dynamic speed & parallelism control for precise battery fixation bonding'},
        {n:'Robot on 7th Axis',        d:'Safe battery base handling on KUKA linear axis (INTEGRA W7)'},
        {n:'Screw Loading',            d:'Camera-guided positioning & screw insertion into battery base'},
      ],
    },
  },
  emag: {
    brand:'FANUC / YASKAWA', brandClass:'pb-fanuc', year:'2019–2022',
    chips:['EMAG','Mexico','Handling','CNC'],
    de:{
      title:'EMAG – HCM110',
      subtitle:'Roboterintegration | Kugelkäfig-Fräsung',
      context:'EMAG Systems GmbH',
      factsLabel:'Projekteckdaten',
      facts:[
        {l:'Fabrikate',  v:'FANUC & YASKAWA'},
        {l:'Maschine',   v:'HCM110 Doppelspindel-Fräsmaschine'},
        {l:'Prinzip',    v:'Pendelspindelprinzip'},
        {l:'IBN-Region', v:'Mexiko (international)'},
      ],
      desc:'Integration von FANUC & YASKAWA Robotern in eine HCM110 Doppelspindel-Fräsmaschine nach dem Pendelspindelprinzip. Vollständige Programmierung & Inbetriebnahme vor Ort in Mexiko.',
    },
    en:{
      title:'EMAG – HCM110',
      subtitle:'Robot Integration | Ball Cage Milling',
      context:'EMAG Systems GmbH',
      factsLabel:'Project Facts',
      facts:[
        {l:'Brands',       v:'FANUC & YASKAWA'},
        {l:'Machine',      v:'HCM110 Double-Spindle Milling Machine'},
        {l:'Principle',    v:'Pendulum Spindle Principle'},
        {l:'Comm. Region', v:'Mexico (international)'},
      ],
      desc:'Integration of FANUC & YASKAWA robots into an HCM110 double-spindle milling machine using the pendulum spindle principle. Full programming & commissioning on-site in Mexico.',
    },
  },
  festool: {
    brand:'KUKA', brandClass:'pb-kuka', year:'2019–2022',
    chips:['Festool','Czech Republic','Palletizing','KUKA'],
    de:{
      title:'Festool – Tschechien',
      subtitle:'KUKA Stapelzelle | Palettierung',
      context:'EMAG Systems GmbH',
      factsLabel:'Projekteckdaten',
      facts:[
        {l:'Fabrikat',   v:'KUKA'},
        {l:'Applikation',v:'Palettierroboterzelle'},
        {l:'Handling',   v:'Zahnräder & Wellen'},
        {l:'IBN-Region', v:'Tschechien (international)'},
      ],
      desc:'Programmierung & IBN einer KUKA-Palettierroboterzelle für automatisiertes Zahnrad- und Wellen-Handling. Vollständige Beladung einer Verzahnungsschleifmaschine. IBN vor Ort in Tschechien.',
    },
    en:{
      title:'Festool – Czech Republic',
      subtitle:'KUKA Stacking Cell | Palletizing',
      context:'EMAG Systems GmbH',
      factsLabel:'Project Facts',
      facts:[
        {l:'Brand',       v:'KUKA'},
        {l:'Application', v:'Palletizing Robot Cell'},
        {l:'Handling',    v:'Gears & Shafts'},
        {l:'Comm. Region',v:'Czech Republic (international)'},
      ],
      desc:'Programming & commissioning of a KUKA palletizing robot cell for automated gear and shaft handling. Full loading of a gear grinding machine. Commissioning on-site in Czech Republic.',
    },
  },
  sew: {
    brand:'KUKA', brandClass:'pb-kuka', year:'2019–2022',
    chips:['SEW','Keyence','Bin-Picking','KUKA'],
    de:{
      title:'SEW-Eurodrive',
      subtitle:'3D-Bin-Picking | Hohlwellen',
      context:'EMAG Systems GmbH',
      factsLabel:'Projekteckdaten',
      facts:[
        {l:'Fabrikat',  v:'KUKA'},
        {l:'Sensor',    v:'Keyence 3D-Kamera'},
        {l:'Methode',   v:'3D-Punktwolkenerfassung'},
        {l:'Bauteil',   v:'Hohlwellen aus Schüttgut'},
      ],
      desc:'Erstimplementierung eines kameragestützten Bin-Picking-Systems: 3D-Punktwolkenerfassung per Keyence zur Lageerkennung und Einzelentnahme von Hohlwellen aus dem Schüttgutbehälter.',
    },
    en:{
      title:'SEW-Eurodrive',
      subtitle:'3D Bin-Picking | Hollow Shafts',
      context:'EMAG Systems GmbH',
      factsLabel:'Project Facts',
      facts:[
        {l:'Brand',   v:'KUKA'},
        {l:'Sensor',  v:'Keyence 3D Camera'},
        {l:'Method',  v:'3D Point Cloud Detection'},
        {l:'Part',    v:'Hollow Shafts from Bulk Container'},
      ],
      desc:'First implementation of a camera-based bin-picking system: 3D point cloud detection via Keyence for position recognition and individual extraction of hollow shafts from bulk containers.',
    },
  },
  schmidt: {
    brand:'FANUC', brandClass:'pb-fanuc', year:'2019–2022',
    chips:['Automotive','CNC','Handling','FANUC'],
    de:{
      title:'Schmidt Automotive',
      subtitle:'Doppelgreifer-System',
      context:'EMAG Systems GmbH',
      factsLabel:'Projekteckdaten',
      facts:[
        {l:'Fabrikat',   v:'FANUC'},
        {l:'System',     v:'Doppelgreifer-Robotersystem'},
        {l:'Aufgabe',    v:'Be- & Entladung CNC-Zentren'},
        {l:'Betrieb',    v:'Simultaner Doppelbetrieb'},
      ],
      desc:'Programmierung & IBN eines Doppelgreifer-Robotersystems zur simultanen Be- und Entladung mehrerer CNC-Bearbeitungszentren.',
    },
    en:{
      title:'Schmidt Automotive',
      subtitle:'Dual Gripper System',
      context:'EMAG Systems GmbH',
      factsLabel:'Project Facts',
      facts:[
        {l:'Brand',     v:'FANUC'},
        {l:'System',    v:'Dual Gripper Robot System'},
        {l:'Task',      v:'Loading & Unloading CNC Centers'},
        {l:'Operation', v:'Simultaneous Dual Operation'},
      ],
      desc:'Programming & commissioning of a dual gripper robot system for simultaneous loading and unloading of multiple CNC machining centers.',
    },
  },
  eldec: {
    brand:'FANUC', brandClass:'pb-fanuc', year:'2019–2022',
    chips:['Eldec','USA','International','FANUC'],
    de:{
      title:'Eldec – Charleston, USA',
      subtitle:'Roboter-Handling | eldec-MIND',
      context:'EMAG Systems GmbH',
      factsLabel:'Projekteckdaten',
      facts:[
        {l:'Fabrikat',   v:'FANUC'},
        {l:'Anlage',     v:'eldec-MIND Induktionshärteanlage'},
        {l:'Bauteile',   v:'Lager-Außen- & Innenringe'},
        {l:'IBN-Region', v:'Charleston, USA (international)'},
      ],
      desc:'Programmierung & IBN eines Roboter-Handlingsystems für Lager-außen- und -innenringe. Vollautomatische Beladung einer eldec-MIND Induktionshärteanlage. Internationaler Einsatz in Charleston, USA.',
    },
    en:{
      title:'Eldec – Charleston, USA',
      subtitle:'Robot Handling | eldec-MIND',
      context:'EMAG Systems GmbH',
      factsLabel:'Project Facts',
      facts:[
        {l:'Brand',       v:'FANUC'},
        {l:'System',      v:'eldec-MIND Induction Hardening'},
        {l:'Parts',       v:'Bearing Outer & Inner Rings'},
        {l:'Comm. Region',v:'Charleston, USA (international)'},
      ],
      desc:'Programming & commissioning of a robot handling system for bearing outer and inner rings. Fully automatic loading of an eldec-MIND induction hardening system. International deployment in Charleston, USA.',
    },
  },
  hawle: {
    brand:'KUKA', brandClass:'pb-kuka', year:'2019–2022',
    chips:['Hawle Armaturen','Freilassing','Bin-Picking'],
    de:{
      title:'Hawle Armaturen – Freilassing',
      subtitle:'3D-Bin-Picking | Armaturenteile',
      context:'EMAG Systems GmbH',
      factsLabel:'Projekteckdaten',
      facts:[
        {l:'Fabrikat',   v:'KUKA'},
        {l:'Sensor',     v:'Kamerasystem'},
        {l:'Bauteil',    v:'Armaturenteile aus Schüttgut'},
        {l:'Übergabe',   v:'EMAG-Drehmaschine'},
      ],
      desc:'Kameragestütztes Bin-Picking-System zur Entnahme von Armaturenteilen aus dem Schüttgutbehälter. Robotergeführte Übergabe an EMAG-Drehmaschine zur vollautomatischen Bearbeitung.',
    },
    en:{
      title:'Hawle Armaturen – Freilassing',
      subtitle:'3D Bin-Picking | Valve Components',
      context:'EMAG Systems GmbH',
      factsLabel:'Project Facts',
      facts:[
        {l:'Brand',    v:'KUKA'},
        {l:'Sensor',   v:'Camera System'},
        {l:'Part',     v:'Valve Components from Bulk Container'},
        {l:'Transfer', v:'EMAG Lathe'},
      ],
      desc:'Camera-based bin-picking system for extracting valve components from bulk containers. Robot-guided transfer to an EMAG lathe for fully automated machining.',
    },
  },
};

function renderModal(id) {
  const p = PROJECTS[id];
  if (!p) return '';
  const d = p[lang] || p.de;

  const factsHTML = d.facts.map(f =>
    `<div class="mf-cell"><span class="mf-label">${f.l}</span><span class="mf-val">${f.v}</span></div>`
  ).join('');

  const appsHTML = d.apps ? `
    <div class="modal-section">
      <div class="modal-section-title">${d.appsLabel}<span class="modal-apps-sub">${d.appsSub || ''}</span></div>
      <div class="modal-app-list">
        ${d.apps.map(a => `
          <div class="modal-app-item">
            <div class="modal-app-name">${a.n}</div>
            <div class="modal-app-desc">${a.d}</div>
          </div>`).join('')}
      </div>
    </div>` : '';

  const descHTML = d.desc ? `
    <div class="modal-section">
      <p class="modal-desc">${d.desc}</p>
      <div class="modal-chips">${p.chips.map(c => `<span>${c}</span>`).join('')}</div>
    </div>` : '';

  const chipsOnlyHTML = (!d.desc && p.chips) ? `
    <div class="modal-section">
      <div class="modal-chips">${p.chips.map(c => `<span>${c}</span>`).join('')}</div>
    </div>` : '';

  return `
    <div class="modal-header">
      <div class="modal-meta">
        <span class="proj-brand ${p.brandClass}">${p.brand}</span>
        <span class="modal-year">${p.year}</span>
      </div>
      <h2 class="modal-title" id="modalTitle">${d.title}</h2>
      <div class="modal-subtitle">${d.subtitle}</div>
      <div class="modal-context">${d.context}</div>
    </div>
    <div class="modal-section">
      <div class="modal-section-title">${d.factsLabel}</div>
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
  initPhotoLightbox();
});

/* ================================================================
   PHOTO LIGHTBOX
   ================================================================ */
function initPhotoLightbox() {
  const btn      = document.getElementById('profileAvatarBtn');
  const lightbox = document.getElementById('photoLightbox');
  if (!btn || !lightbox) return;

  const backdrop = lightbox.querySelector('.photo-lightbox-backdrop');
  const close    = lightbox.querySelector('.photo-lightbox-close');

  function open() {
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  function closeLb() {
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', open);
  btn.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') open(); });
  backdrop.addEventListener('click', closeLb);
  close.addEventListener('click', closeLb);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });
}
