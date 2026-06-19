
const UNITE_HEROES = [
  {id:25,name:'pikachu',display:'Pikachu',role:'attacker',type:'electric',evolves:false,base:25,evolved:25,
   moves:[{name:'Thunder Shock',power:40,cd:3,range:80},{name:'Electro Ball',power:70,cd:6,range:100},{name:'Thunderbolt',power:100,cd:10,range:120}],
   unite:{name:'Volt Tackle',power:200,cd:40,range:150}},
  {id:6,name:'charizard',display:'Charizard',role:'all-rounder',type:'fire',evolves:true,base:4,evolved:6,
   moves:[{name:'Flamethrower',power:55,cd:4,range:90},{name:'Fire Punch',power:80,cd:7,range:70},{name:'Fire Blast',power:120,cd:12,range:110}],
   unite:{name:'Seismic Slam',power:220,cd:45,range:140}},
  {id:9,name:'blastoise',display:'Blastoise',role:'defender',type:'water',evolves:true,base:7,evolved:9,
   moves:[{name:'Water Gun',power:45,cd:3,range:100},{name:'Bubble',power:60,cd:6,range:90},{name:'Hydro Pump',power:130,cd:14,range:120}],
   unite:{name:'Hydro Typhoon',power:250,cd:50,range:160}},
  {id:3,name:'venusaur',display:'Venusaur',role:'attacker',type:'grass',evolves:true,base:1,evolved:3,
   moves:[{name:'Vine Whip',power:50,cd:4,range:80},{name:'Razor Leaf',power:70,cd:7,range:110},{name:'Solar Beam',power:150,cd:15,range:140}],
   unite:{name:'Verdant Anger',power:230,cd:48,range:150}},
  {id:94,name:'gengar',display:'Gengar',role:'speedster',type:'ghost',evolves:true,base:92,evolved:94,
   moves:[{name:'Lick',power:45,cd:3,range:70},{name:'Shadow Ball',power:85,cd:7,range:100},{name:'Dream Eater',power:110,cd:11,range:90}],
   unite:{name:'Phantom Ambush',power:210,cd:42,range:130}},
  {id:65,name:'alakazam',display:'Alakazam',role:'attacker',type:'psychic',evolves:true,base:63,evolved:65,
   moves:[{name:'Confusion',power:55,cd:4,range:100},{name:'Psybeam',power:75,cd:7,range:120},{name:'Psychic',power:130,cd:13,range:110}],
   unite:{name:'Future Sight',power:240,cd:46,range:160}},
  {id:38,name:'ninetales',display:'Ninetales',role:'attacker',type:'fire',evolves:true,base:37,evolved:38,
   moves:[{name:'Ember',power:50,cd:4,range:100},{name:'Flame Burst',power:70,cd:7,range:110},{name:'Fire Spin',power:120,cd:12,range:130}],
   unite:{name:'Blazing Vortex',power:220,cd:44,range:150}},
  {id:26,name:'raichu',display:'Raichu',role:'speedster',type:'electric',evolves:true,base:25,evolved:26,
   moves:[{name:'Spark',power:55,cd:4,range:80},{name:'Thunder Punch',power:80,cd:7,range:70},{name:'Wild Charge',power:130,cd:13,range:100}],
   unite:{name:'Thunder Storm',power:230,cd:46,range:140}},
  {id:121,name:'starmie',display:'Starmie',role:'attacker',type:'water',evolves:true,base:120,evolved:121,
   moves:[{name:'Water Pulse',power:50,cd:4,range:110},{name:'Bubble Beam',power:70,cd:7,range:100},{name:'Hydro Pump',power:140,cd:14,range:130}],
   unite:{name:'Star Blast',power:240,cd:48,range:160}},
  {id:113,name:'chansey',display:'Chansey',role:'supporter',type:'normal',evolves:false,base:113,evolved:113,
   moves:[{name:'Pound',power:40,cd:3,range:60},{name:'Egg Bomb',power:65,cd:6,range:90},{name:'Soft-Boiled',power:0,cd:10,range:80,heal:true}],
   unite:{name:'Lucky Blessing',power:0,cd:50,range:200,heal:true}},
  {id:131,name:'lapras',display:'Lapras',role:'defender',type:'water',evolves:false,base:131,evolved:131,
   moves:[{name:'Water Gun',power:45,cd:3,range:100},{name:'Ice Beam',power:70,cd:7,range:110},{name:'Surf',power:110,cd:12,range:120}],
   unite:{name:'Aurora Veil',power:180,cd:48,range:160}},
  {id:143,name:'snorlax',display:'Snorlax',role:'defender',type:'normal',evolves:false,base:143,evolved:143,
   moves:[{name:'Tackle',power:55,cd:4,range:60},{name:'Body Slam',power:85,cd:8,range:70},{name:'Heavy Slam',power:130,cd:14,range:80}],
   unite:{name:'Power Nap',power:0,cd:55,range:100,heal:true}},
  {id:130,name:'gyarados',display:'Gyarados',role:'all-rounder',type:'water',evolves:true,base:129,evolved:130,
   moves:[{name:'Bite',power:55,cd:4,range:70},{name:'Dragon Rage',power:80,cd:8,range:100},{name:'Hydro Pump',power:140,cd:14,range:130}],
   unite:{name:'Dragon Ascent',power:250,cd:50,range:160}},
  {id:149,name:'dragonite',display:'Dragonite',role:'all-rounder',type:'dragon',evolves:true,base:147,evolved:149,
   moves:[{name:'Dragon Breath',power:55,cd:4,range:90},{name:'Dragon Claw',power:80,cd:8,range:80},{name:'Outrage',power:140,cd:14,range:110}],
   unite:{name:'Draco Meteor',power:260,cd:52,range:170}},
  {id:150,name:'mewtwo',display:'Mewtwo',role:'attacker',type:'psychic',evolves:false,base:150,evolved:150,
   moves:[{name:'Psywave',power:60,cd:4,range:110},{name:'Aura Sphere',power:90,cd:8,range:120},{name:'Psychic',power:150,cd:15,range:140}],
   unite:{name:'Psystrike',power:280,cd:55,range:180}},
  {id:133,name:'eevee',display:'Eevee',role:'all-rounder',type:'normal',evolves:false,base:133,evolved:133,
   moves:[{name:'Quick Attack',power:45,cd:3,range:70},{name:'Bite',power:65,cd:6,range:60},{name:'Take Down',power:100,cd:11,range:80}],
   unite:{name:'Eevee Unity',power:180,cd:45,range:130}},
  {id:115,name:'kangaskhan',display:'Kangaskhan',role:'all-rounder',type:'normal',evolves:false,base:115,evolved:115,
   moves:[{name:'Comet Punch',power:50,cd:4,range:70},{name:'Mega Punch',power:80,cd:8,range:70},{name:'Dizzy Punch',power:120,cd:13,range:80}],
   unite:{name:'Parental Bond',power:220,cd:48,range:140}},
  {id:31,name:'nidoqueen',display:'Nidoqueen',role:'defender',type:'poison',evolves:true,base:29,evolved:31,
   moves:[{name:'Poison Sting',power:45,cd:3,range:80},{name:'Body Slam',power:75,cd:7,range:70},{name:'Earth Power',power:130,cd:13,range:110}],
   unite:{name:'Queenly Majesty',power:210,cd:46,range:150}},
];

let G = {
  mode: 'standard',
  selectedHero: null,
  playerHero: null,
  blueTeam: [],
  redTeam: [],
  blueScore: 0,
  redScore: 0,
  gameTime: 600,
  gameRunning: false,
  gameInterval: null,
  timerInterval: null,

  player: {
    x: 200, y: 400,
    hp: 100, maxHp: 100,
    level: 1, xp: 0, maxXp: 100,
    aegisEnergy: 0,
    speed: 2.5,
    alive: true,
    respawnTimer: 0,
    cooldowns: [0, 0, 0, 0],
    facing: 'down',
    animFrame: 0,
  },

  bots: [],
  wildPokemon: [],
  goalZones: [],
  aegisOrbs: [],
  particles: [],

  keys: {up:false,down:false,left:false,right:false},

  canvas: null,
  ctx: null,
  minimap: null,
  mmCtx: null,
  camX: 0, camY: 0,

  mapW: 800,
  mapH: 600,
};


