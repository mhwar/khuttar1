/* @ds-bundle: {"format":3,"namespace":"AxisDesignSystem_9a0268","components":[],"sourceHashes":{"ui_kits/dashboard/app.jsx":"03e28a884b79","ui_kits/dashboard/calendar.jsx":"26461899d522","ui_kits/dashboard/charts.jsx":"06052a9297da","ui_kits/dashboard/components.jsx":"33cd50e35be0","ui_kits/dashboard/dashboard.jsx":"76bb91539de0","ui_kits/dashboard/docs.jsx":"0e2bbe31082d","ui_kits/dashboard/filter-bar.jsx":"0ce4cfbceaea","ui_kits/dashboard/gantt.jsx":"89a9ffc8da4d","ui_kits/dashboard/i18n.jsx":"7bbb1e20d610","ui_kits/dashboard/overlays.jsx":"2869053b5fc3","ui_kits/dashboard/page-header.jsx":"2e61260c0d0e","ui_kits/dashboard/palette.jsx":"633ff6678f0c","ui_kits/dashboard/pickers.jsx":"f4b3d8e8e274","ui_kits/dashboard/project-header.jsx":"bc91c5a6f9fc","ui_kits/dashboard/projects-view.jsx":"84ce50e778aa","ui_kits/dashboard/reports-view.jsx":"4e401a61969c","ui_kits/dashboard/schedule-view.jsx":"157c974afd16","ui_kits/dashboard/shell.jsx":"d3f6c8adda00","ui_kits/dashboard/table.jsx":"28609c8469c2","ui_kits/dashboard/tables-view.jsx":"ef8decffbe51","ui_kits/dashboard/task-list.jsx":"2e028e8e4819","ui_kits/dashboard/tasks-view.jsx":"5fe2a89b5e82","ui_kits/dashboard/timeline.jsx":"41e7d1461bd3","ui_kits/dashboard/view-switcher.jsx":"d59a1d95d5e4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AxisDesignSystem_9a0268 = window.AxisDesignSystem_9a0268 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/dashboard/app.jsx
try { (() => {
/* eslint-disable */
/* App entry — view routing, theme, palette, sidebar state, i18n */

const {
  useState: useStateApp,
  useEffect: useEffectApp
} = React;
function PlaceholderView({
  view
}) {
  const t = useT();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: view,
    breadcrumbs: [{
      label: t('app.brand'),
      onClick: () => {}
    }, {
      label: t(`page.${view}.title`)
    }],
    title: t(`page.${view}.title`),
    subtitle: t(`page.${view}.sub`),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "md",
      icon: "filter"
    }, t('dash.deploys.filter')), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "md",
      icon: "plus"
    }, t('schedule.addStop')))
  }), /*#__PURE__*/React.createElement(Card, {
    padding: 32,
    style: {
      display: 'grid',
      placeItems: 'center',
      minHeight: 220
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      color: 'var(--fg-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "construction",
    size: 28
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--fg-2)',
      fontWeight: 500
    }
  }, t('page.unbuilt.heading')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      textAlign: 'center',
      maxWidth: 380
    }
  }, t('page.unbuilt.sub')))));
}
function AppInner() {
  const t = useT();
  const lang = useLang();
  const [view, setView] = useStateApp('dashboard');
  const [theme, setTheme] = useStateApp(() => document.documentElement.getAttribute('data-theme') || 'light');
  const [paletteOpen, setPaletteOpen] = useStateApp(false);
  const [collapsed, setCollapsed] = useStateApp(false);
  const [mobileOpen, setMobileOpen] = useStateApp(false);
  function isMobile() {
    return window.innerWidth <= 768;
  }
  function handleToggleSidebar() {
    if (isMobile()) setMobileOpen(o => !o);else setCollapsed(o => !o);
  }
  function handleCloseSidebar() {
    setMobileOpen(false);
  }
  const sidebarOpen = isMobile() ? mobileOpen : false;
  useEffectApp(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  useEffectApp(() => {
    const onKey = e => {
      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        setPaletteOpen(o => !o);
      }
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  useEffectApp(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  useEffectApp(() => {
    const layout = document.querySelector('.axis-layout');
    if (!layout) return;
    if (collapsed) layout.classList.add('sidebar-collapsed');else layout.classList.remove('sidebar-collapsed');
  }, [collapsed]);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const currentTitle = t(`title.${view}`);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Layout, {
    sidebarOpen: sidebarOpen,
    onCloseSidebar: handleCloseSidebar,
    sidebar: /*#__PURE__*/React.createElement(Sidebar, {
      activeKey: view,
      onNavigate: setView,
      onOpenPalette: () => setPaletteOpen(true),
      onClose: handleCloseSidebar,
      collapsed: collapsed && !isMobile()
    }),
    topbar: /*#__PURE__*/React.createElement(Topbar, {
      theme: theme,
      onToggleTheme: () => setTheme(t => t === 'dark' ? 'light' : 'dark'),
      viewTitle: currentTitle,
      onOpenPalette: () => setPaletteOpen(true),
      onToggleSidebar: handleToggleSidebar,
      dir: dir,
      onToggleDir: () => window.__setAxisLang(lang === 'ar' ? 'en' : 'ar')
    })
  }, view === 'dashboard' && /*#__PURE__*/React.createElement(DashboardView, null), view === 'tokens' && /*#__PURE__*/React.createElement(TokensView, null), view === 'components' && /*#__PURE__*/React.createElement(ComponentsView, null), view === 'tables' && /*#__PURE__*/React.createElement(TablesView, null), view === 'schedule' && /*#__PURE__*/React.createElement(ScheduleView, null), view === 'projects' && /*#__PURE__*/React.createElement(ProjectsView, null), view === 'tasks' && /*#__PURE__*/React.createElement(TasksView, null), view === 'reports' && /*#__PURE__*/React.createElement(ReportsView, null), ['inbox', 'deployments', 'guidelines', 'team', 'settings'].includes(view) && /*#__PURE__*/React.createElement(PlaceholderView, {
    view: view
  })), /*#__PURE__*/React.createElement(CommandPalette, {
    open: paletteOpen,
    onClose: () => setPaletteOpen(false),
    onNavigate: setView,
    onSetTheme: setTheme
  }));
}
function App() {
  const [lang, setLang] = useStateApp(() => {
    const saved = localStorage.getItem('axis.lang');
    return saved === 'ar' ? 'ar' : 'en';
  });

  // Expose setter so the Topbar's dir toggle can call it
  useEffectApp(() => {
    window.__setAxisLang = setLang;
  }, []);

  // Sync dir + lang + body class
  useEffectApp(() => {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lang);
    document.body.classList.toggle('lang-ar', lang === 'ar');
    localStorage.setItem('axis.lang', lang);
  }, [lang]);
  return /*#__PURE__*/React.createElement(I18nProvider, {
    lang: lang
  }, /*#__PURE__*/React.createElement(AppInner, null));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/calendar.jsx
try { (() => {
/* eslint-disable */
/* Calendar — Month + Week views.
   Events: [{ id, date: 'YYYY-MM-DD', start?: 'HH:mm', durationMin?, title, tone?, icon? }]
*/

const {
  useState: useStateCal,
  useMemo: useMemoCal
} = React;
function _iso(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function _mon(d) {
  const x = new Date(d);
  const w = (x.getDay() + 6) % 7;
  x.setDate(x.getDate() - w);
  x.setHours(0, 0, 0, 0);
  return x;
}
function _add(d, n) {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}
function _mins(t) {
  const [h, m] = String(t || '00:00').split(':').map(Number);
  return h * 60 + (m || 0);
}
const WD_EN = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const WD_AR = ['اث', 'ثل', 'أر', 'خم', 'جم', 'سب', 'أح'];
const MO_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const MO_AR = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];

/* ──────────────────────────────────────────────────────────────────────
   <CalendarHeader> — shared toolbar for month / week views
   ────────────────────────────────────────────────────────────────────── */
function CalendarHeader({
  titleParts,
  onPrev,
  onNext,
  onToday,
  view,
  onChangeView
}) {
  const t = useT();
  return /*#__PURE__*/React.createElement("div", {
    className: "axis-cal__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-cal__head-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-cal__nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "axis-iconbtn axis-iconbtn--ghost axis-iconbtn--sm",
    onClick: onPrev,
    "aria-label": "Previous"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 14
  })), /*#__PURE__*/React.createElement("button", {
    className: "axis-iconbtn axis-iconbtn--ghost axis-iconbtn--sm",
    onClick: onNext,
    "aria-label": "Next"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 14
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: onToday
  }, t('cal.today')), /*#__PURE__*/React.createElement("div", {
    className: "axis-cal__title"
  }, titleParts)), /*#__PURE__*/React.createElement(Segmented, {
    value: view,
    onChange: onChangeView,
    options: [{
      value: 'month',
      label: t('cal.view.month')
    }, {
      value: 'week',
      label: t('cal.view.week')
    }]
  }));
}

/* ──────────────────────────────────────────────────────────────────────
   <CalendarMonth> — month grid w/ event chips
   ────────────────────────────────────────────────────────────────────── */
function CalendarMonth({
  date,
  events,
  onEventClick,
  onDateClick
}) {
  const lang = useLang();
  const ref = new Date(date);
  const year = ref.getFullYear(),
    month = ref.getMonth();
  const todayIso = _iso(new Date());
  const days = lang === 'ar' ? WD_AR : WD_EN;
  const firstOfMonth = new Date(year, month, 1);
  const start = _mon(firstOfMonth);
  const cells = [];
  for (let i = 0; i < 42; i++) {
    const d = _add(start, i);
    cells.push({
      d,
      iso: _iso(d),
      out: d.getMonth() !== month
    });
  }

  // Group events by date
  const byDate = useMemoCal(() => {
    const map = new Map();
    events.forEach(e => {
      if (!map.has(e.date)) map.set(e.date, []);
      map.get(e.date).push(e);
    });
    return map;
  }, [events]);
  return /*#__PURE__*/React.createElement("div", {
    className: "axis-cal axis-cal--month"
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-cal__weekrow"
  }, days.map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    className: "axis-cal__weekday"
  }, d))), /*#__PURE__*/React.createElement("div", {
    className: "axis-cal__grid"
  }, cells.map((c, i) => {
    const dayEvents = byDate.get(c.iso) || [];
    const isToday = c.iso === todayIso;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: `axis-cal__cell${c.out ? ' is-out' : ''}${isToday ? ' is-today' : ''}`,
      onClick: () => onDateClick && onDateClick(c.iso)
    }, /*#__PURE__*/React.createElement("div", {
      className: "axis-cal__cell-head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "axis-cal__cell-num"
    }, c.d.getDate()), dayEvents.length > 3 && /*#__PURE__*/React.createElement("span", {
      className: "axis-cal__cell-more"
    }, "+", dayEvents.length - 3)), /*#__PURE__*/React.createElement("div", {
      className: "axis-cal__cell-events"
    }, dayEvents.slice(0, 3).map(e => /*#__PURE__*/React.createElement("button", {
      key: e.id,
      className: `axis-cal__chip axis-cal__chip--${e.tone || 'iris'}`,
      onClick: ev => {
        ev.stopPropagation();
        onEventClick && onEventClick(e.id);
      }
    }, e.start && /*#__PURE__*/React.createElement("span", {
      className: "axis-cal__chip-time"
    }, e.start), /*#__PURE__*/React.createElement("span", {
      className: "axis-cal__chip-title"
    }, e.title)))));
  })));
}

/* ──────────────────────────────────────────────────────────────────────
   <CalendarWeek> — 7-column hours grid (Monday-first)
   ────────────────────────────────────────────────────────────────────── */
function CalendarWeek({
  date,
  events,
  hourStart = 7,
  hourEnd = 21,
  hourHeight = 56,
  onEventClick,
  currentTime
}) {
  const t = useT();
  const lang = useLang();
  const ref = new Date(date);
  const monday = _mon(ref);
  const days = Array.from({
    length: 7
  }, (_, i) => _add(monday, i));
  const hours = [];
  for (let h = hourStart; h <= hourEnd; h++) hours.push(h);
  const totalH = (hourEnd - hourStart) * hourHeight;
  const todayIso = _iso(new Date());
  const wd = lang === 'ar' ? WD_AR : WD_EN;

  // Group events by date
  const byDate = useMemoCal(() => {
    const map = new Map();
    events.forEach(e => {
      if (!map.has(e.date)) map.set(e.date, []);
      map.get(e.date).push(e);
    });
    return map;
  }, [events]);
  function eventStyle(ev) {
    const s = _mins(ev.start || '09:00');
    const dur = ev.durationMin || 60;
    const top = (s - hourStart * 60) / 60 * hourHeight;
    const height = Math.max(28, dur / 60 * hourHeight - 2);
    return {
      top: `${top}px`,
      height: `${height}px`
    };
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "axis-cal axis-cal--week",
    style: {
      ['--hour-h']: `${hourHeight}px`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-cal-w__head-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-cal-w__time-spacer"
  }), days.map((d, i) => {
    const isToday = _iso(d) === todayIso;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: `axis-cal-w__day-head${isToday ? ' is-today' : ''}`
    }, /*#__PURE__*/React.createElement("span", {
      className: "axis-cal-w__day-name"
    }, wd[i]), /*#__PURE__*/React.createElement("span", {
      className: "axis-cal-w__day-num"
    }, d.getDate()));
  })), /*#__PURE__*/React.createElement("div", {
    className: "axis-cal-w__body",
    style: {
      height: totalH
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-cal-w__rail"
  }, hours.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: h,
    className: "axis-cal-w__hour",
    style: {
      top: i * hourHeight
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "axis-cal-w__hour-label"
  }, format12(`${String(h).padStart(2, '0')}:00`, t))))), days.map((d, di) => {
    const iso = _iso(d);
    const dayEvents = byDate.get(iso) || [];
    const isToday = iso === todayIso;
    return /*#__PURE__*/React.createElement("div", {
      key: iso,
      className: `axis-cal-w__col${isToday ? ' is-today' : ''}`
    }, hours.slice(0, -1).map((h, i) => /*#__PURE__*/React.createElement("div", {
      key: h,
      className: "axis-cal-w__gridline",
      style: {
        top: (i + 1) * hourHeight
      }
    })), isToday && currentTime && (() => {
      const nm = _mins(currentTime);
      if (nm < hourStart * 60 || nm > hourEnd * 60) return null;
      return /*#__PURE__*/React.createElement("div", {
        className: "axis-cal-w__now",
        style: {
          top: (nm - hourStart * 60) / 60 * hourHeight
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "axis-cal-w__now-dot"
      }), /*#__PURE__*/React.createElement("span", {
        className: "axis-cal-w__now-line"
      }));
    })(), dayEvents.map(e => /*#__PURE__*/React.createElement("div", {
      key: e.id,
      className: `axis-cal-w__event axis-cal-w__event--${e.tone || 'iris'}`,
      style: eventStyle(e),
      onClick: () => onEventClick && onEventClick(e.id)
    }, /*#__PURE__*/React.createElement("div", {
      className: "axis-cal-w__event-bar"
    }), /*#__PURE__*/React.createElement("div", {
      className: "axis-cal-w__event-body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "axis-cal-w__event-time"
    }, e.start && format12(e.start, t)), /*#__PURE__*/React.createElement("div", {
      className: "axis-cal-w__event-title"
    }, e.title)))));
  })));
}

/* ──────────────────────────────────────────────────────────────────────
   <Calendar> — orchestrator: header + month/week body
   ────────────────────────────────────────────────────────────────────── */
function Calendar({
  events,
  onEventClick,
  onDateClick,
  currentTime
}) {
  const t = useT();
  const lang = useLang();
  const [view, setView] = useStateCal('month');
  const [cursor, setCursor] = useStateCal(() => _iso(new Date()));
  function go(deltaDays) {
    const d = new Date(cursor);
    if (view === 'month') d.setMonth(d.getMonth() + Math.sign(deltaDays));else d.setDate(d.getDate() + deltaDays);
    setCursor(_iso(d));
  }
  function goToday() {
    setCursor(_iso(new Date()));
  }
  const ref = new Date(cursor);
  const months = lang === 'ar' ? MO_AR : MO_EN;
  let title;
  if (view === 'month') {
    title = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, months[ref.getMonth()]), " ", /*#__PURE__*/React.createElement("span", null, ref.getFullYear()));
  } else {
    const start = _mon(ref);
    const end = _add(start, 6);
    title = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, months[start.getMonth()]), " ", /*#__PURE__*/React.createElement("span", null, start.getDate()), /*#__PURE__*/React.createElement("span", {
      className: "axis-cal__title-sep"
    }, "\u2013"), /*#__PURE__*/React.createElement("span", null, months[end.getMonth()] !== months[start.getMonth()] ? months[end.getMonth()] + ' ' : '', end.getDate(), ", ", end.getFullYear()));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "axis-cal-shell"
  }, /*#__PURE__*/React.createElement(CalendarHeader, {
    titleParts: title,
    view: view,
    onChangeView: setView,
    onPrev: () => go(view === 'month' ? -30 : -7),
    onNext: () => go(view === 'month' ? 30 : 7),
    onToday: goToday
  }), view === 'month' ? /*#__PURE__*/React.createElement(CalendarMonth, {
    date: cursor,
    events: events,
    onEventClick: onEventClick,
    onDateClick: onDateClick
  }) : /*#__PURE__*/React.createElement(CalendarWeek, {
    date: cursor,
    events: events,
    onEventClick: onEventClick,
    currentTime: currentTime
  }));
}
Object.assign(window, {
  Calendar,
  CalendarMonth,
  CalendarWeek
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/calendar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/charts.jsx
try { (() => {
/* eslint-disable */
/* Charts — minimal SVG-based primitives used by the Reports view.

   Each chart is intentionally simple and theme-aware: strokes/fills
   come from CSS variables so they adapt to light/dark + RTL.
*/

/* ── helpers ────────────────────────────────────────────────────────── */
function chartScale(values, max) {
  const m = max != null ? max : Math.max(1, ...values);
  return v => v / m;
}

/* ──────────────────────────────────────────────────────────────────────
   <LineChart> — single or multi-series line chart with grid + dots
   props: series = [{ label, color, values: number[] }], xLabels, height
   ────────────────────────────────────────────────────────────────────── */
function LineChart({
  series,
  xLabels,
  height = 200,
  gridLines = 4
}) {
  const W = 800,
    H = height;
  const padL = 40,
    padR = 16,
    padT = 12,
    padB = 28;
  const innerW = W - padL - padR,
    innerH = H - padT - padB;
  const allValues = series.flatMap(s => s.values);
  const max = Math.max(1, Math.ceil(Math.max(...allValues) * 1.15));
  const n = (series[0]?.values || []).length;
  const x = i => padL + i / Math.max(1, n - 1) * innerW;
  const y = v => padT + innerH - v / max * innerH;

  // Grid + Y axis labels
  const lines = [];
  const labels = [];
  for (let i = 0; i <= gridLines; i++) {
    const yi = padT + i / gridLines * innerH;
    lines.push({
      y: yi
    });
    labels.push({
      y: yi + 4,
      v: Math.round(max - i / gridLines * max)
    });
  }
  return /*#__PURE__*/React.createElement("svg", {
    className: "axis-chart axis-chart--line",
    viewBox: `0 0 ${W} ${H}`,
    preserveAspectRatio: "none",
    width: "100%",
    height: H
  }, lines.map((l, i) => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: padL,
    x2: W - padR,
    y1: l.y,
    y2: l.y,
    stroke: "var(--border-subtle)",
    strokeWidth: "1",
    strokeDasharray: i === gridLines ? '0' : '2 4'
  })), labels.map((l, i) => /*#__PURE__*/React.createElement("text", {
    key: i,
    x: padL - 8,
    y: l.y,
    textAnchor: "end",
    fontSize: "9",
    fontFamily: "var(--font-mono)",
    fill: "var(--fg-3)"
  }, l.v)), xLabels && xLabels.map((lab, i) => /*#__PURE__*/React.createElement("text", {
    key: i,
    x: x(i),
    y: H - 10,
    textAnchor: "middle",
    fontSize: "9",
    fontFamily: "var(--font-mono)",
    fill: "var(--fg-3)"
  }, lab)), series.map((s, si) => {
    const d = s.values.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
    const dArea = d + ` L${x(s.values.length - 1).toFixed(1)},${(padT + innerH).toFixed(1)} L${padL},${(padT + innerH).toFixed(1)} Z`;
    return /*#__PURE__*/React.createElement("g", {
      key: si
    }, /*#__PURE__*/React.createElement("path", {
      d: dArea,
      fill: s.color || 'var(--iris-500)',
      opacity: "0.08"
    }), /*#__PURE__*/React.createElement("path", {
      d: d,
      stroke: s.color || 'var(--iris-500)',
      strokeWidth: "2",
      fill: "none",
      strokeLinejoin: "round",
      strokeLinecap: "round"
    }), s.values.map((v, i) => /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: x(i),
      cy: y(v),
      r: "2.5",
      fill: "var(--surface-1)",
      stroke: s.color || 'var(--iris-500)',
      strokeWidth: "1.5"
    })));
  }));
}

/* ──────────────────────────────────────────────────────────────────────
   <BarChart> — vertical bars, grouped if multi-series
   props: series = [{ label, color, values }], xLabels, height
   ────────────────────────────────────────────────────────────────────── */
function BarChart({
  series,
  xLabels,
  height = 200
}) {
  const W = 800,
    H = height;
  const padL = 40,
    padR = 16,
    padT = 12,
    padB = 28;
  const innerW = W - padL - padR,
    innerH = H - padT - padB;
  const n = (series[0]?.values || []).length;
  const max = Math.max(1, Math.ceil(Math.max(...series.flatMap(s => s.values)) * 1.15));
  const groupW = innerW / n;
  const barW = Math.min(28, (groupW - 8) / series.length);
  const y = v => padT + innerH - v / max * innerH;
  return /*#__PURE__*/React.createElement("svg", {
    className: "axis-chart axis-chart--bar",
    viewBox: `0 0 ${W} ${H}`,
    preserveAspectRatio: "none",
    width: "100%",
    height: H
  }, /*#__PURE__*/React.createElement("line", {
    x1: padL,
    x2: W - padR,
    y1: padT + innerH,
    y2: padT + innerH,
    stroke: "var(--border-default)",
    strokeWidth: "1"
  }), series.map((s, si) => s.values.map((v, i) => {
    const groupStart = padL + i * groupW + (groupW - barW * series.length) / 2;
    const x = groupStart + si * barW;
    const h = v / max * innerH;
    return /*#__PURE__*/React.createElement("rect", {
      key: `${si}-${i}`,
      x: x,
      y: y(v),
      width: barW - 4,
      height: Math.max(2, h),
      rx: "3",
      fill: s.color || 'var(--iris-500)'
    });
  })), xLabels && xLabels.map((lab, i) => /*#__PURE__*/React.createElement("text", {
    key: i,
    x: padL + i * groupW + groupW / 2,
    y: H - 10,
    textAnchor: "middle",
    fontSize: "9",
    fontFamily: "var(--font-mono)",
    fill: "var(--fg-3)"
  }, lab)));
}

/* ──────────────────────────────────────────────────────────────────────
   <DonutChart> — segment ring with center label
   props: segments = [{ label, value, color }], size, label, sub
   ────────────────────────────────────────────────────────────────────── */
function DonutChart({
  segments,
  size = 160,
  label,
  sub,
  strokeWidth = 18
}) {
  const total = Math.max(1, segments.reduce((s, x) => s + x.value, 0));
  const r = (size - strokeWidth) / 2;
  const c = 2 * Math.PI * r;
  let offset = 0;
  return /*#__PURE__*/React.createElement("svg", {
    className: "axis-chart axis-chart--donut",
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--border-subtle)",
    strokeWidth: strokeWidth
  }), segments.map((seg, i) => {
    const len = seg.value / total * c;
    const dash = `${len} ${c - len}`;
    const el = /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: seg.color || 'var(--iris-500)',
      strokeWidth: strokeWidth,
      strokeDasharray: dash,
      strokeDashoffset: -offset,
      transform: `rotate(-90 ${size / 2} ${size / 2})`,
      strokeLinecap: "round"
    });
    offset += len;
    return el;
  }), label && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("text", {
    x: "50%",
    y: "50%",
    textAnchor: "middle",
    fontFamily: "var(--font-display)",
    fontSize: "22",
    fontWeight: "600",
    fill: "var(--fg-1)",
    dy: "-2"
  }, label), sub && /*#__PURE__*/React.createElement("text", {
    x: "50%",
    y: "50%",
    textAnchor: "middle",
    fontFamily: "var(--font-mono)",
    fontSize: "10",
    fill: "var(--fg-3)",
    dy: "18"
  }, sub)));
}

/* ──────────────────────────────────────────────────────────────────────
   <Heatmap> — 7×N grid (weeks x days) — GitHub-style activity heatmap
   props: data = number[] (length = weeks * 7), maxValue, cellSize
   ────────────────────────────────────────────────────────────────────── */
function Heatmap({
  data,
  weeks = 12,
  cellSize = 14,
  gap = 3,
  max
}) {
  const m = max || Math.max(1, ...data);
  const cells = [];
  for (let w = 0; w < weeks; w++) {
    for (let d = 0; d < 7; d++) {
      const i = w * 7 + d;
      const v = data[i] ?? 0;
      const intensity = v / m;
      const opacity = v === 0 ? 0.08 : 0.18 + intensity * 0.82;
      cells.push({
        w,
        d,
        v,
        opacity
      });
    }
  }
  const w = weeks * (cellSize + gap),
    h = 7 * (cellSize + gap);
  return /*#__PURE__*/React.createElement("svg", {
    className: "axis-chart axis-chart--heatmap",
    width: w,
    height: h,
    viewBox: `0 0 ${w} ${h}`
  }, cells.map((c, i) => /*#__PURE__*/React.createElement("rect", {
    key: i,
    x: c.w * (cellSize + gap),
    y: c.d * (cellSize + gap),
    width: cellSize,
    height: cellSize,
    rx: "3",
    fill: "var(--iris-500)",
    opacity: c.opacity
  }, /*#__PURE__*/React.createElement("title", null, c.v))));
}
Object.assign(window, {
  LineChart,
  BarChart,
  DonutChart,
  Heatmap
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/charts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/components.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* eslint-disable */
/* Shared atoms for the Axis dashboard UI kit. */

const {
  useState,
  useEffect,
  useRef
} = React;

/* ──────────────────────────────────────────────────────────────────────
   Icon — wrapper around Lucide's CDN
   ────────────────────────────────────────────────────────────────────── */
function Icon({
  name,
  size = 16,
  className = '',
  style
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      const i = document.createElement('i');
      i.setAttribute('data-lucide', name);
      ref.current.appendChild(i);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          'stroke-width': 1.5
        },
        nameAttr: 'data-lucide'
      });
    }
  }, [name, size]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: `axis-icon ${className}`,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      ...style
    }
  });
}

/* ──────────────────────────────────────────────────────────────────────
   Button
   ────────────────────────────────────────────────────────────────────── */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  trailingIcon,
  loading,
  disabled,
  onClick,
  type,
  fullWidth,
  style,
  ...rest
}) {
  const cls = `axis-btn axis-btn--${variant} axis-btn--${size}` + (fullWidth ? ' axis-btn--full' : '') + (loading ? ' axis-btn--loading' : '');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type || 'button',
    className: cls,
    disabled: disabled || loading,
    onClick: onClick,
    style: style
  }, rest), loading && /*#__PURE__*/React.createElement("span", {
    className: "axis-spin",
    "aria-hidden": true
  }), !loading && icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size === 'sm' ? 14 : 16
  }), /*#__PURE__*/React.createElement("span", null, children), !loading && trailingIcon && /*#__PURE__*/React.createElement(Icon, {
    name: trailingIcon,
    size: size === 'sm' ? 14 : 16
  }));
}
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    onClick: onClick,
    className: `axis-iconbtn axis-iconbtn--${variant} axis-iconbtn--${size}`,
    style: style
  }, rest), /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size === 'sm' ? 14 : 16
  }));
}

/* ──────────────────────────────────────────────────────────────────────
   Input — floating label
   ────────────────────────────────────────────────────────────────────── */
function Input({
  label,
  value,
  onChange,
  type = 'text',
  icon,
  error,
  hint,
  disabled,
  autoFocus
}) {
  const [focused, setFocused] = useState(false);
  const filled = value !== undefined && value !== null && String(value).length > 0;
  const cls = 'axis-field' + (focused ? ' is-focused' : '') + (filled ? ' is-filled' : '') + (error ? ' is-error' : '') + (disabled ? ' is-disabled' : '') + (icon ? ' has-icon' : '');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: cls
  }, /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value || '',
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    disabled: disabled,
    autoFocus: autoFocus,
    placeholder: " "
  }), /*#__PURE__*/React.createElement("label", null, label), icon && /*#__PURE__*/React.createElement("span", {
    className: "axis-field__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16
  }))), (error || hint) && /*#__PURE__*/React.createElement("div", {
    className: `axis-field__help${error ? ' is-error' : ''}`
  }, error || hint));
}

/* ──────────────────────────────────────────────────────────────────────
   Badges, pills, tags
   ────────────────────────────────────────────────────────────────────── */
