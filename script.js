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
        demo: '', video: '',
        desc_en: 'Automated ETL pipeline correlating corn prices with regional climate variables via API and Web Scraping. Data Warehouse on Google BigQuery with staging and semantic layers, orchestrated via GitHub Actions. Econometric regression models identified R$1.25 elasticity per 10mm of rainfall and a 6-day logistics lag, with 99% statistical confidence (p-value 0.007).',
        images: [
            'img/choques.png',
            'img/variancia.png',
            'img/heatmap.png',
            'img/pipeline.webp',
            'img/previsão.png',
        ],
    },
    projeto03: {
        gradient: 'linear-gradient(135deg,#e05729,#c84a19)',
        tags: ['Databricks','PySpark','Python','Medallion','Delta Lake'],
        title: 'Pipeline Medallion Architecture',
        subtitle: 'Bronze → Silver → Gold — Databricks',
        desc: 'Pipeline de dados com arquitetura Medallion implementado no Databricks Community Edition. Ingestão de CSVs na camada Bronze, limpeza e transformações com PySpark na Silver, e visões analíticas prontas para consumo na Gold. Projeto demonstra domínio de arquitetura moderna de Data Lakehouse.',
        metrics: [{ num:'3', label:'Camadas Medallion' }, { num:'Δ', label:'Delta Lake' }],
        github: 'https://github.com/henriquereolonpain-sys/Projeto_03',
        demo: '', video: '',
        images: ['img/runbricks.png', 'img/runjobbricks.png', 'img/dashboardbricks.png'],
        desc_en: 'Data pipeline with Medallion Architecture (Bronze → Silver → Gold) implemented in Databricks Community Edition. CSV ingestion at the Bronze layer, PySpark cleaning and transformations at Silver, and analytics-ready semantic views at the Gold layer. Demonstrates mastery of modern Data Lakehouse architecture.',
    },
    recomendacao: {
        gradient: 'linear-gradient(135deg,#7c3aed,#6d28d9)',
        tags: ['Neo4j AuraDB','Python','Pandas','Cypher','Graph DB'],
        title: 'Sistema de Recomendação Híbrido',
        subtitle: 'Next Best Offer — Setor de Cooperativas',
        desc: 'Motor de recomendação financeiro construído com banco de dados orientado a grafos (Neo4j AuraDB) e Python (Pandas), modelando a rede de relacionamentos entre cooperados. Queries otimizadas em Cypher identificam clusters por similaridade de consumo, segmento e faixa de renda. Filtro colaborativo implementado diretamente no banco entrega insights de propensão de compra em milissegundos, aumentando precisão de campanhas de retenção.',
        metrics: [{ num:'NBO', label:'Next Best Offer' }, { num:'Grafos', label:'Modelagem de rede' }],
        github: 'https://github.com/henriquereolonpain-sys/Projeto-Neo4-an-lise-Next-Best-Offer-NBO-com-Grafos',
        demo: '', video: '',
        desc_en: 'Financial recommendation engine built with graph database (Neo4j AuraDB) and Python (Pandas), modeling the relationship network between credit union members. Optimized Cypher queries identify clusters by consumption similarity, segment and income range. Collaborative filtering delivers purchase propensity insights in milliseconds, improving retention campaign accuracy.',
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
        demo: '', video: 'https://player.vimeo.com/video/1175155235',
        desc_en: 'Complete Machine Learning pipeline for predicting Brazilian Championship match results. Full ML cycle: data collection, feature engineering, training, validation and communication. Comparison between Random Forest, Logistic Regression and Naive Bayes with confusion matrix and accuracy evaluation.',
        images: [],
    },
    dashboard: {
        gradient: 'linear-gradient(135deg,#d97706,#b45309)',
        tags: ['Power BI','SQL','DAX','ETL','FP&A'],
        title: 'Dashboard Financeiro Executivo',
        subtitle: 'DRE · Fluxo de Caixa · EBITDA',
        desc: 'Dashboard entregue mensalmente à diretoria da Agência Gallo consolidando DRE gerencial, fluxo de caixa, EBITDA, ROI e payback. Pipeline com extração do banco de dados transacional, transformação via SQL e carga no Power BI. Inclui apresentações mensais de Expectativa × Realidade e revisões trimestrais de projeções financeiras para suporte a decisões estratégicas dos squads de negócio.',
        metrics: [{ num:'C-Level', label:'Audiência alvo' }, { num:'Mensal', label:'Cadência de entrega' }],
        github: '', demo: '', video: 'https://player.vimeo.com/video/1156282442',
        embed: 'https://app.powerbi.com/view?r=eyJrIjoiOTgyNjY5MjQtN2U2NS00NjU1LTkzMTktZDIwMDBmMWY0YTE5IiwidCI6ImE0NWNjZjE0LTMxOTQtNGE2My1iNmRmLTExMWUyMWU2MDIzNSJ9',
        desc_en: 'Dashboard delivered monthly to the board of Agência Gallo consolidating managerial P&L, cash flow, EBITDA, ROI and payback. Pipeline with extraction from the transactional database, SQL transformation and Power BI load. Includes monthly Expectations vs. Actuals presentations and quarterly forecast reviews to support strategic decisions.',
        images: ['img/DRE-1.png', 'img/DRE-2.png'],
    },
    elasticidade: {
        gradient: 'linear-gradient(135deg,#0891b2,#0e7490)',
        tags: ['Power BI','SQL','Figma','Elasticidade-preço'],
        title: 'Análise de Elasticidade de Preço',
        subtitle: 'Revenue Forecasting Dinâmico',
        desc: 'Dashboard SQL-integrado no Power BI com design elaborado no Figma, permitindo simulação de cenários de precificação e projeção de receita em tempo real. Modela a elasticidade-preço da demanda para prever impacto de variações de preço sobre a receita total, entregando uma ferramenta de tomada de decisão para equipes comerciais.',
        metrics: [{ num:'DAX', label:'Engine de cálculo' }, { num:'Kaggle', label:'Dataset público' }],
        github: '', demo: '', video: 'https://player.vimeo.com/video/1156833912',
        desc_en: 'SQL-integrated Power BI dashboard with Figma design, enabling real-time pricing scenario simulation and revenue projection. Models price-demand elasticity to forecast the impact of price variations on total revenue, delivering a decision-making tool for commercial teams.',
        images: ['img/elasticidade.png'],
    },
    esg: {
        gradient: 'linear-gradient(135deg,#dc2626,#b91c1c)',
        tags: ['Power BI','Pearson','ESG','Ibovespa','Mercado de Capitais'],
        title: 'Correlação ESG × Performance',
        subtitle: 'Mercado Brasileiro de Capitais',
        desc: 'Estudo interativo usando coeficiente de Pearson para demonstrar a relação entre critérios de sustentabilidade (ESG) e retornos no mercado brasileiro. Dashboard com cálculo dinâmico de Alpha vs. Ibovespa por empresa e setor, permitindo análise visual da correlação entre práticas ESG e performance financeira no período analisado.',
        metrics: [{ num:'α', label:'Alpha dinâmico vs. IBOV' }, { num:'ESG', label:'Foco temático' }],
        github: '', demo: '', video: '',
        desc_en: 'Interactive study using Pearson coefficient to demonstrate the relationship between ESG sustainability criteria and returns in the Brazilian market. Dashboard with dynamic Alpha vs. Ibovespa calculation by company and sector, allowing visual analysis of the correlation between ESG practices and financial performance.',
        images: ['img/esg.png'],
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
    { label: 'Graduação em Economia', school: 'UPF', img: 'img/diploma.png', emoji: '🏛️' },
    { label: 'MBA em Desenvolvimento Sustentável e Economia Circular', school: 'UPF', img: 'img/mba.jpg', emoji: '📜' },
    { label: 'CPA-20', school: 'ANBIMA', img: 'img/cpa.jpeg', emoji: '🏆' },
];

