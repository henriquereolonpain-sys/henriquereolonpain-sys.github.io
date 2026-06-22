// ============================================================
// DADOS DOS PROJETOS
// Para adicionar conteúdo a um projeto:
//   github → link do repositório
//   demo   → link do dashboard publicado
//   video  → URL de embed do YouTube (ex: 'https://www.youtube.com/embed/SEU_ID')
//   images → array de caminhos de imagem (ex: ['img/milho-1.jpg', 'img/milho-2.jpg'])
// ============================================================
const PROJECTS = {
    milho: {
        gradient: 'linear-gradient(135deg,#2563eb,#1d4ed8)',
        tags: ['Python','BigQuery','GitHub Actions','Econometria','Web Scraping'],
        title: 'Monitoramento e Previsão Econométrica',
        subtitle: 'Preço do Milho — Rio Grande do Sul',
        desc: 'Pipeline ETL automatizado correlacionando o preço do milho com variáveis climáticas regionais via API e Web Scraping. Data Warehouse no Google BigQuery com camadas staging e semântica, orquestrado automaticamente via GitHub Actions. Modelos de regressão econométrica identificaram elasticidade de R$1,25 por 10mm de chuva e lag logístico de 6 dias, com 99% de confiança estatística (p-value 0,007).',
        metrics: [{ num:'99%', label:'Confiança estatística' }, { num:'p=0.007', label:'P-value do modelo' }],
        github: 'https://github.com/henriquereolonpain-sys/monitor-clima-pf',
        demo: '',
        video: '',
        images: [
            'https://raw.githubusercontent.com/henriquereolonpain-sys/monitor-clima-pf/main/dashboard_milho.png',
            'https://raw.githubusercontent.com/henriquereolonpain-sys/monitor-clima-pf/main/dados_looker_webscrapi.png',
            'https://raw.githubusercontent.com/henriquereolonpain-sys/monitor-clima-pf/main/OLS.png',
            'https://raw.githubusercontent.com/henriquereolonpain-sys/monitor-clima-pf/main/causalidade_granger.png',
        ],
    },
    recomendacao: {
        gradient: 'linear-gradient(135deg,#7c3aed,#6d28d9)',
        tags: ['Neo4j AuraDB','Python','Pandas','Cypher','Graph DB'],
        title: 'Sistema de Recomendação Híbrido',
        subtitle: 'Next Best Offer — Setor de Cooperativas',
        desc: 'Motor de recomendação financeiro construído com banco de dados orientado a grafos (Neo4j AuraDB) e Python (Pandas), modelando a rede de relacionamentos entre cooperados. Queries otimizadas em Cypher identificam clusters por similaridade de consumo, segmento e faixa de renda. Filtro colaborativo implementado diretamente no banco entrega insights de propensão de compra em milissegundos, aumentando precisão de campanhas de retenção.',
        metrics: [{ num:'NBO', label:'Next Best Offer' }, { num:'Grafos', label:'Modelagem de rede' }],
        github: 'https://github.com/henriquereolonpain-sys/Projeto-Neo4-an-lise-Next-Best-Offer-NBO-com-Grafos',
        demo: '',
        video: '',
        images: [
            'https://raw.githubusercontent.com/henriquereolonpain-sys/Projeto-Neo4-an-lise-Next-Best-Offer-NBO-com-Grafos/master/Gr%C3%A1ficos/5k.png',
            'https://raw.githubusercontent.com/henriquereolonpain-sys/Projeto-Neo4-an-lise-Next-Best-Offer-NBO-com-Grafos/master/Gr%C3%A1ficos/zoom_in.png',
        ],
    },
    brasileirao: {
        gradient: 'linear-gradient(135deg,#059669,#047857)',
        tags: ['Scikit-learn','Python','Random Forest','Naive Bayes','ML'],
        title: 'Modelo Preditivo Esportivo',
        subtitle: 'Brasileirão 2026',
        desc: 'Pipeline completo de Machine Learning para previsão de resultados do Campeonato Brasileiro com dados históricos. Ciclo completo de ML: coleta, feature engineering, treinamento, validação e comunicação de resultados. Comparação entre Random Forest, Regressão Logística e Naive Bayes com avaliação por matriz de confusão e acurácia, demonstrando domínio do fluxo end-to-end de um projeto de ciência de dados.',
        metrics: [{ num:'3', label:'Algoritmos comparados' }, { num:'Full', label:'Ciclo ML completo' }],
        github: 'https://github.com/henriquereolonpain-sys/Inter-166-Analytics',
        demo: '',
        video: '',
        images: ['https://raw.githubusercontent.com/henriquereolonpain-sys/Inter-166-Analytics/main/Imgs/Bi.png'],
    },
    dashboard: {
        gradient: 'linear-gradient(135deg,#d97706,#b45309)',
        tags: ['Power BI','SQL','DAX','ETL','FP&A'],
        title: 'Dashboard Financeiro Executivo',
        subtitle: 'DRE · Fluxo de Caixa · EBITDA',
        desc: 'Dashboard entregue mensalmente à diretoria da Agência Gallo consolidando DRE gerencial, fluxo de caixa, EBITDA, ROI e payback. Pipeline com extração do banco de dados transacional, transformação via SQL e carga no Power BI. Inclui apresentações mensais de Expectativa × Realidade e revisões trimestrais de projeções financeiras para suporte a decisões estratégicas dos squads de negócio.',
        metrics: [{ num:'C-Level', label:'Audiência alvo' }, { num:'Mensal', label:'Cadência de entrega' }],
        github: '',
        demo: '',
        video: '',
        images: ['DRE-1.png', 'DRE-2.png'],
    },
    elasticidade: {
        gradient: 'linear-gradient(135deg,#0891b2,#0e7490)',
        tags: ['Power BI','SQL','Figma','Elasticidade-preço'],
        title: 'Análise de Elasticidade de Preço',
        subtitle: 'Revenue Forecasting Dinâmico',
        desc: 'Dashboard SQL-integrado no Power BI com design elaborado no Figma, permitindo simulação de cenários de precificação e projeção de receita em tempo real. Modela a elasticidade-preço da demanda para prever impacto de variações de preço sobre a receita total, entregando uma ferramenta de tomada de decisão para equipes comerciais.',
        metrics: [{ num:'DAX', label:'Engine de cálculo' }, { num:'Kaggle', label:'Dataset público' }],
        github: '',
        demo: '',
        video: '',
        images: ['elasticidade.png'],
    },
    esg: {
        gradient: 'linear-gradient(135deg,#dc2626,#b91c1c)',
        tags: ['Power BI','Pearson','ESG','Ibovespa','Mercado de Capitais'],
        title: 'Correlação ESG × Performance',
        subtitle: 'Mercado Brasileiro de Capitais',
        desc: 'Estudo interativo usando coeficiente de Pearson para demonstrar a relação entre critérios de sustentabilidade (ESG) e retornos no mercado brasileiro. Dashboard com cálculo dinâmico de Alpha vs. Ibovespa por empresa e setor, permitindo análise visual da correlação entre práticas ESG e performance financeira no período analisado.',
        metrics: [{ num:'α', label:'Alpha dinâmico vs. IBOV' }, { num:'ESG', label:'Foco temático' }],
        github: '',
        demo: '',
        video: '',
        images: ['esg.png'],
    },
};

