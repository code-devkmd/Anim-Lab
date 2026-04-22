const state = {
    animation: 'bounce',
    duration: 1, delay: 0, iteration: 'infinite',
    timing: 'ease', direction: 'normal', fill: 'none',
    speed: 1, playing: true,
    shape: 'square', color: 'linear-gradient(135deg,#7c6aff,#ff6a9a)',
    size: 80, radius: 16, text: 'Hello',
};

const categories = [
    {
        label: 'Basic', items: [
            { name: 'Spin', anim: 'spin' }, { name: 'Bounce', anim: 'bounce' },
            { name: 'Pulse', anim: 'pulse' }, { name: 'Shake', anim: 'shake' },
            { name: 'Breathe', anim: 'breathe' }, { name: 'Float', anim: 'float' },
        ]
    },
    {
        label: 'Attention', items: [
            { name: 'Rubber Band', anim: 'rubberBand' }, { name: 'Jello', anim: 'jello' },
            { name: 'Heartbeat', anim: 'heartbeat' }, { name: 'Tada', anim: 'tada' },
            { name: 'Wobble', anim: 'wobble' }, { name: 'Swing', anim: 'swing' },
        ]
    },
    {
        label: 'Entrance', items: [
            { name: 'Fade Up', anim: 'fadeInUp' }, { name: 'Fade Down', anim: 'fadeInDown' },
            { name: 'Zoom In', anim: 'zoomIn' }, { name: 'Slide Left', anim: 'slideInLeft' },
            { name: 'Slide Right', anim: 'slideInRight' }, { name: 'Roll', anim: 'roll' },
            { name: 'Spiral', anim: 'spiral' }, { name: 'Wipe', anim: 'wipe' },
        ]
    },
    {
        label: 'Exit', items: [
            { name: 'Fade Out', anim: 'fadeOut' }, { name: 'Zoom Out', anim: 'zoomOut' },
            { name: 'Slide Out L', anim: 'slideOutLeft' }, { name: 'Slide Out R', anim: 'slideOutRight' },
            { name: 'Hinge', anim: 'hinge' },
        ]
    },
    {
        label: 'Motion', items: [
            { name: 'Flip', anim: 'flip' }, { name: 'Pendulum', anim: 'pendulum' },
            { name: 'Orbit', anim: 'orbit' }, { name: 'Sway', anim: 'sway' },
            { name: 'Nod', anim: 'nod' }, { name: 'Tilt', anim: 'tilt' },
        ]
    },
    {
        label: 'Deform', items: [
            { name: 'Morph', anim: 'morph' }, { name: 'Compress', anim: 'compress' },
            { name: 'Skew X', anim: 'skewX' },
        ]
    },
    {
        label: 'FX', items: [
            { name: 'Glitch', anim: 'glitch' }, { name: 'Flicker', anim: 'flicker' },
        ]
    },
    {
        label: 'Advanced V2',
        items: [
            { name: 'Liquid Wave', anim: 'liquidWave' },
            { name: 'Neon Pulse', anim: 'neonPulse' },
            { name: 'Magnetic', anim: 'magnetic' },
            { name: 'Elastic Spin', anim: 'elasticSpin' },
            { name: 'Vortex', anim: 'vortex' },
            { name: 'Glitch RGB', anim: 'glitchRGB' },
            { name: 'Warp', anim: 'warp' },
            { name: 'Bounce Rotate', anim: 'bounceRotate' },
            { name: 'Soft Fade', anim: 'softFadeScale' },
            { name: 'Energy Ring', anim: 'energyRing' },
        ]
    }
];

