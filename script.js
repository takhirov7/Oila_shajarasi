/* ====== MAʼLUMOTLAR ====== */
const S="", BOY="dadd.jpg", GIRL="mamm.jpg", GIRL1="girlsm.jpeg", BOY1="boy.jpg";
const p=(full,born,photo,bio="",died)=>{const [n,...r]=full.trim().split(/\s+/);return {n,s:r.join(" ")||S,born,bio,photo,died}};

const P={
 /* ---- Siz ---- */
 me:{...p("Abdulloh Takhirov",2008,"boy.jpg","Andijon viloyati Baliqchi tumanida tavallud topgan. Hozirda Millat Umidi oliygohida taʼlim olmoqda."),go:"fAhmad"},
 bro:p("Ibrohim Takhirov",2011,"boy.jpg","Andijon viloyatida tavallud topgan. Oʻqishga unchalik qiziqmaydi."),

 /* ---- Ota-onangiz ---- */
 mom:p("Abdurahmon Yusupov",1984,BOY,"Aslida ismi Shoyadbek boʻlib, yoshligida oʻzgartirilgan. Rossiyada ishlaydi."),
 dad:p("Gulnoza Yusupova",1986,GIRL,"Ikki oʻgʻilning onasi. Uyda farzandlariga tarbiya berib keladi."),

 /* ---- Bobo va buvi (4 ta farzand) ---- */
 gf:p("Rustamjon Qodirov",1960,BOY,"Asl kasbi oshpaz, ammo ustachilik ham qilib turadi."),
 gm:p("Karomathon Qodirova",1965,GIRL,"Toʻrt farzandga tarbiya bergan. Yoshligida oilada qiyinchilik boʻlgani sababli sotuvchilik ham qilgan."),
 g1:p("Gullola",1989,GIRL),
 g2:p("Hilola",1994,GIRL),
 g3:p("Erkinjon Mutalboyev",1992,BOY),
 g6:p("Madina Bonu",1998,GIRL),
 g4:p("Husanboy",1989,BOY),
 g5:p("Javlonbek Oktamov",1983,BOY),

 /* ---- Bobongizning otasi (8 ta farzand) ---- */
 gg:p("Abdumutallif Qodirov",1933,BOY,"Andijon viloyatida tavallud topgan, ona tili fanidan dars bergan.",1995),
 ggw:p("Melihon Homidjonova",1938,GIRL,"Uy bekasi boʻlib, 8 nafar farzandga tarbiya bergan.",2008),

 /* ---- Yangi avlod: Abdumutallifning ota-bobosi (yillar taxminiy, oʻzingiz tuzating) ---- */
 ah:p("Ahmadiyor",1880,BOY,"Abdumutallifning bobosi.",1950),
 abq:p("Abduqodir Qodirov",1905,BOY,"Abdumutallifning otasi.",1970),
 adl:p("Adolathon Qodirova",1910,GIRL,"Abdumutallifning onasi.",1980),

 /* oʻgʻillar (bobongizning aka-ukalari) va xotinlari */
 s1:p("Rovshanbek Qodirov",1958,BOY),   ws1:p("Shahlohon Qodirova",1964,GIRL),
 s2:p("Bahromjon Qodirov",1972,BOY),    ws2:p("Shoirahon Qodirova",1975,GIRL),
 s3:p("Bahodir Qodirov",1975,BOY,"",2013), ws3:p("Dildorahon Qodirova",1979,GIRL),
 s4:p("Shovkatbek Qodirov",1964,BOY),   ws4:p("Odinahon",1966,GIRL),

 /* qizlar (bobongizning opa-singillari) va erlari */
 d1:p("Minavarhon",1961,GIRL,"",2025),  hd1:p("Abdunazar Boynazarov",1955,BOY),
 d2:p("Habibahon",1970,GIRL),           hd2:p("Abdumuhtar",1968,BOY),
 d3:p("Miyassar Eganberdiyeva",1968,GIRL), hd3:p("Abdusattor Eganberdiyev",1964,BOY),

 /* ularning farzandlari */
 a1:p("Islombek",1991,BOY),  a2:p("Zarnigor",1998,GIRL),
 b1:p("Danyorbek",1987,BOY), b2:p("Abdurasil",1991,BOY),
 c1:p("Bahtiyor Qodirov",1986,BOY), c2:p("Dildora",1988,GIRL),
 e1:p("Ilhomjon Mutalipov",1994,BOY), e2:p("Durdona",1994,GIRL),
 f1:p("Sardor Mutalboyev",2003,BOY),  f2:p("Fotima",1995,GIRL),
 h1:p("Abdulaziz Mutalboyev",2003,BOY), h2:p("Husanboy",1995,BOY),
 j1:p("Shohsanam",1996,GIRL), j2:p("Nodira",1987,GIRL),
 j21:p("Jahongir Qodirov",1988,BOY),
 j22:p("Abrorbek Qodirov",1992,BOY),
 h11:p("Asaloy",1990,GIRL), h12:p("Omina",1992,GIRL1),
 h13:p("Muslima",2025,GIRL1),
 g11:p("Muhammad Amin",1989,BOY1), g12:p("Muhammad Rizo",1992,BOY1),
 g13:p("Muhammad Muso",2025,BOY1),
 e11:p("Muhammad Ayub",1989,BOY1), e12:p("Soliha",1992,GIRL1),
 e13:p("Sabina",2025,GIRL1), e14:p("Muhammad Aziz",2025,BOY1),
 h22:p("Nigora Mutalboyeva",2006,GIRL)
};