// ============================================================
// I18N — TRADUÇÃO PT / EN
// ============================================================
let currentLang = localStorage.getItem('lang') || 'pt';

// Simples: [texto-pt, texto-en]
const PAGE_TRANS = {
    // NAV
    '.nav-links a[href="#sobre"]':        ['Sobre','About'],
    '.nav-links a[href="#projetos"]':     ['Projetos','Projects'],
    '.nav-links a[href="#experiencia"]':  ['Experiência','Experience'],
    '.nav-links a[href="#habilidades"]':  ['Habilidades','Skills'],
    '.nav-links a[href="#formacao"]':     ['Formação','Education'],
    '.nav-links a[href="#certificados"]': ['Certificados','Certificates'],
    '.nav-links a[href="#contato"]':      ['Contato','Contact'],
    '.footer-nav a[href="#sobre"]':       ['Sobre','About'],
    '.footer-nav a[href="#projetos"]':    ['Projetos','Projects'],
    '.footer-nav a[href="#experiencia"]': ['Experiência','Experience'],
    '.footer-nav a[href="#habilidades"]': ['Habilidades','Skills'],
    '.footer-nav a[href="#contato"]':     ['Contato','Contact'],
    // HERO
    '.hero-badge':              ['📍 Passo Fundo, RS · Remoto','📍 Passo Fundo, RS · Remote'],
    '.hero-title':              ['Analista de Dados','Data Analyst'],
    '.hero-desc':               ['Transformo dados em decisões. Especialista em pipelines ETL/ELT, Data Warehouse e dashboards que traduzem complexidade financeira em insights estratégicos.','I turn data into decisions. Specialist in ETL/ELT pipelines, Data Warehouse and dashboards that translate financial complexity into strategic insights.'],
    '.scroll-indicator span':   ['Role para baixo','Scroll down'],
    // ABOUT
    '#sobre .section-tag':      ['Quem sou','Who I am'],
    '#sobre .section-title':    ['Sobre mim','About me'],
    '.about-lead':              ['Analista de Dados com sólida base em Economia e Finanças corporativas.','Data Analyst with a solid background in Economics and Corporate Finance.'],
    // PROJECTS
    '#projetos .section-tag':   ['Portfólio técnico','Technical portfolio'],
    '#projetos .section-title': ['Projetos','Projects'],
    // EXPERIENCE
    '#experiencia .section-tag':   ['Trajetória','Career'],
    '#experiencia .section-title': ['Experiência Profissional','Professional Experience'],
    // SKILLS
    '#habilidades .section-tag':   ['Stack técnica','Tech stack'],
    '#habilidades .section-title': ['Habilidades','Skills'],
    // EDUCATION
    '#formacao .section-tag':   ['Acadêmico','Academic'],
    '#formacao .section-title': ['Formação','Education'],
    // CERTIFICATES
    '#certificados .section-tag':   ['Diplomas & Conquistas','Diplomas & Achievements'],
    '#certificados .section-title': ['Certificados','Certificates'],
    '.certs-hint':                  ['Clique em um certificado para ampliar','Click a certificate to enlarge'],
    // CONTACT
    '#contato .section-tag':   ['Vamos conversar',"Let's talk"],
    '#contato .section-title': ['Contato','Contact'],
    '.contact-sub':            ['Aberto a oportunidades remotas em dados, BI e engenharia analítica.','Open to remote opportunities in data, BI, and analytical engineering.'],
    // FOOTER
    '.footer-tagline': ['Dados que decidem.','Data that decides.'],
};

