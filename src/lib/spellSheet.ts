// lib/spellSheet.ts

export type SpellDetail = {
  id: string;
  name: string;
  kind: "attack" | "defense";
  text: string;          // คำที่ต้องพิมพ์
  length: number;        // ความยาวของ text (precomputed)
  power: number;         // atk หรือ def
  cast_ms: number;       // เวลาร่าย (พิมพ์จบ) โดยประมาณ
  airtime_ms: number;    // เวลาเดินทาง (เฉพาะโจมตี), defense = 0
  cooldown_ms: number;   // คูลดาวน์คาถา
  sustain_ms?: number;   // เวลาใช้งานโล่หลังร่ายเสร็จ (เฉพาะ defense)
  perfect_guard_bonus?: number; // โบนัสป้องกันหากกดกันแบบเป๊ะ (optional)
  reflect_pct?: number;  // สัดส่วนสะท้อนดาเมจ (เฉพาะ defense แบบสะท้อน)
  notes?: string;
};

export const SPELLS: SpellDetail[] = [
  // ====== ATTACK ======
  {
    id: "a_xs",
    name: "Flicker",
    kind: "attack",
    text: "zap",
    length: 3,
    power: 2,
    cast_ms: 360,
    airtime_ms: 900,
    cooldown_ms: 700,
    notes: "ยิงไวมาก ดาเมจน้อย ใช้กดดัน/ตัดคอมโบ"
  },
  {
    id: "a_s",
    name: "Spark",
    kind: "attack",
    text: "vex",
    length: 3,
    power: 3,
    cast_ms: 380,
    airtime_ms: 900,
    cooldown_ms: 800
  },
  {
    id: "a_m",
    name: "Bolt",
    kind: "attack",
    text: "lumen",
    length: 5,
    power: 5,
    cast_ms: 470,
    airtime_ms: 812,
    cooldown_ms: 1000
  },
  {
    id: "a_ml",
    name: "Arc",
    kind: "attack",
    text: "arcanum",
    length: 7,
    power: 6,
    cast_ms: 560,
    airtime_ms: 750,
    cooldown_ms: 1200
  },
  {
    id: "a_l",
    name: "Nova",
    kind: "attack",
    text: "arcadian",
    length: 8,
    power: 7,
    cast_ms: 610,
    airtime_ms: 725,
    cooldown_ms: 1400
  },
  {
    id: "a_xl",
    name: "Meteor",
    kind: "attack",
    text: "cataclysm",
    length: 9,
    power: 9,
    cast_ms: 680,
    airtime_ms: 702,
    cooldown_ms: 1700,
    notes: "ร่ายนาน แต่อันตรายสูง"
  },

  // ====== DEFENSE ======
  {
    id: "d_s",
    name: "Ward",
    kind: "defense",
    text: "aegis",
    length: 5,
    power: 3,
    cast_ms: 460,
    airtime_ms: 0,
    cooldown_ms: 900,
    sustain_ms: 900
  },
  {
    id: "d_m",
    name: "Barrier",
    kind: "defense",
    text: "umbra",
    length: 5,
    power: 5,
    cast_ms: 480,
    airtime_ms: 0,
    cooldown_ms: 1100,
    sustain_ms: 1100
  },
  {
    id: "d_l",
    name: "Bastion",
    kind: "defense",
    text: "sanctuary",
    length: 9,
    power: 7,
    cast_ms: 650,
    airtime_ms: 0,
    cooldown_ms: 1500,
    sustain_ms: 1600,
    notes: "โล่ยืดเวลา เหมาะกันดาเมจหนักต่อเนื่อง"
  },
  {
    id: "d_p",
    name: "Parry",
    kind: "defense",
    text: "riposte",
    length: 7,
    power: 4,
    cast_ms: 540,
    airtime_ms: 0,
    cooldown_ms: 900,
    sustain_ms: 250,
    perfect_guard_bonus: 3, // จบโล่ใกล้เวลาโดนจะได้โบนัสป้องกัน
    notes: "หน้าต่างสั้น เน้นกันแบบเป๊ะ ๆ"
  },
  {
    id: "d_r",
    name: "Reflect",
    kind: "defense",
    text: "mirrorveil",
    length: 10,
    power: 6,
    cast_ms: 700,
    airtime_ms: 0,
    cooldown_ms: 1300,
    sustain_ms: 1000,
    reflect_pct: 0.3, // สะท้อน 30% ของดาเมจที่เหลือ
    notes: "ป้องกันปานกลางแต่มีสะท้อน"
  }
];