// ============================================================
// DADOS DOS CERTIFICADOS
// Para adicionar um certificado com imagem:
//   img  → nome do arquivo na pasta Portfolio (ex: 'cert-economia.jpg')
//   label → nome do diploma/certificado
//   school → instituição
//   emoji → ícone mostrado quando não há imagem
// ============================================================
const CERTS = [
    { label: 'Graduação em Economia', school: 'UPF', img: 'diploma.png', emoji: '🏛️' },
    { label: 'MBA em Desenvolvimento Sustentável e Economia Circular', school: 'UPF', img: 'mba.jpg', emoji: '📜' },
    { label: 'Pós-Graduação em Gestão Financeira', school: 'UPF', img: '', emoji: '🎓' },
    { label: 'CPA-20', school: 'ANBIMA', img: 'cpa.jpeg', emoji: '🏆' },
];

// ============================================================
// DARK MODE
// ============================================================
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});

// ============================================================
// HERO CANVAS — linhas econômicas animadas (efeito cometa)
// ============================================================
(function () {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Wave {
        constructor() { this.spawn(); }

        spawn() {
            const h = canvas.height;
            this.x       = -(100 + Math.random() * 400);
            this.baseY   = h * (0.08 + Math.random() * 0.84);
            this.speed   = 0.5 + Math.random() * 1.4;
            this.amp     = 12 + Math.random() * 55;
            this.freq    = 0.006 + Math.random() * 0.022;
            this.tail    = 180 + Math.random() * 280;
            this.opacity = 0.045 + Math.random() * 0.07;
            this.phase   = Math.random() * Math.PI * 2;
            this.choppy  = Math.random() > 0.55;
            this.lw      = 0.8 + Math.random() * 0.7;
        }

        draw() {
            const w = canvas.width;
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            const rgb = isDark ? '96,165,250' : '37,99,235';
            const x0 = this.x - this.tail;
            const x1 = this.x;

            ctx.beginPath();
            let first = true;
            for (let i = 0; i <= 90; i++) {
                const t  = i / 90;
                const px = x0 + t * (x1 - x0);
                if (px < -2 || px > w + 2) { first = true; continue; }
                let py = this.baseY + Math.sin(px * this.freq + this.phase) * this.amp;
                if (this.choppy) py += Math.sin(px * this.freq * 3.5 + this.phase * 1.4) * this.amp * 0.28;
                if (first) { ctx.moveTo(px, py); first = false; }
                else ctx.lineTo(px, py);
            }

            const g = ctx.createLinearGradient(x0, 0, x1, 0);
            g.addColorStop(0,   `rgba(${rgb},0)`);
            g.addColorStop(0.6, `rgba(${rgb},${this.opacity * 0.4})`);
            g.addColorStop(1,   `rgba(${rgb},${this.opacity})`);
            ctx.strokeStyle = g;
            ctx.lineWidth   = this.lw;
            ctx.stroke();
        }

        update() {
            this.x += this.speed;
            if (this.x - this.tail > canvas.width) this.spawn();
        }
    }

    const waves = Array.from({ length: 14 }, (_, i) => {
        const w = new Wave();
        w.x = (i / 14) * canvas.width;
        return w;
    });

    function loop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        waves.forEach(w => { w.update(); w.draw(); });
        requestAnimationFrame(loop);
    }
    loop();
})();