function StatusPill({
  status,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `axis-pill axis-pill--${status}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "axis-pill__dot"
  }), children);
}
function Tag({
  tone = 'neutral',
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `axis-tag axis-tag--${tone}`
  }, children);
}
function Badge({
  children,
  tone = 'iris'
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `axis-badge axis-badge--${tone}`
  }, children);
}

/* ──────────────────────────────────────────────────────────────────────
   Switch / Segmented
   ────────────────────────────────────────────────────────────────────── */
function Switch({
  checked,
  onChange,
  label
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": checked,
    onClick: () => onChange(!checked),
    className: `axis-switch${checked ? ' is-on' : ''}`,
    "aria-label": label
  });
}
function Segmented({
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "axis-seg",
    role: "tablist"
  }, options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    role: "tab",
    "aria-selected": value === o.value,
    onClick: () => onChange(o.value),
    className: value === o.value ? 'is-on' : ''
  }, o.label)));
}

/* ──────────────────────────────────────────────────────────────────────
   Card / Kbd / Avatar
   ────────────────────────────────────────────────────────────────────── */
function Card({
  children,
  padding = 16,
  className = '',
  style,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `axis-card ${className}`,
    style: {
      padding,
      cursor: onClick ? 'pointer' : 'default',
      ...style
    },
    onClick: onClick
  }, children);
}
function Kbd({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "axis-kbd"
  }, children);
}
function Avatar({
  initials,
  src,
  size = 28,
  tone = 'iris'
}) {
  if (src) return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    className: "axis-avatar",
    style: {
      width: size,
      height: size
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    className: `axis-avatar axis-avatar--${tone}`,
    style: {
      width: size,
      height: size,
      fontSize: size * 0.4
    }
  }, initials);
}
Object.assign(window, {
  Icon,
  Button,
  IconButton,
  Input,
  StatusPill,
  Tag,
  Badge,
  Switch,
  Segmented,
  Card,
  Kbd,
  Avatar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/dashboard.jsx
try { (() => {
/* eslint-disable */
/* Dashboard view — metric cards, deployments table, activity feed (i18n) */

const {
  useState: useStateDash
} = React;
function MetricCard({
  label,
  value,
  delta,
  trend,
  sparkData,
  tone = 'iris'
}) {
  const pos = !!trend && trend > 0;
  const deltaTone = pos ? 'success' : 'danger';
  const points = sparkData || [];
  const min = Math.min(...points),
    max = Math.max(...points);
  const path = points.map((v, i) => {
    const x = i / (points.length - 1) * 100;
    const y = 32 - (v - min) / (max - min || 1) * 28 - 2;
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
  const stroke = tone === 'success' ? 'var(--success-500)' : tone === 'danger' ? 'var(--danger-500)' : 'var(--iris-500)';
  return /*#__PURE__*/React.createElement(Card, {
    padding: 18,
    className: "metric-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "metric-card__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "metric-card__label"
  }, label), delta && /*#__PURE__*/React.createElement("span", {
    className: `axis-pill axis-pill--${deltaTone}`,
    style: {
      padding: '1px 7px',
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: pos ? 'arrow-up-right' : 'arrow-down-right',
    size: 11
  }), delta)), /*#__PURE__*/React.createElement("div", {
    className: "metric-card__value"
  }, value), /*#__PURE__*/React.createElement("svg", {
    className: "metric-card__spark",
    viewBox: "0 0 100 32",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: path,
    stroke: stroke,
    strokeWidth: "1.5",
    fill: "none"
  })));
}

/* Deployment data — separated from labels so it can be rendered in either lang */
const DEPLOYMENTS = [{
  id: 'a1b2c3d',
  branch: 'main',
  env: 'PROD',
  status: 'success',
  duration: '24s',
  author: 'Alex',
  authorTone: 'iris',
  timeKey: 'minutes',
  n: 2
}, {
  id: 'e4f5g6h',
  branch: 'feat/inbox-v3',
  env: 'PREVIEW',
  status: 'building',
  duration: '—',
  author: 'Maya',
  authorTone: 'success',
  timeKey: 'now'
}, {
  id: 'i7j8k9l',
  branch: 'fix/oauth-flow',
  env: 'PREVIEW',
  status: 'failed',
  duration: '12s',
  author: 'Sam',
  authorTone: 'warning',
  timeKey: 'minutes',
  n: 8
}, {
  id: 'm0n1p2q',
  branch: 'main',
  env: 'STAGING',
  status: 'success',
  duration: '31s',
  author: 'Alex',
  authorTone: 'iris',
  timeKey: 'minutes',
  n: 24
}, {
  id: 'r3s4t5u',
  branch: 'release/2.1.0',
  env: 'PROD',
  status: 'success',
  duration: '28s',
  author: 'Priya',
  authorTone: 'danger',
  timeKey: 'hours',
  n: 1
}, {
  id: 'v6w7x8y',
  branch: 'feat/audit-log',
  env: 'PREVIEW',
  status: 'queued',
  duration: '—',
  author: 'Maya',
  authorTone: 'success',
  timeKey: 'hours',
  n: 1
}];
function tTime(t, key, n) {
  if (key === 'now') return t('time.now');
  return t(`time.${key}`, {
    n
  });
}
function DeploymentsTable() {
  const t = useT();
  return /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    className: "deployments-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "deployments-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "deployments-title"
  }, t('dash.deploys.title')), /*#__PURE__*/React.createElement("div", {
    className: "deployments-sub"
  }, t('dash.deploys.sub'))), /*#__PURE__*/React.createElement("div", {
    className: "deployments-actions"
  }, /*#__PURE__*/React.createElement(Segmented, {
    value: "all",
    onChange: () => {},
    options: [{
      value: 'all',
      label: t('dash.deploys.filter.all')
    }, {
      value: 'prod',
      label: t('dash.deploys.filter.prod')
    }, {
      value: 'preview',
      label: t('dash.deploys.filter.preview')
    }]
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "filter"
  }, t('dash.deploys.filter')))), /*#__PURE__*/React.createElement("div", {
    className: "deployments-table"
  }, /*#__PURE__*/React.createElement("div", {
    className: "deployments-row deployments-row--head"
  }, /*#__PURE__*/React.createElement("span", null, t('dash.deploys.col.commit')), /*#__PURE__*/React.createElement("span", null, t('dash.deploys.col.branch')), /*#__PURE__*/React.createElement("span", null, t('dash.deploys.col.env')), /*#__PURE__*/React.createElement("span", null, t('dash.deploys.col.status')), /*#__PURE__*/React.createElement("span", null, t('dash.deploys.col.duration')), /*#__PURE__*/React.createElement("span", null, t('dash.deploys.col.author')), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'end'
    }
  }, t('dash.deploys.col.time'))), DEPLOYMENTS.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.id,
    className: "deployments-row"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("code", {
    className: "dep-commit"
  }, d.id)), /*#__PURE__*/React.createElement("span", {
    className: "dep-branch"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "git-branch",
    size: 12
  }), d.branch), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Tag, {
    tone: d.env === 'PROD' ? 'iris' : 'neutral'
  }, d.env)), /*#__PURE__*/React.createElement("span", null, d.status === 'success' && /*#__PURE__*/React.createElement(StatusPill, {
    status: "success"
  }, t('dash.deploys.status.deployed')), d.status === 'building' && /*#__PURE__*/React.createElement(StatusPill, {
    status: "warning"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dep-pulse"
  }), t('dash.deploys.status.building')), d.status === 'failed' && /*#__PURE__*/React.createElement(StatusPill, {
    status: "danger"
  }, t('dash.deploys.status.failed')), d.status === 'queued' && /*#__PURE__*/React.createElement(StatusPill, {
    status: "info"
  }, t('dash.deploys.status.queued'))), /*#__PURE__*/React.createElement("span", {
    className: "dep-duration"
  }, d.duration), /*#__PURE__*/React.createElement("span", {
    className: "dep-author"
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: d.author.slice(0, 2).toUpperCase(),
    size: 20,
    tone: d.authorTone
  }), /*#__PURE__*/React.createElement("span", null, d.author)), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'end',
      color: 'var(--fg-3)',
      fontSize: 12
    }
  }, tTime(t, d.timeKey, d.n))))));
}
const FEED = [{
  who: 'Maya Chen',
  initials: 'MC',
  tone: 'success',
  verb: 'merged',
  target: 'feat/inbox-v3 → main',
  timeKey: 'minutes',
  n: 4,
  icon: 'git-merge'
}, {
  who: 'Sam Park',
  initials: 'SP',
  tone: 'warning',
  verb: 'opened',
  target: 'Issue #2241',
  timeKey: 'minutes',
  n: 12,
  icon: 'circle-dot'
}, {
  who: 'Alex Kim',
  initials: 'AK',
  tone: 'iris',
  verb: 'deployed',
  target: 'main → production',
  timeKey: 'minutes',
  n: 2,
  icon: 'rocket'
}, {
  who: 'Priya Rao',
  initials: 'PR',
  tone: 'danger',
  verb: 'released',
  target: 'v2.1.0',
  timeKey: 'hours',
  n: 1,
  icon: 'tag'
}, {
  who: 'Sam Park',
  initials: 'SP',
  tone: 'warning',
  verb: 'commented',
  target: 'PR #1187',
  timeKey: 'hours',
  n: 2,
  icon: 'message-circle'
}];
function ActivityFeed() {
  const t = useT();
  return /*#__PURE__*/React.createElement(Card, {
    padding: 18
  }, /*#__PURE__*/React.createElement("div", {
    className: "feed-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "feed-title"
  }, t('dash.feed.title')), /*#__PURE__*/React.createElement("div", {
    className: "feed-sub"
  }, t('dash.feed.sub'))), /*#__PURE__*/React.createElement(IconButton, {
    icon: "more-horizontal",
    label: "More"
  })), /*#__PURE__*/React.createElement("div", {
    className: "feed-list"
  }, FEED.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "feed-item"
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: it.initials,
    size: 28,
    tone: it.tone
  }), /*#__PURE__*/React.createElement("div", {
    className: "feed-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "feed-line"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--fg-1)'
    }
  }, it.who), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-2)'
    }
  }, " ", t(`dash.feed.verb.${it.verb}`), " "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-1)'
    }
  }, it.target)), /*#__PURE__*/React.createElement("div", {
    className: "feed-meta"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 11
  }), /*#__PURE__*/React.createElement("span", null, tTime(t, it.timeKey, it.n))))))));
}
function PageBanner() {
  const t = useT();
  return /*#__PURE__*/React.createElement("div", {
    className: "page-banner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-banner__bg",
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement("div", {
    className: "page-banner__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-banner__eyebrow"
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "iris"
  }, t('dash.banner.eyebrow.version')), /*#__PURE__*/React.createElement("span", null, t('dash.banner.eyebrow.released'))), /*#__PURE__*/React.createElement("h1", {
    className: "page-banner__title"
  }, t('dash.banner.title')), /*#__PURE__*/React.createElement("p", {
    className: "page-banner__sub"
  }, t('dash.banner.sub')), /*#__PURE__*/React.createElement("div", {
    className: "page-banner__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    icon: "rocket"
  }, t('dash.banner.deploy')), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "md",
    icon: "external-link"
  }, t('dash.banner.changelog')))));
}
function DashboardView() {
  const t = useT();
  return /*#__PURE__*/React.createElement("div", {
    className: "dash"
  }, /*#__PURE__*/React.createElement(PageBanner, null), /*#__PURE__*/React.createElement("div", {
    className: "dash__metrics"
  }, /*#__PURE__*/React.createElement(MetricCard, {
    label: t('dash.metric.users'),
    value: "12,489",
    delta: "+4.2%",
    trend: 1,
    tone: "iris",
    sparkData: [18, 22, 24, 20, 28, 24, 32, 30, 38, 42, 46, 50, 54]
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: t('dash.metric.latency'),
    value: "47 ms",
    delta: "\u221212 ms",
    trend: 1,
    tone: "success",
    sparkData: [60, 58, 54, 52, 50, 48, 46, 47, 45, 44, 43, 42, 42]
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: t('dash.metric.errors'),
    value: "0.18%",
    delta: "+0.04%",
    trend: -1,
    tone: "danger",
    sparkData: [10, 12, 11, 14, 16, 18, 20, 22, 24, 28, 30, 34, 38]
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: t('dash.metric.build'),
    value: "24 s",
    delta: "\u22126 s",
    trend: 1,
    tone: "success",
    sparkData: [40, 38, 36, 34, 32, 30, 28, 28, 26, 26, 24, 24, 24]
  })), /*#__PURE__*/React.createElement("div", {
    className: "dash__grid"
  }, /*#__PURE__*/React.createElement(DeploymentsTable, null), /*#__PURE__*/React.createElement(ActivityFeed, null)));
}
Object.assign(window, {
  DashboardView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/docs.jsx
try { (() => {
/* eslint-disable */
/* Docs views — Tokens + Components (i18n) */

function Section({
  eyebrow,
  title,
  sub,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "docs-section"
  }, /*#__PURE__*/React.createElement("header", {
    className: "docs-section__head"
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "docs-section__eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "docs-section__title"
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    className: "docs-section__sub"
  }, sub)), /*#__PURE__*/React.createElement("div", {
    className: "docs-section__body"
  }, children));
}
function Swatch({
  name,
  varName
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "swatch"
  }, /*#__PURE__*/React.createElement("div", {
    className: "swatch__chip",
    style: {
      background: `var(${varName})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "swatch__meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "swatch__name"
  }, name), /*#__PURE__*/React.createElement("code", {
    className: "swatch__var"
  }, varName)));
}
function TokensView() {
  const t = useT();
  const iris = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  const neutrals = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, 1000];
  const semantics = [{
    name: t('pill.deployed'),
    varName: '--success-500'
  }, {
    name: t('pill.building'),
    varName: '--warning-500'
  }, {
    name: t('pill.failed'),
    varName: '--danger-500'
  }, {
    name: t('pill.queued'),
    varName: '--info-500'
  }];
  const radii = [{
    name: 'xs · 4',
    varName: '--radius-xs'
  }, {
    name: 'sm · 6',
    varName: '--radius-sm'
  }, {
    name: 'md · 8',
    varName: '--radius-md'
  }, {
    name: 'lg · 12',
    varName: '--radius-lg'
  }, {
    name: 'xl · 16',
    varName: '--radius-xl'
  }, {
    name: 'full',
    varName: '--radius-full'
  }];
  const shadows = ['xs', 'sm', 'md', 'lg', 'xl'];
  const spaces = [1, 2, 3, 4, 6, 8, 12, 16];
  return /*#__PURE__*/React.createElement("div", {
    className: "docs"
  }, /*#__PURE__*/React.createElement("header", {
    className: "docs-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "docs-header__eyebrow"
  }, t('docs.eyebrow')), /*#__PURE__*/React.createElement("h1", {
    className: "docs-header__title"
  }, t('tokens.title')), /*#__PURE__*/React.createElement("p", {
    className: "docs-header__sub",
    style: {
      maxWidth: 720
    }
  }, t('tokens.sub'))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: t('tokens.eyebrow.color'),
    title: t('tokens.color.iris.title'),
    sub: t('tokens.color.iris.sub')
  }, /*#__PURE__*/React.createElement("div", {
    className: "swatch-grid"
  }, iris.map(s => /*#__PURE__*/React.createElement(Swatch, {
    key: s,
    name: `iris-${s}`,
    varName: `--iris-${s}`
  })))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: t('tokens.eyebrow.color'),
    title: t('tokens.color.neutral.title'),
    sub: t('tokens.color.neutral.sub')
  }, /*#__PURE__*/React.createElement("div", {
    className: "swatch-grid swatch-grid--13"
  }, neutrals.map(s => /*#__PURE__*/React.createElement(Swatch, {
    key: s,
    name: `neutral-${s}`,
    varName: `--neutral-${s}`
  })))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: t('tokens.eyebrow.color'),
    title: t('tokens.color.semantic.title'),
    sub: t('tokens.color.semantic.sub')
  }, /*#__PURE__*/React.createElement("div", {
    className: "swatch-grid"
  }, semantics.map(s => /*#__PURE__*/React.createElement(Swatch, {
    key: s.varName,
    name: s.name,
    varName: s.varName
  })))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: t('tokens.eyebrow.geometry'),
    title: t('tokens.radii.title')
  }, /*#__PURE__*/React.createElement("div", {
    className: "radii-grid"
  }, radii.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.varName,
    className: "radius-cell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "radius-cell__box",
    style: {
      borderRadius: `var(${r.varName})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "radius-cell__name"
  }, r.name), /*#__PURE__*/React.createElement("code", {
    className: "swatch__var"
  }, r.varName))))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: t('tokens.eyebrow.elevation'),
    title: t('tokens.shadows.title')
  }, /*#__PURE__*/React.createElement("div", {
    className: "shadow-grid"
  }, shadows.map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    className: "shadow-cell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shadow-cell__box",
    style: {
      boxShadow: `var(--shadow-${s})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "shadow-cell__name"
  }, `shadow-${s}`))))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: t('tokens.eyebrow.layout'),
    title: t('tokens.spacing.title'),
    sub: t('tokens.spacing.sub')
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-list"
  }, spaces.map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    className: "space-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "space-row__key"
  }, `space-${s}`), /*#__PURE__*/React.createElement("span", {
    className: "space-row__px"
  }, `${s * 4} px`), /*#__PURE__*/React.createElement("span", {
    className: "space-row__bar",
    style: {
      width: `${s * 4}px`
    }
  }))))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: t('tokens.eyebrow.motion'),
    title: t('tokens.motion.title')
  }, /*#__PURE__*/React.createElement("div", {
    className: "motion-grid"
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 14
  }, /*#__PURE__*/React.createElement("div", {
    className: "motion-key"
  }, t('tokens.motion.micro')), /*#__PURE__*/React.createElement("div", {
    className: "motion-use"
  }, t('tokens.motion.micro.use'))), /*#__PURE__*/React.createElement(Card, {
    padding: 14
  }, /*#__PURE__*/React.createElement("div", {
    className: "motion-key"
  }, t('tokens.motion.small')), /*#__PURE__*/React.createElement("div", {
    className: "motion-use"
  }, t('tokens.motion.small.use'))), /*#__PURE__*/React.createElement(Card, {
    padding: 14
  }, /*#__PURE__*/React.createElement("div", {
    className: "motion-key"
  }, t('tokens.motion.large')), /*#__PURE__*/React.createElement("div", {
    className: "motion-use"
  }, t('tokens.motion.large.use')))), /*#__PURE__*/React.createElement("div", {
    className: "motion-ease"
  }, /*#__PURE__*/React.createElement("span", {
    className: "motion-ease__label"
  }, t('tokens.motion.ease.label')), /*#__PURE__*/React.createElement("code", {
    className: "motion-ease__code"
  }, "cubic-bezier(0.2, 0.8, 0.2, 1)"), /*#__PURE__*/React.createElement("span", {
    className: "motion-ease__note"
  }, t('tokens.motion.ease.note')))));
}
function ComponentsView() {
  const t = useT();
  const [primaryLoading, setPrimaryLoading] = React.useState(false);
  const [email, setEmail] = React.useState('alex@axis.dev');
  const [bad, setBad] = React.useState('not-an-email');
  const [empty, setEmpty] = React.useState('');
  const [theme, setTheme] = React.useState('day');
  const [notifs, setNotifs] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    className: "docs"
  }, /*#__PURE__*/React.createElement("header", {
    className: "docs-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "docs-header__eyebrow"
  }, t('docs.eyebrow')), /*#__PURE__*/React.createElement("h1", {
    className: "docs-header__title"
  }, t('comp.title')), /*#__PURE__*/React.createElement("p", {
    className: "docs-header__sub"
  }, t('comp.sub'))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: t('comp.eyebrow.action'),
    title: t('comp.buttons.title'),
    sub: t('comp.buttons.sub')
  }, /*#__PURE__*/React.createElement("div", {
    className: "comp-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "comp-row"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "zap"
  }, t('btn.deploy')), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "settings"
  }, t('btn.settings')), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "filter"
  }, t('btn.filter')), /*#__PURE__*/React.createElement(Button, {
    variant: "iris-soft",
    icon: "sparkles"
  }, t('btn.try.beta')), /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    icon: "trash-2"
  }, t('btn.delete'))), /*#__PURE__*/React.createElement("div", {
    className: "comp-row"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "xs"
  }, "xs"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "sm"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md"
  }, "md"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "lg"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "xl"
  }, "xl")), /*#__PURE__*/React.createElement("div", {
    className: "comp-row"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    loading: primaryLoading,
    onClick: () => {
      setPrimaryLoading(true);
      setTimeout(() => setPrimaryLoading(false), 1600);
    }
  }, primaryLoading ? t('btn.deploying') : t('btn.click.deploy')), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    disabled: true
  }, t('btn.disabled')), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    trailingIcon: "arrow-right"
  }, t('btn.continue')), /*#__PURE__*/React.createElement(IconButton, {
    icon: "more-horizontal",
    label: "More",
    variant: "ghost"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "settings",
    label: t('btn.settings'),
    variant: "secondary"
  })))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: t('comp.eyebrow.input'),
    title: t('comp.inputs.title')
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement(Input, {
    label: t('field.email'),
    value: empty,
    onChange: setEmpty,
    icon: "at-sign",
    hint: t('field.help.empty')
  }), /*#__PURE__*/React.createElement(Input, {
    label: t('field.email'),
    value: email,
    onChange: setEmail,
    icon: "check-circle-2",
    hint: t('field.help.filled')
  }), /*#__PURE__*/React.createElement(Input, {
    label: t('field.email'),
    value: bad,
    onChange: setBad,
    icon: "alert-circle",
    error: t('field.err.email')
  }), /*#__PURE__*/React.createElement(Input, {
    label: t('field.password'),
    value: '•••••••••••',
    icon: "eye",
    hint: t('field.help.password')
  }))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: t('comp.eyebrow.status'),
    title: t('comp.status.title')
  }, /*#__PURE__*/React.createElement("div", {
    className: "comp-row"
  }, /*#__PURE__*/React.createElement(StatusPill, {
    status: "success"
  }, t('pill.deployed')), /*#__PURE__*/React.createElement(StatusPill, {
    status: "warning"
  }, t('pill.building')), /*#__PURE__*/React.createElement(StatusPill, {
    status: "danger"
  }, t('pill.failed')), /*#__PURE__*/React.createElement(StatusPill, {
    status: "info"
  }, t('pill.queued')), /*#__PURE__*/React.createElement(StatusPill, {
    status: "neutral"
  }, t('pill.draft'))), /*#__PURE__*/React.createElement("div", {
    className: "comp-row"
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "iris"
  }, "PROD"), /*#__PURE__*/React.createElement(Tag, {
    tone: "neutral"
  }, "v2.1.0"), /*#__PURE__*/React.createElement(Tag, {
    tone: "success"
  }, "+4.2%"), /*#__PURE__*/React.createElement(Tag, {
    tone: "danger"
  }, "\u22120.04%")), /*#__PURE__*/React.createElement("div", {
    className: "comp-row",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, null, "3"), /*#__PURE__*/React.createElement(Badge, null, "12"), /*#__PURE__*/React.createElement(Badge, null, "99+"), /*#__PURE__*/React.createElement(Avatar, {
    initials: "AK",
    size: 28,
    tone: "iris"
  }), /*#__PURE__*/React.createElement(Avatar, {
    initials: "MC",
    size: 28,
    tone: "success"
  }), /*#__PURE__*/React.createElement(Avatar, {
    initials: "SP",
    size: 28,
    tone: "warning"
  }), /*#__PURE__*/React.createElement(Avatar, {
    initials: "PR",
    size: 28,
    tone: "danger"
  }))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: t('comp.eyebrow.control'),
    title: t('comp.toggles.title')
  }, /*#__PURE__*/React.createElement("div", {
    className: "comp-row",
    style: {
      gap: 24,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "control-pair"
  }, /*#__PURE__*/React.createElement("span", {
    className: "control-label"
  }, t('control.theme')), /*#__PURE__*/React.createElement(Segmented, {
    value: theme,
    onChange: setTheme,
    options: [{
      value: 'day',
      label: t('control.theme.day')
    }, {
      value: 'week',
      label: t('control.theme.week')
    }, {
      value: 'month',
      label: t('control.theme.month')
    }]
  })), /*#__PURE__*/React.createElement("div", {
    className: "control-pair"
  }, /*#__PURE__*/React.createElement("span", {
    className: "control-label"
  }, t('control.notifications')), /*#__PURE__*/React.createElement(Switch, {
    checked: notifs,
    onChange: setNotifs,
    label: t('control.notifications')
  })), /*#__PURE__*/React.createElement("div", {
    className: "control-pair"
  }, /*#__PURE__*/React.createElement("span", {
    className: "control-label"
  }, t('control.shortcut')), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Kbd, null, "\u2318"), " ", /*#__PURE__*/React.createElement(Kbd, null, "K"))))));
}
Object.assign(window, {
  Section,
  TokensView,
  ComponentsView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/docs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/filter-bar.jsx
try { (() => {
/* eslint-disable */
/* FilterBar — advanced filter UI with chips + saved presets.

   Filters are typed:
     - 'select'   single value from a small set (e.g. status)
     - 'multi'    multiple values (e.g. roles)
     - 'date'     a date (one)
     - 'range'    a numeric range

   Each active filter renders as a chip. Saved presets store the entire
   active filter state under a name; the user can recall them with one
   click. Persisted to localStorage under a per-table key.
*/

const {
  useState: useStateFB,
  useEffect: useEffectFB,
  useMemo: useMemoFB
} = React;
function FilterBar({
  schema,
  value,
  onChange,
  presetsKey
}) {
  const t = useT();
  const [presets, setPresets] = useStateFB(() => loadPresets(presetsKey));
  const [savePromptOpen, setSavePromptOpen] = useStateFB(false);
  const [presetName, setPresetName] = useStateFB('');
  useEffectFB(() => savePresets(presetsKey, presets), [presetsKey, presets]);
  const activeKeys = Object.keys(value).filter(k => isSet(value[k]));
  function set(k, v) {
    onChange({
      ...value,
      [k]: v
    });
  }
  function clear(k) {
    const {
      [k]: _,
      ...rest
    } = value;
    onChange(rest);
  }
  function clearAll() {
    onChange({});
  }
  function savePreset() {
    const name = presetName.trim();
    if (!name) return;
    setPresets(p => [...p.filter(x => x.name !== name), {
      name,
      value
    }]);
    setPresetName('');
    setSavePromptOpen(false);
  }
  function removePreset(name) {
    setPresets(p => p.filter(x => x.name !== name));
  }
  function applyPreset(p) {
    onChange(p.value);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "axis-filter"
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-filter__bar"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "filter",
    size: 14,
    style: {
      color: 'var(--fg-3)'
    }
  }), activeKeys.map(k => {
    const f = schema.find(x => x.key === k);
    if (!f) return null;
    return /*#__PURE__*/React.createElement(FilterChip, {
      key: k,
      field: f,
      value: value[k],
      onChange: v => set(k, v),
      onClear: () => clear(k)
    });
  }), /*#__PURE__*/React.createElement(Menu, {
    trigger: (open, ref) => /*#__PURE__*/React.createElement("button", {
      ref: ref,
      type: "button",
      className: "axis-filter__add",
      onClick: open
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 12
    }), " ", t('filter.add'))
  }, close => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MenuLabel, null, t('filter.addLabel')), schema.filter(f => !isSet(value[f.key])).map(f => /*#__PURE__*/React.createElement(MenuItem, {
    key: f.key,
    icon: f.icon,
    onClick: () => {
      set(f.key, defaultFor(f));
      close();
    }
  }, f.label)), schema.filter(f => !isSet(value[f.key])).length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 12px',
      fontSize: 12,
      color: 'var(--fg-3)'
    }
  }, t('filter.allApplied')))), /*#__PURE__*/React.createElement("div", {
    className: "axis-filter__right"
  }, activeKeys.length > 0 && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "axis-filter__clear",
    onClick: clearAll
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 12
  }), " ", t('filter.clearAll')), /*#__PURE__*/React.createElement(Menu, {
    trigger: (open, ref) => /*#__PURE__*/React.createElement("button", {
      ref: ref,
      type: "button",
      className: "axis-filter__presets",
      onClick: open
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bookmark",
      size: 12
    }), " ", t('filter.presets'), presets.length > 0 && /*#__PURE__*/React.createElement("span", {
      className: "axis-filter__count"
    }, presets.length)),
    width: 240
  }, close => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MenuLabel, null, t('filter.savedPresets')), presets.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 12px 8px',
      fontSize: 12,
      color: 'var(--fg-3)'
    }
  }, t('filter.noPresets')), presets.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    className: "axis-filter__preset-row"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      applyPreset(p);
      close();
    },
    className: "axis-filter__preset"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bookmark",
    size: 13
  }), /*#__PURE__*/React.createElement("span", null, p.name)), /*#__PURE__*/React.createElement("button", {
    onClick: () => removePreset(p.name),
    className: "axis-filter__preset-remove",
    "aria-label": "Remove preset"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 12
  })))), /*#__PURE__*/React.createElement(MenuDivider, null), !savePromptOpen ? /*#__PURE__*/React.createElement(MenuItem, {
    icon: "bookmark-plus",
    disabled: activeKeys.length === 0,
    onClick: () => setSavePromptOpen(true)
  }, t('filter.saveCurrent')) : /*#__PURE__*/React.createElement("div", {
    className: "axis-filter__save-row"
  }, /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: presetName,
    onChange: e => setPresetName(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        savePreset();
        close();
      }
      if (e.key === 'Escape') setSavePromptOpen(false);
    },
    placeholder: t('filter.presetNamePlaceholder')
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      savePreset();
      close();
    }
  }, t('filter.save'))))))));
}

/* ──────────────────────────────────────────────────────────────────────
   FilterChip — one active filter; clicking opens a menu to change value
   ────────────────────────────────────────────────────────────────────── */
function FilterChip({
  field,
  value,
  onChange,
  onClear
}) {
  const t = useT();
  const displayValue = useMemoFB(() => {
    if (field.type === 'select') {
      const opt = field.options.find(o => o.value === value);
      return opt ? opt.label : String(value);
    }
    if (field.type === 'multi') {
      if (!Array.isArray(value) || value.length === 0) return t('filter.any');
      const labels = value.map(v => (field.options.find(o => o.value === v) || {}).label || v);
      return labels.length === 1 ? labels[0] : `${labels[0]} +${labels.length - 1}`;
    }
    if (field.type === 'date') return value;
    if (field.type === 'range') return `${value[0]}–${value[1]}`;
    return String(value);
  }, [field, value, t]);
  return /*#__PURE__*/React.createElement(Menu, {
    trigger: (open, ref) => /*#__PURE__*/React.createElement("span", {
      ref: ref,
      className: "axis-filter__chip",
      onClick: open
    }, field.icon && /*#__PURE__*/React.createElement(Icon, {
      name: field.icon,
      size: 12
    }), /*#__PURE__*/React.createElement("span", {
      className: "axis-filter__chip-key"
    }, field.label, ":"), /*#__PURE__*/React.createElement("strong", null, displayValue), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "axis-filter__chip-x",
      onClick: e => {
        e.stopPropagation();
        onClear();
      },
      "aria-label": "Remove filter"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 10
    }))),
    width: field.type === 'multi' ? 220 : 180
  }, close => {
    if (field.type === 'select') {
      return /*#__PURE__*/React.createElement(React.Fragment, null, field.options.map(o => /*#__PURE__*/React.createElement(MenuItem, {
        key: o.value,
        onClick: () => {
          onChange(o.value);
          close();
        }
      }, o.label)));
    }
    if (field.type === 'multi') {
      const arr = Array.isArray(value) ? value : [];
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: 4
        }
      }, field.options.map(o => {
        const checked = arr.includes(o.value);
        return /*#__PURE__*/React.createElement("label", {
          key: o.value,
          className: "axis-filter__multi-row"
        }, /*#__PURE__*/React.createElement("input", {
          type: "checkbox",
          checked: checked,
          onChange: () => {
            const next = checked ? arr.filter(v => v !== o.value) : [...arr, o.value];
            onChange(next);
          }
        }), /*#__PURE__*/React.createElement("span", {
          className: `axis-check__box${checked ? ' is-on' : ''}`,
          style: {
            width: 14,
            height: 14
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "check",
          size: 10
        })), /*#__PURE__*/React.createElement("span", null, o.label));
      }));
    }
    if (field.type === 'date') {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: 6
        }
      }, /*#__PURE__*/React.createElement(DatePicker, {
        value: value,
        onChange: v => {
          onChange(v);
          close();
        }
      }));
    }
    if (field.type === 'range') {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '10px 12px',
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          color: 'var(--fg-3)',
          textTransform: 'uppercase',
          letterSpacing: '0.06em'
        }
      }, t('filter.between')), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 6,
          alignItems: 'center'
        }
      }, /*#__PURE__*/React.createElement("input", {
        type: "number",
        value: value[0],
        onChange: e => onChange([+e.target.value, value[1]]),
        className: "axis-filter__num"
      }), /*#__PURE__*/React.createElement("span", null, "\u2014"), /*#__PURE__*/React.createElement("input", {
        type: "number",
        value: value[1],
        onChange: e => onChange([value[0], +e.target.value]),
        className: "axis-filter__num"
      })));
    }
    return null;
  });
}

