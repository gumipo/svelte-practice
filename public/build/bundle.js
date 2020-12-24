var app = (function () {
  "use strict";
  function t() {}
  const e = (t) => t;
  function n(t, e) {
    for (const n in e) t[n] = e[n];
    return t;
  }
  function s(t) {
    return t();
  }
  function r() {
    return Object.create(null);
  }
  function o(t) {
    t.forEach(s);
  }
  function l(t) {
    return "function" == typeof t;
  }
  function i(t, e) {
    return t != t
      ? e == e
      : t !== e || (t && "object" == typeof t) || "function" == typeof t;
  }
  function c(e, n, s) {
    e.$$.on_destroy.push(
      (function (e, ...n) {
        if (null == e) return t;
        const s = e.subscribe(...n);
        return s.unsubscribe ? () => s.unsubscribe() : s;
      })(n, s)
    );
  }
  function u(t, e, n, s) {
    if (t) {
      const r = a(t, e, n, s);
      return t[0](r);
    }
  }
  function a(t, e, s, r) {
    return t[1] && r ? n(s.ctx.slice(), t[1](r(e))) : s.ctx;
  }
  function f(t, e, n, s, r, o, l) {
    const i = (function (t, e, n, s) {
      if (t[2] && s) {
        const r = t[2](s(n));
        if (void 0 === e.dirty) return r;
        if ("object" == typeof r) {
          const t = [],
            n = Math.max(e.dirty.length, r.length);
          for (let s = 0; s < n; s += 1) t[s] = e.dirty[s] | r[s];
          return t;
        }
        return e.dirty | r;
      }
      return e.dirty;
    })(e, s, r, o);
    if (i) {
      const r = a(e, n, s, l);
      t.p(r, i);
    }
  }
  function d(t) {
    return null == t ? "" : t;
  }
  const p = "undefined" != typeof window;
  let $ = p ? () => window.performance.now() : () => Date.now(),
    m = p ? (t) => requestAnimationFrame(t) : t;
  const h = new Set();
  function g(t) {
    h.forEach((e) => {
      e.c(t) || (h.delete(e), e.f());
    }),
      0 !== h.size && m(g);
  }
  function v(t) {
    let e;
    return (
      0 === h.size && m(g),
      {
        promise: new Promise((n) => {
          h.add((e = { c: t, f: n }));
        }),
        abort() {
          h.delete(e);
        },
      }
    );
  }
  function y(t, e) {
    t.appendChild(e);
  }
  function w(t, e, n) {
    t.insertBefore(e, n || null);
  }
  function b(t) {
    t.parentNode.removeChild(t);
  }
  function x(t) {
    return document.createElement(t);
  }
  function _(t) {
    return document.createTextNode(t);
  }
  function q() {
    return _(" ");
  }
  function A(t, e, n, s) {
    return t.addEventListener(e, n, s), () => t.removeEventListener(e, n, s);
  }
  function k(t, e, n) {
    null == n
      ? t.removeAttribute(e)
      : t.getAttribute(e) !== n && t.setAttribute(e, n);
  }
  function B(t, e) {
    (e = "" + e), t.wholeText !== e && (t.data = e);
  }
  function C(t, e) {
    t.value = null == e ? "" : e;
  }
  function E(t, e, n, s) {
    t.style.setProperty(e, n, s ? "important" : "");
  }
  function M(t, e, n) {
    t.classList[n ? "add" : "remove"](e);
  }
  function P(t, e) {
    const n = document.createEvent("CustomEvent");
    return n.initCustomEvent(t, !1, !1, e), n;
  }
  const j = new Set();
  let S,
    O = 0;
  function R(t, e, n, s, r, o, l, i = 0) {
    const c = 16.666 / s;
    let u = "{\n";
    for (let t = 0; t <= 1; t += c) {
      const s = e + (n - e) * o(t);
      u += 100 * t + `%{${l(s, 1 - s)}}\n`;
    }
    const a = u + `100% {${l(n, 1 - n)}}\n}`,
      f = `__svelte_${(function (t) {
        let e = 5381,
          n = t.length;
        for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
        return e >>> 0;
      })(a)}_${i}`,
      d = t.ownerDocument;
    j.add(d);
    const p =
        d.__svelte_stylesheet ||
        (d.__svelte_stylesheet = d.head.appendChild(x("style")).sheet),
      $ = d.__svelte_rules || (d.__svelte_rules = {});
    $[f] ||
      (($[f] = !0), p.insertRule(`@keyframes ${f} ${a}`, p.cssRules.length));
    const m = t.style.animation || "";
    return (
      (t.style.animation = `${
        m ? `${m}, ` : ""
      }${f} ${s}ms linear ${r}ms 1 both`),
      (O += 1),
      f
    );
  }
  function T(t, e) {
    const n = (t.style.animation || "").split(", "),
      s = n.filter(
        e ? (t) => t.indexOf(e) < 0 : (t) => -1 === t.indexOf("__svelte")
      ),
      r = n.length - s.length;
    r &&
      ((t.style.animation = s.join(", ")),
      (O -= r),
      O ||
        m(() => {
          O ||
            (j.forEach((t) => {
              const e = t.__svelte_stylesheet;
              let n = e.cssRules.length;
              for (; n--; ) e.deleteRule(n);
              t.__svelte_rules = {};
            }),
            j.clear());
        }));
  }
  function D(t, e) {
    const n = t.getBoundingClientRect();
    if (e.left !== n.left || e.top !== n.top) {
      const s = getComputedStyle(t),
        r = "none" === s.transform ? "" : s.transform;
      t.style.transform = `${r} translate(${e.left - n.left}px, ${
        e.top - n.top
      }px)`;
    }
  }
  function I(t) {
    S = t;
  }
  function L() {
    const t = (function () {
      if (!S)
        throw new Error("Function called outside component initialization");
      return S;
    })();
    return (e, n) => {
      const s = t.$$.callbacks[e];
      if (s) {
        const r = P(e, n);
        s.slice().forEach((e) => {
          e.call(t, r);
        });
      }
    };
  }
  const N = [],
    z = [],
    H = [],
    V = [],
    F = Promise.resolve();
  let Q = !1;
  function W(t) {
    H.push(t);
  }
  let G = !1;
  const J = new Set();
  function K() {
    if (!G) {
      G = !0;
      do {
        for (let t = 0; t < N.length; t += 1) {
          const e = N[t];
          I(e), U(e.$$);
        }
        for (I(null), N.length = 0; z.length; ) z.pop()();
        for (let t = 0; t < H.length; t += 1) {
          const e = H[t];
          J.has(e) || (J.add(e), e());
        }
        H.length = 0;
      } while (N.length);
      for (; V.length; ) V.pop()();
      (Q = !1), (G = !1), J.clear();
    }
  }
  function U(t) {
    if (null !== t.fragment) {
      t.update(), o(t.before_update);
      const e = t.dirty;
      (t.dirty = [-1]),
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(W);
    }
  }
  let X;
  function Y() {
    return (
      X ||
        ((X = Promise.resolve()),
        X.then(() => {
          X = null;
        })),
      X
    );
  }
  function Z(t, e, n) {
    t.dispatchEvent(P(`${e ? "intro" : "outro"}${n}`));
  }
  const tt = new Set();
  let et;
  function nt() {
    et = { r: 0, c: [], p: et };
  }
  function st() {
    et.r || o(et.c), (et = et.p);
  }
  function rt(t, e) {
    t && t.i && (tt.delete(t), t.i(e));
  }
  function ot(t, e, n, s) {
    if (t && t.o) {
      if (tt.has(t)) return;
      tt.add(t),
        et.c.push(() => {
          tt.delete(t), s && (n && t.d(1), s());
        }),
        t.o(e);
    }
  }
  const lt = { duration: 0 };
  function it(t, e) {
    t.f(),
      (function (t, e) {
        ot(t, 1, 1, () => {
          e.delete(t.key);
        });
      })(t, e);
  }
  function ct(t) {
    t && t.c();
  }
  function ut(t, e, n) {
    const { fragment: r, on_mount: i, on_destroy: c, after_update: u } = t.$$;
    r && r.m(e, n),
      W(() => {
        const e = i.map(s).filter(l);
        c ? c.push(...e) : o(e), (t.$$.on_mount = []);
      }),
      u.forEach(W);
  }
  function at(t, e) {
    const n = t.$$;
    null !== n.fragment &&
      (o(n.on_destroy),
      n.fragment && n.fragment.d(e),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }
  function ft(t, e) {
    -1 === t.$$.dirty[0] &&
      (N.push(t), Q || ((Q = !0), F.then(K)), t.$$.dirty.fill(0)),
      (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }
  function dt(e, n, s, l, i, c, u = [-1]) {
    const a = S;
    I(e);
    const f = n.props || {},
      d = (e.$$ = {
        fragment: null,
        ctx: null,
        props: c,
        update: t,
        not_equal: i,
        bound: r(),
        on_mount: [],
        on_destroy: [],
        before_update: [],
        after_update: [],
        context: new Map(a ? a.$$.context : []),
        callbacks: r(),
        dirty: u,
        skip_bound: !1,
      });
    let p = !1;
    if (
      ((d.ctx = s
        ? s(e, f, (t, n, ...s) => {
            const r = s.length ? s[0] : n;
            return (
              d.ctx &&
                i(d.ctx[t], (d.ctx[t] = r)) &&
                (!d.skip_bound && d.bound[t] && d.bound[t](r), p && ft(e, t)),
              n
            );
          })
        : []),
      d.update(),
      (p = !0),
      o(d.before_update),
      (d.fragment = !!l && l(d.ctx)),
      n.target)
    ) {
      if (n.hydrate) {
        const t = (function (t) {
          return Array.from(t.childNodes);
        })(n.target);
        d.fragment && d.fragment.l(t), t.forEach(b);
      } else d.fragment && d.fragment.c();
      n.intro && rt(e.$$.fragment), ut(e, n.target, n.anchor), K();
    }
    I(a);
  }
  class pt {
    $destroy() {
      at(this, 1), (this.$destroy = t);
    }
    $on(t, e) {
      const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return (
        n.push(e),
        () => {
          const t = n.indexOf(e);
          -1 !== t && n.splice(t, 1);
        }
      );
    }
    $set(t) {
      var e;
      this.$$set &&
        ((e = t), 0 !== Object.keys(e).length) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
  }
  function $t(e) {
    let n;
    return {
      c() {
        (n = x("header")),
          (n.innerHTML =
            '<h1 class="svelte-1861trt"><img src="/images/svelte.png" alt="svelte logo" class="svelte-1861trt"/></h1>'),
          k(n, "class", "svelte-1861trt");
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && b(n);
      },
    };
  }
  class mt extends pt {
    constructor(t) {
      super(), dt(this, t, null, $t, i, {});
    }
  }
  function ht(e) {
    let n;
    return {
      c() {
        (n = x("footer")),
          (n.innerHTML =
            '<div class="copyright svelte-6xwcu5">Copyright 2020 gumipo</div>'),
          k(n, "class", "svelte-6xwcu5");
      },
      m(t, e) {
        w(t, n, e);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && b(n);
      },
    };
  }
  class gt extends pt {
    constructor(t) {
      super(), dt(this, t, null, ht, i, {});
    }
  }
  function vt(t, e, n) {
    const s = t.slice();
    return (s[4] = e[n]), s;
  }
  function yt(t) {
    let e,
      n,
      s,
      r,
      o,
      l,
      i = t[4] + "";
    function c() {
      return t[3](t[4]);
    }
    return {
      c() {
        (e = x("li")),
          (n = x("div")),
          (s = _(i)),
          (r = q()),
          k(n, "class", "svelte-1uvsiwd"),
          M(n, "active", t[4] === t[1]),
          k(e, "class", "svelte-1uvsiwd");
      },
      m(t, i) {
        w(t, e, i),
          y(e, n),
          y(n, s),
          y(e, r),
          o || ((l = A(e, "click", c)), (o = !0));
      },
      p(e, r) {
        (t = e),
          1 & r && i !== (i = t[4] + "") && B(s, i),
          3 & r && M(n, "active", t[4] === t[1]);
      },
      d(t) {
        t && b(e), (o = !1), l();
      },
    };
  }
  function wt(e) {
    let n,
      s,
      r = e[0],
      o = [];
    for (let t = 0; t < r.length; t += 1) o[t] = yt(vt(e, r, t));
    return {
      c() {
        (n = x("div")), (s = x("ul"));
        for (let t = 0; t < o.length; t += 1) o[t].c();
        k(s, "class", "svelte-1uvsiwd"), k(n, "class", "tabs svelte-1uvsiwd");
      },
      m(t, e) {
        w(t, n, e), y(n, s);
        for (let t = 0; t < o.length; t += 1) o[t].m(s, null);
      },
      p(t, [e]) {
        if (7 & e) {
          let n;
          for (r = t[0], n = 0; n < r.length; n += 1) {
            const l = vt(t, r, n);
            o[n] ? o[n].p(l, e) : ((o[n] = yt(l)), o[n].c(), o[n].m(s, null));
          }
          for (; n < o.length; n += 1) o[n].d(1);
          o.length = r.length;
        }
      },
      i: t,
      o: t,
      d(t) {
        t && b(n),
          (function (t, e) {
            for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
          })(o, t);
      },
    };
  }
  function bt(t, e, n) {
    const s = L();
    let { items: r } = e,
      { activeItem: o } = e;
    return (
      (t.$$set = (t) => {
        "items" in t && n(0, (r = t.items)),
          "activeItem" in t && n(1, (o = t.activeItem));
      }),
      [r, o, s, (t) => s("tabChange", t)]
    );
  }
  class xt extends pt {
    constructor(t) {
      super(), dt(this, t, bt, wt, i, { items: 0, activeItem: 1 });
    }
  }
  const _t = [];
  function qt(e, n = t) {
    let s;
    const r = [];
    function o(t) {
      if (i(e, t) && ((e = t), s)) {
        const t = !_t.length;
        for (let t = 0; t < r.length; t += 1) {
          const n = r[t];
          n[1](), _t.push(n, e);
        }
        if (t) {
          for (let t = 0; t < _t.length; t += 2) _t[t][0](_t[t + 1]);
          _t.length = 0;
        }
      }
    }
    return {
      set: o,
      update: function (t) {
        o(t(e));
      },
      subscribe: function (l, i = t) {
        const c = [l, i];
        return (
          r.push(c),
          1 === r.length && (s = n(o) || t),
          l(e),
          () => {
            const t = r.indexOf(c);
            -1 !== t && r.splice(t, 1), 0 === r.length && (s(), (s = null));
          }
        );
      },
    };
  }
  const At = qt([
    {
      id: 1,
      question: "React or Vue",
      answerA: "React",
      answerB: "Vue",
      votesA: 9,
      votesB: 15,
    },
  ]);
  function kt(t) {
    let e, n, s, r, o;
    const l = t[4].default,
      i = u(l, t, t[3], null);
    return {
      c() {
        (e = x("button")),
          i && i.c(),
          k(e, "class", (n = d(t[0]) + " svelte-1q886xq")),
          M(e, "flat", t[1]),
          M(e, "inverse", t[2]);
      },
      m(n, l) {
        w(n, e, l),
          i && i.m(e, null),
          (s = !0),
          r || ((o = A(e, "click", t[5])), (r = !0));
      },
      p(t, [r]) {
        i && i.p && 8 & r && f(i, l, t, t[3], r, null, null),
          (!s || (1 & r && n !== (n = d(t[0]) + " svelte-1q886xq"))) &&
            k(e, "class", n),
          3 & r && M(e, "flat", t[1]),
          5 & r && M(e, "inverse", t[2]);
      },
      i(t) {
        s || (rt(i, t), (s = !0));
      },
      o(t) {
        ot(i, t), (s = !1);
      },
      d(t) {
        t && b(e), i && i.d(t), (r = !1), o();
      },
    };
  }
  function Bt(t, e, n) {
    let { $$slots: s = {}, $$scope: r } = e,
      { type: o = "primary" } = e,
      { flat: l = !1 } = e,
      { inverse: i = !1 } = e;
    return (
      (t.$$set = (t) => {
        "type" in t && n(0, (o = t.type)),
          "flat" in t && n(1, (l = t.flat)),
          "inverse" in t && n(2, (i = t.inverse)),
          "$$scope" in t && n(3, (r = t.$$scope));
      }),
      [
        o,
        l,
        i,
        r,
        s,
        function (e) {
          !(function (t, e) {
            const n = t.$$.callbacks[e.type];
            n && n.slice().forEach((t) => t(e));
          })(t, e);
        },
      ]
    );
  }
  class Ct extends pt {
    constructor(t) {
      super(), dt(this, t, Bt, kt, i, { type: 0, flat: 1, inverse: 2 });
    }
  }
  function Et(t) {
    let e;
    return {
      c() {
        e = _("Add Poll");
      },
      m(t, n) {
        w(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Mt(t) {
    let e,
      n,
      s,
      r,
      l,
      i,
      c,
      u,
      a,
      f,
      d,
      p,
      $,
      m,
      h,
      g,
      v,
      E,
      M,
      P,
      j,
      S,
      O,
      R,
      T,
      D,
      I,
      L,
      N,
      z = t[2].question + "",
      H = t[2].answerA + "",
      V = t[2].answerB + "";
    return (
      (D = new Ct({
        props: {
          type: t[1],
          flat: !0,
          $$slots: { default: [Et] },
          $$scope: { ctx: t },
        },
      })),
      {
        c() {
          (e = x("form")),
            (n = x("div")),
            (s = x("label")),
            (s.textContent = "Poll Question:"),
            (r = q()),
            (l = x("input")),
            (i = q()),
            (c = x("div")),
            (u = _(z)),
            (a = q()),
            (f = x("div")),
            (d = x("label")),
            (d.textContent = "Answer A:"),
            (p = q()),
            ($ = x("input")),
            (m = q()),
            (h = x("div")),
            (g = _(H)),
            (v = q()),
            (E = x("div")),
            (M = x("label")),
            (M.textContent = "Answer B:"),
            (P = q()),
            (j = x("input")),
            (S = q()),
            (O = x("div")),
            (R = _(V)),
            (T = q()),
            ct(D.$$.fragment),
            k(s, "for", "question"),
            k(s, "class", "svelte-1ub4sem"),
            k(l, "type", "text"),
            k(l, "id", "question"),
            k(l, "class", "svelte-1ub4sem"),
            k(c, "class", "error svelte-1ub4sem"),
            k(n, "class", "form-field svelte-1ub4sem"),
            k(d, "for", "answer-a"),
            k(d, "class", "svelte-1ub4sem"),
            k($, "type", "text"),
            k($, "id", "answer-a"),
            k($, "class", "svelte-1ub4sem"),
            k(h, "class", "error svelte-1ub4sem"),
            k(f, "class", "form-field svelte-1ub4sem"),
            k(M, "for", "answer-b"),
            k(M, "class", "svelte-1ub4sem"),
            k(j, "type", "text"),
            k(j, "id", "answer-b"),
            k(j, "class", "svelte-1ub4sem"),
            k(O, "class", "error svelte-1ub4sem"),
            k(E, "class", "form-field svelte-1ub4sem"),
            k(e, "class", "svelte-1ub4sem");
        },
        m(o, b) {
          var x;
          w(o, e, b),
            y(e, n),
            y(n, s),
            y(n, r),
            y(n, l),
            C(l, t[0].question),
            y(n, i),
            y(n, c),
            y(c, u),
            y(e, a),
            y(e, f),
            y(f, d),
            y(f, p),
            y(f, $),
            C($, t[0].answerA),
            y(f, m),
            y(f, h),
            y(h, g),
            y(e, v),
            y(e, E),
            y(E, M),
            y(E, P),
            y(E, j),
            C(j, t[0].answerB),
            y(E, S),
            y(E, O),
            y(O, R),
            y(E, T),
            ut(D, E, null),
            (I = !0),
            L ||
              ((N = [
                A(l, "input", t[4]),
                A($, "input", t[5]),
                A(j, "input", t[6]),
                A(
                  e,
                  "submit",
                  ((x = t[3]),
                  function (t) {
                    return t.preventDefault(), x.call(this, t);
                  })
                ),
              ]),
              (L = !0));
        },
        p(t, [e]) {
          1 & e && l.value !== t[0].question && C(l, t[0].question),
            (!I || 4 & e) && z !== (z = t[2].question + "") && B(u, z),
            1 & e && $.value !== t[0].answerA && C($, t[0].answerA),
            (!I || 4 & e) && H !== (H = t[2].answerA + "") && B(g, H),
            1 & e && j.value !== t[0].answerB && C(j, t[0].answerB),
            (!I || 4 & e) && V !== (V = t[2].answerB + "") && B(R, V);
          const n = {};
          2 & e && (n.type = t[1]),
            512 & e && (n.$$scope = { dirty: e, ctx: t }),
            D.$set(n);
        },
        i(t) {
          I || (rt(D.$$.fragment, t), (I = !0));
        },
        o(t) {
          ot(D.$$.fragment, t), (I = !1);
        },
        d(t) {
          t && b(e), at(D), (L = !1), o(N);
        },
      }
    );
  }
  function Pt(t, e, n) {
    let s = L(),
      r = "secondary",
      o = { question: "", answerA: "", answerB: "" },
      l = { question: "", answerA: "", answerB: "" },
      i = !1;
    return (
      (t.$$.update = () => {
        1 & t.$$.dirty &&
          (o.question.length >= 5 &&
          o.answerA.length >= 1 &&
          o.answerB.length >= 1
            ? n(1, (r = "primary"))
            : n(1, (r = "secondary")));
      }),
      [
        o,
        r,
        l,
        () => {
          if (
            ((i = !0),
            o.question.trim().length < 5
              ? ((i = !1),
                n(2, (l.question = "５文字以上の入力してください"), l))
              : n(2, (l.question = ""), l),
            o.answerA.trim().length < 1
              ? ((i = !1), n(2, (l.answerA = "AnswerAがありません"), l))
              : n(2, (l.answerA = ""), l),
            o.answerB.trim().length < 1
              ? ((i = !1), n(2, (l.answerB = "AnswerBがありません"), l))
              : n(2, (l.answerB = ""), l),
            i)
          ) {
            const t = Math.floor(100 * Math.random());
            let e = Object.assign(Object.assign({}, o), {
              votesA: 0,
              votesB: 0,
              id: t,
            });
            At.update((t) => [e, ...t]), s("add");
          }
        },
        function () {
          (o.question = this.value), n(0, o);
        },
        function () {
          (o.answerA = this.value), n(0, o);
        },
        function () {
          (o.answerB = this.value), n(0, o);
        },
      ]
    );
  }
  class jt extends pt {
    constructor(t) {
      super(), dt(this, t, Pt, Mt, i, {});
    }
  }
  function St(t) {
    const e = t - 1;
    return e * e * e + 1;
  }
  function Ot(t, { delay: n = 0, duration: s = 400, easing: r = e }) {
    const o = +getComputedStyle(t).opacity;
    return {
      delay: n,
      duration: s,
      easing: r,
      css: (t) => "opacity: " + t * o,
    };
  }
  function Rt(
    t,
    {
      delay: e = 0,
      duration: n = 400,
      easing: s = St,
      start: r = 0,
      opacity: o = 0,
    }
  ) {
    const l = getComputedStyle(t),
      i = +l.opacity,
      c = "none" === l.transform ? "" : l.transform,
      u = 1 - r,
      a = i * (1 - o);
    return {
      delay: e,
      duration: n,
      easing: s,
      css: (t, e) =>
        `\n\t\t\ttransform: ${c} scale(${1 - u * e});\n\t\t\topacity: ${
          i - a * e
        }\n\t\t`,
    };
  }
  function Tt(t, e, n) {
    const s = getComputedStyle(t),
      r = "none" === s.transform ? "" : s.transform,
      o = e.from.width / t.clientWidth,
      i = e.from.height / t.clientHeight,
      c = (e.from.left - e.to.left) / o,
      u = (e.from.top - e.to.top) / i,
      a = Math.sqrt(c * c + u * u),
      {
        delay: f = 0,
        duration: d = (t) => 120 * Math.sqrt(t),
        easing: p = St,
      } = n;
    return {
      delay: f,
      duration: l(d) ? d(a) : d,
      easing: p,
      css: (t, e) => `transform: ${r} translate(${e * c}px, ${e * u}px);`,
    };
  }
  function Dt(t) {
    let e, n;
    const s = t[1].default,
      r = u(s, t, t[0], null);
    return {
      c() {
        (e = x("div")), r && r.c(), k(e, "class", "card svelte-1120set");
      },
      m(t, s) {
        w(t, e, s), r && r.m(e, null), (n = !0);
      },
      p(t, [e]) {
        r && r.p && 1 & e && f(r, s, t, t[0], e, null, null);
      },
      i(t) {
        n || (rt(r, t), (n = !0));
      },
      o(t) {
        ot(r, t), (n = !1);
      },
      d(t) {
        t && b(e), r && r.d(t);
      },
    };
  }
  function It(t, e, n) {
    let { $$slots: s = {}, $$scope: r } = e;
    return (
      (t.$$set = (t) => {
        "$$scope" in t && n(0, (r = t.$$scope));
      }),
      [r, s]
    );
  }
  class Lt extends pt {
    constructor(t) {
      super(), dt(this, t, It, Dt, i, {});
    }
  }
  function Nt(t) {
    return "[object Date]" === Object.prototype.toString.call(t);
  }
  function zt(t, e) {
    if (t === e || t != t) return () => t;
    const n = typeof t;
    if (n !== typeof e || Array.isArray(t) !== Array.isArray(e))
      throw new Error("Cannot interpolate values of different type");
    if (Array.isArray(t)) {
      const n = e.map((e, n) => zt(t[n], e));
      return (t) => n.map((e) => e(t));
    }
    if ("object" === n) {
      if (!t || !e) throw new Error("Object cannot be null");
      if (Nt(t) && Nt(e)) {
        t = t.getTime();
        const n = (e = e.getTime()) - t;
        return (e) => new Date(t + e * n);
      }
      const n = Object.keys(e),
        s = {};
      return (
        n.forEach((n) => {
          s[n] = zt(t[n], e[n]);
        }),
        (t) => {
          const e = {};
          return (
            n.forEach((n) => {
              e[n] = s[n](t);
            }),
            e
          );
        }
      );
    }
    if ("number" === n) {
      const n = e - t;
      return (e) => t + e * n;
    }
    throw new Error(`Cannot interpolate ${n} values`);
  }
  function Ht(t, s = {}) {
    const r = qt(t);
    let o,
      l = t;
    function i(i, c) {
      if (null == t) return r.set((t = i)), Promise.resolve();
      l = i;
      let u = o,
        a = !1,
        {
          delay: f = 0,
          duration: d = 400,
          easing: p = e,
          interpolate: m = zt,
        } = n(n({}, s), c);
      if (0 === d)
        return u && (u.abort(), (u = null)), r.set((t = l)), Promise.resolve();
      const h = $() + f;
      let g;
      return (
        (o = v((e) => {
          if (e < h) return !0;
          a ||
            ((g = m(t, i)), "function" == typeof d && (d = d(t, i)), (a = !0)),
            u && (u.abort(), (u = null));
          const n = e - h;
          return n > d ? (r.set((t = i)), !1) : (r.set((t = g(p(n / d)))), !0);
        })),
        o.promise
      );
    }
    return { set: i, update: (e, n) => i(e(l, t), n), subscribe: r.subscribe };
  }
  function Vt(t) {
    let e;
    return {
      c() {
        e = _("Delete");
      },
      m(t, n) {
        w(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Ft(t) {
    let e,
      n,
      s,
      r,
      l,
      i,
      c,
      u,
      a,
      f,
      d,
      p,
      $,
      m,
      h,
      g,
      v,
      C,
      M,
      P,
      j,
      S,
      O,
      R,
      T,
      D,
      I,
      L,
      N,
      z,
      H,
      V = t[0].question + "",
      F = t[0].answerA + "",
      Q = t[0].votesA + "",
      W = t[0].answerB + "",
      G = t[0].votesB + "";
    return (
      (L = new Ct({
        props: {
          flat: !0,
          type: "secondary",
          $$slots: { default: [Vt] },
          $$scope: { ctx: t },
        },
      })),
      L.$on("click", t[12]),
      {
        c() {
          (e = x("div")),
            (n = x("h3")),
            (s = _(V)),
            (r = q()),
            (l = x("p")),
            (i = _("Total Votes : ")),
            (c = _(t[1])),
            (u = q()),
            (a = x("div")),
            (f = x("div")),
            (d = q()),
            (p = x("span")),
            ($ = _(F)),
            (m = _(" (")),
            (h = _(Q)),
            (g = _(")")),
            (v = q()),
            (C = x("div")),
            (M = x("div")),
            (P = q()),
            (j = x("span")),
            (S = _(W)),
            (O = _(" (")),
            (R = _(G)),
            (T = _(")")),
            (D = q()),
            (I = x("div")),
            ct(L.$$.fragment),
            k(n, "class", "svelte-mqoqxg"),
            k(l, "class", "svelte-mqoqxg"),
            k(f, "class", "percent percent-a svelte-mqoqxg"),
            E(f, "width", t[2] + "%"),
            k(p, "class", "svelte-mqoqxg"),
            k(a, "class", "answer svelte-mqoqxg"),
            k(M, "class", "percent percent-b svelte-mqoqxg"),
            E(M, "width", t[3] + "%"),
            k(j, "class", "svelte-mqoqxg"),
            k(C, "class", "answer svelte-mqoqxg"),
            k(I, "class", "delete svelte-mqoqxg"),
            k(e, "class", "poll");
        },
        m(o, b) {
          w(o, e, b),
            y(e, n),
            y(n, s),
            y(e, r),
            y(e, l),
            y(l, i),
            y(l, c),
            y(e, u),
            y(e, a),
            y(a, f),
            y(a, d),
            y(a, p),
            y(p, $),
            y(p, m),
            y(p, h),
            y(p, g),
            y(e, v),
            y(e, C),
            y(C, M),
            y(C, P),
            y(C, j),
            y(j, S),
            y(j, O),
            y(j, R),
            y(j, T),
            y(e, D),
            y(e, I),
            ut(L, I, null),
            (N = !0),
            z || ((H = [A(a, "click", t[10]), A(C, "click", t[11])]), (z = !0));
        },
        p(t, e) {
          (!N || 1 & e) && V !== (V = t[0].question + "") && B(s, V),
            (!N || 2 & e) && B(c, t[1]),
            (!N || 4 & e) && E(f, "width", t[2] + "%"),
            (!N || 1 & e) && F !== (F = t[0].answerA + "") && B($, F),
            (!N || 1 & e) && Q !== (Q = t[0].votesA + "") && B(h, Q),
            (!N || 8 & e) && E(M, "width", t[3] + "%"),
            (!N || 1 & e) && W !== (W = t[0].answerB + "") && B(S, W),
            (!N || 1 & e) && G !== (G = t[0].votesB + "") && B(R, G);
          const n = {};
          8192 & e && (n.$$scope = { dirty: e, ctx: t }), L.$set(n);
        },
        i(t) {
          N || (rt(L.$$.fragment, t), (N = !0));
        },
        o(t) {
          ot(L.$$.fragment, t), (N = !1);
        },
        d(t) {
          t && b(e), at(L), (z = !1), o(H);
        },
      }
    );
  }
  function Qt(t) {
    let e, n;
    return (
      (e = new Lt({
        props: { $$slots: { default: [Ft] }, $$scope: { ctx: t } },
      })),
      {
        c() {
          ct(e.$$.fragment);
        },
        m(t, s) {
          ut(e, t, s), (n = !0);
        },
        p(t, [n]) {
          const s = {};
          8207 & n && (s.$$scope = { dirty: n, ctx: t }), e.$set(s);
        },
        i(t) {
          n || (rt(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          ot(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          at(e, t);
        },
      }
    );
  }
  function Wt(t, e, n) {
    let s,
      r,
      { poll: o } = e;
    const l = Ht(0);
    c(t, l, (t) => n(2, (s = t)));
    const i = Ht(0);
    c(t, i, (t) => n(3, (r = t)));
    const u = (t, e) => {
        At.update((n) => {
          let s = [...n],
            r = s.find((t) => t.id === e);
          return "a" === t && r.votesA++, "b" === t && r.votesB++, s;
        });
      },
      a = (t) => {
        At.update((e) => e.filter((e) => e.id != t));
      };
    let f, d, p;
    return (
      (t.$$set = (t) => {
        "poll" in t && n(0, (o = t.poll));
      }),
      (t.$$.update = () => {
        1 & t.$$.dirty && n(1, (f = o.votesA + o.votesB)),
          3 & t.$$.dirty && n(8, (d = Math.floor((100 / f) * o.votesA) || 0)),
          3 & t.$$.dirty && n(9, (p = Math.floor((100 / f) * o.votesB) || 0)),
          256 & t.$$.dirty && l.set(d),
          512 & t.$$.dirty && i.set(p);
      }),
      [
        o,
        f,
        s,
        r,
        l,
        i,
        u,
        a,
        d,
        p,
        () => u("a", o.id),
        () => u("b", o.id),
        () => a(o.id),
      ]
    );
  }
  class Gt extends pt {
    constructor(t) {
      super(), dt(this, t, Wt, Qt, i, { poll: 0 });
    }
  }
  function Jt(t, e, n) {
    const s = t.slice();
    return (s[1] = e[n]), s;
  }
  function Kt(t) {
    let e;
    return {
      c() {
        (e = x("div")),
          (e.innerHTML =
            '<p class="no_poll svelte-7roc16">まだ投票先がありません</p> \n    '),
          k(e, "class", "center");
      },
      m(t, n) {
        w(t, e, n);
      },
      d(t) {
        t && b(e);
      },
    };
  }
  function Ut(n, s) {
    let r,
      i,
      c,
      u,
      a,
      f,
      d,
      p = t;
    return (
      (i = new Gt({ props: { poll: s[1] } })),
      {
        key: n,
        first: null,
        c() {
          (r = x("div")), ct(i.$$.fragment), (c = q()), (this.first = r);
        },
        m(t, e) {
          w(t, r, e), ut(i, r, null), y(r, c), (d = !0);
        },
        p(t, e) {
          const n = {};
          1 & e && (n.poll = t[1]), i.$set(n);
        },
        r() {
          f = r.getBoundingClientRect();
        },
        f() {
          !(function (t) {
            const e = getComputedStyle(t);
            if ("absolute" !== e.position && "fixed" !== e.position) {
              const { width: n, height: s } = e,
                r = t.getBoundingClientRect();
              (t.style.position = "absolute"),
                (t.style.width = n),
                (t.style.height = s),
                D(t, r);
            }
          })(r),
            p(),
            D(r, f);
        },
        a() {
          p(),
            (p = (function (n, s, r, o) {
              if (!s) return t;
              const l = n.getBoundingClientRect();
              if (
                s.left === l.left &&
                s.right === l.right &&
                s.top === l.top &&
                s.bottom === l.bottom
              )
                return t;
              const {
                delay: i = 0,
                duration: c = 300,
                easing: u = e,
                start: a = $() + i,
                end: f = a + c,
                tick: d = t,
                css: p,
              } = r(n, { from: s, to: l }, o);
              let m,
                h = !0,
                g = !1;
              function y() {
                p && T(n, m), (h = !1);
              }
              return (
                v((t) => {
                  if (
                    (!g && t >= a && (g = !0),
                    g && t >= f && (d(1, 0), y()),
                    !h)
                  )
                    return !1;
                  if (g) {
                    const e = 0 + 1 * u((t - a) / c);
                    d(e, 1 - e);
                  }
                  return !0;
                }),
                p && (m = R(n, 0, 1, c, i, u, p)),
                i || (g = !0),
                d(0, 1),
                y
              );
            })(r, f, Tt, { duration: 500 }));
        },
        i(n) {
          d ||
            (rt(i.$$.fragment, n),
            W(() => {
              a && a.end(1),
                u ||
                  (u = (function (n, s, r) {
                    let o,
                      i,
                      c = s(n, r),
                      u = !1,
                      a = 0;
                    function f() {
                      o && T(n, o);
                    }
                    function d() {
                      const {
                        delay: s = 0,
                        duration: r = 300,
                        easing: l = e,
                        tick: d = t,
                        css: p,
                      } = c || lt;
                      p && (o = R(n, 0, 1, r, s, l, p, a++)), d(0, 1);
                      const m = $() + s,
                        h = m + r;
                      i && i.abort(),
                        (u = !0),
                        W(() => Z(n, !0, "start")),
                        (i = v((t) => {
                          if (u) {
                            if (t >= h)
                              return d(1, 0), Z(n, !0, "end"), f(), (u = !1);
                            if (t >= m) {
                              const e = l((t - m) / r);
                              d(e, 1 - e);
                            }
                          }
                          return u;
                        }));
                    }
                    let p = !1;
                    return {
                      start() {
                        p || (T(n), l(c) ? ((c = c()), Y().then(d)) : d());
                      },
                      invalidate() {
                        p = !1;
                      },
                      end() {
                        u && (f(), (u = !1));
                      },
                    };
                  })(r, Ot, {})),
                u.start();
            }),
            (d = !0));
        },
        o(n) {
          ot(i.$$.fragment, n),
            u && u.invalidate(),
            n &&
              (a = (function (n, s, r) {
                let i,
                  c = s(n, r),
                  u = !0;
                const a = et;
                function f() {
                  const {
                    delay: s = 0,
                    duration: r = 300,
                    easing: l = e,
                    tick: f = t,
                    css: d,
                  } = c || lt;
                  d && (i = R(n, 1, 0, r, s, l, d));
                  const p = $() + s,
                    m = p + r;
                  W(() => Z(n, !1, "start")),
                    v((t) => {
                      if (u) {
                        if (t >= m)
                          return f(0, 1), Z(n, !1, "end"), --a.r || o(a.c), !1;
                        if (t >= p) {
                          const e = l((t - p) / r);
                          f(1 - e, e);
                        }
                      }
                      return u;
                    });
                }
                return (
                  (a.r += 1),
                  l(c)
                    ? Y().then(() => {
                        (c = c()), f();
                      })
                    : f(),
                  {
                    end(t) {
                      t && c.tick && c.tick(1, 0),
                        u && (i && T(n, i), (u = !1));
                    },
                  }
                );
              })(r, Rt, {})),
            (d = !1);
        },
        d(t) {
          t && b(r), at(i), t && a && a.end();
        },
      }
    );
  }
  function Xt(t) {
    let e,
      n,
      s = [],
      r = new Map(),
      o = t[0];
    const l = (t) => t[1].id;
    for (let e = 0; e < o.length; e += 1) {
      let n = Jt(t, o, e),
        i = l(n);
      r.set(i, (s[e] = Ut(i, n)));
    }
    let i = null;
    return (
      o.length || (i = Kt()),
      {
        c() {
          e = x("div");
          for (let t = 0; t < s.length; t += 1) s[t].c();
          i && i.c(), k(e, "class", "poll_list svelte-7roc16");
        },
        m(t, r) {
          w(t, e, r);
          for (let t = 0; t < s.length; t += 1) s[t].m(e, null);
          i && i.m(e, null), (n = !0);
        },
        p(t, [n]) {
          if (1 & n) {
            const o = t[0];
            nt();
            for (let t = 0; t < s.length; t += 1) s[t].r();
            s = (function (t, e, n, s, r, o, l, i, c, u, a, f) {
              let d = t.length,
                p = o.length,
                $ = d;
              const m = {};
              for (; $--; ) m[t[$].key] = $;
              const h = [],
                g = new Map(),
                v = new Map();
              for ($ = p; $--; ) {
                const t = f(r, o, $),
                  i = n(t);
                let c = l.get(i);
                c ? s && c.p(t, e) : ((c = u(i, t)), c.c()),
                  g.set(i, (h[$] = c)),
                  i in m && v.set(i, Math.abs($ - m[i]));
              }
              const y = new Set(),
                w = new Set();
              function b(t) {
                rt(t, 1), t.m(i, a), l.set(t.key, t), (a = t.first), p--;
              }
              for (; d && p; ) {
                const e = h[p - 1],
                  n = t[d - 1],
                  s = e.key,
                  r = n.key;
                e === n
                  ? ((a = e.first), d--, p--)
                  : g.has(r)
                  ? !l.has(s) || y.has(s)
                    ? b(e)
                    : w.has(r)
                    ? d--
                    : v.get(s) > v.get(r)
                    ? (w.add(s), b(e))
                    : (y.add(r), d--)
                  : (c(n, l), d--);
              }
              for (; d--; ) {
                const e = t[d];
                g.has(e.key) || c(e, l);
              }
              for (; p; ) b(h[p - 1]);
              return h;
            })(s, n, l, 1, t, o, r, e, it, Ut, null, Jt);
            for (let t = 0; t < s.length; t += 1) s[t].a();
            st(),
              o.length
                ? i && (i.d(1), (i = null))
                : i || ((i = Kt()), i.c(), i.m(e, null));
          }
        },
        i(t) {
          if (!n) {
            for (let t = 0; t < o.length; t += 1) rt(s[t]);
            n = !0;
          }
        },
        o(t) {
          for (let t = 0; t < s.length; t += 1) ot(s[t]);
          n = !1;
        },
        d(t) {
          t && b(e);
          for (let t = 0; t < s.length; t += 1) s[t].d();
          i && i.d();
        },
      }
    );
  }
  function Yt(t, e, n) {
    let s;
    return c(t, At, (t) => n(0, (s = t))), [s];
  }
  class Zt extends pt {
    constructor(t) {
      super(), dt(this, t, Yt, Xt, i, {});
    }
  }
  function te(e) {
    let n, s;
    return (
      (n = new jt({})),
      n.$on("add", e[3]),
      {
        c() {
          ct(n.$$.fragment);
        },
        m(t, e) {
          ut(n, t, e), (s = !0);
        },
        p: t,
        i(t) {
          s || (rt(n.$$.fragment, t), (s = !0));
        },
        o(t) {
          ot(n.$$.fragment, t), (s = !1);
        },
        d(t) {
          at(n, t);
        },
      }
    );
  }
  function ee(e) {
    let n, s;
    return (
      (n = new Zt({})),
      {
        c() {
          ct(n.$$.fragment);
        },
        m(t, e) {
          ut(n, t, e), (s = !0);
        },
        p: t,
        i(t) {
          s || (rt(n.$$.fragment, t), (s = !0));
        },
        o(t) {
          ot(n.$$.fragment, t), (s = !1);
        },
        d(t) {
          at(n, t);
        },
      }
    );
  }
  function ne(t) {
    let e, n, s, r, o, l, i, c, u, a;
    (e = new mt({})),
      (r = new xt({ props: { items: t[1], activeItem: t[0] } })),
      r.$on("tabChange", t[2]);
    const f = [ee, te],
      d = [];
    function p(t, e) {
      return "Current Polls" === t[0] ? 0 : "Add New Poll" === t[0] ? 1 : -1;
    }
    return (
      ~(l = p(t)) && (i = d[l] = f[l](t)),
      (u = new gt({})),
      {
        c() {
          ct(e.$$.fragment),
            (n = q()),
            (s = x("main")),
            ct(r.$$.fragment),
            (o = q()),
            i && i.c(),
            (c = q()),
            ct(u.$$.fragment),
            k(s, "class", "svelte-1w6z2mv");
        },
        m(t, i) {
          ut(e, t, i),
            w(t, n, i),
            w(t, s, i),
            ut(r, s, null),
            y(s, o),
            ~l && d[l].m(s, null),
            w(t, c, i),
            ut(u, t, i),
            (a = !0);
        },
        p(t, [e]) {
          const n = {};
          1 & e && (n.activeItem = t[0]), r.$set(n);
          let o = l;
          (l = p(t)),
            l === o
              ? ~l && d[l].p(t, e)
              : (i &&
                  (nt(),
                  ot(d[o], 1, 1, () => {
                    d[o] = null;
                  }),
                  st()),
                ~l
                  ? ((i = d[l]),
                    i ? i.p(t, e) : ((i = d[l] = f[l](t)), i.c()),
                    rt(i, 1),
                    i.m(s, null))
                  : (i = null));
        },
        i(t) {
          a ||
            (rt(e.$$.fragment, t),
            rt(r.$$.fragment, t),
            rt(i),
            rt(u.$$.fragment, t),
            (a = !0));
        },
        o(t) {
          ot(e.$$.fragment, t),
            ot(r.$$.fragment, t),
            ot(i),
            ot(u.$$.fragment, t),
            (a = !1);
        },
        d(t) {
          at(e, t),
            t && b(n),
            t && b(s),
            at(r),
            ~l && d[l].d(),
            t && b(c),
            at(u, t);
        },
      }
    );
  }
  function se(t, e, n) {
    let s = "Current Polls";
    return [
      s,
      ["Current Polls", "Add New Poll"],
      (t) => {
        n(0, (s = t.detail));
      },
      (t) => {
        n(0, (s = "Current Polls"));
      },
    ];
  }
  return new (class extends pt {
    constructor(t) {
      super(), dt(this, t, se, ne, i, {});
    }
  })({ target: document.body, props: { name: "world" } });
})();
//# sourceMappingURL=bundle.js.map