// ============================================================
// NAV
// ============================================================
const nav       = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
    highlightActiveSection();
});

navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

function highlightActiveSection() {
    const y = window.scrollY + 80;
    document.querySelectorAll('section[id]').forEach(sec => {
        const link = document.querySelector(`.nav-links a[href="#${sec.id}"]`);
        if (!link) return;
        link.classList.toggle('active', y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight);
    });
}
highlightActiveSection();

// ============================================================
// FADE-IN
// ============================================================
const fadeObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); fadeObs.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => fadeObs.observe(el));

// ============================================================
// CERTIFICATES — build grid from data
// ============================================================
const certsGrid = document.getElementById('certsGrid');

CERTS.forEach(cert => {
    const item = document.createElement('div');
    item.className = 'cert-item';

    const imgHtml = cert.img
        ? `<img class="cert-img" src="${cert.img}" alt="${cert.label}" loading="lazy">`
        : `<div class="cert-placeholder">${cert.emoji}</div>`;

    item.innerHTML = `
        <div class="cert-img-wrap">${imgHtml}</div>
        <div class="cert-info">
            <p class="cert-title">${cert.label}</p>
            <p class="cert-school">${cert.school}</p>
        </div>
    `;

    if (cert.img) {
        const isPdf = cert.img.toLowerCase().endsWith('.pdf');
        if (isPdf) {
            // PDFs abrem em nova aba
            const badge = document.createElement('div');
            badge.style.cssText = 'position:absolute;top:.5rem;right:.5rem;background:rgba(220,38,38,.85);color:#fff;font-size:.65rem;font-weight:700;padding:.15rem .45rem;border-radius:4px;letter-spacing:.5px;';
            badge.textContent = 'PDF';
            item.style.position = 'relative';
            item.appendChild(badge);
            item.addEventListener('click', () => window.open(cert.img, '_blank'));
        } else {
            item.addEventListener('click', () => openLightbox(cert.img, `${cert.label} · ${cert.school}`));
        }
    }

    certsGrid.appendChild(item);
});