/* ── helpers ─────────────────────────────────────────────────────────── */
function isSet(v) {
  if (v === undefined || v === null || v === '') return false;
  if (Array.isArray(v) && v.length === 0) return false;
  return true;
}
function defaultFor(f) {
  if (f.type === 'select') return f.options[0]?.value;
  if (f.type === 'multi') return [];
  if (f.type === 'date') return new Date().toISOString().slice(0, 10);
  if (f.type === 'range') return [f.min ?? 0, f.max ?? 100];
  return '';
}
function loadPresets(key) {
  try {
    return JSON.parse(localStorage.getItem(`axis.filter.presets.${key}`) || '[]');
  } catch {
    return [];
  }
}
function savePresets(key, p) {
  try {
    localStorage.setItem(`axis.filter.presets.${key}`, JSON.stringify(p));
  } catch {}
}
Object.assign(window, {
  FilterBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/filter-bar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/gantt.jsx
try { (() => {
/* eslint-disable */
/* Gantt — horizontal bar chart per task across a date range.
   props:
     tasks: [{ id, name, startDate, endDate, progress, tone?, dependsOn?: [ids] }]
     rangeStart, rangeEnd: ISO 'YYYY-MM-DD'
*/

const {
  useMemo: useMemoGT
} = React;
function _daysBetween(a, b) {
  const d1 = new Date(a),
    d2 = new Date(b);
  return Math.round((d2 - d1) / 86400000);
}
function _formatLabel(d, lang) {
  const months = lang === 'ar' ? MONTHS.ar : MONTHS.en;
  return `${months[d.getMonth()].slice(0, 3)} ${d.getDate()}`;
}
function Gantt({
  tasks,
  rangeStart,
  rangeEnd,
  onTaskClick
}) {
  const t = useT();
  const lang = useLang();
  const totalDays = _daysBetween(rangeStart, rangeEnd) + 1;
  const dayWidth = 32; // px per day

  // Build date columns (one header tick per week)
  const headers = useMemoGT(() => {
    const arr = [];
    const start = new Date(rangeStart);
    for (let i = 0; i < totalDays; i += 7) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      arr.push({
        i,
        d,
        label: _formatLabel(d, lang)
      });
    }
    return arr;
  }, [rangeStart, totalDays, lang]);

  // Today line
  const todayOffset = _daysBetween(rangeStart, new Date().toISOString().slice(0, 10));
  const showToday = todayOffset >= 0 && todayOffset <= totalDays;
  return /*#__PURE__*/React.createElement("div", {
    className: "axis-gantt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-gantt__scroller",
    style: {
      ['--day-w']: `${dayWidth}px`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-gantt__inner",
    style: {
      width: totalDays * dayWidth
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-gantt__header"
  }, headers.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "axis-gantt__tick",
    style: {
      insetInlineStart: h.i * dayWidth
    }
  }, /*#__PURE__*/React.createElement("span", null, h.label))), Array.from({
    length: Math.floor(totalDays / 7) + 1
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: `g-${i}`,
    className: "axis-gantt__gridline",
    style: {
      insetInlineStart: i * 7 * dayWidth
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "axis-gantt__rows"
  }, tasks.map(task => {
    const offset = Math.max(0, _daysBetween(rangeStart, task.startDate));
    const length = Math.max(1, _daysBetween(task.startDate, task.endDate) + 1);
    const tone = task.tone || 'iris';
    return /*#__PURE__*/React.createElement("div", {
      key: task.id,
      className: "axis-gantt__row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "axis-gantt__row-label",
      title: task.name
    }, task.name), /*#__PURE__*/React.createElement("div", {
      className: "axis-gantt__track"
    }, Array.from({
      length: Math.floor(totalDays / 7) + 1
    }).map((_, i) => /*#__PURE__*/React.createElement("div", {
      key: `g-${i}`,
      className: "axis-gantt__row-gridline",
      style: {
        insetInlineStart: i * 7 * dayWidth
      }
    })), showToday && /*#__PURE__*/React.createElement("div", {
      className: "axis-gantt__today-line",
      style: {
        insetInlineStart: todayOffset * dayWidth
      }
    }), /*#__PURE__*/React.createElement("button", {
      className: `axis-gantt__bar axis-gantt__bar--${tone}`,
      style: {
        insetInlineStart: offset * dayWidth,
        width: length * dayWidth - 4
      },
      onClick: () => onTaskClick && onTaskClick(task.id)
    }, task.progress != null && /*#__PURE__*/React.createElement("div", {
      className: "axis-gantt__progress",
      style: {
        width: `${task.progress}%`
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "axis-gantt__bar-label"
    }, task.name), task.progress != null && /*#__PURE__*/React.createElement("span", {
      className: "axis-gantt__bar-pct"
    }, task.progress, "%"))));
  })))));
}
Object.assign(window, {
  Gantt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/gantt.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/i18n.jsx
try { (() => {
/* eslint-disable */
/* Internationalization — single source of truth for UI strings.

   Convention: numbers stay in WESTERN digits (123) in both English and Arabic.
   Do not use Arabic-Indic digits (١٢٣) anywhere.

   Usage in a component:
     const t = useT();
     <h1>{t('dash.banner.title')}</h1>
     <span>{t('time.minutes', { n: 5 })}</span>
*/

const I18N = {
  en: {
    /* App-wide */
    'app.brand': 'Axis',
    'app.search.placeholder': 'Search or jump to…',
    'app.deploy': 'Deploy',
    'app.toggle.theme': 'Toggle theme',
    'app.toggle.dir': 'العربية',
    'app.toggle.sidebar': 'Toggle sidebar',
    'app.notifications': 'Notifications',
    'app.close': 'Close sidebar',
    'app.version': 'v2.1',
    /* Sidebar */
    'nav.search': 'Search',
    'nav.overview': 'Overview',
    'nav.inbox': 'Inbox',
    'nav.deployments': 'Deployments',
    'nav.tokens': 'Tokens',
    'nav.components': 'Components',
    'nav.tables': 'Tables',
    'nav.guidelines': 'Guidelines',
    'nav.projects': 'Projects',
    'nav.team': 'Team',
    'nav.settings': 'Settings',
    'nav.section.docs': 'Documentation',
    'nav.section.workspace': 'Workspace',
    'nav.user.name': 'Alex Kim',
    'nav.user.org': 'Axis · Production',
    /* Page titles */
    'title.dashboard': 'Overview',
    'title.tokens': 'Tokens',
    'title.components': 'Components',
    'title.tables': 'Tables',
    'title.inbox': 'Inbox',
    'title.deployments': 'Deployments',
    'title.guidelines': 'Guidelines',
    'title.projects': 'Projects',
    'title.team': 'Team',
    'title.settings': 'Settings',
    /* Dashboard banner & metrics */
    'dash.banner.eyebrow.version': 'v2.1.0',
    'dash.banner.eyebrow.released': 'Released 2 days ago',
    'dash.banner.title': 'Production is healthy.',
    'dash.banner.sub': 'Last 24 hours · 47 ms median response · 99.94% uptime · 0 paging incidents.',
    'dash.banner.deploy': 'Deploy main',
    'dash.banner.changelog': 'View changelog',
    'dash.metric.users': 'Active users',
    'dash.metric.latency': 'P95 latency',
    'dash.metric.errors': 'Error rate',
    'dash.metric.build': 'Build time p50',
    /* Deployments table */
    'dash.deploys.title': 'Recent deployments',
    'dash.deploys.sub': 'Across all environments · last 24 hours',
    'dash.deploys.filter.all': 'All',
    'dash.deploys.filter.prod': 'Prod',
    'dash.deploys.filter.preview': 'Preview',
    'dash.deploys.filter': 'Filter',
    'dash.deploys.col.commit': 'Commit',
    'dash.deploys.col.branch': 'Branch',
    'dash.deploys.col.env': 'Environment',
    'dash.deploys.col.status': 'Status',
    'dash.deploys.col.duration': 'Duration',
    'dash.deploys.col.author': 'Author',
    'dash.deploys.col.time': 'Triggered',
    'dash.deploys.status.deployed': 'Deployed',
    'dash.deploys.status.building': 'Building',
    'dash.deploys.status.failed': 'Failed',
    'dash.deploys.status.queued': 'Queued',
    /* Activity feed */
    'dash.feed.title': 'Activity',
    'dash.feed.sub': 'Everyone in your workspace',
    'dash.feed.verb.merged': 'merged',
    'dash.feed.verb.opened': 'opened',
    'dash.feed.verb.deployed': 'deployed',
    'dash.feed.verb.released': 'released',
    'dash.feed.verb.commented': 'commented',
    /* Time spans */
    'time.now': 'now',
    'time.minutes': '{{n}}m ago',
    'time.hours': '{{n}}h ago',
    'time.days': '{{n}}d ago',
    /* Docs common */
    'docs.eyebrow': 'Living documentation',
    /* Tokens view */
    'tokens.title': 'Design tokens',
    'tokens.sub': 'Every value in the Axis design system is exposed as a CSS variable. Components consume them via var(--token) — never magic numbers.',
    'tokens.color.iris.title': 'Iris',
    'tokens.color.iris.sub': 'The one accent. Used on the primary action, focus ring, and selection.',
    'tokens.color.neutral.title': 'Neutrals',
    'tokens.color.neutral.sub': '12-step spine with a faint cool cast (hue 260, chroma ≤ 0.012).',
    'tokens.color.semantic.title': 'Semantic',
    'tokens.color.semantic.sub': 'Tuned to the same lightness as Iris so they share a visual plane.',
    'tokens.eyebrow.color': 'Color',
    'tokens.eyebrow.geometry': 'Geometry',
    'tokens.eyebrow.elevation': 'Elevation',
    'tokens.eyebrow.layout': 'Layout',
    'tokens.eyebrow.motion': 'Motion',
    'tokens.radii.title': 'Corner radii',
    'tokens.shadows.title': 'Shadows',
    'tokens.spacing.title': 'Spacing',
    'tokens.spacing.sub': '8-pt grid with a 4-pt half-step.',
    'tokens.motion.title': 'Durations & easing',
    'tokens.motion.micro': 'micro · 120 ms',
    'tokens.motion.micro.use': 'hover · focus · press',
    'tokens.motion.small': 'small · 200 ms',
    'tokens.motion.small.use': 'popovers · dropdowns',
    'tokens.motion.large': 'large · 320 ms',
    'tokens.motion.large.use': 'modal · page transition',
    'tokens.motion.ease.label': 'One easing',
    'tokens.motion.ease.note': 'no bounce · no overshoot · ever',
    /* Components view */
    'comp.title': 'Components',
    'comp.sub': 'Interactive specimens. Press the buttons. Type into the inputs. Every state is reachable.',
    'comp.buttons.title': 'Buttons',
    'comp.buttons.sub': 'Five variants, five sizes, six states.',
    'comp.inputs.title': 'Fields with floating labels',
    'comp.status.title': 'Pills, tags & badges',
    'comp.toggles.title': 'Toggles',
    'comp.eyebrow.action': 'Action',
    'comp.eyebrow.input': 'Input',
    'comp.eyebrow.status': 'Status',
    'comp.eyebrow.control': 'Control',
    'btn.deploy': 'Deploy',
    'btn.settings': 'Settings',
    'btn.filter': 'Filter',
    'btn.try.beta': 'Try beta',
    'btn.delete': 'Delete',
    'btn.click.deploy': 'Click to deploy',
    'btn.deploying': 'Deploying',
    'btn.disabled': 'Disabled',
    'btn.continue': 'Continue',
    'field.email': 'Email',
    'field.password': 'Password',
    'field.help.empty': 'Empty · placeholder collapsed',
    'field.help.filled': 'Filled · valid',
    'field.help.password': 'Password field',
    'field.err.email': 'Enter a valid email address.',
    'pill.deployed': 'Deployed',
    'pill.building': 'Building',
    'pill.failed': 'Failed',
    'pill.queued': 'Queued',
    'pill.draft': 'Draft',
    'control.theme': 'Theme',
    'control.theme.day': 'Day',
    'control.theme.week': 'Week',
    'control.theme.month': 'Month',
    'control.notifications': 'Notifications',
    'control.shortcut': 'Shortcut',
    /* Tables view */
    'tables.title': 'Tables',
    'tables.sub': 'Two patterns: a simple table for read-only summaries, and a complex table with sticky first column, sortable headers, row selection, search, density, and pagination for dense data.',
    'tables.simple.eyebrow': 'Pattern · simple',
    'tables.simple.title': 'At-a-glance table',
    'tables.simple.sub': 'Used inside cards for short, scannable lists. No chrome — just rows.',
    'tables.complex.eyebrow': 'Pattern · complex',
    'tables.complex.title': 'Data-dense table',
    'tables.complex.sub': 'Wide tables with many columns. The first column stays put as you scroll horizontally; the header stays put as you scroll vertically.',
    'tables.rules.eyebrow': 'Anatomy',
    'tables.rules.title': 'Rules',
    'tables.rule.1': 'Use sentence case in headers, always.',
    'tables.rule.2': 'Tabular numerals are on for every numeric column.',
    'tables.rule.3': 'Numbers align to the end, text to the start.',
    'tables.rule.4': 'The first column should identify the row. Make it sticky on wide tables.',
    'tables.rule.5': 'Row hover is a faint Iris tint, never a heavy gray.',
    'tables.rule.6': 'Empty states explain what is missing — never just "No data."',
    'tables.rule.7': 'Mobile tables scroll horizontally rather than collapsing.',
    /* Table — member directory */
    'tbl.col.member': 'Member',
    'tbl.col.role': 'Role',
    'tbl.col.status': 'Status',
    'tbl.col.mfa': 'MFA',
    'tbl.col.region': 'Region',
    'tbl.col.seats': 'Seats',
    'tbl.col.cost': 'Cost',
    'tbl.col.joined': 'Joined',
    'tbl.col.lastSeen': 'Last seen',
    'tbl.role.owner': 'Owner',
    'tbl.role.admin': 'Admin',
    'tbl.role.editor': 'Editor',
    'tbl.role.viewer': 'Viewer',
    'tbl.status.active': 'Active',
    'tbl.status.invited': 'Invited',
    'tbl.status.suspended': 'Suspended',
    'tbl.toolbar.search': 'Search by name, email, region…',
    'tbl.toolbar.density.compact': 'Compact',
    'tbl.toolbar.density.comfortable': 'Cozy',
    'tbl.toolbar.density.spacious': 'Spacious',
    'tbl.toolbar.filter': 'Filter',
    'tbl.toolbar.columns': 'Columns',
    'tbl.toolbar.export': 'Export',
    'tbl.bulk.selected': '{{n}} selected',
    'tbl.bulk.suspend': 'Suspend',
    'tbl.bulk.email': 'Email',
    'tbl.bulk.clear': 'Clear',
    'tbl.empty.title': 'No members match "{{q}}".',
    'tbl.empty.sub': 'Try a different search.',
    'tbl.actions.for': 'Actions for {{name}}',
    'tbl.pagination.info': 'Showing {{from}}–{{to}} of {{total}}',
    'tbl.pagination.page': 'Page {{page}} / {{total}}',
    'tbl.pagination.previous': 'Previous',
    'tbl.pagination.next': 'Next',
    /* Placeholder views */
    'page.inbox.title': 'Inbox',
    'page.inbox.sub': 'Your assigned issues, mentions, and review requests.',
    'page.deployments.title': 'Deployments',
    'page.deployments.sub': 'Every build, preview, and release across environments.',
    'page.guidelines.title': 'Guidelines',
    'page.guidelines.sub': 'Voice, tone, accessibility, and content rules.',
    'page.projects.title': 'Projects',
    'page.projects.sub': 'All projects you have access to.',
    'page.team.title': 'Team',
    'page.team.sub': 'Members, roles, and seats.',
    'page.settings.title': 'Settings',
    'page.settings.sub': 'Workspace and personal preferences.',
    'page.unbuilt.heading': 'This surface is intentionally unbuilt.',
    'page.unbuilt.sub': 'Overview, Tokens, Components, and Tables are the fully realized views.',
    /* Command palette */
    'palette.search.placeholder': 'Search or jump to...',
    'palette.section.pages': 'Pages',
    'palette.section.actions': 'Actions',
    'palette.section.settings': 'Settings',
    'palette.empty': 'No results for "{{q}}"',
    'palette.foot.navigate': 'navigate',
    'palette.foot.open': 'open',
    'palette.foot.close': 'close',
    'palette.item.goto': 'Go to {{page}}',
    'palette.item.deploy.prod': 'Deploy to production',
    'palette.item.deploy.preview': 'Deploy preview branch',
    'palette.item.rollback': 'Roll back last deploy',
    'palette.item.create.issue': 'Create issue',
    'palette.item.invite': 'Invite teammate',
    'palette.item.theme.light': 'Switch to light theme',
    'palette.item.theme.dark': 'Switch to dark theme',
    'palette.item.signout': 'Sign out',
    /* Filter bar */
    'filter.add': 'Add filter',
    'filter.addLabel': 'Add filter',
    'filter.allApplied': 'All filters applied',
    'filter.clearAll': 'Clear all',
    'filter.presets': 'Saved',
    'filter.savedPresets': 'Saved filters',
    'filter.noPresets': 'No saved filters yet.',
    'filter.saveCurrent': 'Save current as preset…',
    'filter.presetNamePlaceholder': 'Preset name',
    'filter.save': 'Save',
    'filter.any': 'any',
    'filter.between': 'Between',
    /* Schedule view */
    'nav.schedule': 'Schedule',
    'title.schedule': 'Schedule',
    'schedule.eyebrow': 'Itinerary',
    'schedule.title': 'Day plan',
    'schedule.sub': 'Build a day-by-day itinerary with stops, durations, and a visual route. Click any stop to edit its details.',
    'schedule.live': 'Live',
    'schedule.share': 'Share',
    'schedule.tab.agenda': 'Agenda',
    'schedule.tab.list': 'List',
    'schedule.tab.map': 'Map',
    'schedule.agenda.title': 'Today\'s schedule',
    'schedule.agenda.sub': 'Tap any block to edit',
    'schedule.meta.region': 'Madinah, KSA',
    'schedule.meta.updated': 'Updated {{time}}',
    'schedule.addStop': 'Add stop',
    'schedule.stat.stops': 'Stops',
    'schedule.stat.completed': 'Completed',
    'schedule.stat.duration': 'Total time',
    'schedule.stat.distance': 'Distance',
    'schedule.map.title': 'Route map',
    'schedule.map.sub': 'Stops connected in visit order',
    'schedule.map.day': 'Today',
    'schedule.map.route': 'Route',
    'schedule.list.title': 'Stops',
    'schedule.list.sub': '{{n}} stops planned',
    'schedule.type.depart': 'Depart',
    'schedule.type.visit': 'Visit',
    'schedule.type.food': 'Food',
    'schedule.type.shop': 'Shop',
    'schedule.type.photo': 'Photo',
    'schedule.type.hotel': 'Hotel',
    'schedule.actions.edit': 'Edit stop',
    'schedule.actions.more': 'More actions',
    'schedule.actions.markDone': 'Mark as done',
    'schedule.actions.duplicate': 'Duplicate',
    'schedule.actions.remove': 'Remove',
    'schedule.drawer.cancel': 'Cancel',
    'schedule.drawer.save': 'Save changes',
    'schedule.drawer.type': 'Type',
    'schedule.drawer.timing': 'Timing',
    'schedule.drawer.startTime': 'Start time',
    'schedule.drawer.duration': 'Duration',
    'schedule.drawer.endTime': 'Ends at',
    'schedule.drawer.details': 'Details',
    'schedule.drawer.placeLabel': 'Place',
    'schedule.drawer.typeLabel': 'Type',
    'schedule.minutes': 'min',
    'schedule.dur.min': '{{n}} min',
    'schedule.dur.hr': '{{n}} h',
    'schedule.dur.hm': '{{h}} h {{m}} min',
    'time.am': 'AM',
    'time.pm': 'PM',
    /* Row actions (tables) */
    'row.actions.view': 'View details',
    'row.actions.edit': 'Edit',
    'row.actions.email': 'Send email',
    'row.actions.copy': 'Copy link',
    'row.actions.suspend': 'Suspend',
    'row.actions.delete': 'Delete',
    'row.drawer.title': 'Member details',
    'row.drawer.activity': 'Recent activity',
    'row.drawer.close': 'Close',
    'row.drawer.save': 'Save changes',
    'row.drawer.editing': 'Editing',
    'row.detail.name': 'Name',
    'row.detail.email': 'Email',
    'row.detail.role': 'Role',
    'row.detail.status': 'Status',
    'row.detail.region': 'Region',
    'row.detail.seats': 'Seats',
    'row.detail.cost': 'Monthly cost',
    'row.detail.joined': 'Joined',
    'row.detail.lastSeen': 'Last seen',
    'row.detail.mfa': 'MFA',
    'row.detail.mfa.on': 'Enabled',
    'row.detail.mfa.off': 'Disabled',
    /* Projects view */
    'projects.project.eyebrow': 'Project',
    'projects.project.title': 'Platform core',
    'projects.project.description': 'Core platform components, APIs, and shared infrastructure. Owned by the engineering team. Releases ship weekly.',
    'projects.project.status.active': 'On track',
    'projects.meta.due': 'Due',
    'projects.search': 'Search tasks…',
    'projects.actions.share': 'Share',
    'projects.actions.duplicate': 'Duplicate',
    'projects.actions.export': 'Export',
    'projects.actions.archive': 'Archive project',
    'projects.actions.newTask': 'New task',
    'projects.stat.tasks': 'Tasks',
    'projects.stat.done': 'Completed',
    'projects.stat.progress': 'Progress',
    'projects.stat.velocity': 'Velocity',
    'projects.stat.velocity.sub': 'pts / week',
    'projects.tab.summary': 'Summary',
    'projects.tab.detailed': 'All fields',
    'projects.tab.board': 'Board',
    'projects.tab.activity': 'Activity',
    'projects.col.task': 'Task',
    'projects.col.priority': 'Priority',
    'projects.col.assignee': 'Assignee',
    'projects.col.type': 'Type',
    'projects.col.estimate': 'Estimate',
    'projects.col.progress': 'Progress',
    'projects.col.comments': 'Comments',
    'projects.col.due': 'Due',
    'projects.status.todo': 'To do',
    'projects.status.in_progress': 'In progress',
    'projects.status.review': 'In review',
    'projects.status.done': 'Done',
    'projects.priority.urgent': 'Urgent',
    'projects.priority.high': 'High',
    'projects.priority.medium': 'Medium',
    'projects.priority.low': 'Low',
    'projects.type.design': 'Design',
    'projects.type.frontend': 'Frontend',
    'projects.type.backend': 'Backend',
    'projects.type.security': 'Security',
    'projects.type.analytics': 'Analytics',
    'projects.type.release': 'Release',
    'projects.board.empty': 'Drag tasks here',
    'projects.drawer.overview': 'Overview',
    'projects.drawer.progress': 'Progress',
    'projects.drawer.description': 'Description',
    'projects.drawer.subtasks': 'Subtasks',
    'projects.drawer.activity': 'Recent activity',
    'projects.drawer.subtask.1': 'Draft design specs',
    'projects.drawer.subtask.2': 'Review with product',
    'projects.drawer.subtask.3': 'Build prototype',
    'projects.drawer.subtask.4': 'Ship to staging',
    'projects.act.updated': '{{who}} updated the task',
    'projects.act.commented': 'Maya left a comment',
    'projects.act.commentBody': '"Let\'s align with the marketing team before shipping."',
    'projects.act.created': 'Task created',
    'projects.activity.placeholder': 'Activity feed for this project',
    /* Reports view */
    'nav.reports': 'Reports',
    'title.reports': 'Reports',
    'reports.eyebrow': 'Analytics',
    'reports.title': 'Reports',
    'reports.sub': 'Track performance, audience, channels, and revenue. Generate a PDF snapshot whenever you need to share with stakeholders.',
    'reports.range.24h': 'Last 24 hours',
    'reports.range.7d': 'Last 7 days',
    'reports.range.30d': 'Last 30 days',
    'reports.range.90d': 'Last 90 days',
    'reports.range.ytd': 'Year to date',
    'reports.range.custom': 'Custom range…',
    'reports.export': 'Export',
    'reports.exportAs': 'Export as',
    'reports.export.pdf': 'PDF report',
    'reports.export.xlsx': 'Excel (.xlsx)',
    'reports.export.csv': 'CSV (.csv)',
    'reports.export.link': 'Shareable link',
    'reports.generatePdf': 'Generate PDF',
    'reports.generating': 'Generating…',
    'reports.pdf.ready': 'PDF report is ready.',
    'reports.pdf.saved': 'Saved as {{name}}',
    'reports.pdf.download': 'Download',
    'reports.pdf.defaultName': 'axis-report-2026-05-19.pdf',
    'reports.tab.overview': 'Overview',
    'reports.tab.audience': 'Audience',
    'reports.tab.channels': 'Channels',
    'reports.tab.downloads': 'Files',
    'reports.viewAll': 'View all',
    'reports.chart.revenue.title': 'Revenue · this week',
    'reports.chart.revenue.sub': 'Compared to last week',
    'reports.chart.sessions.title': 'Sessions',
    'reports.chart.sessions.sub': 'Trailing 20 days',
    'reports.chart.channels.sub': 'Share of sessions by acquisition channel',
    'reports.legend.new': 'New',
    'reports.legend.recurring': 'Recurring',
    'reports.granularity.hour': 'Hour',
    'reports.granularity.day': 'Day',
    'reports.granularity.week': 'Week',
    'reports.audience.split.title': 'New vs returning',
    'reports.audience.split.sub': 'Visit composition',
    'reports.audience.retention.title': 'Cohort retention',
    'reports.audience.retention.sub': '8 weekly cohorts',
    'reports.audience.new': 'New',
    'reports.audience.returning': 'Returning',
    'reports.audience.dormant': 'Dormant',
    'reports.col.channel': 'Channel',
    'reports.col.share': 'Share',
    'reports.col.sessions': 'Sessions',
    'reports.col.change': 'Change',
    'reports.cta.title': 'Generate a polished PDF snapshot',
    'reports.cta.sub': 'Includes every chart, table, and metric in this view. The PDF is paginated, brand-styled, and ready to send.',
    'reports.cta.action': 'Generate PDF',
    'reports.files.title': 'Recent files',
    'reports.files.sub': '{{n}} files in this workspace',
    'reports.upload': 'Upload',
    'reports.download': 'Download',
    'reports.copyLink': 'Copy link',
    'reports.archive': 'Archive'
  },
  ar: {
    /* App-wide */
    'app.brand': 'أكسس',
    'app.search.placeholder': 'ابحث أو انتقل إلى…',
    'app.deploy': 'نشر',
    'app.toggle.theme': 'تبديل المظهر',
    'app.toggle.dir': 'English',
    'app.toggle.sidebar': 'الشريط الجانبي',
    'app.notifications': 'الإشعارات',
    'app.close': 'إغلاق الشريط الجانبي',
    'app.version': 'v2.1',
    /* Sidebar */
    'nav.search': 'بحث',
    'nav.overview': 'نظرة عامة',
    'nav.inbox': 'الوارد',
    'nav.deployments': 'عمليات النشر',
    'nav.tokens': 'المتغيرات',
    'nav.components': 'المكونات',
    'nav.tables': 'الجداول',
    'nav.guidelines': 'الإرشادات',
    'nav.projects': 'المشاريع',
    'nav.team': 'الفريق',
    'nav.settings': 'الإعدادات',
    'nav.section.docs': 'التوثيق',
    'nav.section.workspace': 'مساحة العمل',
    'nav.user.name': 'علي العتيبي',
    'nav.user.org': 'أكسس · الإنتاج',
    /* Page titles */
    'title.dashboard': 'نظرة عامة',
    'title.tokens': 'المتغيرات',
    'title.components': 'المكونات',
    'title.tables': 'الجداول',
    'title.inbox': 'الوارد',
    'title.deployments': 'عمليات النشر',
    'title.guidelines': 'الإرشادات',
    'title.projects': 'المشاريع',
    'title.team': 'الفريق',
    'title.settings': 'الإعدادات',
    /* Dashboard banner & metrics */
    'dash.banner.eyebrow.version': 'الإصدار 2.1.0',
    'dash.banner.eyebrow.released': 'صدر قبل يومين',
    'dash.banner.title': 'الإنتاج في حالة جيدة.',
    'dash.banner.sub': 'آخر 24 ساعة · زمن استجابة وسيط 47 مللي ثانية · 99.94% تشغيل · 0 حوادث.',
    'dash.banner.deploy': 'نشر الفرع الرئيسي',
    'dash.banner.changelog': 'عرض سجل التغييرات',
    'dash.metric.users': 'المستخدمون النشطون',
    'dash.metric.latency': 'زمن الاستجابة (P95)',
    'dash.metric.errors': 'معدل الأخطاء',
    'dash.metric.build': 'وقت البناء (P50)',
    /* Deployments table */
    'dash.deploys.title': 'أحدث عمليات النشر',
    'dash.deploys.sub': 'عبر جميع البيئات · خلال 24 ساعة',
    'dash.deploys.filter.all': 'الكل',
    'dash.deploys.filter.prod': 'إنتاج',
    'dash.deploys.filter.preview': 'معاينة',
    'dash.deploys.filter': 'تصفية',
    'dash.deploys.col.commit': 'الالتزام',
    'dash.deploys.col.branch': 'الفرع',
    'dash.deploys.col.env': 'البيئة',
    'dash.deploys.col.status': 'الحالة',
    'dash.deploys.col.duration': 'المدة',
    'dash.deploys.col.author': 'الناشر',
    'dash.deploys.col.time': 'وقت التشغيل',
    'dash.deploys.status.deployed': 'تم النشر',
    'dash.deploys.status.building': 'قيد البناء',
    'dash.deploys.status.failed': 'فشل',
    'dash.deploys.status.queued': 'في الانتظار',
    /* Activity feed */
    'dash.feed.title': 'النشاط',
    'dash.feed.sub': 'كل من في مساحة عملك',
    'dash.feed.verb.merged': 'دمج',
    'dash.feed.verb.opened': 'فتح',
    'dash.feed.verb.deployed': 'نشر',
    'dash.feed.verb.released': 'أصدر',
    'dash.feed.verb.commented': 'علّق على',
    /* Time spans — Western digits */
    'time.now': 'الآن',
    'time.minutes': 'قبل {{n}} د',
    'time.hours': 'قبل {{n}} س',
    'time.days': 'قبل {{n}} ي',
    /* Docs common */
    'docs.eyebrow': 'التوثيق الحي',
    /* Tokens */
    'tokens.title': 'متغيرات التصميم',
    'tokens.sub': 'كل قيمة في نظام أكسس متاحة كمتغير CSS. تستخدم المكونات هذه المتغيرات عبر var(--token) — لا أرقام عشوائية.',
    'tokens.color.iris.title': 'البنفسجي (آيريس)',
    'tokens.color.iris.sub': 'اللون المميز الوحيد. يُستخدم في الأكشن الأساسي، حلقة التركيز، والتحديد.',
    'tokens.color.neutral.title': 'الألوان المحايدة',
    'tokens.color.neutral.sub': 'سلسلة من 12 درجة بظل بارد خفيف (التدرج 260، التشبع ≤ 0.012).',
    'tokens.color.semantic.title': 'الألوان الدلالية',
    'tokens.color.semantic.sub': 'مضبوطة على نفس مستوى السطوع كالبنفسجي ليتشاركوا نفس المستوى البصري.',
    'tokens.eyebrow.color': 'الألوان',
    'tokens.eyebrow.geometry': 'الهندسة',
    'tokens.eyebrow.elevation': 'الارتفاع',
    'tokens.eyebrow.layout': 'التخطيط',
    'tokens.eyebrow.motion': 'الحركة',
    'tokens.radii.title': 'انحناءات الزوايا',
    'tokens.shadows.title': 'الظلال',
    'tokens.spacing.title': 'المسافات',
    'tokens.spacing.sub': 'شبكة 8 نقاط مع نصف خطوة 4 نقاط.',
    'tokens.motion.title': 'المدد والتسارع',
    'tokens.motion.micro': 'صغير · 120 مللي ثانية',
    'tokens.motion.micro.use': 'تحويم · تركيز · ضغط',
    'tokens.motion.small': 'متوسط · 200 مللي ثانية',
    'tokens.motion.small.use': 'القوائم المنبثقة · القوائم المنسدلة',
    'tokens.motion.large': 'كبير · 320 مللي ثانية',
    'tokens.motion.large.use': 'النوافذ المنبثقة · انتقالات الصفحات',
    'tokens.motion.ease.label': 'تسارع واحد',
    'tokens.motion.ease.note': 'لا ارتداد · لا تجاوز · أبداً',
    /* Components */
    'comp.title': 'المكونات',
    'comp.sub': 'نماذج تفاعلية. اضغط الأزرار. اكتب في الحقول. كل حالة يمكن الوصول إليها.',
    'comp.buttons.title': 'الأزرار',
    'comp.buttons.sub': 'خمسة أنواع، خمسة أحجام، ست حالات.',
    'comp.inputs.title': 'الحقول مع العناوين العائمة',
    'comp.status.title': 'الكبسولات والوسوم والشارات',
    'comp.toggles.title': 'مفاتيح التبديل',
    'comp.eyebrow.action': 'الإجراء',
    'comp.eyebrow.input': 'الإدخال',
    'comp.eyebrow.status': 'الحالة',
    'comp.eyebrow.control': 'التحكم',
    'btn.deploy': 'نشر',
    'btn.settings': 'الإعدادات',
    'btn.filter': 'تصفية',
    'btn.try.beta': 'جرب النسخة التجريبية',
    'btn.delete': 'حذف',
    'btn.click.deploy': 'اضغط للنشر',
    'btn.deploying': 'جارٍ النشر',
    'btn.disabled': 'معطّل',
    'btn.continue': 'متابعة',
    'field.email': 'البريد الإلكتروني',
    'field.password': 'كلمة المرور',
    'field.help.empty': 'فارغ · العنوان النائب مطوي',
    'field.help.filled': 'مملوء · صحيح',
    'field.help.password': 'حقل كلمة المرور',
    'field.err.email': 'أدخل بريداً إلكترونياً صحيحاً.',
    'pill.deployed': 'تم النشر',
    'pill.building': 'قيد البناء',
    'pill.failed': 'فشل',
    'pill.queued': 'في الانتظار',
    'pill.draft': 'مسودة',
    'control.theme': 'المظهر',
    'control.theme.day': 'يوم',
    'control.theme.week': 'أسبوع',
    'control.theme.month': 'شهر',
    'control.notifications': 'الإشعارات',
    'control.shortcut': 'اختصار',
    /* Tables view */
    'tables.title': 'الجداول',
    'tables.sub': 'نمطان: جدول بسيط للملخصات للقراءة فقط، وجدول معقد بعمود أول ثابت، رؤوس قابلة للترتيب، تحديد الصفوف، البحث، الكثافة، والترقيم للبيانات الكثيفة.',
    'tables.simple.eyebrow': 'النمط · بسيط',
    'tables.simple.title': 'جدول لمحة سريعة',
    'tables.simple.sub': 'يُستخدم داخل الكروت للقوائم القصيرة القابلة للمسح. بدون زخرفة — فقط صفوف.',
    'tables.complex.eyebrow': 'النمط · معقد',
    'tables.complex.title': 'جدول كثيف البيانات',
    'tables.complex.sub': 'جداول واسعة بأعمدة كثيرة. العمود الأول يبقى ثابتاً عند التمرير الأفقي، والرأس يبقى ثابتاً عند التمرير العمودي.',
    'tables.rules.eyebrow': 'البُنية',
    'tables.rules.title': 'القواعد',
    'tables.rule.1': 'استخدم حالة الجملة في الرؤوس دائماً.',
    'tables.rule.2': 'الأرقام الجدولية مفعّلة لكل عمود رقمي.',
    'tables.rule.3': 'تُحاذى الأرقام إلى النهاية والنصوص إلى البداية.',
    'tables.rule.4': 'يجب أن يُعرّف العمود الأول الصف. ثبّته في الجداول الواسعة.',
    'tables.rule.5': 'تحويم الصف بظل بنفسجي خفيف، ليس رمادياً ثقيلاً.',
    'tables.rule.6': 'الحالات الفارغة تشرح ما هو ناقص — ليس مجرد "لا بيانات".',
    'tables.rule.7': 'جداول الجوال تتمرر أفقياً بدلاً من الانهيار.',
    /* Table — member directory */
    'tbl.col.member': 'العضو',
    'tbl.col.role': 'الدور',
    'tbl.col.status': 'الحالة',
    'tbl.col.mfa': 'المصادقة الثنائية',
    'tbl.col.region': 'المنطقة',
    'tbl.col.seats': 'المقاعد',
    'tbl.col.cost': 'التكلفة',
    'tbl.col.joined': 'تاريخ الانضمام',
    'tbl.col.lastSeen': 'آخر ظهور',
    'tbl.role.owner': 'مالك',
    'tbl.role.admin': 'مدير',
    'tbl.role.editor': 'محرر',
    'tbl.role.viewer': 'مشاهد',
    'tbl.status.active': 'نشط',
    'tbl.status.invited': 'مدعو',
    'tbl.status.suspended': 'موقوف',
    'tbl.toolbar.search': 'ابحث بالاسم، البريد، المنطقة…',
    'tbl.toolbar.density.compact': 'مضغوط',
    'tbl.toolbar.density.comfortable': 'مريح',
    'tbl.toolbar.density.spacious': 'فسيح',
    'tbl.toolbar.filter': 'تصفية',
    'tbl.toolbar.columns': 'الأعمدة',
    'tbl.toolbar.export': 'تصدير',
    'tbl.bulk.selected': 'تم تحديد {{n}}',
    'tbl.bulk.suspend': 'إيقاف',
    'tbl.bulk.email': 'إرسال بريد',
    'tbl.bulk.clear': 'إلغاء التحديد',
    'tbl.empty.title': 'لا أعضاء يطابقون "{{q}}".',
    'tbl.empty.sub': 'جرب بحثاً آخر.',
    'tbl.actions.for': 'إجراءات على {{name}}',
    'tbl.pagination.info': 'عرض {{from}}–{{to}} من {{total}}',
    'tbl.pagination.page': 'صفحة {{page}} / {{total}}',
    'tbl.pagination.previous': 'السابق',
    'tbl.pagination.next': 'التالي',
    /* Placeholder views */
    'page.inbox.title': 'الوارد',
    'page.inbox.sub': 'القضايا المسندة إليك، الإشارات، وطلبات المراجعة.',
    'page.deployments.title': 'عمليات النشر',
    'page.deployments.sub': 'كل بناء ومعاينة وإصدار عبر البيئات.',
    'page.guidelines.title': 'الإرشادات',
    'page.guidelines.sub': 'الصوت، النبرة، الوصولية، وقواعد المحتوى.',
    'page.projects.title': 'المشاريع',
    'page.projects.sub': 'جميع المشاريع التي يمكنك الوصول إليها.',
    'page.team.title': 'الفريق',
    'page.team.sub': 'الأعضاء، الأدوار، والمقاعد.',
    'page.settings.title': 'الإعدادات',
    'page.settings.sub': 'تفضيلات مساحة العمل والتفضيلات الشخصية.',
    'page.unbuilt.heading': 'هذه الواجهة غير مبنية عمداً.',
    'page.unbuilt.sub': 'صفحات النظرة العامة، المتغيرات، المكونات، والجداول هي الكاملة في هذا النموذج.',
    /* Command palette */
    'palette.search.placeholder': 'ابحث أو انتقل إلى...',
    'palette.section.pages': 'الصفحات',
    'palette.section.actions': 'الإجراءات',
    'palette.section.settings': 'الإعدادات',
    'palette.empty': 'لا نتائج لـ "{{q}}"',
    'palette.foot.navigate': 'تنقّل',
    'palette.foot.open': 'فتح',
    'palette.foot.close': 'إغلاق',
    'palette.item.goto': 'الانتقال إلى {{page}}',
    'palette.item.deploy.prod': 'النشر إلى الإنتاج',
    'palette.item.deploy.preview': 'نشر فرع معاينة',
    'palette.item.rollback': 'التراجع عن آخر نشر',
    'palette.item.create.issue': 'إنشاء قضية',
    'palette.item.invite': 'دعوة زميل',
    'palette.item.theme.light': 'التبديل للمظهر الفاتح',
    'palette.item.theme.dark': 'التبديل للمظهر الداكن',
    'palette.item.signout': 'تسجيل الخروج',
    /* Filter bar */
    'filter.add': 'إضافة فلتر',
    'filter.addLabel': 'أضف فلتر',
    'filter.allApplied': 'تم تطبيق جميع الفلاتر',
    'filter.clearAll': 'مسح الكل',
    'filter.presets': 'المحفوظة',
    'filter.savedPresets': 'الفلاتر المحفوظة',
    'filter.noPresets': 'لا توجد فلاتر محفوظة بعد.',
    'filter.saveCurrent': 'حفظ الحالي كفلتر…',
    'filter.presetNamePlaceholder': 'اسم الفلتر',
    'filter.save': 'حفظ',
    'filter.any': 'الكل',
    'filter.between': 'بين',
    /* Schedule view */
    'nav.schedule': 'الجدول',
    'title.schedule': 'الجدول',
    'schedule.eyebrow': 'خطة الرحلة',
    'schedule.title': 'خطة اليوم',
    'schedule.sub': 'صمّم جدول رحلة يومي بمحطات ومدد ومسار مرئي. اضغط على أي محطة لتعديل تفاصيلها.',
    'schedule.live': 'مباشر',
    'schedule.share': 'مشاركة',
    'schedule.tab.agenda': 'الجدول',
    'schedule.tab.list': 'القائمة',
    'schedule.tab.map': 'الخريطة',
    'schedule.agenda.title': 'جدول اليوم',
    'schedule.agenda.sub': 'اضغط أي محطة للتعديل',
    'schedule.meta.region': 'المدينة المنورة',
    'schedule.meta.updated': 'تم التحديث {{time}}',
    'schedule.addStop': 'إضافة محطة',
    'schedule.stat.stops': 'المحطات',
    'schedule.stat.completed': 'المكتمل',
    'schedule.stat.duration': 'الوقت الإجمالي',
    'schedule.stat.distance': 'المسافة',
    'schedule.map.title': 'خريطة المسار',
    'schedule.map.sub': 'المحطات مرتبطة حسب ترتيب الزيارة',
    'schedule.map.day': 'اليوم',
    'schedule.map.route': 'المسار',
    'schedule.list.title': 'المحطات',
    'schedule.list.sub': '{{n}} محطات مخططة',
    'schedule.type.depart': 'مغادرة',
    'schedule.type.visit': 'زيارة',
    'schedule.type.food': 'طعام',
    'schedule.type.shop': 'تسوق',
    'schedule.type.photo': 'تصوير',
    'schedule.type.hotel': 'فندق',
    'schedule.actions.edit': 'تعديل المحطة',
    'schedule.actions.more': 'المزيد',
    'schedule.actions.markDone': 'تحديد كمنجَز',
    'schedule.actions.duplicate': 'تكرار',
    'schedule.actions.remove': 'إزالة',
    'schedule.drawer.cancel': 'إلغاء',
    'schedule.drawer.save': 'حفظ التغييرات',
    'schedule.drawer.type': 'النوع',
    'schedule.drawer.timing': 'التوقيت',
    'schedule.drawer.startTime': 'وقت البدء',
    'schedule.drawer.duration': 'المدة',
    'schedule.drawer.endTime': 'ينتهي في',
    'schedule.drawer.details': 'التفاصيل',
    'schedule.drawer.placeLabel': 'المكان',
    'schedule.drawer.typeLabel': 'النوع',
    'schedule.minutes': 'د',
    'schedule.dur.min': '{{n}} د',
    'schedule.dur.hr': '{{n}} س',
    'schedule.dur.hm': '{{h}} س {{m}} د',
    'time.am': 'ص',
    'time.pm': 'م',
    /* Row actions (tables) */
    'row.actions.view': 'عرض التفاصيل',
    'row.actions.edit': 'تعديل',
    'row.actions.email': 'إرسال بريد',
    'row.actions.copy': 'نسخ الرابط',
    'row.actions.suspend': 'إيقاف',
    'row.actions.delete': 'حذف',
    'row.drawer.title': 'تفاصيل العضو',
    'row.drawer.activity': 'النشاط الأخير',
    'row.drawer.close': 'إغلاق',
    'row.drawer.save': 'حفظ التغييرات',
    'row.drawer.editing': 'جارٍ التعديل',
    'row.detail.name': 'الاسم',
    'row.detail.email': 'البريد الإلكتروني',
    'row.detail.role': 'الدور',
    'row.detail.status': 'الحالة',
    'row.detail.region': 'المنطقة',
    'row.detail.seats': 'المقاعد',
    'row.detail.cost': 'التكلفة الشهرية',
    'row.detail.joined': 'الانضمام',
    'row.detail.lastSeen': 'آخر ظهور',
    'row.detail.mfa': 'المصادقة الثنائية',
    'row.detail.mfa.on': 'مفعّلة',
    'row.detail.mfa.off': 'معطّلة',
    /* Projects view */
    'projects.project.eyebrow': 'مشروع',
    'projects.project.title': 'منصة النظام الأساسية',
    'projects.project.description': 'مكونات المنصة الأساسية، واجهات البرمجة، والبنية التحتية المشتركة. ملكية فريق الهندسة. الإصدارات تُطلق أسبوعياً.',
    'projects.project.status.active': 'على المسار',
    'projects.meta.due': 'يستحق',
    'projects.search': 'ابحث في المهام…',
    'projects.actions.share': 'مشاركة',
    'projects.actions.duplicate': 'تكرار',
    'projects.actions.export': 'تصدير',
    'projects.actions.archive': 'أرشفة المشروع',
    'projects.actions.newTask': 'مهمة جديدة',
    'projects.stat.tasks': 'المهام',
    'projects.stat.done': 'المكتمل',
    'projects.stat.progress': 'التقدم',
    'projects.stat.velocity': 'السرعة',
    'projects.stat.velocity.sub': 'نقطة / أسبوع',
    'projects.tab.summary': 'الملخص',
    'projects.tab.detailed': 'كل التفاصيل',
    'projects.tab.board': 'اللوحة',
    'projects.tab.activity': 'النشاط',
    'projects.col.task': 'المهمة',
    'projects.col.priority': 'الأولوية',
    'projects.col.assignee': 'المسؤول',
    'projects.col.type': 'النوع',
    'projects.col.estimate': 'التقدير',
    'projects.col.progress': 'التقدم',
    'projects.col.comments': 'التعليقات',
    'projects.col.due': 'يستحق',
    'projects.status.todo': 'للعمل',
    'projects.status.in_progress': 'قيد التنفيذ',
    'projects.status.review': 'قيد المراجعة',
    'projects.status.done': 'منجَز',
    'projects.priority.urgent': 'عاجل',
    'projects.priority.high': 'مرتفع',
    'projects.priority.medium': 'متوسط',
    'projects.priority.low': 'منخفض',
    'projects.type.design': 'تصميم',
    'projects.type.frontend': 'واجهة',
    'projects.type.backend': 'خادم',
    'projects.type.security': 'أمان',
    'projects.type.analytics': 'تحليلات',
    'projects.type.release': 'إصدار',
    'projects.board.empty': 'اسحب المهام هنا',
    'projects.drawer.overview': 'نظرة عامة',
    'projects.drawer.progress': 'التقدم',
    'projects.drawer.description': 'الوصف',
    'projects.drawer.subtasks': 'المهام الفرعية',
    'projects.drawer.activity': 'النشاط الأخير',
    'projects.drawer.subtask.1': 'إعداد مواصفات التصميم',
    'projects.drawer.subtask.2': 'المراجعة مع المنتج',
    'projects.drawer.subtask.3': 'بناء النموذج',
    'projects.drawer.subtask.4': 'النشر للبيئة التجريبية',
    'projects.act.updated': '{{who}} حدّث المهمة',
    'projects.act.commented': 'مايا أضافت تعليقاً',
    'projects.act.commentBody': '«لنتفق مع فريق التسويق قبل النشر.»',
    'projects.act.created': 'تم إنشاء المهمة',
    'projects.activity.placeholder': 'سجل نشاط هذا المشروع',
    /* Reports view */
    'nav.reports': 'التقارير',
    'title.reports': 'التقارير',
    'reports.eyebrow': 'التحليلات',
    'reports.title': 'التقارير',
    'reports.sub': 'تابع الأداء والجمهور والقنوات والإيرادات. أنشئ نسخة PDF كلما احتجت لمشاركتها مع أصحاب الشأن.',
    'reports.range.24h': 'آخر 24 ساعة',
    'reports.range.7d': 'آخر 7 أيام',
    'reports.range.30d': 'آخر 30 يوماً',
    'reports.range.90d': 'آخر 90 يوماً',
    'reports.range.ytd': 'من بداية السنة',
    'reports.range.custom': 'نطاق مخصص…',
    'reports.export': 'تصدير',
    'reports.exportAs': 'تصدير كـ',
    'reports.export.pdf': 'تقرير PDF',
    'reports.export.xlsx': 'إكسل (.xlsx)',
    'reports.export.csv': 'CSV (.csv)',
    'reports.export.link': 'رابط للمشاركة',
    'reports.generatePdf': 'إنشاء PDF',
    'reports.generating': 'جارٍ الإنشاء…',
    'reports.pdf.ready': 'تقرير الـ PDF جاهز.',
    'reports.pdf.saved': 'حُفظ باسم {{name}}',
    'reports.pdf.download': 'تنزيل',
    'reports.pdf.defaultName': 'axis-report-2026-05-19.pdf',
    'reports.tab.overview': 'نظرة عامة',
    'reports.tab.audience': 'الجمهور',
    'reports.tab.channels': 'القنوات',
    'reports.tab.downloads': 'الملفات',
    'reports.viewAll': 'عرض الكل',
    'reports.chart.revenue.title': 'الإيرادات · هذا الأسبوع',
    'reports.chart.revenue.sub': 'مقارنة بالأسبوع الماضي',
    'reports.chart.sessions.title': 'الجلسات',
    'reports.chart.sessions.sub': 'آخر 20 يوماً',
    'reports.chart.channels.sub': 'توزيع الجلسات حسب قناة الاكتساب',
    'reports.legend.new': 'جديد',
    'reports.legend.recurring': 'متكرر',
    'reports.granularity.hour': 'ساعة',
    'reports.granularity.day': 'يوم',
    'reports.granularity.week': 'أسبوع',
    'reports.audience.split.title': 'جديد مقابل عائد',
    'reports.audience.split.sub': 'تركيبة الزيارات',
    'reports.audience.retention.title': 'الاحتفاظ بالمجموعات',
    'reports.audience.retention.sub': '8 مجموعات أسبوعية',
    'reports.audience.new': 'جديد',
    'reports.audience.returning': 'عائد',
    'reports.audience.dormant': 'خامل',
    'reports.col.channel': 'القناة',
    'reports.col.share': 'النسبة',
    'reports.col.sessions': 'الجلسات',
    'reports.col.change': 'التغير',
    'reports.cta.title': 'أنشئ نسخة PDF احترافية',
    'reports.cta.sub': 'تشمل كل المخططات والجداول والمقاييس في هذه الصفحة. الملف مرقّم ومنسّق بهوية النظام وجاهز للإرسال.',
    'reports.cta.action': 'إنشاء PDF',
    'reports.files.title': 'الملفات الأخيرة',
    'reports.files.sub': '{{n}} ملفات في مساحة العمل',
    'reports.upload': 'رفع',
    'reports.download': 'تنزيل',
    'reports.copyLink': 'نسخ الرابط',
    'reports.archive': 'أرشفة'
  }
};

/* ──────────────────────────────────────────────────────────────────────
   React context + hook
   ────────────────────────────────────────────────────────────────────── */
const I18nContext = React.createContext({
  lang: 'en',
  t: k => k
});
function I18nProvider({
  lang,
  children
}) {
  const dict = I18N[lang] || I18N.en;
  const t = React.useCallback((key, vars) => {
    let s = dict[key] ?? I18N.en[key] ?? key;
    if (vars) {
      Object.keys(vars).forEach(k => {
        s = s.replace(new RegExp(`{{\\s*${k}\\s*}}`, 'g'), vars[k]);
      });
    }
    return s;
  }, [dict]);
  return React.createElement(I18nContext.Provider, {
    value: {
      lang,
      t
    }
  }, children);
}
function useT() {
  return React.useContext(I18nContext).t;
}
function useLang() {
  return React.useContext(I18nContext).lang;
}
Object.assign(window, {
  I18N,
  I18nContext,
  I18nProvider,
  useT,
  useLang
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/i18n.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/overlays.jsx
try { (() => {
/* eslint-disable */
/* Overlays — Modal, Drawer (side panel), Menu (popover dropdown), Tooltip.
   All overlays use a portal-style fixed positioning + backdrop where
   appropriate, and respect dir="rtl" via logical properties.
*/

const {
  useState: useStateOL,
  useEffect: useEffectOL,
  useRef: useRefOL,
  useLayoutEffect
} = React;

/* ──────────────────────────────────────────────────────────────────────
   Modal — centered dialog with scrim
   ────────────────────────────────────────────────────────────────────── */
function Modal({
  open,
  onClose,
  title,
  subtitle,
  children,
  footer,
  size = 'md',
  dismissible = true
}) {
  useEffectOL(() => {
    if (!open || !dismissible) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose && onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, dismissible, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "axis-overlay axis-modal-overlay",
    onMouseDown: () => dismissible && onClose && onClose()
  }, /*#__PURE__*/React.createElement("div", {
    className: `axis-modal axis-modal--${size}`,
    role: "dialog",
    "aria-modal": "true",
    onMouseDown: e => e.stopPropagation()
  }, (title || subtitle || dismissible) && /*#__PURE__*/React.createElement("header", {
    className: "axis-modal__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-modal__title-block"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "axis-modal__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    className: "axis-modal__sub"
  }, subtitle)), dismissible && /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    variant: "ghost",
    size: "sm",
    label: "Close",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    className: "axis-modal__body"
  }, children), footer && /*#__PURE__*/React.createElement("footer", {
    className: "axis-modal__foot"
  }, footer)));
}

/* ──────────────────────────────────────────────────────────────────────
   Drawer — slides in from inline-end (right in LTR, left in RTL)
   ────────────────────────────────────────────────────────────────────── */
function Drawer({
  open,
  onClose,
  title,
  subtitle,
  children,
  footer,
  width = 440,
  dismissible = true
}) {
  useEffectOL(() => {
    if (!open || !dismissible) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose && onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, dismissible, onClose]);
  return /*#__PURE__*/React.createElement("div", {
    className: `axis-overlay axis-drawer-overlay${open ? ' is-open' : ''}`,
    "aria-hidden": !open
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-drawer-overlay__scrim",
    onClick: () => dismissible && onClose && onClose()
  }), /*#__PURE__*/React.createElement("aside", {
    className: "axis-drawer",
    style: {
      width
    },
    role: "dialog",
    "aria-modal": "true",
    "aria-hidden": !open
  }, (title || subtitle || dismissible) && /*#__PURE__*/React.createElement("header", {
    className: "axis-drawer__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-drawer__title-block"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "axis-drawer__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    className: "axis-drawer__sub"
  }, subtitle)), dismissible && /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    variant: "ghost",
    size: "sm",
    label: "Close",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    className: "axis-drawer__body"
  }, children), footer && /*#__PURE__*/React.createElement("footer", {
    className: "axis-drawer__foot"
  }, footer)));
}

/* ──────────────────────────────────────────────────────────────────────
   Menu — popover dropdown anchored to a trigger element
   Usage:
     <Menu trigger={(open, ref) => (
       <IconButton ref={ref} icon="more-horizontal" onClick={open} label="Actions" />
     )}>
       {(close) => (<>
         <MenuItem icon="edit" onClick={() => { ...; close(); }}>Edit</MenuItem>
         <MenuItem icon="trash-2" tone="danger" onClick={...}>Delete</MenuItem>
       </>)}
     </Menu>
   ────────────────────────────────────────────────────────────────────── */
function Menu({
  trigger,
  children,
  align = 'end',
  width = 200
}) {
  const [open, setOpen] = useStateOL(false);
  const [pos, setPos] = useStateOL({
    top: 0,
    left: 0
  });
  const anchorRef = useRefOL(null);
  const menuRef = useRefOL(null);
  function handleOpen() {
    if (anchorRef.current) {
      const r = anchorRef.current.getBoundingClientRect();
      const isRTL = document.documentElement.dir === 'rtl';
      // Default position — below anchor, aligned to inline-end of anchor
      let top = r.bottom + 6;
      let left;
      if (isRTL) {
        // In RTL, "align end" means menu's inline-end = anchor's inline-end
        // inline-end is the LEFT side, so menu's right edge = anchor's left edge — flipped.
        // Easiest: align menu's LEFT to anchor's LEFT (start in LTR thinking)
        left = align === 'end' ? r.left : r.right - width;
      } else {
        left = align === 'end' ? r.right - width : r.left;
      }
      setPos({
        top,
        left
      });
    }
    setOpen(true);
  }

  // After menu renders, clamp to viewport (fixes off-screen menus)
  useLayoutEffect(() => {
    if (!open || !menuRef.current) return;
    const m = menuRef.current.getBoundingClientRect();
    const vw = window.innerWidth,
      vh = window.innerHeight;
    const pad = 8;
    let {
      top,
      left
    } = pos;
    let nextTop = top,
      nextLeft = left,
      changed = false;

    // Horizontal clamping
    if (nextLeft + m.width > vw - pad) {
      nextLeft = vw - m.width - pad;
      changed = true;
    }
    if (nextLeft < pad) {
      nextLeft = pad;
      changed = true;
    }

    // Vertical: if menu would overflow bottom, flip above the anchor
    if (nextTop + m.height > vh - pad && anchorRef.current) {
      const r = anchorRef.current.getBoundingClientRect();
      const above = r.top - m.height - 6;
      if (above >= pad) {
        nextTop = above;
        changed = true;
      } else {
        nextTop = Math.max(pad, vh - m.height - pad);
        changed = true;
      }
    }
    if (nextTop < pad) {
      nextTop = pad;
      changed = true;
    }
    if (changed) setPos({
      top: nextTop,
      left: nextLeft
    });
  }, [open]);
  useEffectOL(() => {
    if (!open) return;
    function onDoc(e) {
      if (menuRef.current && menuRef.current.contains(e.target)) return;
      if (anchorRef.current && anchorRef.current.contains(e.target)) return;
      setOpen(false);
    }
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    function onScroll() {
      setOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    window.addEventListener('scroll', onScroll, true);
    window.addEventListener('resize', onScroll);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('scroll', onScroll, true);
      window.removeEventListener('resize', onScroll);
    };
  }, [open]);
  const close = () => setOpen(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, trigger(handleOpen, anchorRef), open && /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    className: "axis-menu",
    style: {
      top: pos.top,
      left: pos.left,
      width
    },
    role: "menu"
  }, typeof children === 'function' ? children(close) : children));
}
function MenuItem({
  icon,
  children,
  onClick,
  tone,
  disabled,
  kbd
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "menuitem",
    disabled: disabled,
    className: `axis-menu__item${tone ? ` axis-menu__item--${tone}` : ''}`,
    onClick: onClick
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, children), kbd && /*#__PURE__*/React.createElement("span", {
    className: "axis-menu__kbd"
  }, kbd));
}
function MenuDivider() {
  return /*#__PURE__*/React.createElement("div", {
    className: "axis-menu__divider"
  });
}
function MenuLabel({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "axis-menu__label"
  }, children);
}
Object.assign(window, {
  Modal,
  Drawer,
  Menu,
  MenuItem,
  MenuDivider,
  MenuLabel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/overlays.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/page-header.jsx
try { (() => {
/* eslint-disable */
/* PageHeader — unified page header used across every view.

   Slots:
     - eyebrow (optional small label above title)
     - breadcrumbs (optional Array<{label, onClick?}>)
     - title (required)
     - subtitle
     - status badges (slot)
     - meta row: avatars, dates, project info
     - primary + secondary action buttons (slot)
     - optional tabs row
     - optional stats grid

   It deliberately stacks vertically with strong rhythm so it feels
   intentional rather than crammed.
*/

function PageHeader({
  eyebrow,
  breadcrumbs,
  title,
  subtitle,
  status,
  meta,
  actions,
  tabs,
  activeTab,
  onTabChange,
  stats,
  variant // 'plain' | 'banner'
}) {
  const t = useT();
  return /*#__PURE__*/React.createElement("header", {
    className: `axis-pageheader axis-pageheader--${variant || 'plain'}`
  }, variant === 'banner' && /*#__PURE__*/React.createElement("div", {
    className: "axis-pageheader__bg",
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement("div", {
    className: "axis-pageheader__body"
  }, breadcrumbs && breadcrumbs.length > 0 && /*#__PURE__*/React.createElement("nav", {
    className: "axis-pageheader__crumbs",
    "aria-label": "Breadcrumb"
  }, breadcrumbs.map((b, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 12,
    className: "axis-pageheader__crumb-sep"
  }), b.onClick ? /*#__PURE__*/React.createElement("button", {
    onClick: b.onClick,
    className: "axis-pageheader__crumb"
  }, b.label) : /*#__PURE__*/React.createElement("span", {
    className: "axis-pageheader__crumb is-current"
  }, b.label)))), /*#__PURE__*/React.createElement("div", {
    className: "axis-pageheader__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-pageheader__title-block"
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "axis-pageheader__eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    className: "axis-pageheader__title-line"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "axis-pageheader__title"
  }, title), status && /*#__PURE__*/React.createElement("div", {
    className: "axis-pageheader__status"
  }, status)), subtitle && /*#__PURE__*/React.createElement("p", {
    className: "axis-pageheader__sub"
  }, subtitle), meta && /*#__PURE__*/React.createElement("div", {
    className: "axis-pageheader__meta"
  }, meta)), actions && /*#__PURE__*/React.createElement("div", {
    className: "axis-pageheader__actions"
  }, actions)), stats && stats.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "axis-pageheader__stats"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `axis-pageheader__stat${s.tone ? ` is-${s.tone}` : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-pageheader__stat-label"
  }, s.label), /*#__PURE__*/React.createElement("div", {
    className: "axis-pageheader__stat-value"
  }, s.value, s.delta && /*#__PURE__*/React.createElement("span", {
    className: `axis-pageheader__stat-delta is-${s.delta > 0 ? 'pos' : 'neg'}`
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.delta > 0 ? 'arrow-up-right' : 'arrow-down-right',
    size: 11
  }), s.deltaLabel || `${s.delta > 0 ? '+' : ''}${s.delta}`))))), tabs && tabs.length > 0 && /*#__PURE__*/React.createElement("nav", {
    className: "axis-pageheader__tabs",
    role: "tablist"
  }, tabs.map(tab => /*#__PURE__*/React.createElement("button", {
    key: tab.key,
    role: "tab",
    "aria-selected": activeTab === tab.key,
    onClick: () => onTabChange && onTabChange(tab.key),
    className: `axis-pageheader__tab${activeTab === tab.key ? ' is-active' : ''}`
  }, tab.icon && /*#__PURE__*/React.createElement(Icon, {
    name: tab.icon,
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, tab.label), tab.count != null && /*#__PURE__*/React.createElement("span", {
    className: "axis-pageheader__tab-count"
  }, tab.count))))));
}

/* ──────────────────────────────────────────────────────────────────────
   <AvatarGroup> — stacked overlapping avatars with a "+N" pill
   ────────────────────────────────────────────────────────────────────── */
function AvatarGroup({
  people,
  max = 4,
  size = 26
}) {
  const shown = people.slice(0, max);
  const extra = Math.max(0, people.length - max);
  return /*#__PURE__*/React.createElement("div", {
    className: "axis-avatar-group",
    style: {
      ['--avatar-size']: `${size}px`
    }
  }, shown.map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "axis-avatar-group__item",
    title: p.name
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: p.initials,
    tone: p.tone,
    size: size
  }))), extra > 0 && /*#__PURE__*/React.createElement("span", {
    className: "axis-avatar-group__more",
    style: {
      width: size,
      height: size,
      fontSize: size * 0.38
    }
  }, "+", extra));
}
Object.assign(window, {
  PageHeader,
  AvatarGroup
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/page-header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/palette.jsx
try { (() => {
/* eslint-disable */
/* Command palette overlay (i18n) */

const {
  useState: useStatePalette,
  useEffect: useEffectPalette,
  useMemo
} = React;
const PALETTE_DEFS = [{
  id: 'go.dashboard',
  section: 'pages',
  icon: 'layout-dashboard',
  titleKey: 'palette.item.goto',
  view: 'dashboard',
  pageKey: 'nav.overview'
}, {
  id: 'go.tokens',
  section: 'pages',
  icon: 'palette',
  titleKey: 'palette.item.goto',
  view: 'tokens',
  pageKey: 'nav.tokens'
}, {
  id: 'go.components',
  section: 'pages',
  icon: 'component',
  titleKey: 'palette.item.goto',
  view: 'components',
  pageKey: 'nav.components'
}, {
  id: 'go.tables',
  section: 'pages',
  icon: 'table-2',
  titleKey: 'palette.item.goto',
  view: 'tables',
  pageKey: 'nav.tables'
}, {
  id: 'go.inbox',
  section: 'pages',
  icon: 'inbox',
  titleKey: 'palette.item.goto',
  view: 'inbox',
  pageKey: 'nav.inbox'
}, {
  id: 'go.deploys',
  section: 'pages',
  icon: 'git-branch',
  titleKey: 'palette.item.goto',
  view: 'deployments',
  pageKey: 'nav.deployments'
}, {
  id: 'deploy.prod',
  section: 'actions',
  icon: 'rocket',
  titleKey: 'palette.item.deploy.prod',
  kbd: '⌘ D'
}, {
  id: 'deploy.prev',
  section: 'actions',
  icon: 'git-branch',
  titleKey: 'palette.item.deploy.preview'
}, {
  id: 'rollback',
  section: 'actions',
  icon: 'history',
  titleKey: 'palette.item.rollback',
  kbd: '⌘ ⇧ R'
}, {
  id: 'create.issue',
  section: 'actions',
  icon: 'plus',
  titleKey: 'palette.item.create.issue',
  kbd: '⌘ N'
}, {
  id: 'invite',
  section: 'actions',
  icon: 'user-plus',
  titleKey: 'palette.item.invite'
}, {
  id: 'theme.light',
  section: 'settings',
  icon: 'sun',
  titleKey: 'palette.item.theme.light',
  action: 'theme-light'
}, {
  id: 'theme.dark',
  section: 'settings',
  icon: 'moon',
  titleKey: 'palette.item.theme.dark',
  action: 'theme-dark'
}, {
  id: 'signout',
  section: 'settings',
  icon: 'log-out',
  titleKey: 'palette.item.signout'
}];
function CommandPalette({
  open,
  onClose,
  onNavigate,
  onSetTheme
}) {
  const t = useT();
  const [q, setQ] = useStatePalette('');
  const [sel, setSel] = useStatePalette(0);
  const items = useMemo(() => PALETTE_DEFS.map(d => ({
    ...d,
    label: d.pageKey ? t(d.titleKey, {
      page: t(d.pageKey)
    }) : t(d.titleKey),
    sectionLabel: t(`palette.section.${d.section}`)
  })), [t]);
  const filtered = useMemo(() => {
    if (!q) return items;
    const s = q.toLowerCase();
    return items.filter(it => it.label.toLowerCase().includes(s) || it.sectionLabel.toLowerCase().includes(s));
  }, [q, items]);
  useEffectPalette(() => {
    setSel(0);
  }, [q, open]);
  useEffectPalette(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSel(s => Math.min(filtered.length - 1, s + 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSel(s => Math.max(0, s - 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        runItem(filtered[sel]);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, filtered, sel]);
  function runItem(item) {
    if (!item) return;
    if (item.view) {
      onNavigate(item.view);
      onClose();
    } else if (item.action === 'theme-light') {
      onSetTheme('light');
      onClose();
    } else if (item.action === 'theme-dark') {
      onSetTheme('dark');
      onClose();
    } else onClose();
  }
  if (!open) return null;

  // Group filtered by section preserving order
  const sections = [];
  filtered.forEach((it, i) => {
    const last = sections[sections.length - 1];
    if (!last || last.section !== it.section) sections.push({
      section: it.section,
      label: it.sectionLabel,
      items: [{
        ...it,
        _i: i
      }]
    });else last.items.push({
      ...it,
      _i: i
    });
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "palette-overlay",
    onMouseDown: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "palette",
    onMouseDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "palette__search"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16
  }), /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: t('palette.search.placeholder')
  }), /*#__PURE__*/React.createElement(Kbd, null, "esc")), /*#__PURE__*/React.createElement("div", {
    className: "palette__list"
  }, sections.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "palette__empty"
  }, t('palette.empty', {
    q
  })), sections.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.section,
    className: "palette__section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "palette__sectionTitle"
  }, s.label), s.items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    className: `palette__row${it._i === sel ? ' is-active' : ''}`,
    onMouseEnter: () => setSel(it._i),
    onClick: () => runItem(it)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, it.label), it.kbd ? /*#__PURE__*/React.createElement("span", {
    className: "palette__kbd"
  }, it.kbd) : /*#__PURE__*/React.createElement(Icon, {
    name: "corner-down-left",
    size: 12,
    className: "palette__return"
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "palette__footer"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Kbd, null, "\u2191"), /*#__PURE__*/React.createElement(Kbd, null, "\u2193"), " ", t('palette.foot.navigate')), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Kbd, null, "\u21B5"), " ", t('palette.foot.open')), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Kbd, null, "esc"), " ", t('palette.foot.close')))));
}
Object.assign(window, {
  CommandPalette
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/palette.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/pickers.jsx
try { (() => {
/* eslint-disable */
/* Date + Time pickers — Western digits everywhere, 12-hour time format. */

const {
  useState: useStatePK,
  useMemo: useMemoPK,
  useEffect: useEffectPK
} = React;

/* Constants — keep weekday/month names switchable per locale */
const WEEKDAYS = {
  en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  ar: ['اث', 'ثل', 'أر', 'خم', 'جم', 'سب', 'أح']
};
const MONTHS = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  ar: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
};

/* ──────────────────────────────────────────────────────────────────────
   DatePicker — month grid; weeks start on Monday
   value: ISO date string 'YYYY-MM-DD' or null
   ────────────────────────────────────────────────────────────────────── */
function DatePicker({
  value,
  onChange,
  minDate,
  maxDate,
  today = new Date()
}) {
  const lang = useLang();
  const t = useT();

  // Track the displayed month; init from value or today
  const initDate = value ? new Date(value) : today;
  const [year, setYear] = useStatePK(initDate.getFullYear());
  const [month, setMonth] = useStatePK(initDate.getMonth());
  const selected = value ? new Date(value) : null;

  // Compute grid: 6 rows × 7 cols
  const grid = useMemoPK(() => {
    const first = new Date(year, month, 1);
    const startDay = (first.getDay() + 6) % 7; // Monday-first (0..6)
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();
    const cells = [];
    // Leading from previous month
    for (let i = startDay - 1; i >= 0; i--) {
      cells.push({
        d: prevMonthDays - i,
        m: month - 1,
        y: month === 0 ? year - 1 : year,
        out: true
      });
    }
    // Current month
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push({
        d,
        m: month,
        y: year
      });
    }
    // Trailing
    while (cells.length < 42) {
      const last = cells[cells.length - 1];
      const next = new Date(last.y, last.m, last.d + 1);
      cells.push({
        d: next.getDate(),
        m: next.getMonth(),
        y: next.getFullYear(),
        out: next.getMonth() !== month
      });
    }
    return cells;
  }, [year, month]);
  function go(delta) {
    let m = month + delta,
      y = year;
    if (m < 0) {
      m = 11;
      y--;
    }
    if (m > 11) {
      m = 0;
      y++;
    }
    setMonth(m);
    setYear(y);
  }
  function isSame(a, b) {
    return a && b && a.getFullYear() === b.y && a.getMonth() === b.m && a.getDate() === b.d;
  }
  function isTodayCell(c) {
    return today.getFullYear() === c.y && today.getMonth() === c.m && today.getDate() === c.d;
  }
  function inRange(c) {
    if (!minDate && !maxDate) return true;
    const dt = new Date(c.y, c.m, c.d);
    if (minDate && dt < new Date(minDate)) return false;
    if (maxDate && dt > new Date(maxDate)) return false;
    return true;
  }
  function pick(c) {
    if (!inRange(c)) return;
    const dt = new Date(c.y, c.m, c.d);
    const iso = `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`;
    onChange && onChange(iso);
  }
  const months = MONTHS[lang] || MONTHS.en;
  const days = WEEKDAYS[lang] || WEEKDAYS.en;
  return /*#__PURE__*/React.createElement("div", {
    className: "axis-datepicker"
  }, /*#__PURE__*/React.createElement("header", {
    className: "axis-datepicker__head"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-left",
    variant: "ghost",
    size: "sm",
    label: "Previous month",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement("div", {
    className: "axis-datepicker__title"
  }, months[month], " ", year), /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-right",
    variant: "ghost",
    size: "sm",
    label: "Next month",
    onClick: () => go(1)
  })), /*#__PURE__*/React.createElement("div", {
    className: "axis-datepicker__weekrow"
  }, days.map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    className: "axis-datepicker__weekday"
  }, d))), /*#__PURE__*/React.createElement("div", {
    className: "axis-datepicker__grid"
  }, grid.map((c, i) => {
    const sel = isSame(selected, c);
    const tod = isTodayCell(c);
    const okR = inRange(c);
    const cls = 'axis-datepicker__cell' + (c.out ? ' is-out' : '') + (sel ? ' is-selected' : '') + (tod ? ' is-today' : '') + (!okR ? ' is-disabled' : '');
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: cls,
      onClick: () => pick(c),
      disabled: !okR
    }, c.d);
  })));
}

/* ──────────────────────────────────────────────────────────────────────
   TimePicker — 12-hour with AM/PM toggle, optional minute step
   value: '14:30' (24h ISO) — onChange returns the same format
   ────────────────────────────────────────────────────────────────────── */
function TimePicker({
  value,
  onChange,
  minuteStep = 5
}) {
  const t = useT();
  const parts = parse24(value || '09:00');
  const [h12, setH12] = useStatePK(parts.h12);
  const [min, setMin] = useStatePK(parts.m);
  const [mer, setMer] = useStatePK(parts.mer); // 'AM' | 'PM'

  useEffectPK(() => {
    const next = format24(h12, min, mer);
    if (next !== value) onChange && onChange(next);
  }, [h12, min, mer]);
  function step(field, delta) {
    if (field === 'h') {
      let n = h12 + delta;
      if (n < 1) n = 12;
      if (n > 12) n = 1;
      setH12(n);
    } else if (field === 'm') {
      let n = min + delta * minuteStep;
      if (n < 0) n = 60 - minuteStep;
      if (n >= 60) n = 0;
      setMin(n);
    }
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "axis-timepicker"
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-timepicker__col"
  }, /*#__PURE__*/React.createElement("button", {
    className: "axis-timepicker__step",
    onClick: () => step('h', 1),
    "aria-label": "Hour up"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-up",
    size: 14
  })), /*#__PURE__*/React.createElement("div", {
    className: "axis-timepicker__val"
  }, pad2(h12)), /*#__PURE__*/React.createElement("button", {
    className: "axis-timepicker__step",
    onClick: () => step('h', -1),
    "aria-label": "Hour down"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14
  }))), /*#__PURE__*/React.createElement("div", {
    className: "axis-timepicker__sep"
  }, ":"), /*#__PURE__*/React.createElement("div", {
    className: "axis-timepicker__col"
  }, /*#__PURE__*/React.createElement("button", {
    className: "axis-timepicker__step",
    onClick: () => step('m', 1),
    "aria-label": "Minute up"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-up",
    size: 14
  })), /*#__PURE__*/React.createElement("div", {
    className: "axis-timepicker__val"
  }, pad2(min)), /*#__PURE__*/React.createElement("button", {
    className: "axis-timepicker__step",
    onClick: () => step('m', -1),
    "aria-label": "Minute down"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14
  }))), /*#__PURE__*/React.createElement("div", {
    className: "axis-timepicker__mer"
  }, /*#__PURE__*/React.createElement("button", {
    className: mer === 'AM' ? 'is-on' : '',
    onClick: () => setMer('AM')
  }, t('time.am') || 'AM'), /*#__PURE__*/React.createElement("button", {
    className: mer === 'PM' ? 'is-on' : '',
    onClick: () => setMer('PM')
  }, t('time.pm') || 'PM')));
}
function pad2(n) {
  return String(n).padStart(2, '0');
}
function parse24(v) {
  const [hStr, mStr] = (v || '00:00').split(':');
  const h24 = Math.max(0, Math.min(23, parseInt(hStr, 10) || 0));
  const m = Math.max(0, Math.min(59, parseInt(mStr, 10) || 0));
  const mer = h24 >= 12 ? 'PM' : 'AM';
  const h12 = (h24 + 11) % 12 + 1;
  return {
    h12,
    m,
    mer
  };
}
function format24(h12, m, mer) {
  let h24 = h12 % 12;
  if (mer === 'PM') h24 += 12;
  return `${pad2(h24)}:${pad2(m)}`;
}

/* ──────────────────────────────────────────────────────────────────────
   Format helpers (public)
   ────────────────────────────────────────────────────────────────────── */
function format12(v, t) {
  const {
    h12,
    m,
    mer
  } = parse24(v);
  const merStr = mer === 'AM' ? t ? t('time.am') || 'AM' : 'AM' : t ? t('time.pm') || 'PM' : 'PM';
  return `${pad2(h12)}:${pad2(m)} ${merStr}`;
}
function formatDateLong(iso, lang) {
  if (!iso) return '';
  const d = new Date(iso);
  const months = MONTHS[lang] || MONTHS.en;
  return lang === 'ar' ? `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}` : `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}
Object.assign(window, {
  DatePicker,
  TimePicker,
  format12,
  formatDateLong,
  MONTHS,
  WEEKDAYS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/pickers.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/project-header.jsx
try { (() => {
/* eslint-disable */
/* ProjectHeader — the BIG hero for project pages.

   Anatomy (top to bottom):
     1. Cover slab — image, gradient, or pattern. ~200px tall on desktop.
     2. Overlay logo/avatar — 80px round mark sits on the cover bottom-start,
        half-overlapping the body below.
     3. Title row — eyebrow, title, status badge, description.
     4. Meta row — owner avatars, due date, tags, stars.
     5. Action row — primary + secondary buttons, star + share + menu.
     6. Stats grid — small KPIs.
     7. Tabs nav.

   Cover options:
     cover: { type: 'image', src: '...' }
     cover: { type: 'gradient', from: '...', to: '...' }
     cover: { type: 'pattern' } -> default subtle dotted iris pattern
*/

function ProjectHeader({
  cover,
  logo,
  // { src? , initials, tone? }
  eyebrow,
  title,
  status,
  description,
  meta,
  primaryAction,
  secondaryAction,
  extraActions,
  // array of icon buttons
  stats,
  tabs,
  activeTab,
  onTabChange,
  starred,
  onStar
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "axis-projhead"
  }, /*#__PURE__*/React.createElement(ProjectCover, {
    cover: cover
  }), /*#__PURE__*/React.createElement("div", {
    className: "axis-projhead__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-projhead__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-projhead__logo"
  }, logo?.src ? /*#__PURE__*/React.createElement("img", {
    src: logo.src,
    alt: "",
    className: "axis-projhead__logo-img"
  }) : /*#__PURE__*/React.createElement("span", {
    className: `axis-projhead__logo-initials axis-projhead__logo-initials--${logo?.tone || 'iris'}`
  }, logo?.initials || '??')), /*#__PURE__*/React.createElement("div", {
    className: "axis-projhead__top-actions"
  }, onStar && /*#__PURE__*/React.createElement("button", {
    className: `axis-projhead__star${starred ? ' is-on' : ''}`,
    onClick: onStar,
    "aria-label": "Star project"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 16
  })), extraActions)), /*#__PURE__*/React.createElement("div", {
    className: "axis-projhead__title-block"
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "axis-projhead__eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    className: "axis-projhead__title-row"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "axis-projhead__title"
  }, title), status && /*#__PURE__*/React.createElement("div", {
    className: "axis-projhead__status"
  }, status)), description && /*#__PURE__*/React.createElement("p", {
    className: "axis-projhead__desc"
  }, description), meta && /*#__PURE__*/React.createElement("div", {
    className: "axis-projhead__meta"
  }, meta)), (primaryAction || secondaryAction) && /*#__PURE__*/React.createElement("div", {
    className: "axis-projhead__actions"
  }, secondaryAction, primaryAction), stats && stats.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "axis-projhead__stats"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "axis-projhead__stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-projhead__stat-label"
  }, s.label), /*#__PURE__*/React.createElement("div", {
    className: "axis-projhead__stat-value"
  }, s.value, s.delta != null && /*#__PURE__*/React.createElement("span", {
    className: `axis-projhead__stat-delta is-${s.delta > 0 ? 'pos' : 'neg'}`
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.delta > 0 ? 'arrow-up-right' : 'arrow-down-right',
    size: 11
  }), s.deltaLabel || `${s.delta > 0 ? '+' : ''}${s.delta}`)), s.sub && /*#__PURE__*/React.createElement("div", {
    className: "axis-projhead__stat-sub"
  }, s.sub)))), tabs && tabs.length > 0 && /*#__PURE__*/React.createElement("nav", {
    className: "axis-projhead__tabs",
    role: "tablist"
  }, tabs.map(tab => /*#__PURE__*/React.createElement("button", {
    key: tab.key,
    role: "tab",
    "aria-selected": activeTab === tab.key,
    className: `axis-projhead__tab${activeTab === tab.key ? ' is-active' : ''}`,
    onClick: () => onTabChange && onTabChange(tab.key)
  }, tab.icon && /*#__PURE__*/React.createElement(Icon, {
    name: tab.icon,
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, tab.label), tab.count != null && /*#__PURE__*/React.createElement("span", {
    className: "axis-projhead__tab-count"
  }, tab.count))))));
}
function ProjectCover({
  cover
}) {
  const c = cover || {
    type: 'pattern'
  };
  let style = {};
  let inner = null;
  if (c.type === 'image' && c.src) {
    style.backgroundImage = `url(${c.src})`;
    style.backgroundSize = 'cover';
    style.backgroundPosition = 'center';
  } else if (c.type === 'gradient') {
    style.background = `linear-gradient(135deg, ${c.from || 'oklch(0.62 0.21 275)'} 0%, ${c.to || 'oklch(0.55 0.21 320)'} 100%)`;
  } else if (c.type === 'solid') {
    style.background = c.color || 'var(--iris-500)';
  } else {
    // pattern: layered iris gradient + dotted SVG
    style.background = 'linear-gradient(135deg, var(--iris-500) 0%, oklch(0.50 0.22 320) 100%)';
    inner = /*#__PURE__*/React.createElement("svg", {
      className: "axis-projhead__cover-pattern",
      width: "100%",
      height: "100%",
      viewBox: "0 0 800 200",
      preserveAspectRatio: "xMidYMid slice",
      "aria-hidden": true
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
      id: "proj-dots",
      width: "24",
      height: "24",
      patternUnits: "userSpaceOnUse"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "2",
      cy: "2",
      r: "1.2",
      fill: "white",
      opacity: "0.18"
    }))), /*#__PURE__*/React.createElement("rect", {
      width: "100%",
      height: "100%",
      fill: "url(#proj-dots)"
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "axis-projhead__cover",
    style: style
  }, inner, /*#__PURE__*/React.createElement("div", {
    className: "axis-projhead__cover-scrim"
  }));
}
Object.assign(window, {
  ProjectHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/project-header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/projects-view.jsx
try { (() => {
/* eslint-disable */
/* Projects view — demonstrates the ProjectHeader hero, plus a multi-pattern
   table area showing the same data three ways:

     1) Summary table  — compact, only essentials, row click → rich Drawer
     2) Detailed table — every column, sticky first col, filter bar
     3) Card grid      — Kanban-style cards by status

   The user picks the view from a segmented control.
*/

const {
  useState: useStatePV,
  useMemo: useMemoPV
} = React;
const TASKS = [{
  id: 't-1',
  title: {
    en: 'Update onboarding hero copy',
    ar: 'تحديث نص الترحيب'
  },
  priority: 'high',
  status: 'in_progress',
  assignee: {
    name: 'Maya Chen',
    ar: 'مايا تشن',
    initials: 'MC',
    tone: 'success'
  },
  due: '2026-05-20',
  estimate: 4,
  type: 'design',
  tag: 'web',
  comments: 3,
  completed: 60
}, {
  id: 't-2',
  title: {
    en: 'Migrate billing API to v2',
    ar: 'ترقية واجهة الفوترة'
  },
  priority: 'urgent',
  status: 'in_progress',
  assignee: {
    name: 'Alex Kim',
    ar: 'أليكس كيم',
    initials: 'AK',
    tone: 'iris'
  },
  due: '2026-05-21',
  estimate: 12,
  type: 'backend',
  tag: 'api',
  comments: 8,
  completed: 40
}, {
  id: 't-3',
  title: {
    en: 'Audit OAuth flow',
    ar: 'مراجعة OAuth'
  },
  priority: 'high',
  status: 'review',
  assignee: {
    name: 'Sam Park',
    ar: 'سام بارك',
    initials: 'SP',
    tone: 'warning'
  },
  due: '2026-05-19',
  estimate: 6,
  type: 'security',
  tag: 'auth',
  comments: 12,
  completed: 90
}, {
  id: 't-4',
  title: {
    en: 'Add Arabic font fallback',
    ar: 'إضافة خط بديل عربي'
  },
  priority: 'medium',
  status: 'in_progress',
  assignee: {
    name: 'Lina Hassan',
    ar: 'لينا حسن',
    initials: 'LH',
    tone: 'iris'
  },
  due: '2026-05-22',
  estimate: 3,
  type: 'design',
  tag: 'i18n',
  comments: 2,
  completed: 25
}, {
  id: 't-5',
  title: {
    en: 'Fix infinite scroll on inbox',
    ar: 'إصلاح التمرير اللانهائي'
  },
  priority: 'high',
  status: 'todo',
  assignee: {
    name: 'Priya Rao',
    ar: 'بريا راو',
    initials: 'PR',
    tone: 'danger'
  },
  due: '2026-05-24',
  estimate: 5,
  type: 'frontend',
  tag: 'web',
  comments: 0,
  completed: 0
}, {
  id: 't-6',
  title: {
    en: 'Quarterly metrics dashboard',
    ar: 'لوحة المقاييس الربعية'
  },
  priority: 'low',
  status: 'todo',
  assignee: {
    name: 'Alex Kim',
    ar: 'أليكس كيم',
    initials: 'AK',
    tone: 'iris'
  },
  due: '2026-05-30',
  estimate: 8,
  type: 'analytics',
  tag: 'data',
  comments: 1,
  completed: 0
}, {
  id: 't-7',
  title: {
    en: 'Release v2.1.0',
    ar: 'إصدار v2.1.0'
  },
  priority: 'urgent',
  status: 'done',
  assignee: {
    name: 'Maya Chen',
    ar: 'مايا تشن',
    initials: 'MC',
    tone: 'success'
  },
  due: '2026-05-17',
  estimate: 2,
  type: 'release',
  tag: 'ops',
  comments: 14,
  completed: 100
}, {
  id: 't-8',
  title: {
    en: 'Improve table density toggle',
    ar: 'تحسين كثافة الجدول'
  },
  priority: 'medium',
  status: 'done',
  assignee: {
    name: 'Sam Park',
    ar: 'سام بارك',
    initials: 'SP',
    tone: 'warning'
  },
  due: '2026-05-16',
  estimate: 3,
  type: 'design',
  tag: 'ds',
  comments: 6,
  completed: 100
}];

/* ──────────────────────────────────────────────────────────────────────
   ProjectsView
   ────────────────────────────────────────────────────────────────────── */
function ProjectsView() {
  const t = useT();
  const lang = useLang();
  const [tab, setTab] = useStatePV('summary');
  const [openTask, setOpenTask] = useStatePV(null);
  const [starred, setStarred] = useStatePV(true);
  const taskCounts = useMemoPV(() => ({
    todo: TASKS.filter(t => t.status === 'todo').length,
    in_progress: TASKS.filter(t => t.status === 'in_progress').length,
    review: TASKS.filter(t => t.status === 'review').length,
    done: TASKS.filter(t => t.status === 'done').length
  }), []);
  const openTaskRow = TASKS.find(t => t.id === openTask);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ProjectHeader, {
    cover: {
      type: 'pattern'
    },
    logo: {
      initials: 'P9',
      tone: 'iris'
    },
    eyebrow: t('projects.project.eyebrow'),
    title: t('projects.project.title'),
    status: /*#__PURE__*/React.createElement(StatusPill, {
      status: "success"
    }, t('projects.project.status.active')),
    description: t('projects.project.description'),
    starred: starred,
    onStar: () => setStarred(s => !s),
    extraActions: /*#__PURE__*/React.createElement(Menu, {
      trigger: (open, ref) => /*#__PURE__*/React.createElement("button", {
        ref: ref,
        className: "axis-projhead__star",
        onClick: open,
        "aria-label": t('row.actions.view')
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "more-horizontal",
        size: 16
      }))
    }, close => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MenuItem, {
      icon: "share-2",
      onClick: close
    }, t('projects.actions.share')), /*#__PURE__*/React.createElement(MenuItem, {
      icon: "copy",
      onClick: close
    }, t('projects.actions.duplicate')), /*#__PURE__*/React.createElement(MenuItem, {
      icon: "download",
      onClick: close
    }, t('projects.actions.export')), /*#__PURE__*/React.createElement(MenuDivider, null), /*#__PURE__*/React.createElement(MenuItem, {
      icon: "archive",
      tone: "danger",
      onClick: close
    }, t('projects.actions.archive')))),
    meta: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 12
    }), /*#__PURE__*/React.createElement(AvatarGroup, {
      people: [{
        initials: 'AK',
        tone: 'iris',
        name: 'Alex'
      }, {
        initials: 'MC',
        tone: 'success',
        name: 'Maya'
      }, {
        initials: 'SP',
        tone: 'warning',
        name: 'Sam'
      }, {
        initials: 'PR',
        tone: 'danger',
        name: 'Priya'
      }, {
        initials: 'LH',
        tone: 'iris',
        name: 'Lina'
      }],
      max: 4,
      size: 22
    })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 12
    }), /*#__PURE__*/React.createElement("strong", null, t('projects.meta.due')), " ", formatDateLong('2026-06-15', lang)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
      name: "git-branch",
      size: 12
    }), /*#__PURE__*/React.createElement("strong", null, "main")), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
      name: "tag",
      size: 12
    }), "v2.1.0")),
    primaryAction: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "md",
      icon: "plus"
    }, t('projects.actions.newTask')),
    secondaryAction: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "md",
      icon: "share-2"
    }, t('projects.actions.share')),
    stats: [{
      label: t('projects.stat.tasks'),
      value: TASKS.length
    }, {
      label: t('projects.stat.done'),
      value: taskCounts.done,
      delta: 2,
      deltaLabel: '+2 this wk'
    }, {
      label: t('projects.stat.progress'),
      value: `${Math.round(TASKS.filter(t => t.status === 'done').length / TASKS.length * 100)}%`
    }, {
      label: t('projects.stat.velocity'),
      value: '14',
      sub: t('projects.stat.velocity.sub')
    }],
    tabs: [{
      key: 'summary',
      icon: 'table',
      label: t('projects.tab.summary')
    }, {
      key: 'detailed',
      icon: 'columns-3',
      label: t('projects.tab.detailed')
    }, {
      key: 'board',
      icon: 'kanban',
      label: t('projects.tab.board')
    }, {
      key: 'activity',
      icon: 'activity',
      label: t('projects.tab.activity'),
      count: 28
    }],
    activeTab: tab,
    onTabChange: setTab
  }), tab === 'summary' && /*#__PURE__*/React.createElement(SummaryTable, {
    onOpen: setOpenTask
  }), tab === 'detailed' && /*#__PURE__*/React.createElement(DetailedTable, {
    onOpen: setOpenTask
  }), tab === 'board' && /*#__PURE__*/React.createElement(BoardView, {
    onOpen: setOpenTask
  }), tab === 'activity' && /*#__PURE__*/React.createElement(ActivityPlaceholder, null), /*#__PURE__*/React.createElement(Drawer, {
    open: !!openTaskRow,
    onClose: () => setOpenTask(null),
    title: openTaskRow ? openTaskRow.title[lang] || openTaskRow.title.en : '',
    subtitle: openTaskRow ? `#${openTaskRow.id} · ${t(`projects.type.${openTaskRow.type}`)}` : '',
    width: 520,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setOpenTask(null)
    }, t('row.drawer.close')), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: "check"
    }, t('row.drawer.save')))
  }, openTaskRow && /*#__PURE__*/React.createElement(TaskDetail, {
    task: openTaskRow
  })));
}

