let ctx = null;

function audio() {
  if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
  return ctx;
}

function tone({ freq, endFreq, type = "sine", volume, duration }) {
  try {
    const ac = audio();
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.connect(gain);
    gain.connect(ac.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ac.currentTime);
    if (endFreq) osc.frequency.exponentialRampToValueAtTime(endFreq, ac.currentTime + duration);
    gain.gain.setValueAtTime(volume, ac.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + duration);
    osc.start(ac.currentTime);
    osc.stop(ac.currentTime + duration);
  } catch (_) {}
}

let soundsEnabled = true;
export const getSoundsEnabled = () => soundsEnabled;
export const setSoundsEnabled = (v) => { soundsEnabled = v; };

export function playHover() {
  if (!soundsEnabled) return;
  tone({ freq: 880, endFreq: 1050, type: "sine", volume: 0.03, duration: 0.09 });
}

export function playClick() {
  if (!soundsEnabled) return;
  tone({ freq: 520, endFreq: 280, type: "sine", volume: 0.07, duration: 0.11 });
}

// ─── MUSIC (wire up once audio file is provided) ─────────────────────────────
let musicAudio = null;

export function startMusic() {
  // TODO: replace null with: new Audio(require("../Assets/Audio/ambient.mp3"))
  if (!musicAudio) return;
  musicAudio.loop = true;
  musicAudio.volume = 0;
  musicAudio.play().catch(() => {});
  fadeAudio(musicAudio, 0, 0.25, 3000);
}

export function stopMusic() {
  if (!musicAudio) return;
  fadeAudio(musicAudio, musicAudio.volume, 0, 2000, () => { musicAudio.pause(); musicAudio.currentTime = 0; });
}

function fadeAudio(audio, from, to, durationMs, onDone) {
  const steps = 40;
  const interval = durationMs / steps;
  const delta = (to - from) / steps;
  let step = 0;
  const id = setInterval(() => {
    step++;
    audio.volume = Math.max(0, Math.min(1, from + delta * step));
    if (step >= steps) { clearInterval(id); if (onDone) onDone(); }
  }, interval);
}