const kfMap = {
    spin: '0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }',
    bounce: '0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-60px); }',
    pulse: '0%, 100% { transform: scale(1); opacity: 1; }\n  50% { transform: scale(1.4); opacity: 0.7; }',
    shake: '0%, 100% { transform: translateX(0); }\n  25% { transform: translateX(-20px); }\n  75% { transform: translateX(20px); }',
    breathe: '0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.08); }',
    float: '0%, 100% { transform: translateY(0) rotate(0deg); }\n  50% { transform: translateY(-30px) rotate(5deg); }',
    rubberBand: '0%, 100% { transform: scale(1,1); }\n  30% { transform: scale(1.3,0.7); }\n  60% { transform: scale(0.8,1.2); }\n  80% { transform: scale(1.1,0.9); }',
    jello: '0%, 100% { transform: skewX(0deg) skewY(0deg); }\n  30% { transform: skewX(-15deg) skewY(-15deg); }\n  60% { transform: skewX(8deg) skewY(8deg); }\n  80% { transform: skewX(-4deg) skewY(-4deg); }',
    heartbeat: '0%, 100% { transform: scale(1); }\n  14% { transform: scale(1.3); }\n  28% { transform: scale(1); }\n  42% { transform: scale(1.3); }',
    tada: '0%, 100% { transform: scale(1) rotate(0deg); }\n  10%, 20% { transform: scale(0.9) rotate(-3deg); }\n  30%, 50%, 70%, 90% { transform: scale(1.1) rotate(3deg); }\n  40%, 60%, 80% { transform: scale(1.1) rotate(-3deg); }',
    wobble: '0%, 100% { transform: translateX(0) rotate(0deg); }\n  15% { transform: translateX(-20px) rotate(-5deg); }\n  30% { transform: translateX(15px) rotate(3deg); }\n  45% { transform: translateX(-12px) rotate(-3deg); }\n  60% { transform: translateX(8px) rotate(2deg); }\n  75% { transform: translateX(-5px) rotate(-1deg); }',
    swing: '0%, 100% { transform: rotate(-20deg); }\n  50% { transform: rotate(20deg); }',
    fadeInUp: 'from { opacity: 0; transform: translateY(50px); }\n  to { opacity: 1; transform: translateY(0); }',
    fadeInDown: 'from { opacity: 0; transform: translateY(-50px); }\n  to { opacity: 1; transform: translateY(0); }',
    zoomIn: 'from { transform: scale(0); opacity: 0; }\n  to { transform: scale(1); opacity: 1; }',
    slideInLeft: 'from { transform: translateX(-120px); opacity: 0; }\n  to { transform: translateX(0); opacity: 1; }',
    slideInRight: 'from { transform: translateX(120px); opacity: 0; }\n  to { transform: translateX(0); opacity: 1; }',
    roll: 'from { transform: translateX(-120px) rotate(-360deg); opacity: 0; }\n  to { transform: translateX(0) rotate(0deg); opacity: 1; }',
    spiral: '0% { transform: rotate(0deg) scale(0); opacity: 0; }\n  100% { transform: rotate(720deg) scale(1); opacity: 1; }',
    wipe: 'from { clip-path: inset(0 100% 0 0); }\n  to { clip-path: inset(0 0% 0 0); }',
    fadeOut: 'from { opacity: 1; }\n  to { opacity: 0; }',
    zoomOut: 'from { transform: scale(1); opacity: 1; }\n  to { transform: scale(0); opacity: 0; }',
    slideOutLeft: 'from { transform: translateX(0); opacity: 1; }\n  to { transform: translateX(-120px); opacity: 0; }',
    slideOutRight: 'from { transform: translateX(0); opacity: 1; }\n  to { transform: translateX(120px); opacity: 0; }',
    hinge: '0% { transform: rotate(0); transform-origin: top left; }\n  20%, 60% { transform: rotate(80deg); transform-origin: top left; }\n  40%, 80% { transform: rotate(60deg); transform-origin: top left; }\n  100% { transform: translateY(200px) rotate(80deg); opacity: 0; transform-origin: top left; }',
    flip: '0% { transform: perspective(400px) rotateY(0); }\n  100% { transform: perspective(400px) rotateY(360deg); }',
    pendulum: '0%, 100% { transform: rotate(-35deg); transform-origin: top center; }\n  50% { transform: rotate(35deg); transform-origin: top center; }',
    orbit: '0% { transform: rotate(0deg) translateX(50px) rotate(0deg); }\n  100% { transform: rotate(360deg) translateX(50px) rotate(-360deg); }',
    sway: '0%, 100% { transform: skewX(0deg); }\n  25% { transform: skewX(10deg); }\n  75% { transform: skewX(-10deg); }',
    nod: '0%, 100% { transform: rotateX(0deg); }\n  50% { transform: rotateX(30deg); }',
    tilt: '0%, 100% { transform: rotateZ(0deg); }\n  50% { transform: rotateZ(20deg); }',
    morph: '0%, 100% { border-radius: 16px; transform: rotate(0deg); }\n  33% { border-radius: 50%; transform: rotate(120deg); }\n  66% { border-radius: 4px; transform: rotate(240deg); }',
    compress: '0%, 100% { transform: scaleX(1) scaleY(1); }\n  50% { transform: scaleX(1.6) scaleY(0.5); }',
    skewX: '0%, 100% { transform: skewX(0); }\n  50% { transform: skewX(20deg); }',
    glitch: '0%, 100% { transform: translate(0); }\n  20% { transform: translate(-4px, 2px); clip-path: inset(10% 0 60% 0); }\n  40% { transform: translate(4px, -2px); clip-path: inset(60% 0 10% 0); }\n  60% { transform: translate(-2px, 1px); clip-path: inset(30% 0 40% 0); }\n  80% { transform: translate(2px, -1px); clip-path: inset(50% 0 20% 0); }',
    flicker: '0%, 100% { opacity: 1; }\n  33% { opacity: 0.2; }\n  50% { opacity: 0; }\n  66% { opacity: 0.8; }',
    liquidWave: '0%,100% { border-radius: 40% 60% 60% 40%; } 50% { border-radius: 60% 40% 40% 60%; }',

    neonPulse: '0%,100% { box-shadow: 0 0 10px #7c6aff; } 50% { box-shadow: 0 0 40px #ff6a9a, 0 0 80px #7c6aff; }',

    magnetic: '0%,100% { transform: translate(0,0); } 25% { transform: translate(-20px,-10px); } 50% { transform: translate(20px,10px); } 75% { transform: translate(-10px,20px); }',

    elasticSpin: '0% { transform: rotate(0deg); } 50% { transform: rotate(540deg) scale(1.3); } 100% { transform: rotate(360deg); }',

    vortex: '0% { transform: rotate(0deg) scale(1); } 100% { transform: rotate(1080deg) scale(0); opacity:0; }',

    glitchRGB: '0%,100% { text-shadow: 0 0 0 red, 0 0 0 blue; } 20% { text-shadow: -2px 0 red, 2px 0 blue; } 40% { text-shadow: 2px 0 red, -2px 0 blue; } 60% { text-shadow: -1px 0 red, 1px 0 blue; } 80% { text-shadow: 1px 0 red, -1px 0 blue; }',

    warp: '0% { transform: scale(1) skew(0deg); } 50% { transform: scale(1.5) skew(20deg); } 100% { transform: scale(1) skew(0deg); }',

    bounceRotate: '0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-80px) rotate(180deg); }',

    softFadeScale: 'from { opacity:0; transform: scale(0.8); } to { opacity:1; transform: scale(1); }',

    energyRing: '0% { box-shadow: 0 0 0 0 rgba(124,106,255,0.7); } 100% { box-shadow: 0 0 0 40px rgba(124,106,255,0); }',
};