/* ──────────────────────────────────────────────────────────────────────
   Table pattern 1 — Summary
   Compact: 4 columns + chevron. Click anywhere → opens drawer.
   ────────────────────────────────────────────────────────────────────── */
function SummaryTable({
  onOpen
}) {
  const t = useT();
  const lang = useLang();
  const columns = [{
    key: 'title',
    label: t('projects.col.task'),
    minWidth: 240,
    render: (v, r) => /*#__PURE__*/React.createElement("div", {
      className: "task-row"
    }, /*#__PURE__*/React.createElement(PriorityDot, {
      priority: r.priority
    }), /*#__PURE__*/React.createElement("div", {
      className: "task-row__main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "task-row__title"
    }, v[lang] || v.en), /*#__PURE__*/React.createElement("div", {
      className: "task-row__sub"
    }, /*#__PURE__*/React.createElement(Tag, {
      tone: "neutral"
    }, "#", r.tag), r.comments > 0 && /*#__PURE__*/React.createElement("span", {
      className: "task-row__meta"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 11
    }), r.comments))))
  }, {
    key: 'status',
    label: t('tbl.col.status'),
    minWidth: 120,
    render: v => /*#__PURE__*/React.createElement(StatusPill, {
      status: statusToTone(v)
    }, t(`projects.status.${v}`))
  }, {
    key: 'assignee',
    label: t('projects.col.assignee'),
    minWidth: 150,
    render: v => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      initials: v.initials,
      size: 22,
      tone: v.tone
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13
      }
    }, lang === 'ar' ? v.ar : v.name))
  }, {
    key: 'due',
    label: t('projects.col.due'),
    minWidth: 120,
    mono: true,
    render: v => /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--fg-2)'
      }
    }, formatDateLong(v, lang))
  }, {
    key: 'chevron',
    label: '',
    sortable: false,
    minWidth: 32,
    align: 'end',
    render: () => /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 14,
      style: {
        color: 'var(--fg-3)'
      }
    })
  }];
  return /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Table, {
    columns: columns,
    rows: TASKS,
    density: "comfortable",
    onRowClick: r => onOpen(r.id),
    rowKey: r => r.id
  }));
}

