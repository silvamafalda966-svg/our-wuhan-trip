const PHOTOS = {
  bridge: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Wuhan_Yangtze_River_Bridge.jpg?width=1000",
    credit: "武汉长江大桥 · KongFu Wang / Wikimedia Commons (CC BY-SA 2.0)"
  },
  yellowCrane: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/CN_-_Hubei_-_Wuhan_-_Kranichpagode.JPG?width=1000",
    credit: "黄鹤楼 · Wikimedia Commons"
  },
  jianghan: {
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/China_Wuhan_Jianghanguan.jpg?width=1000",
    credit: "江汉关 · Wikimedia Commons (CC BY-SA 3.0)"
  },
  ferry: {
    url: "https://img2.chinadaily.com.cn/images/202303/03/640148cda31057c4b4b62824.jpeg",
    credit: "武汉轮渡 · 武汉市政府英文站 / China Daily"
  }
};

const trip = [
  {
    id: "day1", date: "10月23日", weekday: "周五", short: "抵达日", color: "#bd3a32",
    title: "落地汉口，先去吃一口武汉",
    summary: "17:02 抵达汉口站。入住后慢慢逛到江边，把第一晚留给江汉路的灯与江风。",
    stats: ["6 个停靠", "约 5 小时", "夜游"],
    stops: [
      { id:"d1-hankou", time:"17:02", stay:"约 25 分", next:"约 25–35 分钟到酒店", name:"汉口站", address:"汉口站北广场", wgs:[114.249414,30.621651], amap:[114.254845,30.619209], cost:"抵达 · 高铁票未计入", note:"下车后先检查随身物品。前往酒店建议地铁或网约车，以高德实时方案为准。", mode:"transit", photo:"bridge" },
      { id:"d1-hotel", time:"17:45", stay:"约 45 分", next:"约 20–30 分钟到水塔", name:"麗枫酒店·香港路", address:"香港路218号华氏花园综合楼1层", wgs:[114.276218,30.608883], amap:[114.281639,30.606444], cost:"¥160 / 晚 · 连住两晚", note:"办理入住、放行李、补水。酒店点位按香港路218号同址建筑核验，到店以招牌入口为准。", mode:"walk", photo:"bridge" },
      { id:"d1-water", time:"18:50", stay:"约 55 分", next:"步行约 8–12 分钟", name:"水塔美食街", address:"前进五路·江汉路地铁站附近", wgs:[114.282815,30.582716], amap:[114.288239,30.580275], cost:"建议 ¥40–60 / 两人", note:"少量多样地吃，给后面继续逛留肚子。热门摊位排队久就换一家，不必执着。", mode:"walk", photo:"jianghan" },
      { id:"d1-jianghan", time:"20:00", stay:"约 35 分", next:"向江边步行约 10–15 分钟", name:"江汉路步行街", address:"江汉区江汉路", wgs:[114.283628,30.585245], amap:[114.289046,30.582803], cost:"免费", note:"看历史建筑与夜景，沿江汉路向江汉关方向走。", mode:"walk", photo:"jianghan" },
      { id:"d1-customs", time:"20:45", stay:"约 25 分", next:"步行约 5–10 分钟", name:"江汉关", address:"沿江大道88号", wgs:[114.292076,30.578693], amap:[114.297472,30.576250], cost:"外观免费", note:"拍钟楼夜景。若计划进馆，请另查当日开放与预约；本行程按夜间外观打卡安排。", mode:"walk", photo:"jianghan" },
      { id:"d1-bund", time:"21:15", stay:"约 45 分", next:"约 20–30 分钟回酒店", name:"汉口江滩", address:"沿江大道江滩区域", wgs:[114.298742,30.590307], amap:[114.304133,30.587863], cost:"免费", note:"沿江散步吹风，累了就提前返程。晚间注意江边温差与末班地铁时间。", mode:"transit", photo:"bridge" },
      { id:"d1-back", time:"22:20", stay:"休息", next:"明早出发", name:"返回酒店", address:"香港路218号", wgs:[114.276218,30.608883], amap:[114.281639,30.606444], cost:"已计住宿", note:"充电、整理照片，设置明早闹钟。", mode:"walk", photo:"bridge" }
    ]
  },
  {
    id: "day2", date: "10月24日", weekday: "周六", short: "武昌日", color: "#286653",
    title: "从早饭吃到江风里",
    summary: "今天步行最多：粮道街过早、黄鹤楼登楼，再从中华路 1 号码头坐轮渡回汉口。",
    stats: ["11 个停靠", "全天", "含轮渡"],
    ferry: ["d2-wharf1", "d2-wharf2"],
    stops: [
      { id:"d2-hotel", time:"07:25", stay:"出发", next:"约 35–45 分钟到粮道街", name:"酒店出发", address:"香港路218号", wgs:[114.276218,30.608883], amap:[114.281639,30.606444], cost:"地铁约 ¥4 / 人", note:"早点出发，避开赵师傅更长的队伍。", mode:"transit", photo:"bridge" },
      { id:"d2-zhao", time:"08:10", stay:"约 55 分", next:"步行约 15–20 分钟", name:"赵师傅油饼包烧麦", address:"粮道街139号", wgs:[114.300392,30.550579], amap:[114.305833,30.548154], cost:"约 ¥15–25 / 人", note:"油饼包烧麦 + 蛋酒适合两人分享。排队过长时先吃粮道街其他早点，别让一顿早餐拖垮全天。", mode:"walk", photo:"yellowCrane" },
      { id:"d2-tanhualin", time:"09:30", stay:"约 60 分", next:"步行/短途交通约 20–30 分钟", name:"昙华林", address:"武昌区昙华林历史街区", wgs:[114.308014,30.553609], amap:[114.313456,30.551186], cost:"街区免费", note:"逛老街、喝咖啡、拍照。把体力留给黄鹤楼，不必每条支巷都走完。", mode:"walk", photo:"yellowCrane" },
      { id:"d2-redwall", time:"10:55", stay:"约 25 分", next:"步行约 8–12 分钟", name:"司门口黄鹤楼新红墙", address:"地铁5号线司门口黄鹤楼站B口上盖浮岛", wgs:[114.296635,30.549940], amap:[114.302071,30.547508], cost:"免费", note:"2026年6月开放的新红墙。花窗机位可用手机约2.6倍变焦拍黄鹤楼同框，现场人多注意秩序。", mode:"walk", photo:"yellowCrane" },
      { id:"d2-tower", time:"11:35", stay:"约 2 小时", next:"步行约 15–20 分钟", name:"黄鹤楼景区", address:"武昌区蛇山西山坡特1号", wgs:[114.297047,30.547081], amap:[114.302483,30.544649], cost:"估算学生票 ¥35 / 人", note:"登楼看长江与三镇。票价、入园时段及学生优惠以2026年10月24日景区公告为准。", mode:"walk", photo:"yellowCrane" },
      { id:"d2-doujiying", time:"14:20", stay:"约 35 分", next:"步行约 8–12 分钟", name:"斗级营", address:"斗级营街区", wgs:[114.291633,30.548964], amap:[114.297071,30.546529], cost:"免费", note:"在老街巷里慢走，看看更新中的武昌古城肌理。施工或封闭区域不要进入。", mode:"walk", photo:"yellowCrane" },
      { id:"d2-garden", time:"15:05", stay:"约 35 分", next:"步行到中华路1号码头", name:"汉阳门花园 / 大桥观景", address:"临江大道汉阳门花园", wgs:[114.288744,30.549313], amap:[114.294184,30.546878], cost:"免费", note:"看长江大桥的经典机位，顺便确认轮渡码头现场指引。", mode:"walk", photo:"bridge" },
      { id:"d2-wharf1", time:"15:50", stay:"候船 + 航行约 30–50 分", next:"轮渡过江，不是步行", name:"中华路1号码头", address:"武昌临江大道·中华路1号码头", wgs:[114.289150,30.554360], amap:[114.294590,30.551924], cost:"普通轮渡参考 ¥1.5 / 人", note:"只认“中华路1号码头”。预计日常6:30–20:00、高峰约20分钟一班，但必须临行前查看武汉两江轮渡公告。", mode:"ferry", photo:"ferry" },
      { id:"d2-wharf2", time:"16:25", stay:"约 20 分", next:"步行约 10–15 分钟", name:"武汉关码头", address:"沿江大道江滩14号", wgs:[114.292746,30.577555], amap:[114.298180,30.575127], cost:"轮渡到达", note:"高德与OSM码头点有轻微差异，以现场靠泊与出口指引为准。", mode:"walk", photo:"ferry" },
      { id:"d2-liu", time:"17:05", stay:"约 90 分", next:"约 25–35 分钟回酒店", name:"刘胖子家常菜（总店）", address:"黄陂街95号", wgs:[114.288850,30.576332], amap:[114.294279,30.573897], cost:"建议 ¥120–180 / 两人", note:"两个人别点太多：蹄花焖藕、金牌蛋豆腐、湖北家常菜选2–3样即可。留意午晚市间歇。", mode:"transit", photo:"jianghan" },
      { id:"d2-back", time:"19:10", stay:"休息", next:"明早退房", name:"返回酒店", address:"香港路218号", wgs:[114.276218,30.608883], amap:[114.281639,30.606444], cost:"已计住宿", note:"今天步行量大，早点休息。", mode:"walk", photo:"bridge" }
    ]
  },
  {
    id: "day3", date: "10月25日", weekday: "周日", short: "老汉口", color: "#d18a2e",
    title: "在老租界的街角收尾",
    summary: "退房寄存行李后逛兰陵路—巴公房子—黎黄陂路，午饭后回酒店取行李，约16:00从汉口站返程。",
    stats: ["8 个停靠", "约 7 小时", "16:00 返程"],
    stops: [
      { id:"d3-checkout", time:"08:30", stay:"约 20 分", next:"约 15–25 分钟到兰陵路", name:"退房并寄存行李", address:"麗枫酒店·香港路", wgs:[114.276218,30.608883], amap:[114.281639,30.606444], cost:"寄存请先与前台确认", note:"贵重物品随身携带，确认返程车票、身份证和取行李凭证。", mode:"transit", photo:"bridge" },
      { id:"d3-lanling", time:"09:15", stay:"约 45 分", next:"步行约 5–10 分钟", name:"兰陵路早餐", address:"兰陵路历史街区", wgs:[114.293735,30.588565], amap:[114.299171,30.586136], cost:"建议 ¥30–50 / 两人", note:"选一家顺眼的过早店，别一次吃太撑。店铺以当天营业为准，页面不绑定未经核验的单一商家。", mode:"walk", photo:"jianghan" },
      { id:"d3-bagong", time:"10:05", stay:"约 30 分", next:"步行约 5–8 分钟", name:"巴公房子", address:"洞庭街73号", wgs:[114.294394,30.588562], amap:[114.299831,30.586141], cost:"外观免费", note:"看红砖建筑外观与街角构图；是否可进入、内部业态及开放时间以现场为准。", mode:"walk", photo:"jianghan" },
      { id:"d3-lihuangpi", time:"10:45", stay:"约 60 分", next:"步行找午餐", name:"黎黄陂路", address:"黎黄陂路历史文化街区", wgs:[114.295238,30.589302], amap:[114.300674,30.586881], cost:"街区免费", note:"适合慢走和拍建筑细节。周日人多，优先走支路和阴影侧。", mode:"walk", photo:"jianghan" },
      { id:"d3-lunch", time:"12:00", stay:"约 75 分", next:"约 25–35 分钟回酒店", name:"午餐（现场决定）", address:"黎黄陂路 / 江汉路周边", wgs:[114.295238,30.589302], amap:[114.300674,30.586881], cost:"建议 ¥80–120 / 两人", note:"留出返程余量，不排热门长队。想稳妥就选出餐快、评价稳定的湖北菜或简餐。", mode:"transit", photo:"jianghan" },
      { id:"d3-luggage", time:"13:35", stay:"约 20 分", next:"约 25–40 分钟到汉口站", name:"酒店取行李", address:"香港路218号", wgs:[114.276218,30.608883], amap:[114.281639,30.606444], cost:"—", note:"建议最晚14:15离店，给周日下午路况、安检和进站留余量。", mode:"transit", photo:"bridge" },
      { id:"d3-station", time:"15:05", stay:"候车", next:"提前查看检票口", name:"汉口站", address:"汉口火车站", wgs:[114.249414,30.621651], amap:[114.254845,30.619209], cost:"返程高铁票未计入", note:"目标是发车前约50分钟抵达。16:00只是计划时刻，请以实际购票车次为准。", mode:"walk", photo:"bridge" },
      { id:"d3-home", time:"约16:00", stay:"返程", next:"旅程结束", name:"从汉口返程", address:"以实际车票为准", wgs:[114.249414,30.621651], amap:[114.254845,30.619209], cost:"一路平安", note:"完成最后一次物品清点：手机、证件、充电宝、行李。", mode:"transit", photo:"bridge" }
    ]
  }
];