const colors = [
    'linear-gradient(135deg,#7c6aff,#ff6a9a)',
    'linear-gradient(135deg,#6affda,#4a90ff)',
    'linear-gradient(135deg,#ffda6a,#ff6a6a)',
    'linear-gradient(135deg,#ff6a9a,#ffda6a)',
    '#7c6aff', '#6affda', '#ff6a6a', '#ffda6a',
    '#ffffff', '#4a90ff', '#ff6a9a', '#2de2a0',
];

// Build preset sidebar
const container = document.getElementById('presetContainer');
categories.forEach(cat => {
    const tag = document.createElement('div');
    tag.className = 'category-tag';
    tag.textContent = cat.label;
    container.appendChild(tag);
    const grid = document.createElement('div');
    grid.className = 'preset-grid';
    cat.items.forEach(p => {
        const card = document.createElement('div');
        card.className = 'preset-card' + (p.anim === state.animation ? ' active' : '');
        card.dataset.anim = p.anim;
        card.innerHTML = `<div class="preset-dot"></div><div class="preset-name">${p.name}</div>`;
        card.onclick = () => selectPreset(p.anim, card);
        grid.appendChild(card);
    });
    container.appendChild(grid);
});

// Build color swatches
const colorRow = document.getElementById('colorRow');
colors.forEach((c, i) => {
    const s = document.createElement('div');
    s.className = 'color-swatch' + (i === 0 ? ' active' : '');
    s.style.background = c;
    s.onclick = () => {
        document.querySelectorAll('.color-swatch').forEach(x => x.classList.remove('active'));
        s.classList.add('active');
        state.color = c;
        applyStyles();
        updateCode();
    };
    colorRow.appendChild(s);
});