/* ──────────────────────────────────────────────────────────────────────
   Table pattern 2 — Detailed
   Every column, sticky first col, sortable, density toggle.
   ────────────────────────────────────────────────────────────────────── */
function DetailedTable({
  onOpen
}) {
  const t = useT();
  const lang = useLang();
  const [density, setDensity] = useStatePV('compact');
  const [sortKey, setSortKey] = useStatePV('due');
  const [sortDir, setSortDir] = useStatePV('asc');
  function sort(k) {
    if (sortKey === k) setSortDir(d => d === 'asc' ? 'desc' : 'asc');else {
      setSortKey(k);
      setSortDir('asc');
    }
  }
  const sorted = [...TASKS].sort((a, b) => {
    const dir = sortDir === 'asc' ? 1 : -1;
    const av = a[sortKey],
      bv = b[sortKey];
    if (typeof av === 'number') return (av - bv) * dir;
    return String(av).localeCompare(String(bv)) * dir;
  });
  const columns = [{
    key: 'title',
    label: t('projects.col.task'),
    sticky: true,
    minWidth: 240,
    render: (v, r) => /*#__PURE__*/React.createElement("div", {
      className: "task-row"
    }, /*#__PURE__*/React.createElement(PriorityDot, {
      priority: r.priority
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500,
        color: 'var(--fg-1)',
        whiteSpace: 'nowrap'
      }
    }, v[lang] || v.en))
  }, {
    key: 'status',
    label: t('tbl.col.status'),
    minWidth: 120,
    render: v => /*#__PURE__*/React.createElement(StatusPill, {
      status: statusToTone(v)
    }, t(`projects.status.${v}`))
  }, {
    key: 'priority',
    label: t('projects.col.priority'),
    minWidth: 100,
    render: v => /*#__PURE__*/React.createElement(Tag, {
      tone: priorityToTone(v)
    }, t(`projects.priority.${v}`))
  }, {
    key: 'assignee',
    label: t('projects.col.assignee'),
    minWidth: 140,
    render: v => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      initials: v.initials,
      size: 20,
      tone: v.tone
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12
      }
    }, lang === 'ar' ? v.ar : v.name))
  }, {
    key: 'type',
    label: t('projects.col.type'),
    minWidth: 100,
    render: v => /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--fg-2)'
      }
    }, t(`projects.type.${v}`))
  }, {
    key: 'estimate',
    label: t('projects.col.estimate'),
    minWidth: 80,
    mono: true,
    align: 'end',
    render: v => /*#__PURE__*/React.createElement("span", null, v, "h")
  }, {
    key: 'completed',
    label: t('projects.col.progress'),
    minWidth: 120,
    render: v => /*#__PURE__*/React.createElement("div", {
      className: "progress-cell"
    }, /*#__PURE__*/React.createElement("div", {
      className: "progress-cell__bar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "progress-cell__fill",
      style: {
        width: `${v}%`,
        background: v === 100 ? 'var(--success-500)' : 'var(--iris-500)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: "progress-cell__num"
    }, v, "%"))
  }, {
    key: 'comments',
    label: t('projects.col.comments'),
    minWidth: 80,
    mono: true,
    align: 'end',
    render: v => v > 0 ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        color: 'var(--fg-2)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 11
    }), v) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--fg-4)'
      }
    }, "\u2014")
  }, {
    key: 'due',
    label: t('projects.col.due'),
    minWidth: 110,
    mono: true,
    render: v => formatDateLong(v, lang)
  }, {
    key: 'actions',
    label: '',
    sortable: false,
    minWidth: 50,
    align: 'end',
    render: (_, r) => /*#__PURE__*/React.createElement(Menu, {
      trigger: (open, ref) => /*#__PURE__*/React.createElement("button", {
        ref: ref,
        className: "axis-iconbtn axis-iconbtn--ghost axis-iconbtn--sm",
        onClick: e => {
          e.stopPropagation();
          open();
        },
        "aria-label": "Actions"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "more-horizontal",
        size: 14
      }))
    }, close => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MenuItem, {
      icon: "eye",
      onClick: () => {
        onOpen(r.id);
        close();
      }
    }, t('row.actions.view')), /*#__PURE__*/React.createElement(MenuItem, {
      icon: "edit",
      onClick: () => {
        onOpen(r.id);
        close();
      }
    }, t('row.actions.edit')), /*#__PURE__*/React.createElement(MenuItem, {
      icon: "copy",
      onClick: close
    }, t('row.actions.copy')), /*#__PURE__*/React.createElement(MenuDivider, null), /*#__PURE__*/React.createElement(MenuItem, {
      icon: "trash-2",
      tone: "danger",
      onClick: close
    }, t('row.actions.delete'))))
  }];
  return /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      marginTop: 14,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-table-toolbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-table-toolbar__search"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 14
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: t('projects.search')
  })), /*#__PURE__*/React.createElement("div", {
    className: "axis-table-toolbar__actions"
  }, /*#__PURE__*/React.createElement(Segmented, {
    value: density,
    onChange: setDensity,
    options: [{
      value: 'compact',
      label: t('tbl.toolbar.density.compact')
    }, {
      value: 'comfortable',
      label: t('tbl.toolbar.density.comfortable')
    }, {
      value: 'spacious',
      label: t('tbl.toolbar.density.spacious')
    }]
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "filter"
  }, t('tbl.toolbar.filter')))), /*#__PURE__*/React.createElement(Table, {
    columns: columns,
    rows: sorted,
    density: density,
    sortKey: sortKey,
    sortDir: sortDir,
    onSort: sort,
    stickyHeader: true,
    stickyFirstCol: true,
    onRowClick: r => onOpen(r.id),
    rowKey: r => r.id
  }));
}

/* ──────────────────────────────────────────────────────────────────────
   Table pattern 3 — Board (Kanban-style cards)
   ────────────────────────────────────────────────────────────────────── */
function BoardView({
  onOpen
}) {
  const t = useT();
  const lang = useLang();
  const columns = ['todo', 'in_progress', 'review', 'done'];
  return /*#__PURE__*/React.createElement("div", {
    className: "board-grid",
    style: {
      marginTop: 14
    }
  }, columns.map(col => {
    const rows = TASKS.filter(r => r.status === col);
    return /*#__PURE__*/React.createElement("div", {
      key: col,
      className: "board-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "board-col__head"
    }, /*#__PURE__*/React.createElement("div", {
      className: "board-col__title"
    }, /*#__PURE__*/React.createElement(StatusPill, {
      status: statusToTone(col)
    }, t(`projects.status.${col}`)), /*#__PURE__*/React.createElement("span", {
      className: "board-col__count"
    }, rows.length)), /*#__PURE__*/React.createElement("button", {
      className: "board-col__add",
      "aria-label": "Add"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    }))), /*#__PURE__*/React.createElement("div", {
      className: "board-col__body"
    }, rows.map(r => /*#__PURE__*/React.createElement("div", {
      key: r.id,
      className: "board-card",
      onClick: () => onOpen(r.id)
    }, /*#__PURE__*/React.createElement("div", {
      className: "board-card__head"
    }, /*#__PURE__*/React.createElement(PriorityDot, {
      priority: r.priority
    }), /*#__PURE__*/React.createElement(Tag, {
      tone: "neutral"
    }, "#", r.tag), /*#__PURE__*/React.createElement("span", {
      className: "board-card__id"
    }, r.id)), /*#__PURE__*/React.createElement("div", {
      className: "board-card__title"
    }, r.title[lang] || r.title.en), r.completed > 0 && r.completed < 100 && /*#__PURE__*/React.createElement("div", {
      className: "progress-cell",
      style: {
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "progress-cell__bar"
    }, /*#__PURE__*/React.createElement("div", {
      className: "progress-cell__fill",
      style: {
        width: `${r.completed}%`,
        background: 'var(--iris-500)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: "progress-cell__num"
    }, r.completed, "%")), /*#__PURE__*/React.createElement("div", {
      className: "board-card__foot"
    }, /*#__PURE__*/React.createElement(Avatar, {
      initials: r.assignee.initials,
      size: 20,
      tone: r.assignee.tone
    }), /*#__PURE__*/React.createElement("span", {
      className: "board-card__due"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 11
    }), formatDateLong(r.due, lang)), r.comments > 0 && /*#__PURE__*/React.createElement("span", {
      className: "board-card__meta"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 11
    }), r.comments)))), rows.length === 0 && /*#__PURE__*/React.createElement("div", {
      className: "board-col__empty"
    }, t('projects.board.empty'))));
  }));
}
function ActivityPlaceholder() {
  const t = useT();
  return /*#__PURE__*/React.createElement(Card, {
    padding: 32,
    style: {
      marginTop: 14,
      display: 'grid',
      placeItems: 'center',
      minHeight: 240
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "activity",
    size: 28,
    style: {
      color: 'var(--fg-4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--fg-2)'
    }
  }, t('projects.activity.placeholder'))));
}

/* ──────────────────────────────────────────────────────────────────────
   TaskDetail — rich drawer body
   ────────────────────────────────────────────────────────────────────── */
function TaskDetail({
  task
}) {
  const t = useT();
  const lang = useLang();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "drawer-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "drawer-section__title"
  }, t('projects.drawer.overview')), /*#__PURE__*/React.createElement("div", {
    className: "task-detail-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "task-detail-cell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "task-detail-cell__label"
  }, t('tbl.col.status')), /*#__PURE__*/React.createElement("div", {
    className: "task-detail-cell__value"
  }, /*#__PURE__*/React.createElement(StatusPill, {
    status: statusToTone(task.status)
  }, t(`projects.status.${task.status}`)))), /*#__PURE__*/React.createElement("div", {
    className: "task-detail-cell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "task-detail-cell__label"
  }, t('projects.col.priority')), /*#__PURE__*/React.createElement("div", {
    className: "task-detail-cell__value"
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: priorityToTone(task.priority)
  }, t(`projects.priority.${task.priority}`)))), /*#__PURE__*/React.createElement("div", {
    className: "task-detail-cell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "task-detail-cell__label"
  }, t('projects.col.assignee')), /*#__PURE__*/React.createElement("div", {
    className: "task-detail-cell__value",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: task.assignee.initials,
    size: 20,
    tone: task.assignee.tone
  }), lang === 'ar' ? task.assignee.ar : task.assignee.name)), /*#__PURE__*/React.createElement("div", {
    className: "task-detail-cell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "task-detail-cell__label"
  }, t('projects.col.due')), /*#__PURE__*/React.createElement("div", {
    className: "task-detail-cell__value",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13
    }
  }, formatDateLong(task.due, lang))), /*#__PURE__*/React.createElement("div", {
    className: "task-detail-cell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "task-detail-cell__label"
  }, t('projects.col.estimate')), /*#__PURE__*/React.createElement("div", {
    className: "task-detail-cell__value",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13
    }
  }, task.estimate, "h")), /*#__PURE__*/React.createElement("div", {
    className: "task-detail-cell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "task-detail-cell__label"
  }, t('projects.col.type')), /*#__PURE__*/React.createElement("div", {
    className: "task-detail-cell__value",
    style: {
      fontSize: 13
    }
  }, t(`projects.type.${task.type}`))))), /*#__PURE__*/React.createElement("div", {
    className: "drawer-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "drawer-section__title"
  }, t('projects.drawer.progress')), /*#__PURE__*/React.createElement("div", {
    className: "progress-cell",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-cell__bar",
    style: {
      height: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-cell__fill",
    style: {
      width: `${task.completed}%`,
      background: task.completed === 100 ? 'var(--success-500)' : 'var(--iris-500)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "progress-cell__num",
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, task.completed, "%"))), /*#__PURE__*/React.createElement("div", {
    className: "drawer-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "drawer-section__title"
  }, t('projects.drawer.description')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--fg-2)',
      lineHeight: 1.65,
      margin: 0
    }
  }, lang === 'ar' ? 'هذه مهمة من مشروع المنصة الأساسية. تتضمن تحديثات على الواجهة وعدة تحسينات في تجربة المستخدم لتعزيز معدل التحويل. تم تحديد متطلبات التصميم بالاتفاق مع فريق المنتج.' : 'This is a task in the core platform project. It includes UI updates and several UX improvements to boost conversion. Design requirements were agreed with the product team.')), /*#__PURE__*/React.createElement("div", {
    className: "drawer-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "drawer-section__title"
  }, t('projects.drawer.subtasks')), /*#__PURE__*/React.createElement("div", {
    className: "subtasks"
  }, /*#__PURE__*/React.createElement("label", {
    className: "subtask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "axis-check is-on"
  }, /*#__PURE__*/React.createElement("span", {
    className: "axis-check__box"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 10
  }))), /*#__PURE__*/React.createElement("span", null, t('projects.drawer.subtask.1'))), /*#__PURE__*/React.createElement("label", {
    className: "subtask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "axis-check is-on"
  }, /*#__PURE__*/React.createElement("span", {
    className: "axis-check__box"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 10
  }))), /*#__PURE__*/React.createElement("span", null, t('projects.drawer.subtask.2'))), /*#__PURE__*/React.createElement("label", {
    className: "subtask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "axis-check"
  }, /*#__PURE__*/React.createElement("span", {
    className: "axis-check__box"
  })), /*#__PURE__*/React.createElement("span", null, t('projects.drawer.subtask.3'))), /*#__PURE__*/React.createElement("label", {
    className: "subtask"
  }, /*#__PURE__*/React.createElement("span", {
    className: "axis-check"
  }, /*#__PURE__*/React.createElement("span", {
    className: "axis-check__box"
  })), /*#__PURE__*/React.createElement("span", null, t('projects.drawer.subtask.4'))))), /*#__PURE__*/React.createElement("div", {
    className: "drawer-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "drawer-section__title"
  }, t('projects.drawer.activity')), /*#__PURE__*/React.createElement(Timeline, {
    dense: true,
    items: [{
      id: 'a1',
      icon: 'edit-3',
      tone: 'iris',
      title: t('projects.act.updated', {
        who: lang === 'ar' ? task.assignee.ar : task.assignee.name
      }),
      time: t('time.minutes', {
        n: 12
      })
    }, {
      id: 'a2',
      icon: 'message-circle',
      tone: 'info',
      title: t('projects.act.commented'),
      sub: t('projects.act.commentBody'),
      time: t('time.hours', {
        n: 1
      })
    }, {
      id: 'a3',
      icon: 'plus',
      tone: 'success',
      title: t('projects.act.created'),
      time: t('time.days', {
        n: 2
      })
    }]
  })));
}