// === ENHANCED VISUAL EFFECTS SYSTEM ===
const VFX_COLORS = {
  fire: ['#ff6b35', '#f97316', '#fb923c', '#fdba74', '#fff7ed'],
  water: ['#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe', '#eff6ff'],
  electric: ['#fbbf24', '#fcd34d', '#fde68a', '#fef3c7', '#fffbeb'],
  grass: ['#22c55e', '#4ade80', '#86efac', '#bbf7d0', '#f0fdf4'],
  psychic: ['#a855f7', '#c084fc', '#d8b4fe', '#e9d5ff', '#faf5ff'],
  ghost: ['#7c3aed', '#8b5cf6', '#a78bfa', '#c4b5fd', '#ede9fe'],
  poison: ['#a855f7', '#c084fc', '#d8b4fe', '#e9d5ff', '#faf5ff'],
  dragon: ['#6366f1', '#818cf8', '#a5b4fc', '#c7d2fe', '#eef2ff'],
  normal: ['#f5a623', '#fbbf24', '#fcd34d', '#fde68a', '#fef3c7'],
  ice: ['#06b6d4', '#22d3ee', '#67e8f9', '#a5f3fc', '#ecfeff'],
  fighting: ['#ef4444', '#f87171', '#fca5a5', '#fecaca', '#fef2f2'],
  ground: ['#d97706', '#f59e0b', '#fbbf24', '#fcd34d', '#fef3c7'],
  flying: ['#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe', '#ede9fe'],
  bug: ['#84cc16', '#a3e635', '#bef264', '#d9f99d', '#ecfccb'],
  rock: ['#78716c', '#a8a29e', '#d6d3d1', '#e7e5e4', '#fafaf9'],
  steel: ['#64748b', '#94a3b8', '#cbd5e1', '#e2e8f0', '#f8fafc'],
  fairy: ['#ec4899', '#f472b6', '#f9a8d4', '#fbcfe8', '#fdf2f8'],
  dark: ['#374151', '#4b5563', '#6b7280', '#9ca3af', '#d1d5db'],
};

function getTypeColors(type){
  return VFX_COLORS[type] || VFX_COLORS.normal;
}

function createVFX(type, x, y, options = {}){
  const container = document.getElementById('attack-vfx-container');
  if(!container) return;

  const colors = getTypeColors(type);
  const count = options.count || 8;
  const size = options.size || 40;

  // Convert world coordinates to screen coordinates
  const screenX = x - G.camX;
  const screenY = y - G.camY;

  // Main burst effect
  const burst = document.createElement('div');
  burst.className = 'attack-vfx burst';
  burst.style.left = screenX + 'px';
  burst.style.top = screenY + 'px';
  burst.style.width = size + 'px';
  burst.style.height = size + 'px';
  burst.style.background = `radial-gradient(circle, ${colors[0]} 0%, ${colors[1]} 40%, transparent 70%)`;
  burst.style.boxShadow = `0 0 ${size}px ${colors[0]}, 0 0 ${size*2}px ${colors[2]}`;
  container.appendChild(burst);
  setTimeout(() => burst.remove(), 600);

  // Shockwave ring
  const shockwave = document.createElement('div');
  shockwave.className = 'attack-vfx shockwave';
  shockwave.style.left = screenX + 'px';
  shockwave.style.top = screenY + 'px';
  shockwave.style.width = size + 'px';
  shockwave.style.height = size + 'px';
  shockwave.style.borderColor = colors[0];
  shockwave.style.boxShadow = `0 0 ${size/2}px ${colors[1]}, inset 0 0 ${size/2}px ${colors[2]}`;
  container.appendChild(shockwave);
  setTimeout(() => shockwave.remove(), 800);

  // Spark particles
  for(let i = 0; i < count; i++){
    const spark = document.createElement('div');
    spark.className = 'attack-vfx spark';
    const angle = (Math.PI * 2 * i) / count;
    const dist = size * 0.8;
    spark.style.left = screenX + 'px';
    spark.style.top = screenY + 'px';
    spark.style.width = (3 + Math.random() * 5) + 'px';
    spark.style.height = spark.style.width;
    spark.style.background = colors[Math.floor(Math.random() * 3)];
    spark.style.boxShadow = `0 0 6px ${colors[0]}`;
    spark.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
    spark.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
    container.appendChild(spark);
    setTimeout(() => spark.remove(), 400);
  }

  // Trail particles
  for(let i = 0; i < 4; i++){
    const trail = document.createElement('div');
    trail.className = 'attack-vfx trail';
    trail.style.left = (screenX + (Math.random() - 0.5) * size) + 'px';
    trail.style.top = (screenY + (Math.random() - 0.5) * size) + 'px';
    trail.style.width = (8 + Math.random() * 12) + 'px';
    trail.style.height = trail.style.width;
    trail.style.background = `radial-gradient(circle, ${colors[Math.floor(Math.random() * 4)]} 0%, transparent 70%)`;
    trail.style.boxShadow = `0 0 8px ${colors[0]}`;
    container.appendChild(trail);
    setTimeout(() => trail.remove(), 500);
  }
}

function createImpactVFX(x, y, type, options = {}){
  const container = document.getElementById('attack-vfx-container');
  if(!container) return;

  const colors = getTypeColors(type);
  const screenX = x - G.camX;
  const screenY = y - G.camY;
  const size = options.size || 50;

  // Impact ring
  const ring = document.createElement('div');
  ring.className = 'attack-vfx impact-ring';
  ring.style.left = screenX + 'px';
  ring.style.top = screenY + 'px';
  ring.style.width = size + 'px';
  ring.style.height = size + 'px';
  ring.style.borderColor = colors[0];
  ring.style.boxShadow = `0 0 ${size}px ${colors[1]}, inset 0 0 ${size/2}px ${colors[2]}`;
  container.appendChild(ring);
  setTimeout(() => ring.remove(), 500);

  // Particle burst
  for(let i = 0; i < 12; i++){
    const p = document.createElement('div');
    p.className = 'attack-vfx particle-burst';
    const angle = (Math.PI * 2 * i) / 12;
    const dist = size * 0.6;
    p.style.left = screenX + 'px';
    p.style.top = screenY + 'px';
    p.style.width = (4 + Math.random() * 6) + 'px';
    p.style.height = p.style.width;
    p.style.background = colors[Math.floor(Math.random() * 4)];
    p.style.boxShadow = `0 0 8px ${colors[0]}`;
    container.appendChild(p);
    setTimeout(() => p.remove(), 700);
  }
}

function createDamageNumber(x, y, damage, isCrit = false){
  const container = document.getElementById('attack-vfx-container');
  if(!container) return;

  const screenX = x - G.camX;
  const screenY = y - G.camY;

  const el = document.createElement('div');
  el.className = 'damage-popup' + (isCrit ? ' crit' : '');
  el.style.left = screenX + 'px';
  el.style.top = screenY + 'px';
  el.style.color = isCrit ? '#ff6b35' : '#ef4444';
  el.textContent = isCrit ? 'CRIT! ' + damage : '-' + damage;
  container.appendChild(el);
  setTimeout(() => el.remove(), 1000);
}

function createHealEffect(x, y, amount){
  const container = document.getElementById('attack-vfx-container');
  if(!container) return;

  const screenX = x - G.camX;
  const screenY = y - G.camY;

  const el = document.createElement('div');
  el.className = 'heal-effect';
  el.style.left = screenX + 'px';
  el.style.top = (screenY - 20) + 'px';
  el.textContent = '+' + amount;
  container.appendChild(el);
  setTimeout(() => el.remove(), 1000);

  // Green glow
  const glow = document.createElement('div');
  glow.className = 'attack-vfx burst';
  glow.style.left = screenX + 'px';
  glow.style.top = screenY + 'px';
  glow.style.width = '30px';
  glow.style.height = '30px';
  glow.style.background = 'radial-gradient(circle, rgba(34,197,94,0.6) 0%, transparent 70%)';
  glow.style.boxShadow = '0 0 20px #22c55e, 0 0 40px #4ade80';
  container.appendChild(glow);
  setTimeout(() => glow.remove(), 600);
}

function createLevelUpVFX(x, y){
  const container = document.getElementById('attack-vfx-container');
  if(!container) return;

  const screenX = x - G.camX;
  const screenY = y - G.camY;

  // Glow ring
  const glow = document.createElement('div');
  glow.className = 'level-up-glow';
  glow.style.left = screenX + 'px';
  glow.style.top = screenY + 'px';
  container.appendChild(glow);
  setTimeout(() => glow.remove(), 1000);

  // Gold particles
  for(let i = 0; i < 16; i++){
    const p = document.createElement('div');
    p.className = 'attack-vfx spark';
    const angle = (Math.PI * 2 * i) / 16;
    const dist = 40;
    p.style.left = screenX + 'px';
    p.style.top = screenY + 'px';
    p.style.width = '4px';
    p.style.height = '4px';
    p.style.background = '#fbbf24';
    p.style.boxShadow = '0 0 8px #f5a623, 0 0 16px #fbbf24';
    p.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
    p.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
    container.appendChild(p);
    setTimeout(() => p.remove(), 400);
  }
}