// Coleções indexadas: cada elemento pelo índice na lista de matches
const INDEXED_TRANS = {
    statLabels: { sel:'.hero-stat .stat-label', v:[
        ['Anos','Years old'],
        ['Anos de experiência','Years of experience'],
        ['Certificação ANBIMA','ANBIMA Certification'],
        ['DEA-C01 em andamento','DEA-C01 in progress'],
    ]},
    vcLabels: { sel:'.vc-label', v:[
        ['Pipeline ETL / ELT','ETL / ELT Pipeline'],
        ['BI & Dashboards','BI & Dashboards'],
        ['Data Science / ML','Data Science / ML'],
        ['Domínio Financeiro','Financial Domain'],
        ['Lakehouse / Engenharia','Lakehouse / Engineering'],
    ]},
    vcValues: { sel:'.vc-value', v:[
        ['Python · GCP · BigQuery','Python · GCP · BigQuery'],
        ['Power BI · Looker · Tableau','Power BI · Looker · Tableau'],
        ['Scikit-learn · Econometria','Scikit-learn · Econometrics'],
        ['DRE · FP&A · CPA-20','P&L · FP&A · CPA-20'],
        ['Databricks · Medallion · Delta Lake','Databricks · Medallion · Delta Lake'],
    ]},
    aboutParas: { sel:'.about-text p', v:[
        [null,null],
        ['Meu diferencial está em unir domínio técnico de dados — ETL, Data Warehouse, Machine Learning — com profundo conhecimento do negócio financeiro. Isso me permite traduzir requisitos de negócio em arquiteturas que geram valor real, entregando dashboards e insights que chegam à mesa de quem decide.','My edge lies in combining technical data expertise — ETL, Data Warehouse, Machine Learning — with deep financial domain knowledge. This allows me to translate business requirements into architectures that generate real value, delivering dashboards and insights that reach decision-makers.'],
        ['Ao longo de mais de 4 anos atuei em finanças corporativas em contextos que vão de startups a multinacionais, incluindo experiência em Lisboa, Portugal, antes de direcionar minha carreira para engenharia e análise de dados.','Over 4+ years, I worked in corporate finance across contexts ranging from startups to multinationals, including experience in Lisbon, Portugal, before pivoting my career to data engineering and analytics.'],
        ['Inglês fluente  ·  CPA-20 (ANBIMA)  ·  Apaixonado por econometria aplicada','Fluent English  ·  CPA-20 (ANBIMA)  ·  Passionate about applied econometrics'],
    ]},
    projTitles: { sel:'.project-title', v:[
        ['Pipeline Medallion Architecture','Medallion Architecture Pipeline'],
        ['Monitoramento e Previsão Econométrica','Econometric Monitoring & Forecasting'],
        ['Sistema de Recomendação Híbrido','Hybrid Recommendation System'],
        ['Modelo Preditivo Esportivo','Sports Prediction Model'],
        ['Dashboard Financeiro Executivo','Executive Financial Dashboard'],
        ['Análise de Elasticidade de Preço','Price Elasticity Analysis'],
        ['Correlação ESG × Performance','ESG × Performance Correlation'],
    ]},
    projDescs: { sel:'.project-desc', v:[
        ['Pipeline de dados com arquitetura Medallion implementado no Databricks Community Edition. Ingestão de CSVs na camada Bronze, limpeza e transformações PySpark na Silver e visões analíticas prontas para consumo na Gold.','Data pipeline with Medallion Architecture in Databricks Community Edition. CSV ingestion at Bronze, PySpark cleaning and transformations at Silver, and analytics-ready views at Gold.'],
        ['Pipeline ETL automatizado correlacionando o preço do milho com variáveis climáticas regionais. Data Warehouse no BigQuery com camadas staging e semântica, orquestrado via GitHub Actions. Modelos de regressão com 99% de confiança estatística e p-value de 0,007.','Automated ETL pipeline correlating corn prices with regional climate variables. Data Warehouse on BigQuery with staging and semantic layers, orchestrated via GitHub Actions. Regression models with 99% statistical confidence and p-value of 0.007.'],
        ['Motor de recomendação financeiro com banco de dados orientado a grafos (Neo4j AuraDB), modelando rede de relacionamentos entre cooperados. Filtro colaborativo implementado diretamente no banco para identificar clusters por similaridade de consumo e faixa de renda.','Financial recommendation engine with graph database (Neo4j AuraDB), modeling the relationship network between cooperative members. Collaborative filter implemented directly in the database to identify clusters by consumption similarity and income range.'],
        ['Pipeline completo de Machine Learning para previsão de resultados do Campeonato Brasileiro. Comparação de múltiplos algoritmos (Random Forest, Regressão Logística, Naive Bayes) com feature engineering, treinamento e avaliação por matriz de confusão.','Complete Machine Learning pipeline for predicting Brazilian Championship results. Comparison of multiple algorithms (Random Forest, Logistic Regression, Naive Bayes) with feature engineering, training and confusion matrix evaluation.'],
        ['Dashboard entregue à diretoria da Agência Gallo com DRE gerencial, fluxo de caixa, EBITDA, ROI e payback. Pipeline com extração do banco transacional, transformação SQL e carga no Power BI. Apresentações mensais de Expectativa × Realidade.','Dashboard delivered to Agência Gallo\'s board with managerial P&L, cash flow, EBITDA, ROI and payback. Pipeline with transactional database extraction, SQL transformation and Power BI load. Monthly Expectations × Actuals presentations.'],
        ['Dashboard SQL-integrado no Power BI com design Figma, permitindo simulação de cenários de precificação e projeção de receita em tempo real com base em elasticidade-preço da demanda.','SQL-integrated Power BI dashboard with Figma design, enabling real-time pricing scenario simulation and revenue projection based on price-demand elasticity.'],
        ['Estudo interativo usando coeficiente de Pearson para demonstrar a relação entre critérios de sustentabilidade (ESG) e retornos no mercado brasileiro, com cálculo dinâmico de Alpha vs. Ibovespa.','Interactive study using Pearson coefficient to demonstrate the relationship between ESG sustainability criteria and returns in the Brazilian market, with dynamic Alpha vs. Ibovespa calculation.'],
    ]},
    highlightLabels: { sel:'.highlight-label', v:[
        ['Camadas Medallion','Medallion Layers'],
        ['Delta Lake','Delta Lake'],
        ['Confiança estatística','Statistical confidence'],
        ['P-value do modelo','Model p-value'],
        ['Next Best Offer','Next Best Offer'],
        ['Modelagem de rede','Network modeling'],
        ['Algoritmos comparados','Algorithms compared'],
        ['Ciclo ML completo','Full ML cycle'],
        ['Audiência alvo','Target audience'],
        ['Cadência de entrega','Delivery cadence'],
        ['Engine de cálculo','Calculation engine'],
        ['Dataset público','Public dataset'],
        ['Alpha dinâmico vs. IBOV','Dynamic Alpha vs. IBOV'],
        ['Foco temático','Thematic focus'],
    ]},
    projSubtitles: { sel:'.project-subtitle', v:[
        ['Bronze → Silver → Gold — Databricks','Bronze → Silver → Gold — Databricks'],
        ['Preço do Milho — Rio Grande do Sul','Corn Price — Rio Grande do Sul'],
        ['Next Best Offer — Setor de Cooperativas','Next Best Offer — Credit Unions Sector'],
        ['Brasileirão 2026','Brazilian Championship 2026'],
        ['DRE · Fluxo de Caixa · EBITDA','P&L · Cash Flow · EBITDA'],
        ['Revenue Forecasting Dinâmico','Dynamic Revenue Forecasting'],
        ['Mercado Brasileiro de Capitais','Brazilian Capital Markets'],
    ]},
    skillTitles: { sel:'.skill-cat-title', v:[
        ['Linguagens','Languages'],
        ['BI & Analytics','BI & Analytics'],
        ['Engenharia de Dados','Data Engineering'],
        ['Cloud & Orquestração','Cloud & Orchestration'],
        ['Data Science','Data Science'],
        ['Negócios & Finanças','Business & Finance'],
    ]},
    eduIcons: { sel:'.edu-icon', v:[
        ['GRADUAÇÃO',"BACHELOR'S"],
        ['MBA','MBA'],
        ['PÓS-GRADUAÇÃO','GRADUATE'],
        ['CERTIFICAÇÃO','CERTIFICATION'],
    ]},
    eduTitles: { sel:'.edu-title', v:[
        ['Graduação em Economia',"Bachelor's in Economics"],
        ['MBA em Desenvolvimento Sustentável e Economia Circular','MBA in Sustainable Development and Circular Economy'],
        ['Pós-Graduação em Gestão Financeira','Graduate in Financial Management'],
        ['CPA-20','CPA-20'],
    ]},
    eduSchools: { sel:'.edu-school', v:[
        ['UPF — Universidade de Passo Fundo','UPF — University of Passo Fundo'],
        ['UPF — Universidade de Passo Fundo','UPF — University of Passo Fundo'],
        ['UPF — Universidade de Passo Fundo','UPF — University of Passo Fundo'],
        ['ANBIMA','ANBIMA'],
    ]},
    socialLabels: { sel:'#contato .social-label', v:[
        ['Email','Email'],
        ['LinkedIn','LinkedIn'],
        ['GitHub','GitHub'],
        ['Instagram','Instagram'],
        ['Telefone','Phone'],
    ]},
};