const state = {
  activeDay: localStorage.getItem("wuhan-active-day") || "day1",
  done: JSON.parse(localStorage.getItem("wuhan-done-stops") || "{}"),
  map: null, markers: new Map(), routeLayers: []
};

const $ = (selector) => document.querySelector(selector);
const daySwitcher = $("#daySwitcher");
const dayOverview = $("#dayOverview");
const timeline = $("#timeline");

function currentDay() { return trip.find(day => day.id === state.activeDay) || trip[0]; }
function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c])); }
function amapUrl(stop) {
  const mode = stop.mode === "transit" ? "bus" : stop.mode === "ferry" ? "walk" : "walk";
  return `https://uri.amap.com/navigation?to=${stop.amap[0]},${stop.amap[1]},${encodeURIComponent(stop.name)}&mode=${mode}&policy=1&src=wuhan-trip&coordinate=gaode&callnative=1`;
}

function renderTabs() {
  daySwitcher.innerHTML = trip.map(day => `<button class="day-tab" id="tab-${day.id}" role="tab" aria-selected="${day.id === state.activeDay}" aria-controls="timeline" data-day="${day.id}"><span>${day.date}</span><small>${day.weekday} · ${day.short}</small></button>`).join("");
  daySwitcher.querySelectorAll("button").forEach(btn => btn.addEventListener("click", () => selectDay(btn.dataset.day)));
}