function createUniteVFX(x, y, type){
  const container = document.getElementById('attack-vfx-container');
  if(!container) return;

  const colors = getTypeColors(type);
  const screenX = x - G.camX;
  const screenY = y - G.camY;

  // Screen flash
  const flash = document.createElement('div');
  flash.className = 'unite-flash';
  flash.style.setProperty('--cx', (screenX / window.innerWidth * 100) + '%');
  flash.style.setProperty('--cy', (screenY / window.innerHeight * 100) + '%');
  container.appendChild(flash);
  setTimeout(() => flash.remove(), 600);

  // Massive burst
  const burst = document.createElement('div');
  burst.className = 'attack-vfx burst';
  burst.style.left = screenX + 'px';
  burst.style.top = screenY + 'px';
  burst.style.width = '80px';
  burst.style.height = '80px';
  burst.style.background = `radial-gradient(circle, ${colors[0]} 0%, ${colors[1]} 30%, ${colors[2]} 60%, transparent 80%)`;
  burst.style.boxShadow = `0 0 60px ${colors[0]}, 0 0 120px ${colors[1]}, 0 0 200px ${colors[2]}`;
  container.appendChild(burst);
  setTimeout(() => burst.remove(), 800);

  // Multiple shockwaves
  for(let i = 0; i < 3; i++){
    setTimeout(() => {
      const sw = document.createElement('div');
      sw.className = 'attack-vfx shockwave';
      sw.style.left = screenX + 'px';
      sw.style.top = screenY + 'px';
      sw.style.width = '60px';
      sw.style.height = '60px';
      sw.style.borderColor = colors[i % 3];
      sw.style.boxShadow = `0 0 30px ${colors[i % 3]}`;
      container.appendChild(sw);
      setTimeout(() => sw.remove(), 800);
    }, i * 150);
  }

  // Screen shake
  document.body.classList.add('screen-shake');
  setTimeout(() => document.body.classList.remove('screen-shake'), 300);
}

function createScoreVFX(x, y){
  const container = document.getElementById('attack-vfx-container');
  if(!container) return;

  const screenX = x - G.camX;
  const screenY = y - G.camY;

  // Gold burst
  for(let i = 0; i < 20; i++){
    const p = document.createElement('div');
    p.className = 'attack-vfx spark';
    const angle = (Math.PI * 2 * i) / 20;
    const dist = 30 + Math.random() * 30;
    p.style.left = screenX + 'px';
    p.style.top = screenY + 'px';
    p.style.width = (3 + Math.random() * 4) + 'px';
    p.style.height = p.style.width;
    p.style.background = '#fbbf24';
    p.style.boxShadow = '0 0 10px #f5a623, 0 0 20px #fbbf24';
    p.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
    p.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
    container.appendChild(p);
    setTimeout(() => p.remove(), 400);
  }

  // Score text popup
  const scoreText = document.createElement('div');
  scoreText.className = 'damage-popup';
  scoreText.style.left = screenX + 'px';
  scoreText.style.top = screenY + 'px';
  scoreText.style.color = '#fbbf24';
  scoreText.style.fontSize = '0.7rem';
  scoreText.style.textShadow = '0 0 12px #f5a623, 0 0 24px #fbbf24';
  scoreText.textContent = 'GOAL!';
  container.appendChild(scoreText);
  setTimeout(() => scoreText.remove(), 1000);
}

function createKillVFX(x, y){
  const container = document.getElementById('attack-vfx-container');
  if(!container) return;

  const screenX = x - G.camX;
  const screenY = y - G.camY;

  // Red burst
  const burst = document.createElement('div');
  burst.className = 'attack-vfx burst';
  burst.style.left = screenX + 'px';
  burst.style.top = screenY + 'px';
  burst.style.width = '50px';
  burst.style.height = '50px';
  burst.style.background = 'radial-gradient(circle, #ef4444 0%, #dc2626 40%, transparent 70%)';
  burst.style.boxShadow = '0 0 30px #ef4444, 0 0 60px #dc2626';
  container.appendChild(burst);
  setTimeout(() => burst.remove(), 600);

  // KO text
  const koText = document.createElement('div');
  koText.className = 'damage-popup crit';
  koText.style.left = screenX + 'px';
  koText.style.top = screenY + 'px';
  koText.style.color = '#ef4444';
  koText.textContent = 'KO!';
  container.appendChild(koText);
  setTimeout(() => koText.remove(), 1000);

  // Screen shake
  document.body.classList.add('screen-shake');
  setTimeout(() => document.body.classList.remove('screen-shake'), 300);
}

// === END ENHANCED VFX SYSTEM ===


function enterApp(){ showScreen('menu-screen'); }

function selectMode(mode){
  G.mode = mode;
  document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('active-card'));
  document.getElementById('mode-' + mode)?.classList.add('active-card');
}

function goToHeroSelect(){
  renderHeroGrid();
  showScreen('hero-select-screen');
}

function renderHeroGrid(){
  const grid = document.getElementById('hero-grid');
  grid.innerHTML = '';
  UNITE_HEROES.forEach((hero, idx) => {
    const card = document.createElement('div');
    card.className = 'hero-card';
    card.id = 'hero-card-' + idx;
    card.innerHTML = '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + hero.id + '.png" alt="' + hero.display + '"><div class="hero-card-name">' + hero.display + '</div><div class="hero-card-role">' + hero.role.toUpperCase() + '</div><span class="role-badge role-' + hero.role + '">' + hero.role.toUpperCase() + '</span>';
    card.onclick = () => selectHero(idx);
    grid.appendChild(card);
  });
}