// ============================================================
// MODAL
// ============================================================
const modalOverlay = document.getElementById('modalOverlay');
const modalInner   = document.getElementById('modalInner');
const modalClose   = document.getElementById('modalClose');

function openModal(id) {
    const p = PROJECTS[id];
    if (!p) return;

    const tagsHtml = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
    const metricsHtml = p.metrics.map(m =>
        `<div class="modal-metric"><span class="modal-metric-num">${m.num}</span><span class="modal-metric-label">${m.label}</span></div>`
    ).join('');

    let actionsHtml = '';
    if (p.github || p.demo) {
        actionsHtml = `<p class="modal-section-title">Links</p><div class="modal-actions">`;
        if (p.github) actionsHtml += `<a href="${p.github}" target="_blank" rel="noopener" class="modal-action primary">⌥ GitHub</a>`;
        if (p.demo)   actionsHtml += `<a href="${p.demo}"   target="_blank" rel="noopener" class="modal-action">🔗 Ver Demo</a>`;
        actionsHtml += `</div>`;
    }

    let mediaHtml = '';
    if (p.images.length > 0) {
        const imgs = p.images.map(src =>
            `<img class="modal-gallery-img" src="${src}" alt="${p.title}" loading="lazy" data-src="${src}" data-caption="${p.title}">`
        ).join('');
        mediaHtml += `<p class="modal-section-title">Imagens</p><div class="modal-gallery">${imgs}</div>`;
    }

    if (p.video) {
        mediaHtml += `<p class="modal-section-title">Vídeo</p><iframe class="modal-video" src="${p.video}" allowfullscreen></iframe>`;
    }

    if (!p.images.length && !p.video) {
        mediaHtml = `<div class="modal-empty"><strong>Mídia ainda não adicionada</strong>Adicione imagens e/ou vídeo no objeto <code>${id}</code> em <code>script.js</code></div>`;
    }

    modalInner.innerHTML = `
        <div class="modal-header" style="background:${p.gradient}"></div>
        <div class="modal-body">
            <div class="modal-tags">${tagsHtml}</div>
            <h2 class="modal-title">${p.title}</h2>
            <p class="modal-subtitle">${p.subtitle}</p>
            <p class="modal-desc">${p.desc}</p>
            <div class="modal-metrics">${metricsHtml}</div>
            ${actionsHtml}
            ${mediaHtml}
        </div>
    `;

    // Bind gallery image click → lightbox
    modalInner.querySelectorAll('.modal-gallery-img').forEach(img => {
        img.addEventListener('click', () => openLightbox(img.dataset.src, img.dataset.caption));
    });

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

// Open modal via project card or button click
document.querySelectorAll('[data-id]').forEach(el => {
    el.addEventListener('click', (e) => {
        e.stopPropagation();
        openModal(el.dataset.id);
    });
});

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeLightbox(); } });

// ============================================================
// LIGHTBOX
// ============================================================
const lightbox        = document.getElementById('lightbox');
const lightboxImg     = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose   = document.getElementById('lightboxClose');

function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxCaption.textContent = caption || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox || e.target === lightboxImg) closeLightbox(); });