// Experiência profissional
const EXP_TRANS = [
    { role:['Analista de Dados & Coord. Financeiro','Data Analyst & Financial Coordinator'],
      date:['Mai 2024 — Presente','May 2024 — Present'],
      bullets:[
        ['Estruturei pipeline mensal de consolidação de dados com extração, transformação SQL e carga no Power BI para dashboards de DRE, EBITDA, ROI e fluxo de caixa','Built monthly data consolidation pipeline with SQL extraction, transformation and Power BI load for P&L, EBITDA, ROI and cash flow dashboards'],
        ['Conduzi apresentações mensais de resultados (Expectativa × Realidade) e revisões trimestrais de projeções para a diretoria','Led monthly results presentations (Expectations × Actuals) and quarterly forecast reviews for the board'],
        ['Arquitetei os controles financeiros iniciais da empresa (DRE gerencial e fluxo de caixa), estabelecendo a base de governança de dados',"Architected the company's initial financial controls (P&L and cash flow), establishing the data governance foundation"],
        ['Liderei equipe de desenvolvimento de produto com metodologia Agile, reduzindo lead time de entregas','Led product development team using Agile methodology, reducing delivery lead time'],
    ]},
    { role:['Coordenador Financeiro','Financial Coordinator'],
      date:['Set 2023 — Dez 2023','Sep 2023 — Dec 2023'],
      bullets:[
        ['Gerenciei operações de fluxo de caixa e elaborei relatórios financeiros estratégicos para a diretoria','Managed cash flow operations and prepared strategic financial reports for the board'],
        ['Foco em otimização de custos e governança financeira','Focus on cost optimization and financial governance'],
    ]},
    { role:['Assistente Financeiro','Financial Assistant'],
      date:['Out 2022 — Ago 2023','Oct 2022 — Aug 2023'],
      bullets:[
        ['Conduzi auditorias financeiras e gestão de contas em ambiente multinacional','Conducted financial audits and account management in a multinational environment'],
        ['Assegurei qualidade e conformidade dos dados financeiros com controles de acesso (RBAC)','Ensured quality and compliance of financial data with access controls (RBAC)'],
    ]},
    { role:['Coordenador & Especialista Contábil','Coordinator & Accounting Specialist'],
      date:['Jan 2021 — Ago 2022','Jan 2021 — Aug 2022'],
      bullets:[
        ['Coordenei rotinas tributárias complexas (IRPF e Criptoativos)','Coordinated complex tax routines (Personal Income Tax and Cryptocurrencies)'],
        ['Garanti governança de dados em operações financeiras e conformidade fiscal','Ensured data governance in financial operations and tax compliance'],
    ]},
];