function selectHero(idx){
  G.selectedHero = UNITE_HEROES[idx];
  document.querySelectorAll('.hero-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('hero-card-' + idx).classList.add('selected');
  document.getElementById('selected-hero-name').textContent = G.selectedHero.display;
}

function startMatch(){
  if(!G.selectedHero) selectHero(0);

  const shuffled = [...UNITE_HEROES].sort(() => Math.random() - 0.5);
  G.playerHero = G.selectedHero;
  G.blueTeam = [G.playerHero, ...shuffled.slice(0, 4)];
  G.redTeam = shuffled.slice(4, 9);

  showScreen('match-loading');

  const bluePreview = document.getElementById('blue-team-preview');
  const redPreview = document.getElementById('red-team-preview');
  bluePreview.innerHTML = G.blueTeam.map(h => '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + h.id + '.png" alt="' + h.display + '">').join('');
  redPreview.innerHTML = G.redTeam.map(h => '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + h.id + '.png" alt="' + h.display + '">').join('');

  let progress = 0;
  const fill = document.getElementById('loading-fill');
  const status = document.getElementById('loading-status');
  const loadInterval = setInterval(() => {
    progress += 8;
    fill.style.width = Math.min(progress, 100) + '%';
    if(progress >= 100){
      clearInterval(loadInterval);
      status.textContent = 'Entering arena...';
      setTimeout(() => initGame(), 500);
    }
  }, 100);
}

function initGame(){
  showScreen('game-screen');

  // Preload all sprites before game starts
  preloadSprites();

  G.canvas = document.getElementById('game-canvas');
  G.ctx = G.canvas.getContext('2d');
  G.minimap = document.getElementById('minimap-canvas');
  G.mmCtx = G.minimap.getContext('2d');

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Initialize analog joystick
  initAnalogJoystick();

  // Create background floating particles
  createBgParticles();

  G.player.x = G.mapW / 2;
  G.player.y = G.mapH - 80;
  G.player.hp = 100 + (G.playerHero.evolves ? 20 : 0);
  G.player.maxHp = G.player.hp;
  G.player.speed = G.playerHero.role === 'speedster' ? 3.2 : G.playerHero.role === 'defender' ? 2.0 : 2.5;
  G.player.level = 1;
  G.player.xp = 0;
  G.player.maxXp = 100;
  G.player.aegisEnergy = 0;
  G.player.alive = true;
  G.player.cooldowns = [0, 0, 0, 0];

  initBots();
  initMapObjects();
  setupAbilitiesUI();

  G.gameRunning = true;
  G.gameTime = G.mode === 'quick' ? 300 : 600;
  G.blueScore = 0;
  G.redScore = 0;

  G.gameInterval = setInterval(gameLoop, 1000 / 60);
  G.timerInterval = setInterval(updateTimer, 1000);

  setupKeyboard();

  addKillFeed('Match started! Good luck!');
}

function resizeCanvas(){
  if(!G.canvas) return;
  G.canvas.width = window.innerWidth;
  G.canvas.height = window.innerHeight;
}

function initBots(){
  G.bots = [];

  for(let i = 1; i < 5; i++){
    G.bots.push({
      team: 'blue',
      hero: G.blueTeam[i],
      x: G.mapW / 2 + (Math.random() - 0.5) * 100,
      y: G.mapH - 60 + (Math.random() - 0.5) * 40,
      hp: 100, maxHp: 100,
      level: 1, xp: 0,
      aegisEnergy: 0,
      speed: G.blueTeam[i].role === 'speedster' ? 3.0 : G.blueTeam[i].role === 'defender' ? 1.8 : 2.2,
      alive: true,
      respawnTimer: 0,
      cooldowns: [0, 0, 0, 0],
      facing: 'up',
      targetX: null, targetY: null,
      state: 'farming',
      stateTimer: 0,
    });
  }

  for(let i = 0; i < 5; i++){
    G.bots.push({
      team: 'red',
      hero: G.redTeam[i],
      x: G.mapW / 2 + (Math.random() - 0.5) * 100,
      y: 60 + (Math.random() - 0.5) * 40,
      hp: 100, maxHp: 100,
      level: 1, xp: 0,
      aegisEnergy: 0,
      speed: G.redTeam[i].role === 'speedster' ? 3.0 : G.redTeam[i].role === 'defender' ? 1.8 : 2.2,
      alive: true,
      respawnTimer: 0,
      cooldowns: [0, 0, 0, 0],
      facing: 'down',
      targetX: null, targetY: null,
      state: 'farming',
      stateTimer: 0,
    });
  }
}

function initMapObjects(){
  G.wildPokemon = [];
  for(let i = 0; i < 12; i++){
    G.wildPokemon.push({
      x: 50 + Math.random() * (G.mapW - 100),
      y: 100 + Math.random() * (G.mapH - 200),
      hp: 30 + Math.random() * 20,
      maxHp: 50,
      alive: true,
      respawnTimer: 0,
      type: Math.random() > 0.5 ? 'aipom' : 'corphish',
      value: 5 + Math.floor(Math.random() * 5),
    });
  }

  G.goalZones = [
    {x: G.mapW * 0.2, y: G.mapH - 40, team: 'blue', active: true},
    {x: G.mapW * 0.5, y: G.mapH - 40, team: 'blue', active: true},
    {x: G.mapW * 0.8, y: G.mapH - 40, team: 'blue', active: true},
    {x: G.mapW * 0.2, y: 40, team: 'red', active: true},
    {x: G.mapW * 0.5, y: 40, team: 'red', active: true},
    {x: G.mapW * 0.8, y: 40, team: 'red', active: true},
  ];

  G.aegisOrbs = [];
  G.particles = [];
}

function setupAbilitiesUI(){
  const hero = G.playerHero;
  const spriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + hero.id + '.png';
  document.getElementById('ability-1-img').src = spriteUrl;
  document.getElementById('ability-2-img').src = spriteUrl;
  document.getElementById('ability-3-img').src = spriteUrl;
  document.getElementById('unite-img').src = spriteUrl;
}

function setupKeyboard(){
  document.addEventListener('keydown', (e) => {
    switch(e.key.toLowerCase()){
      case 'w': case 'arrowup': G.keys.up = true; break;
      case 's': case 'arrowdown': G.keys.down = true; break;
      case 'a': case 'arrowleft': G.keys.left = true; break;
      case 'd': case 'arrowright': G.keys.right = true; break;
      case 'q': useAbility(0); break;
      case 'e': useAbility(2); break;
      case 'r': useUnite(); break;
      case ' ': scoreGoal(); break;
    }
  });
  document.addEventListener('keyup', (e) => {
    switch(e.key.toLowerCase()){
      case 'w': case 'arrowup': G.keys.up = false; break;
      case 's': case 'arrowdown': G.keys.down = false; break;
      case 'a': case 'arrowleft': G.keys.left = false; break;
      case 'd': case 'arrowright': G.keys.right = false; break;
    }
  });
}

function setDir(dir, pressed){ G.keys[dir] = pressed; }

// === ANALOG JOYSTICK SYSTEM ===
let analogActive = false;
let analogOriginX = 0, analogOriginY = 0;
let analogCurrentX = 0, analogCurrentY = 0;
const ANALOG_MAX_DIST = 42;

function initAnalogJoystick(){
  const wrap = document.getElementById('analog-wrap');
  const stick = document.getElementById('analog-stick');
  if(!wrap || !stick) return;

  const getPos = (e) => {
    const rect = wrap.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {cx, cy, clientX, clientY};
  };

  const startAnalog = (e) => {
    e.preventDefault();
    analogActive = true;
    const pos = getPos(e);
    analogOriginX = pos.cx;
    analogOriginY = pos.cy;
    stick.classList.add('active');
    updateAnalog(e);
  };

  const moveAnalog = (e) => {
    if(!analogActive) return;
    e.preventDefault();
    updateAnalog(e);
  };

  const endAnalog = (e) => {
    analogActive = false;
    stick.classList.remove('active');
    stick.style.transform = 'translate(-50%, -50%)';
    stick.style.left = '50%';
    stick.style.top = '50%';
    G.keys.up = false;
    G.keys.down = false;
    G.keys.left = false;
    G.keys.right = false;
    G.analogX = 0;
    G.analogY = 0;
  };

  const updateAnalog = (e) => {
    const pos = getPos(e);
    let dx = pos.clientX - analogOriginX;
    let dy = pos.clientY - analogOriginY;
    const dist = Math.hypot(dx, dy);

    if(dist > ANALOG_MAX_DIST){
      const ratio = ANALOG_MAX_DIST / dist;
      dx *= ratio;
      dy *= ratio;
    }

    stick.style.left = 'calc(50% + ' + dx + 'px)';
    stick.style.top = 'calc(50% + ' + dy + 'px)';
    stick.style.transform = 'translate(-50%, -50%)';

    // Normalize for movement - smaller deadzone for more responsive control
    const deadzone = 3;
    G.keys.up = dy < -deadzone;
    G.keys.down = dy > deadzone;
    G.keys.left = dx < -deadzone;
    G.keys.right = dx > deadzone;

    // Store analog values for smoother proportional movement
    G.analogX = Math.abs(dx) > deadzone ? dx / ANALOG_MAX_DIST : 0;
    G.analogY = Math.abs(dy) > deadzone ? dy / ANALOG_MAX_DIST : 0;
  };

  wrap.addEventListener('mousedown', startAnalog);
  wrap.addEventListener('touchstart', startAnalog, {passive: false});

  document.addEventListener('mousemove', moveAnalog);
  document.addEventListener('touchmove', moveAnalog, {passive: false});

  document.addEventListener('mouseup', endAnalog);
  document.addEventListener('touchend', endAnalog);
}

// === ENHANCED HIT VISUAL ===
function createHitVisual(x, y, type, isCrit){
  const container = document.getElementById('attack-vfx-container');
  if(!container) return;

  const screenX = x - G.camX;
  const screenY = y - G.camY;
  const colors = getTypeColors(type);

  // Main hit burst
  const burst = document.createElement('div');
  burst.className = 'hit-visual';
  burst.style.left = screenX + 'px';
  burst.style.top = screenY + 'px';
  burst.style.width = isCrit ? '70px' : '45px';
  burst.style.height = burst.style.width;
  burst.style.background = `radial-gradient(circle, ${colors[0]} 0%, ${colors[1]} 40%, transparent 70%)`;
  burst.style.boxShadow = `0 0 ${isCrit ? 40 : 25}px ${colors[0]}, 0 0 ${isCrit ? 80 : 50}px ${colors[2]}`;
  container.appendChild(burst);
  setTimeout(() => burst.remove(), 400);

  // Slash effect for melee
  if(!isCrit){
    const slash = document.createElement('div');
    slash.className = 'slash-effect';
    slash.style.left = screenX + 'px';
    slash.style.top = screenY + 'px';
    slash.style.transform = `translate(-50%,-50%) rotate(${Math.random() * 360}deg)`;
    container.appendChild(slash);
    setTimeout(() => slash.remove(), 250);
  }

  // Impact particles
  for(let i = 0; i < (isCrit ? 12 : 6); i++){
    const p = document.createElement('div');
    p.className = 'attack-vfx spark';
    const angle = (Math.PI * 2 * i) / (isCrit ? 12 : 6);
    const dist = isCrit ? 50 : 30;
    p.style.left = screenX + 'px';
    p.style.top = screenY + 'px';
    p.style.width = (isCrit ? 5 : 3) + 'px';
    p.style.height = p.style.width;
    p.style.background = colors[Math.floor(Math.random() * 3)];
    p.style.boxShadow = `0 0 ${isCrit ? 12 : 6}px ${colors[0]}`;
    p.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
    p.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
    container.appendChild(p);
    setTimeout(() => p.remove(), 400);
  }
}

// === BACKGROUND FLOATING PARTICLES ===
function createBgParticles(){
  const gameScreen = document.getElementById('game-screen');
  if(!gameScreen) return;

  // Remove old bg particles
  gameScreen.querySelectorAll('.bg-particle').forEach(p => p.remove());

  const colors = ['rgba(68,136,255,0.3)', 'rgba(233,69,96,0.25)', 'rgba(168,85,247,0.2)', 'rgba(245,166,35,0.25)'];

  for(let i = 0; i < 15; i++){
    const p = document.createElement('div');
    p.className = 'bg-particle';
    const size = 2 + Math.random() * 4;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.boxShadow = `0 0 ${size * 2}px ${p.style.background}`;
    p.style.animationDelay = (Math.random() * 8) + 's';
    p.style.animationDuration = (6 + Math.random() * 6) + 's';
    gameScreen.appendChild(p);
  }
}

function gameLoop(){
  if(!G.gameRunning) return;
  updatePlayer();
  updateBots();
  updateWildPokemon();
  updateAegisOrbs();
  updateCooldowns();
  updateParticles();
  checkCollisions();
  render();
  renderMinimap();
  updateUI();
}

function updatePlayer(){
  const p = G.player;
  if(!p.alive){
    p.respawnTimer--;
    if(p.respawnTimer <= 0){
      p.alive = true;
      p.hp = p.maxHp;
      p.x = G.mapW / 2;
      p.y = G.mapH - 80;
      p.aegisEnergy = 0;
      addKillFeed('You have respawned!');
    }
    return;
  }

  let dx = 0, dy = 0;
  if(G.keys.up) dy -= p.speed;
  if(G.keys.down) dy += p.speed;
  if(G.keys.left) dx -= p.speed;
  if(G.keys.right) dx += p.speed;

  if(dx !== 0 && dy !== 0){
    const len = Math.sqrt(dx*dx + dy*dy);
    dx = (dx / len) * p.speed;
    dy = (dy / len) * p.speed;
  }

  p.x = Math.max(20, Math.min(G.mapW - 20, p.x + dx));
  p.y = Math.max(20, Math.min(G.mapH - 20, p.y + dy));

  if(dx > 0) p.facing = 'right';
  else if(dx < 0) p.facing = 'left';
  else if(dy > 0) p.facing = 'down';
  else if(dy < 0) p.facing = 'up';

  p.animFrame++;

  if(p.hp < p.maxHp) p.hp = Math.min(p.maxHp, p.hp + 0.05);
}

function updateBots(){
  G.bots.forEach(bot => {
    if(!bot.alive){
      bot.respawnTimer--;
      if(bot.respawnTimer <= 0){
        bot.alive = true;
        bot.hp = bot.maxHp;
        bot.x = bot.team === 'blue' ? G.mapW / 2 : G.mapW / 2;
        bot.y = bot.team === 'blue' ? G.mapH - 60 : 60;
        bot.aegisEnergy = 0;
      }
      return;
    }

    bot.stateTimer--;
    if(bot.stateTimer <= 0){
      const states = ['farming', 'fighting', 'scoring', 'retreating'];
      bot.state = states[Math.floor(Math.random() * states.length)];
      bot.stateTimer = 120 + Math.floor(Math.random() * 180);
    }

    let targetX = bot.x, targetY = bot.y;

    if(bot.state === 'farming'){
      let nearest = null, nearestDist = Infinity;
      G.wildPokemon.forEach(wp => {
        if(!wp.alive) return;
        const dist = Math.hypot(wp.x - bot.x, wp.y - bot.y);
        if(dist < nearestDist){
          nearestDist = dist;
          nearest = wp;
        }
      });
      if(nearest){
        targetX = nearest.x;
        targetY = nearest.y;
        if(nearestDist < 40){
          nearest.hp -= 2;
          if(nearest.hp <= 0){
            nearest.alive = false;
            nearest.respawnTimer = 300;
            bot.xp += nearest.value;
            bot.aegisEnergy += nearest.value;
            checkLevelUp(bot);
            addParticles(nearest.x, nearest.y, '#fbbf24', 5);
          }
        }
      }
    } else if(bot.state === 'fighting'){
      const enemies = G.bots.filter(b => b.team !== bot.team && b.alive);
      let nearest = null, nearestDist = Infinity;

      enemies.forEach(e => {
        const dist = Math.hypot(e.x - bot.x, e.y - bot.y);
        if(dist < nearestDist){
          nearestDist = dist;
          nearest = e;
        }
      });

      if(G.player.alive){
        const dist = Math.hypot(G.player.x - bot.x, G.player.y - bot.y);
        if(dist < nearestDist){
          nearestDist = dist;
          nearest = {isPlayer: true, x: G.player.x, y: G.player.y, hp: G.player.hp, hero: G.playerHero};
        }
      }

      if(nearest){
        targetX = nearest.x;
        targetY = nearest.y;
        if(nearestDist < 50){
          const dmg = 3 + bot.level;
          if(nearest.isPlayer){
            G.player.hp -= dmg;
            addParticles(G.player.x, G.player.y, '#ef4444', 3);
            if(G.player.hp <= 0){
              G.player.alive = false;
              G.player.respawnTimer = 150 + G.player.level * 20;
              addKillFeed(bot.hero.display + ' KO\'d ' + G.playerHero.display + '!');
              dropAegisEnergy(G.player.x, G.player.y, G.player.aegisEnergy);
              G.player.aegisEnergy = 0;
              addParticles(G.player.x, G.player.y, '#fbbf24', 10);
            }
          } else {
            nearest.hp -= dmg;
            addParticles(nearest.x, nearest.y, '#ef4444', 3);
            if(nearest.hp <= 0){
              nearest.alive = false;
              nearest.respawnTimer = 150 + nearest.level * 20;
              addKillFeed(bot.hero.display + ' KO\'d ' + nearest.hero.display + '!');
              bot.xp += 15;
              bot.aegisEnergy += 10;
              checkLevelUp(bot);
              addParticles(nearest.x, nearest.y, '#fbbf24', 10);
            }
          }
        }
      }
    } else if(bot.state === 'scoring'){
      const enemyGoals = G.goalZones.filter(g => g.team !== bot.team && g.active);
      if(enemyGoals.length > 0){
        const goal = enemyGoals[Math.floor(Math.random() * enemyGoals.length)];
        targetX = goal.x;
        targetY = goal.y;

        const dist = Math.hypot(goal.x - bot.x, goal.y - bot.y);
        if(dist < 30 && bot.aegisEnergy > 0){
          const score = Math.min(bot.aegisEnergy, 30);
          bot.aegisEnergy -= score;
          if(bot.team === 'blue') G.blueScore += score;
          else G.redScore += score;
          addKillFeed(bot.hero.display + ' scored ' + score + ' points!');
          createScoreVFX(goal.x, goal.y);
          addParticles(goal.x, goal.y, '#fbbf24', 15);
        }
      }
    } else if(bot.state === 'retreating'){
      targetX = bot.team === 'blue' ? G.mapW / 2 : G.mapW / 2;
      targetY = bot.team === 'blue' ? G.mapH - 40 : 40;
    }

    const dx = targetX - bot.x;
    const dy = targetY - bot.y;
    const dist = Math.hypot(dx, dy);
    if(dist > 5){
      bot.x += (dx / dist) * bot.speed;
      bot.y += (dy / dist) * bot.speed;
    }

    if(dx > 0) bot.facing = 'right';
    else if(dx < 0) bot.facing = 'left';
    else if(dy > 0) bot.facing = 'down';
    else if(dy < 0) bot.facing = 'up';

    bot.animFrame++;

    if(bot.hp < bot.maxHp) bot.hp = Math.min(bot.maxHp, bot.hp + 0.03);
  });
}

function updateWildPokemon(){
  G.wildPokemon.forEach(wp => {
    if(!wp.alive){
      wp.respawnTimer--;
      if(wp.respawnTimer <= 0){
        wp.alive = true;
        wp.hp = wp.maxHp;
        wp.x = 50 + Math.random() * (G.mapW - 100);
        wp.y = 100 + Math.random() * (G.mapH - 200);
      }
    }
  });
}

function updateAegisOrbs(){
  G.aegisOrbs = G.aegisOrbs.filter(orb => {
    orb.life--;

    if(G.player.alive){
      const dist = Math.hypot(orb.x - G.player.x, orb.y - G.player.y);
      if(dist < 25){
        G.player.aegisEnergy += orb.value;
        addParticles(orb.x, orb.y, '#fbbf24', 5);
        return false;
      }
    }

    G.bots.forEach(bot => {
      if(!bot.alive) return;
      const dist = Math.hypot(orb.x - bot.x, orb.y - bot.y);
      if(dist < 25){
        bot.aegisEnergy += orb.value;
      }
    });

    return orb.life > 0;
  });
}

function updateCooldowns(){
  G.player.cooldowns = G.player.cooldowns.map(c => Math.max(0, c - 1));
  G.bots.forEach(bot => {
    bot.cooldowns = bot.cooldowns.map(c => Math.max(0, c - 1));
  });
}

function updateParticles(){
  G.particles = G.particles.filter(p => {
    p.x += p.vx;
    p.y += p.vy;
    p.life--;
    p.vy += 0.1;
    return p.life > 0;
  });
}

function addParticles(x, y, color, count){
  for(let i = 0; i < count; i++){
    G.particles.push({
      x: x, y: y,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4 - 2,
      life: 20 + Math.random() * 20,
      color: color,
      size: 2 + Math.random() * 3,
    });
  }
}

function dropAegisEnergy(x, y, amount){
  const orbs = Math.min(amount, 5);
  for(let i = 0; i < orbs; i++){
    G.aegisOrbs.push({
      x: x + (Math.random() - 0.5) * 30,
      y: y + (Math.random() - 0.5) * 30,
      value: Math.ceil(amount / orbs),
      life: 300,
    });
  }
}

function checkLevelUp(entity){
  if(entity.xp >= entity.maxXp){
    entity.level = Math.min(15, entity.level + 1);
    entity.xp = 0;
    entity.maxXp = Math.floor(entity.maxXp * 1.3);
    entity.maxHp += 10;
    entity.hp = Math.min(entity.maxHp, entity.hp + 10);

    if(entity === G.player){
      showLevelUp();
      createLevelUpVFX(G.player.x, G.player.y);
    }
  }
}

function showLevelUp(){
  const popup = document.getElementById('level-up-popup');
  popup.style.display = 'block';
  popup.textContent = 'LEVEL ' + G.player.level + '!';
  setTimeout(() => popup.style.display = 'none', 1500);
}

function checkCollisions(){
  // Player attacks wild Pokemon
  if(G.player.alive){
    G.wildPokemon.forEach(wp => {
      if(!wp.alive) return;
      const dist = Math.hypot(wp.x - G.player.x, wp.y - G.player.y);
      if(dist < 35){
        wp.hp -= 3;
        addParticles(wp.x, wp.y, '#fbbf24', 2);
        createHitVisual(wp.x, wp.y, 'normal', false);
        createImpactVFX(wp.x, wp.y, 'normal', {size: 20});
        if(wp.hp <= 0){
          wp.alive = false;
          wp.respawnTimer = 300;
          G.player.xp += wp.value;
          G.player.aegisEnergy += wp.value;
          checkLevelUp(G.player);
          addParticles(wp.x, wp.y, '#fbbf24', 8);
          createScoreVFX(wp.x, wp.y);
        }
      }
    });
  }

  // Check if player can score
  if(G.player.alive && G.player.aegisEnergy > 0){
    const enemyGoals = G.goalZones.filter(g => g.team !== 'blue' && g.active);
    let nearGoal = false;
    enemyGoals.forEach(goal => {
      const dist = Math.hypot(goal.x - G.player.x, goal.y - G.player.y);
      if(dist < 40) nearGoal = true;
    });

    const scoreBtn = document.getElementById('score-btn');
    if(nearGoal){
      scoreBtn.classList.remove('disabled');
    } else {
      scoreBtn.classList.add('disabled');
    }
  }
}

function useAbility(idx){
  if(!G.player.alive || G.player.cooldowns[idx] > 0) return;

  const move = G.playerHero.moves[idx];
  if(!move) return;

  G.player.cooldowns[idx] = move.cd * 60; // Convert seconds to frames

  // Attack nearby enemies
  const enemies = G.bots.filter(b => b.team !== 'blue' && b.alive);
  let hit = false;

  enemies.forEach(e => {
    const dist = Math.hypot(e.x - G.player.x, e.y - G.player.y);
    if(dist < move.range){
      e.hp -= move.power / 5;
      addParticles(e.x, e.y, '#ef4444', 4);
      hit = true;
      if(e.hp <= 0){
        e.alive = false;
        e.respawnTimer = 150 + e.level * 20;
        addKillFeed(G.playerHero.display + ' KO\'d ' + e.hero.display + '!');
        G.player.xp += 15;
        G.player.aegisEnergy += 10;
        checkLevelUp(G.player);
        addParticles(e.x, e.y, '#fbbf24', 10);
      }
    }
  });

  if(hit){
    addParticles(G.player.x, G.player.y, move.type === 'fire' ? '#f97316' : move.type === 'water' ? '#3b82f6' : move.type === 'electric' ? '#fbbf24' : '#a855f7', 6);
  }

  updateAbilityUI();
}

function useUnite(){
  if(!G.player.alive || G.player.cooldowns[3] > 0 || G.player.level < 9) return;

  const unite = G.playerHero.unite;
  G.player.cooldowns[3] = unite.cd * 60;

  // Powerful AOE attack
  const enemies = G.bots.filter(b => b.team !== 'blue' && b.alive);
  enemies.forEach(e => {
    const dist = Math.hypot(e.x - G.player.x, e.y - G.player.y);
    if(dist < unite.range){
      e.hp -= unite.power / 5;
      addParticles(e.x, e.y, '#ef4444', 8);
      if(e.hp <= 0){
        e.alive = false;
        e.respawnTimer = 150 + e.level * 20;
        addKillFeed(G.playerHero.display + ' UNITE MOVE KO\'d ' + e.hero.display + '!');
        G.player.xp += 25;
        G.player.aegisEnergy += 20;
        checkLevelUp(G.player);
        addParticles(e.x, e.y, '#fbbf24', 15);
      }
    }
  });

  addParticles(G.player.x, G.player.y, '#fbbf24', 20);
  addKillFeed(G.playerHero.display + ' used ' + unite.name + '!');
  updateAbilityUI();
}

function scoreGoal(){
  if(!G.player.alive || G.player.aegisEnergy <= 0) return;

  const enemyGoals = G.goalZones.filter(g => g.team !== 'blue' && g.active);
  let nearGoal = false;
  let goal = null;

  enemyGoals.forEach(g => {
    const dist = Math.hypot(g.x - G.player.x, g.y - G.player.y);
    if(dist < 40){
      nearGoal = true;
      goal = g;
    }
  });

  if(nearGoal && goal){
    const score = Math.min(G.player.aegisEnergy, 30);
    G.player.aegisEnergy -= score;
    G.blueScore += score;
    addKillFeed('You scored ' + score + ' points!');

    // Score VFX
    createScoreVFX(goal.x, goal.y);
    addParticles(goal.x, goal.y, '#fbbf24', 20);

    // Deactivate goal if too many scores
    if(Math.random() < 0.3) goal.active = false;
  }
}

function updateAbilityUI(){
  for(let i = 0; i < 4; i++){
    const cd = G.player.cooldowns[i];
    const overlay = document.getElementById('ability-' + (i < 3 ? (i+1) : 'unite') + '-cd');
    if(cd > 0){
      overlay.style.display = 'flex';
      overlay.textContent = Math.ceil(cd / 60);
    } else {
      overlay.style.display = 'none';
    }
  }

  // Unite move ready indicator
  const uniteBtn = document.getElementById('unite-move');
  if(G.player.level >= 9 && G.player.cooldowns[3] <= 0){
    uniteBtn.classList.add('ready');
  } else {
    uniteBtn.classList.remove('ready');
  }
}

function updateUI(){
  document.getElementById('blue-score').textContent = G.blueScore;
  document.getElementById('red-score').textContent = G.redScore;
  document.getElementById('score-amount').textContent = G.player.aegisEnergy;

  const xpPct = (G.player.xp / G.player.maxXp) * 100;
  document.getElementById('xp-bar').style.width = xpPct + '%';

  updateAbilityUI();
}

function updateTimer(){
  if(!G.gameRunning) return;
  G.gameTime--;

  const mins = Math.floor(G.gameTime / 60);
  const secs = G.gameTime % 60;
  document.getElementById('game-timer').textContent = mins + ':' + (secs < 10 ? '0' : '') + secs;

  if(G.gameTime <= 0){
    endGame();
  }

  // Last 2 minutes - score doubled
  if(G.gameTime === 120){
    addKillFeed('FINAL STRETCH! Double points active!');
  }
}

function endGame(){
  G.gameRunning = false;
  clearInterval(G.gameInterval);
  clearInterval(G.timerInterval);

  const overlay = document.getElementById('result-overlay');
  const title = document.getElementById('res-title');
  const msg = document.getElementById('res-msg');
  const stats = document.getElementById('res-stats');

  const won = G.blueScore > G.redScore;

  if(won){
    title.textContent = 'VICTORY!';
    title.className = 'res-title win';
    msg.textContent = 'Your team dominated the arena!';
  } else {
    title.textContent = 'DEFEAT...';
    title.className = 'res-title lose';
    msg.textContent = 'The enemy team was stronger this time.';
  }

  stats.innerHTML = '<div class="res-stat"><div class="res-stat-val" style="color:var(--team-blue)">' + G.blueScore + '</div><div class="res-stat-label">BLUE</div></div><div class="res-stat"><div class="res-stat-val" style="color:var(--team-red)">' + G.redScore + '</div><div class="res-stat-label">RED</div></div><div class="res-stat"><div class="res-stat-val" style="color:var(--gold)">' + G.player.level + '</div><div class="res-stat-label">LVL</div></div>';

  overlay.classList.add('show');
}

// Sprite cache
const SPRITE_CACHE = {};
function getSprite(id){
  if(!SPRITE_CACHE[id]){
    const img = new Image();
    img.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + id + '.png';
    img.crossOrigin = 'anonymous';
    SPRITE_CACHE[id] = img;
  }
  return SPRITE_CACHE[id];
}

function preloadSprites(){
  // Preload all hero sprites
  UNITE_HEROES.forEach(h => getSprite(h.id));
  // Preload wild Pokemon
  getSprite(190); // Aipom
  getSprite(341); // Corphish
}

function render(){
  const ctx = G.ctx;
  const w = G.canvas.width;
  const h = G.canvas.height;

  // Camera follow player
  G.camX = G.player.x - w / 2;
  G.camY = G.player.y - h / 2;
  G.camX = Math.max(0, Math.min(G.mapW - w, G.camX));
  G.camY = Math.max(0, Math.min(G.mapH - h, G.camY));

  ctx.clearRect(0, 0, w, h);
  ctx.save();
  ctx.translate(-G.camX, -G.camY);

  // === ENHANCED MAP BACKGROUND ===
  const t = Date.now() / 1000;

  // Base grass gradient
  const grassGrad = ctx.createLinearGradient(0, 0, G.mapW, G.mapH);
  grassGrad.addColorStop(0,   '#0d2e14');
  grassGrad.addColorStop(0.3, '#122a18');
  grassGrad.addColorStop(0.5, '#0e2612');
  grassGrad.addColorStop(0.7, '#112814');
  grassGrad.addColorStop(1,   '#0d2010');
  ctx.fillStyle = grassGrad;
  ctx.fillRect(0, 0, G.mapW, G.mapH);

  // Subtle noise / grass tiles
  ctx.save();
  ctx.globalAlpha = 0.06;
  for(let gx = 0; gx < G.mapW; gx += 20){
    for(let gy = 0; gy < G.mapH; gy += 20){
      if((gx + gy) % 40 === 0){
        ctx.fillStyle = '#22c55e';
        ctx.fillRect(gx, gy, 10, 10);
      }
    }
  }
  ctx.restore();

  // Ambient glow zones (team color ambience)
  const blueAmbient = ctx.createRadialGradient(G.mapW*0.5, G.mapH*0.9, 0, G.mapW*0.5, G.mapH*0.9, 260);
  blueAmbient.addColorStop(0, 'rgba(59,130,246,0.18)');
  blueAmbient.addColorStop(1, 'transparent');
  ctx.fillStyle = blueAmbient;
  ctx.fillRect(0, 0, G.mapW, G.mapH);

  const redAmbient = ctx.createRadialGradient(G.mapW*0.5, G.mapH*0.1, 0, G.mapW*0.5, G.mapH*0.1, 260);
  redAmbient.addColorStop(0, 'rgba(239,68,68,0.18)');
  redAmbient.addColorStop(1, 'transparent');
  ctx.fillStyle = redAmbient;
  ctx.fillRect(0, 0, G.mapW, G.mapH);

  // Draw roads with glowing lane lines
  const roadW1 = G.mapW * 0.15;
  const roads = [
    {x: G.mapW * 0.1, y: 0, w: roadW1, h: G.mapH, horiz: false},
    {x: G.mapW * 0.425, y: 0, w: roadW1, h: G.mapH, horiz: false},
    {x: G.mapW * 0.75, y: 0, w: roadW1, h: G.mapH, horiz: false},
    {x: 0, y: G.mapH * 0.3, w: G.mapW, h: G.mapH * 0.1, horiz: true},
    {x: 0, y: G.mapH * 0.6, w: G.mapW, h: G.mapH * 0.1, horiz: true},
  ];
  roads.forEach(r => {
    // Base road
    const rg = ctx.createLinearGradient(r.x, r.y, r.x + (r.horiz ? 0 : r.w), r.y + (r.horiz ? r.h : 0));
    rg.addColorStop(0, '#1e1e3e');
    rg.addColorStop(0.5, '#252548');
    rg.addColorStop(1, '#1e1e3e');
    ctx.fillStyle = rg;
    ctx.fillRect(r.x, r.y, r.w, r.h);

    // Center lane glow line
    ctx.save();
    ctx.globalAlpha = 0.25 + 0.1 * Math.sin(t * 1.5);
    ctx.strokeStyle = '#60a5fa';
    ctx.lineWidth = 2;
    ctx.setLineDash([12, 10]);
    ctx.lineDashOffset = -t * 30;
    ctx.beginPath();
    if(r.horiz){
      ctx.moveTo(r.x, r.y + r.h / 2);
      ctx.lineTo(r.x + r.w, r.y + r.h / 2);
    } else {
      ctx.moveTo(r.x + r.w / 2, r.y);
      ctx.lineTo(r.x + r.w / 2, r.y + r.h);
    }
    ctx.stroke();
    ctx.restore();

    // Road edge glow
    ctx.save();
    ctx.globalAlpha = 0.12;
    ctx.fillStyle = '#818cf8';
    if(r.horiz){
      ctx.fillRect(r.x, r.y, r.w, 2);
      ctx.fillRect(r.x, r.y + r.h - 2, r.w, 2);
    } else {
      ctx.fillRect(r.x, r.y, 2, r.h);
      ctx.fillRect(r.x + r.w - 2, r.y, 2, r.h);
    }
    ctx.restore();
  });

  // Jungle zones with deeper look + pulsing aura
  const jungles = [
    {x: G.mapW*0.25, y: G.mapH*0.2, w: G.mapW*0.15, h: G.mapH*0.2},
    {x: G.mapW*0.6,  y: G.mapH*0.2, w: G.mapW*0.15, h: G.mapH*0.2},
    {x: G.mapW*0.25, y: G.mapH*0.6, w: G.mapW*0.15, h: G.mapH*0.2},
    {x: G.mapW*0.6,  y: G.mapH*0.6, w: G.mapW*0.15, h: G.mapH*0.2},
  ];
  jungles.forEach((j, i) => {
    const jg = ctx.createRadialGradient(j.x + j.w/2, j.y + j.h/2, 0, j.x + j.w/2, j.y + j.h/2, j.w * 0.7);
    jg.addColorStop(0, '#16103a');
    jg.addColorStop(0.6, '#1a1440');
    jg.addColorStop(1, '#12102a');
    ctx.fillStyle = jg;
    ctx.fillRect(j.x, j.y, j.w, j.h);

    // Pulsing purple aura on jungle
    ctx.save();
    ctx.globalAlpha = 0.08 + 0.05 * Math.sin(t * 2 + i);
    const jPulse = ctx.createRadialGradient(j.x + j.w/2, j.y + j.h/2, 0, j.x + j.w/2, j.y + j.h/2, j.w);
    jPulse.addColorStop(0, '#a855f7');
    jPulse.addColorStop(1, 'transparent');
    ctx.fillStyle = jPulse;
    ctx.fillRect(j.x - 20, j.y - 20, j.w + 40, j.h + 40);
    ctx.restore();

    // Small tree symbols
    ctx.save();
    ctx.globalAlpha = 0.45;
    ctx.fillStyle = '#1d4030';
    const cx2 = j.x + j.w/2, cy2 = j.y + j.h/2;
    for(let ti = 0; ti < 6; ti++){
      const tx2 = cx2 + Math.cos(ti * 1.05) * 22;
      const ty2 = cy2 + Math.sin(ti * 1.05) * 14;
      ctx.beginPath();
      ctx.arc(tx2, ty2, 6, 0, Math.PI*2);
      ctx.fill();
    }
    ctx.restore();
  });

  // Center altar / Rotom zone with animated glow
  const cx = G.mapW / 2, cy = G.mapH / 2;
  // Outer glow rings (animated)
  for(let ri = 3; ri >= 0; ri--){
    const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 80 + ri * 20);
    const alpha = (0.05 + 0.03 * Math.sin(t * 2 + ri)) * (1 - ri * 0.2);
    glow.addColorStop(0, `rgba(168,85,247,${alpha * 4})`);
    glow.addColorStop(0.5, `rgba(139,92,246,${alpha})`);
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(cx, cy, 80 + ri * 20, 0, Math.PI * 2);
    ctx.fill();
  }

  // Rotating rune ring
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(t * 0.5);
  ctx.globalAlpha = 0.3 + 0.1 * Math.sin(t * 3);
  ctx.strokeStyle = '#a855f7';
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 6]);
  ctx.beginPath();
  ctx.arc(0, 0, 55, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  // Inner counter-rotate
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(-t * 0.8);
  ctx.globalAlpha = 0.2;
  ctx.strokeStyle = '#c084fc';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 8]);
  ctx.beginPath();
  ctx.arc(0, 0, 42, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  // Center altar circle
  const altarGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 40);
  altarGrad.addColorStop(0, '#5b21b6');
  altarGrad.addColorStop(0.6, '#4c1d95');
  altarGrad.addColorStop(1, '#2e1065');
  ctx.fillStyle = altarGrad;
  ctx.setLineDash([]);
  ctx.beginPath();
  ctx.arc(cx, cy, 40, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = '#c084fc';
  ctx.lineWidth = 2.5;
  ctx.globalAlpha = 0.6 + 0.4 * Math.sin(t * 3);
  ctx.beginPath();
  ctx.arc(cx, cy, 40, 0, Math.PI * 2);
  ctx.stroke();
  ctx.globalAlpha = 1;

  // Center lightning bolt symbol
  ctx.save();
  ctx.translate(cx, cy);
  ctx.fillStyle = '#e9d5ff';
  ctx.globalAlpha = 0.7 + 0.3 * Math.sin(t * 4);
  ctx.font = 'bold 20px monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('⚡', 0, 0);
  ctx.restore();

  // Draw goal zones with enhanced glow
  G.goalZones.forEach(gz => {
    if(!gz.active) return;
    const isBlue = gz.team === 'blue';
    const gc = isBlue ? '#3b82f6' : '#ef4444';

    // Outer glow
    const goalGlow = ctx.createRadialGradient(gz.x, gz.y, 0, gz.x, gz.y, 50);
    goalGlow.addColorStop(0, isBlue ? 'rgba(59,130,246,0.35)' : 'rgba(239,68,68,0.35)');
    goalGlow.addColorStop(1, 'transparent');
    ctx.fillStyle = goalGlow;
    ctx.fillRect(gz.x - 50, gz.y - 50, 100, 100);

    // Pulsing ring
    ctx.save();
    ctx.globalAlpha = 0.25 + 0.15 * Math.sin(t * 3 + gz.x);
    ctx.strokeStyle = gc;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(gz.x, gz.y, 32 + 4 * Math.sin(t * 2), 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    // Main zone circle
    const goalFill = ctx.createRadialGradient(gz.x, gz.y, 0, gz.x, gz.y, 25);
    goalFill.addColorStop(0, isBlue ? 'rgba(96,165,250,0.7)' : 'rgba(252,165,165,0.7)');
    goalFill.addColorStop(1, isBlue ? 'rgba(59,130,246,0.4)' : 'rgba(239,68,68,0.4)');
    ctx.fillStyle = goalFill;
    ctx.beginPath();
    ctx.arc(gz.x, gz.y, 25, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 3]);
    ctx.beginPath();
    ctx.arc(gz.x, gz.y, 25, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Goal icon
    ctx.save();
    ctx.fillStyle = '#fff';
    ctx.globalAlpha = 0.9;
    ctx.font = 'bold 10px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('⚽', gz.x, gz.y);
    ctx.restore();
  });

  // Goal zones already drawn in enhanced background above



  // Draw wild Pokemon
  G.wildPokemon.forEach(wp => {
    if(!wp.alive) return;

    const wildId = wp.type === 'aipom' ? 190 : 341;
    const sprite = getSprite(wildId);
    if(sprite.complete && sprite.naturalWidth !== 0){
      ctx.drawImage(sprite, wp.x - 14, wp.y - 14, 28, 28);
    } else {
      // Fallback circle
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.arc(wp.x, wp.y, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#000';
      ctx.font = '8px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(wp.type === 'aipom' ? 'A' : 'C', wp.x, wp.y + 3);
    }

    // HP bar
    const hpPct = wp.hp / wp.maxHp;
    ctx.fillStyle = '#000';
    ctx.fillRect(wp.x - 12, wp.y - 20, 24, 4);
    ctx.fillStyle = hpPct > 0.5 ? '#4ade80' : hpPct > 0.2 ? '#facc15' : '#f87171';
    ctx.fillRect(wp.x - 12, wp.y - 20, 24 * hpPct, 4);

    // Value indicator
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 7px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(wp.value + '⚡', wp.x, wp.y - 24);
  });

  // Draw Aegis orbs
  G.aegisOrbs.forEach(orb => {
    ctx.fillStyle = '#fbbf24';
    ctx.beginPath();
    ctx.arc(orb.x, orb.y, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  // Draw bots
  G.bots.forEach(bot => {
    if(!bot.alive) return;
    const isAlly = bot.team === 'blue';

    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.beginPath();
    ctx.ellipse(bot.x, bot.y + 16, 12, 4, 0, 0, Math.PI * 2);
    ctx.fill();

    // Draw Pokemon sprite
    const sprite = getSprite(bot.hero.id);
    if(sprite.complete && sprite.naturalWidth !== 0){
      ctx.drawImage(sprite, bot.x - 16, bot.y - 16, 32, 32);
    } else {
      // Fallback
      ctx.fillStyle = isAlly ? '#3b82f6' : '#ef4444';
      ctx.beginPath();
      ctx.arc(bot.x, bot.y, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 8px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(bot.hero.display[0], bot.x, bot.y + 3);
    }

    // Border color based on team
    ctx.strokeStyle = isAlly ? '#3b82f6' : '#ef4444';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(bot.x, bot.y, 18, 0, Math.PI * 2);
    ctx.stroke();

    // Level badge
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(bot.x + 14, bot.y - 14, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 7px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(bot.level, bot.x + 14, bot.y - 11);

    // HP bar
    const hpPct = bot.hp / bot.maxHp;
    ctx.fillStyle = '#000';
    ctx.fillRect(bot.x - 14, bot.y - 26, 28, 4);
    ctx.fillStyle = hpPct > 0.5 ? '#4ade80' : hpPct > 0.2 ? '#facc15' : '#f87171';
    ctx.fillRect(bot.x - 14, bot.y - 26, 28 * hpPct, 4);

    // Aegis energy indicator
    if(bot.aegisEnergy > 0){
      ctx.fillStyle = '#fbbf24';
      ctx.font = 'bold 7px monospace';
      ctx.fillText(bot.aegisEnergy + '⚡', bot.x, bot.y - 32);
    }

    // Name tag
    ctx.fillStyle = isAlly ? '#3b82f6' : '#ef4444';
    ctx.font = 'bold 7px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(bot.hero.display, bot.x, bot.y + 24);
  });

  // Draw player
  if(G.player.alive){
    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.beginPath();
    ctx.ellipse(G.player.x, G.player.y + 18, 14, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Draw Pokemon sprite
    const sprite = getSprite(G.playerHero.id);
    if(sprite.complete && sprite.naturalWidth !== 0){
      ctx.drawImage(sprite, G.player.x - 20, G.player.y - 20, 40, 40);
    } else {
      // Fallback
      ctx.fillStyle = '#3b82f6';
      ctx.beginPath();
      ctx.arc(G.player.x, G.player.y, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(G.playerHero.display[0], G.player.x, G.player.y + 4);
    }

    // Golden border for player
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(G.player.x, G.player.y, 22, 0, Math.PI * 2);
    ctx.stroke();

    // Level badge
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(G.player.x + 16, G.player.y - 16, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 9px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(G.player.level, G.player.x + 16, G.player.y - 12);

    // HP bar
    const hpPct = G.player.hp / G.player.maxHp;
    ctx.fillStyle = '#000';
    ctx.fillRect(G.player.x - 18, G.player.y - 30, 36, 5);
    ctx.fillStyle = hpPct > 0.5 ? '#4ade80' : hpPct > 0.2 ? '#facc15' : '#f87171';
    ctx.fillRect(G.player.x - 18, G.player.y - 30, 36 * hpPct, 5);

    // Aegis energy
    if(G.player.aegisEnergy > 0){
      ctx.fillStyle = '#fbbf24';
      ctx.font = 'bold 9px monospace';
      ctx.fillText(G.player.aegisEnergy + '⚡', G.player.x, G.player.y - 36);
    }

    // Name tag
    ctx.fillStyle = '#3b82f6';
    ctx.font = 'bold 8px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('YOU', G.player.x, G.player.y + 28);
  }

  // Draw particles
  G.particles.forEach(p => {
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.life / 40;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;

  ctx.restore();
}

function renderMinimap(){
  const ctx = G.mmCtx;
  const w = 100, h = 100;

  ctx.clearRect(0, 0, w, h);

  // Background
  ctx.fillStyle = '#1a3a1a';
  ctx.fillRect(0, 0, w, h);

  // Roads
  ctx.fillStyle = '#2a2a4a';
  ctx.fillRect(w * 0.1, 0, w * 0.15, h);
  ctx.fillRect(w * 0.425, 0, w * 0.15, h);
  ctx.fillRect(w * 0.75, 0, w * 0.15, h);

  // Goal zones
  G.goalZones.forEach(gz => {
    if(!gz.active) return;
    ctx.fillStyle = gz.team === 'blue' ? '#3b82f6' : '#ef4444';
    ctx.beginPath();
    ctx.arc((gz.x / G.mapW) * w, (gz.y / G.mapH) * h, 3, 0, Math.PI * 2);
    ctx.fill();
  });

  // Wild Pokemon dots
  G.wildPokemon.forEach(wp => {
    if(!wp.alive) return;
    ctx.fillStyle = '#fbbf24';
    ctx.beginPath();
    ctx.arc((wp.x / G.mapW) * w, (wp.y / G.mapH) * h, 1.5, 0, Math.PI * 2);
    ctx.fill();
  });

  // Bots - draw tiny sprites if loaded
  G.bots.forEach(bot => {
    if(!bot.alive) return;
    const mx = (bot.x / G.mapW) * w;
    const my = (bot.y / G.mapH) * h;
    const sprite = getSprite(bot.hero.id);
    if(sprite.complete && sprite.naturalWidth !== 0){
      ctx.drawImage(sprite, mx - 4, my - 4, 8, 8);
    } else {
      ctx.fillStyle = bot.team === 'blue' ? '#3b82f6' : '#ef4444';
      ctx.beginPath();
      ctx.arc(mx, my, 2, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  // Player - draw sprite if loaded
  if(G.player.alive){
    const mx = (G.player.x / G.mapW) * w;
    const my = (G.player.y / G.mapH) * h;
    const sprite = getSprite(G.playerHero.id);
    if(sprite.complete && sprite.naturalWidth !== 0){
      ctx.drawImage(sprite, mx - 5, my - 5, 10, 10);
    } else {
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.arc(mx, my, 3, 0, Math.PI * 2);
      ctx.fill();
    }
    // Player indicator ring
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(mx, my, 5, 0, Math.PI * 2);
    ctx.stroke();
  }
}

function addKillFeed(text){
  const feed = document.getElementById('kill-feed');
  const item = document.createElement('div');
  item.className = 'kill-feed-item';
  item.textContent = text;
  feed.appendChild(item);

  if(feed.children.length > 5){
    feed.removeChild(feed.firstChild);
  }

  setTimeout(() => {
    if(item.parentNode) item.parentNode.removeChild(item);
  }, 4000);
}

function showScreen(id){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function rematch(){
  document.getElementById('result-overlay').classList.remove('show');
  startMatch();
}

function goHome(){
  document.getElementById('result-overlay').classList.remove('show');
  G.gameRunning = false;
  clearInterval(G.gameInterval);
  clearInterval(G.timerInterval);
  showScreen('hero-screen');
}

// Auto-select first hero on load
selectHero(0);
