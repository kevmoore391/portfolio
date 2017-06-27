function onYouTubePlayerAPIReady() {
    ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}
if (! function(n, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) {
            if (!n.document) throw new Error("jQuery requires a window with a document");
            return t(n)
        } : t(n)
    }("undefined" != typeof window ? window : this, function(n, t) {
        function ri(n) {
            var t = "length" in n && n.length,
                r = i.type(n);
            return "function" === r || i.isWindow(n) ? !1 : 1 === n.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in n
        }

        function ui(n, t, r) {
            if (i.isFunction(t)) return i.grep(n, function(n, i) {
                return !!t.call(n, i, n) !== r
            });
            if (t.nodeType) return i.grep(n, function(n) {
                return n === t !== r
            });
            if ("string" == typeof t) {
                if (ef.test(t)) return i.filter(t, n, r);
                t = i.filter(t, n)
            }
            return i.grep(n, function(n) {
                return ft.call(t, n) >= 0 !== r
            })
        }

        function ur(n, t) {
            while ((n = n[t]) && 1 !== n.nodeType);
            return n
        }

        function of (n) {
            var t = fi[n] = {};
            return i.each(n.match(c) || [], function(n, i) {
                t[i] = !0
            }), t
        }

        function ht() {
            u.removeEventListener("DOMContentLoaded", ht, !1);
            n.removeEventListener("load", ht, !1);
            i.ready()
        }

        function v() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            });
            this.expando = i.expando + v.uid++
        }

        function fr(n, t, r) {
            var u;
            if (void 0 === r && 1 === n.nodeType)
                if (u = "data-" + t.replace(hf, "-$1").toLowerCase(), r = n.getAttribute(u), "string" == typeof r) {
                    try {
                        r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : sf.test(r) ? i.parseJSON(r) : r
                    } catch (f) {}
                    e.set(n, t, r)
                } else r = void 0;
            return r
        }

        function lt() {
            return !0
        }

        function k() {
            return !1
        }

        function hr() {
            try {
                return u.activeElement
            } catch (n) {}
        }

        function vr(n, t) {
            return i.nodeName(n, "table") && i.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
        }

        function bf(n) {
            return n.type = (null !== n.getAttribute("type")) + "/" + n.type, n
        }

        function kf(n) {
            var t = pf.exec(n.type);
            return t ? n.type = t[1] : n.removeAttribute("type"), n
        }

        function ei(n, t) {
            for (var i = 0, u = n.length; u > i; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
        }

        function yr(n, t) {
            var u, c, f, s, h, l, a, o;
            if (1 === t.nodeType) {
                if (r.hasData(n) && (s = r.access(n), h = r.set(t, s), o = s.events)) {
                    delete h.handle;
                    h.events = {};
                    for (f in o)
                        for (u = 0, c = o[f].length; c > u; u++) i.event.add(t, f, o[f][u])
                }
                e.hasData(n) && (l = e.access(n), a = i.extend({}, l), e.set(t, a))
            }
        }

        function o(n, t) {
            var r = n.getElementsByTagName ? n.getElementsByTagName(t || "*") : n.querySelectorAll ? n.querySelectorAll(t || "*") : [];
            return void 0 === t || t && i.nodeName(n, t) ? i.merge([n], r) : r
        }

        function df(n, t) {
            var i = t.nodeName.toLowerCase();
            "input" === i && er.test(n.type) ? t.checked = n.checked : ("input" === i || "textarea" === i) && (t.defaultValue = n.defaultValue)
        }

        function pr(t, r) {
            var f, u = i(r.createElement(t)).appendTo(r.body),
                e = n.getDefaultComputedStyle && (f = n.getDefaultComputedStyle(u[0])) ? f.display : i.css(u[0], "display");
            return u.detach(), e
        }

        function si(n) {
            var r = u,
                t = oi[n];
            return t || (t = pr(n, r), "none" !== t && t || (at = (at || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement), r = at[0].contentDocument, r.write(), r.close(), t = pr(n, r), at.detach()), oi[n] = t), t
        }

        function it(n, t, r) {
            var e, o, s, u, f = n.style;
            return r = r || vt(n), r && (u = r.getPropertyValue(t) || r[t]), r && ("" !== u || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), hi.test(u) && wr.test(t) && (e = f.width, o = f.minWidth, s = f.maxWidth, f.minWidth = f.maxWidth = f.width = u, u = r.width, f.width = e, f.minWidth = o, f.maxWidth = s)), void 0 !== u ? u + "" : u
        }

        function br(n, t) {
            return {
                get: function() {
                    return n() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function gr(n, t) {
            if (t in n) return t;
            for (var r = t[0].toUpperCase() + t.slice(1), u = t, i = dr.length; i--;)
                if (t = dr[i] + r, t in n) return t;
            return u
        }

        function nu(n, t, i) {
            var r = ne.exec(t);
            return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
        }

        function tu(n, t, r, u, f) {
            for (var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2) "margin" === r && (o += i.css(n, r + p[e], !0, f)), u ? ("content" === r && (o -= i.css(n, "padding" + p[e], !0, f)), "margin" !== r && (o -= i.css(n, "border" + p[e] + "Width", !0, f))) : (o += i.css(n, "padding" + p[e], !0, f), "padding" !== r && (o += i.css(n, "border" + p[e] + "Width", !0, f)));
            return o
        }

        function iu(n, t, r) {
            var o = !0,
                u = "width" === t ? n.offsetWidth : n.offsetHeight,
                e = vt(n),
                s = "border-box" === i.css(n, "boxSizing", !1, e);
            if (0 >= u || null == u) {
                if (u = it(n, t, e), (0 > u || null == u) && (u = n.style[t]), hi.test(u)) return u;
                o = s && (f.boxSizingReliable() || u === n.style[t]);
                u = parseFloat(u) || 0
            }
            return u + tu(n, t, r || (s ? "border" : "content"), o, e) + "px"
        }

        function ru(n, t) {
            for (var e, u, s, o = [], f = 0, h = n.length; h > f; f++) u = n[f], u.style && (o[f] = r.get(u, "olddisplay"), e = u.style.display, t ? (o[f] || "none" !== e || (u.style.display = ""), "" === u.style.display && tt(u) && (o[f] = r.access(u, "olddisplay", si(u.nodeName)))) : (s = tt(u), "none" === e && s || r.set(u, "olddisplay", s ? e : i.css(u, "display"))));
            for (f = 0; h > f; f++) u = n[f], u.style && (t && "none" !== u.style.display && "" !== u.style.display || (u.style.display = t ? o[f] || "" : "none"));
            return n
        }

        function s(n, t, i, r, u) {
            return new s.prototype.init(n, t, i, r, u)
        }

        function fu() {
            return setTimeout(function() {
                d = void 0
            }), d = i.now()
        }

        function wt(n, t) {
            var r, u = 0,
                i = {
                    height: n
                };
            for (t = t ? 1 : 0; 4 > u; u += 2 - t) r = p[u], i["margin" + r] = i["padding" + r] = n;
            return t && (i.opacity = i.width = n), i
        }

        function eu(n, t, i) {
            for (var u, f = (rt[t] || []).concat(rt["*"]), r = 0, e = f.length; e > r; r++)
                if (u = f[r].call(i, t, n)) return u
        }

        function fe(n, t, u) {
            var f, a, p, v, o, w, h, b, l = this,
                y = {},
                s = n.style,
                c = n.nodeType && tt(n),
                e = r.get(n, "fxshow");
            u.queue || (o = i._queueHooks(n, "fx"), null == o.unqueued && (o.unqueued = 0, w = o.empty.fire, o.empty.fire = function() {
                o.unqueued || w()
            }), o.unqueued++, l.always(function() {
                l.always(function() {
                    o.unqueued--;
                    i.queue(n, "fx").length || o.empty.fire()
                })
            }));
            1 === n.nodeType && ("height" in t || "width" in t) && (u.overflow = [s.overflow, s.overflowX, s.overflowY], h = i.css(n, "display"), b = "none" === h ? r.get(n, "olddisplay") || si(n.nodeName) : h, "inline" === b && "none" === i.css(n, "float") && (s.display = "inline-block"));
            u.overflow && (s.overflow = "hidden", l.always(function() {
                s.overflow = u.overflow[0];
                s.overflowX = u.overflow[1];
                s.overflowY = u.overflow[2]
            }));
            for (f in t)
                if (a = t[f], re.exec(a)) {
                    if (delete t[f], p = p || "toggle" === a, a === (c ? "hide" : "show")) {
                        if ("show" !== a || !e || void 0 === e[f]) continue;
                        c = !0
                    }
                    y[f] = e && e[f] || i.style(n, f)
                } else h = void 0;
            if (i.isEmptyObject(y)) "inline" === ("none" === h ? si(n.nodeName) : h) && (s.display = h);
            else {
                e ? "hidden" in e && (c = e.hidden) : e = r.access(n, "fxshow", {});
                p && (e.hidden = !c);
                c ? i(n).show() : l.done(function() {
                    i(n).hide()
                });
                l.done(function() {
                    var t;
                    r.remove(n, "fxshow");
                    for (t in y) i.style(n, t, y[t])
                });
                for (f in y) v = eu(c ? e[f] : 0, f, l), f in e || (e[f] = v.start, c && (v.end = v.start, v.start = "width" === f || "height" === f ? 1 : 0))
            }
        }

        function ee(n, t) {
            var r, f, e, u, o;
            for (r in n)
                if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                    u = o.expand(u);
                    delete n[f];
                    for (r in u) r in n || (n[r] = u[r], t[r] = e)
                } else t[f] = e
        }

        function ou(n, t, r) {
            var h, e, o = 0,
                l = pt.length,
                f = i.Deferred().always(function() {
                    delete c.elem
                }),
                c = function() {
                    if (e) return !1;
                    for (var s = d || fu(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, o = u.tweens.length; o > r; r++) u.tweens[r].run(i);
                    return f.notifyWith(n, [u, i, t]), 1 > i && o ? t : (f.resolveWith(n, [u]), !1)
                },
                u = f.promise({
                    elem: n,
                    props: i.extend({}, t),
                    opts: i.extend(!0, {
                        specialEasing: {}
                    }, r),
                    originalProperties: t,
                    originalOptions: r,
                    startTime: d || fu(),
                    duration: r.duration,
                    tweens: [],
                    createTween: function(t, r) {
                        var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(f), f
                    },
                    stop: function(t) {
                        var i = 0,
                            r = t ? u.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; r > i; i++) u.tweens[i].run(1);
                        return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
                    }
                }),
                s = u.props;
            for (ee(s, u.opts.specialEasing); l > o; o++)
                if (h = pt[o].call(u, n, s, u.opts)) return h;
            return i.map(s, eu, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {
                elem: n,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function pu(n) {
            return function(t, r) {
                "string" != typeof t && (r = t, t = "*");
                var u, f = 0,
                    e = t.toLowerCase().match(c) || [];
                if (i.isFunction(r))
                    while (u = e[f++]) "+" === u[0] ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
            }
        }

        function wu(n, t, r, u) {
            function e(s) {
                var h;
                return f[s] = !0, i.each(n[s] || [], function(n, i) {
                    var s = i(t, r, u);
                    return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1)
                }), h
            }
            var f = {},
                o = n === ci;
            return e(t.dataTypes[0]) || !f["*"] && e("*")
        }

        function ai(n, t) {
            var r, u, f = i.ajaxSettings.flatOptions || {};
            for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
            return u && i.extend(!0, n, u), n
        }

        function ae(n, t, i) {
            for (var e, u, f, o, s = n.contents, r = n.dataTypes;
                "*" === r[0];) r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
            if (e)
                for (u in s)
                    if (s[u] && s[u].test(e)) {
                        r.unshift(u);
                        break
                    }
            if (r[0] in i) f = r[0];
            else {
                for (u in i) {
                    if (!r[0] || n.converters[u + " " + r[0]]) {
                        f = u;
                        break
                    }
                    o || (o = u)
                }
                f = f || o
            }
            if (f) return (f !== r[0] && r.unshift(f), i[f])
        }

        function ve(n, t, i, r) {
            var h, u, f, s, e, o = {},
                c = n.dataTypes.slice();
            if (c[1])
                for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
            for (u = c.shift(); u;)
                if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
                    if ("*" === u) u = e;
                    else if ("*" !== e && e !== u) {
                if (f = o[e + " " + u] || o["* " + u], !f)
                    for (h in o)
                        if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                            f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
                            break
                        }
                if (f !== !0)
                    if (f && n.throws) t = f(t);
                    else try {
                        t = f(t)
                    } catch (l) {
                        return {
                            state: "parsererror",
                            error: f ? l : "No conversion from " + e + " to " + u
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function vi(n, t, r, u) {
            var f;
            if (i.isArray(t)) i.each(t, function(t, i) {
                r || pe.test(n) ? u(n, i) : vi(n + "[" + ("object" == typeof i ? t : "") + "]", i, r, u)
            });
            else if (r || "object" !== i.type(t)) u(n, t);
            else
                for (f in t) vi(n + "[" + f + "]", t[f], r, u)
        }

        function ku(n) {
            return i.isWindow(n) ? n : 9 === n.nodeType && n.defaultView
        }
        var w = [],
            a = w.slice,
            bi = w.concat,
            ti = w.push,
            ft = w.indexOf,
            et = {},
            nf = et.toString,
            ii = et.hasOwnProperty,
            f = {},
            u = n.document,
            ki = "2.1.4",
            i = function(n, t) {
                return new i.fn.init(n, t)
            },
            tf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            rf = /^-ms-/,
            uf = /-([\da-z])/gi,
            ff = function(n, t) {
                return t.toUpperCase()
            },
            y, ot, nr, tr, ir, rr, c, fi, st, l, b, at, oi, oe, su, g, hu, bt, cu, kt, dt, yi, ni, pi, wi, du, gu;
        i.fn = i.prototype = {
            jquery: ki,
            constructor: i,
            selector: "",
            length: 0,
            toArray: function() {
                return a.call(this)
            },
            get: function(n) {
                return null != n ? 0 > n ? this[n + this.length] : this[n] : a.call(this)
            },
            pushStack: function(n) {
                var t = i.merge(this.constructor(), n);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(n, t) {
                return i.each(this, n, t)
            },
            map: function(n) {
                return this.pushStack(i.map(this, function(t, i) {
                    return n.call(t, i, t)
                }))
            },
            slice: function() {
                return this.pushStack(a.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(n) {
                var i = this.length,
                    t = +n + (0 > n ? i : 0);
                return this.pushStack(t >= 0 && i > t ? [this[t]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: ti,
            sort: w.sort,
            splice: w.splice
        };
        i.extend = i.fn.extend = function() {
            var e, f, r, t, o, s, n = arguments[0] || {},
                u = 1,
                c = arguments.length,
                h = !1;
            for ("boolean" == typeof n && (h = n, n = arguments[u] || {}, u++), "object" == typeof n || i.isFunction(n) || (n = {}), u === c && (n = this, u--); c > u; u++)
                if (null != (e = arguments[u]))
                    for (f in e) r = n[f], t = e[f], n !== t && (h && t && (i.isPlainObject(t) || (o = i.isArray(t))) ? (o ? (o = !1, s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : void 0 !== t && (n[f] = t));
            return n
        };
        i.extend({
            expando: "jQuery" + (ki + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(n) {
                throw new Error(n);
            },
            noop: function() {},
            isFunction: function(n) {
                return "function" === i.type(n)
            },
            isArray: Array.isArray,
            isWindow: function(n) {
                return null != n && n === n.window
            },
            isNumeric: function(n) {
                return !i.isArray(n) && n - parseFloat(n) + 1 >= 0
            },
            isPlainObject: function(n) {
                return "object" !== i.type(n) || n.nodeType || i.isWindow(n) ? !1 : n.constructor && !ii.call(n.constructor.prototype, "isPrototypeOf") ? !1 : !0
            },
            isEmptyObject: function(n) {
                for (var t in n) return !1;
                return !0
            },
            type: function(n) {
                return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? et[nf.call(n)] || "object" : typeof n
            },
            globalEval: function(n) {
                var t, r = eval;
                n = i.trim(n);
                n && (1 === n.indexOf("use strict") ? (t = u.createElement("script"), t.text = n, u.head.appendChild(t).parentNode.removeChild(t)) : r(n))
            },
            camelCase: function(n) {
                return n.replace(rf, "ms-").replace(uf, ff)
            },
            nodeName: function(n, t) {
                return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(n, t, i) {
                var u, r = 0,
                    f = n.length,
                    e = ri(n);
                if (i) {
                    if (e) {
                        for (; f > r; r++)
                            if (u = t.apply(n[r], i), u === !1) break
                    } else
                        for (r in n)
                            if (u = t.apply(n[r], i), u === !1) break
                } else if (e) {
                    for (; f > r; r++)
                        if (u = t.call(n[r], r, n[r]), u === !1) break
                } else
                    for (r in n)
                        if (u = t.call(n[r], r, n[r]), u === !1) break;
                return n
            },
            trim: function(n) {
                return null == n ? "" : (n + "").replace(tf, "")
            },
            makeArray: function(n, t) {
                var r = t || [];
                return null != n && (ri(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : ti.call(r, n)), r
            },
            inArray: function(n, t, i) {
                return null == t ? -1 : ft.call(t, n, i)
            },
            merge: function(n, t) {
                for (var u = +t.length, i = 0, r = n.length; u > i; i++) n[r++] = t[i];
                return n.length = r, n
            },
            grep: function(n, t, i) {
                for (var u, f = [], r = 0, e = n.length, o = !i; e > r; r++) u = !t(n[r], r), u !== o && f.push(n[r]);
                return f
            },
            map: function(n, t, i) {
                var u, r = 0,
                    e = n.length,
                    o = ri(n),
                    f = [];
                if (o)
                    for (; e > r; r++) u = t(n[r], r, i), null != u && f.push(u);
                else
                    for (r in n) u = t(n[r], r, i), null != u && f.push(u);
                return bi.apply([], f)
            },
            guid: 1,
            proxy: function(n, t) {
                var u, f, r;
                return "string" == typeof t && (u = n[t], t = n, n = u), i.isFunction(n) ? (f = a.call(arguments, 2), r = function() {
                    return n.apply(t || this, f.concat(a.call(arguments)))
                }, r.guid = n.guid = n.guid || i.guid++, r) : void 0
            },
            now: Date.now,
            support: f
        });
        i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) {
            et["[object " + t + "]"] = t.toLowerCase()
        });
        y = function(n) {
            function r(n, t, i, r) {
                var p, s, a, c, w, y, d, v, nt, g;
                if ((t ? t.ownerDocument || t : h) !== o && k(t), t = t || o, i = i || [], c = t.nodeType, "string" != typeof n || !n || 1 !== c && 9 !== c && 11 !== c) return i;
                if (!r && l) {
                    if (11 !== c && (p = hr.exec(n)))
                        if (a = p[1]) {
                            if (9 === c) {
                                if (s = t.getElementById(a), !s || !s.parentNode) return i;
                                if (s.id === a) return i.push(s), i
                            } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(a)) && et(t, s) && s.id === a) return i.push(s), i
                        } else {
                            if (p[2]) return b.apply(i, t.getElementsByTagName(n)), i;
                            if ((a = p[3]) && u.getElementsByClassName) return b.apply(i, t.getElementsByClassName(a)), i
                        }
                    if (u.qsa && (!e || !e.test(n))) {
                        if (v = d = f, nt = t, g = 1 !== c && n, 1 === c && "object" !== t.nodeName.toLowerCase()) {
                            for (y = ft(n), (d = t.getAttribute("id")) ? v = d.replace(cr, "\\$&") : t.setAttribute("id", v), v = "[id='" + v + "'] ", w = y.length; w--;) y[w] = v + vt(y[w]);
                            nt = dt.test(n) && ti(t.parentNode) || t;
                            g = y.join(",")
                        }
                        if (g) try {
                            return b.apply(i, nt.querySelectorAll(g)), i
                        } catch (tt) {} finally {
                            d || t.removeAttribute("id")
                        }
                    }
                }
                return oi(n.replace(lt, "$1"), t, i, r)
            }

            function gt() {
                function n(r, u) {
                    return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u
                }
                var i = [];
                return n
            }

            function c(n) {
                return n[f] = !0, n
            }

            function v(n) {
                var t = o.createElement("div");
                try {
                    return !!n(t)
                } catch (i) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t);
                    t = null
                }
            }

            function ni(n, i) {
                for (var u = n.split("|"), r = n.length; r--;) t.attrHandle[u[r]] = i
            }

            function wi(n, t) {
                var i = t && n,
                    r = i && 1 === n.nodeType && 1 === t.nodeType && (~t.sourceIndex || li) - (~n.sourceIndex || li);
                if (r) return r;
                if (i)
                    while (i = i.nextSibling)
                        if (i === t) return -1;
                return n ? 1 : -1
            }

            function lr(n) {
                return function(t) {
                    var i = t.nodeName.toLowerCase();
                    return "input" === i && t.type === n
                }
            }

            function ar(n) {
                return function(t) {
                    var i = t.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && t.type === n
                }
            }

            function tt(n) {
                return c(function(t) {
                    return t = +t, c(function(i, r) {
                        for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                    })
                })
            }

            function ti(n) {
                return n && "undefined" != typeof n.getElementsByTagName && n
            }

            function bi() {}

            function vt(n) {
                for (var t = 0, r = n.length, i = ""; r > t; t++) i += n[t].value;
                return i
            }

            function ii(n, t, i) {
                var r = t.dir,
                    u = i && "parentNode" === r,
                    e = ki++;
                return t.first ? function(t, i, f) {
                    while (t = t[r])
                        if (1 === t.nodeType || u) return n(t, i, f)
                } : function(t, i, o) {
                    var s, h, c = [a, e];
                    if (o) {
                        while (t = t[r])
                            if ((1 === t.nodeType || u) && n(t, i, o)) return !0
                    } else
                        while (t = t[r])
                            if (1 === t.nodeType || u) {
                                if (h = t[f] || (t[f] = {}), (s = h[r]) && s[0] === a && s[1] === e) return c[2] = s[2];
                                if (h[r] = c, c[2] = n(t, i, o)) return !0
                            }
                }
            }

            function ri(n) {
                return n.length > 1 ? function(t, i, r) {
                    for (var u = n.length; u--;)
                        if (!n[u](t, i, r)) return !1;
                    return !0
                } : n[0]
            }

            function vr(n, t, i) {
                for (var u = 0, f = t.length; f > u; u++) r(n, t[u], i);
                return i
            }

            function yt(n, t, i, r, u) {
                for (var e, o = [], f = 0, s = n.length, h = null != t; s > f; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
                return o
            }

            function ui(n, t, i, r, u, e) {
                return r && !r[f] && (r = ui(r)), u && !u[f] && (u = ui(u, e)), c(function(f, e, o, s) {
                    var l, c, a, p = [],
                        y = [],
                        w = e.length,
                        k = f || vr(t || "*", o.nodeType ? [o] : o, []),
                        v = !n || !f && t ? k : yt(k, p, n, o, s),
                        h = i ? u || (f ? n : w || r) ? [] : e : v;
                    if (i && i(v, h, o, s), r)
                        for (l = yt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                    if (f) {
                        if (u || n) {
                            if (u) {
                                for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                                u(null, h = [], l, s)
                            }
                            for (c = h.length; c--;)(a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                        }
                    } else h = yt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : b.apply(e, h)
                })
            }

            function fi(n) {
                for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = ii(function(n) {
                        return n === o
                    }, c, !0), a = ii(function(n) {
                        return nt(o, n) > -1
                    }, c, !0), e = [function(n, t, i) {
                        var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                        return o = null, r
                    }]; s > i; i++)
                    if (u = t.relative[n[i].type]) e = [ii(ri(e), u)];
                    else {
                        if (u = t.filter[n[i].type].apply(null, n[i].matches), u[f]) {
                            for (r = ++i; s > r; r++)
                                if (t.relative[n[r].type]) break;
                            return ui(i > 1 && ri(e), i > 1 && vt(n.slice(0, i - 1).concat({
                                value: " " === n[i - 2].type ? "*" : ""
                            })).replace(lt, "$1"), u, r > i && fi(n.slice(i, r)), s > r && fi(n = n.slice(r)), s > r && vt(n))
                        }
                        e.push(u)
                    }
                return ri(e)
            }

            function yr(n, i) {
                var u = i.length > 0,
                    f = n.length > 0,
                    e = function(e, s, h, c, l) {
                        var y, d, w, k = 0,
                            v = "0",
                            g = e && [],
                            p = [],
                            nt = ht,
                            tt = e || f && t.find.TAG("*", l),
                            it = a += null == nt ? 1 : Math.random() || .1,
                            rt = tt.length;
                        for (l && (ht = s !== o && s); v !== rt && null != (y = tt[v]); v++) {
                            if (f && y) {
                                for (d = 0; w = n[d++];)
                                    if (w(y, s, h)) {
                                        c.push(y);
                                        break
                                    }
                                l && (a = it)
                            }
                            u && ((y = !w && y) && k--, e && g.push(y))
                        }
                        if (k += v, u && v !== k) {
                            for (d = 0; w = i[d++];) w(g, p, s, h);
                            if (e) {
                                if (k > 0)
                                    while (v--) g[v] || p[v] || (p[v] = gi.call(c));
                                p = yt(p)
                            }
                            b.apply(c, p);
                            l && !e && p.length > 0 && k + i.length > 1 && r.uniqueSort(c)
                        }
                        return l && (a = it, ht = nt), g
                    };
                return u ? c(e) : e
            }
            var it, u, t, st, ei, ft, pt, oi, ht, w, rt, k, o, s, l, e, d, ct, et, f = "sizzle" + 1 * new Date,
                h = n.document,
                a = 0,
                ki = 0,
                si = gt(),
                hi = gt(),
                ci = gt(),
                wt = function(n, t) {
                    return n === t && (rt = !0), 0
                },
                li = -2147483648,
                di = {}.hasOwnProperty,
                g = [],
                gi = g.pop,
                nr = g.push,
                b = g.push,
                ai = g.slice,
                nt = function(n, t) {
                    for (var i = 0, r = n.length; r > i; i++)
                        if (n[i] === t) return i;
                    return -1
                },
                bt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                i = "[\\x20\\t\\r\\n\\f]",
                ut = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                vi = ut.replace("w", "w#"),
                yi = "\\[" + i + "*(" + ut + ")(?:" + i + "*([*^$|!~]?=)" + i + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + vi + "))|)" + i + "*\\]",
                kt = ":(" + ut + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + yi + ")*)|.*)\\)|)",
                tr = new RegExp(i + "+", "g"),
                lt = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$", "g"),
                ir = new RegExp("^" + i + "*," + i + "*"),
                rr = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"),
                ur = new RegExp("=" + i + "*([^\\]'\"]*?)" + i + "*\\]", "g"),
                fr = new RegExp(kt),
                er = new RegExp("^" + vi + "$"),
                at = {
                    ID: new RegExp("^#(" + ut + ")"),
                    CLASS: new RegExp("^\\.(" + ut + ")"),
                    TAG: new RegExp("^(" + ut.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + yi),
                    PSEUDO: new RegExp("^" + kt),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + i + "*(even|odd|(([+-]|)(\\d*)n|)" + i + "*(?:([+-]|)" + i + "*(\\d+)|))" + i + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + bt + ")$", "i"),
                    needsContext: new RegExp("^" + i + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + i + "*((?:-\\d)?\\d*)" + i + "*\\)|)(?=[^-]|$)", "i")
                },
                or = /^(?:input|select|textarea|button)$/i,
                sr = /^h\d$/i,
                ot = /^[^{]+\{\s*\[native \w/,
                hr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                dt = /[+~]/,
                cr = /'|\\/g,
                y = new RegExp("\\\\([\\da-f]{1,6}" + i + "?|(" + i + ")|.)", "ig"),
                p = function(n, t, i) {
                    var r = "0x" + t - 65536;
                    return r !== r || i ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                },
                pi = function() {
                    k()
                };
            try {
                b.apply(g = ai.call(h.childNodes), h.childNodes);
                g[h.childNodes.length].nodeType
            } catch (pr) {
                b = {
                    apply: g.length ? function(n, t) {
                        nr.apply(n, ai.call(t))
                    } : function(n, t) {
                        for (var i = n.length, r = 0; n[i++] = t[r++];);
                        n.length = i - 1
                    }
                }
            }
            u = r.support = {};
            ei = r.isXML = function(n) {
                var t = n && (n.ownerDocument || n).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            };
            k = r.setDocument = function(n) {
                var a, c, r = n ? n.ownerDocument || n : h;
                return r !== o && 9 === r.nodeType && r.documentElement ? (o = r, s = r.documentElement, c = r.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", pi, !1) : c.attachEvent && c.attachEvent("onunload", pi)), l = !ei(r), u.attributes = v(function(n) {
                    return n.className = "i", !n.getAttribute("className")
                }), u.getElementsByTagName = v(function(n) {
                    return n.appendChild(r.createComment("")), !n.getElementsByTagName("*").length
                }), u.getElementsByClassName = ot.test(r.getElementsByClassName), u.getById = v(function(n) {
                    return s.appendChild(n).id = f, !r.getElementsByName || !r.getElementsByName(f).length
                }), u.getById ? (t.find.ID = function(n, t) {
                    if ("undefined" != typeof t.getElementById && l) {
                        var i = t.getElementById(n);
                        return i && i.parentNode ? [i] : []
                    }
                }, t.filter.ID = function(n) {
                    var t = n.replace(y, p);
                    return function(n) {
                        return n.getAttribute("id") === t
                    }
                }) : (delete t.find.ID, t.filter.ID = function(n) {
                    var t = n.replace(y, p);
                    return function(n) {
                        var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
                        return i && i.value === t
                    }
                }), t.find.TAG = u.getElementsByTagName ? function(n, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : u.qsa ? t.querySelectorAll(n) : void 0
                } : function(n, t) {
                    var i, r = [],
                        f = 0,
                        u = t.getElementsByTagName(n);
                    if ("*" === n) {
                        while (i = u[f++]) 1 === i.nodeType && r.push(i);
                        return r
                    }
                    return u
                }, t.find.CLASS = u.getElementsByClassName && function(n, t) {
                    if (l) return t.getElementsByClassName(n)
                }, d = [], e = [], (u.qsa = ot.test(r.querySelectorAll)) && (v(function(n) {
                    s.appendChild(n).innerHTML = "<a id='" + f + "'><\/a><select id='" + f + "-\f]' msallowcapture=''><option selected=''><\/option><\/select>";
                    n.querySelectorAll("[msallowcapture^='']").length && e.push("[*^$]=" + i + "*(?:''|\"\")");
                    n.querySelectorAll("[selected]").length || e.push("\\[" + i + "*(?:value|" + bt + ")");
                    n.querySelectorAll("[id~=" + f + "-]").length || e.push("~=");
                    n.querySelectorAll(":checked").length || e.push(":checked");
                    n.querySelectorAll("a#" + f + "+*").length || e.push(".#.+[+~]")
                }), v(function(n) {
                    var t = r.createElement("input");
                    t.setAttribute("type", "hidden");
                    n.appendChild(t).setAttribute("name", "D");
                    n.querySelectorAll("[name=d]").length && e.push("name" + i + "*[*^$|!~]?=");
                    n.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled");
                    n.querySelectorAll("*,:x");
                    e.push(",.*:")
                })), (u.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && v(function(n) {
                    u.disconnectedMatch = ct.call(n, "div");
                    ct.call(n, "[s!='']:x");
                    d.push("!=", kt)
                }), e = e.length && new RegExp(e.join("|")), d = d.length && new RegExp(d.join("|")), a = ot.test(s.compareDocumentPosition), et = a || ot.test(s.contains) ? function(n, t) {
                    var r = 9 === n.nodeType ? n.documentElement : n,
                        i = t && t.parentNode;
                    return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
                } : function(n, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === n) return !0;
                    return !1
                }, wt = a ? function(n, t) {
                    if (n === t) return rt = !0, 0;
                    var i = !n.compareDocumentPosition - !t.compareDocumentPosition;
                    return i ? i : (i = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, 1 & i || !u.sortDetached && t.compareDocumentPosition(n) === i ? n === r || n.ownerDocument === h && et(h, n) ? -1 : t === r || t.ownerDocument === h && et(h, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : 4 & i ? -1 : 1)
                } : function(n, t) {
                    if (n === t) return rt = !0, 0;
                    var i, u = 0,
                        o = n.parentNode,
                        s = t.parentNode,
                        f = [n],
                        e = [t];
                    if (!o || !s) return n === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                    if (o === s) return wi(n, t);
                    for (i = n; i = i.parentNode;) f.unshift(i);
                    for (i = t; i = i.parentNode;) e.unshift(i);
                    while (f[u] === e[u]) u++;
                    return u ? wi(f[u], e[u]) : f[u] === h ? -1 : e[u] === h ? 1 : 0
                }, r) : o
            };
            r.matches = function(n, t) {
                return r(n, null, null, t)
            };
            r.matchesSelector = function(n, t) {
                if ((n.ownerDocument || n) !== o && k(n), t = t.replace(ur, "='$1']"), !(!u.matchesSelector || !l || d && d.test(t) || e && e.test(t))) try {
                    var i = ct.call(n, t);
                    if (i || u.disconnectedMatch || n.document && 11 !== n.document.nodeType) return i
                } catch (f) {}
                return r(t, o, null, [n]).length > 0
            };
            r.contains = function(n, t) {
                return (n.ownerDocument || n) !== o && k(n), et(n, t)
            };
            r.attr = function(n, i) {
                (n.ownerDocument || n) !== o && k(n);
                var f = t.attrHandle[i.toLowerCase()],
                    r = f && di.call(t.attrHandle, i.toLowerCase()) ? f(n, i, !l) : void 0;
                return void 0 !== r ? r : u.attributes || !l ? n.getAttribute(i) : (r = n.getAttributeNode(i)) && r.specified ? r.value : null
            };
            r.error = function(n) {
                throw new Error("Syntax error, unrecognized expression: " + n);
            };
            r.uniqueSort = function(n) {
                var r, f = [],
                    t = 0,
                    i = 0;
                if (rt = !u.detectDuplicates, w = !u.sortStable && n.slice(0), n.sort(wt), rt) {
                    while (r = n[i++]) r === n[i] && (t = f.push(i));
                    while (t--) n.splice(f[t], 1)
                }
                return w = null, n
            };
            st = r.getText = function(n) {
                var r, i = "",
                    u = 0,
                    t = n.nodeType;
                if (t) {
                    if (1 === t || 9 === t || 11 === t) {
                        if ("string" == typeof n.textContent) return n.textContent;
                        for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
                    } else if (3 === t || 4 === t) return n.nodeValue
                } else
                    while (r = n[u++]) i += st(r);
                return i
            };
            t = r.selectors = {
                cacheLength: 50,
                createPseudo: c,
                match: at,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(n) {
                        return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                    },
                    CHILD: function(n) {
                        return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || r.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && r.error(n[0]), n
                    },
                    PSEUDO: function(n) {
                        var i, t = !n[6] && n[2];
                        return at.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && fr.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(n) {
                        var t = n.replace(y, p).toLowerCase();
                        return "*" === n ? function() {
                            return !0
                        } : function(n) {
                            return n.nodeName && n.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(n) {
                        var t = si[n + " "];
                        return t || (t = new RegExp("(^|" + i + ")" + n + "(" + i + "|$)")) && si(n, function(n) {
                            return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, t, i) {
                        return function(u) {
                            var f = r.attr(u, n);
                            return null == f ? "!=" === t : t ? (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f.replace(tr, " ") + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(n, t, i, r, u) {
                        var s = "nth" !== n.slice(0, 3),
                            o = "last" !== n.slice(-4),
                            e = "of-type" === t;
                        return 1 === r && 0 === u ? function(n) {
                            return !!n.parentNode
                        } : function(t, i, h) {
                            var v, k, c, l, y, w, b = s !== o ? "nextSibling" : "previousSibling",
                                p = t.parentNode,
                                g = e && t.nodeName.toLowerCase(),
                                d = !h && !e;
                            if (p) {
                                if (s) {
                                    while (b) {
                                        for (c = t; c = c[b];)
                                            if (e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                        w = b = "only" === n && !w && "nextSibling"
                                    }
                                    return !0
                                }
                                if (w = [o ? p.firstChild : p.lastChild], o && d) {
                                    for (k = p[f] || (p[f] = {}), v = k[n] || [], y = v[0] === a && v[1], l = v[0] === a && v[2], c = y && p.childNodes[y]; c = ++y && c && c[b] || (l = y = 0) || w.pop();)
                                        if (1 === c.nodeType && ++l && c === t) {
                                            k[n] = [a, y, l];
                                            break
                                        }
                                } else if (d && (v = (t[f] || (t[f] = {}))[n]) && v[0] === a) l = v[1];
                                else
                                    while (c = ++y && c && c[b] || (l = y = 0) || w.pop())
                                        if ((e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++l && (d && ((c[f] || (c[f] = {}))[n] = [a, l]), c === t)) break;
                                return l -= u, l === r || l % r == 0 && l / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(n, i) {
                        var e, u = t.pseudos[n] || t.setFilters[n.toLowerCase()] || r.error("unsupported pseudo: " + n);
                        return u[f] ? u(i) : u.length > 1 ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? c(function(n, t) {
                            for (var r, f = u(n, i), e = f.length; e--;) r = nt(n, f[e]), n[r] = !(t[r] = f[e])
                        }) : function(n) {
                            return u(n, 0, e)
                        }) : u
                    }
                },
                pseudos: {
                    not: c(function(n) {
                        var t = [],
                            r = [],
                            i = pt(n.replace(lt, "$1"));
                        return i[f] ? c(function(n, t, r, u) {
                            for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e))
                        }) : function(n, u, f) {
                            return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop()
                        }
                    }),
                    has: c(function(n) {
                        return function(t) {
                            return r(n, t).length > 0
                        }
                    }),
                    contains: c(function(n) {
                        return n = n.replace(y, p),
                            function(t) {
                                return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                            }
                    }),
                    lang: c(function(n) {
                        return er.test(n || "") || r.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
                            function(t) {
                                var i;
                                do
                                    if (i = l ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || 0 === i.indexOf(n + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var i = n.location && n.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function(n) {
                        return n === s
                    },
                    focus: function(n) {
                        return n === o.activeElement && (!o.hasFocus || o.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                    },
                    enabled: function(n) {
                        return n.disabled === !1
                    },
                    disabled: function(n) {
                        return n.disabled === !0
                    },
                    checked: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return "input" === t && !!n.checked || "option" === t && !!n.selected
                    },
                    selected: function(n) {
                        return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                    },
                    empty: function(n) {
                        for (n = n.firstChild; n; n = n.nextSibling)
                            if (n.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(n) {
                        return !t.pseudos.empty(n)
                    },
                    header: function(n) {
                        return sr.test(n.nodeName)
                    },
                    input: function(n) {
                        return or.test(n.nodeName)
                    },
                    button: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return "input" === t && "button" === n.type || "button" === t
                    },
                    text: function(n) {
                        var t;
                        return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: tt(function() {
                        return [0]
                    }),
                    last: tt(function(n, t) {
                        return [t - 1]
                    }),
                    eq: tt(function(n, t, i) {
                        return [0 > i ? i + t : i]
                    }),
                    even: tt(function(n, t) {
                        for (var i = 0; t > i; i += 2) n.push(i);
                        return n
                    }),
                    odd: tt(function(n, t) {
                        for (var i = 1; t > i; i += 2) n.push(i);
                        return n
                    }),
                    lt: tt(function(n, t, i) {
                        for (var r = 0 > i ? i + t : i; --r >= 0;) n.push(r);
                        return n
                    }),
                    gt: tt(function(n, t, i) {
                        for (var r = 0 > i ? i + t : i; ++r < t;) n.push(r);
                        return n
                    })
                }
            };
            t.pseudos.nth = t.pseudos.eq;
            for (it in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) t.pseudos[it] = lr(it);
            for (it in {
                    submit: !0,
                    reset: !0
                }) t.pseudos[it] = ar(it);
            return bi.prototype = t.filters = t.pseudos, t.setFilters = new bi, ft = r.tokenize = function(n, i) {
                var e, f, s, o, u, h, c, l = hi[n + " "];
                if (l) return i ? 0 : l.slice(0);
                for (u = n, h = [], c = t.preFilter; u;) {
                    (!e || (f = ir.exec(u))) && (f && (u = u.slice(f[0].length) || u), h.push(s = []));
                    e = !1;
                    (f = rr.exec(u)) && (e = f.shift(), s.push({
                        value: e,
                        type: f[0].replace(lt, " ")
                    }), u = u.slice(e.length));
                    for (o in t.filter)(f = at[o].exec(u)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                        value: e,
                        type: o,
                        matches: f
                    }), u = u.slice(e.length));
                    if (!e) break
                }
                return i ? u.length : u ? r.error(n) : hi(n, h).slice(0)
            }, pt = r.compile = function(n, t) {
                var r, u = [],
                    e = [],
                    i = ci[n + " "];
                if (!i) {
                    for (t || (t = ft(n)), r = t.length; r--;) i = fi(t[r]), i[f] ? u.push(i) : e.push(i);
                    i = ci(n, yr(e, u));
                    i.selector = n
                }
                return i
            }, oi = r.select = function(n, i, r, f) {
                var s, e, o, a, v, c = "function" == typeof n && n,
                    h = !f && ft(n = c.selector || n);
                if (r = r || [], 1 === h.length) {
                    if (e = h[0] = h[0].slice(0), e.length > 2 && "ID" === (o = e[0]).type && u.getById && 9 === i.nodeType && l && t.relative[e[1].type]) {
                        if (i = (t.find.ID(o.matches[0].replace(y, p), i) || [])[0], !i) return r;
                        c && (i = i.parentNode);
                        n = n.slice(e.shift().value.length)
                    }
                    for (s = at.needsContext.test(n) ? 0 : e.length; s--;) {
                        if (o = e[s], t.relative[a = o.type]) break;
                        if ((v = t.find[a]) && (f = v(o.matches[0].replace(y, p), dt.test(e[0].type) && ti(i.parentNode) || i))) {
                            if (e.splice(s, 1), n = f.length && vt(e), !n) return b.apply(r, f), r;
                            break
                        }
                    }
                }
                return (c || pt(n, h))(f, i, !l, r, dt.test(n) && ti(i.parentNode) || i), r
            }, u.sortStable = f.split("").sort(wt).join("") === f, u.detectDuplicates = !!rt, k(), u.sortDetached = v(function(n) {
                return 1 & n.compareDocumentPosition(o.createElement("div"))
            }), v(function(n) {
                return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href")
            }) || ni("type|href|height|width", function(n, t, i) {
                if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), u.attributes && v(function(n) {
                return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value")
            }) || ni("value", function(n, t, i) {
                if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue
            }), v(function(n) {
                return null == n.getAttribute("disabled")
            }) || ni(bt, function(n, t, i) {
                var r;
                if (!i) return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
            }), r
        }(n);
        i.find = y;
        i.expr = y.selectors;
        i.expr[":"] = i.expr.pseudos;
        i.unique = y.uniqueSort;
        i.text = y.getText;
        i.isXMLDoc = y.isXML;
        i.contains = y.contains;
        var di = i.expr.match.needsContext,
            gi = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ef = /^.[^:#\[\.,]*$/;
        i.filter = function(n, t, r) {
            var u = t[0];
            return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
                return 1 === n.nodeType
            }))
        };
        i.fn.extend({
            find: function(n) {
                var t, u = this.length,
                    r = [],
                    f = this;
                if ("string" != typeof n) return this.pushStack(i(n).filter(function() {
                    for (t = 0; u > t; t++)
                        if (i.contains(f[t], this)) return !0
                }));
                for (t = 0; u > t; t++) i.find(n, f[t], r);
                return r = this.pushStack(u > 1 ? i.unique(r) : r), r.selector = this.selector ? this.selector + " " + n : n, r
            },
            filter: function(n) {
                return this.pushStack(ui(this, n || [], !1))
            },
            not: function(n) {
                return this.pushStack(ui(this, n || [], !0))
            },
            is: function(n) {
                return !!ui(this, "string" == typeof n && di.test(n) ? i(n) : n || [], !1).length
            }
        });
        nr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        tr = i.fn.init = function(n, t) {
            var r, f;
            if (!n) return this;
            if ("string" == typeof n) {
                if (r = "<" === n[0] && ">" === n[n.length - 1] && n.length >= 3 ? [null, n, null] : nr.exec(n), !r || !r[1] && t) return !t || t.jquery ? (t || ot).find(n) : this.constructor(t).find(n);
                if (r[1]) {
                    if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), gi.test(r[1]) && i.isPlainObject(t))
                        for (r in t) i.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return f = u.getElementById(r[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = u, this.selector = n, this
            }
            return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? "undefined" != typeof ot.ready ? ot.ready(n) : n(i) : (void 0 !== n.selector && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
        };
        tr.prototype = i.fn;
        ot = i(u);
        ir = /^(?:parents|prev(?:Until|All))/;
        rr = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        i.extend({
            dir: function(n, t, r) {
                for (var u = [], f = void 0 !== r;
                    (n = n[t]) && 9 !== n.nodeType;)
                    if (1 === n.nodeType) {
                        if (f && i(n).is(r)) break;
                        u.push(n)
                    }
                return u
            },
            sibling: function(n, t) {
                for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
                return i
            }
        });
        i.fn.extend({
            has: function(n) {
                var t = i(n, this),
                    r = t.length;
                return this.filter(function() {
                    for (var n = 0; r > n; n++)
                        if (i.contains(this, t[n])) return !0
                })
            },
            closest: function(n, t) {
                for (var r, f = 0, o = this.length, u = [], e = di.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; o > f; f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                            u.push(r);
                            break
                        }
                return this.pushStack(u.length > 1 ? i.unique(u) : u)
            },
            index: function(n) {
                return n ? "string" == typeof n ? ft.call(i(n), this[0]) : ft.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(n, t) {
                return this.pushStack(i.unique(i.merge(this.get(), i(n, t))))
            },
            addBack: function(n) {
                return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
            }
        });
        i.each({
            parent: function(n) {
                var t = n.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(n) {
                return i.dir(n, "parentNode")
            },
            parentsUntil: function(n, t, r) {
                return i.dir(n, "parentNode", r)
            },
            next: function(n) {
                return ur(n, "nextSibling")
            },
            prev: function(n) {
                return ur(n, "previousSibling")
            },
            nextAll: function(n) {
                return i.dir(n, "nextSibling")
            },
            prevAll: function(n) {
                return i.dir(n, "previousSibling")
            },
            nextUntil: function(n, t, r) {
                return i.dir(n, "nextSibling", r)
            },
            prevUntil: function(n, t, r) {
                return i.dir(n, "previousSibling", r)
            },
            siblings: function(n) {
                return i.sibling((n.parentNode || {}).firstChild, n)
            },
            children: function(n) {
                return i.sibling(n.firstChild)
            },
            contents: function(n) {
                return n.contentDocument || i.merge([], n.childNodes)
            }
        }, function(n, t) {
            i.fn[n] = function(r, u) {
                var f = i.map(this, t, r);
                return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), this.length > 1 && (rr[n] || i.unique(f), ir.test(n) && f.reverse()), this.pushStack(f)
            }
        });
        c = /\S+/g;
        fi = {};
        i.Callbacks = function(n) {
            n = "string" == typeof n ? fi[n] || of (n) : i.extend({}, n);
            var u, h, o, c, f, e, t = [],
                r = !n.once && [],
                l = function(i) {
                    for (u = n.memory && i, h = !0, e = c || 0, c = 0, f = t.length, o = !0; t && f > e; e++)
                        if (t[e].apply(i[0], i[1]) === !1 && n.stopOnFalse) {
                            u = !1;
                            break
                        }
                    o = !1;
                    t && (r ? r.length && l(r.shift()) : u ? t = [] : s.disable())
                },
                s = {
                    add: function() {
                        if (t) {
                            var r = t.length;
                            ! function e(r) {
                                i.each(r, function(r, u) {
                                    var f = i.type(u);
                                    "function" === f ? n.unique && s.has(u) || t.push(u) : u && u.length && "string" !== f && e(u)
                                })
                            }(arguments);
                            o ? f = t.length : u && (c = r, l(u))
                        }
                        return this
                    },
                    remove: function() {
                        return t && i.each(arguments, function(n, r) {
                            for (var u;
                                (u = i.inArray(r, t, u)) > -1;) t.splice(u, 1), o && (f >= u && f--, e >= u && e--)
                        }), this
                    },
                    has: function(n) {
                        return n ? i.inArray(n, t) > -1 : !(!t || !t.length)
                    },
                    empty: function() {
                        return t = [], f = 0, this
                    },
                    disable: function() {
                        return t = r = u = void 0, this
                    },
                    disabled: function() {
                        return !t
                    },
                    lock: function() {
                        return r = void 0, u || s.disable(), this
                    },
                    locked: function() {
                        return !r
                    },
                    fireWith: function(n, i) {
                        return !t || h && !r || (i = i || [], i = [n, i.slice ? i.slice() : i], o ? r.push(i) : l(i)), this
                    },
                    fire: function() {
                        return s.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!h
                    }
                };
            return s
        };
        i.extend({
            Deferred: function(n) {
                var u = [
                        ["resolve", "done", i.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", i.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", i.Callbacks("memory")]
                    ],
                    f = "pending",
                    r = {
                        state: function() {
                            return f
                        },
                        always: function() {
                            return t.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var n = arguments;
                            return i.Deferred(function(f) {
                                i.each(u, function(u, e) {
                                    var o = i.isFunction(n[u]) && n[u];
                                    t[e[1]](function() {
                                        var n = o && o.apply(this, arguments);
                                        n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                                    })
                                });
                                n = null
                            }).promise()
                        },
                        promise: function(n) {
                            return null != n ? i.extend(n, r) : r
                        }
                    },
                    t = {};
                return r.pipe = r.then, i.each(u, function(n, i) {
                    var e = i[2],
                        o = i[3];
                    r[i[1]] = e.add;
                    o && e.add(function() {
                        f = o
                    }, u[1 ^ n][2].disable, u[2][2].lock);
                    t[i[0]] = function() {
                        return t[i[0] + "With"](this === t ? r : this, arguments), this
                    };
                    t[i[0] + "With"] = e.fireWith
                }), r.promise(t), n && n.call(t, t), t
            },
            when: function(n) {
                var t = 0,
                    u = a.call(arguments),
                    r = u.length,
                    e = 1 !== r || n && i.isFunction(n.promise) ? r : 0,
                    f = 1 === e ? n : i.Deferred(),
                    h = function(n, t, i) {
                        return function(r) {
                            t[n] = this;
                            i[n] = arguments.length > 1 ? a.call(arguments) : r;
                            i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                        }
                    },
                    o, c, s;
                if (r > 1)
                    for (o = new Array(r), c = new Array(r), s = new Array(r); r > t; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
                return e || f.resolveWith(s, u), f.promise()
            }
        });
        i.fn.ready = function(n) {
            return i.ready.promise().done(n), this
        };
        i.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(n) {
                n ? i.readyWait++ : i.ready(!0)
            },
            ready: function(n) {
                (n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, n !== !0 && --i.readyWait > 0 || (st.resolveWith(u, [i]), i.fn.triggerHandler && (i(u).triggerHandler("ready"), i(u).off("ready"))))
            }
        });
        i.ready.promise = function(t) {
            return st || (st = i.Deferred(), "complete" === u.readyState ? setTimeout(i.ready) : (u.addEventListener("DOMContentLoaded", ht, !1), n.addEventListener("load", ht, !1))), st.promise(t)
        };
        i.ready.promise();
        l = i.access = function(n, t, r, u, f, e, o) {
            var s = 0,
                c = n.length,
                h = null == r;
            if ("object" === i.type(r)) {
                f = !0;
                for (s in r) i.access(n, t, s, r[s], !0, e, o)
            } else if (void 0 !== u && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function(n, t, r) {
                    return h.call(i(n), r)
                })), t))
                for (; c > s; s++) t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
            return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
        };
        i.acceptData = function(n) {
            return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType
        };
        v.uid = 1;
        v.accepts = i.acceptData;
        v.prototype = {
            key: function(n) {
                if (!v.accepts(n)) return 0;
                var r = {},
                    t = n[this.expando];
                if (!t) {
                    t = v.uid++;
                    try {
                        r[this.expando] = {
                            value: t
                        };
                        Object.defineProperties(n, r)
                    } catch (u) {
                        r[this.expando] = t;
                        i.extend(n, r)
                    }
                }
                return this.cache[t] || (this.cache[t] = {}), t
            },
            set: function(n, t, r) {
                var f, e = this.key(n),
                    u = this.cache[e];
                if ("string" == typeof t) u[t] = r;
                else if (i.isEmptyObject(u)) i.extend(this.cache[e], t);
                else
                    for (f in t) u[f] = t[f];
                return u
            },
            get: function(n, t) {
                var i = this.cache[this.key(n)];
                return void 0 === t ? i : i[t]
            },
            access: function(n, t, r) {
                var u;
                return void 0 === t || t && "string" == typeof t && void 0 === r ? (u = this.get(n, t), void 0 !== u ? u : this.get(n, i.camelCase(t))) : (this.set(n, t, r), void 0 !== r ? r : t)
            },
            remove: function(n, t) {
                var u, r, f, o = this.key(n),
                    e = this.cache[o];
                if (void 0 === t) this.cache[o] = {};
                else
                    for (i.isArray(t) ? r = t.concat(t.map(i.camelCase)) : (f = i.camelCase(t), (t in e) ? r = [t, f] : (r = f, r = (r in e) ? [r] : r.match(c) || [])), u = r.length; u--;) delete e[r[u]]
            },
            hasData: function(n) {
                return !i.isEmptyObject(this.cache[n[this.expando]] || {})
            },
            discard: function(n) {
                n[this.expando] && delete this.cache[n[this.expando]]
            }
        };
        var r = new v,
            e = new v,
            sf = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            hf = /([A-Z])/g;
        i.extend({
            hasData: function(n) {
                return e.hasData(n) || r.hasData(n)
            },
            data: function(n, t, i) {
                return e.access(n, t, i)
            },
            removeData: function(n, t) {
                e.remove(n, t)
            },
            _data: function(n, t, i) {
                return r.access(n, t, i)
            },
            _removeData: function(n, t) {
                r.remove(n, t)
            }
        });
        i.fn.extend({
            data: function(n, t) {
                var o, f, s, u = this[0],
                    h = u && u.attributes;
                if (void 0 === n) {
                    if (this.length && (s = e.get(u), 1 === u.nodeType && !r.get(u, "hasDataAttrs"))) {
                        for (o = h.length; o--;) h[o] && (f = h[o].name, 0 === f.indexOf("data-") && (f = i.camelCase(f.slice(5)), fr(u, f, s[f])));
                        r.set(u, "hasDataAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof n ? this.each(function() {
                    e.set(this, n)
                }) : l(this, function(t) {
                    var r, f = i.camelCase(n);
                    if (u && void 0 === t) {
                        if ((r = e.get(u, n), void 0 !== r) || (r = e.get(u, f), void 0 !== r) || (r = fr(u, f, void 0), void 0 !== r)) return r
                    } else this.each(function() {
                        var i = e.get(this, f);
                        e.set(this, f, t); - 1 !== n.indexOf("-") && void 0 !== i && e.set(this, n, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(n) {
                return this.each(function() {
                    e.remove(this, n)
                })
            }
        });
        i.extend({
            queue: function(n, t, u) {
                var f;
                if (n) return (t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || i.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || [])
            },
            dequeue: function(n, t) {
                t = t || "fx";
                var r = i.queue(n, t),
                    e = r.length,
                    u = r.shift(),
                    f = i._queueHooks(n, t),
                    o = function() {
                        i.dequeue(n, t)
                    };
                "inprogress" === u && (u = r.shift(), e--);
                u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
                !e && f && f.empty.fire()
            },
            _queueHooks: function(n, t) {
                var u = t + "queueHooks";
                return r.get(n, u) || r.access(n, u, {
                    empty: i.Callbacks("once memory").add(function() {
                        r.remove(n, [t + "queue", u])
                    })
                })
            }
        });
        i.fn.extend({
            queue: function(n, t) {
                var r = 2;
                return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
                    var r = i.queue(this, n, t);
                    i._queueHooks(this, n);
                    "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
                })
            },
            dequeue: function(n) {
                return this.each(function() {
                    i.dequeue(this, n)
                })
            },
            clearQueue: function(n) {
                return this.queue(n || "fx", [])
            },
            promise: function(n, t) {
                var u, e = 1,
                    o = i.Deferred(),
                    f = this,
                    s = this.length,
                    h = function() {
                        --e || o.resolveWith(f, [f])
                    };
                for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; s--;) u = r.get(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h));
                return h(), o.promise(t)
            }
        });
        var ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            p = ["Top", "Right", "Bottom", "Left"],
            tt = function(n, t) {
                return n = t || n, "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n)
            },
            er = /^(?:checkbox|radio)$/i;
        ! function() {
            var i = u.createDocumentFragment(),
                n = i.appendChild(u.createElement("div")),
                t = u.createElement("input");
            t.setAttribute("type", "radio");
            t.setAttribute("checked", "checked");
            t.setAttribute("name", "t");
            n.appendChild(t);
            f.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
            n.innerHTML = "<textarea>x<\/textarea>";
            f.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue
        }();
        b = "undefined";
        f.focusinBubbles = "onfocusin" in n;
        var cf = /^key/,
            lf = /^(?:mouse|pointer|contextmenu)|click/,
            or = /^(?:focusinfocus|focusoutblur)$/,
            sr = /^([^.]*)(?:\.(.+)|)$/;
        i.event = {
            global: {},
            add: function(n, t, u, f, e) {
                var v, y, w, p, k, h, s, l, o, d, g, a = r.get(n);
                if (a)
                    for (u.handler && (v = u, u = v.handler, e = v.selector), u.guid || (u.guid = i.guid++), (p = a.events) || (p = a.events = {}), (y = a.handle) || (y = a.handle = function(t) {
                            if (typeof i !== b && i.event.triggered !== t.type) return i.event.dispatch.apply(n, arguments)
                        }), t = (t || "").match(c) || [""], k = t.length; k--;) w = sr.exec(t[k]) || [], o = g = w[1], d = (w[2] || "").split(".").sort(), o && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, h = i.extend({
                        type: o,
                        origType: g,
                        data: f,
                        handler: u,
                        guid: u.guid,
                        selector: e,
                        needsContext: e && i.expr.match.needsContext.test(e),
                        namespace: d.join(".")
                    }, v), (l = p[o]) || (l = p[o] = [], l.delegateCount = 0, s.setup && s.setup.call(n, f, d, y) !== !1 || n.addEventListener && n.addEventListener(o, y, !1)), s.add && (s.add.call(n, h), h.handler.guid || (h.handler.guid = u.guid)), e ? l.splice(l.delegateCount++, 0, h) : l.push(h), i.event.global[o] = !0)
            },
            remove: function(n, t, u, f, e) {
                var p, k, h, v, w, s, l, a, o, b, d, y = r.hasData(n) && r.get(n);
                if (y && (v = y.events)) {
                    for (t = (t || "").match(c) || [""], w = t.length; w--;)
                        if (h = sr.exec(t[w]) || [], o = d = h[1], b = (h[2] || "").split(".").sort(), o) {
                            for (l = i.event.special[o] || {}, o = (f ? l.delegateType : l.bindType) || o, a = v[o] || [], h = h[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = p = a.length; p--;) s = a[p], !e && d !== s.origType || u && u.guid !== s.guid || h && !h.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (a.splice(p, 1), s.selector && a.delegateCount--, l.remove && l.remove.call(n, s));
                            k && !a.length && (l.teardown && l.teardown.call(n, b, y.handle) !== !1 || i.removeEvent(n, o, y.handle), delete v[o])
                        } else
                            for (o in v) i.event.remove(n, o + t[w], u, f, !0);
                    i.isEmptyObject(v) && (delete y.handle, r.remove(n, "events"))
                }
            },
            trigger: function(t, f, e, o) {
                var w, s, c, b, a, v, l, p = [e || u],
                    h = ii.call(t, "type") ? t.type : t,
                    y = ii.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = c = e = e || u, 3 !== e.nodeType && 8 !== e.nodeType && !or.test(h + i.event.triggered) && (h.indexOf(".") >= 0 && (y = h.split("."), h = y.shift(), y.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[i.expando] ? t : new i.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = y.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = e), f = null == f ? [t] : i.makeArray(f, [t]), l = i.event.special[h] || {}, o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
                    if (!o && !l.noBubble && !i.isWindow(e)) {
                        for (b = l.delegateType || h, or.test(b + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), c = s;
                        c === (e.ownerDocument || u) && p.push(c.defaultView || c.parentWindow || n)
                    }
                    for (w = 0;
                        (s = p[w++]) && !t.isPropagationStopped();) t.type = w > 1 ? b : l.bindType || h, v = (r.get(s, "events") || {})[t.type] && r.get(s, "handle"), v && v.apply(s, f), v = a && s[a], v && v.apply && i.acceptData(s) && (t.result = v.apply(s, f), t.result === !1 && t.preventDefault());
                    return t.type = h, o || t.isDefaultPrevented() || l._default && l._default.apply(p.pop(), f) !== !1 || !i.acceptData(e) || a && i.isFunction(e[h]) && !i.isWindow(e) && (c = e[a], c && (e[a] = null), i.event.triggered = h, e[h](), i.event.triggered = void 0, c && (e[a] = c)), t.result
                }
            },
            dispatch: function(n) {
                n = i.event.fix(n);
                var o, s, e, u, t, h = [],
                    c = a.call(arguments),
                    l = (r.get(this, "events") || {})[n.type] || [],
                    f = i.event.special[n.type] || {};
                if (c[0] = n, n.delegateTarget = this, !f.preDispatch || f.preDispatch.call(this, n) !== !1) {
                    for (h = i.event.handlers.call(this, n, l), o = 0;
                        (u = h[o++]) && !n.isPropagationStopped();)
                        for (n.currentTarget = u.elem, s = 0;
                            (t = u.handlers[s++]) && !n.isImmediatePropagationStopped();)(!n.namespace_re || n.namespace_re.test(t.namespace)) && (n.handleObj = t, n.data = t.data, e = ((i.event.special[t.origType] || {}).handle || t.handler).apply(u.elem, c), void 0 !== e && (n.result = e) === !1 && (n.preventDefault(), n.stopPropagation()));
                    return f.postDispatch && f.postDispatch.call(this, n), n.result
                }
            },
            handlers: function(n, t) {
                var e, u, f, o, h = [],
                    s = t.delegateCount,
                    r = n.target;
                if (s && r.nodeType && (!n.button || "click" !== n.type))
                    for (; r !== this; r = r.parentNode || this)
                        if (r.disabled !== !0 || "click" !== n.type) {
                            for (u = [], e = 0; s > e; e++) o = t[e], f = o.selector + " ", void 0 === u[f] && (u[f] = o.needsContext ? i(f, this).index(r) >= 0 : i.find(f, this, null, [r]).length), u[f] && u.push(o);
                            u.length && h.push({
                                elem: r,
                                handlers: u
                            })
                        }
                return s < t.length && h.push({
                    elem: this,
                    handlers: t.slice(s)
                }), h
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(n, t) {
                    return null == n.which && (n.which = null != t.charCode ? t.charCode : t.keyCode), n
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(n, t) {
                    var e, i, r, f = t.button;
                    return null == n.pageX && null != t.clientX && (e = n.target.ownerDocument || u, i = e.documentElement, r = e.body, n.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), n.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), n.which || void 0 === f || (n.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), n
                }
            },
            fix: function(n) {
                if (n[i.expando]) return n;
                var f, e, o, r = n.type,
                    s = n,
                    t = this.fixHooks[r];
                for (t || (this.fixHooks[r] = t = lf.test(r) ? this.mouseHooks : cf.test(r) ? this.keyHooks : {}), o = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(s), f = o.length; f--;) e = o[f], n[e] = s[e];
                return n.target || (n.target = u), 3 === n.target.nodeType && (n.target = n.target.parentNode), t.filter ? t.filter(n, s) : n
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== hr() && this.focus) return (this.focus(), !1)
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === hr() && this.blur) return (this.blur(), !1)
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && i.nodeName(this, "input")) return (this.click(), !1)
                    },
                    _default: function(n) {
                        return i.nodeName(n.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(n) {
                        void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result)
                    }
                }
            },
            simulate: function(n, t, r, u) {
                var f = i.extend(new i.Event, r, {
                    type: n,
                    isSimulated: !0,
                    originalEvent: {}
                });
                u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
                f.isDefaultPrevented() && r.preventDefault()
            }
        };
        i.removeEvent = function(n, t, i) {
            n.removeEventListener && n.removeEventListener(t, i, !1)
        };
        i.Event = function(n, t) {
            return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && n.returnValue === !1 ? lt : k) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), void(this[i.expando] = !0)) : new i.Event(n, t)
        };
        i.Event.prototype = {
            isDefaultPrevented: k,
            isPropagationStopped: k,
            isImmediatePropagationStopped: k,
            preventDefault: function() {
                var n = this.originalEvent;
                this.isDefaultPrevented = lt;
                n && n.preventDefault && n.preventDefault()
            },
            stopPropagation: function() {
                var n = this.originalEvent;
                this.isPropagationStopped = lt;
                n && n.stopPropagation && n.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var n = this.originalEvent;
                this.isImmediatePropagationStopped = lt;
                n && n.stopImmediatePropagation && n.stopImmediatePropagation();
                this.stopPropagation()
            }
        };
        i.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(n, t) {
            i.event.special[n] = {
                delegateType: t,
                bindType: t,
                handle: function(n) {
                    var u, f = this,
                        r = n.relatedTarget,
                        e = n.handleObj;
                    return (!r || r !== f && !i.contains(f, r)) && (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
                }
            }
        });
        f.focusinBubbles || i.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, t) {
            var u = function(n) {
                i.event.simulate(t, n.target, i.event.fix(n), !0)
            };
            i.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        f = r.access(i, t);
                    f || i.addEventListener(n, u, !0);
                    r.access(i, t, (f || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        f = r.access(i, t) - 1;
                    f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t))
                }
            }
        });
        i.fn.extend({
            on: function(n, t, r, u, f) {
                var e, o;
                if ("object" == typeof n) {
                    "string" != typeof t && (r = r || t, t = void 0);
                    for (o in n) this.on(o, t, r, n[o], f);
                    return this
                }
                if (null == r && null == u ? (u = t, r = t = void 0) : null == u && ("string" == typeof t ? (u = r, r = void 0) : (u = r, r = t, t = void 0)), u === !1) u = k;
                else if (!u) return this;
                return 1 === f && (e = u, u = function(n) {
                    return i().off(n), e.apply(this, arguments)
                }, u.guid = e.guid || (e.guid = i.guid++)), this.each(function() {
                    i.event.add(this, n, u, r, t)
                })
            },
            one: function(n, t, i, r) {
                return this.on(n, t, i, r, 1)
            },
            off: function(n, t, r) {
                var u, f;
                if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
                if ("object" == typeof n) {
                    for (f in n) this.off(f, t, n[f]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (r = t, t = void 0), r === !1 && (r = k), this.each(function() {
                    i.event.remove(this, n, r, t)
                })
            },
            trigger: function(n, t) {
                return this.each(function() {
                    i.event.trigger(n, t, this)
                })
            },
            triggerHandler: function(n, t) {
                var r = this[0];
                if (r) return i.event.trigger(n, t, r, !0)
            }
        });
        var cr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            lr = /<([\w:]+)/,
            af = /<|&#?\w+;/,
            vf = /<(?:script|style|link)/i,
            yf = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ar = /^$|\/(?:java|ecma)script/i,
            pf = /^true\/(.*)/,
            wf = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            h = {
                option: [1, "<select multiple='multiple'>", "<\/select>"],
                thead: [1, "<table>", "<\/table>"],
                col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
                tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
                td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
                _default: [0, "", ""]
            };
        h.optgroup = h.option;
        h.tbody = h.tfoot = h.colgroup = h.caption = h.thead;
        h.th = h.td;
        i.extend({
            clone: function(n, t, r) {
                var u, c, s, e, h = n.cloneNode(!0),
                    l = i.contains(n.ownerDocument, n);
                if (!(f.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                    for (e = o(h), s = o(n), u = 0, c = s.length; c > u; u++) df(s[u], e[u]);
                if (t)
                    if (r)
                        for (s = s || o(n), e = e || o(h), u = 0, c = s.length; c > u; u++) yr(s[u], e[u]);
                    else yr(n, h);
                return e = o(h, "script"), e.length > 0 && ei(e, !l && o(n, "script")), h
            },
            buildFragment: function(n, t, r, u) {
                for (var f, e, y, l, p, a, s = t.createDocumentFragment(), v = [], c = 0, w = n.length; w > c; c++)
                    if (f = n[c], f || 0 === f)
                        if ("object" === i.type(f)) i.merge(v, f.nodeType ? [f] : f);
                        else if (af.test(f)) {
                    for (e = e || s.appendChild(t.createElement("div")), y = (lr.exec(f) || ["", ""])[1].toLowerCase(), l = h[y] || h._default, e.innerHTML = l[1] + f.replace(cr, "<$1><\/$2>") + l[2], a = l[0]; a--;) e = e.lastChild;
                    i.merge(v, e.childNodes);
                    e = s.firstChild;
                    e.textContent = ""
                } else v.push(t.createTextNode(f));
                for (s.textContent = "", c = 0; f = v[c++];)
                    if ((!u || -1 === i.inArray(f, u)) && (p = i.contains(f.ownerDocument, f), e = o(s.appendChild(f), "script"), p && ei(e), r))
                        for (a = 0; f = e[a++];) ar.test(f.type || "") && r.push(f);
                return s
            },
            cleanData: function(n) {
                for (var f, t, o, u, h = i.event.special, s = 0; void 0 !== (t = n[s]); s++) {
                    if (i.acceptData(t) && (u = t[r.expando], u && (f = r.cache[u]))) {
                        if (f.events)
                            for (o in f.events) h[o] ? i.event.remove(t, o) : i.removeEvent(t, o, f.handle);
                        r.cache[u] && delete r.cache[u]
                    }
                    delete e.cache[t[e.expando]]
                }
            }
        });
        i.fn.extend({
            text: function(n) {
                return l(this, function(n) {
                    return void 0 === n ? i.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = n)
                    })
                }, null, n, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(n) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = vr(this, n);
                        t.appendChild(n)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(n) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = vr(this, n);
                        t.insertBefore(n, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(n) {
                    this.parentNode && this.parentNode.insertBefore(n, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(n) {
                    this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
                })
            },
            remove: function(n, t) {
                for (var r, f = n ? i.filter(n, this) : this, u = 0; null != (r = f[u]); u++) t || 1 !== r.nodeType || i.cleanData(o(r)), r.parentNode && (t && i.contains(r.ownerDocument, r) && ei(o(r, "script")), r.parentNode.removeChild(r));
                return this
            },
            empty: function() {
                for (var n, t = 0; null != (n = this[t]); t++) 1 === n.nodeType && (i.cleanData(o(n, !1)), n.textContent = "");
                return this
            },
            clone: function(n, t) {
                return n = null == n ? !1 : n, t = null == t ? n : t, this.map(function() {
                    return i.clone(this, n, t)
                })
            },
            html: function(n) {
                return l(this, function(n) {
                    var t = this[0] || {},
                        r = 0,
                        u = this.length;
                    if (void 0 === n && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof n && !vf.test(n) && !h[(lr.exec(n) || ["", ""])[1].toLowerCase()]) {
                        n = n.replace(cr, "<$1><\/$2>");
                        try {
                            for (; u > r; r++) t = this[r] || {}, 1 === t.nodeType && (i.cleanData(o(t, !1)), t.innerHTML = n);
                            t = 0
                        } catch (f) {}
                    }
                    t && this.empty().append(n)
                }, null, n, arguments.length)
            },
            replaceWith: function() {
                var n = arguments[0];
                return this.domManip(arguments, function(t) {
                    n = this.parentNode;
                    i.cleanData(o(this));
                    n && n.replaceChild(t, this)
                }), n && (n.length || n.nodeType) ? this : this.remove()
            },
            detach: function(n) {
                return this.remove(n, !0)
            },
            domManip: function(n, t) {
                n = bi.apply([], n);
                var h, v, s, c, u, y, e = 0,
                    l = this.length,
                    w = this,
                    b = l - 1,
                    a = n[0],
                    p = i.isFunction(a);
                if (p || l > 1 && "string" == typeof a && !f.checkClone && yf.test(a)) return this.each(function(i) {
                    var r = w.eq(i);
                    p && (n[0] = a.call(this, i, r.html()));
                    r.domManip(n, t)
                });
                if (l && (h = i.buildFragment(n, this[0].ownerDocument, !1, this), v = h.firstChild, 1 === h.childNodes.length && (h = v), v)) {
                    for (s = i.map(o(h, "script"), bf), c = s.length; l > e; e++) u = h, e !== b && (u = i.clone(u, !0, !0), c && i.merge(s, o(u, "script"))), t.call(this[e], u, e);
                    if (c)
                        for (y = s[s.length - 1].ownerDocument, i.map(s, kf), e = 0; c > e; e++) u = s[e], ar.test(u.type || "") && !r.access(u, "globalEval") && i.contains(y, u) && (u.src ? i._evalUrl && i._evalUrl(u.src) : i.globalEval(u.textContent.replace(wf, "")))
                }
                return this
            }
        });
        i.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(n, t) {
            i.fn[n] = function(n) {
                for (var u, f = [], e = i(n), o = e.length - 1, r = 0; o >= r; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), ti.apply(f, u.get());
                return this.pushStack(f)
            }
        });
        oi = {};
        var wr = /^margin/,
            hi = new RegExp("^(" + ct + ")(?!px)[a-z%]+$", "i"),
            vt = function(t) {
                return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : n.getComputedStyle(t, null)
            };
        ! function() {
            var s, o, e = u.documentElement,
                r = u.createElement("div"),
                t = u.createElement("div");
            if (t.style) {
                t.style.backgroundClip = "content-box";
                t.cloneNode(!0).style.backgroundClip = "";
                f.clearCloneStyle = "content-box" === t.style.backgroundClip;
                r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute";
                r.appendChild(t);

                function h() {
                    t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
                    t.innerHTML = "";
                    e.appendChild(r);
                    var i = n.getComputedStyle(t, null);
                    s = "1%" !== i.top;
                    o = "4px" === i.width;
                    e.removeChild(r)
                }
                n.getComputedStyle && i.extend(f, {
                    pixelPosition: function() {
                        return h(), s
                    },
                    boxSizingReliable: function() {
                        return null == o && h(), o
                    },
                    reliableMarginRight: function() {
                        var f, i = t.appendChild(u.createElement("div"));
                        return i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", e.appendChild(r), f = !parseFloat(n.getComputedStyle(i, null).marginRight), e.removeChild(r), t.removeChild(i), f
                    }
                })
            }
        }();
        i.swap = function(n, t, i, r) {
            var f, u, e = {};
            for (u in t) e[u] = n.style[u], n.style[u] = t[u];
            f = i.apply(n, r || []);
            for (u in t) n.style[u] = e[u];
            return f
        };
        var gf = /^(none|table(?!-c[ea]).+)/,
            ne = new RegExp("^(" + ct + ")(.*)$", "i"),
            te = new RegExp("^([+-])=(" + ct + ")", "i"),
            ie = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            kr = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            dr = ["Webkit", "O", "Moz", "ms"];
        i.extend({
            cssHooks: {
                opacity: {
                    get: function(n, t) {
                        if (t) {
                            var i = it(n, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(n, t, r, u) {
                if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                    var o, h, e, s = i.camelCase(t),
                        c = n.style;
                    return t = i.cssProps[s] || (i.cssProps[s] = gr(c, s)), e = i.cssHooks[t] || i.cssHooks[s], void 0 === r ? e && "get" in e && void 0 !== (o = e.get(n, !1, u)) ? o : c[t] : (h = typeof r, "string" === h && (o = te.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(i.css(n, t)), h = "number"), null != r && r === r && ("number" !== h || i.cssNumber[s] || (r += "px"), f.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (c[t] = "inherit"), e && "set" in e && void 0 === (r = e.set(n, r, u)) || (c[t] = r)), void 0)
                }
            },
            css: function(n, t, r, u) {
                var f, s, e, o = i.camelCase(t);
                return t = i.cssProps[o] || (i.cssProps[o] = gr(n.style, o)), e = i.cssHooks[t] || i.cssHooks[o], e && "get" in e && (f = e.get(n, !0, r)), void 0 === f && (f = it(n, t, u)), "normal" === f && t in kr && (f = kr[t]), "" === r || r ? (s = parseFloat(f), r === !0 || i.isNumeric(s) ? s || 0 : f) : f
            }
        });
        i.each(["height", "width"], function(n, t) {
            i.cssHooks[t] = {
                get: function(n, r, u) {
                    if (r) return gf.test(i.css(n, "display")) && 0 === n.offsetWidth ? i.swap(n, ie, function() {
                        return iu(n, t, u)
                    }) : iu(n, t, u)
                },
                set: function(n, r, u) {
                    var f = u && vt(n);
                    return nu(n, r, u ? tu(n, t, u, "border-box" === i.css(n, "boxSizing", !1, f), f) : 0)
                }
            }
        });
        i.cssHooks.marginRight = br(f.reliableMarginRight, function(n, t) {
            if (t) return i.swap(n, {
                display: "inline-block"
            }, it, [n, "marginRight"])
        });
        i.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(n, t) {
            i.cssHooks[n + t] = {
                expand: function(i) {
                    for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++) f[n + p[r] + t] = u[r] || u[r - 2] || u[0];
                    return f
                }
            };
            wr.test(n) || (i.cssHooks[n + t].set = nu)
        });
        i.fn.extend({
            css: function(n, t) {
                return l(this, function(n, t, r) {
                    var f, e, o = {},
                        u = 0;
                    if (i.isArray(t)) {
                        for (f = vt(n), e = t.length; e > u; u++) o[t[u]] = i.css(n, t[u], !1, f);
                        return o
                    }
                    return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
                }, n, t, arguments.length > 1)
            },
            show: function() {
                return ru(this, !0)
            },
            hide: function() {
                return ru(this)
            },
            toggle: function(n) {
                return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                    tt(this) ? i(this).show() : i(this).hide()
                })
            }
        });
        i.Tween = s;
        s.prototype = {
            constructor: s,
            init: function(n, t, r, u, f, e) {
                this.elem = n;
                this.prop = r;
                this.easing = f || "swing";
                this.options = t;
                this.start = this.now = this.cur();
                this.end = u;
                this.unit = e || (i.cssNumber[r] ? "" : "px")
            },
            cur: function() {
                var n = s.propHooks[this.prop];
                return n && n.get ? n.get(this) : s.propHooks._default.get(this)
            },
            run: function(n) {
                var t, r = s.propHooks[this.prop];
                return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : s.propHooks._default.set(this), this
            }
        };
        s.prototype.init.prototype = s.prototype;
        s.propHooks = {
            _default: {
                get: function(n) {
                    var t;
                    return null == n.elem[n.prop] || n.elem.style && null != n.elem.style[n.prop] ? (t = i.css(n.elem, n.prop, ""), t && "auto" !== t ? t : 0) : n.elem[n.prop]
                },
                set: function(n) {
                    i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (null != n.elem.style[i.cssProps[n.prop]] || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
                }
            }
        };
        s.propHooks.scrollTop = s.propHooks.scrollLeft = {
            set: function(n) {
                n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
            }
        };
        i.easing = {
            linear: function(n) {
                return n
            },
            swing: function(n) {
                return .5 - Math.cos(n * Math.PI) / 2
            }
        };
        i.fx = s.prototype.init;
        i.fx.step = {};
        var d, yt, re = /^(?:toggle|show|hide)$/,
            uu = new RegExp("^(?:([+-])=|)(" + ct + ")([a-z%]*)$", "i"),
            ue = /queueHooks$/,
            pt = [fe],
            rt = {
                "*": [function(n, t) {
                    var f = this.createTween(n, t),
                        s = f.cur(),
                        r = uu.exec(t),
                        e = r && r[3] || (i.cssNumber[n] ? "" : "px"),
                        u = (i.cssNumber[n] || "px" !== e && +s) && uu.exec(i.css(f.elem, n)),
                        o = 1,
                        h = 20;
                    if (u && u[3] !== e) {
                        e = e || u[3];
                        r = r || [];
                        u = +s || 1;
                        do o = o || ".5", u /= o, i.style(f.elem, n, u + e); while (o !== (o = f.cur() / s) && 1 !== o && --h)
                    }
                    return r && (u = f.start = +u || +s || 0, f.unit = e, f.end = r[1] ? u + (r[1] + 1) * r[2] : +r[2]), f
                }]
            };
        i.Animation = i.extend(ou, {
            tweener: function(n, t) {
                i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
                for (var r, u = 0, f = n.length; f > u; u++) r = n[u], rt[r] = rt[r] || [], rt[r].unshift(t)
            },
            prefilter: function(n, t) {
                t ? pt.unshift(n) : pt.push(n)
            }
        });
        i.speed = function(n, t, r) {
            var u = n && "object" == typeof n ? i.extend({}, n) : {
                complete: r || !r && t || i.isFunction(n) && n,
                duration: n,
                easing: r && t || t && !i.isFunction(t) && t
            };
            return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (null == u.queue || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
                i.isFunction(u.old) && u.old.call(this);
                u.queue && i.dequeue(this, u.queue)
            }, u
        };
        i.fn.extend({
            fadeTo: function(n, t, i, r) {
                return this.filter(tt).css("opacity", 0).show().end().animate({
                    opacity: t
                }, n, i, r)
            },
            animate: function(n, t, u, f) {
                var s = i.isEmptyObject(n),
                    o = i.speed(t, u, f),
                    e = function() {
                        var t = ou(this, i.extend({}, n), o);
                        (s || r.get(this, "finish")) && t.stop(!0)
                    };
                return e.finish = e, s || o.queue === !1 ? this.each(e) : this.queue(o.queue, e)
            },
            stop: function(n, t, u) {
                var f = function(n) {
                    var t = n.stop;
                    delete n.stop;
                    t(u)
                };
                return "string" != typeof n && (u = t, t = n, n = void 0), t && n !== !1 && this.queue(n || "fx", []), this.each(function() {
                    var s = !0,
                        t = null != n && n + "queueHooks",
                        o = i.timers,
                        e = r.get(this);
                    if (t) e[t] && e[t].stop && f(e[t]);
                    else
                        for (t in e) e[t] && e[t].stop && ue.test(t) && f(e[t]);
                    for (t = o.length; t--;) o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u), s = !1, o.splice(t, 1));
                    (s || !u) && i.dequeue(this, n)
                })
            },
            finish: function(n) {
                return n !== !1 && (n = n || "fx"), this.each(function() {
                    var t, e = r.get(this),
                        u = e[n + "queue"],
                        o = e[n + "queueHooks"],
                        f = i.timers,
                        s = u ? u.length : 0;
                    for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                    for (t = 0; s > t; t++) u[t] && u[t].finish && u[t].finish.call(this);
                    delete e.finish
                })
            }
        });
        i.each(["toggle", "show", "hide"], function(n, t) {
            var r = i.fn[t];
            i.fn[t] = function(n, i, u) {
                return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(wt(t, !0), n, i, u)
            }
        });
        i.each({
            slideDown: wt("show"),
            slideUp: wt("hide"),
            slideToggle: wt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(n, t) {
            i.fn[n] = function(n, i, r) {
                return this.animate(t, n, i, r)
            }
        });
        i.timers = [];
        i.fx.tick = function() {
            var r, n = 0,
                t = i.timers;
            for (d = i.now(); n < t.length; n++) r = t[n], r() || t[n] !== r || t.splice(n--, 1);
            t.length || i.fx.stop();
            d = void 0
        };
        i.fx.timer = function(n) {
            i.timers.push(n);
            n() ? i.fx.start() : i.timers.pop()
        };
        i.fx.interval = 13;
        i.fx.start = function() {
            yt || (yt = setInterval(i.fx.tick, i.fx.interval))
        };
        i.fx.stop = function() {
            clearInterval(yt);
            yt = null
        };
        i.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        i.fn.delay = function(n, t) {
                return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function(t, i) {
                    var r = setTimeout(t, n);
                    i.stop = function() {
                        clearTimeout(r)
                    }
                })
            },
            function() {
                var n = u.createElement("input"),
                    t = u.createElement("select"),
                    i = t.appendChild(u.createElement("option"));
                n.type = "checkbox";
                f.checkOn = "" !== n.value;
                f.optSelected = i.selected;
                t.disabled = !0;
                f.optDisabled = !i.disabled;
                n = u.createElement("input");
                n.value = "t";
                n.type = "radio";
                f.radioValue = "t" === n.value
            }();
        g = i.expr.attrHandle;
        i.fn.extend({
            attr: function(n, t) {
                return l(this, i.attr, n, t, arguments.length > 1)
            },
            removeAttr: function(n) {
                return this.each(function() {
                    i.removeAttr(this, n)
                })
            }
        });
        i.extend({
            attr: function(n, t, r) {
                var u, f, e = n.nodeType;
                if (n && 3 !== e && 8 !== e && 2 !== e) return typeof n.getAttribute === b ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (t = t.toLowerCase(), u = i.attrHooks[t] || (i.expr.match.bool.test(t) ? su : oe)), void 0 === r ? u && "get" in u && null !== (f = u.get(n, t)) ? f : (f = i.find.attr(n, t), null == f ? void 0 : f) : null !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""), r) : void i.removeAttr(n, t))
            },
            removeAttr: function(n, t) {
                var r, u, e = 0,
                    f = t && t.match(c);
                if (f && 1 === n.nodeType)
                    while (r = f[e++]) u = i.propFix[r] || r, i.expr.match.bool.test(r) && (n[u] = !1), n.removeAttribute(r)
            },
            attrHooks: {
                type: {
                    set: function(n, t) {
                        if (!f.radioValue && "radio" === t && i.nodeName(n, "input")) {
                            var r = n.value;
                            return n.setAttribute("type", t), r && (n.value = r), t
                        }
                    }
                }
            }
        });
        su = {
            set: function(n, t, r) {
                return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r, r), r
            }
        };
        i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
            var r = g[t] || i.find.attr;
            g[t] = function(n, t, i) {
                var u, f;
                return i || (f = g[t], g[t] = u, u = null != r(n, t, i) ? t.toLowerCase() : null, g[t] = f), u
            }
        });
        hu = /^(?:input|select|textarea|button)$/i;
        i.fn.extend({
            prop: function(n, t) {
                return l(this, i.prop, n, t, arguments.length > 1)
            },
            removeProp: function(n) {
                return this.each(function() {
                    delete this[i.propFix[n] || n]
                })
            }
        });
        i.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(n, t, r) {
                var f, u, o, e = n.nodeType;
                if (n && 3 !== e && 8 !== e && 2 !== e) return o = 1 !== e || !i.isXMLDoc(n), o && (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(n) {
                        return n.hasAttribute("tabindex") || hu.test(n.nodeName) || n.href ? n.tabIndex : -1
                    }
                }
            }
        });
        f.optSelected || (i.propHooks.selected = {
            get: function(n) {
                var t = n.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }
        });
        i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            i.propFix[this.toLowerCase()] = this
        });
        bt = /[\t\r\n\f]/g;
        i.fn.extend({
            addClass: function(n) {
                var o, t, r, u, s, f, h = "string" == typeof n && n,
                    e = 0,
                    l = this.length;
                if (i.isFunction(n)) return this.each(function(t) {
                    i(this).addClass(n.call(this, t, this.className))
                });
                if (h)
                    for (o = (n || "").match(c) || []; l > e; e++)
                        if (t = this[e], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(bt, " ") : " ")) {
                            for (s = 0; u = o[s++];) r.indexOf(" " + u + " ") < 0 && (r += u + " ");
                            f = i.trim(r);
                            t.className !== f && (t.className = f)
                        }
                return this
            },
            removeClass: function(n) {
                var o, t, r, u, s, f, h = 0 === arguments.length || "string" == typeof n && n,
                    e = 0,
                    l = this.length;
                if (i.isFunction(n)) return this.each(function(t) {
                    i(this).removeClass(n.call(this, t, this.className))
                });
                if (h)
                    for (o = (n || "").match(c) || []; l > e; e++)
                        if (t = this[e], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(bt, " ") : "")) {
                            for (s = 0; u = o[s++];)
                                while (r.indexOf(" " + u + " ") >= 0) r = r.replace(" " + u + " ", " ");
                            f = n ? i.trim(r) : "";
                            t.className !== f && (t.className = f)
                        }
                return this
            },
            toggleClass: function(n, t) {
                var u = typeof n;
                return "boolean" == typeof t && "string" === u ? t ? this.addClass(n) : this.removeClass(n) : this.each(i.isFunction(n) ? function(r) {
                    i(this).toggleClass(n.call(this, r, this.className, t), t)
                } : function() {
                    if ("string" === u)
                        for (var t, e = 0, f = i(this), o = n.match(c) || []; t = o[e++];) f.hasClass(t) ? f.removeClass(t) : f.addClass(t);
                    else(u === b || "boolean" === u) && (this.className && r.set(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : r.get(this, "__className__") || "")
                })
            },
            hasClass: function(n) {
                for (var i = " " + n + " ", t = 0, r = this.length; r > t; t++)
                    if (1 === this[t].nodeType && (" " + this[t].className + " ").replace(bt, " ").indexOf(i) >= 0) return !0;
                return !1
            }
        });
        cu = /\r/g;
        i.fn.extend({
            val: function(n) {
                var t, r, f, u = this[0];
                return arguments.length ? (f = i.isFunction(n), this.each(function(r) {
                    var u;
                    1 === this.nodeType && (u = f ? n.call(this, r, i(this).val()) : n, null == u ? u = "" : "number" == typeof u ? u += "" : i.isArray(u) && (u = i.map(u, function(n) {
                        return null == n ? "" : n + ""
                    })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u))
                })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && void 0 !== (r = t.get(u, "value")) ? r : (r = u.value, "string" == typeof r ? r.replace(cu, "") : null == r ? "" : r)) : void 0
            }
        });
        i.extend({
            valHooks: {
                option: {
                    get: function(n) {
                        var t = i.find.attr(n, "value");
                        return null != t ? t : i.trim(i.text(n))
                    }
                },
                select: {
                    get: function(n) {
                        for (var o, t, s = n.options, r = n.selectedIndex, u = "select-one" === n.type || 0 > r, h = u ? null : [], c = u ? r + 1 : s.length, e = 0 > r ? c : u ? r : 0; c > e; e++)
                            if (t = s[e], !(!t.selected && e !== r || (f.optDisabled ? t.disabled : null !== t.getAttribute("disabled")) || t.parentNode.disabled && i.nodeName(t.parentNode, "optgroup"))) {
                                if (o = i(t).val(), u) return o;
                                h.push(o)
                            }
                        return h
                    },
                    set: function(n, t) {
                        for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--;) r = f[o], (r.selected = i.inArray(r.value, e) >= 0) && (u = !0);
                        return u || (n.selectedIndex = -1), e
                    }
                }
            }
        });
        i.each(["radio", "checkbox"], function() {
            i.valHooks[this] = {
                set: function(n, t) {
                    if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0
                }
            };
            f.checkOn || (i.valHooks[this].get = function(n) {
                return null === n.getAttribute("value") ? "on" : n.value
            })
        });
        i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
            i.fn[t] = function(n, i) {
                return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
            }
        });
        i.fn.extend({
            hover: function(n, t) {
                return this.mouseenter(n).mouseleave(t || n)
            },
            bind: function(n, t, i) {
                return this.on(n, null, t, i)
            },
            unbind: function(n, t) {
                return this.off(n, null, t)
            },
            delegate: function(n, t, i, r) {
                return this.on(t, n, i, r)
            },
            undelegate: function(n, t, i) {
                return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
            }
        });
        kt = i.now();
        dt = /\?/;
        i.parseJSON = function(n) {
            return JSON.parse(n + "")
        };
        i.parseXML = function(n) {
            var t, r;
            if (!n || "string" != typeof n) return null;
            try {
                r = new DOMParser;
                t = r.parseFromString(n, "text/xml")
            } catch (u) {
                t = void 0
            }
            return (!t || t.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + n), t
        };
        var se = /#.*$/,
            lu = /([?&])_=[^&]*/,
            he = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            ce = /^(?:GET|HEAD)$/,
            le = /^\/\//,
            au = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            vu = {},
            ci = {},
            yu = "*/".concat("*"),
            li = n.location.href,
            nt = au.exec(li.toLowerCase()) || [];
        i.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: li,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(nt[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": yu,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": i.parseJSON,
                    "text xml": i.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(n, t) {
                return t ? ai(ai(n, i.ajaxSettings), t) : ai(i.ajaxSettings, n)
            },
            ajaxPrefilter: pu(vu),
            ajaxTransport: pu(ci),
            ajax: function(n, t) {
                function p(n, t, s, h) {
                    var v, it, tt, p, nt, c = t;
                    2 !== e && (e = 2, b && clearTimeout(b), l = void 0, w = h || "", u.readyState = n > 0 ? 4 : 0, v = n >= 200 && 300 > n || 304 === n, s && (p = ae(r, u, s)), p = ve(r, p, u, v), v ? (r.ifModified && (nt = u.getResponseHeader("Last-Modified"), nt && (i.lastModified[f] = nt), nt = u.getResponseHeader("etag"), nt && (i.etag[f] = nt)), 204 === n || "HEAD" === r.type ? c = "nocontent" : 304 === n ? c = "notmodified" : (c = p.state, it = p.data, tt = p.error, v = !tt)) : (tt = c, (n || !c) && (c = "error", 0 > n && (n = 0))), u.status = n, u.statusText = (t || c) + "", v ? d.resolveWith(o, [it, c, u]) : d.rejectWith(o, [u, c, tt]), u.statusCode(y), y = void 0, a && k.trigger(v ? "ajaxSuccess" : "ajaxError", [u, r, v ? it : tt]), g.fireWith(o, [u, c]), a && (k.trigger("ajaxComplete", [u, r]), --i.active || i.event.trigger("ajaxStop")))
                }
                "object" == typeof n && (t = n, n = void 0);
                t = t || {};
                var l, f, w, v, b, s, a, h, r = i.ajaxSetup({}, t),
                    o = r.context || r,
                    k = r.context && (o.nodeType || o.jquery) ? i(o) : i.event,
                    d = i.Deferred(),
                    g = i.Callbacks("once memory"),
                    y = r.statusCode || {},
                    tt = {},
                    it = {},
                    e = 0,
                    rt = "canceled",
                    u = {
                        readyState: 0,
                        getResponseHeader: function(n) {
                            var t;
                            if (2 === e) {
                                if (!v)
                                    for (v = {}; t = he.exec(w);) v[t[1].toLowerCase()] = t[2];
                                t = v[n.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === e ? w : null
                        },
                        setRequestHeader: function(n, t) {
                            var i = n.toLowerCase();
                            return e || (n = it[i] = it[i] || n, tt[n] = t), this
                        },
                        overrideMimeType: function(n) {
                            return e || (r.mimeType = n), this
                        },
                        statusCode: function(n) {
                            var t;
                            if (n)
                                if (2 > e)
                                    for (t in n) y[t] = [y[t], n[t]];
                                else u.always(n[u.status]);
                            return this
                        },
                        abort: function(n) {
                            var t = n || rt;
                            return l && l.abort(t), p(0, t), this
                        }
                    };
                if (d.promise(u).complete = g.add, u.success = u.done, u.error = u.fail, r.url = ((n || r.url || li) + "").replace(se, "").replace(le, nt[1] + "//"), r.type = t.method || t.type || r.method || r.type, r.dataTypes = i.trim(r.dataType || "*").toLowerCase().match(c) || [""], null == r.crossDomain && (s = au.exec(r.url.toLowerCase()), r.crossDomain = !(!s || s[1] === nt[1] && s[2] === nt[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (nt[3] || ("http:" === nt[1] ? "80" : "443")))), r.data && r.processData && "string" != typeof r.data && (r.data = i.param(r.data, r.traditional)), wu(vu, r, t, u), 2 === e) return u;
                a = i.event && r.global;
                a && 0 == i.active++ && i.event.trigger("ajaxStart");
                r.type = r.type.toUpperCase();
                r.hasContent = !ce.test(r.type);
                f = r.url;
                r.hasContent || (r.data && (f = r.url += (dt.test(f) ? "&" : "?") + r.data, delete r.data), r.cache === !1 && (r.url = lu.test(f) ? f.replace(lu, "$1_=" + kt++) : f + (dt.test(f) ? "&" : "?") + "_=" + kt++));
                r.ifModified && (i.lastModified[f] && u.setRequestHeader("If-Modified-Since", i.lastModified[f]), i.etag[f] && u.setRequestHeader("If-None-Match", i.etag[f]));
                (r.data && r.hasContent && r.contentType !== !1 || t.contentType) && u.setRequestHeader("Content-Type", r.contentType);
                u.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + ("*" !== r.dataTypes[0] ? ", " + yu + "; q=0.01" : "") : r.accepts["*"]);
                for (h in r.headers) u.setRequestHeader(h, r.headers[h]);
                if (r.beforeSend && (r.beforeSend.call(o, u, r) === !1 || 2 === e)) return u.abort();
                rt = "abort";
                for (h in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) u[h](r[h]);
                if (l = wu(ci, r, t, u)) {
                    u.readyState = 1;
                    a && k.trigger("ajaxSend", [u, r]);
                    r.async && r.timeout > 0 && (b = setTimeout(function() {
                        u.abort("timeout")
                    }, r.timeout));
                    try {
                        e = 1;
                        l.send(tt, p)
                    } catch (ut) {
                        if (!(2 > e)) throw ut;
                        p(-1, ut)
                    }
                } else p(-1, "No Transport");
                return u
            },
            getJSON: function(n, t, r) {
                return i.get(n, t, r, "json")
            },
            getScript: function(n, t) {
                return i.get(n, void 0, t, "script")
            }
        });
        i.each(["get", "post"], function(n, t) {
            i[t] = function(n, r, u, f) {
                return i.isFunction(r) && (f = f || u, u = r, r = void 0), i.ajax({
                    url: n,
                    type: t,
                    dataType: f,
                    data: r,
                    success: u
                })
            }
        });
        i._evalUrl = function(n) {
            return i.ajax({
                url: n,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        };
        i.fn.extend({
            wrapAll: function(n) {
                var t;
                return i.isFunction(n) ? this.each(function(t) {
                    i(this).wrapAll(n.call(this, t))
                }) : (this[0] && (t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var n = this; n.firstElementChild;) n = n.firstElementChild;
                    return n
                }).append(this)), this)
            },
            wrapInner: function(n) {
                return this.each(i.isFunction(n) ? function(t) {
                    i(this).wrapInner(n.call(this, t))
                } : function() {
                    var t = i(this),
                        r = t.contents();
                    r.length ? r.wrapAll(n) : t.append(n)
                })
            },
            wrap: function(n) {
                var t = i.isFunction(n);
                return this.each(function(r) {
                    i(this).wrapAll(t ? n.call(this, r) : n)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        i.expr.filters.hidden = function(n) {
            return n.offsetWidth <= 0 && n.offsetHeight <= 0
        };
        i.expr.filters.visible = function(n) {
            return !i.expr.filters.hidden(n)
        };
        var ye = /%20/g,
            pe = /\[\]$/,
            bu = /\r?\n/g,
            we = /^(?:submit|button|image|reset|file)$/i,
            be = /^(?:input|select|textarea|keygen)/i;
        i.param = function(n, t) {
            var r, u = [],
                f = function(n, t) {
                    t = i.isFunction(t) ? t() : null == t ? "" : t;
                    u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
                f(this.name, this.value)
            });
            else
                for (r in n) vi(r, n[r], t, f);
            return u.join("&").replace(ye, "+")
        };
        i.fn.extend({
            serialize: function() {
                return i.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var n = i.prop(this, "elements");
                    return n ? i.makeArray(n) : this
                }).filter(function() {
                    var n = this.type;
                    return this.name && !i(this).is(":disabled") && be.test(this.nodeName) && !we.test(n) && (this.checked || !er.test(n))
                }).map(function(n, t) {
                    var r = i(this).val();
                    return null == r ? null : i.isArray(r) ? i.map(r, function(n) {
                        return {
                            name: t.name,
                            value: n.replace(bu, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: r.replace(bu, "\r\n")
                    }
                }).get()
            }
        });
        i.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (n) {}
        };
        var ke = 0,
            gt = {},
            de = {
                0: 200,
                1223: 204
            },
            ut = i.ajaxSettings.xhr();
        return n.attachEvent && n.attachEvent("onunload", function() {
            for (var n in gt) gt[n]()
        }), f.cors = !!ut && "withCredentials" in ut, f.ajax = ut = !!ut, i.ajaxTransport(function(n) {
            var t;
            if (f.cors || ut && !n.crossDomain) return {
                send: function(i, r) {
                    var f, u = n.xhr(),
                        e = ++ke;
                    if (u.open(n.type, n.url, n.async, n.username, n.password), n.xhrFields)
                        for (f in n.xhrFields) u[f] = n.xhrFields[f];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType);
                    n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (f in i) u.setRequestHeader(f, i[f]);
                    t = function(n) {
                        return function() {
                            t && (delete gt[e], t = u.onload = u.onerror = null, "abort" === n ? u.abort() : "error" === n ? r(u.status, u.statusText) : r(de[u.status] || u.status, u.statusText, "string" == typeof u.responseText ? {
                                text: u.responseText
                            } : void 0, u.getAllResponseHeaders()))
                        }
                    };
                    u.onload = t();
                    u.onerror = t("error");
                    t = gt[e] = t("abort");
                    try {
                        u.send(n.hasContent && n.data || null)
                    } catch (o) {
                        if (t) throw o;
                    }
                },
                abort: function() {
                    t && t()
                }
            }
        }), i.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(n) {
                    return i.globalEval(n), n
                }
            }
        }), i.ajaxPrefilter("script", function(n) {
            void 0 === n.cache && (n.cache = !1);
            n.crossDomain && (n.type = "GET")
        }), i.ajaxTransport("script", function(n) {
            if (n.crossDomain) {
                var r, t;
                return {
                    send: function(f, e) {
                        r = i("<script>").prop({
                            async: !0,
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", t = function(n) {
                            r.remove();
                            t = null;
                            n && e("error" === n.type ? 404 : 200, n.type)
                        });
                        u.head.appendChild(r[0])
                    },
                    abort: function() {
                        t && t()
                    }
                }
            }
        }), yi = [], ni = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var n = yi.pop() || i.expando + "_" + kt++;
                return this[n] = !0, n
            }
        }), i.ajaxPrefilter("json jsonp", function(t, r, u) {
            var f, o, e, s = t.jsonp !== !1 && (ni.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0]) return (f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ni, "$1" + f) : t.jsonp !== !1 && (t.url += (dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function() {
                return e || i.error(f + " was not called"), e[0]
            }, t.dataTypes[0] = "json", o = n[f], n[f] = function() {
                e = arguments
            }, u.always(function() {
                n[f] = o;
                t[f] && (t.jsonpCallback = r.jsonpCallback, yi.push(f));
                e && i.isFunction(o) && o(e[0]);
                e = o = void 0
            }), "script")
        }), i.parseHTML = function(n, t, r) {
            if (!n || "string" != typeof n) return null;
            "boolean" == typeof t && (r = t, t = !1);
            t = t || u;
            var f = gi.exec(n),
                e = !r && [];
            return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e), e && e.length && i(e).remove(), i.merge([], f.childNodes))
        }, pi = i.fn.load, i.fn.load = function(n, t, r) {
            if ("string" != typeof n && pi) return pi.apply(this, arguments);
            var u, o, s, f = this,
                e = n.indexOf(" ");
            return e >= 0 && (u = i.trim(n.slice(e)), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = void 0) : t && "object" == typeof t && (o = "POST"), f.length > 0 && i.ajax({
                url: n,
                type: o,
                dataType: "html",
                data: t
            }).done(function(n) {
                s = arguments;
                f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
            }).complete(r && function(n, t) {
                f.each(r, s || [n.responseText, t, n])
            }), this
        }, i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
            i.fn[t] = function(n) {
                return this.on(t, n)
            }
        }), i.expr.filters.animated = function(n) {
            return i.grep(i.timers, function(t) {
                return n === t.elem
            }).length
        }, wi = n.document.documentElement, i.offset = {
            setOffset: function(n, t, r) {
                var e, o, s, h, u, c, v, l = i.css(n, "position"),
                    a = i(n),
                    f = {};
                "static" === l && (n.style.position = "relative");
                u = a.offset();
                s = i.css(n, "top");
                c = i.css(n, "left");
                v = ("absolute" === l || "fixed" === l) && (s + c).indexOf("auto") > -1;
                v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
                i.isFunction(t) && (t = t.call(n, r, u));
                null != t.top && (f.top = t.top - u.top + h);
                null != t.left && (f.left = t.left - u.left + o);
                "using" in t ? t.using.call(n, f) : a.css(f)
            }
        }, i.fn.extend({
            offset: function(n) {
                if (arguments.length) return void 0 === n ? this : this.each(function(t) {
                    i.offset.setOffset(this, n, t)
                });
                var r, f, t = this[0],
                    u = {
                        top: 0,
                        left: 0
                    },
                    e = t && t.ownerDocument;
                if (e) return r = e.documentElement, i.contains(r, t) ? (typeof t.getBoundingClientRect !== b && (u = t.getBoundingClientRect()), f = ku(e), {
                    top: u.top + f.pageYOffset - r.clientTop,
                    left: u.left + f.pageXOffset - r.clientLeft
                }) : u
            },
            position: function() {
                if (this[0]) {
                    var n, r, u = this[0],
                        t = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), {
                        top: r.top - t.top - i.css(u, "marginTop", !0),
                        left: r.left - t.left - i.css(u, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var n = this.offsetParent || wi; n && !i.nodeName(n, "html") && "static" === i.css(n, "position");) n = n.offsetParent;
                    return n || wi
                })
            }
        }), i.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, r) {
            var u = "pageYOffset" === r;
            i.fn[t] = function(i) {
                return l(this, function(t, i, f) {
                    var e = ku(t);
                    return void 0 === f ? e ? e[r] : t[i] : void(e ? e.scrollTo(u ? n.pageXOffset : f, u ? f : n.pageYOffset) : t[i] = f)
                }, t, i, arguments.length, null)
            }
        }), i.each(["top", "left"], function(n, t) {
            i.cssHooks[t] = br(f.pixelPosition, function(n, r) {
                if (r) return (r = it(n, t), hi.test(r) ? i(n).position()[t] + "px" : r)
            })
        }), i.each({
            Height: "height",
            Width: "width"
        }, function(n, t) {
            i.each({
                padding: "inner" + n,
                content: t,
                "": "outer" + n
            }, function(r, u) {
                i.fn[u] = function(u, f) {
                    var e = arguments.length && (r || "boolean" != typeof u),
                        o = r || (u === !0 || f === !0 ? "margin" : "border");
                    return l(this, function(t, r, u) {
                        var f;
                        return i.isWindow(t) ? t.document.documentElement["client" + n] : 9 === t.nodeType ? (f = t.documentElement, Math.max(t.body["scroll" + n], f["scroll" + n], t.body["offset" + n], f["offset" + n], f["client" + n])) : void 0 === u ? i.css(t, r, o) : i.style(t, r, u, o)
                    }, t, e ? u : void 0, e, null)
                }
            })
        }), i.fn.size = function() {
            return this.length
        }, i.fn.andSelf = i.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return i
        }), du = n.jQuery, gu = n.$, i.noConflict = function(t) {
            return n.$ === i && (n.$ = gu), t && n.jQuery === i && (n.jQuery = du), i
        }, typeof t === b && (n.jQuery = n.$ = i), i
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(n) {
    "use strict";
    var t = n.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3");
}(jQuery); + function(n) {
    "use strict";

    function t() {
        var i = document.createElement("bootstrap"),
            n = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var t in n)
            if (void 0 !== i.style[t]) return {
                end: n[t]
            };
        return !1
    }
    n.fn.emulateTransitionEnd = function(t) {
        var i = !1,
            u = this,
            r;
        n(this).one("bsTransitionEnd", function() {
            i = !0
        });
        return r = function() {
            i || n(u).trigger(n.support.transition.end)
        }, setTimeout(r, t), this
    };
    n(function() {
        n.support.transition = t();
        n.support.transition && (n.event.special.bsTransitionEnd = {
            bindType: n.support.transition.end,
            delegateType: n.support.transition.end,
            handle: function(t) {
                if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery); + function(n) {
    "use strict";

    function u(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("bs.alert");
            u || r.data("bs.alert", u = new t(this));
            "string" == typeof i && u[i].call(r)
        })
    }
    var i = '[data-dismiss="alert"]',
        t = function(t) {
            n(t).on("click", i, this.close)
        },
        r;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 150;
    t.prototype.close = function(i) {
        function e() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var f = n(this),
            u = f.attr("data-target"),
            r;
        u || (u = f.attr("href"), u = u && u.replace(/.*(?=#[^\s]*$)/, ""));
        r = n(u);
        i && i.preventDefault();
        r.length || (r = f.closest(".alert"));
        r.trigger(i = n.Event("close.bs.alert"));
        i.isDefaultPrevented() || (r.removeClass("in"), n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e())
    };
    r = n.fn.alert;
    n.fn.alert = u;
    n.fn.alert.Constructor = t;
    n.fn.alert.noConflict = function() {
        return n.fn.alert = r, this
    };
    n(document).on("click.bs.alert.data-api", i, t.prototype.close)
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.button"),
                f = "object" == typeof i && i;
            r || u.data("bs.button", r = new t(this, f));
            "toggle" == i ? r.toggle() : i && r.setState(i)
        })
    }
    var t = function(i, r) {
            this.$element = n(i);
            this.options = n.extend({}, t.DEFAULTS, r);
            this.isLoading = !1
        },
        r;
    t.VERSION = "3.3.6";
    t.DEFAULTS = {
        loadingText: "loading..."
    };
    t.prototype.setState = function(t) {
        var r = "disabled",
            i = this.$element,
            f = i.is("input") ? "val" : "html",
            u = i.data();
        t += "Text";
        null == u.resetText && i.data("resetText", i[f]());
        setTimeout(n.proxy(function() {
            i[f](null == u[t] ? this.options[t] : u[t]);
            "loadingText" == t ? (this.isLoading = !0, i.addClass(r).attr(r, r)) : this.isLoading && (this.isLoading = !1, i.removeClass(r).removeAttr(r))
        }, this), 0)
    };
    t.prototype.toggle = function() {
        var t = !0,
            i = this.$element.closest('[data-toggle="buttons"]'),
            n;
        i.length ? (n = this.$element.find("input"), "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), i.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")) : (this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active"))
    };
    r = n.fn.button;
    n.fn.button = i;
    n.fn.button.Constructor = t;
    n.fn.button.noConflict = function() {
        return n.fn.button = r, this
    };
    n(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        var r = n(t.target);
        r.hasClass("btn") || (r = r.closest(".btn"));
        i.call(r, "toggle");
        n(t.target).is('input[type="radio"]') || n(t.target).is('input[type="checkbox"]') || t.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        n(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.carousel"),
                f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i),
                e = "string" == typeof i ? i : f.slide;
            r || u.data("bs.carousel", r = new t(this, f));
            "number" == typeof i ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle()
        })
    }
    var t = function(t, i) {
            this.$element = n(t);
            this.$indicators = this.$element.find(".carousel-indicators");
            this.options = i;
            this.paused = null;
            this.sliding = null;
            this.interval = null;
            this.$active = null;
            this.$items = null;
            this.options.keyboard && this.$element.on("keydown.bs.carousel", n.proxy(this.keydown, this));
            "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", n.proxy(this.pause, this)).on("mouseleave.bs.carousel", n.proxy(this.cycle, this))
        },
        u, r;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 600;
    t.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    };
    t.prototype.keydown = function(n) {
        if (!/input|textarea/i.test(n.target.tagName)) {
            switch (n.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            n.preventDefault()
        }
    };
    t.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)), this
    };
    t.prototype.getItemIndex = function(n) {
        return this.$items = n.parent().children(".item"), this.$items.index(n || this.$active)
    };
    t.prototype.getItemForDirection = function(n, t) {
        var i = this.getItemIndex(t),
            f = "prev" == n && 0 === i || "next" == n && i == this.$items.length - 1,
            r, u;
        return f && !this.options.wrap ? t : (r = "prev" == n ? -1 : 1, u = (i + r) % this.$items.length, this.$items.eq(u))
    };
    t.prototype.to = function(n) {
        var i = this,
            t = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(n > this.$items.length - 1) && !(0 > n)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            i.to(n)
        }) : t == n ? this.pause().cycle() : this.slide(n > t ? "next" : "prev", this.$items.eq(n))
    };
    t.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && n.support.transition && (this.$element.trigger(n.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    };
    t.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    };
    t.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    };
    t.prototype.slide = function(i, r) {
        var e = this.$element.find(".item.active"),
            u = r || this.getItemForDirection(i, e),
            l = this.interval,
            f = "next" == i ? "left" : "right",
            a = this,
            o, s, h, c;
        return u.hasClass("active") ? this.sliding = !1 : (o = u[0], s = n.Event("slide.bs.carousel", {
            relatedTarget: o,
            direction: f
        }), (this.$element.trigger(s), !s.isDefaultPrevented()) ? ((this.sliding = !0, l && this.pause(), this.$indicators.length) && (this.$indicators.find(".active").removeClass("active"), h = n(this.$indicators.children()[this.getItemIndex(u)]), h && h.addClass("active")), c = n.Event("slid.bs.carousel", {
            relatedTarget: o,
            direction: f
        }), n.support.transition && this.$element.hasClass("slide") ? (u.addClass(i), u[0].offsetWidth, e.addClass(f), u.addClass(f), e.one("bsTransitionEnd", function() {
            u.removeClass([i, f].join(" ")).addClass("active");
            e.removeClass(["active", f].join(" "));
            a.sliding = !1;
            setTimeout(function() {
                a.$element.trigger(c)
            }, 0)
        }).emulateTransitionEnd(t.TRANSITION_DURATION)) : (e.removeClass("active"), u.addClass("active"), this.sliding = !1, this.$element.trigger(c)), l && this.cycle(), this) : void 0)
    };
    u = n.fn.carousel;
    n.fn.carousel = i;
    n.fn.carousel.Constructor = t;
    n.fn.carousel.noConflict = function() {
        return n.fn.carousel = u, this
    };
    r = function(t) {
        var o, r = n(this),
            u = n(r.attr("data-target") || (o = r.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")),
            e, f;
        u.hasClass("carousel") && (e = n.extend({}, u.data(), r.data()), f = r.attr("data-slide-to"), f && (e.interval = !1), i.call(u, e), f && u.data("bs.carousel").to(f), t.preventDefault())
    };
    n(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r);
    n(window).on("load", function() {
        n('[data-ride="carousel"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery); + function(n) {
    "use strict";

    function r(t) {
        var i, r = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return n(r)
    }

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.collapse"),
                f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i);
            !r && f.toggle && /show|hide/.test(i) && (f.toggle = !1);
            r || u.data("bs.collapse", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }
    var t = function(i, r) {
            this.$element = n(i);
            this.options = n.extend({}, t.DEFAULTS, r);
            this.$trigger = n('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]');
            this.transitioning = null;
            this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
            this.options.toggle && this.toggle()
        },
        u;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 350;
    t.DEFAULTS = {
        toggle: !0
    };
    t.prototype.dimension = function() {
        var n = this.$element.hasClass("width");
        return n ? "width" : "height"
    };
    t.prototype.show = function() {
        var f, r, e, u, o, s;
        if (!this.transitioning && !this.$element.hasClass("in") && (r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"), !(r && r.length && (f = r.data("bs.collapse"), f && f.transitioning)) && (e = n.Event("show.bs.collapse"), this.$element.trigger(e), !e.isDefaultPrevented()))) {
            if (r && r.length && (i.call(r, "hide"), f || r.data("bs.collapse", null)), u = this.dimension(), this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1, o = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[u]("");
                    this.transitioning = 0;
                    this.$element.trigger("shown.bs.collapse")
                }, !n.support.transition) return o.call(this);
            s = n.camelCase(["scroll", u].join("-"));
            this.$element.one("bsTransitionEnd", n.proxy(o, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s])
        }
    };
    t.prototype.hide = function() {
        var r, i, u;
        if (!this.transitioning && this.$element.hasClass("in") && (r = n.Event("hide.bs.collapse"), this.$element.trigger(r), !r.isDefaultPrevented())) return i = this.dimension(), this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1, u = function() {
            this.transitioning = 0;
            this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        }, n.support.transition ? void this.$element[i](0).one("bsTransitionEnd", n.proxy(u, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : u.call(this)
    };
    t.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    t.prototype.getParent = function() {
        return n(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(n.proxy(function(t, i) {
            var u = n(i);
            this.addAriaAndCollapsedClass(r(u), u)
        }, this)).end()
    };
    t.prototype.addAriaAndCollapsedClass = function(n, t) {
        var i = n.hasClass("in");
        n.attr("aria-expanded", i);
        t.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    u = n.fn.collapse;
    n.fn.collapse = i;
    n.fn.collapse.Constructor = t;
    n.fn.collapse.noConflict = function() {
        return n.fn.collapse = u, this
    };
    n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
        var u = n(this);
        u.attr("data-target") || t.preventDefault();
        var f = r(u),
            e = f.data("bs.collapse"),
            o = e ? "toggle" : u.data();
        i.call(f, o)
    })
}(jQuery); + function(n) {
    "use strict";

    function r(t) {
        var i = t.attr("data-target"),
            r;
        return i || (i = t.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), r = i && n(i), r && r.length ? r : t.parent()
    }

    function u(t) {
        t && 3 === t.which || (n(o).remove(), n(i).each(function() {
            var u = n(this),
                i = r(u),
                f = {
                    relatedTarget: this
                };
            i.hasClass("open") && (t && "click" == t.type && /input|textarea/i.test(t.target.tagName) && n.contains(i[0], t.target) || (i.trigger(t = n.Event("hide.bs.dropdown", f)), t.isDefaultPrevented() || (u.attr("aria-expanded", "false"), i.removeClass("open").trigger(n.Event("hidden.bs.dropdown", f)))))
        }))
    }

    function e(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("bs.dropdown");
            u || r.data("bs.dropdown", u = new t(this));
            "string" == typeof i && u[i].call(r)
        })
    }
    var o = ".dropdown-backdrop",
        i = '[data-toggle="dropdown"]',
        t = function(t) {
            n(t).on("click.bs.dropdown", this.toggle)
        },
        f;
    t.VERSION = "3.3.6";
    t.prototype.toggle = function(t) {
        var f = n(this),
            i, o, e;
        if (!f.is(".disabled, :disabled")) {
            if (i = r(f), o = i.hasClass("open"), u(), !o) {
                if ("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click", u), e = {
                        relatedTarget: this
                    }, i.trigger(t = n.Event("show.bs.dropdown", e)), t.isDefaultPrevented()) return;
                f.trigger("focus").attr("aria-expanded", "true");
                i.toggleClass("open").trigger(n.Event("shown.bs.dropdown", e))
            }
            return !1
        }
    };
    t.prototype.keydown = function(t) {
        var e, o, s, h, f, u;
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (e = n(this), t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))) {
            if (o = r(e), s = o.hasClass("open"), !s && 27 != t.which || s && 27 == t.which) return 27 == t.which && o.find(i).trigger("focus"), e.trigger("click");
            h = " li:not(.disabled):visible a";
            f = o.find(".dropdown-menu" + h);
            f.length && (u = f.index(t.target), 38 == t.which && u > 0 && u--, 40 == t.which && u < f.length - 1 && u++, ~u || (u = 0), f.eq(u).trigger("focus"))
        }
    };
    f = n.fn.dropdown;
    n.fn.dropdown = e;
    n.fn.dropdown.Constructor = t;
    n.fn.dropdown.noConflict = function() {
        return n.fn.dropdown = f, this
    };
    n(document).on("click.bs.dropdown.data-api", u).on("click.bs.dropdown.data-api", ".dropdown form", function(n) {
        n.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i, t.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", t.prototype.keydown)
}(jQuery); + function(n) {
    "use strict";

    function i(i, r) {
        return this.each(function() {
            var f = n(this),
                u = f.data("bs.modal"),
                e = n.extend({}, t.DEFAULTS, f.data(), "object" == typeof i && i);
            u || f.data("bs.modal", u = new t(this, e));
            "string" == typeof i ? u[i](r) : e.show && u.show(r)
        })
    }
    var t = function(t, i) {
            this.options = i;
            this.$body = n(document.body);
            this.$element = n(t);
            this.$dialog = this.$element.find(".modal-dialog");
            this.$backdrop = null;
            this.isShown = null;
            this.originalBodyPad = null;
            this.scrollbarWidth = 0;
            this.ignoreBackdropClick = !1;
            this.options.remote && this.$element.find(".modal-content").load(this.options.remote, n.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        },
        r;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 300;
    t.BACKDROP_TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    };
    t.prototype.toggle = function(n) {
        return this.isShown ? this.hide() : this.show(n)
    };
    t.prototype.show = function(i) {
        var r = this,
            u = n.Event("show.bs.modal", {
                relatedTarget: i
            });
        this.$element.trigger(u);
        this.isShown || u.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            r.$element.one("mouseup.dismiss.bs.modal", function(t) {
                n(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var f = n.support.transition && r.$element.hasClass("fade"),
                u;
            r.$element.parent().length || r.$element.appendTo(r.$body);
            r.$element.show().scrollTop(0);
            r.adjustDialog();
            f && r.$element[0].offsetWidth;
            r.$element.addClass("in");
            r.enforceFocus();
            u = n.Event("shown.bs.modal", {
                relatedTarget: i
            });
            f ? r.$dialog.one("bsTransitionEnd", function() {
                r.$element.trigger("focus").trigger(u)
            }).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(u)
        }))
    };
    t.prototype.hide = function(i) {
        i && i.preventDefault();
        i = n.Event("hide.bs.modal");
        this.$element.trigger(i);
        this.isShown && !i.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), n(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), n.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", n.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal())
    };
    t.prototype.enforceFocus = function() {
        n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function(n) {
            this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.trigger("focus")
        }, this))
    };
    t.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", n.proxy(function(n) {
            27 == n.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    };
    t.prototype.resize = function() {
        this.isShown ? n(window).on("resize.bs.modal", n.proxy(this.handleUpdate, this)) : n(window).off("resize.bs.modal")
    };
    t.prototype.hideModal = function() {
        var n = this;
        this.$element.hide();
        this.backdrop(function() {
            n.$body.removeClass("modal-open");
            n.resetAdjustments();
            n.resetScrollbar();
            n.$element.trigger("hidden.bs.modal")
        })
    };
    t.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    };
    t.prototype.backdrop = function(i) {
        var e = this,
            f = this.$element.hasClass("fade") ? "fade" : "",
            r, u;
        if (this.isShown && this.options.backdrop) {
            if (r = n.support.transition && f, this.$backdrop = n(document.createElement("div")).addClass("modal-backdrop " + f).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", n.proxy(function(n) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(n.target === n.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i) return;
            r ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : i()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), u = function() {
            e.removeBackdrop();
            i && i()
        }, n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", u).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : u()) : i && i()
    };
    t.prototype.handleUpdate = function() {
        this.adjustDialog()
    };
    t.prototype.adjustDialog = function() {
        var n = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && n ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !n ? this.scrollbarWidth : ""
        })
    };
    t.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    };
    t.prototype.checkScrollbar = function() {
        var n = window.innerWidth,
            t;
        n || (t = document.documentElement.getBoundingClientRect(), n = t.right - Math.abs(t.left));
        this.bodyIsOverflowing = document.body.clientWidth < n;
        this.scrollbarWidth = this.measureScrollbar()
    };
    t.prototype.setScrollbar = function() {
        var n = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        this.bodyIsOverflowing && this.$body.css("padding-right", n + this.scrollbarWidth)
    };
    t.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    };
    t.prototype.measureScrollbar = function() {
        var n = document.createElement("div"),
            t;
        return n.className = "modal-scrollbar-measure", this.$body.append(n), t = n.offsetWidth - n.clientWidth, this.$body[0].removeChild(n), t
    };
    r = n.fn.modal;
    n.fn.modal = i;
    n.fn.modal.Constructor = t;
    n.fn.modal.noConflict = function() {
        return n.fn.modal = r, this
    };
    n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var r = n(this),
            f = r.attr("href"),
            u = n(r.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, "")),
            e = u.data("bs.modal") ? "toggle" : n.extend({
                remote: !/#/.test(f) && f
            }, u.data(), r.data());
        r.is("a") && t.preventDefault();
        u.one("show.bs.modal", function(n) {
            n.isDefaultPrevented() || u.one("hidden.bs.modal", function() {
                r.is(":visible") && r.trigger("focus")
            })
        });
        i.call(u, e, this)
    })
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.tooltip"),
                f = "object" == typeof i && i;
            (r || !/destroy|hide/.test(i)) && (r || u.data("bs.tooltip", r = new t(this, f)), "string" == typeof i && r[i]())
        })
    }
    var t = function(n, t) {
            this.type = null;
            this.options = null;
            this.enabled = null;
            this.timeout = null;
            this.hoverState = null;
            this.$element = null;
            this.inState = null;
            this.init("tooltip", n, t)
        },
        i;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    };
    t.prototype.init = function(t, i, r) {
        var f, e, u, o, s;
        if (this.enabled = !0, this.type = t, this.$element = n(i), this.options = this.getOptions(r), this.$viewport = this.options.viewport && n(n.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (f = this.options.trigger.split(" "), e = f.length; e--;)
            if (u = f[e], "click" == u) this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
            else "manual" != u && (o = "hover" == u ? "mouseenter" : "focusin", s = "hover" == u ? "mouseleave" : "focusout", this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this)));
        this.options.selector ? this._options = n.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    };
    t.prototype.getDefaults = function() {
        return t.DEFAULTS
    };
    t.prototype.getOptions = function(t) {
        return t = n.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    };
    t.prototype.getDelegateOptions = function() {
        var t = {},
            i = this.getDefaults();
        return this._options && n.each(this._options, function(n, r) {
            i[n] != r && (t[n] = r)
        }), t
    };
    t.prototype.enter = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState["focusin" == t.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    };
    t.prototype.isInStateTrue = function() {
        for (var n in this.inState)
            if (this.inState[n]) return !0;
        return !1
    };
    t.prototype.leave = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState["focusout" == t.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide())
    };
    t.prototype.show = function() {
        var c = n.Event("show.bs." + this.type),
            l, p, e, w, h;
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(c), l = n.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]), c.isDefaultPrevented() || !l) return;
            var u = this,
                r = this.tip(),
                a = this.getUID(this.type);
            this.setContent();
            r.attr("id", a);
            this.$element.attr("aria-describedby", a);
            this.options.animation && r.addClass("fade");
            var i = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                v = /\s?auto?\s?/i,
                y = v.test(i);
            y && (i = i.replace(v, "") || "top");
            r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(i).data("bs." + this.type, this);
            this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            this.$element.trigger("inserted.bs." + this.type);
            var f = this.getPosition(),
                o = r[0].offsetWidth,
                s = r[0].offsetHeight;
            y && (p = i, e = this.getPosition(this.$viewport), i = "bottom" == i && f.bottom + s > e.bottom ? "top" : "top" == i && f.top - s < e.top ? "bottom" : "right" == i && f.right + o > e.width ? "left" : "left" == i && f.left - o < e.left ? "right" : i, r.removeClass(p).addClass(i));
            w = this.getCalculatedOffset(i, f, o, s);
            this.applyPlacement(w, i);
            h = function() {
                var n = u.hoverState;
                u.$element.trigger("shown.bs." + u.type);
                u.hoverState = null;
                "out" == n && u.leave(u)
            };
            n.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", h).emulateTransitionEnd(t.TRANSITION_DURATION) : h()
        }
    };
    t.prototype.applyPlacement = function(t, i) {
        var r = this.tip(),
            l = r[0].offsetWidth,
            e = r[0].offsetHeight,
            o = parseInt(r.css("margin-top"), 10),
            s = parseInt(r.css("margin-left"), 10),
            h, f, u;
        isNaN(o) && (o = 0);
        isNaN(s) && (s = 0);
        t.top += o;
        t.left += s;
        n.offset.setOffset(r[0], n.extend({
            using: function(n) {
                r.css({
                    top: Math.round(n.top),
                    left: Math.round(n.left)
                })
            }
        }, t), 0);
        r.addClass("in");
        h = r[0].offsetWidth;
        f = r[0].offsetHeight;
        "top" == i && f != e && (t.top = t.top + e - f);
        u = this.getViewportAdjustedDelta(i, t, h, f);
        u.left ? t.left += u.left : t.top += u.top;
        var c = /top|bottom/.test(i),
            a = c ? 2 * u.left - l + h : 2 * u.top - e + f,
            v = c ? "offsetWidth" : "offsetHeight";
        r.offset(t);
        this.replaceArrow(a, r[0][v], c)
    };
    t.prototype.replaceArrow = function(n, t, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - n / t) + "%").css(i ? "top" : "left", "")
    };
    t.prototype.setContent = function() {
        var n = this.tip(),
            t = this.getTitle();
        n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);
        n.removeClass("fade in top bottom left right")
    };
    t.prototype.hide = function(i) {
        function f() {
            "in" != u.hoverState && r.detach();
            u.$element.removeAttr("aria-describedby").trigger("hidden.bs." + u.type);
            i && i()
        }
        var u = this,
            r = n(this.$tip),
            e = n.Event("hide.bs." + this.type);
        return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (r.removeClass("in"), n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", f).emulateTransitionEnd(t.TRANSITION_DURATION) : f(), this.hoverState = null, this)
    };
    t.prototype.fixTitle = function() {
        var n = this.$element;
        (n.attr("title") || "string" != typeof n.attr("data-original-title")) && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
    };
    t.prototype.hasContent = function() {
        return this.getTitle()
    };
    t.prototype.getPosition = function(t) {
        t = t || this.$element;
        var u = t[0],
            r = "BODY" == u.tagName,
            i = u.getBoundingClientRect();
        null == i.width && (i = n.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var f = r ? {
                top: 0,
                left: 0
            } : t.offset(),
            e = {
                scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            o = r ? {
                width: n(window).width(),
                height: n(window).height()
            } : null;
        return n.extend({}, i, e, o, f)
    };
    t.prototype.getCalculatedOffset = function(n, t, i, r) {
        return "bottom" == n ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - i / 2
        } : "top" == n ? {
            top: t.top - r,
            left: t.left + t.width / 2 - i / 2
        } : "left" == n ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - i
        } : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    };
    t.prototype.getViewportAdjustedDelta = function(n, t, i, r) {
        var f = {
                top: 0,
                left: 0
            },
            e, u, o, s, h, c;
        return this.$viewport ? (e = this.options.viewport && this.options.viewport.padding || 0, u = this.getPosition(this.$viewport), /right|left/.test(n) ? (o = t.top - e - u.scroll, s = t.top + e - u.scroll + r, o < u.top ? f.top = u.top - o : s > u.top + u.height && (f.top = u.top + u.height - s)) : (h = t.left - e, c = t.left + e + i, h < u.left ? f.left = u.left - h : c > u.right && (f.left = u.left + u.width - c)), f) : f
    };
    t.prototype.getTitle = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    };
    t.prototype.getUID = function(n) {
        do n += ~~(1e6 * Math.random()); while (document.getElementById(n));
        return n
    };
    t.prototype.tip = function() {
        if (!this.$tip && (this.$tip = n(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    };
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    };
    t.prototype.enable = function() {
        this.enabled = !0
    };
    t.prototype.disable = function() {
        this.enabled = !1
    };
    t.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    };
    t.prototype.toggle = function(t) {
        var i = this;
        t && (i = n(t.currentTarget).data("bs." + this.type), i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)));
        t ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    };
    t.prototype.destroy = function() {
        var n = this;
        clearTimeout(this.timeout);
        this.hide(function() {
            n.$element.off("." + n.type).removeData("bs." + n.type);
            n.$tip && n.$tip.detach();
            n.$tip = null;
            n.$arrow = null;
            n.$viewport = null
        })
    };
    i = n.fn.tooltip;
    n.fn.tooltip = r;
    n.fn.tooltip.Constructor = t;
    n.fn.tooltip.noConflict = function() {
        return n.fn.tooltip = i, this
    }
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.popover"),
                f = "object" == typeof i && i;
            (r || !/destroy|hide/.test(i)) && (r || u.data("bs.popover", r = new t(this, f)), "string" == typeof i && r[i]())
        })
    }
    var t = function(n, t) {
            this.init("popover", n, t)
        },
        i;
    if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
    t.VERSION = "3.3.6";
    t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'
    });
    t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype);
    t.prototype.constructor = t;
    t.prototype.getDefaults = function() {
        return t.DEFAULTS
    };
    t.prototype.setContent = function() {
        var n = this.tip(),
            i = this.getTitle(),
            t = this.getContent();
        n.find(".popover-title")[this.options.html ? "html" : "text"](i);
        n.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof t ? "html" : "append" : "text"](t);
        n.removeClass("fade top bottom left right in");
        n.find(".popover-title").html() || n.find(".popover-title").hide()
    };
    t.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    };
    t.prototype.getContent = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-content") || ("function" == typeof n.content ? n.content.call(t[0]) : n.content)
    };
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    i = n.fn.popover;
    n.fn.popover = r;
    n.fn.popover.Constructor = t;
    n.fn.popover.noConflict = function() {
        return n.fn.popover = i, this
    }
}(jQuery); + function(n) {
    "use strict";

    function t(i, r) {
        this.$body = n(document.body);
        this.$scrollElement = n(n(i).is(document.body) ? window : i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", n.proxy(this.process, this));
        this.refresh();
        this.process()
    }

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.scrollspy"),
                f = "object" == typeof i && i;
            r || u.data("bs.scrollspy", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }
    t.VERSION = "3.3.6";
    t.DEFAULTS = {
        offset: 10
    };
    t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    };
    t.prototype.refresh = function() {
        var t = this,
            i = "offset",
            r = 0;
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        n.isWindow(this.$scrollElement[0]) || (i = "position", r = this.$scrollElement.scrollTop());
        this.$body.find(this.selector).map(function() {
            var f = n(this),
                u = f.data("target") || f.attr("href"),
                t = /^#./.test(u) && n(u);
            return t && t.length && t.is(":visible") && [
                [t[i]().top + r, u]
            ] || null
        }).sort(function(n, t) {
            return n[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]);
            t.targets.push(this[1])
        })
    };
    t.prototype.process = function() {
        var n, i = this.$scrollElement.scrollTop() + this.options.offset,
            f = this.getScrollHeight(),
            e = this.options.offset + f - this.$scrollElement.height(),
            t = this.offsets,
            r = this.targets,
            u = this.activeTarget;
        if (this.scrollHeight != f && this.refresh(), i >= e) return u != (n = r[r.length - 1]) && this.activate(n);
        if (u && i < t[0]) return this.activeTarget = null, this.clear();
        for (n = t.length; n--;) u != r[n] && i >= t[n] && (void 0 === t[n + 1] || i < t[n + 1]) && this.activate(r[n])
    };
    t.prototype.activate = function(t) {
        this.activeTarget = t;
        this.clear();
        var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = n(r).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active"));
        i.trigger("activate.bs.scrollspy")
    };
    t.prototype.clear = function() {
        n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var r = n.fn.scrollspy;
    n.fn.scrollspy = i;
    n.fn.scrollspy.Constructor = t;
    n.fn.scrollspy.noConflict = function() {
        return n.fn.scrollspy = r, this
    };
    n(window).on("load.bs.scrollspy.data-api", function() {
        n('[data-spy="scroll"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.tab");
            r || u.data("bs.tab", r = new t(this));
            "string" == typeof i && r[i]()
        })
    }
    var t = function(t) {
            this.element = n(t)
        },
        u, i;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 150;
    t.prototype.show = function() {
        var t = this.element,
            f = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target"),
            u;
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var r = f.find(".active:last a"),
                e = n.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                o = n.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            (r.trigger(e), t.trigger(o), o.isDefaultPrevented() || e.isDefaultPrevented()) || (u = n(i), this.activate(t.closest("li"), f), this.activate(u, u.parent(), function() {
                r.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: t[0]
                });
                t.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: r[0]
                })
            }))
        }
    };
    t.prototype.activate = function(i, r, u) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
            i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0);
            o ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade");
            i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
            u && u()
        }
        var f = r.find("> .active"),
            o = u && n.support.transition && (f.length && f.hasClass("fade") || !!r.find("> .fade").length);
        f.length && o ? f.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e();
        f.removeClass("in")
    };
    u = n.fn.tab;
    n.fn.tab = r;
    n.fn.tab.Constructor = t;
    n.fn.tab.noConflict = function() {
        return n.fn.tab = u, this
    };
    i = function(t) {
        t.preventDefault();
        r.call(n(this), "show")
    };
    n(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.affix"),
                f = "object" == typeof i && i;
            r || u.data("bs.affix", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }
    var t = function(i, r) {
            this.options = n.extend({}, t.DEFAULTS, r);
            this.$target = n(this.options.target).on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this));
            this.$element = n(i);
            this.affixed = null;
            this.unpin = null;
            this.pinnedOffset = null;
            this.checkPosition()
        },
        r;
    t.VERSION = "3.3.6";
    t.RESET = "affix affix-top affix-bottom";
    t.DEFAULTS = {
        offset: 0,
        target: window
    };
    t.prototype.getState = function(n, t, i, r) {
        var u = this.$target.scrollTop(),
            f = this.$element.offset(),
            e = this.$target.height();
        if (null != i && "top" == this.affixed) return i > u ? "top" : !1;
        if ("bottom" == this.affixed) return null != i ? u + this.unpin <= f.top ? !1 : "bottom" : n - r >= u + e ? !1 : "bottom";
        var o = null == this.affixed,
            s = o ? u : f.top,
            h = o ? e : t;
        return null != i && i >= u ? "top" : null != r && s + h >= n - r ? "bottom" : !1
    };
    t.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var n = this.$target.scrollTop(),
            i = this.$element.offset();
        return this.pinnedOffset = i.top - n
    };
    t.prototype.checkPositionWithEventLoop = function() {
        setTimeout(n.proxy(this.checkPosition, this), 1)
    };
    t.prototype.checkPosition = function() {
        var i, e, o;
        if (this.$element.is(":visible")) {
            var s = this.$element.height(),
                r = this.options.offset,
                f = r.top,
                u = r.bottom,
                h = Math.max(n(document).height(), n(document.body).height());
            if ("object" != typeof r && (u = f = r), "function" == typeof f && (f = r.top(this.$element)), "function" == typeof u && (u = r.bottom(this.$element)), i = this.getState(h, s, f, u), this.affixed != i) {
                if (null != this.unpin && this.$element.css("top", ""), e = "affix" + (i ? "-" + i : ""), o = n.Event(e + ".bs.affix"), this.$element.trigger(o), o.isDefaultPrevented()) return;
                this.affixed = i;
                this.unpin = "bottom" == i ? this.getPinnedOffset() : null;
                this.$element.removeClass(t.RESET).addClass(e).trigger(e.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == i && this.$element.offset({
                top: h - s - u
            })
        }
    };
    r = n.fn.affix;
    n.fn.affix = i;
    n.fn.affix.Constructor = t;
    n.fn.affix.noConflict = function() {
        return n.fn.affix = r, this
    };
    n(window).on("load", function() {
        n('[data-spy="affix"]').each(function() {
            var r = n(this),
                t = r.data();
            t.offset = t.offset || {};
            null != t.offsetBottom && (t.offset.bottom = t.offsetBottom);
            null != t.offsetTop && (t.offset.top = t.offsetTop);
            i.call(r, t)
        })
    })
}(jQuery),
function(n) {
    n.fn.downCount = function(t, i) {
        function o() {
            var y = new Date(u.date),
                p = f(),
                h = y - p;
            if (h < 0) {
                clearInterval(e);
                i && typeof i == "function" && i();
                return
            }
            var a = 1e3,
                c = a * 60,
                l = c * 60,
                v = l * 24,
                n = Math.floor(h / v),
                t = Math.floor(h % v / l),
                o = Math.floor(h % l / c),
                s = Math.floor(h % c / a);
            n = String(n).length >= 2 ? n : "0" + n;
            t = String(t).length >= 2 ? t : "0" + t;
            o = String(o).length >= 2 ? o : "0" + o;
            s = String(s).length >= 2 ? s : "0" + s;
            var w = n === 1 ? "day" : "days",
                b = t === 1 ? "hour" : "hours",
                k = o === 1 ? "minute" : "minutes",
                d = s === 1 ? "second" : "seconds";
            r.find(".days").text(n);
            r.find(".hours").text(t);
            r.find(".minutes").text(o);
            r.find(".seconds").text(s);
            r.find(".days_ref").text(w);
            r.find(".hours_ref").text(b);
            r.find(".minutes_ref").text(k);
            r.find(".seconds_ref").text(d)
        }
        var u = n.extend({
                date: null,
                offset: null
            }, t),
            r, f, e;
        u.date || n.error("Date is not defined.");
        Date.parse(u.date) || n.error("Incorrect date format, it should look like this, 12/24/2012 12:00:00.");
        r = this;
        f = function() {
            var n = new Date,
                t = n.getTime() + n.getTimezoneOffset() * 6e4;
            return new Date(t + 36e5 * u.offset)
        };
        e = setInterval(o, 1e3)
    }
}(jQuery);
! function(n) {
    n.flexslider = function(t, i) {
        var r = n(t);
        r.vars = n.extend({}, n.flexslider.defaults, i);
        var f = r.vars.namespace,
            v = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            y = ("ontouchstart" in window || v || window.DocumentTouch && document instanceof DocumentTouch) && r.vars.touch,
            a = "click touchend MSPointerUp keyup",
            s = "",
            p, h = "vertical" === r.vars.direction,
            o = r.vars.reverse,
            e = r.vars.itemWidth > 0,
            c = "fade" === r.vars.animation,
            l = "" !== r.vars.asNavFor,
            u = {},
            w = !0;
        n.data(t, "flexslider", r);
        u = {
            init: function() {
                r.animating = !1;
                r.currentSlide = parseInt(r.vars.startAt ? r.vars.startAt : 0, 10);
                isNaN(r.currentSlide) && (r.currentSlide = 0);
                r.animatingTo = r.currentSlide;
                r.atEnd = 0 === r.currentSlide || r.currentSlide === r.last;
                r.containerSelector = r.vars.selector.substr(0, r.vars.selector.search(" "));
                r.slides = n(r.vars.selector, r);
                r.container = n(r.containerSelector, r);
                r.count = r.slides.length;
                r.syncExists = n(r.vars.sync).length > 0;
                "slide" === r.vars.animation && (r.vars.animation = "swing");
                r.prop = h ? "top" : "marginLeft";
                r.args = {};
                r.manualPause = !1;
                r.stopped = !1;
                r.started = !1;
                r.startTimeout = null;
                r.transitions = !r.vars.video && !c && r.vars.useCSS && function() {
                    var i = document.createElement("div"),
                        n = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var t in n)
                        if (void 0 !== i.style[n[t]]) return r.pfx = n[t].replace("Perspective", "").toLowerCase(), r.prop = "-" + r.pfx + "-transform", !0;
                    return !1
                }();
                r.ensureAnimationEnd = "";
                "" !== r.vars.controlsContainer && (r.controlsContainer = n(r.vars.controlsContainer).length > 0 && n(r.vars.controlsContainer));
                "" !== r.vars.manualControls && (r.manualControls = n(r.vars.manualControls).length > 0 && n(r.vars.manualControls));
                "" !== r.vars.customDirectionNav && (r.customDirectionNav = 2 === n(r.vars.customDirectionNav).length && n(r.vars.customDirectionNav));
                r.vars.randomize && (r.slides.sort(function() {
                    return Math.round(Math.random()) - .5
                }), r.container.empty().append(r.slides));
                r.doMath();
                r.setup("init");
                r.vars.controlNav && u.controlNav.setup();
                r.vars.directionNav && u.directionNav.setup();
                r.vars.keyboard && (1 === n(r.containerSelector).length || r.vars.multipleKeyboard) && n(document).bind("keyup", function(n) {
                    var t = n.keyCode,
                        i;
                    r.animating || 39 !== t && 37 !== t || (i = 39 === t ? r.getTarget("next") : 37 === t ? r.getTarget("prev") : !1, r.flexAnimate(i, r.vars.pauseOnAction))
                });
                r.vars.mousewheel && r.bind("mousewheel", function(n, t) {
                    n.preventDefault();
                    var i = r.getTarget(0 > t ? "next" : "prev");
                    r.flexAnimate(i, r.vars.pauseOnAction)
                });
                r.vars.pausePlay && u.pausePlay.setup();
                r.vars.slideshow && r.vars.pauseInvisible && u.pauseInvisible.init();
                r.vars.slideshow && (r.vars.pauseOnHover && r.hover(function() {
                    r.manualPlay || r.manualPause || r.pause()
                }, function() {
                    r.manualPause || r.manualPlay || r.stopped || r.play()
                }), r.vars.pauseInvisible && u.pauseInvisible.isHidden() || (r.vars.initDelay > 0 ? r.startTimeout = setTimeout(r.play, r.vars.initDelay) : r.play()));
                l && u.asNav.setup();
                y && r.vars.touch && u.touch();
                (!c || c && r.vars.smoothHeight) && n(window).bind("resize orientationchange focus", u.resize);
                r.find("img").attr("draggable", "false");
                setTimeout(function() {
                    r.vars.start(r)
                }, 200)
            },
            asNav: {
                setup: function() {
                    r.asNav = !0;
                    r.animatingTo = Math.floor(r.currentSlide / r.move);
                    r.currentItem = r.currentSlide;
                    r.slides.removeClass(f + "active-slide").eq(r.currentItem).addClass(f + "active-slide");
                    v ? (t._slider = r, r.slides.each(function() {
                        var t = this;
                        t._gesture = new MSGesture;
                        t._gesture.target = t;
                        t.addEventListener("MSPointerDown", function(n) {
                            n.preventDefault();
                            n.currentTarget._gesture && n.currentTarget._gesture.addPointer(n.pointerId)
                        }, !1);
                        t.addEventListener("MSGestureTap", function(t) {
                            t.preventDefault();
                            var i = n(this),
                                u = i.index();
                            n(r.vars.asNavFor).data("flexslider").animating || i.hasClass("active") || (r.direction = r.currentItem < u ? "next" : "prev", r.flexAnimate(u, r.vars.pauseOnAction, !1, !0, !0))
                        })
                    })) : r.slides.on(a, function(t) {
                        t.preventDefault();
                        var i = n(this),
                            u = i.index(),
                            e = i.offset().left - n(r).scrollLeft();
                        0 >= e && i.hasClass(f + "active-slide") ? r.flexAnimate(r.getTarget("prev"), !0) : n(r.vars.asNavFor).data("flexslider").animating || i.hasClass(f + "active-slide") || (r.direction = r.currentItem < u ? "next" : "prev", r.flexAnimate(u, r.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function() {
                    r.manualControls ? u.controlNav.setupManual() : u.controlNav.setupPaging()
                },
                setupPaging: function() {
                    var c = "thumbnails" === r.vars.controlNav ? "control-thumbs" : "control-paging",
                        h = 1,
                        e, o, t, i;
                    if (r.controlNavScaffold = n('<ol class="' + f + "control-nav " + f + c + '"><\/ol>'), r.pagingCount > 1)
                        for (t = 0; t < r.pagingCount; t++)(o = r.slides.eq(t), e = "thumbnails" === r.vars.controlNav ? '<img src="' + o.attr("data-thumb") + '"/>' : "<a>" + h + "<\/a>", "thumbnails" === r.vars.controlNav && !0 === r.vars.thumbCaptions) && (i = o.attr("data-thumbcaption"), "" !== i && void 0 !== i && (e += '<span class="' + f + 'caption">' + i + "<\/span>")), r.controlNavScaffold.append("<li>" + e + "<\/li>"), h++;
                    r.controlsContainer ? n(r.controlsContainer).append(r.controlNavScaffold) : r.append(r.controlNavScaffold);
                    u.controlNav.set();
                    u.controlNav.active();
                    r.controlNavScaffold.delegate("a, img", a, function(t) {
                        if (t.preventDefault(), "" === s || s === t.type) {
                            var i = n(this),
                                e = r.controlNav.index(i);
                            i.hasClass(f + "active") || (r.direction = e > r.currentSlide ? "next" : "prev", r.flexAnimate(e, r.vars.pauseOnAction))
                        }
                        "" === s && (s = t.type);
                        u.setToClearWatchedEvent()
                    })
                },
                setupManual: function() {
                    r.controlNav = r.manualControls;
                    u.controlNav.active();
                    r.controlNav.bind(a, function(t) {
                        if (t.preventDefault(), "" === s || s === t.type) {
                            var i = n(this),
                                e = r.controlNav.index(i);
                            i.hasClass(f + "active") || (r.direction = e > r.currentSlide ? "next" : "prev", r.flexAnimate(e, r.vars.pauseOnAction))
                        }
                        "" === s && (s = t.type);
                        u.setToClearWatchedEvent()
                    })
                },
                set: function() {
                    var t = "thumbnails" === r.vars.controlNav ? "img" : "a";
                    r.controlNav = n("." + f + "control-nav li " + t, r.controlsContainer ? r.controlsContainer : r)
                },
                active: function() {
                    r.controlNav.removeClass(f + "active").eq(r.animatingTo).addClass(f + "active")
                },
                update: function(t, i) {
                    r.pagingCount > 1 && "add" === t ? r.controlNavScaffold.append(n("<li><a>" + r.count + "<\/a><\/li>")) : 1 === r.pagingCount ? r.controlNavScaffold.find("li").remove() : r.controlNav.eq(i).closest("li").remove();
                    u.controlNav.set();
                    r.pagingCount > 1 && r.pagingCount !== r.controlNav.length ? r.update(i, t) : u.controlNav.active()
                }
            },
            directionNav: {
                setup: function() {
                    var t = n('<ul class="' + f + 'direction-nav"><li class="' + f + 'nav-prev"><a class="' + f + 'prev" href="#">' + r.vars.prevText + '<\/a><\/li><li class="' + f + 'nav-next"><a class="' + f + 'next" href="#">' + r.vars.nextText + "<\/a><\/li><\/ul>");
                    r.customDirectionNav ? r.directionNav = r.customDirectionNav : r.controlsContainer ? (n(r.controlsContainer).append(t), r.directionNav = n("." + f + "direction-nav li a", r.controlsContainer)) : (r.append(t), r.directionNav = n("." + f + "direction-nav li a", r));
                    u.directionNav.update();
                    r.directionNav.bind(a, function(t) {
                        t.preventDefault();
                        var i;
                        ("" === s || s === t.type) && (i = r.getTarget(n(this).hasClass(f + "next") ? "next" : "prev"), r.flexAnimate(i, r.vars.pauseOnAction));
                        "" === s && (s = t.type);
                        u.setToClearWatchedEvent()
                    })
                },
                update: function() {
                    var n = f + "disabled";
                    1 === r.pagingCount ? r.directionNav.addClass(n).attr("tabindex", "-1") : r.vars.animationLoop ? r.directionNav.removeClass(n).removeAttr("tabindex") : 0 === r.animatingTo ? r.directionNav.removeClass(n).filter("." + f + "prev").addClass(n).attr("tabindex", "-1") : r.animatingTo === r.last ? r.directionNav.removeClass(n).filter("." + f + "next").addClass(n).attr("tabindex", "-1") : r.directionNav.removeClass(n).removeAttr("tabindex")
                }
            },
            pausePlay: {
                setup: function() {
                    var t = n('<div class="' + f + 'pauseplay"><a><\/a><\/div>');
                    r.controlsContainer ? (r.controlsContainer.append(t), r.pausePlay = n("." + f + "pauseplay a", r.controlsContainer)) : (r.append(t), r.pausePlay = n("." + f + "pauseplay a", r));
                    u.pausePlay.update(r.vars.slideshow ? f + "pause" : f + "play");
                    r.pausePlay.bind(a, function(t) {
                        t.preventDefault();
                        ("" === s || s === t.type) && (n(this).hasClass(f + "pause") ? (r.manualPause = !0, r.manualPlay = !1, r.pause()) : (r.manualPause = !1, r.manualPlay = !0, r.play()));
                        "" === s && (s = t.type);
                        u.setToClearWatchedEvent()
                    })
                },
                update: function(n) {
                    "play" === n ? r.pausePlay.removeClass(f + "pause").addClass(f + "play").html(r.vars.playText) : r.pausePlay.removeClass(f + "play").addClass(f + "pause").html(r.vars.pauseText)
                }
            },
            touch: function() {
                function g(n) {
                    n.stopPropagation();
                    r.animating ? n.preventDefault() : (r.pause(), t._gesture.addPointer(n.pointerId), u = 0, i = h ? r.h : r.w, s = Number(new Date), f = e && o && r.animatingTo === r.last ? 0 : e && o ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : e && r.currentSlide === r.last ? r.limit : e ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : o ? (r.last - r.currentSlide + r.cloneOffset) * i : (r.currentSlide + r.cloneOffset) * i)
                }

                function nt(r) {
                    var e, o, a;
                    return r.stopPropagation(), e = r.target._slider, e ? (o = -r.translationX, a = -r.translationY, u += h ? a : o, n = u, l = h ? Math.abs(u) < Math.abs(-o) : Math.abs(u) < Math.abs(-a), r.detail === r.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                        t._gesture.stop()
                    }) : void((!l || Number(new Date) - s > 500) && (r.preventDefault(), !c && e.transitions && (e.vars.animationLoop || (n = u / (0 === e.currentSlide && 0 > u || e.currentSlide === e.last && u > 0 ? Math.abs(u) / i + 2 : 1)), e.setProps(f + n, "setTouch"))))) : void 0
                }

                function tt(t) {
                    var r, e, h;
                    t.stopPropagation();
                    r = t.target._slider;
                    r && (r.animatingTo !== r.currentSlide || l || null === n || (e = o ? -n : n, h = r.getTarget(e > 0 ? "next" : "prev"), r.canAdvance(h) && (Number(new Date) - s < 550 && Math.abs(e) > 50 || Math.abs(e) > i / 2) ? r.flexAnimate(h, r.vars.pauseOnAction) : c || r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, !0)), p = null, w = null, n = null, f = null, u = 0)
                }
                var p, w, f, i, n, s, d, b, k, l = !1,
                    a = 0,
                    y = 0,
                    u = 0;
                v ? (t.style.msTouchAction = "none", t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", g, !1), t._slider = r, t.addEventListener("MSGestureChange", nt, !1), t.addEventListener("MSGestureEnd", tt, !1)) : (d = function(n) {
                    r.animating ? n.preventDefault() : (window.navigator.msPointerEnabled || 1 === n.touches.length) && (r.pause(), i = h ? r.h : r.w, s = Number(new Date), a = n.touches[0].pageX, y = n.touches[0].pageY, f = e && o && r.animatingTo === r.last ? 0 : e && o ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : e && r.currentSlide === r.last ? r.limit : e ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : o ? (r.last - r.currentSlide + r.cloneOffset) * i : (r.currentSlide + r.cloneOffset) * i, p = h ? y : a, w = h ? a : y, t.addEventListener("touchmove", b, !1), t.addEventListener("touchend", k, !1))
                }, b = function(t) {
                    a = t.touches[0].pageX;
                    y = t.touches[0].pageY;
                    n = h ? p - y : p - a;
                    l = h ? Math.abs(n) < Math.abs(a - w) : Math.abs(n) < Math.abs(y - w);
                    (!l || Number(new Date) - s > 500) && (t.preventDefault(), !c && r.transitions && (r.vars.animationLoop || (n /= 0 === r.currentSlide && 0 > n || r.currentSlide === r.last && n > 0 ? Math.abs(n) / i + 2 : 1), r.setProps(f + n, "setTouch")))
                }, k = function() {
                    if (t.removeEventListener("touchmove", b, !1), r.animatingTo === r.currentSlide && !l && null !== n) {
                        var u = o ? -n : n,
                            e = r.getTarget(u > 0 ? "next" : "prev");
                        r.canAdvance(e) && (Number(new Date) - s < 550 && Math.abs(u) > 50 || Math.abs(u) > i / 2) ? r.flexAnimate(e, r.vars.pauseOnAction) : c || r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, !0)
                    }
                    t.removeEventListener("touchend", k, !1);
                    p = null;
                    w = null;
                    n = null;
                    f = null
                }, t.addEventListener("touchstart", d, !1))
            },
            resize: function() {
                !r.animating && r.is(":visible") && (e || r.doMath(), c ? u.smoothHeight() : e ? (r.slides.width(r.computedW), r.update(r.pagingCount), r.setProps()) : h ? (r.viewport.height(r.h), r.setProps(r.h, "setTotal")) : (r.vars.smoothHeight && u.smoothHeight(), r.newSlides.width(r.computedW), r.setProps(r.computedW, "setTotal")))
            },
            smoothHeight: function(n) {
                if (!h || c) {
                    var t = c ? r : r.viewport;
                    n ? t.animate({
                        height: r.slides.eq(r.animatingTo).height()
                    }, n) : t.height(r.slides.eq(r.animatingTo).height())
                }
            },
            sync: function(t) {
                var i = n(r.vars.sync).data("flexslider"),
                    u = r.animatingTo;
                switch (t) {
                    case "animate":
                        i.flexAnimate(u, r.vars.pauseOnAction, !1, !0);
                        break;
                    case "play":
                        i.playing || i.asNav || i.play();
                        break;
                    case "pause":
                        i.pause()
                }
            },
            uniqueID: function(t) {
                return t.filter("[id]").add(t.find("[id]")).each(function() {
                    var t = n(this);
                    t.attr("id", t.attr("id") + "_clone")
                }), t
            },
            pauseInvisible: {
                visProp: null,
                init: function() {
                    var n = u.pauseInvisible.getHiddenProp(),
                        t;
                    n && (t = n.replace(/[H|h]idden/, "") + "visibilitychange", document.addEventListener(t, function() {
                        u.pauseInvisible.isHidden() ? r.startTimeout ? clearTimeout(r.startTimeout) : r.pause() : r.started ? r.play() : r.vars.initDelay > 0 ? setTimeout(r.play, r.vars.initDelay) : r.play()
                    }))
                },
                isHidden: function() {
                    var n = u.pauseInvisible.getHiddenProp();
                    return n ? document[n] : !1
                },
                getHiddenProp: function() {
                    var t = ["webkit", "moz", "ms", "o"],
                        n;
                    if ("hidden" in document) return "hidden";
                    for (n = 0; n < t.length; n++)
                        if (t[n] + "Hidden" in document) return t[n] + "Hidden";
                    return null
                }
            },
            setToClearWatchedEvent: function() {
                clearTimeout(p);
                p = setTimeout(function() {
                    s = ""
                }, 3e3)
            }
        };
        r.flexAnimate = function(t, i, s, a, v) {
            var w, p, d, b, k;
            if (r.vars.animationLoop || t === r.currentSlide || (r.direction = t > r.currentSlide ? "next" : "prev"), l && 1 === r.pagingCount && (r.direction = r.currentItem < t ? "next" : "prev"), !r.animating && (r.canAdvance(t, v) || s) && r.is(":visible")) {
                if (l && a) {
                    if (w = n(r.vars.asNavFor).data("flexslider"), r.atEnd = 0 === t || t === r.count - 1, w.flexAnimate(t, !0, !1, !0, v), r.direction = r.currentItem < t ? "next" : "prev", w.direction = r.direction, Math.ceil((t + 1) / r.visible) - 1 === r.currentSlide || 0 === t) return r.currentItem = t, r.slides.removeClass(f + "active-slide").eq(t).addClass(f + "active-slide"), !1;
                    r.currentItem = t;
                    r.slides.removeClass(f + "active-slide").eq(t).addClass(f + "active-slide");
                    t = Math.floor(t / r.visible)
                }(r.animating = !0, r.animatingTo = t, i && r.pause(), r.vars.before(r), r.syncExists && !v && u.sync("animate"), r.vars.controlNav && u.controlNav.active(), e || r.slides.removeClass(f + "active-slide").eq(t).addClass(f + "active-slide"), r.atEnd = 0 === t || t === r.last, r.vars.directionNav && u.directionNav.update(), t === r.last && (r.vars.end(r), r.vars.animationLoop || r.pause()), c) ? y ? (r.slides.eq(r.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), r.slides.eq(t).css({
                    opacity: 1,
                    zIndex: 2
                }), r.wrapup(p)) : (r.slides.eq(r.currentSlide).css({
                    zIndex: 1
                }).animate({
                    opacity: 0
                }, r.vars.animationSpeed, r.vars.easing), r.slides.eq(t).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, r.vars.animationSpeed, r.vars.easing, r.wrapup)): (p = h ? r.slides.filter(":first").height() : r.computedW, e ? (d = r.vars.itemMargin, k = (r.itemW + d) * r.move * r.animatingTo, b = k > r.limit && 1 !== r.visible ? r.limit : k) : b = 0 === r.currentSlide && t === r.count - 1 && r.vars.animationLoop && "next" !== r.direction ? o ? (r.count + r.cloneOffset) * p : 0 : r.currentSlide === r.last && 0 === t && r.vars.animationLoop && "prev" !== r.direction ? o ? 0 : (r.count + 1) * p : o ? (r.count - 1 - t + r.cloneOffset) * p : (t + r.cloneOffset) * p, r.setProps(b, "", r.vars.animationSpeed), r.transitions ? (r.vars.animationLoop && r.atEnd || (r.animating = !1, r.currentSlide = r.animatingTo), r.container.unbind("webkitTransitionEnd transitionend"), r.container.bind("webkitTransitionEnd transitionend", function() {
                    clearTimeout(r.ensureAnimationEnd);
                    r.wrapup(p)
                }), clearTimeout(r.ensureAnimationEnd), r.ensureAnimationEnd = setTimeout(function() {
                    r.wrapup(p)
                }, r.vars.animationSpeed + 100)) : r.container.animate(r.args, r.vars.animationSpeed, r.vars.easing, function() {
                    r.wrapup(p)
                }));
                r.vars.smoothHeight && u.smoothHeight(r.vars.animationSpeed)
            }
        };
        r.wrapup = function(n) {
            c || e || (0 === r.currentSlide && r.animatingTo === r.last && r.vars.animationLoop ? r.setProps(n, "jumpEnd") : r.currentSlide === r.last && 0 === r.animatingTo && r.vars.animationLoop && r.setProps(n, "jumpStart"));
            r.animating = !1;
            r.currentSlide = r.animatingTo;
            r.vars.after(r)
        };
        r.animateSlides = function() {
            !r.animating && w && r.flexAnimate(r.getTarget("next"))
        };
        r.pause = function() {
            clearInterval(r.animatedSlides);
            r.animatedSlides = null;
            r.playing = !1;
            r.vars.pausePlay && u.pausePlay.update("play");
            r.syncExists && u.sync("pause")
        };
        r.play = function() {
            r.playing && clearInterval(r.animatedSlides);
            r.animatedSlides = r.animatedSlides || setInterval(r.animateSlides, r.vars.slideshowSpeed);
            r.started = r.playing = !0;
            r.vars.pausePlay && u.pausePlay.update("pause");
            r.syncExists && u.sync("play")
        };
        r.stop = function() {
            r.pause();
            r.stopped = !0
        };
        r.canAdvance = function(n, t) {
            var i = l ? r.pagingCount - 1 : r.last;
            return t ? !0 : l && r.currentItem === r.count - 1 && 0 === n && "prev" === r.direction ? !0 : l && 0 === r.currentItem && n === r.pagingCount - 1 && "next" !== r.direction ? !1 : n !== r.currentSlide || l ? r.vars.animationLoop ? !0 : r.atEnd && 0 === r.currentSlide && n === i && "next" !== r.direction ? !1 : r.atEnd && r.currentSlide === i && 0 === n && "next" === r.direction ? !1 : !0 : !1
        };
        r.getTarget = function(n) {
            return r.direction = n, "next" === n ? r.currentSlide === r.last ? 0 : r.currentSlide + 1 : 0 === r.currentSlide ? r.last : r.currentSlide - 1
        };
        r.setProps = function(n, t, i) {
            var u = function() {
                var i = n ? n : (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo,
                    u = function() {
                        if (e) return "setTouch" === t ? n : o && r.animatingTo === r.last ? 0 : o ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : r.animatingTo === r.last ? r.limit : i;
                        switch (t) {
                            case "setTotal":
                                return o ? (r.count - 1 - r.currentSlide + r.cloneOffset) * n : (r.currentSlide + r.cloneOffset) * n;
                            case "setTouch":
                                return o ? n : n;
                            case "jumpEnd":
                                return o ? n : r.count * n;
                            case "jumpStart":
                                return o ? r.count * n : n;
                            default:
                                return n
                        }
                    }();
                return -1 * u + "px"
            }();
            r.transitions && (u = h ? "translate3d(0," + u + ",0)" : "translate3d(" + u + ",0,0)", i = void 0 !== i ? i / 1e3 + "s" : "0s", r.container.css("-" + r.pfx + "-transition-duration", i), r.container.css("transition-duration", i));
            r.args[r.prop] = u;
            (r.transitions || void 0 === i) && r.container.css(r.args);
            r.container.css("transform", u)
        };
        r.setup = function(t) {
            if (c) r.slides.css({
                width: "100%",
                float: "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === t && (y ? r.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + r.vars.animationSpeed / 1e3 + "s ease",
                zIndex: 1
            }).eq(r.currentSlide).css({
                opacity: 1,
                zIndex: 2
            }) : 0 == r.vars.fadeFirstSlide ? r.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(r.currentSlide).css({
                zIndex: 2
            }).css({
                opacity: 1
            }) : r.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(r.currentSlide).css({
                zIndex: 2
            }).animate({
                opacity: 1
            }, r.vars.animationSpeed, r.vars.easing)), r.vars.smoothHeight && u.smoothHeight();
            else {
                var i, s;
                "init" === t && (r.viewport = n('<div class="' + f + 'viewport"><\/div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(r).append(r.container), r.cloneCount = 0, r.cloneOffset = 0, o && (s = n.makeArray(r.slides).reverse(), r.slides = n(s), r.container.empty().append(r.slides)));
                r.vars.animationLoop && !e && (r.cloneCount = 2, r.cloneOffset = 1, "init" !== t && r.container.find(".clone").remove(), r.container.append(u.uniqueID(r.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(u.uniqueID(r.slides.last().clone().addClass("clone")).attr("aria-hidden", "true")));
                r.newSlides = n(r.vars.selector, r);
                i = o ? r.count - 1 - r.currentSlide + r.cloneOffset : r.currentSlide + r.cloneOffset;
                h && !e ? (r.container.height(200 * (r.count + r.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                    r.newSlides.css({
                        display: "block"
                    });
                    r.doMath();
                    r.viewport.height(r.h);
                    r.setProps(i * r.h, "init")
                }, "init" === t ? 100 : 0)) : (r.container.width(200 * (r.count + r.cloneCount) + "%"), r.setProps(i * r.computedW, "init"), setTimeout(function() {
                    r.doMath();
                    r.newSlides.css({
                        width: r.computedW,
                        float: "left",
                        display: "block"
                    });
                    r.vars.smoothHeight && u.smoothHeight()
                }, "init" === t ? 100 : 0))
            }
            e || r.slides.removeClass(f + "active-slide").eq(r.currentSlide).addClass(f + "active-slide");
            r.vars.init(r)
        };
        r.doMath = function() {
            var u = r.slides.first(),
                n = r.vars.itemMargin,
                t = r.vars.minItems,
                i = r.vars.maxItems;
            r.w = void 0 === r.viewport ? r.width() : r.viewport.width();
            r.h = u.height();
            r.boxPadding = u.outerWidth() - u.width();
            e ? (r.itemT = r.vars.itemWidth + n, r.minW = t ? t * r.itemT : r.w, r.maxW = i ? i * r.itemT - n : r.w, r.itemW = r.minW > r.w ? (r.w - n * (t - 1)) / t : r.maxW < r.w ? (r.w - n * (i - 1)) / i : r.vars.itemWidth > r.w ? r.w : r.vars.itemWidth, r.visible = Math.floor(r.w / r.itemW), r.move = r.vars.move > 0 && r.vars.move < r.visible ? r.vars.move : r.visible, r.pagingCount = Math.ceil((r.count - r.visible) / r.move + 1), r.last = r.pagingCount - 1, r.limit = 1 === r.pagingCount ? 0 : r.vars.itemWidth > r.w ? r.itemW * (r.count - 1) + n * (r.count - 1) : (r.itemW + n) * r.count - r.w - n) : (r.itemW = r.w, r.pagingCount = r.count, r.last = r.count - 1);
            r.computedW = r.itemW - r.boxPadding
        };
        r.update = function(n, t) {
            r.doMath();
            e || (n < r.currentSlide ? r.currentSlide += 1 : n <= r.currentSlide && 0 !== n && (r.currentSlide -= 1), r.animatingTo = r.currentSlide);
            r.vars.controlNav && !r.manualControls && ("add" === t && !e || r.pagingCount > r.controlNav.length ? u.controlNav.update("add") : ("remove" === t && !e || r.pagingCount < r.controlNav.length) && (e && r.currentSlide > r.last && (r.currentSlide -= 1, r.animatingTo -= 1), u.controlNav.update("remove", r.last)));
            r.vars.directionNav && u.directionNav.update()
        };
        r.addSlide = function(t, i) {
            var u = n(t);
            r.count += 1;
            r.last = r.count - 1;
            h && o ? void 0 !== i ? r.slides.eq(r.count - i).after(u) : r.container.prepend(u) : void 0 !== i ? r.slides.eq(i).before(u) : r.container.append(u);
            r.update(i, "add");
            r.slides = n(r.vars.selector + ":not(.clone)", r);
            r.setup();
            r.vars.added(r)
        };
        r.removeSlide = function(t) {
            var i = isNaN(t) ? r.slides.index(n(t)) : t;
            r.count -= 1;
            r.last = r.count - 1;
            isNaN(t) ? n(t, r.slides).remove() : h && o ? r.slides.eq(r.last).remove() : r.slides.eq(t).remove();
            r.doMath();
            r.update(i, "remove");
            r.slides = n(r.vars.selector + ":not(.clone)", r);
            r.setup();
            r.vars.removed(r)
        };
        u.init()
    };
    n(window).blur(function() {
        focused = !1
    }).focus(function() {
        focused = !0
    });
    n.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        customDirectionNav: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {},
        init: function() {}
    };
    n.fn.flexslider = function(t) {
        if (void 0 === t && (t = {}), "object" == typeof t) return this.each(function() {
            var i = n(this),
                u = t.selector ? t.selector : ".slides > li",
                r = i.find(u);
            1 === r.length && t.allowOneSlide === !0 || 0 === r.length ? (r.fadeIn(400), t.start && t.start(i)) : void 0 === i.data("flexslider") && new n.flexslider(this, t)
        });
        var i = n(this).data("flexslider");
        switch (t) {
            case "play":
                i.play();
                break;
            case "pause":
                i.pause();
                break;
            case "stop":
                i.stop();
                break;
            case "next":
                i.flexAnimate(i.getTarget("next"), !0);
                break;
            case "prev":
            case "previous":
                i.flexAnimate(i.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof t && i.flexAnimate(t, !0)
        }
    }
}(jQuery);
! function(n) {
    function i() {}

    function t(n) {
        function u(t) {
            t.prototype.option || (t.prototype.option = function(t) {
                n.isPlainObject(t) && (this.options = n.extend(!0, this.options, t))
            })
        }

        function f(i, u) {
            n.fn[i] = function(f) {
                var h, e, s;
                if ("string" == typeof f) {
                    for (var c = r.call(arguments, 1), o = 0, l = this.length; l > o; o++)
                        if (h = this[o], e = n.data(h, i), e)
                            if (n.isFunction(e[f]) && "_" !== f.charAt(0)) {
                                if (s = e[f].apply(e, c), void 0 !== s) return s
                            } else t("no such method '" + f + "' for " + i + " instance");
                    else t("cannot call methods on " + i + " prior to initialization; attempted to call '" + f + "'");
                    return this
                }
                return this.each(function() {
                    var t = n.data(this, i);
                    t ? (t.option(f), t._init()) : (t = new u(this, f), n.data(this, i, t))
                })
            }
        }
        if (n) {
            var t = "undefined" == typeof console ? i : function(n) {
                console.error(n)
            };
            return n.bridget = function(n, t) {
                u(t);
                f(n, t)
            }, n.bridget
        }
    }
    var r = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], t) : t("object" == typeof exports ? require("jquery") : n.jQuery)
}(window),
function(n) {
    function f(t) {
        var i = n.event;
        return i.target = i.target || i.srcElement || t, i
    }
    var t = document.documentElement,
        u = function() {},
        i, r;
    t.addEventListener ? u = function(n, t, i) {
        n.addEventListener(t, i, !1)
    } : t.attachEvent && (u = function(n, t, i) {
        n[t + i] = i.handleEvent ? function() {
            var t = f(n);
            i.handleEvent.call(i, t)
        } : function() {
            var t = f(n);
            i.call(n, t)
        };
        n.attachEvent("on" + t, n[t + i])
    });
    i = function() {};
    t.removeEventListener ? i = function(n, t, i) {
        n.removeEventListener(t, i, !1)
    } : t.detachEvent && (i = function(n, t, i) {
        n.detachEvent("on" + t, n[t + i]);
        try {
            delete n[t + i]
        } catch (r) {
            n[t + i] = void 0
        }
    });
    r = {
        bind: u,
        unbind: i
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : n.eventie = r
}(window),
function() {
    "use strict";

    function t() {}

    function u(n, t) {
        for (var i = n.length; i--;)
            if (n[i].listener === t) return i;
        return -1
    }

    function i(n) {
        return function() {
            return this[n].apply(this, arguments)
        }
    }
    var n = t.prototype,
        r = this,
        f = r.EventEmitter;
    n.getListeners = function(n) {
        var r, t, i = this._getEvents();
        if (n instanceof RegExp) {
            r = {};
            for (t in i) i.hasOwnProperty(t) && n.test(t) && (r[t] = i[t])
        } else r = i[n] || (i[n] = []);
        return r
    };
    n.flattenListeners = function(n) {
        for (var i = [], t = 0; t < n.length; t += 1) i.push(n[t].listener);
        return i
    };
    n.getListenersAsObject = function(n) {
        var t, i = this.getListeners(n);
        return i instanceof Array && (t = {}, t[n] = i), t || i
    };
    n.addListener = function(n, t) {
        var i, r = this.getListenersAsObject(n),
            f = "object" == typeof t;
        for (i in r) r.hasOwnProperty(i) && -1 === u(r[i], t) && r[i].push(f ? t : {
            listener: t,
            once: !1
        });
        return this
    };
    n.on = i("addListener");
    n.addOnceListener = function(n, t) {
        return this.addListener(n, {
            listener: t,
            once: !0
        })
    };
    n.once = i("addOnceListener");
    n.defineEvent = function(n) {
        return this.getListeners(n), this
    };
    n.defineEvents = function(n) {
        for (var t = 0; t < n.length; t += 1) this.defineEvent(n[t]);
        return this
    };
    n.removeListener = function(n, t) {
        var f, i, r = this.getListenersAsObject(n);
        for (i in r) r.hasOwnProperty(i) && (f = u(r[i], t), -1 !== f && r[i].splice(f, 1));
        return this
    };
    n.off = i("removeListener");
    n.addListeners = function(n, t) {
        return this.manipulateListeners(!1, n, t)
    };
    n.removeListeners = function(n, t) {
        return this.manipulateListeners(!0, n, t)
    };
    n.manipulateListeners = function(n, t, i) {
        var r, u, f = n ? this.removeListener : this.addListener,
            e = n ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (r = i.length; r--;) f.call(this, t, i[r]);
        else
            for (r in t) t.hasOwnProperty(r) && (u = t[r]) && ("function" == typeof u ? f.call(this, r, u) : e.call(this, r, u));
        return this
    };
    n.removeEvent = function(n) {
        var t, r = typeof n,
            i = this._getEvents();
        if ("string" === r) delete i[n];
        else if (n instanceof RegExp)
            for (t in i) i.hasOwnProperty(t) && n.test(t) && delete i[t];
        else delete this._events;
        return this
    };
    n.removeAllListeners = i("removeEvent");
    n.emitEvent = function(n, t) {
        var i, f, r, e, u = this.getListenersAsObject(n);
        for (r in u)
            if (u.hasOwnProperty(r))
                for (f = u[r].length; f--;) i = u[r][f], i.once === !0 && this.removeListener(n, i.listener), e = i.listener.apply(this, t || []), e === this._getOnceReturnValue() && this.removeListener(n, i.listener);
        return this
    };
    n.trigger = i("emitEvent");
    n.emit = function(n) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(n, t)
    };
    n.setOnceReturnValue = function(n) {
        return this._onceReturnValue = n, this
    };
    n._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    };
    n._getEvents = function() {
        return this._events || (this._events = {})
    };
    t.noConflict = function() {
        return r.EventEmitter = f, t
    };
    "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : r.EventEmitter = t
}.call(this),
    function(n) {
        function t(n) {
            if (n) {
                if ("string" == typeof r[n]) return n;
                n = n.charAt(0).toUpperCase() + n.slice(1);
                for (var t, u = 0, f = i.length; f > u; u++)
                    if (t = i[u] + n, "string" == typeof r[t]) return t
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            r = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return t
        }) : "object" == typeof exports ? module.exports = t : n.getStyleProperty = t
    }(window),
    function(n) {
        function i(n) {
            var t = parseFloat(n),
                i = -1 === n.indexOf("%") && !isNaN(t);
            return i && t
        }

        function u() {}

        function f() {
            for (var r, i = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, n = 0, u = t.length; u > n; n++) r = t[n], i[r] = 0;
            return i
        }

        function r(r) {
            function c() {
                var f, t, c, l;
                h || (h = !0, f = n.getComputedStyle, (o = function() {
                    var n = f ? function(n) {
                        return f(n, null)
                    } : function(n) {
                        return n.currentStyle
                    };
                    return function(t) {
                        var i = n(t);
                        return i || e("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
                    }
                }(), u = r("boxSizing")) && (t = document.createElement("div"), t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style[u] = "border-box", c = document.body || document.documentElement, c.appendChild(t), l = o(t), s = 200 === i(l.width), c.removeChild(t)))
            }

            function l(n) {
                var e, r, v, h, y, p;
                if (c(), "string" == typeof n && (n = document.querySelector(n)), n && "object" == typeof n && n.nodeType) {
                    if (e = o(n), "none" === e.display) return f();
                    r = {};
                    r.width = n.offsetWidth;
                    r.height = n.offsetHeight;
                    for (var tt = r.isBorderBox = !(!u || !e[u] || "border-box" !== e[u]), l = 0, it = t.length; it > l; l++) v = t[l], h = e[v], h = a(n, h), y = parseFloat(h), r[v] = isNaN(y) ? 0 : y;
                    var w = r.paddingLeft + r.paddingRight,
                        b = r.paddingTop + r.paddingBottom,
                        rt = r.marginLeft + r.marginRight,
                        ut = r.marginTop + r.marginBottom,
                        k = r.borderLeftWidth + r.borderRightWidth,
                        d = r.borderTopWidth + r.borderBottomWidth,
                        g = tt && s,
                        nt = i(e.width);
                    return nt !== !1 && (r.width = nt + (g ? 0 : w + k)), p = i(e.height), p !== !1 && (r.height = p + (g ? 0 : b + d)), r.innerWidth = r.width - (w + k), r.innerHeight = r.height - (b + d), r.outerWidth = r.width + rt, r.outerHeight = r.height + ut, r
                }
            }

            function a(t, i) {
                if (n.getComputedStyle || -1 === i.indexOf("%")) return i;
                var r = t.style,
                    e = r.left,
                    u = t.runtimeStyle,
                    f = u && u.left;
                return f && (u.left = t.currentStyle.left), r.left = i, i = r.pixelLeft, r.left = e, f && (u.left = f), i
            }
            var o, u, s, h = !1;
            return l
        }
        var e = "undefined" == typeof console ? u : function(n) {
                console.error(n)
            },
            t = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], r) : "object" == typeof exports ? module.exports = r(require("desandro-get-style-property")) : n.getSize = r(n.getStyleProperty)
    }(window),
    function(n) {
        function t(n) {
            "function" == typeof n && (t.isReady ? n() : f.push(n))
        }

        function r(n) {
            var r = "readystatechange" === n.type && "complete" !== i.readyState;
            t.isReady || r || e()
        }

        function e() {
            var n, i, r;
            for (t.isReady = !0, n = 0, i = f.length; i > n; n++) r = f[n], r()
        }

        function u(u) {
            return "complete" === i.readyState ? e() : (u.bind(i, "DOMContentLoaded", r), u.bind(i, "readystatechange", r), u.bind(n, "load", r)), t
        }
        var i = n.document,
            f = [];
        t.isReady = !1;
        "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], u) : "object" == typeof exports ? module.exports = u(require("eventie")) : n.docReady = u(n.eventie)
    }(window),
    function(n) {
        "use strict";

        function i(n, t) {
            return n[u](t)
        }

        function r(n) {
            if (!n.parentNode) {
                var t = document.createDocumentFragment();
                t.appendChild(n)
            }
        }

        function o(n, t) {
            r(n);
            for (var u = n.parentNode.querySelectorAll(t), i = 0, f = u.length; f > i; i++)
                if (u[i] === n) return !0;
            return !1
        }

        function s(n, t) {
            return r(n), i(n, t)
        }
        var t, u = function() {
                var u, i;
                if (n.matches) return "matches";
                if (n.matchesSelector) return "matchesSelector";
                for (var r = ["webkit", "moz", "ms", "o"], t = 0, f = r.length; f > t; t++)
                    if (u = r[t], i = u + "MatchesSelector", n[i]) return i
            }(),
            f, e;
        u ? (f = document.createElement("div"), e = i(f, "div"), t = e ? i : s) : t = o;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return t
        }) : "object" == typeof exports ? module.exports = t : window.matchesSelector = t
    }(Element.prototype),
    function(n, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(i, r) {
            return t(n, i, r)
        }) : "object" == typeof exports ? module.exports = t(n, require("doc-ready"), require("desandro-matches-selector")) : n.fizzyUIUtils = t(n, n.docReady, n.matchesSelector)
    }(window, function(n, t, i) {
        var r = {},
            f, u;
        return r.extend = function(n, t) {
            for (var i in t) n[i] = t[i];
            return n
        }, r.modulo = function(n, t) {
            return (n % t + t) % t
        }, f = Object.prototype.toString, r.isArray = function(n) {
            return "[object Array]" == f.call(n)
        }, r.makeArray = function(n) {
            var t = [],
                i, u;
            if (r.isArray(n)) t = n;
            else if (n && "number" == typeof n.length)
                for (i = 0, u = n.length; u > i; i++) t.push(n[i]);
            else t.push(n);
            return t
        }, r.indexOf = Array.prototype.indexOf ? function(n, t) {
            return n.indexOf(t)
        } : function(n, t) {
            for (var i = 0, r = n.length; r > i; i++)
                if (n[i] === t) return i;
            return -1
        }, r.removeFrom = function(n, t) {
            var i = r.indexOf(n, t); - 1 != i && n.splice(i, 1)
        }, r.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(n) {
            return n instanceof HTMLElement
        } : function(n) {
            return n && "object" == typeof n && 1 == n.nodeType && "string" == typeof n.nodeName
        }, r.setText = function() {
            function t(t, i) {
                n = n || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText");
                t[n] = i
            }
            var n;
            return t
        }(), r.getParent = function(n, t) {
            for (; n != document.body;)
                if (n = n.parentNode, i(n, t)) return n
        }, r.getQueryElement = function(n) {
            return "string" == typeof n ? document.querySelector(n) : n
        }, r.handleEvent = function(n) {
            var t = "on" + n.type;
            this[t] && this[t](n)
        }, r.filterFindElements = function(n, t) {
            var u;
            n = r.makeArray(n);
            for (var f = [], e = 0, h = n.length; h > e; e++)
                if (u = n[e], r.isElement(u))
                    if (t) {
                        i(u, t) && f.push(u);
                        for (var s = u.querySelectorAll(t), o = 0, c = s.length; c > o; o++) f.push(s[o])
                    } else f.push(u);
            return f
        }, r.debounceMethod = function(n, t, i) {
            var u = n.prototype[t],
                r = t + "Timeout";
            n.prototype[t] = function() {
                var t = this[r],
                    f, n;
                t && clearTimeout(t);
                f = arguments;
                n = this;
                this[r] = setTimeout(function() {
                    u.apply(n, f);
                    delete n[r]
                }, i || 100)
            }
        }, r.toDashed = function(n) {
            return n.replace(/(.)([A-Z])/g, function(n, t, i) {
                return t + "-" + i
            }).toLowerCase()
        }, u = n.console, r.htmlInit = function(i, f) {
            t(function() {
                for (var a, t, o, v, s, h = r.toDashed(f), c = document.querySelectorAll(".js-" + h), l = "data-" + h + "-options", e = 0, y = c.length; y > e; e++) {
                    t = c[e];
                    o = t.getAttribute(l);
                    try {
                        a = o && JSON.parse(o)
                    } catch (p) {
                        u && u.error("Error parsing " + l + " on " + t.nodeName.toLowerCase() + (t.id ? "#" + t.id : "") + ": " + p);
                        continue
                    }
                    v = new i(t, a);
                    s = n.jQuery;
                    s && s.data(t, f, v)
                }
            })
        }, r
    }),
    function(n, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(i, r, u, f) {
            return t(n, i, r, u, f)
        }) : "object" == typeof exports ? module.exports = t(n, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (n.Outlayer = {}, n.Outlayer.Item = t(n, n.EventEmitter, n.getSize, n.getStyleProperty, n.fizzyUIUtils))
    }(window, function(n, t, i, r, u) {
        "use strict";

        function y(n) {
            for (var t in n) return !1;
            return t = null, !0
        }

        function f(n, t) {
            n && (this.element = n, this.layout = t, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function p(n) {
            return n.replace(/([A-Z])/g, function(n) {
                return "-" + n.toLowerCase()
            })
        }
        var o = n.getComputedStyle,
            w = o ? function(n) {
                return o(n, null)
            } : function(n) {
                return n.currentStyle
            },
            e = r("transition"),
            b = r("transform"),
            k = e && b,
            d = !!r("perspective"),
            s = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[e],
            h = ["transform", "transition", "transitionDuration", "transitionProperty"],
            c = function() {
                for (var n, t, u = {}, i = 0, f = h.length; f > i; i++) n = h[i], t = r(n), t && t !== n && (u[n] = t);
                return u
            }(),
            l, a, v;
        return u.extend(f.prototype, t.prototype), f.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            };
            this.css({
                position: "absolute"
            })
        }, f.prototype.handleEvent = function(n) {
            var t = "on" + n.type;
            this[t] && this[t](n)
        }, f.prototype.getSize = function() {
            this.size = i(this.element)
        }, f.prototype.css = function(n) {
            var r = this.element.style,
                t, i;
            for (t in n) i = c[t] || t, r[i] = n[t]
        }, f.prototype.getPosition = function() {
            var f = w(this.element),
                e = this.layout.options,
                o = e.isOriginLeft,
                s = e.isOriginTop,
                r = f[o ? "left" : "right"],
                u = f[s ? "top" : "bottom"],
                n = this.layout.size,
                t = -1 != r.indexOf("%") ? parseFloat(r) / 100 * n.width : parseInt(r, 10),
                i = -1 != u.indexOf("%") ? parseFloat(u) / 100 * n.height : parseInt(u, 10);
            t = isNaN(t) ? 0 : t;
            i = isNaN(i) ? 0 : i;
            t -= o ? n.paddingLeft : n.paddingRight;
            i -= s ? n.paddingTop : n.paddingBottom;
            this.position.x = t;
            this.position.y = i
        }, f.prototype.layoutPosition = function() {
            var i = this.layout.size,
                n = this.layout.options,
                t = {},
                r = n.isOriginLeft ? "paddingLeft" : "paddingRight",
                u = n.isOriginLeft ? "left" : "right",
                f = n.isOriginLeft ? "right" : "left",
                e = this.position.x + i[r];
            t[u] = this.getXValue(e);
            t[f] = "";
            var o = n.isOriginTop ? "paddingTop" : "paddingBottom",
                s = n.isOriginTop ? "top" : "bottom",
                h = n.isOriginTop ? "bottom" : "top",
                c = this.position.y + i[o];
            t[s] = this.getYValue(c);
            t[h] = "";
            this.css(t);
            this.emitEvent("layout", [this])
        }, f.prototype.getXValue = function(n) {
            var t = this.layout.options;
            return t.percentPosition && !t.isHorizontal ? n / this.layout.size.width * 100 + "%" : n + "px"
        }, f.prototype.getYValue = function(n) {
            var t = this.layout.options;
            return t.percentPosition && t.isHorizontal ? n / this.layout.size.height * 100 + "%" : n + "px"
        }, f.prototype._transitionTo = function(n, t) {
            this.getPosition();
            var r = this.position.x,
                u = this.position.y,
                f = parseInt(n, 10),
                e = parseInt(t, 10),
                o = f === this.position.x && e === this.position.y;
            if (this.setPosition(n, t), o && !this.isTransitioning) return void this.layoutPosition();
            var s = n - r,
                h = t - u,
                i = {};
            i.transform = this.getTranslate(s, h);
            this.transition({
                to: i,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, f.prototype.getTranslate = function(n, t) {
            var i = this.layout.options;
            return n = i.isOriginLeft ? n : -n, t = i.isOriginTop ? t : -t, d ? "translate3d(" + n + "px, " + t + "px, 0)" : "translate(" + n + "px, " + t + "px)"
        }, f.prototype.goTo = function(n, t) {
            this.setPosition(n, t);
            this.layoutPosition()
        }, f.prototype.moveTo = k ? f.prototype._transitionTo : f.prototype.goTo, f.prototype.setPosition = function(n, t) {
            this.position.x = parseInt(n, 10);
            this.position.y = parseInt(t, 10)
        }, f.prototype._nonTransition = function(n) {
            this.css(n.to);
            n.isCleaning && this._removeStyles(n.to);
            for (var t in n.onTransitionEnd) n.onTransitionEnd[t].call(this)
        }, f.prototype._transition = function(n) {
            var i, t, r;
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(n);
            i = this._transn;
            for (t in n.onTransitionEnd) i.onEnd[t] = n.onTransitionEnd[t];
            for (t in n.to) i.ingProperties[t] = !0, n.isCleaning && (i.clean[t] = !0);
            n.from && (this.css(n.from), r = this.element.offsetHeight, r = null);
            this.enableTransition(n.to);
            this.css(n.to);
            this.isTransitioning = !0
        }, l = "opacity," + p(c.transform || "transform"), f.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: l,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(s, this, !1))
        }, f.prototype.transition = f.prototype[e ? "_transition" : "_nonTransition"], f.prototype.onwebkitTransitionEnd = function(n) {
            this.ontransitionend(n)
        }, f.prototype.onotransitionend = function(n) {
            this.ontransitionend(n)
        }, a = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        }, f.prototype.ontransitionend = function(n) {
            var t, i, r;
            n.target === this.element && (t = this._transn, i = a[n.propertyName] || n.propertyName, (delete t.ingProperties[i], y(t.ingProperties) && this.disableTransition(), i in t.clean && (this.element.style[n.propertyName] = "", delete t.clean[i]), i in t.onEnd) && (r = t.onEnd[i], r.call(this), delete t.onEnd[i]), this.emitEvent("transitionEnd", [this]))
        }, f.prototype.disableTransition = function() {
            this.removeTransitionStyles();
            this.element.removeEventListener(s, this, !1);
            this.isTransitioning = !1
        }, f.prototype._removeStyles = function(n) {
            var t = {};
            for (var i in n) t[i] = "";
            this.css(t)
        }, v = {
            transitionProperty: "",
            transitionDuration: ""
        }, f.prototype.removeTransitionStyles = function() {
            this.css(v)
        }, f.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element);
            this.css({
                display: ""
            });
            this.emitEvent("remove", [this])
        }, f.prototype.remove = function() {
            if (!e || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var n = this;
            this.once("transitionEnd", function() {
                n.removeElem()
            });
            this.hide()
        }, f.prototype.reveal = function() {
            delete this.isHidden;
            this.css({
                display: ""
            });
            var n = this.layout.options,
                t = {},
                i = this.getHideRevealTransitionEndProperty("visibleStyle");
            t[i] = this.onRevealTransitionEnd;
            this.transition({
                from: n.hiddenStyle,
                to: n.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: t
            })
        }, f.prototype.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, f.prototype.getHideRevealTransitionEndProperty = function(n) {
            var t = this.layout.options[n],
                i;
            if (t.opacity) return "opacity";
            for (i in t) return i
        }, f.prototype.hide = function() {
            this.isHidden = !0;
            this.css({
                display: ""
            });
            var n = this.layout.options,
                t = {},
                i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            t[i] = this.onHideTransitionEnd;
            this.transition({
                from: n.visibleStyle,
                to: n.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: t
            })
        }, f.prototype.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, f.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, f
    }),
    function(n, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, r, u, f, e) {
            return t(n, i, r, u, f, e)
        }) : "object" == typeof exports ? module.exports = t(n, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : n.Outlayer = t(n, n.eventie, n.EventEmitter, n.getSize, n.fizzyUIUtils, n.Outlayer.Item)
    }(window, function(n, t, i, r, u, f) {
        "use strict";

        function e(n, t) {
            var i = u.getQueryElement(n),
                r;
            if (!i) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || n)));
            this.element = i;
            o && (this.$element = o(this.element));
            this.options = u.extend({}, this.constructor.defaults);
            this.option(t);
            r = ++l;
            this.element.outlayerGUID = r;
            s[r] = this;
            this._create();
            this.options.isInitLayout && this.layout()
        }
        var h = n.console,
            o = n.jQuery,
            c = function() {},
            l = 0,
            s = {};
        return e.namespace = "outlayer", e.Item = f, e.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, u.extend(e.prototype, i.prototype), e.prototype.option = function(n) {
            u.extend(this.options, n)
        }, e.prototype._create = function() {
            this.reloadItems();
            this.stamps = [];
            this.stamp(this.options.stamp);
            u.extend(this.element.style, this.options.containerStyle);
            this.options.isResizeBound && this.bindResize()
        }, e.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, e.prototype._itemize = function(n) {
            for (var u, f, i = this._filterFindItemElements(n), e = this.constructor.Item, r = [], t = 0, o = i.length; o > t; t++) u = i[t], f = new e(u, this), r.push(f);
            return r
        }, e.prototype._filterFindItemElements = function(n) {
            return u.filterFindElements(n, this.options.itemSelector)
        }, e.prototype.getItemElements = function() {
            for (var t = [], n = 0, i = this.items.length; i > n; n++) t.push(this.items[n].element);
            return t
        }, e.prototype.layout = function() {
            this._resetLayout();
            this._manageStamps();
            var n = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, n);
            this._isLayoutInited = !0
        }, e.prototype._init = e.prototype.layout, e.prototype._resetLayout = function() {
            this.getSize()
        }, e.prototype.getSize = function() {
            this.size = r(this.element)
        }, e.prototype._getMeasurement = function(n, t) {
            var f, i = this.options[n];
            i ? ("string" == typeof i ? f = this.element.querySelector(i) : u.isElement(i) && (f = i), this[n] = f ? r(f)[t] : i) : this[n] = 0
        }, e.prototype.layoutItems = function(n, t) {
            n = this._getItemsForLayout(n);
            this._layoutItems(n, t);
            this._postLayout()
        }, e.prototype._getItemsForLayout = function(n) {
            for (var i, r = [], t = 0, u = n.length; u > t; t++) i = n[t], i.isIgnored || r.push(i);
            return r
        }, e.prototype._layoutItems = function(n, t) {
            var i, r;
            if (this._emitCompleteOnItems("layout", n), n && n.length) {
                for (var f = [], u = 0, e = n.length; e > u; u++) i = n[u], r = this._getItemLayoutPosition(i), r.item = i, r.isInstant = t || i.isLayoutInstant, f.push(r);
                this._processLayoutQueue(f)
            }
        }, e.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, e.prototype._processLayoutQueue = function(n) {
            for (var t, i = 0, r = n.length; r > i; i++) t = n[i], this._positionItem(t.item, t.x, t.y, t.isInstant)
        }, e.prototype._positionItem = function(n, t, i, r) {
            r ? n.goTo(t, i) : n.moveTo(t, i)
        }, e.prototype._postLayout = function() {
            this.resizeContainer()
        }, e.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var n = this._getContainerSize();
                n && (this._setContainerMeasure(n.width, !0), this._setContainerMeasure(n.height, !1))
            }
        }, e.prototype._getContainerSize = c, e.prototype._setContainerMeasure = function(n, t) {
            if (void 0 !== n) {
                var i = this.size;
                i.isBorderBox && (n += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth);
                n = Math.max(n, 0);
                this.element.style[t ? "width" : "height"] = n + "px"
            }
        }, e.prototype._emitCompleteOnItems = function(n, t) {
            function r() {
                s.dispatchEvent(n + "Complete", null, [t])
            }

            function o() {
                f++;
                f === u && r()
            }
            var s = this,
                u = t.length,
                e;
            if (!t || !u) return void r();
            for (var f = 0, i = 0, h = t.length; h > i; i++) {
                e = t[i];
                e.once(n, o)
            }
        }, e.prototype.dispatchEvent = function(n, t, i) {
            var u = t ? [t].concat(i) : i,
                r;
            (this.emitEvent(n, u), o) && ((this.$element = this.$element || o(this.element), t) ? (r = o.Event(t), r.type = n, this.$element.trigger(r, i)) : this.$element.trigger(n, i))
        }, e.prototype.ignore = function(n) {
            var t = this.getItem(n);
            t && (t.isIgnored = !0)
        }, e.prototype.unignore = function(n) {
            var t = this.getItem(n);
            t && delete t.isIgnored
        }, e.prototype.stamp = function(n) {
            var t, i, r;
            if (n = this._find(n))
                for (this.stamps = this.stamps.concat(n), t = 0, i = n.length; i > t; t++) r = n[t], this.ignore(r)
        }, e.prototype.unstamp = function(n) {
            var t, r, i;
            if (n = this._find(n))
                for (t = 0, r = n.length; r > t; t++) i = n[t], u.removeFrom(this.stamps, i), this.unignore(i)
        }, e.prototype._find = function(n) {
            if (n) return ("string" == typeof n && (n = this.element.querySelectorAll(n)), n = u.makeArray(n))
        }, e.prototype._manageStamps = function() {
            var n, t, i;
            if (this.stamps && this.stamps.length)
                for (this._getBoundingRect(), n = 0, t = this.stamps.length; t > n; n++) i = this.stamps[n], this._manageStamp(i)
        }, e.prototype._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                n = this.size;
            this._boundingRect = {
                left: t.left + n.paddingLeft + n.borderLeftWidth,
                top: t.top + n.paddingTop + n.borderTopWidth,
                right: t.right - (n.paddingRight + n.borderRightWidth),
                bottom: t.bottom - (n.paddingBottom + n.borderBottomWidth)
            }
        }, e.prototype._manageStamp = c, e.prototype._getElementOffset = function(n) {
            var t = n.getBoundingClientRect(),
                i = this._boundingRect,
                u = r(n);
            return {
                left: t.left - i.left - u.marginLeft,
                top: t.top - i.top - u.marginTop,
                right: i.right - t.right - u.marginRight,
                bottom: i.bottom - t.bottom - u.marginBottom
            }
        }, e.prototype.handleEvent = function(n) {
            var t = "on" + n.type;
            this[t] && this[t](n)
        }, e.prototype.bindResize = function() {
            this.isResizeBound || (t.bind(n, "resize", this), this.isResizeBound = !0)
        }, e.prototype.unbindResize = function() {
            this.isResizeBound && t.unbind(n, "resize", this);
            this.isResizeBound = !1
        }, e.prototype.onresize = function() {
            function t() {
                n.resize();
                delete n.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var n = this;
            this.resizeTimeout = setTimeout(t, 100)
        }, e.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, e.prototype.needsResizeLayout = function() {
            var n = r(this.element),
                t = this.size && n;
            return t && n.innerWidth !== this.size.innerWidth
        }, e.prototype.addItems = function(n) {
            var t = this._itemize(n);
            return t.length && (this.items = this.items.concat(t)), t
        }, e.prototype.appended = function(n) {
            var t = this.addItems(n);
            t.length && (this.layoutItems(t, !0), this.reveal(t))
        }, e.prototype.prepended = function(n) {
            var t = this._itemize(n),
                i;
            t.length && (i = this.items.slice(0), this.items = t.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(i))
        }, e.prototype.reveal = function(n) {
            var i, t, r;
            for (this._emitCompleteOnItems("reveal", n), i = n && n.length, t = 0; i && i > t; t++) r = n[t], r.reveal()
        }, e.prototype.hide = function(n) {
            var i, t, r;
            for (this._emitCompleteOnItems("hide", n), i = n && n.length, t = 0; i && i > t; t++) r = n[t], r.hide()
        }, e.prototype.revealItemElements = function(n) {
            var t = this.getItems(n);
            this.reveal(t)
        }, e.prototype.hideItemElements = function(n) {
            var t = this.getItems(n);
            this.hide(t)
        }, e.prototype.getItem = function(n) {
            for (var i, t = 0, r = this.items.length; r > t; t++)
                if (i = this.items[t], i.element === n) return i
        }, e.prototype.getItems = function(n) {
            var f, i;
            n = u.makeArray(n);
            for (var r = [], t = 0, e = n.length; e > t; t++) f = n[t], i = this.getItem(f), i && r.push(i);
            return r
        }, e.prototype.remove = function(n) {
            var t = this.getItems(n),
                i, f, r;
            if (this._emitCompleteOnItems("remove", t), t && t.length)
                for (i = 0, f = t.length; f > i; i++) r = t[i], r.remove(), u.removeFrom(this.items, r)
        }, e.prototype.destroy = function() {
            var t = this.element.style,
                n, i, r, u;
            for (t.height = "", t.position = "", t.width = "", n = 0, i = this.items.length; i > n; n++) r = this.items[n], r.destroy();
            this.unbindResize();
            u = this.element.outlayerGUID;
            delete s[u];
            delete this.element.outlayerGUID;
            o && o.removeData(this.element, this.constructor.namespace)
        }, e.data = function(n) {
            n = u.getQueryElement(n);
            var t = n && n.outlayerGUID;
            return t && s[t]
        }, e.create = function(n, t) {
            function i() {
                e.apply(this, arguments)
            }
            return Object.create ? i.prototype = Object.create(e.prototype) : u.extend(i.prototype, e.prototype), i.prototype.constructor = i, i.defaults = u.extend({}, e.defaults), u.extend(i.defaults, t), i.prototype.settings = {}, i.namespace = n, i.data = e.data, i.Item = function() {
                f.apply(this, arguments)
            }, i.Item.prototype = new f, u.htmlInit(i, n), o && o.bridget && o.bridget(n, i), i
        }, e.Item = f, e
    }),
    function(n, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], t) : "object" == typeof exports ? module.exports = t(require("outlayer")) : (n.Isotope = n.Isotope || {}, n.Isotope.Item = t(n.Outlayer))
    }(window, function(n) {
        "use strict";

        function t() {
            n.Item.apply(this, arguments)
        }
        t.prototype = new n.Item;
        t.prototype._create = function() {
            this.id = this.layout.itemGUID++;
            n.Item.prototype._create.call(this);
            this.sortData = {}
        };
        t.prototype.updateSortData = function() {
            var t, i, n, r;
            if (!this.isIgnored) {
                this.sortData.id = this.id;
                this.sortData["original-order"] = this.id;
                this.sortData.random = Math.random();
                t = this.layout.options.getSortData;
                i = this.layout._sorters;
                for (n in t) r = i[n], this.sortData[n] = r(this.element, this)
            }
        };
        var i = t.prototype.destroy;
        return t.prototype.destroy = function() {
            i.apply(this, arguments);
            this.css({
                display: ""
            })
        }, t
    }),
    function(n, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], t) : "object" == typeof exports ? module.exports = t(require("get-size"), require("outlayer")) : (n.Isotope = n.Isotope || {}, n.Isotope.LayoutMode = t(n.getSize, n.Outlayer))
    }(window, function(n, t) {
        "use strict";

        function i(n) {
            this.isotope = n;
            n && (this.options = n.options[this.namespace], this.element = n.element, this.items = n.filteredItems, this.size = n.size)
        }
        return function() {
            function f(n) {
                return function() {
                    return t.prototype[n].apply(this.isotope, arguments)
                }
            }
            for (var r, u = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, e = u.length; e > n; n++) r = u[n], i.prototype[r] = f(r)
        }(), i.prototype.needsVerticalResizeLayout = function() {
            var t = n(this.isotope.element),
                i = this.isotope.size && t;
            return i && t.innerHeight != this.isotope.size.innerHeight
        }, i.prototype._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, i.prototype.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, i.prototype.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, i.prototype.getSegmentSize = function(n, t) {
            var i = n + t,
                u = "outer" + t,
                r;
            (this._getMeasurement(i, u), this[i]) || (r = this.getFirstItemSize(), this[i] = r && r[u] || this.isotope.size["inner" + t])
        }, i.prototype.getFirstItemSize = function() {
            var t = this.isotope.filteredItems[0];
            return t && t.element && n(t.element)
        }, i.prototype.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, i.prototype.getSize = function() {
            this.isotope.getSize();
            this.size = this.isotope.size
        }, i.modes = {}, i.create = function(n, t) {
            function r() {
                i.apply(this, arguments)
            }
            return r.prototype = new i, t && (r.options = t), r.prototype.namespace = n, i.modes[n] = r, r
        }, i
    }),
    function(n, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], t) : "object" == typeof exports ? module.exports = t(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : n.Masonry = t(n.Outlayer, n.getSize, n.fizzyUIUtils)
    }(window, function(n, t, i) {
        var r = n.create("masonry");
        return r.prototype._resetLayout = function() {
            this.getSize();
            this._getMeasurement("columnWidth", "outerWidth");
            this._getMeasurement("gutter", "outerWidth");
            this.measureColumns();
            var n = this.cols;
            for (this.colYs = []; n--;) this.colYs.push(0);
            this.maxY = 0
        }, r.prototype.measureColumns = function() {
            var n, i;
            (this.getContainerWidth(), this.columnWidth) || (n = this.items[0], i = n && n.element, this.columnWidth = i && t(i).outerWidth || this.containerWidth);
            var r = this.columnWidth += this.gutter,
                f = this.containerWidth + this.gutter,
                u = f / r,
                e = r - f % r,
                o = e && 1 > e ? "round" : "floor";
            u = Math[o](u);
            this.cols = Math.max(u, 1)
        }, r.prototype.getContainerWidth = function() {
            var i = this.options.isFitWidth ? this.element.parentNode : this.element,
                n = t(i);
            this.containerWidth = n && n.innerWidth
        }, r.prototype._getItemLayoutPosition = function(n) {
            n.getSize();
            var e = n.size.outerWidth % this.columnWidth,
                s = e && 1 > e ? "round" : "ceil",
                t = Math[s](n.size.outerWidth / this.columnWidth);
            t = Math.min(t, this.cols);
            for (var r = this._getColGroup(t), u = Math.min.apply(Math, r), o = i.indexOf(r, u), h = {
                    x: this.columnWidth * o,
                    y: u
                }, c = u + n.size.outerHeight, l = this.cols + 1 - r.length, f = 0; l > f; f++) this.colYs[o + f] = c;
            return h
        }, r.prototype._getColGroup = function(n) {
            var r;
            if (2 > n) return this.colYs;
            for (var i = [], u = this.cols + 1 - n, t = 0; u > t; t++) r = this.colYs.slice(t, t + n), i[t] = Math.max.apply(Math, r);
            return i
        }, r.prototype._manageStamp = function(n) {
            var e = t(n),
                u = this._getElementOffset(n),
                o = this.options.isOriginLeft ? u.left : u.right,
                s = o + e.outerWidth,
                f = Math.floor(o / this.columnWidth),
                i, h, r;
            for (f = Math.max(0, f), i = Math.floor(s / this.columnWidth), i -= s % this.columnWidth ? 0 : 1, i = Math.min(this.cols - 1, i), h = (this.options.isOriginTop ? u.top : u.bottom) + e.outerHeight, r = f; i >= r; r++) this.colYs[r] = Math.max(h, this.colYs[r])
        }, r.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var n = {
                height: this.maxY
            };
            return this.options.isFitWidth && (n.width = this._getContainerFitWidth()), n
        }, r.prototype._getContainerFitWidth = function() {
            for (var n = 0, t = this.cols; --t && 0 === this.colYs[t];) n++;
            return (this.cols - n) * this.columnWidth - this.gutter
        }, r.prototype.needsResizeLayout = function() {
            var n = this.containerWidth;
            return this.getContainerWidth(), n !== this.containerWidth
        }, r
    }),
    function(n, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode"), require("masonry-layout")) : t(n.Isotope.LayoutMode, n.Masonry)
    }(window, function(n, t) {
        "use strict";

        function f(n, t) {
            for (var i in t) n[i] = t[i];
            return n
        }
        var i = n.create("masonry"),
            e = i.prototype._getElementOffset,
            o = i.prototype.layout,
            s = i.prototype._getMeasurement,
            r, u;
        return f(i.prototype, t.prototype), i.prototype._getElementOffset = e, i.prototype.layout = o, i.prototype._getMeasurement = s, r = i.prototype.measureColumns, i.prototype.measureColumns = function() {
            this.items = this.isotope.filteredItems;
            r.call(this)
        }, u = i.prototype._manageStamp, i.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft;
            this.options.isOriginTop = this.isotope.options.isOriginTop;
            u.apply(this, arguments)
        }, i
    }),
    function(n, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode")) : t(n.Isotope.LayoutMode)
    }(window, function(n) {
        "use strict";
        var t = n.create("fitRows");
        return t.prototype._resetLayout = function() {
            this.x = 0;
            this.y = 0;
            this.maxY = 0;
            this._getMeasurement("gutter", "outerWidth")
        }, t.prototype._getItemLayoutPosition = function(n) {
            var t, i, r;
            return n.getSize(), t = n.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter, 0 !== this.x && t + this.x > i && (this.x = 0, this.y = this.maxY), r = {
                x: this.x,
                y: this.y
            }, this.maxY = Math.max(this.maxY, this.y + n.size.outerHeight), this.x += t, r
        }, t.prototype._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, t
    }),
    function(n, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode")) : t(n.Isotope.LayoutMode)
    }(window, function(n) {
        "use strict";
        var t = n.create("vertical", {
            horizontalAlignment: 0
        });
        return t.prototype._resetLayout = function() {
            this.y = 0
        }, t.prototype._getItemLayoutPosition = function(n) {
            n.getSize();
            var t = (this.isotope.size.innerWidth - n.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += n.size.outerHeight, {
                x: t,
                y: i
            }
        }, t.prototype._getContainerSize = function() {
            return {
                height: this.y
            }
        }, t
    }),
    function(n, t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, r, u, f, e, o) {
            return t(n, i, r, u, f, e, o)
        }) : "object" == typeof exports ? module.exports = t(n, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : n.Isotope = t(n, n.Outlayer, n.getSize, n.matchesSelector, n.fizzyUIUtils, n.Isotope.Item, n.Isotope.LayoutMode)
    }(window, function(n, t, i, r, u, f, e) {
        function l(n, t) {
            return function(i, r) {
                for (var h, c, u = 0, s = n.length; s > u; u++) {
                    var f = n[u],
                        e = i.sortData[f],
                        o = r.sortData[f];
                    if (e > o || o > e) return h = void 0 !== t[f] ? t[f] : t, c = h ? 1 : -1, (e > o ? 1 : -1) * c
                }
                return 0
            }
        }
        var s = n.jQuery,
            a = String.prototype.trim ? function(n) {
                return n.trim()
            } : function(n) {
                return n.replace(/^\s+|\s+$/g, "")
            },
            v = document.documentElement,
            y = v.textContent ? function(n) {
                return n.textContent
            } : function(n) {
                return n.innerText
            },
            o = t.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            }),
            h, c;
        return o.Item = f, o.LayoutMode = e, o.prototype._create = function() {
            this.itemGUID = 0;
            this._sorters = {};
            this._getSorters();
            t.prototype._create.call(this);
            this.modes = {};
            this.filteredItems = this.items;
            this.sortHistory = ["original-order"];
            for (var n in e.modes) this._initLayoutMode(n)
        }, o.prototype.reloadItems = function() {
            this.itemGUID = 0;
            t.prototype.reloadItems.call(this)
        }, o.prototype._itemize = function() {
            for (var r, n = t.prototype._itemize.apply(this, arguments), i = 0, u = n.length; u > i; i++) r = n[i], r.id = this.itemGUID++;
            return this._updateItemsSortData(n), n
        }, o.prototype._initLayoutMode = function(n) {
            var t = e.modes[n],
                i = this.options[n] || {};
            this.options[n] = t.options ? u.extend(t.options, i) : i;
            this.modes[n] = new t(this)
        }, o.prototype.layout = function() {
            return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
        }, o.prototype._layout = function() {
            var n = this._getIsInstant();
            this._resetLayout();
            this._manageStamps();
            this.layoutItems(this.filteredItems, n);
            this._isLayoutInited = !0
        }, o.prototype.arrange = function(n) {
            function r() {
                i.reveal(t.needReveal);
                i.hide(t.needHide)
            }
            var t, i;
            this.option(n);
            this._getIsInstant();
            t = this._filter(this.items);
            this.filteredItems = t.matches;
            i = this;
            this._bindArrangeComplete();
            this._isInstant ? this._noTransition(r) : r();
            this._sort();
            this._layout()
        }, o.prototype._init = o.prototype.arrange, o.prototype._getIsInstant = function() {
            var n = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = n, n
        }, o.prototype._bindArrangeComplete = function() {
            function n() {
                t && i && r && u.dispatchEvent("arrangeComplete", null, [u.filteredItems])
            }
            var t, i, r, u = this;
            this.once("layoutComplete", function() {
                t = !0;
                n()
            });
            this.once("hideComplete", function() {
                i = !0;
                n()
            });
            this.once("revealComplete", function() {
                r = !0;
                n()
            })
        }, o.prototype._filter = function(n) {
            var r = this.options.filter,
                t, i;
            r = r || "*";
            for (var f = [], e = [], o = [], s = this._getFilterTest(r), u = 0, h = n.length; h > u; u++) t = n[u], t.isIgnored || (i = s(t), i && f.push(t), i && t.isHidden ? e.push(t) : i || t.isHidden || o.push(t));
            return {
                matches: f,
                needReveal: e,
                needHide: o
            }
        }, o.prototype._getFilterTest = function(n) {
            return s && this.options.isJQueryFiltering ? function(t) {
                return s(t.element).is(n)
            } : "function" == typeof n ? function(t) {
                return n(t.element)
            } : function(t) {
                return r(t.element, n)
            }
        }, o.prototype.updateSortData = function(n) {
            var t;
            n ? (n = u.makeArray(n), t = this.getItems(n)) : t = this.items;
            this._getSorters();
            this._updateItemsSortData(t)
        }, o.prototype._getSorters = function() {
            var t = this.options.getSortData,
                n, i;
            for (n in t) i = t[n], this._sorters[n] = h(i)
        }, o.prototype._updateItemsSortData = function(n) {
            for (var r, i = n && n.length, t = 0; i && i > t; t++) r = n[t], r.updateSortData()
        }, h = function() {
            function n(n) {
                if ("string" != typeof n) return n;
                var i = a(n).split(" "),
                    r = i[0],
                    u = r.match(/^\[(.+)\]$/),
                    s = u && u[1],
                    f = t(s, r),
                    e = o.sortDataParsers[i[1]];
                return e ? function(n) {
                    return n && e(f(n))
                } : function(n) {
                    return n && f(n)
                }
            }

            function t(n, t) {
                return n ? function(t) {
                    return t.getAttribute(n)
                } : function(n) {
                    var i = n.querySelector(t);
                    return i && y(i)
                }
            }
            return n
        }(), o.sortDataParsers = {
            parseInt: function(n) {
                return parseInt(n, 10)
            },
            parseFloat: function(n) {
                return parseFloat(n)
            }
        }, o.prototype._sort = function() {
            var n = this.options.sortBy,
                t, i;
            n && (t = [].concat.apply(n, this.sortHistory), i = l(t, this.options.sortAscending), this.filteredItems.sort(i), n != this.sortHistory[0] && this.sortHistory.unshift(n))
        }, o.prototype._mode = function() {
            var n = this.options.layoutMode,
                t = this.modes[n];
            if (!t) throw new Error("No layout mode: " + n);
            return t.options = this.options[n], t
        }, o.prototype._resetLayout = function() {
            t.prototype._resetLayout.call(this);
            this._mode()._resetLayout()
        }, o.prototype._getItemLayoutPosition = function(n) {
            return this._mode()._getItemLayoutPosition(n)
        }, o.prototype._manageStamp = function(n) {
            this._mode()._manageStamp(n)
        }, o.prototype._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, o.prototype.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, o.prototype.appended = function(n) {
            var t = this.addItems(n),
                i;
            t.length && (i = this._filterRevealAdded(t), this.filteredItems = this.filteredItems.concat(i))
        }, o.prototype.prepended = function(n) {
            var t = this._itemize(n),
                i;
            t.length && (this._resetLayout(), this._manageStamps(), i = this._filterRevealAdded(t), this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = t.concat(this.items))
        }, o.prototype._filterRevealAdded = function(n) {
            var t = this._filter(n);
            return this.hide(t.needHide), this.reveal(t.matches), this.layoutItems(t.matches, !0), t.matches
        }, o.prototype.insert = function(n) {
            var i = this.addItems(n),
                t, u, r, f;
            if (i.length) {
                for (r = i.length, t = 0; r > t; t++) u = i[t], this.element.appendChild(u.element);
                for (f = this._filter(i).matches, t = 0; r > t; t++) i[t].isLayoutInstant = !0;
                for (this.arrange(), t = 0; r > t; t++) delete i[t].isLayoutInstant;
                this.reveal(f)
            }
        }, c = o.prototype.remove, o.prototype.remove = function(n) {
            var t, r, i, f;
            if (n = u.makeArray(n), t = this.getItems(n), c.call(this, n), r = t && t.length, r)
                for (i = 0; r > i; i++) f = t[i], u.removeFrom(this.filteredItems, f)
        }, o.prototype.shuffle = function() {
            for (var i, n = 0, t = this.items.length; t > n; n++) i = this.items[n], i.sortData.random = Math.random();
            this.options.sortBy = "random";
            this._sort();
            this._layout()
        }, o.prototype._noTransition = function(n) {
            var i = this.options.transitionDuration,
                t;
            return this.options.transitionDuration = 0, t = n.call(this), this.options.transitionDuration = i, t
        }, o.prototype.getFilteredItemElements = function() {
            for (var t = [], n = 0, i = this.filteredItems.length; i > n; n++) t.push(this.filteredItems[n].element);
            return t
        }, o
    }),
    function(n) {
        "use strict";
        n.ajaxChimp = {
            responses: {
                "We have sent you a confirmation email": 0,
                "Please enter a value": 1,
                "An email address must contain a single @": 2,
                "The domain portion of the email address is invalid (the portion after the @: )": 3,
                "The username portion of the email address is invalid (the portion before the @: )": 4,
                "This email address looks fake or invalid. Please enter a real email address": 5
            },
            translations: {
                en: null
            },
            init: function(t, i) {
                n(t).ajaxChimp(i)
            }
        };
        n.fn.ajaxChimp = function(t) {
            return n(this).each(function(i, r) {
                var f = n(r),
                    o = f.find("input[type=email]"),
                    e = f.find("label[for=" + o.attr("id") + "]"),
                    u = n.extend({
                        url: f.attr("action"),
                        language: "en"
                    }, t),
                    s = u.url.replace("/post?", "/post-json?").concat("&c=?");
                f.attr("novalidate", "true");
                o.attr("name", "EMAIL");
                f.submit(function() {
                    function h(i) {
                        var f, r, s;
                        if (i.result === "success") t = "We have sent you a confirmation email", e.removeClass("error").addClass("valid"), o.removeClass("error").addClass("valid");
                        else {
                            o.removeClass("valid").addClass("error");
                            e.removeClass("valid").addClass("error");
                            f = -1;
                            try {
                                r = i.msg.split(" - ", 2);
                                r[1] === undefined ? t = i.msg : (s = parseInt(r[0], 10), s.toString() === r[0] ? (f = r[0], t = r[1]) : (f = -1, t = i.msg))
                            } catch (h) {
                                f = -1;
                                t = i.msg
                            }
                        }
                        u.language !== "en" && n.ajaxChimp.responses[t] !== undefined && n.ajaxChimp.translations && n.ajaxChimp.translations[u.language] && n.ajaxChimp.translations[u.language][n.ajaxChimp.responses[t]] && (t = n.ajaxChimp.translations[u.language][n.ajaxChimp.responses[t]]);
                        e.html(t);
                        e.show(2e3);
                        u.callback && u.callback(i)
                    }
                    var t, r = {},
                        c = f.serializeArray(),
                        i;
                    return n.each(c, function(n, t) {
                        r[t.name] = t.value
                    }), n.ajax({
                        url: s,
                        data: r,
                        success: h,
                        dataType: "jsonp",
                        error: function(n, t) {
                            console.log("mailchimp ajax submit error: " + t)
                        }
                    }), i = "Submitting...", u.language !== "en" && n.ajaxChimp.translations && n.ajaxChimp.translations[u.language] && n.ajaxChimp.translations[u.language].submit && (i = n.ajaxChimp.translations[u.language].submit), e.html(i).show(2e3), !1
                })
            }), this
        }
    }(jQuery),
    function(n) {
        n.fn.appear = function(t, i) {
            var r = n.extend({
                data: undefined,
                one: !0,
                accX: 0,
                accY: 0
            }, i);
            return this.each(function() {
                var i = n(this);
                if (i.appeared = !1, !t) {
                    i.trigger("appear", r.data);
                    return
                }
                var u = n(window),
                    f = function() {
                        if (!i.is(":visible")) {
                            i.appeared = !1;
                            return
                        }
                        var n = u.scrollLeft(),
                            t = u.scrollTop(),
                            f = i.offset(),
                            e = f.left,
                            o = f.top,
                            s = r.accX,
                            h = r.accY,
                            c = i.height(),
                            l = u.height(),
                            a = i.width(),
                            v = u.width();
                        o + c + h >= t && o <= t + l + h && e + a + s >= n && e <= n + v + s ? i.appeared || i.trigger("appear", r.data) : i.appeared = !1
                    },
                    e = function() {
                        if (i.appeared = !0, r.one) {
                            u.unbind("scroll", f);
                            var e = n.inArray(f, n.fn.appear.checks);
                            e >= 0 && n.fn.appear.checks.splice(e, 1)
                        }
                        t.apply(this, arguments)
                    };
                if (r.one) i.one("appear", r.data, e);
                else i.bind("appear", r.data, e);
                u.scroll(f);
                n.fn.appear.checks.push(f);
                f()
            })
        };
        n.extend(n.fn.appear, {
            checks: [],
            timeout: null,
            checkAll: function() {
                var t = n.fn.appear.checks.length;
                if (t > 0)
                    while (t--) n.fn.appear.checks[t]()
            },
            run: function() {
                n.fn.appear.timeout && clearTimeout(n.fn.appear.timeout);
                n.fn.appear.timeout = setTimeout(n.fn.appear.checkAll, 20)
            }
        });
        n.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(t, i) {
            var r = n.fn[i];
            r && (n.fn[i] = function() {
                var t = r.apply(this, arguments);
                return n.fn.appear.run(), t
            })
        })
    }(jQuery),
    function(n) {
        typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" ? n(require("jquery")) : n(jQuery)
    }(function(n) {
        function i(n, t) {
            return n.toFixed(t.decimals)
        }
        var t = function(i, r) {
            this.$element = n(i);
            this.options = n.extend({}, t.DEFAULTS, this.dataOptions(), r);
            this.init()
        };
        t.DEFAULTS = {
            from: 0,
            to: 0,
            speed: 1e3,
            refreshInterval: 100,
            decimals: 0,
            formatter: i,
            onUpdate: null,
            onComplete: null
        };
        t.prototype.init = function() {
            this.value = this.options.from;
            this.loops = Math.ceil(this.options.speed / this.options.refreshInterval);
            this.loopCount = 0;
            this.increment = (this.options.to - this.options.from) / this.loops
        };
        t.prototype.dataOptions = function() {
            var n = {
                    from: this.$element.data("from"),
                    to: this.$element.data("to"),
                    speed: this.$element.data("speed"),
                    refreshInterval: this.$element.data("refresh-interval"),
                    decimals: this.$element.data("decimals")
                },
                i = Object.keys(n),
                r, t;
            for (r in i) t = i[r], typeof n[t] == "undefined" && delete n[t];
            return n
        };
        t.prototype.update = function() {
            this.value += this.increment;
            this.loopCount++;
            this.render();
            typeof this.options.onUpdate == "function" && this.options.onUpdate.call(this.$element, this.value);
            this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, typeof this.options.onComplete == "function" && this.options.onComplete.call(this.$element, this.value))
        };
        t.prototype.render = function() {
            var n = this.options.formatter.call(this.$element, this.value, this.options);
            this.$element.text(n)
        };
        t.prototype.restart = function() {
            this.stop();
            this.init();
            this.start()
        };
        t.prototype.start = function() {
            this.stop();
            this.render();
            this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
        };
        t.prototype.stop = function() {
            this.interval && clearInterval(this.interval)
        };
        t.prototype.toggle = function() {
            this.interval ? this.stop() : this.start()
        };
        n.fn.countTo = function(i) {
            return this.each(function() {
                var u = n(this),
                    r = u.data("countTo"),
                    f = !r || typeof i == "object",
                    e = typeof i == "object" ? i : {},
                    o = typeof i == "string" ? i : "start";
                f && (r && r.stop(), u.data("countTo", r = new t(this, e)));
                r[o].call(r)
            })
        }
    });
typeof ytp != "object" && (ytp = {}),
    function(n, t) {
        var i, e, r, u, f, o;
        t.isDevice = "ontouchstart" in window;
        n.browser || (n.browser = {}, n.browser.mozilla = !1, n.browser.webkit = !1, n.browser.opera = !1, n.browser.msie = !1, i = navigator.userAgent, n.browser.ua = i, n.browser.name = navigator.appName, n.browser.fullVersion = "" + parseFloat(navigator.appVersion), n.browser.majorVersion = parseInt(navigator.appVersion, 10), -1 != (r = i.indexOf("Opera")) ? (n.browser.opera = !0, n.browser.name = "Opera", n.browser.fullVersion = i.substring(r + 6), -1 != (r = i.indexOf("Version")) && (n.browser.fullVersion = i.substring(r + 8))) : -1 != (r = i.indexOf("MSIE")) ? (n.browser.msie = !0, n.browser.name = "Microsoft Internet Explorer", n.browser.fullVersion = i.substring(r + 5)) : -1 != i.indexOf("Trident") ? (n.browser.msie = !0, n.browser.name = "Microsoft Internet Explorer", f = i.indexOf("rv:") + 3, o = f + 4, n.browser.fullVersion = i.substring(f, o)) : -1 != (r = i.indexOf("Chrome")) ? (n.browser.webkit = !0, n.browser.name = "Chrome", n.browser.fullVersion = i.substring(r + 7)) : -1 != (r = i.indexOf("Safari")) ? (n.browser.webkit = !0, n.browser.name = "Safari", n.browser.fullVersion = i.substring(r + 7), -1 != (r = i.indexOf("Version")) && (n.browser.fullVersion = i.substring(r + 8))) : -1 != (r = i.indexOf("AppleWebkit")) ? (n.browser.webkit = !0, n.browser.name = "Safari", n.browser.fullVersion = i.substring(r + 7), -1 != (r = i.indexOf("Version")) && (n.browser.fullVersion = i.substring(r + 8))) : -1 != (r = i.indexOf("Firefox")) ? (n.browser.mozilla = !0, n.browser.name = "Firefox", n.browser.fullVersion = i.substring(r + 8)) : (e = i.lastIndexOf(" ") + 1) < (r = i.lastIndexOf("/")) && (n.browser.name = i.substring(e, r), n.browser.fullVersion = i.substring(r + 1), n.browser.name.toLowerCase() == n.browser.name.toUpperCase() && (n.browser.name = navigator.appName)), -1 != (u = n.browser.fullVersion.indexOf(";")) && (n.browser.fullVersion = n.browser.fullVersion.substring(0, u)), -1 != (u = n.browser.fullVersion.indexOf(" ")) && (n.browser.fullVersion = n.browser.fullVersion.substring(0, u)), n.browser.majorVersion = parseInt("" + n.browser.fullVersion, 10), isNaN(n.browser.majorVersion) && (n.browser.fullVersion = "" + parseFloat(navigator.appVersion), n.browser.majorVersion = parseInt(navigator.appVersion, 10)), n.browser.version = n.browser.majorVersion);
        n.fn.CSSAnimate = function(t, i, r, u, f) {
            return this.each(function() {
                var e = n(this),
                    l, s, c, h, o;
                if (0 !== e.length && t) {
                    if ("function" == typeof i && (f = i, i = n.fx.speeds._default), "function" == typeof r && (f = r, r = 0), "function" == typeof u && (f = u, u = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof i)
                        for (l in n.fx.speeds)
                            if (i == l) {
                                i = n.fx.speeds[l];
                                break
                            } else i = null;
                    if (n.support.transition) {
                        s = "";
                        c = "transitionEnd";
                        n.browser.webkit ? (s = "-webkit-", c = "webkitTransitionEnd") : n.browser.mozilla ? (s = "-moz-", c = "transitionend") : n.browser.opera ? (s = "-o-", c = "otransitionend") : n.browser.msie && (s = "-ms-", c = "msTransitionEnd");
                        l = [];
                        for (o in t) h = o, "transform" === h && (h = s + "transform", t[h] = t[o], delete t[o]), "transform-origin" === h && (h = s + "transform-origin", t[h] = t[o], delete t[o]), l.push(h), e.css(h) || e.css(h, 0);
                        o = l.join(",");
                        e.css(s + "transition-property", o);
                        e.css(s + "transition-duration", i + "ms");
                        e.css(s + "transition-delay", r + "ms");
                        e.css(s + "transition-timing-function", u);
                        e.css(s + "backface-visibility", "hidden");
                        setTimeout(function() {
                            e.css(t)
                        }, 0);
                        setTimeout(function() {
                            e.called || !f ? e.called = !1 : f()
                        }, i + 20);
                        e.on(c, function(n) {
                            return e.off(c), e.css(s + "transition", ""), n.stopPropagation(), "function" == typeof f && (e.called = !0, f()), !1
                        })
                    } else {
                        for (o in t) "transform" === o && delete t[o], "transform-origin" === o && delete t[o], "auto" === t[o] && delete t[o];
                        f && "string" != typeof f || (f = "linear");
                        e.animate(t, i, f)
                    }
                }
            })
        };
        n.fn.CSSAnimateStop = function() {
            var t = "",
                i = "transitionEnd";
            n.browser.webkit ? (t = "-webkit-", i = "webkitTransitionEnd") : n.browser.mozilla ? (t = "-moz-", i = "transitionend") : n.browser.opera ? (t = "-o-", i = "otransitionend") : n.browser.msie && (t = "-ms-", i = "msTransitionEnd");
            n(this).css(t + "transition", "");
            n(this).off(i)
        };
        n.support.transition = function() {
                var n = (document.body || document.documentElement).style;
                return void 0 !== n.transition || void 0 !== n.WebkitTransition || void 0 !== n.MozTransition || void 0 !== n.MsTransition || void 0 !== n.OTransition
            }(),
            function(n) {
                n.extend({
                    metadata: {
                        defaults: {
                            type: "class",
                            name: "metadata",
                            cre: /({.*})/,
                            single: "metadata"
                        },
                        setType: function(n, t) {
                            this.defaults.type = n;
                            this.defaults.name = t
                        },
                        get: function(b, f) {
                            var d = n.extend({}, this.defaults, f),
                                a, e;
                            if (d.single.length || (d.single = "metadata"), a = n.data(b, d.single), a) return a;
                            if (a = "{}", "class" == d.type) e = d.cre.exec(b.className), e && (a = e[1]);
                            else if ("elem" == d.type) {
                                if (!b.getElementsByTagName) return;
                                e = b.getElementsByTagName(d.name);
                                e.length && (a = n.trim(e[0].innerHTML))
                            } else void 0 != b.getAttribute && (e = b.getAttribute(d.name)) && (a = e);
                            return 0 > a.indexOf("{") && (a = "{" + a + "}"), a = eval("(" + a + ")"), n.data(b, d.single, a), a
                        }
                    }
                });
                n.fn.metadata = function(t) {
                    return n.metadata.get(this[0], t)
                }
            }(n);
        String.prototype.getVideoID = function() {
            return this.substr(0, 16) == "http://youtu.be/" ? this.replace("http://youtu.be/", "") : this.indexOf("http") > -1 ? this.match(/[\\?&]v=([^&#]*)/)[1] : this
        };
        n.mbYTPlayer = {
            name: "jquery.mb.YTPlayer",
            version: "2.6.0",
            author: "Matteo Bicocchi",
            defaults: {
                containment: "body",
                ratio: "16/9",
                showYTLogo: !1,
                videoURL: null,
                startAt: 0,
                autoPlay: !0,
                vol: 100,
                addRaster: !1,
                opacity: 1,
                quality: "default",
                mute: !1,
                loop: !0,
                showControls: !1,
                showAnnotations: !1,
                printUrl: !0,
                stopMovieOnClick: !1,
                realfullscreen: !0,
                onReady: function() {},
                onStateChange: function() {},
                onPlaybackQualityChange: function() {},
                onError: function() {}
            },
            controls: {
                play: "P",
                pause: "p",
                mute: "M",
                unmute: "A",
                onlyYT: "O",
                showSite: "R",
                ytLogo: "Y"
            },
            rasterImg: "images/raster.png",
            rasterImgRetina: "images/raster@2x.png",
            locationProtocol: location.protocol != "file:" ? location.protocol : "http:",
            buildPlayer: function(i) {
                return this.each(function() {
                    var YTPlayer = this,
                        $YTPlayer = n(YTPlayer),
                        property, canGoFullscreen, playerID, videoID, playerBox, overlay, retina, wrapper, tag, firstScriptTag;
                    YTPlayer.loop = 0;
                    YTPlayer.opt = {};
                    property = {};
                    $YTPlayer.addClass("mb_YTVPlayer");
                    n.metadata && (n.metadata.setType("class"), property = $YTPlayer.metadata());
                    n.isEmptyObject(property) && (property = $YTPlayer.data("property") && typeof $YTPlayer.data("property") == "string" ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property"));
                    n.extend(YTPlayer.opt, n.mbYTPlayer.defaults, i, property);
                    canGoFullscreen = !(n.browser.msie || n.browser.opera || self.location.href != top.location.href);
                    canGoFullscreen || (YTPlayer.opt.realfullscreen = !1);
                    $YTPlayer.attr("id") || $YTPlayer.attr("id", "id_" + (new Date).getTime());
                    YTPlayer.opt.id = YTPlayer.id;
                    YTPlayer.isAlone = !1;
                    YTPlayer.opt.isBgndMovie && (YTPlayer.opt.containment = "body");
                    YTPlayer.opt.isBgndMovie && YTPlayer.opt.isBgndMovie.mute != undefined && (YTPlayer.opt.mute = YTPlayer.opt.isBgndMovie.mute);
                    YTPlayer.opt.videoURL || (YTPlayer.opt.videoURL = $YTPlayer.attr("href"));
                    playerID = "mbYTP_" + YTPlayer.id;
                    videoID = this.opt.videoURL ? this.opt.videoURL.getVideoID() : $YTPlayer.attr("href") ? $YTPlayer.attr("href").getVideoID() : !1;
                    YTPlayer.videoID = videoID;
                    YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "0" : "3";
                    var playerVars = {
                            autoplay: 0,
                            modestbranding: 1,
                            controls: 0,
                            showinfo: 0,
                            rel: 0,
                            enablejsapi: 1,
                            version: 3,
                            playerapiid: playerID,
                            origin: "*",
                            allowfullscreen: !0,
                            wmode: "transparent",
                            iv_load_policy: YTPlayer.opt.showAnnotations
                        },
                        canPlayHTML5 = !1,
                        v = document.createElement("video");
                    if (v.canPlayType && (canPlayHTML5 = !0), canPlayHTML5 && n.extend(playerVars, {
                            html5: 1
                        }), n.browser.msie && n.browser.version < 9 && (this.opt.opacity = 1), playerBox = n("<div/>").attr("id", playerID).addClass("playerBox"), overlay = n("<div/>").css({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        }).addClass("YTPOverlay"), YTPlayer.opt.containment = YTPlayer.opt.containment == "self" ? n(this) : n(YTPlayer.opt.containment), YTPlayer.isBackground = YTPlayer.opt.containment.get(0).tagName.toLowerCase() == "body", t.isDevice && YTPlayer.isBackground) {
                        $YTPlayer.hide();
                        return
                    }
                    if (YTPlayer.opt.addRaster ? (retina = window.retina || window.devicePixelRatio > 1, overlay.addClass(retina ? "raster retina" : "raster")) : overlay.removeClass("raster retina"), wrapper = n("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID), wrapper.css({
                            position: "absolute",
                            zIndex: 0,
                            minWidth: "100%",
                            minHeight: "100%",
                            left: 0,
                            top: 0,
                            overflow: "hidden",
                            opacity: 0
                        }), playerBox.css({
                            position: "absolute",
                            zIndex: 0,
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            overflow: "hidden",
                            opacity: this.opt.opacity
                        }), wrapper.append(playerBox), !YTPlayer.isBackground || !t.isInit) {
                        if (YTPlayer.opt.containment.children().each(function() {
                                n(this).css("position") == "static" && n(this).css("position", "relative")
                            }), YTPlayer.isBackground ? (n("body").css({
                                position: "relative",
                                minWidth: "100%",
                                minHeight: "100%",
                                zIndex: 1,
                                boxSizing: "border-box"
                            }), wrapper.css({
                                position: "fixed",
                                top: 0,
                                left: 0,
                                zIndex: 0
                            }), $YTPlayer.hide(), YTPlayer.opt.containment.prepend(wrapper)) : YTPlayer.opt.containment.prepend(wrapper), YTPlayer.wrapper = wrapper, playerBox.css({
                                opacity: 1
                            }), t.isDevice || (playerBox.after(overlay), YTPlayer.overlay = overlay), !YTPlayer.isBackground) overlay.on("mouseenter", function() {
                            $YTPlayer.find(".mb_YTVPBar").addClass("visible")
                        }).on("mouseleave", function() {
                            $YTPlayer.find(".mb_YTVPBar").removeClass("visible")
                        });
                        t.YTAPIReady ? setTimeout(function() {
                            n(document).trigger("YTAPIReady")
                        }, 200) : (tag = document.createElement("script"), tag.src = n.mbYTPlayer.locationProtocol + "//www.youtube.com/player_api", tag.id = "YTAPI", firstScriptTag = document.getElementsByTagName("script")[0], firstScriptTag.parentNode.insertBefore(tag, firstScriptTag));
                        n(document).on("YTAPIReady", function() {
                            if ((!YTPlayer.isBackground || !t.isInit) && !YTPlayer.opt.isInit) {
                                if (YTPlayer.isBackground && YTPlayer.opt.stopMovieOnClick) n(document).off("mousedown.ytplayer").on("mousedown,.ytplayer", function(t) {
                                    var i = n(t.target);
                                    (i.is("a") || i.parents().is("a")) && $YTPlayer.pauseYTP()
                                });
                                YTPlayer.isBackground && (t.isInit = !0);
                                YTPlayer.opt.isInit = !0;
                                YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100;
                                n.mbYTPlayer.getDataFromFeed(YTPlayer.videoID, YTPlayer);
                                n(document).on("getVideoInfo_" + YTPlayer.opt.id, function() {
                                    if (t.isDevice && !YTPlayer.isBackground) {
                                        new YT.Player(playerID, {
                                            height: "100%",
                                            width: "100%",
                                            videoId: YTPlayer.videoID,
                                            events: {
                                                onReady: function() {
                                                    $YTPlayer.optimizeDisplay();
                                                    playerBox.css({
                                                        opacity: 1
                                                    });
                                                    YTPlayer.wrapper.css({
                                                        opacity: 1
                                                    });
                                                    $YTPlayer.optimizeDisplay()
                                                },
                                                onStateChange: function() {}
                                            }
                                        });
                                        return
                                    }
                                    new YT.Player(playerID, {
                                        videoId: YTPlayer.videoID.toString(),
                                        playerVars: playerVars,
                                        events: {
                                            onReady: function(t) {
                                                if (YTPlayer.player = t.target, !YTPlayer.isReady) {
                                                    YTPlayer.isReady = !0;
                                                    YTPlayer.playerEl = YTPlayer.player.getIframe();
                                                    $YTPlayer.optimizeDisplay();
                                                    YTPlayer.videoID = videoID;
                                                    n(window).on("resize.YTP", function() {
                                                        $YTPlayer.optimizeDisplay()
                                                    });
                                                    if (YTPlayer.opt.showControls && n(YTPlayer).buildYTPControls(), YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), YTPlayer.opt.startAt > 0 && YTPlayer.player.seekTo(parseFloat(YTPlayer.opt.startAt), !0), YTPlayer.opt.autoPlay ? ($YTPlayer.playYTP(), YTPlayer.player.setVolume(YTPlayer.opt.vol), YTPlayer.opt.mute ? n(YTPlayer).muteYTPVolume() : n(YTPlayer).unmuteYTPVolume()) : (YTPlayer.player.pauseVideo(), YTPlayer.checkForStartAt = setInterval(function() {
                                                            YTPlayer.player.getCurrentTime() >= YTPlayer.opt.startAt && (clearInterval(YTPlayer.checkForStartAt), YTPlayer.opt.mute ? n(YTPlayer).muteYTPVolume() : n(YTPlayer).unmuteYTPVolume())
                                                        }, 1)), typeof YTPlayer.opt.onReady == "function") YTPlayer.opt.onReady($YTPlayer);
                                                    n.mbYTPlayer.checkForState(YTPlayer)
                                                }
                                            },
                                            onStateChange: function(t) {
                                                var i, f;
                                                if (typeof t.target.getPlayerState == "function") {
                                                    if (i = t.target.getPlayerState(), typeof YTPlayer.opt.onStateChange == "function") YTPlayer.opt.onStateChange($YTPlayer, i);
                                                    var e = n(YTPlayer.playerEl),
                                                        r = n("#controlBar_" + YTPlayer.id),
                                                        u = YTPlayer.opt;
                                                    if (i == 0) {
                                                        if (YTPlayer.state == i) return;
                                                        YTPlayer.state = i;
                                                        YTPlayer.player.pauseVideo();
                                                        f = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
                                                        u.loop ? (YTPlayer.wrapper.css({
                                                            opacity: 0
                                                        }), $YTPlayer.playYTP(), YTPlayer.player.seekTo(f, !0)) : YTPlayer.isBackground || (YTPlayer.player.seekTo(f, !0), $YTPlayer.playYTP(), setTimeout(function() {
                                                            $YTPlayer.pauseYTP()
                                                        }, 10));
                                                        !u.loop && YTPlayer.isBackground ? YTPlayer.wrapper.CSSAnimate({
                                                            opacity: 0
                                                        }, 2e3) : u.loop && (YTPlayer.wrapper.css({
                                                            opacity: 0
                                                        }), YTPlayer.loop++);
                                                        r.find(".mb_YTVPPlaypause").html(n.mbYTPlayer.controls.play);
                                                        n(YTPlayer).trigger("YTPEnd")
                                                    }
                                                    if (i == 3) {
                                                        if (YTPlayer.state == i) return;
                                                        YTPlayer.state = i;
                                                        r.find(".mb_YTVPPlaypause").html(n.mbYTPlayer.controls.play);
                                                        n(YTPlayer).trigger("YTPBuffering")
                                                    }
                                                    if (i == -1) {
                                                        if (YTPlayer.state == i) return;
                                                        YTPlayer.state = i;
                                                        YTPlayer.wrapper.css({
                                                            opacity: 0
                                                        });
                                                        n(YTPlayer).trigger("YTPUnstarted")
                                                    }
                                                    if (i == 1) {
                                                        if (YTPlayer.state == i) return;
                                                        YTPlayer.state = i;
                                                        YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality);
                                                        YTPlayer.opt.mute && ($YTPlayer.muteYTPVolume(), YTPlayer.opt.mute = !1);
                                                        YTPlayer.opt.autoPlay && YTPlayer.loop == 0 ? YTPlayer.wrapper.CSSAnimate({
                                                            opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
                                                        }, 2e3) : YTPlayer.isBackground ? setTimeout(function() {
                                                            n(YTPlayer.playerEl).CSSAnimate({
                                                                opacity: 1
                                                            }, 2e3);
                                                            YTPlayer.wrapper.CSSAnimate({
                                                                opacity: YTPlayer.opt.opacity
                                                            }, 2e3)
                                                        }, 1e3) : (YTPlayer.wrapper.css({
                                                            opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
                                                        }), $YTPlayer.css({
                                                            background: "rgba(0,0,0,0.5)"
                                                        }));
                                                        r.find(".mb_YTVPPlaypause").html(n.mbYTPlayer.controls.pause);
                                                        n(YTPlayer).trigger("YTPStart");
                                                        typeof _gaq != "undefined" && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.title || YTPlayer.videoID.toString()])
                                                    }
                                                    if (i == 2) {
                                                        if (YTPlayer.state == i) return;
                                                        YTPlayer.state = i;
                                                        r.find(".mb_YTVPPlaypause").html(n.mbYTPlayer.controls.play);
                                                        n(YTPlayer).trigger("YTPPause")
                                                    }
                                                }
                                            },
                                            onPlaybackQualityChange: function() {
                                                if (typeof YTPlayer.opt.onPlaybackQualityChange == "function") YTPlayer.opt.onPlaybackQualityChange($YTPlayer)
                                            },
                                            onError: function(t) {
                                                if (t.data == 2 && YTPlayer.isPlayList && n(YTPlayer).playNext(), typeof YTPlayer.opt.onError == "function") YTPlayer.opt.onError($YTPlayer, t)
                                            }
                                        }
                                    })
                                })
                            }
                        })
                    }
                })
            },
            getDataFromFeed: function(t, i) {
                i.videoID = t;
                n.browser.msie ? (i.opt.ratio == "auto" ? i.opt.ratio = "16/9" : i.opt.ratio, i.isInit || (i.isInit = !0, setTimeout(function() {
                    n(document).trigger("getVideoInfo_" + i.opt.id)
                }, 100)), n(i).trigger("YTPChanged")) : (n.getJSON(n.mbYTPlayer.locationProtocol + "//gdata.youtube.com/feeds/api/videos/" + t + "?v=2&alt=jsonc", function(t) {
                    var r, u;
                    i.dataReceived = !0;
                    r = t.data;
                    i.title = r.title;
                    i.videoData = r;
                    i.opt.ratio == "auto" && (i.opt.ratio = r.aspectRatio && r.aspectRatio === "widescreen" ? "16/9" : "4/3");
                    i.isInit || (i.isInit = !0, i.isBackground || (u = i.videoData.thumbnail.hqDefault, n(i).css({
                        background: "rgba(0,0,0,0.5) url(" + u + ") center center",
                        backgroundSize: "cover"
                    })), n(document).trigger("getVideoInfo_" + i.opt.id));
                    n(i).trigger("YTPChanged")
                }), setTimeout(function() {
                    i.dataReceived || i.isInit || (i.isInit = !0, n(document).trigger("getVideoInfo_" + i.opt.id))
                }, 2500))
            },
            getVideoID: function() {
                var n = this.get(0);
                return n.videoID || !1
            },
            setVideoQuality: function(n) {
                var t = this.get(0);
                t.player.setPlaybackQuality(n)
            },
            YTPlaylist: function(t, i, r) {
                var u = this.get(0);
                if (u.isPlayList = !0, i && (t = n.shuffle(t)), u.videoID || (u.videos = t, u.videoCounter = 0, u.videoLength = t.length, n(u).data("property", t[0]), n(u).mb_YTPlayer()), typeof r == "function") n(u).on("YTPChanged", function() {
                    r(u)
                });
                n(u).on("YTPEnd", function() {
                    n(u).playNext()
                })
            },
            playNext: function() {
                var t = this.get(0);
                t.videoCounter++;
                t.videoCounter >= t.videoLength && (t.videoCounter = 0);
                n(t.playerEl).css({
                    opacity: 0
                });
                n(t).changeMovie(t.videos[t.videoCounter])
            },
            playPrev: function() {
                var t = this.get(0);
                t.videoCounter--;
                t.videoCounter <= 0 && (t.videoCounter = t.videoLength);
                n(t.playerEl).css({
                    opacity: 0
                });
                n(t).changeMovie(t.videos[t.videoCounter])
            },
            changeMovie: function(t) {
                var i = this.get(0),
                    r = i.opt,
                    u, f;
                t && n.extend(r, t);
                i.videoID = r.videoURL.getVideoID();
                n(i).pauseYTP();
                u = n.browser.msie ? 1e3 : 0;
                n(i).getPlayer().cueVideoByUrl(encodeURI(n.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + i.videoID), 5, i.opt.quality);
                setTimeout(function() {
                    n(i).playYTP();
                    n(i).one("YTPStart", function() {
                        n(i.playerEl).CSSAnimate({
                            opacity: 1
                        }, 2e3)
                    })
                }, u);
                i.opt.mute ? n(i).muteYTPVolume() : n(i).unmuteYTPVolume();
                i.opt.addRaster ? (f = window.retina || window.devicePixelRatio > 1, i.overlay.addClass(f ? "raster retina" : "raster")) : (i.overlay.removeClass("raster"), i.overlay.removeClass("retina"));
                n("#controlBar_" + i.id).remove();
                i.opt.showControls && n(i).buildYTPControls();
                n.mbYTPlayer.getDataFromFeed(i.videoID, i);
                n(i).optimizeDisplay();
                n.mbYTPlayer.checkForState(i)
            },
            getPlayer: function() {
                return n(this).get(0).player
            },
            playerDestroy: function() {
                var i = this.get(0),
                    r;
                t.YTAPIReady = !1;
                t.isInit = !1;
                i.opt.isInit = !1;
                i.videoID = null;
                r = i.wrapper;
                r.remove();
                n("#controlBar_" + i.id).remove()
            },
            fullscreen: function(t) {
                function r(n, t) {
                    for (var r = ["webkit", "moz", "ms", "o", ""], u = 0, i, f; u < r.length && !n[i];) {
                        if (i = t, r[u] == "" && (i = i.substr(0, 1).toLowerCase() + i.substr(1)), i = r[u] + i, f = typeof n[i], f != "undefined") return r = [r[u]], f == "function" ? n[i]() : n[i];
                        u++
                    }
                }

                function s(n) {
                    r(n, "RequestFullScreen")
                }

                function h() {
                    (r(document, "FullScreen") || r(document, "IsFullScreen")) && r(document, "CancelFullScreen")
                }
                var i = this.get(0),
                    u = n("#controlBar_" + i.id),
                    e = u.find(".mb_OnlyYT"),
                    f = n(i.wrapper),
                    o;
                if (t) {
                    o = n.browser.mozilla ? "mozfullscreenchange" : n.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                    n(document).off(o);
                    n(document).on(o, function() {
                        var t = r(document, "IsFullScreen") || r(document, "FullScreen");
                        t ? n(i).setVideoQuality("default") : (n(i).removeClass("fullscreen"), i.isAlone = !1, e.html(n.mbYTPlayer.controls.onlyYT), n(i).setVideoQuality(i.opt.quality), i.isBackground ? n("body").after(u) : i.wrapper.before(u), n(window).resize())
                    })
                }
                i.isAlone ? (t ? h() : f.CSSAnimate({
                    opacity: i.opt.opacity
                }, 500), n(i).trigger("YTPFullScreenEnd"), f.css({
                    zIndex: -1
                }), e.html(n.mbYTPlayer.controls.onlyYT), i.isAlone = !1) : (i.player.getPlayerState() != 1 && i.player.getPlayerState() != 2 && n(i).playYTP(), t ? (i.wrapper.append(u), n(i).addClass("fullscreen"), s(f.get(0))) : f.css({
                    zIndex: 1e4
                }).CSSAnimate({
                    opacity: 1
                }, 1e3, 0), n(i).trigger("YTPFullScreenStart"), e.html(n.mbYTPlayer.controls.showSite), i.isAlone = !0)
            },
            playYTP: function() {
                var t = this.get(0),
                    i = n("#controlBar_" + t.id),
                    r = i.find(".mb_YTVPPlaypause");
                r.html(n.mbYTPlayer.controls.pause);
                t.player.playVideo();
                t.wrapper.CSSAnimate({
                    opacity: t.opt.opacity
                }, 2e3);
                n(t).on("YTPStart", function() {
                    n(t).css("background", "none")
                })
            },
            toggleLoops: function() {
                var t = this.get(0),
                    n = t.opt;
                n.loop == 1 ? n.loop = 0 : (n.startAt ? t.player.seekTo(n.startAt) : t.player.playVideo(), n.loop = 1)
            },
            stopYTP: function() {
                var t = this.get(0),
                    i = n("#controlBar_" + t.id),
                    r = i.find(".mb_YTVPPlaypause");
                r.html(n.mbYTPlayer.controls.play);
                t.player.stopVideo()
            },
            pauseYTP: function() {
                var t = this.get(0),
                    u = t.opt,
                    i = n("#controlBar_" + t.id),
                    r = i.find(".mb_YTVPPlaypause");
                r.html(n.mbYTPlayer.controls.play);
                t.player.pauseVideo()
            },
            seekToYTP: function(n) {
                var t = this.get(0);
                t.player.seekTo(n, !0)
            },
            setYTPVolume: function(t) {
                var i = this.get(0);
                t || i.opt.vol || player.getVolume() != 0 ? !t && i.player.getVolume() > 0 || t && i.player.getVolume() == t ? n(i).muteYTPVolume() : i.opt.vol = t : n(i).unmuteYTPVolume();
                i.player.setVolume(i.opt.vol)
            },
            muteYTPVolume: function() {
                var t = this.get(0),
                    i, r;
                t.opt.vol = t.player.getVolume() || 50;
                t.player.mute();
                t.player.setVolume(0);
                i = n("#controlBar_" + t.id);
                r = i.find(".mb_YTVPMuteUnmute");
                r.html(n.mbYTPlayer.controls.unmute)
            },
            unmuteYTPVolume: function() {
                var t = this.get(0),
                    i, r;
                t.player.unMute();
                t.player.setVolume(t.opt.vol);
                i = n("#controlBar_" + t.id);
                r = i.find(".mb_YTVPMuteUnmute");
                r.html(n.mbYTPlayer.controls.mute)
            },
            manageYTPProgress: function() {
                var t = this.get(0),
                    i = n("#controlBar_" + t.id),
                    f = i.find(".mb_YTVPProgress"),
                    e = i.find(".mb_YTVPLoaded"),
                    o = i.find(".mb_YTVTime"),
                    s = f.outerWidth(),
                    r = Math.floor(t.player.getCurrentTime()),
                    u = Math.floor(t.player.getDuration()),
                    h = r * s / u,
                    c = t.player.getVideoLoadedFraction() * 100;
                return e.css({
                    left: 0,
                    width: c + "%"
                }), o.css({
                    left: 0,
                    width: h
                }), {
                    totalTime: u,
                    currentTime: r
                }
            },
            buildYTPControls: function() {
                var t = this.get(0),
                    u = t.opt;
                if (!n("#controlBar_" + t.id).length) {
                    var i = n("<span/>").attr("id", "controlBar_" + t.id).addClass("mb_YTVPBar").css({
                            whiteSpace: "noWrap",
                            position: t.isBackground ? "fixed" : "absolute",
                            zIndex: t.isBackground ? 1e4 : 1e3
                        }).hide(),
                        f = n("<div/>").addClass("buttonBar"),
                        s = n("<span>" + n.mbYTPlayer.controls.play + "<\/span>").addClass("mb_YTVPPlaypause ytpicon").click(function() {
                            t.player.getPlayerState() == 1 ? n(t).pauseYTP() : n(t).playYTP()
                        }),
                        h = n("<span>" + n.mbYTPlayer.controls.mute + "<\/span>").addClass("mb_YTVPMuteUnmute ytpicon").click(function() {
                            t.player.getVolume() == 0 ? n(t).unmuteYTPVolume() : n(t).muteYTPVolume()
                        }),
                        c = n("<span/>").addClass("mb_YTVPTime"),
                        e = u.videoURL;
                    e.indexOf("http") < 0 && (e = n.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + u.videoURL);
                    var l = n("<span/>").html(n.mbYTPlayer.controls.ytLogo).addClass("mb_YTVPUrl ytpicon").attr("title", "view on YouTube").on("click", function() {
                            window.open(e, "viewOnYT")
                        }),
                        a = n("<span/>").html(n.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function() {
                            n(t).fullscreen(u.realfullscreen)
                        }),
                        o = n("<div/>").addClass("mb_YTVPProgress").css("position", "absolute").click(function(n) {
                            r.css({
                                width: n.clientX - r.offset().left
                            });
                            t.timeW = n.clientX - r.offset().left;
                            i.find(".mb_YTVPLoaded").css({
                                width: 0
                            });
                            var u = Math.floor(t.player.getDuration());
                            t.goto = r.outerWidth() * u / o.outerWidth();
                            t.player.seekTo(parseFloat(t.goto), !0);
                            i.find(".mb_YTVPLoaded").css({
                                width: 0
                            })
                        }),
                        v = n("<div/>").addClass("mb_YTVPLoaded").css("position", "absolute"),
                        r = n("<div/>").addClass("mb_YTVTime").css("position", "absolute");
                    o.append(v).append(r);
                    f.append(s).append(h).append(c);
                    u.printUrl && f.append(l);
                    (t.isBackground || t.opt.realfullscreen && !t.isBackground) && f.append(a);
                    i.append(f).append(o);
                    t.isBackground ? n("body").after(i) : (i.addClass("inlinePlayer"), t.wrapper.before(i));
                    i.fadeIn()
                }
            },
            checkForState: function(t) {
                var r = n("#controlBar_" + t.id),
                    u = t.opt,
                    i = t.opt.startAt ? t.opt.startAt : 1;
                t.getState = setInterval(function() {
                    var f = n(t).manageYTPProgress();
                    r.find(".mb_YTVPTime").html(n.mbYTPlayer.formatTime(f.currentTime) + " / " + n.mbYTPlayer.formatTime(f.totalTime));
                    parseFloat(t.player.getDuration() - 3) < t.player.getCurrentTime() && t.player.getPlayerState() == 1 && !t.isPlayList && (u.loop ? t.player.seekTo(i) : (t.player.pauseVideo(), t.wrapper.CSSAnimate({
                        opacity: 0
                    }, 2e3, function() {
                        if (t.player.seekTo(i, !0), !t.isBackground) {
                            var r = t.videoData.thumbnail.hqDefault;
                            n(t).css({
                                background: "rgba(0,0,0,0.5) url(" + r + ") center center",
                                backgroundSize: "cover"
                            })
                        }
                    })), n(t).trigger("YTPEnd"))
                }, 1)
            },
            formatTime: function(n) {
                var t = Math.floor(n / 60),
                    i = Math.floor(n - 60 * t);
                return (t < 9 ? "0" + t : t) + " : " + (i < 9 ? "0" + i : i)
            }
        };
        n.fn.toggleVolume = function() {
            var t = this.get(0);
            if (t) return t.player.isMuted() ? (n(t).unmuteYTPVolume(), !0) : (n(t).muteYTPVolume(), !1)
        };
        n.fn.optimizeDisplay = function() {
            var u = this.get(0),
                f = u.opt,
                o = n(u.playerEl),
                i = {},
                e = u.isBackground ? n(window) : f.containment,
                r, t;
            i.width = e.width();
            i.height = e.height();
            r = 24;
            t = {};
            t.width = i.width + i.width * r / 100;
            t.height = f.ratio == "16/9" ? Math.ceil(9 * i.width / 16) : Math.ceil(3 * i.width / 4);
            t.marginTop = -((t.height - i.height) / 2);
            t.marginLeft = -(i.width * (r / 2) / 100);
            t.height < i.height && (t.height = i.height + i.height * r / 100, t.width = f.ratio == "16/9" ? Math.floor(16 * i.height / 9) : Math.floor(4 * i.height / 3), t.marginTop = -(i.height * (r / 2) / 100), t.marginLeft = -((t.width - i.width) / 2));
            o.css({
                width: t.width,
                height: t.height,
                marginTop: t.marginTop,
                marginLeft: t.marginLeft
            })
        };
        n.shuffle = function(n) {
            for (var t = n.slice(), u = t.length, i = u, r, f; i--;) r = parseInt(Math.random() * u), f = t[i], t[i] = t[r], t[r] = f;
            return t
        };
        n.fn.mb_YTPlayer = n.mbYTPlayer.buildPlayer;
        n.fn.YTPlaylist = n.mbYTPlayer.YTPlaylist;
        n.fn.playNext = n.mbYTPlayer.playNext;
        n.fn.playPrev = n.mbYTPlayer.playPrev;
        n.fn.changeMovie = n.mbYTPlayer.changeMovie;
        n.fn.getVideoID = n.mbYTPlayer.getVideoID;
        n.fn.getPlayer = n.mbYTPlayer.getPlayer;
        n.fn.playerDestroy = n.mbYTPlayer.playerDestroy;
        n.fn.fullscreen = n.mbYTPlayer.fullscreen;
        n.fn.buildYTPControls = n.mbYTPlayer.buildYTPControls;
        n.fn.playYTP = n.mbYTPlayer.playYTP;
        n.fn.toggleLoops = n.mbYTPlayer.toggleLoops;
        n.fn.stopYTP = n.mbYTPlayer.stopYTP;
        n.fn.pauseYTP = n.mbYTPlayer.pauseYTP;
        n.fn.seekToYTP = n.mbYTPlayer.seekToYTP;
        n.fn.muteYTPVolume = n.mbYTPlayer.muteYTPVolume;
        n.fn.unmuteYTPVolume = n.mbYTPlayer.unmuteYTPVolume;
        n.fn.setYTPVolume = n.mbYTPlayer.setYTPVolume;
        n.fn.setVideoQuality = n.mbYTPlayer.setVideoQuality;
        n.fn.manageYTPProgress = n.mbYTPlayer.manageYTPProgress
    }(jQuery, ytp);
! function(n, t) {
    "use strict";

    function f(n) {
        var r, t, i;
        for (n = n || {}, r = 1; r < arguments.length; r++)
            if (t = arguments[r], t)
                for (i in t) t.hasOwnProperty(i) && ("object" == typeof t[i] ? deepExtend(n[i], t[i]) : n[i] = t[i]);
        return n
    }

    function u(u, e) {
        function ft() {
            var f, i, r;
            if (d) {
                for (s = t.createElement("canvas"), s.className = "pg-canvas", s.style.display = "block", u.insertBefore(s, u.firstChild), h = s.getContext("2d"), b(), f = Math.round(s.width * s.height / e.density), i = 0; f > i; i++) r = new c, r.setStackPos(i), o.push(r);
                n.addEventListener("resize", function() {
                    et()
                }, !1);
                t.addEventListener("mousemove", function(n) {
                    g = n.pageX;
                    nt = n.pageY
                }, !1);
                it && !tt && n.addEventListener("deviceorientation", function() {
                    ut = Math.min(Math.max(-event.beta, -30), 30);
                    rt = Math.min(Math.max(-event.gamma, -30), 30)
                }, !0);
                l();
                k("onInit")
            }
        }

        function b() {
            s.width = u.offsetWidth;
            s.height = u.offsetHeight;
            h.fillStyle = e.dotColor;
            h.strokeStyle = e.lineColor;
            h.lineWidth = e.lineWidth
        }

        function l() {
            var t;
            if (d) {
                for (a = n.innerWidth, v = n.innerHeight, h.clearRect(0, 0, s.width, s.height), t = 0; t < o.length; t++) o[t].updatePosition();
                for (t = 0; t < o.length; t++) o[t].draw();
                w || (lt = requestAnimationFrame(l))
            }
        }

        function et() {
            var t, i;
            b();
            for (var r = u.offsetWidth, f = u.offsetHeight, n = o.length - 1; n >= 0; n--)(o[n].position.x > r || o[n].position.y > f) && o.splice(n, 1);
            if (t = Math.round(s.width * s.height / e.density), t > o.length)
                for (; t > o.length;) i = new c, o.push(i);
            else t < o.length && o.splice(t);
            for (n = o.length - 1; n >= 0; n--) o[n].setStackPos(n)
        }

        function ot() {
            w = !0
        }

        function st() {
            w = !1;
            l()
        }

        function c() {
            switch (this.stackPos, this.active = !0, this.layer = Math.ceil(3 * Math.random()), this.parallaxOffsetX = 0, this.parallaxOffsetY = 0, this.position = {
                x: Math.ceil(Math.random() * s.width),
                y: Math.ceil(Math.random() * s.height)
            }, this.speed = {}, e.directionX) {
                case "left":
                    this.speed.x = +(-e.maxSpeedX + Math.random() * e.maxSpeedX - e.minSpeedX).toFixed(2);
                    break;
                case "right":
                    this.speed.x = +(Math.random() * e.maxSpeedX + e.minSpeedX).toFixed(2);
                    break;
                default:
                    this.speed.x = +(-e.maxSpeedX / 2 + Math.random() * e.maxSpeedX).toFixed(2);
                    this.speed.x += this.speed.x > 0 ? e.minSpeedX : -e.minSpeedX
            }
            switch (e.directionY) {
                case "up":
                    this.speed.y = +(-e.maxSpeedY + Math.random() * e.maxSpeedY - e.minSpeedY).toFixed(2);
                    break;
                case "down":
                    this.speed.y = +(Math.random() * e.maxSpeedY + e.minSpeedY).toFixed(2);
                    break;
                default:
                    this.speed.y = +(-e.maxSpeedY / 2 + Math.random() * e.maxSpeedY).toFixed(2);
                    this.speed.x += this.speed.y > 0 ? e.minSpeedY : -e.minSpeedY
            }
        }

        function ht(n, t) {
            return t ? void(e[n] = t) : e[n]
        }

        function ct() {
            console.log("destroy");
            s.parentNode.removeChild(s);
            k("onDestroy");
            r && r(u).removeData("plugin_" + i)
        }

        function k(n) {
            void 0 !== e[n] && e[n].call(u)
        }
        var s, h, lt, a, v, y, p, d = !!t.createElement("canvas").getContext,
            o = [],
            g = 0,
            nt = 0,
            tt = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),
            it = !!n.DeviceOrientationEvent,
            rt = 0,
            ut = 0,
            w = !1;
        return e = f({}, n[i].defaults, e), c.prototype.draw = function() {
            var t;
            for (h.beginPath(), h.arc(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY, e.particleRadius / 2, 0, 2 * Math.PI, !0), h.closePath(), h.fill(), h.beginPath(), t = o.length - 1; t > this.stackPos; t--) {
                var n = o[t],
                    i = this.position.x - n.position.x,
                    r = this.position.y - n.position.y,
                    u = Math.sqrt(i * i + r * r).toFixed(2);
                u < e.proximity && (h.moveTo(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY), e.curvedLines ? h.quadraticCurveTo(Math.max(n.position.x, n.position.x), Math.min(n.position.y, n.position.y), n.position.x + n.parallaxOffsetX, n.position.y + n.parallaxOffsetY) : h.lineTo(n.position.x + n.parallaxOffsetX, n.position.y + n.parallaxOffsetY))
            }
            h.stroke();
            h.closePath()
        }, c.prototype.updatePosition = function() {
            var i, r, n, t;
            e.parallax && (it && !tt ? (i = (+a) / 60, y = (rt - -30) * i + 0, r = (+v) / 60, p = (ut - -30) * r + 0) : (y = g, p = nt), this.parallaxTargX = (y - a / 2) / (e.parallaxMultiplier * this.layer), this.parallaxOffsetX += (this.parallaxTargX - this.parallaxOffsetX) / 10, this.parallaxTargY = (p - v / 2) / (e.parallaxMultiplier * this.layer), this.parallaxOffsetY += (this.parallaxTargY - this.parallaxOffsetY) / 10);
            n = u.offsetWidth;
            t = u.offsetHeight;
            switch (e.directionX) {
                case "left":
                    this.position.x + this.speed.x + this.parallaxOffsetX < 0 && (this.position.x = n - this.parallaxOffsetX);
                    break;
                case "right":
                    this.position.x + this.speed.x + this.parallaxOffsetX > n && (this.position.x = 0 - this.parallaxOffsetX);
                    break;
                default:
                    (this.position.x + this.speed.x + this.parallaxOffsetX > n || this.position.x + this.speed.x + this.parallaxOffsetX < 0) && (this.speed.x = -this.speed.x)
            }
            switch (e.directionY) {
                case "up":
                    this.position.y + this.speed.y + this.parallaxOffsetY < 0 && (this.position.y = t - this.parallaxOffsetY);
                    break;
                case "down":
                    this.position.y + this.speed.y + this.parallaxOffsetY > t && (this.position.y = 0 - this.parallaxOffsetY);
                    break;
                default:
                    (this.position.y + this.speed.y + this.parallaxOffsetY > t || this.position.y + this.speed.y + this.parallaxOffsetY < 0) && (this.speed.y = -this.speed.y)
            }
            this.position.x += this.speed.x;
            this.position.y += this.speed.y
        }, c.prototype.setStackPos = function(n) {
            this.stackPos = n
        }, ft(), {
            option: ht,
            destroy: ct,
            start: st,
            pause: ot
        }
    }
    var i = "particleground",
        r = n.jQuery;
    n[i] = function(n, t) {
        return new u(n, t)
    };
    n[i].defaults = {
        minSpeedX: .1,
        maxSpeedX: .7,
        minSpeedY: .1,
        maxSpeedY: .7,
        directionX: "center",
        directionY: "center",
        density: 1e4,
        dotColor: "#666666",
        lineColor: "#9D8D8F",
        particleRadius: 7,
        lineWidth: 1,
        curvedLines: !1,
        proximity: 100,
        parallax: !0,
        parallaxMultiplier: 5,
        onInit: function() {},
        onDestroy: function() {}
    };
    r && (r.fn[i] = function(n) {
        if ("string" == typeof arguments[0]) {
            var t, f = arguments[0],
                e = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                r.data(this, "plugin_" + i) && "function" == typeof r.data(this, "plugin_" + i)[f] && (t = r.data(this, "plugin_" + i)[f].apply(this, e))
            }), void 0 !== t ? t : this
        }
        if ("object" == typeof n || !n) return this.each(function() {
            r.data(this, "plugin_" + i) || r.data(this, "plugin_" + i, new u(this, n))
        })
    })
}(window, document),
function() {
    for (var i = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(n) {
        var t = (new Date).getTime(),
            r = Math.max(0, 16 - (t - i)),
            u = window.setTimeout(function() {
                n(t + r)
            }, r);
        return i = t + r, u
    });
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(n) {
        clearTimeout(n)
    })
}();
! function(n, t, i, r) {
    function u(t, i) {
        this.settings = null;
        this.options = n.extend({}, u.Defaults, i);
        this.$element = n(t);
        this.drag = n.extend({}, o);
        this.state = n.extend({}, s);
        this.e = n.extend({}, h);
        this._plugins = {};
        this._supress = {};
        this._current = null;
        this._speed = null;
        this._coordinates = [];
        this._breakpoint = null;
        this._width = null;
        this._items = [];
        this._clones = [];
        this._mergers = [];
        this._invalidated = {};
        this._pipe = [];
        n.each(u.Plugins, n.proxy(function(n, t) {
            this._plugins[n[0].toLowerCase() + n.slice(1)] = new t(this)
        }, this));
        n.each(u.Pipe, n.proxy(function(t, i) {
            this._pipe.push({
                filter: i.filter,
                run: n.proxy(i.run, this)
            })
        }, this));
        this.setup();
        this.initialize()
    }

    function f(n) {
        if (n.touches !== r) return {
            x: n.touches[0].pageX,
            y: n.touches[0].pageY
        };
        if (n.touches === r) {
            if (n.pageX !== r) return {
                x: n.pageX,
                y: n.pageY
            };
            if (n.pageX === r) return {
                x: n.clientX,
                y: n.clientY
            }
        }
    }

    function e(n) {
        var t, r, u = i.createElement("div"),
            f = n;
        for (t in f)
            if (r = f[t], "undefined" != typeof u.style[r]) return u = null, [r, t];
        return [!1]
    }

    function c() {
        return e(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }

    function l() {
        return e(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }

    function a() {
        return e(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }

    function v() {
        return "ontouchstart" in t || !!navigator.msMaxTouchPoints
    }

    function y() {
        return t.navigator.msPointerEnabled
    }
    var o, s, h;
    o = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    };
    s = {
        isTouch: !1,
        isScrolling: !1,
        isSwiping: !1,
        direction: !1,
        inMotion: !1
    };
    h = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    };
    u.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: t,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    };
    u.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    };
    u.Plugins = {};
    u.Pipe = [{
        filter: ["width", "items", "settings"],
        run: function(n) {
            n.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var n = this._clones,
                t = this.$stage.children(".cloned");
            (t.length !== n.length || !this.settings.loop && n.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            for (var n = this._clones, t = this._items, u = this.settings.loop ? n.length - Math.max(2 * this.settings.items, 4) : 0, i = 0, r = Math.abs(u / 2); r > i; i++) u > 0 ? (this.$stage.children().eq(t.length + n.length - 1).remove(), n.pop(), this.$stage.children().eq(0).remove(), n.pop()) : (n.push(n.length / 2), this.$stage.append(t[n[n.length - 1]].clone().addClass("cloned")), n.push(t.length - 1 - (n.length - 1) / 2), this.$stage.prepend(t[n[n.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var n, t, i, u = this.settings.rtl ? 1 : -1,
                f = (this.width() / this.settings.items).toFixed(3),
                r = 0;
            for (this._coordinates = [], t = 0, i = this._clones.length + this._items.length; i > t; t++) n = this._mergers[this.relative(t)], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, r += (this.settings.autoWidth ? this._items[this.relative(t)].width() + this.settings.margin : f * n) * u, this._coordinates.push(r)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t, r, u = (this.width() / this.settings.items).toFixed(3),
                i = {
                    width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                    "padding-left": this.settings.stagePadding || "",
                    "padding-right": this.settings.stagePadding || ""
                };
            if (this.$stage.css(i), i = {
                    width: this.settings.autoWidth ? "auto" : u - this.settings.margin
                }, i[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && n.grep(this._mergers, function(n) {
                    return n > 1
                }).length > 0)
                for (t = 0, r = this._coordinates.length; r > t; t++) i.width = Math.abs(this._coordinates[t]) - Math.abs(this._coordinates[t - 1] || 0) - this.settings.margin, this.$stage.children().eq(t).css(i);
            else this.$stage.children().css(i)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            n.current && this.reset(this.$stage.children().index(n.current))
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            for (var t, i, f = this.settings.rtl ? 1 : -1, e = 2 * this.settings.stagePadding, r = this.coordinates(this.current()) + e, o = r + this.width() * f, s = [], n = 0, u = this._coordinates.length; u > n; n++) t = this._coordinates[n - 1] || 0, i = Math.abs(this._coordinates[n]) + e * f, (this.op(t, "<=", r) && this.op(t, ">", o) || this.op(i, "<", r) && this.op(i, ">", o)) && s.push(n);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass);
            this.$stage.children(":eq(" + s.join("), :eq(") + ")").addClass(this.settings.activeClass);
            this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }];
    u.prototype.initialize = function() {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
            var t, i, u;
            if (t = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : r, u = this.$element.children(i).width(), t.length && 0 >= u) return this.preloadAutoWidthImages(t), !1
        }
        this.$element.addClass("owl-loading");
        this.$stage = n("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">');
        this.$element.append(this.$stage.parent());
        this.replace(this.$element.children().not(this.$stage.parent()));
        this._width = this.$element.width();
        this.refresh();
        this.$element.removeClass("owl-loading").addClass("owl-loaded");
        this.eventsCall();
        this.internalEvents();
        this.addTriggerableEvents();
        this.trigger("initialized")
    };
    u.prototype.setup = function() {
        var u = this.viewport(),
            r = this.options.responsive,
            t = -1,
            i = null;
        r ? (n.each(r, function(n) {
            u >= n && n > t && (t = Number(n))
        }), i = n.extend({}, this.options, r[t]), delete i.responsive, i.responsiveClass && this.$element.attr("class", function(n, t) {
            return t.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + t)) : i = n.extend({}, this.options);
        (null === this.settings || this._breakpoint !== t) && (this.trigger("change", {
            property: {
                name: "settings",
                value: i
            }
        }), this._breakpoint = t, this.settings = i, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    };
    u.prototype.optionsLogic = function() {
        this.$element.toggleClass("owl-center", this.settings.center);
        this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1);
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    };
    u.prototype.prepare = function(t) {
        var i = this.trigger("prepare", {
            content: t
        });
        return i.data || (i.data = n("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(t)), this.trigger("prepared", {
            content: i.data
        }), i.data
    };
    u.prototype.update = function() {
        for (var t = 0, i = this._pipe.length, r = n.proxy(function(n) {
                return this[n]
            }, this._invalidated), u = {}; i > t;)(this._invalidated.all || n.grep(this._pipe[t].filter, r).length > 0) && this._pipe[t].run(u), t++;
        this._invalidated = {}
    };
    u.prototype.width = function(n) {
        switch (n = n || u.Width.Default) {
            case u.Width.Inner:
            case u.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    };
    u.prototype.refresh = function() {
        if (0 === this._items.length) return !1;
        (new Date).getTime();
        this.trigger("refresh");
        this.setup();
        this.optionsLogic();
        this.$stage.addClass("owl-refresh");
        this.update();
        this.$stage.removeClass("owl-refresh");
        this.state.orientation = t.orientation;
        this.watchVisibility();
        this.trigger("refreshed")
    };
    u.prototype.eventsCall = function() {
        this.e._onDragStart = n.proxy(function(n) {
            this.onDragStart(n)
        }, this);
        this.e._onDragMove = n.proxy(function(n) {
            this.onDragMove(n)
        }, this);
        this.e._onDragEnd = n.proxy(function(n) {
            this.onDragEnd(n)
        }, this);
        this.e._onResize = n.proxy(function(n) {
            this.onResize(n)
        }, this);
        this.e._transitionEnd = n.proxy(function(n) {
            this.transitionEnd(n)
        }, this);
        this.e._preventClick = n.proxy(function(n) {
            this.preventClick(n)
        }, this)
    };
    u.prototype.onThrottledResize = function() {
        t.clearTimeout(this.resizeTimer);
        this.resizeTimer = t.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    };
    u.prototype.onResize = function() {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
    };
    u.prototype.eventsRouter = function(n) {
        var t = n.type;
        "mousedown" === t || "touchstart" === t ? this.onDragStart(n) : "mousemove" === t || "touchmove" === t ? this.onDragMove(n) : "mouseup" === t || "touchend" === t ? this.onDragEnd(n) : "touchcancel" === t && this.onDragEnd(n)
    };
    u.prototype.internalEvents = function() {
        var i = (v(), y());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", n.proxy(function(n) {
            this.eventsRouter(n)
        }, this)), this.$stage.on("dragstart", function() {
            return !1
        }), this.$stage.get(0).onselectstart = function() {
            return !1
        }) : this.$element.addClass("owl-text-select-on");
        this.settings.touchDrag && !i && this.$stage.on("touchstart touchcancel", n.proxy(function(n) {
            this.eventsRouter(n)
        }, this));
        this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1);
        this.settings.responsive !== !1 && this.on(t, "resize", n.proxy(this.onThrottledResize, this))
    };
    u.prototype.onDragStart = function(r) {
        var u, e, s, o;
        if (u = r.originalEvent || r || t.event, 3 === u.which || this.state.isTouch) return !1;
        if ("mousedown" === u.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, e = f(u).x, s = f(u).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) o = this.getTransformProperty(), this.drag.offsetX = o, this.animate(o), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = e - this.drag.offsetX;
        this.drag.startY = s - this.drag.offsetY;
        this.drag.start = e - this.drag.startX;
        this.drag.targetEl = u.target || u.srcElement;
        this.drag.updatedX = this.drag.start;
        ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1);
        n(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", n.proxy(function(n) {
            this.eventsRouter(n)
        }, this))
    };
    u.prototype.onDragMove = function(n) {
        var i, e, o, s, h, u;
        this.state.isTouch && (this.state.isScrolling || (i = n.originalEvent || n || t.event, e = f(i).x, o = f(i).y, this.drag.currentX = e - this.drag.startX, this.drag.currentY = o - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (s = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), h = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), u = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, s + u), h + u)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== r ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    };
    u.prototype.onDragEnd = function(t) {
        var u, f, r;
        if (this.state.isTouch) {
            if ("mouseup" === t.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime();
            u = this.drag.endTime - this.drag.startTime;
            f = Math.abs(this.drag.distance);
            (f > 3 || u > 300) && this.removeClick(this.drag.targetEl);
            r = this.closest(this.drag.updatedX);
            this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
            this.current(r);
            this.invalidate("position");
            this.update();
            this.settings.pullDrag || this.drag.updatedX !== this.coordinates(r) || this.transitionEnd();
            this.drag.distance = 0;
            n(i).off(".owl.dragEvents")
        }
    };
    u.prototype.removeClick = function(i) {
        this.drag.targetEl = i;
        n(i).on("click.preventClick", this.e._preventClick);
        t.setTimeout(function() {
            n(i).off("click.preventClick")
        }, 300)
    };
    u.prototype.preventClick = function(t) {
        t.preventDefault ? t.preventDefault() : t.returnValue = !1;
        t.stopPropagation && t.stopPropagation();
        n(t.target).off("click.preventClick")
    };
    u.prototype.getTransformProperty = function() {
        var n, i;
        return n = t.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), n = n.replace(/matrix(3d)?\(|\)/g, "").split(","), i = 16 === n.length, i !== !0 ? n[4] : n[12]
    };
    u.prototype.closest = function(t) {
        var i = -1,
            u = 30,
            f = this.width(),
            r = this.coordinates();
        return this.settings.freeDrag || n.each(r, n.proxy(function(n, e) {
            return t > e - u && e + u > t ? i = n : this.op(t, "<", e) && this.op(t, ">", r[n + 1] || e - f) && (i = "left" === this.state.direction ? n + 1 : n), -1 === i
        }, this)), this.settings.loop || (this.op(t, ">", r[this.minimum()]) ? i = t = this.minimum() : this.op(t, "<", r[this.maximum()]) && (i = t = this.maximum())), i
    };
    u.prototype.animate = function(t) {
        this.trigger("translate");
        this.state.inMotion = this.speed() > 0;
        this.support3d ? this.$stage.css({
            transform: "translate3d(" + t + "px,0px, 0px)",
            transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({
            left: t + "px"
        }) : this.$stage.animate({
            left: t
        }, this.speed() / 1e3, this.settings.fallbackEasing, n.proxy(function() {
            this.state.inMotion && this.transitionEnd()
        }, this))
    };
    u.prototype.current = function(n) {
        if (n === r) return this._current;
        if (0 === this._items.length) return r;
        if (n = this.normalize(n), this._current !== n) {
            var t = this.trigger("change", {
                property: {
                    name: "position",
                    value: n
                }
            });
            t.data !== r && (n = this.normalize(t.data));
            this._current = n;
            this.invalidate("position");
            this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    };
    u.prototype.invalidate = function(n) {
        this._invalidated[n] = !0
    };
    u.prototype.reset = function(n) {
        n = this.normalize(n);
        n !== r && (this._speed = 0, this._current = n, this.suppress(["translate", "translated"]), this.animate(this.coordinates(n)), this.release(["translate", "translated"]))
    };
    u.prototype.normalize = function(t, i) {
        var u = i ? this._items.length : this._items.length + this._clones.length;
        return !n.isNumeric(t) || 1 > u ? r : t = this._clones.length ? (t % u + u) % u : Math.max(this.minimum(i), Math.min(this.maximum(i), t))
    };
    u.prototype.relative = function(n) {
        return n = this.normalize(n), n -= this._clones.length / 2, this.normalize(n, !0)
    };
    u.prototype.maximum = function(n) {
        var i, r, u, f = 0,
            t = this.settings;
        if (n) return this._items.length - 1;
        if (!t.loop && t.center) i = this._items.length - 1;
        else if (t.loop || t.center)
            if (t.loop || t.center) i = this._items.length + t.items;
            else {
                if (!t.autoWidth && !t.merge) throw "Can not detect maximum absolute position.";
                for (revert = t.rtl ? 1 : -1, r = this.$stage.width() - this.$element.width();
                    (u = this.coordinates(f)) && !(u * revert >= r);) i = ++f
            }
        else i = this._items.length - t.items;
        return i
    };
    u.prototype.minimum = function(n) {
        return n ? 0 : this._clones.length / 2
    };
    u.prototype.items = function(n) {
        return n === r ? this._items.slice() : (n = this.normalize(n, !0), this._items[n])
    };
    u.prototype.mergers = function(n) {
        return n === r ? this._mergers.slice() : (n = this.normalize(n, !0), this._mergers[n])
    };
    u.prototype.clones = function(t) {
        var i = this._clones.length / 2,
            f = i + this._items.length,
            u = function(n) {
                return n % 2 == 0 ? f + n / 2 : i - (n + 1) / 2
            };
        return t === r ? n.map(this._clones, function(n, t) {
            return u(t)
        }) : n.map(this._clones, function(n, i) {
            return n === t ? u(i) : null
        })
    };
    u.prototype.speed = function(n) {
        return n !== r && (this._speed = n), this._speed
    };
    u.prototype.coordinates = function(t) {
        var i = null;
        return t === r ? n.map(this._coordinates, n.proxy(function(n, t) {
            return this.coordinates(t)
        }, this)) : (this.settings.center ? (i = this._coordinates[t], i += (this.width() - i + (this._coordinates[t - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[t - 1] || 0, i)
    };
    u.prototype.duration = function(n, t, i) {
        return Math.min(Math.max(Math.abs(t - n), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    };
    u.prototype.to = function(i, r) {
        if (this.settings.loop) {
            var f = i - this.relative(this.current()),
                u = this.current(),
                e = this.current(),
                o = this.current() + f,
                s = 0 > e - o ? !0 : !1,
                h = this._clones.length + this._items.length;
            o < this.settings.items && s === !1 ? (u = e + this._items.length, this.reset(u)) : o >= h - this.settings.items && s === !0 && (u = e - this._items.length, this.reset(u));
            t.clearTimeout(this.e._goToLoop);
            this.e._goToLoop = t.setTimeout(n.proxy(function() {
                this.speed(this.duration(this.current(), u + f, r));
                this.current(u + f);
                this.update()
            }, this), 30)
        } else this.speed(this.duration(this.current(), i, r)), this.current(i), this.update()
    };
    u.prototype.next = function(n) {
        n = n || !1;
        this.to(this.relative(this.current()) + 1, n)
    };
    u.prototype.prev = function(n) {
        n = n || !1;
        this.to(this.relative(this.current()) - 1, n)
    };
    u.prototype.transitionEnd = function(n) {
        return n !== r && (n.stopPropagation(), (n.target || n.srcElement || n.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
    };
    u.prototype.viewport = function() {
        var r;
        if (this.options.responsiveBaseElement !== t) r = n(this.options.responsiveBaseElement).width();
        else if (t.innerWidth) r = t.innerWidth;
        else {
            if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
            r = i.documentElement.clientWidth
        }
        return r
    };
    u.prototype.replace = function(t) {
        this.$stage.empty();
        this._items = [];
        t && (t = t instanceof jQuery ? t : n(t));
        this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector));
        t.filter(function() {
            return 1 === this.nodeType
        }).each(n.proxy(function(n, t) {
            t = this.prepare(t);
            this.$stage.append(t);
            this._items.push(t);
            this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this));
        this.reset(n.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
        this.invalidate("items")
    };
    u.prototype.add = function(n, t) {
        t = t === r ? this._items.length : this.normalize(t, !0);
        this.trigger("add", {
            content: n,
            position: t
        });
        0 === this._items.length || t === this._items.length ? (this.$stage.append(n), this._items.push(n), this._mergers.push(1 * n.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[t].before(n), this._items.splice(t, 0, n), this._mergers.splice(t, 0, 1 * n.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1));
        this.invalidate("items");
        this.trigger("added", {
            content: n,
            position: t
        })
    };
    u.prototype.remove = function(n) {
        n = this.normalize(n, !0);
        n !== r && (this.trigger("remove", {
            content: this._items[n],
            position: n
        }), this._items[n].remove(), this._items.splice(n, 1), this._mergers.splice(n, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: n
        }))
    };
    u.prototype.addTriggerableEvents = function() {
        var t = n.proxy(function(t, i) {
            return n.proxy(function(n) {
                n.relatedTarget !== this && (this.suppress([i]), t.apply(this, [].slice.call(arguments, 1)), this.release([i]))
            }, this)
        }, this);
        n.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, n.proxy(function(n, i) {
            this.$element.on(n + ".owl.carousel", t(i, n + ".owl.carousel"))
        }, this))
    };
    u.prototype.watchVisibility = function() {
        function i(n) {
            return n.offsetWidth > 0 && n.offsetHeight > 0
        }

        function r() {
            i(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), t.clearInterval(this.e._checkVisibile))
        }
        i(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), t.clearInterval(this.e._checkVisibile), this.e._checkVisibile = t.setInterval(n.proxy(r, this), 500))
    };
    u.prototype.preloadAutoWidthImages = function(t) {
        var u, f, i, r;
        u = 0;
        f = this;
        t.each(function(e, o) {
            i = n(o);
            r = new Image;
            r.onload = function() {
                u++;
                i.attr("src", r.src);
                i.css("opacity", 1);
                u >= t.length && (f.state.imagesLoaded = !0, f.initialize())
            };
            r.src = i.attr("src") || i.attr("data-src") || i.attr("data-src-retina")
        })
    };
    u.prototype.destroy = function() {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass);
        this.settings.responsive !== !1 && n(t).off("resize.owl.carousel");
        this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var r in this._plugins) this._plugins[r].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), n(i).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
            return !1
        }));
        this.$element.off(".owl");
        this.$stage.children(".cloned").remove();
        this.e = null;
        this.$element.removeData("owlCarousel");
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$stage.unwrap()
    };
    u.prototype.op = function(n, t, i) {
        var r = this.settings.rtl;
        switch (t) {
            case "<":
                return r ? n > i : i > n;
            case ">":
                return r ? i > n : n > i;
            case ">=":
                return r ? i >= n : n >= i;
            case "<=":
                return r ? n >= i : i >= n
        }
    };
    u.prototype.on = function(n, t, i, r) {
        n.addEventListener ? n.addEventListener(t, i, r) : n.attachEvent && n.attachEvent("on" + t, i)
    };
    u.prototype.off = function(n, t, i, r) {
        n.removeEventListener ? n.removeEventListener(t, i, r) : n.detachEvent && n.detachEvent("on" + t, i)
    };
    u.prototype.trigger = function(t, i, r) {
        var e = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            f = n.camelCase(n.grep(["on", t, r], function(n) {
                return n
            }).join("-").toLowerCase()),
            u = n.Event([t, "owl", r || "carousel"].join(".").toLowerCase(), n.extend({
                relatedTarget: this
            }, e, i));
        return this._supress[t] || (n.each(this._plugins, function(n, t) {
            t.onTrigger && t.onTrigger(u)
        }), this.$element.trigger(u), this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, u)), u
    };
    u.prototype.suppress = function(t) {
        n.each(t, n.proxy(function(n, t) {
            this._supress[t] = !0
        }, this))
    };
    u.prototype.release = function(t) {
        n.each(t, n.proxy(function(n, t) {
            delete this._supress[t]
        }, this))
    };
    u.prototype.browserSupport = function() {
        if (this.support3d = a(), this.support3d) {
            this.transformVendor = l();
            this.transitionEndVendor = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"][c()];
            this.vendorName = this.transformVendor.replace(/Transform/i, "");
            this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = t.orientation
    };
    n.fn.owlCarousel = function(t) {
        return this.each(function() {
            n(this).data("owlCarousel") || n(this).data("owlCarousel", new u(this, t))
        })
    };
    n.fn.owlCarousel.Constructor = u
}(window.Zepto || window.jQuery, window, document),
function(n, t) {
    var i = function(t) {
        this._core = t;
        this._loaded = [];
        this._handlers = {
            "initialized.owl.carousel change.owl.carousel": n.proxy(function(t) {
                if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type))
                    for (var i = this._core.settings, r = i.center && Math.ceil(i.items / 2) || i.items, u = i.center && -1 * r || 0, f = (t.property && t.property.value || this._core.current()) + u, e = this._core.clones().length, o = n.proxy(function(n, t) {
                            this.load(t)
                        }, this); u++ < r;) this.load(e / 2 + this._core.relative(f)), e && n.each(this._core.clones(this._core.relative(f++)), o)
            }, this)
        };
        this._core.options = n.extend({}, i.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    i.Defaults = {
        lazyLoad: !1
    };
    i.prototype.load = function(i) {
        var r = this._core.$stage.children().eq(i),
            u = r && r.find(".owl-lazy");
        !u || n.inArray(r.get(0), this._loaded) > -1 || (u.each(n.proxy(function(i, r) {
            var e, u = n(r),
                f = t.devicePixelRatio > 1 && u.attr("data-src-retina") || u.attr("data-src");
            this._core.trigger("load", {
                element: u,
                url: f
            }, "lazy");
            u.is("img") ? u.one("load.owl.lazy", n.proxy(function() {
                u.css("opacity", 1);
                this._core.trigger("loaded", {
                    element: u,
                    url: f
                }, "lazy")
            }, this)).attr("src", f) : (e = new Image, e.onload = n.proxy(function() {
                u.css({
                    "background-image": "url(" + f + ")",
                    opacity: "1"
                });
                this._core.trigger("loaded", {
                    element: u,
                    url: f
                }, "lazy")
            }, this), e.src = f)
        }, this)), this._loaded.push(r.get(0)))
    };
    i.prototype.destroy = function() {
        var n, t;
        for (n in this.handlers) this._core.$element.off(n, this.handlers[n]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    };
    n.fn.owlCarousel.Constructor.Plugins.Lazy = i
}(window.Zepto || window.jQuery, window, document),
function(n) {
    var t = function(i) {
        this._core = i;
        this._handlers = {
            "initialized.owl.carousel": n.proxy(function() {
                this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": n.proxy(function(n) {
                this._core.settings.autoHeight && "position" == n.property.name && this.update()
            }, this),
            "loaded.owl.lazy": n.proxy(function(n) {
                this._core.settings.autoHeight && n.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        };
        this._core.options = n.extend({}, t.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    t.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    };
    t.prototype.update = function() {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    };
    t.prototype.destroy = function() {
        var n, t;
        for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    };
    n.fn.owlCarousel.Constructor.Plugins.AutoHeight = t
}(window.Zepto || window.jQuery, window, document),
function(n, t, i) {
    var r = function(t) {
        this._core = t;
        this._videos = {};
        this._playing = null;
        this._fullscreen = !1;
        this._handlers = {
            "resize.owl.carousel": n.proxy(function(n) {
                this._core.settings.video && !this.isInFullScreen() && n.preventDefault()
            }, this),
            "refresh.owl.carousel changed.owl.carousel": n.proxy(function() {
                this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": n.proxy(function(t) {
                var i = n(t.content).find(".owl-video");
                i.length && (i.css("display", "none"), this.fetch(i, n(t.content)))
            }, this)
        };
        this._core.options = n.extend({}, r.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", n.proxy(function(n) {
            this.play(n)
        }, this))
    };
    r.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    };
    r.prototype.fetch = function(n, t) {
        var u = n.attr("data-vimeo-id") ? "vimeo" : "youtube",
            i = n.attr("data-vimeo-id") || n.attr("data-youtube-id"),
            f = n.attr("data-width") || this._core.settings.videoWidth,
            e = n.attr("data-height") || this._core.settings.videoHeight,
            r = n.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if (i = r.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), i[3].indexOf("youtu") > -1) u = "youtube";
        else {
            if (!(i[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
            u = "vimeo"
        }
        i = i[6];
        this._videos[r] = {
            type: u,
            id: i,
            width: f,
            height: e
        };
        t.attr("data-video", r);
        this.thumbnail(n, this._videos[r])
    };
    r.prototype.thumbnail = function(t, i) {
        var o, s, r, c = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
            u = t.find("img"),
            f = "src",
            h = "",
            l = this._core.settings,
            e = function(n) {
                s = '<div class="owl-video-play-icon"><\/div>';
                o = l.lazyLoad ? '<div class="owl-video-tn ' + h + '" ' + f + '="' + n + '"><\/div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + n + ')"><\/div>';
                t.after(o);
                t.after(s)
            };
        return t.wrap('<div class="owl-video-wrapper"' + c + "><\/div>"), this._core.settings.lazyLoad && (f = "data-src", h = "owl-lazy"), u.length ? (e(u.attr(f)), u.remove(), !1) : void("youtube" === i.type ? (r = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", e(r)) : "vimeo" === i.type && n.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(n) {
                r = n[0].thumbnail_large;
                e(r)
            }
        }))
    };
    r.prototype.stop = function() {
        this._core.trigger("stop", null, "video");
        this._playing.find(".owl-video-frame").remove();
        this._playing.removeClass("owl-video-playing");
        this._playing = null
    };
    r.prototype.play = function(t) {
        this._core.trigger("play", null, "video");
        this._playing && this.stop();
        var r, o, s = n(t.target || t.srcElement),
            u = s.closest("." + this._core.settings.itemClass),
            i = this._videos[u.attr("data-video")],
            f = i.width || "100%",
            e = i.height || this._core.$stage.height();
        "youtube" === i.type ? r = '<iframe width="' + f + '" height="' + e + '" src="http://www.youtube.com/embed/' + i.id + "?autoplay=1&v=" + i.id + '" frameborder="0" allowfullscreen><\/iframe>' : "vimeo" === i.type && (r = '<iframe src="http://player.vimeo.com/video/' + i.id + '?autoplay=1" width="' + f + '" height="' + e + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen><\/iframe>');
        u.addClass("owl-video-playing");
        this._playing = u;
        o = n('<div style="height:' + e + "px; width:" + f + 'px" class="owl-video-frame">' + r + "<\/div>");
        s.after(o)
    };
    r.prototype.isInFullScreen = function() {
        var r = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return r && n(r).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), r && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== t.orientation ? (this._core.state.orientation = t.orientation, !1) : !0
    };
    r.prototype.destroy = function() {
        var n, t;
        this._core.$element.off("click.owl.video");
        for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    };
    n.fn.owlCarousel.Constructor.Plugins.Video = r
}(window.Zepto || window.jQuery, window, document),
function(n, t, i, r) {
    var u = function(t) {
        this.core = t;
        this.core.options = n.extend({}, u.Defaults, this.core.options);
        this.swapping = !0;
        this.previous = r;
        this.next = r;
        this.handlers = {
            "change.owl.carousel": n.proxy(function(n) {
                "position" == n.property.name && (this.previous = this.core.current(), this.next = n.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": n.proxy(function(n) {
                this.swapping = "translated" == n.type
            }, this),
            "translate.owl.carousel": n.proxy(function() {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        };
        this.core.$element.on(this.handlers)
    };
    u.Defaults = {
        animateOut: !1,
        animateIn: !1
    };
    u.prototype.swap = function() {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var t, i = n.proxy(this.clear, this),
                f = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                r = this.core.settings.animateIn,
                u = this.core.settings.animateOut;
            this.core.current() !== this.previous && (u && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), f.css({
                left: t + "px"
            }).addClass("animated owl-animated-out").addClass(u).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), r && e.addClass("animated owl-animated-in").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i))
        }
    };
    u.prototype.clear = function(t) {
        n(t.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
        this.core.transitionEnd()
    };
    u.prototype.destroy = function() {
        var n, t;
        for (n in this.handlers) this.core.$element.off(n, this.handlers[n]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    };
    n.fn.owlCarousel.Constructor.Plugins.Animate = u
}(window.Zepto || window.jQuery, window, document),
function(n, t, i) {
    var r = function(t) {
        this.core = t;
        this.core.options = n.extend({}, r.Defaults, this.core.options);
        this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": n.proxy(function() {
                this.autoplay()
            }, this),
            "play.owl.autoplay": n.proxy(function(n, t, i) {
                this.play(t, i)
            }, this),
            "stop.owl.autoplay": n.proxy(function() {
                this.stop()
            }, this),
            "mouseover.owl.autoplay": n.proxy(function() {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this),
            "mouseleave.owl.autoplay": n.proxy(function() {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        };
        this.core.$element.on(this.handlers)
    };
    r.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    };
    r.prototype.autoplay = function() {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (t.clearInterval(this.interval), this.interval = t.setInterval(n.proxy(function() {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : t.clearInterval(this.interval)
    };
    r.prototype.play = function() {
        if (i.hidden !== !0 && !this.core.state.isTouch && !this.core.state.isScrolling && !this.core.state.isSwiping && !this.core.state.inMotion) return this.core.settings.autoplay === !1 ? void t.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    };
    r.prototype.stop = function() {
        t.clearInterval(this.interval)
    };
    r.prototype.pause = function() {
        t.clearInterval(this.interval)
    };
    r.prototype.destroy = function() {
        var n, i;
        t.clearInterval(this.interval);
        for (n in this.handlers) this.core.$element.off(n, this.handlers[n]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    };
    n.fn.owlCarousel.Constructor.Plugins.autoplay = r
}(window.Zepto || window.jQuery, window, document),
function(n) {
    "use strict";
    var t = function(i) {
        this._core = i;
        this._initialized = !1;
        this._pages = [];
        this._controls = {};
        this._templates = [];
        this.$element = this._core.$element;
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        };
        this._handlers = {
            "prepared.owl.carousel": n.proxy(function(t) {
                this._core.settings.dotsData && this._templates.push(n(t.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "add.owl.carousel": n.proxy(function(t) {
                this._core.settings.dotsData && this._templates.splice(t.position, 0, n(t.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "remove.owl.carousel prepared.owl.carousel": n.proxy(function(n) {
                this._core.settings.dotsData && this._templates.splice(n.position, 1)
            }, this),
            "change.owl.carousel": n.proxy(function(n) {
                if ("position" == n.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var r = this._core.current(),
                        t = this._core.maximum(),
                        i = this._core.minimum();
                    n.data = n.property.value > t ? r >= t ? i : t : n.property.value < i ? t : n.property.value
                }
            }, this),
            "changed.owl.carousel": n.proxy(function(n) {
                "position" == n.property.name && this.draw()
            }, this),
            "refreshed.owl.carousel": n.proxy(function() {
                this._initialized || (this.initialize(), this._initialized = !0);
                this._core.trigger("refresh", null, "navigation");
                this.update();
                this.draw();
                this._core.trigger("refreshed", null, "navigation")
            }, this)
        };
        this._core.options = n.extend({}, t.Defaults, this._core.options);
        this.$element.on(this._handlers)
    };
    t.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    };
    t.prototype.initialize = function() {
        var i, r, t = this._core.settings;
        t.dotsData || (this._templates = [n("<div>").addClass(t.dotClass).append(n("<span>")).prop("outerHTML")]);
        t.navContainer && t.dotsContainer || (this._controls.$container = n("<div>").addClass(t.controlsClass).appendTo(this.$element));
        this._controls.$indicators = t.dotsContainer ? n(t.dotsContainer) : n("<div>").hide().addClass(t.dotsClass).appendTo(this._controls.$container);
        this._controls.$indicators.on("click", "div", n.proxy(function(i) {
            var r = n(i.target).parent().is(this._controls.$indicators) ? n(i.target).index() : n(i.target).parent().index();
            i.preventDefault();
            this.to(r, t.dotsSpeed)
        }, this));
        i = t.navContainer ? n(t.navContainer) : n("<div>").addClass(t.navContainerClass).prependTo(this._controls.$container);
        this._controls.$next = n("<" + t.navElement + ">");
        this._controls.$previous = this._controls.$next.clone();
        this._controls.$previous.addClass(t.navClass[0]).html(t.navText[0]).hide().prependTo(i).on("click", n.proxy(function() {
            this.prev(t.navSpeed)
        }, this));
        this._controls.$next.addClass(t.navClass[1]).html(t.navText[1]).hide().appendTo(i).on("click", n.proxy(function() {
            this.next(t.navSpeed)
        }, this));
        for (r in this._overrides) this._core[r] = n.proxy(this[r], this)
    };
    t.prototype.destroy = function() {
        var n, r, t, i;
        for (n in this._handlers) this.$element.off(n, this._handlers[n]);
        for (r in this._controls) this._controls[r].remove();
        for (i in this.overides) this._core[i] = this._overrides[i];
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    };
    t.prototype.update = function() {
        var t, i, u, n = this._core.settings,
            r = this._core.clones().length / 2,
            e = r + this._core.items().length,
            f = n.center || n.autoWidth || n.dotData ? 1 : n.dotsEach || n.items;
        if ("page" !== n.slideBy && (n.slideBy = Math.min(n.slideBy, n.items)), n.dots || "page" == n.slideBy)
            for (this._pages = [], t = r, i = 0, u = 0; e > t; t++)(i >= f || 0 === i) && (this._pages.push({
                start: t - r,
                end: t - r + f - 1
            }), i = 0, ++u), i += this._core.mergers(this._core.relative(t))
    };
    t.prototype.draw = function() {
        var i, r, u = "",
            t = this._core.settings,
            f = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!t.nav || t.loop || t.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(t.nav), this._controls.$next.toggle(t.nav), t.dots) {
            if (i = this._pages.length - this._controls.$indicators.children().length, t.dotData && 0 !== i) {
                for (r = 0; r < this._controls.$indicators.children().length; r++) u += this._templates[this._core.relative(r)];
                this._controls.$indicators.html(u)
            } else i > 0 ? (u = new Array(i + 1).join(this._templates[0]), this._controls.$indicators.append(u)) : 0 > i && this._controls.$indicators.children().slice(i).remove();
            this._controls.$indicators.find(".active").removeClass("active");
            this._controls.$indicators.children().eq(n.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(t.dots)
    };
    t.prototype.onTrigger = function(t) {
        var i = this._core.settings;
        t.page = {
            index: n.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items)
        }
    };
    t.prototype.current = function() {
        var t = this._core.relative(this._core.current());
        return n.grep(this._pages, function(n) {
            return n.start <= t && n.end >= t
        }).pop()
    };
    t.prototype.getPosition = function(t) {
        var i, r, u = this._core.settings;
        return "page" == u.slideBy ? (i = n.inArray(this.current(), this._pages), r = this._pages.length, t ? ++i : --i, i = this._pages[(i % r + r) % r].start) : (i = this._core.relative(this._core.current()), r = this._core.items().length, t ? i += u.slideBy : i -= u.slideBy), i
    };
    t.prototype.next = function(t) {
        n.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
    };
    t.prototype.prev = function(t) {
        n.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
    };
    t.prototype.to = function(t, i, r) {
        var u;
        r ? n.proxy(this._overrides.to, this._core)(t, i) : (u = this._pages.length, n.proxy(this._overrides.to, this._core)(this._pages[(t % u + u) % u].start, i))
    };
    n.fn.owlCarousel.Constructor.Plugins.Navigation = t
}(window.Zepto || window.jQuery, window, document),
function(n, t) {
    "use strict";
    var i = function(r) {
        this._core = r;
        this._hashes = {};
        this.$element = this._core.$element;
        this._handlers = {
            "initialized.owl.carousel": n.proxy(function() {
                "URLHash" == this._core.settings.startPosition && n(t).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": n.proxy(function(t) {
                var i = n(t.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[i] = t.content
            }, this)
        };
        this._core.options = n.extend({}, i.Defaults, this._core.options);
        this.$element.on(this._handlers);
        n(t).on("hashchange.owl.navigation", n.proxy(function() {
            var n = t.location.hash.substring(1),
                i = this._core.$stage.children(),
                r = this._hashes[n] && i.index(this._hashes[n]) || 0;
            return n ? void this._core.to(r, !1, !0) : !1
        }, this))
    };
    i.Defaults = {
        URLhashListener: !1
    };
    i.prototype.destroy = function() {
        var i, r;
        n(t).off("hashchange.owl.navigation");
        for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (r in Object.getOwnPropertyNames(this)) "function" != typeof this[r] && (this[r] = null)
    };
    n.fn.owlCarousel.Constructor.Plugins.Hash = i
}(window.Zepto || window.jQuery, window, document);
! function(n, t, i, r) {
    function u(t, i) {
        var e = this,
            f;
        return "object" == typeof i && (delete i.refresh, delete i.render, n.extend(this, i)), this.$element = n(t), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src")), f = (this.position + "").toLowerCase().match(/\S+/g) || [], f.length < 1 && f.push("center"), 1 == f.length && f.push(f[0]), ("top" == f[0] || "bottom" == f[0] || "left" == f[1] || "right" == f[1]) && (f = [f[1], f[0]]), this.positionX != r && (f[0] = this.positionX.toLowerCase()), this.positionY != r && (f[1] = this.positionY.toLowerCase()), e.positionX = f[0], e.positionY = f[1], "left" != this.positionX && "right" != this.positionX && (this.positionX = isNaN(parseInt(this.positionX)) ? "center" : parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (this.positionY = isNaN(parseInt(this.positionY)) ? "center" : parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/) ? (this.iosFix && !this.$element.is("img") && this.$element.css({
            backgroundImage: "url(" + this.imageSrc + ")",
            backgroundSize: "cover",
            backgroundPosition: this.position
        }), this) : navigator.userAgent.match(/(Android)/) ? (this.androidFix && !this.$element.is("img") && this.$element.css({
            backgroundImage: "url(" + this.imageSrc + ")",
            backgroundSize: "cover",
            backgroundPosition: this.position
        }), this) : (this.$mirror = n("<div />").prependTo("body"), this.$slider = n("<img />").prependTo(this.$mirror), this.$mirror.addClass("parallax-mirror").css({
            visibility: "hidden",
            zIndex: this.zIndex,
            position: "fixed",
            top: 0,
            left: 0,
            overflow: "hidden"
        }), this.$slider.addClass("parallax-slider").one("load", function() {
            e.naturalHeight && e.naturalWidth || (e.naturalHeight = this.naturalHeight || this.height || 1, e.naturalWidth = this.naturalWidth || this.width || 1);
            e.aspectRatio = e.naturalWidth / e.naturalHeight;
            u.isSetup || u.setup();
            u.sliders.push(e);
            u.isFresh = !1;
            u.requestRender()
        }), this.$slider[0].src = this.imageSrc, void((this.naturalHeight && this.naturalWidth || this.$slider[0].complete) && this.$slider.trigger("load")))
    }

    function f(r) {
        return this.each(function() {
            var f = n(this),
                e = "object" == typeof r && r;
            this == t || this == i || f.is("body") ? u.configure(e) : f.data("px.parallax") || (e = n.extend({}, f.data(), e), f.data("px.parallax", new u(this, e)));
            "string" == typeof r && u[r]()
        })
    }! function() {
        for (var r = 0, i = ["ms", "moz", "webkit", "o"], n = 0; n < i.length && !t.requestAnimationFrame; ++n) t.requestAnimationFrame = t[i[n] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[i[n] + "CancelAnimationFrame"] || t[i[n] + "CancelRequestAnimationFrame"];
        t.requestAnimationFrame || (t.requestAnimationFrame = function(n) {
            var i = (new Date).getTime(),
                u = Math.max(0, 16 - (i - r)),
                f = t.setTimeout(function() {
                    n(i + u)
                }, u);
            return r = i + u, f
        });
        t.cancelAnimationFrame || (t.cancelAnimationFrame = function(n) {
            clearTimeout(n)
        })
    }();
    n.extend(u.prototype, {
        speed: .2,
        bleed: 0,
        zIndex: -100,
        iosFix: !0,
        androidFix: !0,
        position: "center",
        overScrollFix: !1,
        refresh: function() {
            var n;
            this.boxWidth = this.$element.outerWidth();
            this.boxHeight = this.$element.outerHeight() + 2 * this.bleed;
            this.boxOffsetTop = this.$element.offset().top - this.bleed;
            this.boxOffsetLeft = this.$element.offset().left;
            this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
            var r = u.winHeight,
                e = u.docHeight,
                f = Math.min(this.boxOffsetTop, e - r),
                o = Math.max(this.boxOffsetTop + this.boxHeight - r, 0),
                i = this.boxHeight + (f - o) * (1 - this.speed) | 0,
                t = (this.boxOffsetTop - f) * (1 - this.speed) | 0;
            i * this.aspectRatio >= this.boxWidth ? (this.imageWidth = i * this.aspectRatio | 0, this.imageHeight = i, this.offsetBaseTop = t, n = this.imageWidth - this.boxWidth, this.offsetLeft = "left" == this.positionX ? 0 : "right" == this.positionX ? -n : isNaN(this.positionX) ? -n / 2 | 0 : Math.max(this.positionX, -n)) : (this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0, n = this.imageHeight - i, this.offsetBaseTop = "top" == this.positionY ? t : "bottom" == this.positionY ? t - n : isNaN(this.positionY) ? t - n / 2 | 0 : t + Math.max(this.positionY, -n))
        },
        render: function() {
            var n = u.scrollTop,
                t = u.scrollLeft,
                i = this.overScrollFix ? u.overScroll : 0,
                r = n + u.winHeight;
            this.visibility = this.boxOffsetBottom > n && this.boxOffsetTop < r ? "visible" : "hidden";
            this.mirrorTop = this.boxOffsetTop - n;
            this.mirrorLeft = this.boxOffsetLeft - t;
            this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed);
            this.$mirror.css({
                transform: "translate3d(0px, 0px, 0px)",
                visibility: this.visibility,
                top: this.mirrorTop - i,
                left: this.mirrorLeft,
                height: this.boxHeight,
                width: this.boxWidth
            });
            this.$slider.css({
                transform: "translate3d(0px, 0px, 0px)",
                position: "absolute",
                top: this.offsetTop,
                left: this.offsetLeft,
                height: this.imageHeight,
                width: this.imageWidth,
                maxWidth: "none"
            })
        }
    });
    n.extend(u, {
        scrollTop: 0,
        scrollLeft: 0,
        winHeight: 0,
        winWidth: 0,
        docHeight: 1073741824,
        docWidth: 1073741824,
        sliders: [],
        isReady: !1,
        isFresh: !1,
        isBusy: !1,
        setup: function() {
            if (!this.isReady) {
                var f = n(i),
                    r = n(t);
                r.on("resize.px.parallax load.px.parallax", function() {
                    u.winHeight = r.height();
                    u.winWidth = r.width();
                    u.docHeight = f.height();
                    u.docWidth = f.width();
                    u.isFresh = !1;
                    u.requestRender()
                }).on("scroll.px.parallax load.px.parallax", function() {
                    var n = u.docHeight - u.winHeight,
                        t = u.docWidth - u.winWidth;
                    u.scrollTop = Math.max(0, Math.min(n, r.scrollTop()));
                    u.scrollLeft = Math.max(0, Math.min(t, r.scrollLeft()));
                    u.overScroll = Math.max(r.scrollTop() - n, Math.min(r.scrollTop(), 0));
                    u.requestRender()
                });
                this.isReady = !0
            }
        },
        configure: function(t) {
            "object" == typeof t && (delete t.refresh, delete t.render, n.extend(this.prototype, t))
        },
        refresh: function() {
            n.each(this.sliders, function() {
                this.refresh()
            });
            this.isFresh = !0
        },
        render: function() {
            this.isFresh || this.refresh();
            n.each(this.sliders, function() {
                this.render()
            })
        },
        requestRender: function() {
            var n = this;
            this.isBusy || (this.isBusy = !0, t.requestAnimationFrame(function() {
                n.render();
                n.isBusy = !1
            }))
        }
    });
    var e = n.fn.parallax;
    n.fn.parallax = f;
    n.fn.parallax.Constructor = u;
    n.fn.parallax.noConflict = function() {
        return n.fn.parallax = e, this
    };
    n(i).on("ready.px.parallax.data-api", function() {
        n('[data-parallax="scroll"]').parallax()
    })
}(jQuery, window, document),
function() {
    function ni() {
        n.keyboardSupport && s("keydown", et)
    }

    function k() {
        var i, h, l, c;
        if (!b && document.body) {
            b = !0;
            var t = document.body,
                e = document.documentElement,
                f = window.innerHeight,
                a = t.scrollHeight;
            r = document.compatMode.indexOf("CSS") >= 0 ? e : t;
            u = t;
            ni();
            top != self ? w = !0 : a > f && (t.offsetHeight <= f || e.offsetHeight <= f) && (i = document.createElement("div"), i.setAttribute("id", "sscr"), i.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + r.scrollHeight + "px", document.body.appendChild(i), o = function() {
                h || (h = setTimeout(function() {
                    rt || (i.style.height = "0", i.style.height = r.scrollHeight + "px", h = null)
                }, 500))
            }, setTimeout(o, 10), s("resize", o), l = {
                attributes: !0,
                childList: !0,
                characterData: !1
            }, y = new fi(o), y.observe(t, l), r.offsetHeight <= f && (c = document.createElement("div"), c.style.clear = "both", t.appendChild(c)));
            n.fixedBackground || rt || (t.style.backgroundAttachment = "scroll", e.style.backgroundAttachment = "scroll")
        }
    }

    function ti() {
        y && y.disconnect();
        h(l, ft);
        h("mousedown", ot);
        h("keydown", et);
        h("resize", o);
        h("load", k)
    }

    function ut(t, i, r) {
        var s, e, u, h, o;
        (ii(i, r), n.accelerationMax != 1 && (s = Date.now(), e = s - g, e < n.accelerationDelta && (u = (1 + 50 / e) / 2, u > 1 && (u = Math.min(u, n.accelerationMax), i *= u, r *= u)), g = Date.now()), f.push({
            x: i,
            y: r,
            lastX: i < 0 ? .99 : -.99,
            lastY: r < 0 ? .99 : -.99,
            start: Date.now()
        }), d) || (h = t === document.body, o = function() {
            for (var a, v, w = Date.now(), s = 0, c = 0, e = 0; e < f.length; e++) {
                var u = f[e],
                    y = w - u.start,
                    p = y >= n.animationTime,
                    l = p ? 1 : y / n.animationTime;
                n.pulseAlgorithm && (l = oi(l));
                a = u.x * l - u.lastX >> 0;
                v = u.y * l - u.lastY >> 0;
                s += a;
                c += v;
                u.lastX += a;
                u.lastY += v;
                p && (f.splice(e, 1), e--)
            }
            h ? window.scrollBy(s, c) : (s && (t.scrollLeft += s), c && (t.scrollTop += c));
            i || r || (f = []);
            f.length ? bt(o, t, 1e3 / n.frameRate + 1) : d = !1
        }, bt(o, t, 0), d = !0)
    }

    function ft(t) {
        var f, o, r, i;
        if ((b || k(), f = t.target, o = lt(f), !o || t.defaultPrevented || t.ctrlKey) || e(u, "embed") || e(f, "embed") && /\.pdf/i.test(f.src) || e(u, "object") || (r = -t.wheelDeltaX || t.deltaX || 0, i = -t.wheelDeltaY || t.deltaY || 0, gt && (t.wheelDeltaX && c(t.wheelDeltaX, 120) && (r = -120 * (t.wheelDeltaX / Math.abs(t.wheelDeltaX))), t.wheelDeltaY && c(t.wheelDeltaY, 120) && (i = -120 * (t.wheelDeltaY / Math.abs(t.wheelDeltaY)))), r || i || (i = -t.wheelDelta || 0), t.deltaMode === 1 && (r *= 40, i *= 40), !n.touchpadSupport && ri(i))) return !0;
        Math.abs(r) > 1.2 && (r *= n.stepSize / 120);
        Math.abs(i) > 1.2 && (i *= n.stepSize / 120);
        ut(o, r, i);
        t.preventDefault();
        ct()
    }

    function et(i) {
        var f = i.target,
            y = i.ctrlKey || i.altKey || i.metaKey || i.shiftKey && i.keyCode !== t.spacebar,
            a, h, l;
        if ((document.contains(u) || (u = document.activeElement), a = /^(textarea|select|embed|object)$/i, h = /^(button|submit|radio|checkbox|file|color|image)$/i, a.test(f.nodeName) || e(f, "input") && !h.test(f.type) || e(u, "video") || ui(i) || f.isContentEditable || i.defaultPrevented || y) || (e(f, "button") || e(f, "input") && h.test(f.type)) && i.keyCode === t.spacebar) return !0;
        var v, c = 0,
            r = 0,
            o = lt(u),
            s = o.clientHeight;
        o == document.body && (s = window.innerHeight);
        switch (i.keyCode) {
            case t.up:
                r = -n.arrowScroll;
                break;
            case t.down:
                r = n.arrowScroll;
                break;
            case t.spacebar:
                v = i.shiftKey ? 1 : -1;
                r = -v * s * .9;
                break;
            case t.pageup:
                r = -s * .9;
                break;
            case t.pagedown:
                r = s * .9;
                break;
            case t.home:
                r = -o.scrollTop;
                break;
            case t.end:
                l = o.scrollHeight - o.scrollTop - s;
                r = l > 0 ? l + 10 : 0;
                break;
            case t.left:
                c = -n.arrowScroll;
                break;
            case t.right:
                c = n.arrowScroll;
                break;
            default:
                return !0
        }
        ut(o, c, r);
        i.preventDefault();
        ct()
    }

    function ot(n) {
        u = n.target
    }

    function ct() {
        clearTimeout(ht);
        ht = setInterval(function() {
            nt = {}
        }, 1e3)
    }

    function tt(n, t) {
        for (var i = n.length; i--;) nt[st(n[i])] = t;
        return t
    }

    function lt(n) {
        var t = [],
            e = document.body,
            o = r.scrollHeight,
            i, u, f;
        do {
            if (i = nt[st(n)], i) return tt(t, i);
            if (t.push(n), o === n.scrollHeight) {
                if (u = vt(r) && vt(e), f = u || yt(r), w && at(r) || !w && f) return tt(t, ei())
            } else if (at(n) && yt(n)) return tt(t, n)
        } while (n = n.parentElement)
    }

    function at(n) {
        return n.clientHeight + 10 < n.scrollHeight
    }

    function vt(n) {
        var t = getComputedStyle(n, "").getPropertyValue("overflow-y");
        return t !== "hidden"
    }

    function yt(n) {
        var t = getComputedStyle(n, "").getPropertyValue("overflow-y");
        return t === "scroll" || t === "auto"
    }

    function s(n, t) {
        window.addEventListener(n, t, !1)
    }

    function h(n, t) {
        window.removeEventListener(n, t, !1)
    }

    function e(n, t) {
        return (n.nodeName || "").toLowerCase() === t.toLowerCase()
    }

    function ii(n, t) {
        n = n > 0 ? 1 : -1;
        t = t > 0 ? 1 : -1;
        (v.x !== n || v.y !== t) && (v.x = n, v.y = t, f = [], g = 0)
    }

    function ri(n) {
        if (n) return i.length || (i = [n, n, n]), n = Math.abs(n), i.push(n), i.shift(), clearTimeout(pt), pt = setTimeout(function() {
            window.localStorage && (localStorage.SS_deltaBuffer = i.join(","))
        }, 1e3), !wt(120) && !wt(100)
    }

    function c(n, t) {
        return Math.floor(n / t) == n / t
    }

    function wt(n) {
        return c(i[0], n) && c(i[1], n) && c(i[2], n)
    }

    function ui(n) {
        var t = n.target,
            i = !1;
        if (document.URL.indexOf("www.youtube.com/watch") != -1)
            do
                if (i = t.classList && t.classList.contains("html5-video-controls"), i) break; while (t = t.parentNode);
        return i
    }

    function kt(t) {
        var i, r, u;
        return t = t * n.pulseScale, t < 1 ? i = t - (1 - Math.exp(-t)) : (r = Math.exp(-1), t -= 1, u = 1 - Math.exp(-t), i = r + u * (1 - r)), i * n.pulseNormalize
    }

    function oi(t) {
        return t >= 1 ? 1 : t <= 0 ? 0 : (n.pulseNormalize == 1 && (n.pulseNormalize /= kt(1)), kt(t))
    }

    function a(t) {
        for (var i in t) it.hasOwnProperty(i) && (n[i] = t[i])
    }
    var it = {
            frameRate: 150,
            animationTime: 400,
            stepSize: 100,
            pulseAlgorithm: !0,
            pulseScale: 4,
            pulseNormalize: 1,
            accelerationDelta: 50,
            accelerationMax: 3,
            keyboardSupport: !0,
            arrowScroll: 50,
            touchpadSupport: !1,
            fixedBackground: !0,
            excluded: ""
        },
        n = it,
        rt = !1,
        w = !1,
        v = {
            x: 0,
            y: 0
        },
        b = !1,
        r = document.documentElement,
        u, y, o, i = [],
        gt = /^Mac/.test(navigator.platform),
        t = {
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            spacebar: 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36
        },
        f = [],
        d = !1,
        g = Date.now(),
        st = function() {
            var n = 0;
            return function(t) {
                return t.uniqueID || (t.uniqueID = n++)
            }
        }(),
        nt = {},
        ht, pt;
    window.localStorage && localStorage.SS_deltaBuffer && (i = localStorage.SS_deltaBuffer.split(","));
    var bt = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(n, t, i) {
                window.setTimeout(n, i || 1e3 / 60)
            }
        }(),
        fi = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
        ei = function() {
            var n;
            return function() {
                var t, i, r;
                return n || (t = document.createElement("div"), t.style.cssText = "height:10000px;width:1px;", document.body.appendChild(t), i = document.body.scrollTop, r = document.documentElement.scrollTop, window.scrollBy(0, 3), n = document.body.scrollTop != i ? document.body : document.documentElement, window.scrollBy(0, -3), document.body.removeChild(t)), n
            }
        }();
    var p = window.navigator.userAgent,
        dt = /Edge/.test(p),
        si = /chrome/i.test(p) && !dt,
        hi = /safari/i.test(p) && !dt,
        ci = /mobile/i.test(p),
        li = (si || hi) && !ci,
        l;
    "onwheel" in document.createElement("div") ? l = "wheel" : "onmousewheel" in document.createElement("div") && (l = "mousewheel");
    l && li && (s(l, ft), s("mousedown", ot), s("load", k));
    a.destroy = ti;
    window.SmoothScrollOptions && a(window.SmoothScrollOptions);
    typeof define == "function" && define.amd ? define(function() {
        return a
    }) : "object" == typeof exports ? module.exports = a : window.SmoothScroll = a
}(),
function(n) {
    "use strict";

    function i() {
        n("section:first").is(".parallax, #home, .splash") || (n("#topnav").addClass("scroll"), n("body").addClass("top-padding"));
        n("section:first").is("#home") && n("#home").hasClass("bordered") && n("#topnav").addClass("top-space");
        n(window).scroll(function() {
            n("section:first").is(".parallax, #home, .splash") && (n(window).scrollTop() >= 100 ? n("#topnav").addClass("scroll") : n("#topnav").removeClass("scroll"));
            var t = n("#filters");
            t.length && !t.hasClass("no-fix") && (n(window).scrollTop() >= n(".page-title:first").height() + 30 ? t.addClass("fixed") : t.removeClass("fixed"))
        }).trigger("scroll");
        n(".navbar-toggle").on("click", function() {
            n(this).toggleClass("open");
            n("#navigation").slideToggle(400);
            n(".cart, .search").removeClass("open")
        });
        n(".cart").on("click", function(t) {
            t.preventDefault();
            t.stopPropagation();
            n(window).width() < 768 && (n("#navigation").is(":visible") && n(".navbar-toggle").click(), n(".search").removeClass("open"), n(this).toggleClass("open"))
        });
        n(".search").on("click", function(t) {
            t.preventDefault();
            t.stopPropagation();
            n(window).width() < 768 && (n("#navigation").is(":visible") && n(".navbar-toggle").click(), n(".cart").removeClass("open"), n(this).toggleClass("open"))
        });
        n(".shopping-cart, .search-form").on("click", function() {
            event.stopPropagation()
        });
        n("body").on("click", function() {
            n(".cart, .search").removeClass("open")
        });
        n(".navigation-menu>li").slice(-2).addClass("last-elements");
        n('.navigation-menu li.has-submenu a[href="#"]').on("click", function(t) {
            n(window).width() < 992 && (t.preventDefault(), n(this).parent("li").toggleClass("open").find(".submenu:first").toggleClass("open"))
        })
    }

    function r() {
        n("#home-slider img").each(function() {
            var t = n(this).parent("li"),
                i = n(this).attr("src");
            n(t).prepend(n('<div class="slide-image"><\/div>').css("background-image", "url(" + i + ")"));
            navigator.userAgent.indexOf("Firefox") != -1 && n("#home").hasClass("bordered") && n(".slide-image").addClass("ff-fix");
            n(this).remove()
        });
        var t = {
            prevText: '<i class="ti-angle-left"><\/i>',
            nextText: '<i class="ti-angle-right"><\/i>',
            keyboard: !1
        };
        n("#home-slider .slides > li").length < 2 && (t.directionNav = !1);
        n("#home-slider").hasClass("kenburn") && (t.start = function() {
            n("#home-slider").find(".slides > li.flex-active-slide > .slide-image").each(function() {
                var t = n(this);
                t.css({
                    "-webkit-transform": "scale(1.2)",
                    "-moz-transform": "scale(1.2)",
                    transform: "scale(1.2)"
                })
            })
        }, t.before = function() {
            n("#home-slider").find(".slides > li > .slide-image").each(function() {
                var t = n(this);
                t.css({
                    "-webkit-transform": "scale(1)",
                    "-moz-transform": "scale(1)",
                    transform: "scale(1)"
                })
            })
        }, t.after = function() {
            n("#home-slider").find(".slides > li.flex-active-slide > .slide-image").each(function() {
                var t = n(this);
                t.css({
                    "-webkit-transform": "scale(1.2)",
                    "-moz-transform": "scale(1.2)",
                    transform: "scale(1.2)"
                })
            })
        });
        n("#home-slider").flexslider(t);
        n("#text-rotator").flexslider({
            controlNav: !1,
            directionNav: !1
        })
    }

    function u() {
        n(".owl-carousel").each(function(t, i) {
            var r = n(this).data("options") || {},
                u = {
                    items: r.items || 4,
                    loop: r.loop || !0,
                    dots: r.dots || !1,
                    margin: r.margin || 10,
                    autoplay: r.autoplay || !1,
                    responsiveClass: !0,
                    responsive: {
                        0: {
                            items: r.xsItems || 1,
                            margin: 25
                        },
                        768: {
                            items: r.smItems || 2
                        },
                        992: {
                            items: r.mdItems || 3
                        },
                        1200: {
                            items: r.items || 4
                        }
                    }
                };
            u.autoplay && (u.autoplayTimeout = r.autoplayTimeout || 2e3, u.autoplayHoverPause = !0);
            n(i).owlCarousel(u)
        })
    }

    function f() {
        n(".flexslider").each(function(t, i) {
            var r = n(this).data("options") || {},
                u = {
                    animation: r.animation === "slide" ? "slide" : "fade",
                    controlNav: r.controlNav === !0 ? !0 : !1,
                    directionNav: r.directionNav === !0 ? !0 : !1,
                    prevText: '<i class="ti-arrow-left"><\/i>',
                    nextText: '<i class="ti-arrow-right"><\/i>'
                };
            n(i).flexslider(u)
        })
    }

    function e() {
        var f = n("#map").data("lat"),
            e = n("#map").data("lang"),
            t = new google.maps.LatLng(f, e),
            o = {
                zoom: 12,
                center: t,
                mapTypeControl: !1,
                disableDefaultUI: !0,
                zoomControl: !1,
                scrollwheel: !1,
                styles: [{
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{
                        color: "#e9e9e9"
                    }, {
                        lightness: 17
                    }]
                }, {
                    featureType: "landscape",
                    elementType: "geometry",
                    stylers: [{
                        color: "#f5f5f5"
                    }, {
                        lightness: 20
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "geometry.fill",
                    stylers: [{
                        color: "#ffffff"
                    }, {
                        lightness: 17
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [{
                        color: "#ffffff"
                    }, {
                        lightness: 29
                    }, {
                        weight: .2
                    }]
                }, {
                    featureType: "road.arterial",
                    elementType: "geometry",
                    stylers: [{
                        color: "#ffffff"
                    }, {
                        lightness: 18
                    }]
                }, {
                    featureType: "road.local",
                    elementType: "geometry",
                    stylers: [{
                        color: "#ffffff"
                    }, {
                        lightness: 16
                    }]
                }, {
                    featureType: "poi",
                    elementType: "geometry",
                    stylers: [{
                        color: "#f5f5f5"
                    }, {
                        lightness: 21
                    }]
                }, {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [{
                        color: "#dedede"
                    }, {
                        lightness: 21
                    }]
                }, {
                    elementType: "labels.text.stroke",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: "#ffffff"
                    }, {
                        lightness: 16
                    }]
                }, {
                    elementType: "labels.text.fill",
                    stylers: [{
                        saturation: 36
                    }, {
                        color: "#333333"
                    }, {
                        lightness: 40
                    }]
                }, {
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    elementType: "geometry",
                    stylers: [{
                        color: "#f2f2f2"
                    }, {
                        lightness: 19
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "geometry.fill",
                    stylers: [{
                        color: "#fefefe"
                    }, {
                        lightness: 20
                    }]
                }, {
                    featureType: "administrative",
                    elementType: "geometry.stroke",
                    stylers: [{
                        color: "#fefefe"
                    }, {
                        lightness: 17
                    }, {
                        weight: 1.2
                    }]
                }]
            },
            i = new google.maps.Map(document.getElementById("map"), o),
            r = "KevinMoore.ie",
            s = new google.maps.InfoWindow({
                content: r
            }),
            u = new google.maps.Marker({
                position: t,
                map: i,
                icon: {
                    path: "M24.0011943,0 C10.746415,0 -3.55271368e-15,10.7467285 -3.55271368e-15,24.001351 C-3.55271368e-15,41.803197 24.0011943,68.9499969 24.0011943,68.9499969 C24.0011943,68.9499969 48.0025453,41.8030402 48.0025453,24.001351 C48.0025453,10.7467285 37.2558168,0 24.0011943,0 L24.0011943,0 Z M24.0011943,34.128082 C18.407578,34.128082 13.8743065,29.5949673 13.8743065,24.0011943 C13.8743065,18.4074213 18.407578,13.8743065 24.0011943,13.8743065 C29.5948105,13.8743065 34.128082,18.4074213 34.128082,24.0011943 C34.128082,29.5949673 29.5948105,34.128082 24.0011943,34.128082 L24.0011943,34.128082 Z",
                    fillColor: "#66FCF1",
                    fillOpacity: .8,
                    scale: 1,
                    strokeColor: "#191b1d",
                    strokeWeight: 0
                },
                title: r
            });
        google.maps.event.addListener(u, "click", function() {
            s.open(i, u)
        })
    }

    function o() {
        var t = n(".countdown").data("date");
        n(".countdown").downCount({
            date: t,
            offset: 0
        })
    }

    function s() {
        n(".accordion-title").on("click", function() {
            var i = n(this).parents(".accordion");
            i.data("multiple") || (i.find("li").not(n(this).parent()).removeClass("active"), i.find("li").not(n(this).parent()).find(".accordion-content").slideUp(300));
            n(this).parent("li").toggleClass("active");
            n(this).next().slideToggle(300, function() {
                t()
            })
        })
    }

    function h() {
        n(window).load(function() {
            n("#loader").delay(500).fadeOut();
            n("#mask").delay(1e3).fadeOut("slow");
            var i = n("#works").isotope({
                masonry: {
                    columnWidth: 0
                },
                itemSelector: ".work-item"
            });
            i.on("layoutComplete", function() {
                n(window).trigger("resize");
                t()
            });
            n(".blog-masonry").isotope({
                masonry: {
                    columnWidth: 0
                },
                itemSelector: ".masonry-post"
            });
            n("#filters").on("click", "li", function() {
                n("#filters li").removeClass("active");
                n(this).addClass("active");
                var t = n(this).attr("data-filter");
                n("#works").isotope({
                    filter: t
                });
                n(window).trigger("resize")
            })
        })
    }

    function c() {
        n(".play-button").on("click", function() {
            var i = n(this).data("src"),
                t = '<div id="gallery-modal">';
            t += '<div class="centrize">';
            t += '<div class="v-center">';
            t += '<div class="gallery-image">';
            t += '<div class="media-video">';
            t += '<a href="#" id="gallery-close"><i class="ti-close"><\/i><\/a>';
            t += '<iframe src="' + i + '" frameborder="0">';
            t += "<\/div>";
            t += "<\/div>";
            t += "<\/div>";
            t += "<\/div>";
            t += "<\/div>";
            n("body").append(t);
            n("body").addClass("modal-open");
            n("#gallery-modal").fadeIn(300)
        })
    }

    function l() {
        n(".player").length && (n(".player").mb_YTPlayer({
            containment: "#video-wrapper",
            autoPlay: !0,
            mute: !0
        }), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (n("#video-wrapper").append('<div id="fallback-bg"><\/div>'), n("#fallback-bg").css("background-image", "url(" + n("#video-wrapper").data("fallback-bg") + ")")));
        var t = n("#video-wrapper video"),
            i = function() {
                var n = r();
                t.width(n * 1280);
                t.height(n * 780);
                u()
            },
            r = function() {
                var t = n(window).width(),
                    i = n(window).height(),
                    u = t / i,
                    r = i / 720;
                return u >= 1280 / 720 && (r = t / 1280), r
            },
            u = function() {
                var i = (n(window).width() >> 1) - (t.width() >> 1) | 0,
                    r = (n(window).height() >> 1) - (t.height() >> 1) | 0;
                t.css({
                    left: i,
                    top: r
                })
            };
        t.length && n(window).resize(function() {
            i()
        }).trigger("resize")
    }

    function a() {
        var t = [];
        n(".photo-gallery").on("click", ".gallery-item a", function(i) {
            var e, f, u, o, r;
            for (i.preventDefault(), e = n(this).parents(".photo-gallery"), f = e.find(".gallery-item>a"), u = 0; u < f.length; u++) t.push(n(f[u]).attr("href"));
            o = n(this).attr("href");
            r = '<div id="gallery-modal">';
            r += '<div class="centrize">';
            r += '<div class="v-center">';
            r += '<div class="gallery-image">';
            r += '<a href="#" id="gallery-close"><i class="ti-close"><\/i><\/a>';
            r += '<a href="#" class="gallery-control gallery-prev"><i class="ti-angle-left"><\/i><\/a>';
            r += '<img src="' + t[t.indexOf(o)] + '" alt="">';
            r += '<a href="#" class="gallery-control gallery-next"><i class="ti-angle-right"><\/i><\/a>';
            r += "<\/div>";
            r += "<\/div>";
            r += "<\/div>";
            r += "<\/div>";
            n("body").append(r);
            n("body").addClass("modal-open");
            n("#gallery-modal").fadeIn(300)
        });
        n("body").on("click", ".gallery-control", function(i) {
            i.preventDefault();
            i.stopPropagation();
            var r = n(".gallery-image").find("img");
            if (n(this).hasClass("gallery-next")) {
                if (t.indexOf(r.attr("src")) >= t.length - 1) return !1;
                r.fadeOut(300, function() {
                    var i = t[t.indexOf(r.attr("src")) + 1];
                    n(r).attr("src", i)
                }).fadeIn(300)
            } else if (n(this).hasClass("gallery-prev")) {
                if (t.indexOf(r.attr("src")) < 1) return !1;
                r.fadeOut(300, function() {
                    var i = t[t.indexOf(r.attr("src")) - 1];
                    n(r).attr("src", i)
                }).fadeIn(300)
            }
        });
        n("body").on("click", "#gallery-close", function(t) {
            t.preventDefault();
            n("#gallery-modal").fadeOut(300, function() {
                n("#gallery-modal").remove()
            });
            n("body").removeClass("modal-open")
        });
        n("body").on("click", ".gallery-image", function(n) {
            n.stopPropagation()
        });
        n("body").on("click", "#gallery-modal", function() {
            n("#gallery-close").trigger("click")
        });
        n(document).keyup(function(t) {
            t.keyCode == 27 && n("#gallery-close").trigger("click");
            t.keyCode == 37 && n(".gallery-control.gallery-prev").trigger("click");
            t.keyCode == 39 && n(".gallery-control.gallery-next").trigger("click")
        })
    }

    function v() {
        var t = n("#contact-form").find('input[data-required="true"], textarea[data-required="true"]').toArray(),
            i = function() {
                return n("#Name").val() && n("#Email").val() && n("#Subject").val() && n("#Message").val() ? !0 : !1
            };
        n("#contact-form").on("submit", function(r) {
            r.preventDefault();
            t.forEach(function(t) {
                n(t).val() ? n(t).parent(".form-group").removeClass("has-error") : n(t).parent(".form-group").addClass("has-error")
            });
            i() && n.ajax({
                url: n(this).attr("action"),
                type: "POST",
                data: n(this).serialize()
            }).done(function() {
                var t = n("#contact-form").data("success-text") || "Your message has been sent. I will get back to you shortly!",
                    i = '<div role="alert" class="alert alert-success alert-outline">' + t + "<\/div>";
                n("#contact-form input, #contact-form textarea, #contact-form button").attr("disabled", "disabled");
                n("#contact-form .alert").fadeOut(300);
                n(i).insertBefore(n("#contact-form button"))
            }).fail(function() {
                var t = n("#contact-form").data("error-text") || "There was an error. Try again later.",
                    i = '<div role="alert" class="alert alert-danger alert-outline">' + t + "<\/div>";
                n("#contact-form .alert").fadeOut(300);
                n(i).insertBefore(n("#contact-form button"))
            })
        });
        n("#contact-form input, #contact-form textarea").on("keyup", function(t) {
            t.preventDefault();
            n(this).val() && n(this).parent(".form-group").removeClass("has-error")
        })
    }

    function y() {
        n(".counter").appear(function() {
            var t = n(this).find(".number-count"),
                i = t.data("count");
            n(t).countTo({
                from: 0,
                to: i,
                speed: 1e3,
                refreshInterval: 50
            })
        })
    }

    function t() {
        n("#sscr").css("height", 0);
        n("#sscr").css("height", document.documentElement.scrollHeight + "px")
    }

    function p() {
        n("form[data-mailchimp]").each(function(t, i) {
            n(i).ajaxChimp({
                url: "http://hody.us12.list-manage.com/subscribe/post?u=d9d1052c1b2ba81576842a9fb&id=c70c5d0c82",
                callback: function(t) {
                    var i = '<div class="modal fade" id="modal" tabindex="-1" role="dialog">';
                    i += '<div class="centrize">';
                    i += '<div class="v-center">';
                    i += '<div class="modal-dialog">';
                    i += '<div class="modal-content">';
                    i += '<div class="modal-header">';
                    i += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="ti-close"><\/i><\/span><\/button>';
                    i += t.result === "success" ? '<h4 class="modal-title">Thank you!<\/h2>' : '<h4 class="modal-title">There was an error.<\/h2>';
                    i += "<\/div>";
                    i += '<div class="modal-body">';
                    i += "<p>" + t.msg + "<\/p>";
                    i += "<\/div>";
                    i += "<\/div>";
                    i += "<\/div>";
                    i += "<\/div>";
                    i += "<\/div>";
                    i += "<\/div>";
                    n(i).modal().on("hidden.bs.modal", function() {
                        n(this).remove()
                    })
                }
            })
        })
    }

    function w() {
        n("a[href='#top']").on("click", function() {
            return n("html, body").animate({
                scrollTop: 0
            }, 1e3), !1
        });
        n('a[data-scroll="true"]').on("click", function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var t = n(this.hash);
                if (t = t.length ? t : n("[name=" + this.hash.slice(1) + "]"), t.length) return n("html,body").animate({
                    scrollTop: t.offset().top
                }, 1e3), !1
            }
        });
        n("#navigation").data("onepage") && n("body").scrollspy({
            target: "#navigation"
        });
        n(".bg-img, .thumb-placeholder").each(function(t, i) {
            var r = n(i).attr("src");
            n(i).parent().css("background-image", "url(" + r + ")");
            n(i).remove()
        });
        n(".alert").on("closed.bs.alert", function() {
            t()
        });
        n("body").on("click", ".alert", function() {
            n(this).on("closed.bs.alert", function() {
                t()
            })
        });
        var i = -100;
        (navigator.userAgent.indexOf("Firefox") != -1 || navigator.userAgent.indexOf("MSIE ") != -1 || navigator.userAgent.match(/Trident.*rv\:11\./) != null) && (i = 11, n("section.parallax").css("z-index", 20));
        n(".parallax-bg").parallax({
            speed: .5,
            zIndex: i
        });
        n("#login-tabs a:first").tab("show");
        n("#login-content .tab-pane:first").addClass("fade in");
        n("#login-tabs li a").on("click", function(t) {
            t.preventDefault();
            n(this).tab("show")
        });
        n("a[data-toggle=tab]").on("click", function() {
            n(window).trigger("resize")
        }).on("shown.bs.tab", function() {
            var t = n(n(this).attr("href"));
            t.find(".progress-bar").length && t.find(".progress-bar").each(function(t, i) {
                n(i).css("width", n(this).data("progress") + "%");
                n(i).parents(".skill").find(".skill-perc").css("right", 100 - n(i).data("progress") + "%")
            })
        });
        n(".particles-bg").particleground({
            dotColor: "#66FCF1",
            particleRadius: 10
        });
        n(".boxes [data-bg-color]").each(function(t, i) {
            n(i).css("background-color", n(i).data("bg-color"))
        });
        n(".progress-bar").appear(function() {
            n(this).css("width", n(this).data("progress") + "%");
            n(this).parents(".skill").find(".skill-perc").css("right", 100 - n(this).data("progress") + "%")
        });
        n("[data-animated=true]").addClass("invisible");
        n("[data-animated=true]").appear(function() {
            var t = n(this);
            t.data("delay") ? setTimeout(function() {
                t.removeClass("invisible").addClass("fade-in-top")
            }, parseInt(t.data("delay"))) : n(this).removeClass("invisible").addClass("fade-in-top")
        }, {
            accX: 0,
            accY: 0
        });
        n(".client-image").hover(function() {
            n(this).removeClass("fade-in-top")
        }, function() {})
    }

    function b() {
        i();
        r();
        u();
        f();
        s();
        h();
        l();
        c();
        a();
        v();
        y();
        p();
        w();
        n("#map").length && (google.maps.event.addDomListener(window, "load", e), n("#map").css("position", "absolute"));
        n(".countdown").length && o()
    }
    b()
}(jQuery)