function renderOverview() {
  const day = currentDay();
  dayOverview.dataset.number = day.id.slice(-1);
  dayOverview.innerHTML = `<h3>${escapeHtml(day.title)}</h3><p>${escapeHtml(day.summary)}</p><div class="day-stats">${day.stats.map(s => `<span>${escapeHtml(s)}</span>`).join("")}</div>`;
}

function renderTimeline() {
  const day = currentDay();
  timeline.innerHTML = day.stops.map((stop, index) => {
    const done = Boolean(state.done[stop.id]);
    return `<li class="timeline-item ${done ? "is-done" : ""}" data-stop="${stop.id}">
      <time class="timeline-time">${escapeHtml(stop.time)}</time>
      <div class="timeline-rail"><span class="timeline-dot">${done ? "✓" : index + 1}</span></div>
      <div class="timeline-card">
        <div class="timeline-title-row"><h3>${escapeHtml(stop.name)}</h3><button class="complete-toggle" type="button" aria-label="${done ? "标记未完成" : "标记已完成"}" aria-pressed="${done}" data-toggle="${stop.id}">${done ? "●" : "○"}</button></div>
        <p>${escapeHtml(stop.note)}</p>
        <div class="timeline-meta"><span>停留 ${escapeHtml(stop.stay)}</span><span>下一站 ${escapeHtml(stop.next)}</span><span>${escapeHtml(stop.cost)}</span></div>
        <div class="timeline-actions"><button type="button" data-map="${stop.id}">地图定位</button><a href="${amapUrl(stop)}" target="_blank" rel="noopener" data-nav>高德导航 ↗</a></div>
      </div>
    </li>`;
  }).join("");
  timeline.querySelectorAll("[data-toggle]").forEach(btn => btn.addEventListener("click", () => toggleDone(btn.dataset.toggle)));
  timeline.querySelectorAll("[data-map]").forEach(btn => btn.addEventListener("click", () => focusStop(btn.dataset.map)));
  timeline.querySelectorAll("[data-nav]").forEach(link => link.addEventListener("click", guardOfflineNavigation));
  renderProgress();
}