/* ── helpers ────────────────────────────────────────────────────────── */
function PriorityDot({
  priority
}) {
  const colors = {
    urgent: 'var(--danger-500)',
    high: 'var(--warning-500)',
    medium: 'var(--info-500)',
    low: 'var(--fg-4)'
  };
  return /*#__PURE__*/React.createElement("span", {
    className: "priority-dot",
    style: {
      background: colors[priority] || 'var(--fg-4)'
    }
  });
}
function statusToTone(s) {
  if (s === 'done') return 'success';
  if (s === 'in_progress') return 'warning';
  if (s === 'review') return 'info';
  return 'neutral';
}
function priorityToTone(p) {
  if (p === 'urgent') return 'danger';
  if (p === 'high') return 'iris';
  if (p === 'medium') return 'neutral';
  return 'neutral';
}
Object.assign(window, {
  ProjectsView
});
window.PROJECT_TASKS = TASKS;
window.TaskDetail = TaskDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/projects-view.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/reports-view.jsx
try { (() => {
/* eslint-disable */
/* Reports view — analytics dashboard with KPIs, charts, downloads,
   PDF export. Keys match those defined in i18n.jsx under "Reports view". */

const {
  useState: useStateRV,
  useMemo: useMemoRV
} = React;
const REPORT_FILES = [{
  id: 'r-1',
  name: {
    en: 'Q2 platform usage report',
    ar: 'تقرير استخدام المنصة Q2'
  },
  type: 'pdf',
  size: '2.4 MB',
  author: 'Maya Chen',
  date: '2026-05-17'
}, {
  id: 'r-2',
  name: {
    en: 'Weekly deployment summary',
    ar: 'ملخص النشر الأسبوعي'
  },
  type: 'pdf',
  size: '480 KB',
  author: 'Alex Kim',
  date: '2026-05-16'
}, {
  id: 'r-3',
  name: {
    en: 'Customer cohort analysis',
    ar: 'تحليل قطاعات العملاء'
  },
  type: 'xlsx',
  size: '1.1 MB',
  author: 'Priya Rao',
  date: '2026-05-15'
}, {
  id: 'r-4',
  name: {
    en: 'API response time benchmarks',
    ar: 'معايير زمن الاستجابة'
  },
  type: 'csv',
  size: '320 KB',
  author: 'Sam Park',
  date: '2026-05-14'
}, {
  id: 'r-5',
  name: {
    en: 'Security audit log',
    ar: 'سجل تدقيق الأمان'
  },
  type: 'pdf',
  size: '3.7 MB',
  author: 'Lina Hassan',
  date: '2026-05-12'
}, {
  id: 'r-6',
  name: {
    en: 'Brand guidelines v2.1',
    ar: 'دليل الهوية v2.1'
  },
  type: 'pdf',
  size: '8.2 MB',
  author: 'Maya Chen',
  date: '2026-05-10'
}];
const FILE_ICONS = {
  pdf: {
    icon: 'file-text',
    color: 'var(--danger-500)',
    bg: 'var(--feedback-danger-bg)'
  },
  xlsx: {
    icon: 'file-spreadsheet',
    color: 'var(--success-500)',
    bg: 'var(--feedback-success-bg)'
  },
  csv: {
    icon: 'file-spreadsheet',
    color: 'var(--info-500)',
    bg: 'var(--feedback-info-bg)'
  }
};
const CHANNELS = [{
  key: 'organic',
  label: {
    en: 'Organic search',
    ar: 'بحث طبيعي'
  },
  sessions: 4820,
  share: 38,
  change: 12,
  color: 'var(--iris-500)'
}, {
  key: 'direct',
  label: {
    en: 'Direct',
    ar: 'مباشر'
  },
  sessions: 2940,
  share: 23,
  change: 4,
  color: 'var(--success-500)'
}, {
  key: 'referral',
  label: {
    en: 'Referral',
    ar: 'إحالات'
  },
  sessions: 1820,
  share: 14,
  change: -2,
  color: 'var(--warning-500)'
}, {
  key: 'social',
  label: {
    en: 'Social',
    ar: 'تواصل اجتماعي'
  },
  sessions: 1640,
  share: 13,
  change: 18,
  color: 'var(--info-500)'
}, {
  key: 'email',
  label: {
    en: 'Email',
    ar: 'البريد'
  },
  sessions: 1280,
  share: 10,
  change: 6,
  color: 'var(--danger-500)'
}, {
  key: 'other',
  label: {
    en: 'Other',
    ar: 'أخرى'
  },
  sessions: 320,
  share: 2,
  change: 0,
  color: 'var(--fg-4)'
}];
function ReportsView() {
  const t = useT();
  const lang = useLang();
  const [range, setRange] = useStateRV('7d');
  const [tab, setTab] = useStateRV('overview');
  const [generating, setGenerating] = useStateRV(false);
  const [downloading, setDownloading] = useStateRV(null);
  const [progress, setProgress] = useStateRV(0);
  function simulateDownload(id) {
    setDownloading(id);
    setProgress(0);
    const step = () => setProgress(p => {
      if (p >= 100) {
        setDownloading(null);
        return 0;
      }
      setTimeout(step, 80);
      return p + 8;
    });
    setTimeout(step, 80);
  }
  function exportPDF() {
    setGenerating(true);
    setTimeout(() => {
      document.body.classList.add('is-printing-report');
      setTimeout(() => {
        window.print();
        setTimeout(() => {
          document.body.classList.remove('is-printing-report');
          setGenerating(false);
        }, 500);
      }, 80);
    }, 600);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: t('reports.eyebrow'),
    breadcrumbs: [{
      label: t('app.brand'),
      onClick: () => {}
    }, {
      label: t('reports.title')
    }],
    title: t('reports.title'),
    subtitle: t('reports.sub'),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Menu, {
      trigger: (open, ref) => /*#__PURE__*/React.createElement("button", {
        ref: ref,
        className: "axis-datetime-chip",
        onClick: open
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "calendar",
        size: 14
      }), /*#__PURE__*/React.createElement("span", null, t(`reports.range.${range}`)), /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-down",
        size: 12
      }))
    }, close => /*#__PURE__*/React.createElement(React.Fragment, null, ['24h', '7d', '30d', '90d', 'ytd'].map(r => /*#__PURE__*/React.createElement(MenuItem, {
      key: r,
      onClick: () => {
        setRange(r);
        close();
      }
    }, t(`reports.range.${r}`))), /*#__PURE__*/React.createElement(MenuDivider, null), /*#__PURE__*/React.createElement(MenuItem, {
      icon: "calendar-range",
      onClick: close
    }, t('reports.range.custom')))), /*#__PURE__*/React.createElement(Menu, {
      trigger: (open, ref) => /*#__PURE__*/React.createElement("button", {
        ref: ref,
        className: "axis-btn axis-btn--secondary axis-btn--md",
        onClick: open
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "download",
        size: 16
      }), /*#__PURE__*/React.createElement("span", null, t('reports.export')), /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-down",
        size: 12
      })),
      width: 200
    }, close => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MenuLabel, null, t('reports.exportAs')), /*#__PURE__*/React.createElement(MenuItem, {
      icon: "file-text",
      onClick: () => {
        exportPDF();
        close();
      }
    }, t('reports.export.pdf')), /*#__PURE__*/React.createElement(MenuItem, {
      icon: "file-spreadsheet",
      onClick: close
    }, t('reports.export.xlsx')), /*#__PURE__*/React.createElement(MenuItem, {
      icon: "file-spreadsheet",
      onClick: close
    }, t('reports.export.csv')), /*#__PURE__*/React.createElement(MenuDivider, null), /*#__PURE__*/React.createElement(MenuItem, {
      icon: "link",
      onClick: close
    }, t('reports.export.link')))), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "md",
      icon: generating ? undefined : 'file-output',
      loading: generating,
      onClick: exportPDF
    }, generating ? t('reports.generating') : t('reports.generatePdf'))),
    stats: [{
      label: t('dash.metric.users'),
      value: '12,489',
      delta: 4,
      deltaLabel: '+4.2%'
    }, {
      label: t('reports.legend.new'),
      value: '3,180',
      delta: 8,
      deltaLabel: '+8.1%'
    }, {
      label: t('reports.tab.channels'),
      value: '6',
      delta: 1,
      deltaLabel: '+1'
    }, {
      label: t('reports.viewAll'),
      value: '$48,290',
      delta: 12,
      deltaLabel: '+12%'
    }],
    tabs: [{
      key: 'overview',
      icon: 'pie-chart',
      label: t('reports.tab.overview')
    }, {
      key: 'audience',
      icon: 'users',
      label: t('reports.tab.audience')
    }, {
      key: 'channels',
      icon: 'arrow-right-left',
      label: t('reports.tab.channels')
    }, {
      key: 'downloads',
      icon: 'folder',
      label: t('reports.tab.downloads'),
      count: REPORT_FILES.length
    }],
    activeTab: tab,
    onTabChange: setTab
  }), tab === 'overview' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "reports-grid"
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 20,
    className: "report-chart-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "report-chart-card__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "report-chart-card__title"
  }, t('reports.chart.revenue.title')), /*#__PURE__*/React.createElement("div", {
    className: "report-chart-card__sub"
  }, t('reports.chart.revenue.sub'))), /*#__PURE__*/React.createElement(Menu, {
    trigger: (open, ref) => /*#__PURE__*/React.createElement("button", {
      ref: ref,
      className: "axis-iconbtn axis-iconbtn--ghost axis-iconbtn--md",
      onClick: open,
      "aria-label": "More"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "more-horizontal",
      size: 16
    }))
  }, close => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MenuItem, {
    icon: "download",
    onClick: close
  }, t('reports.export')), /*#__PURE__*/React.createElement(MenuItem, {
    icon: "copy",
    onClick: close
  }, t('reports.copyLink'))))), /*#__PURE__*/React.createElement(RevenueChart, null), /*#__PURE__*/React.createElement("div", {
    className: "report-chart-card__legend"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: 'var(--iris-500)'
    }
  }), t('reports.legend.new')), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: 'var(--fg-4)'
    }
  }), t('reports.legend.recurring')))), /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    className: "report-chart-card__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "report-chart-card__title"
  }, t('reports.tab.channels')), /*#__PURE__*/React.createElement("div", {
    className: "report-chart-card__sub"
  }, t('reports.chart.channels.sub')))), /*#__PURE__*/React.createElement(Donut, {
    segments: CHANNELS.map(c => ({
      label: c.label[lang] || c.label.en,
      value: c.sessions,
      color: c.color
    }))
  }))), /*#__PURE__*/React.createElement(ReportsCTA, {
    generating: generating,
    onGenerate: exportPDF
  })), tab === 'audience' && /*#__PURE__*/React.createElement(Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    className: "report-chart-card__head",
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "report-chart-card__title"
  }, t('reports.audience.split.title')), /*#__PURE__*/React.createElement("div", {
    className: "report-chart-card__sub"
  }, t('reports.audience.split.sub')))), /*#__PURE__*/React.createElement(AudienceBars, null)), tab === 'channels' && /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement(Table, {
    columns: [{
      key: 'channel',
      label: t('reports.col.channel'),
      minWidth: 200,
      render: (_, r) => /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 10
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 10,
          height: 10,
          borderRadius: 3,
          background: r.color,
          flexShrink: 0
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500,
          color: 'var(--fg-1)'
        }
      }, r.label[lang] || r.label.en))
    }, {
      key: 'share',
      label: t('reports.col.share'),
      minWidth: 140,
      align: 'start',
      render: v => /*#__PURE__*/React.createElement("div", {
        className: "progress-cell",
        style: {
          minWidth: 100
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "progress-cell__bar"
      }, /*#__PURE__*/React.createElement("div", {
        className: "progress-cell__fill",
        style: {
          width: `${v * 2}%`,
          background: 'var(--iris-500)'
        }
      })), /*#__PURE__*/React.createElement("span", {
        className: "progress-cell__num"
      }, v, "%"))
    }, {
      key: 'sessions',
      label: t('reports.col.sessions'),
      minWidth: 110,
      align: 'end',
      mono: true,
      render: v => v.toLocaleString('en-US')
    }, {
      key: 'change',
      label: t('reports.col.change'),
      minWidth: 100,
      align: 'end',
      render: v => v === 0 ? /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--fg-3)'
        }
      }, "\u2014") : /*#__PURE__*/React.createElement("span", {
        className: `axis-pill axis-pill--${v > 0 ? 'success' : 'danger'}`,
        style: {
          padding: '1px 7px',
          fontSize: 11
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: v > 0 ? 'arrow-up-right' : 'arrow-down-right',
        size: 11
      }), v > 0 ? '+' : '', v, "%")
    }],
    rows: CHANNELS.map(c => ({
      id: c.key,
      ...c
    })),
    density: "comfortable",
    rowKey: r => r.id
  })), tab === 'downloads' && /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    className: "reports-files"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reports-files__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "reports-files__title"
  }, t('reports.files.title')), /*#__PURE__*/React.createElement("div", {
    className: "reports-files__sub"
  }, t('reports.files.sub', {
    n: REPORT_FILES.length
  }))), /*#__PURE__*/React.createElement("div", {
    className: "reports-files__head-actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "upload"
  }, t('reports.upload')))), /*#__PURE__*/React.createElement("div", {
    className: "reports-files__list"
  }, REPORT_FILES.map(f => {
    const fi = FILE_ICONS[f.type] || FILE_ICONS.pdf;
    const isActive = downloading === f.id;
    return /*#__PURE__*/React.createElement("div", {
      key: f.id,
      className: "report-file"
    }, /*#__PURE__*/React.createElement("div", {
      className: "report-file__icon",
      style: {
        background: fi.bg,
        color: fi.color
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: fi.icon,
      size: 20
    })), /*#__PURE__*/React.createElement("div", {
      className: "report-file__body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "report-file__name"
    }, f.name[lang] || f.name.en), /*#__PURE__*/React.createElement("div", {
      className: "report-file__meta"
    }, /*#__PURE__*/React.createElement("span", {
      className: "report-file__type"
    }, /*#__PURE__*/React.createElement("code", {
      className: "dep-commit"
    }, f.type.toUpperCase())), /*#__PURE__*/React.createElement("span", null, f.size), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, f.author), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, formatDateLong(f.date, lang))), isActive && /*#__PURE__*/React.createElement("div", {
      className: "progress-cell",
      style: {
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "progress-cell__bar",
      style: {
        height: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "progress-cell__fill",
      style: {
        width: `${progress}%`,
        background: 'var(--iris-500)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: "progress-cell__num"
    }, progress, "%"))), /*#__PURE__*/React.createElement("div", {
      className: "report-file__actions"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: isActive ? 'iris-soft' : 'secondary',
      size: "sm",
      icon: isActive ? undefined : 'download',
      loading: isActive,
      onClick: () => !isActive && simulateDownload(f.id)
    }, isActive ? t('reports.generating') : t('reports.download')), /*#__PURE__*/React.createElement(Menu, {
      trigger: (open, ref) => /*#__PURE__*/React.createElement("button", {
        ref: ref,
        className: "axis-iconbtn axis-iconbtn--ghost axis-iconbtn--sm",
        onClick: open,
        "aria-label": "More"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "more-horizontal",
        size: 14
      }))
    }, close => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MenuItem, {
      icon: "copy",
      onClick: close
    }, t('reports.copyLink')), /*#__PURE__*/React.createElement(MenuItem, {
      icon: "archive",
      onClick: close
    }, t('reports.archive'))))));
  }))));
}

/* ──────────────────────────────────────────────────────────────────────
   CTA card — invites generating the PDF
   ────────────────────────────────────────────────────────────────────── */
function ReportsCTA({
  generating,
  onGenerate
}) {
  const t = useT();
  return /*#__PURE__*/React.createElement(Card, {
    padding: 20,
    className: "reports-cta",
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reports-cta__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-output",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    className: "reports-cta__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reports-cta__title"
  }, t('reports.cta.title')), /*#__PURE__*/React.createElement("div", {
    className: "reports-cta__sub"
  }, t('reports.cta.sub'))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    icon: generating ? undefined : 'download',
    loading: generating,
    onClick: onGenerate
  }, generating ? t('reports.generating') : t('reports.cta.action')));
}

/* ──────────────────────────────────────────────────────────────────────
   RevenueChart — multi-line chart
   ────────────────────────────────────────────────────────────────────── */
function RevenueChart() {
  const W = 640,
    H = 220;
  const padding = {
    l: 32,
    r: 16,
    t: 12,
    b: 28
  };
  const points = [42, 58, 49, 71, 65, 82, 78, 92, 88, 104, 118, 132];
  const prev = [38, 44, 46, 52, 50, 58, 62, 64, 70, 72, 80, 88];
  const labels = ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10', 'M11', 'M12'];
  const max = 140;
  const xStep = (W - padding.l - padding.r) / (points.length - 1);
  const yScale = v => H - padding.b - v / max * (H - padding.b - padding.t);
  const pathFor = arr => arr.map((v, i) => `${i === 0 ? 'M' : 'L'}${padding.l + i * xStep},${yScale(v)}`).join(' ');
  const areaFor = arr => `${pathFor(arr)} L${padding.l + (arr.length - 1) * xStep},${H - padding.b} L${padding.l},${H - padding.b} Z`;
  return /*#__PURE__*/React.createElement("svg", {
    className: "report-chart",
    viewBox: `0 0 ${W} ${H}`,
    role: "img"
  }, [0, 35, 70, 105, 140].map(v => /*#__PURE__*/React.createElement("g", {
    key: v
  }, /*#__PURE__*/React.createElement("line", {
    x1: padding.l,
    x2: W - padding.r,
    y1: yScale(v),
    y2: yScale(v),
    stroke: "var(--border-subtle)",
    strokeWidth: "0.7"
  }), /*#__PURE__*/React.createElement("text", {
    x: padding.l - 6,
    y: yScale(v) + 4,
    fontFamily: "var(--font-mono)",
    fontSize: "9",
    fill: "var(--fg-3)",
    textAnchor: "end",
    style: {
      unicodeBidi: 'isolate'
    }
  }, v, "k"))), labels.map((l, i) => /*#__PURE__*/React.createElement("text", {
    key: i,
    x: padding.l + i * xStep,
    y: H - padding.b + 16,
    fontFamily: "var(--font-mono)",
    fontSize: "9",
    fill: "var(--fg-3)",
    textAnchor: "middle",
    style: {
      unicodeBidi: 'isolate'
    }
  }, l)), /*#__PURE__*/React.createElement("path", {
    d: pathFor(prev),
    fill: "none",
    stroke: "var(--fg-4)",
    strokeWidth: "1.5",
    strokeDasharray: "4 4"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "rev-grad",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "var(--iris-500)",
    stopOpacity: "0.30"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "var(--iris-500)",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: areaFor(points),
    fill: "url(#rev-grad)"
  }), /*#__PURE__*/React.createElement("path", {
    d: pathFor(points),
    fill: "none",
    stroke: "var(--iris-500)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), points.map((v, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: padding.l + i * xStep,
    cy: yScale(v),
    r: "3",
    fill: "var(--surface-1)",
    stroke: "var(--iris-500)",
    strokeWidth: "1.5"
  })));
}

/* ──────────────────────────────────────────────────────────────────────
   AudienceBars — stacked bar chart of new vs returning vs dormant
   ────────────────────────────────────────────────────────────────────── */
function AudienceBars() {
  const t = useT();
  const weeks = [{
    w: 'W1',
    n: 38,
    r: 52,
    d: 10
  }, {
    w: 'W2',
    n: 42,
    r: 48,
    d: 10
  }, {
    w: 'W3',
    n: 35,
    r: 55,
    d: 10
  }, {
    w: 'W4',
    n: 48,
    r: 44,
    d: 8
  }, {
    w: 'W5',
    n: 52,
    r: 40,
    d: 8
  }, {
    w: 'W6',
    n: 58,
    r: 36,
    d: 6
  }, {
    w: 'W7',
    n: 56,
    r: 38,
    d: 6
  }, {
    w: 'W8',
    n: 62,
    r: 32,
    d: 6
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "audience-bars"
  }, weeks.map(w => /*#__PURE__*/React.createElement("div", {
    key: w.w,
    className: "audience-bars__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "audience-bars__stack"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: `${w.n}%`,
      background: 'var(--iris-500)'
    },
    title: `${t('reports.audience.new')}: ${w.n}%`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: `${w.r}%`,
      background: 'var(--iris-300)'
    },
    title: `${t('reports.audience.returning')}: ${w.r}%`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: `${w.d}%`,
      background: 'var(--neutral-300)'
    },
    title: `${t('reports.audience.dormant')}: ${w.d}%`
  })), /*#__PURE__*/React.createElement("div", {
    className: "audience-bars__label"
  }, w.w)))), /*#__PURE__*/React.createElement("div", {
    className: "report-chart-card__legend",
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: 'var(--iris-500)'
    }
  }), t('reports.audience.new')), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: 'var(--iris-300)'
    }
  }), t('reports.audience.returning')), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: 'var(--neutral-300)'
    }
  }), t('reports.audience.dormant'))));
}

/* ──────────────────────────────────────────────────────────────────────
   Donut chart
   ────────────────────────────────────────────────────────────────────── */
function Donut({
  segments
}) {
  const total = segments.reduce((s, x) => s + x.value, 0);
  let acc = 0;
  const R = 70,
    r = 46,
    cx = 100,
    cy = 100;
  return /*#__PURE__*/React.createElement("div", {
    className: "report-donut"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 200",
    className: "report-donut__svg"
  }, segments.map((s, i) => {
    const startA = acc / total * Math.PI * 2 - Math.PI / 2;
    acc += s.value;
    const endA = acc / total * Math.PI * 2 - Math.PI / 2;
    const large = s.value / total > 0.5 ? 1 : 0;
    const x1 = cx + R * Math.cos(startA),
      y1 = cy + R * Math.sin(startA);
    const x2 = cx + R * Math.cos(endA),
      y2 = cy + R * Math.sin(endA);
    const x3 = cx + r * Math.cos(endA),
      y3 = cy + r * Math.sin(endA);
    const x4 = cx + r * Math.cos(startA),
      y4 = cy + r * Math.sin(startA);
    const d = `M${x1},${y1} A${R},${R} 0 ${large} 1 ${x2},${y2} L${x3},${y3} A${r},${r} 0 ${large} 0 ${x4},${y4} Z`;
    return /*#__PURE__*/React.createElement("path", {
      key: i,
      d: d,
      fill: s.color
    });
  }), /*#__PURE__*/React.createElement("text", {
    x: "100",
    y: "95",
    textAnchor: "middle",
    fontFamily: "var(--font-display)",
    fontSize: "22",
    fontWeight: "600",
    fill: "var(--fg-1)",
    style: {
      unicodeBidi: 'isolate'
    }
  }, total.toLocaleString('en-US')), /*#__PURE__*/React.createElement("text", {
    x: "100",
    y: "115",
    textAnchor: "middle",
    fontFamily: "var(--font-mono)",
    fontSize: "9",
    fill: "var(--fg-3)",
    letterSpacing: "0.08em",
    style: {
      textTransform: 'uppercase'
    }
  }, "TOTAL")), /*#__PURE__*/React.createElement("ul", {
    className: "report-donut__legend"
  }, segments.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: s.color
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "report-donut__label"
  }, s.label), /*#__PURE__*/React.createElement("span", {
    className: "report-donut__value"
  }, Math.round(s.value / total * 100), "%")))));
}
Object.assign(window, {
  ReportsView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/reports-view.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/schedule-view.jsx
try { (() => {
/* eslint-disable */
/* Schedule view — daily itinerary for a tour, demonstrating:
   - Timeline component (vertical event rail)
   - DatePicker (change the day)
   - TimePicker (12-hour) inside a Drawer
   - Drawer for editing a stop
   - Menu for row actions
   - SVG "route" between stops as visual map
*/

const {
  useState: useStateSched,
  useMemo: useMemoSched
} = React;

/* ──────────────────────────────────────────────────────────────────────
   Sample itinerary
   ────────────────────────────────────────────────────────────────────── */
const ITINERARY_SEED = [{
  id: 's1',
  name: {
    en: 'Hotel checkout',
    ar: 'مغادرة الفندق'
  },
  place: {
    en: 'Madinah Movenpick',
    ar: 'موفنبيك المدينة'
  },
  type: 'depart',
  start: '08:30',
  durationMin: 30,
  x: 0.10,
  y: 0.78
}, {
  id: 's2',
  name: {
    en: 'Prophet\'s Mosque visit',
    ar: 'زيارة المسجد النبوي'
  },
  place: {
    en: 'Al Masjid an-Nabawi',
    ar: 'المسجد النبوي'
  },
  type: 'visit',
  start: '09:00',
  durationMin: 120,
  x: 0.22,
  y: 0.62
}, {
  id: 's3',
  name: {
    en: 'Coffee & breakfast',
    ar: 'فطور وقهوة'
  },
  place: {
    en: 'Cafe Aroma',
    ar: 'كافيه أروما'
  },
  type: 'food',
  start: '11:30',
  durationMin: 60,
  x: 0.36,
  y: 0.50
}, {
  id: 's4',
  name: {
    en: 'Quba Mosque',
    ar: 'مسجد قباء'
  },
  place: {
    en: 'Quba',
    ar: 'حي قباء'
  },
  type: 'visit',
  start: '13:00',
  durationMin: 90,
  x: 0.50,
  y: 0.36
}, {
  id: 's5',
  name: {
    en: 'Date farms market',
    ar: 'سوق مزارع التمور'
  },
  place: {
    en: 'Al Awali Dates',
    ar: 'تمور العوالي'
  },
  type: 'shop',
  start: '15:00',
  durationMin: 60,
  x: 0.66,
  y: 0.24
}, {
  id: 's6',
  name: {
    en: 'Sunset photo stop',
    ar: 'محطة تصوير الغروب'
  },
  place: {
    en: 'Mount Uhud lookout',
    ar: 'مطل جبل أحد'
  },
  type: 'photo',
  start: '17:00',
  durationMin: 45,
  x: 0.80,
  y: 0.18
}, {
  id: 's7',
  name: {
    en: 'Dinner',
    ar: 'العشاء'
  },
  place: {
    en: 'Al Baik',
    ar: 'البيك'
  },
  type: 'food',
  start: '19:00',
  durationMin: 75,
  x: 0.90,
  y: 0.30
}];
const STOP_TYPES = {
  depart: {
    icon: 'log-out',
    tone: 'iris'
  },
  visit: {
    icon: 'map-pin',
    tone: 'iris'
  },
  food: {
    icon: 'utensils',
    tone: 'warning'
  },
  shop: {
    icon: 'shopping-bag',
    tone: 'success'
  },
  photo: {
    icon: 'camera',
    tone: 'info'
  },
  hotel: {
    icon: 'bed',
    tone: 'neutral'
  }
};

/* ──────────────────────────────────────────────────────────────────────
   Schedule view
   ────────────────────────────────────────────────────────────────────── */
function ScheduleView() {
  const t = useT();
  const lang = useLang();
  const [date, setDate] = useStateSched(() => isoToday());
  const [view, setView] = useStateSched('agenda'); // 'agenda' | 'list'
  const [stops, setStops] = useStateSched(ITINERARY_SEED);
  const [editing, setEditing] = useStateSched(null);
  const [doneIds, setDoneIds] = useStateSched(new Set(['s1', 's2', 's3']));
  const editingStop = stops.find(s => s.id === editing);
  function setStopField(id, patch) {
    setStops(prev => prev.map(s => s.id === id ? {
      ...s,
      ...patch
    } : s));
  }
  function markDone(id) {
    const ns = new Set(doneIds);
    ns.add(id);
    setDoneIds(ns);
  }
  function removeStop(id) {
    setStops(prev => prev.filter(s => s.id !== id));
    if (editing === id) setEditing(null);
  }
  function duplicateStop(id) {
    setStops(prev => {
      const i = prev.findIndex(s => s.id === id);
      if (i < 0) return prev;
      const copy = {
        ...prev[i],
        id: prev[i].id + '-copy-' + Date.now()
      };
      const out = [...prev];
      out.splice(i + 1, 0, copy);
      return out;
    });
  }
  const totalMin = stops.reduce((s, x) => s + x.durationMin, 0);
  const completed = stops.filter(s => doneIds.has(s.id)).length;

  // ── Build agenda events ───────────────────────────────────────────
  const agendaEvents = stops.map((s, i) => {
    const def = STOP_TYPES[s.type] || STOP_TYPES.visit;
    const state = doneIds.has(s.id) ? 'done' : i === completed ? 'current' : undefined;
    return {
      id: s.id,
      start: s.start,
      durationMin: s.durationMin,
      tone: def.tone,
      icon: def.icon,
      state,
      title: s.name[lang] || s.name.en,
      sub: s.place[lang] || s.place.en
    };
  });

  // ── Build timeline items (list view fallback) ────────────────────
  const timelineItems = stops.map((s, i) => {
    const def = STOP_TYPES[s.type] || STOP_TYPES.visit;
    const state = doneIds.has(s.id) ? 'done' : i === completed ? 'current' : 'pending';
    return {
      id: s.id,
      icon: def.icon,
      tone: def.tone,
      state,
      render: () => /*#__PURE__*/React.createElement("div", {
        className: "schedule-card",
        onClick: () => setEditing(s.id)
      }, /*#__PURE__*/React.createElement("div", {
        className: "schedule-card__head"
      }, /*#__PURE__*/React.createElement("div", {
        className: "schedule-card__time"
      }, format12(s.start, t)), /*#__PURE__*/React.createElement("div", {
        className: "schedule-card__duration"
      }, formatDuration(s.durationMin, t)), /*#__PURE__*/React.createElement(Menu, {
        trigger: (open, ref) => /*#__PURE__*/React.createElement("button", {
          ref: ref,
          className: "schedule-card__more",
          onClick: e => {
            e.stopPropagation();
            open();
          },
          "aria-label": t('schedule.actions.more')
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "more-horizontal",
          size: 14
        }))
      }, close => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MenuItem, {
        icon: "edit-3",
        onClick: () => {
          setEditing(s.id);
          close();
        }
      }, t('schedule.actions.edit')), /*#__PURE__*/React.createElement(MenuItem, {
        icon: "check",
        onClick: () => {
          markDone(s.id);
          close();
        }
      }, t('schedule.actions.markDone')), /*#__PURE__*/React.createElement(MenuItem, {
        icon: "copy",
        onClick: () => {
          duplicateStop(s.id);
          close();
        }
      }, t('schedule.actions.duplicate')), /*#__PURE__*/React.createElement(MenuDivider, null), /*#__PURE__*/React.createElement(MenuItem, {
        icon: "trash-2",
        tone: "danger",
        onClick: () => {
          removeStop(s.id);
          close();
        }
      }, t('schedule.actions.remove'))))), /*#__PURE__*/React.createElement("div", {
        className: "schedule-card__title"
      }, s.name[lang] || s.name.en), /*#__PURE__*/React.createElement("div", {
        className: "schedule-card__place"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "map-pin",
        size: 12
      }), /*#__PURE__*/React.createElement("span", null, s.place[lang] || s.place.en)))
    };
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: t('schedule.eyebrow'),
    title: t('schedule.title'),
    subtitle: t('schedule.sub'),
    status: /*#__PURE__*/React.createElement(StatusPill, {
      status: "success"
    }, t('schedule.live')),
    meta: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "axis-pageheader__meta-item"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 12
    }), /*#__PURE__*/React.createElement(AvatarGroup, {
      people: [{
        initials: 'AK',
        tone: 'iris',
        name: 'Alex'
      }, {
        initials: 'MC',
        tone: 'success',
        name: 'Maya'
      }, {
        initials: 'SP',
        tone: 'warning',
        name: 'Sam'
      }, {
        initials: 'PR',
        tone: 'danger',
        name: 'Priya'
      }],
      max: 3,
      size: 22
    })), /*#__PURE__*/React.createElement("span", {
      className: "axis-pageheader__meta-item"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 12
    }), /*#__PURE__*/React.createElement("strong", null, t('schedule.meta.region'))), /*#__PURE__*/React.createElement("span", {
      className: "axis-pageheader__meta-item"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 12
    }), /*#__PURE__*/React.createElement("span", null, t('schedule.meta.updated', {
      time: t('time.minutes', {
        n: 5
      })
    })))),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Menu, {
      trigger: (open, ref) => /*#__PURE__*/React.createElement("button", {
        ref: ref,
        className: "axis-datetime-chip",
        onClick: open
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "calendar",
        size: 14
      }), /*#__PURE__*/React.createElement("span", null, formatDateLong(date, lang)), /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-down",
        size: 12
      })),
      width: 300
    }, close => /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 4
      }
    }, /*#__PURE__*/React.createElement(DatePicker, {
      value: date,
      onChange: v => {
        setDate(v);
        close();
      }
    }))), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "md",
      icon: "share-2"
    }, t('schedule.share')), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "md",
      icon: "plus"
    }, t('schedule.addStop'))),
    stats: [{
      label: t('schedule.stat.stops'),
      value: stops.length
    }, {
      label: t('schedule.stat.completed'),
      value: `${completed}/${stops.length}`
    }, {
      label: t('schedule.stat.duration'),
      value: formatDuration(totalMin, t)
    }, {
      label: t('schedule.stat.distance'),
      value: '24 km'
    }],
    tabs: [{
      key: 'agenda',
      icon: 'list',
      label: t('schedule.tab.agenda')
    }, {
      key: 'list',
      icon: 'list-tree',
      label: t('schedule.tab.list')
    }, {
      key: 'map',
      icon: 'map',
      label: t('schedule.tab.map')
    }],
    activeTab: view,
    onTabChange: setView
  }), view === 'agenda' && /*#__PURE__*/React.createElement("div", {
    className: "schedule-grid"
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    className: "schedule-mapcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "schedule-mapcard__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "schedule-mapcard__title"
  }, t('schedule.map.title')), /*#__PURE__*/React.createElement("div", {
    className: "schedule-mapcard__sub"
  }, t('schedule.map.sub')))), /*#__PURE__*/React.createElement(MapPlot, {
    stops: stops,
    doneIds: doneIds,
    lang: lang,
    onSelect: id => setEditing(id)
  })), /*#__PURE__*/React.createElement(Card, {
    padding: 18,
    className: "schedule-listcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "schedule-listcard__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "schedule-listcard__title"
  }, t('schedule.agenda.title')), /*#__PURE__*/React.createElement("div", {
    className: "schedule-listcard__sub"
  }, t('schedule.agenda.sub'))), /*#__PURE__*/React.createElement("div", {
    className: "schedule-agenda-wrap"
  }, /*#__PURE__*/React.createElement(DailyAgenda, {
    events: agendaEvents,
    hourStart: 8,
    hourEnd: 20,
    hourHeight: 68,
    currentTime: "11:45",
    onEventClick: id => setEditing(id)
  })))), view === 'list' && /*#__PURE__*/React.createElement(Card, {
    padding: 18
  }, /*#__PURE__*/React.createElement("div", {
    className: "schedule-timeline-wrap"
  }, /*#__PURE__*/React.createElement(Timeline, {
    items: timelineItems
  }))), view === 'map' && /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    className: "schedule-mapcard"
  }, /*#__PURE__*/React.createElement(MapPlot, {
    stops: stops,
    doneIds: doneIds,
    lang: lang,
    onSelect: id => setEditing(id),
    large: true
  })), /*#__PURE__*/React.createElement(Drawer, {
    open: !!editingStop,
    onClose: () => setEditing(null),
    title: editingStop ? editingStop.name[lang] || editingStop.name.en : '',
    subtitle: editingStop ? editingStop.place[lang] || editingStop.place.en : '',
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setEditing(null)
    }, t('schedule.drawer.cancel')), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: "check",
      onClick: () => setEditing(null)
    }, t('schedule.drawer.save')))
  }, editingStop && /*#__PURE__*/React.createElement(StopEditor, {
    stop: editingStop,
    onChange: patch => setStopField(editingStop.id, patch)
  })));
}