/* oilalar: er (h), xotin (w, boʻlmasa yozilmaydi), bolalar (k) */
const F={
 fAhmad:{h:"ah",k:["abq"]},
 fAbq:{h:"abq",w:"adl",k:["gg"]},
 fGreat:{h:"gg",w:"ggw",k:["s1","d1","gf","s2","d2","s3","s4","d3"]},
 fGrand:{h:"gf",w:"gm",k:["g1","g2","dad","g3"]},
 fDad:{h:"dad",w:"mom",k:["me","bro"]},

 fS1:{h:"s1",w:"ws1",k:["a1","b1","c1"]},
 fD1:{h:"hd1",w:"d1",k:["c2","e2","f2","h2"]},
 fS2:{h:"s2",w:"ws2",k:["e1","f1","j1"]},
 fD2:{h:"hd2",w:"d2",k:["b2","a2","h11"]},
 fS3:{h:"s3",w:"ws3",k:["h1","h22"]},
 fS4:{h:"s4",w:"ws4",k:[]},
 fD3:{h:"hd3",w:"d3",k:["j2","j21","j22"]},
 fD4:{h:"g4",w:"g2",k:["e14","h12","h13"]},
 fD5:{h:"g5",w:"g1",k:["g11","g12","g13"]},
 fD6:{h:"g3",w:"g6",k:["e11","e12","e13"]}
};
const START={t:"p",id:"me"};
/* ================================================================= */

const $=s=>document.querySelector(s),st=$("#stage"),nav=$("#nav");
let path=[START],busy=false;
const famOf=id=>Object.keys(F).find(k=>F[k].h===id||F[k].w===id);
const yrs=p=>(p.born||"?")+" – "+(p.died||"hozir");
const ini=p=>(p.n[0]||"")+(p.s[0]||"");
const av=p=>`<div class="av">${p.photo?`<img src="${p.photo}" alt="">`:ini(p)}</div>`;

function main(id,role,click,d){const p=P[id];
 return `<div class="main tilt enter ${click?"click":""}" style="--d:${d}s" ${click?`data-go="${click}"`:""}>
 <div class="role">${role}</div>${av(p)}<h2>${p.n} ${p.s}</h2><div class="yrs">${yrs(p)}</div>
 <p class="bio">${p.bio||""}</p>${click?'<div class="hint">▲ Bosing — avlodlarni oching</div>':""}</div>`}

function kid(id,d){const p=P[id],has=!!famOf(id);
 return `<div class="kid tilt enter" style="--d:${d}s" data-kid="${id}">${av(p)}<b>${p.n}<br>${p.s}</b>${has?"<i>▸ oila</i>":""}</div>`}

function kidsHTML(fid){const f=F[fid];
 if(!f.k.length)return "";
 return `<div class="link"></div><div class="lbl">Farzandlari — ${f.k.length} nafar</div><div class="row">${f.k.map((k,i)=>kid(k,.35+i*.08)).join("")}</div>`}

function view(v){
 if(v.t==="p"){const p=P[v.id];
  return `<div class="row">${main(v.id,"",p.go?"f:"+p.go:"",0)}</div>`}
 const f=F[v.id];
 return `<div class="row">${main(f.h,"","",0)}${f.w?`<div class="heart">♥</div>${main(f.w,"","",.12)}`:""}</div>`+kidsHTML(v.id)}

function label(v){return v.t==="p"?P[v.id].n:P[F[v.id].h].n+" oilasi"}

function render(){
 st.innerHTML=view(path[path.length-1]);
 nav.innerHTML=(path.length>1?`<button data-back="1">← Orqaga</button>`:"")+path.map((v,i)=>`<button class="${i===path.length-1?"cur":""}" data-i="${i}">${label(v)}</button>`).join("<span>›</span>");
 st.classList.remove("out");busy=false}

function go(fn){if(busy)return;busy=true;st.classList.add("out");setTimeout(()=>{fn();render()},350)}

document.addEventListener("click",e=>{
 const m=e.target.closest("[data-go]"),k=e.target.closest("[data-kid]"),b=e.target.closest("[data-back]"),i=e.target.closest("[data-i]");
 if(m)go(()=>path.push({t:"f",id:m.dataset.go.slice(2)}));
 else if(k){const id=k.dataset.kid,f=famOf(id);
  go(()=>path.push(f?{t:"f",id:f}:{t:"p",id}))}
 else if(b)go(()=>path.pop());
 else if(i&&+i.dataset.i<path.length-1)go(()=>path.length=+i.dataset.i+1)});

st.addEventListener("mousemove",e=>{const t=e.target.closest(".tilt");if(!t)return;const r=t.getBoundingClientRect();
 t.style.setProperty("--ry",((e.clientX-r.left)/r.width-.5)*18+"deg");t.style.setProperty("--rx",-((e.clientY-r.top)/r.height-.5)*18+"deg")});
st.addEventListener("mouseout",e=>{const t=e.target.closest(".tilt");if(t){t.style.setProperty("--rx","0deg");t.style.setProperty("--ry","0deg")}});

/* fon zarrachalari */
const cv=$("#bg"),cx=cv.getContext("2d");let W,H,pts=[];
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight}rs();addEventListener("resize",rs);
for(let i=0;i<60;i++)pts.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.8+.4,v:Math.random()*.3+.1,c:["#b388ff","#ffcc70","#4de2c5"][i%3]});
(function loop(){cx.clearRect(0,0,W,H);pts.forEach(p=>{p.y-=p.v;if(p.y<0){p.y=H;p.x=Math.random()*W}cx.globalAlpha=.6;cx.fillStyle=p.c;cx.beginPath();cx.arc(p.x,p.y,p.r,0,7);cx.fill()});requestAnimationFrame(loop)})();

render();