function renderProgress() {
  const day = currentDay();
  const done = day.stops.filter(stop => state.done[stop.id]).length;
  const percent = Math.round(done / day.stops.length * 100);
  $("#progressLabel").textContent = `${done} / ${day.stops.length} 已完成`;
  $("#progressPercent").textContent = `${percent}%`;
  $("#progressBar").style.width = `${percent}%`;
}

function toggleDone(id) {
  state.done[id] = !state.done[id];
  localStorage.setItem("wuhan-done-stops", JSON.stringify(state.done));
  renderTimeline();
  renderMapDay();
}

function selectDay(dayId) {
  state.activeDay = dayId;
  localStorage.setItem("wuhan-active-day", dayId);
  renderTabs(); renderOverview(); renderTimeline(); renderMapDay();
}

function popupContent(stop, index) {
  const photo = PHOTOS[stop.photo];
  const photoStyle = photo ? `style="background-image:linear-gradient(180deg,transparent 45%,rgba(20,35,30,.4)),url('${photo.url}')" title="${escapeHtml(photo.credit)}"` : "";
  return `<article class="map-popup"><div class="popup-photo" ${photoStyle}></div><div class="popup-body"><p class="popup-meta">${escapeHtml(stop.time)} · 停留 ${escapeHtml(stop.stay)}</p><h3>${index + 1}. ${escapeHtml(stop.name)}</h3><p class="popup-copy">${escapeHtml(stop.note)}</p><div class="popup-cost">${escapeHtml(stop.cost)}</div><a class="nav-button" href="${amapUrl(stop)}" target="_blank" rel="noopener" data-nav>高德导航 <span>↗</span></a></div></article>`;
}