/* ──────────────────────────────────────────────────────────────────────
   StopEditor — body of the drawer
   ────────────────────────────────────────────────────────────────────── */
function StopEditor({
  stop,
  onChange
}) {
  const t = useT();
  const lang = useLang();
  const def = STOP_TYPES[stop.type] || STOP_TYPES.visit;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "drawer-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "drawer-section__title"
  }, t('schedule.drawer.type')), /*#__PURE__*/React.createElement("div", {
    className: "schedule-type-row"
  }, Object.keys(STOP_TYPES).map(k => {
    const d = STOP_TYPES[k];
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      className: `schedule-type-chip${stop.type === k ? ' is-on' : ''}`,
      onClick: () => onChange({
        type: k
      })
    }, /*#__PURE__*/React.createElement(Icon, {
      name: d.icon,
      size: 14
    }), /*#__PURE__*/React.createElement("span", null, t(`schedule.type.${k}`)));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "drawer-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "drawer-section__title"
  }, t('schedule.drawer.timing')), /*#__PURE__*/React.createElement("div", {
    className: "schedule-time-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "schedule-time-row__col"
  }, /*#__PURE__*/React.createElement("label", {
    className: "schedule-time-row__label"
  }, t('schedule.drawer.startTime')), /*#__PURE__*/React.createElement(TimePicker, {
    value: stop.start,
    onChange: v => onChange({
      start: v
    }),
    minuteStep: 5
  })), /*#__PURE__*/React.createElement("div", {
    className: "schedule-time-row__col"
  }, /*#__PURE__*/React.createElement("label", {
    className: "schedule-time-row__label"
  }, t('schedule.drawer.duration')), /*#__PURE__*/React.createElement("div", {
    className: "schedule-duration-row"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: stop.durationMin,
    min: 5,
    step: 5,
    onChange: e => onChange({
      durationMin: +e.target.value
    }),
    className: "schedule-duration-row__input"
  }), /*#__PURE__*/React.createElement("span", {
    className: "schedule-duration-row__unit"
  }, t('schedule.minutes'))))), /*#__PURE__*/React.createElement("div", {
    className: "schedule-time-summary"
  }, t('schedule.drawer.endTime'), ": ", /*#__PURE__*/React.createElement("strong", null, format12(addMinutes(stop.start, stop.durationMin), t)))), /*#__PURE__*/React.createElement("div", {
    className: "drawer-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "drawer-section__title"
  }, t('schedule.drawer.details')), /*#__PURE__*/React.createElement("div", {
    className: "detail-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "detail-row__label"
  }, t('schedule.drawer.placeLabel')), /*#__PURE__*/React.createElement("span", {
    className: "detail-row__value"
  }, stop.place[lang] || stop.place.en)), /*#__PURE__*/React.createElement("div", {
    className: "detail-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "detail-row__label"
  }, t('schedule.drawer.typeLabel')), /*#__PURE__*/React.createElement("span", {
    className: "detail-row__value"
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: def.tone === 'iris' ? 'iris' : 'neutral'
  }, /*#__PURE__*/React.createElement(Icon, {
    name: def.icon,
    size: 11
  }), " ", t(`schedule.type.${stop.type}`))))));
}

/* ──────────────────────────────────────────────────────────────────────
   MapPlot — SVG schematic of stops + connecting route
   ────────────────────────────────────────────────────────────────────── */
function MapPlot({
  stops,
  doneIds,
  lang,
  onSelect
}) {
  const W = 800,
    H = 360;
  const points = stops.map(s => ({
    ...s,
    sx: s.x * W,
    sy: s.y * H
  }));
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.sx.toFixed(0)},${p.sy.toFixed(0)}`).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: "schedule-map"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    preserveAspectRatio: "none",
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "grid",
    width: "40",
    height: "40",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 40 0 L 0 0 0 40",
    fill: "none",
    stroke: "var(--border-subtle)",
    strokeWidth: "0.5"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: W,
    height: H,
    fill: "url(#grid)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,260 Q200,200 380,250 T800,200 L800,360 L0,360 Z",
    fill: "oklch(0.62 0.21 275 / 0.04)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,100 Q140,140 280,90 T560,110 T800,80",
    fill: "none",
    stroke: "var(--border-subtle)",
    strokeWidth: "1.5",
    strokeDasharray: "3 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: pathD,
    fill: "none",
    stroke: "var(--iris-400)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeDasharray: "5 6"
  }), points.map((p, i) => {
    const done = doneIds.has(p.id);
    return /*#__PURE__*/React.createElement("g", {
      key: p.id,
      className: "schedule-map__stop",
      onClick: () => onSelect(p.id),
      style: {
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: p.sx,
      cy: p.sy,
      r: "14",
      fill: "var(--surface-1)",
      stroke: done ? 'var(--success-500)' : 'var(--iris-500)',
      strokeWidth: "2.5"
    }), /*#__PURE__*/React.createElement("text", {
      x: p.sx,
      y: p.sy + 4,
      textAnchor: "middle",
      fontFamily: "var(--font-mono)",
      fontSize: "11",
      fontWeight: "600",
      fill: done ? 'var(--success-500)' : 'var(--iris-500)'
    }, i + 1), /*#__PURE__*/React.createElement("text", {
      x: p.sx,
      y: p.sy + 32,
      textAnchor: "middle",
      fontFamily: "var(--font-sans)",
      fontSize: "11",
      fill: "var(--fg-1)",
      fontWeight: "500"
    }, p.name[lang] || p.name.en));
  })));
}

/* ── helpers ────────────────────────────────────────────────────────── */
function isoToday() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function addMinutes(hhmm, min) {
  const [h, m] = hhmm.split(':').map(Number);
  let total = h * 60 + m + min;
  total = (total % 1440 + 1440) % 1440;
  const nh = Math.floor(total / 60),
    nm = total % 60;
  return `${String(nh).padStart(2, '0')}:${String(nm).padStart(2, '0')}`;
}
function formatDuration(min, t) {
  const h = Math.floor(min / 60),
    m = min % 60;
  if (h === 0) return t('schedule.dur.min', {
    n: m
  });
  if (m === 0) return t('schedule.dur.hr', {
    n: h
  });
  return t('schedule.dur.hm', {
    h,
    m
  });
}
Object.assign(window, {
  ScheduleView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/schedule-view.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/shell.jsx
try { (() => {
/* eslint-disable */
/* Shell: Layout, Sidebar (glassmorphic), Topbar — responsive + collapsible + i18n */

const {
  useState: useStateShell,
  useEffect: useEffectShell
} = React;
function Layout({
  sidebar,
  topbar,
  children,
  sidebarOpen,
  onCloseSidebar
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `axis-layout${sidebarOpen ? ' sidebar-open' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-layout__overlay",
    onClick: onCloseSidebar,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("aside", {
    className: "axis-layout__sidebar"
  }, sidebar), /*#__PURE__*/React.createElement("div", {
    className: "axis-layout__main"
  }, /*#__PURE__*/React.createElement("header", {
    className: "axis-layout__topbar"
  }, topbar), /*#__PURE__*/React.createElement("main", {
    className: "axis-layout__content"
  }, children)));
}
function Sidebar({
  activeKey,
  onNavigate,
  onOpenPalette,
  onClose,
  collapsed
}) {
  const t = useT();
  const sections = [{
    title: null,
    items: [{
      key: '__search',
      icon: 'search',
      label: t('nav.search'),
      kbd: '⌘K',
      onClick: onOpenPalette
    }, {
      key: 'dashboard',
      icon: 'layout-dashboard',
      label: t('nav.overview')
    }, {
      key: 'inbox',
      icon: 'inbox',
      label: t('nav.inbox'),
      count: 12
    }, {
      key: 'deployments',
      icon: 'git-branch',
      label: t('nav.deployments'),
      dot: 'warning'
    }]
  }, {
    title: t('nav.section.docs'),
    items: [{
      key: 'tokens',
      icon: 'palette',
      label: t('nav.tokens')
    }, {
      key: 'components',
      icon: 'component',
      label: t('nav.components')
    }, {
      key: 'tables',
      icon: 'table-2',
      label: t('nav.tables')
    }, {
      key: 'schedule',
      icon: 'calendar-days',
      label: t('nav.schedule')
    }, {
      key: 'guidelines',
      icon: 'book-open',
      label: t('nav.guidelines')
    }]
  }, {
    title: t('nav.section.workspace'),
    items: [{
      key: 'projects',
      icon: 'folder',
      label: t('nav.projects')
    }, {
      key: 'tasks',
      icon: 'check-square',
      label: t('nav.tasks')
    }, {
      key: 'reports',
      icon: 'bar-chart-3',
      label: t('nav.reports')
    }, {
      key: 'team',
      icon: 'users',
      label: t('nav.team')
    }, {
      key: 'settings',
      icon: 'settings',
      label: t('nav.settings')
    }]
  }];
  function handleNavigate(key) {
    onNavigate(key);
    onClose && onClose();
  }
  return /*#__PURE__*/React.createElement("div", {
    className: `axis-sidebar${collapsed ? ' is-collapsed' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-sidebar__brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "axis-sidebar__mark"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    width: "20",
    height: "20",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 26 L16 6 L26 26 M10 19 H22",
    stroke: "white",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), !collapsed && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "axis-sidebar__word"
  }, t('app.brand')), /*#__PURE__*/React.createElement("span", {
    className: "axis-sidebar__version"
  }, t('app.version'))), !collapsed && /*#__PURE__*/React.createElement("button", {
    className: "axis-sidebar__close",
    onClick: onClose,
    "aria-label": t('app.close')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 16
  }))), /*#__PURE__*/React.createElement("nav", {
    className: "axis-sidebar__nav"
  }, sections.map((s, si) => /*#__PURE__*/React.createElement("div", {
    key: si,
    className: "axis-sidebar__section"
  }, s.title && !collapsed && /*#__PURE__*/React.createElement("div", {
    className: "axis-sidebar__sectionTitle"
  }, s.title), s.items.map(item => /*#__PURE__*/React.createElement("button", {
    key: item.key,
    title: collapsed ? item.label : undefined,
    className: `axis-sidebar__item${activeKey === item.key ? ' is-active' : ''}`,
    onClick: () => item.onClick ? (item.onClick(), onClose && onClose()) : handleNavigate(item.key)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: item.icon,
    size: 16
  }), !collapsed && /*#__PURE__*/React.createElement("span", null, item.label), !collapsed && item.kbd && /*#__PURE__*/React.createElement("span", {
    className: "axis-sidebar__kbd"
  }, item.kbd), !collapsed && item.count != null && /*#__PURE__*/React.createElement("span", {
    className: "axis-sidebar__count"
  }, item.count), !collapsed && item.dot && /*#__PURE__*/React.createElement("span", {
    className: `axis-sidebar__dot axis-sidebar__dot--${item.dot}`
  }), collapsed && item.count != null && /*#__PURE__*/React.createElement("span", {
    className: "axis-sidebar__count-dot"
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "axis-sidebar__footer"
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: t('nav.user.name').split(' ').map(s => s[0]).join('').slice(0, 2),
    size: 28
  }), !collapsed && /*#__PURE__*/React.createElement("div", {
    className: "axis-sidebar__userText"
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-sidebar__userName"
  }, t('nav.user.name')), /*#__PURE__*/React.createElement("div", {
    className: "axis-sidebar__userOrg"
  }, t('nav.user.org'))), !collapsed && /*#__PURE__*/React.createElement(Icon, {
    name: "chevrons-up-down",
    size: 14,
    style: {
      color: 'var(--fg-3)',
      flexShrink: 0
    }
  })));
}
function Topbar({
  theme,
  onToggleTheme,
  viewTitle,
  onOpenPalette,
  onToggleSidebar,
  dir,
  onToggleDir
}) {
  const t = useT();
  return /*#__PURE__*/React.createElement("div", {
    className: "axis-topbar"
  }, /*#__PURE__*/React.createElement("button", {
    className: "axis-topbar__hamburger",
    onClick: onToggleSidebar,
    "aria-label": t('app.toggle.sidebar')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "panel-left",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "axis-topbar__crumb"
  }, /*#__PURE__*/React.createElement("span", {
    className: "axis-topbar__crumb-parent"
  }, t('app.brand')), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 14,
    style: {
      color: 'var(--fg-4)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-1)',
      fontWeight: 500
    }
  }, viewTitle)), /*#__PURE__*/React.createElement("button", {
    className: "axis-topbar__search",
    onClick: onOpenPalette,
    "aria-label": t('nav.search')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    className: "axis-topbar__search-label"
  }, t('app.search.placeholder')), /*#__PURE__*/React.createElement("span", {
    className: "axis-topbar__kbd"
  }, /*#__PURE__*/React.createElement(Kbd, null, "\u2318"), /*#__PURE__*/React.createElement(Kbd, null, "K"))), /*#__PURE__*/React.createElement("div", {
    className: "axis-topbar__right"
  }, /*#__PURE__*/React.createElement("button", {
    className: "axis-topbar__dir",
    onClick: onToggleDir,
    "aria-label": t('app.toggle.dir'),
    title: t('app.toggle.dir')
  }, dir === 'rtl' ? 'EN' : 'ع'), /*#__PURE__*/React.createElement(IconButton, {
    icon: theme === 'dark' ? 'sun' : 'moon',
    label: t('app.toggle.theme'),
    onClick: onToggleTheme
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: t('app.notifications'),
    className: "hide-xs"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    icon: "zap",
    className: "hide-xs"
  }, t('app.deploy')), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    icon: "zap",
    className: "show-xs",
    "aria-label": t('app.deploy')
  })));
}
Object.assign(window, {
  Layout,
  Sidebar,
  Topbar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/table.jsx
try { (() => {
/* eslint-disable */
/* Tables — simple and complex (sticky header, sticky first column, sort,
   density, pagination, row hover, RTL-aware). */

const {
  useState: useStateTable,
  useMemo: useMemoTable
} = React;

/* ──────────────────────────────────────────────────────────────────────
   <Table> — primitive
   ────────────────────────────────────────────────────────────────────── */
function Table({
  columns,
  rows,
  density = 'comfortable',
  sortKey,
  sortDir,
  onSort,
  stickyHeader,
  stickyFirstCol,
  selectable,
  selected = new Set(),
  onToggleSelected,
  onToggleAll,
  rowKey,
  onRowClick,
  emptyState
}) {
  const cls = `axis-table axis-table--${density}` + (stickyHeader ? ' has-sticky-head' : '') + (stickyFirstCol ? ' has-sticky-col' : '');
  function getKey(row, i) {
    return rowKey ? rowKey(row, i) : row.id ?? i;
  }
  const allSelected = selectable && rows.length > 0 && rows.every(r => selected.has(getKey(r)));
  const someSelected = selectable && !allSelected && rows.some(r => selected.has(getKey(r)));
  return /*#__PURE__*/React.createElement("div", {
    className: "axis-table__wrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: cls
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, selectable && /*#__PURE__*/React.createElement("th", {
    className: "axis-table__check"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: allSelected,
    indeterminate: someSelected,
    onChange: () => onToggleAll && onToggleAll(!allSelected)
  })), columns.map(col => {
    const isSort = sortKey === col.key;
    const sortable = col.sortable !== false && onSort;
    return /*#__PURE__*/React.createElement("th", {
      key: col.key,
      style: {
        width: col.width,
        minWidth: col.minWidth,
        textAlign: col.align || 'start'
      },
      className: (col.align === 'end' || col.align === 'right' ? 'is-end ' : '') + (col.mono ? 'is-mono ' : '') + (col.sticky ? 'is-sticky ' : ''),
      onClick: sortable ? () => onSort(col.key) : undefined,
      "aria-sort": isSort ? sortDir === 'asc' ? 'ascending' : 'descending' : undefined
    }, /*#__PURE__*/React.createElement("span", {
      className: "axis-table__th"
    }, /*#__PURE__*/React.createElement("span", null, col.label), sortable && /*#__PURE__*/React.createElement("span", {
      className: `axis-table__sort${isSort ? ' is-active' : ''}`
    }, /*#__PURE__*/React.createElement(Icon, {
      name: isSort && sortDir === 'asc' ? 'arrow-up' : isSort && sortDir === 'desc' ? 'arrow-down' : 'chevrons-up-down',
      size: 12
    }))));
  }))), /*#__PURE__*/React.createElement("tbody", null, rows.length === 0 ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: columns.length + (selectable ? 1 : 0),
    className: "axis-table__empty"
  }, emptyState || 'No data.')) : rows.map((row, i) => {
    const k = getKey(row, i);
    const isSel = selectable && selected.has(k);
    return /*#__PURE__*/React.createElement("tr", {
      key: k,
      className: (isSel ? 'is-selected ' : '') + (onRowClick ? 'is-clickable ' : ''),
      onClick: onRowClick ? () => onRowClick(row) : undefined
    }, selectable && /*#__PURE__*/React.createElement("td", {
      className: "axis-table__check",
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement(Checkbox, {
      checked: isSel,
      onChange: () => onToggleSelected && onToggleSelected(k)
    })), columns.map(col => /*#__PURE__*/React.createElement("td", {
      key: col.key,
      style: {
        textAlign: col.align || 'start'
      },
      className: (col.align === 'end' ? 'is-end ' : '') + (col.mono ? 'is-mono ' : '') + (col.sticky ? 'is-sticky ' : '')
    }, col.render ? col.render(row[col.key], row, i) : row[col.key])));
  }))));
}

/* ──────────────────────────────────────────────────────────────────────
   Checkbox — primitive
   ────────────────────────────────────────────────────────────────────── */
function Checkbox({
  checked,
  indeterminate,
  onChange,
  label
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = !!indeterminate;
  }, [indeterminate]);
  return /*#__PURE__*/React.createElement("label", {
    className: `axis-check${checked ? ' is-on' : ''}${indeterminate ? ' is-indet' : ''}`
  }, /*#__PURE__*/React.createElement("input", {
    ref: ref,
    type: "checkbox",
    checked: !!checked,
    onChange: e => onChange && onChange(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", {
    className: "axis-check__box"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: indeterminate ? 'minus' : 'check',
    size: 12
  })), label && /*#__PURE__*/React.createElement("span", {
    className: "axis-check__label"
  }, label));
}

/* ──────────────────────────────────────────────────────────────────────
   Pagination — primitive
   ────────────────────────────────────────────────────────────────────── */
function Pagination({
  page,
  pageSize,
  total,
  onPage
}) {
  const pages = Math.max(1, Math.ceil(total / pageSize));
  const from = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const to = Math.min(page * pageSize, total);
  return /*#__PURE__*/React.createElement("div", {
    className: "axis-pagination"
  }, /*#__PURE__*/React.createElement("span", {
    className: "axis-pagination__info"
  }, "Showing ", /*#__PURE__*/React.createElement("strong", null, from, "\u2013", to), " of ", /*#__PURE__*/React.createElement("strong", null, total)), /*#__PURE__*/React.createElement("div", {
    className: "axis-pagination__controls"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-left",
    label: "Previous",
    size: "sm",
    variant: "secondary",
    onClick: () => onPage(Math.max(1, page - 1)),
    disabled: page <= 1
  }), /*#__PURE__*/React.createElement("span", {
    className: "axis-pagination__page"
  }, "Page ", /*#__PURE__*/React.createElement("strong", null, page), " / ", pages), /*#__PURE__*/React.createElement(IconButton, {
    icon: "chevron-right",
    label: "Next",
    size: "sm",
    variant: "secondary",
    onClick: () => onPage(Math.min(pages, page + 1)),
    disabled: page >= pages
  })));
}
Object.assign(window, {
  Table,
  Checkbox,
  Pagination
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/table.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/tables-view.jsx
try { (() => {
/* eslint-disable */
/* Tables view — simple + complex (i18n + Western digits everywhere) */

const {
  useState: useStateTV,
  useMemo: useMemoTV
} = React;

/* Helper — keep roles/statuses as keys, render via t() */
const TABLE_USERS = [{
  id: 'u-1',
  name: 'Maya Chen',
  nameAr: 'مايا تشن',
  email: 'maya@axis.dev',
  role: 'owner',
  status: 'active',
  mfa: true,
  seats: 12,
  lastSeenKey: 'minutes',
  lastSeenN: 2,
  cost: 49.00,
  region: 'EU-WEST',
  joined: '2024-03-12'
}, {
  id: 'u-2',
  name: 'Alex Kim',
  nameAr: 'أليكس كيم',
  email: 'alex@axis.dev',
  role: 'admin',
  status: 'active',
  mfa: true,
  seats: 8,
  lastSeenKey: 'now',
  cost: 49.00,
  region: 'US-EAST',
  joined: '2024-01-08'
}, {
  id: 'u-3',
  name: 'Sam Park',
  nameAr: 'سام بارك',
  email: 'sam@axis.dev',
  role: 'editor',
  status: 'active',
  mfa: false,
  seats: 3,
  lastSeenKey: 'minutes',
  lastSeenN: 8,
  cost: 24.00,
  region: 'US-WEST',
  joined: '2024-06-22'
}, {
  id: 'u-4',
  name: 'Priya Rao',
  nameAr: 'بريا راو',
  email: 'priya@axis.dev',
  role: 'admin',
  status: 'invited',
  mfa: false,
  seats: 0,
  lastSeenKey: 'dash',
  cost: 0.00,
  region: 'AP-SOUTH',
  joined: '2025-04-02'
}, {
  id: 'u-5',
  name: 'Jordan Lee',
  nameAr: 'جوردان لي',
  email: 'jordan@axis.dev',
  role: 'viewer',
  status: 'active',
  mfa: true,
  seats: 1,
  lastSeenKey: 'hours',
  lastSeenN: 1,
  cost: 12.00,
  region: 'EU-WEST',
  joined: '2024-11-15'
}, {
  id: 'u-6',
  name: 'Riya Sharma',
  nameAr: 'ريا شارما',
  email: 'riya@axis.dev',
  role: 'editor',
  status: 'suspended',
  mfa: true,
  seats: 0,
  lastSeenKey: 'days',
  lastSeenN: 3,
  cost: 0.00,
  region: 'AP-SOUTH',
  joined: '2024-08-30'
}, {
  id: 'u-7',
  name: 'Diego Torres',
  nameAr: 'دييجو توريس',
  email: 'diego@axis.dev',
  role: 'editor',
  status: 'active',
  mfa: true,
  seats: 2,
  lastSeenKey: 'minutes',
  lastSeenN: 24,
  cost: 24.00,
  region: 'US-EAST',
  joined: '2025-01-19'
}, {
  id: 'u-8',
  name: 'Lina Hassan',
  nameAr: 'لينا حسن',
  email: 'lina@axis.dev',
  role: 'owner',
  status: 'active',
  mfa: true,
  seats: 18,
  lastSeenKey: 'now',
  cost: 99.00,
  region: 'ME-SOUTH',
  joined: '2023-11-04'
}, {
  id: 'u-9',
  name: 'Noah Martin',
  nameAr: 'نوح مارتن',
  email: 'noah@axis.dev',
  role: 'viewer',
  status: 'active',
  mfa: false,
  seats: 1,
  lastSeenKey: 'hours',
  lastSeenN: 2,
  cost: 12.00,
  region: 'EU-WEST',
  joined: '2025-02-26'
}, {
  id: 'u-10',
  name: 'Tomás Silva',
  nameAr: 'توماس سيلفا',
  email: 'tomas@axis.dev',
  role: 'admin',
  status: 'active',
  mfa: true,
  seats: 6,
  lastSeenKey: 'minutes',
  lastSeenN: 12,
  cost: 49.00,
  region: 'EU-WEST',
  joined: '2024-09-09'
}];
function lastSeenLabel(t, row) {
  if (row.lastSeenKey === 'now') return t('time.now');
  if (row.lastSeenKey === 'dash') return '—';
  return t(`time.${row.lastSeenKey}`, {
    n: row.lastSeenN
  });
}
function renderName(v, r, lang) {
  const display = lang === 'ar' ? r.nameAr : v;
  const initials = v.split(' ').map(s => s[0]).join('').slice(0, 2);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: initials,
    size: 26,
    tone: ['iris', 'success', 'warning', 'danger', 'info'][r.id.charCodeAt(2) % 5]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500,
      color: 'var(--fg-1)',
      whiteSpace: 'nowrap'
    }
  }, display), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--fg-3)',
      whiteSpace: 'nowrap'
    }
  }, r.email)));
}
function renderStatus(s, t) {
  return s === 'active' ? /*#__PURE__*/React.createElement(StatusPill, {
    status: "success"
  }, t('tbl.status.active')) : s === 'invited' ? /*#__PURE__*/React.createElement(StatusPill, {
    status: "info"
  }, t('tbl.status.invited')) : /*#__PURE__*/React.createElement(StatusPill, {
    status: "danger"
  }, t('tbl.status.suspended'));
}
function SimpleTable() {
  const t = useT();
  const lang = useLang();
  const cols = [{
    key: 'name',
    label: t('tbl.col.member'),
    render: (v, r) => renderName(v, r, lang)
  }, {
    key: 'role',
    label: t('tbl.col.role'),
    render: v => /*#__PURE__*/React.createElement(Tag, {
      tone: v === 'owner' ? 'iris' : 'neutral'
    }, t(`tbl.role.${v}`))
  }, {
    key: 'status',
    label: t('tbl.col.status'),
    render: v => renderStatus(v, t)
  }, {
    key: 'lastSeen',
    label: t('tbl.col.lastSeen'),
    mono: true,
    align: 'end',
    render: (_, r) => lastSeenLabel(t, r)
  }];
  return /*#__PURE__*/React.createElement(Table, {
    columns: cols,
    rows: TABLE_USERS.slice(0, 5),
    density: "comfortable"
  });
}
function ComplexTable() {
  const t = useT();
  const lang = useLang();
  const [q, setQ] = useStateTV('');
  const [sortKey, setSortKey] = useStateTV('name');
  const [sortDir, setSortDir] = useStateTV('asc');
  const [density, setDensity] = useStateTV('comfortable');
  const [page, setPage] = useStateTV(1);
  const [selected, setSelected] = useStateTV(new Set());
  const [filters, setFilters] = useStateTV({});
  const [openRow, setOpenRow] = useStateTV(null); // id of row whose drawer is open

  const pageSize = 6;
  function handleSort(k) {
    if (sortKey === k) setSortDir(d => d === 'asc' ? 'desc' : 'asc');else {
      setSortKey(k);
      setSortDir('asc');
    }
  }

  // ── Filter schema ────────────────────────────────────────────────
  const filterSchema = [{
    key: 'role',
    label: t('tbl.col.role'),
    type: 'multi',
    icon: 'shield',
    options: [{
      value: 'owner',
      label: t('tbl.role.owner')
    }, {
      value: 'admin',
      label: t('tbl.role.admin')
    }, {
      value: 'editor',
      label: t('tbl.role.editor')
    }, {
      value: 'viewer',
      label: t('tbl.role.viewer')
    }]
  }, {
    key: 'status',
    label: t('tbl.col.status'),
    type: 'select',
    icon: 'activity',
    options: [{
      value: 'active',
      label: t('tbl.status.active')
    }, {
      value: 'invited',
      label: t('tbl.status.invited')
    }, {
      value: 'suspended',
      label: t('tbl.status.suspended')
    }]
  }, {
    key: 'region',
    label: t('tbl.col.region'),
    type: 'multi',
    icon: 'globe',
    options: [{
      value: 'EU-WEST',
      label: 'EU-WEST'
    }, {
      value: 'US-EAST',
      label: 'US-EAST'
    }, {
      value: 'US-WEST',
      label: 'US-WEST'
    }, {
      value: 'AP-SOUTH',
      label: 'AP-SOUTH'
    }, {
      value: 'ME-SOUTH',
      label: 'ME-SOUTH'
    }]
  }, {
    key: 'mfa',
    label: t('tbl.col.mfa'),
    type: 'select',
    icon: 'shield-check',
    options: [{
      value: 'on',
      label: t('row.detail.mfa.on')
    }, {
      value: 'off',
      label: t('row.detail.mfa.off')
    }]
  }, {
    key: 'cost',
    label: t('tbl.col.cost'),
    type: 'range',
    icon: 'dollar-sign',
    min: 0,
    max: 200
  }];

  // ── Filtering ───────────────────────────────────────────────────
  const filtered = useMemoTV(() => {
    const needle = q.trim().toLowerCase();
    let list = TABLE_USERS.filter(r => {
      if (filters.role && filters.role.length && !filters.role.includes(r.role)) return false;
      if (filters.status && filters.status !== r.status) return false;
      if (filters.region && filters.region.length && !filters.region.includes(r.region)) return false;
      if (filters.mfa) {
        if (filters.mfa === 'on' && !r.mfa) return false;
        if (filters.mfa === 'off' && r.mfa) return false;
      }
      if (filters.cost) {
        if (r.cost < filters.cost[0] || r.cost > filters.cost[1]) return false;
      }
      return true;
    });
    if (needle) {
      list = list.filter(r => r.name.toLowerCase().includes(needle) || (r.nameAr || '').includes(q.trim()) || r.email.toLowerCase().includes(needle) || r.role.toLowerCase().includes(needle) || r.region.toLowerCase().includes(needle));
    }
    const dir = sortDir === 'asc' ? 1 : -1;
    list = [...list].sort((a, b) => {
      const av = a[sortKey],
        bv = b[sortKey];
      if (typeof av === 'number') return (av - bv) * dir;
      return String(av).localeCompare(String(bv)) * dir;
    });
    return list;
  }, [q, sortKey, sortDir, filters]);
  const pageRows = filtered.slice((page - 1) * pageSize, page * pageSize);
  function toggleOne(k) {
    const next = new Set(selected);
    next.has(k) ? next.delete(k) : next.add(k);
    setSelected(next);
  }
  function toggleAll(checked) {
    if (checked) setSelected(new Set(pageRows.map(r => r.id)));else setSelected(new Set());
  }
  function clearSelection() {
    setSelected(new Set());
  }

  // Row actions menu cell
  const rowActions = row => /*#__PURE__*/React.createElement(Menu, {
    trigger: (open, ref) => /*#__PURE__*/React.createElement("button", {
      ref: ref,
      className: "axis-iconbtn axis-iconbtn--ghost axis-iconbtn--sm",
      onClick: e => {
        e.stopPropagation();
        open();
      },
      "aria-label": t('tbl.actions.for', {
        name: lang === 'ar' ? row.nameAr : row.name
      })
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "more-horizontal",
      size: 14
    }))
  }, close => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MenuItem, {
    icon: "eye",
    onClick: () => {
      setOpenRow(row.id);
      close();
    }
  }, t('row.actions.view')), /*#__PURE__*/React.createElement(MenuItem, {
    icon: "edit",
    onClick: () => {
      setOpenRow(row.id);
      close();
    }
  }, t('row.actions.edit')), /*#__PURE__*/React.createElement(MenuItem, {
    icon: "mail",
    onClick: close
  }, t('row.actions.email')), /*#__PURE__*/React.createElement(MenuItem, {
    icon: "copy",
    onClick: close
  }, t('row.actions.copy')), /*#__PURE__*/React.createElement(MenuDivider, null), /*#__PURE__*/React.createElement(MenuItem, {
    icon: "user-x",
    tone: "danger",
    onClick: close
  }, t('row.actions.suspend')), /*#__PURE__*/React.createElement(MenuItem, {
    icon: "trash-2",
    tone: "danger",
    onClick: close
  }, t('row.actions.delete'))));
  const columns = [{
    key: 'name',
    label: t('tbl.col.member'),
    sticky: true,
    minWidth: 220,
    render: (v, r) => renderName(v, r, lang)
  }, {
    key: 'role',
    label: t('tbl.col.role'),
    minWidth: 90,
    render: v => /*#__PURE__*/React.createElement(Tag, {
      tone: v === 'owner' ? 'iris' : 'neutral'
    }, t(`tbl.role.${v}`))
  }, {
    key: 'status',
    label: t('tbl.col.status'),
    minWidth: 110,
    render: v => renderStatus(v, t)
  }, {
    key: 'mfa',
    label: t('tbl.col.mfa'),
    minWidth: 70,
    align: 'start',
    render: v => v ? /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 14,
      style: {
        color: 'var(--success-500)'
      }
    }) : /*#__PURE__*/React.createElement(Icon, {
      name: "shield-off",
      size: 14,
      style: {
        color: 'var(--fg-4)'
      }
    })
  }, {
    key: 'region',
    label: t('tbl.col.region'),
    minWidth: 110,
    mono: true,
    render: v => /*#__PURE__*/React.createElement("code", {
      className: "dep-commit"
    }, v)
  }, {
    key: 'seats',
    label: t('tbl.col.seats'),
    minWidth: 70,
    align: 'end',
    mono: true
  }, {
    key: 'cost',
    label: t('tbl.col.cost'),
    minWidth: 90,
    align: 'end',
    mono: true,
    render: v => v === 0 ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--fg-3)'
      }
    }, "\u2014") : /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--fg-1)'
      }
    }, "$", v.toFixed(2))
  }, {
    key: 'joined',
    label: t('tbl.col.joined'),
    minWidth: 110,
    mono: true,
    render: v => /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--fg-2)'
      }
    }, v)
  }, {
    key: 'lastSeen',
    label: t('tbl.col.lastSeen'),
    minWidth: 90,
    mono: true,
    align: 'end',
    render: (_, r) => lastSeenLabel(t, r)
  }, {
    key: 'actions',
    label: '',
    sortable: false,
    minWidth: 50,
    align: 'end',
    render: (_, r) => rowActions(r)
  }];
  const openRowData = filtered.find(r => r.id === openRow) || TABLE_USERS.find(r => r.id === openRow);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(FilterBar, {
    schema: filterSchema,
    value: filters,
    onChange: v => {
      setFilters(v);
      setPage(1);
    },
    presetsKey: "members"
  }), /*#__PURE__*/React.createElement("div", {
    className: "axis-table-toolbar"
  }, selected.size > 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "axis-table-toolbar__bulk"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle-2",
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, t('tbl.bulk.selected', {
    n: selected.size
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "user-x"
  }, t('tbl.bulk.suspend')), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "mail"
  }, t('tbl.bulk.email')), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: clearSelection
  }, t('tbl.bulk.clear'))) : /*#__PURE__*/React.createElement("div", {
    className: "axis-table-toolbar__search"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 14
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => {
      setQ(e.target.value);
      setPage(1);
    },
    placeholder: t('tbl.toolbar.search')
  })), /*#__PURE__*/React.createElement("div", {
    className: "axis-table-toolbar__actions"
  }, /*#__PURE__*/React.createElement(Segmented, {
    value: density,
    onChange: setDensity,
    options: [{
      value: 'compact',
      label: t('tbl.toolbar.density.compact')
    }, {
      value: 'comfortable',
      label: t('tbl.toolbar.density.comfortable')
    }, {
      value: 'spacious',
      label: t('tbl.toolbar.density.spacious')
    }]
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "columns-3"
  }, t('tbl.toolbar.columns')), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "download"
  }, t('tbl.toolbar.export')))), /*#__PURE__*/React.createElement(Table, {
    columns: columns,
    rows: pageRows,
    density: density,
    sortKey: sortKey,
    sortDir: sortDir,
    onSort: handleSort,
    stickyHeader: true,
    stickyFirstCol: true,
    selectable: true,
    selected: selected,
    onToggleSelected: toggleOne,
    onToggleAll: toggleAll,
    rowKey: r => r.id,
    onRowClick: r => setOpenRow(r.id),
    emptyState: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search-x",
      size: 24,
      style: {
        color: 'var(--fg-4)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 500,
        color: 'var(--fg-2)'
      }
    }, t('tbl.empty.title', {
      q
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12
      }
    }, t('tbl.empty.sub')))
  }), /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    pageSize: pageSize,
    total: filtered.length,
    onPage: setPage
  })), /*#__PURE__*/React.createElement(Drawer, {
    open: !!openRowData,
    onClose: () => setOpenRow(null),
    title: openRowData ? lang === 'ar' ? openRowData.nameAr : openRowData.name : '',
    subtitle: openRowData ? openRowData.email : '',
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setOpenRow(null)
    }, t('row.drawer.close')), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: "check"
    }, t('row.drawer.save')))
  }, openRowData && /*#__PURE__*/React.createElement(MemberDetail, {
    row: openRowData,
    t: t,
    lang: lang
  })));
}
function MemberDetail({
  row,
  t,
  lang
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "drawer-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "detail-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "detail-row__label"
  }, t('row.detail.name')), /*#__PURE__*/React.createElement("span", {
    className: "detail-row__value"
  }, lang === 'ar' ? row.nameAr : row.name)), /*#__PURE__*/React.createElement("div", {
    className: "detail-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "detail-row__label"
  }, t('row.detail.email')), /*#__PURE__*/React.createElement("span", {
    className: "detail-row__value"
  }, row.email)), /*#__PURE__*/React.createElement("div", {
    className: "detail-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "detail-row__label"
  }, t('row.detail.role')), /*#__PURE__*/React.createElement("span", {
    className: "detail-row__value"
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: row.role === 'owner' ? 'iris' : 'neutral'
  }, t(`tbl.role.${row.role}`)))), /*#__PURE__*/React.createElement("div", {
    className: "detail-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "detail-row__label"
  }, t('row.detail.status')), /*#__PURE__*/React.createElement("span", {
    className: "detail-row__value"
  }, renderStatus(row.status, t))), /*#__PURE__*/React.createElement("div", {
    className: "detail-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "detail-row__label"
  }, t('row.detail.mfa')), /*#__PURE__*/React.createElement("span", {
    className: "detail-row__value"
  }, row.mfa ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--success-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 14
  }), t('row.detail.mfa.on')) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--fg-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-off",
    size: 14
  }), t('row.detail.mfa.off')))), /*#__PURE__*/React.createElement("div", {
    className: "detail-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "detail-row__label"
  }, t('row.detail.region')), /*#__PURE__*/React.createElement("span", {
    className: "detail-row__value"
  }, /*#__PURE__*/React.createElement("code", {
    className: "dep-commit"
  }, row.region))), /*#__PURE__*/React.createElement("div", {
    className: "detail-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "detail-row__label"
  }, t('row.detail.seats')), /*#__PURE__*/React.createElement("span", {
    className: "detail-row__value",
    style: {
      fontFamily: 'var(--font-mono)',
      unicodeBidi: 'isolate'
    }
  }, row.seats)), /*#__PURE__*/React.createElement("div", {
    className: "detail-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "detail-row__label"
  }, t('row.detail.cost')), /*#__PURE__*/React.createElement("span", {
    className: "detail-row__value",
    style: {
      fontFamily: 'var(--font-mono)',
      unicodeBidi: 'isolate'
    }
  }, row.cost === 0 ? '—' : `$${row.cost.toFixed(2)}`)), /*#__PURE__*/React.createElement("div", {
    className: "detail-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "detail-row__label"
  }, t('row.detail.joined')), /*#__PURE__*/React.createElement("span", {
    className: "detail-row__value",
    style: {
      fontFamily: 'var(--font-mono)',
      unicodeBidi: 'isolate'
    }
  }, row.joined)), /*#__PURE__*/React.createElement("div", {
    className: "detail-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "detail-row__label"
  }, t('row.detail.lastSeen')), /*#__PURE__*/React.createElement("span", {
    className: "detail-row__value",
    style: {
      fontFamily: 'var(--font-mono)',
      unicodeBidi: 'isolate'
    }
  }, lastSeenLabel(t, row)))));
}
function TablesView() {
  const t = useT();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: t('docs.eyebrow'),
    breadcrumbs: [{
      label: t('app.brand'),
      onClick: () => {}
    }, {
      label: t('nav.section.docs')
    }, {
      label: t('tables.title')
    }],
    title: t('tables.title'),
    subtitle: t('tables.sub'),
    stats: [{
      label: t('tbl.col.member'),
      value: '10'
    }, {
      label: t('tbl.role.owner'),
      value: '2',
      tone: 'iris'
    }, {
      label: t('tbl.status.active'),
      value: '8',
      tone: 'success'
    }, {
      label: t('tbl.col.cost'),
      value: '$294'
    }]
  }), /*#__PURE__*/React.createElement(Section, {
    eyebrow: t('tables.simple.eyebrow'),
    title: t('tables.simple.title'),
    sub: t('tables.simple.sub')
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement(SimpleTable, null))), /*#__PURE__*/React.createElement(Section, {
    eyebrow: t('tables.complex.eyebrow'),
    title: t('tables.complex.title'),
    sub: t('tables.complex.sub')
  }, /*#__PURE__*/React.createElement(ComplexTable, null)), /*#__PURE__*/React.createElement(Section, {
    eyebrow: t('tables.rules.eyebrow'),
    title: t('tables.rules.title')
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement("ul", {
    className: "rules-list"
  }, /*#__PURE__*/React.createElement("li", null, t('tables.rule.1')), /*#__PURE__*/React.createElement("li", null, t('tables.rule.2')), /*#__PURE__*/React.createElement("li", null, t('tables.rule.3')), /*#__PURE__*/React.createElement("li", null, t('tables.rule.4')), /*#__PURE__*/React.createElement("li", null, t('tables.rule.5')), /*#__PURE__*/React.createElement("li", null, t('tables.rule.6')), /*#__PURE__*/React.createElement("li", null, t('tables.rule.7'))))));
}
Object.assign(window, {
  TablesView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/tables-view.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/task-list.jsx
try { (() => {
/* eslint-disable */
/* TaskList — checklist with groups, priorities, due dates.
   Same data shape as projects-view TASKS, displayed as a flat list. */

const {
  useState: useStateTL2,
  useMemo: useMemoTL2
} = React;
function TaskList({
  tasks,
  groupBy,
  onToggle,
  onSelect,
  doneIds = new Set()
}) {
  const t = useT();
  const lang = useLang();

  // Group tasks (default: by status)
  const groups = useMemoTL2(() => {
    const keyFn = groupBy || (t => t.status);
    const map = new Map();
    tasks.forEach(task => {
      const k = keyFn(task);
      if (!map.has(k)) map.set(k, []);
      map.get(k).push(task);
    });
    // Stable order
    return Array.from(map.entries()).map(([key, items]) => ({
      key,
      items
    }));
  }, [tasks, groupBy]);
  return /*#__PURE__*/React.createElement("div", {
    className: "axis-tasklist"
  }, groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.key,
    className: "axis-tasklist__group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-tasklist__group-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "axis-tasklist__group-name"
  }, t(`projects.status.${g.key}`) || g.key), /*#__PURE__*/React.createElement("span", {
    className: "axis-tasklist__group-count"
  }, g.items.length)), /*#__PURE__*/React.createElement("ul", {
    className: "axis-tasklist__items"
  }, g.items.map(task => {
    const done = doneIds.has(task.id) || task.status === 'done';
    return /*#__PURE__*/React.createElement("li", {
      key: task.id,
      className: `axis-tasklist__item${done ? ' is-done' : ''}`
    }, /*#__PURE__*/React.createElement("button", {
      className: `axis-tasklist__check${done ? ' is-on' : ''}`,
      onClick: () => onToggle && onToggle(task.id),
      "aria-label": "Toggle"
    }, done && /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 12
    })), /*#__PURE__*/React.createElement("div", {
      className: "axis-tasklist__body",
      onClick: () => onSelect && onSelect(task.id)
    }, /*#__PURE__*/React.createElement("div", {
      className: "axis-tasklist__title-row"
    }, /*#__PURE__*/React.createElement(PriorityDot, {
      priority: task.priority
    }), /*#__PURE__*/React.createElement("span", {
      className: "axis-tasklist__title"
    }, task.title[lang] || task.title.en), /*#__PURE__*/React.createElement(Tag, {
      tone: "neutral"
    }, "#", task.tag)), /*#__PURE__*/React.createElement("div", {
      className: "axis-tasklist__meta"
    }, /*#__PURE__*/React.createElement("span", {
      className: "axis-tasklist__meta-item"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 11
    }), /*#__PURE__*/React.createElement("span", null, formatDateLong(task.due, lang))), /*#__PURE__*/React.createElement("span", {
      className: "axis-tasklist__meta-item"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 11
    }), /*#__PURE__*/React.createElement("span", null, task.estimate, "h")), task.comments > 0 && /*#__PURE__*/React.createElement("span", {
      className: "axis-tasklist__meta-item"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 11
    }), /*#__PURE__*/React.createElement("span", null, task.comments)), task.completed > 0 && task.completed < 100 && /*#__PURE__*/React.createElement("span", {
      className: "axis-tasklist__meta-item"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "circle-dashed",
      size: 11
    }), /*#__PURE__*/React.createElement("span", null, task.completed, "%")))), /*#__PURE__*/React.createElement(Avatar, {
      initials: task.assignee.initials,
      size: 24,
      tone: task.assignee.tone
    }));
  })))));
}
Object.assign(window, {
  TaskList
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/task-list.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/tasks-view.jsx
try { (() => {
/* eslint-disable */
/* Tasks view — combines a header with view-switcher + 5 different
   visualisations of the same task data:
     - List      (TaskList grouped by status)
     - Board     (Kanban columns)
     - Calendar  (month + week)
     - Gantt     (date bars)
     - Timeline  (chronological)
*/

const {
  useState: useStateTV,
  useMemo: useMemoTV
} = React;

/* Reuse the TASKS data from projects-view.jsx (already exposed on window).
   Add explicit start + end dates so the Calendar + Gantt views work. */
const TASK_RANGE = {
  't-1': {
    startDate: '2026-05-18',
    endDate: '2026-05-22'
  },
  't-2': {
    startDate: '2026-05-17',
    endDate: '2026-05-29'
  },
  't-3': {
    startDate: '2026-05-19',
    endDate: '2026-05-23'
  },
  't-4': {
    startDate: '2026-05-20',
    endDate: '2026-05-25'
  },
  't-5': {
    startDate: '2026-05-22',
    endDate: '2026-05-28'
  },
  't-6': {
    startDate: '2026-05-26',
    endDate: '2026-06-05'
  },
  't-7': {
    startDate: '2026-05-15',
    endDate: '2026-05-17'
  },
  't-8': {
    startDate: '2026-05-14',
    endDate: '2026-05-16'
  }
};
function enrichedTasks() {
  if (!window.PROJECT_TASKS) return [];
  return window.PROJECT_TASKS.map(t => ({
    ...t,
    ...(TASK_RANGE[t.id] || {})
  }));
}
function TasksView() {
  const t = useT();
  const lang = useLang();
  const [view, setView] = useStateTV('list');
  const [openTask, setOpenTask] = useStateTV(null);
  const [doneIds, setDoneIds] = useStateTV(new Set(['t-7', 't-8']));
  const tasks = useMemoTV(() => enrichedTasks(), []);
  const openTaskRow = tasks.find(t => t.id === openTask);
  function toggleDone(id) {
    const ns = new Set(doneIds);
    ns.has(id) ? ns.delete(id) : ns.add(id);
    setDoneIds(ns);
  }

  // For calendar: each task becomes one event on its due date
  const calendarEvents = tasks.map(task => ({
    id: task.id,
    date: task.due,
    start: '09:00',
    durationMin: (task.estimate || 1) * 60,
    title: task.title[lang] || task.title.en,
    tone: task.priority === 'urgent' ? 'danger' : task.priority === 'high' ? 'warning' : task.status === 'done' ? 'success' : 'iris'
  }));

  // For gantt: each task becomes a horizontal bar
  const ganttTasks = tasks.map(task => ({
    id: task.id,
    name: task.title[lang] || task.title.en,
    startDate: task.startDate,
    endDate: task.endDate,
    progress: task.completed,
    tone: task.status === 'done' ? 'success' : task.priority === 'urgent' ? 'danger' : task.priority === 'high' ? 'warning' : 'iris'
  }));

  // For timeline: chronological by due date
  const timelineItems = [...tasks].sort((a, b) => a.due.localeCompare(b.due)).map(task => ({
    id: task.id,
    icon: task.status === 'done' ? 'check' : task.status === 'review' ? 'eye' : task.priority === 'urgent' ? 'alert-triangle' : 'circle-dot',
    tone: task.status === 'done' ? 'success' : task.priority === 'urgent' ? 'danger' : task.priority === 'high' ? 'warning' : 'iris',
    state: task.status === 'done' ? 'done' : task.status === 'in_progress' ? 'current' : 'pending',
    title: task.title[lang] || task.title.en,
    time: formatDateLong(task.due, lang),
    duration: `${task.estimate}h · ${t(`projects.priority.${task.priority}`)}`,
    body: lang === 'ar' ? `${t(`tbl.role.${task.assignee.role || 'editor'}`) || ''}` : null
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: t('tasks.eyebrow'),
    breadcrumbs: [{
      label: t('app.brand'),
      onClick: () => {}
    }, {
      label: t('tasks.title')
    }],
    title: t('tasks.title'),
    subtitle: t('tasks.sub'),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "md",
      icon: "filter"
    }, t('tbl.toolbar.filter')), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "md",
      icon: "plus"
    }, t('projects.actions.newTask'))),
    stats: [{
      label: t('projects.stat.tasks'),
      value: tasks.length
    }, {
      label: t('projects.status.todo'),
      value: tasks.filter(x => x.status === 'todo').length
    }, {
      label: t('projects.status.in_progress'),
      value: tasks.filter(x => x.status === 'in_progress').length
    }, {
      label: t('projects.status.done'),
      value: tasks.filter(x => x.status === 'done').length,
      tone: 'success'
    }],
    tabs: [{
      key: 'list',
      icon: 'list',
      label: t('tasks.view.list')
    }, {
      key: 'board',
      icon: 'kanban',
      label: t('tasks.view.board')
    }, {
      key: 'calendar',
      icon: 'calendar-days',
      label: t('tasks.view.calendar')
    }, {
      key: 'gantt',
      icon: 'gantt-chart',
      label: t('tasks.view.gantt')
    }, {
      key: 'timeline',
      icon: 'milestone',
      label: t('tasks.view.timeline')
    }],
    activeTab: view,
    onTabChange: setView
  }), view === 'list' && /*#__PURE__*/React.createElement(TaskList, {
    tasks: tasks,
    onToggle: toggleDone,
    onSelect: setOpenTask,
    doneIds: doneIds
  }), view === 'board' && window.ProjectsBoardView && /*#__PURE__*/React.createElement(BoardLite, {
    tasks: tasks,
    onOpen: setOpenTask
  }), view === 'calendar' && /*#__PURE__*/React.createElement(Calendar, {
    events: calendarEvents,
    onEventClick: setOpenTask,
    currentTime: "11:30"
  }), view === 'gantt' && /*#__PURE__*/React.createElement(Gantt, {
    tasks: ganttTasks,
    rangeStart: "2026-05-12",
    rangeEnd: "2026-06-09",
    onTaskClick: setOpenTask
  }), view === 'timeline' && /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement(Timeline, {
    items: timelineItems
  })), /*#__PURE__*/React.createElement(Drawer, {
    open: !!openTaskRow,
    onClose: () => setOpenTask(null),
    title: openTaskRow ? openTaskRow.title[lang] || openTaskRow.title.en : '',
    subtitle: openTaskRow ? `#${openTaskRow.id}` : '',
    width: 520,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setOpenTask(null)
    }, t('row.drawer.close')), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: "check"
    }, t('row.drawer.save')))
  }, openTaskRow && window.TaskDetail && /*#__PURE__*/React.createElement(window.TaskDetail, {
    task: openTaskRow
  })));
}