function applyAnimation() {
    const el = document.getElementById('targetEl');
    const ring = el.querySelector('.ring');

    const iter = state.iteration === 'infinite' ? 'infinite' : state.iteration;
    const dur = (state.duration / state.speed).toFixed(2);

    // RESET
    el.style.animation = 'none';
    if (ring) ring.style.animation = 'none';
    el.offsetHeight;

    if (state.animation === 'energyRing') {
        if (ring) {
            ring.style.animation = `${state.animation} ${dur}s ${state.timing} ${state.delay}s ${iter} ${state.direction} ${state.fill}`;
        }
    } else {
        el.style.animation = `${state.animation} ${dur}s ${state.timing} ${state.delay}s ${iter} ${state.direction} ${state.fill}`;
    }

    if (!state.playing) {
        el.style.animationPlayState = 'paused';
        if (ring) ring.style.animationPlayState = 'paused';
    }
}

function applyStyles() {
    const el = document.getElementById('innerShape');

    // RESET safely (don't use cssText)
    el.style = '';
    el.textContent = '';

    if (state.shape === 'triangle') {
        const h = state.size / 2;

        el.style.width = '0';
        el.style.height = '0';
        el.style.borderLeft = h + 'px solid transparent';
        el.style.borderRight = h + 'px solid transparent';
        el.style.borderBottom = state.size + 'px solid #7c6aff';

    } else if (state.shape === 'text') {
        el.textContent = state.text || 'Hello';

        el.style.fontSize = (state.size / 2) + 'px';
        el.style.fontWeight = '800';
        el.style.color = '#7c6aff';
        el.style.display = 'flex';
        el.style.alignItems = 'center';
        el.style.justifyContent = 'center';
    } else {
        el.style.width = '100%';
        el.style.height = '100%';
        el.style.background = state.color;
        el.style.borderRadius = state.shape === 'circle' ? '50%' : state.radius + 'px';
        el.style.boxShadow = '0 0 40px rgba(124,106,255,0.35)';
    }

    const oldRing = document.querySelector('.ring');
    if (oldRing) oldRing.remove();

    if (state.animation === 'energyRing') {
        const ring = document.createElement('div');
        ring.className = 'ring';

        ring.style.position = 'absolute';
        ring.style.width = state.size + 'px';
        ring.style.height = state.size + 'px';
        ring.style.borderRadius = '50%';
        ring.style.pointerEvents = 'none';

        document.getElementById('targetEl').appendChild(ring);
    }
}

if (state.animation === 'energyRing' && state.shape !== 'square' && state.shape !== 'circle') {
    state.shape = 'square';
    applyStyles();
}