function translatePage(lang) {
    const i = lang === 'en' ? 1 : 0;
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // Atualiza botão
    const btn = document.getElementById('langToggle');
    if (btn) { btn.textContent = lang === 'en' ? 'PT' : 'EN'; btn.classList.toggle('active', lang === 'en'); }

    // Atualiza <html lang>
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';

    // Atualiza <title>
    document.title = lang === 'en' ? 'Henrique Pain — Data Analyst' : 'Henrique Pain — Analista de Dados';

    // Seletores simples
    for (const [sel, t] of Object.entries(PAGE_TRANS)) {
        const el = document.querySelector(sel);
        if (el && t[i] !== null) el.textContent = t[i];
    }

    // Coleções indexadas
    for (const cfg of Object.values(INDEXED_TRANS)) {
        const els = document.querySelectorAll(cfg.sel);
        cfg.v.forEach((t, j) => { if (els[j] && t[i] !== null) els[j].textContent = t[i]; });
    }

    // Hero botões
    const heroActions = document.querySelectorAll('.hero-actions .btn');
    if (heroActions[0]) heroActions[0].textContent = i ? 'View Projects' : 'Ver Projetos';
    if (heroActions[2]) {
        heroActions[2].textContent = i ? '↓ Download CV' : '↓ Baixar CV';
        heroActions[2].href = i ? 'CV_Henrique_Pain_EN.pdf' : 'CV_Henrique_Pain.pdf';
        heroActions[2].setAttribute('download', i ? 'CV_Henrique_Pain_EN.pdf' : 'CV_Henrique_Pain.pdf');
    }

    // "Ver Projeto →" nos cards
    document.querySelectorAll('.btn-project').forEach(b => { b.textContent = i ? 'View Project →' : 'Ver Projeto →'; });

    // Experiência
    document.querySelectorAll('.timeline-item').forEach((item, j) => {
        const exp = EXP_TRANS[j]; if (!exp) return;
        const role = item.querySelector('.timeline-role');
        const date = item.querySelector('.timeline-date');
        const bullets = item.querySelectorAll('.timeline-bullets li');
        if (role) role.textContent = exp.role[i];
        if (date) date.textContent = exp.date[i];
        exp.bullets.forEach((b, k) => { if (bullets[k]) bullets[k].textContent = b[i]; });
    });

    // Formação específicos
    const posPeriod = document.querySelector('.current-edu .edu-period');
    if (posPeriod) posPeriod.textContent = i ? '2025 — Present' : '2025 — Presente';
    const posStatus = document.querySelector('.edu-status');
    if (posStatus) posStatus.textContent = i ? 'In progress' : 'Em andamento';
    const eduDesc = document.querySelector('.edu-desc');
    if (eduDesc) eduDesc.textContent = i ? 'Professional Investment Certification' : 'Certificação Profissional em Investimentos';

    // Footer copy
    const footerCopy = document.querySelector('.footer-copy p');
    if (footerCopy) footerCopy.textContent = i
        ? '© 2026 Henrique Pain · Passo Fundo, RS · Data Analyst'
        : '© 2026 Henrique Pain · Passo Fundo, RS · Analista de Dados';
}