/* Lightweight board for the Tasks page — reuses the styling defined
   for projects.css. */
function BoardLite({
  tasks,
  onOpen
}) {
  const t = useT();
  const lang = useLang();
  const cols = ['todo', 'in_progress', 'review', 'done'];
  return /*#__PURE__*/React.createElement("div", {
    className: "board-grid"
  }, cols.map(c => {
    const rows = tasks.filter(r => r.status === c);
    return /*#__PURE__*/React.createElement("div", {
      key: c,
      className: "board-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "board-col__head"
    }, /*#__PURE__*/React.createElement("div", {
      className: "board-col__title"
    }, /*#__PURE__*/React.createElement(StatusPill, {
      status: c === 'done' ? 'success' : c === 'in_progress' ? 'warning' : c === 'review' ? 'info' : 'neutral'
    }, t(`projects.status.${c}`)), /*#__PURE__*/React.createElement("span", {
      className: "board-col__count"
    }, rows.length)), /*#__PURE__*/React.createElement("button", {
      className: "board-col__add",
      "aria-label": "Add"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 14
    }))), /*#__PURE__*/React.createElement("div", {
      className: "board-col__body"
    }, rows.map(r => /*#__PURE__*/React.createElement("div", {
      key: r.id,
      className: "board-card",
      onClick: () => onOpen(r.id)
    }, /*#__PURE__*/React.createElement("div", {
      className: "board-card__head"
    }, /*#__PURE__*/React.createElement(PriorityDot, {
      priority: r.priority
    }), /*#__PURE__*/React.createElement(Tag, {
      tone: "neutral"
    }, "#", r.tag), /*#__PURE__*/React.createElement("span", {
      className: "board-card__id"
    }, r.id)), /*#__PURE__*/React.createElement("div", {
      className: "board-card__title"
    }, r.title[lang] || r.title.en), /*#__PURE__*/React.createElement("div", {
      className: "board-card__foot"
    }, /*#__PURE__*/React.createElement(Avatar, {
      initials: r.assignee.initials,
      size: 20,
      tone: r.assignee.tone
    }), /*#__PURE__*/React.createElement("span", {
      className: "board-card__due"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 11
    }), formatDateLong(r.due, lang)), r.comments > 0 && /*#__PURE__*/React.createElement("span", {
      className: "board-card__meta"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 11
    }), r.comments))))));
  }));
}
Object.assign(window, {
  TasksView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/tasks-view.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/timeline.jsx
try { (() => {
/* eslint-disable */
/* Timeline components — two patterns for two needs.

   1) <Timeline> — vertical event rail. Best for activity feeds,
      project milestones, history. Generic items with rich card slots.

   2) <DailyAgenda> — hours-of-day "agenda" view. Events are positioned
      along an hours rail (like a calendar day). Best for schedules,
      itineraries, appointments. Supports overlaps via columns.
*/

const {
  useState: useStateTL,
  useMemo: useMemoTL
} = React;

/* ──────────────────────────────────────────────────────────────────────
   <Timeline> — event rail (existing pattern, improved)
   props:
     items: [{ id, time?, duration?, tone?, icon?, state?, title?, sub?, body?, render? }]
     groupBy: optional function returning a section label per item
     dense: tighter rhythm
   ────────────────────────────────────────────────────────────────────── */
function Timeline({
  items,
  groupBy,
  dense
}) {
  // Optional grouping
  const groups = useMemoTL(() => {
    if (!groupBy) return [{
      label: null,
      items
    }];
    const map = new Map();
    items.forEach(it => {
      const k = groupBy(it);
      if (!map.has(k)) map.set(k, []);
      map.get(k).push(it);
    });
    return Array.from(map, ([label, items]) => ({
      label,
      items
    }));
  }, [items, groupBy]);
  return /*#__PURE__*/React.createElement("div", {
    className: `axis-timeline-wrap${dense ? ' is-dense' : ''}`
  }, groups.map((g, gi) => /*#__PURE__*/React.createElement("div", {
    key: gi,
    className: "axis-timeline-group"
  }, g.label && /*#__PURE__*/React.createElement("div", {
    className: "axis-timeline-group__label"
  }, g.label), /*#__PURE__*/React.createElement("ol", {
    className: "axis-timeline"
  }, g.items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: it.id || i,
    className: `axis-timeline__item axis-timeline__item--${it.tone || 'neutral'}${it.state ? ` is-${it.state}` : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-timeline__rail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-timeline__dot"
  }, it.icon ? /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 12
  }) : null), (i < g.items.length - 1 || gi < groups.length - 1) && /*#__PURE__*/React.createElement("div", {
    className: "axis-timeline__line"
  })), /*#__PURE__*/React.createElement("div", {
    className: "axis-timeline__content"
  }, it.render ? it.render(it) : /*#__PURE__*/React.createElement(React.Fragment, null, (it.time || it.duration) && /*#__PURE__*/React.createElement("div", {
    className: "axis-timeline__meta"
  }, it.time && /*#__PURE__*/React.createElement("span", {
    className: "axis-timeline__time"
  }, it.time), it.duration && /*#__PURE__*/React.createElement("span", {
    className: "axis-timeline__duration"
  }, it.duration)), it.title && /*#__PURE__*/React.createElement("div", {
    className: "axis-timeline__title"
  }, it.title), it.sub && /*#__PURE__*/React.createElement("div", {
    className: "axis-timeline__sub"
  }, it.sub), it.body && /*#__PURE__*/React.createElement("div", {
    className: "axis-timeline__body"
  }, it.body)))))))));
}

/* ──────────────────────────────────────────────────────────────────────
   <DailyAgenda> — hours-of-day view with positioned events
   props:
     events: [{ id, start: 'HH:mm', durationMin: number, tone?, icon?, title, sub?, state?, onClick? }]
     hourStart: 6, hourEnd: 22 (defaults)
     hourHeight: pixels per hour (default 64)
     currentTime: optional ISO 'HH:mm' to highlight "now"
     dir: 'ltr' | 'rtl' (auto-detected from document if omitted)
   ────────────────────────────────────────────────────────────────────── */
function DailyAgenda({
  events,
  hourStart = 6,
  hourEnd = 22,
  hourHeight = 64,
  currentTime,
  onEventClick
}) {
  const t = useT();
  const lang = useLang();

  // Build hour rows
  const hours = [];
  for (let h = hourStart; h <= hourEnd; h++) hours.push(h);
  const totalHeight = (hourEnd - hourStart) * hourHeight;

  // Lay out events into columns (greedy interval packing for overlaps)
  const placed = useMemoTL(() => {
    const sorted = [...events].sort((a, b) => mins(a.start) - mins(b.start));
    const cols = [];
    return sorted.map(ev => {
      const s = mins(ev.start),
        e = s + ev.durationMin;
      let col = 0;
      for (; col < cols.length; col++) if (cols[col] <= s) break;
      cols[col] = e;
      return {
        ...ev,
        col,
        start: s,
        end: e
      };
    }).map(ev => ({
      ...ev,
      totalCols: cols.length
    }));
  }, [events]);
  const nowMin = currentTime ? mins(currentTime) : null;
  const showNow = nowMin != null && nowMin >= hourStart * 60 && nowMin <= hourEnd * 60;
  function eventStyle(ev) {
    const top = (ev.start - hourStart * 60) / 60 * hourHeight;
    const height = Math.max(28, ev.durationMin / 60 * hourHeight - 2);
    const widthPct = 100 / ev.totalCols;
    const leftPct = ev.col * widthPct;
    return {
      top: `${top}px`,
      height: `${height}px`,
      insetInlineStart: `${leftPct}%`,
      width: `calc(${widthPct}% - 6px)`
    };
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "axis-agenda",
    style: {
      ['--hour-h']: `${hourHeight}px`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-agenda__rail",
    style: {
      height: totalHeight
    }
  }, hours.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: h,
    className: "axis-agenda__hour",
    style: {
      top: i * hourHeight
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "axis-agenda__hour-label"
  }, format12Hour(h, t)), /*#__PURE__*/React.createElement("span", {
    className: "axis-agenda__hour-line"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "axis-agenda__events",
    style: {
      height: totalHeight
    }
  }, hours.slice(0, -1).map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: h,
    className: "axis-agenda__gridline",
    style: {
      top: (i + 1) * hourHeight
    }
  })), showNow && /*#__PURE__*/React.createElement("div", {
    className: "axis-agenda__now",
    style: {
      top: (nowMin - hourStart * 60) / 60 * hourHeight
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "axis-agenda__now-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "axis-agenda__now-line"
  }), /*#__PURE__*/React.createElement("span", {
    className: "axis-agenda__now-label"
  }, format12(currentTime, t))), placed.map(ev => /*#__PURE__*/React.createElement("div", {
    key: ev.id,
    className: `axis-agenda__event axis-agenda__event--${ev.tone || 'iris'}${ev.state ? ` is-${ev.state}` : ''}`,
    style: eventStyle(ev),
    onClick: () => onEventClick && onEventClick(ev.id),
    role: onEventClick ? 'button' : undefined,
    tabIndex: onEventClick ? 0 : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-agenda__event-bar"
  }), /*#__PURE__*/React.createElement("div", {
    className: "axis-agenda__event-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-agenda__event-head"
  }, ev.icon && /*#__PURE__*/React.createElement(Icon, {
    name: ev.icon,
    size: 12
  }), /*#__PURE__*/React.createElement("span", {
    className: "axis-agenda__event-time"
  }, format12(toHHmm(ev.start), t), " \u2013 ", format12(toHHmm(ev.end), t))), /*#__PURE__*/React.createElement("div", {
    className: "axis-agenda__event-title"
  }, ev.title), ev.sub && /*#__PURE__*/React.createElement("div", {
    className: "axis-agenda__event-sub"
  }, ev.sub))))));
}

/* ── helpers ────────────────────────────────────────────────────────── */
function mins(hhmm) {
  const [h, m] = String(hhmm).split(':').map(Number);
  return h * 60 + (m || 0);
}
function toHHmm(min) {
  const h = Math.floor(min / 60),
    m = min % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}
function format12Hour(h24, t) {
  const mer = h24 >= 12 ? t('time.pm') || 'PM' : t('time.am') || 'AM';
  const h12 = (h24 + 11) % 12 + 1;
  return `${h12} ${mer}`;
}
Object.assign(window, {
  Timeline,
  DailyAgenda
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/timeline.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/view-switcher.jsx
try { (() => {
/* eslint-disable */
/* ViewSwitcher — segmented control with icons that picks one of:
   list, board, calendar, gantt, timeline.
   Generic — props: value, onChange, available (optional subset). */

const VIEW_DEFS = [{
  key: 'list',
  icon: 'list',
  labelKey: 'view.list'
}, {
  key: 'board',
  icon: 'kanban',
  labelKey: 'view.board'
}, {
  key: 'calendar',
  icon: 'calendar',
  labelKey: 'view.calendar'
}, {
  key: 'gantt',
  icon: 'bar-chart-2',
  labelKey: 'view.gantt'
}, {
  key: 'timeline',
  icon: 'rows-3',
  labelKey: 'view.timeline'
}];
function ViewSwitcher({
  value,
  onChange,
  available
}) {
  const t = useT();
  const opts = (available || VIEW_DEFS.map(v => v.key)).map(k => VIEW_DEFS.find(v => v.key === k)).filter(Boolean);
  return /*#__PURE__*/React.createElement("div", {
    className: "axis-view-switcher",
    role: "tablist"
  }, opts.map(v => /*#__PURE__*/React.createElement("button", {
    key: v.key,
    role: "tab",
    "aria-selected": value === v.key,
    className: `axis-view-switcher__btn${value === v.key ? ' is-on' : ''}`,
    onClick: () => onChange(v.key),
    title: t(v.labelKey)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: v.icon,
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, t(v.labelKey)))));
}
Object.assign(window, {
  ViewSwitcher
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/view-switcher.jsx", error: String((e && e.message) || e) }); }

})();