function markerShortName(name) {
  const aliases = {
    "麗枫酒店·香港路":"酒店", "酒店出发":"酒店", "返回酒店":"酒店",
    "退房并寄存行李":"酒店", "酒店取行李":"酒店", "从汉口返程":"汉口站",
    "赵师傅油饼包烧麦":"赵师傅", "司门口黄鹤楼新红墙":"新红墙",
    "黄鹤楼景区":"黄鹤楼", "汉阳门花园 / 大桥观景":"汉阳门花园",
    "刘胖子家常菜（总店）":"刘胖子", "午餐（现场决定）":"午餐"
  };
  return aliases[name] || name.replace(/（[^）]*）/g, "");
}

function groupStopsByPoint(day) {
  const groups = new Map();
  day.stops.forEach((stop, index) => {
    const key = `${stop.wgs[0].toFixed(6)},${stop.wgs[1].toFixed(6)}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push({ stop, index });
  });
  return [...groups.values()];
}

function groupedPopupContent(entries, mapNumber) {
  if (entries.length === 1) return popupContent(entries[0].stop, mapNumber - 1);
  const first = entries[0].stop;
  const photo = PHOTOS[first.photo];
  const photoStyle = photo ? `style="background-image:linear-gradient(180deg,transparent 45%,rgba(20,35,30,.4)),url('${photo.url}')" title="${escapeHtml(photo.credit)}"` : "";
  const names = [...new Set(entries.map(entry => markerShortName(entry.stop.name)))].join(" / ");
  const visits = entries.map(entry => `<p class="popup-copy"><b>${escapeHtml(entry.stop.time)}</b> · ${escapeHtml(entry.stop.name)}<br>${escapeHtml(entry.stop.note)}</p>`).join("");
  return `<article class="map-popup"><div class="popup-photo" ${photoStyle}></div><div class="popup-body"><p class="popup-meta">地图第 ${mapNumber} 站</p><h3>${escapeHtml(names)}</h3>${visits}<div class="popup-cost">${escapeHtml(first.address)}</div><a class="nav-button" href="${amapUrl(first)}" target="_blank" rel="noopener" data-nav>高德导航 <span>↗</span></a></div></article>`;
}

function initMap() {
  const status = $("#mapStatus");
  if (!navigator.onLine) { status.textContent = "当前离线：地图瓦片与实时导航需要网络。"; return; }
  if (!window.L) { status.textContent = "地图组件加载失败。文字行程和高德导航链接仍可使用。"; return; }
  state.map = L.map("map", { zoomControl: false, attributionControl: true, tap: true }).setView([30.58,114.29], 12);
  L.control.zoom({ position: "topright" }).addTo(state.map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "&copy; OpenStreetMap contributors" }).addTo(state.map);
  status.hidden = true;
  state.map.on("popupopen", e => e.popup.getElement()?.querySelectorAll("[data-nav]").forEach(link => link.addEventListener("click", guardOfflineNavigation)));
  renderMapDay();
}

function renderMapDay() {
  if (!state.map) return;
  state.markers.forEach(marker => marker.remove());
  state.markers.clear();
  state.routeLayers.forEach(layer => layer.remove());
  state.routeLayers = [];
  const day = currentDay();
  const groups = groupStopsByPoint(day);
  groups.forEach((entries, groupIndex) => {
    const first = entries[0].stop;
    const sequence = groupIndex + 1;
    const names = [...new Set(entries.map(entry => markerShortName(entry.stop.name)))].join(" / ");
    const allDone = entries.every(entry => state.done[entry.stop.id]);
    const tooltipDirection = groupIndex % 2 === 0 ? "right" : "left";
    const marker = L.marker([first.wgs[1], first.wgs[0]], {
      icon: L.divIcon({ className:"trip-marker", html:`<div class="marker-pin ${allDone ? "done" : ""}" style="--marker:${day.color}"><span>${sequence}</span></div>`, iconSize:[32,38], iconAnchor:[16,36], popupAnchor:[0,-34] })
    }).addTo(state.map).bindPopup(groupedPopupContent(entries, sequence), { maxWidth:260 });
    marker.bindTooltip(`<b>${sequence}</b>${escapeHtml(names)}`, {
      permanent:true, direction:tooltipDirection, className:"marker-name-tooltip",
      offset: tooltipDirection === "right" ? [17,-17] : [-17,-17]
    });
    marker.on("click", () => { state.map.panTo(marker.getLatLng()); });
    entries.forEach(entry => state.markers.set(entry.stop.id, marker));
  });
  for (let index = 0; index < day.stops.length - 1; index += 1) {
    const from = day.stops[index], to = day.stops[index + 1];
    const isFerry = day.ferry?.[0] === from.id && day.ferry?.[1] === to.id;
    const layer = L.polyline([[from.wgs[1],from.wgs[0]],[to.wgs[1],to.wgs[0]]], isFerry
      ? { color:"#338da0", weight:6, opacity:.9, dashArray:"3 11", lineCap:"round" }
      : { color:day.color, weight:4, opacity:.72, dashArray:"8 9", lineCap:"round" }
    ).addTo(state.map);
    if (isFerry) layer.bindTooltip("⛴ 中华路1号码头 → 武汉关码头（轮渡）", { permanent:false, direction:"center" });
    state.routeLayers.push(layer);
  }
  fitCurrentRoute();
}

function fitCurrentRoute() {
  if (!state.map) return;
  const points = currentDay().stops.map(stop => [stop.wgs[1],stop.wgs[0]]);
  state.map.fitBounds(L.latLngBounds(points), { padding:[32,32], maxZoom:14 });
}

function focusStop(id) {
  const marker = state.markers.get(id);
  if (!state.map || !marker) { $("#mapSection").scrollIntoView({ behavior:"smooth" }); return; }
  $("#mapSection").scrollIntoView({ behavior:"smooth" });
  setTimeout(() => { state.map.setView(marker.getLatLng(), 16, { animate:true }); marker.openPopup(); }, 450);
}

function guardOfflineNavigation(event) {
  if (!navigator.onLine) { event.preventDefault(); alert("当前离线，无法打开高德实时导航。请联网后再试。"); }
}

function updateNetworkState() {
  $("#offlineBanner").hidden = navigator.onLine;
  if (!navigator.onLine && state.map) $("#mapStatus").hidden = false, $("#mapStatus").textContent = "当前离线：已加载的地图可能仍可查看，但实时地图与导航不可用。";
  if (navigator.onLine && !state.map) initMap();
}

function setupInstallDialog() {
  const dialog = $("#installDialog");
  $("#installHelpBtn").addEventListener("click", () => dialog.showModal());
  $("#closeInstallBtn").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });
}

renderTabs(); renderOverview(); renderTimeline(); setupInstallDialog();
$("#fitRouteBtn").addEventListener("click", fitCurrentRoute);
window.addEventListener("online", updateNetworkState);
window.addEventListener("offline", updateNetworkState);
updateNetworkState();
if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