// Aplica idioma salvo ao carregar
translatePage(currentLang);

// ============================================================
// DARK MODE
// ============================================================
const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => translatePage(currentLang === 'en' ? 'pt' : 'en'));

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
// HERO CANVAS — arte topográfica generativa
// ============================================================
(function () {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let t = 0;

    function resize() {
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function fbm(x, y, seed) {
        return (
            Math.sin(x * 0.014 + seed) * 0.50 +
            Math.sin(x * 0.031 + y * 0.09 + seed * 1.5) * 0.30 +
            Math.sin(x * 0.058 + y * 0.04 + seed * 0.8) * 0.15 +
            Math.sin(x * 0.10  + y * 0.02 + seed * 2.0) * 0.05
        );
    }

    function draw() {
        const W = canvas.width;
        const H = canvas.height;
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

        ctx.clearRect(0, 0, W, H);

        const LINES   = 90;
        const spacing = (H * 0.94) / LINES;  // cobre quase todo o hero

        for (let l = 0; l < LINES; l++) {
            const progress = l / LINES;
            const baseY    = H * 0.98 - l * spacing;

            ctx.beginPath();
            let started = false;

            for (let x = 0; x <= W; x += 1) {
                const nx = x / W;

                // Gaussiano mais largo (0.38) + crista secundária mais larga (0.14)
                const cPeak  = (nx - 0.52) / 0.38;
                const cRidge = (nx - 0.64) / 0.14;
                const gPeak  = Math.exp(-cPeak  * cPeak  * 0.5);
                const gRidge = Math.exp(-cRidge * cRidge * 0.5) * 0.40;

                // Base mínima em todo o canvas (pontas e topo recebem ondas também)
                const base     = 0.28;
                const envelope = (base + (gPeak + gRidge) * 0.72) * (0.15 + progress * 0.85);

                const n    = fbm(x, l * 3.2, t);
                const rise = envelope * H * 0.44 + n * envelope * H * 0.18;
                const y    = baseY - rise;

                if (!started) { ctx.moveTo(x, y); started = true; }
                else ctx.lineTo(x, y);
            }

            const peakAlpha = Math.exp(-Math.pow(progress - 0.72, 2) * 6) * 0.12;
            const alpha = 0.035 + peakAlpha + progress * 0.03;
            const rgb   = isDark ? '148,180,220' : '30,58,95';
            ctx.strokeStyle = `rgba(${rgb},${Math.min(alpha, 0.20)})`;
            ctx.lineWidth   = progress > 0.5 ? 0.65 : 0.45;
            ctx.stroke();
        }
    }

    function animate() {
        t += 0.0018;
        draw();
        requestAnimationFrame(animate);
    }

    animate();
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

    if (!cert.img) item.style.cursor = 'default';
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
    const isEn = currentLang === 'en';
    const modalDesc = (isEn && p.desc_en) ? p.desc_en : p.desc;
    const lblImages = isEn ? 'Images' : 'Imagens';
    const lblVideo  = isEn ? 'Video'  : 'Vídeo';
    const lblLinks  = isEn ? 'Links'  : 'Links';
    const lblDemo   = isEn ? '🔗 View Demo' : '🔗 Ver Demo';
    const emptyTitle = isEn ? 'Media not yet added' : 'Mídia ainda não adicionada';
    const emptyHint  = isEn ? `Add images and/or video to the <code>${id}</code> object in <code>script.js</code>` : `Adicione imagens e/ou vídeo no objeto <code>${id}</code> em <code>script.js</code>`;

    let mediaHtml = '';
    if (p.images.length > 0) {
        const imgs = p.images.map(src =>
            `<img class="modal-gallery-img" src="${src}" alt="${p.title}" loading="lazy" data-src="${src}" data-caption="${p.title}">`
        ).join('');
        mediaHtml += `<p class="modal-section-title">${lblImages}</p><div class="modal-gallery">${imgs}</div>`;
    }

    if (p.embed) {
        const lblEmbed = isEn ? 'Interactive Dashboard' : 'Dashboard Interativo';
        mediaHtml += `<p class="modal-section-title">${lblEmbed}</p><div class="modal-embed-wrap"><iframe class="modal-embed" src="${p.embed}" frameborder="0" allowfullscreen></iframe></div>`;
    }

    if (p.video) {
        mediaHtml += `<p class="modal-section-title">${lblVideo}</p><iframe class="modal-video" src="${p.video}" allowfullscreen></iframe>`;
    }

    if (!p.images.length && !p.video && !p.embed) {
        mediaHtml = `<div class="modal-empty"><strong>${emptyTitle}</strong>${emptyHint}</div>`;
    }

    // Rebuild actionsHtml with translated labels
    if (p.github || p.demo) {
        actionsHtml = `<p class="modal-section-title">${lblLinks}</p><div class="modal-actions">`;
        if (p.github) actionsHtml += `<a href="${p.github}" target="_blank" rel="noopener" class="modal-action primary"><svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15" style="flex-shrink:0"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg> GitHub</a>`;
        if (p.demo)   actionsHtml += `<a href="${p.demo}" target="_blank" rel="noopener" class="modal-action">${lblDemo}</a>`;
        actionsHtml += `</div>`;
    }

    modalInner.innerHTML = `
        <div class="modal-header" style="background:${p.gradient}"></div>
        <div class="modal-body">
            <div class="modal-tags">${tagsHtml}</div>
            <h2 class="modal-title">${p.title}</h2>
            <p class="modal-subtitle">${p.subtitle}</p>
            <p class="modal-desc">${modalDesc}</p>
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