function updateCode() {
    const iter = state.iteration === 'infinite' ? 'infinite' : state.iteration;
    const dur = (state.duration / state.speed).toFixed(2);
    const kf = kfMap[state.animation] || '/* keyframes */';
    const code = `@keyframes ${state.animation} {\n  ${kf}\n}\n\n.element {\n  animation-name: ${state.animation};\n  animation-duration: ${dur}s;\n  animation-timing-function: ${state.timing};\n  animation-delay: ${state.delay}s;\n  animation-iteration-count: ${iter};\n  animation-direction: ${state.direction};\n  animation-fill-mode: ${state.fill};\n\n  /* shorthand */\n  animation: ${state.animation} ${dur}s ${state.timing} ${state.delay}s ${iter} ${state.direction} ${state.fill};\n}`;
    const hl = code
        .replace(/\b(animation[-\w]*|@keyframes|from|to|transform|opacity|clip-path|border-radius)\b/g, '<span class="kw">$1</span>')
        .replace(/:\s*([^;{}\n]+)/g, (m, v) => `: <span class="val">${v}</span>`)
        .replace(/\/\*[^*]+\*\//g, s => `<span style="color:var(--muted)">${s}</span>`);
    document.getElementById('codeBlock').innerHTML = hl;
}

function selectPreset(anim, card) {
    state.animation = anim;
    document.querySelectorAll('.preset-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    applyAnimation();
    updateCode();
}

function updateCtrl() {
    state.duration = parseFloat(document.getElementById('durRange').value);
    state.delay = parseFloat(document.getElementById('delayRange').value);
    const iterRaw = parseInt(document.getElementById('iterRange').value);
    state.iteration = iterRaw === 0 ? 'infinite' : iterRaw;
    state.timing = document.getElementById('timingSelect').value;
    state.direction = document.getElementById('dirSelect').value;
    state.fill = document.getElementById('fillSelect').value;
    document.getElementById('durVal').textContent = state.duration.toFixed(1) + 's';
    document.getElementById('delayVal').textContent = state.delay.toFixed(1) + 's';
    document.getElementById('iterVal').textContent = iterRaw === 0 ? 'inf' : iterRaw + 'x';
    applyAnimation(); updateCode();
}

function setSpeed(v) {
    state.speed = parseFloat(v);
    document.getElementById('speedVal').textContent = parseFloat(v).toFixed(1) + 'x';
    applyAnimation(); updateCode();
}

function togglePlay() {
    state.playing = !state.playing;
    document.getElementById('targetEl').style.animationPlayState = state.playing ? 'running' : 'paused';
    document.getElementById('playBtn').textContent = state.playing ? 'II' : '|>';
}

function setShape(s, btn) {
    state.shape = s;
    document.querySelectorAll('.shape-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if (s !== 'text') {
        document.getElementById('textInput').value = '';
    }
    applyStyles(); applyAnimation();
}

function updateSize() {
    state.size = parseInt(document.getElementById('sizeRange').value);
    document.getElementById('sizeVal').textContent = state.size + 'px';
    applyStyles(); applyAnimation();
}

function updateText(value) {
    state.text = value;

    if (state.shape === 'text') {
        const el = document.getElementById('innerShape');
        el.textContent = value || 'Hello';
    }
}

function updateRadius() {
    state.radius = parseInt(document.getElementById('radiusRange').value);
    document.getElementById('radiusVal').textContent = state.radius + 'px';
    if (state.shape === 'square') applyStyles();
    applyAnimation();
}

function resetAll() {
    document.getElementById('durRange').value = 1;
    document.getElementById('delayRange').value = 0;
    document.getElementById('iterRange').value = 0;
    document.getElementById('timingSelect').value = 'ease';
    document.getElementById('dirSelect').value = 'normal';
    document.getElementById('fillSelect').value = 'none';
    document.getElementById('speedRange').value = 1;
    document.getElementById('speedVal').textContent = '1.0x';
    state.duration = 1; state.delay = 0; state.iteration = 'infinite';
    state.timing = 'ease'; state.direction = 'normal'; state.fill = 'none'; state.speed = 1;
    document.getElementById('durVal').textContent = '1.0s';
    document.getElementById('delayVal').textContent = '0.0s';
    document.getElementById('iterVal').textContent = 'inf';
    applyAnimation(); updateCode();
}

async function copyCSS() {
    const iter = state.iteration === 'infinite' ? 'infinite' : state.iteration;
    const dur = (state.duration / state.speed).toFixed(2);
    const kf = kfMap[state.animation] || '/* keyframes */';
    const plain = `@keyframes ${state.animation} {\n  ${kf}\n}\n\n.element {\n  animation: ${state.animation} ${dur}s ${state.timing} ${state.delay}s ${iter} ${state.direction} ${state.fill};\n}`;
    await navigator.clipboard.writeText(plain);
    const btn = document.getElementById('copyBtn');
    btn.textContent = 'Copied';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
}

applyStyles();
applyAnimation();
updateCode();