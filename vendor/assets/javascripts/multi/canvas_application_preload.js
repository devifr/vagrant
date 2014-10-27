// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/canvas_white/images/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
/*! jQuery v1.7.1 jquery.com | jquery.org/license */
function tabClick(e) {
    e.preventDefault();
    var t = $(this),
        n = t.attr("href"),
        r = t.parents(".widget");
    t.parent().addClass("active").siblings("li").removeClass("active"), r.find(".widget-content").hide(), $(n).show()
}
function setCookie(e, t, n) {
    var r = new Date;
    r.setDate(r.getDate() + n);
    var i = escape(t) + (n == null ? "" : "; expires=" + r.toUTCString());
    document.cookie = e + "=" + i
}
function getCookie(e) {
    var t, n, r, i = document.cookie.split(";");
    for (t = 0; t < i.length; t++) {
        n = i[t].substr(0, i[t].indexOf("=")), r = i[t].substr(i[t].indexOf("=") + 1), n = n.replace(/^\s+|\s+$/g, "");
        if (n == e) return unescape(r)
    }
}
function checkCookie(e) {
    var t = getCookie(e),
        n = !1;
    return t != null && t != "" && (n = !0), n
}
function getUrlNoParam() {
    return window.location.protocol + "://" + window.location.host + "/" + window.location.pathname
}
function notifyClose(e) {
    e.preventDefault(), $(this).parents(".notify-info").length > 0 && setCookie(getUrlNoParam(), 1, 365), $(this).parents(".notify").slideUp("medium", function () {
        $(this).remove()
    })
}
function toggleNav(e) {
    e.preventDefault(), $("#sidebar").toggleClass("revealShow")
}
function drawChart() {
    $(".chartHelperChart").remove(), ChartHelper.visualize({
        el: $("table.stats")
    })
}
function ucfirst(e) {
    e += "";
    var t = e.charAt(0).toUpperCase();
    return t + e.substr(1)
}(function (e, t) {
    function n(e) {
        return B.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    function r(e) {
        if (!mn[e]) {
            var t = D.body,
                n = B("<" + e + ">").appendTo(t),
                r = n.css("display");
            n.remove();
            if (r === "none" || r === "") {
                gn || (gn = D.createElement("iframe"), gn.frameBorder = gn.width = gn.height = 0), t.appendChild(gn);
                if (!yn || !gn.createElement) yn = (gn.contentWindow || gn.contentDocument).document, yn.write((D.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), yn.close();
                n = yn.createElement(e), yn.body.appendChild(n), r = B.css(n, "display"), t.removeChild(gn)
            }
            mn[e] = r
        }
        return mn[e]
    }
    function i(e, t) {
        var n = {};
        return B.each(Sn.concat.apply([], Sn.slice(0, t)), function () {
            n[this] = e
        }), n
    }
    function s() {
        xn = t
    }
    function o() {
        return setTimeout(s, 0), xn = B.now()
    }
    function u() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function a() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function f(e, n) {
        e.dataFilter && (n = e.dataFilter(n, e.dataType));
        var r = e.dataTypes,
            i = {}, s, o, u = r.length,
            a, f = r[0],
            l, c, h, p, d;
        for (s = 1; s < u; s++) {
            if (s === 1) for (o in e.converters) typeof o == "string" && (i[o.toLowerCase()] = e.converters[o]);
            l = f, f = r[s];
            if (f === "*") f = l;
            else if (l !== "*" && l !== f) {
                c = l + " " + f, h = i[c] || i["* " + f];
                if (!h) {
                    d = t;
                    for (p in i) {
                        a = p.split(" ");
                        if (a[0] === l || a[0] === "*") {
                            d = i[a[1] + " " + f];
                            if (d) {
                                p = i[p], p === !0 ? h = d : d === !0 && (h = p);
                                break
                            }
                        }
                    }
                }!h && !d && B.error("No conversion from " + c.replace(" ", " to ")), h !== !0 && (n = h ? h(n) : d(p(n)))
            }
        }
        return n
    }
    function l(e, n, r) {
        var i = e.contents,
            s = e.dataTypes,
            o = e.responseFields,
            u, a, f, l;
        for (a in o) a in r && (n[o[a]] = r[a]);
        while (s[0] === "*") s.shift(), u === t && (u = e.mimeType || n.getResponseHeader("content-type"));
        if (u) for (a in i) if (i[a] && i[a].test(u)) {
            s.unshift(a);
            break
        }
        if (s[0] in r) f = s[0];
        else {
            for (a in r) {
                if (!s[0] || e.converters[a + " " + s[0]]) {
                    f = a;
                    break
                }
                l || (l = a)
            }
            f = f || l
        }
        if (f) return f !== s[0] && s.unshift(f), r[f]
    }
    function c(e, t, n, r) {
        if (B.isArray(t)) B.each(t, function (t, i) {
            n || zt.test(e) ? r(e, i) : c(e + "[" + (typeof i == "object" || B.isArray(i) ? t : "") + "]", i, n, r)
        });
        else if (!n && t != null && typeof t == "object") for (var i in t) c(e + "[" + i + "]", t[i], n, r);
        else r(e, t)
    }
    function h(e, n) {
        var r, i, s = B.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
        i && B.extend(!0, e, i)
    }
    function p(e, n, r, i, s, o) {
        s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
        var u = e[s],
            a = 0,
            f = u ? u.length : 0,
            l = e === sn,
            c;
        for (; a < f && (l || !c); a++) c = u[a](n, r, i), typeof c == "string" && (!l || o[c] ? c = t : (n.dataTypes.unshift(c), c = p(e, n, r, i, c, o)));
        return (l || !c) && !o["*"] && (c = p(e, n, r, i, "*", o)), c
    }
    function d(e) {
        return function (t, n) {
            typeof t != "string" && (n = t, t = "*");
            if (B.isFunction(n)) {
                var r = t.toLowerCase().split(en),
                    i = 0,
                    s = r.length,
                    o, u, a;
                for (; i < s; i++) o = r[i], a = /^\+/.test(o), a && (o = o.substr(1) || "*"), u = e[o] = e[o] || [], u[a ? "unshift" : "push"](n)
            }
        }
    }
    function v(e, t, n) {
        var r = t === "width" ? e.offsetWidth : e.offsetHeight,
            i = t === "width" ? jt : Ft,
            s = 0,
            o = i.length;
        if (r > 0) {
            if (n !== "border") for (; s < o; s++) n || (r -= parseFloat(B.css(e, "padding" + i[s])) || 0), n === "margin" ? r += parseFloat(B.css(e, n + i[s])) || 0 : r -= parseFloat(B.css(e, "border" + i[s] + "Width")) || 0;
            return r + "px"
        }
        r = It(e, t, t);
        if (r < 0 || r == null) r = e.style[t] || 0;
        r = parseFloat(r) || 0;
        if (n) for (; s < o; s++) r += parseFloat(B.css(e, "padding" + i[s])) || 0, n !== "padding" && (r += parseFloat(B.css(e, "border" + i[s] + "Width")) || 0), n === "margin" && (r += parseFloat(B.css(e, n + i[s])) || 0);
        return r + "px"
    }
    function m(e, t) {
        t.src ? B.ajax({
            url: t.src,
            async: !1,
            dataType: "script"
        }) : B.globalEval((t.text || t.textContent || t.innerHTML || "").replace(kt, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t)
    }
    function g(e) {
        var t = D.createElement("div");
        return At.appendChild(t), t.innerHTML = e.outerHTML, t.firstChild
    }
    function y(e) {
        var t = (e.nodeName || "").toLowerCase();
        t === "input" ? b(e) : t !== "script" && typeof e.getElementsByTagName != "undefined" && B.grep(e.getElementsByTagName("input"), b)
    }
    function b(e) {
        if (e.type === "checkbox" || e.type === "radio") e.defaultChecked = e.checked
    }
    function w(e) {
        return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
    }
    function E(e, t) {
        var n;
        if (t.nodeType === 1) {
            t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase();
            if (n === "object") t.outerHTML = e.outerHTML;
            else if (n !== "input" || e.type !== "checkbox" && e.type !== "radio") {
                if (n === "option") t.selected = e.defaultSelected;
                else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue
            } else e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value);
            t.removeAttribute(B.expando)
        }
    }
    function S(e, t) {
        if (t.nodeType === 1 && !! B.hasData(e)) {
            var n, r, i, s = B._data(e),
                o = B._data(t, s),
                u = s.events;
            if (u) {
                delete o.handle, o.events = {};
                for (n in u) for (r = 0, i = u[n].length; r < i; r++) B.event.add(t, n + (u[n][r].namespace ? "." : "") + u[n][r].namespace, u[n][r], u[n][r].data)
            }
            o.data && (o.data = B.extend({}, o.data))
        }
    }
    function x(e, t) {
        return B.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function T(e) {
        var t = vt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement) while (t.length) n.createElement(t.pop());
        return n
    }
    function N(e, t, n) {
        t = t || 0;
        if (B.isFunction(t)) return B.grep(e, function (e, r) {
            var i = !! t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return B.grep(e, function (e, r) {
            return e === t === n
        });
        if (typeof t == "string") {
            var r = B.grep(e, function (e) {
                return e.nodeType === 1
            });
            if (ct.test(t)) return B.filter(t, r, !n);
            t = B.filter(t, r)
        }
        return B.grep(e, function (e, r) {
            return B.inArray(e, t) >= 0 === n
        })
    }
    function C(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }
    function k() {
        return !0
    }
    function L() {
        return !1
    }
    function A(e, t, n) {
        var r = t + "defer",
            i = t + "queue",
            s = t + "mark",
            o = B._data(e, r);
        o && (n === "queue" || !B._data(e, i)) && (n === "mark" || !B._data(e, s)) && setTimeout(function () {
            !B._data(e, i) && !B._data(e, s) && (B.removeData(e, r, !0), o.fire())
        }, 0)
    }
    function O(e) {
        for (var t in e) {
            if (t === "data" && B.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1
        }
        return !0
    }
    function M(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(q, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : B.isNumeric(r) ? parseFloat(r) : I.test(r) ? B.parseJSON(r) : r
                } catch (s) {}
                B.data(e, n, r)
            } else r = t
        }
        return r
    }
    function _(e) {
        var t = j[e] = {}, n, r;
        e = e.split(/\s+/);
        for (n = 0, r = e.length; n < r; n++) t[e[n]] = !0;
        return t
    }
    var D = e.document,
        P = e.navigator,
        H = e.location,
        B = function () {
            function n() {
                if (!r.isReady) {
                    try {
                        D.documentElement.doScroll("left")
                    } catch (e) {
                        setTimeout(n, 1);
                        return
                    }
                    r.ready()
                }
            }
            var r = function (e, t) {
                return new r.fn.init(e, t, o)
            }, i = e.jQuery,
                s = e.$,
                o, u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                a = /\S/,
                f = /^\s+/,
                l = /\s+$/,
                c = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                h = /^[\],:{}\s]*$/,
                p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                d = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                v = /(?:^|:|,)(?:\s*\[)+/g,
                m = /(webkit)[ \/]([\w.]+)/,
                g = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                y = /(msie) ([\w.]+)/,
                b = /(mozilla)(?:.*? rv:([\w.]+))?/,
                w = /-([a-z]|[0-9])/ig,
                E = /^-ms-/,
                S = function (e, t) {
                    return (t + "").toUpperCase()
                }, x = P.userAgent,
                T, N, C, k = Object.prototype.toString,
                L = Object.prototype.hasOwnProperty,
                A = Array.prototype.push,
                O = Array.prototype.slice,
                M = String.prototype.trim,
                _ = Array.prototype.indexOf,
                H = {};
            return r.fn = r.prototype = {
                constructor: r,
                init: function (e, n, i) {
                    var s, o, a, f;
                    if (!e) return this;
                    if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
                    if (e === "body" && !n && D.body) return this.context = D, this[0] = D.body, this.selector = e, this.length = 1, this;
                    if (typeof e == "string") {
                        e.charAt(0) !== "<" || e.charAt(e.length - 1) !== ">" || e.length < 3 ? s = u.exec(e) : s = [null, e, null];
                        if (s && (s[1] || !n)) {
                            if (s[1]) return n = n instanceof r ? n[0] : n, f = n ? n.ownerDocument || n : D, a = c.exec(e), a ? r.isPlainObject(n) ? (e = [D.createElement(a[1])], r.fn.attr.call(e, n, !0)) : e = [f.createElement(a[1])] : (a = r.buildFragment([s[1]], [f]), e = (a.cacheable ? r.clone(a.fragment) : a.fragment).childNodes), r.merge(this, e);
                            o = D.getElementById(s[2]);
                            if (o && o.parentNode) {
                                if (o.id !== s[2]) return i.find(e);
                                this.length = 1, this[0] = o
                            }
                            return this.context = D, this.selector = e, this
                        }
                        return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e)
                    }
                    return r.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), r.makeArray(e, this))
                },
                selector: "",
                jquery: "1.7.1",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return O.call(this, 0)
                },
                get: function (e) {
                    return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
                },
                pushStack: function (e, t, n) {
                    var i = this.constructor();
                    return r.isArray(e) ? A.apply(i, e) : r.merge(i, e), i.prevObject = this, i.context = this.context, t === "find" ? i.selector = this.selector + (this.selector ? " " : "") + n : t && (i.selector = this.selector + "." + t + "(" + n + ")"), i
                },
                each: function (e, t) {
                    return r.each(this, e, t)
                },
                ready: function (e) {
                    return r.bindReady(), N.add(e), this
                },
                eq: function (e) {
                    return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(O.apply(this, arguments), "slice", O.call(arguments).join(","))
                },
                map: function (e) {
                    return this.pushStack(r.map(this, function (t, n) {
                        return e.call(t, n, t)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: A,
                sort: [].sort,
                splice: [].splice
            }, r.fn.init.prototype = r.fn, r.extend = r.fn.extend = function () {
                var e, n, i, s, o, u, a = arguments[0] || {}, f = 1,
                    l = arguments.length,
                    c = !1;
                typeof a == "boolean" && (c = a, a = arguments[1] || {}, f = 2), typeof a != "object" && !r.isFunction(a) && (a = {}), l === f && (a = this, --f);
                for (; f < l; f++) if ((e = arguments[f]) != null) for (n in e) {
                    i = a[n], s = e[n];
                    if (a === s) continue;
                    c && s && (r.isPlainObject(s) || (o = r.isArray(s))) ? (o ? (o = !1, u = i && r.isArray(i) ? i : []) : u = i && r.isPlainObject(i) ? i : {}, a[n] = r.extend(c, u, s)) : s !== t && (a[n] = s)
                }
                return a
            }, r.extend({
                noConflict: function (t) {
                    return e.$ === r && (e.$ = s), t && e.jQuery === r && (e.jQuery = i), r
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (e) {
                    e ? r.readyWait++ : r.ready(!0)
                },
                ready: function (e) {
                    if (e === !0 && !--r.readyWait || e !== !0 && !r.isReady) {
                        if (!D.body) return setTimeout(r.ready, 1);
                        r.isReady = !0;
                        if (e !== !0 && --r.readyWait > 0) return;
                        N.fireWith(D, [r]), r.fn.trigger && r(D).trigger("ready").off("ready")
                    }
                },
                bindReady: function () {
                    if (!N) {
                        N = r.Callbacks("once memory");
                        if (D.readyState === "complete") return setTimeout(r.ready, 1);
                        if (D.addEventListener) D.addEventListener("DOMContentLoaded", C, !1), e.addEventListener("load", r.ready, !1);
                        else if (D.attachEvent) {
                            D.attachEvent("onreadystatechange", C), e.attachEvent("onload", r.ready);
                            var t = !1;
                            try {
                                t = e.frameElement == null
                            } catch (i) {}
                            D.documentElement.doScroll && t && n()
                        }
                    }
                },
                isFunction: function (e) {
                    return r.type(e) === "function"
                },
                isArray: Array.isArray || function (e) {
                    return r.type(e) === "array"
                },
                isWindow: function (e) {
                    return e && typeof e == "object" && "setInterval" in e
                },
                isNumeric: function (e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function (e) {
                    return e == null ? String(e) : H[k.call(e)] || "object"
                },
                isPlainObject: function (e) {
                    if (!e || r.type(e) !== "object" || e.nodeType || r.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !L.call(e, "constructor") && !L.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (n) {
                        return !1
                    }
                    var i;
                    for (i in e);
                    return i === t || L.call(e, i)
                },
                isEmptyObject: function (e) {
                    for (var t in e) return !1;
                    return !0
                },
                error: function (e) {
                    throw new Error(e)
                },
                parseJSON: function (t) {
                    if (typeof t != "string" || !t) return null;
                    t = r.trim(t);
                    if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
                    if (h.test(t.replace(p, "@").replace(d, "]").replace(v, ""))) return (new Function("return " + t))();
                    r.error("Invalid JSON: " + t)
                },
                parseXML: function (n) {
                    var i, s;
                    try {
                        e.DOMParser ? (s = new DOMParser, i = s.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
                    } catch (o) {
                        i = t
                    }
                    return (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) && r.error("Invalid XML: " + n), i
                },
                noop: function () {},
                globalEval: function (t) {
                    t && a.test(t) && (e.execScript || function (t) {
                        e.eval.call(e, t)
                    })(t)
                },
                camelCase: function (e) {
                    return e.replace(E, "ms-").replace(w, S)
                },
                nodeName: function (e, t) {
                    return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
                },
                each: function (e, n, i) {
                    var s, o = 0,
                        u = e.length,
                        a = u === t || r.isFunction(e);
                    if (i) {
                        if (a) {
                            for (s in e) if (n.apply(e[s], i) === !1) break
                        } else for (; o < u;) if (n.apply(e[o++], i) === !1) break
                    } else if (a) {
                        for (s in e) if (n.call(e[s], s, e[s]) === !1) break
                    } else for (; o < u;) if (n.call(e[o], o, e[o++]) === !1) break;
                    return e
                },
                trim: M ? function (e) {
                    return e == null ? "" : M.call(e)
                } : function (e) {
                    return e == null ? "" : (e + "").replace(f, "").replace(l, "")
                },
                makeArray: function (e, t) {
                    var n = t || [];
                    if (e != null) {
                        var i = r.type(e);
                        e.length == null || i === "string" || i === "function" || i === "regexp" || r.isWindow(e) ? A.call(n, e) : r.merge(n, e)
                    }
                    return n
                },
                inArray: function (e, t, n) {
                    var r;
                    if (t) {
                        if (_) return _.call(t, e, n);
                        r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                        for (; n < r; n++) if (n in t && t[n] === e) return n
                    }
                    return -1
                },
                merge: function (e, n) {
                    var r = e.length,
                        i = 0;
                    if (typeof n.length == "number") for (var s = n.length; i < s; i++) e[r++] = n[i];
                    else while (n[i] !== t) e[r++] = n[i++];
                    return e.length = r, e
                },
                grep: function (e, t, n) {
                    var r = [],
                        i;
                    n = !! n;
                    for (var s = 0, o = e.length; s < o; s++) i = !! t(e[s], s), n !== i && r.push(e[s]);
                    return r
                },
                map: function (e, n, i) {
                    var s, o, u = [],
                        a = 0,
                        f = e.length,
                        l = e instanceof r || f !== t && typeof f == "number" && (f > 0 && e[0] && e[f - 1] || f === 0 || r.isArray(e));
                    if (l) for (; a < f; a++) s = n(e[a], a, i), s != null && (u[u.length] = s);
                    else for (o in e) s = n(e[o], o, i), s != null && (u[u.length] = s);
                    return u.concat.apply([], u)
                },
                guid: 1,
                proxy: function (e, n) {
                    if (typeof n == "string") {
                        var i = e[n];
                        n = e, e = i
                    }
                    if (!r.isFunction(e)) return t;
                    var s = O.call(arguments, 2),
                        o = function () {
                            return e.apply(n, s.concat(O.call(arguments)))
                        };
                    return o.guid = e.guid = e.guid || o.guid || r.guid++, o
                },
                access: function (e, n, i, s, o, u) {
                    var a = e.length;
                    if (typeof n == "object") {
                        for (var f in n) r.access(e, f, n[f], s, o, i);
                        return e
                    }
                    if (i !== t) {
                        s = !u && s && r.isFunction(i);
                        for (var l = 0; l < a; l++) o(e[l], n, s ? i.call(e[l], l, o(e[l], n)) : i, u);
                        return e
                    }
                    return a ? o(e[0], n) : t
                },
                now: function () {
                    return (new Date).getTime()
                },
                uaMatch: function (e) {
                    e = e.toLowerCase();
                    var t = m.exec(e) || g.exec(e) || y.exec(e) || e.indexOf("compatible") < 0 && b.exec(e) || [];
                    return {
                        browser: t[1] || "",
                        version: t[2] || "0"
                    }
                },
                sub: function () {
                    function e(t, n) {
                        return new e.fn.init(t, n)
                    }
                    r.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function (n, i) {
                        return i && i instanceof r && !(i instanceof e) && (i = e(i)), r.fn.init.call(this, n, i, t)
                    }, e.fn.init.prototype = e.fn;
                    var t = e(D);
                    return e
                },
                browser: {}
            }), r.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
                H["[object " + t + "]"] = t.toLowerCase()
            }), T = r.uaMatch(x), T.browser && (r.browser[T.browser] = !0, r.browser.version = T.version), r.browser.webkit && (r.browser.safari = !0), a.test(" ") && (f = /^[\s\xA0]+/, l = /[\s\xA0]+$/), o = r(D), D.addEventListener ? C = function () {
                D.removeEventListener("DOMContentLoaded", C, !1), r.ready()
            } : D.attachEvent && (C = function () {
                D.readyState === "complete" && (D.detachEvent("onreadystatechange", C), r.ready())
            }), r
        }(),
        j = {};
    B.Callbacks = function (e) {
        e = e ? j[e] || _(e) : {};
        var n = [],
            r = [],
            i, s, o, u, a, f = function (t) {
                var r, i, s, o, u;
                for (r = 0, i = t.length; r < i; r++) s = t[r], o = B.type(s), o === "array" ? f(s) : o === "function" && (!e.unique || !c.has(s)) && n.push(s)
            }, l = function (t, f) {
                f = f || [], i = !e.memory || [t, f], s = !0, a = o || 0, o = 0, u = n.length;
                for (; n && a < u; a++) if (n[a].apply(t, f) === !1 && e.stopOnFalse) {
                    i = !0;
                    break
                }
                s = !1, n && (e.once ? i === !0 ? c.disable() : n = [] : r && r.length && (i = r.shift(), c.fireWith(i[0], i[1])))
            }, c = {
                add: function () {
                    if (n) {
                        var e = n.length;
                        f(arguments), s ? u = n.length : i && i !== !0 && (o = e, l(i[0], i[1]))
                    }
                    return this
                },
                remove: function () {
                    if (n) {
                        var t = arguments,
                            r = 0,
                            i = t.length;
                        for (; r < i; r++) for (var o = 0; o < n.length; o++) if (t[r] === n[o]) {
                            s && o <= u && (u--, o <= a && a--), n.splice(o--, 1);
                            if (e.unique) break
                        }
                    }
                    return this
                },
                has: function (e) {
                    if (n) {
                        var t = 0,
                            r = n.length;
                        for (; t < r; t++) if (e === n[t]) return !0
                    }
                    return !1
                },
                empty: function () {
                    return n = [], this
                },
                disable: function () {
                    return n = r = i = t, this
                },
                disabled: function () {
                    return !n
                },
                lock: function () {
                    return r = t, (!i || i === !0) && c.disable(), this
                },
                locked: function () {
                    return !r
                },
                fireWith: function (t, n) {
                    return r && (s ? e.once || r.push([t, n]) : (!e.once || !i) && l(t, n)), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return c
    };
    var F = [].slice;
    B.extend({
        Deferred: function (e) {
            var t = B.Callbacks("once memory"),
                n = B.Callbacks("once memory"),
                r = B.Callbacks("memory"),
                i = "pending",
                s = {
                    resolve: t,
                    reject: n,
                    notify: r
                }, o = {
                    done: t.add,
                    fail: n.add,
                    progress: r.add,
                    state: function () {
                        return i
                    },
                    isResolved: t.fired,
                    isRejected: n.fired,
                    then: function (e, t, n) {
                        return u.done(e).fail(t).progress(n), this
                    },
                    always: function () {
                        return u.done.apply(u, arguments).fail.apply(u, arguments), this
                    },
                    pipe: function (e, t, n) {
                        return B.Deferred(function (r) {
                            B.each({
                                done: [e, "resolve"],
                                fail: [t, "reject"],
                                progress: [n, "notify"]
                            }, function (e, t) {
                                var n = t[0],
                                    i = t[1],
                                    s;
                                B.isFunction(n) ? u[e](function () {
                                    s = n.apply(this, arguments), s && B.isFunction(s.promise) ? s.promise().then(r.resolve, r.reject, r.notify) : r[i + "With"](this === u ? r : this, [s])
                                }) : u[e](r[i])
                            })
                        }).promise()
                    },
                    promise: function (e) {
                        if (e == null) e = o;
                        else for (var t in o) e[t] = o[t];
                        return e
                    }
                }, u = o.promise({}),
                a;
            for (a in s) u[a] = s[a].fire, u[a + "With"] = s[a].fireWith;
            return u.done(function () {
                i = "resolved"
            }, n.disable, r.lock).fail(function () {
                i = "rejected"
            }, t.disable, r.lock), e && e.call(u, u), u
        },
        when: function (e) {
            function t(e) {
                return function (t) {
                    o[e] = arguments.length > 1 ? F.call(arguments, 0) : t, f.notifyWith(l, o)
                }
            }
            function n(e) {
                return function (t) {
                    r[e] = arguments.length > 1 ? F.call(arguments, 0) : t, --u || f.resolveWith(f, r)
                }
            }
            var r = F.call(arguments, 0),
                i = 0,
                s = r.length,
                o = Array(s),
                u = s,
                a = s,
                f = s <= 1 && e && B.isFunction(e.promise) ? e : B.Deferred(),
                l = f.promise();
            if (s > 1) {
                for (; i < s; i++) r[i] && r[i].promise && B.isFunction(r[i].promise) ? r[i].promise().then(n(i), f.reject, t(i)) : --u;
                u || f.resolveWith(f, r)
            } else f !== e && f.resolveWith(f, s ? [e] : []);
            return l
        }
    }), B.support = function () {
        var t, n, r, i, s, o, u, a, f, l, c, h, p, d = D.createElement("div"),
            v = D.documentElement;
        d.setAttribute("className", "t"), d.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0];
        if (!n || !n.length || !r) return {};
        i = D.createElement("select"), s = i.appendChild(D.createElement("option")), o = d.getElementsByTagName("input")[0], t = {
            leadingWhitespace: d.firstChild.nodeType === 3,
            tbody: !d.getElementsByTagName("tbody").length,
            htmlSerialize: !! d.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: r.getAttribute("href") === "/a",
            opacity: /^0.55/.test(r.style.opacity),
            cssFloat: !! r.style.cssFloat,
            checkOn: o.value === "on",
            optSelected: s.selected,
            getSetAttribute: d.className !== "t",
            enctype: !! D.createElement("form").enctype,
            html5Clone: D.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !s.disabled;
        try {
            delete d.test
        } catch (m) {
            t.deleteExpando = !1
        }!d.addEventListener && d.attachEvent && d.fireEvent && (d.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).fireEvent("onclick")), o = D.createElement("input"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = o.value === "t", o.setAttribute("checked", "checked"), d.appendChild(o), a = D.createDocumentFragment(), a.appendChild(d.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = o.checked, a.removeChild(o), a.appendChild(d), d.innerHTML = "", e.getComputedStyle && (u = D.createElement("div"), u.style.width = "0", u.style.marginRight = "0", d.style.width = "2px", d.appendChild(u), t.reliableMarginRight = (parseInt((e.getComputedStyle(u, null) || {
            marginRight: 0
        }).marginRight, 10) || 0) === 0);
        if (d.attachEvent) for (h in {
            submit: 1,
            change: 1,
            focusin: 1
        }) c = "on" + h, p = c in d, p || (d.setAttribute(c, "return;"), p = typeof d[c] == "function"), t[h + "Bubbles"] = p;
        return a.removeChild(d), a = i = s = u = d = o = null, B(function () {
            var e, n, r, i, s, o, u, a, l, c, h, v = D.getElementsByTagName("body")[0];
            !v || (u = 1, a = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;", l = "visibility:hidden;border:0;", c = "style='" + a + "border:5px solid #000;padding:0;'", h = "<div " + c + "><div></div></div>" + "<table " + c + " cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", e = D.createElement("div"), e.style.cssText = l + "width:0;height:0;position:static;top:0;margin-top:" + u + "px", v.insertBefore(e, v.firstChild), d = D.createElement("div"), e.appendChild(d), d.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", f = d.getElementsByTagName("td"), p = f[0].offsetHeight === 0, f[0].style.display = "", f[1].style.display = "none", t.reliableHiddenOffsets = p && f[0].offsetHeight === 0, d.innerHTML = "", d.style.width = d.style.paddingLeft = "1px", B.boxModel = t.boxModel = d.offsetWidth === 2, typeof d.style.zoom != "undefined" && (d.style.display = "inline", d.style.zoom = 1, t.inlineBlockNeedsLayout = d.offsetWidth === 2, d.style.display = "", d.innerHTML = "<div style='width:4px;'></div>", t.shrinkWrapBlocks = d.offsetWidth !== 2), d.style.cssText = a + l, d.innerHTML = h, n = d.firstChild, r = n.firstChild, s = n.nextSibling.firstChild.firstChild, o = {
                doesNotAddBorder: r.offsetTop !== 5,
                doesAddBorderForTableAndCells: s.offsetTop === 5
            }, r.style.position = "fixed", r.style.top = "20px", o.fixedPosition = r.offsetTop === 20 || r.offsetTop === 15, r.style.position = r.style.top = "", n.style.overflow = "hidden", n.style.position = "relative", o.subtractsBorderForOverflowNotVisible = r.offsetTop === -5, o.doesNotIncludeMarginInBodyOffset = v.offsetTop !== u, v.removeChild(e), d = e = null, B.extend(t, o))
        }), t
    }();
    var I = /^(?:\{.*\}|\[.*\])$/,
        q = /([A-Z])/g;
    B.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (B.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (e) {
            return e = e.nodeType ? B.cache[e[B.expando]] : e[B.expando], !! e && !O(e)
        },
        data: function (e, n, r, i) {
            if ( !! B.acceptData(e)) {
                var s, o, u, a = B.expando,
                    f = typeof n == "string",
                    l = e.nodeType,
                    c = l ? B.cache : e,
                    h = l ? e[a] : e[a] && a,
                    p = n === "events";
                if ((!h || !c[h] || !p && !i && !c[h].data) && f && r === t) return;
                h || (l ? e[a] = h = ++B.uuid : h = a), c[h] || (c[h] = {}, l || (c[h].toJSON = B.noop));
                if (typeof n == "object" || typeof n == "function") i ? c[h] = B.extend(c[h], n) : c[h].data = B.extend(c[h].data, n);
                return s = o = c[h], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[B.camelCase(n)] = r), p && !o[n] ? s.events : (f ? (u = o[n], u == null && (u = o[B.camelCase(n)])) : u = o, u)
            }
        },
        removeData: function (e, t, n) {
            if ( !! B.acceptData(e)) {
                var r, i, s, o = B.expando,
                    u = e.nodeType,
                    a = u ? B.cache : e,
                    f = u ? e[o] : o;
                if (!a[f]) return;
                if (t) {
                    r = n ? a[f] : a[f].data;
                    if (r) {
                        B.isArray(t) || (t in r ? t = [t] : (t = B.camelCase(t), t in r ? t = [t] : t = t.split(" ")));
                        for (i = 0, s = t.length; i < s; i++) delete r[t[i]];
                        if (!(n ? O : B.isEmptyObject)(r)) return
                    }
                }
                if (!n) {
                    delete a[f].data;
                    if (!O(a[f])) return
                }
                B.support.deleteExpando || !a.setInterval ? delete a[f] : a[f] = null, u && (B.support.deleteExpando ? delete e[o] : e.removeAttribute ? e.removeAttribute(o) : e[o] = null)
            }
        },
        _data: function (e, t, n) {
            return B.data(e, t, n, !0)
        },
        acceptData: function (e) {
            if (e.nodeName) {
                var t = B.noData[e.nodeName.toLowerCase()];
                if (t) return t !== !0 && e.getAttribute("classid") === t
            }
            return !0
        }
    }), B.fn.extend({
        data: function (e, n) {
            var r, i, s, o = null;
            if (typeof e == "undefined") {
                if (this.length) {
                    o = B.data(this[0]);
                    if (this[0].nodeType === 1 && !B._data(this[0], "parsedAttrs")) {
                        i = this[0].attributes;
                        for (var u = 0, a = i.length; u < a; u++) s = i[u].name, s.indexOf("data-") === 0 && (s = B.camelCase(s.substring(5)), M(this[0], s, o[s]));
                        B._data(this[0], "parsedAttrs", !0)
                    }
                }
                return o
            }
            return typeof e == "object" ? this.each(function () {
                B.data(this, e)
            }) : (r = e.split("."), r[1] = r[1] ? "." + r[1] : "", n === t ? (o = this.triggerHandler("getData" + r[1] + "!", [r[0]]), o === t && this.length && (o = B.data(this[0], e), o = M(this[0], e, o)), o === t && r[1] ? this.data(r[0]) : o) : this.each(function () {
                var t = B(this),
                    i = [r[0], n];
                t.triggerHandler("setData" + r[1] + "!", i), B.data(this, e, n), t.triggerHandler("changeData" + r[1] + "!", i)
            }))
        },
        removeData: function (e) {
            return this.each(function () {
                B.removeData(this, e)
            })
        }
    }), B.extend({
        _mark: function (e, t) {
            e && (t = (t || "fx") + "mark", B._data(e, t, (B._data(e, t) || 0) + 1))
        },
        _unmark: function (e, t, n) {
            e !== !0 && (n = t, t = e, e = !1);
            if (t) {
                n = n || "fx";
                var r = n + "mark",
                    i = e ? 0 : (B._data(t, r) || 1) - 1;
                i ? B._data(t, r, i) : (B.removeData(t, r, !0), A(t, n, "mark"))
            }
        },
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = B._data(e, t), n && (!r || B.isArray(n) ? r = B._data(e, t, B.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = B.queue(e, t),
                r = n.shift(),
                i = {};
            r === "inprogress" && (r = n.shift()), r && (t === "fx" && n.unshift("inprogress"), B._data(e, t + ".run", i), r.call(e, function () {
                B.dequeue(e, t)
            }, i)), n.length || (B.removeData(e, t + "queue " + t + ".run", !0), A(e, t, "queue"))
        }
    }), B.fn.extend({
        queue: function (e, n) {
            return typeof e != "string" && (n = e, e = "fx"), n === t ? B.queue(this[0], e) : this.each(function () {
                var t = B.queue(this, e, n);
                e === "fx" && t[0] !== "inprogress" && B.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                B.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = B.fx ? B.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            function r() {
                --u || i.resolveWith(s, [s])
            }
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            var i = B.Deferred(),
                s = this,
                o = s.length,
                u = 1,
                a = e + "defer",
                f = e + "queue",
                l = e + "mark",
                c;
            while (o--) if (c = B.data(s[o], a, t, !0) || (B.data(s[o], f, t, !0) || B.data(s[o], l, t, !0)) && B.data(s[o], a, B.Callbacks("once memory"), !0)) u++, c.add(r);
            return r(), i.promise()
        }
    });
    var R = /[\n\t\r]/g,
        U = /\s+/,
        z = /\r/g,
        W = /^(?:button|input)$/i,
        X = /^(?:button|input|object|select|textarea)$/i,
        V = /^a(?:rea)?$/i,
        $ = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        J = B.support.getSetAttribute,
        K, Q, G;
    B.fn.extend({
        attr: function (e, t) {
            return B.access(this, e, t, !0, B.attr)
        },
        removeAttr: function (e) {
            return this.each(function () {
                B.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return B.access(this, e, t, !0, B.prop)
        },
        removeProp: function (e) {
            return e = B.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function (e) {
            var t, n, r, i, s, o, u;
            if (B.isFunction(e)) return this.each(function (t) {
                B(this).addClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string") {
                t = e.split(U);
                for (n = 0, r = this.length; n < r; n++) {
                    i = this[n];
                    if (i.nodeType === 1) if (!i.className && t.length === 1) i.className = e;
                    else {
                        s = " " + i.className + " ";
                        for (o = 0, u = t.length; o < u; o++)~s.indexOf(" " + t[o] + " ") || (s += t[o] + " ");
                        i.className = B.trim(s)
                    }
                }
            }
            return this
        },
        removeClass: function (e) {
            var n, r, i, s, o, u, a;
            if (B.isFunction(e)) return this.each(function (t) {
                B(this).removeClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string" || e === t) {
                n = (e || "").split(U);
                for (r = 0, i = this.length; r < i; r++) {
                    s = this[r];
                    if (s.nodeType === 1 && s.className) if (e) {
                        o = (" " + s.className + " ").replace(R, " ");
                        for (u = 0, a = n.length; u < a; u++) o = o.replace(" " + n[u] + " ", " ");
                        s.className = B.trim(o)
                    } else s.className = ""
                }
            }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = typeof t == "boolean";
            return B.isFunction(e) ? this.each(function (n) {
                B(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if (n === "string") {
                    var i, s = 0,
                        o = B(this),
                        u = t,
                        a = e.split(U);
                    while (i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i)
                } else if (n === "undefined" || n === "boolean") this.className && B._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : B._data(this, "__className__") || ""
            })
        },
        hasClass: function (e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; n < r; n++) if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(R, " ").indexOf(t) > -1) return !0;
            return !1
        },
        val: function (e) {
            var n, r, i, s = this[0];
            if ( !! arguments.length) return i = B.isFunction(e), this.each(function (r) {
                var s = B(this),
                    o;
                if (this.nodeType === 1) {
                    i ? o = e.call(this, r, s.val()) : o = e, o == null ? o = "" : typeof o == "number" ? o += "" : B.isArray(o) && (o = B.map(o, function (e) {
                        return e == null ? "" : e + ""
                    })), n = B.valHooks[this.nodeName.toLowerCase()] || B.valHooks[this.type];
                    if (!n || !("set" in n) || n.set(this, o, "value") === t) this.value = o
                }
            });
            if (s) return n = B.valHooks[s.nodeName.toLowerCase()] || B.valHooks[s.type], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(z, "") : r == null ? "" : r)
        }
    }), B.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function (e) {
                    var t, n, r, i, s = e.selectedIndex,
                        o = [],
                        u = e.options,
                        a = e.type === "select-one";
                    if (s < 0) return null;
                    n = a ? s : 0, r = a ? s + 1 : u.length;
                    for (; n < r; n++) {
                        i = u[n];
                        if (i.selected && (B.support.optDisabled ? !i.disabled : i.getAttribute("disabled") === null) && (!i.parentNode.disabled || !B.nodeName(i.parentNode, "optgroup"))) {
                            t = B(i).val();
                            if (a) return t;
                            o.push(t)
                        }
                    }
                    return a && !o.length && u.length ? B(u[s]).val() : o
                },
                set: function (e, t) {
                    var n = B.makeArray(t);
                    return B(e).find("option").each(function () {
                        this.selected = B.inArray(B(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function (e, n, r, i) {
            var s, o, u, a = e.nodeType;
            if ( !! e && a !== 3 && a !== 8 && a !== 2) {
                if (i && n in B.attrFn) return B(e)[n](r);
                if (typeof e.getAttribute == "undefined") return B.prop(e, n, r);
                u = a !== 1 || !B.isXMLDoc(e), u && (n = n.toLowerCase(), o = B.attrHooks[n] || ($.test(n) ? Q : K));
                if (r !== t) {
                    if (r === null) {
                        B.removeAttr(e, n);
                        return
                    }
                    return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, "" + r), r)
                }
                return o && "get" in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s)
            }
        },
        removeAttr: function (e, t) {
            var n, r, i, s, o = 0;
            if (t && e.nodeType === 1) {
                r = t.toLowerCase().split(U), s = r.length;
                for (; o < s; o++) i = r[o], i && (n = B.propFix[i] || i, B.attr(e, i, ""), e.removeAttribute(J ? i : n), $.test(i) && n in e && (e[n] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (W.test(e.nodeName) && e.parentNode) B.error("type property can't be changed");
                    else if (!B.support.radioValue && t === "radio" && B.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            value: {
                get: function (e, t) {
                    return K && B.nodeName(e, "button") ? K.get(e, t) : t in e ? e.value : null
                },
                set: function (e, t, n) {
                    if (K && B.nodeName(e, "button")) return K.set(e, t, n);
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, r) {
            var i, s, o, u = e.nodeType;
            if ( !! e && u !== 3 && u !== 8 && u !== 2) return o = u !== 1 || !B.isXMLDoc(e), o && (n = B.propFix[n] || n, s = B.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : X.test(e.nodeName) || V.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), B.attrHooks.tabindex = B.propHooks.tabIndex, Q = {
        get: function (e, n) {
            var r, i = B.prop(e, n);
            return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function (e, t, n) {
            var r;
            return t === !1 ? B.removeAttr(e, n) : (r = B.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, J || (G = {
        name: !0,
        id: !0
    }, K = B.valHooks.button = {
        get: function (e, n) {
            var r;
            return r = e.getAttributeNode(n), r && (G[n] ? r.nodeValue !== "" : r.specified) ? r.nodeValue : t
        },
        set: function (e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = D.createAttribute(n), e.setAttributeNode(r)), r.nodeValue = t + ""
        }
    }, B.attrHooks.tabindex.set = K.set, B.each(["width", "height"], function (e, t) {
        B.attrHooks[t] = B.extend(B.attrHooks[t], {
            set: function (e, n) {
                if (n === "") return e.setAttribute(t, "auto"), n
            }
        })
    }), B.attrHooks.contenteditable = {
        get: K.get,
        set: function (e, t, n) {
            t === "" && (t = "false"), K.set(e, t, n)
        }
    }), B.support.hrefNormalized || B.each(["href", "src", "width", "height"], function (e, n) {
        B.attrHooks[n] = B.extend(B.attrHooks[n], {
            get: function (e) {
                var r = e.getAttribute(n, 2);
                return r === null ? t : r
            }
        })
    }), B.support.style || (B.attrHooks.style = {
        get: function (e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function (
        e, t) {
            return e.style.cssText = "" + t
        }
    }), B.support.optSelected || (B.propHooks.selected = B.extend(B.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), B.support.enctype || (B.propFix.enctype = "encoding"), B.support.checkOn || B.each(["radio", "checkbox"], function () {
        B.valHooks[this] = {
            get: function (e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    }), B.each(["radio", "checkbox"], function () {
        B.valHooks[this] = B.extend(B.valHooks[this], {
            set: function (e, t) {
                if (B.isArray(t)) return e.checked = B.inArray(B(e).val(), t) >= 0
            }
        })
    });
    var Y = /^(?:textarea|input|select)$/i,
        Z = /^([^\.]*)?(?:\.(.+))?$/,
        et = /\bhover(\.\S+)?\b/,
        tt = /^key/,
        nt = /^(?:mouse|contextmenu)|click/,
        rt = /^(?:focusinfocus|focusoutblur)$/,
        it = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        st = function (e) {
            var t = it.exec(e);
            return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")), t
        }, ot = function (e, t) {
            var n = e.attributes || {};
            return (!t[1] || e.nodeName.toLowerCase() === t[1]) && (!t[2] || (n.id || {}).value === t[2]) && (!t[3] || t[3].test((n["class"] || {}).value))
        }, ut = function (e) {
            return B.event.special.hover ? e : e.replace(et, "mouseenter$1 mouseleave$1")
        };
    B.event = {
        add: function (e, n, r, i, s) {
            var o, u, a, f, l, c, h, p, d, v, m, g;
            if (!(e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = B._data(e)))) {
                r.handler && (d = r, r = d.handler), r.guid || (r.guid = B.guid++), a = o.events, a || (o.events = a = {}), u = o.handle, u || (o.handle = u = function (e) {
                    return typeof B == "undefined" || !! e && B.event.triggered === e.type ? t : B.event.dispatch.apply(u.elem, arguments)
                }, u.elem = e), n = B.trim(ut(n)).split(" ");
                for (f = 0; f < n.length; f++) {
                    l = Z.exec(n[f]) || [], c = l[1], h = (l[2] || "").split(".").sort(), g = B.event.special[c] || {}, c = (s ? g.delegateType : g.bindType) || c, g = B.event.special[c] || {}, p = B.extend({
                        type: c,
                        origType: l[1],
                        data: i,
                        handler: r,
                        guid: r.guid,
                        selector: s,
                        quick: st(s),
                        namespace: h.join(".")
                    }, d), m = a[c];
                    if (!m) {
                        m = a[c] = [], m.delegateCount = 0;
                        if (!g.setup || g.setup.call(e, i, h, u) === !1) e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u)
                    }
                    g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? m.splice(m.delegateCount++, 0, p) : m.push(p), B.event.global[c] = !0
                }
                e = null
            }
        },
        global: {},
        remove: function (e, t, n, r, i) {
            var s = B.hasData(e) && B._data(e),
                o, u, a, f, l, c, h, p, d, v, m, g;
            if ( !! s && !! (p = s.events)) {
                t = B.trim(ut(t || "")).split(" ");
                for (o = 0; o < t.length; o++) {
                    u = Z.exec(t[o]) || [], a = f = u[1], l = u[2];
                    if (!a) {
                        for (a in p) B.event.remove(e, a + t[o], n, r, !0);
                        continue
                    }
                    d = B.event.special[a] || {}, a = (r ? d.delegateType : d.bindType) || a, m = p[a] || [], c = m.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    for (h = 0; h < m.length; h++) g = m[h], (i || f === g.origType) && (!n || n.guid === g.guid) && (!l || l.test(g.namespace)) && (!r || r === g.selector || r === "**" && g.selector) && (m.splice(h--, 1), g.selector && m.delegateCount--, d.remove && d.remove.call(e, g));
                    m.length === 0 && c !== m.length && ((!d.teardown || d.teardown.call(e, l) === !1) && B.removeEvent(e, a, s.handle), delete p[a])
                }
                B.isEmptyObject(p) && (v = s.handle, v && (v.elem = null), B.removeData(e, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (n, r, i, s) {
            if (!i || i.nodeType !== 3 && i.nodeType !== 8) {
                var o = n.type || n,
                    u = [],
                    a, f, l, c, h, p, d, v, m, g;
                if (rt.test(o + B.event.triggered)) return;
                o.indexOf("!") >= 0 && (o = o.slice(0, -1), f = !0), o.indexOf(".") >= 0 && (u = o.split("."), o = u.shift(), u.sort());
                if ((!i || B.event.customEvent[o]) && !B.event.global[o]) return;
                n = typeof n == "object" ? n[B.expando] ? n : new B.Event(o, n) : new B.Event(o), n.type = o, n.isTrigger = !0, n.exclusive = f, n.namespace = u.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + u.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, p = o.indexOf(":") < 0 ? "on" + o : "";
                if (!i) {
                    a = B.cache;
                    for (l in a) a[l].events && a[l].events[o] && B.event.trigger(n, r, a[l].handle.elem, !0);
                    return
                }
                n.result = t, n.target || (n.target = i), r = r != null ? B.makeArray(r) : [], r.unshift(n), d = B.event.special[o] || {};
                if (d.trigger && d.trigger.apply(i, r) === !1) return;
                m = [
                    [i, d.bindType || o]
                ];
                if (!s && !d.noBubble && !B.isWindow(i)) {
                    g = d.delegateType || o, c = rt.test(g + o) ? i : i.parentNode, h = null;
                    for (; c; c = c.parentNode) m.push([c, g]), h = c;
                    h && h === i.ownerDocument && m.push([h.defaultView || h.parentWindow || e, g])
                }
                for (l = 0; l < m.length && !n.isPropagationStopped(); l++) c = m[l][0], n.type = m[l][1], v = (B._data(c, "events") || {})[n.type] && B._data(c, "handle"), v && v.apply(c, r), v = p && c[p], v && B.acceptData(c) && v.apply(c, r) === !1 && n.preventDefault();
                return n.type = o, !s && !n.isDefaultPrevented() && (!d._default || d._default.apply(i.ownerDocument, r) === !1) && (o !== "click" || !B.nodeName(i, "a")) && B.acceptData(i) && p && i[o] && (o !== "focus" && o !== "blur" || n.target.offsetWidth !== 0) && !B.isWindow(i) && (h = i[p], h && (i[p] = null), B.event.triggered = o, i[o](), B.event.triggered = t, h && (i[p] = h)), n.result
            }
        },
        dispatch: function (n) {
            n = B.event.fix(n || e.event);
            var r = (B._data(this, "events") || {})[n.type] || [],
                i = r.delegateCount,
                s = [].slice.call(arguments, 0),
                o = !n.exclusive && !n.namespace,
                u = [],
                a, f, l, c, h, p, d, v, m, g, y;
            s[0] = n, n.delegateTarget = this;
            if (i && !n.target.disabled && (!n.button || n.type !== "click")) {
                c = B(this), c.context = this.ownerDocument || this;
                for (l = n.target; l != this; l = l.parentNode || this) {
                    p = {}, v = [], c[0] = l;
                    for (a = 0; a < i; a++) m = r[a], g = m.selector, p[g] === t && (p[g] = m.quick ? ot(l, m.quick) : c.is(g)), p[g] && v.push(m);
                    v.length && u.push({
                        elem: l,
                        matches: v
                    })
                }
            }
            r.length > i && u.push({
                elem: this,
                matches: r.slice(i)
            });
            for (a = 0; a < u.length && !n.isPropagationStopped(); a++) {
                d = u[a], n.currentTarget = d.elem;
                for (f = 0; f < d.matches.length && !n.isImmediatePropagationStopped(); f++) {
                    m = d.matches[f];
                    if (o || !n.namespace && !m.namespace || n.namespace_re && n.namespace_re.test(m.namespace)) n.data = m.data, n.handleObj = m, h = ((B.event.special[m.origType] || {}).handle || m.handler).apply(d.elem, s), h !== t && (n.result = h, h === !1 && (n.preventDefault(), n.stopPropagation()))
                }
            }
            return n.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, s, o = n.button,
                    u = n.fromElement;
                return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || D, i = r.documentElement, s = r.body, e.pageX = n.clientX + (i && i.scrollLeft || s && s.scrollLeft || 0) - (i && i.clientLeft || s && s.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || s && s.scrollTop || 0) - (i && i.clientTop || s && s.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), !e.which && o !== t && (e.which = o & 1 ? 1 : o & 2 ? 3 : o & 4 ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[B.expando]) return e;
            var n, r, i = e,
                s = B.event.fixHooks[e.type] || {}, o = s.props ? this.props.concat(s.props) : this.props;
            e = B.Event(i);
            for (n = o.length; n;) r = o[--n], e[r] = i[r];
            return e.target || (e.target = i.srcElement || D), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey === t && (e.metaKey = e.ctrlKey), s.filter ? s.filter(e, i) : e
        },
        special: {
            ready: {
                setup: B.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function (e, t, n) {
                    B.isWindow(this) && (this.onbeforeunload = n)
                },
                teardown: function (e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = B.extend(new B.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? B.event.trigger(i, null, t) : B.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, B.event.handle = B.event.dispatch, B.removeEvent = D.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        e.detachEvent && e.detachEvent("on" + t, n)
    }, B.Event = function (e, t) {
        if (!(this instanceof B.Event)) return new B.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? k : L) : this.type = e, t && B.extend(this, t), this.timeStamp = e && e.timeStamp || B.now(), this[B.expando] = !0
    }, B.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = k;
            var e = this.originalEvent;
            !e || (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            this.isPropagationStopped = k;
            var e = this.originalEvent;
            !e || (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = k, this.stopPropagation()
        },
        isDefaultPrevented: L,
        isPropagationStopped: L,
        isImmediatePropagationStopped: L
    }, B.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        B.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n = this,
                    r = e.relatedTarget,
                    i = e.handleObj,
                    s = i.selector,
                    o;
                if (!r || r !== n && !B.contains(n, r)) e.type = i.origType, o = i.handler.apply(this, arguments), e.type = t;
                return o
            }
        }
    }), B.support.submitBubbles || (B.event.special.submit = {
        setup: function () {
            if (B.nodeName(this, "form")) return !1;
            B.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target,
                    r = B.nodeName(n, "input") || B.nodeName(n, "button") ? n.form : t;
                r && !r._submit_attached && (B.event.add(r, "submit._submit", function (e) {
                    this.parentNode && !e.isTrigger && B.event.simulate("submit", this.parentNode, e, !0)
                }), r._submit_attached = !0)
            })
        },
        teardown: function () {
            if (B.nodeName(this, "form")) return !1;
            B.event.remove(this, "._submit")
        }
    }), B.support.changeBubbles || (B.event.special.change = {
        setup: function () {
            if (Y.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") B.event.add(this, "propertychange._change", function (e) {
                    e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), B.event.add(this, "click._change", function (e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1, B.event.simulate("change", this, e, !0))
                });
                return !1
            }
            B.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Y.test(t.nodeName) && !t._change_attached && (B.event.add(t, "change._change", function (e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && B.event.simulate("change", this.parentNode, e, !0)
                }), t._change_attached = !0)
            })
        },
        handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return B.event.remove(this, "._change"), Y.test(this.nodeName)
        }
    }), B.support.focusinBubbles || B.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = 0,
            r = function (e) {
                B.event.simulate(t, e.target, B.event.fix(e), !0)
            };
        B.event.special[t] = {
            setup: function () {
                n++ === 0 && D.addEventListener(e, r, !0)
            },
            teardown: function () {
                --n === 0 && D.removeEventListener(e, r, !0)
            }
        }
    }), B.fn.extend({
        on: function (e, n, r, i, s) {
            var o, u;
            if (typeof e == "object") {
                typeof n != "string" && (r = n, n = t);
                for (u in e) this.on(u, n, r, e[u], s);
                return this
            }
            r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
            if (i === !1) i = L;
            else if (!i) return this;
            return s === 1 && (o = i, i = function (e) {
                return B().off(e), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = B.guid++)), this.each(function () {
                B.event.add(this, e, i, r, n)
            })
        },
        one: function (e, t, n, r) {
            return this.on.call(this, e, t, n, r, 1)
        },
        off: function (e, n, r) {
            if (e && e.preventDefault && e.handleObj) {
                var i = e.handleObj;
                return B(e.delegateTarget).off(i.namespace ? i.type + "." + i.namespace : i.type, i.selector, i.handler), this
            }
            if (typeof e == "object") {
                for (var s in e) this.off(s, n, e[s]);
                return this
            }
            if (n === !1 || typeof n == "function") r = n, n = t;
            return r === !1 && (r = L), this.each(function () {
                B.event.remove(this, e, r, n)
            })
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        live: function (e, t, n) {
            return B(this.context).on(e, this.selector, t, n), this
        },
        die: function (e, t) {
            return B(this.context).off(e, this.selector || "**", t), this
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return arguments.length == 1 ? this.off(e, "**") : this.off(t, e, n)
        },
        trigger: function (e, t) {
            return this.each(function () {
                B.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            if (this[0]) return B.event.trigger(e, t, this[0], !0)
        },
        toggle: function (e) {
            var t = arguments,
                n = e.guid || B.guid++,
                r = 0,
                i = function (n) {
                    var i = (B._data(this, "lastToggle" + e.guid) || 0) % r;
                    return B._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
                };
            i.guid = n;
            while (r < t.length) t[r++].guid = n;
            return this.click(i)
        },
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), B.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        B.fn[t] = function (e, n) {
            return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }, B.attrFn && (B.attrFn[t] = !0), tt.test(t) && (B.event.fixHooks[t] = B.event.keyHooks), nt.test(t) && (B.event.fixHooks[t] = B.event.mouseHooks)
    }),
    function () {
        function e(e, t, n, r, s, o) {
            for (var u = 0, a = r.length; u < a; u++) {
                var f = r[u];
                if (f) {
                    var l = !1;
                    f = f[e];
                    while (f) {
                        if (f[i] === n) {
                            l = r[f.sizset];
                            break
                        }
                        if (f.nodeType === 1) {
                            o || (f[i] = n, f.sizset = u);
                            if (typeof t != "string") {
                                if (f === t) {
                                    l = !0;
                                    break
                                }
                            } else if (h.filter(t, [f]).length > 0) {
                                l = f;
                                break
                            }
                        }
                        f = f[e]
                    }
                    r[u] = l
                }
            }
        }
        function n(e, t, n, r, s, o) {
            for (var u = 0, a = r.length; u < a; u++) {
                var f = r[u];
                if (f) {
                    var l = !1;
                    f = f[e];
                    while (f) {
                        if (f[i] === n) {
                            l = r[f.sizset];
                            break
                        }
                        f.nodeType === 1 && !o && (f[i] = n, f.sizset = u);
                        if (f.nodeName.toLowerCase() === t) {
                            l = f;
                            break
                        }
                        f = f[e]
                    }
                    r[u] = l
                }
            }
        }
        var r = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            i = "sizcache" + (Math.random() + "").replace(".", ""),
            s = 0,
            o = Object.prototype.toString,
            u = !1,
            a = !0,
            f = /\\/g,
            l = /\r\n/g,
            c = /\W/;
        [0, 0].sort(function () {
            return a = !1, 0
        });
        var h = function (e, t, n, i) {
            n = n || [], t = t || D;
            var s = t;
            if (t.nodeType !== 1 && t.nodeType !== 9) return [];
            if (!e || typeof e != "string") return n;
            var u, a, f, l, c, p, m, g, b = !0,
                w = h.isXML(t),
                E = [],
                x = e;
            do {
                r.exec(""), u = r.exec(x);
                if (u) {
                    x = u[3], E.push(u[1]);
                    if (u[2]) {
                        l = u[3];
                        break
                    }
                }
            } while (u);
            if (E.length > 1 && v.exec(e)) if (E.length === 2 && d.relative[E[0]]) a = S(E[0] + E[1], t, i);
            else {
                a = d.relative[E[0]] ? [t] : h(E.shift(), t);
                while (E.length) e = E.shift(), d.relative[e] && (e += E.shift()), a = S(e, a, i)
            } else {
                !i && E.length > 1 && t.nodeType === 9 && !w && d.match.ID.test(E[0]) && !d.match.ID.test(E[E.length - 1]) && (c = h.find(E.shift(), t, w), t = c.expr ? h.filter(c.expr, c.set)[0] : c.set[0]);
                if (t) {
                    c = i ? {
                        expr: E.pop(),
                        set: y(i)
                    } : h.find(E.pop(), E.length !== 1 || E[0] !== "~" && E[0] !== "+" || !t.parentNode ? t : t.parentNode, w), a = c.expr ? h.filter(c.expr, c.set) : c.set, E.length > 0 ? f = y(a) : b = !1;
                    while (E.length) p = E.pop(), m = p, d.relative[p] ? m = E.pop() : p = "", m == null && (m = t), d.relative[p](f, m, w)
                } else f = E = []
            }
            f || (f = a), f || h.error(p || e);
            if (o.call(f) === "[object Array]") if (!b) n.push.apply(n, f);
            else if (t && t.nodeType === 1) for (g = 0; f[g] != null; g++) f[g] && (f[g] === !0 || f[g].nodeType === 1 && h.contains(t, f[g])) && n.push(a[g]);
            else for (g = 0; f[g] != null; g++) f[g] && f[g].nodeType === 1 && n.push(a[g]);
            else y(f, n);
            return l && (h(l, s, n, i), h.uniqueSort(n)), n
        };
        h.uniqueSort = function (e) {
            if (w) {
                u = a, e.sort(w);
                if (u) for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1)
            }
            return e
        }, h.matches = function (e, t) {
            return h(e, null, null, t)
        }, h.matchesSelector = function (e, t) {
            return h(t, null, null, [e]).length > 0
        }, h.find = function (e, t, n) {
            var r, i, s, o, u, a;
            if (!e) return [];
            for (i = 0, s = d.order.length; i < s; i++) {
                u = d.order[i];
                if (o = d.leftMatch[u].exec(e)) {
                    a = o[1], o.splice(1, 1);
                    if (a.substr(a.length - 1) !== "\\") {
                        o[1] = (o[1] || "").replace(f, ""), r = d.find[u](o, t, n);
                        if (r != null) {
                            e = e.replace(d.match[u], "");
                            break
                        }
                    }
                }
            }
            return r || (r = typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName("*") : []), {
                set: r,
                expr: e
            }
        }, h.filter = function (e, n, r, i) {
            var s, o, u, a, f, l, c, p, v, m = e,
                g = [],
                y = n,
                b = n && n[0] && h.isXML(n[0]);
            while (e && n.length) {
                for (u in d.filter) if ((s = d.leftMatch[u].exec(e)) != null && s[2]) {
                    l = d.filter[u], c = s[1], o = !1, s.splice(1, 1);
                    if (c.substr(c.length - 1) === "\\") continue;
                    y === g && (g = []);
                    if (d.preFilter[u]) {
                        s = d.preFilter[u](s, y, r, g, i, b);
                        if (!s) o = a = !0;
                        else if (s === !0) continue
                    }
                    if (s) for (p = 0;
                    (f = y[p]) != null; p++) f && (a = l(f, s, p, y), v = i ^ a, r && a != null ? v ? o = !0 : y[p] = !1 : v && (g.push(f), o = !0));
                    if (a !== t) {
                        r || (y = g), e = e.replace(d.match[u], "");
                        if (!o) return [];
                        break
                    }
                }
                if (e === m) {
                    if (o != null) break;
                    h.error(e)
                }
                m = e
            }
            return y
        }, h.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        };
        var p = h.getText = function (e) {
            var t, n, r = e.nodeType,
                i = "";
            if (r) {
                if (r === 1 || r === 9) {
                    if (typeof e.textContent == "string") return e.textContent;
                    if (typeof e.innerText == "string") return e.innerText.replace(l, "");
                    for (e = e.firstChild; e; e = e.nextSibling) i += p(e)
                } else if (r === 3 || r === 4) return e.nodeValue
            } else for (t = 0; n = e[t]; t++) n.nodeType !== 8 && (i += p(n));
            return i
        }, d = h.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function (e) {
                    return e.getAttribute("href")
                },
                type: function (e) {
                    return e.getAttribute("type")
                }
            },
            relative: {
                "+": function (e, t) {
                    var n = typeof t == "string",
                        r = n && !c.test(t),
                        i = n && !r;
                    r && (t = t.toLowerCase());
                    for (var s = 0, o = e.length, u; s < o; s++) if (u = e[s]) {
                        while ((u = u.previousSibling) && u.nodeType !== 1);
                        e[s] = i || u && u.nodeName.toLowerCase() === t ? u || !1 : u === t
                    }
                    i && h.filter(t, e, !0)
                },
                ">": function (e, t) {
                    var n, r = typeof t == "string",
                        i = 0,
                        s = e.length;
                    if (r && !c.test(t)) {
                        t = t.toLowerCase();
                        for (; i < s; i++) {
                            n = e[i];
                            if (n) {
                                var o = n.parentNode;
                                e[i] = o.nodeName.toLowerCase() === t ? o : !1
                            }
                        }
                    } else {
                        for (; i < s; i++) n = e[i], n && (e[i] = r ? n.parentNode : n.parentNode === t);
                        r && h.filter(t, e, !0)
                    }
                },
                "": function (t, r, i) {
                    var o, u = s++,
                        a = e;
                    typeof r == "string" && !c.test(r) && (r = r.toLowerCase(), o = r, a = n), a("parentNode", r, u, t, o, i)
                },
                "~": function (t, r, i) {
                    var o, u = s++,
                        a = e;
                    typeof r == "string" && !c.test(r) && (r = r.toLowerCase(), o = r, a = n), a("previousSibling", r, u, t, o, i)
                }
            },
            find: {
                ID: function (e, t, n) {
                    if (typeof t.getElementById != "undefined" && !n) {
                        var r = t.getElementById(e[1]);
                        return r && r.parentNode ? [r] : []
                    }
                },
                NAME: function (e, t) {
                    if (typeof t.getElementsByName != "undefined") {
                        var n = [],
                            r = t.getElementsByName(e[1]);
                        for (var i = 0, s = r.length; i < s; i++) r[i].getAttribute("name") === e[1] && n.push(r[i]);
                        return n.length === 0 ? null : n
                    }
                },
                TAG: function (e, t) {
                    if (typeof t.getElementsByTagName != "undefined") return t.getElementsByTagName(e[1])
                }
            },
            preFilter: {
                CLASS: function (e, t, n, r, i, s) {
                    e = " " + e[1].replace(f, "") + " ";
                    if (s) return e;
                    for (var o = 0, u;
                    (u = t[o]) != null; o++) u && (i ^ (u.className && (" " + u.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || r.push(u) : n && (t[o] = !1));
                    return !1
                },
                ID: function (e) {
                    return e[1].replace(f, "")
                },
                TAG: function (e, t) {
                    return e[1].replace(f, "").toLowerCase()
                },
                CHILD: function (e) {
                    if (e[1] === "nth") {
                        e[2] || h.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
                        var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2] === "even" && "2n" || e[2] === "odd" && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                        e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
                    } else e[2] && h.error(e[0]);
                    return e[0] = s++, e
                },
                ATTR: function (e, t, n, r, i, s) {
                    var o = e[1] = e[1].replace(f, "");
                    return !s && d.attrMap[o] && (e[1] = d.attrMap[o]), e[4] = (e[4] || e[5] || "").replace(f, ""), e[2] === "~=" && (e[4] = " " + e[4] + " "), e
                },
                PSEUDO: function (e, t, n, i, s) {
                    if (e[1] === "not") {
                        if (!((r.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
                            var o = h.filter(e[3], t, n, !0 ^ s);
                            return n || i.push.apply(i, o), !1
                        }
                        e[3] = h(e[3], null, null, t)
                    } else if (d.match.POS.test(e[0]) || d.match.CHILD.test(e[0])) return !0;
                    return e
                },
                POS: function (e) {
                    return e.unshift(!0), e
                }
            },
            filters: {
                enabled: function (e) {
                    return e.disabled === !1 && e.type !== "hidden"
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    return e.checked === !0
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                parent: function (e) {
                    return !!e.firstChild
                },
                empty: function (e) {
                    return !e.firstChild
                },
                has: function (e, t, n) {
                    return !!h(n[3], e).length
                },
                header: function (e) {
                    return /h\d/i.test(e.nodeName)
                },
                text: function (e) {
                    var t = e.getAttribute("type"),
                        n = e.type;
                    return e.nodeName.toLowerCase() === "input" && "text" === n && (t === n || t === null)
                },
                radio: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "radio" === e.type
                },
                checkbox: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "checkbox" === e.type
                },
                file: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "file" === e.type
                },
                password: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "password" === e.type
                },
                submit: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (t === "input" || t === "button") && "submit" === e.type
                },
                image: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "image" === e.type
                },
                reset: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (t === "input" || t === "button") && "reset" === e.type
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && "button" === e.type || t === "button"
                },
                input: function (e) {
                    return /input|select|textarea|button/i.test(e.nodeName)
                },
                focus: function (e) {
                    return e === e.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function (e, t) {
                    return t === 0
                },
                last: function (e, t, n, r) {
                    return t === r.length - 1
                },
                even: function (e, t) {
                    return t % 2 === 0
                },
                odd: function (e, t) {
                    return t % 2 === 1
                },
                lt: function (e, t, n) {
                    return t < n[3] - 0
                },
                gt: function (e, t, n) {
                    return t > n[3] - 0
                },
                nth: function (e, t, n) {
                    return n[3] - 0 === t
                },
                eq: function (e, t, n) {
                    return n[3] - 0 === t
                }
            },
            filter: {
                PSEUDO: function (e, t, n, r) {
                    var i = t[1],
                        s = d.filters[i];
                    if (s) return s(e, n, t, r);
                    if (i === "contains") return (e.textContent || e.innerText || p([e]) || "").indexOf(t[3]) >= 0;
                    if (i === "not") {
                        var o = t[3];
                        for (var u = 0, a = o.length; u < a; u++) if (o[u] === e) return !1;
                        return !0
                    }
                    h.error(i)
                },
                CHILD: function (e, t) {
                    var n, r, s, o, u, a, f, l = t[1],
                        c = e;
                    switch (l) {
                        case "only":
                        case "first":
                            while (c = c.previousSibling) if (c.nodeType === 1) return !1;
                            if (l === "first") return !0;
                            c = e;
                        case "last":
                            while (c = c.nextSibling) if (c.nodeType === 1) return !1;
                            return !0;
                        case "nth":
                            n = t[2], r = t[3];
                            if (n === 1 && r === 0) return !0;
                            s = t[0], o = e.parentNode;
                            if (o && (o[i] !== s || !e.nodeIndex)) {
                                a = 0;
                                for (c = o.firstChild; c; c = c.nextSibling) c.nodeType === 1 && (c.nodeIndex = ++a);
                                o[i] = s
                            }
                            return f = e.nodeIndex - r, n === 0 ? f === 0 : f % n === 0 && f / n >= 0
                    }
                },
                ID: function (e, t) {
                    return e.nodeType === 1 && e.getAttribute("id") === t
                },
                TAG: function (e, t) {
                    return t === "*" && e.nodeType === 1 || !! e.nodeName && e.nodeName.toLowerCase() === t
                },
                CLASS: function (e, t) {
                    return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
                },
                ATTR: function (e, t) {
                    var n = t[1],
                        r = h.attr ? h.attr(e, n) : d.attrHandle[n] ? d.attrHandle[n](e) : e[n] != null ? e[n] : e.getAttribute(n),
                        i = r + "",
                        s = t[2],
                        o = t[4];
                    return r == null ? s === "!=" : !s && h.attr ? r != null : s === "=" ? i === o : s === "*=" ? i.indexOf(o) >= 0 : s === "~=" ? (" " + i + " ").indexOf(o) >= 0 : o ? s === "!=" ? i !== o : s === "^=" ? i.indexOf(o) === 0 : s === "$=" ? i.substr(i.length - o.length) === o : s === "|=" ? i === o || i.substr(0, o.length + 1) === o + "-" : !1 : i && r !== !1
                },
                POS: function (e, t, n, r) {
                    var i = t[2],
                        s = d.setFilters[i];
                    if (s) return s(e, n, t, r)
                }
            }
        }, v = d.match.POS,
            m = function (e, t) {
                return "\\" + (t - 0 + 1)
            };
        for (var g in d.match) d.match[g] = new RegExp(d.match[g].source + /(?![^\[]*\])(?![^\(]*\))/.source), d.leftMatch[g] = new RegExp(/(^(?:.|\r|\n)*?)/.source + d.match[g].source.replace(/\\(\d+)/g, m));
        var y = function (e, t) {
            return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e
        };
        try {
            Array.prototype.slice.call(D.documentElement.childNodes, 0)[0].nodeType
        } catch (b) {
            y = function (e, t) {
                var n = 0,
                    r = t || [];
                if (o.call(e) === "[object Array]") Array.prototype.push.apply(r, e);
                else if (typeof e.length == "number") for (var i = e.length; n < i; n++) r.push(e[n]);
                else for (; e[n]; n++) r.push(e[n]);
                return r
            }
        }
        var w, E;
        D.documentElement.compareDocumentPosition ? w = function (e, t) {
            return e === t ? (u = !0, 0) : !e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition ? -1 : 1 : e.compareDocumentPosition(t) & 4 ? -1 : 1
        } : (w = function (e, t) {
            if (e === t) return u = !0, 0;
            if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
            var n, r, i = [],
                s = [],
                o = e.parentNode,
                a = t.parentNode,
                f = o;
            if (o === a) return E(e, t);
            if (!o) return -1;
            if (!a) return 1;
            while (f) i.unshift(f), f = f.parentNode;
            f = a;
            while (f) s.unshift(f), f = f.parentNode;
            n = i.length, r = s.length;
            for (var l = 0; l < n && l < r; l++) if (i[l] !== s[l]) return E(i[l], s[l]);
            return l === n ? E(e, s[l], -1) : E(i[l], t, 1)
        }, E = function (e, t, n) {
            if (e === t) return n;
            var r = e.nextSibling;
            while (r) {
                if (r === t) return -1;
                r = r.nextSibling
            }
            return 1
        }),
        function () {
            var e = D.createElement("div"),
                n = "script" + (new Date).getTime(),
                r = D.documentElement;
            e.innerHTML = "<a name='" + n + "'/>", r.insertBefore(e, r.firstChild), D.getElementById(n) && (d.find.ID = function (e, n, r) {
                if (typeof n.getElementById != "undefined" && !r) {
                    var i = n.getElementById(e[1]);
                    return i ? i.id === e[1] || typeof i.getAttributeNode != "undefined" && i.getAttributeNode("id").nodeValue === e[1] ? [i] : t : []
                }
            }, d.filter.ID = function (e, t) {
                var n = typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id");
                return e.nodeType === 1 && n && n.nodeValue === t
            }), r.removeChild(e), r = e = null
        }(),
        function () {
            var e = D.createElement("div");
            e.appendChild(D.createComment("")), e.getElementsByTagName("*").length > 0 && (d.find.TAG = function (e, t) {
                var n = t.getElementsByTagName(e[1]);
                if (e[1] === "*") {
                    var r = [];
                    for (var i = 0; n[i]; i++) n[i].nodeType === 1 && r.push(n[i]);
                    n = r
                }
                return n
            }), e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute != "undefined" && e.firstChild.getAttribute("href") !== "#" && (d.attrHandle.href = function (e) {
                return e.getAttribute("href", 2)
            }), e = null
        }(), D.querySelectorAll && function () {
            var e = h,
                t = D.createElement("div"),
                n = "__sizzle__";
            t.innerHTML = "<p class='TEST'></p>";
            if (!t.querySelectorAll || t.querySelectorAll(".TEST").length !== 0) {
                h = function (t, r, i, s) {
                    r = r || D;
                    if (!s && !h.isXML(r)) {
                        var o = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                        if (o && (r.nodeType === 1 || r.nodeType === 9)) {
                            if (o[1]) return y(r.getElementsByTagName(t), i);
                            if (o[2] && d.find.CLASS && r.getElementsByClassName) return y(r.getElementsByClassName(o[2]), i)
                        }
                        if (r.nodeType === 9) {
                            if (t === "body" && r.body) return y([r.body], i);
                            if (o && o[3]) {
                                var u = r.getElementById(o[3]);
                                if (!u || !u.parentNode) return y([], i);
                                if (u.id === o[3]) return y([u], i)
                            }
                            try {
                                return y(r.querySelectorAll(t), i)
                            } catch (a) {}
                        } else if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
                            var f = r,
                                l = r.getAttribute("id"),
                                c = l || n,
                                p = r.parentNode,
                                v = /^\s*[+~]/.test(t);
                            l ? c = c.replace(/'/g, "\\$&") : r.setAttribute("id", c), v && p && (r = r.parentNode);
                            try {
                                if (!v || p) return y(r.querySelectorAll("[id='" + c + "'] " + t), i)
                            } catch (m) {} finally {
                                l || f.removeAttribute("id")
                            }
                        }
                    }
                    return e(t, r, i, s)
                };
                for (var r in e) h[r] = e[r];
                t = null
            }
        }(),
        function () {
            var e = D.documentElement,
                t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
            if (t) {
                var n = !t.call(D.createElement("div"), "div"),
                    r = !1;
                try {
                    t.call(D.documentElement, "[test!='']:sizzle")
                } catch (i) {
                    r = !0
                }
                h.matchesSelector = function (e, i) {
                    i = i.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!h.isXML(e)) try {
                        if (r || !d.match.PSEUDO.test(i) && !/!=/.test(i)) {
                            var s = t.call(e, i);
                            if (s || !n || e.document && e.document.nodeType !== 11) return s
                        }
                    } catch (o) {}
                    return h(i, null, null, [e]).length > 0
                }
            }
        }(),
        function () {
            var e = D.createElement("div");
            e.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if ( !! e.getElementsByClassName && e.getElementsByClassName("e").length !== 0) {
                e.lastChild.className = "e";
                if (e.getElementsByClassName("e").length === 1) return;
                d.order.splice(1, 0, "CLASS"), d.find.CLASS = function (e, t, n) {
                    if (typeof t.getElementsByClassName != "undefined" && !n) return t.getElementsByClassName(e[1])
                }, e = null
            }
        }(), D.documentElement.contains ? h.contains = function (e, t) {
            return e !== t && (e.contains ? e.contains(t) : !0)
        } : D.documentElement.compareDocumentPosition ? h.contains = function (e, t) {
            return !!(e.compareDocumentPosition(t) & 16)
        } : h.contains = function () {
            return !1
        }, h.isXML = function (e) {
            var t = (e ? e.ownerDocument || e : 0).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        };
        var S = function (e, t, n) {
            var r, i = [],
                s = "",
                o = t.nodeType ? [t] : t;
            while (r = d.match.PSEUDO.exec(e)) s += r[0], e = e.replace(d.match.PSEUDO, "");
            e = d.relative[e] ? e + "*" : e;
            for (var u = 0, a = o.length; u < a; u++) h(e, o[u], i, n);
            return h.filter(s, i)
        };
        h.attr = B.attr, h.selectors.attrMap = {}, B.find = h, B.expr = h.selectors, B.expr[":"] = B.expr.filters, B.unique = h.uniqueSort, B.text = h.getText, B.isXMLDoc = h.isXML, B.contains = h.contains
    }();
    var at = /Until$/,
        ft = /^(?:parents|prevUntil|prevAll)/,
        lt = /,/,
        ct = /^.[^:#\[\.,]*$/,
        ht = Array.prototype.slice,
        pt = B.expr.match.POS,
        dt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    B.fn.extend({
        find: function (e) {
            var t = this,
                n, r;
            if (typeof e != "string") return B(e).filter(function () {
                for (n = 0, r = t.length; n < r; n++) if (B.contains(t[n], this)) return !0
            });
            var i = this.pushStack("", "find", e),
                s, o, u;
            for (n = 0, r = this.length; n < r; n++) {
                s = i.length, B.find(e, this[n], i);
                if (n > 0) for (o = s; o < i.length; o++) for (u = 0; u < s; u++) if (i[u] === i[o]) {
                    i.splice(o--, 1);
                    break
                }
            }
            return i
        },
        has: function (e) {
            var t = B(e);
            return this.filter(function () {
                for (var e = 0, n = t.length; e < n; e++) if (B.contains(this, t[e])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(N(this, e, !1), "not", e)
        },
        filter: function (e) {
            return this.pushStack(N(this, e, !0), "filter", e)
        },
        is: function (e) {
            return !!e && (typeof e == "string" ? pt.test(e) ? B(e, this.context).index(this[0]) >= 0 : B.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function (e, t) {
            var n = [],
                r, i, s = this[0];
            if (B.isArray(e)) {
                var o = 1;
                while (s && s.ownerDocument && s !== t) {
                    for (r = 0; r < e.length; r++) B(s).is(e[r]) && n.push({
                        selector: e[r],
                        elem: s,
                        level: o
                    });
                    s = s.parentNode, o++
                }
                return n
            }
            var u = pt.test(e) || typeof e != "string" ? B(e, t || this.context) : 0;
            for (r = 0, i = this.length; r < i; r++) {
                s = this[r];
                while (s) {
                    if (u ? u.index(s) > -1 : B.find.matchesSelector(s, e)) {
                        n.push(s);
                        break
                    }
                    s = s.parentNode;
                    if (!s || !s.ownerDocument || s === t || s.nodeType === 11) break
                }
            }
            return n = n.length > 1 ? B.unique(n) : n, this.pushStack(n, "closest", e)
        },
        index: function (e) {
            return e ? typeof e == "string" ? B.inArray(this[0], B(e)) : B.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function (e, t) {
            var n = typeof e == "string" ? B(e, t) : B.makeArray(e && e.nodeType ? [e] : e),
                r = B.merge(this.get(), n);
            return this.pushStack(C(n[0]) || C(r[0]) ? r : B.unique(r))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    }), B.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function (e) {
            return B.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return B.dir(e, "parentNode", n)
        },
        next: function (e) {
            return B.nth(e, 2, "nextSibling")
        },
        prev: function (e) {
            return B.nth(e, 2, "previousSibling")
        },
        nextAll: function (e) {
            return B.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return B.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return B.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return B.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return B.sibling(e.parentNode.firstChild, e)
        },
        children: function (e) {
            return B.sibling(e.firstChild)
        },
        contents: function (e) {
            return B.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : B.makeArray(e.childNodes)
        }
    }, function (e, t) {
        B.fn[e] = function (n, r) {
            var i = B.map(this, t, n);
            return at.test(e) || (r = n), r && typeof r == "string" && (i = B.filter(r, i)), i = this.length > 1 && !dt[e] ? B.unique(i) : i, (this.length > 1 || lt.test(r)) && ft.test(e) && (i = i.reverse()), this.pushStack(i, e, ht.call(arguments).join(","))
        }
    }), B.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), t.length === 1 ? B.find.matchesSelector(t[0], e) ? [t[0]] : [] : B.find.matches(e, t)
        },
        dir: function (e, n, r) {
            var i = [],
                s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !B(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
            return i
        },
        nth: function (e, t, n, r) {
            t = t || 1;
            var i = 0;
            for (; e; e = e[n]) if (e.nodeType === 1 && ++i === t) break;
            return e
        },
        sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var vt = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        mt = / jQuery\d+="(?:\d+|null)"/g,
        gt = /^\s+/,
        yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        bt = /<([\w:]+)/,
        wt = /<tbody/i,
        Et = /<|&#?\w+;/,
        St = /<(?:script|style)/i,
        xt = /<(?:script|object|embed|option|style)/i,
        Tt = new RegExp("<(?:" + vt + ")", "i"),
        Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ct = /\/(java|ecma)script/i,
        kt = /^\s*<!(?:\[CDATA\[|\-\-)/,
        Lt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, At = T(D);
    Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td, B.support.htmlSerialize || (Lt._default = [1, "div<div>", "</div>"]), B.fn.extend({
        text: function (e) {
            return B.isFunction(e) ? this.each(function (t) {
                var n = B(this);
                n.text(e.call(this, t, n.text()))
            }) : typeof e != "object" && e !== t ? this.empty().append((this[0] && this[0].ownerDocument || D).createTextNode(e)) : B.text(this)
        },
        wrapAll: function (e) {
            if (B.isFunction(e)) return this.each(function (t) {
                B(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = B(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return B.isFunction(e) ? this.each(function (t) {
                B(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = B(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = B.isFunction(e);
            return this.each(function (n) {
                B(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                B.nodeName(this, "body") || B(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (e) {
                this.nodeType === 1 && this.appendChild(e)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                this.nodeType === 1 && this.insertBefore(e, this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this)
            });
            if (arguments.length) {
                var e = B.clean(arguments);
                return e.push.apply(e, this.toArray()), this.pushStack(e, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            });
            if (arguments.length) {
                var e = this.pushStack(this, "after", arguments);
                return e.push.apply(e, B.clean(arguments)), e
            }
        },
        remove: function (e, t) {
            for (var n = 0, r;
            (r = this[n]) != null; n++) if (!e || B.filter(e, [r]).length)!t && r.nodeType === 1 && (B.cleanData(r.getElementsByTagName("*")), B.cleanData([r])), r.parentNode && r.parentNode.removeChild(r);
            return this
        },
        empty: function () {
            for (var e = 0, t;
            (t = this[e]) != null; e++) {
                t.nodeType === 1 && B.cleanData(t.getElementsByTagName("*"));
                while (t.firstChild) t.removeChild(t.firstChild)
            }
            return this
        },
        clone: function (e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function () {
                return B.clone(this, e, t)
            })
        },
        html: function (e) {
            if (e === t) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(mt, "") : null;
            if (typeof e == "string" && !St.test(e) && (B.support.leadingWhitespace || !gt.test(e)) && !Lt[(bt.exec(e) || ["", ""])[1].toLowerCase()]) {
                e = e.replace(yt, "<$1></$2>");
                try {
                    for (var n = 0, r = this.length; n < r; n++) this[n].nodeType === 1 && (B.cleanData(this[n].getElementsByTagName("*")), this[n].innerHTML = e)
                } catch (i) {
                    this.empty().append(e)
                }
            } else B.isFunction(e) ? this.each(function (t) {
                var n = B(this);
                n.html(e.call(this, t, n.html()))
            }) : this.empty().append(e);
            return this
        },
        replaceWith: function (e) {
            return this[0] && this[0].parentNode ? B.isFunction(e) ? this.each(function (t) {
                var n = B(this),
                    r = n.html();
                n.replaceWith(e.call(this, t, r))
            }) : (typeof e != "string" && (e = B(e).detach()), this.each(function () {
                var t = this.nextSibling,
                    n = this.parentNode;
                B(this).remove(), t ? B(t).before(e) : B(n).append(e)
            })) : this.length ? this.pushStack(B(B.isFunction(e) ? e() : e), "replaceWith", e) : this
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, n, r) {
            var i, s, o, u, a = e[0],
                f = [];
            if (!B.support.checkClone && arguments.length === 3 && typeof a == "string" && Nt.test(a)) return this.each(function () {
                B(this).domManip(e, n, r, !0)
            });
            if (B.isFunction(a)) return this.each(function (i) {
                var s = B(this);
                e[0] = a.call(this, i, n ? s.html() : t), s.domManip(e, n, r)
            });
            if (this[0]) {
                u = a && a.parentNode, B.support.parentNode && u && u.nodeType === 11 && u.childNodes.length === this.length ? i = {
                    fragment: u
                } : i = B.buildFragment(e, this, f), o = i.fragment, o.childNodes.length === 1 ? s = o = o.firstChild : s = o.firstChild;
                if (s) {
                    n = n && B.nodeName(s, "tr");
                    for (var l = 0, c = this.length, h = c - 1; l < c; l++) r.call(n ? x(this[l], s) : this[l], i.cacheable || c > 1 && l < h ? B.clone(o, !0, !0) : o)
                }
                f.length && B.each(f, m)
            }
            return this
        }
    }), B.buildFragment = function (e, t, n) {
        var r, i, s, o, u = e[0];
        return t && t[0] && (o = t[0].ownerDocument || t[0]), o.createDocumentFragment || (o = D), e.length === 1 && typeof u == "string" && u.length < 512 && o === D && u.charAt(0) === "<" && !xt.test(u) && (B.support.checkClone || !Nt.test(u)) && (B.support.html5Clone || !Tt.test(u)) && (i = !0, s = B.fragments[u], s && s !== 1 && (r = s)), r || (r = o.createDocumentFragment(), B.clean(e, o, r, n)), i && (B.fragments[u] = s ? r : 1), {
            fragment: r,
            cacheable: i
        }
    }, B.fragments = {}, B.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        B.fn[e] = function (n) {
            var r = [],
                i = B(n),
                s = this.length === 1 && this[0].parentNode;
            if (s && s.nodeType === 11 && s.childNodes.length === 1 && i.length === 1) return i[t](this[0]), this;
            for (var o = 0, u = i.length; o < u; o++) {
                var a = (o > 0 ? this.clone(!0) : this).get();
                B(i[o])[t](a), r = r.concat(a)
            }
            return this.pushStack(r, e, i.selector)
        }
    }), B.extend({
        clone: function (e, t, n) {
            var r, i, s, o = B.support.html5Clone || !Tt.test("<" + e.nodeName) ? e.cloneNode(!0) : g(e);
            if ((!B.support.noCloneEvent || !B.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !B.isXMLDoc(e)) {
                E(e, o), r = w(e), i = w(o);
                for (s = 0; r[s]; ++s) i[s] && E(r[s], i[s])
            }
            if (t) {
                S(e, o);
                if (n) {
                    r = w(e), i = w(o);
                    for (s = 0; r[s]; ++s) S(r[s], i[s])
                }
            }
            return r = i = null, o
        },
        clean: function (e, t, n, r) {
            var i;
            t = t || D, typeof t.createElement == "undefined" && (t = t.ownerDocument || t[0] && t[0].ownerDocument || D);
            var s = [],
                o;
            for (var u = 0, a;
            (a = e[u]) != null; u++) {
                typeof a == "number" && (a += "");
                if (!a) continue;
                if (typeof a == "string") if (!Et.test(a)) a = t.createTextNode(a);
                else {
                    a = a.replace(yt, "<$1></$2>");
                    var f = (bt.exec(a) || ["", ""])[1].toLowerCase(),
                        l = Lt[f] || Lt._default,
                        c = l[0],
                        h = t.createElement("div");
                    t === D ? At.appendChild(h) : T(t).appendChild(h), h.innerHTML = l[1] + a + l[2];
                    while (c--) h = h.lastChild;
                    if (!B.support.tbody) {
                        var p = wt.test(a),
                            d = f === "table" && !p ? h.firstChild && h.firstChild.childNodes : l[1] === "<table>" && !p ? h.childNodes : [];
                        for (o = d.length - 1; o >= 0; --o) B.nodeName(d[o], "tbody") && !d[o].childNodes.length && d[o].parentNode.removeChild(d[o])
                    }!B.support.leadingWhitespace && gt.test(a) && h.insertBefore(t.createTextNode(gt.exec(a)[0]), h.firstChild), a = h.childNodes
                }
                var v;
                if (!B.support.appendChecked) if (a[0] && typeof (v = a.length) == "number") for (o = 0; o < v; o++) y(a[o]);
                else y(a);
                a.nodeType ? s.push(a) : s = B.merge(s, a)
            }
            if (n) {
                i = function (e) {
                    return !e.type || Ct.test(e.type)
                };
                for (u = 0; s[u]; u++) if (r && B.nodeName(s[u], "script") && (!s[u].type || s[u].type.toLowerCase() === "text/javascript")) r.push(s[u].parentNode ? s[u].parentNode.removeChild(s[u]) : s[u]);
                else {
                    if (s[u].nodeType === 1) {
                        var m = B.grep(s[u].getElementsByTagName("script"), i);
                        s.splice.apply(s, [u + 1, 0].concat(m))
                    }
                    n.appendChild(s[u])
                }
            }
            return s
        },
        cleanData: function (e) {
            var t, n, r = B.cache,
                i = B.event.special,
                s = B.support.deleteExpando;
            for (var o = 0, u;
            (u = e[o]) != null; o++) {
                if (u.nodeName && B.noData[u.nodeName.toLowerCase()]) continue;
                n = u[B.expando];
                if (n) {
                    t = r[n];
                    if (t && t.events) {
                        for (var a in t.events) i[a] ? B.event.remove(u, a) : B.removeEvent(u, a, t.handle);
                        t.handle && (t.handle.elem = null)
                    }
                    s ? delete u[B.expando] : u.removeAttribute && u.removeAttribute(B.expando), delete r[n]
                }
            }
        }
    });
    var Ot = /alpha\([^)]*\)/i,
        Mt = /opacity=([^)]*)/,
        _t = /([A-Z]|^ms)/g,
        Dt = /^-?\d+(?:px)?$/i,
        Pt = /^-?\d/,
        Ht = /^([\-+])=([\-+.\de]+)/,
        Bt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, jt = ["Left", "Right"],
        Ft = ["Top", "Bottom"],
        It, qt, Rt;
    B.fn.css = function (e, n) {
        return arguments.length === 2 && n === t ? this : B.access(this, e, n, !0, function (e, n, r) {
            return r !== t ? B.style(e, n, r) : B.css(e, n)
        })
    }, B.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = It(e, "opacity", "opacity");
                        return n === "" ? "1" : n
                    }
                    return e.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": B.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, n, r, i) {
            if ( !! e && e.nodeType !== 3 && e.nodeType !== 8 && !! e.style) {
                var s, o, u = B.camelCase(n),
                    a = e.style,
                    f = B.cssHooks[u];
                n = B.cssProps[u] || u;
                if (r === t) return f && "get" in f && (s = f.get(e, !1, i)) !== t ? s : a[n];
                o = typeof r, o === "string" && (s = Ht.exec(r)) && (r = +(s[1] + 1) * +s[2] + parseFloat(B.css(e, n)), o = "number");
                if (r == null || o === "number" && isNaN(r)) return;
                o === "number" && !B.cssNumber[u] && (r += "px");
                if (!f || !("set" in f) || (r = f.set(e, r)) !== t) try {
                    a[n] = r
                } catch (l) {}
            }
        },
        css: function (e, n, r) {
            var i, s;
            n = B.camelCase(n), s = B.cssHooks[n], n = B.cssProps[n] || n, n === "cssFloat" && (n = "float");
            if (s && "get" in s && (i = s.get(e, !0, r)) !== t) return i;
            if (It) return It(e, n)
        },
        swap: function (e, t, n) {
            var r = {};
            for (var i in t) r[i] = e.style[i], e.style[i] = t[i];
            n.call(e);
            for (i in t) e.style[i] = r[i]
        }
    }), B.curCSS = B.css, B.each(["height", "width"], function (e, t) {
        B.cssHooks[t] = {
            get: function (e, n, r) {
                var i;
                if (n) return e.offsetWidth !== 0 ? v(e, t, r) : (B.swap(e, Bt, function () {
                    i = v(e, t, r)
                }), i)
            },
            set: function (e, t) {
                if (!Dt.test(t)) return t;
                t = parseFloat(t);
                if (t >= 0) return t + "px"
            }
        }
    }), B.support.opacity || (B.cssHooks.opacity = {
        get: function (e, t) {
            return Mt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = B.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if (t >= 1 && B.trim(s.replace(Ot, "")) === "") {
                n.removeAttribute("filter");
                if (r && !r.filter) return
            }
            n.filter = Ot.test(s) ? s.replace(Ot, i) : s + " " + i
        }
    }), B(function () {
        B.support.reliableMarginRight || (B.cssHooks.marginRight = {
            get: function (e, t) {
                var n;
                return B.swap(e, {
                    display: "inline-block"
                }, function () {
                    t ? n = It(e, "margin-right", "marginRight") : n = e.style.marginRight
                }), n
            }
        })
    }), D.defaultView && D.defaultView.getComputedStyle && (qt = function (e, t) {
        var n, r, i;
        return t = t.replace(_t, "-$1").toLowerCase(), (r = e.ownerDocument.defaultView) && (i = r.getComputedStyle(e, null)) && (n = i.getPropertyValue(t), n === "" && !B.contains(e.ownerDocument.documentElement, e) && (n = B.style(e, t))), n
    }), D.documentElement.currentStyle && (Rt = function (e, t) {
        var n, r, i, s = e.currentStyle && e.currentStyle[t],
            o = e.style;
        return s === null && o && (i = o[t]) && (s = i), !Dt.test(s) && Pt.test(s) && (n = o.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), o.left = t === "fontSize" ? "1em" : s || 0, s = o.pixelLeft + "px", o.left = n, r && (e.runtimeStyle.left = r)), s === "" ? "auto" : s
    }), It = qt || Rt, B.expr && B.expr.filters && (B.expr.filters.hidden = function (e) {
        var t = e.offsetWidth,
            n = e.offsetHeight;
        return t === 0 && n === 0 || !B.support.reliableHiddenOffsets && (e.style && e.style.display || B.css(e, "display")) === "none"
    }, B.expr.filters.visible = function (e) {
        return !B.expr.filters.hidden(e)
    });
    var Ut = /%20/g,
        zt = /\[\]$/,
        Wt = /\r?\n/g,
        Xt = /#.*$/,
        Vt = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        $t = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Jt = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        Kt = /^(?:GET|HEAD)$/,
        Qt = /^\/\//,
        Gt = /\?/,
        Yt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Zt = /^(?:select|textarea)/i,
        en = /\s+/,
        tn = /([?&])_=[^&]*/,
        nn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        rn = B.fn.load,
        sn = {}, on = {}, un, an, fn = ["*/"] + ["*"];
    try {
        un = H.href
    } catch (ln) {
        un = D.createElement("a"), un.href = "", un = un.href
    }
    an = nn.exec(un.toLowerCase()) || [], B.fn.extend({
        load: function (e, n, r) {
            if (typeof e != "string" && rn) return rn.apply(this, arguments);
            if (!this.length) return this;
            var i = e.indexOf(" ");
            if (i >= 0) {
                var s = e.slice(i, e.length);
                e = e.slice(0, i)
            }
            var o = "GET";
            n && (B.isFunction(n) ? (r = n, n = t) : typeof n == "object" && (n = B.param(n, B.ajaxSettings.traditional), o = "POST"));
            var u = this;
            return B.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: n,
                complete: function (e, t, n) {
                    n = e.responseText, e.isResolved() && (e.done(function (e) {
                        n = e
                    }), u.html(s ? B("<div>").append(n.replace(Yt, "")).find(s) : n)), r && u.each(r, [n, t, e])
                }
            }), this
        },
        serialize: function () {
            return B.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? B.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || Zt.test(this.nodeName) || $t.test(this.type))
            }).map(function (e, t) {
                var n = B(this).val();
                return n == null ? null : B.isArray(n) ? B.map(n, function (e, n) {
                    return {
                        name: t.name,
                        value: e.replace(Wt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Wt, "\r\n")
                }
            }).get()
        }
    }), B.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
        B.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), B.each(["get", "post"], function (e, n) {
        B[n] = function (e, r, i, s) {
            return B.isFunction(r) && (s = s || i, i = r, r = t), B.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: s
            })
        }
    }), B.extend({
        getScript: function (e, n) {
            return B.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return B.get(e, t, n, "json")
        },
        ajaxSetup: function (e, t) {
            return t ? h(e, B.ajaxSettings) : (t = e, e = B.ajaxSettings), h(e, t), e
        },
        ajaxSettings: {
            url: un,
            isLocal: Jt.test(an[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": fn
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": B.parseJSON,
                "text xml": B.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: d(sn),
        ajaxTransport: d(on),
        ajax: function (e, n) {
            function r(e, n, r, p) {
                if (E !== 2) {
                    E = 2, b && clearTimeout(b), y = t, m = p || "", T.readyState = e > 0 ? 4 : 0;
                    var d, v, g, w = n,
                        x = r ? l(i, T, r) : t,
                        N, C;
                    if (e >= 200 && e < 300 || e === 304) {
                        if (i.ifModified) {
                            if (N = T.getResponseHeader("Last-Modified")) B.lastModified[h] = N;
                            if (C = T.getResponseHeader("Etag")) B.etag[h] = C
                        }
                        if (e === 304) w = "notmodified", d = !0;
                        else try {
                            v = f(i, x), w = "success", d = !0
                        } catch (k) {
                            w = "parsererror", g = k
                        }
                    } else {
                        g = w;
                        if (!w || e) w = "error", e < 0 && (e = 0)
                    }
                    T.status = e, T.statusText = "" + (n || w), d ? u.resolveWith(s, [v, w, T]) : u.rejectWith(s, [T, w, g]), T.statusCode(c), c = t, S && o.trigger("ajax" + (d ? "Success" : "Error"), [T, i, d ? v : g]), a.fireWith(s, [T, w]), S && (o.trigger("ajaxComplete", [T, i]), --B.active || B.event.trigger("ajaxStop"))
                }
            }
            typeof e == "object" && (n = e, e = t), n = n || {};
            var i = B.ajaxSetup({}, n),
                s = i.context || i,
                o = s !== i && (s.nodeType || s instanceof B) ? B(s) : B.event,
                u = B.Deferred(),
                a = B.Callbacks("once memory"),
                c = i.statusCode || {}, h, d = {}, v = {}, m, g, y, b, w, E = 0,
                S, x, T = {
                    readyState: 0,
                    setRequestHeader: function (e, t) {
                        if (!E) {
                            var n = e.toLowerCase();
                            e = v[n] = v[n] || e, d[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return E === 2 ? m : null
                    },
                    getResponseHeader: function (e) {
                        var n;
                        if (E === 2) {
                            if (!g) {
                                g = {};
                                while (n = Vt.exec(m)) g[n[1].toLowerCase()] = n[2]
                            }
                            n = g[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    },
                    overrideMimeType: function (e) {
                        return E || (i.mimeType = e), this
                    },
                    abort: function (e) {
                        return e = e || "abort", y && y.abort(e), r(0, e), this
                    }
                };
            u.promise(T), T.success = T.done, T.error = T.fail, T.complete = a.add, T.statusCode = function (e) {
                if (e) {
                    var t;
                    if (E < 2) for (t in e) c[t] = [c[t], e[t]];
                    else t = e[T.status], T.then(t, t)
                }
                return this
            }, i.url = ((e || i.url) + "").replace(Xt, "").replace(Qt, an[1] + "//"), i.dataTypes = B.trim(i.dataType || "*").toLowerCase().split(en), i.crossDomain == null && (w = nn.exec(i.url.toLowerCase()), i.crossDomain = !(!w || w[1] == an[1] && w[2] == an[2] && (w[3] || (w[1] === "http:" ? 80 : 443)) == (an[3] || (an[1] === "http:" ? 80 : 443)))), i.data && i.processData && typeof i.data != "string" && (i.data = B.param(i.data, i.traditional)), p(sn, i, n, T);
            if (E === 2) return !1;
            S = i.global, i.type = i.type.toUpperCase(), i.hasContent = !Kt.test(i.type), S && B.active++ === 0 && B.event.trigger("ajaxStart");
            if (!i.hasContent) {
                i.data && (i.url += (Gt.test(i.url) ? "&" : "?") + i.data, delete i.data), h = i.url;
                if (i.cache === !1) {
                    var N = B.now(),
                        C = i.url.replace(tn, "$1_=" + N);
                    i.url = C + (C === i.url ? (Gt.test(i.url) ? "&" : "?") + "_=" + N : "")
                }
            }(i.data && i.hasContent && i.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", i.contentType), i.ifModified && (h = h || i.url, B.lastModified[h] && T.setRequestHeader("If-Modified-Since", B.lastModified[h]), B.etag[h] && T.setRequestHeader("If-None-Match", B.etag[h])), T.setRequestHeader("Accept", i.dataTypes[0] && i.accepts[i.dataTypes[0]] ? i.accepts[i.dataTypes[0]] + (i.dataTypes[0] !== "*" ? ", " + fn + "; q=0.01" : "") : i.accepts["*"]);
            for (x in i.headers) T.setRequestHeader(x, i.headers[x]);
            if (!i.beforeSend || i.beforeSend.call(s, T, i) !== !1 && E !== 2) {
                for (x in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[x](i[x]);
                y = p(on, i, n, T);
                if (!y) r(-1, "No Transport");
                else {
                    T.readyState = 1, S && o.trigger("ajaxSend", [T, i]), i.async && i.timeout > 0 && (b = setTimeout(function () {
                        T.abort("timeout")
                    }, i.timeout));
                    try {
                        E = 1, y.send(d, r)
                    } catch (k) {
                        if (!(E < 2)) throw k;
                        r(-1, k)
                    }
                }
                return T
            }
            return T.abort(), !1
        },
        param: function (e, n) {
            var r = [],
                i = function (e, t) {
                    t = B.isFunction(t) ? t() : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            n === t && (n = B.ajaxSettings.traditional);
            if (B.isArray(e) || e.jquery && !B.isPlainObject(e)) B.each(e, function () {
                i(this.name, this.value)
            });
            else for (var s in e) c(s, e[s], n, i);
            return r.join("&").replace(Ut, "+")
        }
    }), B.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cn = B.now(),
        hn = /(\=)\?(&|$)|\?\?/i;
    B.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return B.expando + "_" + cn++
        }
    }), B.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i = t.contentType === "application/x-www-form-urlencoded" && typeof t.data == "string";
        if (t.dataTypes[0] === "jsonp" || t.jsonp !== !1 && (hn.test(t.url) || i && hn.test(t.data))) {
            var s, o = t.jsonpCallback = B.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                u = e[o],
                a = t.url,
                f = t.data,
                l = "$1" + o + "$2";
            return t.jsonp !== !1 && (a = a.replace(hn, l), t.url === a && (i && (f = f.replace(hn, l)), t.data === f && (a += (/\?/.test(a) ? "&" : "?") + t.jsonp + "=" + o))), t.url = a, t.data = f, e[o] = function (e) {
                s = [e]
            }, r.always(function () {
                e[o] = u, s && B.isFunction(u) && e[o](s[0])
            }), t.converters["script json"] = function () {
                return s || B.error(o + " was not called"), s[0]
            }, t.dataTypes[0] = "json", "script"
        }
    }), B.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (e) {
                return B.globalEval(e), e
            }
        }
    }), B.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), B.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = D.head || D.getElementsByTagName("head")[0] || D.documentElement;
            return {
                send: function (i, s) {
                    n = D.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, i) {
                        if (i || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || s(200, "success")
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function () {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var pn = e.ActiveXObject ? function () {
            for (var e in vn) vn[e](0, 1)
        } : !1,
        dn = 0,
        vn;
    B.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && a() || u()
    } : a,
    function (e) {
        B.extend(B.support, {
            ajax: !! e,
            cors: !! e && "withCredentials" in e
        })
    }(B.ajaxSettings.xhr()), B.support.ajax && B.ajaxTransport(function (n) {
        if (!n.crossDomain || B.support.cors) {
            var r;
            return {
                send: function (i, s) {
                    var o = n.xhr(),
                        u, a;
                    n.username ? o.open(n.type, n.url, n.async, n.username, n.password) : o.open(n.type, n.url, n.async);
                    if (n.xhrFields) for (a in n.xhrFields) o[a] = n.xhrFields[a];
                    n.mimeType && o.overrideMimeType && o.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (a in i) o.setRequestHeader(a, i[a])
                    } catch (f) {}
                    o.send(n.hasContent && n.data || null), r = function (e, i) {
                        var a, f, l, c, h;
                        try {
                            if (r && (i || o.readyState === 4)) {
                                r = t, u && (o.onreadystatechange = B.noop, pn && delete vn[u]);
                                if (i) o.readyState !== 4 && o.abort();
                                else {
                                    a = o.status, l = o.getAllResponseHeaders(), c = {}, h = o.responseXML, h && h.documentElement && (c.xml = h), c.text = o.responseText;
                                    try {
                                        f = o.statusText
                                    } catch (p) {
                                        f = ""
                                    }!a && n.isLocal && !n.crossDomain ? a = c.text ? 200 : 404 : a === 1223 && (a = 204)
                                }
                            }
                        } catch (d) {
                            i || s(-1, d)
                        }
                        c && s(a, f, c, l)
                    }, !n.async || o.readyState === 4 ? r() : (u = ++dn, pn && (vn || (vn = {}, B(e).unload(pn)), vn[u] = r), o.onreadystatechange = r)
                },
                abort: function () {
                    r && r(0, 1)
                }
            }
        }
    });
    var mn = {}, gn, yn, bn = /^(?:toggle|show|hide)$/,
        wn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        En, Sn = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        xn;
    B.fn.extend({
        show: function (e, t, n) {
            var s, o;
            if (e || e === 0) return this.animate(i("show", 3), e, t, n);
            for (var u = 0, a = this.length; u < a; u++) s = this[u], s.style && (o = s.style.display, !B._data(s, "olddisplay") && o === "none" && (o = s.style.display = ""), o === "" && B.css(s, "display") === "none" && B._data(s, "olddisplay", r(s.nodeName)));
            for (u = 0; u < a; u++) {
                s = this[u];
                if (s.style) {
                    o = s.style.display;
                    if (o === "" || o === "none") s.style.display = B._data(s, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function (e, t, n) {
            if (e || e === 0) return this.animate(i("hide", 3), e, t, n);
            var r, s, o = 0,
                u = this.length;
            for (; o < u; o++) r = this[o], r.style && (s = B.css(r, "display"), s !== "none" && !B._data(r, "olddisplay") && B._data(r, "olddisplay", s));
            for (o = 0; o < u; o++) this[o].style && (this[o].style.display = "none");
            return this
        },
        _toggle: B.fn.toggle,
        toggle: function (e, t, n) {
            var r = typeof e == "boolean";
            return B.isFunction(e) && B.isFunction(t) ? this._toggle.apply(this, arguments) : e == null || r ? this.each(function () {
                var t = r ? e : B(this).is(":hidden");
                B(this)[t ? "show" : "hide"]()
            }) : this.animate(i("toggle", 3), e, t, n), this
        },
        fadeTo: function (e, t, n, r) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, i) {
            function s() {
                o.queue === !1 && B._mark(this);
                var t = B.extend({}, o),
                    n = this.nodeType === 1,
                    i = n && B(this).is(":hidden"),
                    s, u, a, f, l, c, h, p, d;
                t.animatedProperties = {};
                for (a in e) {
                    s = B.camelCase(a), a !== s && (e[s] = e[a], delete e[a]), u = e[s], B.isArray(u) ? (t.animatedProperties[s] = u[1], u = e[s] = u[0]) : t.animatedProperties[s] = t.specialEasing && t.specialEasing[s] || t.easing || "swing";
                    if (u === "hide" && i || u === "show" && !i) return t.complete.call(this);
                    n && (s === "height" || s === "width") && (t.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], B.css(this, "display") === "inline" && B.css(this, "float") === "none" && (!B.support.inlineBlockNeedsLayout || r(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                t.overflow != null && (this.style.overflow = "hidden");
                for (a in e) f = new B.fx(this, t, a), u = e[a], bn.test(u) ? (d = B._data(this, "toggle" + a) || (u === "toggle" ? i ? "show" : "hide" : 0), d ? (B._data(this, "toggle" + a, d === "show" ? "hide" : "show"), f[d]()) : f[u]()) : (l = wn.exec(u), c = f.cur(), l ? (h = parseFloat(l[2]), p = l[3] || (B.cssNumber[a] ? "" : "px"), p !== "px" && (B.style(this, a, (h || 1) + p), c = (h || 1) / f.cur() * c, B.style(this, a, c + p)), l[1] && (h = (l[1] === "-=" ? -1 : 1) * h + c), f.custom(c, h, p)) : f.custom(c, u, ""));
                return !0
            }
            var o = B.speed(t, n, i);
            return B.isEmptyObject(e) ? this.each(o.complete, [!1]) : (e = B.extend({}, e), o.queue === !1 ? this.each(s) : this.queue(o.queue, s))
        },
        stop: function (e, n, r) {
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                function t(e, t, n) {
                    var i = t[n];
                    B.removeData(e, n, !0), i.stop(r)
                }
                var n, i = !1,
                    s = B.timers,
                    o = B._data(this);
                r || B._unmark(!0, this);
                if (e == null) for (n in o) o[n] && o[n].stop && n.indexOf(".run") === n.length - 4 && t(this, o, n);
                else o[n = e + ".run"] && o[n].stop && t(this, o, n);
                for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (r ? s[n](!0) : s[n].saveState(), i = !0, s.splice(n, 1));
                (!r || !i) && B.dequeue(this, e)
            })
        }
    }), B.each({
        slideDown: i("show", 1),
        slideUp: i("hide", 1),
        slideToggle: i("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        B.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), B.extend({
        speed: function (e, t, n) {
            var r = e && typeof e == "object" ? B.extend({}, e) : {
                complete: n || !n && t || B.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !B.isFunction(t) && t
            };
            r.duration = B.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in B.fx.speeds ? B.fx.speeds[r.duration] : B.fx.speeds._default;
            if (r.queue == null || r.queue === !0) r.queue = "fx";
            return r.old = r.complete, r.complete = function (e) {
                B.isFunction(r.old) && r.old.call(this), r.queue ? B.dequeue(this, r.queue) : e !== !1 && B._unmark(this)
            }, r
        },
        easing: {
            linear: function (e, t, n, r) {
                return n + r * e
            },
            swing: function (e, t, n, r) {
                return (-Math.cos(e * Math.PI) / 2 + .5) * r + n
            }
        },
        timers: [],
        fx: function (e, t, n) {
            this.options = t, this.elem = e, this.prop = n, t.orig = t.orig || {}
        }
    }), B.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (B.fx.step[this.prop] || B.fx.step._default)(this)
        },
        cur: function () {
            if (this.elem[this.prop] == null || !! this.elem.style && this.elem.style[this.prop] != null) {
                var e, t = B.css(this.elem, this.prop);
                return isNaN(e = parseFloat(t)) ? !t || t === "auto" ? 0 : t : e
            }
            return this.elem[this.prop]
        },
        custom: function (e, n, r) {
            function i(e) {
                return s.step(e)
            }
            var s = this,
                u = B.fx;
            this.startTime = xn || o(), this.end = n, this.now = this.start = e, this.pos = this.state = 0, this.unit = r || this.unit || (B.cssNumber[this.prop] ? "" : "px"), i.queue = this.options.queue, i.elem = this.elem, i.saveState = function () {
                s.options.hide && B._data(s.elem, "fxshow" + s.prop) === t && B._data(s.elem, "fxshow" + s.prop, s.start)
            }, i() && B.timers.push(i) && !En && (En = setInterval(u.tick, u.interval))
        },
        show: function () {
            var e = B._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = e || B.style(this.elem, this.prop), this.options.show = !0, e !== t ? this.custom(this.cur(), e) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), B(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = B._data(this.elem, "fxshow" + this.prop) || B.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function (e) {
            var t, n, r, i = xn || o(),
                s = !0,
                u = this.elem,
                a = this.options;
            if (e || i >= a.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), a.animatedProperties[this.prop] = !0;
                for (t in a.animatedProperties) a.animatedProperties[t] !== !0 && (s = !1);
                if (s) {
                    a.overflow != null && !B.support.shrinkWrapBlocks && B.each(["", "X", "Y"], function (e, t) {
                        u.style["overflow" + t] = a.overflow[e]
                    }), a.hide && B(u).hide();
                    if (a.hide || a.show) for (t in a.animatedProperties) B.style(u, t, a.orig[t]), B.removeData(u, "fxshow" + t, !0), B.removeData(u, "toggle" + t, !0);
                    r = a.complete, r && (a.complete = !1, r.call(u))
                }
                return !1
            }
            return a.duration == Infinity ? this.now = i : (n = i - this.startTime, this.state = n / a.duration, this.pos = B.easing[a.animatedProperties[this.prop]](this.state, n, 0, 1, a.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
        }
    }, B.extend(B.fx, {
        tick: function () {
            var e, t = B.timers,
                n = 0;
            for (; n < t.length; n++) e = t[n], !e() && t[n] === e && t.splice(n--, 1);
            t.length || B.fx.stop()
        },
        interval: 13,
        stop: function () {
            clearInterval(En), En = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (e) {
                B.style(e.elem, "opacity", e.now)
            },
            _default: function (e) {
                e.elem.style && e.elem.style[e.prop] != null ? e.elem.style[e.prop] = e.now + e.unit : e.elem[e.prop] = e.now
            }
        }
    }), B.each(["width", "height"], function (e, t) {
        B.fx.step[t] = function (e) {
            B.style(e.elem, t, Math.max(0, e.now) + e.unit)
        }
    }), B.expr && B.expr.filters && (B.expr.filters.animated = function (e) {
        return B.grep(B.timers, function (t) {
            return e === t.elem
        }).length
    });
    var Tn = /^t(?:able|d|h)$/i,
        Nn = /^(?:body|html)$/i;
    "getBoundingClientRect" in D.documentElement ? B.fn.offset = function (e) {
        var t = this[0],
            r;
        if (e) return this.each(function (t) {
            B.offset.setOffset(this, e, t)
        });
        if (!t || !t.ownerDocument) return null;
        if (t === t.ownerDocument.body) return B.offset.bodyOffset(t);
        try {
            r = t.getBoundingClientRect()
        } catch (i) {}
        var s = t.ownerDocument,
            o = s.documentElement;
        if (!r || !B.contains(o, t)) return r ? {
            top: r.top,
            left: r.left
        } : {
            top: 0,
            left: 0
        };
        var u = s.body,
            a = n(s),
            f = o.clientTop || u.clientTop || 0,
            l = o.clientLeft || u.clientLeft || 0,
            c = a.pageYOffset || B.support.boxModel && o.scrollTop || u.scrollTop,
            h = a.pageXOffset || B.support.boxModel && o.scrollLeft || u.scrollLeft,
            p = r.top + c - f,
            d = r.left + h - l;
        return {
            top: p,
            left: d
        }
    } : B.fn.offset = function (e) {
        var t = this[0];
        if (e) return this.each(function (t) {
            B.offset.setOffset(this, e, t)
        });
        if (!t || !t.ownerDocument) return null;
        if (t === t.ownerDocument.body) return B.offset.bodyOffset(t);
        var n, r = t.offsetParent,
            i = t,
            s = t.ownerDocument,
            o = s.documentElement,
            u = s.body,
            a = s.defaultView,
            f = a ? a.getComputedStyle(t, null) : t.currentStyle,
            l = t.offsetTop,
            c = t.offsetLeft;
        while ((t = t.parentNode) && t !== u && t !== o) {
            if (B.support.fixedPosition && f.position === "fixed") break;
            n = a ? a.getComputedStyle(t, null) : t.currentStyle, l -= t.scrollTop, c -= t.scrollLeft, t === r && (l += t.offsetTop, c += t.offsetLeft, B.support.doesNotAddBorder && (!B.support.doesAddBorderForTableAndCells || !Tn.test(t.nodeName)) && (l += parseFloat(n.borderTopWidth) || 0, c += parseFloat(n.borderLeftWidth) || 0), i = r, r = t.offsetParent), B.support.subtractsBorderForOverflowNotVisible && n.overflow !== "visible" && (l += parseFloat(n.borderTopWidth) || 0, c += parseFloat(n.borderLeftWidth) || 0), f = n
        }
        if (f.position === "relative" || f.position === "static") l += u.offsetTop, c += u.offsetLeft;
        return B.support.fixedPosition && f.position === "fixed" && (l += Math.max(o.scrollTop, u.scrollTop), c += Math.max(o.scrollLeft, u.scrollLeft)), {
            top: l,
            left: c
        }
    }, B.offset = {
        bodyOffset: function (e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return B.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(B.css(e, "marginTop")) || 0, n += parseFloat(B.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function (e, t, n) {
            var r = B.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = B(e),
                s = i.offset(),
                o = B.css(e, "top"),
                u = B.css(e, "left"),
                a = (r === "absolute" || r === "fixed") && B.inArray("auto", [o, u]) > -1,
                f = {}, l = {}, c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), B.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, B.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var e = this[0],
                t = this.offsetParent(),
                n = this.offset(),
                r = Nn.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
            return n.top -= parseFloat(B.css(e, "marginTop")) || 0, n.left -= parseFloat(B.css(e, "marginLeft")) || 0, r.top += parseFloat(B.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(B.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - r.top,
                left: n.left - r.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || D.body;
                while (e && !Nn.test(e.nodeName) && B.css(e, "position") === "static") e = e.offsetParent;
                return e
            })
        }
    }), B.each(["Left", "Top"], function (e, r) {
        var i = "scroll" + r;
        B.fn[i] = function (r) {
            var s, o;
            return r === t ? (s = this[0], s ? (o = n(s), o ? "pageXOffset" in o ? o[e ? "pageYOffset" : "pageXOffset"] : B.support.boxModel && o.document.documentElement[i] || o.document.body[i] : s[i]) : null) : this.each(function () {
                o = n(this), o ? o.scrollTo(e ? B(o).scrollLeft() : r, e ? r : B(o).scrollTop()) : this[i] = r
            })
        }
    }), B.each(["Height", "Width"], function (e, n) {
        var r = n.toLowerCase();
        B.fn["inner" + n] = function () {
            var e = this[0];
            return e ? e.style ? parseFloat(B.css(e, r, "padding")) : this[r]() : null
        }, B.fn["outer" + n] = function (e) {
            var t = this[0];
            return t ? t.style ? parseFloat(B.css(t, r, e ? "margin" : "border")) : this[r]() : null
        }, B.fn[r] = function (e) {
            var i = this[0];
            if (!i) return e == null ? null : this;
            if (B.isFunction(e)) return this.each(function (t) {
                var n = B(this);
                n[r](e.call(this, t, n[r]()))
            });
            if (B.isWindow(i)) {
                var s = i.document.documentElement["client" + n],
                    o = i.document.body;
                return i.document.compatMode === "CSS1Compat" && s || o && o["client" + n] || s
            }
            if (i.nodeType === 9) return Math.max(i.documentElement["client" + n], i.body["scroll" + n], i.documentElement["scroll" + n], i.body["offset" + n], i.documentElement["offset" + n]);
            if (e === t) {
                var u = B.css(i, r),
                    a = parseFloat(u);
                return B.isNumeric(a) ? a : u
            }
            return this.css(r, typeof e == "string" ? e : e + "px")
        }
    }), e.jQuery = e.$ = B, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return B
    })
})(window),
function (e, t) {
    function n(t, n) {
        var i = t.nodeName.toLowerCase();
        return "area" === i ? (n = t.parentNode, i = n.name, !t.href || !i || n.nodeName.toLowerCase() !== "map" ? !1 : (t = e("img[usemap=#" + i + "]")[0], !! t && r(t))) : (/input|select|textarea|button|object/.test(i) ? !t.disabled : "a" == i ? t.href || n : n) && r(t)
    }
    function r(t) {
        return !e(t).parents().andSelf().filter(function () {
            return e.curCSS(this, "visibility") === "hidden" || e.expr.filters.hidden(this)
        }).length
    }
    e.ui = e.ui || {}, e.ui.version || (e.extend(e.ui, {
        version: "1.8.16",
        keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91
        }
    }), e.fn.extend({
        propAttr: e.fn.prop || e.fn.attr,
        _focus: e.fn.focus,
        focus: function (t, n) {
            return typeof t == "number" ? this.each(function () {
                var r = this;
                setTimeout(function () {
                    e(r).focus(), n && n.call(r)
                }, t)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function () {
            var t;
            return t = e.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(e.curCSS(this, "position", 1)) && /(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1))
            }).eq(0) : this.parents().filter(function () {
                return /(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function (n) {
            if (n !== t) return this.css("zIndex", n);
            if (this.length) {
                n = e(this[0]);
                for (var r; n.length && n[0] !== document;) {
                    r = n.css("position");
                    if (r === "absolute" || r === "relative" || r === "fixed") {
                        r = parseInt(n.css("zIndex"), 10);
                        if (!isNaN(r) && r !== 0) return r
                    }
                    n = n.parent()
                }
            }
            return 0
        },
        disableSelection: function () {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
                e.preventDefault()
            })
        },
        enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), e.each(["Width", "Height"], function (n, r) {
        function i(t, n, r, i) {
            return e.each(s, function () {
                n -= parseFloat(e.curCSS(t, "padding" + this, !0)) || 0, r && (n -= parseFloat(e.curCSS(t, "border" + this + "Width", !0)) || 0), i && (n -= parseFloat(e.curCSS(t, "margin" + this, !0)) || 0)
            }), n
        }
        var s = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
            o = r.toLowerCase(),
            u = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + r] = function (n) {
            return n === t ? u["inner" + r].call(this) : this.each(function () {
                e(this).css(o, i(this, n) + "px")
            })
        }, e.fn["outer" + r] = function (t, n) {
            return typeof t != "number" ? u["outer" + r].call(this, t) : this.each(function () {
                e(this).css(o, i(this, t, !0, n) + "px")
            })
        }
    }), e.extend(e.expr[":"], {
        data: function (t, n, r) {
            return !!e.data(t, r[3])
        },
        focusable: function (t) {
            return n(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function (t) {
            var r = e.attr(t, "tabindex"),
                i = isNaN(r);
            return (i || r >= 0) && n(t, !i)
        }
    }), e(function () {
        var t = document.body,
            n = t.appendChild(n = document.createElement("div"));
        e.extend(n.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }), e.support.minHeight = n.offsetHeight === 100, e.support.selectstart = "onselectstart" in n, t.removeChild(n).style.display = "none"
    }), e.extend(e.ui, {
        plugin: {
            add: function (t, n, r) {
                t = e.ui[t].prototype;
                for (var i in r) t.plugins[i] = t.plugins[i] || [], t.plugins[i].push([n, r[i]])
            },
            call: function (e, t, n) {
                if ((t = e.plugins[t]) && e.element[0].parentNode) for (var r = 0; r < t.length; r++) e.options[t[r][0]] && t[r][1].apply(e.element, n)
            }
        },
        contains: function (e, t) {
            return document.compareDocumentPosition ? e.compareDocumentPosition(t) & 16 : e !== t && e.contains(t)
        },
        hasScroll: function (t, n) {
            if (e(t).css("overflow") === "hidden") return !1;
            n = n && n === "left" ? "scrollLeft" : "scrollTop";
            var r = !1;
            return t[n] > 0 ? !0 : (t[n] = 1, r = t[n] > 0, t[n] = 0, r)
        },
        isOverAxis: function (e, t, n) {
            return e > t && e < t + n
        },
        isOver: function (t, n, r, i, s, o) {
            return e.ui.isOverAxis(t, r, s) && e.ui.isOverAxis(n, i, o)
        }
    }))
}(jQuery),
function (e, t) {
    if (e.cleanData) {
        var n = e.cleanData;
        e.cleanData = function (t) {
            for (var r = 0, i;
            (i = t[r]) != null; r++) try {
                e(i).triggerHandler("remove")
            } catch (s) {}
            n(t)
        }
    } else {
        var r = e.fn.remove;
        e.fn.remove = function (t, n) {
            return this.each(function () {
                return n || (!t || e.filter(t, [this]).length) && e("*", this).add([this]).each(function () {
                    try {
                        e(this).triggerHandler("remove")
                    } catch (t) {}
                }), r.call(e(this), t, n)
            })
        }
    }
    e.widget = function (t, n, r) {
        var i = t.split(".")[0],
            s;
        t = t.split(".")[1], s = i + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][s] = function (n) {
            return !!e.data(n, t)
        }, e[i] = e[i] || {}, e[i][t] = function (e, t) {
            arguments.length && this._createWidget(e, t)
        }, n = new n, n.options = e.extend(!0, {}, n.options), e[i][t].prototype = e.extend(!0, n, {
            namespace: i,
            widgetName: t,
            widgetEventPrefix: e[i][t].prototype.widgetEventPrefix || t,
            widgetBaseClass: s
        }, r), e.widget.bridge(t, e[i][t])
    }, e.widget.bridge = function (n, r) {
        e.fn[n] = function (i) {
            var s = typeof i == "string",
                o = Array.prototype.slice.call(arguments, 1),
                u = this;
            return i = !s && o.length ? e.extend.apply(null, [!0, i].concat(o)) : i, s && i.charAt(0) === "_" ? u : (s ? this.each(function () {
                var r = e.data(this, n),
                    s = r && e.isFunction(r[i]) ? r[i].apply(r, o) : r;
                if (s !== r && s !== t) return u = s, !1
            }) : this.each(function () {
                var t = e.data(this, n);
                t ? t.option(i || {})._init() : e.data(this, n, new r(i, this))
            }), u)
        }
    }, e.Widget = function (e, t) {
        arguments.length && this._createWidget(e, t)
    }, e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: !1
        },
        _createWidget: function (t, n) {
            e.data(n, this.widgetName, this), this.element = e(n), this.options = e.extend(!0, {}, this.options, this._getCreateOptions(), t);
            var r = this;
            this.element.bind("remove." + this.widgetName, function () {
                r.destroy()
            }), this._create(), this._trigger("create"), this._init()
        },
        _getCreateOptions: function () {
            return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function () {},
        _init: function () {},
        destroy: function () {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
        },
        widget: function () {
            return this.element
        },
        option: function (n, r) {
            var i = n;
            if (arguments.length === 0) return e.extend({}, this.options);
            if (typeof n == "string") {
                if (r === t) return this.options[n];
                i = {}, i[n] = r
            }
            return this._setOptions(i), this
        },
        _setOptions: function (t) {
            var n = this;
            return e.each(t, function (e, t) {
                n._setOption(e, t)
            }), this
        },
        _setOption: function (e, t) {
            return this.options[e] = t, e === "disabled" && this.widget()[t ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", t), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _trigger: function (t, n, r) {
            var i = this.options[t];
            n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), r = r || {};
            if (n.originalEvent) {
                t = e.event.props.length;
                for (var s; t;) s = e.event.props[--t], n[s] = n.originalEvent[s]
            }
            return this.element.trigger(n, r), !(e.isFunction(i) && i.call(this.element[0], n, r) === !1 || n.isDefaultPrevented())
        }
    }
}(jQuery),
function (e) {
    var t = !1;
    e(document).mouseup(function () {
        t = !1
    }), e.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function (e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function (n) {
                if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent")) return e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName)
        },
        _mouseDown: function (n) {
            if (!t) {
                this._mouseStarted && this._mouseUp(n), this._mouseDownEvent = n;
                var r = this,
                    i = n.which == 1,
                    s = typeof this.options.cancel == "string" && n.target.nodeName ? e(n.target).closest(this.options.cancel).length : !1;
                if (!i || s || !this._mouseCapture(n)) return !0;
                this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    r.mouseDelayMet = !0
                }, this.options.delay));
                if (this._mouseDistanceMet(n) && this._mouseDelayMet(n)) {
                    this._mouseStarted = this._mouseStart(n) !== !1;
                    if (!this._mouseStarted) return n.preventDefault(), !0
                }
                return !0 === e.data(n.target, this.widgetName + ".preventClickEvent") && e.removeData(n.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
                    return r._mouseMove(e)
                }, this._mouseUpDelegate = function (e) {
                    return r._mouseUp(e)
                }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), n.preventDefault(), t = !0
            }
        },
        _mouseMove: function (t) {
            return !e.browser.msie || document.documentMode >= 9 || !! t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && ((this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1) ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
        },
        _mouseUp: function (t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target == this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function (e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
            return !0
        }
    })
}(jQuery),
function (e) {
    e.widget("ui.draggable", e.ui.mouse, {
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function () {
            this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        destroy: function () {
            if (this.element.data("draggable")) return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy(), this
        },
        _mouseCapture: function (t) {
            var n = this.options;
            return this.helper || n.disabled || e(t.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(t), this.handle ? (n.iframeFix && e(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function () {
                e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function (t) {
            var n = this.options;
            return this.helper = this._createHelper(t), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), n.containment && this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.helper.addClass("ui-draggable-dragging"), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
        },
        _mouseDrag: function (t, n) {
            this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute");
            if (!n) {
                n = this._uiHash();
                if (this._trigger("drag", t, n) === !1) return this._mouseUp({}), !1;
                this.position = n.position
            }
            if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
            return e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function (t) {
            var n = !1;
            e.ui.ddmanager && !this.options.dropBehaviour && (n = e.ui.ddmanager.drop(this, t)), this.dropped && (n = this.dropped, this.dropped = !1);
            if ((!this.element[0] || !this.element[0].parentNode) && this.options.helper == "original") return !1;
            if (this.options.revert == "invalid" && !n || this.options.revert == "valid" && n || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, n)) {
                var r = this;
                e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                    r._trigger("stop", t) !== !1 && r._clear()
                })
            } else this._trigger("stop", t) !== !1 && this._clear();
            return !1
        },
        _mouseUp: function (t) {
            return this.options.iframeFix === !0 && e("div.ui-draggable-iframeFix").each(function () {
                this.parentNode.removeChild(this)
            }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function (t) {
            var n = !this.options.handle || !e(this.options.handle, this.element).length ? !0 : !1;
            return e(this.options.handle, this.element).find("*").andSelf().each(function () {
                this == t.target && (n = !0)
            }), n
        },
        _createHelper: function (t) {
            var n = this.options;
            return t = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t])) : n.helper == "clone" ? this.element.clone().removeAttr("id") : this.element, t.parents("body").length || t.appendTo(n.appendTo == "parent" ? this.element[0].parentNode : n.appendTo), t[0] != this.element[0] && !/(fixed|absolute)/.test(t.css("position")) && t.css("position", "absolute"), t
        },
        _adjustOffsetFromHelper: function (t) {
            typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            this.cssPosition == "absolute" && this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && e.browser.msie) t = {
                top: 0,
                left: 0
            };
            return {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if (this.cssPosition == "relative") {
                var e = this.element.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var t = this.options;
            t.containment == "parent" && (t.containment = this.helper[0].parentNode);
            if (t.containment == "document" || t.containment == "window") this.containment = [t.containment == "document" ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t.containment == "document" ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (t.containment == "document" ? 0 : e(window).scrollLeft()) + e(t.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (t.containment == "document" ? 0 : e(window).scrollTop()) + (e(t.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(t.containment) && t.containment.constructor != Array) {
                t = e(t.containment);
                var n = t[0];
                if (n) {
                    t.offset();
                    var r = e(n).css("overflow") != "hidden";
                    this.containment = [(parseInt(e(n).css("borderLeftWidth"), 10) || 0) + (parseInt(e(n).css("paddingLeft"), 10) || 0), (parseInt(e(n).css("borderTopWidth"), 10) || 0) + (parseInt(e(n).css("paddingTop"), 10) || 0), (r ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(e(n).css("borderLeftWidth"), 10) || 0) - (parseInt(e(n).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (r ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(e(n).css("borderTopWidth"), 10) || 0) - (parseInt(e(n).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = t
                }
            } else t.containment.constructor == Array && (this.containment = t.containment)
        },
        _convertPositionTo: function (t, n) {
            n || (n = this.position), t = t == "absolute" ? 1 : -1;
            var r = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                i = /(html|body)/i.test(r[0].tagName);
            return {
                top: n.top + this.offset.relative.top * t + this.offset.parent.top * t - (e.browser.safari && e.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()) * t),
                left: n.left + this.offset.relative.left * t + this.offset.parent.left * t - (e.browser.safari && e.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft()) * t)
            }
        },
        _generatePosition: function (t) {
            var n = this.options,
                r = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                i = /(html|body)/i.test(r[0].tagName),
                s = t.pageX,
                o = t.pageY;
            if (this.originalPosition) {
                var u;
                this.containment && (this.relative_container ? (u = this.relative_container.offset(), u = [this.containment[0] + u.left, this.containment[1] + u.top, this.containment[2] + u.left, this.containment[3] + u.top]) : u = this.containment, t.pageX - this.offset.click.left < u[0] && (s = u[0] + this.offset.click.left), t.pageY - this.offset.click.top < u[1] && (o = u[1] + this.offset.click.top), t.pageX - this.offset.click.left > u[2] && (s = u[2] + this.offset.click.left), t.pageY - this.offset.click.top > u[3] && (o = u[3] + this.offset.click.top)), n.grid && (o = n.grid[1] ? this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1] : this.originalPageY, o = u ? o - this.offset.click.top < u[1] || o - this.offset.click.top > u[3] ? o - this.offset.click.top < u[1] ? o + n.grid[1] : o - n.grid[1] : o : o, s = n.grid[0] ? this.originalPageX + Math.round((s - this.originalPageX) / n.grid[0]) * n.grid[0] : this.originalPageX, s = u ? s - this.offset.click.left < u[0] || s - this.offset.click.left > u[2] ? s - this.offset.click.left < u[0] ? s + n.grid[0] : s - n.grid[0] : s : s)
            }
            return {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (e.browser.safari && e.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()),
                left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (e.browser.safari && e.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft())
            }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function (t, n, r) {
            return r = r || this._uiHash(), e.ui.plugin.call(this, t, [n, r]), t == "drag" && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, n, r)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), e.extend(e.ui.draggable, {
        version: "1.8.16"
    }), e.ui.plugin.add("draggable", "connectToSortable", {
        start: function (t, n) {
            var r = e(this).data("draggable"),
                i = r.options,
                s = e.extend({}, n, {
                    item: r.element
                });
            r.sortables = [], e(i.connectToSortable).each(function () {
                var n = e.data(this, "sortable");
                n && !n.options.disabled && (r.sortables.push({
                    instance: n,
                    shouldRevert: n.options.revert
                }), n.refreshPositions(), n._trigger("activate", t, s))
            })
        },
        stop: function (t, n) {
            var r = e(this).data("draggable"),
                i = e.extend({}, n, {
                    item: r.element
                });
            e.each(r.sortables, function () {
                this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, r.options.helper == "original" && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, i))
            })
        },
        drag: function (t, n) {
            var r = e(this).data("draggable"),
                i = this;
            e.each(r.sortables, function () {
                this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(i).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                    return n.helper[0]
                }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1)
            })
        }
    }), e.ui.plugin.add("draggable", "cursor", {
        start: function () {
            var t = e("body"),
                n = e(this).data("draggable").options;
            t.css("cursor") && (n._cursor = t.css("cursor")), t.css("cursor", n.cursor)
        },
        stop: function () {
            var t = e(this).data("draggable").options;
            t._cursor && e("body").css("cursor", t._cursor)
        }
    }), e.ui.plugin.add("draggable", "opacity", {
        start: function (t, n) {
            t = e(n.helper), n = e(this).data("draggable").options, t.css("opacity") && (n._opacity = t.css("opacity")), t.css("opacity", n.opacity)
        },
        stop: function (t, n) {
            t = e(this).data("draggable").options, t._opacity && e(n.helper).css("opacity", t._opacity)
        }
    }), e.ui.plugin.add("draggable", "scroll", {
        start: function () {
            var t = e(this).data("draggable");
            t.scrollParent[0] != document && t.scrollParent[0].tagName != "HTML" && (t.overflowOffset = t.scrollParent.offset())
        },
        drag: function (t) {
            var n = e(this).data("draggable"),
                r = n.options,
                i = !1;
            if (n.scrollParent[0] != document && n.scrollParent[0].tagName != "HTML") {
                if (!r.axis || r.axis != "x") n.overflowOffset.top + n.scrollParent[0].offsetHeight - t.pageY < r.scrollSensitivity ? n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop + r.scrollSpeed : t.pageY - n.overflowOffset.top < r.scrollSensitivity && (n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop - r.scrollSpeed);
                if (!r.axis || r.axis != "y") n.overflowOffset.left + n.scrollParent[0].offsetWidth - t.pageX < r.scrollSensitivity ? n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft + r.scrollSpeed : t.pageX - n.overflowOffset.left < r.scrollSensitivity && (n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft - r.scrollSpeed)
            } else {
                if (!r.axis || r.axis != "x") t.pageY - e(document).scrollTop() < r.scrollSensitivity ? i = e(document).scrollTop(e(document).scrollTop() - r.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < r.scrollSensitivity && (i = e(document).scrollTop(e(document).scrollTop() + r.scrollSpeed));
                if (!r.axis || r.axis != "y") t.pageX - e(document).scrollLeft() < r.scrollSensitivity ? i = e(document).scrollLeft(e(document).scrollLeft() - r.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < r.scrollSensitivity && (i = e(document).scrollLeft(e(document).scrollLeft() + r.scrollSpeed))
            }
            i !== !1 && e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(n, t)
        }
    }), e.ui.plugin.add("draggable", "snap", {
        start: function () {
            var t = e(this).data("draggable"),
                n = t.options;
            t.snapElements = [], e(n.snap.constructor != String ? n.snap.items || ":data(draggable)" : n.snap).each(function () {
                var n = e(this),
                    r = n.offset();
                this != t.element[0] && t.snapElements.push({
                    item: this,
                    width: n.outerWidth(),
                    height: n.outerHeight(),
                    top: r.top,
                    left: r.left
                })
            })
        },
        drag: function (t, n) {
            for (var r = e(this).data("draggable"), i = r.options, s = i.snapTolerance, o = n.offset.left, u = o + r.helperProportions.width, f = n.offset.top, l = f + r.helperProportions.height, c = r.snapElements.length - 1; c >= 0; c--) {
                var h = r.snapElements[c].left,
                    p = h + r.snapElements[c].width,
                    d = r.snapElements[c].top,
                    v = d + r.snapElements[c].height;
                if (h - s < o && o < p + s && d - s < f && f < v + s || h - s < o && o < p + s && d - s < l && l < v + s || h - s < u && u < p + s && d - s < f && f < v + s || h - s < u && u < p + s && d - s < l && l < v + s) {
                    if (i.snapMode != "inner") {
                        var m = Math.abs(d - l) <= s,
                            g = Math.abs(v - f) <= s,
                            y = Math.abs(h - u) <= s,
                            b = Math.abs(p - o) <= s;
                        m && (n.position.top = r._convertPositionTo("relative", {
                            top: d - r.helperProportions.height,
                            left: 0
                        }).top - r.margins.top), g && (n.position.top = r._convertPositionTo("relative", {
                            top: v,
                            left: 0
                        }).top - r.margins.top), y && (n.position.left = r._convertPositionTo("relative", {
                            top: 0,
                            left: h - r.helperProportions.width
                        }).left - r.margins.left), b && (n.position.left = r._convertPositionTo("relative", {
                            top: 0,
                            left: p
                        }).left - r.margins.left)
                    }
                    var w = m || g || y || b;
                    i.snapMode != "outer" && (m = Math.abs(d - f) <= s, g = Math.abs(v - l) <= s, y = Math.abs(h - o) <= s, b = Math.abs(p - u) <= s, m && (n.position.top = r._convertPositionTo("relative", {
                        top: d,
                        left: 0
                    }).top - r.margins.top), g && (n.position.top = r._convertPositionTo("relative", {
                        top: v - r.helperProportions.height,
                        left: 0
                    }).top - r.margins.top), y && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: h
                    }).left - r.margins.left), b && (n.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: p - r.helperProportions.width
                    }).left - r.margins.left)), !r.snapElements[c].snapping && (m || g || y || b || w) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, e.extend(r._uiHash(), {
                        snapItem: r.snapElements[c].item
                    })), r.snapElements[c].snapping = m || g || y || b || w
                } else r.snapElements[c].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, e.extend(r._uiHash(), {
                    snapItem: r.snapElements[c].item
                })), r.snapElements[c].snapping = !1
            }
        }
    }), e.ui.plugin.add("draggable", "stack", {
        start: function () {
            var t = e(this).data("draggable").options;
            t = e.makeArray(e(t.stack)).sort(function (t, n) {
                return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
            });
            if (t.length) {
                var n = parseInt(t[0].style.zIndex) || 0;
                e(t).each(function (e) {
                    this.style.zIndex = n + e
                }), this[0].style.zIndex = n + t.length
            }
        }
    }), e.ui.plugin.add("draggable", "zIndex", {
        start: function (t, n) {
            t = e(n.helper), n = e(this).data("draggable").options, t.css("zIndex") && (n._zIndex = t.css("zIndex")), t.css("zIndex", n.zIndex)
        },
        stop: function (t, n) {
            t = e(this).data("draggable").options, t._zIndex && e(n.helper).css("zIndex", t._zIndex)
        }
    })
}(jQuery),
function (e) {
    e.widget("ui.droppable", {
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function () {
            var t = this.options,
                n = t.accept;
            this.isover = 0, this.isout = 1, this.accept = e.isFunction(n) ? n : function (e) {
                return e.is(n)
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [], e.ui.ddmanager.droppables[t.scope].push(this), t.addClasses && this.element.addClass("ui-droppable")
        },
        destroy: function () {
            for (var t = e.ui.ddmanager.droppables[this.options.scope], n = 0; n < t.length; n++) t[n] == this && t.splice(n, 1);
            return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"), this
        },
        _setOption: function (t, n) {
            t == "accept" && (this.accept = e.isFunction(n) ? n : function (e) {
                return e.is(n)
            }), e.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function (t) {
            var n = e.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), n && this._trigger("activate", t, this.ui(n))
        },
        _deactivate: function (t) {
            var n = e.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), n && this._trigger("deactivate", t, this.ui(n))
        },
        _over: function (t) {
            var n = e.ui.ddmanager.current; !! n && (n.currentItem || n.element)[0] != this.element[0] && this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(n)))
        },
        _out: function (t) {
            var n = e.ui.ddmanager.current; !! n && (n.currentItem || n.element)[0] != this.element[0] && this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(n)))
        },
        _drop: function (t, n) {
            var r = n || e.ui.ddmanager.current;
            if (!r || (r.currentItem || r.element)[0] == this.element[0]) return !1;
            var i = !1;
            return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function () {
                var t = e.data(this, "droppable");
                if (t.options.greedy && !t.options.disabled && t.options.scope == r.options.scope && t.accept.call(t.element[0], r.currentItem || r.element) && e.ui.intersect(r, e.extend(t, {
                    offset: t.element.offset()
                }), t.options.tolerance)) return i = !0, !1
            }), i ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(r)), this.element) : !1
        },
        ui: function (e) {
            return {
                draggable: e.currentItem || e.element,
                helper: e.helper,
                position: e.position,
                offset: e.positionAbs
            }
        }
    }), e.extend(e.ui.droppable, {
        version: "1.8.16"
    }), e.ui.intersect = function (t, n, r) {
        if (!n.offset) return !1;
        var i = (t.positionAbs || t.position.absolute).left,
            s = i + t.helperProportions.width,
            o = (t.positionAbs || t.position.absolute).top,
            u = o + t.helperProportions.height,
            f = n.offset.left,
            l = f + n.proportions.width,
            c = n.offset.top,
            h = c + n.proportions.height;
        switch (r) {
            case "fit":
                return f <= i && s <= l && c <= o && u <= h;
            case "intersect":
                return f < i + t.helperProportions.width / 2 && s - t.helperProportions.width / 2 < l && c < o + t.helperProportions.height / 2 && u - t.helperProportions.height / 2 < h;
            case "pointer":
                return e.ui.isOver((t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top, (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left, c, f, n.proportions.height, n.proportions.width);
            case "touch":
                return (o >= c && o <= h || u >= c && u <= h || o < c && u > h) && (i >= f && i <= l || s >= f && s <= l || i < f && s > l);
            default:
                return !1
        }
    }, e.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function (t, n) {
            var r = e.ui.ddmanager.droppables[t.options.scope] || [],
                i = n ? n.type : null,
                s = (t.currentItem || t.element).find(":data(droppable)").andSelf(),
                o = 0;
            e: for (; o < r.length; o++) if (!(r[o].options.disabled || t && !r[o].accept.call(r[o].element[0], t.currentItem || t.element))) {
                for (var u = 0; u < s.length; u++) if (s[u] == r[o].element[0]) {
                    r[o].proportions.height = 0;
                    continue e
                }
                r[o].visible = r[o].element.css("display") != "none", r[o].visible && (i == "mousedown" && r[o]._activate.call(r[o], n), r[o].offset = r[o].element.offset(), r[o].proportions = {
                    width: r[o].element[0].offsetWidth,
                    height: r[o].element[0].offsetHeight
                })
            }
        },
        drop: function (t, n) {
            var r = !1;
            return e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
                this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (r = r || this._drop.call(this, n)), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, n)))
            }), r
        },
        dragStart: function (t, n) {
            t.element.parents(":not(body,html)").bind("scroll.droppable", function () {
                t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
            })
        },
        drag: function (t, n) {
            t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, n), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
                if (!(this.options.disabled || this.greedyChild || !this.visible)) {
                    var r = e.ui.intersect(t, this, this.options.tolerance);
                    if (r = !r && this.isover == 1 ? "isout" : r && this.isover == 0 ? "isover" : null) {
                        var i;
                        if (this.options.greedy) {
                            var s = this.element.parents(":data(droppable):eq(0)");
                            s.length && (i = e.data(s[0], "droppable"), i.greedyChild = r == "isover" ? 1 : 0)
                        }
                        i && r == "isover" && (i.isover = 0, i.isout = 1, i._out.call(i, n)), this[r] = 1, this[r == "isout" ? "isover" : "isout"] = 0, this[r == "isover" ? "_over" : "_out"].call(this, n), i && r == "isout" && (i.isout = 0, i.isover = 1, i._over.call(i, n))
                    }
                }
            })
        },
        dragStop: function (t, n) {
            t.element.parents(":not(body,html)").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n)
        }
    }
}(jQuery),
function (e) {
    e.widget("ui.resizable", e.ui.mouse, {
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1e3
        },
        _create: function () {
            var t = this,
                n = this.options;
            this.element.addClass("ui-resizable"), e.extend(this, {
                _aspectRatio: !! n.aspectRatio,
                aspectRatio: n.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: n.helper || n.ghost || n.animate ? n.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (/relative/.test(this.element.css("position")) && e.browser.opera && this.element.css({
                position: "relative",
                top: "auto",
                left: "auto"
            }), this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = n.handles || (e(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se");
            if (this.handles.constructor == String) {
                this.handles == "all" && (this.handles = "n,e,s,w,se,sw,ne,nw");
                var r = this.handles.split(",");
                this.handles = {};
                for (var i = 0; i < r.length; i++) {
                    var s = e.trim(r[i]),
                        o = e('<div class="ui-resizable-handle ' + ("ui-resizable-" + s) + '"></div>');
                    /sw|se|ne|nw/.test(s) && o.css({
                        zIndex: ++n.zIndex
                    }), "se" == s && o.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(o)
                }
            }
            this._renderAxis = function (t) {
                t = t || this.element;
                for (var n in this.handles) {
                    this.handles[n].constructor == String && (this.handles[n] = e(this.handles[n], this.element).show());
                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        var r = e(this.handles[n], this.element),
                            i = 0;
                        i = /sw|ne|nw|se|n|s/.test(n) ? r.outerHeight() : r.outerWidth(), r = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join(""), t.css(r, i), this._proportionallyResize()
                    }
                    e(this.handles[n])
                }
            }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
                if (!t.resizing) {
                    if (this.className) var e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    t.axis = e && e[1] ? e[1] : "se"
                }
            }), n.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").hover(function () {
                n.disabled || (e(this).removeClass("ui-resizable-autohide"), t._handles.show())
            }, function () {
                n.disabled || t.resizing || (e(this).addClass("ui-resizable-autohide"), t._handles.hide())
            })), this._mouseInit()
        },
        destroy: function () {
            this._mouseDestroy();
            var t = function (t) {
                e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            if (this.elementIsWrapper) {
                t(this.element);
                var n = this.element;
                n.after(this.originalElement.css({
                    position: n.css("position"),
                    width: n.outerWidth(),
                    height: n.outerHeight(),
                    top: n.css("top"),
                    left: n.css("left")
                })).remove()
            }
            return this.originalElement.css("resize", this.originalResizeStyle), t(this.originalElement), this
        },
        _mouseCapture: function (t) {
            var n = !1;
            for (var r in this.handles) e(this.handles[r])[0] == t.target && (n = !0);
            return !this.options.disabled && n
        },
        _mouseStart: function (n) {
            var r = this.options,
                i = this.element.position(),
                s = this.element;
            this.resizing = !0, this.documentScroll = {
                top: e(document).scrollTop(),
                left: e(document).scrollLeft()
            }, (s.is(".ui-draggable") || /absolute/.test(s.css("position"))) && s.css({
                position: "absolute",
                top: i.top,
                left: i.left
            }), e.browser.opera && /relative/.test(s.css("position")) && s.css({
                position: "relative",
                top: "auto",
                left: "auto"
            }), this._renderProxy(), i = t(this.helper.css("left"));
            var o = t(this.helper.css("top"));
            return r.containment && (i += e(r.containment).scrollLeft() || 0, o += e(r.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: i,
                top: o
            }, this.size = this._helper ? {
                width: s.outerWidth(),
                height: s.outerHeight()
            } : {
                width: s.width(),
                height: s.height()
            }, this.originalSize = this._helper ? {
                width: s.outerWidth(),
                height: s.outerHeight()
            } : {
                width: s.width(),
                height: s.height()
            }, this.originalPosition = {
                left: i,
                top: o
            }, this.sizeDiff = {
                width: s.outerWidth() - s.width(),
                height: s.outerHeight() - s.height()
            }, this.originalMousePosition = {
                left: n.pageX,
                top: n.pageY
            }, this.aspectRatio = typeof r.aspectRatio == "number" ? r.aspectRatio : this.originalSize.width / this.originalSize.height || 1, r = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", r == "auto" ? this.axis + "-resize" : r), s.addClass("ui-resizable-resizing"), this._propagate("start", n), !0
        },
        _mouseDrag: function (e) {
            var t = this.helper,
                n = this.originalMousePosition,
                r = this._change[this.axis];
            if (!r) return !1;
            n = r.apply(this, [e, e.pageX - n.left || 0, e.pageY - n.top || 0]), this._updateVirtualBoundaries(e.shiftKey);
            if (this._aspectRatio || e.shiftKey) n = this._updateRatio(n, e);
            return n = this._respectSize(n, e), this._propagate("resize", e), t.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(n), this._trigger("resize", e, this.ui()), !1
        },
        _mouseStop: function (t) {
            this.resizing = !1;
            var n = this.options,
                r = this;
            if (this._helper) {
                var i = this._proportionallyResizeElements,
                    s = i.length && /textarea/i.test(i[0].nodeName);
                i = s && e.ui.hasScroll(i[0], "left") ? 0 : r.sizeDiff.height, s = s ? 0 : r.sizeDiff.width, s = {
                    width: r.helper.width() - s,
                    height: r.helper.height() - i
                }, i = parseInt(r.element.css("left"), 10) + (r.position.left - r.originalPosition.left) || null;
                var o = parseInt(r.element.css("top"), 10) + (r.position.top - r.originalPosition.top) || null;
                n.animate || this.element.css(e.extend(s, {
                    top: o,
                    left: i
                })), r.helper.height(r.size.height), r.helper.width(r.size.width), this._helper && !n.animate && this._proportionallyResize()
            }
            return e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function (e) {
            var t = this.options,
                r, i, s;
            t = {
                minWidth: n(t.minWidth) ? t.minWidth : 0,
                maxWidth: n(t.maxWidth) ? t.maxWidth : Infinity,
                minHeight: n(t.minHeight) ? t.minHeight : 0,
                maxHeight: n(t.maxHeight) ? t.maxHeight : Infinity
            };
            if (this._aspectRatio || e) e = t.minHeight * this.aspectRatio, i = t.minWidth / this.aspectRatio, r = t.maxHeight * this.aspectRatio, s = t.maxWidth / this.aspectRatio, e > t.minWidth && (t.minWidth = e), i > t.minHeight && (t.minHeight = i), r < t.maxWidth && (t.maxWidth = r), s < t.maxHeight && (t.maxHeight = s);
            this._vBoundaries = t
        },
        _updateCache: function (e) {
            this.offset = this.helper.offset(), n(e.left) && (this.position.left = e.left), n(e.top) && (this.position.top = e.top), n(e.height) && (this.size.height = e.height), n(e.width) && (this.size.width = e.width)
        },
        _updateRatio: function (e) {
            var t = this.position,
                r = this.size,
                i = this.axis;
            return n(e.height) ? e.width = e.height * this.aspectRatio : n(e.width) && (e.height = e.width / this.aspectRatio), i == "sw" && (e.left = t.left + (r.width - e.width), e.top = null), i == "nw" && (e.top = t.top + (r.height - e.height), e.left = t.left + (r.width - e.width)), e
        },
        _respectSize: function (e) {
            var t = this._vBoundaries,
                r = this.axis,
                i = n(e.width) && t.maxWidth && t.maxWidth < e.width,
                s = n(e.height) && t.maxHeight && t.maxHeight < e.height,
                o = n(e.width) && t.minWidth && t.minWidth > e.width,
                u = n(e.height) && t.minHeight && t.minHeight > e.height;
            o && (e.width = t.minWidth), u && (e.height = t.minHeight), i && (e.width = t.maxWidth), s && (e.height = t.maxHeight);
            var a = this.originalPosition.left + this.originalSize.width,
                f = this.position.top + this.size.height,
                l = /sw|nw|w/.test(r);
            return r = /nw|ne|n/.test(r), o && l && (e.left = a - t.minWidth), i && l && (e.left = a - t.maxWidth), u && r && (e.top = f - t.minHeight), s && r && (e.top = f - t.maxHeight), (t = !e.width && !e.height) && !e.left && e.top ? e.top = null : t && !e.top && e.left && (e.left = null), e
        },
        _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length) for (var t = this.helper || this.element, n = 0; n < this._proportionallyResizeElements.length; n++) {
                var r = this._proportionallyResizeElements[n];
                if (!this.borderDif) {
                    var i = [r.css("borderTopWidth"), r.css("borderRightWidth"), r.css("borderBottomWidth"), r.css("borderLeftWidth")],
                        s = [r.css("paddingTop"), r.css("paddingRight"), r.css("paddingBottom"), r.css("paddingLeft")];
                    this.borderDif = e.map(i, function (e, t) {
                        return e = parseInt(e, 10) || 0, t = parseInt(s[t], 10) || 0, e + t
                    })
                }
                e.browser.msie && (e(t).is(":hidden") || e(t).parents(":hidden").length) || r.css({
                    height: t.height() - this.borderDif[0] - this.borderDif[2] || 0,
                    width: t.width() - this.borderDif[1] - this.borderDif[3] || 0
                })
            }
        },
        _renderProxy: function () {
            var t = this.options;
            this.elementOffset = this.element.offset();
            if (this._helper) {
                this.helper = this.helper || e('<div style="overflow:hidden;"></div>');
                var n = e.browser.msie && e.browser.version < 7,
                    r = n ? 1 : 0;
                n = n ? 2 : -1, this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + n,
                    height: this.element.outerHeight() + n,
                    position: "absolute",
                    left: this.elementOffset.left - r + "px",
                    top: this.elementOffset.top - r + "px",
                    zIndex: ++t.zIndex
                }), this.helper.appendTo("body").disableSelection()
            } else this.helper = this.element
        },
        _change: {
            e: function (e, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function (e, t) {
                return {
                    left: this.originalPosition.left + t,
                    width: this.originalSize.width - t
                }
            },
            n: function (e, t, n) {
                return {
                    top: this.originalPosition.top + n,
                    height: this.originalSize.height - n
                }
            },
            s: function (e, t, n) {
                return {
                    height: this.originalSize.height + n
                }
            },
            se: function (t, n, r) {
                return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
            },
            sw: function (t, n, r) {
                return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
            },
            ne: function (t, n, r) {
                return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
            },
            nw: function (t, n, r) {
                return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
            }
        },
        _propagate: function (t, n) {
            e.ui.plugin.call(this, t, [n, this.ui()]), t != "resize" && this._trigger(t, n, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), e.extend(e.ui.resizable, {
        version: "1.8.16"
    }), e.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var t = e(this).data("resizable").options,
                n = function (t) {
                    e(t).each(function () {
                        var t = e(this);
                        t.data("resizable-alsoresize", {
                            width: parseInt(t.width(), 10),
                            height: parseInt(t.height(), 10),
                            left: parseInt(t.css("left"), 10),
                            top: parseInt(t.css("top"), 10),
                            position: t.css("position")
                        })
                    })
                };
            typeof t.alsoResize == "object" && !t.alsoResize.parentNode ? t.alsoResize.length ? (t.alsoResize = t.alsoResize[0], n(t.alsoResize)) : e.each(t.alsoResize, function (e) {
                n(e)
            }) : n(t.alsoResize)
        },
        resize: function (t, n) {
            var r = e(this).data("resizable");
            t = r.options;
            var i = r.originalSize,
                s = r.originalPosition,
                o = {
                    height: r.size.height - i.height || 0,
                    width: r.size.width - i.width || 0,
                    top: r.position.top - s.top || 0,
                    left: r.position.left - s.left || 0
                }, u = function (t, i) {
                    e(t).each(function () {
                        var t = e(this),
                            s = e(this).data("resizable-alsoresize"),
                            u = {}, l = i && i.length ? i : t.parents(n.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        e.each(l, function (e, t) {
                            (e = (s[t] || 0) + (o[t] || 0)) && e >= 0 && (u[t] = e || null)
                        }), e.browser.opera && /relative/.test(t.css("position")) && (r._revertToRelativePosition = !0, t.css({
                            position: "absolute",
                            top: "auto",
                            left: "auto"
                        })), t.css(u)
                    })
                };
            typeof t.alsoResize == "object" && !t.alsoResize.nodeType ? e.each(t.alsoResize, function (e, t) {
                u(e, t)
            }) : u(t.alsoResize)
        },
        stop: function () {
            var t = e(this).data("resizable"),
                n = t.options,
                r = function (t) {
                    e(t).each(function () {
                        var t = e(this);
                        t.css({
                            position: t.data("resizable-alsoresize").position
                        })
                    })
                };
            t._revertToRelativePosition && (t._revertToRelativePosition = !1, typeof n.alsoResize == "object" && !n.alsoResize.nodeType ? e.each(n.alsoResize, function (e) {
                r(e)
            }) : r(n.alsoResize)), e(this).removeData("resizable-alsoresize")
        }
    }), e.ui.plugin.add("resizable", "animate", {
        stop: function (t) {
            var n = e(this).data("resizable"),
                r = n.options,
                i = n._proportionallyResizeElements,
                s = i.length && /textarea/i.test(i[0].nodeName),
                o = s && e.ui.hasScroll(i[0], "left") ? 0 : n.sizeDiff.height;
            s = {
                width: n.size.width - (s ? 0 : n.sizeDiff.width),
                height: n.size.height - o
            }, o = parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left) || null;
            var u = parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top) || null;
            n.element.animate(e.extend(s, u && o ? {
                top: u,
                left: o
            } : {}), {
                duration: r.animateDuration,
                easing: r.animateEasing,
                step: function () {
                    var r = {
                        width: parseInt(n.element.css("width"), 10),
                        height: parseInt(n.element.css("height"), 10),
                        top: parseInt(n.element.css("top"), 10),
                        left: parseInt(n.element.css("left"), 10)
                    };
                    i && i.length && e(i[0]).css({
                        width: r.width,
                        height: r.height
                    }), n._updateCache(r), n._propagate("resize", t)
                }
            })
        }
    }), e.ui.plugin.add("resizable", "containment", {
        start: function () {
            var n = e(this).data("resizable"),
                r = n.element,
                i = n.options.containment;
            if (r = i instanceof e ? i.get(0) : /parent/.test(i) ? r.parent().get(0) : i) {
                n.containerElement = e(r);
                if (/document/.test(i) || i == document) n.containerOffset = {
                    left: 0,
                    top: 0
                }, n.containerPosition = {
                    left: 0,
                    top: 0
                }, n.parentData = {
                    element: e(document),
                    left: 0,
                    top: 0,
                    width: e(document).width(),
                    height: e(document).height() || document.body.parentNode.scrollHeight
                };
                else {
                    var s = e(r),
                        o = [];
                    e(["Top", "Right", "Left", "Bottom"]).each(function (e, n) {
                        o[e] = t(s.css("padding" + n))
                    }), n.containerOffset = s.offset(), n.containerPosition = s.position(), n.containerSize = {
                        height: s.innerHeight() - o[3],
                        width: s.innerWidth() - o[1]
                    }, i = n.containerOffset;
                    var u = n.containerSize.height,
                        f = n.containerSize.width;
                    f = e.ui.hasScroll(r, "left") ? r.scrollWidth : f, u = e.ui.hasScroll(r) ? r.scrollHeight : u, n.parentData = {
                        element: r,
                        left: i.left,
                        top: i.top,
                        width: f,
                        height: u
                    }
                }
            }
        },
        resize: function (t) {
            var n = e(this).data("resizable"),
                r = n.options,
                i = n.containerOffset,
                s = n.position;
            t = n._aspectRatio || t.shiftKey;
            var o = {
                top: 0,
                left: 0
            }, u = n.containerElement;
            u[0] != document && /static/.test(u.css("position")) && (o = i), s.left < (n._helper ? i.left : 0) && (n.size.width += n._helper ? n.position.left - i.left : n.position.left - o.left, t && (n.size.height = n.size.width / r.aspectRatio), n.position.left = r.helper ? i.left : 0), s.top < (n._helper ? i.top : 0) && (n.size.height += n._helper ? n.position.top - i.top : n.position.top, t && (n.size.width = n.size.height * r.aspectRatio), n.position.top = n._helper ? i.top : 0), n.offset.left = n.parentData.left + n.position.left, n.offset.top = n.parentData.top + n.position.top, r = Math.abs((n._helper ? n.offset.left - o.left : n.offset.left - o.left) + n.sizeDiff.width), i = Math.abs((n._helper ? n.offset.top - o.top : n.offset.top - i.top) + n.sizeDiff.height), s = n.containerElement.get(0) == n.element.parent().get(0), o = /relative|absolute/.test(n.containerElement.css("position")), s && o && (r -= n.parentData.left), r + n.size.width >= n.parentData.width && (n.size.width = n.parentData.width - r, t && (n.size.height = n.size.width / n.aspectRatio)), i + n.size.height >= n.parentData.height && (n.size.height = n.parentData.height - i, t && (n.size.width = n.size.height * n.aspectRatio))
        },
        stop: function () {
            var t = e(this).data("resizable"),
                n = t.options,
                r = t.containerOffset,
                i = t.containerPosition,
                s = t.containerElement,
                o = e(t.helper),
                u = o.offset(),
                f = o.outerWidth() - t.sizeDiff.width;
            o = o.outerHeight() - t.sizeDiff.height, t._helper && !n.animate && /relative/.test(s.css("position")) && e(this).css({
                left: u.left - i.left - r.left,
                width: f,
                height: o
            }), t._helper && !n.animate && /static/.test(s.css("position")) && e(this).css({
                left: u.left - i.left - r.left,
                width: f,
                height: o
            })
        }
    }), e.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var t = e(this).data("resizable"),
                n = t.options,
                r = t.size;
            t.ghost = t.originalElement.clone(), t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: r.height,
                width: r.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof n.ghost == "string" ? n.ghost : ""), t.ghost.appendTo(t.helper)
        },
        resize: function () {
            var t = e(this).data("resizable");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function () {
            var t = e(this).data("resizable");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }), e.ui.plugin.add("resizable", "grid", {
        resize: function () {
            var t = e(this).data("resizable"),
                n = t.options,
                r = t.size,
                i = t.originalSize,
                s = t.originalPosition,
                o = t.axis;
            n.grid = typeof n.grid == "number" ? [n.grid, n.grid] : n.grid;
            var u = Math.round((r.width - i.width) / (n.grid[0] || 1)) * (n.grid[0] || 1);
            n = Math.round((r.height - i.height) / (n.grid[1] || 1)) * (n.grid[1] || 1), /^(se|s|e)$/.test(o) ? (t.size.width = i.width + u, t.size.height = i.height + n) : /^(ne)$/.test(o) ? (t.size.width = i.width + u, t.size.height = i.height + n, t.position.top = s.top - n) : (/^(sw)$/.test(o) ? (t.size.width = i.width + u, t.size.height = i.height + n) : (t.size.width = i.width + u, t.size.height = i.height + n, t.position.top = s.top - n), t.position.left = s.left - u)
        }
    });
    var t = function (e) {
        return parseInt(e, 10) || 0
    }, n = function (e) {
        return !isNaN(parseInt(e, 10))
    }
}(jQuery),
function (e) {
    e.widget("ui.selectable", e.ui.mouse, {
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch"
        },
        _create: function () {
            var t = this;
            this.element.addClass("ui-selectable"), this.dragged = !1;
            var n;
            this.refresh = function () {
                n = e(t.options.filter, t.element[0]), n.each(function () {
                    var t = e(this),
                        n = t.offset();
                    e.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: n.left,
                        top: n.top,
                        right: n.left + t.outerWidth(),
                        bottom: n.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = n.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
        },
        destroy: function () {
            return this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"), this._mouseDestroy(), this
        },
        _mouseStart: function (t) {
            var n = this;
            this.opos = [t.pageX, t.pageY];
            if (!this.options.disabled) {
                var r = this.options;
                this.selectees = e(r.filter, this.element[0]), this._trigger("start", t), e(r.appendTo).append(this.helper), this.helper.css({
                    left: t.clientX,
                    top: t.clientY,
                    width: 0,
                    height: 0
                }), r.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                    var r = e.data(this, "selectable-item");
                    r.startselected = !0, t.metaKey || (r.$element.removeClass("ui-selected"), r.selected = !1, r.$element.addClass("ui-unselecting"), r.unselecting = !0, n._trigger("unselecting", t, {
                        unselecting: r.element
                    }))
                }), e(t.target).parents().andSelf().each(function () {
                    var r = e.data(this, "selectable-item");
                    if (r) {
                        var i = !t.metaKey || !r.$element.hasClass("ui-selected");
                        return r.$element.removeClass(i ? "ui-unselecting" : "ui-selected").addClass(i ? "ui-selecting" : "ui-unselecting"), r.unselecting = !i, r.selecting = i, (r.selected = i) ? n._trigger("selecting", t, {
                            selecting: r.element
                        }) : n._trigger("unselecting", t, {
                            unselecting: r.element
                        }), !1
                    }
                })
            }
        },
        _mouseDrag: function (t) {
            var n = this;
            this.dragged = !0;
            if (!this.options.disabled) {
                var r = this.options,
                    i = this.opos[0],
                    s = this.opos[1],
                    o = t.pageX,
                    u = t.pageY;
                if (i > o) {
                    var f = o;
                    o = i, i = f
                }
                return s > u && (f = u, u = s, s = f), this.helper.css({
                    left: i,
                    top: s,
                    width: o - i,
                    height: u - s
                }), this.selectees.each(function () {
                    var f = e.data(this, "selectable-item");
                    if ( !! f && f.element != n.element[0]) {
                        var l = !1;
                        r.tolerance == "touch" ? l = !(f.left > o || f.right < i || f.top > u || f.bottom < s) : r.tolerance == "fit" && (l = f.left > i && f.right < o && f.top > s && f.bottom < u), l ? (f.selected && (f.$element.removeClass("ui-selected"), f.selected = !1), f.unselecting && (f.$element.removeClass("ui-unselecting"), f.unselecting = !1), f.selecting || (f.$element.addClass("ui-selecting"), f.selecting = !0, n._trigger("selecting", t, {
                            selecting: f.element
                        }))) : (f.selecting && (t.metaKey && f.startselected ? (f.$element.removeClass("ui-selecting"), f.selecting = !1, f.$element.addClass("ui-selected"), f.selected = !0) : (f.$element.removeClass("ui-selecting"), f.selecting = !1, f.startselected && (f.$element.addClass("ui-unselecting"), f.unselecting = !0), n._trigger("unselecting", t, {
                            unselecting: f.element
                        }))), f.selected && !t.metaKey && !f.startselected && (f.$element.removeClass("ui-selected"), f.selected = !1, f.$element.addClass("ui-unselecting"), f.unselecting = !0, n._trigger("unselecting", t, {
                            unselecting: f.element
                        })))
                    }
                }), !1
            }
        },
        _mouseStop: function (t) {
            var n = this;
            return this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function () {
                var r = e.data(this, "selectable-item");
                r.$element.removeClass("ui-unselecting"), r.unselecting = !1, r.startselected = !1, n._trigger("unselected", t, {
                    unselected: r.element
                })
            }), e(".ui-selecting", this.element[0]).each(function () {
                var r = e.data(this, "selectable-item");
                r.$element.removeClass("ui-selecting").addClass("ui-selected"), r.selecting = !1, r.selected = !0, r.startselected = !0, n._trigger("selected", t, {
                    selected: r.element
                })
            }), this._trigger("stop", t), this.helper.remove(), !1
        }
    }), e.extend(e.ui.selectable, {
        version: "1.8.16"
    })
}(jQuery),
function (e) {
    e.widget("ui.sortable", e.ui.mouse, {
        widgetEventPrefix: "sort",
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function () {
            var e = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? e.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit()
        },
        destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable"), this._mouseDestroy();
            for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData("sortable-item");
            return this
        },
        _setOption: function (t, n) {
            t === "disabled" ? (this.options[t] = n, this.widget()[n ? "addClass" : "removeClass"]("ui-sortable-disabled")) : e.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function (t, n) {
            if (this.reverting) return !1;
            if (this.options.disabled || this.options.type == "static") return !1;
            this._refreshItems(t);
            var r = null,
                i = this;
            e(t.target).parents().each(function () {
                if (e.data(this, "sortable-item") == i) return r = e(this), !1
            }), e.data(t.target, "sortable-item") == i && (r = e(t.target));
            if (!r) return !1;
            if (this.options.handle && !n) {
                var s = !1;
                e(this.options.handle, r).find("*").andSelf().each(function () {
                    this == t.target && (s = !0)
                });
                if (!s) return !1
            }
            return this.currentItem = r, this._removeCurrentsFromItems(), !0
        },
        _mouseStart: function (t, n, r) {
            n = this.options;
            var i = this;
            this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), n.containment && this._setContainment(), n.cursor && (e("body").css("cursor") && (this._storedCursor = e("body").css("cursor")), e("body").css("cursor", n.cursor)), n.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", n.opacity)), n.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", n.zIndex)), this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions();
            if (!r) for (r = this.containers.length - 1; r >= 0; r--) this.containers[r]._trigger("activate", t, i._uiHash(this));
            return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
        },
        _mouseDrag: function (t) {
            this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs);
            if (this.options.scroll) {
                var n = this.options,
                    r = !1;
                this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < n.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + n.scrollSpeed : t.pageY - this.overflowOffset.top < n.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - n.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < n.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + n.scrollSpeed : t.pageX - this.overflowOffset.left < n.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - n.scrollSpeed)) : (t.pageY - e(document).scrollTop() < n.scrollSensitivity ? r = e(document).scrollTop(e(document).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < n.scrollSensitivity && (r = e(document).scrollTop(e(document).scrollTop() + n.scrollSpeed)), t.pageX - e(document).scrollLeft() < n.scrollSensitivity ? r = e(document).scrollLeft(e(document).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < n.scrollSensitivity && (r = e(document).scrollLeft(e(document).scrollLeft() + n.scrollSpeed))), r !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)
            }
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
            for (n = this.items.length - 1; n >= 0; n--) {
                r = this.items[n];
                var i = r.item[0],
                    s = this._intersectsWithPointer(r);
                if (s && i != this.currentItem[0] && this.placeholder[s == 1 ? "next" : "prev"]()[0] != i && !e.ui.contains(this.placeholder[0], i) && (this.options.type == "semi-dynamic" ? !e.ui.contains(this.element[0], i) : !0)) {
                    this.direction = s == 1 ? "down" : "up";
                    if (this.options.tolerance != "pointer" && !this._intersectsWithSides(r)) break;
                    this._rearrange(t, r), this._trigger("change", t, this._uiHash());
                    break
                }
            }
            return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (t, n) {
            if (t) {
                e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t);
                if (this.options.revert) {
                    var r = this;
                    n = r.placeholder.offset(), r.reverting = !0, e(this.helper).animate({
                        left: n.left - this.offset.parent.left - r.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                        top: n.top - this.offset.parent.top - r.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                    }, parseInt(this.options.revert, 10) || 500, function () {
                        r._clear(t)
                    })
                } else this._clear(t, n);
                return !1
            }
        },
        cancel: function () {
            var t = this;
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("deactivate", null, t._uiHash(this)), this.containers[n].containerCache.over && (this.containers[n]._trigger("out", null, t._uiHash(this)), this.containers[n].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (t) {
            var n = this._getItemsAsjQuery(t && t.connected),
                r = [];
            return t = t || {}, e(n).each(function () {
                var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[-=_](.+)/);
                n && r.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]))
            }), !r.length && t.key && r.push(t.key + "="), r.join("&")
        },
        toArray: function (t) {
            var n = this._getItemsAsjQuery(t && t.connected),
                r = [];
            return t = t || {}, n.each(function () {
                r.push(e(t.item || this).attr(t.attribute || "id") || "")
            }), r
        },
        _intersectsWith: function (e) {
            var t = this.positionAbs.left,
                n = t + this.helperProportions.width,
                r = this.positionAbs.top,
                i = r + this.helperProportions.height,
                s = e.left,
                o = s + e.width,
                u = e.top,
                a = u + e.height,
                f = this.offset.click.top,
                l = this.offset.click.left;
            return f = r + f > u && r + f < a && t + l > s && t + l < o, this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? f : s < t + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < o && u < r + this.helperProportions.height / 2 && i - this.helperProportions.height / 2 < a
        },
        _intersectsWithPointer: function (t) {
            var n = e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height);
            t = e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width), n = n && t, t = this._getDragVerticalDirection();
            var r = this._getDragHorizontalDirection();
            return n ? this.floating ? r && r == "right" || t == "down" ? 2 : 1 : t && (t == "down" ? 2 : 1) : !1
        },
        _intersectsWithSides: function (t) {
            var n = e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height);
            t = e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width);
            var r = this._getDragVerticalDirection(),
                i = this._getDragHorizontalDirection();
            return this.floating && i ? i == "right" && t || i == "left" && !t : r && (r == "down" && n || r == "up" && !n)
        },
        _getDragVerticalDirection: function () {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return e != 0 && (e > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return e != 0 && (e > 0 ? "right" : "left")
        },
        refresh: function (e) {
            return this._refreshItems(e), this.refreshPositions(), this
        },
        _connectWith: function () {
            var e = this.options;
            return e.connectWith.constructor == String ? [e.connectWith] : e.connectWith
        },
        _getItemsAsjQuery: function (t) {
            var n = [],
                r = [],
                i = this._connectWith();
            if (i && t) for (t = i.length - 1; t >= 0; t--) for (var s = e(i[t]), o = s.length - 1; o >= 0; o--) {
                var u = e.data(s[o], "sortable");
                u && u != this && !u.options.disabled && r.push([e.isFunction(u.options.items) ? u.options.items.call(u.element) : e(u.options.items, u.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), u])
            }
            r.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (t = r.length - 1; t >= 0; t--) r[t][0].each(function () {
                n.push(this)
            });
            return e(n)
        },
        _removeCurrentsFromItems: function () {
            for (var e = this.currentItem.find(":data(sortable-item)"), t = 0; t < this.items.length; t++) for (var n = 0; n < e.length; n++) e[n] == this.items[t].item[0] && this.items.splice(t, 1)
        },
        _refreshItems: function (t) {
            this.items = [], this.containers = [this];
            var n = this.items,
                r = [
                    [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                        item: this.currentItem
                    }) : e(this.options.items, this.element), this]
                ],
                i = this._connectWith();
            if (i) for (var s = i.length - 1; s >= 0; s--) for (var o = e(i[s]), u = o.length - 1; u >= 0; u--) {
                var f = e.data(o[u], "sortable");
                f && f != this && !f.options.disabled && (r.push([e.isFunction(f.options.items) ? f.options.items.call(f.element[0], t, {
                    item: this.currentItem
                }) : e(f.options.items, f.element), f]), this.containers.push(f))
            }
            for (s = r.length - 1; s >= 0; s--) {
                t = r[s][1], i = r[s][0], u = 0;
                for (o = i.length; u < o; u++) f = e(i[u]), f.data("sortable-item", t), n.push({
                    item: f,
                    instance: t,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
            }
        },
        refreshPositions: function (t) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var n = this.items.length - 1; n >= 0; n--) {
                var r = this.items[n];
                if (r.instance == this.currentContainer || !this.currentContainer || r.item[0] == this.currentItem[0]) {
                    var i = this.options.toleranceElement ? e(this.options.toleranceElement, r.item) : r.item;
                    t || (r.width = i.outerWidth(), r.height = i.outerHeight()), i = i.offset(), r.left = i.left, r.top = i.top
                }
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else for (n = this.containers.length - 1; n >= 0; n--) i = this.containers[n].element.offset(), this.containers[n].containerCache.left = i.left, this.containers[n].containerCache.top = i.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight();
            return this
        },
        _createPlaceholder: function (t) {
            var n = t || this,
                r = n.options;
            if (!r.placeholder || r.placeholder.constructor == String) {
                var i = r.placeholder;
                r.placeholder = {
                    element: function () {
                        var t = e(document.createElement(n.currentItem[0].nodeName)).addClass(i || n.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        return i || (t.style.visibility = "hidden"), t
                    },
                    update: function (e, t) {
                        if (!i || !! r.forcePlaceholderSize) t.height() || t.height(n.currentItem.innerHeight() - parseInt(n.currentItem.css("paddingTop") || 0, 10) - parseInt(n.currentItem.css("paddingBottom") || 0, 10)), t.width() || t.width(n.currentItem.innerWidth() - parseInt(n.currentItem.css("paddingLeft") || 0, 10) - parseInt(n.currentItem.css("paddingRight") || 0, 10))
                    }
                }
            }
            n.placeholder = e(r.placeholder.element.call(n.element, n.currentItem)), n.currentItem.after(n.placeholder), r.placeholder.update(n, n.placeholder)
        },
        _contactContainers: function (t) {
            for (var n = null, r = null, i = this.containers.length - 1; i >= 0; i--) if (!e.ui.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) {
                if (!n || !e.ui.contains(this.containers[i].element[0], n.element[0])) n = this.containers[i], r = i
            } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0);
            if (n) if (this.containers.length === 1) this.containers[r]._trigger("over", t, this._uiHash(this)), this.containers[r].containerCache.over = 1;
            else if (this.currentContainer != this.containers[r]) {
                n = 1e4, i = null;
                for (var s = this.positionAbs[this.containers[r].floating ? "left" : "top"], o = this.items.length - 1; o >= 0; o--) if (e.ui.contains(this.containers[r].element[0], this.items[o].item[0])) {
                    var u = this.items[o][this.containers[r].floating ? "left" : "top"];
                    Math.abs(u - s) < n && (n = Math.abs(u - s), i = this.items[o])
                }
                if (i || this.options.dropOnEmpty) this.currentContainer = this.containers[r], i ? this._rearrange(t, i, null, !0) : this._rearrange(t, null, this.containers[r].element, !0), this._trigger("change", t, this._uiHash()), this.containers[r]._trigger("change", t, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[r]._trigger("over", t, this._uiHash(this)), this.containers[r].containerCache.over = 1
            }
        },
        _createHelper: function (t) {
            var n = this.options;
            return t = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t, this.currentItem])) : n.helper == "clone" ? this.currentItem.clone() : this.currentItem, t.parents("body").length || e(n.appendTo != "parent" ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(t[0]), t[0] == this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (t[0].style.width == "" || n.forceHelperSize) && t.width(this.currentItem.width()), (t[0].style.height == "" || n.forceHelperSize) && t.height(this.currentItem.height()), t
        },
        _adjustOffsetFromHelper: function (t) {
            typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            this.cssPosition == "absolute" && this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && e.browser.msie) t = {
                top: 0,
                left: 0
            };
            return {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if (this.cssPosition == "relative") {
                var e = this.currentItem.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var t = this.options;
            t.containment == "parent" && (t.containment = this.helper[0].parentNode);
            if (t.containment == "document" || t.containment == "window") this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e(t.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (e(t.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(t.containment)) {
                var n = e(t.containment)[0];
                t = e(t.containment).offset();
                var r = e(n).css("overflow") != "hidden";
                this.containment = [t.left + (parseInt(e(n).css("borderLeftWidth"), 10) || 0) + (parseInt(e(n).css("paddingLeft"), 10) || 0) - this.margins.left, t.top + (parseInt(e(n).css("borderTopWidth"), 10) || 0) + (parseInt(e(n).css("paddingTop"), 10) || 0) - this.margins.top, t.left + (r ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(e(n).css("borderLeftWidth"), 10) || 0) - (parseInt(e(n).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, t.top + (r ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(e(n).css("borderTopWidth"), 10) || 0) - (parseInt(e(n).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function (t, n) {
            n || (n = this.position), t = t == "absolute" ? 1 : -1;
            var r = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                i = /(html|body)/i.test(r[0].tagName);
            return {
                top: n.top + this.offset.relative.top * t + this.offset.parent.top * t - (e.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()) * t),
                left: n.left + this.offset.relative.left * t + this.offset.parent.left * t - (e.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft()) * t)
            }
        },
        _generatePosition: function (t) {
            var n = this.options,
                r = this.cssPosition != "absolute" || this.scrollParent[0] != document && !! e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                i = /(html|body)/i.test(r[0].tagName);
            this.cssPosition == "relative" && (this.scrollParent[0] == document || this.scrollParent[0] == this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset());
            var s = t.pageX,
                o = t.pageY;
            return this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (o = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? o - this.offset.click.top < this.containment[1] || o - this.offset.click.top > this.containment[3] ? o - this.offset.click.top < this.containment[1] ? o + n.grid[1] : o - n.grid[1] : o : o, s = this.originalPageX + Math.round((s - this.originalPageX) / n.grid[0]) * n.grid[0], s = this.containment ? s - this.offset.click.left < this.containment[0] || s - this.offset.click.left > this.containment[2] ? s - this.offset.click.left < this.containment[0] ? s + n.grid[0] : s - n.grid[0] : s : s)), {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (e.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : i ? 0 : r.scrollTop()),
                left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (e.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : i ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function (e, t, n, r) {
            n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var i = this,
                s = this.counter;
            window.setTimeout(function () {
                s == i.counter && i.refreshPositions(!r)
            }, 0)
        },
        _clear: function (t, n) {
            this.reverting = !1;
            var r = [];
            !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null;
            if (this.helper[0] == this.currentItem[0]) {
                for (var i in this._storedCSS) if (this._storedCSS[i] == "auto" || this._storedCSS[i] == "static") this._storedCSS[i] = "";
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            this.fromOutside && !n && r.push(function (e) {
                this._trigger("receive", e, this._uiHash(this.fromOutside))
            }), (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !n && r.push(function (e) {
                this._trigger("update", e, this._uiHash())
            });
            if (!e.ui.contains(this.element[0], this.currentItem[0])) {
                n || r.push(function (e) {
                    this._trigger("remove", e, this._uiHash())
                });
                for (i = this.containers.length - 1; i >= 0; i--) e.ui.contains(this.containers[i].element[0], this.currentItem[0]) && !n && (r.push(function (e) {
                    return function (t) {
                        e._trigger("receive", t, this._uiHash(this))
                    }
                }.call(this, this.containers[i])), r.push(function (e) {
                    return function (t) {
                        e._trigger("update", t, this._uiHash(this))
                    }
                }.call(this, this.containers[i])))
            }
            for (i = this.containers.length - 1; i >= 0; i--) n || r.push(function (e) {
                return function (t) {
                    e._trigger("deactivate", t, this._uiHash(this))
                }
            }.call(this, this.containers[i])), this.containers[i].containerCache.over && (r.push(function (e) {
                return function (t) {
                    e._trigger("out", t, this._uiHash(this))
                }
            }.call(this, this.containers[i])), this.containers[i].containerCache.over = 0);
            this._storedCursor && e("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex), this.dragging = !1;
            if (this.cancelHelperRemoval) {
                if (!n) {
                    this._trigger("beforeStop", t, this._uiHash());
                    for (i = 0; i < r.length; i++) r[i].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return !1
            }
            n || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null;
            if (!n) {
                for (i = 0; i < r.length; i++) r[i].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function () {
            e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function (t) {
            var n = t || this;
            return {
                helper: n.helper,
                placeholder: n.placeholder || e([]),
                position: n.position,
                originalPosition: n.originalPosition,
                offset: n.positionAbs,
                item: n.currentItem,
                sender: t ? t.element : null
            }
        }
    }), e.extend(e.ui.sortable, {
        version: "1.8.16"
    })
}(jQuery), jQuery.effects || function (e, t) {
    function n(t) {
        var n;
        return t && t.constructor == Array && t.length == 3 ? t : (n = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t)) ? [parseInt(n[1], 10), parseInt(n[2], 10), parseInt(n[3], 10)] : (n = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t)) ? [parseFloat(n[1]) * 2.55, parseFloat(n[2]) * 2.55, parseFloat(n[3]) * 2.55] : (n = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t)) ? [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)] : (n = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t)) ? [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16)] : /rgba\(0, 0, 0, 0\)/.exec(t) ? f.transparent : f[e.trim(t).toLowerCase()]
    }
    function r(t, r) {
        var i;
        do {
            i = e.curCSS(t, r);
            if (i != "" && i != "transparent" || e.nodeName(t, "body")) break;
            r = "backgroundColor"
        } while (t = t.parentNode);
        return n(i)
    }
    function i() {
        var e = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
            t = {}, n, r;
        if (e && e.length && e[0] && e[e[0]]) for (var i = e.length; i--;) n = e[i], typeof e[n] == "string" && (r = n.replace(/\-(\w)/g, function (e, t) {
            return t.toUpperCase()
        }), t[r] = e[n]);
        else for (n in e) typeof e[n] == "string" && (t[n] = e[n]);
        return t
    }
    function s(t) {
        var n, r;
        for (n in t) r = t[n], (r == null || e.isFunction(r) || n in c || /scrollbar/.test(n) || !/color/i.test(n) && isNaN(parseFloat(r))) && delete t[n];
        return t
    }
    function o(e, t) {
        var n = {
            _: 0
        }, r;
        for (r in t) e[r] != t[r] && (n[r] = t[r]);
        return n
    }
    function u(t, n, r, i) {
        typeof t == "object" && (i = n, r = null, n = t, t = n.effect), e.isFunction(n) && (i = n, r = null, n = {});
        if (typeof n == "number" || e.fx.speeds[n]) i = r, r = n, n = {};
        return e.isFunction(r) && (i = r, r = null), n = n || {}, r = r || n.duration, r = e.fx.off ? 0 : typeof r == "number" ? r : r in e.fx.speeds ? e.fx.speeds[r] : e.fx.speeds._default, i = i || n.complete, [t, n, r, i]
    }
    function a(t) {
        return !t || typeof t == "number" || e.fx.speeds[t] ? !0 : typeof t == "string" && !e.effects[t] ? !0 : !1
    }
    e.effects = {}, e.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function (t, i) {
        e.fx.step[i] = function (e) {
            e.colorInit || (e.start = r(e.elem, i), e.end = n(e.end), e.colorInit = !0), e.elem.style[i] = "rgb(" + Math.max(Math.min(parseInt(e.pos * (e.end[0] - e.start[0]) + e.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(e.pos * (e.end[1] - e.start[1]) + e.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(e.pos * (e.end[2] - e.start[2]) + e.start[2], 10), 255), 0) + ")"
        }
    });
    var f = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0],
        transparent: [255, 255, 255]
    }, l = ["add", "remove", "toggle"],
        c = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
    e.effects.animateClass = function (t, n, r, u) {
        return e.isFunction(r) && (u = r, r = null), this.queue(function () {
            var a = e(this),
                f = a.attr("style") || " ",
                c = s(i.call(this)),
                d, v = a.attr("class");
            e.each(l, function (e, n) {
                t[n] && a[n + "Class"](t[n])
            }), d = s(i.call(this)), a.attr("class", v), a.animate(o(c, d), {
                queue: !1,
                duration: n,
                easing: r,
                complete: function () {
                    e.each(l, function (e, n) {
                        t[n] && a[n + "Class"](t[n])
                    }), typeof a.attr("style") == "object" ? (a.attr("style").cssText = "", a.attr("style").cssText = f) : a.attr("style", f), u && u.apply(this, arguments), e.dequeue(this)
                }
            })
        })
    }, e.fn.extend({
        _addClass: e.fn.addClass,
        addClass: function (t, n, r, i) {
            return n ? e.effects.animateClass.apply(this, [{
                add: t
            },
            n, r, i]) : this._addClass(t)
        },
        _removeClass: e.fn.removeClass,
        removeClass: function (t, n, r, i) {
            return n ? e.effects.animateClass.apply(this, [{
                remove: t
            },
            n, r, i]) : this._removeClass(t)
        },
        _toggleClass: e.fn.toggleClass,
        toggleClass: function (n, r, i, s, o) {
            return typeof r == "boolean" || r === t ? i ? e.effects.animateClass.apply(this, [r ? {
                add: n
            } : {
                remove: n
            },
            i, s, o]) : this._toggleClass(n, r) : e.effects.animateClass.apply(this, [{
                toggle: n
            },
            r, i, s])
        },
        switchClass: function (t, n, r, i, s) {
            return e.effects.animateClass.apply(this, [{
                add: n,
                remove: t
            },
            r, i, s])
        }
    }), e.extend(e.effects, {
        version: "1.8.16",
        save: function (e, t) {
            for (var n = 0; n < t.length; n++) t[n] !== null && e.data("ec.storage." + t[n], e[0].style[t[n]])
        },
        restore: function (e, t) {
            for (var n = 0; n < t.length; n++) t[n] !== null && e.css(t[n], e.data("ec.storage." + t[n]))
        },
        setMode: function (e, t) {
            return t == "toggle" && (t = e.is(":hidden") ? "show" : "hide"), t
        },
        getBaseline: function (e, t) {
            var n;
            switch (e[0]) {
                case "top":
                    n = 0;
                    break;
                case "middle":
                    n = .5;
                    break;
                case "bottom":
                    n = 1;
                    break;
                default:
                    n = e[0] / t.height
            }
            switch (e[1]) {
                case "left":
                    e = 0;
                    break;
                case "center":
                    e = .5;
                    break;
                case "right":
                    e = 1;
                    break;
                default:
                    e = e[1] / t.width
            }
            return {
                x: e,
                y: n
            }
        },
        createWrapper: function (t) {
            if (t.parent().is(".ui-effects-wrapper")) return t.parent();
            var n = {
                width: t.outerWidth(!0),
                height: t.outerHeight(!0),
                "float": t.css("float")
            }, r = e("<div></div>").addClass("ui-effects-wrapper").css({
                fontSize: "100%",
                background: "transparent",
                border: "none",
                margin: 0,
                padding: 0
            }),
                i = document.activeElement;
            return t.wrap(r), (t[0] === i || e.contains(t[0], i)) && e(i).focus(), r = t.parent(), t.css("position") == "static" ? (r.css({
                position: "relative"
            }), t.css({
                position: "relative"
            })) : (e.extend(n, {
                position: t.css("position"),
                zIndex: t.css("z-index")
            }), e.each(["top", "left", "bottom", "right"], function (e, r) {
                n[r] = t.css(r), isNaN(parseInt(n[r], 10)) && (n[r] = "auto")
            }), t.css({
                position: "relative",
                top: 0,
                left: 0,
                right: "auto",
                bottom: "auto"
            })), r.css(n).show()
        },
        removeWrapper: function (t) {
            var n, r = document.activeElement;
            return t.parent().is(".ui-effects-wrapper") ? (n = t.parent().replaceWith(t), (t[0] === r || e.contains(t[0], r)) && e(r).focus(), n) : t
        },
        setTransition: function (t, n, r, i) {
            return i = i || {}, e.each(n, function (e, n) {
                unit = t.cssUnit(n), unit[0] > 0 && (i[n] = unit[0] * r + unit[1])
            }), i
        }
    }), e.fn.extend({
        effect: function (t) {
            var n = u.apply(this, arguments),
                r = {
                    options: n[1],
                    duration: n[2],
                    callback: n[3]
                };
            n = r.options.mode;
            var i = e.effects[t];
            return e.fx.off || !i ? n ? this[n](r.duration, r.callback) : this.each(function () {
                r.callback && r.callback.call(this)
            }) : i.call(this, r)
        },
        _show: e.fn.show,
        show: function (e) {
            if (a(e)) return this._show.apply(this, arguments);
            var t = u.apply(this, arguments);
            return t[1].mode = "show", this.effect.apply(this, t)
        },
        _hide: e.fn.hide,
        hide: function (e) {
            if (a(e)) return this._hide.apply(this, arguments);
            var t = u.apply(this, arguments);
            return t[1].mode = "hide", this.effect.apply(this, t)
        },
        __toggle: e.fn.toggle,
        toggle: function (t) {
            if (a(t) || typeof t == "boolean" || e.isFunction(t)) return this.__toggle.apply(this, arguments);
            var n = u.apply(this, arguments);
            return n[1].mode = "toggle", this.effect.apply(this, n)
        },
        cssUnit: function (t) {
            var n = this.css(t),
                r = [];
            return e.each(["em", "px", "%", "pt"], function (e, t) {
                n.indexOf(t) > 0 && (r = [parseFloat(n), t])
            }), r
        }
    }), e.easing.jswing = e.easing.swing, e.extend(e.easing, {
        def: "easeOutQuad",
        swing: function (t, n, r, i, s) {
            return e.easing[e.easing.def](t, n, r, i, s)
        },
        easeInQuad: function (e, t, n, r, i) {
            return r * (t /= i) * t + n
        },
        easeOutQuad: function (e, t, n, r, i) {
            return -r * (t /= i) * (t - 2) + n
        },
        easeInOutQuad: function (e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n
        },
        easeInCubic: function (e, t, n, r, i) {
            return r * (t /= i) * t * t + n
        },
        easeOutCubic: function (e, t, n, r, i) {
            return r * ((t = t / i - 1) * t * t + 1) + n
        },
        easeInOutCubic: function (e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t + n : r / 2 * ((t -= 2) * t * t + 2) + n
        },
        easeInQuart: function (e, t, n, r, i) {
            return r * (t /= i) * t * t * t + n
        },
        easeOutQuart: function (e, t, n, r, i) {
            return -r * ((t = t / i - 1) * t * t * t - 1) + n
        },
        easeInOutQuart: function (e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t * t + n : -r / 2 * ((t -= 2) * t * t * t - 2) + n
        },
        easeInQuint: function (e, t, n, r, i) {
            return r * (t /= i) * t * t * t * t + n
        },
        easeOutQuint: function (e, t, n, r, i) {
            return r * ((t = t / i - 1) * t * t * t * t + 1) + n
        },
        easeInOutQuint: function (e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n
        },
        easeInSine: function (e, t, n, r, i) {
            return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
        },
        easeOutSine: function (e, t, n, r, i) {
            return r * Math.sin(t / i * (Math.PI / 2)) + n
        },
        easeInOutSine: function (e, t, n, r, i) {
            return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
        },
        easeInExpo: function (e, t, n, r, i) {
            return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
        },
        easeOutExpo: function (e, t, n, r, i) {
            return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
        },
        easeInOutExpo: function (e, t, n, r, i) {
            return t == 0 ? n : t == i ? n + r : (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
        },
        easeInCirc: function (e, t, n, r, i) {
            return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
        },
        easeOutCirc: function (e, t, n, r, i) {
            return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
        },
        easeInOutCirc: function (e, t, n, r, i) {
            return (t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        },
        easeInElastic: function (e, t, n, r, i) {
            e = 1.70158;
            var s = 0,
                o = r;
            return t == 0 ? n : (t /= i) == 1 ? n + r : (s || (s = i * .3), o < Math.abs(r) ? (o = r, e = s / 4) : e = s / (2 * Math.PI) * Math.asin(r / o), -(o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - e) * 2 * Math.PI / s)) + n)
        },
        easeOutElastic: function (e, t, n, r, i) {
            e = 1.70158;
            var s = 0,
                o = r;
            return t == 0 ? n : (t /= i) == 1 ? n + r : (s || (s = i * .3), o < Math.abs(r) ? (o = r, e = s / 4) : e = s / (2 * Math.PI) * Math.asin(r / o), o * Math.pow(2, -10 * t) * Math.sin((t * i - e) * 2 * Math.PI / s) + r + n)
        },
        easeInOutElastic: function (e, t, n, r, i) {
            e = 1.70158;
            var s = 0,
                o = r;
            return t == 0 ? n : (t /= i / 2) == 2 ? n + r : (s || (s = i * .3 * 1.5), o < Math.abs(r) ? (o = r, e = s / 4) : e = s / (2 * Math.PI) * Math.asin(r / o), t < 1 ? -0.5 * o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - e) * 2 * Math.PI / s) + n : o * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - e) * 2 * Math.PI / s) * .5 + r + n)
        },
        easeInBack: function (e, n, r, i, s, o) {
            return o == t && (o = 1.70158), i * (n /= s) * n * ((o + 1) * n - o) + r
        },
        easeOutBack: function (e, n, r, i, s, o) {
            return o == t && (o = 1.70158), i * ((n = n / s - 1) * n * ((o + 1) * n + o) + 1) + r
        },
        easeInOutBack: function (e, n, r, i, s, o) {
            return o == t && (o = 1.70158), (n /= s / 2) < 1 ? i / 2 * n * n * (((o *= 1.525) + 1) * n - o) + r : i / 2 * ((n -= 2) * n * (((o *= 1.525) + 1) * n + o) + 2) + r
        },
        easeInBounce: function (t, n, r, i, s) {
            return i - e.easing.easeOutBounce(t, s - n, 0, i, s) + r
        },
        easeOutBounce: function (e, t, n, r, i) {
            return (t /= i) < 1 / 2.75 ? r * 7.5625 * t * t + n : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        },
        easeInOutBounce: function (t, n, r, i, s) {
            return n < s / 2 ? e.easing.easeInBounce(t, n * 2, 0, i, s) * .5 + r : e.easing.easeOutBounce(t, n * 2 - s, 0, i, s) * .5 + i * .5 + r
        }
    })
}(jQuery),
function (e) {
    e.effects.blind = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = ["position", "top", "bottom", "left", "right"],
                i = e.effects.setMode(n, t.options.mode || "hide"),
                s = t.options.direction || "vertical";
            e.effects.save(n, r), n.show();
            var o = e.effects.createWrapper(n).css({
                overflow: "hidden"
            }),
                u = s == "vertical" ? "height" : "width";
            s = s == "vertical" ? o.height() : o.width(), i == "show" && o.css(u, 0);
            var f = {};
            f[u] = i == "show" ? s : 0, o.animate(f, t.duration, t.options.easing, function () {
                i == "hide" && n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(n[0], arguments), n.dequeue()
            })
        })
    }
}(jQuery),
function (e) {
    e.effects.bounce = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = ["position", "top", "bottom", "left", "right"],
                i = e.effects.setMode(n, t.options.mode || "effect"),
                s = t.options.direction || "up",
                o = t.options.distance || 20,
                u = t.options.times || 5,
                f = t.duration || 250;
            /show|hide/.test(i) && r.push("opacity"), e.effects.save(n, r), n.show(), e.effects.createWrapper(n);
            var l = s == "up" || s == "down" ? "top" : "left";
            s = s == "up" || s == "left" ? "pos" : "neg", o = t.options.distance || (l == "top" ? n.outerHeight({
                margin: !0
            }) / 3 : n.outerWidth({
                margin: !0
            }) / 3), i == "show" && n.css("opacity", 0).css(l, s == "pos" ? -o : o), i == "hide" && (o /= u * 2), i != "hide" && u--;
            if (i == "show") {
                var c = {
                    opacity: 1
                };
                c[l] = (s == "pos" ? "+=" : "-=") + o, n.animate(c, f / 2, t.options.easing), o /= 2, u--
            }
            for (c = 0; c < u; c++) {
                var h = {}, p = {};
                h[l] = (s == "pos" ? "-=" : "+=") + o, p[l] = (s == "pos" ? "+=" : "-=") + o, n.animate(h, f / 2, t.options.easing).animate(p, f / 2, t.options.easing), o = i == "hide" ? o * 2 : o / 2
            }
            i == "hide" ? (c = {
                opacity: 0
            }, c[l] = (s == "pos" ? "-=" : "+=") + o, n.animate(c, f / 2, t.options.easing, function () {
                n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments)
            })) : (h = {}, p = {}, h[l] = (s == "pos" ? "-=" : "+=") + o, p[l] = (s == "pos" ? "+=" : "-=") + o, n.animate(h, f / 2, t.options.easing).animate(p, f / 2, t.options.easing, function () {
                e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments)
            })), n.queue("fx", function () {
                n.dequeue()
            }), n.dequeue()
        })
    }
}(jQuery),
function (e) {
    e.effects.clip = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = ["position", "top", "bottom", "left", "right", "height", "width"],
                i = e.effects.setMode(n, t.options.mode || "hide"),
                s = t.options.direction || "vertical";
            e.effects.save(n, r), n.show();
            var o = e.effects.createWrapper(n).css({
                overflow: "hidden"
            });
            o = n[0].tagName == "IMG" ? o : n;
            var u = {
                size: s == "vertical" ? "height" : "width",
                position: s == "vertical" ? "top" : "left"
            };
            s = s == "vertical" ? o.height() : o.width(), i == "show" && (o.css(u.size, 0), o.css(u.position, s / 2));
            var f = {};
            f[u.size] = i == "show" ? s : 0, f[u.position] = i == "show" ? 0 : s / 2, o.animate(f, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    i == "hide" && n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(n[0], arguments), n.dequeue()
                }
            })
        })
    }
}(jQuery),
function (e) {
    e.effects.drop = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = ["position", "top", "bottom", "left", "right", "opacity"],
                i = e.effects.setMode(n, t.options.mode || "hide"),
                s = t.options.direction || "left";
            e.effects.save(n, r), n.show(), e.effects.createWrapper(n);
            var o = s == "up" || s == "down" ? "top" : "left";
            s = s == "up" || s == "left" ? "pos" : "neg";
            var u = t.options.distance || (o == "top" ? n.outerHeight({
                margin: !0
            }) / 2 : n.outerWidth({
                margin: !0
            }) / 2);
            i == "show" && n.css("opacity", 0).css(o, s == "pos" ? -u : u);
            var f = {
                opacity: i == "show" ? 1 : 0
            };
            f[o] = (i == "show" ? s == "pos" ? "+=" : "-=" : s == "pos" ? "-=" : "+=") + u, n.animate(f, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    i == "hide" && n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments), n.dequeue()
                }
            })
        })
    }
}(jQuery),
function (e) {
    e.effects.explode = function (t) {
        return this.queue(function () {
            var n = t.options.pieces ? Math.round(Math.sqrt(t.options.pieces)) : 3,
                r = t.options.pieces ? Math.round(Math.sqrt(t.options.pieces)) : 3;
            t.options.mode = t.options.mode == "toggle" ? e(this).is(":visible") ? "hide" : "show" : t.options.mode;
            var i = e(this).show().css("visibility", "hidden"),
                s = i.offset();
            s.top -= parseInt(i.css("marginTop"), 10) || 0, s.left -= parseInt(i.css("marginLeft"), 10) || 0;
            for (var o = i.outerWidth(!0), u = i.outerHeight(!0), f = 0; f < n; f++) for (var l = 0; l < r; l++) i.clone().appendTo("body").wrap("<div></div>").css({
                position: "absolute",
                visibility: "visible",
                left: -l * (o / r),
                top: -f * (u / n)
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: o / r,
                height: u / n,
                left: s.left + l * (o / r) + (t.options.mode == "show" ? (l - Math.floor(r / 2)) * (o / r) : 0),
                top: s.top + f * (u / n) + (t.options.mode == "show" ? (f - Math.floor(n / 2)) * (u / n) : 0),
                opacity: t.options.mode == "show" ? 0 : 1
            }).animate({
                left: s.left + l * (o / r) + (t.options.mode == "show" ? 0 : (l - Math.floor(r / 2)) * (o / r)),
                top: s.top + f * (u / n) + (t.options.mode == "show" ? 0 : (f - Math.floor(n / 2)) * (u / n)),
                opacity: t.options.mode == "show" ? 1 : 0
            }, t.duration || 500);
            setTimeout(function () {
                t.options.mode == "show" ? i.css({
                    visibility: "visible"
                }) : i.css({
                    visibility: "visible"
                }).hide(), t.callback && t.callback.apply(i[0]), i.dequeue(), e("div.ui-effects-explode").remove()
            }, t.duration || 500)
        })
    }
}(jQuery),
function (e) {
    e.effects.fade = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = e.effects.setMode(n, t.options.mode || "hide");
            n.animate({
                opacity: r
            }, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    t.callback && t.callback.apply(this, arguments), n.dequeue()
                }
            })
        })
    }
}(jQuery),
function (e) {
    e.effects.fold = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = ["position", "top", "bottom", "left", "right"],
                i = e.effects.setMode(n, t.options.mode || "hide"),
                s = t.options.size || 15,
                o = !! t.options.horizFirst,
                u = t.duration ? t.duration / 2 : e.fx.speeds._default / 2;
            e.effects.save(n, r), n.show();
            var f = e.effects.createWrapper(n).css({
                overflow: "hidden"
            }),
                l = i == "show" != o,
                c = l ? ["width", "height"] : ["height", "width"];
            l = l ? [f.width(), f.height()] : [f.height(), f.width()];
            var h = /([0-9]+)%/.exec(s);
            h && (s = parseInt(h[1], 10) / 100 * l[i == "hide" ? 0 : 1]), i == "show" && f.css(o ? {
                height: 0,
                width: s
            } : {
                height: s,
                width: 0
            }), o = {}, h = {}, o[c[0]] = i == "show" ? l[0] : s, h[c[1]] = i == "show" ? l[1] : 0, f.animate(o, u, t.options.easing).animate(h, u, t.options.easing, function () {
                i == "hide" && n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(n[0], arguments), n.dequeue()
            })
        })
    }
}(jQuery),
function (e) {
    e.effects.highlight = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = ["backgroundImage", "backgroundColor", "opacity"],
                i = e.effects.setMode(n, t.options.mode || "show"),
                s = {
                    backgroundColor: n.css("backgroundColor")
                };
            i == "hide" && (s.opacity = 0), e.effects.save(n, r), n.show().css({
                backgroundImage: "none",
                backgroundColor: t.options.color || "#ffff99"
            }).animate(s, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    i == "hide" && n.hide(), e.effects.restore(n, r), i == "show" && !e.support.opacity && this.style.removeAttribute("filter"), t.callback && t.callback.apply(this, arguments), n.dequeue()
                }
            })
        })
    }
}(jQuery),
function (e) {
    e.effects.pulsate = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = e.effects.setMode(n, t.options.mode || "show");
            times = (t.options.times || 5) * 2 - 1, duration = t.duration ? t.duration / 2 : e.fx.speeds._default / 2, isVisible = n.is(":visible"), animateTo = 0, isVisible || (n.css("opacity", 0).show(), animateTo = 1), (r == "hide" && isVisible || r == "show" && !isVisible) && times--;
            for (r = 0; r < times; r++) n.animate({
                opacity: animateTo
            }, duration, t.options.easing), animateTo = (animateTo + 1) % 2;
            n.animate({
                opacity: animateTo
            }, duration, t.options.easing, function () {
                animateTo == 0 && n.hide(), t.callback && t.callback.apply(this, arguments)
            }), n.queue("fx", function () {
                n.dequeue()
            }).dequeue()
        })
    }
}(jQuery),
function (e) {
    e.effects.puff = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = e.effects.setMode(n, t.options.mode || "hide"),
                i = parseInt(t.options.percent, 10) || 150,
                s = i / 100,
                o = {
                    height: n.height(),
                    width: n.width()
                };
            e.extend(t.options, {
                fade: !0,
                mode: r,
                percent: r == "hide" ? i : 100,
                from: r == "hide" ? o : {
                    height: o.height * s,
                    width: o.width * s
                }
            }), n.effect("scale", t.options, t.duration, t.callback), n.dequeue()
        })
    }, e.effects.scale = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = e.extend(!0, {}, t.options),
                i = e.effects.setMode(n, t.options.mode || "effect"),
                s = parseInt(t.options.percent, 10) || (parseInt(t.options.percent, 10) == 0 ? 0 : i == "hide" ? 0 : 100),
                o = t.options.direction || "both",
                u = t.options.origin;
            i != "effect" && (r.origin = u || ["middle", "center"], r.restore = !0), u = {
                height: n.height(),
                width: n.width()
            }, n.from = t.options.from || (i == "show" ? {
                height: 0,
                width: 0
            } : u), s = {
                y: o != "horizontal" ? s / 100 : 1,
                x: o != "vertical" ? s / 100 : 1
            }, n.to = {
                height: u.height * s.y,
                width: u.width * s.x
            }, t.options.fade && (i == "show" && (n.from.opacity = 0, n.to.opacity = 1), i == "hide" && (n.from.opacity = 1, n.to.opacity = 0)), r.from = n.from, r.to = n.to, r.mode = i, n.effect("size", r, t.duration, t.callback), n.dequeue()
        })
    }, e.effects.size = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                i = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                s = ["width", "height", "overflow"],
                o = ["fontSize"],
                u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                f = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                l = e.effects.setMode(n, t.options.mode || "effect"),
                c = t.options.restore || !1,
                h = t.options.scale || "both",
                p = t.options.origin,
                v = {
                    height: n.height(),
                    width: n.width()
                };
            n.from = t.options.from || v, n.to = t.options.to || v, p && (p = e.effects.getBaseline(p, v), n.from.top = (v.height - n.from.height) * p.y, n.from.left = (v.width - n.from.width) * p.x, n.to.top = (v.height - n.to.height) * p.y, n.to.left = (v.width - n.to.width) * p.x);
            var m = {
                from: {
                    y: n.from.height / v.height,
                    x: n.from.width / v.width
                },
                to: {
                    y: n.to.height / v.height,
                    x: n.to.width / v.width
                }
            };
            if (h == "box" || h == "both") m.from.y != m.to.y && (r = r.concat(u), n.from = e.effects.setTransition(n, u, m.from.y, n.from), n.to = e.effects.setTransition(n, u, m.to.y, n.to)), m.from.x != m.to.x && (r = r.concat(f), n.from = e.effects.setTransition(n, f, m.from.x, n.from), n.to = e.effects.setTransition(n, f, m.to.x, n.to));
            (h == "content" || h == "both") && m.from.y != m.to.y && (r = r.concat(o), n.from = e.effects.setTransition(n, o, m.from.y, n.from), n.to = e.effects.setTransition(n, o, m.to.y, n.to)), e.effects.save(n, c ? r : i), n.show(), e.effects.createWrapper(n), n.css("overflow", "hidden").css(n.from);
            if (h == "content" || h == "both") u = u.concat(["marginTop", "marginBottom"]).concat(o), f = f.concat(["marginLeft", "marginRight"]), s = r.concat(u).concat(f), n.find("*[width]").each(function () {
                child = e(this), c && e.effects.save(child, s);
                var n = {
                    height: child.height(),
                    width: child.width()
                };
                child.from = {
                    height: n.height * m.from.y,
                    width: n.width * m.from.x
                }, child.to = {
                    height: n.height * m.to.y,
                    width: n.width * m.to.x
                }, m.from.y != m.to.y && (child.from = e.effects.setTransition(child, u, m.from.y, child.from), child.to = e.effects.setTransition(child, u, m.to.y, child.to)), m.from.x != m.to.x && (child.from = e.effects.setTransition(child, f, m.from.x, child.from), child.to = e.effects.setTransition(child, f, m.to.x, child.to)), child.css(child.from), child.animate(child.to, t.duration, t.options.easing, function () {
                    c && e.effects.restore(child, s)
                })
            });
            n.animate(n.to, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    n.to.opacity === 0 && n.css("opacity", n.from.opacity), l == "hide" && n.hide(), e.effects.restore(n, c ? r : i), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments), n.dequeue()
                }
            })
        })
    }
}(jQuery),
function (e) {
    e.effects.shake = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = ["position", "top", "bottom", "left", "right"];
            e.effects.setMode(n, t.options.mode || "effect");
            var i = t.options.direction || "left",
                s = t.options.distance || 20,
                o = t.options.times || 3,
                u = t.duration || t.options.duration || 140;
            e.effects.save(n, r), n.show(), e.effects.createWrapper(n);
            var f = i == "up" || i == "down" ? "top" : "left",
                l = i == "up" || i == "left" ? "pos" : "neg";
            i = {};
            var c = {}, h = {};
            i[f] = (l == "pos" ? "-=" : "+=") + s, c[f] = (l == "pos" ? "+=" : "-=") + s * 2, h[f] = (l == "pos" ? "-=" : "+=") + s * 2, n.animate(i, u, t.options.easing);
            for (s = 1; s < o; s++) n.animate(c, u, t.options.easing).animate(h, u, t.options.easing);
            n.animate(c, u, t.options.easing).animate(i, u / 2, t.options.easing, function () {
                e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments)
            }), n.queue("fx", function () {
                n.dequeue()
            }), n.dequeue()
        })
    }
}(jQuery),
function (e) {
    e.effects.slide = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = ["position", "top", "bottom", "left", "right"],
                i = e.effects.setMode(n, t.options.mode || "show"),
                s = t.options.direction || "left";
            e.effects.save(n, r), n.show(), e.effects.createWrapper(n).css({
                overflow: "hidden"
            });
            var o = s == "up" || s == "down" ? "top" : "left";
            s = s == "up" || s == "left" ? "pos" : "neg";
            var u = t.options.distance || (o == "top" ? n.outerHeight({
                margin: !0
            }) : n.outerWidth({
                margin: !0
            }));
            i == "show" && n.css(o, s == "pos" ? isNaN(u) ? "-" + u : -u : u);
            var f = {};
            f[o] = (i == "show" ? s == "pos" ? "+=" : "-=" : s == "pos" ? "-=" : "+=") + u, n.animate(f, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    i == "hide" && n.hide(), e.effects.restore(n, r), e.effects.removeWrapper(n), t.callback && t.callback.apply(this, arguments), n.dequeue()
                }
            })
        })
    }
}(jQuery),
function (e) {
    e.effects.transfer = function (t) {
        return this.queue(function () {
            var n = e(this),
                r = e(t.options.to),
                i = r.offset();
            r = {
                top: i.top,
                left: i.left,
                height: r.innerHeight(),
                width: r.innerWidth()
            }, i = n.offset();
            var s = e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(t.options.className).css({
                top: i.top,
                left: i.left,
                height: n.innerHeight(),
                width: n.innerWidth(),
                position: "absolute"
            }).animate(r, t.duration, t.options.easing, function () {
                s.remove(), t.callback && t.callback.apply(n[0], arguments), n.dequeue()
            })
        })
    }
}(jQuery),
function (e) {
    e.widget("ui.accordion", {
        options: {
            active: 0,
            animated: "slide",
            autoHeight: !0,
            clearStyle: !1,
            collapsible: !1,
            event: "click",
            fillSpace: !1,
            header: "> li > :first-child,> :not(li):even",
            icons: {
                header: "ui-icon-triangle-1-e",
                headerSelected: "ui-icon-triangle-1-s"
            },
            navigation: !1,
            navigationFilter: function () {
                return this.href.toLowerCase() === location.href.toLowerCase()
            }
        },
        _create: function () {
            var t = this,
                n = t.options;
            t.running = 0, t.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"), t.headers = t.element.find(n.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion", function () {
                n.disabled || e(this).addClass("ui-state-hover")
            }).bind("mouseleave.accordion", function () {
                n.disabled || e(this).removeClass("ui-state-hover")
            }).bind("focus.accordion", function () {
                n.disabled || e(this).addClass("ui-state-focus")
            }).bind("blur.accordion", function () {
                n.disabled || e(this).removeClass("ui-state-focus")
            }), t.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
            if (n.navigation) {
                var r = t.element.find("a").filter(n.navigationFilter).eq(0);
                if (r.length) {
                    var i = r.closest(".ui-accordion-header");
                    t.active = i.length ? i : r.closest(".ui-accordion-content").prev()
                }
            }
            t.active = t._findActive(t.active || n.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"), t.active.next().addClass("ui-accordion-content-active"), t._createIcons(), t.resize(), t.element.attr("role", "tablist"), t.headers.attr("role", "tab").bind("keydown.accordion", function (e) {
                return t._keydown(e)
            }).next().attr("role", "tabpanel"), t.headers.not(t.active || "").attr({
                "aria-expanded": "false",
                "aria-selected": "false",
                tabIndex: -1
            }).next().hide(), t.active.length ? t.active.attr({
                "aria-expanded": "true",
                "aria-selected": "true",
                tabIndex: 0
            }) : t.headers.eq(0).attr("tabIndex", 0), e.browser.safari || t.headers.find("a").attr("tabIndex", -1), n.event && t.headers.bind(n.event.split(" ").join(".accordion ") + ".accordion", function (e) {
                t._clickHandler.call(t, e, this), e.preventDefault()
            })
        },
        _createIcons: function () {
            var t = this.options;
            t.icons && (e("<span></span>").addClass("ui-icon " + t.icons.header).prependTo(this.headers), this.active.children(".ui-icon").toggleClass(t.icons.header).toggleClass(t.icons.headerSelected), this.element.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function () {
            this.headers.children(".ui-icon").remove(), this.element.removeClass("ui-accordion-icons")
        },
        destroy: function () {
            var t = this.options;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex"), this.headers.find("a").removeAttr("tabIndex"), this._destroyIcons();
            var n = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
            return (t.autoHeight || t.fillHeight) && n.css("height", ""), e.Widget.prototype.destroy.call(this)
        },
        _setOption: function (t, n) {
            e.Widget.prototype._setOption.apply(this, arguments), t == "active" && this.activate(n), t == "icons" && (this._destroyIcons(), n && this._createIcons()), t == "disabled" && this.headers.add(this.headers.next())[n ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled")
        },
        _keydown: function (t) {
            if (!(this.options.disabled || t.altKey || t.ctrlKey)) {
                var n = e.ui.keyCode,
                    r = this.headers.length,
                    i = this.headers.index(t.target),
                    s = !1;
                switch (t.keyCode) {
                    case n.RIGHT:
                    case n.DOWN:
                        s = this.headers[(i + 1) % r];
                        break;
                    case n.LEFT:
                    case n.UP:
                        s = this.headers[(i - 1 + r) % r];
                        break;
                    case n.SPACE:
                    case n.ENTER:
                        this._clickHandler({
                            target: t.target
                        }, t.target), t.preventDefault()
                }
                return s ? (e(t.target).attr("tabIndex", -1), e(s).attr("tabIndex", 0), s.focus(), !1) : !0
            }
        },
        resize: function () {
            var t = this.options,
                n;
            if (t.fillSpace) {
                if (e.browser.msie) {
                    var r = this.element.parent().css("overflow");
                    this.element.parent().css("overflow", "hidden")
                }
                n = this.element.parent().height(), e.browser.msie && this.element.parent().css("overflow", r), this.headers.each(function () {
                    n -= e(this).outerHeight(!0)
                }), this.headers.next().each(function () {
                    e(this).height(Math.max(0, n - e(this).innerHeight() + e(this).height()))
                }).css("overflow", "auto")
            } else t.autoHeight && (n = 0, this.headers.next().each(function () {
                n = Math.max(n, e(this).height("").height())
            }).height(n));
            return this
        },
        activate: function (e) {
            return this.options.active = e, e = this._findActive(e)[0], this._clickHandler({
                target: e
            }, e), this
        },
        _findActive: function (t) {
            return t ? typeof t == "number" ? this.headers.filter(":eq(" + t + ")") : this.headers.not(this.headers.not(t)) : t === !1 ? e([]) : this.headers.filter(":eq(0)")
        },
        _clickHandler: function (t, n) {
            var r = this.options;
            if (!r.disabled) if (t.target) {
                t = e(t.currentTarget || n), n = t[0] === this.active[0], r.active = r.collapsible && n ? !1 : this.headers.index(t);
                if (!(this.running || !r.collapsible && n)) {
                    var i = this.active;
                    f = t.next(), o = this.active.next(), u = {
                        options: r,
                        newHeader: n && r.collapsible ? e([]) : t,
                        oldHeader: this.active,
                        newContent: n && r.collapsible ? e([]) : f,
                        oldContent: o
                    };
                    var s = this.headers.index(this.active[0]) > this.headers.index(t[0]);
                    this.active = n ? e([]) : t, this._toggle(f, o, u, n, s), i.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(r.icons.headerSelected).addClass(r.icons.header), n || (t.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(r.icons.header).addClass(r.icons.headerSelected), t.next().addClass("ui-accordion-content-active"))
                }
            } else if (r.collapsible) {
                this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(r.icons.headerSelected).addClass(r.icons.header), this.active.next().addClass("ui-accordion-content-active");
                var o = this.active.next(),
                    u = {
                        options: r,
                        newHeader: e([]),
                        oldHeader: r.active,
                        newContent: e([]),
                        oldContent: o
                    }, f = this.active = e([]);
                this._toggle(f, o, u)
            }
        },
        _toggle: function (t, n, r, i, s) {
            var o = this,
                u = o.options;
            o.toShow = t, o.toHide = n, o.data = r;
            var f = function () {
                if (o) return o._completed.apply(o, arguments)
            };
            o._trigger("changestart", null, o.data), o.running = n.size() === 0 ? t.size() : n.size();
            if (u.animated) {
                r = {}, r = u.collapsible && i ? {
                    toShow: e([]),
                    toHide: n,
                    complete: f,
                    down: s,
                    autoHeight: u.autoHeight || u.fillSpace
                } : {
                    toShow: t,
                    toHide: n,
                    complete: f,
                    down: s,
                    autoHeight: u.autoHeight || u.fillSpace
                }, u.proxied || (u.proxied = u.animated), u.proxiedDuration || (u.proxiedDuration = u.duration), u.animated = e.isFunction(u.proxied) ? u.proxied(r) : u.proxied, u.duration = e.isFunction(u.proxiedDuration) ? u.proxiedDuration(r) : u.proxiedDuration, i = e.ui.accordion.animations;
                var l = u.duration,
                    c = u.animated;
                c && !i[c] && !e.easing[c] && (c = "slide"), i[c] || (i[c] = function (e) {
                    this.slide(e, {
                        easing: c,
                        duration: l || 700
                    })
                }), i[c](r)
            } else u.collapsible && i ? t.toggle() : (n.hide(), t.show()), f(!0);
            n.prev().attr({
                "aria-expanded": "false",
                "aria-selected": "false",
                tabIndex: -1
            }).blur(), t.prev().attr({
                "aria-expanded": "true",
                "aria-selected": "true",
                tabIndex: 0
            }).focus()
        },
        _completed: function (e) {
            this.running = e ? 0 : --this.running, this.running || (this.options.clearStyle && this.toShow.add(this.toHide).css({
                height: "",
                overflow: ""
            }), this.toHide.removeClass("ui-accordion-content-active"), this.toHide.length && (this.toHide.parent()[0].className = this.toHide.parent()[0].className), this._trigger("change", null, this.data))
        }
    }), e.extend(e.ui.accordion, {
        version: "1.8.16",
        animations: {
            slide: function (t, n) {
                t = e.extend({
                    easing: "swing",
                    duration: 300
                }, t, n);
                if (t.toHide.size()) if (t.toShow.size()) {
                    var r = t.toShow.css("overflow"),
                        i = 0,
                        s = {}, o = {}, u;
                    n = t.toShow, u = n[0].style.width, n.width(parseInt(n.parent().width(), 10) - parseInt(n.css("paddingLeft"), 10) - parseInt(n.css("paddingRight"), 10) - (parseInt(n.css("borderLeftWidth"), 10) || 0) - (parseInt(n.css("borderRightWidth"), 10) || 0)), e.each(["height", "paddingTop", "paddingBottom"], function (n, r) {
                        o[r] = "hide", n = ("" + e.css(t.toShow[0], r)).match(/^([\d+-.]+)(.*)$/), s[r] = {
                            value: n[1],
                            unit: n[2] || "px"
                        }
                    }), t.toShow.css({
                        height: 0,
                        overflow: "hidden"
                    }).show(), t.toHide.filter(":hidden").each(t.complete).end().filter(":visible").animate(o, {
                        step: function (e, n) {
                            n.prop == "height" && (i = n.end - n.start === 0 ? 0 : (n.now - n.start) / (n.end - n.start)), t.toShow[0].style[n.prop] = i * s[n.prop].value + s[n.prop].unit
                        },
                        duration: t.duration,
                        easing: t.easing,
                        complete: function () {
                            t.autoHeight || t.toShow.css("height", ""), t.toShow.css({
                                width: u,
                                overflow: r
                            }), t.complete()
                        }
                    })
                } else t.toHide.animate({
                    height: "hide",
                    paddingTop: "hide",
                    paddingBottom: "hide"
                }, t);
                else t.toShow.animate({
                    height: "show",
                    paddingTop: "show",
                    paddingBottom: "show"
                }, t)
            },
            bounceslide: function (e) {
                this.slide(e, {
                    easing: e.down ? "easeOutBounce" : "swing",
                    duration: e.down ? 1e3 : 200
                })
            }
        }
    })
}(jQuery),
function (e) {
    var t = 0;
    e.widget("ui.autocomplete", {
        options: {
            appendTo: "body",
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null
        },
        pending: 0,
        _create: function () {
            var t = this,
                n = this.element[0].ownerDocument,
                r;
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({
                role: "textbox",
                "aria-autocomplete": "list",
                "aria-haspopup": "true"
            }).bind("keydown.autocomplete", function (n) {
                if (!t.options.disabled && !t.element.propAttr("readOnly")) {
                    r = !1;
                    var i = e.ui.keyCode;
                    switch (n.keyCode) {
                        case i.PAGE_UP:
                            t._move("previousPage", n);
                            break;
                        case i.PAGE_DOWN:
                            t._move("nextPage", n);
                            break;
                        case i.UP:
                            t._move("previous", n), n.preventDefault();
                            break;
                        case i.DOWN:
                            t._move("next", n), n.preventDefault();
                            break;
                        case i.ENTER:
                        case i.NUMPAD_ENTER:
                            t.menu.active && (r = !0, n.preventDefault());
                        case i.TAB:
                            if (!t.menu.active) return;
                            t.menu.select(n);
                            break;
                        case i.ESCAPE:
                            t.element.val(t.term), t.close(n);
                            break;
                        default:
                            clearTimeout(t.searching), t.searching = setTimeout(function () {
                                t.term != t.element.val() && (t.selectedItem = null, t.search(null, n))
                            }, t.options.delay)
                    }
                }
            }).bind("keypress.autocomplete", function (e) {
                r && (r = !1, e.preventDefault())
            }).bind("focus.autocomplete", function () {
                t.options.disabled || (t.selectedItem = null, t.previous = t.element.val())
            }).bind("blur.autocomplete", function (e) {
                t.options.disabled || (clearTimeout(t.searching), t.closing = setTimeout(function () {
                    t.close(e), t._change(e)
                }, 150))
            }), this._initSource(), this.response = function () {
                return t._response.apply(t, arguments)
            }, this.menu = e("<ul></ul>").addClass("ui-autocomplete").appendTo(e(this.options.appendTo || "body", n)[0]).mousedown(function (n) {
                var r = t.menu.element[0];
                e(n.target).closest(".ui-menu-item").length || setTimeout(function () {
                    e(document).one("mousedown", function (n) {
                        n.target !== t.element[0] && n.target !== r && !e.ui.contains(r, n.target) && t.close()
                    })
                }, 1), setTimeout(function () {
                    clearTimeout(t.closing)
                }, 13)
            }).menu({
                focus: function (e, n) {
                    n = n.item.data("item.autocomplete"), !1 !== t._trigger("focus", e, {
                        item: n
                    }) && /^key/.test(e.originalEvent.type) && t.element.val(n.value)
                },
                selected: function (e, r) {
                    var i = r.item.data("item.autocomplete"),
                        s = t.previous;
                    t.element[0] !== n.activeElement && (t.element.focus(), t.previous = s, setTimeout(function () {
                        t.previous = s, t.selectedItem = i
                    }, 1)), !1 !== t._trigger("select", e, {
                        item: i
                    }) && t.element.val(i.value), t.term = t.element.val(), t.close(e), t.selectedItem = i
                },
                blur: function () {
                    t.menu.element.is(":visible") && t.element.val() !== t.term && t.element.val(t.term)
                }
            }).zIndex(this.element.zIndex() + 1).css({
                top: 0,
                left: 0
            }).hide().data("menu"), e.fn.bgiframe && this.menu.element.bgiframe()
        },
        destroy: function () {
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"), this.menu.element.remove(), e.Widget.prototype.destroy.call(this)
        },
        _setOption: function (t, n) {
            e.Widget.prototype._setOption.apply(this, arguments), t === "source" && this._initSource(), t === "appendTo" && this.menu.element.appendTo(e(n || "body", this.element[0].ownerDocument)[0]), t === "disabled" && n && this.xhr && this.xhr.abort()
        },
        _initSource: function () {
            var n = this,
                r, i;
            e.isArray(this.options.source) ? (r = this.options.source, this.source = function (t, n) {
                n(e.ui.autocomplete.filter(r, t.term))
            }) : typeof this.options.source == "string" ? (i = this.options.source, this.source = function (r, s) {
                n.xhr && n.xhr.abort(), n.xhr = e.ajax({
                    url: i,
                    data: r,
                    dataType: "json",
                    autocompleteRequest: ++t,
                    success: function (e) {
                        this.autocompleteRequest === t && s(e)
                    },
                    error: function () {
                        this.autocompleteRequest === t && s([])
                    }
                })
            }) : this.source = this.options.source
        },
        search: function (e, t) {
            e = e != null ? e : this.element.val(), this.term = this.element.val();
            if (e.length < this.options.minLength) return this.close(t);
            clearTimeout(this.closing);
            if (this._trigger("search", t) !== !1) return this._search(e)
        },
        _search: function (e) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.source({
                term: e
            }, this.response)
        },
        _response: function (e) {
            !this.options.disabled && e && e.length ? (e = this._normalize(e), this._suggest(e), this._trigger("open")) : this.close(), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
        },
        close: function (e) {
            clearTimeout(this.closing), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.deactivate(), this._trigger("close", e))
        },
        _change: function (e) {
            this.previous !== this.element.val() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function (t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
                return typeof t == "string" ? {
                    label: t,
                    value: t
                } : e.extend({
                    label: t.label || t.value,
                    value: t.value || t.label
                }, t)
            })
        },
        _suggest: function (t) {
            var n = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(n, t), this.menu.deactivate(), this.menu.refresh(), n.show(), this._resizeMenu(), n.position(e.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next(new e.Event("mouseover"))
        },
        _resizeMenu: function () {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth(), this.element.outerWidth()))
        },
        _renderMenu: function (t, n) {
            var r = this;
            e.each(n, function (e, n) {
                r._renderItem(t, n)
            })
        },
        _renderItem: function (t, n) {
            return e("<li></li>").data("item.autocomplete", n).append(e("<a></a>").text(n.label)).appendTo(t)
        },
        _move: function (e, t) {
            this.menu.element.is(":visible") ? this.menu.first() && /^previous/.test(e) || this.menu.last() && /^next/.test(e) ? (this.element.val(this.term), this.menu.deactivate()) : this.menu[e](t) : this.search(null, t)
        },
        widget: function () {
            return this.menu.element
        }
    }), e.extend(e.ui.autocomplete, {
        escapeRegex: function (e) {
            return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        },
        filter: function (t, n) {
            var r = new RegExp(e.ui.autocomplete.escapeRegex(n), "i");
            return e.grep(t, function (e) {
                return r.test(e.label || e.value || e)
            })
        }
    })
}(jQuery),
function (e) {
    e.widget("ui.menu", {
        _create: function () {
            var t = this;
            this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
                role: "listbox",
                "aria-activedescendant": "ui-active-menuitem"
            }).click(function (n) {
                e(n.target).closest(".ui-menu-item a").length && (n.preventDefault(), t.select(n))
            }), this.refresh()
        },
        refresh: function () {
            var t = this;
            this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem").children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function (n) {
                t.activate(n, e(this).parent())
            }).mouseleave(function () {
                t.deactivate()
            })
        },
        activate: function (e, t) {
            this.deactivate();
            if (this.hasScroll()) {
                var n = t.offset().top - this.element.offset().top,
                    r = this.element.scrollTop(),
                    i = this.element.height();
                n < 0 ? this.element.scrollTop(r + n) : n >= i && this.element.scrollTop(r + n - i + t.height())
            }
            this.active = t.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end(), this._trigger("focus", e, {
                item: t
            })
        },
        deactivate: function () {
            this.active && (this.active.children("a").removeClass("ui-state-hover").removeAttr("id"), this._trigger("blur"), this.active = null)
        },
        next: function (e) {
            this.move("next", ".ui-menu-item:first", e)
        },
        previous: function (e) {
            this.move("prev", ".ui-menu-item:last", e)
        },
        first: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        last: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        move: function (e, t, n) {
            this.active ? (e = this.active[e + "All"](".ui-menu-item").eq(0), e.length ? this.activate(n, e) : this.activate(n, this.element.children(t))) : this.activate(n, this.element.children(t))
        },
        nextPage: function (t) {
            if (this.hasScroll()) if (!this.active || this.last()) this.activate(t, this.element.children(".ui-menu-item:first"));
            else {
                var n = this.active.offset().top,
                    r = this.element.height(),
                    i = this.element.children(".ui-menu-item").filter(function () {
                        var t = e(this).offset().top - n - r + e(this).height();
                        return t < 10 && t > -10
                    });
                i.length || (i = this.element.children(".ui-menu-item:last")), this.activate(t, i)
            } else this.activate(t, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
        },
        previousPage: function (t) {
            if (this.hasScroll()) if (!this.active || this.first()) this.activate(t, this.element.children(".ui-menu-item:last"));
            else {
                var n = this.active.offset().top,
                    r = this.element.height();
                result = this.element.children(".ui-menu-item").filter(function () {
                    var t = e(this).offset().top - n + r - e(this).height();
                    return t < 10 && t > -10
                }), result.length || (result = this.element.children(".ui-menu-item:first")), this.activate(t, result)
            } else this.activate(t, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
        },
        hasScroll: function () {
            return this.element.height() < this.element[e.fn.prop ? "prop" : "attr"]("scrollHeight")
        },
        select: function (e) {
            this._trigger("selected", e, {
                item: this.active
            })
        }
    })
}(jQuery),
function (e) {
    var t, n, r, i, s = function () {
        var t = e(this).find(":ui-button");
        setTimeout(function () {
            t.button("refresh")
        }, 1)
    }, o = function (t) {
        var n = t.name,
            r = t.form,
            i = e([]);
        return n && (i = r ? e(r).find("[name='" + n + "']") : e("[name='" + n + "']", t.ownerDocument).filter(function () {
            return !this.form
        })), i
    };
    e.widget("ui.button", {
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function () {
            this.element.closest("form").unbind("reset.button").bind("reset.button", s), typeof this.options.disabled != "boolean" && (this.options.disabled = this.element.propAttr("disabled")), this._determineButtonType(), this.hasTitle = !! this.buttonElement.attr("title");
            var u = this,
                f = this.options,
                l = this.type === "checkbox" || this.type === "radio",
                p = "ui-state-hover" + (l ? "" : " ui-state-active");
            f.label === null && (f.label = this.buttonElement.html()), this.element.is(":disabled") && (f.disabled = !0), this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role", "button").bind("mouseenter.button", function () {
                f.disabled || (e(this).addClass("ui-state-hover"), this === t && e(this).addClass("ui-state-active"))
            }).bind("mouseleave.button", function () {
                f.disabled || e(this).removeClass(p)
            }).bind("click.button", function (e) {
                f.disabled && (e.preventDefault(), e.stopImmediatePropagation())
            }), this.element.bind("focus.button", function () {
                u.buttonElement.addClass("ui-state-focus")
            }).bind("blur.button", function () {
                u.buttonElement.removeClass("ui-state-focus")
            }), l && (this.element.bind("change.button", function () {
                i || u.refresh()
            }), this.buttonElement.bind("mousedown.button", function (e) {
                f.disabled || (i = !1, n = e.pageX, r = e.pageY)
            }).bind("mouseup.button", function (e) {
                !f.disabled && (n !== e.pageX || r !== e.pageY) && (i = !0)
            })), this.type === "checkbox" ? this.buttonElement.bind("click.button", function () {
                if (f.disabled || i) return !1;
                e(this).toggleClass("ui-state-active"), u.buttonElement.attr("aria-pressed", u.element[0].checked)
            }) : this.type === "radio" ? this.buttonElement.bind("click.button", function () {
                if (f.disabled || i) return !1;
                e(this).addClass("ui-state-active"), u.buttonElement.attr("aria-pressed", "true");
                var t = u.element[0];
                o(t).not(t).map(function () {
                    return e(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown.button", function () {
                if (f.disabled) return !1;
                e(this).addClass("ui-state-active"), t = this, e(document).one("mouseup", function () {
                    t = null
                })
            }).bind("mouseup.button", function () {
                if (f.disabled) return !1;
                e(this).removeClass("ui-state-active")
            }).bind("keydown.button", function (t) {
                if (f.disabled) return !1;
                (t.keyCode == e.ui.keyCode.SPACE || t.keyCode == e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active")
            }).bind("keyup.button", function () {
                e(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function (t) {
                t.keyCode === e.ui.keyCode.SPACE && e(this).click()
            })), this._setOption("disabled", f.disabled), this._resetButton()
        },
        _determineButtonType: function () {
            this.type = this.element.is(":checkbox") ? "checkbox" : this.element.is(":radio") ? "radio" : this.element.is("input") ? "input" : "button";
            if (this.type === "checkbox" || this.type === "radio") {
                var e = this.element.parents().filter(":last"),
                    t = "label[for='" + this.element.attr("id") + "']";
                this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), (e = this.element.is(":checked")) && this.buttonElement.addClass("ui-state-active"), this.buttonElement.attr("aria-pressed", e)
            } else this.buttonElement = this.element
        },
        widget: function () {
            return this.buttonElement
        },
        destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title"), e.Widget.prototype.destroy.call(this)
        },
        _setOption: function (t, n) {
            e.Widget.prototype._setOption.apply(this, arguments), t === "disabled" ? n ? this.element.propAttr("disabled", !0) : this.element.propAttr("disabled", !1) : this._resetButton()
        },
        refresh: function () {
            var t = this.element.is(":disabled");
            t !== this.options.disabled && this._setOption("disabled", t), this.type === "radio" ? o(this.element[0]).each(function () {
                e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function () {
            if (this.type === "input") this.options.label && this.element.val(this.options.label);
            else {
                var t = this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
                    n = e("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                    r = this.options.icons,
                    i = r.primary && r.secondary,
                    s = [];
                r.primary || r.secondary ? (this.options.text && s.push("ui-button-text-icon" + (i ? "s" : r.primary ? "-primary" : "-secondary")), r.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + r.primary + "'></span>"), r.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + r.secondary + "'></span>"), this.options.text || (s.push(i ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", n))) : s.push("ui-button-text-only"), t.addClass(s.join(" "))
            }
        }
    }), e.widget("ui.buttonset", {
        options: {
            items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)"
        },
        _create: function () {
            this.element.addClass("ui-buttonset")
        },
        _init: function () {
            this.refresh()
        },
        _setOption: function (t, n) {
            t === "disabled" && this.buttons.button("option", t, n), e.Widget.prototype._setOption.apply(this, arguments)
        },
        refresh: function () {
            var t = this.element.css("direction") === "ltr";
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-left" : "ui-corner-right").end().filter(":last").addClass(t ? "ui-corner-right" : "ui-corner-left").end().end()
        },
        destroy: function () {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy"), e.Widget.prototype.destroy.call(this)
        }
    })
}(jQuery),
function (a, d) {
    function c() {
        this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._inDialog = this._datepickerShowing = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, a.extend(this._defaults, this.regional[""]), this.dpDiv = e(a('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
    }
    function e(e) {
        return e.bind("mouseout", function (e) {
            e = a(e.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"), e.length && e.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
        }).bind("mouseover", function (t) {
            t = a(t.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"), !a.datepicker._isDisabledDatepicker(i.inline ? e.parent()[0] : i.input[0]) && !! t.length && (t.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t.addClass("ui-state-hover"), t.hasClass("ui-datepicker-prev") && t.addClass("ui-datepicker-prev-hover"), t.hasClass("ui-datepicker-next") && t.addClass("ui-datepicker-next-hover"))
        })
    }
    function h(e, t) {
        a.extend(e, t);
        for (var n in t) if (t[n] == null || t[n] == d) e[n] = t[n];
        return e
    }
    a.extend(a.ui, {
        datepicker: {
            version: "1.8.16"
        }
    });
    var g = (new Date).getTime(),
        i;
    a.extend(c.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        log: function () {
            this.debug && console.log.apply("", arguments)
        },
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (e) {
            return h(this._defaults, e || {}), this
        },
        _attachDatepicker: function (b, f) {
            var j = null;
            for (var l in this._defaults) {
                var o = b.getAttribute("date:" + l);
                if (o) {
                    j = j || {};
                    try {
                        j[l] = eval(o)
                    } catch (n) {
                        j[l] = o
                    }
                }
            }
            l = b.nodeName.toLowerCase(), o = l == "div" || l == "span", b.id || (this.uuid += 1, b.id = "dp" + this.uuid);
            var k = this._newInst(a(b), o);
            k.settings = a.extend({}, f || {}, j || {}), l == "input" ? this._connectDatepicker(b, k) : o && this._inlineDatepicker(b, k)
        },
        _newInst: function (t, n) {
            return {
                id: t[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"),
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: n,
                dpDiv: n ? e(a('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
            }
        },
        _connectDatepicker: function (e, t) {
            var n = a(e);
            t.append = a([]), t.trigger = a([]), n.hasClass(this.markerClassName) || (this._attachments(n, t), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function (e, n, r) {
                t.settings[n] = r
            }).bind("getData.datepicker", function (e, n) {
                return this._get(t, n)
            }), this._autoSize(t), a.data(e, "datepicker", t), t.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function (e, t) {
            var n = this._get(t, "appendText"),
                r = this._get(t, "isRTL");
            t.append && t.append.remove(), n && (t.append = a('<span class="' + this._appendClass + '">' + n + "</span>"), e[r ? "before" : "after"](t.append)), e.unbind("focus", this._showDatepicker), t.trigger && t.trigger.remove(), n = this._get(t, "showOn"), (n == "focus" || n == "both") && e.focus(this._showDatepicker);
            if (n == "button" || n == "both") {
                n = this._get(t, "buttonText");
                var i = this._get(t, "buttonImage");
                t.trigger = a(this._get(t, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({
                    src: i,
                    alt: n,
                    title: n
                }) : a('<button type="button"></button>').addClass(this._triggerClass).html(i == "" ? n : a("<img/>").attr({
                    src: i,
                    alt: n,
                    title: n
                }))), e[r ? "before" : "after"](t.trigger), t.trigger.click(function () {
                    return a.datepicker._datepickerShowing && a.datepicker._lastInput == e[0] ? a.datepicker._hideDatepicker() : a.datepicker._showDatepicker(e[0]), !1
                })
            }
        },
        _autoSize: function (e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t = new Date(2009, 11, 20),
                    n = this._get(e, "dateFormat");
                if (n.match(/[DM]/)) {
                    var r = function (e) {
                        for (var t = 0, n = 0, r = 0; r < e.length; r++) e[r].length > t && (t = e[r].length, n = r);
                        return n
                    };
                    t.setMonth(r(this._get(e, n.match(/MM/) ? "monthNames" : "monthNamesShort"))), t.setDate(r(this._get(e, n.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - t.getDay())
                }
                e.input.attr("size", this._formatDate(e, t).length)
            }
        },
        _inlineDatepicker: function (e, t) {
            var n = a(e);
            n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker", function (e, n, r) {
                t.settings[n] = r
            }).bind("getData.datepicker", function (e, n) {
                return this._get(t, n)
            }), a.data(e, "datepicker", t), this._setDate(t, this._getDefaultDate(t), !0), this._updateDatepicker(t), this._updateAlternate(t), t.settings.disabled && this._disableDatepicker(e), t.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function (e, t, n, r, i) {
            return e = this._dialogInst, e || (this.uuid += 1, this._dialogInput = a('<input type="text" id="' + ("dp" + this.uuid) + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'), this._dialogInput.keydown(this._doKeyDown), a("body").append(this._dialogInput), e = this._dialogInst = this._newInst(this._dialogInput, !1), e.settings = {}, a.data(this._dialogInput[0], "datepicker", e)), h(e.settings, r || {}), t = t && t.constructor == Date ? this._formatDate(e, t) : t, this._dialogInput.val(t), this._pos = i ? i.length ? i : [i.pageX, i.pageY] : null, this._pos || (this._pos = [document.documentElement.clientWidth / 2 - 100 + (document.documentElement.scrollLeft || document.body.scrollLeft), document.documentElement.clientHeight / 2 - 150 + (document.documentElement.scrollTop || document.body.scrollTop)]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), e.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), a.blockUI && a.blockUI(this.dpDiv), a.data(this._dialogInput[0], "datepicker", e), this
        },
        _destroyDatepicker: function (e) {
            var t = a(e),
                n = a.data(e, "datepicker");
            if (t.hasClass(this.markerClassName)) {
                var r = e.nodeName.toLowerCase();
                a.removeData(e, "datepicker"), r == "input" ? (n.append.remove(), n.trigger.remove(), t.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (r == "div" || r == "span") && t.removeClass(this.markerClassName).empty()
            }
        },
        _enableDatepicker: function (e) {
            var t = a(e),
                n = a.data(e, "datepicker");
            if (t.hasClass(this.markerClassName)) {
                var r = e.nodeName.toLowerCase();
                if (r == "input") e.disabled = !1, n.trigger.filter("button").each(function () {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                });
                else if (r == "div" || r == "span") t = t.children("." + this._inlineClass), t.children().removeClass("ui-state-disabled"), t.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled");
                this._disabledInputs = a.map(this._disabledInputs, function (t) {
                    return t == e ? null : t
                })
            }
        },
        _disableDatepicker: function (e) {
            var t = a(e),
                n = a.data(e, "datepicker");
            if (t.hasClass(this.markerClassName)) {
                var r = e.nodeName.toLowerCase();
                if (r == "input") e.disabled = !0, n.trigger.filter("button").each(function () {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                });
                else if (r == "div" || r == "span") t = t.children("." + this._inlineClass), t.children().addClass("ui-state-disabled"), t.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled");
                this._disabledInputs = a.map(this._disabledInputs, function (t) {
                    return t == e ? null : t
                }), this._disabledInputs[this._disabledInputs.length] = e
            }
        },
        _isDisabledDatepicker: function (e) {
            if (!e) return !1;
            for (var t = 0; t < this._disabledInputs.length; t++) if (this._disabledInputs[t] == e) return !0;
            return !1
        },
        _getInst: function (e) {
            try {
                return a.data(e, "datepicker")
            } catch (t) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function (e, t, n) {
            var r = this._getInst(e);
            if (arguments.length == 2 && typeof t == "string") return t == "defaults" ? a.extend({}, a.datepicker._defaults) : r ? t == "all" ? a.extend({}, r.settings) : this._get(r, t) : null;
            var i = t || {};
            typeof t == "string" && (i = {}, i[t] = n);
            if (r) {
                this._curInst == r && this._hideDatepicker();
                var s = this._getDateDatepicker(e, !0),
                    o = this._getMinMaxDate(r, "min"),
                    u = this._getMinMaxDate(r, "max");
                h(r.settings, i), o !== null && i.dateFormat !== d && i.minDate === d && (r.settings.minDate = this._formatDate(r, o)), u !== null && i.dateFormat !== d && i.maxDate === d && (r.settings.maxDate = this._formatDate(r, u)), this._attachments(a(e), r), this._autoSize(r), this._setDate(r, s), this._updateAlternate(r), this._updateDatepicker(r)
            }
        },
        _changeDatepicker: function (e, t, n) {
            this._optionDatepicker(e, t, n)
        },
        _refreshDatepicker: function (e) {
            (e = this._getInst(e)) && this._updateDatepicker(e)
        },
        _setDateDatepicker: function (e, t) {
            if (e = this._getInst(e)) this._setDate(e, t), this._updateDatepicker(e), this._updateAlternate(e)
        },
        _getDateDatepicker: function (e, t) {
            return (e = this._getInst(e)) && !e.inline && this._setDateFromField(e, t), e ? this._getDate(e) : null
        },
        _doKeyDown: function (e) {
            var t = a.datepicker._getInst(e.target),
                n = !0,
                r = t.dpDiv.is(".ui-datepicker-rtl");
            t._keyEvent = !0;
            if (a.datepicker._datepickerShowing) switch (e.keyCode) {
                case 9:
                    a.datepicker._hideDatepicker(), n = !1;
                    break;
                case 13:
                    return n = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", t.dpDiv), n[0] && a.datepicker._selectDay(e.target, t.selectedMonth, t.selectedYear, n[0]), (e = a.datepicker._get(t, "onSelect")) ? (n = a.datepicker._formatDate(t), e.apply(t.input ? t.input[0] : null, [n, t])) : a.datepicker._hideDatepicker(), !1;
                case 27:
                    a.datepicker._hideDatepicker();
                    break;
                case 33:
                    a.datepicker._adjustDate(e.target, e.ctrlKey ? -a.datepicker._get(t, "stepBigMonths") : -a.datepicker._get(t, "stepMonths"), "M");
                    break;
                case 34:
                    a.datepicker._adjustDate(e.target, e.ctrlKey ? +a.datepicker._get(t, "stepBigMonths") : +a.datepicker._get(t, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && a.datepicker._clearDate(e.target), n = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && a.datepicker._gotoToday(e.target), n = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && a.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), n = e.ctrlKey || e.metaKey, e.originalEvent.altKey && a.datepicker._adjustDate(e.target, e.ctrlKey ? -a.datepicker._get(t, "stepBigMonths") : -a.datepicker._get(t, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && a.datepicker._adjustDate(e.target, -7, "D"), n = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && a.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), n = e.ctrlKey || e.metaKey, e.originalEvent.altKey && a.datepicker._adjustDate(e.target, e.ctrlKey ? +a.datepicker._get(t, "stepBigMonths") : +a.datepicker._get(t, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && a.datepicker._adjustDate(e.target, 7, "D"), n = e.ctrlKey || e.metaKey;
                    break;
                default:
                    n = !1
            } else e.keyCode == 36 && e.ctrlKey ? a.datepicker._showDatepicker(this) : n = !1;
            n && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function (e) {
            var t = a.datepicker._getInst(e.target);
            if (a.datepicker._get(t, "constrainInput")) {
                t = a.datepicker._possibleChars(a.datepicker._get(t, "dateFormat"));
                var n = String.fromCharCode(e.charCode == d ? e.keyCode : e.charCode);
                return e.ctrlKey || e.metaKey || n < " " || !t || t.indexOf(n) > -1
            }
        },
        _doKeyUp: function (e) {
            e = a.datepicker._getInst(e.target);
            if (e.input.val() != e.lastVal) try {
                a.datepicker.parseDate(a.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, a.datepicker._getFormatConfig(e)) && (a.datepicker._setDateFromField(e), a.datepicker._updateAlternate(e), a.datepicker._updateDatepicker(e))
            } catch (t) {
                a.datepicker.log(t)
            }
            return !0
        },
        _showDatepicker: function (e) {
            e = e.target || e, e.nodeName.toLowerCase() != "input" && (e = a("input", e.parentNode)[0]);
            if (!a.datepicker._isDisabledDatepicker(e) && a.datepicker._lastInput != e) {
                var t = a.datepicker._getInst(e);
                a.datepicker._curInst && a.datepicker._curInst != t && (a.datepicker._datepickerShowing && a.datepicker._triggerOnClose(a.datepicker._curInst), a.datepicker._curInst.dpDiv.stop(!0, !0));
                var n = a.datepicker._get(t, "beforeShow");
                n = n ? n.apply(e, [e, t]) : {};
                if (n !== !1) {
                    h(t.settings, n), t.lastVal = null, a.datepicker._lastInput = e, a.datepicker._setDateFromField(t), a.datepicker._inDialog && (e.value = ""), a.datepicker._pos || (a.datepicker._pos = a.datepicker._findPos(e), a.datepicker._pos[1] += e.offsetHeight);
                    var r = !1;
                    a(e).parents().each(function () {
                        return r |= a(this).css("position") == "fixed", !r
                    }), r && a.browser.opera && (a.datepicker._pos[0] -= document.documentElement.scrollLeft, a.datepicker._pos[1] -= document.documentElement.scrollTop), n = {
                        left: a.datepicker._pos[0],
                        top: a.datepicker._pos[1]
                    }, a.datepicker._pos = null, t.dpDiv.empty(), t.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), a.datepicker._updateDatepicker(t), n = a.datepicker._checkOffset(t, n, r), t.dpDiv.css({
                        position: a.datepicker._inDialog && a.blockUI ? "static" : r ? "fixed" : "absolute",
                        display: "none",
                        left: n.left + "px",
                        top: n.top + "px"
                    });
                    if (!t.inline) {
                        n = a.datepicker._get(t, "showAnim");
                        var i = a.datepicker._get(t, "duration"),
                            s = function () {
                                var e = t.dpDiv.find("iframe.ui-datepicker-cover");
                                if (e.length) {
                                    var n = a.datepicker._getBorders(t.dpDiv);
                                    e.css({
                                        left: -n[0],
                                        top: -n[1],
                                        width: t.dpDiv.outerWidth(),
                                        height: t.dpDiv.outerHeight()
                                    })
                                }
                            };
                        t.dpDiv.zIndex(a(e).zIndex() + 1), a.datepicker._datepickerShowing = !0, a.effects && a.effects[n] ? t.dpDiv.show(n, a.datepicker._get(t, "showOptions"), i, s) : t.dpDiv[n || "show"](n ? i : null, s), (!n || !i) && s(), t.input.is(":visible") && !t.input.is(":disabled") && t.input.focus(), a.datepicker._curInst = t
                    }
                }
            }
        },
        _updateDatepicker: function (e) {
            this.maxRows = 4;
            var t = a.datepicker._getBorders(e.dpDiv);
            i = e, e.dpDiv.empty().append(this._generateHTML(e));
            var n = e.dpDiv.find("iframe.ui-datepicker-cover");
            n.length && n.css({
                left: -t[0],
                top: -t[1],
                width: e.dpDiv.outerWidth(),
                height: e.dpDiv.outerHeight()
            }), e.dpDiv.find("." + this._dayOverClass + " a").mouseover(), t = this._getNumberOfMonths(e), n = t[1], e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", 17 * n + "em"), e.dpDiv[(t[0] != 1 || t[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e == a.datepicker._curInst && a.datepicker._datepickerShowing && e.input && e.input.is(":visible") && !e.input.is(":disabled") && e.input[0] != document.activeElement && e.input.focus();
            if (e.yearshtml) {
                var r = e.yearshtml;
                setTimeout(function () {
                    r === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), r = e.yearshtml = null
                }, 0)
            }
        },
        _getBorders: function (e) {
            var t = function (e) {
                return {
                    thin: 1,
                    medium: 2,
                    thick: 3
                }[e] || e
            };
            return [parseFloat(t(e.css("border-left-width"))), parseFloat(t(e.css("border-top-width")))]
        },
        _checkOffset: function (e, t, n) {
            var r = e.dpDiv.outerWidth(),
                i = e.dpDiv.outerHeight(),
                s = e.input ? e.input.outerWidth() : 0,
                o = e.input ? e.input.outerHeight() : 0,
                u = document.documentElement.clientWidth + a(document).scrollLeft(),
                f = document.documentElement.clientHeight + a(document).scrollTop();
            return t.left -= this._get(e, "isRTL") ? r - s : 0, t.left -= n && t.left == e.input.offset().left ? a(document).scrollLeft() : 0, t.top -= n && t.top == e.input.offset().top + o ? a(document).scrollTop() : 0, t.left -= Math.min(t.left, t.left + r > u && u > r ? Math.abs(t.left + r - u) : 0), t.top -= Math.min(t.top, t.top + i > f && f > i ? Math.abs(i + o) : 0), t
        },
        _findPos: function (e) {
            for (var t = this._get(this._getInst(e), "isRTL"); e && (e.type == "hidden" || e.nodeType != 1 || a.expr.filters.hidden(e));) e = e[t ? "previousSibling" : "nextSibling"];
            return e = a(e).offset(), [e.left, e.top]
        },
        _triggerOnClose: function (e) {
            var t = this._get(e, "onClose");
            t && t.apply(e.input ? e.input[0] : null, [e.input ? e.input.val() : "", e])
        },
        _hideDatepicker: function (e) {
            var t = this._curInst;
            if (!(!t || e && t != a.data(e, "datepicker")) && this._datepickerShowing) {
                e = this._get(t, "showAnim");
                var n = this._get(t, "duration"),
                    r = function () {
                        a.datepicker._tidyDialog(t), this._curInst = null
                    };
                a.effects && a.effects[e] ? t.dpDiv.hide(e, a.datepicker._get(t, "showOptions"), n, r) : t.dpDiv[e == "slideDown" ? "slideUp" : e == "fadeIn" ? "fadeOut" : "hide"](e ? n : null, r), e || r(), a.datepicker._triggerOnClose(t), this._datepickerShowing = !1, this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), a.blockUI && (a.unblockUI(), a("body").append(this.dpDiv))), this._inDialog = !1
            }
        },
        _tidyDialog: function (e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (e) {
            a.datepicker._curInst && (e = a(e.target), e[0].id != a.datepicker._mainDivId && e.parents("#" + a.datepicker._mainDivId).length == 0 && !e.hasClass(a.datepicker.markerClassName) && !e.hasClass(a.datepicker._triggerClass) && a.datepicker._datepickerShowing && (!a.datepicker._inDialog || !a.blockUI) && a.datepicker._hideDatepicker())
        },
        _adjustDate: function (e, t, n) {
            e = a(e);
            var r = this._getInst(e[0]);
            this._isDisabledDatepicker(e[0]) || (this._adjustInstDate(r, t + (n == "M" ? this._get(r, "showCurrentAtPos") : 0), n), this._updateDatepicker(r))
        },
        _gotoToday: function (e) {
            e = a(e);
            var t = this._getInst(e[0]);
            if (this._get(t, "gotoCurrent") && t.currentDay) t.selectedDay = t.currentDay, t.drawMonth = t.selectedMonth = t.currentMonth, t.drawYear = t.selectedYear = t.currentYear;
            else {
                var n = new Date;
                t.selectedDay = n.getDate(), t.drawMonth = t.selectedMonth = n.getMonth(), t.drawYear = t.selectedYear = n.getFullYear()
            }
            this._notifyChange(t), this._adjustDate(e)
        },
        _selectMonthYear: function (e, t, n) {
            e = a(e);
            var r = this._getInst(e[0]);
            r["selected" + (n == "M" ? "Month" : "Year")] = r["draw" + (n == "M" ? "Month" : "Year")] = parseInt(t.options[t.selectedIndex].value, 10), this._notifyChange(r), this._adjustDate(e)
        },
        _selectDay: function (e, t, n, r) {
            var i = a(e);
            !a(r).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(i[0]) && (i = this._getInst(i[0]), i.selectedDay = i.currentDay = a("a", r).html(), i.selectedMonth = i.currentMonth = t, i.selectedYear = i.currentYear = n, this._selectDate(e, this._formatDate(i, i.currentDay, i.currentMonth, i.currentYear)))
        },
        _clearDate: function (e) {
            e = a(e), this._getInst(e[0]), this._selectDate(e, "")
        },
        _selectDate: function (e, t) {
            e = this._getInst(a(e)[0]), t = t != null ? t : this._formatDate(e), e.input && e.input.val(t), this._updateAlternate(e);
            var n = this._get(e, "onSelect");
            n ? n.apply(e.input ? e.input[0] : null, [t, e]) : e.input && e.input.trigger("change"), e.inline ? this._updateDatepicker(e) : (this._hideDatepicker(), this._lastInput = e.input[0], typeof e.input[0] != "object" && e.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function (e) {
            var t = this._get(e, "altField");
            if (t) {
                var n = this._get(e, "altFormat") || this._get(e, "dateFormat"),
                    r = this._getDate(e),
                    i = this.formatDate(n, r, this._getFormatConfig(e));
                a(t).each(function () {
                    a(this).val(i)
                })
            }
        },
        noWeekends: function (e) {
            return e = e.getDay(), [e > 0 && e < 6, ""]
        },
        iso8601Week: function (e) {
            e = new Date(e.getTime()), e.setDate(e.getDate() + 4 - (e.getDay() || 7));
            var t = e.getTime();
            return e.setMonth(0), e.setDate(1), Math.floor(Math.round((t - e) / 864e5) / 7) + 1
        },
        parseDate: function (e, t, n) {
            if (e == null || t == null) throw "Invalid arguments";
            t = typeof t == "object" ? t.toString() : t + "";
            if (t == "") return null;
            var r = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            r = typeof r != "string" ? r : (new Date).getFullYear() % 100 + parseInt(r, 10);
            for (var i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort, s = (n ? n.dayNames : null) || this._defaults.dayNames, o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort, u = (n ? n.monthNames : null) || this._defaults.monthNames, f = n = -1, l = -1, c = -1, h = !1, p = function (t) {
                return (t = y + 1 < e.length && e.charAt(y + 1) == t) && y++, t
            }, d = function (e) {
                var n = p(e);
                e = new RegExp("^\\d{1," + (e == "@" ? 14 : e == "!" ? 20 : e == "y" && n ? 4 : e == "o" ? 3 : 2) + "}"), e = t.substring(g).match(e);
                if (!e) throw "Missing number at position " + g;
                return g += e[0].length, parseInt(e[0], 10)
            }, v = function (e, n, r) {
                e = a.map(p(e) ? r : n, function (e, t) {
                    return [[t, e]]
                }).sort(function (e, t) {
                    return -(e[1].length - t[1].length)
                });
                var i = -1;
                a.each(e, function (e, n) {
                    e = n[1];
                    if (t.substr(g, e.length).toLowerCase() == e.toLowerCase()) return i = n[0], g += e.length, !1
                });
                if (i != -1) return i + 1;
                throw "Unknown name at position " + g
            }, m = function () {
                if (t.charAt(g) != e.charAt(y)) throw "Unexpected literal at position " + g;
                g++
            }, g = 0, y = 0; y < e.length; y++) if (h) e.charAt(y) == "'" && !p("'") ? h = !1 : m();
            else switch (e.charAt(y)) {
                case "d":
                    l = d("d");
                    break;
                case "D":
                    v("D", i, s);
                    break;
                case "o":
                    c = d("o");
                    break;
                case "m":
                    f = d("m");
                    break;
                case "M":
                    f = v("M", o, u);
                    break;
                case "y":
                    n = d("y");
                    break;
                case "@":
                    var b = new Date(d("@"));
                    n = b.getFullYear(), f = b.getMonth() + 1, l = b.getDate();
                    break;
                case "!":
                    b = new Date((d("!") - this._ticksTo1970) / 1e4), n = b.getFullYear(), f = b.getMonth() + 1, l = b.getDate();
                    break;
                case "'":
                    p("'") ? m() : h = !0;
                    break;
                default:
                    m()
            }
            if (g < t.length) throw "Extra/unparsed characters found in date: " + t.substring(g);
            n == -1 ? n = (new Date).getFullYear() : n < 100 && (n += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (n <= r ? 0 : -100));
            if (c > -1) {
                f = 1, l = c;
                do {
                    r = this._getDaysInMonth(n, f - 1);
                    if (l <= r) break;
                    f++, l -= r
                } while (1)
            }
            b = this._daylightSavingAdjust(new Date(n, f - 1, l));
            if (b.getFullYear() != n || b.getMonth() + 1 != f || b.getDate() != l) throw "Invalid date";
            return b
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1e7,
        formatDate: function (e, t, n) {
            if (!t) return "";
            var r = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                i = (n ? n.dayNames : null) || this._defaults.dayNames,
                s = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort;
            n = (n ? n.monthNames : null) || this._defaults.monthNames;
            var o = function (t) {
                return (t = c + 1 < e.length && e.charAt(c + 1) == t) && c++, t
            }, u = function (e, t, n) {
                t = "" + t;
                if (o(e)) for (; t.length < n;) t = "0" + t;
                return t
            }, a = function (e, t, n, r) {
                return o(e) ? r[t] : n[t]
            }, f = "",
                l = !1;
            if (t) for (var c = 0; c < e.length; c++) if (l) e.charAt(c) == "'" && !o("'") ? l = !1 : f += e.charAt(c);
            else switch (e.charAt(c)) {
                case "d":
                    f += u("d", t.getDate(), 2);
                    break;
                case "D":
                    f += a("D", t.getDay(), r, i);
                    break;
                case "o":
                    f += u("o", Math.round(((new Date(t.getFullYear(), t.getMonth(), t.getDate())).getTime() - (new Date(t.getFullYear(), 0, 0)).getTime()) / 864e5), 3);
                    break;
                case "m":
                    f += u("m", t.getMonth() + 1, 2);
                    break;
                case "M":
                    f += a("M", t.getMonth(), s, n);
                    break;
                case "y":
                    f += o("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                    break;
                case "@":
                    f += t.getTime();
                    break;
                case "!":
                    f += t.getTime() * 1e4 + this._ticksTo1970;
                    break;
                case "'":
                    o("'") ? f += "'" : l = !0;
                    break;
                default:
                    f += e.charAt(c)
            }
            return f
        },
        _possibleChars: function (e) {
            for (var t = "", n = !1, r = function (t) {
                return (t = i + 1 < e.length && e.charAt(i + 1) == t) && i++, t
            }, i = 0; i < e.length; i++) if (n) e.charAt(i) == "'" && !r("'") ? n = !1 : t += e.charAt(i);
            else switch (e.charAt(i)) {
                case "d":
                case "m":
                case "y":
                case "@":
                    t += "0123456789";
                    break;
                case "D":
                case "M":
                    return null;
                case "'":
                    r("'") ? t += "'" : n = !0;
                    break;
                default:
                    t += e.charAt(i)
            }
            return t
        },
        _get: function (e, t) {
            return e.settings[t] !== d ? e.settings[t] : this._defaults[t]
        },
        _setDateFromField: function (e, t) {
            if (e.input.val() != e.lastVal) {
                var n = this._get(e, "dateFormat"),
                    r = e.lastVal = e.input ? e.input.val() : null,
                    i, s;
                i = s = this._getDefaultDate(e);
                var o = this._getFormatConfig(e);
                try {
                    i = this.parseDate(n, r, o) || s
                } catch (u) {
                    this.log(u), r = t ? "" : r
                }
                e.selectedDay = i.getDate(), e.drawMonth = e.selectedMonth = i.getMonth(), e.drawYear = e.selectedYear = i.getFullYear(), e.currentDay = r ? i.getDate() : 0, e.currentMonth = r ? i.getMonth() : 0, e.currentYear = r ? i.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function (e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function (e, t, n) {
            var r = function (e) {
                var t = new Date;
                return t.setDate(t.getDate() + e), t
            }, i = function (t) {
                try {
                    return a.datepicker.parseDate(a.datepicker._get(e, "dateFormat"), t, a.datepicker._getFormatConfig(e))
                } catch (n) {}
                var r = (t.toLowerCase().match(/^c/) ? a.datepicker._getDate(e) : null) || new Date,
                    i = r.getFullYear(),
                    s = r.getMonth();
                r = r.getDate();
                for (var o = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = o.exec(t); u;) {
                    switch (u[2] || "d") {
                        case "d":
                        case "D":
                            r += parseInt(u[1], 10);
                            break;
                        case "w":
                        case "W":
                            r += parseInt(u[1], 10) * 7;
                            break;
                        case "m":
                        case "M":
                            s += parseInt(u[1], 10), r = Math.min(r, a.datepicker._getDaysInMonth(i, s));
                            break;
                        case "y":
                        case "Y":
                            i += parseInt(u[1], 10), r = Math.min(r, a.datepicker._getDaysInMonth(i, s))
                    }
                    u = o.exec(t)
                }
                return new Date(i, s, r)
            };
            if (t = (t = t == null || t === "" ? n : typeof t == "string" ? i(t) : typeof t == "number" ? isNaN(t) ? n : r(t) : new Date(t.getTime())) && t.toString() == "Invalid Date" ? n : t) t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0);
            return this._daylightSavingAdjust(t)
        },
        _daylightSavingAdjust: function (e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function (e, t, n) {
            var r = !t,
                i = e.selectedMonth,
                s = e.selectedYear;
            t = this._restrictMinMax(e, this._determineDate(e, t, new Date)), e.selectedDay = e.currentDay = t.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = t.getMonth(), e.drawYear = e.selectedYear = e.currentYear = t.getFullYear(), (i != e.selectedMonth || s != e.selectedYear) && !n && this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(r ? "" : this._formatDate(e))
        },
        _getDate: function (e) {
            return !e.currentYear || e.input && e.input.val() == "" ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay))
        },
        _generateHTML: function (e) {
            var t = new Date;
            t = this._daylightSavingAdjust(new Date(t.getFullYear(), t.getMonth(), t.getDate()));
            var n = this._get(e, "isRTL"),
                r = this._get(e, "showButtonPanel"),
                i = this._get(e, "hideIfNoPrevNext"),
                s = this._get(e, "navigationAsDateFormat"),
                o = this._getNumberOfMonths(e),
                u = this._get(e, "showCurrentAtPos"),
                f = this._get(e, "stepMonths"),
                l = o[0] != 1 || o[1] != 1,
                c = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                h = this._getMinMaxDate(e, "min"),
                p = this._getMinMaxDate(e, "max");
            u = e.drawMonth - u;
            var d = e.drawYear;
            u < 0 && (u += 12, d--);
            if (p) {
                var v = this._daylightSavingAdjust(new Date(p.getFullYear(), p.getMonth() - o[0] * o[1] + 1, p.getDate()));
                for (v = h && v < h ? h : v; this._daylightSavingAdjust(new Date(d, u, 1)) > v;) u--, u < 0 && (u = 11, d--)
            }
            e.drawMonth = u, e.drawYear = d, v = this._get(e, "prevText"), v = s ? this.formatDate(v, this._daylightSavingAdjust(new Date(d, u - f, 1)), this._getFormatConfig(e)) : v, v = this._canAdjustMonth(e, -1, d, u) ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + g + ".datepicker._adjustDate('#" + e.id + "', -" + f + ", 'M');\" title=\"" + v + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "e" : "w") + '">' + v + "</span></a>" : i ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + v + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "e" : "w") + '">' + v + "</span></a>";
            var m = this._get(e, "nextText");
            m = s ? this.formatDate(m, this._daylightSavingAdjust(new Date(d, u + f, 1)), this._getFormatConfig(e)) : m, i = this._canAdjustMonth(e, 1, d, u) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + g + ".datepicker._adjustDate('#" + e.id + "', +" + f + ", 'M');\" title=\"" + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "w" : "e") + '">' + m + "</span></a>" : i ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "w" : "e") + '">' + m + "</span></a>", f = this._get(e, "currentText"), m = this._get(e, "gotoCurrent") && e.currentDay ? c : t, f = s ? this.formatDate(f, m, this._getFormatConfig(e)) : f, s = e.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + g + '.datepicker._hideDatepicker();">' + this._get(e, "closeText") + "</button>", r = r ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (n ? s : "") + (this._isInRange(e, m) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + g + ".datepicker._gotoToday('#" + e.id + "');\">" + f + "</button>" : "") + (n ? "" : s) + "</div>" : "", s = parseInt(this._get(e, "firstDay"), 10), s = isNaN(s) ? 0 : s, f = this._get(e, "showWeek"), m = this._get(e, "dayNames"), this._get(e, "dayNamesShort");
            var y = this._get(e, "dayNamesMin"),
                b = this._get(e, "monthNames"),
                w = this._get(e, "monthNamesShort"),
                E = this._get(e, "beforeShowDay"),
                S = this._get(e, "showOtherMonths"),
                x = this._get(e, "selectOtherMonths");
            this._get(e, "calculateWeek");
            for (var T = this._getDefaultDate(e), N = "", C = 0; C < o[0]; C++) {
                var k = "";
                this.maxRows = 4;
                for (var L = 0; L < o[1]; L++) {
                    var A = this._daylightSavingAdjust(new Date(d, u, e.selectedDay)),
                        O = " ui-corner-all",
                        M = "";
                    if (l) {
                        M += '<div class="ui-datepicker-group';
                        if (o[1] > 1) switch (L) {
                            case 0:
                                M += " ui-datepicker-group-first", O = " ui-corner-" + (n ? "right" : "left");
                                break;
                            case o[1] - 1:
                                M += " ui-datepicker-group-last", O = " ui-corner-" + (n ? "left" : "right");
                                break;
                            default:
                                M += " ui-datepicker-group-middle", O = ""
                        }
                        M += '">'
                    }
                    M += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + O + '">' + (/all|left/.test(O) && C == 0 ? n ? i : v : "") + (/all|right/.test(O) && C == 0 ? n ? v : i : "") + this._generateMonthYearHeader(e, u, d, h, p, C > 0 || L > 0, b, w) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                    var _ = f ? '<th class="ui-datepicker-week-col">' + this._get(e, "weekHeader") + "</th>" : "";
                    for (O = 0; O < 7; O++) {
                        var D = (O + s) % 7;
                        _ += "<th" + ((O + s + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + m[D] + '">' + y[D] + "</span></th>"
                    }
                    M += _ + "</tr></thead><tbody>", _ = this._getDaysInMonth(d, u), d == e.selectedYear && u == e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, _)), O = (this._getFirstDayOfMonth(d, u) - s + 7) % 7, _ = Math.ceil((O + _) / 7), this.maxRows = _ = l ? this.maxRows > _ ? this.maxRows : _ : _, D = this._daylightSavingAdjust(new Date(d, u, 1 - O));
                    for (var P = 0; P < _; P++) {
                        M += "<tr>";
                        var H = f ? '<td class="ui-datepicker-week-col">' + this._get(e, "calculateWeek")(D) + "</td>" : "";
                        for (O = 0; O < 7; O++) {
                            var B = E ? E.apply(e.input ? e.input[0] : null, [D]) : [!0, ""],
                                j = D.getMonth() != u,
                                F = j && !x || !B[0] || h && D < h || p && D > p;
                            H += '<td class="' + ((O + s + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (j ? " ui-datepicker-other-month" : "") + (D.getTime() == A.getTime() && u == e.selectedMonth && e._keyEvent || T.getTime() == D.getTime() && T.getTime() == A.getTime() ? " " + this._dayOverClass : "") + (F ? " " + this._unselectableClass + " ui-state-disabled" : "") + (j && !S ? "" : " " + B[1] + (D.getTime() == c.getTime() ? " " + this._currentClass : "") + (D.getTime() == t.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!j || S) && B[2] ? ' title="' + B[2] + '"' : "") + (F ? "" : ' onclick="DP_jQuery_' + g + ".datepicker._selectDay('#" + e.id + "'," + D.getMonth() + "," + D.getFullYear() + ', this);return false;"') + ">" + (j && !S ? "&#xa0;" : F ? '<span class="ui-state-default">' + D.getDate() + "</span>" : '<a class="ui-state-default' + (D.getTime() == t.getTime() ? " ui-state-highlight" : "") + (D.getTime() == c.getTime() ? " ui-state-active" : "") + (j ? " ui-priority-secondary" : "") + '" href="#">' + D.getDate() + "</a>") + "</td>", D.setDate(D.getDate() + 1), D = this._daylightSavingAdjust(D)
                        }
                        M += H + "</tr>"
                    }
                    u++, u > 11 && (u = 0, d++), M += "</tbody></table>" + (l ? "</div>" + (o[0] > 0 && L == o[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), k += M
                }
                N += k
            }
            return N += r + (a.browser.msie && parseInt(a.browser.version, 10) < 7 && !e.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), e._keyEvent = !1, N
        },
        _generateMonthYearHeader: function (e, t, n, r, i, s, o, u) {
            var a = this._get(e, "changeMonth"),
                f = this._get(e, "changeYear"),
                l = this._get(e, "showMonthAfterYear"),
                c = '<div class="ui-datepicker-title">',
                h = "";
            if (s || !a) h += '<span class="ui-datepicker-month">' + o[t] + "</span>";
            else {
                o = r && r.getFullYear() == n;
                var p = i && i.getFullYear() == n;
                h += '<select class="ui-datepicker-month" onchange="DP_jQuery_' + g + ".datepicker._selectMonthYear('#" + e.id + "', this, 'M');\" >";
                for (var d = 0; d < 12; d++)(!o || d >= r.getMonth()) && (!p || d <= i.getMonth()) && (h += '<option value="' + d + '"' + (d == t ? ' selected="selected"' : "") + ">" + u[d] + "</option>");
                h += "</select>"
            }
            l || (c += h + (s || !a || !f ? "&#xa0;" : ""));
            if (!e.yearshtml) {
                e.yearshtml = "";
                if (s || !f) c += '<span class="ui-datepicker-year">' + n + "</span>";
                else {
                    u = this._get(e, "yearRange").split(":");
                    var v = (new Date).getFullYear();
                    o = function (e) {
                        return e = e.match(/c[+-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+-].*/) ? v + parseInt(e, 10) : parseInt(e, 10), isNaN(e) ? v : e
                    }, t = o(u[0]), u = Math.max(t, o(u[1] || "")), t = r ? Math.max(t, r.getFullYear()) : t, u = i ? Math.min(u, i.getFullYear()) : u;
                    for (e.yearshtml += '<select class="ui-datepicker-year" onchange="DP_jQuery_' + g + ".datepicker._selectMonthYear('#" + e.id + "', this, 'Y');\" >"; t <= u; t++) e.yearshtml += '<option value="' + t + '"' + (t == n ? ' selected="selected"' : "") + ">" + t + "</option>";
                    e.yearshtml += "</select>", c += e.yearshtml, e.yearshtml = null
                }
            }
            return c += this._get(e, "yearSuffix"), l && (c += (s || !a || !f ? "&#xa0;" : "") + h), c += "</div>", c
        },
        _adjustInstDate: function (e, t, n) {
            var r = e.drawYear + (n == "Y" ? t : 0),
                i = e.drawMonth + (n == "M" ? t : 0);
            t = Math.min(e.selectedDay, this._getDaysInMonth(r, i)) + (n == "D" ? t : 0), r = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(r, i, t))), e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), (n == "M" || n == "Y") && this._notifyChange(e)
        },
        _restrictMinMax: function (e, t) {
            var n = this._getMinMaxDate(e, "min");
            return e = this._getMinMaxDate(e, "max"), t = n && t < n ? n : t, t = e && t > e ? e : t
        },
        _notifyChange: function (e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function (e) {
            return e = this._get(e, "numberOfMonths"), e == null ? [1, 1] : typeof e == "number" ? [1, e] : e
        },
        _getMinMaxDate: function (e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function (e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function (e, t) {
            return (new Date(e, t, 1)).getDay()
        },
        _canAdjustMonth: function (e, t, n, r) {
            var i = this._getNumberOfMonths(e);
            return n = this._daylightSavingAdjust(new Date(n, r + (t < 0 ? t : i[0] * i[1]), 1)), t < 0 && n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())), this._isInRange(e, n)
        },
        _isInRange: function (e, t) {
            var n = this._getMinMaxDate(e, "min");
            return e = this._getMinMaxDate(e, "max"), (!n || t.getTime() >= n.getTime()) && (!e || t.getTime() <= e.getTime())
        },
        _getFormatConfig: function (e) {
            var t = this._get(e, "shortYearCutoff");
            return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function (e, t, n, r) {
            return t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear), t = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay)), this.formatDate(this._get(e, "dateFormat"), t, this._getFormatConfig(e))
        }
    }), a.fn.datepicker = function (e) {
        if (!this.length) return this;
        a.datepicker.initialized || (a(document).mousedown(a.datepicker._checkExternalClick).find("body").append(a.datepicker.dpDiv), a.datepicker.initialized = !0);
        var t = Array.prototype.slice.call(arguments, 1);
        return typeof e != "string" || e != "isDisabled" && e != "getDate" && e != "widget" ? e == "option" && arguments.length == 2 && typeof arguments[1] == "string" ? a.datepicker["_" + e + "Datepicker"].apply(a.datepicker, [this[0]].concat(t)) : this.each(function () {
            typeof e == "string" ? a.datepicker["_" + e + "Datepicker"].apply(a.datepicker, [this].concat(t)) : a.datepicker._attachDatepicker(this, e)
        }) : a.datepicker["_" + e + "Datepicker"].apply(a.datepicker, [this[0]].concat(t))
    }, a.datepicker = new c, a.datepicker.initialized = !1, a.datepicker.uuid = (new Date).getTime(), a.datepicker.version = "1.8.16", window["DP_jQuery_" + g] = a
}(jQuery),
function (e, t) {
    var n = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0
    }, r = {
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0
    }, i = e.attrFn || {
        val: !0,
        css: !0,
        html: !0,
        text: !0,
        data: !0,
        width: !0,
        height: !0,
        offset: !0,
        click: !0
    };
    e.widget("ui.dialog", {
        options: {
            autoOpen: !0,
            buttons: {},
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: !1,
            maxWidth: !1,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                collision: "fit",
                using: function (t) {
                    var n = e(this).css(t).offset().top;
                    n < 0 && e(this).css("top", t.top - n)
                }
            },
            resizable: !0,
            show: null,
            stack: !0,
            title: "",
            width: 300,
            zIndex: 1e3
        },
        _create: function () {
            this.originalTitle = this.element.attr("title"), typeof this.originalTitle != "string" && (this.originalTitle = ""), this.options.title = this.options.title || this.originalTitle;
            var t = this,
                n = t.options,
                r = n.title || "&#160;",
                i = e.ui.dialog.getTitleId(t.element),
                s = (t.uiDialog = e("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " + n.dialogClass).css({
                    zIndex: n.zIndex
                }).attr("tabIndex", -1).css("outline", 0).keydown(function (r) {
                    n.closeOnEscape && !r.isDefaultPrevented() && r.keyCode && r.keyCode === e.ui.keyCode.ESCAPE && (t.close(r), r.preventDefault())
                }).attr({
                    role: "dialog",
                    "aria-labelledby": i
                }).mousedown(function (e) {
                    t.moveToTop(!1, e)
                });
            t.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(s);
            var o = (t.uiDialogTitlebar = e("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(s),
                u = e('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function () {
                    u.addClass("ui-state-hover")
                }, function () {
                    u.removeClass("ui-state-hover")
                }).focus(function () {
                    u.addClass("ui-state-focus")
                }).blur(function () {
                    u.removeClass("ui-state-focus")
                }).click(function (e) {
                    return t.close(e), !1
                }).appendTo(o);
            (t.uiDialogTitlebarCloseText = e("<span></span>")).addClass("ui-icon ui-icon-closethick").text(n.closeText).appendTo(u), e("<span></span>").addClass("ui-dialog-title").attr("id", i).html(r).prependTo(o), e.isFunction(n.beforeclose) && !e.isFunction(n.beforeClose) && (n.beforeClose = n.beforeclose), o.find("*").add(o).disableSelection(), n.draggable && e.fn.draggable && t._makeDraggable(), n.resizable && e.fn.resizable && t._makeResizable(), t._createButtons(n.buttons), t._isOpen = !1, e.fn.bgiframe && s.bgiframe()
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        destroy: function () {
            var e = this;
            return e.overlay && e.overlay.destroy(), e.uiDialog.hide(), e.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), e.uiDialog.remove(), e.originalTitle && e.element.attr("title", e.originalTitle), e
        },
        widget: function () {
            return this.uiDialog
        },
        close: function (t) {
            var n = this,
                r, i;
            if (!1 !== n._trigger("beforeClose", t)) return n.overlay && n.overlay.destroy(), n.uiDialog.unbind("keypress.ui-dialog"), n._isOpen = !1, n.options.hide ? n.uiDialog.hide(n.options.hide, function () {
                n._trigger("close", t)
            }) : (n.uiDialog.hide(), n._trigger("close", t)), e.ui.dialog.overlay.resize(), n.options.modal && (r = 0, e(".ui-dialog").each(function () {
                this !== n.uiDialog[0] && (i = e(this).css("z-index"), isNaN(i) || (r = Math.max(r, i)))
            }), e.ui.dialog.maxZ = r), n
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function (t, n) {
            var r = this,
                i = r.options;
            return i.modal && !t || !i.stack && !i.modal ? r._trigger("focus", n) : (i.zIndex > e.ui.dialog.maxZ && (e.ui.dialog.maxZ = i.zIndex), r.overlay && (e.ui.dialog.maxZ += 1, r.overlay.$el.css("z-index", e.ui.dialog.overlay.maxZ = e.ui.dialog.maxZ)), t = {
                scrollTop: r.element.scrollTop(),
                scrollLeft: r.element.scrollLeft()
            }, e.ui.dialog.maxZ += 1, r.uiDialog.css("z-index", e.ui.dialog.maxZ), r.element.attr(t), r._trigger("focus", n), r)
        },
        open: function () {
            if (!this._isOpen) {
                var t = this,
                    n = t.options,
                    r = t.uiDialog;
                return t.overlay = n.modal ? new e.ui.dialog.overlay(t) : null, t._size(), t._position(n.position), r.show(n.show), t.moveToTop(!0), n.modal && r.bind("keypress.ui-dialog", function (t) {
                    if (t.keyCode === e.ui.keyCode.TAB) {
                        var n = e(":tabbable", this),
                            r = n.filter(":first");
                        n = n.filter(":last");
                        if (t.target === n[0] && !t.shiftKey) return r.focus(1), !1;
                        if (t.target === r[0] && t.shiftKey) return n.focus(1), !1
                    }
                }), e(t.element.find(":tabbable").get().concat(r.find(".ui-dialog-buttonpane :tabbable").get().concat(r.get()))).eq(0).focus(), t._isOpen = !0, t._trigger("open"), t
            }
        },
        _createButtons: function (t) {
            var n = this,
                r = !1,
                s = e("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
                o = e("<div></div>").addClass("ui-dialog-buttonset").appendTo(s);
            n.uiDialog.find(".ui-dialog-buttonpane").remove(), typeof t == "object" && t !== null && e.each(t, function () {
                return !(r = !0)
            }), r && (e.each(t, function (t, r) {
                r = e.isFunction(r) ? {
                    click: r,
                    text: t
                } : r;
                var s = e('<button type="button"></button>').click(function () {
                    r.click.apply(n.element[0], arguments)
                }).appendTo(o);
                e.each(r, function (e, t) {
                    e !== "click" && (e in i ? s[e](t) : s.attr(e, t))
                }), e.fn.button && s.button()
            }), s.appendTo(n.uiDialog))
        },
        _makeDraggable: function () {
            function t(e) {
                return {
                    position: e.position,
                    offset: e.offset
                }
            }
            var n = this,
                r = n.options,
                i = e(document),
                s;
            n.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (i, o) {
                    s = r.height === "auto" ? "auto" : e(this).height(), e(this).height(e(this).height()).addClass("ui-dialog-dragging"), n._trigger("dragStart", i, t(o))
                },
                drag: function (e, r) {
                    n._trigger("drag", e, t(r))
                },
                stop: function (o, u) {
                    r.position = [u.position.left - i.scrollLeft(), u.position.top - i.scrollTop()], e(this).removeClass("ui-dialog-dragging").height(s), n._trigger("dragStop", o, t(u)), e.ui.dialog.overlay.resize()
                }
            })
        },
        _makeResizable: function (n) {
            function r(e) {
                return {
                    originalPosition: e.originalPosition,
                    originalSize: e.originalSize,
                    position: e.position,
                    size: e.size
                }
            }
            n = n === t ? this.options.resizable : n;
            var i = this,
                s = i.options,
                o = i.uiDialog.css("position");
            n = typeof n == "string" ? n : "n,e,s,w,se,sw,ne,nw", i.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: i.element,
                maxWidth: s.maxWidth,
                maxHeight: s.maxHeight,
                minWidth: s.minWidth,
                minHeight: i._minHeight(),
                handles: n,
                start: function (t, n) {
                    e(this).addClass("ui-dialog-resizing"), i._trigger("resizeStart", t, r(n))
                },
                resize: function (e, t) {
                    i._trigger("resize", e, r(t))
                },
                stop: function (t, n) {
                    e(this).removeClass("ui-dialog-resizing"), s.height = e(this).height(), s.width = e(this).width(), i._trigger("resizeStop", t, r(n)), e.ui.dialog.overlay.resize()
                }
            }).css("position", o).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
        },
        _minHeight: function () {
            var e = this.options;
            return e.height === "auto" ? e.minHeight : Math.min(e.minHeight, e.height)
        },
        _position: function (t) {
            var n = [],
                r = [0, 0],
                i;
            if (t) {
                if (typeof t == "string" || typeof t == "object" && "0" in t) n = t.split ? t.split(" ") : [t[0], t[1]], n.length === 1 && (n[1] = n[0]), e.each(["left", "top"], function (e, t) {
                    +n[e] === n[e] && (r[e] = n[e], n[e] = t)
                }), t = {
                    my: n.join(" "),
                    at: n.join(" "),
                    offset: r.join(" ")
                };
                t = e.extend({}, e.ui.dialog.prototype.options.position, t)
            } else t = e.ui.dialog.prototype.options.position;
            (i = this.uiDialog.is(":visible")) || this.uiDialog.show(), this.uiDialog.css({
                top: 0,
                left: 0
            }).position(e.extend({
                of: window
            }, t)), i || this.uiDialog.hide()
        },
        _setOptions: function (t) {
            var i = this,
                s = {}, o = !1;
            e.each(t, function (e, t) {
                i._setOption(e, t), e in n && (o = !0), e in r && (s[e] = t)
            }), o && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", s)
        },
        _setOption: function (t, n) {
            var r = this,
                i = r.uiDialog;
            switch (t) {
                case "beforeclose":
                    t = "beforeClose";
                    break;
                case "buttons":
                    r._createButtons(n);
                    break;
                case "closeText":
                    r.uiDialogTitlebarCloseText.text("" + n);
                    break;
                case "dialogClass":
                    i.removeClass(r.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " + n);
                    break;
                case "disabled":
                    n ? i.addClass("ui-dialog-disabled") : i.removeClass("ui-dialog-disabled");
                    break;
                case "draggable":
                    var s = i.is(":data(draggable)");
                    s && !n && i.draggable("destroy"), !s && n && r._makeDraggable();
                    break;
                case "position":
                    r._position(n);
                    break;
                case "resizable":
                    (s = i.is(":data(resizable)")) && !n && i.resizable("destroy"), s && typeof n == "string" && i.resizable("option", "handles", n), !s && n !== !1 && r._makeResizable(n);
                    break;
                case "title":
                    e(".ui-dialog-title", r.uiDialogTitlebar).html("" + (n || "&#160;"))
            }
            e.Widget.prototype._setOption.apply(r, arguments)
        },
        _size: function () {
            var t = this.options,
                n, r, i = this.uiDialog.is(":visible");
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                height: 0
            }), t.minWidth > t.width && (t.width = t.minWidth), n = this.uiDialog.css({
                height: "auto",
                width: t.width
            }).height(), r = Math.max(0, t.minHeight - n), t.height === "auto" ? e.support.minHeight ? this.element.css({
                minHeight: r,
                height: "auto"
            }) : (this.uiDialog.show(), t = this.element.css("height", "auto").height(), i || this.uiDialog.hide(), this.element.height(Math.max(t, r))) : this.element.height(Math.max(t.height - n, 0)), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        }
    }), e.extend(e.ui.dialog, {
        version: "1.8.16",
        uuid: 0,
        maxZ: 0,
        getTitleId: function (e) {
            return e = e.attr("id"), e || (this.uuid += 1, e = this.uuid), "ui-dialog-title-" + e
        },
        overlay: function (t) {
            this.$el = e.ui.dialog.overlay.create(t)
        }
    }), e.extend(e.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: e.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function (e) {
            return e + ".dialog-overlay"
        }).join(" "),
        create: function (t) {
            this.instances.length === 0 && (setTimeout(function () {
                e.ui.dialog.overlay.instances.length && e(document).bind(e.ui.dialog.overlay.events, function (t) {
                    if (e(t.target).zIndex() < e.ui.dialog.overlay.maxZ) return !1
                })
            }, 1), e(document).bind("keydown.dialog-overlay", function (n) {
                t.options.closeOnEscape && !n.isDefaultPrevented() && n.keyCode && n.keyCode === e.ui.keyCode.ESCAPE && (t.close(n), n.preventDefault())
            }), e(window).bind("resize.dialog-overlay", e.ui.dialog.overlay.resize));
            var n = (this.oldInstances.pop() || e("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({
                width: this.width(),
                height: this.height()
            });
            return e.fn.bgiframe && n.bgiframe(), this.instances.push(n), n
        },
        destroy: function (t) {
            var n = e.inArray(t, this.instances);
            n != -1 && this.oldInstances.push(this.instances.splice(n, 1)[0]), this.instances.length === 0 && e([document, window]).unbind(".dialog-overlay"), t.remove();
            var r = 0;
            e.each(this.instances, function () {
                r = Math.max(r, this.css("z-index"))
            }), this.maxZ = r
        },
        height: function () {
            var t, n;
            return e.browser.msie && e.browser.version < 7 ? (t = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), n = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), t < n ? e(window).height() + "px" : t + "px") : e(document).height() + "px"
        },
        width: function () {
            var t, n;
            return e.browser.msie ? (t = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), n = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), t < n ? e(window).width() + "px" : t + "px") : e(document).width() + "px"
        },
        resize: function () {
            var t = e([]);
            e.each(e.ui.dialog.overlay.instances, function () {
                t = t.add(this)
            }), t.css({
                width: 0,
                height: 0
            }).css({
                width: e.ui.dialog.overlay.width(),
                height: e.ui.dialog.overlay.height()
            })
        }
    }), e.extend(e.ui.dialog.overlay.prototype, {
        destroy: function () {
            e.ui.dialog.overlay.destroy(this.$el)
        }
    })
}(jQuery),
function (e) {
    e.ui = e.ui || {};
    var t = /left|center|right/,
        n = /top|center|bottom/,
        r = e.fn.position,
        i = e.fn.offset;
    e.fn.position = function (i) {
        if (!i || !i.of) return r.apply(this, arguments);
        i = e.extend({}, i);
        var s = e(i.of),
            o = s[0],
            u = (i.collision || "flip").split(" "),
            f = i.offset ? i.offset.split(" ") : [0, 0],
            l, h, p;
        return o.nodeType === 9 ? (l = s.width(), h = s.height(), p = {
            top: 0,
            left: 0
        }) : o.setTimeout ? (l = s.width(), h = s.height(), p = {
            top: s.scrollTop(),
            left: s.scrollLeft()
        }) : o.preventDefault ? (i.at = "left top", l = h = 0, p = {
            top: i.of.pageY,
            left: i.of.pageX
        }) : (l = s.outerWidth(), h = s.outerHeight(), p = s.offset()), e.each(["my", "at"], function () {
            var e = (i[this] || "").split(" ");
            e.length === 1 && (e = t.test(e[0]) ? e.concat(["center"]) : n.test(e[0]) ? ["center"].concat(e) : ["center", "center"]), e[0] = t.test(e[0]) ? e[0] : "center", e[1] = n.test(e[1]) ? e[1] : "center", i[this] = e
        }), u.length === 1 && (u[1] = u[0]), f[0] = parseInt(f[0], 10) || 0, f.length === 1 && (f[1] = f[0]), f[1] = parseInt(f[1], 10) || 0, i.at[0] === "right" ? p.left += l : i.at[0] === "center" && (p.left += l / 2), i.at[1] === "bottom" ? p.top += h : i.at[1] === "center" && (p.top += h / 2), p.left += f[0], p.top += f[1], this.each(function () {
            var t = e(this),
                n = t.outerWidth(),
                r = t.outerHeight(),
                s = parseInt(e.curCSS(this, "marginLeft", !0)) || 0,
                o = parseInt(e.curCSS(this, "marginTop", !0)) || 0,
                c = n + s + (parseInt(e.curCSS(this, "marginRight", !0)) || 0),
                d = r + o + (parseInt(e.curCSS(this, "marginBottom", !0)) || 0),
                v = e.extend({}, p),
                m;
            i.my[0] === "right" ? v.left -= n : i.my[0] === "center" && (v.left -= n / 2), i.my[1] === "bottom" ? v.top -= r : i.my[1] === "center" && (v.top -= r / 2), v.left = Math.round(v.left), v.top = Math.round(v.top), m = {
                left: v.left - s,
                top: v.top - o
            }, e.each(["left", "top"], function (t, s) {
                e.ui.position[u[t]] && e.ui.position[u[t]][s](v, {
                    targetWidth: l,
                    targetHeight: h,
                    elemWidth: n,
                    elemHeight: r,
                    collisionPosition: m,
                    collisionWidth: c,
                    collisionHeight: d,
                    offset: f,
                    my: i.my,
                    at: i.at
                })
            }), e.fn.bgiframe && t.bgiframe(), t.offset(e.extend(v, {
                using: i.using
            }))
        })
    }, e.ui.position = {
        fit: {
            left: function (t, n) {
                var r = e(window);
                r = n.collisionPosition.left + n.collisionWidth - r.width() - r.scrollLeft(), t.left = r > 0 ? t.left - r : Math.max(t.left - n.collisionPosition.left, t.left)
            },
            top: function (t, n) {
                var r = e(window);
                r = n.collisionPosition.top + n.collisionHeight - r.height() - r.scrollTop(), t.top = r > 0 ? t.top - r : Math.max(t.top - n.collisionPosition.top, t.top)
            }
        },
        flip: {
            left: function (t, n) {
                if (n.at[0] !== "center") {
                    var r = e(window);
                    r = n.collisionPosition.left + n.collisionWidth - r.width() - r.scrollLeft();
                    var i = n.my[0] === "left" ? -n.elemWidth : n.my[0] === "right" ? n.elemWidth : 0,
                        s = n.at[0] === "left" ? n.targetWidth : -n.targetWidth,
                        o = -2 * n.offset[0];
                    t.left += n.collisionPosition.left < 0 ? i + s + o : r > 0 ? i + s + o : 0
                }
            },
            top: function (t, n) {
                if (n.at[1] !== "center") {
                    var r = e(window);
                    r = n.collisionPosition.top + n.collisionHeight - r.height() - r.scrollTop();
                    var i = n.my[1] === "top" ? -n.elemHeight : n.my[1] === "bottom" ? n.elemHeight : 0,
                        s = n.at[1] === "top" ? n.targetHeight : -n.targetHeight,
                        o = -2 * n.offset[1];
                    t.top += n.collisionPosition.top < 0 ? i + s + o : r > 0 ? i + s + o : 0
                }
            }
        }
    }, e.offset.setOffset || (e.offset.setOffset = function (t, n) {
        /static/.test(e.curCSS(t, "position")) && (t.style.position = "relative");
        var r = e(t),
            i = r.offset(),
            s = parseInt(e.curCSS(t, "top", !0), 10) || 0,
            o = parseInt(e.curCSS(t, "left", !0), 10) || 0;
        i = {
            top: n.top - i.top + s,
            left: n.left - i.left + o
        }, "using" in n ? n.using.call(t, i) : r.css(i)
    }, e.fn.offset = function (t) {
        var n = this[0];
        return !n || !n.ownerDocument ? null : t ? this.each(function () {
            e.offset.setOffset(this, t)
        }) : i.call(this)
    })
}(jQuery),
function (e, t) {
    e.widget("ui.progressbar", {
        options: {
            value: 0,
            max: 100
        },
        min: 0,
        _create: function () {
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._value()
            }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue()
        },
        destroy: function () {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove(), e.Widget.prototype.destroy.apply(this, arguments)
        },
        value: function (e) {
            return e === t ? this._value() : (this._setOption("value", e), this)
        },
        _setOption: function (t, n) {
            t === "value" && (this.options.value = n, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), e.Widget.prototype._setOption.apply(this, arguments)
        },
        _value: function () {
            var e = this.options.value;
            return typeof e != "number" && (e = 0), Math.min(this.options.max, Math.max(this.min, e))
        },
        _percentage: function () {
            return 100 * this._value() / this.options.max
        },
        _refreshValue: function () {
            var e = this.value(),
                t = this._percentage();
            this.oldValue !== e && (this.oldValue = e, this._trigger("change")), this.valueDiv.toggle(e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(t.toFixed(0) + "%"), this.element.attr("aria-valuenow", e)
        }
    }), e.extend(e.ui.progressbar, {
        version: "1.8.16"
    })
}(jQuery),
function (e) {
    e.widget("ui.slider", e.ui.mouse, {
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null
        },
        _create: function () {
            var t = this,
                n = this.options,
                r = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                i = n.values && n.values.length || 1,
                s = [];
            this._mouseSliding = this._keySliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (n.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = e([]), n.range && (n.range === !0 && (n.values || (n.values = [this._valueMin(), this._valueMin()]), n.values.length && n.values.length !== 2 && (n.values = [n.values[0], n.values[0]])), this.range = e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (n.range === "min" || n.range === "max" ? " ui-slider-range-" + n.range : "")));
            for (var o = r.length; o < i; o += 1) s.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
            this.handles = r.add(e(s.join("")).appendTo(t.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function (e) {
                e.preventDefault()
            }).hover(function () {
                n.disabled || e(this).addClass("ui-state-hover")
            }, function () {
                e(this).removeClass("ui-state-hover")
            }).focus(function () {
                n.disabled ? e(this).blur() : (e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), e(this).addClass("ui-state-focus"))
            }).blur(function () {
                e(this).removeClass("ui-state-focus")
            }), this.handles.each(function (t) {
                e(this).data("index.ui-slider-handle", t)
            }), this.handles.keydown(function (n) {
                var r = !0,
                    i = e(this).data("index.ui-slider-handle"),
                    s, o, u;
                if (!t.options.disabled) {
                    switch (n.keyCode) {
                        case e.ui.keyCode.HOME:
                        case e.ui.keyCode.END:
                        case e.ui.keyCode.PAGE_UP:
                        case e.ui.keyCode.PAGE_DOWN:
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.RIGHT:
                        case e.ui.keyCode.DOWN:
                        case e.ui.keyCode.LEFT:
                            r = !1;
                            if (!t._keySliding) {
                                t._keySliding = !0, e(this).addClass("ui-state-active"), s = t._start(n, i);
                                if (s === !1) return
                            }
                    }
                    u = t.options.step, s = t.options.values && t.options.values.length ? o = t.values(i) : o = t.value();
                    switch (n.keyCode) {
                        case e.ui.keyCode.HOME:
                            o = t._valueMin();
                            break;
                        case e.ui.keyCode.END:
                            o = t._valueMax();
                            break;
                        case e.ui.keyCode.PAGE_UP:
                            o = t._trimAlignValue(s + (t._valueMax() - t._valueMin()) / 5);
                            break;
                        case e.ui.keyCode.PAGE_DOWN:
                            o = t._trimAlignValue(s - (t._valueMax() - t._valueMin()) / 5);
                            break;
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.RIGHT:
                            if (s === t._valueMax()) return;
                            o = t._trimAlignValue(s + u);
                            break;
                        case e.ui.keyCode.DOWN:
                        case e.ui.keyCode.LEFT:
                            if (s === t._valueMin()) return;
                            o = t._trimAlignValue(s - u)
                    }
                    return t._slide(n, i, o), r
                }
            }).keyup(function (n) {
                var r = e(this).data("index.ui-slider-handle");
                t._keySliding && (t._keySliding = !1, t._stop(n, r), t._change(n, r), e(this).removeClass("ui-state-active"))
            }), this._refreshValue(), this._animateOff = !1
        },
        destroy: function () {
            return this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"), this._mouseDestroy(), this
        },
        _mouseCapture: function (t) {
            var n = this.options,
                r, i, s, o, u;
            return n.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), r = this._normValueFromMouse({
                x: t.pageX,
                y: t.pageY
            }), i = this._valueMax() - this._valueMin() + 1, o = this, this.handles.each(function (t) {
                var n = Math.abs(r - o.values(t));
                i > n && (i = n, s = e(this), u = t)
            }), n.range === !0 && this.values(1) === n.min && (u += 1, s = e(this.handles[u])), this._start(t, u) === !1 ? !1 : (this._mouseSliding = !0, o._handleIndex = u, s.addClass("ui-state-active").focus(), n = s.offset(), this._clickOffset = e(t.target).parents().andSelf().is(".ui-slider-handle") ? {
                left: t.pageX - n.left - s.width() / 2,
                top: t.pageY - n.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
            } : {
                left: 0,
                top: 0
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, u, r), this._animateOff = !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (e) {
            var t = this._normValueFromMouse({
                x: e.pageX,
                y: e.pageY
            });
            return this._slide(e, this._handleIndex, t), !1
        },
        _mouseStop: function (e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._clickOffset = this._handleIndex = null, this._animateOff = !1
        },
        _detectOrientation: function () {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (e) {
            var t;
            return this.orientation === "horizontal" ? (t = this.elementSize.width, e = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, e = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), t = e / t, t > 1 && (t = 1), t < 0 && (t = 0), this.orientation === "vertical" && (t = 1 - t), e = this._valueMax() - this._valueMin(), this._trimAlignValue(this._valueMin() + t * e)
        },
        _start: function (e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("start", e, n)
        },
        _slide: function (e, t, n) {
            var r;
            this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (t === 0 && n > r || t === 1 && n < r) && (n = r), n !== this.values(t) && (r = this.values(), r[t] = n, e = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n,
                values: r
            }), this.values(t ? 0 : 1), e !== !1 && this.values(t, n, !0))) : n !== this.value() && (e = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n
            }), e !== !1 && this.value(n))
        },
        _stop: function (e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("stop", e, n)
        },
        _change: function (e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var n = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("change", e, n)
            }
        },
        value: function (e) {
            if (!arguments.length) return this._value();
            this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0)
        },
        values: function (t, n) {
            var r, i, s;
            if (arguments.length > 1) this.options.values[t] = this._trimAlignValue(n), this._refreshValue(), this._change(null, t);
            else {
                if (!arguments.length) return this._values();
                if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
                r = this.options.values, i = arguments[0];
                for (s = 0; s < r.length; s += 1) r[s] = this._trimAlignValue(i[s]), this._change(null, s);
                this._refreshValue()
            }
        },
        _setOption: function (t, n) {
            var r, i = 0;
            e.isArray(this.options.values) && (i = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments);
            switch (t) {
                case "disabled":
                    n ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.propAttr("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.propAttr("disabled", !1), this.element.removeClass("ui-disabled"));
                    break;
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    this._animateOff = !0, this._refreshValue();
                    for (r = 0; r < i; r += 1) this._change(null, r);
                    this._animateOff = !1
            }
        },
        _value: function () {
            var e = this.options.value;
            return e = this._trimAlignValue(e)
        },
        _values: function (e) {
            var t, n;
            if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
            t = this.options.values.slice();
            for (n = 0; n < t.length; n += 1) t[n] = this._trimAlignValue(t[n]);
            return t
        },
        _trimAlignValue: function (e) {
            if (e <= this._valueMin()) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1,
                n = (e - this._valueMin()) % t;
            return e -= n, Math.abs(n) * 2 >= t && (e += n > 0 ? t : -t), parseFloat(e.toFixed(5))
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.options.max
        },
        _refreshValue: function () {
            var t = this.options.range,
                n = this.options,
                r = this,
                i = this._animateOff ? !1 : n.animate,
                s, o = {}, u, f, l, c;
            this.options.values && this.options.values.length ? this.handles.each(function (t) {
                s = (r.values(t) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100, o[r.orientation === "horizontal" ? "left" : "bottom"] = s + "%", e(this).stop(1, 1)[i ? "animate" : "css"](o, n.animate), r.options.range === !0 && (r.orientation === "horizontal" ? (t === 0 && r.range.stop(1, 1)[i ? "animate" : "css"]({
                    left: s + "%"
                }, n.animate), t === 1 && r.range[i ? "animate" : "css"]({
                    width: s - u + "%"
                }, {
                    queue: !1,
                    duration: n.animate
                })) : (t === 0 && r.range.stop(1, 1)[i ? "animate" : "css"]({
                    bottom: s + "%"
                }, n.animate), t === 1 && r.range[i ? "animate" : "css"]({
                    height: s - u + "%"
                }, {
                    queue: !1,
                    duration: n.animate
                }))), u = s
            }) : (f = this.value(), l = this._valueMin(), c = this._valueMax(), s = c !== l ? (f - l) / (c - l) * 100 : 0, o[r.orientation === "horizontal" ? "left" : "bottom"] = s + "%", this.handle.stop(1, 1)[i ? "animate" : "css"](o, n.animate), t === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[i ? "animate" : "css"]({
                width: s + "%"
            }, n.animate), t === "max" && this.orientation === "horizontal" && this.range[i ? "animate" : "css"]({
                width: 100 - s + "%"
            }, {
                queue: !1,
                duration: n.animate
            }), t === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[i ? "animate" : "css"]({
                height: s + "%"
            }, n.animate), t === "max" && this.orientation === "vertical" && this.range[i ? "animate" : "css"]({
                height: 100 - s + "%"
            }, {
                queue: !1,
                duration: n.animate
            }))
        }
    }), e.extend(e.ui.slider, {
        version: "1.8.16"
    })
}(jQuery),
function (e, n) {
    function r() {
        return ++s
    }
    function i() {
        return ++o
    }
    var s = 0,
        o = 0;
    e.widget("ui.tabs", {
        options: {
            add: null,
            ajaxOptions: null,
            cache: !1,
            cookie: null,
            collapsible: !1,
            disable: null,
            disabled: [],
            enable: null,
            event: "click",
            fx: null,
            idPrefix: "ui-tabs-",
            load: null,
            panelTemplate: "<div></div>",
            remove: null,
            select: null,
            show: null,
            spinner: "<em>Loading&#8230;</em>",
            tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
        },
        _create: function () {
            this._tabify(!0)
        },
        _setOption: function (e, t) {
            e == "selected" ? this.options.collapsible && t == this.options.selected || this.select(t) : (this.options[e] = t, this._tabify())
        },
        _tabId: function (e) {
            return e.title && e.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + r()
        },
        _sanitizeSelector: function (e) {
            return e.replace(/:/g, "\\:")
        },
        _cookie: function () {
            var t = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + i());
            return e.cookie.apply(null, [t].concat(e.makeArray(arguments)))
        },
        _ui: function (e, t) {
            return {
                tab: e,
                panel: t,
                index: this.anchors.index(e)
            }
        },
        _cleanup: function () {
            this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function () {
                var t = e(this);
                t.html(t.data("label.tabs")).removeData("label.tabs")
            })
        },
        _tabify: function (t) {
            function r(t, n) {
                t.css("display", ""), !e.support.opacity && n.opacity && t[0].style.removeAttribute("filter")
            }
            var i = this,
                s = this.options,
                o = /^#.+/;
            this.list = this.element.find("ol,ul").eq(0), this.lis = e(" > li:has(a[href])", this.list), this.anchors = this.lis.map(function () {
                return e("a", this)[0]
            }), this.panels = e([]), this.anchors.each(function (t, n) {
                var r = e(n).attr("href"),
                    u = r.split("#")[0],
                    f;
                u && (u === location.toString().split("#")[0] || (f = e("base")[0]) && u === f.href) && (r = n.hash, n.href = r), o.test(r) ? i.panels = i.panels.add(i.element.find(i._sanitizeSelector(r))) : r && r !== "#" ? (e.data(n, "href.tabs", r), e.data(n, "load.tabs", r.replace(/#.*$/, "")), r = i._tabId(n), n.href = "#" + r, n = i.element.find("#" + r), n.length || (n = e(s.panelTemplate).attr("id", r).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(i.panels[t - 1] || i.list), n.data("destroy.tabs", !0)), i.panels = i.panels.add(n)) : s.disabled.push(t)
            }), t ? (this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"), this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.lis.addClass("ui-state-default ui-corner-top"), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"), s.selected === n ? (location.hash && this.anchors.each(function (e, t) {
                if (t.hash == location.hash) return s.selected = e, !1
            }), typeof s.selected != "number" && s.cookie && (s.selected = parseInt(i._cookie(), 10)), typeof s.selected != "number" && this.lis.filter(".ui-tabs-selected").length && (s.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"))), s.selected = s.selected || (this.lis.length ? 0 : -1)) : s.selected === null && (s.selected = -1), s.selected = s.selected >= 0 && this.anchors[s.selected] || s.selected < 0 ? s.selected : 0, s.disabled = e.unique(s.disabled.concat(e.map(this.lis.filter(".ui-state-disabled"), function (e) {
                return i.lis.index(e)
            }))).sort(), e.inArray(s.selected, s.disabled) != -1 && s.disabled.splice(e.inArray(s.selected, s.disabled), 1), this.panels.addClass("ui-tabs-hide"), this.lis.removeClass("ui-tabs-selected ui-state-active"), s.selected >= 0 && this.anchors.length && (i.element.find(i._sanitizeSelector(i.anchors[s.selected].hash)).removeClass("ui-tabs-hide"), this.lis.eq(s.selected).addClass("ui-tabs-selected ui-state-active"), i.element.queue("tabs", function () {
                i._trigger("show", null, i._ui(i.anchors[s.selected], i.element.find(i._sanitizeSelector(i.anchors[s.selected].hash))[0]))
            }), this.load(s.selected)), e(window).bind("unload", function () {
                i.lis.add(i.anchors).unbind(".tabs"), i.lis = i.anchors = i.panels = null
            })) : s.selected = this.lis.index(this.lis.filter(".ui-tabs-selected")), this.element[s.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible"), s.cookie && this._cookie(s.selected, s.cookie), t = 0;
            for (var u; u = this.lis[t]; t++) e(u)[e.inArray(t, s.disabled) != -1 && !e(u).hasClass("ui-tabs-selected") ? "addClass" : "removeClass"]("ui-state-disabled");
            s.cache === !1 && this.anchors.removeData("cache.tabs"), this.lis.add(this.anchors).unbind(".tabs");
            if (s.event !== "mouseover") {
                var f = function (e, t) {
                    t.is(":not(.ui-state-disabled)") && t.addClass("ui-state-" + e)
                }, l = function (e, t) {
                    t.removeClass("ui-state-" + e)
                };
                this.lis.bind("mouseover.tabs", function () {
                    f("hover", e(this))
                }), this.lis.bind("mouseout.tabs", function () {
                    l("hover", e(this))
                }), this.anchors.bind("focus.tabs", function () {
                    f("focus", e(this).closest("li"))
                }), this.anchors.bind("blur.tabs", function () {
                    l("focus", e(this).closest("li"))
                })
            }
            var c, h;
            s.fx && (e.isArray(s.fx) ? (c = s.fx[0], h = s.fx[1]) : c = h = s.fx);
            var p = h ? function (t, n) {
                    e(t).closest("li").addClass("ui-tabs-selected ui-state-active"), n.hide().removeClass("ui-tabs-hide").animate(h, h.duration || "normal", function () {
                        r(n, h), i._trigger("show", null, i._ui(t, n[0]))
                    })
                } : function (t, n) {
                    e(t).closest("li").addClass("ui-tabs-selected ui-state-active"), n.removeClass("ui-tabs-hide"), i._trigger("show", null, i._ui(t, n[0]))
                }, v = c ? function (e, t) {
                    t.animate(c, c.duration || "normal", function () {
                        i.lis.removeClass("ui-tabs-selected ui-state-active"), t.addClass("ui-tabs-hide"), r(t, c), i.element.dequeue("tabs")
                    })
                } : function (e, t) {
                    i.lis.removeClass("ui-tabs-selected ui-state-active"), t.addClass("ui-tabs-hide"), i.element.dequeue("tabs")
                };
            this.anchors.bind(s.event + ".tabs", function () {
                var t = this,
                    n = e(t).closest("li"),
                    r = i.panels.filter(":not(.ui-tabs-hide)"),
                    o = i.element.find(i._sanitizeSelector(t.hash));
                if (n.hasClass("ui-tabs-selected") && !s.collapsible || n.hasClass("ui-state-disabled") || n.hasClass("ui-state-processing") || i.panels.filter(":animated").length || i._trigger("select", null, i._ui(this, o[0])) === !1) return this.blur(), !1;
                s.selected = i.anchors.index(this), i.abort();
                if (s.collapsible) {
                    if (n.hasClass("ui-tabs-selected")) return s.selected = -1, s.cookie && i._cookie(s.selected, s.cookie), i.element.queue("tabs", function () {
                        v(t, r)
                    }).dequeue("tabs"), this.blur(), !1;
                    if (!r.length) return s.cookie && i._cookie(s.selected, s.cookie), i.element.queue("tabs", function () {
                        p(t, o)
                    }), i.load(i.anchors.index(this)), this.blur(), !1
                }
                s.cookie && i._cookie(s.selected, s.cookie);
                if (!o.length) throw "jQuery UI Tabs: Mismatching fragment identifier.";
                r.length && i.element.queue("tabs", function () {
                    v(t, r)
                }), i.element.queue("tabs", function () {
                    p(t, o)
                }), i.load(i.anchors.index(this)), e.browser.msie && this.blur()
            }), this.anchors.bind("click.tabs", function () {
                return !1
            })
        },
        _getIndex: function (e) {
            return typeof e == "string" && (e = this.anchors.index(this.anchors.filter("[href$=" + e + "]"))), e
        },
        destroy: function () {
            var t = this.options;
            return this.abort(), this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"), this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.anchors.each(function () {
                var t = e.data(this, "href.tabs");
                t && (this.href = t);
                var n = e(this).unbind(".tabs");
                e.each(["href", "load", "cache"], function (e, t) {
                    n.removeData(t + ".tabs")
                })
            }), this.lis.unbind(".tabs").add(this.panels).each(function () {
                e.data(this, "destroy.tabs") ? e(this).remove() : e(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")
            }), t.cookie && this._cookie(null, t.cookie), this
        },
        add: function (t, r, i) {
            i === n && (i = this.anchors.length);
            var s = this,
                o = this.options;
            r = e(o.tabTemplate.replace(/#\{href\}/g, t).replace(/#\{label\}/g, r)), t = t.indexOf("#") ? this._tabId(e("a", r)[0]) : t.replace("#", ""), r.addClass("ui-state-default ui-corner-top").data("destroy.tabs", !0);
            var u = s.element.find("#" + t);
            return u.length || (u = e(o.panelTemplate).attr("id", t).data("destroy.tabs", !0)), u.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"), i >= this.lis.length ? (r.appendTo(this.list), u.appendTo(this.list[0].parentNode)) : (r.insertBefore(this.lis[i]), u.insertBefore(this.panels[i])), o.disabled = e.map(o.disabled, function (e) {
                return e >= i ? ++e : e
            }), this._tabify(), this.anchors.length == 1 && (o.selected = 0, r.addClass("ui-tabs-selected ui-state-active"), u.removeClass("ui-tabs-hide"), this.element.queue("tabs", function () {
                s._trigger("show", null, s._ui(s.anchors[0], s.panels[0]))
            }), this.load(0)), this._trigger("add", null, this._ui(this.anchors[i], this.panels[i])), this
        },
        remove: function (t) {
            t = this._getIndex(t);
            var n = this.options,
                r = this.lis.eq(t).remove(),
                i = this.panels.eq(t).remove();
            return r.hasClass("ui-tabs-selected") && this.anchors.length > 1 && this.select(t + (t + 1 < this.anchors.length ? 1 : -1)), n.disabled = e.map(e.grep(n.disabled, function (e) {
                return e != t
            }), function (e) {
                return e >= t ? --e : e
            }), this._tabify(), this._trigger("remove", null, this._ui(r.find("a")[0], i[0])), this
        },
        enable: function (t) {
            t = this._getIndex(t);
            var n = this.options;
            if (e.inArray(t, n.disabled) != -1) return this.lis.eq(t).removeClass("ui-state-disabled"), n.disabled = e.grep(n.disabled, function (e) {
                return e != t
            }), this._trigger("enable", null, this._ui(this.anchors[t], this.panels[t])), this
        },
        disable: function (e) {
            e = this._getIndex(e);
            var t = this.options;
            return e != t.selected && (this.lis.eq(e).addClass("ui-state-disabled"), t.disabled.push(e), t.disabled.sort(), this._trigger("disable", null, this._ui(this.anchors[e], this.panels[e]))), this
        },
        select: function (e) {
            e = this._getIndex(e);
            if (e == -1) {
                if (!this.options.collapsible || this.options.selected == -1) return this;
                e = this.options.selected
            }
            return this.anchors.eq(e).trigger(this.options.event + ".tabs"), this
        },
        load: function (t) {
            t = this._getIndex(t);
            var n = this,
                r = this.options,
                i = this.anchors.eq(t)[0],
                s = e.data(i, "load.tabs");
            this.abort();
            if (!(!s || this.element.queue("tabs").length !== 0 && e.data(i, "cache.tabs"))) {
                this.lis.eq(t).addClass("ui-state-processing");
                if (r.spinner) {
                    var o = e("span", i);
                    o.data("label.tabs", o.html()).html(r.spinner)
                }
                return this.xhr = e.ajax(e.extend({}, r.ajaxOptions, {
                    url: s,
                    success: function (s, o) {
                        n.element.find(n._sanitizeSelector(i.hash)).html(s), n._cleanup(), r.cache && e.data(i, "cache.tabs", !0), n._trigger("load", null, n._ui(n.anchors[t], n.panels[t]));
                        try {
                            r.ajaxOptions.success(s, o)
                        } catch (u) {}
                    },
                    error: function (e, s) {
                        n._cleanup(), n._trigger("load", null, n._ui(n.anchors[t], n.panels[t]));
                        try {
                            r.ajaxOptions.error(e, s, t, i)
                        } catch (o) {}
                    }
                })), n.element.dequeue("tabs"), this
            }
            this.element.dequeue("tabs")
        },
        abort: function () {
            return this.element.queue([]), this.panels.stop(!1, !0), this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2)), this.xhr && (this.xhr.abort(), delete this.xhr), this._cleanup(), this
        },
        url: function (e, t) {
            return this.anchors.eq(e).removeData("cache.tabs").data("load.tabs", t), this
        },
        length: function () {
            return this.anchors.length
        }
    }), e.extend(e.ui.tabs, {
        version: "1.8.16"
    }), e.extend(e.ui.tabs.prototype, {
        rotation: null,
        rotate: function (e, n) {
            var r = this,
                i = this.options,
                s = r._rotate || (r._rotate = function (t) {
                    clearTimeout(r.rotation), r.rotation = setTimeout(function () {
                        var e = i.selected;
                        r.select(++e < r.anchors.length ? e : 0)
                    }, e), t && t.stopPropagation()
                });
            return n = r._unrotate || (r._unrotate = n ? function () {
                t = i.selected, s()
            } : function (e) {
                e.clientX && r.rotate(null)
            }), e ? (this.element.bind("tabsshow", s), this.anchors.bind(i.event + ".tabs", n), s()) : (clearTimeout(r.rotation), this.element.unbind("tabsshow", s), this.anchors.unbind(i.event + ".tabs", n), delete this._rotate, delete this._unrotate), this
        }
    })
}(jQuery),
function (e) {
    e.fn.hoverIntent = function (t, n) {
        var r = {
            sensitivity: 7,
            interval: 100,
            timeout: 0
        };
        r = e.extend(r, n ? {
            over: t,
            out: n
        } : t);
        var i, s, o, u, a = function (e) {
            i = e.pageX, s = e.pageY
        }, f = function (t, n) {
            n.hoverIntent_t = clearTimeout(n.hoverIntent_t);
            if (Math.abs(o - i) + Math.abs(u - s) < r.sensitivity) return e(n).unbind("mousemove", a), n.hoverIntent_s = 1, r.over.apply(n, [t]);
            o = i, u = s, n.hoverIntent_t = setTimeout(function () {
                f(t, n)
            }, r.interval)
        }, l = function (e, t) {
            return t.hoverIntent_t = clearTimeout(t.hoverIntent_t), t.hoverIntent_s = 0, r.out ? r.out.apply(t, [e]) : null
        }, c = function (t) {
            var n = jQuery.extend({}, t),
                i = this;
            i.hoverIntent_t && (i.hoverIntent_t = clearTimeout(i.hoverIntent_t)), t.type == "mouseenter" ? (o = n.pageX, u = n.pageY, e(i).bind("mousemove", a), i.hoverIntent_s != 1 && (i.hoverIntent_t = setTimeout(function () {
                f(n, i)
            }, r.interval))) : (e(i).unbind("mousemove", a), i.hoverIntent_s == 1 && (i.hoverIntent_t = setTimeout(function () {
                l(n, i)
            }, r.timeout)))
        };
        return this.bind("mouseenter", c).bind("mouseleave", c)
    }
}(jQuery);
var Layout = function () {
    function n() {
        var n, s;
        $("html").removeClass("no-js"), i(), t = $(window).width(), $(window).resize(function () {
            if (t === $(window).width()) return !1;
            clearTimeout(e), e = setTimeout(i, 125)
        }), n = $("<div>", {
            id: "searchBevel"
        }).appendTo("#search"), s = $("<div>", {
            id: "contentHeaderBevel"
        }).appendTo("#contentHeader"), $("#advancedSearchTrigger").live("click",
        r), $("#quickNav").find("li").last().addClass("last")
    }
    function r(e) {
        e.preventDefault();
        var t = $(this).parents("#search");
        t.find("#advancedSearchOptions").slideToggle()
    }
    function i() {
        var e, n, r, i, s, o, u, a, f;
        a = $("#sidebar"), f = $("#content"), e = $(window).width(), n = $(window).height(), t = e, s = a.outerWidth(), o = 20, u = 125, r = e - s - o, i = n + u, $(document).trigger("layout.resize")
    }
    var e, t;
    return {
        init: n,
        adapt: i
    }
}(),
    Nav = function () {
        function e() {
            $("li.nav").each(function () {
                var e, t, r;
                e = $(this), t = e.find("a").eq(0), r = e.find(".subNav"), r.length > 0 && (t.append('<span class="dropdownArrow"></span>'), e.addClass("dropdown"), t.bind("click", n))
            });
            var e = $("li.nav.active");
            if (e.is(".dropdown")) {
                var t = e.attr("id");
                e.addClass("opened"), e.find(".subNav").show()
            }
        }
        function t(e) {
            var t = $("#" + e),
                n = t.find(".subNav");
            t.addClass("opened"), n.slideToggle()
        }
        function n(e) {
            e.preventDefault();
            var t = $(this).parents("li");
            t.is(".opened") ? r() : (r(), t.addClass("opened").find(".subNav").slideDown())
        }
        function r() {
            var e = $(".subNav");
            e.slideUp().parents("li").removeClass("opened")
        }
        return {
            init: e,
            open: t
        }
    }(),
    Menu = function () {
        function t(t) {
            options = $.extend(e, t);
            var i = $(".menu-container");
            $menu = $(".menu"), $topNav = $("#topNav"), $topNav.find(".menu").each(function () {
                var e = $(this);
                e.parent().find(".menu-dropdown").length > 0 && e.append('<div class="menu-arrow"></div>')
            }), $menu.live("click", r), i.each(function () {
                var e = $(this).parents("#quickNav"),
                    t = e.length > 0 ? $(this).addClass("menu-type-quicknav") : $(this).addClass("menu-type-topnav");
                $(this).addClass(t).append('<div class="menu-top"></div>').insertBefore("#footer")
            }), i.find("form").live("submit", function (e) {
                e.preventDefault()
            }), i.find('li:not(".sub-menu-container ul li")').each(function () {
                $(this).find(".sub-menu-container").length ? (submenu = $(this).find(".sub-menu-container"), $(this).data("submenu", submenu), $(this).hoverIntent({
                    over: function () {
                        $(".sub-menu-container").hide(), offset = $(this).offset(), $(this).data("submenu").css({
                            top: offset.top,
                            left: offset.left + $(this).outerWidth()
                        }), $(this).data("submenu").fadeIn()
                    },
                    timeout: 500
                }), submenu.insertBefore("#footer")) : $(this).hoverIntent({
                    over: function () {
                        $(".sub-menu-container").hide()
                    },
                    timeout: 500
                })
            })
        }
        function n() {
            var e, t, n, r, o, u, a;
            e = $(this).find("a"), t = e.attr("href"), n = $(t), r = $(document).width(), n.is(":visible") || (modals = $(".menu-container.menu-type-quicknav").not(t), modals.fadeOut("medium", function () {}), form = modals.find("form"), form.length > 0 && form[0].reset(), $("#overlay").fadeOut("medium", function () {
                $(this).remove()
            })), o = e.offset(), u = o.left - 8, a = o.top + e.outerHeight() + 4;
            var f = r < o.left + n.outerWidth();
            r < 550 ? (n.css({
                left: "50%",
                top: a,
                "margin-left": "-" + n.outerWidth() / 2 + "px"
            }).addClass("middle"), $("body").append('<div id="overlay"></div>')) : f ? (u = o.left - n.outerWidth() + 45, u < 0 ? (n.css({
                left: "50%",
                top: a,
                "margin-left": "-" + n.outerWidth() / 2 + "px"
            }).addClass("middle"), $("body").append('<div id="overlay"></div>')) : n.css({
                left: u,
                top: a,
                "margin-left": 0
            }).addClass("right")) : n.css({
                left: u,
                top: a,
                "margin-left": 0
            }), n.show(), e.parent().find(".alert").fadeOut(), $("#overlay").bind("click", i), n.find(".menu-close").bind("click", s), $(document).bind("click.menu", i)
        }
        function r(e) {
            e.stopImmediatePropagation(), e.preventDefault();
            var t, n, r, a, f, l, c;
            t = $(this), n = t.attr("href"), r = $(n), a = $(document).width(), r.removeClass("middle right"), r.is(":visible") && o(), u(), f = t.offset(), l = f.left - 8, c = f.top + t.outerHeight() + 4;
            var h = a < f.left + r.outerWidth();
            a < 550 ? (r.css({
                left: "50%",
                top: c,
                "margin-left": "-" + r.outerWidth() / 2 + "px"
            }).addClass("middle"), $("body").append('<div id="overlay"></div>')) : h ? (l = f.left - r.outerWidth() + 45, l < 0 ? (r.css({
                left: "50%",
                top: c,
                "margin-left": "-" + r.outerWidth() / 2 + "px"
            }).addClass("middle"), $("body").append('<div id="overlay"></div>')) : r.css({
                left: l,
                top: c,
                "margin-left": 0
            }).addClass("right")) : r.css({
                left: l,
                top: c,
                "margin-left": 0
            }), r.show(), t.parent().find(".alert").fadeOut(), $("#overlay").bind("click", i), r.find(".menu-close").bind("click", s), $(document).bind("click.menu", i)
        }
        function i(e) {
            $(e.target).parents(".menu-container").length < 1 && !$(e.target).is(".menu") && $(e.target).parents(".menu").length < 1 && o()
        }
        function s(e) {
            e.preventDefault(), o()
        }
        function o() {
            var e, t;
            $("a:has(.hidden-menu)").not($(this)).css("opacity", 0), $(".sub-menu-container").fadeOut(), $(document).unbind("click.menu"), e = $(".menu-container:visible"), e.fadeOut("medium", function () {}), t = e.find("form"), t.length > 0 && t[0].reset(), $("#overlay").fadeOut("medium", function () {
                $(this).remove()
            })
        }
        function u() {
            $(".menu-container").hide(), $(document).unbind("click.menu")
        }
        var e = {
            outsideClose: !1
        };
        return {
            init: t,
            close: s
        }
    }();
document.createElement("canvas").getContext || function () {
    function f() {
        return this.context_ || (this.context_ = new F(this))
    }
    function p(e, t, n) {
        var r = c.call(arguments, 2);
        return function () {
            return e.apply(t, r.concat(c.call(arguments)))
        }
    }
    function d(e) {
        return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
    }
    function v(e) {
        e.namespaces.g_vml_ || e.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML"), e.namespaces.g_o_ || e.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
        if (!e.styleSheets.ex_canvas_) {
            var t = e.createStyleSheet();
            t.owningElement.id = "ex_canvas_", t.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"
        }
    }
    function g(e) {
        var t = e.srcElement;
        switch (e.propertyName) {
            case "width":
                t.getContext().clearRect(), t.style.width = t.attributes.width.nodeValue + "px", t.firstChild.style.width = t.clientWidth + "px";
                break;
            case "height":
                t.getContext().clearRect(), t.style.height = t.attributes.height.nodeValue + "px", t.firstChild.style.height = t.clientHeight + "px"
        }
    }
    function y(e) {
        var t = e.srcElement;
        t.firstChild && (t.firstChild.style.width = t.clientWidth + "px", t.firstChild.style.height = t.clientHeight + "px")
    }
    function S() {
        return [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
    }
    function x(e, t) {
        var n = S();
        for (var r = 0; r < 3; r++) for (var i = 0; i < 3; i++) {
            var s = 0;
            for (var o = 0; o < 3; o++) s += e[r][o] * t[o][i];
            n[r][i] = s
        }
        return n
    }
    function T(e, t) {
        t.fillStyle = e.fillStyle, t.lineCap = e.lineCap, t.lineJoin = e.lineJoin, t.lineWidth = e.lineWidth, t.miterLimit = e.miterLimit, t.shadowBlur = e.shadowBlur, t.shadowColor = e.shadowColor, t.shadowOffsetX = e.shadowOffsetX, t.shadowOffsetY = e.shadowOffsetY, t.strokeStyle = e.strokeStyle, t.globalAlpha = e.globalAlpha, t.font = e.font, t.textAlign = e.textAlign, t.textBaseline = e.textBaseline, t.arcScaleX_ = e.arcScaleX_, t.arcScaleY_ = e.arcScaleY_, t.lineScale_ = e.lineScale_
    }
    function C(e) {
        var t = e.indexOf("(", 3),
            n = e.indexOf(")", t + 1),
            r = e.substring(t + 1, n).split(",");
        return r.length == 4 && e.substr(3, 1) == "a" ? alpha = Number(r[3]) : r[3] = 1, r
    }
    function k(e) {
        return parseFloat(e) / 100
    }
    function L(e, t, n) {
        return Math.min(n, Math.max(t, e))
    }
    function A(e) {
        var t, n, r;
        h = parseFloat(e[0]) / 360 % 360, h < 0 && h++, s = L(k(e[1]), 0, 1), l = L(k(e[2]), 0, 1);
        if (s == 0) t = n = r = l;
        else {
            var i = l < .5 ? l * (1 + s) : l + s - l * s,
                o = 2 * l - i;
            t = O(o, i, h + 1 / 3), n = O(o, i, h), r = O(o, i, h - 1 / 3)
        }
        return "#" + b[Math.floor(t * 255)] + b[Math.floor(n * 255)] + b[Math.floor(r * 255)]
    }
    function O(e, t, n) {
        return n < 0 && n++, n > 1 && n--, 6 * n < 1 ? e + (t - e) * 6 * n : 2 * n < 1 ? t : 3 * n < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
    }
    function M(e) {
        var t, n = 1;
        e = String(e);
        if (e.charAt(0) == "#") t = e;
        else if (/^rgb/.test(e)) {
            var r = C(e),
                t = "#",
                i;
            for (var s = 0; s < 3; s++) r[s].indexOf("%") != -1 ? i = Math.floor(k(r[s]) * 255) : i = Number(r[s]), t += b[L(i, 0, 255)];
            n = r[3]
        } else if (/^hsl/.test(e)) {
            var r = C(e);
            t = A(r), n = r[3]
        } else t = N[e] || e;
        return {
            color: t,
            alpha: n
        }
    }
    function P(e) {
        if (D[e]) return D[e];
        var t = document.createElement("div"),
            n = t.style;
        try {
            n.font = e
        } catch (r) {}
        return D[e] = {
            style: n.fontStyle || _.style,
            variant: n.fontVariant || _.variant,
            weight: n.fontWeight || _.weight,
            size: n.fontSize || _.size,
            family: n.fontFamily || _.family
        }
    }
    function H(e, t) {
        var n = {};
        for (var r in e) n[r] = e[r];
        var i = parseFloat(t.currentStyle.fontSize),
            s = parseFloat(e.size);
        return typeof e.size == "number" ? n.size = e.size : e.size.indexOf("px") != -1 ? n.size = s : e.size.indexOf("em") != -1 ? n.size = i * s : e.size.indexOf("%") != -1 ? n.size = i / 100 * s : e.size.indexOf("pt") != -1 ? n.size = s / .75 : n.size = i, n.size *= .981, n
    }
    function B(e) {
        return e.style + " " + e.variant + " " + e.weight + " " + e.size + "px " + e.family
    }
    function j(e) {
        switch (e) {
            case "butt":
                return "flat";
            case "round":
                return "round";
            case "square":
            default:
                return "square"
        }
    }
    function F(e) {
        this.m_ = S(), this.mStack_ = [], this.aStack_ = [], this.currentPath_ = [], this.strokeStyle = "#000", this.fillStyle = "#000", this.lineWidth = 1, this.lineJoin = "miter", this.lineCap = "butt", this.miterLimit = u * 1, this.globalAlpha = 1, this.font = "10px sans-serif", this.textAlign = "left", this.textBaseline = "alphabetic", this.canvas = e;
        var t = e.ownerDocument.createElement("div");
        t.style.width = e.clientWidth + "px", t.style.height = e.clientHeight + "px", t.style.overflow = "hidden", t.style.position = "absolute", e.appendChild(t), this.element_ = t, this.arcScaleX_ = 1, this.arcScaleY_ = 1, this.lineScale_ = 1
    }
    function q(e, t, n, r) {
        e.currentPath_.push({
            type: "bezierCurveTo",
            cp1x: t.x,
            cp1y: t.y,
            cp2x: n.x,
            cp2y: n.y,
            x: r.x,
            y: r.y
        }), e.currentX_ = r.x, e.currentY_ = r.y
    }
    function R(e, t) {
        var n = M(e.strokeStyle),
            r = n.color,
            i = n.alpha * e.globalAlpha,
            s = e.lineScale_ * e.lineWidth;
        s < 1 && (i *= s), t.push("<g_vml_:stroke", ' opacity="', i, '"', ' joinstyle="', e.lineJoin, '"', ' miterlimit="', e.miterLimit, '"', ' endcap="', j(e.lineCap), '"', ' weight="', s, 'px"', ' color="', r, '" />')
    }
    function U(t, n, r, i) {
        var s = t.fillStyle,
            o = t.arcScaleX_,
            a = t.arcScaleY_,
            f = i.x - r.x,
            l = i.y - r.y;
        if (s instanceof X) {
            var c = 0,
                h = {
                    x: 0,
                    y: 0
                }, p = 0,
                d = 1;
            if (s.type_ == "gradient") {
                var v = s.x0_ / o,
                    m = s.y0_ / a,
                    g = s.x1_ / o,
                    y = s.y1_ / a,
                    b = t.getCoords_(v, m),
                    w = t.getCoords_(g, y),
                    E = w.x - b.x,
                    S = w.y - b.y;
                c = Math.atan2(E, S) * 180 / Math.PI, c < 0 && (c += 360), c < 1e-6 && (c = 0)
            } else {
                var b = t.getCoords_(s.x0_, s.y0_);
                h = {
                    x: (b.x - r.x) / f,
                    y: (b.y - r.y) / l
                }, f /= o * u, l /= a * u;
                var x = e.max(f, l);
                p = 2 * s.r0_ / x, d = 2 * s.r1_ / x - p
            }
            var T = s.colors_;
            T.sort(function (e, t) {
                return e.offset - t.offset
            });
            var N = T.length,
                C = T[0].color,
                k = T[N - 1].color,
                L = T[0].alpha * t.globalAlpha,
                A = T[N - 1].alpha * t.globalAlpha,
                O = [];
            for (var _ = 0; _ < N; _++) {
                var D = T[_];
                O.push(D.offset * d + p + " " + D.color)
            }
            n.push('<g_vml_:fill type="', s.type_, '"', ' method="none" focus="100%"', ' color="', C, '"', ' color2="', k, '"', ' colors="', O.join(","), '"', ' opacity="', A, '"', ' g_o_:opacity2="', L, '"', ' angle="', c, '"', ' focusposition="', h.x, ",", h.y, '" />')
        } else if (s instanceof V) {
            if (f && l) {
                var P = -r.x,
                    H = -r.y;
                n.push("<g_vml_:fill", ' position="', P / f * o * o, ",", H / l * a * a, '"', ' type="tile"', ' src="', s.src_, '" />')
            }
        } else {
            var B = M(t.fillStyle),
                j = B.color,
                F = B.alpha * t.globalAlpha;
            n.push('<g_vml_:fill color="', j, '" opacity="', F, '" />')
        }
    }
    function z(e) {
        return isFinite(e[0][0]) && isFinite(e[0][1]) && isFinite(e[1][0]) && isFinite(e[1][1]) && isFinite(e[2][0]) && isFinite(e[2][1])
    }
    function W(e, t, n) {
        if (!z(t)) return;
        e.m_ = t;
        if (n) {
            var r = t[0][0] * t[1][1] - t[0][1] * t[1][0];
            e.lineScale_ = o(i(r))
        }
    }
    function X(e) {
        this.type_ = e, this.x0_ = 0, this.y0_ = 0, this.r0_ = 0, this.x1_ = 0, this.y1_ = 0, this.r1_ = 0, this.colors_ = []
    }
    function V(e, t) {
        J(e);
        switch (t) {
            case "repeat":
            case null:
            case "":
                this.repetition_ = "repeat";
                break;
            case "repeat-x":
            case "repeat-y":
            case "no-repeat":
                this.repetition_ = t;
                break;
            default:
                $("SYNTAX_ERR")
        }
        this.src_ = e.src, this.width_ = e.width, this.height_ = e.height
    }
    function $(e) {
        throw new K(e)
    }
    function J(e) {
        (!e || e.nodeType != 1 || e.tagName != "IMG") && $("TYPE_MISMATCH_ERR"), e.readyState != "complete" && $("INVALID_STATE_ERR")
    }
    function K(e) {
        this.code = this[e], this.message = e + ": DOM Exception " + this.code
    }
    var e = Math,
        t = e.round,
        n = e.sin,
        r = e.cos,
        i = e.abs,
        o = e.sqrt,
        u = 10,
        a = u / 2,
        c = Array.prototype.slice;
    v(document);
    var m = {
        init: function (e) {
            if (/MSIE/.test(navigator.userAgent) && !window.opera) {
                var t = e || document;
                t.createElement("canvas"), t.attachEvent("onreadystatechange", p(this.init_, this, t))
            }
        },
        init_: function (e) {
            var t = e.getElementsByTagName("canvas");
            for (var n = 0; n < t.length; n++) this.initElement(t[n])
        },
        initElement: function (e) {
            if (!e.getContext) {
                e.getContext = f, v(e.ownerDocument), e.innerHTML = "", e.attachEvent("onpropertychange", g), e.attachEvent("onresize", y);
                var t = e.attributes;
                t.width && t.width.specified ? e.style.width = t.width.nodeValue + "px" : e.width = e.clientWidth, t.height && t.height.specified ? e.style.height = t.height.nodeValue + "px" : e.height = e.clientHeight
            }
            return e
        }
    };
    m.init();
    var b = [];
    for (var w = 0; w < 16; w++) for (var E = 0; E < 16; E++) b[w * 16 + E] = w.toString(16) + E.toString(16);
    var N = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        grey: "#808080",
        greenyellow: "#ADFF2F",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        oldlace: "#FDF5E6",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        whitesmoke: "#F5F5F5",
        yellowgreen: "#9ACD32"
    }, _ = {
        style: "normal",
        variant: "normal",
        weight: "normal",
        size: 10,
        family: "sans-serif"
    }, D = {}, I = F.prototype;
    I.clearRect = function () {
        this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0), this.textMeasureEl_ = null), this.element_.innerHTML = ""
    }, I.beginPath = function () {
        this.currentPath_ = []
    }, I.moveTo = function (e, t) {
        var n = this.getCoords_(e, t);
        this.currentPath_.push({
            type: "moveTo",
            x: n.x,
            y: n.y
        }), this.currentX_ = n.x, this.currentY_ = n.y
    }, I.lineTo = function (e, t) {
        var n = this.getCoords_(e, t);
        this.currentPath_.push({
            type: "lineTo",
            x: n.x,
            y: n.y
        }), this.currentX_ = n.x, this.currentY_ = n.y
    }, I.bezierCurveTo = function (e, t, n, r, i, s) {
        var o = this.getCoords_(i, s),
            u = this.getCoords_(e, t),
            a = this.getCoords_(n, r);
        q(this, u, a, o)
    }, I.quadraticCurveTo = function (e, t, n, r) {
        var i = this.getCoords_(e, t),
            s = this.getCoords_(n, r),
            o = {
                x: this.currentX_ + 2 / 3 * (i.x - this.currentX_),
                y: this.currentY_ + 2 / 3 * (i.y - this.currentY_)
            }, u = {
                x: o.x + (s.x - this.currentX_) / 3,
                y: o.y + (s.y - this.currentY_) / 3
            };
        q(this, o, u, s)
    }, I.arc = function (e, t, i, s, o, f) {
        i *= u;
        var l = f ? "at" : "wa",
            c = e + r(s) * i - a,
            h = t + n(s) * i - a,
            p = e + r(o) * i - a,
            d = t + n(o) * i - a;
        c == p && !f && (c += .125);
        var v = this.getCoords_(e, t),
            m = this.getCoords_(c, h),
            g = this.getCoords_(p, d);
        this.currentPath_.push({
            type: l,
            x: v.x,
            y: v.y,
            radius: i,
            xStart: m.x,
            yStart: m.y,
            xEnd: g.x,
            yEnd: g.y
        })
    }, I.rect = function (e, t, n, r) {
        this.moveTo(e, t), this.lineTo(e + n, t), this.lineTo(e + n, t + r), this.lineTo(e, t + r), this.closePath()
    }, I.strokeRect = function (e, t, n, r) {
        var i = this.currentPath_;
        this.beginPath(), this.moveTo(e, t), this.lineTo(e + n, t), this.lineTo(e + n, t + r), this.lineTo(e, t + r), this.closePath(), this.stroke(), this.currentPath_ = i
    }, I.fillRect = function (e, t, n, r) {
        var i = this.currentPath_;
        this.beginPath(), this.moveTo(e, t), this.lineTo(e + n, t), this.lineTo(e + n, t + r), this.lineTo(e, t + r), this.closePath(), this.fill(), this.currentPath_ = i
    }, I.createLinearGradient = function (e, t, n, r) {
        var i = new X("gradient");
        return i.x0_ = e, i.y0_ = t, i.x1_ = n, i.y1_ = r, i
    }, I.createRadialGradient = function (e, t, n, r, i, s) {
        var o = new X("gradientradial");
        return o.x0_ = e, o.y0_ = t, o.r0_ = n, o.x1_ = r, o.y1_ = i, o.r1_ = s, o
    }, I.drawImage = function (n, r) {
        var i, s, o, a, f, l, c, h, p = n.runtimeStyle.width,
            d = n.runtimeStyle.height;
        n.runtimeStyle.width = "auto", n.runtimeStyle.height = "auto";
        var v = n.width,
            m = n.height;
        n.runtimeStyle.width = p, n.runtimeStyle.height = d;
        if (arguments.length == 3) i = arguments[1], s = arguments[2], f = l = 0, c = o = v, h = a = m;
        else if (arguments.length == 5) i = arguments[1], s = arguments[2], o = arguments[3], a = arguments[4], f = l = 0, c = v, h = m;
        else {
            if (arguments.length != 9) throw Error("Invalid number of arguments");
            f = arguments[1], l = arguments[2], c = arguments[3], h = arguments[4], i = arguments[5], s = arguments[6], o = arguments[7], a = arguments[8]
        }
        var g = this.getCoords_(i, s),
            y = c / 2,
            b = h / 2,
            w = [],
            E = 10,
            S = 10;
        w.push(" <g_vml_:group", ' coordsize="', u * E, ",", u * S, '"', ' coordorigin="0,0"', ' style="width:', E, "px;height:", S, "px;position:absolute;");
        if (this.m_[0][0] != 1 || this.m_[0][1] || this.m_[1][1] != 1 || this.m_[1][0]) {
            var x = [];
            x.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", t(g.x / u), ",", "Dy=", t(g.y / u), "");
            var T = g,
                N = this.getCoords_(i + o, s),
                C = this.getCoords_(i, s + a),
                k = this.getCoords_(i + o, s + a);
            T.x = e.max(T.x, N.x, C.x, k.x), T.y = e.max(T.y, N.y, C.y, k.y), w.push("padding:0 ", t(T.x / u), "px ", t(T.y / u), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", x.join(""), ", sizingmethod='clip');")
        } else w.push("top:", t(g.y / u), "px;left:", t(g.x / u), "px;");
        w.push(' ">', '<g_vml_:image src="', n.src, '"', ' style="width:', u * o, "px;", " height:", u * a, 'px"', ' cropleft="', f / v, '"', ' croptop="', l / m, '"', ' cropright="', (v - f - c) / v, '"', ' cropbottom="', (m - l - h) / m, '"', " />", "</g_vml_:group>"), this.element_.insertAdjacentHTML("BeforeEnd", w.join(""))
    }, I.stroke = function (e) {
        var n = 10,
            r = 10,
            i = 5e3,
            s = {
                x: null,
                y: null
            }, o = {
                x: null,
                y: null
            };
        for (var a = 0; a < this.currentPath_.length; a += i) {
            var f = [],
                l = !1;
            f.push("<g_vml_:shape", ' filled="', !! e, '"', ' style="position:absolute;width:', n, "px;height:", r, 'px;"', ' coordorigin="0,0"', ' coordsize="', u * n, ",", u * r, '"', ' stroked="', !e, '"', ' path="');
            var c = !1;
            for (var h = a; h < Math.min(a + i, this.currentPath_.length); h++) {
                h % i == 0 && h > 0 && f.push(" m ", t(this.currentPath_[h - 1].x), ",", t(this.currentPath_[h - 1].y));
                var p = this.currentPath_[h],
                    d;
                switch (p.type) {
                    case "moveTo":
                        d = p, f.push(" m ", t(p.x), ",", t(p.y));
                        break;
                    case "lineTo":
                        f.push(" l ", t(p.x), ",", t(p.y));
                        break;
                    case "close":
                        f.push(" x "), p = null;
                        break;
                    case "bezierCurveTo":
                        f.push(" c ", t(p.cp1x), ",", t(p.cp1y), ",", t(p.cp2x), ",", t(p.cp2y), ",", t(p.x), ",", t(p.y));
                        break;
                    case "at":
                    case "wa":
                        f.push(" ", p.type, " ", t(p.x - this.arcScaleX_ * p.radius), ",", t(p.y - this.arcScaleY_ * p.radius), " ", t(p.x + this.arcScaleX_ * p.radius), ",", t(p.y + this.arcScaleY_ * p.radius), " ", t(p.xStart), ",", t(p.yStart), " ", t(p.xEnd), ",", t(p.yEnd))
                }
                if (p) {
                    if (s.x == null || p.x < s.x) s.x = p.x;
                    if (o.x == null || p.x > o.x) o.x = p.x;
                    if (s.y == null || p.y < s.y) s.y = p.y;
                    if (o.y == null || p.y > o.y) o.y = p.y
                }
            }
            f.push(' ">'), e ? U(this, f, s, o) : R(this, f), f.push("</g_vml_:shape>"), this.element_.insertAdjacentHTML("beforeEnd", f.join(""))
        }
    }, I.fill = function () {
        this.stroke(!0)
    }, I.closePath = function () {
        this.currentPath_.push({
            type: "close"
        })
    }, I.getCoords_ = function (e, t) {
        var n = this.m_;
        return {
            x: u * (e * n[0][0] + t * n[1][0] + n[2][0]) - a,
            y: u * (e * n[0][1] + t * n[1][1] + n[2][1]) - a
        }
    }, I.save = function () {
        var e = {};
        T(this, e), this.aStack_.push(e), this.mStack_.push(this.m_), this.m_ = x(S(), this.m_)
    }, I.restore = function () {
        this.aStack_.length && (T(this.aStack_.pop(), this), this.m_ = this.mStack_.pop())
    }, I.translate = function (e, t) {
        var n = [
            [1, 0, 0],
            [0, 1, 0],
            [e, t, 1]
        ];
        W(this, x(n, this.m_), !1)
    }, I.rotate = function (e) {
        var t = r(e),
            i = n(e),
            s = [
                [t, i, 0],
                [-i, t, 0],
                [0, 0, 1]
            ];
        W(this, x(s, this.m_), !1)
    }, I.scale = function (e, t) {
        this.arcScaleX_ *= e, this.arcScaleY_ *= t;
        var n = [
            [e, 0, 0],
            [0, t, 0],
            [0, 0, 1]
        ];
        W(this, x(n, this.m_), !0)
    }, I.transform = function (e, t, n, r, i, s) {
        var o = [
            [e, t, 0],
            [n, r, 0],
            [i, s, 1]
        ];
        W(this, x(o, this.m_), !0)
    }, I.setTransform = function (e, t, n, r, i, s) {
        var o = [
            [e, t, 0],
            [n, r, 0],
            [i, s, 1]
        ];
        W(this, o, !0)
    }, I.drawText_ = function (e, n, r, i, s) {
        var o = this.m_,
            a = 1e3,
            f = 0,
            l = a,
            c = {
                x: 0,
                y: 0
            }, h = [],
            p = H(P(this.font), this.element_),
            v = B(p),
            m = this.element_.currentStyle,
            g = this.textAlign.toLowerCase();
        switch (g) {
            case "left":
            case "center":
            case "right":
                break;
            case "end":
                g = m.direction == "ltr" ? "right" : "left";
                break;
            case "start":
                g = m.direction == "rtl" ? "right" : "left";
                break;
            default:
                g = "left"
        }
        switch (this.textBaseline) {
            case "hanging":
            case "top":
                c.y = p.size / 1.75;
                break;
            case "middle":
                break;
            default:
            case null:
            case "alphabetic":
            case "ideographic":
            case "bottom":
                c.y = -p.size / 2.25
        }
        switch (g) {
            case "right":
                f = a, l = .05;
                break;
            case "center":
                f = l = a / 2
        }
        var y = this.getCoords_(n + c.x, r + c.y);
        h.push('<g_vml_:line from="', -f, ' 0" to="', l, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !s, '" stroked="', !! s, '" style="position:absolute;width:1px;height:1px;">'), s ? R(this, h) : U(this, h, {
            x: -f,
            y: 0
        }, {
            x: l,
            y: p.size
        });
        var b = o[0][0].toFixed(3) + "," + o[1][0].toFixed(3) + "," + o[0][1].toFixed(3) + "," + o[1][1].toFixed(3) + ",0,0",
            w = t(y.x / u) + "," + t(y.y / u);
        h.push('<g_vml_:skew on="t" matrix="', b, '" ', ' offset="', w, '" origin="', f, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', d(e), '" style="v-text-align:', g, ";font:", d(v), '" /></g_vml_:line>'), this.element_.insertAdjacentHTML("beforeEnd", h.join(""))
    }, I.fillText = function (e, t, n, r) {
        this.drawText_(e, t, n, r, !1)
    }, I.strokeText = function (e, t, n, r) {
        this.drawText_(e, t, n, r, !0)
    }, I.measureText = function (e) {
        if (!this.textMeasureEl_) {
            var t = '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>';
            this.element_.insertAdjacentHTML("beforeEnd", t), this.textMeasureEl_ = this.element_.lastChild
        }
        var n = this.element_.ownerDocument;
        return this.textMeasureEl_.innerHTML = "", this.textMeasureEl_.style.font = this.font, this.textMeasureEl_.appendChild(n.createTextNode(e)), {
            width: this.textMeasureEl_.offsetWidth
        }
    }, I.clip = function () {}, I.arcTo = function () {}, I.createPattern = function (e, t) {
        return new V(e, t)
    }, X.prototype.addColorStop = function (e, t) {
        t = M(t), this.colors_.push({
            offset: e,
            color: t.color,
            alpha: t.alpha
        })
    };
    var Q = K.prototype = new Error;
    Q.INDEX_SIZE_ERR = 1, Q.DOMSTRING_SIZE_ERR = 2, Q.HIERARCHY_REQUEST_ERR = 3, Q.WRONG_DOCUMENT_ERR = 4, Q.INVALID_CHARACTER_ERR = 5, Q.NO_DATA_ALLOWED_ERR = 6, Q.NO_MODIFICATION_ALLOWED_ERR = 7, Q.NOT_FOUND_ERR = 8, Q.NOT_SUPPORTED_ERR = 9, Q.INUSE_ATTRIBUTE_ERR = 10, Q.INVALID_STATE_ERR = 11, Q.SYNTAX_ERR = 12, Q.INVALID_MODIFICATION_ERR = 13, Q.NAMESPACE_ERR = 14, Q.INVALID_ACCESS_ERR = 15, Q.VALIDATION_ERR = 16, Q.TYPE_MISMATCH_ERR = 17, G_vmlCanvasManager = m, CanvasRenderingContext2D = F, CanvasGradient = X, CanvasPattern = V, DOMException = K
}(),
function (e) {
    e.fn.visualize = function (t, n) {
        return e(this).each(function () {
            var r = e.extend({
                type: "bar",
                width: e(this).width(),
                height: e(this).height(),
                appendTitle: !0,
                title: null,
                appendKey: !0,
                colors: ["#ae432e", "#77ab13", "#058dc7", "#ef561a", "#8d10ee", "#5a3b16", "#26a4ed", "#f45a90", "#e9e744"],
                textColors: [],
                parseDirection: "x",
                pieMargin: 10,
                pieLabelsAsPercent: !0,
                pieLabelPos: "inside",
                lineWeight: 4,
                lineDots: !1,
                dotInnerColor: "#ffffff",
                lineMargin: t.lineDots ? 15 : 0,
                barGroupMargin: 10,
                chartId: "",
                xLabelParser: null,
                valueParser: null,
                chartId: "",
                chartClass: "",
                barMargin: 1,
                yLabelInterval: 30,
                interaction: !1
            }, t);
            r.width = parseFloat(r.width), r.height = parseFloat(r.height), r.type != "line" && r.type != "area" && (r.lineMargin = 0);
            var i = e(this),
                s = {}, o = r.colors,
                u = r.textColors,
                a = function (t) {
                    var n = [];
                    return t == "x" ? i.find("thead tr").each(function (t) {
                        e(this).find("th").each(function (r) {
                            n[r] || (n[r] = []), n[r][t] = e(this).text()
                        })
                    }) : i.find("tbody tr").each(function (t) {
                        e(this).find("th").each(function (r) {
                            n[t] || (n[t] = []), n[t][r] = e(this).text()
                        })
                    }), n
                }, f = r.valueParser || parseFloat,
                l = s.dataGroups = [];
            if (r.parseDirection == "x") i.find("tbody tr").each(function (t, n) {
                l[t] = {}, l[t].points = [], l[t].color = o[t], u[t] && (l[t].textColor = u[t]), e(n).find("td").each(function (n, r) {
                    l[t].points.push({
                        value: f(e(r).text()),
                        elem: r,
                        tableCords: [t, n]
                    })
                })
            });
            else {
                var c = i.find("tbody tr:eq(0) td").size();
                for (var h = 0; h < c; h++) l[h] = {}, l[h].points = [], l[h].color = o[h], u[h] && (l[h].textColor = u[h]), i.find("tbody tr").each(function (t) {
                    l[h].points.push({
                        value: e(this).find("td").eq(h).text() * 1,
                        elem: this,
                        tableCords: [h, t]
                    })
                })
            }
            var p = s.allItems = [];
            e(l).each(function (t, n) {
                var r = 0;
                e.each(n.points, function (e, t) {
                    p.push(t), r += t.value
                }), n.groupTotal = r
            }), s.dataSum = 0, s.topValue = 0, s.bottomValue = Infinity, e.each(p, function (e, t) {
                s.dataSum += f(t.value), f(t.value, 10) > s.topValue && (s.topValue = f(t.value, 10)), t.value < s.bottomValue && (s.bottomValue = f(t.value))
            });
            var d = s.dataSum,
                v = s.topValue,
                m = s.bottomValue,
                g = s.xAllLabels = a(r.parseDirection),
                y = s.yAllLabels = a(r.parseDirection === "x" ? "y" : "x"),
                b = s.xLabels = [];
            e.each(s.xAllLabels, function (e, t) {
                s.xLabels.push(t[0])
            });
            var w = s.totalYRange = s.topValue - s.bottomValue,
                E = s.zeroLocX = 0;
            if (e.isFunction(r.xLabelParser)) {
                var S = null,
                    x = null;
                e.each(b, function (e, t) {
                    t = b[e] = r.xLabelParser(t), e === 0 && (S = t, x = t), t > S && (S = t), t < x && (x = t)
                });
                var T = s.totalXRange = S - x,
                    N = s.xScale = (r.width - 2 * r.lineMargin) / T,
                    C = 0;
                if (r.lineMargin) var C = -2 * N - r.lineMargin;
                E = s.zeroLocX = x + r.lineMargin, s.xBottomValue = x, s.xTopValue = S, s.totalXRange = T
            }
            var k = s.yScale = (r.height - 2 * r.lineMargin) / w,
                L = s.zeroLocY = (r.height - 2 * r.lineMargin) * (s.topValue / s.totalYRange) + r.lineMargin,
                A = s.yLabels = [],
                O = Math.floor((r.height - 2 * r.lineMargin) / 30),
                M = s.totalYRange / O;
            M = Math.round(parseFloat(M) / 5) * 5, M = Math.max(M, 1);
            for (var _ = Math.round(parseInt(s.bottomValue) / 5) * 5; _ <= s.topValue + M; _ += M) A.push(_);
            A[A.length - 1] > s.topValue + M ? A.pop() : A[A.length - 1] <= s.topValue - 10 && A.push(s.topValue), e.each(l, function (t, n) {
                n.yLabels = s.yAllLabels[t], e.each(n.points, function (e, r) {
                    r.zeroLocY = s.zeroLocY, r.zeroLocX = s.zeroLocX, r.xLabels = s.xAllLabels[e], r.yLabels = s.yAllLabels[t], r.color = n.color
                })
            });
            try {
                console.log(s)
            } catch (D) {}
            var P = {};
            P.pie = {
                interactionPoints: l,
                setup: function () {
                    P.pie.draw(!0)
                },
                draw: function (t) {
                    var n = Math.round(B.width() / 2),
                        i = Math.round(B.height() / 2),
                        o = i - r.pieMargin,
                        u = 0;
                    if (t) {
                        F.addClass("visualize-pie"), r.pieLabelPos == "outside" && F.addClass("visualize-pie-outside");
                        var a = function (e) {
                            return Math.PI / 180 * e
                        }, f = e('<ul class="visualize-labels"></ul>').insertAfter(B)
                    }
                    e.each(l, function (a, c) {
                        var h = c.groupTotal / d;
                        if (h <= 0 || isNaN(h)) return;
                        J.beginPath(), J.moveTo(n, i), J.arc(n, i, o, u * Math.PI * 2 - Math.PI * .5, (u + h) * Math.PI * 2 - Math.PI * .5, !1), J.lineTo(n, i), J.closePath(), J.fillStyle = l[a].color, J.fill();
                        if (t) {
                            var p = u + h / 2,
                                v = r.pieLabelPos == "inside" ? o / 1.5 : o + o / 5,
                                m = Math.round(n + Math.sin(p * Math.PI * 2) * v),
                                g = Math.round(i - Math.cos(p * Math.PI * 2) * v),
                                y = m > n ? "right" : "left",
                                b = g > i ? "bottom" : "top",
                                w = parseFloat((h * 100).toFixed(2));
                            c.canvasCords = [m, g], c.zeroLocY = s.zeroLocY = 0, c.zeroLocX = s.zeroLocX = 0, c.value = c.groupTotal;
                            if (w) {
                                var E = r.pieLabelsAsPercent ? w + "%" : c.groupTotal,
                                    S = e('<span class="visualize-label">' + E + "</span>").css(y, 0).css(b, 0);
                                if (S) var x = e('<li class="visualize-label-pos"></li>').appendTo(f).css({
                                    left: m,
                                    top: g
                                }).append(S);
                                S.css("font-size", o / 8).css("margin-" + y, -S.width() / 2).css("margin-" + b, -S.outerHeight() / 2), l[a].textColor && S.css("color", l[a].textColor)
                            }
                        }
                        u += h
                    })
                }
            },
            function () {
                var t, n = function (e, t, n, r, i) {
                    e.moveTo(t, n), e.beginPath(), e.arc(t, n, i / 2, 0, 2 * Math.PI, !1), e.closePath(), e.fillStyle = r, e.fill()
                };
                P.line = {
                    interactionPoints: p,
                    setup: function (n) {
                        n ? F.addClass("visualize-area") : F.addClass("visualize-line");
                        var i = e('<ul class="visualize-labels-x"></ul>').width(B.width()).height(B.height()).insertBefore(B);
                        r.customXLabels ? r.customXLabels(s, i) : (t = (B.width() - 2 * r.lineMargin) / (b.length - 1), e.each(b, function (n) {
                            var s = e("<li><span>" + this + "</span></li>").prepend('<span class="line" />').css("left", r.lineMargin + t * n).appendTo(i),
                                o = s.find("span:not(.line)"),
                                u = o.width() / -2;
                            n == 0 ? u = 0 : n == b.length - 1 && (u = -o.width()), o.css("margin-left", u).addClass("label")
                        }));
                        var o = (B.height() - 2 * r.lineMargin) / (A.length - 1),
                            u = e('<ul class="visualize-labels-y"></ul>').width(B.width()).height(B.height()).insertBefore(I);
                        e.each(A, function (t) {
                            var n = Math.floor(this),
                                i = (n - m) * k + r.lineMargin;
                            if (i >= r.height - 1 || i < 0) return;
                            var s = e("<li><span>" + n + "</span></li>").css("bottom", i);
                            Math.abs(i) < r.height - 1 && s.prepend('<span class="line"  />'), s.prependTo(u);
                            var o = s.find("span:not(.line)"),
                                a = o.height() / -2;
                            r.lineMargin || (t == 0 ? a = -o.height() : t == A.length - 1 && (a = 0)), o.css("margin-top", a).addClass("label")
                        }), J.translate(E, L), P.line.draw(n)
                    },
                    draw: function (o) {
                        J.clearRect(-E, -L, r.width, r.height);
                        var u;
                        e.each(l, function (n, i) {
                            u = r.lineMargin, e.each(i.points, function (e, n) {
                                r.xLabelParser ? n.canvasCords = [(b[e] - E) * N - x, -(n.value * k)] : n.canvasCords = [u, -(n.value * k)], r.lineDots && (n.dotSize = r.dotSize || r.lineWeight * Math.PI, n.dotInnerSize = r.dotInnerSize || r.lineWeight * Math.PI / 2, r.lineDots == "double" && (n.innerColor = r.dotInnerColor)), u += t
                            })
                        }), i.trigger("vizualizeBeforeDraw", {
                            options: r,
                            table: i,
                            canvasContain: F,
                            tableData: s
                        }), e.each(l, function (t) {
                            J.beginPath(), J.lineWidth = r.lineWeight, J.lineJoin = "round", e.each(this.points, function (e) {
                                var t = this.canvasCords;
                                e == 0 && J.moveTo(t[0], t[1]), J.lineTo(t[0], t[1])
                            }), J.strokeStyle = this.color, J.stroke();
                            if (o) {
                                var n = this.points[this.points.length - 1].canvasCords[0];
                                isFinite(n) && J.lineTo(n, 0), J.lineTo(r.lineMargin, 0), J.closePath(), J.fillStyle = this.color, J.globalAlpha = .3, J.fill(), J.globalAlpha = 1
                            } else J.closePath()
                        }), r.lineDots && e.each(l, function (t) {
                            e.each(this.points, function (e) {
                                n(J, this.canvasCords[0], this.canvasCords[1], this.color, this.dotSize), r.lineDots === "double" && n(J, this.canvasCords[0], this.canvasCords[1], this.innerColor, this.dotInnerSize)
                            })
                        })
                    }
                }
            }(), P.area = {
                setup: function () {
                    P.line.setup(!0)
                },
                draw: P.line.draw
            },
            function () {
                var t, n;
                P.bar = {
                    setup: function () {
                        t = r.barDirection == "horizontal", F.addClass("visualize-bar"), n = t ? A : b;
                        var i = B.width() / (n.length - (t ? 1 : 0)),
                            s = e('<ul class="visualize-labels-x"></ul>').width(B.width()).height(B.height()).insertBefore(B);
                        e.each(n, function (n) {
                            var r = e('<li><span class="label">' + this + "</span></li>").prepend('<span class="line" />').css("left", i * n).width(i).appendTo(s);
                            if (t) {
                                var o = r.find("span.label");
                                o.css("margin-left", -o.width() / 2)
                            }
                        });
                        var o = t ? b : A,
                            u = B.height() / (o.length - (t ? 0 : 1)),
                            a = e('<ul class="visualize-labels-y"></ul>').width(B.width()).height(B.height()).insertBefore(B);
                        e.each(o, function (n) {
                            var r = e("<li><span>" + this + "</span></li>").prependTo(a),
                                i = r.find("span:not(.line)").addClass("label");
                            if (t) {
                                i.css({
                                    "min-height": u,
                                    "max-height": u + 1,
                                    "vertical-align": "middle"
                                }), r.css({
                                    top: u * n,
                                    "min-height": u
                                });
                                var s = i[0].getClientRects()[0];
                                s.bottom - s.top == u ? i.css("line-height", parseInt(u) + "px") : i.css("overflow", "hidden")
                            } else r.css("bottom", u * n).prepend('<span class="line" />'), i.css("margin-top", -i.height() / 2)
                        }), P.bar.draw()
                    },
                    draw: function () {
                        t ? J.rotate(Math.PI / 2) : J.translate(0, L);
                        if (w <= 0) return;
                        var e = (t ? B.width() : B.height()) / w,
                            i = t ? B.height() / b.length : B.width() / n.length,
                            s = (i - r.barGroupMargin * 2) / l.length;
                        for (var o = 0; o < l.length; o++) {
                            J.beginPath();
                            var u = s - r.barMargin * 2;
                            J.lineWidth = u;
                            var a = l[o].points,
                                f = 0;
                            for (var c = 0; c < a.length; c++) {
                                if (a[c].value != 0) {
                                    var h = f - r.barGroupMargin + o * s + s / 2;
                                    h += r.barGroupMargin * 2, J.moveTo(h, 0), J.lineTo(h, Math.round(-a[c].value * e))
                                }
                                f += i
                            }
                            J.strokeStyle = l[o].color, J.stroke(), J.closePath()
                        }
                    }
                }
            }();
            var H = document.createElement("canvas"),
                B = e(H).attr({
                    height: r.height,
                    width: r.width
                }),
                j = r.title || i.find("caption").text(),
                F = (n || e("<div " + (r.chartId ? 'id="' + r.chartId + '" ' : "") + 'class="visualize ' + r.chartClass + '" role="img" aria-label="Chart representing data from the table: ' + j + '" />')).height(r.height).width(r.width),
                I = e('<div class="visualize-scroller"></div>').appendTo(F).append(B);
            if (r.appendTitle || r.appendKey) var q = e('<div class="visualize-info"></div>').appendTo(F);
            r.appendTitle && e('<div class="visualize-title">' + j + "</div>").appendTo(q);
            if (r.appendKey) {
                var R = e('<ul class="visualize-key"></ul>');
                e.each(y, function (t, n) {
                    e('<li><span class="visualize-key-color" style="background: ' + l[t].color + '"></span><span class="visualize-key-label">' + n + "</span></li>").appendTo(R)
                }), R.appendTo(q)
            }
            if (r.interaction) {
                var U = e('<div class="visualize-interaction-tracker"/>').css({
                    height: r.height + "px",
                    width: r.width + "px",
                    position: "relative",
                    "z-index": 200
                }).insertAfter(B),
                    z = function (t, n) {
                        var n = e.extend({
                            canvasContain: F,
                            tableData: s
                        }, n);
                        i.trigger("vizualize" + t, n)
                    }, W = !1,
                    X = !1,
                    V = !1;
                U.mousemove(function (t) {
                    var n, i, s, o, u, a, f, l, c, h, p, d, v, m, g = t.originalEvent;
                    n = g.layerX || g.offsetX || 0, i = g.layerY || g.offsetY || 0, m = !1, v = V ? 3e4 : r.type == "pie" ? (Math.round(B.height() / 2) - r.pieMargin) / 3 : r.lineWeight * 4, e.each(P[r.type].interactionPoints, function (e, t) {
                        s = t.canvasCords[0] + E, o = t.canvasCords[1] + (r.type == "pie" ? 0 : L), a = Math.sqrt((s - n) * (s - n) + (o - i) * (o - i)), a < v && (m = t, v = a)
                    }), r.multiHover && m && (n = m.canvasCords[0] + E, i = m.canvasCords[1] + (r.type == "pie" ? 0 : L), m = [m], e.each(P[r.type].interactionPoints, function (e, t) {
                        if (t == m[0]) return;
                        s = t.canvasCords[0] + E, o = t.canvasCords[1] + L, a = Math.sqrt((s - n) * (s - n) + (o - i) * (o - i)), a <= r.multiHover && m.push(t)
                    })), W = m, W != X && (W && (X && z("Out", {
                        point: X
                    }), z("Over", {
                        point: W
                    }), X = W), X && !W && (z("Out", {
                        point: X
                    }), X = !1), V = !0)
                }), U.mouseleave(function () {
                    z("Out", {
                        point: X,
                        mouseOutGraph: !0
                    }), W = X = !1
                })
            }
            n || F.insertAfter(this), typeof G_vmlCanvasManager != "undefined" && (G_vmlCanvasManager.init(), G_vmlCanvasManager.initElement(B[0]));
            var J = B[0].getContext("2d");
            I.scrollLeft(r.width - I.width()), e.each(e.visualizePlugins, function (e, t) {
                t.call(i, r, s)
            }), P[r.type].setup(), n || (i.bind("visualizeRefresh", function () {
                i.visualize(r, e(this).empty())
            }), i.bind("visualizeRedraw", function () {
                P[r.type].draw()
            }))
        }).next()
    }, e.visualizePlugins = []
}(jQuery),
function (e) {
    e.visualizePlugins.push(function (n, r) {
        var i = e.extend({
            tooltip: !1,
            tooltipalign: "auto",
            tooltipvalign: "top",
            tooltipclass: "visualize-tooltip",
            tooltiphtml: function (e) {
                if (n.multiHover) {
                    var t = "";
                    for (var r = 0; r < e.point.length; r++) t += "<p>" + e.point[r].value + " - " + e.point[r].yLabels[0] + "</p>";
                    return t
                }
                return "<p>" + e.point.value + " - " + e.point.yLabels[0] + "</p>"
            },
            delay: !1
        }, n);
        if (!i.tooltip) return;
        var s = e(this),
            o = s.next(),
            u = o.find(".visualize-scroller"),
            a = u.width(),
            f = o.find(".visualize-interaction-tracker");
        f.css({
            backgroundColor: "white",
            opacity: 0,
            zIndex: 100
        });
        var l = e('<div class="' + i.tooltipclass + '"/>').css({
            position: "absolute",
            display: "none",
            zIndex: 90
        }).insertAfter(u.find("canvas")),
            c = !0;
        typeof G_vmlCanvasManager != "undefined" && (u.css({
            position: "absolute"
        }), f.css({
            marginTop: "-" + i.height + "px"
        })), s.bind("vizualizeOver", function (n, r) {
            if (r.canvasContain.get(0) != o.get(0)) return;
            if (i.multiHover) var s = r.point[0].canvasCords;
            else var s = r.point.canvasCords;
            var f, h, p, d, v, m, g = Math.round(s[0] + r.tableData.zeroLocX),
                y = Math.round(s[1] + r.tableData.zeroLocY);
            if (i.tooltipalign == "left" || i.tooltipalign == "auto" && g - u.scrollLeft() <= a / 2) {
                !e.browser.msie || e.browser.version != 7 && e.browser.version != 6 ? c = !0 : c = !1, f = g - (c ? u.scrollLeft() : 0);
                if (g - u.scrollLeft() < 0) return;
                f += "px", h = "", clasAdd = "tooltipleft", d = "tooltipright"
            } else {
                e.browser.msie && e.browser.version == 7 ? c = !1 : c = !0, h = Math.abs(g - i.width) - (i.width - (c ? u.scrollLeft() : 0) - a);
                if (Math.abs(g - i.width) - (i.width - u.scrollLeft() - a) < 0) return;
                f = "", h += "px", clasAdd = "tooltipright", d = "tooltipleft"
            }
            l.addClass(clasAdd).removeClass(d).html(i.tooltiphtml(r)).css({
                display: "block",
                top: y + "px",
                left: f,
                right: h
            })
        }), s.bind("vizualizeOut", function (t, n) {
            l.css({
                display: "none"
            })
        })
    })
}(jQuery),
function (i, za, p) {
    i.fn.dataTableSettings = [];
    var D = i.fn.dataTableSettings;
    i.fn.dataTableExt = {};
    var n = i.fn.dataTableExt;
    n.sVersion = "1.8.2", n.sErrMode = "alert", n.iApiIndex = 0, n.oApi = {}, n.afnFiltering = [], n.aoFeatures = [], n.ofnSearch = {}, n.afnSortData = [], n.oStdClasses = {
        sPagePrevEnabled: "paginate_enabled_previous",
        sPagePrevDisabled: "paginate_disabled_previous",
        sPageNextEnabled: "paginate_enabled_next",
        sPageNextDisabled: "paginate_disabled_next",
        sPageJUINext: "",
        sPageJUIPrev: "",
        sPageButton: "paginate_button",
        sPageButtonActive: "paginate_active",
        sPageButtonStaticDisabled: "paginate_button paginate_button_disabled",
        sPageFirst: "first",
        sPagePrevious: "previous",
        sPageNext: "next",
        sPageLast: "last",
        sStripeOdd: "odd",
        sStripeEven: "even",
        sRowEmpty: "dataTables_empty",
        sWrapper: "dataTables_wrapper",
        sFilter: "dataTables_filter",
        sInfo: "dataTables_info",
        sPaging: "dataTables_paginate paging_",
        sLength: "dataTables_length",
        sProcessing: "dataTables_processing",
        sSortAsc: "sorting_asc",
        sSortDesc: "sorting_desc",
        sSortable: "sorting",
        sSortableAsc: "sorting_asc_disabled",
        sSortableDesc: "sorting_desc_disabled",
        sSortableNone: "sorting_disabled",
        sSortColumn: "sorting_",
        sSortJUIAsc: "",
        sSortJUIDesc: "",
        sSortJUI: "",
        sSortJUIAscAllowed: "",
        sSortJUIDescAllowed: "",
        sSortJUIWrapper: "",
        sSortIcon: "",
        sScrollWrapper: "dataTables_scroll",
        sScrollHead: "dataTables_scrollHead",
        sScrollHeadInner: "dataTables_scrollHeadInner",
        sScrollBody: "dataTables_scrollBody",
        sScrollFoot: "dataTables_scrollFoot",
        sScrollFootInner: "dataTables_scrollFootInner",
        sFooterTH: ""
    }, n.oJUIClasses = {
        sPagePrevEnabled: "fg-button ui-button ui-state-default ui-corner-left",
        sPagePrevDisabled: "fg-button ui-button ui-state-default ui-corner-left ui-state-disabled",
        sPageNextEnabled: "fg-button ui-button ui-state-default ui-corner-right",
        sPageNextDisabled: "fg-button ui-button ui-state-default ui-corner-right ui-state-disabled",
        sPageJUINext: "ui-icon ui-icon-circle-arrow-e",
        sPageJUIPrev: "ui-icon ui-icon-circle-arrow-w",
        sPageButton: "fg-button ui-button ui-state-default",
        sPageButtonActive: "fg-button ui-button ui-state-default ui-state-disabled",
        sPageButtonStaticDisabled: "fg-button ui-button ui-state-default ui-state-disabled",
        sPageFirst: "first ui-corner-tl ui-corner-bl",
        sPagePrevious: "previous",
        sPageNext: "next",
        sPageLast: "last ui-corner-tr ui-corner-br",
        sStripeOdd: "odd",
        sStripeEven: "even",
        sRowEmpty: "dataTables_empty",
        sWrapper: "dataTables_wrapper",
        sFilter: "dataTables_filter",
        sInfo: "dataTables_info",
        sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
        sLength: "dataTables_length",
        sProcessing: "dataTables_processing",
        sSortAsc: "ui-state-default",
        sSortDesc: "ui-state-default",
        sSortable: "ui-state-default",
        sSortableAsc: "ui-state-default",
        sSortableDesc: "ui-state-default",
        sSortableNone: "ui-state-default",
        sSortColumn: "sorting_",
        sSortJUIAsc: "css_right ui-icon ui-icon-triangle-1-n",
        sSortJUIDesc: "css_right ui-icon ui-icon-triangle-1-s",
        sSortJUI: "css_right ui-icon ui-icon-carat-2-n-s",
        sSortJUIAscAllowed: "css_right ui-icon ui-icon-carat-1-n",
        sSortJUIDescAllowed: "css_right ui-icon ui-icon-carat-1-s",
        sSortJUIWrapper: "DataTables_sort_wrapper",
        sSortIcon: "DataTables_sort_icon",
        sScrollWrapper: "dataTables_scroll",
        sScrollHead: "dataTables_scrollHead ui-state-default",
        sScrollHeadInner: "dataTables_scrollHeadInner",
        sScrollBody: "dataTables_scrollBody",
        sScrollFoot: "dataTables_scrollFoot ui-state-default",
        sScrollFootInner: "dataTables_scrollFootInner",
        sFooterTH: "ui-state-default"
    }, n.oPagination = {
        two_button: {
            fnInit: function (e, t, n) {
                var r, s, o;
                e.bJUI ? (r = p.createElement("a"), s = p.createElement("a"), o = p.createElement("span"), o.className = e.oClasses.sPageJUINext, s.appendChild(o), o = p.createElement("span"), o.className = e.oClasses.sPageJUIPrev, r.appendChild(o)) : (r = p.createElement("div"), s = p.createElement("div")), r.className = e.oClasses.sPagePrevDisabled, s.className = e.oClasses.sPageNextDisabled, r.title = e.oLanguage.oPaginate.sPrevious, s.title = e.oLanguage.oPaginate.sNext, t.appendChild(r), t.appendChild(s), i(r).bind("click.DT", function () {
                    e.oApi._fnPageChange(e, "previous") && n(e)
                }), i(s).bind("click.DT", function () {
                    e.oApi._fnPageChange(e, "next") && n(e)
                }), i(r).bind("selectstart.DT", function () {
                    return !1
                }), i(s).bind("selectstart.DT", function () {
                    return !1
                }), e.sTableId !== "" && typeof e.aanFeatures.p == "undefined" && (t.setAttribute("id", e.sTableId + "_paginate"), r.setAttribute("id", e.sTableId + "_previous"), s.setAttribute("id", e.sTableId + "_next"))
            },
            fnUpdate: function (e) {
                if (e.aanFeatures.p) for (var t = e.aanFeatures.p, n = 0, r = t.length; n < r; n++) t[n].childNodes.length !== 0 && (t[n].childNodes[0].className = e._iDisplayStart === 0 ? e.oClasses.sPagePrevDisabled : e.oClasses.sPagePrevEnabled, t[n].childNodes[1].className = e.fnDisplayEnd() == e.fnRecordsDisplay() ? e.oClasses.sPageNextDisabled : e.oClasses.sPageNextEnabled)
            }
        },
        iFullNumbersShowPages: 5,
        full_numbers: {
            fnInit: function (e, t, n) {
                var r = p.createElement("span"),
                    s = p.createElement("span"),
                    o = p.createElement("span"),
                    u = p.createElement("span"),
                    a = p.createElement("span");
                r.innerHTML = e.oLanguage.oPaginate.sFirst, s.innerHTML = e.oLanguage.oPaginate.sPrevious, u.innerHTML = e.oLanguage.oPaginate.sNext, a.innerHTML = e.oLanguage.oPaginate.sLast;
                var f = e.oClasses;
                r.className = f.sPageButton + " " + f.sPageFirst, s.className = f.sPageButton + " " + f.sPagePrevious, u.className = f.sPageButton + " " + f.sPageNext, a.className = f.sPageButton + " " + f.sPageLast, t.appendChild(r), t.appendChild(s), t.appendChild(o), t.appendChild(u), t.appendChild(a), i(r).bind("click.DT", function () {
                    e.oApi._fnPageChange(e, "first") && n(e)
                }), i(s).bind("click.DT", function () {
                    e.oApi._fnPageChange(e, "previous") && n(e)
                }), i(u).bind("click.DT", function () {
                    e.oApi._fnPageChange(e, "next") && n(e)
                }), i(a).bind("click.DT", function () {
                    e.oApi._fnPageChange(e, "last") && n(e)
                }), i("span", t).bind("mousedown.DT", function () {
                    return !1
                }).bind("selectstart.DT", function () {
                    return !1
                }), e.sTableId !== "" && typeof e.aanFeatures.p == "undefined" && (t.setAttribute("id", e.sTableId + "_paginate"), r.setAttribute("id", e.sTableId + "_first"), s.setAttribute("id", e.sTableId + "_previous"), u.setAttribute("id", e.sTableId + "_next"), a.setAttribute("id", e.sTableId + "_last"))
            },
            fnUpdate: function (e, t) {
                if (e.aanFeatures.p) {
                    var r = n.oPagination.iFullNumbersShowPages,
                        s = Math.floor(r / 2),
                        o = Math.ceil(e.fnRecordsDisplay() / e._iDisplayLength),
                        u = Math.ceil(e._iDisplayStart / e._iDisplayLength) + 1,
                        a = "",
                        f, l = e.oClasses;
                    o < r ? (s = 1, f = o) : u <= s ? (s = 1, f = r) : u >= o - s ? (s = o - r + 1, f = o) : (s = u - Math.ceil(r / 2) + 1, f = s + r - 1);
                    for (r = s; r <= f; r++) a += u != r ? '<span class="' + l.sPageButton + '">' + r + "</span>" : '<span class="' + l.sPageButtonActive + '">' + r + "</span>";
                    f = e.aanFeatures.p;
                    var c, h = function (n) {
                        e._iDisplayStart = (this.innerHTML * 1 - 1) * e._iDisplayLength, t(e), n.preventDefault()
                    }, p = function () {
                        return !1
                    };
                    r = 0;
                    for (s = f.length; r < s; r++) f[r].childNodes.length !== 0 && (c = i("span:eq(2)", f[r]), c.html(a), i("span", c).bind("click.DT", h).bind("mousedown.DT", p).bind("selectstart.DT", p), c = f[r].getElementsByTagName("span"), c = [c[0], c[1], c[c.length - 2], c[c.length - 1]], i(c).removeClass(l.sPageButton + " " + l.sPageButtonActive + " " + l.sPageButtonStaticDisabled), u == 1 ? (c[0].className += " " + l.sPageButtonStaticDisabled, c[1].className += " " + l.sPageButtonStaticDisabled) : (c[0].className += " " + l.sPageButton, c[1].className += " " + l.sPageButton), o === 0 || u == o || e._iDisplayLength == -1 ? (c[2].className += " " + l.sPageButtonStaticDisabled, c[3].className += " " + l.sPageButtonStaticDisabled) : (c[2].className += " " + l.sPageButton, c[3].className += " " + l.sPageButton))
                }
            }
        }
    }, n.oSort = {
        "string-asc": function (e, t) {
            return typeof e != "string" && (e = ""), typeof t != "string" && (t = ""), e = e.toLowerCase(), t = t.toLowerCase(), e < t ? -1 : e > t ? 1 : 0
        },
        "string-desc": function (e, t) {
            return typeof e != "string" && (e = ""), typeof t != "string" && (t = ""), e = e.toLowerCase(), t = t.toLowerCase(), e < t ? 1 : e > t ? -1 : 0
        },
        "html-asc": function (e, t) {
            return e = e.replace(/<.*?>/g, "").toLowerCase(), t = t.replace(/<.*?>/g, "").toLowerCase(), e < t ? -1 : e > t ? 1 : 0
        },
        "html-desc": function (e, t) {
            return e = e.replace(/<.*?>/g, "").toLowerCase(), t = t.replace(/<.*?>/g, "").toLowerCase(), e < t ? 1 : e > t ? -1 : 0
        },
        "date-asc": function (e, t) {
            e = Date.parse(e), t = Date.parse(t);
            if (isNaN(e) || e === "") e = Date.parse("01/01/1970 00:00:00");
            if (isNaN(t) || t === "") t = Date.parse("01/01/1970 00:00:00");
            return e - t
        },
        "date-desc": function (e, t) {
            e = Date.parse(e), t = Date.parse(t);
            if (isNaN(e) || e === "") e = Date.parse("01/01/1970 00:00:00");
            if (isNaN(t) || t === "") t = Date.parse("01/01/1970 00:00:00");
            return t - e
        },
        "numeric-asc": function (e, t) {
            return (e == "-" || e === "" ? 0 : e * 1) - (t == "-" || t === "" ? 0 : t * 1)
        },
        "numeric-desc": function (e, t) {
            return (t == "-" || t === "" ? 0 : t * 1) - (e == "-" || e === "" ? 0 : e * 1)
        }
    }, n.aTypes = [function (e) {
        if (typeof e == "number") return "numeric";
        if (typeof e != "string") return null;
        var t, n = !1;
        t = e.charAt(0);
        if ("0123456789-".indexOf(t) == -1) return null;
        for (var r = 1; r < e.length; r++) {
            t = e.charAt(r);
            if ("0123456789.".indexOf(t) == -1) return null;
            if (t == ".") {
                if (n) return null;
                n = !0
            }
        }
        return "numeric"
    }, function (e) {
        var t = Date.parse(e);
        return t !== null && !isNaN(t) || typeof e == "string" && e.length === 0 ? "date" : null
    }, function (e) {
        return typeof e == "string" && e.indexOf("<") != -1 && e.indexOf(">") != -1 ? "html" : null
    }], n.fnVersionCheck = function (e) {
        var t = function (e, t) {
            for (; e.length < t;) e += "0";
            return e
        }, r = n.sVersion.split(".");
        e = e.split(".");
        for (var i = "", s = "", o = 0, u = e.length; o < u; o++) i += t(r[o], 3), s += t(e[o], 3);
        return parseInt(i, 10) >= parseInt(s, 10)
    }, n._oExternConfig = {
        iNextUnique: 0
    }, i.fn.dataTable = function (g) {
        function l() {
            this.fnRecordsTotal = function () {
                return this.oFeatures.bServerSide ? parseInt(this._iRecordsTotal, 10) : this.aiDisplayMaster.length
            }, this.fnRecordsDisplay = function () {
                return this.oFeatures.bServerSide ? parseInt(this._iRecordsDisplay, 10) : this.aiDisplay.length
            }, this.fnDisplayEnd = function () {
                return this.oFeatures.bServerSide ? this.oFeatures.bPaginate === !1 || this._iDisplayLength == -1 ? this._iDisplayStart + this.aiDisplay.length : Math.min(this._iDisplayStart + this._iDisplayLength, this._iRecordsDisplay) : this._iDisplayEnd
            }, this.sInstance = this.oInstance = null, this.oFeatures = {
                bPaginate: !0,
                bLengthChange: !0,
                bFilter: !0,
                bSort: !0,
                bInfo: !0,
                bAutoWidth: !0,
                bProcessing: !1,
                bSortClasses: !0,
                bStateSave: !1,
                bServerSide: !1,
                bDeferRender: !1
            }, this.oScroll = {
                sX: "",
                sXInner: "",
                sY: "",
                bCollapse: !1,
                bInfinite: !1,
                iLoadGap: 100,
                iBarWidth: 0,
                bAutoCss: !0
            }, this.aanFeatures = [], this.oLanguage = {
                sProcessing: "Processing...",
                sLengthMenu: "Show _MENU_ entries",
                sZeroRecords: "No matching records found",
                sEmptyTable: "No data available in table",
                sLoadingRecords: "Loading...",
                sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
                sInfoEmpty: "Showing 0 to 0 of 0 entries",
                sInfoFiltered: "(filtered from _MAX_ total entries)",
                sInfoPostFix: "",
                sInfoThousands: ",",
                sSearch: "Search:",
                sUrl: "",
                oPaginate: {
                    sFirst: "First",
                    sPrevious: "Previous",
                    sNext: "Next",
                    sLast: "Last"
                },
                fnInfoCallback: null
            }, this.aoData = [], this.aiDisplay = [], this.aiDisplayMaster = [], this.aoColumns = [], this.aoHeader = [], this.aoFooter = [], this.iNextId = 0, this.asDataSearch = [], this.oPreviousSearch = {
                sSearch: "",
                bRegex: !1,
                bSmart: !0
            }, this.aoPreSearchCols = [], this.aaSorting = [
                [0, "asc", 0]
            ], this.aaSortingFixed = null, this.asStripeClasses = [], this.asDestroyStripes = [], this.sDestroyWidth = 0, this.fnFooterCallback = this.fnHeaderCallback = this.fnRowCallback = null, this.aoDrawCallback = [], this.fnInitComplete = this.fnPreDrawCallback = null, this.sTableId = "", this.nTableWrapper = this.nTBody = this.nTFoot = this.nTHead = this.nTable = null, this.bInitialised = this.bDeferLoading = !1, this.aoOpenRows = [], this.sDom = "lfrtip", this.sPaginationType = "two_button", this.iCookieDuration = 7200, this.sCookiePrefix = "SpryMedia_DataTables_", this.fnCookieCallback = null, this.aoStateSave = [], this.aoStateLoad = [], this.sAjaxSource = this.oLoadedState = null, this.sAjaxDataProp = "aaData", this.bAjaxDataGet = !0, this.jqXHR = null, this.fnServerData = function (e, t, n, r) {
                r.jqXHR = i.ajax({
                    url: e,
                    data: t,
                    success: function (e) {
                        i(r.oInstance).trigger("xhr", r), n(e)
                    },
                    dataType: "json",
                    cache: !1,
                    error: function (e, t) {
                        t == "parsererror" && alert("DataTables warning: JSON data from server could not be parsed. This is caused by a JSON formatting error.")
                    }
                })
            }, this.aoServerParams = [], this.fnFormatNumber = function (e) {
                if (e < 1e3) return e;
                var t = e + "";
                e = t.split("");
                var n = "";
                t = t.length;
                for (var r = 0; r < t; r++) r % 3 === 0 && r !== 0 && (n = this.oLanguage.sInfoThousands + n), n = e[t - r - 1] + n;
                return n
            }, this.aLengthMenu = [10, 25, 50, 100], this.bDrawing = this.iDraw = 0, this.iDrawError = -1, this._iDisplayLength = 10, this._iDisplayStart = 0, this._iDisplayEnd = 10, this._iRecordsDisplay = this._iRecordsTotal = 0, this.bJUI = !1, this.oClasses = n.oStdClasses, this.bSortCellsTop = this.bSorted = this.bFiltered = !1, this.oInit = null, this.aoDestroyCallback = []
        }
        function s(e) {
            return function () {
                var t = [A(this[n.iApiIndex])].concat(Array.prototype.slice.call(arguments));
                return n.oApi[e].apply(this, t)
            }
        }
        function t(e) {
            var n, r, i = e.iInitDisplayStart;
            if (e.bInitialised === !1) setTimeout(function () {
                t(e)
            }, 200);
            else {
                Aa(e), X(e), M(e, e.aoHeader), e.nTFoot && M(e, e.aoFooter), K(e, !0), e.oFeatures.bAutoWidth && ga(e), n = 0;
                for (r = e.aoColumns.length; n < r; n++) e.aoColumns[n].sWidth !== null && (e.aoColumns[n].nTh.style.width = q(e.aoColumns[n].sWidth));
                e.oFeatures.bSort ? R(e) : e.oFeatures.bFilter ? N(e, e.oPreviousSearch) : (e.aiDisplay = e.aiDisplayMaster.slice(), E(e), C(e)), e.sAjaxSource !== null && !e.oFeatures.bServerSide ? (r = [], ha(e, r), e.fnServerData.call(e.oInstance, e.sAjaxSource, r, function (t) {
                    var r = t;
                    e.sAjaxDataProp !== "" && (r = aa(e.sAjaxDataProp)(t));
                    for (n = 0; n < r.length; n++) v(e, r[n]);
                    e.iInitDisplayStart = i, e.oFeatures.bSort ? R(e) : (e.aiDisplay = e.aiDisplayMaster.slice(), E(e), C(e)), K(e, !1), w(e, t)
                }, e)) : e.oFeatures.bServerSide || (K(e, !1), w(e))
            }
        }
        function w(e, t) {
            e._bInitComplete = !0, typeof e.fnInitComplete == "function" && (typeof t != "undefined" ? e.fnInitComplete.call(e.oInstance, e, t) : e.fnInitComplete.call(e.oInstance, e))
        }
        function y(e, n, r) {
            e.oLanguage = i.extend(!0, e.oLanguage, n), typeof n.sEmptyTable == "undefined" && typeof n.sZeroRecords != "undefined" && o(e.oLanguage, n, "sZeroRecords", "sEmptyTable"), typeof n.sLoadingRecords == "undefined" && typeof n.sZeroRecords != "undefined" && o(e.oLanguage, n, "sZeroRecords", "sLoadingRecords"), r && t(e)
        }
        function F(e, t) {
            var n = e.aoColumns.length;
            t = {
                sType: null,
                _bAutoType: !0,
                bVisible: !0,
                bSearchable: !0,
                bSortable: !0,
                asSorting: ["asc", "desc"],
                sSortingClass: e.oClasses.sSortable,
                sSortingClassJUI: e.oClasses.sSortJUI,
                sTitle: t ? t.innerHTML : "",
                sName: "",
                sWidth: null,
                sWidthOrig: null,
                sClass: null,
                fnRender: null,
                bUseRendered: !0,
                iDataSort: n,
                mDataProp: n,
                fnGetData: null,
                fnSetData: null,
                sSortDataType: "std",
                sDefaultContent: null,
                sContentPadding: "",
                nTh: t ? t : p.createElement("th"),
                nTf: null
            }, e.aoColumns.push(t), typeof e.aoPreSearchCols[n] == "undefined" || e.aoPreSearchCols[n] === null ? e.aoPreSearchCols[n] = {
                sSearch: "",
                bRegex: !1,
                bSmart: !0
            } : (typeof e.aoPreSearchCols[n].bRegex == "undefined" && (e.aoPreSearchCols[n].bRegex = !0), typeof e.aoPreSearchCols[n].bSmart == "undefined" && (e.aoPreSearchCols[n].bSmart = !0)), x(e, n, null)
        }
        function x(e, t, n) {
            t = e.aoColumns[t], typeof n != "undefined" && n !== null && (typeof n.sType != "undefined" && (t.sType = n.sType, t._bAutoType = !1), o(t, n, "bVisible"), o(t, n, "bSearchable"), o(t, n, "bSortable"), o(t, n, "sTitle"), o(t, n, "sName"), o(t, n, "sWidth"), o(t, n, "sWidth", "sWidthOrig"), o(t, n, "sClass"), o(t, n, "fnRender"), o(t, n, "bUseRendered"), o(t, n, "iDataSort"), o(t, n, "mDataProp"), o(t, n, "asSorting"), o(t, n, "sSortDataType"), o(t, n, "sDefaultContent"), o(t, n, "sContentPadding")), t.fnGetData = aa(t.mDataProp), t.fnSetData = Ba(t.mDataProp), e.oFeatures.bSort || (t.bSortable = !1), !t.bSortable || i.inArray("asc", t.asSorting) == -1 && i.inArray("desc", t.asSorting) == -1 ? (t.sSortingClass = e.oClasses.sSortableNone, t.sSortingClassJUI = "") : t.bSortable || i.inArray("asc", t.asSorting) == -1 && i.inArray("desc", t.asSorting) == -1 ? (t.sSortingClass = e.oClasses.sSortable, t.sSortingClassJUI = e.oClasses.sSortJUI) : i.inArray("asc", t.asSorting) != -1 && i.inArray("desc", t.asSorting) == -1 ? (t.sSortingClass = e.oClasses.sSortableAsc, t.sSortingClassJUI = e.oClasses.sSortJUIAscAllowed) : i.inArray("asc", t.asSorting) == -1 && i.inArray("desc", t.asSorting) != -1 && (t.sSortingClass = e.oClasses.sSortableDesc, t.sSortingClassJUI = e.oClasses.sSortJUIDescAllowed)
        }
        function v(e, t) {
            var n;
            n = i.isArray(t) ? t.slice() : i.extend(!0, {}, t), t = e.aoData.length;
            var r = {
                nTr: null,
                _iId: e.iNextId++,
                _aData: n,
                _anHidden: [],
                _sRowStripe: ""
            };
            e.aoData.push(r);
            for (var s, o = 0, u = e.aoColumns.length; o < u; o++) n = e.aoColumns[o], typeof n.fnRender == "function" && n.bUseRendered && n.mDataProp !== null && O(e, t, o, n.fnRender({
                iDataRow: t,
                iDataColumn: o,
                aData: r._aData,
                oSettings: e
            })), n._bAutoType && n.sType != "string" && (s = G(e, t, o, "type"), s !== null && s !== "" && (s = ia(s), n.sType === null ? n.sType = s : n.sType != s && n.sType != "html" && (n.sType = "string")));
            return e.aiDisplayMaster.push(t), e.oFeatures.bDeferRender || z(e, t), t
        }
        function z(e, t) {
            var n = e.aoData[t],
                r;
            if (n.nTr === null) {
                n.nTr = p.createElement("tr"), typeof n._aData.DT_RowId != "undefined" && n.nTr.setAttribute("id", n._aData.DT_RowId), typeof n._aData.DT_RowClass != "undefined" && i(n.nTr).addClass(n._aData.DT_RowClass);
                for (var s = 0, o = e.aoColumns.length; s < o; s++) {
                    var u = e.aoColumns[s];
                    r = p.createElement("td"), r.innerHTML = typeof u.fnRender != "function" || !! u.bUseRendered && u.mDataProp !== null ? G(e, t, s, "display") : u.fnRender({
                        iDataRow: t,
                        iDataColumn: s,
                        aData: n._aData,
                        oSettings: e
                    }), u.sClass !== null && (r.className = u.sClass), u.bVisible ? (n.nTr.appendChild(r), n._anHidden[s] = null) : n._anHidden[s] = r
                }
            }
        }
        function $(e) {
            var t, n, r, s, o, u, a, f, l;
            if (e.bDeferLoading || e.sAjaxSource === null) {
                a = e.nTBody.childNodes, t = 0;
                for (n = a.length; t < n; t++) if (a[t].nodeName.toUpperCase() == "TR") {
                    f = e.aoData.length, e.aoData.push({
                        nTr: a[t],
                        _iId: e.iNextId++,
                        _aData: [],
                        _anHidden: [],
                        _sRowStripe: ""
                    }), e.aiDisplayMaster.push(f), u = a[t].childNodes, r = o = 0;
                    for (s = u.length; r < s; r++) {
                        l = u[r].nodeName.toUpperCase();
                        if (l == "TD" || l == "TH") O(e, f, o, i.trim(u[r].innerHTML)), o++
                    }
                }
            }
            a = ba(e), u = [], t = 0;
            for (n = a.length; t < n; t++) {
                r = 0;
                for (s = a[t].childNodes.length; r < s; r++) o = a[t].childNodes[r], l = o.nodeName.toUpperCase(), (l == "TD" || l == "TH") && u.push(o)
            }
            u.length != a.length * e.aoColumns.length && J(e, 1, "Unexpected number of TD elements. Expected " + a.length * e.aoColumns.length + " and got " + u.length + ". DataTables does not support rowspan / colspan in the table body, and there must be one cell for each row/column combination."), r = 0;
            for (s = e.aoColumns.length; r < s; r++) {
                e.aoColumns[r].sTitle === null && (e.aoColumns[r].sTitle = e.aoColumns[r].nTh.innerHTML), a = e.aoColumns[r]._bAutoType, l = typeof e.aoColumns[r].fnRender == "function", o = e.aoColumns[r].sClass !== null, f = e.aoColumns[r].bVisible;
                var c, h;
                if (a || l || o || !f) {
                    t = 0;
                    for (n = e.aoData.length; t < n; t++) c = u[t * s + r], a && e.aoColumns[r].sType != "string" && (h = G(e, t, r, "type"), h !== "" && (h = ia(h), e.aoColumns[r].sType === null ? e.aoColumns[r].sType = h : e.aoColumns[r].sType != h && e.aoColumns[r].sType != "html" && (e.aoColumns[r].sType = "string"))), l && (h = e.aoColumns[r].fnRender({
                        iDataRow: t,
                        iDataColumn: r,
                        aData: e.aoData[t]._aData,
                        oSettings: e
                    }), c.innerHTML = h, e.aoColumns[r].bUseRendered && O(e, t, r, h)), o && (c.className += " " + e.aoColumns[r].sClass), f ? e.aoData[t]._anHidden[r] = null : (e.aoData[t]._anHidden[r] = c, c.parentNode.removeChild(c))
                }
            }
        }
        function X(e) {
            var t, n, r;
            e.nTHead.getElementsByTagName("tr");
            if (e.nTHead.getElementsByTagName("th").length !== 0) {
                t = 0;
                for (r = e.aoColumns.length; t < r; t++) n = e.aoColumns[t].nTh, e.aoColumns[t].sClass !== null && i(n).addClass(e.aoColumns[t].sClass), e.aoColumns[t].sTitle != n.innerHTML && (n.innerHTML = e.aoColumns[t].sTitle)
            } else {
                var s = p.createElement("tr");
                t = 0;
                for (r = e.aoColumns.length; t < r; t++) n = e.aoColumns[t].nTh, n.innerHTML = e.aoColumns[t].sTitle, e.aoColumns[t].sClass !== null && i(n).addClass(e.aoColumns[t].sClass), s.appendChild(n);
                i(e.nTHead).html("")[0].appendChild(s), Y(e.aoHeader, e.nTHead)
            }
            if (e.bJUI) {
                t = 0;
                for (r = e.aoColumns.length; t < r; t++) {
                    n = e.aoColumns[t].nTh, s = p.createElement("div"), s.className = e.oClasses.sSortJUIWrapper, i(n).contents().appendTo(s);
                    var o = p.createElement("span");
                    o.className = e.oClasses.sSortIcon, s.appendChild(o), n.appendChild(s)
                }
            }
            r = function () {
                return this.onselectstart = function () {
                    return !1
                }, !1
            };
            if (e.oFeatures.bSort) for (t = 0; t < e.aoColumns.length; t++) e.aoColumns[t].bSortable !== !1 ? (ja(e, e.aoColumns[t].nTh, t), i(e.aoColumns[t].nTh).bind("mousedown.DT", r)) : i(e.aoColumns[t].nTh).addClass(e.oClasses.sSortableNone);
            e.oClasses.sFooterTH !== "" && i(e.nTFoot).children("tr").children("th").addClass(e.oClasses.sFooterTH);
            if (e.nTFoot !== null) {
                n = S(e, null, e.aoFooter), t = 0;
                for (r = e.aoColumns.length; t < r; t++) typeof n[t] != "undefined" && (e.aoColumns[t].nTf = n[t])
            }
        }
        function M(e, t, n) {
            var r, i, s, o = [],
                u = [],
                a = e.aoColumns.length;
            typeof n == "undefined" && (n = !1), r = 0;
            for (i = t.length; r < i; r++) {
                o[r] = t[r].slice(), o[r].nTr = t[r].nTr;
                for (s = a - 1; s >= 0; s--)!e.aoColumns[s].bVisible && !n && o[r].splice(s, 1);
                u.push([])
            }
            r = 0;
            for (i = o.length; r < i; r++) {
                if (o[r].nTr) {
                    e = 0;
                    for (s = o[r].nTr.childNodes.length; e < s; e++) o[r].nTr.removeChild(o[r].nTr.childNodes[0])
                }
                s = 0;
                for (t = o[r].length; s < t; s++) {
                    a = n = 1;
                    if (typeof u[r][s] == "undefined") {
                        o[r].nTr.appendChild(o[r][s].cell);
                        for (u[r][s] = 1; typeof o[r + n] != "undefined" && o[r][s].cell == o[r + n][s].cell;) u[r + n][s] = 1, n++;
                        for (; typeof o[r][s + a] != "undefined" && o[r][s].cell == o[r][s + a].cell;) {
                            for (e = 0; e < n; e++) u[r + e][s + a] = 1;
                            a++
                        }
                        o[r][s].cell.rowSpan = n, o[r][s].cell.colSpan = a
                    }
                }
            }
        }
        function C(e) {
            var t, n, r = [],
                s = 0,
                o = !1;
            t = e.asStripeClasses.length, n = e.aoOpenRows.length;
            if (e.fnPreDrawCallback === null || e.fnPreDrawCallback.call(e.oInstance, e) !== !1) {
                e.bDrawing = !0, typeof e.iInitDisplayStart != "undefined" && e.iInitDisplayStart != -1 && (e._iDisplayStart = e.oFeatures.bServerSide ? e.iInitDisplayStart : e.iInitDisplayStart >= e.fnRecordsDisplay() ? 0 : e.iInitDisplayStart, e.iInitDisplayStart = -1, E(e));
                if (e.bDeferLoading) e.bDeferLoading = !1, e.iDraw++;
                else if (e.oFeatures.bServerSide) {
                    if (!e.bDestroying && !Ca(e)) return
                } else e.iDraw++;
                if (e.aiDisplay.length !== 0) {
                    var u = e._iDisplayStart,
                        a = e._iDisplayEnd;
                    e.oFeatures.bServerSide && (u = 0, a = e.aoData.length);
                    for (u = u; u < a; u++) {
                        var f = e.aoData[e.aiDisplay[u]];
                        f.nTr === null && z(e, e.aiDisplay[u]);
                        var l = f.nTr;
                        if (t !== 0) {
                            var c = e.asStripeClasses[s % t];
                            f._sRowStripe != c && (i(l).removeClass(f._sRowStripe).addClass(c), f._sRowStripe = c)
                        }
                        typeof e.fnRowCallback == "function" && (l = e.fnRowCallback.call(e.oInstance, l, e.aoData[e.aiDisplay[u]]._aData, s, u), !l && !o && (J(e, 0, "A node was not returned by fnRowCallback"), o = !0)), r.push(l), s++;
                        if (n !== 0) for (f = 0; f < n; f++) l == e.aoOpenRows[f].nParent && r.push(e.aoOpenRows[f].nTr)
                    }
                } else r[0] = p.createElement("tr"), typeof e.asStripeClasses[0] != "undefined" && (r[0].className = e.asStripeClasses[0]), o = e.oLanguage.sZeroRecords.replace("_MAX_", e.fnFormatNumber(e.fnRecordsTotal())), e.iDraw == 1 && e.sAjaxSource !== null && !e.oFeatures.bServerSide ? o = e.oLanguage.sLoadingRecords : typeof e.oLanguage.sEmptyTable != "undefined" && e.fnRecordsTotal() === 0 && (o = e.oLanguage.sEmptyTable), t = p.createElement("td"), t.setAttribute("valign", "top"), t.colSpan = Z(e), t.className = e.oClasses.sRowEmpty, t.innerHTML = o, r[s].appendChild(t);
                typeof e.fnHeaderCallback == "function" && e.fnHeaderCallback.call(e.oInstance, i(e.nTHead).children("tr")[0], ca(e), e._iDisplayStart, e.fnDisplayEnd(), e.aiDisplay), typeof e.fnFooterCallback == "function" && e.fnFooterCallback.call(e.oInstance, i(e.nTFoot).children("tr")[0], ca(e), e._iDisplayStart, e.fnDisplayEnd(), e.aiDisplay), s = p.createDocumentFragment(), t = p.createDocumentFragment();
                if (e.nTBody) {
                    o = e.nTBody.parentNode, t.appendChild(e.nTBody);
                    if (!e.oScroll.bInfinite || !e._bInitComplete || e.bSorted || e.bFiltered) {
                        n = e.nTBody.childNodes;
                        for (t = n.length - 1; t >= 0; t--) n[t].parentNode.removeChild(n[t])
                    }
                    t = 0;
                    for (n = r.length; t < n; t++) s.appendChild(r[t]);
                    e.nTBody.appendChild(s), o !== null && o.appendChild(e.nTBody)
                }
                for (t = e.aoDrawCallback.length - 1; t >= 0; t--) e.aoDrawCallback[t].fn.call(e.oInstance, e);
                i(e.oInstance).trigger("draw", e), e.bSorted = !1, e.bFiltered = !1, e.bDrawing = !1, e.oFeatures.bServerSide && (K(e, !1), typeof e._bInitComplete == "undefined" && w(e))
            }
        }
        function da(e) {
            e.oFeatures.bSort ? R(e, e.oPreviousSearch) : e.oFeatures.bFilter ? N(e, e.oPreviousSearch) : (E(e), C(e))
        }
        function Ca(e) {
            if (e.bAjaxDataGet) {
                e.iDraw++, K(e, !0);
                var t = Da(e);
                return ha(e, t), e.fnServerData.call(e.oInstance, e.sAjaxSource, t, function (t) {
                    Ea(e, t)
                }, e), !1
            }
            return !0
        }
        function Da(e) {
            var t = e.aoColumns.length,
                n = [],
                r, i;
            n.push({
                name: "sEcho",
                value: e.iDraw
            }), n.push({
                name: "iColumns",
                value: t
            }), n.push({
                name: "sColumns",
                value: ka(e)
            }), n.push({
                name: "iDisplayStart",
                value: e._iDisplayStart
            }), n.push({
                name: "iDisplayLength",
                value: e.oFeatures.bPaginate !== !1 ? e._iDisplayLength : -1
            });
            for (i = 0; i < t; i++) r = e.aoColumns[i].mDataProp, n.push({
                name: "mDataProp_" + i,
                value: typeof r == "function" ? "function" : r
            });
            if (e.oFeatures.bFilter !== !1) {
                n.push({
                    name: "sSearch",
                    value: e.oPreviousSearch.sSearch
                }), n.push({
                    name: "bRegex",
                    value: e.oPreviousSearch.bRegex
                });
                for (i = 0; i < t; i++) n.push({
                    name: "sSearch_" + i,
                    value: e.aoPreSearchCols[i].sSearch
                }), n.push({
                    name: "bRegex_" + i,
                    value: e.aoPreSearchCols[i].bRegex
                }), n.push({
                    name: "bSearchable_" + i,
                    value: e.aoColumns[i].bSearchable
                })
            }
            if (e.oFeatures.bSort !== !1) {
                r = e.aaSortingFixed !== null ? e.aaSortingFixed.length : 0;
                var s = e.aaSorting.length;
                n.push({
                    name: "iSortingCols",
                    value: r + s
                });
                for (i = 0; i < r; i++) n.push({
                    name: "iSortCol_" + i,
                    value: e.aaSortingFixed[i][0]
                }), n.push({
                    name: "sSortDir_" + i,
                    value: e.aaSortingFixed[i][1]
                });
                for (i = 0; i < s; i++) n.push({
                    name: "iSortCol_" + (i + r),
                    value: e.aaSorting[i][0]
                }), n.push({
                    name: "sSortDir_" + (i + r),
                    value: e.aaSorting[i][1]
                });
                for (i = 0; i < t; i++) n.push({
                    name: "bSortable_" + i,
                    value: e.aoColumns[i].bSortable
                })
            }
            return n
        }
        function ha(e, t) {
            for (var n = 0, r = e.aoServerParams.length; n < r; n++) e.aoServerParams[n].fn.call(e.oInstance, t)
        }
        function Ea(e, t) {
            if (typeof t.sEcho != "undefined") {
                if (t.sEcho * 1 < e.iDraw) return;
                e.iDraw = t.sEcho * 1
            }(!e.oScroll.bInfinite || e.oScroll.bInfinite && (e.bSorted || e.bFiltered)) && la(e), e._iRecordsTotal = t.iTotalRecords, e._iRecordsDisplay = t.iTotalDisplayRecords;
            var n = ka(e);
            if (n = typeof t.sColumns != "undefined" && n !== "" && t.sColumns != n) var r = Fa(e, t.sColumns);
            t = aa(e.sAjaxDataProp)(t);
            for (var i = 0, s = t.length; i < s; i++) if (n) {
                for (var o = [], u = 0, a = e.aoColumns.length; u < a; u++) o.push(t[i][r[u]]);
                v(e, o)
            } else v(e, t[i]);
            e.aiDisplay = e.aiDisplayMaster.slice(), e.bAjaxDataGet = !1, C(e), e.bAjaxDataGet = !0, K(e, !1)
        }
        function Aa(e) {
            var t = p.createElement("div");
            e.nTable.parentNode.insertBefore(t, e.nTable), e.nTableWrapper = p.createElement("div"), e.nTableWrapper.className = e.oClasses.sWrapper, e.sTableId !== "" && e.nTableWrapper.setAttribute("id", e.sTableId + "_wrapper"), e.nTableReinsertBefore = e.nTable.nextSibling;
            for (var r = e.nTableWrapper, i = e.sDom.split(""), s, o, u, a, f, l, c, h = 0; h < i.length; h++) {
                o = 0, u = i[h];
                if (u == "<") {
                    a = p.createElement("div"), f = i[h + 1];
                    if (f == "'" || f == '"') {
                        l = "";
                        for (c = 2; i[h + c] != f;) l += i[h + c], c++;
                        l == "H" ? l = "fg-toolbar ui-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix" : l == "F" && (l = "fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix"), l.indexOf(".") != -1 ? (f = l.split("."), a.setAttribute("id", f[0].substr(1, f[0].length - 1)), a.className = f[1]) : l.charAt(0) == "#" ? a.setAttribute("id", l.substr(1, l.length - 1)) : a.className = l, h += c
                    }
                    r.appendChild(a), r = a
                } else if (u == ">") r = r.parentNode;
                else if (u == "l" && e.oFeatures.bPaginate && e.oFeatures.bLengthChange) s = Ga(e), o = 1;
                else if (u == "f" && e.oFeatures.bFilter) s = Ha(e), o = 1;
                else if (u == "r" && e.oFeatures.bProcessing) s = Ia(e), o = 1;
                else if (u == "t") s = Ja(e), o = 1;
                else if (u == "i" && e.oFeatures.bInfo) s = Ka(e), o = 1;
                else if (u == "p" && e.oFeatures.bPaginate) s = La(e), o = 1;
                else if (n.aoFeatures.length !== 0) {
                    a = n.aoFeatures, c = 0;
                    for (f = a.length; c < f; c++) if (u == a[c].cFeature) {
                        if (s = a[c].fnInit(e)) o = 1;
                        break
                    }
                }
                o == 1 && s !== null && (typeof e.aanFeatures[u] != "object" && (e.aanFeatures[u] = []), e.aanFeatures[u].push(s), r.appendChild(s))
            }
            t.parentNode.replaceChild(e.nTableWrapper, t)
        }
        function Ja(e) {
            if (e.oScroll.sX === "" && e.oScroll.sY === "") return e.nTable;
            var t = p.createElement("div"),
                r = p.createElement("div"),
                s = p.createElement("div"),
                o = p.createElement("div"),
                u = p.createElement("div"),
                a = p.createElement("div"),
                f = e.nTable.cloneNode(!1),
                l = e.nTable.cloneNode(!1),
                c = e.nTable.getElementsByTagName("thead")[0],
                h = e.nTable.getElementsByTagName("tfoot").length === 0 ? null : e.nTable.getElementsByTagName("tfoot")[0],
                d = typeof g.bJQueryUI != "undefined" && g.bJQueryUI ? n.oJUIClasses : n.oStdClasses;
            r.appendChild(s), u.appendChild(a), o.appendChild(e.nTable), t.appendChild(r), t.appendChild(o), s.appendChild(f), f.appendChild(c), h !== null && (t.appendChild(u), a.appendChild(l), l.appendChild(h)), t.className = d.sScrollWrapper, r.className = d.sScrollHead, s.className = d.sScrollHeadInner, o.className = d.sScrollBody, u.className = d.sScrollFoot, a.className = d.sScrollFootInner, e.oScroll.bAutoCss && (r.style.overflow = "hidden", r.style.position = "relative", u.style.overflow = "hidden", o.style.overflow = "auto"), r.style.border = "0", r.style.width = "100%", u.style.border = "0", s.style.width = "150%", f.removeAttribute("id"), f.style.marginLeft = "0", e.nTable.style.marginLeft = "0", h !== null && (l.removeAttribute("id"), l.style.marginLeft = "0"), s = i(e.nTable).children("caption"), a = 0;
            for (l = s.length; a < l; a++) f.appendChild(s[a]);
            return e.oScroll.sX !== "" && (r.style.width = q(e.oScroll.sX), o.style.width = q(e.oScroll.sX), h !== null && (u.style.width = q(e.oScroll.sX)), i(o).scroll(function () {
                r.scrollLeft = this.scrollLeft, h !== null && (u.scrollLeft = this.scrollLeft)
            })), e.oScroll.sY !== "" && (o.style.height = q(e.oScroll.sY)), e.aoDrawCallback.push({
                fn: Ma,
                sName: "scrolling"
            }), e.oScroll.bInfinite && i(o).scroll(function () {
                e.bDrawing || i(this).scrollTop() + i(this).height() > i(e.nTable).height() - e.oScroll.iLoadGap && e.fnDisplayEnd() < e.fnRecordsDisplay() && (ma(e, "next"), E(e), C(e))
            }), e.nScrollHead = r, e.nScrollFoot = u, t
        }
        function Ma(e) {
            var t = e.nScrollHead.getElementsByTagName("div")[0],
                n = t.getElementsByTagName("table")[0],
                r = e.nTable.parentNode,
                s, o, u, a, f, l, c, h, p = [],
                d = e.nTFoot !== null ? e.nScrollFoot.getElementsByTagName("div")[0] : null,
                v = e.nTFoot !== null ? d.getElementsByTagName("table")[0] : null,
                m = i.browser.msie && i.browser.version <= 7;
            u = e.nTable.getElementsByTagName("thead"), u.length > 0 && e.nTable.removeChild(u[0]), e.nTFoot !== null && (f = e.nTable.getElementsByTagName("tfoot"), f.length > 0 && e.nTable.removeChild(f[0])), u = e.nTHead.cloneNode(!0), e.nTable.insertBefore(u, e.nTable.childNodes[0]), e.nTFoot !== null && (f = e.nTFoot.cloneNode(!0), e.nTable.insertBefore(f, e.nTable.childNodes[1])), e.oScroll.sX === "" && (r.style.width = "100%", t.parentNode.style.width = "100%");
            var g = S(e, u);
            s = 0;
            for (o = g.length; s < o; s++) c = Na(e, s), g[s].style.width = e.aoColumns[c].sWidth;
            e.nTFoot !== null && P(function (e) {
                e.style.width = ""
            }, f.getElementsByTagName("tr")), s = i(e.nTable).outerWidth(), e.oScroll.sX === "" ? (e.nTable.style.width = "100%", m && (r.scrollHeight > r.offsetHeight || i(r).css("overflow-y") == "scroll") && (e.nTable.style.width = q(i(e.nTable).outerWidth() - e.oScroll.iBarWidth))) : e.oScroll.sXInner !== "" ? e.nTable.style.width = q(e.oScroll.sXInner) : s == i(r).width() && i(r).height() < i(e.nTable).height() ? (e.nTable.style.width = q(s - e.oScroll.iBarWidth), i(e.nTable).outerWidth() > s - e.oScroll.iBarWidth && (e.nTable.style.width = q(s))) : e.nTable.style.width = q(s), s = i(e.nTable).outerWidth(), o = e.nTHead.getElementsByTagName("tr"), u = u.getElementsByTagName("tr"), P(function (e, t) {
                l = e.style, l.paddingTop = "0", l.paddingBottom = "0", l.borderTopWidth = "0", l.borderBottomWidth = "0", l.height = 0, h = i(e).width(), t.style.width = q(h), p.push(
                h)
            }, u, o), i(u).height(0), e.nTFoot !== null && (a = f.getElementsByTagName("tr"), f = e.nTFoot.getElementsByTagName("tr"), P(function (e, t) {
                l = e.style, l.paddingTop = "0", l.paddingBottom = "0", l.borderTopWidth = "0", l.borderBottomWidth = "0", l.height = 0, h = i(e).width(), t.style.width = q(h), p.push(h)
            }, a, f), i(a).height(0)), P(function (e) {
                e.innerHTML = "", e.style.width = q(p.shift())
            }, u), e.nTFoot !== null && P(function (e) {
                e.innerHTML = "", e.style.width = q(p.shift())
            }, a), i(e.nTable).outerWidth() < s ? (a = r.scrollHeight > r.offsetHeight || i(r).css("overflow-y") == "scroll" ? s + e.oScroll.iBarWidth : s, m && (r.scrollHeight > r.offsetHeight || i(r).css("overflow-y") == "scroll") && (e.nTable.style.width = q(a - e.oScroll.iBarWidth)), r.style.width = q(a), t.parentNode.style.width = q(a), e.nTFoot !== null && (d.parentNode.style.width = q(a)), e.oScroll.sX === "" ? J(e, 1, "The table cannot fit into the current element which will cause column misalignment. The table has been drawn at its minimum possible width.") : e.oScroll.sXInner !== "" && J(e, 1, "The table cannot fit into the current element which will cause column misalignment. Increase the sScrollXInner value or remove it to allow automatic calculation")) : (r.style.width = q("100%"), t.parentNode.style.width = q("100%"), e.nTFoot !== null && (d.parentNode.style.width = q("100%"))), e.oScroll.sY === "" && m && (r.style.height = q(e.nTable.offsetHeight + e.oScroll.iBarWidth)), e.oScroll.sY !== "" && e.oScroll.bCollapse && (r.style.height = q(e.oScroll.sY), m = e.oScroll.sX !== "" && e.nTable.offsetWidth > r.offsetWidth ? e.oScroll.iBarWidth : 0, e.nTable.offsetHeight < r.offsetHeight && (r.style.height = q(i(e.nTable).height() + m))), m = i(e.nTable).outerWidth(), n.style.width = q(m), t.style.width = q(m + e.oScroll.iBarWidth), e.nTFoot !== null && (d.style.width = q(e.nTable.offsetWidth + e.oScroll.iBarWidth), v.style.width = q(e.nTable.offsetWidth));
            if (e.bSorted || e.bFiltered) r.scrollTop = 0
        }
        function ea(e) {
            if (e.oFeatures.bAutoWidth === !1) return !1;
            ga(e);
            for (var t = 0, n = e.aoColumns.length; t < n; t++) e.aoColumns[t].nTh.style.width = e.aoColumns[t].sWidth
        }
        function Ha(e) {
            var t = e.oLanguage.sSearch;
            x = '<input type="text" class="ui-helper-hidden search-input" placeholder="Enter your keyword..."/>', t = t.indexOf("_INPUT_") !== -1 ? t.replace("_INPUT_", x) : t === "" ? x : x;
            var n = p.createElement("div");
            return n.className = e.oClasses.sFilter, n.innerHTML = "<label>" + t + "</label>", e.sTableId !== "" && typeof e.aanFeatures.f == "undefined" && n.setAttribute("id", e.sTableId + "_filter"), t = i("input", n), t.val(e.oPreviousSearch.sSearch.replace('"', "&quot;")), t.bind("keyup.DT", function () {
                for (var t = e.aanFeatures.f, n = 0, r = t.length; n < r; n++) t[n] != i(this).parents("div.dataTables_filter")[0] && i("input", t[n]).val(this.value);
                this.value != e.oPreviousSearch.sSearch && N(e, {
                    sSearch: this.value,
                    bRegex: e.oPreviousSearch.bRegex,
                    bSmart: e.oPreviousSearch.bSmart
                })
            }), t.parent().append('<a class="btn btn-quaternary open-search"><span class="iconic-search">&nbsp;</span></a>'), x = t.parent(), x.find(".open-search").bind("click", function () {
                return x.find(".search-input").hasClass("ui-helper-hidden") && x.find(".search-input").fadeIn("slow"), !1
            }), t.find(".search-input").bind("keypress.DT", function (e) {
                if (e.keyCode == 13) return !1
            }), n
        }
        function N(e, t, r) {
            Oa(e, t.sSearch, r, t.bRegex, t.bSmart);
            for (t = 0; t < e.aoPreSearchCols.length; t++) Pa(e, e.aoPreSearchCols[t].sSearch, t, e.aoPreSearchCols[t].bRegex, e.aoPreSearchCols[t].bSmart);
            n.afnFiltering.length !== 0 && Qa(e), e.bFiltered = !0, i(e.oInstance).trigger("filter", e), e._iDisplayStart = 0, E(e), C(e), oa(e, 0)
        }
        function Qa(e) {
            for (var t = n.afnFiltering, r = 0, i = t.length; r < i; r++) for (var s = 0, o = 0, u = e.aiDisplay.length; o < u; o++) {
                var a = e.aiDisplay[o - s];
                t[r](e, fa(e, a, "filter"), a) || (e.aiDisplay.splice(o - s, 1), s++)
            }
        }
        function Pa(e, t, n, r, i) {
            if (t !== "") {
                var s = 0;
                t = pa(t, r, i);
                for (r = e.aiDisplay.length - 1; r >= 0; r--) i = qa(G(e, e.aiDisplay[r], n, "filter"), e.aoColumns[n].sType), t.test(i) || (e.aiDisplay.splice(r, 1), s++)
            }
        }
        function Oa(e, t, r, i, s) {
            var o = pa(t, i, s);
            if (typeof r == "undefined" || r === null) r = 0;
            n.afnFiltering.length !== 0 && (r = 1);
            if (t.length <= 0) e.aiDisplay.splice(0, e.aiDisplay.length), e.aiDisplay = e.aiDisplayMaster.slice();
            else if (e.aiDisplay.length == e.aiDisplayMaster.length || e.oPreviousSearch.sSearch.length > t.length || r == 1 || t.indexOf(e.oPreviousSearch.sSearch) !== 0) {
                e.aiDisplay.splice(0, e.aiDisplay.length), oa(e, 1);
                for (r = 0; r < e.aiDisplayMaster.length; r++) o.test(e.asDataSearch[r]) && e.aiDisplay.push(e.aiDisplayMaster[r])
            } else {
                var u = 0;
                for (r = 0; r < e.asDataSearch.length; r++) o.test(e.asDataSearch[r]) || (e.aiDisplay.splice(r - u, 1), u++)
            }
            e.oPreviousSearch.sSearch = t, e.oPreviousSearch.bRegex = i, e.oPreviousSearch.bSmart = s
        }
        function oa(e, t) {
            if (!e.oFeatures.bServerSide) {
                e.asDataSearch.splice(0, e.asDataSearch.length), t = typeof t != "undefined" && t == 1 ? e.aiDisplayMaster : e.aiDisplay;
                for (var n = 0, r = t.length; n < r; n++) e.asDataSearch[n] = ra(e, fa(e, t[n], "filter"))
            }
        }
        function ra(e, t) {
            var n = "";
            typeof e.__nTmpFilter == "undefined" && (e.__nTmpFilter = p.createElement("div"));
            for (var r = e.__nTmpFilter, i = 0, s = e.aoColumns.length; i < s; i++) e.aoColumns[i].bSearchable && (n += qa(t[i], e.aoColumns[i].sType) + "  ");
            return n.indexOf("&") !== -1 && (r.innerHTML = n, n = r.textContent ? r.textContent : r.innerText, n = n.replace(/\n/g, " ").replace(/\r/g, "")), n
        }
        function pa(e, t, n) {
            return n ? (e = t ? e.split(" ") : sa(e).split(" "), e = "^(?=.*?" + e.join(")(?=.*?") + ").*$", new RegExp(e, "i")) : (e = t ? e : sa(e), new RegExp(e, "i"))
        }
        function qa(e, t) {
            return typeof n.ofnSearch[t] == "function" ? n.ofnSearch[t](e) : t == "html" ? e.replace(/\n/g, " ").replace(/<.*?>/g, "") : typeof e == "string" ? e.replace(/\n/g, " ") : e === null ? "" : e
        }
        function R(e, t) {
            var r, s, o, u, a = [],
                f = [],
                l = n.oSort;
            s = e.aoData;
            var c = e.aoColumns;
            if (!e.oFeatures.bServerSide && (e.aaSorting.length !== 0 || e.aaSortingFixed !== null)) {
                a = e.aaSortingFixed !== null ? e.aaSortingFixed.concat(e.aaSorting) : e.aaSorting.slice();
                for (r = 0; r < a.length; r++) {
                    var h = a[r][0];
                    o = ta(e, h), u = e.aoColumns[h].sSortDataType;
                    if (typeof n.afnSortData[u] != "undefined") {
                        var p = n.afnSortData[u](e, h, o);
                        o = 0;
                        for (u = s.length; o < u; o++) O(e, o, h, p[o])
                    }
                }
                r = 0;
                for (s = e.aiDisplayMaster.length; r < s; r++) f[e.aiDisplayMaster[r]] = r;
                var d = a.length;
                e.aiDisplayMaster.sort(function (t, n) {
                    var i, s;
                    for (r = 0; r < d; r++) {
                        i = c[a[r][0]].iDataSort, s = c[i].sType, i = l[(s ? s : "string") + "-" + a[r][1]](G(e, t, i, "sort"), G(e, n, i, "sort"));
                        if (i !== 0) return i
                    }
                    return l["numeric-asc"](f[t], f[n])
                })
            }(typeof t == "undefined" || t) && !e.oFeatures.bDeferRender && V(e), e.bSorted = !0, i(e.oInstance).trigger("sort", e), e.oFeatures.bFilter ? N(e, e.oPreviousSearch, 1) : (e.aiDisplay = e.aiDisplayMaster.slice(), e._iDisplayStart = 0, E(e), C(e))
        }
        function ja(e, t, n, r) {
            i(t).bind("click.DT", function (t) {
                if (e.aoColumns[n].bSortable !== !1) {
                    var i = function () {
                        var r, i;
                        if (t.shiftKey) {
                            for (var s = !1, o = 0; o < e.aaSorting.length; o++) if (e.aaSorting[o][0] == n) {
                                s = !0, r = e.aaSorting[o][0], i = e.aaSorting[o][2] + 1, typeof e.aoColumns[r].asSorting[i] == "undefined" ? e.aaSorting.splice(o, 1) : (e.aaSorting[o][1] = e.aoColumns[r].asSorting[i], e.aaSorting[o][2] = i);
                                break
                            }
                            s === !1 && e.aaSorting.push([n, e.aoColumns[n].asSorting[0], 0])
                        } else e.aaSorting.length == 1 && e.aaSorting[0][0] == n ? (r = e.aaSorting[0][0], i = e.aaSorting[0][2] + 1, typeof e.aoColumns[r].asSorting[i] == "undefined" && (i = 0), e.aaSorting[0][1] = e.aoColumns[r].asSorting[i], e.aaSorting[0][2] = i) : (e.aaSorting.splice(0, e.aaSorting.length), e.aaSorting.push([n, e.aoColumns[n].asSorting[0], 0]));
                        R(e)
                    };
                    e.oFeatures.bProcessing ? (K(e, !0), setTimeout(function () {
                        i(), e.oFeatures.bServerSide || K(e, !1)
                    }, 0)) : i(), typeof r == "function" && r(e)
                }
            })
        }
        function V(e) {
            var t, n, r, s, o, u = e.aoColumns.length,
                a = e.oClasses;
            for (t = 0; t < u; t++) e.aoColumns[t].bSortable && i(e.aoColumns[t].nTh).removeClass(a.sSortAsc + " " + a.sSortDesc + " " + e.aoColumns[t].sSortingClass);
            s = e.aaSortingFixed !== null ? e.aaSortingFixed.concat(e.aaSorting) : e.aaSorting.slice();
            for (t = 0; t < e.aoColumns.length; t++) if (e.aoColumns[t].bSortable) {
                o = e.aoColumns[t].sSortingClass, r = -1;
                for (n = 0; n < s.length; n++) if (s[n][0] == t) {
                    o = s[n][1] == "asc" ? a.sSortAsc : a.sSortDesc, r = n;
                    break
                }
                i(e.aoColumns[t].nTh).addClass(o), e.bJUI && (n = i("span", e.aoColumns[t].nTh), n.removeClass(a.sSortJUIAsc + " " + a.sSortJUIDesc + " " + a.sSortJUI + " " + a.sSortJUIAscAllowed + " " + a.sSortJUIDescAllowed), n.addClass(r == -1 ? e.aoColumns[t].sSortingClassJUI : s[r][1] == "asc" ? a.sSortJUIAsc : a.sSortJUIDesc))
            } else i(e.aoColumns[t].nTh).addClass(e.aoColumns[t].sSortingClass);
            o = a.sSortColumn;
            if (e.oFeatures.bSort && e.oFeatures.bSortClasses) {
                r = Q(e);
                if (e.oFeatures.bDeferRender) i(r).removeClass(o + "1 " + o + "2 " + o + "3");
                else if (r.length >= u) for (t = 0; t < u; t++) if (r[t].className.indexOf(o + "1") != -1) {
                    n = 0;
                    for (e = r.length / u; n < e; n++) r[u * n + t].className = i.trim(r[u * n + t].className.replace(o + "1", ""))
                } else if (r[t].className.indexOf(o + "2") != -1) {
                    n = 0;
                    for (e = r.length / u; n < e; n++) r[u * n + t].className = i.trim(r[u * n + t].className.replace(o + "2", ""))
                } else if (r[t].className.indexOf(o + "3") != -1) {
                    n = 0;
                    for (e = r.length / u; n < e; n++) r[u * n + t].className = i.trim(r[u * n + t].className.replace(" " + o + "3", ""))
                }
                a = 1;
                var f;
                for (t = 0; t < s.length; t++) {
                    f = parseInt(s[t][0], 10), n = 0;
                    for (e = r.length / u; n < e; n++) r[u * n + f].className += " " + o + a;
                    a < 3 && a++
                }
            }
        }
        function La(e) {
            if (e.oScroll.bInfinite) return null;
            var t = p.createElement("div");
            return t.className = e.oClasses.sPaging + e.sPaginationType, n.oPagination[e.sPaginationType].fnInit(e, t, function (e) {
                E(e), C(e)
            }), typeof e.aanFeatures.p == "undefined" && e.aoDrawCallback.push({
                fn: function (e) {
                    n.oPagination[e.sPaginationType].fnUpdate(e, function (e) {
                        E(e), C(e)
                    })
                },
                sName: "pagination"
            }), t
        }
        function ma(e, t) {
            var n = e._iDisplayStart;
            return t == "first" ? e._iDisplayStart = 0 : t == "previous" ? (e._iDisplayStart = e._iDisplayLength >= 0 ? e._iDisplayStart - e._iDisplayLength : 0, e._iDisplayStart < 0 && (e._iDisplayStart = 0)) : t == "next" ? e._iDisplayLength >= 0 ? e._iDisplayStart + e._iDisplayLength < e.fnRecordsDisplay() && (e._iDisplayStart += e._iDisplayLength) : e._iDisplayStart = 0 : t == "last" ? e._iDisplayLength >= 0 ? (t = parseInt((e.fnRecordsDisplay() - 1) / e._iDisplayLength, 10) + 1, e._iDisplayStart = (t - 1) * e._iDisplayLength) : e._iDisplayStart = 0 : J(e, 0, "Unknown paging action: " + t), i(e.oInstance).trigger("page", e), n != e._iDisplayStart
        }
        function Ka(e) {
            var t = p.createElement("div");
            return t.className = e.oClasses.sInfo, typeof e.aanFeatures.i == "undefined" && (e.aoDrawCallback.push({
                fn: Ra,
                sName: "information"
            }), e.sTableId !== "" && t.setAttribute("id", e.sTableId + "_info")), t
        }
        function Ra(e) {
            if ( !! e.oFeatures.bInfo && e.aanFeatures.i.length !== 0) {
                var t = e._iDisplayStart + 1,
                    n = e.fnDisplayEnd(),
                    r = e.fnRecordsTotal(),
                    s = e.fnRecordsDisplay(),
                    o = e.fnFormatNumber(t),
                    u = e.fnFormatNumber(n),
                    a = e.fnFormatNumber(r),
                    f = e.fnFormatNumber(s);
                e.oScroll.bInfinite && (o = e.fnFormatNumber(1)), o = e.fnRecordsDisplay() === 0 && e.fnRecordsDisplay() == e.fnRecordsTotal() ? e.oLanguage.sInfoEmpty + e.oLanguage.sInfoPostFix : e.fnRecordsDisplay() === 0 ? e.oLanguage.sInfoEmpty + " " + e.oLanguage.sInfoFiltered.replace("_MAX_", a) + e.oLanguage.sInfoPostFix : e.fnRecordsDisplay() == e.fnRecordsTotal() ? e.oLanguage.sInfo.replace("_START_", o).replace("_END_", u).replace("_TOTAL_", f) + e.oLanguage.sInfoPostFix : e.oLanguage.sInfo.replace("_START_", o).replace("_END_", u).replace("_TOTAL_", f) + " " + e.oLanguage.sInfoFiltered.replace("_MAX_", e.fnFormatNumber(e.fnRecordsTotal())) + e.oLanguage.sInfoPostFix, e.oLanguage.fnInfoCallback !== null && (o = e.oLanguage.fnInfoCallback(e, t, n, r, s, o)), e = e.aanFeatures.i, t = 0;
                for (n = e.length; t < n; t++) i(e[t]).html(o)
            }
        }
        function Ga(e) {
            if (e.oScroll.bInfinite) return null;
            var t = '<select size="1" ' + (e.sTableId === "" ? "" : 'name="' + e.sTableId + '_length"') + ">",
                n, r;
            if (e.aLengthMenu.length == 2 && typeof e.aLengthMenu[0] == "object" && typeof e.aLengthMenu[1] == "object") {
                n = 0;
                for (r = e.aLengthMenu[0].length; n < r; n++) t += '<option value="' + e.aLengthMenu[0][n] + '">' + e.aLengthMenu[1][n] + "</option>"
            } else {
                n = 0;
                for (r = e.aLengthMenu.length; n < r; n++) t += '<option value="' + e.aLengthMenu[n] + '">' + e.aLengthMenu[n] + "</option>"
            }
            t += "</select>";
            var s = p.createElement("div");
            return e.sTableId !== "" && typeof e.aanFeatures.l == "undefined" && s.setAttribute("id", e.sTableId + "_length"), s.className = e.oClasses.sLength, s.innerHTML = "<label>" + e.oLanguage.sLengthMenu.replace("_MENU_", t) + "</label>", i('select option[value="' + e._iDisplayLength + '"]', s).attr("selected", !0), i("select", s).bind("change.DT", function () {
                var t = i(this).val(),
                    s = e.aanFeatures.l;
                n = 0;
                for (r = s.length; n < r; n++) s[n] != this.parentNode && i("select", s[n]).val(t);
                e._iDisplayLength = parseInt(t, 10), E(e), e.fnDisplayEnd() == e.fnRecordsDisplay() && (e._iDisplayStart = e.fnDisplayEnd() - e._iDisplayLength, e._iDisplayStart < 0 && (e._iDisplayStart = 0)), e._iDisplayLength == -1 && (e._iDisplayStart = 0), C(e)
            }), s
        }
        function Ia(e) {
            var t = p.createElement("div");
            return e.sTableId !== "" && typeof e.aanFeatures.r == "undefined" && t.setAttribute("id", e.sTableId + "_processing"), t.innerHTML = e.oLanguage.sProcessing, t.className = e.oClasses.sProcessing, e.nTable.parentNode.insertBefore(t, e.nTable), t
        }
        function K(e, t) {
            if (e.oFeatures.bProcessing) {
                e = e.aanFeatures.r;
                for (var n = 0, r = e.length; n < r; n++) e[n].style.visibility = t ? "visible" : "hidden"
            }
        }
        function Na(e, t) {
            for (var n = -1, r = 0; r < e.aoColumns.length; r++) {
                e.aoColumns[r].bVisible === !0 && n++;
                if (n == t) return r
            }
            return null
        }
        function ta(e, t) {
            for (var n = -1, r = 0; r < e.aoColumns.length; r++) {
                e.aoColumns[r].bVisible === !0 && n++;
                if (r == t) return e.aoColumns[r].bVisible === !0 ? n : null
            }
            return null
        }
        function W(e, t) {
            var n, r;
            n = e._iDisplayStart;
            for (r = e._iDisplayEnd; n < r; n++) if (e.aoData[e.aiDisplay[n]].nTr == t) return e.aiDisplay[n];
            n = 0;
            for (r = e.aoData.length; n < r; n++) if (e.aoData[n].nTr == t) return n;
            return null
        }
        function Z(e) {
            for (var t = 0, n = 0; n < e.aoColumns.length; n++) e.aoColumns[n].bVisible === !0 && t++;
            return t
        }
        function E(e) {
            e._iDisplayEnd = e.oFeatures.bPaginate === !1 ? e.aiDisplay.length : e._iDisplayStart + e._iDisplayLength > e.aiDisplay.length || e._iDisplayLength == -1 ? e.aiDisplay.length : e._iDisplayStart + e._iDisplayLength
        }
        function Sa(e, t) {
            if (!e || e === null || e === "") return 0;
            typeof t == "undefined" && (t = p.getElementsByTagName("body")[0]);
            var n = p.createElement("div");
            return n.style.width = q(e), t.appendChild(n), e = n.offsetWidth, t.removeChild(n), e
        }
        function ga(e) {
            var t = 0,
                n, r = 0,
                s = e.aoColumns.length,
                o, u = i("th", e.nTHead);
            for (o = 0; o < s; o++) e.aoColumns[o].bVisible && (r++, e.aoColumns[o].sWidth !== null && (n = Sa(e.aoColumns[o].sWidthOrig, e.nTable.parentNode), n !== null && (e.aoColumns[o].sWidth = q(n)), t++));
            if (s == u.length && t === 0 && r == s && e.oScroll.sX === "" && e.oScroll.sY === "") for (o = 0; o < e.aoColumns.length; o++) n = i(u[o]).width(), n !== null && (e.aoColumns[o].sWidth = q(n));
            else {
                t = e.nTable.cloneNode(!1), o = e.nTHead.cloneNode(!0), r = p.createElement("tbody"), n = p.createElement("tr"), t.removeAttribute("id"), t.appendChild(o), e.nTFoot !== null && (t.appendChild(e.nTFoot.cloneNode(!0)), P(function (e) {
                    e.style.width = ""
                }, t.getElementsByTagName("tr"))), t.appendChild(r), r.appendChild(n), r = i("thead th", t), r.length === 0 && (r = i("tbody tr:eq(0)>td", t)), u = S(e, o);
                for (o = r = 0; o < s; o++) {
                    var a = e.aoColumns[o];
                    a.bVisible && a.sWidthOrig !== null && a.sWidthOrig !== "" ? u[o - r].style.width = q(a.sWidthOrig) : a.bVisible ? u[o - r].style.width = "" : r++
                }
                for (o = 0; o < s; o++) e.aoColumns[o].bVisible && (r = Ta(e, o), r !== null && (r = r.cloneNode(!0), e.aoColumns[o].sContentPadding !== "" && (r.innerHTML += e.aoColumns[o].sContentPadding), n.appendChild(r)));
                s = e.nTable.parentNode, s.appendChild(t), e.oScroll.sX !== "" && e.oScroll.sXInner !== "" ? t.style.width = q(e.oScroll.sXInner) : e.oScroll.sX !== "" ? (t.style.width = "", i(t).width() < s.offsetWidth && (t.style.width = q(s.offsetWidth))) : e.oScroll.sY !== "" && (t.style.width = q(s.offsetWidth)), t.style.visibility = "hidden", Ua(e, t), s = i("tbody tr:eq(0)", t).children(), s.length === 0 && (s = S(e, i("thead", t)[0]));
                if (e.oScroll.sX !== "") {
                    for (o = r = n = 0; o < e.aoColumns.length; o++) e.aoColumns[o].bVisible && (n += e.aoColumns[o].sWidthOrig === null ? i(s[r]).outerWidth() : parseInt(e.aoColumns[o].sWidth.replace("px", ""), 10) + (i(s[r]).outerWidth() - i(s[r]).width()), r++);
                    t.style.width = q(n), e.nTable.style.width = q(n)
                }
                for (o = r = 0; o < e.aoColumns.length; o++) e.aoColumns[o].bVisible && (n = i(s[r]).width(), n !== null && n > 0 && (e.aoColumns[o].sWidth = q(n)), r++);
                e.nTable.style.width = q(i(t).outerWidth()), t.parentNode.removeChild(t)
            }
        }
        function Ua(e, t) {
            e.oScroll.sX === "" && e.oScroll.sY !== "" ? (i(t).width(), t.style.width = q(i(t).outerWidth() - e.oScroll.iBarWidth)) : e.oScroll.sX !== "" && (t.style.width = q(i(t).outerWidth()))
        }
        function Ta(e, t) {
            var n = Va(e, t);
            if (n < 0) return null;
            if (e.aoData[n].nTr === null) {
                var r = p.createElement("td");
                return r.innerHTML = G(e, n, t, ""), r
            }
            return Q(e, n)[t]
        }
        function Va(e, t) {
            for (var n = -1, r = -1, i = 0; i < e.aoData.length; i++) {
                var s = G(e, i, t, "display") + "";
                s = s.replace(/<.*?>/g, ""), s.length > n && (n = s.length, r = i)
            }
            return r
        }
        function q(e) {
            if (e === null) return "0px";
            if (typeof e == "number") return e < 0 ? "0px" : e + "px";
            var t = e.charCodeAt(e.length - 1);
            return t < 48 || t > 57 ? e : e + "px"
        }
        function Za(e, t) {
            if (e.length != t.length) return 1;
            for (var n = 0; n < e.length; n++) if (e[n] != t[n]) return 2;
            return 0
        }
        function ia(e) {
            for (var t = n.aTypes, r = t.length, i = 0; i < r; i++) {
                var s = t[i](e);
                if (s !== null) return s
            }
            return "string"
        }
        function A(e) {
            for (var t = 0; t < D.length; t++) if (D[t].nTable == e) return D[t];
            return null
        }
        function ca(e) {
            for (var t = [], n = e.aoData.length, r = 0; r < n; r++) t.push(e.aoData[r]._aData);
            return t
        }
        function ba(e) {
            for (var t = [], n = 0, r = e.aoData.length; n < r; n++) e.aoData[n].nTr !== null && t.push(e.aoData[n].nTr);
            return t
        }
        function Q(e, t) {
            var n = [],
                r, i, s, o, u;
            i = 0;
            var a = e.aoData.length;
            typeof t != "undefined" && (i = t, a = t + 1);
            for (i = i; i < a; i++) {
                u = e.aoData[i];
                if (u.nTr !== null) {
                    t = [], s = 0;
                    for (o = u.nTr.childNodes.length; s < o; s++) r = u.nTr.childNodes[s].nodeName.toLowerCase(), (r == "td" || r == "th") && t.push(u.nTr.childNodes[s]);
                    s = r = 0;
                    for (o = e.aoColumns.length; s < o; s++) e.aoColumns[s].bVisible ? n.push(t[s - r]) : (n.push(u._anHidden[s]), r++)
                }
            }
            return n
        }
        function sa(e) {
            return e.replace(new RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^)", "g"), "\\$1")
        }
        function ua(e, t) {
            for (var n = -1, r = 0, i = e.length; r < i; r++) e[r] == t ? n = r : e[r] > t && e[r]--;
            n != -1 && e.splice(n, 1)
        }
        function Fa(e, t) {
            t = t.split(",");
            for (var n = [], r = 0, i = e.aoColumns.length; r < i; r++) for (var s = 0; s < i; s++) if (e.aoColumns[r].sName == t[s]) {
                n.push(s);
                break
            }
            return n
        }
        function ka(e) {
            for (var t = "", n = 0, r = e.aoColumns.length; n < r; n++) t += e.aoColumns[n].sName + ",";
            return t.length == r ? "" : t.slice(0, -1)
        }
        function J(e, t, r) {
            e = e.sTableId === "" ? "DataTables warning: " + r : "DataTables warning (table id = '" + e.sTableId + "'): " + r;
            if (t === 0) {
                if (n.sErrMode != "alert") throw e;
                alert(e)
            } else typeof console != "undefined" && typeof console.log != "undefined" && console.log(e)
        }
        function la(e) {
            e.aoData.splice(0, e.aoData.length), e.aiDisplayMaster.splice(0, e.aiDisplayMaster.length), e.aiDisplay.splice(0, e.aiDisplay.length), E(e)
        }
        function va(e) {
            if ( !! e.oFeatures.bStateSave && typeof e.bDestroying == "undefined") {
                var t, n, r, i = "{";
                i += '"iCreate":' + (new Date).getTime() + ",", i += '"iStart":' + (e.oScroll.bInfinite ? 0 : e._iDisplayStart) + ",", i += '"iEnd":' + (e.oScroll.bInfinite ? e._iDisplayLength : e._iDisplayEnd) + ",", i += '"iLength":' + e._iDisplayLength + ",", i += '"sFilter":"' + encodeURIComponent(e.oPreviousSearch.sSearch) + '",', i += '"sFilterEsc":' + !e.oPreviousSearch.bRegex + ",", i += '"aaSorting":[ ';
                for (t = 0; t < e.aaSorting.length; t++) i += "[" + e.aaSorting[t][0] + ',"' + e.aaSorting[t][1] + '"],';
                i = i.substring(0, i.length - 1), i += "],", i += '"aaSearchCols":[ ';
                for (t = 0; t < e.aoPreSearchCols.length; t++) i += '["' + encodeURIComponent(e.aoPreSearchCols[t].sSearch) + '",' + !e.aoPreSearchCols[t].bRegex + "],";
                i = i.substring(0, i.length - 1), i += "],", i += '"abVisCols":[ ';
                for (t = 0; t < e.aoColumns.length; t++) i += e.aoColumns[t].bVisible + ",";
                i = i.substring(0, i.length - 1), i += "]", t = 0;
                for (n = e.aoStateSave.length; t < n; t++) r = e.aoStateSave[t].fn(e, i), r !== "" && (i = r);
                i += "}", Wa(e.sCookiePrefix + e.sInstance, i, e.iCookieDuration, e.sCookiePrefix, e.fnCookieCallback)
            }
        }
        function Xa(a, b) {
            if (a.oFeatures.bStateSave) {
                var c, d, f;
                d = wa(a.sCookiePrefix + a.sInstance);
                if (d !== null && d !== "") {
                    try {
                        c = typeof i.parseJSON == "function" ? i.parseJSON(d.replace(/'/g, '"')) : eval("(" + d + ")")
                    } catch (e) {
                        return
                    }
                    d = 0;
                    for (f = a.aoStateLoad.length; d < f; d++) if (!a.aoStateLoad[d].fn(a, c)) return;
                    a.oLoadedState = i.extend(!0, {}, c), a._iDisplayStart = c.iStart, a.iInitDisplayStart = c.iStart, a._iDisplayEnd = c.iEnd, a._iDisplayLength = c.iLength, a.oPreviousSearch.sSearch = decodeURIComponent(c.sFilter), a.aaSorting = c.aaSorting.slice(), a.saved_aaSorting = c.aaSorting.slice(), typeof c.sFilterEsc != "undefined" && (a.oPreviousSearch.bRegex = !c.sFilterEsc);
                    if (typeof c.aaSearchCols != "undefined") for (d = 0; d < c.aaSearchCols.length; d++) a.aoPreSearchCols[d] = {
                        sSearch: decodeURIComponent(c.aaSearchCols[d][0]),
                        bRegex: !c.aaSearchCols[d][1]
                    };
                    if (typeof c.abVisCols != "undefined") {
                        b.saved_aoColumns = [];
                        for (d = 0; d < c.abVisCols.length; d++) b.saved_aoColumns[d] = {}, b.saved_aoColumns[d].bVisible = c.abVisCols[d]
                    }
                }
            }
        }
        function Wa(a, b, c, d, f) {
            var e = new Date;
            e.setTime(e.getTime() + c * 1e3), c = za.location.pathname.split("/"), a = a + "_" + c.pop().replace(/[\/:]/g, "").toLowerCase();
            var h;
            f !== null ? (h = typeof i.parseJSON == "function" ? i.parseJSON(b) : eval("(" + b + ")"), b = f(a, h, e.toGMTString(), c.join("/") + "/")) : b = a + "=" + encodeURIComponent(b) + "; expires=" + e.toGMTString() + "; path=" + c.join("/") + "/", f = "", e = 9999999999999;
            if ((wa(a) !== null ? p.cookie.length : b.length + p.cookie.length) + 10 > 4096) {
                a = p.cookie.split(";");
                for (var j = 0, k = a.length; j < k; j++) if (a[j].indexOf(d) != -1) {
                    var m = a[j].split("=");
                    try {
                        h = eval("(" + decodeURIComponent(m[1]) + ")")
                    } catch (u) {
                        continue
                    }
                    typeof h.iCreate != "undefined" && h.iCreate < e && (f = m[0], e = h.iCreate)
                }
                f !== "" && (p.cookie = f + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=" + c.join("/") + "/")
            }
            p.cookie = b
        }
        function wa(e) {
            var t = za.location.pathname.split("/");
            e = e + "_" + t[t.length - 1].replace(/[\/:]/g, "").toLowerCase() + "=", t = p.cookie.split(";");
            for (var n = 0; n < t.length; n++) {
                for (var r = t[n]; r.charAt(0) == " ";) r = r.substring(1, r.length);
                if (r.indexOf(e) === 0) return decodeURIComponent(r.substring(e.length, r.length))
            }
            return null
        }
        function Y(e, t) {
            t = i(t).children("tr");
            var n, r, s, o, u, a, f, l, c = function (e, t, n) {
                for (; typeof e[t][n] != "undefined";) n++;
                return n
            };
            e.splice(0, e.length), r = 0;
            for (a = t.length; r < a; r++) e.push([]);
            r = 0;
            for (a = t.length; r < a; r++) {
                s = 0;
                for (f = t[r].childNodes.length; s < f; s++) {
                    n = t[r].childNodes[s];
                    if (n.nodeName.toUpperCase() == "TD" || n.nodeName.toUpperCase() == "TH") {
                        var h = n.getAttribute("colspan") * 1,
                            p = n.getAttribute("rowspan") * 1;
                        h = !h || h === 0 || h === 1 ? 1 : h, p = !p || p === 0 || p === 1 ? 1 : p, l = c(e, r, 0);
                        for (u = 0; u < h; u++) for (o = 0; o < p; o++) e[r + o][l + u] = {
                            cell: n,
                            unique: h == 1 ? !0 : !1
                        }, e[r + o].nTr = t[r]
                    }
                }
            }
        }
        function S(e, t, n) {
            var r = [];
            typeof n == "undefined" && (n = e.aoHeader, typeof t != "undefined" && (n = [], Y(n, t))), t = 0;
            for (var i = n.length; t < i; t++) for (var s = 0, o = n[t].length; s < o; s++) n[t][s].unique && (typeof r[s] == "undefined" || !e.bSortCellsTop) && (r[s] = n[t][s].cell);
            return r
        }
        function Ya() {
            var e = p.createElement("p"),
                t = e.style;
            t.width = "100%", t.height = "200px", t.padding = "0px";
            var n = p.createElement("div");
            return t = n.style, t.position = "absolute", t.top = "0px", t.left = "0px", t.visibility = "hidden", t.width = "200px", t.height = "150px", t.padding = "0px", t.overflow = "hidden", n.appendChild(e), p.body.appendChild(n), t = e.offsetWidth, n.style.overflow = "scroll", e = e.offsetWidth, t == e && (e = n.clientWidth), p.body.removeChild(n), t - e
        }
        function P(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) for (var s = 0, o = t[r].childNodes.length; s < o; s++) t[r].childNodes[s].nodeType == 1 && (typeof n != "undefined" ? e(t[r].childNodes[s], n[r].childNodes[s]) : e(t[r].childNodes[s]))
        }
        function o(e, t, n, r) {
            typeof r == "undefined" && (r = n), typeof t[n] != "undefined" && (e[r] = t[n])
        }
        function fa(e, t, n) {
            for (var r = [], i = 0, s = e.aoColumns.length; i < s; i++) r.push(G(e, t, i, n));
            return r
        }
        function G(e, t, n, r) {
            var i = e.aoColumns[n];
            if ((n = i.fnGetData(e.aoData[t]._aData)) === undefined) return e.iDrawError != e.iDraw && i.sDefaultContent === null && (J(e, 0, "Requested unknown parameter '" + i.mDataProp + "' from the data source for row " + t), e.iDrawError = e.iDraw), i.sDefaultContent;
            if (n === null && i.sDefaultContent !== null) n = i.sDefaultContent;
            else if (typeof n == "function") return n();
            return r == "display" && n === null ? "" : n
        }
        function O(e, t, n, r) {
            e.aoColumns[n].fnSetData(e.aoData[t]._aData, r)
        }
        function aa(e) {
            if (e === null) return function () {
                return null
            };
            if (typeof e == "function") return function (t) {
                return e(t)
            };
            if (typeof e == "string" && e.indexOf(".") != -1) {
                var t = e.split(".");
                return t.length == 2 ? function (e) {
                    return e[t[0]][t[1]]
                } : t.length == 3 ? function (e) {
                    return e[t[0]][t[1]][t[2]]
                } : function (e) {
                    for (var n = 0, r = t.length; n < r; n++) e = e[t[n]];
                    return e
                }
            }
            return function (t) {
                return t[e]
            }
        }
        function Ba(e) {
            if (e === null) return function () {};
            if (typeof e == "function") return function (t, n) {
                return e(t, n)
            };
            if (typeof e == "string" && e.indexOf(".") != -1) {
                var t = e.split(".");
                return t.length == 2 ? function (e, n) {
                    e[t[0]][t[1]] = n
                } : t.length == 3 ? function (e, n) {
                    e[t[0]][t[1]][t[2]] = n
                } : function (e, n) {
                    for (var r = 0, i = t.length - 1; r < i; r++) e = e[t[r]];
                    e[t[t.length - 1]] = n
                }
            }
            return function (t, n) {
                t[e] = n
            }
        }
        this.oApi = {}, this.fnDraw = function (e) {
            var t = A(this[n.iApiIndex]);
            typeof e != "undefined" && e === !1 ? (E(t), C(t)) : da(t)
        }, this.fnFilter = function (e, t, r, s, o) {
            var u = A(this[n.iApiIndex]);
            if (u.oFeatures.bFilter) {
                typeof r == "undefined" && (r = !1), typeof s == "undefined" && (s = !0), typeof o == "undefined" && (o = !0);
                if (typeof t == "undefined" || t === null) {
                    N(u, {
                        sSearch: e,
                        bRegex: r,
                        bSmart: s
                    }, 1);
                    if (o && typeof u.aanFeatures.f != "undefined") {
                        t = u.aanFeatures.f, r = 0;
                        for (s = t.length; r < s; r++) i("input", t[r]).val(e)
                    }
                } else u.aoPreSearchCols[t].sSearch = e, u.aoPreSearchCols[t].bRegex = r, u.aoPreSearchCols[t].bSmart = s, N(u, u.oPreviousSearch, 1)
            }
        }, this.fnSettings = function () {
            return A(this[n.iApiIndex])
        }, this.fnVersionCheck = n.fnVersionCheck, this.fnSort = function (e) {
            var t = A(this[n.iApiIndex]);
            t.aaSorting = e, R(t)
        }, this.fnSortListener = function (e, t, r) {
            ja(A(this[n.iApiIndex]), e, t, r)
        }, this.fnAddData = function (e, t) {
            if (e.length === 0) return [];
            var r = [],
                i, s = A(this[n.iApiIndex]);
            if (typeof e[0] == "object") for (var o = 0; o < e.length; o++) {
                i = v(s, e[o]);
                if (i == -1) return r;
                r.push(i)
            } else {
                i = v(s, e);
                if (i == -1) return r;
                r.push(i)
            }
            return s.aiDisplay = s.aiDisplayMaster.slice(), (typeof t == "undefined" || t) && da(s), r
        }, this.fnDeleteRow = function (e, t, r) {
            var s = A(this[n.iApiIndex]);
            e = typeof e == "object" ? W(s, e) : e;
            var o = s.aoData.splice(e, 1),
                u = i.inArray(e, s.aiDisplay);
            s.asDataSearch.splice(u, 1), ua(s.aiDisplayMaster, e), ua(s.aiDisplay, e), typeof t == "function" && t.call(this, s, o), s._iDisplayStart >= s.aiDisplay.length && (s._iDisplayStart -= s._iDisplayLength, s._iDisplayStart < 0 && (s._iDisplayStart = 0));
            if (typeof r == "undefined" || r) E(s), C(s);
            return o
        }, this.fnClearTable = function (e) {
            var t = A(this[n.iApiIndex]);
            la(t), (typeof e == "undefined" || e) && C(t)
        }, this.fnOpen = function (e, t, r) {
            var s = A(this[n.iApiIndex]);
            this.fnClose(e);
            var o = p.createElement("tr"),
                u = p.createElement("td");
            return o.appendChild(u), u.className = r, u.colSpan = Z(s), typeof t.jquery != "undefined" || typeof t == "object" ? u.appendChild(t) : u.innerHTML = t, t = i("tr", s.nTBody), i.inArray(e, t) != -1 && i(o).insertAfter(e), s.aoOpenRows.push({
                nTr: o,
                nParent: e
            }), o
        }, this.fnClose = function (e) {
            for (var t = A(this[n.iApiIndex]), r = 0; r < t.aoOpenRows.length; r++) if (t.aoOpenRows[r].nParent == e) return (e = t.aoOpenRows[r].nTr.parentNode) && e.removeChild(t.aoOpenRows[r].nTr), t.aoOpenRows.splice(r, 1), 0;
            return 1
        }, this.fnGetData = function (e, t) {
            var r = A(this[n.iApiIndex]);
            return typeof e != "undefined" ? (e = typeof e == "object" ? W(r, e) : e, typeof t != "undefined" ? G(r, e, t, "") : typeof r.aoData[e] != "undefined" ? r.aoData[e]._aData : null) : ca(r)
        }, this.fnGetNodes = function (e) {
            var t = A(this[n.iApiIndex]);
            return typeof e != "undefined" ? typeof t.aoData[e] != "undefined" ? t.aoData[e].nTr : null : ba(t)
        }, this.fnGetPosition = function (e) {
            var t = A(this[n.iApiIndex]),
                r = e.nodeName.toUpperCase();
            if (r == "TR") return W(t, e);
            if (r == "TD" || r == "TH") {
                r = W(t, e.parentNode);
                for (var i = Q(t, r), s = 0; s < t.aoColumns.length; s++) if (i[s] == e) return [r, ta(t, s), s]
            }
            return null
        }, this.fnUpdate = function (e, t, r, s, o) {
            var u = A(this[n.iApiIndex]);
            t = typeof t == "object" ? W(u, t) : t;
            if (i.isArray(e) && typeof e == "object") {
                u.aoData[t]._aData = e.slice();
                for (r = 0; r < u.aoColumns.length; r++) this.fnUpdate(G(u, t, r), t, r, !1, !1)
            } else if (e !== null && typeof e == "object") {
                u.aoData[t]._aData = i.extend(!0, {}, e);
                for (r = 0; r < u.aoColumns.length; r++) this.fnUpdate(G(u, t, r), t, r, !1, !1)
            } else e = e, O(u, t, r, e), u.aoColumns[r].fnRender !== null && (e = u.aoColumns[r].fnRender({
                iDataRow: t,
                iDataColumn: r,
                aData: u.aoData[t]._aData,
                oSettings: u
            }), u.aoColumns[r].bUseRendered && O(u, t, r, e)), u.aoData[t].nTr !== null && (Q(u, t)[r].innerHTML = e);
            return r = i.inArray(t, u.aiDisplay), u.asDataSearch[r] = ra(u, fa(u, t, "filter")), (typeof o == "undefined" || o) && ea(u), (typeof s == "undefined" || s) && da(u), 0
        }, this.fnSetColumnVis = function (e, t, r) {
            var i = A(this[n.iApiIndex]),
                s, o;
            o = i.aoColumns.length;
            var u, a;
            if (i.aoColumns[e].bVisible != t) {
                if (t) {
                    for (s = a = 0; s < e; s++) i.aoColumns[s].bVisible && a++;
                    a = a >= Z(i);
                    if (!a) for (s = e; s < o; s++) if (i.aoColumns[s].bVisible) {
                        u = s;
                        break
                    }
                    s = 0;
                    for (o = i.aoData.length; s < o; s++) i.aoData[s].nTr !== null && (a ? i.aoData[s].nTr.appendChild(i.aoData[s]._anHidden[e]) : i.aoData[s].nTr.insertBefore(i.aoData[s]._anHidden[e], Q(i, s)[u]))
                } else {
                    s = 0;
                    for (o = i.aoData.length; s < o; s++) i.aoData[s].nTr !== null && (u = Q(i, s)[e], i.aoData[s]._anHidden[e] = u, u.parentNode.removeChild(u))
                }
                i.aoColumns[e].bVisible = t, M(i, i.aoHeader), i.nTFoot && M(i, i.aoFooter), s = 0;
                for (o = i.aoOpenRows.length; s < o; s++) i.aoOpenRows[s].nTr.colSpan = Z(i);
                if (typeof r == "undefined" || r) ea(i), C(i);
                va(i)
            }
        }, this.fnPageChange = function (e, t) {
            var r = A(this[n.iApiIndex]);
            ma(r, e), E(r), (typeof t == "undefined" || t) && C(r)
        }, this.fnDestroy = function () {
            var e = A(this[n.iApiIndex]),
                t = e.nTableWrapper.parentNode,
                r = e.nTBody,
                s, o;
            e.bDestroying = !0, s = 0;
            for (o = e.aoDestroyCallback.length; s < o; s++) e.aoDestroyCallback[s].fn();
            s = 0;
            for (o = e.aoColumns.length; s < o; s++) e.aoColumns[s].bVisible === !1 && this.fnSetColumnVis(s, !0);
            i(e.nTableWrapper).find("*").andSelf().unbind(".DT"), i("tbody>tr>td." + e.oClasses.sRowEmpty, e.nTable).parent().remove(), e.nTable != e.nTHead.parentNode && (i(e.nTable).children("thead").remove(), e.nTable.appendChild(e.nTHead)), e.nTFoot && e.nTable != e.nTFoot.parentNode && (i(e.nTable).children("tfoot").remove(), e.nTable.appendChild(e.nTFoot)), e.nTable.parentNode.removeChild(e.nTable), i(e.nTableWrapper).remove(), e.aaSorting = [], e.aaSortingFixed = [], V(e), i(ba(e)).removeClass(e.asStripeClasses.join(" ")), e.bJUI ? (i("th", e.nTHead).removeClass([n.oStdClasses.sSortable, n.oJUIClasses.sSortableAsc, n.oJUIClasses.sSortableDesc, n.oJUIClasses.sSortableNone].join(" ")), i("th span." + n.oJUIClasses.sSortIcon, e.nTHead).remove(), i("th", e.nTHead).each(function () {
                var e = i("div." + n.oJUIClasses.sSortJUIWrapper, this),
                    t = e.contents();
                i(this).append(t), e.remove()
            })) : i("th", e.nTHead).removeClass([n.oStdClasses.sSortable, n.oStdClasses.sSortableAsc, n.oStdClasses.sSortableDesc, n.oStdClasses.sSortableNone].join(" ")), e.nTableReinsertBefore ? t.insertBefore(e.nTable, e.nTableReinsertBefore) : t.appendChild(e.nTable), s = 0;
            for (o = e.aoData.length; s < o; s++) e.aoData[s].nTr !== null && r.appendChild(e.aoData[s].nTr);
            e.oFeatures.bAutoWidth === !0 && (e.nTable.style.width = q(e.sDestroyWidth)), i(r).children("tr:even").addClass(e.asDestroyStripes[0]), i(r).children("tr:odd").addClass(e.asDestroyStripes[1]), s = 0;
            for (o = D.length; s < o; s++) D[s] == e && D.splice(s, 1);
            e = null
        }, this.fnAdjustColumnSizing = function (e) {
            var t = A(this[n.iApiIndex]);
            ea(t), typeof e == "undefined" || e ? this.fnDraw(!1) : (t.oScroll.sX !== "" || t.oScroll.sY !== "") && this.oApi._fnScrollDraw(t)
        };
        for (var xa in n.oApi) xa && (this[xa] = s(xa));
        this.oApi._fnExternApiFunc = s, this.oApi._fnInitialise = t, this.oApi._fnInitComplete = w, this.oApi._fnLanguageProcess = y, this.oApi._fnAddColumn = F, this.oApi._fnColumnOptions = x, this.oApi._fnAddData = v, this.oApi._fnCreateTr = z, this.oApi._fnGatherData = $, this.oApi._fnBuildHead = X, this.oApi._fnDrawHead = M, this.oApi._fnDraw = C, this.oApi._fnReDraw = da, this.oApi._fnAjaxUpdate = Ca, this.oApi._fnAjaxParameters = Da, this.oApi._fnAjaxUpdateDraw = Ea, this.oApi._fnServerParams = ha, this.oApi._fnAddOptionsHtml = Aa, this.oApi._fnFeatureHtmlTable = Ja, this.oApi._fnScrollDraw = Ma, this.oApi._fnAdjustColumnSizing = ea, this.oApi._fnFeatureHtmlFilter = Ha, this.oApi._fnFilterComplete = N, this.oApi._fnFilterCustom = Qa, this.oApi._fnFilterColumn = Pa, this.oApi._fnFilter = Oa, this.oApi._fnBuildSearchArray = oa, this.oApi._fnBuildSearchRow = ra, this.oApi._fnFilterCreateSearch = pa, this.oApi._fnDataToSearch = qa, this.oApi._fnSort = R, this.oApi._fnSortAttachListener = ja, this.oApi._fnSortingClasses = V, this.oApi._fnFeatureHtmlPaginate = La, this.oApi._fnPageChange = ma, this.oApi._fnFeatureHtmlInfo = Ka, this.oApi._fnUpdateInfo = Ra, this.oApi._fnFeatureHtmlLength = Ga, this.oApi._fnFeatureHtmlProcessing = Ia, this.oApi._fnProcessingDisplay = K, this.oApi._fnVisibleToColumnIndex = Na, this.oApi._fnColumnIndexToVisible = ta, this.oApi._fnNodeToDataIndex = W, this.oApi._fnVisbleColumns = Z, this.oApi._fnCalculateEnd = E, this.oApi._fnConvertToWidth = Sa, this.oApi._fnCalculateColumnWidths = ga, this.oApi._fnScrollingWidthAdjust = Ua, this.oApi._fnGetWidestNode = Ta, this.oApi._fnGetMaxLenString = Va, this.oApi._fnStringToCss = q, this.oApi._fnArrayCmp = Za, this.oApi._fnDetectType = ia, this.oApi._fnSettingsFromNode = A, this.oApi._fnGetDataMaster = ca, this.oApi._fnGetTrNodes = ba, this.oApi._fnGetTdNodes = Q, this.oApi._fnEscapeRegex = sa, this.oApi._fnDeleteIndex = ua, this.oApi._fnReOrderIndex = Fa, this.oApi._fnColumnOrdering = ka, this.oApi._fnLog = J, this.oApi._fnClearTable = la, this.oApi._fnSaveState = va, this.oApi._fnLoadState = Xa, this.oApi._fnCreateCookie = Wa, this.oApi._fnReadCookie = wa, this.oApi._fnDetectHeader = Y, this.oApi._fnGetUniqueThs = S, this.oApi._fnScrollBarWidth = Ya, this.oApi._fnApplyToChildren = P, this.oApi._fnMap = o, this.oApi._fnGetRowData = fa, this.oApi._fnGetCellData = G, this.oApi._fnSetCellData = O, this.oApi._fnGetObjectDataFn = aa, this.oApi._fnSetObjectDataFn = Ba;
        var ya = this;
        return this.each(function () {
            var e = 0,
                r, s, u, a;
            e = 0;
            for (r = D.length; e < r; e++) {
                if (D[e].nTable == this) {
                    if (typeof g == "undefined" || typeof g.bRetrieve != "undefined" && g.bRetrieve === !0) return D[e].oInstance;
                    if (typeof g.bDestroy != "undefined" && g.bDestroy === !0) {
                        D[e].oInstance.fnDestroy();
                        break
                    }
                    J(D[e], 0, "Cannot reinitialise DataTable.\n\nTo retrieve the DataTables object for this table, please pass either no arguments to the dataTable() function, or set bRetrieve to true. Alternatively, to destory the old table and create a new one, set bDestroy to true (note that a lot of changes to the configuration can be made through the API which is usually much faster).");
                    return
                }
                if (D[e].sTableId !== "" && D[e].sTableId == this.getAttribute("id")) {
                    D.splice(e, 1);
                    break
                }
            }
            var f = new l;
            D.push(f);
            var c = !1,
                h = !1;
            e = this.getAttribute("id"), e !== null ? (f.sTableId = e, f.sInstance = e) : f.sInstance = n._oExternConfig.iNextUnique++;
            if (this.nodeName.toLowerCase() != "table") J(f, 0, "Attempted to initialise DataTables on a node which is not a table: " + this.nodeName);
            else {
                f.nTable = this, f.oInstance = ya.length == 1 ? ya : i(this).dataTable(), f.oApi = ya.oApi, f.sDestroyWidth = i(this).width();
                if (typeof g != "undefined" && g !== null) {
                    f.oInit = g, o(f.oFeatures, g, "bPaginate"), o(f.oFeatures, g, "bLengthChange"), o(f.oFeatures, g, "bFilter"), o(f.oFeatures, g, "bSort"), o(f.oFeatures, g, "bInfo"), o(f.oFeatures, g, "bProcessing"), o(f.oFeatures, g, "bAutoWidth"), o(f.oFeatures, g, "bSortClasses"), o(f.oFeatures, g, "bServerSide"), o(f.oFeatures, g, "bDeferRender"), o(f.oScroll, g, "sScrollX", "sX"), o(f.oScroll, g, "sScrollXInner", "sXInner"), o(f.oScroll, g, "sScrollY", "sY"), o(f.oScroll, g, "bScrollCollapse", "bCollapse"), o(f.oScroll, g, "bScrollInfinite", "bInfinite"), o(f.oScroll, g, "iScrollLoadGap", "iLoadGap"), o(f.oScroll, g, "bScrollAutoCss", "bAutoCss"), o(f, g, "asStripClasses", "asStripeClasses"), o(f, g, "asStripeClasses"), o(f, g, "fnPreDrawCallback"), o(f, g, "fnRowCallback"), o(f, g, "fnHeaderCallback"), o(f, g, "fnFooterCallback"), o(f, g, "fnCookieCallback"), o(f, g, "fnInitComplete"), o(f, g, "fnServerData"), o(f, g, "fnFormatNumber"), o(f, g, "aaSorting"), o(f, g, "aaSortingFixed"), o(f, g, "aLengthMenu"), o(f, g, "sPaginationType"), o(f, g, "sAjaxSource"), o(f, g, "sAjaxDataProp"), o(f, g, "iCookieDuration"), o(f, g, "sCookiePrefix"), o(f, g, "sDom"), o(f, g, "bSortCellsTop"), o(f, g, "oSearch", "oPreviousSearch"), o(f, g, "aoSearchCols", "aoPreSearchCols"), o(f, g, "iDisplayLength", "_iDisplayLength"), o(f, g, "bJQueryUI", "bJUI"), o(f.oLanguage, g, "fnInfoCallback"), typeof g.fnDrawCallback == "function" && f.aoDrawCallback.push({
                        fn: g.fnDrawCallback,
                        sName: "user"
                    }), typeof g.fnServerParams == "function" && f.aoServerParams.push({
                        fn: g.fnServerParams,
                        sName: "user"
                    }), typeof g.fnStateSaveCallback == "function" && f.aoStateSave.push({
                        fn: g.fnStateSaveCallback,
                        sName: "user"
                    }), typeof g.fnStateLoadCallback == "function" && f.aoStateLoad.push({
                        fn: g.fnStateLoadCallback,
                        sName: "user"
                    }), f.oFeatures.bServerSide && f.oFeatures.bSort && f.oFeatures.bSortClasses ? f.aoDrawCallback.push({
                        fn: V,
                        sName: "server_side_sort_classes"
                    }) : f.oFeatures.bDeferRender && f.aoDrawCallback.push({
                        fn: V,
                        sName: "defer_sort_classes"
                    }), typeof g.bJQueryUI != "undefined" && g.bJQueryUI && (f.oClasses = n.oJUIClasses, typeof g.sDom == "undefined" && (f.sDom = '<"H"lfr>t<"F"ip>'));
                    if (f.oScroll.sX !== "" || f.oScroll.sY !== "") f.oScroll.iBarWidth = Ya();
                    typeof g.iDisplayStart != "undefined" && typeof f.iInitDisplayStart == "undefined" && (f.iInitDisplayStart = g.iDisplayStart, f._iDisplayStart = g.iDisplayStart), typeof g.bStateSave != "undefined" && (f.oFeatures.bStateSave = g.bStateSave, Xa(f, g), f.aoDrawCallback.push({
                        fn: va,
                        sName: "state_save"
                    })), typeof g.iDeferLoading != "undefined" && (f.bDeferLoading = !0, f._iRecordsTotal = g.iDeferLoading, f._iRecordsDisplay = g.iDeferLoading), typeof g.aaData != "undefined" && (h = !0), typeof g != "undefined" && typeof g.aoData != "undefined" && (g.aoColumns = g.aoData), typeof g.oLanguage != "undefined" && (typeof g.oLanguage.sUrl != "undefined" && g.oLanguage.sUrl !== "" ? (f.oLanguage.sUrl = g.oLanguage.sUrl, i.getJSON(f.oLanguage.sUrl, null, function (e) {
                        y(f, e, !0)
                    }), c = !0) : y(f, g.oLanguage, !1))
                } else g = {};
                typeof g.asStripClasses == "undefined" && typeof g.asStripeClasses == "undefined" && (f.asStripeClasses.push(f.oClasses.sStripeOdd), f.asStripeClasses.push(f.oClasses.sStripeEven)), s = !1, u = i(this).children("tbody").children("tr"), e = 0;
                for (r = f.asStripeClasses.length; e < r; e++) if (u.filter(":lt(2)").hasClass(f.asStripeClasses[e])) {
                    s = !0;
                    break
                }
                s && (f.asDestroyStripes = ["", ""], i(u[0]).hasClass(f.oClasses.sStripeOdd) && (f.asDestroyStripes[0] += f.oClasses.sStripeOdd + " "), i(u[0]).hasClass(f.oClasses.sStripeEven) && (f.asDestroyStripes[0] += f.oClasses.sStripeEven), i(u[1]).hasClass(f.oClasses.sStripeOdd) && (f.asDestroyStripes[1] += f.oClasses.sStripeOdd + " "), i(u[1]).hasClass(f.oClasses.sStripeEven) && (f.asDestroyStripes[1] += f.oClasses.sStripeEven), u.removeClass(f.asStripeClasses.join(" "))), s = [];
                var d;
                e = this.getElementsByTagName("thead"), e.length !== 0 && (Y(f.aoHeader, e[0]), s = S(f));
                if (typeof g.aoColumns == "undefined") {
                    d = [], e = 0;
                    for (r = s.length; e < r; e++) d.push(null)
                } else d = g.aoColumns;
                e = 0;
                for (r = d.length; e < r; e++) typeof g.saved_aoColumns != "undefined" && g.saved_aoColumns.length == r && (d[e] === null && (d[e] = {}), d[e].bVisible = g.saved_aoColumns[e].bVisible), F(f, s ? s[e] : null);
                if (typeof g.aoColumnDefs != "undefined") for (e = g.aoColumnDefs.length - 1; e >= 0; e--) {
                    var m = g.aoColumnDefs[e].aTargets;
                    i.isArray(m) || J(f, 1, "aTargets must be an array of targets, not a " + typeof m), s = 0;
                    for (u = m.length; s < u; s++) if (typeof m[s] == "number" && m[s] >= 0) {
                        for (; f.aoColumns.length <= m[s];) F(f);
                        x(f, m[s], g.aoColumnDefs[e])
                    } else if (typeof m[s] == "number" && m[s] < 0) x(f, f.aoColumns.length + m[s], g.aoColumnDefs[e]);
                    else if (typeof m[s] == "string") {
                        r = 0;
                        for (a = f.aoColumns.length; r < a; r++)(m[s] == "_all" || i(f.aoColumns[r].nTh).hasClass(m[s])) && x(f, r, g.aoColumnDefs[e])
                    }
                }
                if (typeof d != "undefined") {
                    e = 0;
                    for (r = d.length; e < r; e++) x(f, e, d[e])
                }
                e = 0;
                for (r = f.aaSorting.length; e < r; e++) {
                    f.aaSorting[e][0] >= f.aoColumns.length && (f.aaSorting[e][0] = 0), d = f.aoColumns[f.aaSorting[e][0]], typeof f.aaSorting[e][2] == "undefined" && (f.aaSorting[e][2] = 0), typeof g.aaSorting == "undefined" && typeof f.saved_aaSorting == "undefined" && (f.aaSorting[e][1] = d.asSorting[0]), s = 0;
                    for (u = d.asSorting.length; s < u; s++) if (f.aaSorting[e][1] == d.asSorting[s]) {
                        f.aaSorting[e][2] = s;
                        break
                    }
                }
                V(f), e = i(this).children("thead"), e.length === 0 && (e = [p.createElement("thead")], this.appendChild(e[0])), f.nTHead = e[0], e = i(this).children("tbody"), e.length === 0 && (e = [p.createElement("tbody")], this.appendChild(e[0])), f.nTBody = e[0], e = i(this).children("tfoot"), e.length > 0 && (f.nTFoot = e[0], Y(f.aoFooter, f.nTFoot));
                if (h) for (e = 0; e < g.aaData.length; e++) v(f, g.aaData[e]);
                else $(f);
                f.aiDisplay = f.aiDisplayMaster.slice(), f.bInitialised = !0, c === !1 && t(f)
            }
        })
    }
}(jQuery, window, document),
function (e) {
    e.uniform = {
        options: {
            selectClass: "selector",
            radioClass: "radio",
            checkboxClass: "checker",
            fileClass: "uploader",
            filenameClass: "filename",
            fileBtnClass: "action",
            fileDefaultText: "No file selected",
            fileBtnText: "Choose File",
            checkedClass: "checked",
            focusClass: "focus",
            disabledClass: "disabled",
            buttonClass: "button",
            activeClass: "active",
            hoverClass: "hover",
            useID: !0,
            idPrefix: "uniform",
            resetSelector: !1,
            autoHide: !0
        },
        elements: []
    }, e.browser.msie && e.browser.version < 7 ? e.support.selectOpacity = !1 : e.support.selectOpacity = !0, e.fn.uniform = function (t) {
        function r(t) {
            $el = e(t), $el.addClass($el.attr("type")), c(t)
        }
        function i(t) {
            e(t).addClass("uniform"), c(t)
        }
        function s(n) {
            var r = e(n),
                i = e("<div>"),
                s = e("<span>");
            i.addClass(t.buttonClass), t.useID && r.attr("id") != "" && i.attr("id", t.idPrefix + "-" + r.attr("id"));
            var o;
            if (r.is("a") || r.is("button")) o = r.text();
            else if (r.is(":submit") || r.is(":reset") || r.is("input[type=button]")) o = r.attr("value");
            o = o == "" ? r.is(":reset") ? "Reset" : "Submit" : o, s.html(o), r.css("opacity", 0), r.wrap(i), r.wrap(s), i = r.closest("div"), s = r.closest("span"), r.is(":disabled") && i.addClass(t.disabledClass), i.bind({
                "mouseenter.uniform": function () {
                    i.addClass(t.hoverClass)
                },
                "mouseleave.uniform": function () {
                    i.removeClass(t.hoverClass), i.removeClass(t.activeClass)
                },
                "mousedown.uniform touchbegin.uniform": function () {
                    i.addClass(t.activeClass)
                },
                "mouseup.uniform touchend.uniform": function () {
                    i.removeClass(t.activeClass)
                },
                "click.uniform touchend.uniform": function (t) {
                    if (e(t.target).is("span") || e(t.target).is("div")) if (n[0].dispatchEvent) {
                        var r = document.createEvent("MouseEvents");
                        r.initEvent("click", !0, !0), n[0].dispatchEvent(r)
                    } else n[0].click()
                }
            }), n.bind({
                "focus.uniform": function () {
                    i.addClass(t.focusClass)
                },
                "blur.uniform": function () {
                    i.removeClass(t.focusClass)
                }
            }), e.uniform.noSelect(i), c(n)
        }
        function o(n) {
            var r = e(n),
                i = e("<div />"),
                s = e("<span />");
            !r.css("display") == "none" && t.autoHide && i.hide(), i.addClass(t.selectClass), t.useID && n.attr("id") != "" && i.attr("id", t.idPrefix + "-" + n.attr("id"));
            var o = n.find(":selected:first");
            o.length == 0 && (o = n.find("option:first")), s.html(o.html()), n.css("opacity", 0), n.wrap(i), n.before(s), i = n.parent("div"), s = n.siblings("span"), n.bind({
                "change.uniform": function () {
                    s.text(n.find(":selected").html()), i.removeClass(t.activeClass)
                },
                "focus.uniform": function () {
                    i.addClass(t.focusClass)
                },
                "blur.uniform": function () {
                    i.removeClass(t.focusClass), i.removeClass(t.activeClass)
                },
                "mousedown.uniform touchbegin.uniform": function () {
                    i.addClass(t.activeClass)
                },
                "mouseup.uniform touchend.uniform": function () {
                    i.removeClass(t.activeClass)
                },
                "click.uniform touchend.uniform": function () {
                    i.removeClass(t.activeClass)
                },
                "mouseenter.uniform": function () {
                    i.addClass(t.hoverClass)
                },
                "mouseleave.uniform": function () {
                    i.removeClass(t.hoverClass), i.removeClass(t.activeClass)
                },
                "keyup.uniform": function () {
                    s.text(n.find(":selected").html())
                }
            }), e(n).attr("disabled") && i.addClass(t.disabledClass), e.uniform.noSelect(s), c(n)
        }
        function u(n) {
            var r = e(n),
                i = e("<div />"),
                s = e("<span />");
            !r.css("display") == "none" && t.autoHide && i.hide(), i.addClass(t.checkboxClass), t.useID && n.attr("id") != "" && i.attr("id", t.idPrefix + "-" + n.attr("id")), e(n).wrap(i), e(n).wrap(s), s = n.parent(), i = s.parent(), e(n).css("opacity", 0).bind({
                "focus.uniform": function () {
                    i.addClass(t.focusClass)
                },
                "blur.uniform": function () {
                    i.removeClass(t.focusClass)
                },
                "click.uniform touchend.uniform": function () {
                    e(n).attr("checked") ? s.addClass(t.checkedClass) : s.removeClass(t.checkedClass)
                },
                "mousedown.uniform touchbegin.uniform": function () {
                    i.addClass(t.activeClass)
                },
                "mouseup.uniform touchend.uniform": function () {
                    i.removeClass(t.activeClass)
                },
                "mouseenter.uniform": function () {
                    i.addClass(t.hoverClass)
                },
                "mouseleave.uniform": function () {
                    i.removeClass(t.hoverClass), i.removeClass(t.activeClass)
                }
            }), e(n).attr("checked") && s.addClass(t.checkedClass), e(n).attr("disabled") && i.addClass(t.disabledClass), c(n)
        }
        function f(n) {
            var r = e(n),
                i = e("<div />"),
                s = e("<span />");
            !r.css("display") == "none" && t.autoHide && i.hide(), i.addClass(t.radioClass), t.useID && n.attr("id") != "" && i.attr("id", t.idPrefix + "-" + n.attr("id")), e(n).wrap(i), e(n).wrap(s), s = n.parent(), i = s.parent(), e(n).css("opacity", 0).bind({
                "focus.uniform": function () {
                    i.addClass(t.focusClass)
                },
                "blur.uniform": function () {
                    i.removeClass(t.focusClass)
                },
                "click.uniform touchend.uniform": function () {
                    if (!e(n).attr("checked")) s.removeClass(t.checkedClass);
                    else {
                        var r = t.radioClass.split(" ")[0];
                        e("." + r + " span." + t.checkedClass + ":has([name='" + e(n).attr("name") + "'])").removeClass(t.checkedClass), s.addClass(t.checkedClass)
                    }
                },
                "mousedown.uniform touchend.uniform": function () {
                    e(n).is(":disabled") || i.addClass(t.activeClass)
                },
                "mouseup.uniform touchbegin.uniform": function () {
                    i.removeClass(t.activeClass)
                },
                "mouseenter.uniform touchend.uniform": function () {
                    i.addClass(t.hoverClass)
                },
                "mouseleave.uniform": function () {
                    i.removeClass(t.hoverClass), i.removeClass(t.activeClass)
                }
            }), e(n).attr("checked") && s.addClass(t.checkedClass), e(n).attr("disabled") && i.addClass(t.disabledClass), c(n)
        }
        function l(n) {
            var r = e(n),
                i = e("<div />"),
                s = e("<span>" + t.fileDefaultText + "</span>"),
                o = e("<span>" + t.fileBtnText + "</span>");
            !r.css("display") == "none" && t.autoHide && i.hide(), i.addClass(t.fileClass), s.addClass(t.filenameClass), o.addClass(t.fileBtnClass), t.useID && r.attr("id") != "" && i.attr("id", t.idPrefix + "-" + r.attr("id")), r.wrap(i), r.after(o), r.after(s), i = r.closest("div"), s = r.siblings("." + t.filenameClass), o = r.siblings("." + t.fileBtnClass);
            if (!r.attr("size")) {
                var u = i.width();
                r.attr("size", u / 10)
            }
            var f = function () {
                var e = r.val();
                e === "" ? e = t.fileDefaultText : (e = e.split(/[\/\\]+/), e = e[e.length - 1]), s.text(e)
            };
            f(), r.css("opacity", 0).bind({
                "focus.uniform": function () {
                    i.addClass(t.focusClass)
                },
                "blur.uniform": function () {
                    i.removeClass(t.focusClass)
                },
                "mousedown.uniform": function () {
                    e(n).is(":disabled") || i.addClass(t.activeClass)
                },
                "mouseup.uniform": function () {
                    i.removeClass(t.activeClass)
                },
                "mouseenter.uniform": function () {
                    i.addClass(t.hoverClass)
                },
                "mouseleave.uniform": function () {
                    i.removeClass(t.hoverClass), i.removeClass(t.activeClass)
                }
            }), e.browser.msie ? r.bind("click.uniform.ie7", function () {
                setTimeout(f, 0)
            }) : r.bind("change.uniform", f), r.attr("disabled") && i.addClass(t.disabledClass), e.uniform.noSelect(s), e.uniform.noSelect(o), c(n)
        }
        function c(t) {
            t = e(t).get(), t.length > 1 ? e.each(t, function (t, n) {
                e.uniform.elements.push(n)
            }) : e.uniform.elements.push(t)
        }
        t = e.extend(e.uniform.options, t);
        var n = this;
        return t.resetSelector != 0 && e(t.resetSelector).mouseup(function () {
            function t() {
                e.uniform.update(n)
            }
            setTimeout(t, 10)
        }), e.uniform.restore = function (t) {
            t == undefined && (t = e(e.uniform.elements)), e(t).each(function () {
                e(this).is(":checkbox") ? e(this).unwrap().unwrap() : e(this).is("select") ? (e(this).siblings("span").remove(), e(this).unwrap()) : e(this).is(":radio") ? e(this).unwrap().unwrap() : e(this).is(":file") ? (e(this).siblings("span").remove(), e(this).unwrap()) : e(this).is("button, :submit, :reset, a, input[type='button']") && e(this).unwrap().unwrap(), e(this).unbind(".uniform"), e(this).css("opacity", "1");
                var n = e.inArray(e(t), e.uniform.elements);
                e.uniform.elements.splice(n, 1)
            })
        }, e.uniform.noSelect = function (t) {
            function n() {
                return !1
            }
            e(t).each(function () {
                this.onselectstart = this.ondragstart = n, e(this).mousedown(n).css({
                    MozUserSelect: "none"
                })
            })
        }, e.uniform.update = function (n) {
            n == undefined && (n = e(e.uniform.elements)), n = e(n), n.each(function () {
                var r = e(this);
                if (r.is("select")) {
                    var i = r.siblings("span"),
                        s = r.parent("div");
                    s.removeClass(t.hoverClass + " " + t.focusClass + " " + t.activeClass), i.html(r.find(":selected").html()), r.is(":disabled") ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass)
                } else if (r.is(":checkbox")) {
                    var i = r.closest("span"),
                        s = r.closest("div");
                    s.removeClass(t.hoverClass + " " + t.focusClass + " " + t.activeClass), i.removeClass(t.checkedClass), r.is(":checked") && i.addClass(t.checkedClass), r.is(":disabled") ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass)
                } else if (r.is(":radio")) {
                    var i = r.closest("span"),
                        s = r.closest("div");
                    s.removeClass(t.hoverClass + " " + t.focusClass + " " + t.activeClass), i.removeClass(t.checkedClass), r.is(":checked") && i.addClass(t.checkedClass), r.is(":disabled") ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass)
                } else if (r.is(":file")) {
                    var s = r.parent("div"),
                        o = r.siblings(t.filenameClass);
                    btnTag = r.siblings(t.fileBtnClass), s.removeClass(t.hoverClass + " " + t.focusClass + " " + t.activeClass), o.text(r.val()), r.is(":disabled") ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass)
                } else if (r.is(":submit") || r.is(":reset") || r.is("button") || r.is("a") || n.is("input[type=button]")) {
                    var s = r.closest("div");
                    s.removeClass(t.hoverClass + " " + t.focusClass + " " + t.activeClass), r.is(":disabled") ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass)
                }
            })
        }, this.each(function () {
            if (e.support.selectOpacity) {
                var t = e(this);
                t.is("select") ? t.attr("multiple") != 1 && (t.attr("size") == undefined || t.attr("size") <= 1) && o(t) : t.is(":checkbox") ? u(t) : t.is(":radio") ? f(t) : t.is(":file") ? l(t) : t.is(":text, :password, input[type='email']") ? r(t) : t.is("textarea") ? i(t) : (t.is("a") || t.is(":submit") || t.is(":reset") || t.is("button") || t.is("input[type=button]")) && s(t)
            }
        })
    }
}(jQuery),
function ($, undefined) {
    function Timepicker() {
        this.debug = !0, this._curInst = null, this._isInline = !1, this._disabledInputs = [], this._timepickerShowing = !1, this._inDialog = !1, this._dialogClass = "ui-timepicker-dialog", this._mainDivId = "ui-timepicker-div", this._inlineClass = "ui-timepicker-inline", this._currentClass = "ui-timepicker-current", this._dayOverClass = "ui-timepicker-days-cell-over", this.regional = [], this.regional[""] = {
            hourText: "Hour",
            minuteText: "Minute",
            amPmText: ["AM", "PM"],
            closeButtonText: "Done",
            nowButtonText: "Now",
            deselectButtonText: "Deselect"
        }, this._defaults = {
            showOn: "focus",
            button: null,
            showAnim: "fadeIn",
            showOptions: {},
            appendText: "",
            beforeShow: null,
            onSelect: null,
            onClose: null,
            timeSeparator: ":",
            periodSeparator: " ",
            showPeriod: !1,
            showPeriodLabels: !0,
            showLeadingZero: !0,
            showMinutesLeadingZero: !0,
            altField: "",
            defaultTime: "now",
            myPosition: "left top",
            atPosition: "left bottom",
            onHourShow: null,
            onMinuteShow: null,
            hours: {
                starts: 0,
                ends: 23
            },
            minutes: {
                starts: 0,
                ends: 55,
                interval: 5
            },
            rows: 4,
            showHours: !0,
            showMinutes: !0,
            optionalMinutes: !1,
            showCloseButton: !1,
            showNowButton: !1,
            showDeselectButton: !1
        }, $.extend(this._defaults, this.regional[""]), this.tpDiv = $('<div id="' + this._mainDivId + '" class="ui-timepicker ui-widget ui-helper-clearfix ui-corner-all " style="display: none"></div>')
    }
    function extendRemove(e, t) {
        $.extend(e, t);
        for (var n in t) if (t[n] == null || t[n] == undefined) e[n] = t[n];
        return e
    }
    $.extend($.ui, {
        timepicker: {
            version: "0.2.9"
        }
    });
    var PROP_NAME = "timepicker",
        tpuuid = (new Date).getTime();
    $.extend(Timepicker.prototype, {
        markerClassName: "hasTimepicker",
        log: function () {
            this.debug && console.log.apply("", arguments)
        },
        _widgetTimepicker: function () {
            return this.tpDiv
        },
        setDefaults: function (e) {
            return extendRemove(this._defaults, e || {}), this
        },
        _attachTimepicker: function (target, settings) {
            var inlineSettings = null;
            for (var attrName in this._defaults) {
                var attrValue = target.getAttribute("time:" + attrName);
                if (attrValue) {
                    inlineSettings = inlineSettings || {};
                    try {
                        inlineSettings[attrName] = eval(attrValue)
                    } catch (err) {
                        inlineSettings[attrName] = attrValue
                    }
                }
            }
            var nodeName = target.nodeName.toLowerCase(),
                inline = nodeName == "div" || nodeName == "span";
            target.id || (this.uuid += 1, target.id = "tp" + this.uuid);
            var inst = this._newInst($(target), inline);
            inst.settings = $.extend({}, settings || {}, inlineSettings || {}), nodeName == "input" ? (this._connectTimepicker(target, inst), this._setTimeFromField(inst)) : inline && this._inlineTimepicker(target, inst)
        },
        _newInst: function (e, t) {
            var n = e[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
            return {
                id: n,
                input: e,
                inline: t,
                tpDiv: t ? $('<div class="' + this._inlineClass + ' ui-timepicker ui-widget  ui-helper-clearfix"></div>') : this.tpDiv
            }
        },
        _connectTimepicker: function (e, t) {
            var n = $(e);
            t.append = $([]), t.trigger = $([]);
            if (n.hasClass(this.markerClassName)) return;
            this._attachments(n, t), n.addClass(this.markerClassName).keydown(this._doKeyDown).keyup(this._doKeyUp).bind("setData.timepicker", function (e, n, r) {
                t.settings[n] = r
            }).bind("getData.timepicker", function (e, n) {
                return this._get(t, n)
            }), $.data(e, PROP_NAME, t)
        },
        _doKeyDown: function (e) {
            var t = $.timepicker._getInst(e.target),
                n = !0;
            t._keyEvent = !0;
            if ($.timepicker._timepickerShowing) switch (e.keyCode) {
                case 9:
                    $.timepicker._hideTimepicker(), n = !1;
                    break;
                case 13:
                    return $.timepicker._updateSelectedValue(t), $.timepicker._hideTimepicker(), !1;
                case 27:
                    $.timepicker._hideTimepicker();
                    break;
                default:
                    n = !1
            } else e.keyCode == 36 && e.ctrlKey ? $.timepicker._showTimepicker(this) : n = !1;
            n && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyUp: function (e) {
            var t = $.timepicker._getInst(e.target);
            $.timepicker._setTimeFromField(t), $.timepicker._updateTimepicker(t)
        },
        _attachments: function (e, t) {
            var n = this._get(t, "appendText"),
                r = this._get(t, "isRTL");
            t.append && t.append.remove(), n && (t.append = $('<span class="' + this._appendClass + '">' + n + "</span>"), e[r ? "before" : "after"](t.append)), e.unbind("focus.timepicker", this._showTimepicker), t.trigger && t.trigger.remove();
            var i = this._get(t, "showOn");
            (i == "focus" || i == "both") && e.bind("focus.timepicker", this._showTimepicker);
            if (i == "button" || i == "both") {
                var s = this._get(t, "button");
                $(s).bind("click.timepicker", function () {
                    return $.timepicker._timepickerShowing && $.timepicker._lastInput == e[0] ? $.timepicker._hideTimepicker() : $.timepicker._showTimepicker(e[0]), !1
                })
            }
        },
        _inlineTimepicker: function (e, t) {
            var n = $(e);
            if (n.hasClass(this.markerClassName)) return;
            n.addClass(this.markerClassName).append(t.tpDiv).bind("setData.timepicker", function (e, n, r) {
                t.settings[n] = r
            }).bind("getData.timepicker", function (e, n) {
                return this._get(t, n)
            }), $.data(e, PROP_NAME, t), this._setTimeFromField(t), this._updateTimepicker(t), t.tpDiv.show()
        },
        _showTimepicker: function (e) {
            e = e.target || e, e.nodeName.toLowerCase() != "input" && (e = $("input", e.parentNode)[0]);
            if ($.timepicker._isDisabledTimepicker(e) || $.timepicker._lastInput == e) return;
            $.timepicker._hideTimepicker();
            var t = $.timepicker._getInst(e);
            $.timepicker._curInst && $.timepicker._curInst != t && $.timepicker._curInst.tpDiv.stop(!0, !0);
            var n = $.timepicker._get(t, "beforeShow");
            extendRemove(t.settings, n ? n.apply(e, [e, t]) : {}), t.lastVal = null, $.timepicker._lastInput = e, $.timepicker._setTimeFromField(t), $.timepicker._inDialog && (e.value = ""), $.timepicker._pos || ($.timepicker._pos = $.timepicker._findPos(e), $.timepicker._pos[1] += e.offsetHeight);
            var r = !1;
            $(e).parents().each(function () {
                return r |= $(this).css("position") == "fixed", !r
            }), r && $.browser.opera && ($.timepicker._pos[0] -= document.documentElement.scrollLeft, $.timepicker._pos[1] -= document.documentElement.scrollTop);
            var i = {
                left: $.timepicker._pos[0],
                top: $.timepicker._pos[1]
            };
            $.timepicker._pos = null, t.tpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            }), $.timepicker._updateTimepicker(t);
            if (!t.inline && typeof $.ui.position == "object") {
                t.tpDiv.position({
                    of: t.input,
                    my: $.timepicker._get(t, "myPosition"),
                    at: $.timepicker._get(t, "atPosition"),
                    collision: "flip"
                });
                var i = t.tpDiv.offset();
                $.timepicker._pos = [i.top, i.left]
            }
            t._hoursClicked = !1, t._minutesClicked = !1, i = $.timepicker._checkOffset(t, i, r), t.tpDiv.css({
                position: $.timepicker._inDialog && $.blockUI ? "static" : r ? "fixed" : "absolute",
                display: "none",
                left: i.left + "px",
                top: i.top + "px"
            });
            if (!t.inline) {
                var s = $.timepicker._get(t, "showAnim"),
                    o = $.timepicker._get(t, "duration"),
                    u = function () {
                        $.timepicker._timepickerShowing = !0;
                        var e = $.timepicker._getBorders(t.tpDiv);
                        t.tpDiv.find("iframe.ui-timepicker-cover").css({
                            left: -e[0],
                            top: -e[1],
                            width: t.tpDiv.outerWidth(),
                            height: t.tpDiv.outerHeight()
                        })
                    };
                t.tpDiv.css("zIndex", $.timepicker._getZIndex(e) + 1), $.effects && $.effects[s] ? t.tpDiv.show(s, $.timepicker._get(t, "showOptions"), o, u) : t.tpDiv[s || "show"](s ? o : null, u), (!s || !o) && u(), t.input.is(":visible") && !t.input.is(":disabled") && t.input.focus(), $.timepicker._curInst = t
            }
        },
        _getZIndex: function (e) {
            var t = $(e),
                n, r;
            while (t.length && t[0] !== document) {
                n = t.css("position");
                if (n === "absolute" || n === "relative" || n === "fixed") {
                    r = parseInt(t.css("zIndex"), 10);
                    if (!isNaN(r) && r !== 0) return r
                }
                t = t.parent()
            }
        },
        _updateTimepicker: function (e) {
            e.tpDiv.empty().append(this._generateHTML(e)), this._rebindDialogEvents(e)
        },
        _rebindDialogEvents: function (e) {
            var t = $.timepicker._getBorders(e.tpDiv),
                n = this;
            e.tpDiv.find("iframe.ui-timepicker-cover").css({
                left: -t[0],
                top: -t[1],
                width: e.tpDiv.outerWidth(),
                height: e.tpDiv.outerHeight()
            }).end().find(".ui-timepicker-minute-cell").unbind().bind("click", {
                fromDoubleClick: !1
            }, $.proxy($.timepicker.selectMinutes, this)).bind("dblclick", {
                fromDoubleClick: !0
            }, $.proxy($.timepicker.selectMinutes, this)).end().find(".ui-timepicker-hour-cell").unbind().bind("click", {
                fromDoubleClick: !1
            }, $.proxy($.timepicker.selectHours, this)).bind("dblclick", {
                fromDoubleClick: !0
            }, $.proxy($.timepicker.selectHours, this)).end().find(".ui-timepicker td a").unbind().bind("mouseout", function () {
                $(this).removeClass("ui-state-hover"), this.className.indexOf("ui-timepicker-prev") != -1 && $(this).removeClass("ui-timepicker-prev-hover"), this.className.indexOf("ui-timepicker-next") != -1 && $(this).removeClass("ui-timepicker-next-hover")
            }).bind("mouseover", function () {
                n._isDisabledTimepicker(e.inline ? e.tpDiv.parent()[0] : e.input[0]) || ($(this).parents(".ui-timepicker-calendar").find("a").removeClass("ui-state-hover"), $(this).addClass("ui-state-hover"), this.className.indexOf("ui-timepicker-prev") != -1 && $(this).addClass("ui-timepicker-prev-hover"), this.className.indexOf("ui-timepicker-next") != -1 && $(this).addClass("ui-timepicker-next-hover"))
            }).end().find("." + this._dayOverClass + " a").trigger("mouseover").end().find(".ui-timepicker-now").bind("click", function (e) {
                $.timepicker.selectNow(e)
            }).end().find(".ui-timepicker-deselect").bind("click", function (e) {
                $.timepicker.deselectTime(e)
            }).end().find(".ui-timepicker-close").bind("click", function (e) {
                $.timepicker._hideTimepicker()
            }).end()
        },
        _generateHTML: function (e) {
            var t, n, r, i, s, o, u = "",
                a = this._get(e, "showPeriod") == 1,
                f = this._get(e, "showPeriodLabels") == 1,
                l = this._get(e, "showLeadingZero") == 1,
                c = this._get(e, "showHours") == 1,
                h = this._get(e, "showMinutes") == 1,
                p = this._get(e, "amPmText"),
                d = this._get(e, "rows"),
                v = 0,
                m = 0,
                g = 0,
                y = 0,
                b = 0,
                w = 0,
                E = Array(),
                S = this._get(e, "hours"),
                x = null,
                T = 0,
                N = this._get(e, "hourText"),
                C = this._get(e, "showCloseButton"),
                k = this._get(e, "closeButtonText"),
                L = this._get(e, "showNowButton"),
                A = this._get(e, "nowButtonText"),
                O = this._get(e, "showDeselectButton"),
                M = this._get(e, "deselectButtonText"),
                _ = C || L || O;
            for (t = S.starts; t <= S.ends; t++) E.push(t);
            x = Math.ceil(E.length / d);
            if (f) {
                for (T = 0; T < E.length; T++) E[T] < 12 ? g++ : y++;
                T = 0, v = Math.floor(g / E.length * d), m = Math.floor(y / E.length * d), d != v + m && (g && (!y || !v || m && g / v >= y / m) ? v++ : m++), b = Math.min(v, 1), w = v + 1, x = Math.ceil(Math.max(g / v, y / m))
            }
            s = '<table class="ui-timepicker-table ui-widget-content ui-corner-all"><tr>';
            if (c) {
                s += '<td class="ui-timepicker-hours"><div class="ui-timepicker-title ui-widget-header ui-helper-clearfix ui-corner-all">' + N + "</div>" + '<table class="ui-timepicker">';
                for (r = 1; r <= d; r++) {
                    s += "<tr>", r == b && f && (s += '<th rowspan="' + v.toString() + '" class="periods" scope="row">' + p[0] + "</th>"), r == w && f && (s += '<th rowspan="' + m.toString() + '" class="periods" scope="row">' + p[1] + "</th>");
                    for (i = 1; i <= x; i++) f && r < w && E[T] >= 12 ? s += this._generateHTMLHourCell(e, undefined, a, l) : (s += this._generateHTMLHourCell(e, E[T], a, l), T++);
                    s += "</tr>"
                }
                s += "</tr></table></td>"
            }
            h && (s += '<td class="ui-timepicker-minutes">', s += this._generateHTMLMinutes(e), s += "</td>"), s += "</tr>";
            if (_) {
                var D = '<tr><td colspan="3"><div class="ui-timepicker-buttonpane ui-widget-content">';
                L && (D += '<button type="button" class="ui-timepicker-now ui-state-default ui-corner-all"  data-timepicker-instance-id="#' + e.id.replace(/\\\\/g, "\\") + '" >' + A + "</button>"), O && (D += '<button type="button" class="ui-timepicker-deselect ui-state-default ui-corner-all"  data-timepicker-instance-id="#' + e.id.replace(/\\\\/g, "\\") + '" >' + M + "</button>"), C && (D += '<button type="button" class="ui-timepicker-close ui-state-default ui-corner-all"  data-timepicker-instance-id="#' + e.id.replace(/\\\\/g, "\\") + '" >' + k + "</button>"), s += D + "</div></td></tr>"
            }
            return s += "</table>", s += $.browser.msie && parseInt($.browser.version, 10) < 7 && !e.inline ? '<iframe src="javascript:false;" class="ui-timepicker-cover" frameborder="0"></iframe>' : "", s
        },
        _updateMinuteDisplay: function (e) {
            var t = this._generateHTMLMinutes(e);
            e.tpDiv.find("td.ui-timepicker-minutes").html(t), this._rebindDialogEvents(e)
        },
        _generateHTMLMinutes: function (e) {
            var t, n, r = "",
                i = this._get(e, "rows"),
                s = Array(),
                o = this._get(e, "minutes"),
                u = null,
                a = 0,
                f = this._get(e, "showMinutesLeadingZero") == 1,
                l = this._get(e, "onMinuteShow"),
                c = this._get(e, "minuteText");
            o.starts || (o.starts = 0), o.ends || (o.ends = 59);
            for (t = o.starts; t <= o.ends; t += o.interval) s.push(t);
            u = Math.round(s.length / i + .49);
            if (l && l.apply(e.input ? e.input[0] : null, [e.hours, e.minutes]) == 0) for (a = 0; a < s.length; a += 1) {
                t = s[a];
                if (l.apply(e.input ? e.input[0] : null, [e.hours, t])) {
                    e.minutes = t;
                    break
                }
            }
            r += '<div class="ui-timepicker-title ui-widget-header ui-helper-clearfix ui-corner-all">' + c + "</div>" + '<table class="ui-timepicker">', a = 0;
            for (n = 1; n <= i; n++) {
                r += "<tr>";
                while (a < n * u) {
                    var t = s[a],
                        h = "";
                    t !== undefined && (h = t < 10 && f ? "0" + t.toString() : t.toString()), r += this._generateHTMLMinuteCell(e, t, h), a++
                }
                r += "</tr>"
            }
            return r += "</table>", r
        },
        _generateHTMLHourCell: function (e, t, n, r) {
            var i = t;
            t > 12 && n && (i = t - 12), i == 0 && n && (i = 12), i < 10 && r && (i = "0" + i);
            var s = "",
                o = !0,
                u = this._get(e, "onHourShow");
            return t == undefined ? (s = '<td><span class="ui-state-default ui-state-disabled">&nbsp;</span></td>', s) : (u && (o = u.apply(e.input ? e.input[0] : null, [t])), o ? s = '<td class="ui-timepicker-hour-cell" data-timepicker-instance-id="#' + e.id.replace(/\\\\/g, "\\") + '" data-hour="' + t.toString() + '">' + '<a class="ui-state-default ' + (t == e.hours ? "ui-state-active" : "") + '">' + i.toString() + "</a></td>" : s = '<td><span class="ui-state-default ui-state-disabled ' + (t == e.hours ? " ui-state-active " : " ") + '">' + i.toString() + "</span>" + "</td>", s)
        },
        _generateHTMLMinuteCell: function (e, t, n) {
            var r = "",
                i = !0,
                s = this._get(e, "onMinuteShow");
            return s && (i = s.apply(e.input ? e.input[0] : null, [e.hours, t])), t == undefined ? (r = '<td><span class="ui-state-default ui-state-disabled">&nbsp;</span></td>', r) : (i ? r = '<td class="ui-timepicker-minute-cell" data-timepicker-instance-id="#' + e.id.replace(/\\\\/g, "\\") + '" data-minute="' + t.toString() + '" >' + '<a class="ui-state-default ' + (t == e.minutes ? "ui-state-active" : "") + '" >' + n + "</a></td>" : r = '<td><span class="ui-state-default ui-state-disabled" >' + n + "</span>" + "</td>", r)
        },
        _enableTimepicker: function (e) {
            var t = $(e),
                n = t.attr("id"),
                r = $.data(e, PROP_NAME);
            if (!t.hasClass(this.markerClassName)) return;
            var i = e.nodeName.toLowerCase();
            if (i == "input") e.disabled = !1, r.trigger.filter("button").each(function () {
                this.disabled = !1
            }).end();
            else if (i == "div" || i == "span") {
                var s = t.children("." + this._inlineClass);
                s.children().removeClass("ui-state-disabled")
            }
            this._disabledInputs = $.map(this._disabledInputs, function (e) {
                return e == n ? null : e
            })
        },
        _disableTimepicker: function (e) {
            var t = $(e),
                n = $.data(e, PROP_NAME);
            if (!t.hasClass(this.markerClassName)) return;
            var r = e.nodeName.toLowerCase();
            if (r == "input") e.disabled = !0, n.trigger.filter("button").each(function () {
                this.disabled = !0
            }).end();
            else if (r == "div" || r == "span") {
                var i = t.children("." + this._inlineClass);
                i.children().addClass("ui-state-disabled")
            }
            this._disabledInputs = $.map(this._disabledInputs, function (t) {
                return t == e ? null : t
            }), this._disabledInputs[this._disabledInputs.length] = t.attr("id")
        },
        _isDisabledTimepicker: function (e) {
            if (!e) return !1;
            for (var t = 0; t < this._disabledInputs.length; t++) if (this._disabledInputs[t] == e) return !0;
            return !1
        },
        _checkOffset: function (e, t, n) {
            var r = e.tpDiv.outerWidth(),
                i = e.tpDiv.outerHeight(),
                s = e.input ? e.input.outerWidth() : 0,
                o = e.input ? e.input.outerHeight() : 0,
                u = document.documentElement.clientWidth + $(document).scrollLeft(),
                a = document.documentElement.clientHeight + $(document).scrollTop();
            return t.left -= this._get(e, "isRTL") ? r - s : 0, t.left -= n && t.left == e.input.offset().left ? $(document).scrollLeft() : 0, t.top -= n && t.top == e.input.offset().top + o ? $(document).scrollTop() : 0, t.left -= Math.min(t.left, t.left + r > u && u > r ? Math.abs(t.left + r - u) : 0), t.top -= Math.min(t.top, t.top + i > a && a > i ? Math.abs(i + o) : 0), t
        },
        _findPos: function (e) {
            var t = this._getInst(e),
                n = this._get(t, "isRTL");
            while (e && (e.type == "hidden" || e.nodeType != 1)) e = e[n ? "previousSibling" : "nextSibling"];
            var r = $(e).offset();
            return [r.left, r.top]
        },
        _getBorders: function (e) {
            var t = function (e) {
                return {
                    thin: 1,
                    medium: 2,
                    thick: 3
                }[e] || e
            };
            return [parseFloat(t(e.css("border-left-width"))), parseFloat(t(e.css("border-top-width")))]
        },
        _checkExternalClick: function (e) {
            if (!$.timepicker._curInst) return;
            var t = $(e.target);
            t[0].id != $.timepicker._mainDivId && t.parents("#" + $.timepicker._mainDivId).length == 0 && !t.hasClass($.timepicker.markerClassName) && !t.hasClass($.timepicker._triggerClass) && $.timepicker._timepickerShowing && (!$.timepicker._inDialog || !$.blockUI) && $.timepicker._hideTimepicker()
        },
        _hideTimepicker: function (e) {
            var t = this._curInst;
            if (!t || e && t != $.data(e, PROP_NAME)) return;
            if (this._timepickerShowing) {
                var n = this._get(t, "showAnim"),
                    r = this._get(t, "duration"),
                    i = function () {
                        $.timepicker._tidyDialog(t), this._curInst = null
                    };
                $.effects && $.effects[n] ? t.tpDiv.hide(n, $.timepicker._get(t, "showOptions"), r, i) : t.tpDiv[n == "slideDown" ? "slideUp" : n == "fadeIn" ? "fadeOut" : "hide"](n ? r : null, i), n || i();
                var s = this._get(t, "onClose");
                s && s.apply(t.input ? t.input[0] : null, [t.input ? t.input.val() : "", t]), this._timepickerShowing = !1, this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), $.blockUI && ($.unblockUI(), $("body").append(this.tpDiv))), this._inDialog = !1
            }
        },
        _tidyDialog: function (e) {
            e.tpDiv.removeClass(this._dialogClass).unbind(".ui-timepicker")
        },
        _getInst: function (e) {
            try {
                return $.data(e, PROP_NAME)
            } catch (t) {
                throw "Missing instance data for this timepicker"
            }
        },
        _get: function (e, t) {
            return e.settings[t] !== undefined ? e.settings[t] : this._defaults[t]
        },
        _setTimeFromField: function (e) {
            if (e.input.val() == e.lastVal) return;
            var t = this._get(e, "defaultTime"),
                n = t == "now" ? this._getCurrentTimeRounded(e) : t;
            e.inline == 0 && e.input.val() != "" && (n = e.input.val());
            if (n instanceof Date) e.hours = n.getHours(), e.minutes = n.getMinutes();
            else {
                var r = e.lastVal = n;
                if (n == "") e.hours = -1, e.minutes = -1;
                else {
                    var i = this.parseTime(e, r);
                    e.hours = i.hours, e.minutes = i.minutes
                }
            }
            $.timepicker._updateTimepicker(e)
        },
        _optionTimepicker: function (e, t, n) {
            var r = this._getInst(e);
            if (arguments.length == 2 && typeof t == "string") return t == "defaults" ? $.extend({}, $.timepicker._defaults) : r ? t == "all" ? $.extend({}, r.settings) : this._get(r, t) : null;
            var i = t || {};
            typeof t == "string" && (i = {}, i[t] = n), r && (this._curInst == r && this._hideTimepicker(), extendRemove(r.settings, i), this._updateTimepicker(r))
        },
        _setTimeTimepicker: function (e, t) {
            var n = this._getInst(e);
            n && (this._setTime(n, t), this._updateTimepicker(n), this._updateAlternate(n, t))
        },
        _setTime: function (e, t, n) {
            var r = e.hours,
                i = e.minutes,
                t = this.parseTime(e, t);
            e.hours = t.hours, e.minutes = t.minutes, (r != e.hours || i != e.minuts) && !n && e.input.trigger("change"), this._updateTimepicker(e), this._updateSelectedValue(e)
        },
        _getCurrentTimeRounded: function (e) {
            var t = new Date,
                n = t.getMinutes(),
                r = Math.round(n / 5) * 5;
            return t.setMinutes(r), t
        },
        parseTime: function (e, t) {
            var n = new Object;
            n.hours = -1, n.minutes = -1;
            var r = this._get(e, "timeSeparator"),
                i = this._get(e, "amPmText"),
                s = this._get(e, "showHours"),
                o = this._get(e, "showMinutes"),
                u = this._get(e, "optionalMinutes"),
                a = this._get(e, "showPeriod") == 1,
                f = t.indexOf(r);
            f != -1 ? (n.hours = parseInt(t.substr(0, f), 10), n.minutes = parseInt(t.substr(f + 1), 10)) : s && (!o || u) ? n.hours = parseInt(t, 10) : !s && o && (n.minutes = parseInt(t, 10));
            if (s) {
                var l = t.toUpperCase();
                n.hours < 12 && a && l.indexOf(i[1].toUpperCase()) != -1 && (n.hours += 12), n.hours == 12 && a && l.indexOf(i[0].toUpperCase()) != -1 && (n.hours = 0)
            }
            return n
        },
        selectNow: function (e) {
            var t = $(e.target).attr("data-timepicker-instance-id"),
                n = $(t),
                r = this._getInst(n[0]),
                i = new Date;
            r.hours = i.getHours(), r.minutes = i.getMinutes(), this._updateSelectedValue(r), this._updateTimepicker(r), this._hideTimepicker()
        },
        deselectTime: function (e) {
            var t = $(e.target).attr("data-timepicker-instance-id"),
                n = $(t),
                r = this._getInst(n[0]);
            r.hours = -1, r.minutes = -1, this._updateSelectedValue(r), this._hideTimepicker()
        },
        selectHours: function (e) {
            var t = $(e.currentTarget),
                n = t.attr("data-timepicker-instance-id"),
                r = t.attr("data-hour"),
                i = e.data.fromDoubleClick,
                s = $(n),
                o = this._getInst(s[0]),
                u = this._get(o, "showMinutes") == 1;
            if ($.timepicker._isDisabledTimepicker(s.attr("id"))) return !1;
            t.parents(".ui-timepicker-hours:first").find("a").removeClass("ui-state-active"), t.children("a").addClass("ui-state-active"), o.hours = r;
            var a = this._get(o, "onMinuteShow");
            return a && this._updateMinuteDisplay(o), this._updateSelectedValue(o), o._hoursClicked = !0, (o._minutesClicked || i || u == 0) && $.timepicker._hideTimepicker(), !1
        },
        selectMinutes: function (e) {
            var t = $(e.currentTarget),
                n = t.attr("data-timepicker-instance-id"),
                r = t.attr("data-minute"),
                i = e.data.fromDoubleClick,
                s = $(n),
                o = this._getInst(s[0]),
                u = this._get(o, "showHours") == 1;
            return $.timepicker._isDisabledTimepicker(s.attr("id")) ? !1 : (t.parents(".ui-timepicker-minutes:first").find("a").removeClass("ui-state-active"), t.children("a").addClass("ui-state-active"), o.minutes = r, this._updateSelectedValue(o), o._minutesClicked = !0, o._hoursClicked || i || u == 0 ? ($.timepicker._hideTimepicker(), !1) : !1)
        },
        _updateSelectedValue: function (e) {
            var t = this._getParsedTime(e);
            e.input && (e.input.val(t), e.input.trigger("change"));
            var n = this._get(e, "onSelect");
            return n && n.apply(e.input ? e.input[0] : null, [t, e]), this._updateAlternate(e, t), t
        },
        _getParsedTime: function (e) {
            if (e.hours == -1 && e.minutes == -1) return "";
            if (e.hours < 0 || e.hours > 23) e.hours = 12;
            if (e.minutes < 0 || e.minutes > 59) e.minutes = 0;
            var t = "",
                n = this._get(e, "showPeriod") == 1,
                r = this._get(e, "showLeadingZero") == 1,
                i = this._get(e, "showHours") == 1,
                s = this._get(e, "showMinutes") == 1,
                o = this._get(e, "optionalMinutes") == 1,
                u = this._get(e, "amPmText"),
                a = e.hours ? e.hours : 0,
                f = e.minutes ? e.minutes : 0,
                l = a ? a : 0,
                c = "";
            n && (e.hours == 0 && (l = 12), e.hours < 12 ? t = u[0] : (t = u[1], l > 12 && (l -= 12)));
            var h = l.toString();
            r && l < 10 && (h = "0" + h);
            var p = f.toString();
            return f < 10 && (p = "0" + p), i && (c += h), i && s && (!o || p != 0) && (c += this._get(e, "timeSeparator")), s && (!o || p != 0) && (c += p), i && t.length > 0 && (c += this._get(e, "periodSeparator") + t), c
        },
        _updateAlternate: function (e, t) {
            var n = this._get(e, "altField");
            n && $(n).each(function (e, n) {
                $(n).val(t)
            })
        },
        _getTimeTimepicker: function (e) {
            var t = this._getInst(e);
            return this._getParsedTime(t)
        },
        _getHourTimepicker: function (e) {
            var t = this._getInst(e);
            return t == undefined ? -1 : t.hours
        },
        _getMinuteTimepicker: function (e) {
            var t = this._getInst(e);
            return t == undefined ? -1 : t.minutes
        }
    }), $.fn.timepicker = function (e) {
        $.timepicker.initialized || ($(document).mousedown($.timepicker._checkExternalClick).find("body").append($.timepicker.tpDiv), $.timepicker.initialized = !0);
        var t = Array.prototype.slice.call(arguments, 1);
        return typeof e != "string" || e != "getTime" && e != "getHour" && e != "getMinute" ? e == "option" && arguments.length == 2 && typeof arguments[1] == "string" ? $.timepicker["_" + e + "Timepicker"].apply($.timepicker, [this[0]].concat(t)) : this.each(function () {
            typeof e == "string" ? $.timepicker["_" + e + "Timepicker"].apply($.timepicker, [this].concat(t)) : $.timepicker._attachTimepicker(this, e)
        }) : $.timepicker["_" + e + "Timepicker"].apply($.timepicker, [this[0]].concat(t))
    }, $.timepicker = new Timepicker, $.timepicker.initialized = !1, $.timepicker.uuid = (new Date).getTime(), $.timepicker.version = "0.2.9", window["TP_jQuery_" + tpuuid] = $
}(jQuery),
function (e, t) {
    function n(t) {
        e.extend(!0, gt, t)
    }
    function r(n, r, f) {
        function l(e) {
            tt ? (T(), x(), _(), b(e)) : c()
        }
        function c() {
            nt = r.theme ? "ui" : "fc", n.addClass("fc"), r.isRTL && n.addClass("fc-rtl"), r.theme && n.addClass("ui-widget"), tt = e("<div class='fc-content' style='position:relative'/>").prependTo(n), Z = new i(K, r), (et = Z.render()) && n.prepend(et), y(r.defaultView), e(window).resize(C), g() || p()
        }
        function p() {
            setTimeout(function () {
                !rt.start && g() && b()
            }, 0)
        }
        function d() {
            e(window).unbind("resize", C), Z.destroy(), tt.remove(), n.removeClass("fc fc-rtl ui-widget")
        }
        function v() {
            return Y.offsetWidth !== 0
        }
        function g() {
            return e("body")[0].offsetWidth !== 0
        }
        function y(t) {
            if (!rt || t != rt.name) {
                ft++, P();
                var n = rt,
                    r;
                n ? ((n.beforeHide || q)(), I(tt, tt.height()), n.element.hide()) : I(tt, 1), tt.css("overflow", "hidden"), (rt = it[t]) ? rt.element.show() : rt = it[t] = new wt[t](r = ut = e("<div class='fc-view fc-view-" + t + "' style='position:absolute'/>").appendTo(tt), K), n && Z.deactivateButton(n.name), Z.activateButton(t), b(), tt.css("overflow", ""), n && I(tt, 1), r || (rt.afterShow || q)(), ft--
            }
        }
        function b(e) {
            if (v()) {
                ft++, P(), ot === t && T();
                var r = !1;
                !rt.start || e || lt < rt.start || lt >= rt.end ? (rt.render(lt, e || 0), N(!0), r = !0) : rt.sizeDirty ? (rt.clearEvents(), N(), r = !0) : rt.eventsDirty && (rt.clearEvents(), r = !0), rt.sizeDirty = !1, rt.eventsDirty = !1, k(r), st = n.outerWidth(), Z.updateTitle(rt.title), e = new Date, e >= rt.start && e < rt.end ? Z.disableButton("today") : Z.enableButton("today"), ft--, rt.trigger("viewDisplay", Y)
            }
        }
        function S() {
            x(), v() && (T(), N(), P(), rt.clearEvents(), rt.renderEvents(ct), rt.sizeDirty = !1)
        }
        function x() {
            e.each(it, function (e, t) {
                t.sizeDirty = !0
            })
        }
        function T() {
            ot = r.contentHeight ? r.contentHeight : r.height ? r.height - (et ? et.height() : 0) - H(tt) : Math.round(tt.width() / Math.max(r.aspectRatio, .5))
        }
        function N(e) {
            ft++, rt.setHeight(ot, e), ut && (ut.css("position", "relative"), ut = null), rt.setWidth(tt.width(), e), ft--
        }
        function C() {
            if (!ft) if (rt.start) {
                var e = ++at;
                setTimeout(function () {
                    e == at && !ft && v() && st != (st = n.outerWidth()) && (ft++, S(), rt.trigger("windowResize", Y), ft--)
                }, 200)
            } else p()
        }
        function k(e) {
            !r.lazyFetching || Q(rt.visStart, rt.visEnd) ? L() : e && M()
        }
        function L() {
            G(rt.visStart, rt.visEnd)
        }
        function A(e) {
            ct = e, M()
        }
        function O(e) {
            M(e)
        }
        function M(e) {
            _(), v() && (rt.clearEvents(), rt.renderEvents(ct, e), rt.eventsDirty = !1)
        }
        function _() {
            e.each(it, function (e, t) {
                t.eventsDirty = !0
            })
        }
        function D(e, n, r) {
            rt.select(e, n, r === t ? !0 : r)
        }
        function P() {
            rt && rt.unselect()
        }
        function B() {
            b(-1)
        }
        function j() {
            b(1)
        }
        function F() {
            o(lt, -1), b()
        }
        function R() {
            o(lt, 1), b()
        }
        function U() {
            lt = new Date, b()
        }
        function z(e, t, n) {
            e instanceof Date ? lt = h(e) : m(lt, e, t, n), b()
        }
        function W(e, n, r) {
            e !== t && o(lt, e), n !== t && u(lt, n), r !== t && a(lt, r), b()
        }
        function X() {
            return h(lt)
        }
        function V() {
            return rt
        }
        function $(e, n) {
            if (n === t) return r[e];
            if (e == "height" || e == "contentHeight" || e == "aspectRatio") r[e] = n, S()
        }
        function J(e, t) {
            if (r[e]) return r[e].apply(t || Y, Array.prototype.slice.call(arguments, 2))
        }
        var K = this;
        K.options = r, K.render = l, K.destroy = d, K.refetchEvents = L, K.reportEvents = A, K.reportEventChange = O, K.rerenderEvents = M, K.changeView = y, K.select = D, K.unselect = P, K.prev = B, K.next = j, K.prevYear = F, K.nextYear = R, K.today = U, K.gotoDate = z, K.incrementDate = W, K.formatDate = function (e, t) {
            return w(e, t, r)
        }, K.formatDates = function (e, t, n) {
            return E(e, t, n, r)
        }, K.getDate = X, K.getView = V, K.option = $, K.trigger = J, s.call(K, r, f);
        var Q = K.isFetchNeeded,
            G = K.fetchEvents,
            Y = n[0],
            Z, et, tt, nt, rt, it = {}, st, ot, ut, at = 0,
            ft = 0,
            lt = new Date,
            ct = [],
            ht;
        m(lt, r.year, r.month, r.date), r.droppable && e(document).bind("dragstart", function (t, n) {
            var i = t.target,
                s = e(i);
            if (!s.parents(".fc").length) {
                var o = r.dropAccept;
                if (e.isFunction(o) ? o.call(i, s) : s.is(o)) ht = i, rt.dragStart(ht, t, n)
            }
        }).bind("dragstop", function (e, t) {
            ht && (rt.dragStop(ht, e, t), ht = null)
        })
    }
    function i(t, n) {
        function r() {
            p = n.theme ? "ui" : "fc";
            if (n.header) return h = e("<table class='fc-header' style='width:100%'/>").append(e("<tr/>").append(s("left")).append(s("center")).append(s("right")))
        }
        function i() {
            h.remove()
        }
        function s(r) {
            var i = e("<td class='fc-header-" + r + "'/>");
            return (r = n.header[r]) && e.each(r.split(" "), function (r) {
                r > 0 && i.append("<span class='fc-header-space'/>");
                var s;
                e.each(this.split(","), function (r, o) {
                    if (o == "title") i.append("<span class='fc-header-title'><h2>&nbsp;</h2></span>"), s && s.addClass(p + "-corner-right"), s = null;
                    else {
                        var u;
                        t[o] ? u = t[o] : wt[o] && (u = function () {
                            f.removeClass(p + "-state-hover"), t.changeView(o)
                        });
                        if (u) {
                            r = n.theme ? W(n.buttonIcons, o) : null;
                            var a = W(n.buttonText, o),
                                f = e("<span class='fc-button fc-button-" + o + " " + p + "-state-default'><span class='fc-button-inner'><span class='fc-button-content'>" + (r ? "<span class='fc-icon-wrap'><span class='ui-icon ui-icon-" + r + "'/></span>" : a) + "</span><span class='fc-button-effect'><span></span></span></span></span>");
                            f && (f.click(function () {
                                f.hasClass(p + "-state-disabled") || u()
                            }).mousedown(function () {
                                f.not("." + p + "-state-active").not("." + p + "-state-disabled").addClass(p + "-state-down")
                            }).mouseup(function () {
                                f.removeClass(p + "-state-down")
                            }).hover(function () {
                                f.not("." + p + "-state-active").not("." + p + "-state-disabled").addClass(p + "-state-hover")
                            }, function () {
                                f.removeClass(p + "-state-hover").removeClass(p + "-state-down")
                            }).appendTo(i), s || f.addClass(p + "-corner-left"), s = f)
                        }
                    }
                }), s && s.addClass(p + "-corner-right")
            }), i
        }
        function o(e) {
            h.find("h2").html(e)
        }
        function u(e) {
            h.find("span.fc-button-" + e).addClass(p + "-state-active")
        }
        function a(e) {
            h.find("span.fc-button-" + e).removeClass(p + "-state-active")
        }
        function f(e) {
            h.find("span.fc-button-" + e).addClass(p + "-state-disabled")
        }
        function l(e) {
            h.find("span.fc-button-" + e).removeClass(p + "-state-disabled")
        }
        var c = this;
        c.render = r, c.destroy = i, c.updateTitle = o, c.activateButton = u, c.deactivateButton = a, c.disableButton = f, c.enableButton = l;
        var h = e([]),
            p
    }
    function s(n, r) {
        function i(e, t) {
            return !A || e < A || t > O
        }
        function s(e, t) {
            A = e, O = t, P = [], e = ++M, _ = t = L.length;
            for (var n = 0; n < t; n++) o(L[n], e)
        }
        function o(e, t) {
            u(e, function (n) {
                if (t == M) {
                    if (n) {
                        for (var r = 0; r < n.length; r++) n[r].source = e, b(n[r]);
                        P = P.concat(n)
                    }
                    _--, _ || C(P)
                }
            })
        }
        function u(t, r) {
            var i, s = bt.sourceFetchers,
                o;
            for (i = 0; i < s.length; i++) {
                o = s[i](t, A, O, r);
                if (o === !0) return;
                if (typeof o == "object") {
                    u(o, r);
                    return
                }
            }
            if (i = t.events) e.isFunction(i) ? (m(), i(h(A), h(O), function (e) {
                r(e), y()
            })) : e.isArray(i) ? r(i) : r();
            else if (t.url) {
                var a = t.success,
                    f = t.error,
                    l = t.complete;
                i = e.extend({}, t.data || {}), s = Y(t.startParam, n.startParam), o = Y(t.endParam, n.endParam), s && (i[s] = Math.round(+A / 1e3)), o && (i[o] = Math.round(+O / 1e3)), m(), e.ajax(e.extend({}, Et, t, {
                    data: i,
                    success: function (t) {
                        t = t || [];
                        var n = G(a, this, arguments);
                        e.isArray(n) && (t = n), r(t)
                    },
                    error: function () {
                        G(f, this, arguments), r()
                    },
                    complete: function () {
                        G(l, this, arguments), y()
                    }
                }))
            } else r()
        }
        function a(e) {
            if (e = f(e)) _++, o(e, M)
        }
        function f(t) {
            e.isFunction(t) || e.isArray(t) ? t = {
                events: t
            } : typeof t == "string" && (t = {
                url: t
            });
            if (typeof t == "object") return w(t), L.push(t), t
        }
        function l(t) {
            L = e.grep(L, function (e) {
                return !E(e, t)
            }), P = e.grep(P, function (e) {
                return !E(e.source, t)
            }), C(P)
        }
        function c(e) {
            var t, n = P.length,
                r, i = N().defaultEventEnd,
                s = e.start - e._start,
                o = e.end ? e.end - (e._end || i(e)) : 0;
            for (t = 0; t < n; t++) r = P[t], r._id == e._id && r != e && (r.start = new Date(+r.start + s), r.end = e.end ? r.end ? new Date(+r.end + o) : new Date(+i(r) + o) : null, r.title = e.title, r.url = e.url, r.allDay = e.allDay, r.className = e.className, r.editable = e.editable, r.color = e.color, r.backgroudColor = e.backgroudColor, r.borderColor = e.borderColor, r.textColor = e.textColor, b(r));
            b(e), C(P)
        }
        function p(e, t) {
            b(e), e.source || (t && (k.events.push(e), e.source = k), P.push(e)), C(P)
        }
        function d(t) {
            if (t) {
                if (!e.isFunction(t)) {
                    var n = t + "";
                    t = function (e) {
                        return e._id == n
                    }
                }
                P = e.grep(P, t, !0);
                for (r = 0; r < L.length; r++) e.isArray(L[r].events) && (L[r].events = e.grep(L[r].events, t, !0))
            } else {
                P = [];
                for (var r = 0; r < L.length; r++) e.isArray(L[r].events) && (L[r].events = [])
            }
            C(P)
        }
        function v(t) {
            return e.isFunction(t) ? e.grep(P, t) : t ? (t += "", e.grep(P, function (e) {
                return e._id == t
            })) : P
        }
        function m() {
            D++ || T("loading", null, !0)
        }
        function y() {
            --D || T("loading", null, !1)
        }
        function b(e) {
            var r = e.source || {}, i = Y(r.ignoreTimezone, n.ignoreTimezone);
            e._id = e._id || (e.id === t ? "_fc" + St++ : e.id + ""), e.date && (e.start || (e.start = e.date), delete e.date), e._start = h(e.start = g(e.start, i)), e.end = g(e.end, i), e.end && e.end <= e.start && (e.end = null), e._end = e.end ? h(e.end) : null, e.allDay === t && (e.allDay = Y(r.allDayDefault, n.allDayDefault)), e.className ? typeof e.className == "string" && (e.className = e.className.split(/\s+/)) : e.className = []
        }
        function w(e) {
            e.className ? typeof e.className == "string" && (e.className = e.className.split(/\s+/)) : e.className = [];
            for (var t = bt.sourceNormalizers, n = 0; n < t.length; n++) t[n](e)
        }
        function E(e, t) {
            return e && t && S(e) == S(t)
        }
        function S(e) {
            return (typeof e == "object" ? e.events || e.url : "") || e
        }
        var x = this;
        x.isFetchNeeded = i, x.fetchEvents = s, x.addEventSource = a, x.removeEventSource = l, x.updateEvent = c, x.renderEvent = p, x.removeEvents = d, x.clientEvents = v, x.normalizeEvent = b;
        var T = x.trigger,
            N = x.getView,
            C = x.reportEvents,
            k = {
                events: []
            }, L = [k],
            A, O, M = 0,
            _ = 0,
            D = 0,
            P = [];
        for (x = 0; x < r.length; x++) f(r[x])
    }
    function o(e, t, n) {
        return e.setFullYear(e.getFullYear() + t), n || c(e), e
    }
    function u(e, t, n) {
        if (+e) {
            t = e.getMonth() + t;
            var r = h(e);
            r.setDate(1), r.setMonth(t), e.setMonth(t);
            for (n || c(e); e.getMonth() != r.getMonth();) e.setDate(e.getDate() + (e < r ? 1 : -1))
        }
        return e
    }
    function a(e, t, n) {
        if (+e) {
            t = e.getDate() + t;
            var r = h(e);
            r.setHours(9), r.setDate(t), e.setDate(t), n || c(e), f(e, r)
        }
        return e
    }
    function f(e, t) {
        if (+e) for (; e.getDate() != t.getDate();) e.setTime(+e + (e < t ? 1 : -1) * Nt)
    }
    function l(e, t) {
        return e.setMinutes(e.getMinutes() + t), e
    }
    function c(e) {
        return e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0), e
    }
    function h(e, t) {
        return t ? c(new Date(+e)) : new Date(+e)
    }
    function p() {
        var e = 0,
            t;
        do t = new Date(1970, e++, 1);
        while (t.getHours());
        return t
    }
    function d(e, t, n) {
        for (t = t || 1; !e.getDay() || n && e.getDay() == 1 || !n && e.getDay() == 6;) a(e, t);
        return e
    }
    function v(e, t) {
        return Math.round((h(e, !0) - h(t, !0)) / Tt)
    }
    function m(e, n, r, i) {
        n !== t && n != e.getFullYear() && (e.setDate(1), e.setMonth(0), e.setFullYear(n)), r !== t && r != e.getMonth() && (e.setDate(1), e.setMonth(r)), i !== t && e.setDate(i)
    }
    function g(e, n) {
        return typeof e == "object" ? e : typeof e == "number" ? new Date(e * 1e3) : typeof e == "string" ? e.match(/^\d+(\.\d+)?$/) ? new Date(parseFloat(e) * 1e3) : (n === t && (n = !0), y(e, n) || (e ? new Date(e) : null)) : null
    }
    function y(e, t) {
        e = e.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/);
        if (!e) return null;
        var n = new Date(e[1], 0, 1);
        return t || !e[13] ? (t = new Date(e[1], 0, 1, 9, 0), e[3] && (n.setMonth(e[3] - 1), t.setMonth(e[3] - 1)), e[5] && (n.setDate(e[5]), t.setDate(e[5])), f(n, t), e[7] && n.setHours(e[7]), e[8] && n.setMinutes(e[8]), e[10] && n.setSeconds(e[10]), e[12] && n.setMilliseconds(Number("0." + e[12]) * 1e3), f(n, t)) : (n.setUTCFullYear(e[1], e[3] ? e[3] - 1 : 0, e[5] || 1), n.setUTCHours(e[7] || 0, e[8] || 0, e[10] || 0, e[12] ? Number("0." + e[12]) * 1e3 : 0), e[14] && (t = Number(e[16]) * 60 + (e[18] ? Number(e[18]) : 0), t *= e[15] == "-" ? 1 : -1, n = new Date(+n + t * 60 * 1e3))), n
    }
    function b(e) {
        if (typeof e == "number") return e * 60;
        if (typeof e == "object") return e.getHours() * 60 + e.getMinutes();
        if (e = e.match(/(\d+)(?::(\d+))?\s*(\w+)?/)) {
            var t = parseInt(e[1], 10);
            return e[3] && (t %= 12, e[3].toLowerCase().charAt(0) == "p" && (t += 12)), t * 60 + (e[2] ? parseInt(e[2], 10) : 0)
        }
    }
    function w(e, t, n) {
        return E(e, null, t, n)
    }
    function E(e, t, n, r) {
        r = r || gt;
        var i = e,
            s = t,
            o, u = n.length,
            a, f, l, c = "";
        for (o = 0; o < u; o++) {
            a = n.charAt(o);
            if (a == "'") {
                for (f = o + 1; f < u; f++) if (n.charAt(f) == "'") {
                    i && (c += f == o + 1 ? "'" : n.substring(o + 1, f), o = f);
                    break
                }
            } else if (a == "(") {
                for (f = o + 1; f < u; f++) if (n.charAt(f) == ")") {
                    o = w(i, n.substring(o + 1, f), r), parseInt(o.replace(/\D/, ""), 10) && (c += o), o = f;
                    break
                }
            } else if (a == "[") {
                for (f = o + 1; f < u; f++) if (n.charAt(f) == "]") {
                    a = n.substring(o + 1, f), o = w(i, a, r), o != w(s, a, r) && (c += o), o = f;
                    break
                }
            } else if (a == "{") i = t, s = e;
            else if (a == "}") i = e, s = t;
            else {
                for (f = u; f > o; f--) if (l = kt[n.substring(o, f)]) {
                    i && (c += l(i, r)), o = f - 1;
                    break
                }
                f == o && i && (c += a)
            }
        }
        return c
    }
    function S(e) {
        return e.end ? x(e.end, e.allDay) : a(h(e.start), 1)
    }
    function x(e, t) {
        return e = h(e), t || e.getHours() || e.getMinutes() ? a(e, 1) : c(e)
    }
    function T(e, t) {
        return (t.msLength - e.msLength) * 100 + (e.event.start - t.event.start)
    }
    function N(e, t) {
        return e.end > t.start && e.start < t.end
    }
    function C(e, t, n, r) {
        var i = [],
            s, o = e.length,
            u, a, f, l, c;
        for (s = 0; s < o; s++) u = e[s], a = u.start, f = t[s], f > n && a < r && (a < n ? (a = h(n), l = !1) : (a = a, l = !0), f > r ? (f = h(r), c = !1) : (f = f, c = !0), i.push({
            event: u,
            start: a,
            end: f,
            isStart: l,
            isEnd: c,
            msLength: f - a
        }));
        return i.sort(T)
    }
    function k(e) {
        var t = [],
            n, r = e.length,
            i, s, o, u;
        for (n = 0; n < r; n++) {
            i = e[n];
            for (s = 0;;) {
                o = !1;
                if (t[s]) for (u = 0; u < t[s].length; u++) if (N(t[s][u], i)) {
                    o = !0;
                    break
                }
                if (!o) break;
                s++
            }
            t[s] ? t[s].push(i) : t[s] = [i]
        }
        return t
    }
    function L(n, r, i) {
        n.unbind("mouseover").mouseover(function (n) {
            for (var s = n.target, o; s != this;) o = s, s = s.parentNode;
            (s = o._fci) !== t && (o._fci = t, o = r[s], i(o.event, o.element, o), e(n.target).trigger(n)), n.stopPropagation()
        })
    }
    function A(t, n, r) {
        for (var i = 0, s; i < t.length; i++) s = e(t[i]), s.width(Math.max(0, n - M(s, r)))
    }
    function O(t, n, r) {
        for (var i = 0, s; i < t.length; i++) s = e(t[i]), s.height(Math.max(0, n - H(s, r)))
    }
    function M(e, t) {
        return _(e) + P(e) + (t ? D(e) : 0)
    }
    function _(t) {
        return (parseFloat(e.curCSS(t[0], "paddingLeft", !0)) || 0) + (parseFloat(e.curCSS(t[0], "paddingRight", !0)) || 0)
    }
    function D(t) {
        return (parseFloat(e.curCSS(t[0], "marginLeft", !0)) || 0) + (parseFloat(e.curCSS(t[0], "marginRight", !0)) || 0)
    }
    function P(t) {
        return (parseFloat(e.curCSS(t[0], "borderLeftWidth", !0)) || 0) + (parseFloat(e.curCSS(t[0], "borderRightWidth", !0)) || 0)
    }
    function H(e, t) {
        return B(e) + F(e) + (t ? j(e) : 0)
    }
    function B(t) {
        return (parseFloat(e.curCSS(t[0], "paddingTop", !0)) || 0) + (parseFloat(e.curCSS(t[0], "paddingBottom", !0)) || 0)
    }
    function j(t) {
        return (parseFloat(e.curCSS(t[0], "marginTop", !0)) || 0) + (parseFloat(e.curCSS(t[0], "marginBottom", !0)) || 0)
    }
    function F(t) {
        return (parseFloat(e.curCSS(t[0], "borderTopWidth", !0)) || 0) + (parseFloat(e.curCSS(t[0], "borderBottomWidth", !0)) || 0)
    }
    function I(e, t) {
        t = typeof t == "number" ? t + "px" : t, e.each(function (e, n) {
            n.style.cssText += ";min-height:" + t + ";_height:" + t
        })
    }
    function q() {}
    function R(e, t) {
        return e - t
    }
    function U(e) {
        return Math.max.apply(Math, e)
    }
    function z(e) {
        return (e < 10 ? "0" : "") + e
    }
    function W(e, n) {
        if (e[n] !== t) return e[n];
        n = n.split(/(?=[A-Z])/);
        for (var r = n.length - 1, i; r >= 0; r--) {
            i = e[n[r].toLowerCase()];
            if (i !== t) return i
        }
        return e[""]
    }
    function X(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
    }
    function V(e) {
        return e.id + "/" + e.className + "/" + e.style.cssText.replace(/(^|;)\s*(top|left|width|height)\s*:[^;]*/ig, "")
    }
    function $(e) {
        e.attr("unselectable", "on").css("MozUserSelect", "none").bind("selectstart.ui", function () {
            return !1
        })
    }
    function J(e) {
        e.children().removeClass("fc-first fc-last").filter(":first-child").addClass("fc-first").end().filter(":last-child").addClass("fc-last")
    }
    function K(e, t) {
        e.each(function (e, n) {
            n.className = n.className.replace(/^fc-\w*/, "fc-" + xt[t.getDay()])
        })
    }
    function Q(e, t) {
        var n = e.source || {}, r = e.color,
            i = n.color,
            s = t("eventColor"),
            o = e.backgroundColor || r || n.backgroundColor || i || t("eventBackgroundColor") || s;
        return r = e.borderColor || r || n.borderColor || i || t("eventBorderColor") || s, e = e.textColor || n.textColor || t("eventTextColor"), t = [], o && t.push("background-color:" + o), r && t.push("border-color:" + r), e && t.push("color:" + e), t.join(";")
    }
    function G(t, n, r) {
        e.isFunction(t) && (t = [t]);
        if (t) {
            var i, s;
            for (i = 0; i < t.length; i++) s = t[i].apply(n, r) || s;
            return s
        }
    }
    function Y() {
        for (var e = 0; e < arguments.length; e++) if (arguments[e] !== t) return arguments[e]
    }
    function Z(e, t) {
        function n(e, t) {
            t && (u(e, t), e.setDate(1)), e = h(e, !0), e.setDate(1), t = u(h(e), 1);
            var n = h(e),
                f = h(t),
                l = i("firstDay"),
                c = i("weekends") ? 0 : 1;
            c && (d(n), d(f, -1, !0)), a(n, -((n.getDay() - Math.max(l, c) + 7) % 7)), a(f, (7 - f.getDay() + Math.max(l, c)) % 7), l = Math.round((f - n) / (Tt * 7)), i("weekMode") == "fixed" && (a(f, (6 - l) * 7), l = 6), r.title = o(e, i("titleFormat")), r.start = e, r.end = t, r.visStart = n, r.visEnd = f, s(6, l, c ? 5 : 7, !0)
        }
        var r = this;
        r.render = n, nt.call(r, e, t, "month");
        var i = r.opt,
            s = r.renderBasic,
            o = t.formatDate
    }
    function et(e, t) {
        function n(e, t) {
            t && a(e, t * 7), e = a(h(e), -((e.getDay() - i("firstDay") + 7) % 7)), t = a(h(e), 7);
            var n = h(e),
                u = h(t),
                f = i("weekends");
            f || (d(n), d(u, -1, !0)), r.title = o(n, a(h(u), -1), i("titleFormat")), r.start = e, r.end = t, r.visStart = n, r.visEnd = u, s(1, 1, f ? 7 : 5, !1)
        }
        var r = this;
        r.render = n, nt.call(r, e, t, "basicWeek");
        var i = r.opt,
            s = r.renderBasic,
            o = t.formatDates
    }
    function tt(e, t) {
        function n(e, t) {
            t && (a(e, t), i("weekends") || d(e, t < 0 ? -1 : 1)), r.title = o(e, i("titleFormat")), r.start = r.visStart = h(e, !0), r.end = r.visEnd = a(h(r.start), 1), s(1, 1, 1, !1)
        }
        var r = this;
        r.render = n, nt.call(r, e, t, "basicDay");
        var i = r.opt,
            s = r.renderBasic,
            o = t.formatDate
    }
    function nt(t, n, r) {
        function i(e, t, n, r) {
            ot = t, ut = n, s(), (t = !Q) ? o(e, r) : q(), u(t)
        }
        function s() {
            (gt = j("isRTL")) ? (yt = -1, bt = ut - 1) : (yt = 1, bt = 0), wt = j("firstDay"), Et = j("weekends") ? 0 : 1, St = j("theme") ? "ui" : "fc", xt = j("columnFormat")
        }
        function o(n, r) {
            var i, s = St + "-widget-header",
                o = St + "-widget-content",
                u;
            i = "<table class='fc-border-separate' style='width:100%' cellspacing='0'><thead><tr>";
            for (u = 0; u < ut; u++) i += "<th class='fc- " + s + "'/>";
            i += "</tr></thead><tbody>";
            for (u = 0; u < n; u++) {
                i += "<tr class='fc-week" + u + "'>";
                for (s = 0; s < ut; s++) i += "<td class='fc- " + o + " fc-day" + (u * ut + s) + "'><div>" + (r ? "<div class='fc-day-number'/>" : "") + "<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>";
                i += "</tr>"
            }
            i += "</tbody></table>", n = e(i).appendTo(t), X = n.find("thead"), V = X.find("th"), Q = n.find("tbody"), G = Q.find("tr"), Y = Q.find("td"), Z = Y.filter(":first-child"), et = G.eq(0).find("div.fc-day-content div"), J(X.add(X.find("tr"))), J(G), G.eq(0).addClass("fc-first"), p(Y), tt = e("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(t)
        }
        function u(t) {
            var n = t || ot == 1,
                r = B.start.getMonth(),
                i = c(new Date),
                s, o, u;
            n && V.each(function (t, n) {
                s = e(n), o = M(t), s.html(W(o, xt)), K(s, o)
            }), Y.each(function (t, u) {
                s = e(u), o = M(t), o.getMonth() == r ? s.removeClass("fc-other-month") : s.addClass("fc-other-month"), +o == +i ? s.addClass(St + "-state-highlight fc-today") : s.removeClass(St + "-state-highlight fc-today"), s.find("div.fc-day-number").text(o.getDate()), n && K(s, o)
            }), G.each(function (t, n) {
                u = e(n), t < ot ? (u.show(), t == ot - 1 ? u.addClass("fc-last") : u.removeClass("fc-last")) : u.hide()
            })
        }
        function f(t) {
            it = t, t = it - X.height();
            var n, r, i;
            j("weekMode") == "variable" ? n = r = Math.floor(t / (ot == 1 ? 2 : 6)) : (n = Math.floor(t / ot), r = t - n * (ot - 1)), Z.each(function (t, s) {
                t < ot && (i = e(s), I(i.find("> div"), (t == ot - 1 ? r : n) - H(i)))
            })
        }
        function l(e) {
            nt = e, vt.clear(), st = Math.floor(nt / ut), A(V.slice(0, -1), st)
        }
        function p(e) {
            e.click(d).mousedown(z)
        }
        function d(e) {
            if (!j("selectable")) {
                var t = parseInt(this.className.match(/fc\-day(\d+)/)[1]);
                t = M(t), F("dayClick", this, t, !0, e)
            }
        }
        function m(e, t, n) {
            n && at.build(), n = h(B.visStart);
            for (var r = a(h(n), ut), i = 0; i < ot; i++) {
                var s = new Date(Math.max(n, e)),
                    o = new Date(Math.min(r, t));
                if (s < o) {
                    var u;
                    gt ? (u = v(o, n) * yt + bt + 1, s = v(s, n) * yt + bt + 1) : (u = v(s, n), s = v(o, n)), p(g(i, u, i, s - 1))
                }
                a(n, 7), a(r, 7)
            }
        }
        function g(e, n, r, i) {
            return e = at.rect(e, n, r, i, t), R(e, t)
        }
        function y(e) {
            return h(e)
        }
        function b(e, t) {
            m(e, a(h(t), 1), !0)
        }
        function w() {
            U()
        }
        function E(e, t, n) {
            var r = k(e);
            F("dayClick", Y[r.row * ut + r.col], e, t, n)
        }
        function S(e, t) {
            lt.start(function (e) {
                U(), e && g(e.row, e.col, e.row, e.col)
            }, t)
        }
        function x(e, t, n) {
            var r = lt.stop();
            U(), r && (r = L(r), F("drop", e, r, !0, t, n))
        }
        function T(e) {
            return h(e.start)
        }
        function N(e) {
            return vt.left(e)
        }
        function C(e) {
            return vt.right(e)
        }
        function k(e) {
            return {
                row: Math.floor(v(e, B.visStart) / 7),
                col: _(e.getDay())
            }
        }
        function L(e) {
            return O(e.row, e.col)
        }
        function O(e, t) {
            return a(h(B.visStart), e * 7 + t * yt + bt)
        }
        function M(e) {
            return O(Math.floor(e / ut), e % ut)
        }
        function _(e) {
            return (e - Math.max(wt, Et) + ut) % ut * yt + bt
        }
        function D(e) {
            return G.eq(e)
        }
        function P() {
            return {
                left: 0,
                right: nt
            }
        }
        var B = this;
        B.renderBasic = i, B.setHeight = f, B.setWidth = l, B.renderDayOverlay = m, B.defaultSelectionEnd = y, B.renderSelection = b, B.clearSelection = w, B.reportDayClick = E, B.dragStart = S, B.dragStop = x, B.defaultEventEnd = T, B.getHoverListener = function () {
            return lt
        }, B.colContentLeft = N, B.colContentRight = C, B.dayOfWeekCol = _, B.dateCell = k, B.cellDate = L, B.cellIsAllDay = function () {
            return !0
        }, B.allDayRow = D, B.allDayBounds = P, B.getRowCnt = function () {
            return ot
        }, B.getColCnt = function () {
            return ut
        }, B.getColWidth = function () {
            return st
        }, B.getDaySegmentContainer = function () {
            return tt
        }, ft.call(B, t, n, r), ht.call(B), ct.call(B), rt.call(B);
        var j = B.opt,
            F = B.trigger,
            q = B.clearEvents,
            R = B.renderOverlay,
            U = B.clearOverlays,
            z = B.daySelectionMousedown,
            W = n.formatDate,
            X, V, Q, G, Y, Z, et, tt, nt, it, st, ot, ut, at, lt, vt, gt, yt, bt, wt, Et, St, xt;
        $(t.addClass("fc-grid")), at = new pt(function (t, n) {
            var r, i, s;
            V.each(function (t, o) {
                r = e(o), i = r.offset().left, t && (s[1] = i), s = [i], n[t] = s
            }), s[1] = i + r.outerWidth(), G.each(function (n, o) {
                n < ot && (r = e(o), i = r.offset().top, n && (s[1] = i), s = [i], t[n] = s)
            }), s[1] = i + r.outerHeight()
        }), lt = new dt(at), vt = new mt(function (e) {
            return et.eq(e)
        })
    }
    function rt() {
        function t(e, t) {
            p(e), L(r(e), t)
        }
        function n() {
            d(), b().empty()
        }
        function r(t) {
            var n = T(),
                r = N(),
                i = h(o.visStart);
            r = a(h(i), r);
            var s = e.map(t, S),
                u, f, l, c, p, d, v = [];
            for (u = 0; u < n; u++) {
                f = k(C(t, s, i, r));
                for (l = 0; l < f.length; l++) {
                    c = f[l];
                    for (p = 0; p < c.length; p++) d = c[p], d.row = u, d.level = l, v.push(d)
                }
                a(i, 7), a(r, 7)
            }
            return v
        }
        function i(e, t, n) {
            l(e) && s(e, t), n.isEnd && c(e) && A(e, t, n), v(e, t)
        }
        function s(e, t) {
            var n = w(),
                r;
            t.draggable({
                zIndex: 9,
                delay: 50,
                opacity: u("dragOpacity"),
                revertDuration: u("dragRevertDuration"),
                start: function (i, s) {
                    f("eventDragStart", t, e, i, s), g(e, t), n.start(function (n, i, s, o) {
                        t.draggable("option", "revert", !n || !s && !o), x(), n ? (r = s * 7 + o * (u("isRTL") ? -1 : 1), E(a(h(e.start), r), a(S(e), r))) : r = 0
                    }, i, "drag")
                },
                stop: function (i, s) {
                    n.stop(), x(), f("eventDragStop", t, e, i, s), r ? y(this, e, r, 0, e.allDay, i, s) : (t.css("filter", ""), m(e, t))
                }
            })
        }
        var o = this;
        o.renderEvents = t, o.compileDaySegs = r, o.clearEvents = n, o.bindDaySeg = i, lt.call(o);
        var u = o.opt,
            f = o.trigger,
            l = o.isEventDraggable,
            c = o.isEventResizable,
            p = o.reportEvents,
            d = o.reportEventClear,
            v = o.eventElementHandlers,
            m = o.showEvents,
            g = o.hideEvents,
            y = o.eventDrop,
            b = o.getDaySegmentContainer,
            w = o.getHoverListener,
            E = o.renderDayOverlay,
            x = o.clearOverlays,
            T = o.getRowCnt,
            N = o.getColCnt,
            L = o.renderDaySegs,
            A = o.resizableDayEvent
    }
    function it(e, t) {
        function n(e, t) {
            t && a(e, t * 7), e = a(h(e), -((e.getDay() - i("firstDay") + 7) % 7)), t = a(h(e), 7);
            var n = h(e),
                u = h(t),
                f = i("weekends");
            f || (d(n), d(u, -1, !0)), r.title = o(n, a(h(u), -1), i("titleFormat")), r.start = e, r.end = t, r.visStart = n, r.visEnd = u, s(f ? 7 : 5)
        }
        var r = this;
        r.render = n, ot.call(r, e, t, "agendaWeek");
        var i = r.opt,
            s = r.renderAgenda,
            o = t.formatDates
    }
    function st(e, t) {
        function n(e, t) {
            t && (a(e, t), i("weekends") || d(e, t < 0 ? -1 : 1)), t = h(e, !0);
            var n = a(h(t), 1);
            r.title = o(e, i("titleFormat")), r.start = r.visStart = t, r.end = r.visEnd = n, s(1)
        }
        var r = this;
        r.render = n, ot.call(r, e, t, "agendaDay");
        var i = r.opt,
            s = r.renderAgenda,
            o = t.formatDate
    }
    function ot(n, r, i) {
        function s(e) {
            Wt = e, o(), gt ? nt() : u(), f()
        }
        function o() {
            Qt = et("theme") ? "ui" : "fc", Yt = et("weekends") ? 0 : 1, Gt = et("firstDay"), (Zt = et("isRTL")) ? (en = -1, tn = Wt - 1) : (en = 1, tn = 0), nn = b(et("minTime")), rn = b(et("maxTime")), sn = et("columnFormat")
        }
        function u() {
            var t = Qt + "-widget-header",
                r = Qt + "-widget-content",
                i, s, o, u, a, f = et("slotMinutes") % 15 == 0;
            i = "<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'><thead><tr><th class='fc-agenda-axis " + t + "'>&nbsp;</th>";
            for (s = 0; s < Wt; s++) i += "<th class='fc- fc-col" + s + " " + t + "'/>";
            i += "<th class='fc-agenda-gutter " + t + "'>&nbsp;</th></tr></thead><tbody><tr><th class='fc-agenda-axis " + t + "'>&nbsp;</th>";
            for (s = 0; s < Wt; s++) i += "<td class='fc- fc-col" + s + " " + r + "'><div><div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>";
            i += "<td class='fc-agenda-gutter " + r + "'>&nbsp;</td></tr></tbody></table>", gt = e(i).appendTo(n), yt = gt.find("thead"), bt = yt.find("th").slice(1, -1), wt = gt.find("tbody"), Et = wt.find("td").slice(0, -1), St = Et.find("div.fc-day-content div"), xt = Et.eq(0), Tt = xt.find("> div"), J(yt.add(yt.find("tr"))), J(wt.add(wt.find("tr"))), Pt = yt.find("th:first"), Ht = gt.find(".fc-agenda-gutter"), Nt = e("<div style='position:absolute;z-index:2;left:0;width:100%'/>").appendTo(n), et("allDaySlot") ? (Ct = e("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(Nt), i = "<table style='width:100%' class='fc-agenda-allday' cellspacing='0'><tr><th class='" + t + " fc-agenda-axis'>" + et("allDayText") + "</th><td><div class='fc-day-content'><div style='position:relative'/></div></td><th class='" + t + " fc-agenda-gutter'>&nbsp;</th></tr></table>", kt = e(i).appendTo(Nt), Lt = kt.find("tr"), E(Lt.find("td")), Pt = Pt.add(kt.find("th:first")), Ht = Ht.add(kt.find("th.fc-agenda-gutter")), Nt.append("<div class='fc-agenda-divider " + t + "'><div class='fc-agenda-divider-inner'/></div>")) : Ct = e([]), At = e("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>").appendTo(Nt), Ot = e("<div style='position:relative;width:100%;overflow:hidden'/>").appendTo(At), Mt = e("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(Ot), i = "<table class='fc-agenda-slots' style='width:100%' cellspacing='0'><tbody>", o = p(), u = l(h(o), rn), l(o, nn);
            for (s = Xt = 0; o < u; s++) a = o.getMinutes(), i += "<tr class='fc-slot" + s + " " + (a ? "fc-minor" : "") + "'><th class='fc-agenda-axis " + t + "'>" + (!f || !a ? vt(o, et("axisFormat")) : "&nbsp;") + "</th><td class='" + r + "'><div style='position:relative'>&nbsp;</div></td></tr>", l(o, et("slotMinutes")), Xt++;
            i += "</tbody></table>", _t = e(i).appendTo(Ot), Dt = _t.find("div:first"), S(_t.find("td")), Pt = Pt.add(_t.find("th:first"))
        }
        function f() {
            var e, t, n, r, i = c(new Date);
            for (e = 0; e < Wt; e++) r = D(e), t = bt.eq(e), t.html(vt(r, sn)), n = Et.eq(e), +r == +i ? n.addClass(Qt + "-state-highlight fc-today") : n.removeClass(Qt + "-state-highlight fc-today"), K(t.add(n), r)
        }
        function d(e, n) {
            e === t && (e = Ft), Ft = e, Kt = {};
            var r = wt.position().top,
                i = At.position().top;
            e = Math.min(e - r, _t.height() + i + 1), Tt.height(e - H(xt)), Nt.css("top", r), At.height(e - i - 1), Ut = Dt.height() + 1, n && g()
        }
        function m(t) {
            jt = t, Jt.clear(), It = 0, A(Pt.width("").each(function (t, n) {
                It = Math.max(It, e(n).outerWidth())
            }), It), t = At[0].clientWidth, (Rt = At.width() - t) ? (A(Ht, Rt), Ht.show().prev().removeClass("fc-last")) : Ht.hide().prev().addClass("fc-last"), qt = Math.floor((t - It) / Wt), A(bt.slice(0, -1), qt)
        }
        function g() {
            function e() {
                At.scrollTop(r)
            }
            var t = p(),
                n = h(t);
            n.setHours(et("firstHour"));
            var r = j(t, n) + 1;
            e(), setTimeout(e, 0)
        }
        function y() {
            zt = At.scrollTop()
        }
        function w() {
            At.scrollTop(zt)
        }
        function E(e) {
            e.click(x).mousedown(at)
        }
        function S(e) {
            e.click(x).mousedown(V)
        }
        function x(e) {
            if (!et("selectable")) {
                var t = Math.min(Wt - 1, Math.floor((e.pageX - gt.offset().left - It) / qt)),
                    n = D(t),
                    r = this.parentNode.className.match(/fc-slot(\d+)/);
                if (r) {
                    r = parseInt(r[1]) * et("slotMinutes");
                    var i = Math.floor(r / 60);
                    n.setHours(i), n.setMinutes(r % 60 + nn), tt("dayClick", Et[t], n, !1, e)
                } else tt("dayClick", Et[t], n, !0, e)
            }
        }
        function T(e, t, n) {
            n && Vt.build();
            var r = h(Z.visStart);
            Zt ? (n = v(t, r) * en + tn + 1, e = v(e, r) * en + tn + 1) : (n = v(e, r), e = v(t, r)), n = Math.max(0, n), e = Math.min(Wt, e), n < e && E(N(0, n, 0, e - 1))
        }
        function N(e, t, n, r) {
            return e = Vt.rect(e, t, n, r, Nt), rt(e, Nt)
        }
        function C(e, t) {
            for (var n = h(Z.visStart), r = a(h(n), 1), i = 0; i < Wt; i++) {
                var s = new Date(Math.max(n, e)),
                    o = new Date(Math.min(r, t));
                if (s < o) {
                    var u = i * en + tn;
                    u = Vt.rect(0, u, 0, u, Ot), s = j(n, s), o = j(n, o), u.top = s, u.height = o - s, S(rt(u, Ot))
                }
                a(n, 1), a(r, 1)
            }
        }
        function k(e) {
            return Jt.left(e)
        }
        function L(e) {
            return Jt.right(e)
        }
        function M(e) {
            return {
                row: Math.floor(v(e, Z.visStart) / 7),
                col: B(e.getDay())
            }
        }
        function _(e) {
            var t = D(e.col);
            return e = e.row, et("allDaySlot") && e--, e >= 0 && l(t, nn + e * et("slotMinutes")), t
        }
        function D(e) {
            return a(h(Z.visStart), e * en + tn)
        }
        function P(e) {
            return et("allDaySlot") && !e.row
        }
        function B(e) {
            return (e - Math.max(Gt, Yt) + Wt) % Wt * en + tn
        }
        function j(e, n) {
            e = h(e, !0);
            if (n < l(h(e), nn)) return 0;
            if (n >= l(h(e), rn)) return _t.height();
            e = et("slotMinutes"), n = n.getHours() * 60 + n.getMinutes() - nn;
            var r = Math.floor(n / e),
                i = Kt[r];
            return i === t && (i = Kt[r] = _t.find("tr:eq(" + r + ") td div")[0].offsetTop), Math.max(0, Math.round(i - 1 + Ut * (n % e / e)))
        }
        function F() {
            return {
                left: It,
                right: jt - Rt
            }
        }
        function I() {
            return Lt
        }
        function q(e) {
            var t = h(e.start);
            return e.allDay ? t : l(t, et("defaultEventMinutes"))
        }
        function U(e, t) {
            return t ? h(e) : l(h(e), et("slotMinutes"))
        }
        function z(e, t, n) {
            n ? et("allDaySlot") && T(e, a(h(t), 1), !0) : W(e, t)
        }
        function W(t, n) {
            var r = et("selectHelper");
            Vt.build();
            if (r) {
                var i = v(t, Z.visStart) * en + tn;
                if (i >= 0 && i < Wt) {
                    i = Vt.rect(0, i, 0, i, Ot);
                    var s = j(t, t),
                        o = j(t, n);
                    if (o > s) {
                        i.top = s, i.height = o - s, i.left += 2, i.width -= 5;
                        if (e.isFunction(r)) {
                            if (t = r(t, n)) i.position = "absolute", i.zIndex = 8, Bt = e(t).css(i).appendTo(Ot)
                        } else i.isStart = !0, i.isEnd = !0, Bt = e(lt({
                            title: "",
                            start: t,
                            end: n,
                            className: ["fc-select-helper"],
                            editable: !1
                        }, i)), Bt.css("opacity", et("dragOpacity"));
                        Bt && (S(Bt), Ot.append(Bt), A(Bt, i.width, !0), O(Bt, i.height, !0))
                    }
                }
            } else C(t, n)
        }
        function X() {
            it(), Bt && (Bt.remove(), Bt = null)
        }
        function V(t) {
            if (t.which == 1 && et("selectable")) {
                ot(t);
                var n;
                $t.start(function (e, t) {
                    X(), e && e.col == t.col && !P(e) ? (t = _(t), e = _(e), n = [t, l(h(t), et("slotMinutes")), e, l(h(e), et("slotMinutes"))].sort(R), W(n[0], n[3])) : n = null
                }, t), e(document).one("mouseup", function (e) {
                    $t.stop(), n && (+n[0] == +n[1] && Q(n[0], !1, e), st(n[0], n[3], !1, e))
                })
            }
        }
        function Q(e, t, n) {
            tt("dayClick", Et[B(e.getDay())], e, t, n)
        }
        function G(e, t) {
            $t.start(function (e) {
                it();
                if (e) if (P(e)) N(e.row, e.col, e.row, e.col);
                else {
                    e = _(e);
                    var t = l(h(e), et("defaultEventMinutes"));
                    C(e, t)
                }
            }, t)
        }
        function Y(e, t, n) {
            var r = $t.stop();
            it(), r && tt("drop", e, _(r), P(r), t, n)
        }
        var Z = this;
        Z.renderAgenda = s, Z.setWidth = m, Z.setHeight = d, Z.beforeHide = y, Z.afterShow = w, Z.defaultEventEnd = q, Z.timePosition = j, Z.dayOfWeekCol = B, Z.dateCell = M, Z.cellDate = _, Z.cellIsAllDay = P, Z.allDayRow = I, Z.allDayBounds = F, Z.getHoverListener = function () {
            return $t
        }, Z.colContentLeft = k, Z.colContentRight = L, Z.getDaySegmentContainer = function () {
            return Ct
        }, Z.getSlotSegmentContainer = function () {
            return Mt
        }, Z.getMinMinute = function () {
            return nn
        }, Z.getMaxMinute = function () {
            return rn
        }, Z.getBodyContent = function () {
            return Ot
        }, Z.getRowCnt = function () {
            return 1
        }, Z.getColCnt = function () {
            return Wt
        }, Z.getColWidth = function () {
            return qt
        }, Z.getSlotHeight = function () {
            return Ut
        }, Z.defaultSelectionEnd = U, Z.renderDayOverlay = T, Z.renderSelection = z, Z.clearSelection = X, Z.reportDayClick = Q, Z.dragStart = G, Z.dragStop = Y, ft.call(Z, n, r, i), ht.call(Z), ct.call(Z), ut.call(Z);
        var et = Z.opt,
            tt = Z.trigger,
            nt = Z.clearEvents,
            rt = Z.renderOverlay,
            it = Z.clearOverlays,
            st = Z.reportSelection,
            ot = Z.unselect,
            at = Z.daySelectionMousedown,
            lt = Z.slotSegHtml,
            vt = r.formatDate,
            gt, yt, bt, wt, Et, St, xt, Tt, Nt, Ct, kt, Lt, At, Ot, Mt, _t, Dt, Pt, Ht, Bt, jt, Ft, It, qt, Rt, Ut, zt, Wt, Xt, Vt, $t, Jt, Kt = {}, Qt, Gt, Yt, Zt, en, tn, nn, rn, sn;
        $(n.addClass("fc-agenda")), Vt = new pt(function (t, n) {
            function r(e) {
                return Math.max(a, Math.min(f, e))
            }
            var i, s, o;
            bt.each(function (t, r) {
                i = e(r), s = i.offset().left, t && (o[1] = s), o = [s], n[t] = o
            }), o[1] = s + i.outerWidth(), et("allDaySlot") && (i = Lt, s = i.offset().top, t[0] = [s, s + i.outerHeight()]);
            for (var u = Ot.offset().top, a = At.offset().top, f = a + At.outerHeight(), l = 0; l < Xt; l++) t.push([r(u + Ut * l), r(u + Ut * (l + 1))])
        }), $t = new dt(Vt), Jt = new mt(function (e) {
            return St.eq(e)
        })
    }
    function ut() {
        function n(e, t) {
            T(e);
            var n, r = e.length,
                o = [],
                a = [];
            for (n = 0; n < r; n++) e[n].allDay ? o.push(e[n]) : a.push(e[n]);
            y("allDaySlot") && (U(i(o), t), _()), u(s(a), t)
        }
        function r() {
            N(), D().empty(), P().empty()
        }
        function i(t) {
            t = k(C(t, e.map(t, S), g.visStart, g.visEnd));
            var n, r = t.length,
                i, s, o, u = [];
            for (n = 0; n < r; n++) {
                i = t[n];
                for (s = 0; s < i.length; s++) o = i[s], o.row = 0, o.level = n, u.push(o)
            }
            return u
        }
        function s(t) {
            var n = W(),
                r = F(),
                i = j(),
                s = l(h(g.visStart), r),
                u = e.map(t, o),
                f, c, p, d, v, m, y = [];
            for (f = 0; f < n; f++) {
                c = k(C(t, u, s, l(h(s), i - r))), at(c);
                for (p = 0; p < c.length; p++) {
                    d = c[p];
                    for (v = 0; v < d.length; v++) m = d[v], m.col = f, m.level = p, y.push(m)
                }
                a(s, 1, !0)
            }
            return y
        }
        function o(e) {
            return e.end ? h(e.end) : l(h(e.start), y("defaultEventMinutes"))
        }
        function u(n, r) {
            var i, s = n.length,
                o, u, a, l, c, h, d, v, m, g = "",
                w, E, S = {}, x = {}, T = P(),
                N;
            i = W(), (w = y("isRTL")) ? (E = -1, N = i - 1) : (E = 1, N = 0);
            for (i = 0; i < s; i++) o = n[i], u = o.event, a = I(o.start, o.start), l = I(o.start, o.end), c = o.col, h = o.level, d = o.forward || 0, v = q(c * E + N), m = R(c * E + N) - v, m = Math.min(m - 6, m * .95), c = h ? m / (h + d + 1) : d ? (m / (d + 1) - 6) * 2 : m, h = v + m / (h + d + 1) * h * E + (w ? m - c : 0), o.top = a, o.left = h, o.outerWidth = c, o.outerHeight = l - a, g += f(u, o);
            T[0].innerHTML = g, w = T.children();
            for (i = 0; i < s; i++) o = n[i], u = o.event, g = e(w[i]), E = b("eventRender", u, u, g), E === !1 ? g.remove() : (E && E !== !0 && (g.remove(), g = e(E).css({
                position: "absolute",
                top: o.top,
                left: o.left
            }).appendTo(T)), o.element = g, u._id === r ? p(u, g, o) : g[0]._fci = i, G(u, g));
            L(T, n, p);
            for (i = 0; i < s; i++) {
                o = n[i];
                if (g = o.element) u = S[r = o.key = V(g[0])], o.vsides = u === t ? S[r] = H(g, !0) : u, u = x[r], o.hsides = u === t ? x[r] = M(g, !0) : u, r = g.find("div.fc-event-content"), r.length && (o.contentTop = r[0].offsetTop)
            }
            for (i = 0; i < s; i++) {
                o = n[i];
                if (g = o.element) g[0].style.width = Math.max(0, o.outerWidth - o.hsides) + "px", S = Math.max(0, o.outerHeight - o.vsides), g[0].style.height = S + "px", u = o.event, o.contentTop !== t && S - o.contentTop < 10 && (g.find("div.fc-event-time").text(st(u.start, y("timeFormat")) + " - " + u.title), g.find("div.fc-event-title").remove()), b("eventAfterRender", u, u, g)
            }
        }
        function f(e, t) {
            var n = "<",
                r = e.url,
                i = Q(e, y),
                s = i ? " style='" + i + "'" : "",
                o = ["fc-event", "fc-event-skin", "fc-event-vert"];
            return w(e) && o.push("fc-event-draggable"), t.isStart && o.push("fc-corner-top"), t.isEnd && o.push("fc-corner-bottom"), o = o.concat(e.className), e.source && (o = o.concat(e.source.className || [])), n += r ? "a href='" + X(e.url) + "'" : "div", n += " class='" + o.join(" ") + "' style='position:absolute;z-index:8;top:" + t.top + "px;left:" + t.left + "px;" + i + "'><div class='fc-event-inner fc-event-skin'" + s + "><div class='fc-event-head fc-event-skin'" + s + "><div class='fc-event-time'>" + X(ot(e.start, e.end, y("timeFormat"))) + "</div></div><div class='fc-event-content'><div class='fc-event-title'>" + X(e.title) + "</div></div><div class='fc-event-bg'></div></div>", t.isEnd && E(e) && (n += "<div class='ui-resizable-handle ui-resizable-s'>=</div>"), n += "</" + (r ? "a" : "div") + ">", n
        }
        function c(e, t, n) {
            w(e) && d(e, t, n.isStart), n.isEnd && E(e) && z(e, t, n), A(e, t)
        }
        function p(e, t, n) {
            var r = t.find("div.fc-event-time");
            w(e) && v(e, t, r), n.isEnd && E(e) && m(e, t, r), A(e, t)
        }
        function d(e, t, n) {
            function r() {
                o || (t.width(i).height("").draggable("option", "grid", null), o = !0)
            }
            var i, s, o = !0,
                u, f = y("isRTL") ? -1 : 1,
                l = B(),
                c = $(),
                p = J(),
                d = F();
            t.draggable({
                zIndex: 9,
                opacity: y("dragOpacity", "month"),
                revertDuration: y("dragRevertDuration"),
                start: function (d, v) {
                    b("eventDragStart", t, e, d, v), Z(e, t), i = t.width(), l.start(function (i, l, d, v) {
                        rt(), i ? (s = !1, u = v * f, i.row ? n ? o && (t.width(c - 10), O(t, p * Math.round((e.end ? (e.end - e.start) / Ct : y("defaultEventMinutes")) / y("slotMinutes"))), t.draggable("option", "grid", [c, 1]), o = !1) : s = !0 : (nt(a(h(e.start), u), a(S(e), u)), r()), s = s || o && !u) : (r(), s = !0), t.draggable("option", "revert", s)
                    }, d, "drag")
                },
                stop: function (n, i) {
                    l.stop(), rt(), b("eventDragStop", t, e, n, i);
                    if (s) r(), t.css("filter", ""), Y(e, t);
                    else {
                        var a = 0;
                        o || (a = Math.round((t.offset().top - K().offset().top) / p) * y("slotMinutes") + d - (e.start.getHours() * 60 + e.start.getMinutes())), et(this, e, u, a, o, n, i)
                    }
                }
            })
        }
        function v(e, t, n) {
            function r(t) {
                var r = l(h(e.start), t),
                    i;
                e.end && (i = l(h(e.end), t)), n.text(ot(r, i, y("timeFormat")))
            }
            function i() {
                o && (n.css("display", ""), t.draggable("option", "grid", [m, g]), o = !1)
            }
            var s, o = !1,
                u, f, c, p = y("isRTL") ? -1 : 1,
                d = B(),
                v = W(),
                m = $(),
                g = J();
            t.draggable({
                zIndex: 9,
                scroll: !1,
                grid: [m, g],
                axis: v == 1 ? "y" : !1,
                opacity: y("dragOpacity"),
                revertDuration: y("dragRevertDuration"),
                start: function (r, l) {
                    b("eventDragStart", t, e, r, l), Z(e, t), s = t.position(), f = c = 0, d.start(function (r, s, f, l) {
                        t.draggable("option", "revert", !r), rt(), r && (u = l * p, y("allDaySlot") && !r.row ? (o || (o = !0, n.hide(), t.draggable("option", "grid", null)), nt(a(h(e.start), u), a(S(e), u))) : i())
                    }, r, "drag")
                },
                drag: function (e, t) {
                    f = Math.round((t.position.top - s.top) / g) * y("slotMinutes"), f != c && (o || r(f), c = f)
                },
                stop: function (n, a) {
                    var l = d.stop();
                    rt(), b("eventDragStop", t, e, n, a), l && (u || f || o) ? et(this, e, u, o ? 0 : f, o, n, a) : (i(), t.css("filter", ""), t.css(s), r(0), Y(e, t))
                }
            })
        }
        function m(e, t, n) {
            var r, i, s = J();
            t.resizable({
                handles: {
                    s: "div.ui-resizable-s"
                },
                grid: s,
                start: function (n, s) {
                    r = i = 0, Z(e, t), t.css("z-index", 9), b("eventResizeStart", this, e, n, s)
                },
                resize: function (o, u) {
                    r = Math.round((Math.max(s, t.height()) - u.originalSize.height) / s), r != i && (n.text(ot(e.start, !r && !e.end ? null : l(x(e), y("slotMinutes") * r), y("timeFormat"))), i = r)
                },
                stop: function (n, i) {
                    b("eventResizeStop", this, e, n, i), r ? tt(this, e, 0, y("slotMinutes") * r, n, i) : (t.css("z-index", 8), Y(e, t))
                }
            })
        }
        var g = this;
        g.renderEvents = n, g.compileDaySegs = i, g.clearEvents = r, g.slotSegHtml = f, g.bindDaySeg = c, lt.call(g);
        var y = g.opt,
            b = g.trigger,
            w = g.isEventDraggable,
            E = g.isEventResizable,
            x = g.eventEnd,
            T = g.reportEvents,
            N = g.reportEventClear,
            A = g.eventElementHandlers,
            _ = g.setHeight,
            D = g.getDaySegmentContainer,
            P = g.getSlotSegmentContainer,
            B = g.getHoverListener,
            j = g.getMaxMinute,
            F = g.getMinMinute,
            I = g.timePosition,
            q = g.colContentLeft,
            R = g.colContentRight,
            U = g.renderDaySegs,
            z = g.resizableDayEvent,
            W = g.getColCnt,
            $ = g.getColWidth,
            J = g.getSlotHeight,
            K = g.getBodyContent,
            G = g.reportEventElement,
            Y = g.showEvents,
            Z = g.hideEvents,
            et = g.eventDrop,
            tt = g.eventResize,
            nt = g.renderDayOverlay,
            rt = g.clearOverlays,
            it = g.calendar,
            st = it.formatDate,
            ot = it.formatDates
    }
    function at(e) {
        var t, n, r, i, s, o;
        for (t = e.length - 1; t > 0; t--) {
            i = e[t];
            for (n = 0; n < i.length; n++) {
                s = i[n];
                for (r = 0; r < e[t - 1].length; r++) o = e[t - 1][r], N(s, o) && (o.forward = Math.max(o.forward || 0, (s.forward || 0) + 1))
            }
        }
    }
    function ft(e, n, r) {
        function i(e, t) {
            return e = M[e], typeof e == "object" ? W(e, t || r) : e
        }
        function s(e, t) {
            return n.trigger.apply(n, [e, t || T].concat(Array.prototype.slice.call(arguments, 2), [T]))
        }
        function o(e) {
            return f(e) && !i("disableDragging")
        }
        function u(e) {
            return f(e) && !i("disableResizing")
        }
        function f(e) {
            return Y(e.editable, (e.source || {}).editable, i("editable"))
        }
        function c(e) {
            L = {};
            var t, n = e.length,
                r;
            for (t = 0; t < n; t++) r = e[t], L[r._id] ? L[r._id].push(r) : L[r._id] = [r]
        }
        function p(e) {
            return e.end ? h(e.end) : N(e)
        }
        function d(e, t) {
            A.push(t), O[e._id] ? O[e._id].push(t) : O[e._id] = [t]
        }
        function v() {
            A = [], O = {}
        }
        function m(e, t) {
            t.click(function (n) {
                if (!t.hasClass("ui-draggable-dragging") && !t.hasClass("ui-resizable-resizing")) return s("eventClick", this, e, n)
            }).hover(function (t) {
                s("eventMouseover", this, e, t)
            }, function (t) {
                s("eventMouseout", this, e, t)
            })
        }
        function g(e, t) {
            b(e, t, "show")
        }
        function y(e, t) {
            b(e, t, "hide")
        }
        function b(e, t, n) {
            e = O[e._id];
            var r, i = e.length;
            for (r = 0; r < i; r++)(!t || e[r][0] != t[0]) && e[r][n]()
        }
        function w(e, t, n, r, i, o, u) {
            var a = t.allDay,
                f = t._id;
            S(L[f], n, r, i), s("eventDrop", e, t, n, r, i, function () {
                S(L[f], -n, -r, a), k(f)
            }, o, u), k(f)
        }
        function E(e, t, n, r, i, o) {
            var u = t._id;
            x(L[u], n, r), s("eventResize", e, t, n, r, function () {
                x(L[u], -n, -r), k(u)
            }, i, o), k(u)
        }
        function S(e, n, r, i) {
            r = r || 0;
            for (var s, o = e.length, u = 0; u < o; u++) s = e[u], i !== t && (s.allDay = i), l(a(s.start, n, !0), r), s.end && (s.end = l(a(s.end, n, !0), r)), C(s, M)
        }
        function x(e, t, n) {
            n = n || 0;
            for (var r, i = e.length, s = 0; s < i; s++) r = e[s], r.end = l(a(p(r), t, !0), n), C(r, M)
        }
        var T = this;
        T.element = e, T.calendar = n, T.name = r, T.opt = i, T.trigger = s, T.isEventDraggable = o, T.isEventResizable = u, T.reportEvents = c, T.eventEnd = p, T.reportEventElement = d, T.reportEventClear = v, T.eventElementHandlers = m, T.showEvents = g, T.hideEvents = y, T.eventDrop = w, T.eventResize = E;
        var N = T.defaultEventEnd,
            C = n.normalizeEvent,
            k = n.reportEventChange,
            L = {}, A = [],
            O = {}, M = n.options
    }
    function lt() {
        function n(e, t) {
            var n = I(),
                r = k(),
                a = A(),
                h = 0,
                m, g, y = e.length,
                b, w;
            n[0].innerHTML = i(e), s(e, n.children()), o(e), u(e, n, t), f(e), l(e), c(e), t = p();
            for (n = 0; n < r; n++) {
                m = [];
                for (g = 0; g < a; g++) m[g] = 0;
                for (; h < y && (b = e[h]).row == n;) {
                    g = U(m.slice(b.startCol, b.endCol)), b.top = g, g += b.outerHeight;
                    for (w = b.startCol; w < b.endCol; w++) m[w] = g;
                    h++
                }
                t[n].height(U(m))
            }
            v(e, d(t))
        }
        function r(t, n, r) {
            var o = e("<div/>"),
                u = I(),
                a = t.length,
                h;
            o[0].innerHTML = i(t), o = o.children(), u.append(o), s(t, o), f(t), l(t), c(t), v(t, d(p())), o = [];
            for (u = 0; u < a; u++) if (h = t[u].element) t[u].row === n && h.css("top", r), o.push(h[0]);
            return e(o)
        }
        function i(e) {
            var t = y("isRTL"),
                n, r = e.length,
                i, s, o, u;
            n = _();
            var a = n.left,
                f = n.right,
                l, c, h, p, d, v = "";
            for (n = 0; n < r; n++) i = e[n], s = i.event, u = ["fc-event", "fc-event-skin", "fc-event-hori"], w(s) && u.push("fc-event-draggable"), t ? (i.isStart && u.push("fc-corner-right"), i.isEnd && u.push("fc-corner-left"), l = H(i.end.getDay() - 1), c = H(i.start.getDay()), h = i.isEnd ? D(l) : a, p = i.isStart ? P(c) : f) : (i.isStart && u.push("fc-corner-left"), i.isEnd && u.push("fc-corner-right"), l = H(i.start.getDay()), c = H(i.end.getDay() - 1), h = i.isStart ? D(l) : a, p = i.isEnd ? P(c) : f), u = u.concat(s.className), s.source && (u = u.concat(s.source.className || [])), o = s.url, d = Q(s, y), v += o ? "<a href='" + X(o) + "'" : "<div", v += " class='" + u.join(" ") + "' style='position:absolute;z-index:8;left:" + h + "px;" + d + "'><div class='fc-event-inner fc-event-skin'" + (d ? " style='" + d + "'" : "") + ">", !s.allDay && i.isStart && (v += "<span class='fc-event-time'>" + X(R(s.start, s.end, y("timeFormat"))) + "</span>"), v += "<span class='fc-event-title'>" + X(s.title) + "</span></div>", i.isEnd && E(s) && (v += "<div class='ui-resizable-handle ui-resizable-" + (t ? "w" : "e") + "'>&nbsp;&nbsp;&nbsp;</div>"), v += "</" + (o ? "a" : "div") + ">", i.left = h, i.outerWidth = p - h, i.startCol = l, i.endCol = c + 1;
            return v
        }
        function s(t, n) {
            var r, i = t.length,
                s, o, u;
            for (r = 0; r < i; r++) s = t[r], o = s.event, u = e(n[r]), o = b("eventRender", o, o, u), o === !1 ? u.remove() : (o && o !== !0 && (o = e(o).css({
                position: "absolute",
                left: s.left
            }), u.replaceWith(o), u = o), s.element = u)
        }
        function o(e) {
            var t, n = e.length,
                r, i;
            for (t = 0; t < n; t++) r = e[t], (i = r.element) && x(r.event, i)
        }
        function u(e, t, n) {
            var r, i = e.length,
                s, o, u;
            for (r = 0; r < i; r++) {
                s = e[r];
                if (o = s.element) u = s.event, u._id === n ? q(u, o, s) : o[0]._fci = r
            }
            L(t, e, q)
        }
        function f(e) {
            var n, r = e.length,
                i, s, o, u, a = {};
            for (n = 0; n < r; n++) {
                i = e[n];
                if (s = i.element) o = i.key = V(s[0]), u = a[o], u === t && (u = a[o] = M(s, !0)), i.hsides = u
            }
        }
        function l(e) {
            var t, n = e.length,
                r, i;
            for (t = 0; t < n; t++) {
                r = e[t];
                if (i = r.element) i[0].style.width = Math.max(0, r.outerWidth - r.hsides) + "px"
            }
        }
        function c(e) {
            var n, r = e.length,
                i, s, o, u, a = {};
            for (n = 0; n < r; n++) {
                i = e[n];
                if (s = i.element) o = i.key, u = a[o], u === t && (u = a[o] = j(s)), i.outerHeight = s[0].offsetHeight + u
            }
        }
        function p() {
            var e, t = k(),
                n = [];
            for (e = 0; e < t; e++) n[e] = O(e).find("td:first div.fc-day-content > div");
            return n
        }
        function d(e) {
            var t, n = e.length,
                r = [];
            for (t = 0; t < n; t++) r[t] = e[t][0].offsetTop;
            return r
        }
        function v(e, t) {
            var n, r = e.length,
                i, s;
            for (n = 0; n < r; n++) {
                i = e[n];
                if (s = i.element) s[0].style.top = t[i.row] + (i.top || 0) + "px", i = i.event, b("eventAfterRender", i, i, s)
            }
        }
        function m(t, n, i) {
            var s = y("isRTL"),
                o = s ? "w" : "e",
                u = n.find("div.ui-resizable-" + o),
                f = !1;
            $(n), n.mousedown(function (e) {
                e.preventDefault()
            }).click(function (e) {
                f && (e.preventDefault(), e.stopImmediatePropagation())
            }), u.mousedown(function (u) {
                function l(n) {
                    b("eventResizeStop", this, t, n), e("body").css("cursor", ""), c.stop(), W(), w && C(this, t, w, 0, n), setTimeout(function () {
                        f = !1
                    }, 0)
                }
                if (u.which == 1) {
                    f = !0;
                    var c = g.getHoverListener(),
                        p = k(),
                        d = A(),
                        v = s ? -1 : 1,
                        m = s ? d - 1 : 0,
                        y = n.css("top"),
                        w, E, x = e.extend({}, t),
                        L = B(t.start);
                    J(), e("body").css("cursor", o + "-resize").one("mouseup", l), b("eventResizeStart", this, t, u), c.start(function (e, n) {
                        if (e) {
                            var u = Math.max(L.row, e.row);
                            e = e.col, p == 1 && (u = 0), u == L.row && (e = s ? Math.min(L.col, e) : Math.max(L.col, e)), w = u * 7 + e * v + m - (n.row * 7 + n.col * v + m), n = a(S(t), w, !0), w ? (x.end = n, u = E, E = r(F([x]), i.row, y), E.find("*").css("cursor", o + "-resize"), u && u.remove(), N(t)) : E && (T(t), E.remove(), E = null), W(), z(t.start, a(h(n), 1))
                        }
                    }, u)
                }
            })
        }
        var g = this;
        g.renderDaySegs = n, g.resizableDayEvent = m;
        var y = g.opt,
            b = g.trigger,
            w = g.isEventDraggable,
            E = g.isEventResizable,
            S = g.eventEnd,
            x = g.reportEventElement,
            T = g.showEvents,
            N = g.hideEvents,
            C = g.eventResize,
            k = g.getRowCnt,
            A = g.getColCnt,
            O = g.allDayRow,
            _ = g.allDayBounds,
            D = g.colContentLeft,
            P = g.colContentRight,
            H = g.dayOfWeekCol,
            B = g.dateCell,
            F = g.compileDaySegs,
            I = g.getDaySegmentContainer,
            q = g.bindDaySeg,
            R = g.calendar.formatDates,
            z = g.renderDayOverlay,
            W = g.clearOverlays,
            J = g.clearSelection
    }
    function ct() {
        function t(e, t, i) {
            n(), t || (t = a(e, i)), f(e, t, i), r(e, t, i)
        }
        function n(e) {
            c && (c = !1, l(), u("unselect", null, e))
        }
        function r(e, t, n, r) {
            c = !0, u("select", null, e, t, n, r)
        }
        function i(t) {
            var i = s.cellDate,
                u = s.cellIsAllDay,
                a = s.getHoverListener(),
                c = s.reportDayClick;
            if (t.which == 1 && o("selectable")) {
                n(t);
                var h;
                a.start(function (e, t) {
                    l(), e && u(e) ? (h = [i(t), i(e)].sort(R), f(h[0], h[1], !0)) : h = null
                }, t), e(document).one("mouseup", function (e) {
                    a.stop(), h && (+h[0] == +h[1] && c(h[0], !0, e), r(h[0], h[1], !0, e))
                })
            }
        }
        var s = this;
        s.select = t, s.unselect = n, s.reportSelection = r, s.daySelectionMousedown = i;
        var o = s.opt,
            u = s.trigger,
            a = s.defaultSelectionEnd,
            f = s.renderSelection,
            l = s.clearSelection,
            c = !1;
        o("selectable") && o("unselectAuto") && e(document).mousedown(function (t) {
            var r = o("unselectCancel");
            if (r && e(t.target).parents(r).length) return;
            n(t)
        })
    }
    function ht() {
        function t(t, n) {
            var r = s.shift();
            return r || (r = e("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>")), r[0].parentNode != n[0] && r.appendTo(n), i.push(r.css(t).show()), r
        }
        function n() {
            for (var e; e = i.shift();) s.push(e.hide().unbind())
        }
        var r = this;
        r.renderOverlay = t, r.clearOverlays = n;
        var i = [],
            s = []
    }
    function pt(e) {
        var t = this,
            n, r;
        t.build = function () {
            n = [], r = [], e(n, r)
        }, t.cell = function (e, t) {
            var i = n.length,
                s = r.length,
                o, u = -1,
                a = -1;
            for (o = 0; o < i; o++) if (t >= n[o][0] && t < n[o][1]) {
                u = o;
                break
            }
            for (o = 0; o < s; o++) if (e >= r[o][0] && e < r[o][1]) {
                a = o;
                break
            }
            return u >= 0 && a >= 0 ? {
                row: u,
                col: a
            } : null
        }, t.rect = function (e, t, i, s, o) {
            return o = o.offset(), {
                top: n[e][0] - o.top,
                left: r[t][0] - o.left,
                width: r[s][1] - r[t][0],
                height: n[i][1] - n[e][0]
            }
        }
    }
    function dt(t) {
        function n(e) {
            vt(e), e = t.cell(e.pageX, e.pageY);
            if (!e != !u || e && (e.row != u.row || e.col != u.col)) e ? (o || (o = e), s(e, o, e.row - o.row, e.col - o.col)) : s(e, o), u = e
        }
        var r = this,
            i, s, o, u;
        r.start = function (r, a, f) {
            s = r, o = u = null, t.build(), n(a), i = f || "mousemove", e(document).bind(i, n)
        }, r.stop = function () {
            return e(document).unbind(i, n), u
        }
    }
    function vt(e) {
        e.pageX === t && (e.pageX = e.originalEvent.pageX, e.pageY = e.originalEvent.pageY)
    }
    function mt(e) {
        function n(t) {
            return i[t] = i[t] || e(t)
        }
        var r = this,
            i = {}, s = {}, o = {};
        r.left = function (e) {
            return s[e] = s[e] === t ? n(e).position().left : s[e]
        }, r.right = function (e) {
            return o[e] = o[e] === t ? r.left(e) + n(e).width() : o[e]
        }, r.clear = function () {
            i = {}, s = {}, o = {}
        }
    }
    var gt = {
        defaultView: "month",
        aspectRatio: 1.35,
        header: {
            left: "title",
            center: "",
            right: "today prev,next"
        },
        weekends: !0,
        allDayDefault: !0,
        ignoreTimezone: !0,
        lazyFetching: !0,
        startParam: "start",
        endParam: "end",
        titleFormat: {
            month: "MMMM yyyy",
            week: "MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",
            day: "dddd, MMM d, yyyy"
        },
        columnFormat: {
            month: "ddd",
            week: "ddd M/d",
            day: "dddd M/d"
        },
        timeFormat: {
            "": "h(:mm)t"
        },
        isRTL: !1,
        firstDay: 0,
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        buttonText: {
            prev: "&nbsp;&#9668;&nbsp;",
            next: "&nbsp;&#9658;&nbsp;",
            prevYear: "&nbsp;&lt;&lt;&nbsp;",
            nextYear: "&nbsp;&gt;&gt;&nbsp;",
            today: "today",
            month: "month",
            week: "week",
            day: "day"
        },
        theme: !1,
        buttonIcons: {
            prev: "circle-triangle-w",
            next: "circle-triangle-e"
        },
        unselectAuto: !0,
        dropAccept: "*"
    }, yt = {
        header: {
            left: "next,prev today",
            center: "",
            right: "title"
        },
        buttonText: {
            prev: "&nbsp;&#9658;&nbsp;",
            next: "&nbsp;&#9668;&nbsp;",
            prevYear: "&nbsp;&gt;&gt;&nbsp;",
            nextYear: "&nbsp;&lt;&lt;&nbsp;"
        },
        buttonIcons: {
            prev: "circle-triangle-e",
            next: "circle-triangle-w"
        }
    }, bt = e.fullCalendar = {
        version: "1.5.3"
    }, wt = bt.views = {};
    e.fn.fullCalendar = function (n) {
        if (typeof n == "string") {
            var i = Array.prototype.slice.call(arguments, 1),
                s;
            return this.each(function () {
                var r = e.data(this, "fullCalendar");
                r && e.isFunction(r[n]) && (r = r[n].apply(r, i), s === t && (s = r), n == "destroy" && e.removeData(this, "fullCalendar"))
            }), s !== t ? s : this
        }
        var o = n.eventSources || [];
        return delete n.eventSources, n.events && (o.push(n.events), delete n.events), n = e.extend(!0, {}, gt, n.isRTL || n.isRTL === t && gt.isRTL ? yt : {}, n), this.each(function (t, i) {
            t = e(i), i = new r(t, n, o), t.data("fullCalendar", i), i.render()
        }), this
    }, bt.sourceNormalizers = [], bt.sourceFetchers = [];
    var Et = {
        dataType: "json",
        cache: !1
    }, St = 1;
    bt.addDays = a, bt.cloneDate = h, bt.parseDate = g, bt.parseISO8601 = y, bt.parseTime = b, bt.formatDate = w, bt.formatDates = E;
    var xt = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
        Tt = 864e5,
        Nt = 36e5,
        Ct = 6e4,
        kt = {
            s: function (e) {
                return e.getSeconds()
            },
            ss: function (e) {
                return z(e.getSeconds())
            },
            m: function (e) {
                return e.getMinutes()
            },
            mm: function (e) {
                return z(e.getMinutes())
            },
            h: function (e) {
                return e.getHours() % 12 || 12
            },
            hh: function (e) {
                return z(e.getHours() % 12 || 12)
            },
            H: function (e) {
                return e.getHours()
            },
            HH: function (e) {
                return z(e.getHours())
            },
            d: function (e) {
                return e.getDate()
            },
            dd: function (e) {
                return z(e.getDate())
            },
            ddd: function (e, t) {
                return t.dayNamesShort[e.getDay()]
            },
            dddd: function (e, t) {
                return t.dayNames[e.getDay()]
            },
            M: function (e) {
                return e.getMonth() + 1
            },
            MM: function (e) {
                return z(e.getMonth() + 1)
            },
            MMM: function (e, t) {
                return t.monthNamesShort[e.getMonth()]
            },
            MMMM: function (e, t) {
                return t.monthNames[e.getMonth()]
            },
            yy: function (e) {
                return (e.getFullYear() + "").substring(2)
            },
            yyyy: function (e) {
                return e.getFullYear()
            },
            t: function (e) {
                return e.getHours() < 12 ? "a" : "p"
            },
            tt: function (e) {
                return e.getHours() < 12 ? "am" : "pm"
            },
            T: function (e) {
                return e.getHours() < 12 ? "A" : "P"
            },
            TT: function (e) {
                return e.getHours() < 12 ? "AM" : "PM"
            },
            u: function (e) {
                return w(e, "yyyy-MM-dd'T'HH:mm:ss'Z'")
            },
            S: function (e) {
                return e = e.getDate(), e > 10 && e < 20 ? "th" : ["st", "nd", "rd"][e % 10 - 1] || "th"
            }
        };
    bt.applyAll = G, wt.month = Z, wt.basicWeek = et, wt.basicDay = tt, n({
        weekMode: "fixed"
    }), wt.agendaWeek = it, wt.agendaDay = st, n({
        allDaySlot: !0,
        allDayText: "all-day",
        firstHour: 6,
        slotMinutes: 30,
        defaultEventMinutes: 120,
        axisFormat: "h(:mm)tt",
        timeFormat: {
            agenda: "h:mm{ - h:mm}"
        },
        dragOpacity: {
            agenda: .5
        },
        minTime: 0,
        maxTime: 24
    })
}(jQuery),
function (e) {
    function t(e, t) {
        return typeof e == "function" ? e.call(t) : e
    }
    function n(t, n) {
        this.$element = e(t), this.options = n, this.enabled = !0, this.fixTitle()
    }
    n.prototype = {
        show: function () {
            var n = this.getTitle();
            if (n && this.enabled) {
                var r = this.tip();
                r.find(".tipsy-inner")[this.options.html ? "html" : "text"](n), r[0].className = "tipsy", r.remove().css({
                    top: 0,
                    left: 0,
                    visibility: "hidden",
                    display: "block"
                }).prependTo(document.body);
                var i = e.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                }),
                    s = r[0].offsetWidth,
                    o = r[0].offsetHeight,
                    u = t(this.options.gravity, this.$element[0]),
                    a;
                switch (u.charAt(0)) {
                    case "n":
                        a = {
                            top: i.top + i.height + this.options.offset,
                            left: i.left + i.width / 2 - s / 2
                        };
                        break;
                    case "s":
                        a = {
                            top: i.top - o - this.options.offset,
                            left: i.left + i.width / 2 - s / 2
                        };
                        break;
                    case "e":
                        a = {
                            top: i.top + i.height / 2 - o / 2,
                            left: i.left - s - this.options.offset
                        };
                        break;
                    case "w":
                        a = {
                            top: i.top + i.height / 2 - o / 2,
                            left: i.left + i.width + this.options.offset
                        }
                }
                u.length == 2 && (u.charAt(1) == "w" ? a.left = i.left + i.width / 2 - 15 : a.left = i.left + i.width / 2 - s + 15), r.css(a).addClass("tipsy-" + u), r.find(".tipsy-arrow")[0].className = "tipsy-arrow tipsy-arrow-" + u.charAt(0), this.options.className && r.addClass(t(this.options.className, this.$element[0])), this.options.fade ? r.stop().css({
                    opacity: 0,
                    display: "block",
                    visibility: "visible"
                }).animate({
                    opacity: this.options.opacity
                }) : r.css({
                    visibility: "visible",
                    opacity: this.options.opacity
                })
            }
        },
        hide: function () {
            this.options.fade ? this.tip().stop().fadeOut(function () {
                e(this).remove()
            }) : this.tip().remove()
        },
        fixTitle: function () {
            var e = this.$element;
            (e.attr("title") || typeof e.attr("original-title") != "string") && e.attr("original-title", e.attr("title") || "").removeAttr("title")
        },
        getTitle: function () {
            var e, t = this.$element,
                n = this.options;
            this.fixTitle();
            var e, n = this.options;
            return typeof n.title == "string" ? e = t.attr(n.title == "title" ? "original-title" : n.title) : typeof n.title == "function" && (e = n.title.call(t[0])), e = ("" + e).replace(/(^\s*|\s*$)/, ""), e || n.fallback
        },
        tip: function () {
            return this.$tip || (this.$tip = e('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>')), this.$tip
        },
        validate: function () {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        },
        enable: function () {
            this.enabled = !0
        },
        disable: function () {
            this.enabled = !1
        },
        toggleEnabled: function () {
            this.enabled = !this.enabled
        }
    }, e.fn.tipsy = function (t) {
        function i(r) {
            var i = e.data(r, "tipsy");
            return i || (i = new n(r, e.fn.tipsy.elementOptions(r, t)), e.data(r, "tipsy", i)), i
        }
        function s() {
            var e = i(this);
            e.hoverState = "in", t.delayIn == 0 ? e.show() : (e.fixTitle(), setTimeout(function () {
                e.hoverState == "in" && e.show()
            }, t.delayIn))
        }
        function o() {
            var e = i(this);
            e.hoverState = "out", t.delayOut == 0 ? e.hide() : setTimeout(function () {
                e.hoverState == "out" && e.hide()
            }, t.delayOut)
        }
        if (t === !0) return this.data("tipsy");
        if (typeof t == "string") {
            var r = this.data("tipsy");
            return r && r[t](), this
        }
        t = e.extend({}, e.fn.tipsy.defaults, t), t.live || this.each(function () {
            i(this)
        });
        if (t.trigger != "manual") {
            var u = t.live ? "live" : "bind",
                a = t.trigger == "hover" ? "mouseenter" : "focus",
                f = t.trigger == "hover" ? "mouseleave" : "blur";
            this[u](a, s)[u](f, o)
        }
        return this
    }, e.fn.tipsy.defaults = {
        className: null,
        delayIn: 0,
        delayOut: 0,
        fade: !1,
        fallback: "",
        gravity: "n",
        html: !1,
        live: !1,
        offset: 0,
        opacity: .8,
        title: "title",
        trigger: "hover"
    }, e.fn.tipsy.elementOptions = function (t, n) {
        return e.metadata ? e.extend({}, n, e(t).metadata()) : n
    }, e.fn.tipsy.autoNS = function () {
        return e(this).offset().top > e(document).scrollTop() + e(window).height() / 2 ? "s" : "n"
    }, e.fn.tipsy.autoWE = function () {
        return e(this).offset().left > e(document).scrollLeft() + e(window).width() / 2 ? "e" : "w"
    }, e.fn.tipsy.autoBounds = function (t, n) {
        return function () {
            var r = {
                ns: n[0],
                ew: n.length > 1 ? n[1] : !1
            }, i = e(document).scrollTop() + t,
                s = e(document).scrollLeft() + t,
                o = e(this);
            return o.offset().top < i && (r.ns = "n"), o.offset().left < s && (r.ew = "w"), e(window).width() + e(document).scrollLeft() - o.offset().left < t && (r.ew = "e"), e(window).height() + e(document).scrollTop() - o.offset().top < t && (r.ns = "s"), r.ns + (r.ew ? r.ew : "")
        }
    }
}(jQuery),
function (e) {
    var t = {
        init: function (n) {
            var r = this;
            if (!r.data("jqv") || r.data("jqv") == null) t._saveOptions(r, n), e(".formError").live("click", function () {
                e(this).fadeOut(150, function () {
                    e(this).remove()
                })
            });
            return this
        },
        attach: function (n) {
            var r = this,
                i;
            n ? i = t._saveOptions(r, n) : i = r.data("jqv");
            var s = r.find("[data-validation-engine*=validate]") ? "data-validation-engine" : "class";
            return i.binded || (i.bindMethod == "bind" ? (r.find("[class*=validate]").not("[type=checkbox]").not("[type=radio]").not(".datepicker").bind(i.validationEventTrigger, t._onFieldEvent), r.find("[class*=validate][type=checkbox],[class*=validate][type=radio]").bind("click", t._onFieldEvent), r.find("[class*=validate][class*=datepicker]").bind(i.validationEventTrigger, {
                delay: 300
            }, t._onFieldEvent), r.bind("submit", t._onSubmitEvent)) : i.bindMethod == "live" && (r.find("[class*=validate]").not("[type=checkbox]").not(".datepicker").live(i.validationEventTrigger, t._onFieldEvent), r.find("[class*=validate][type=checkbox]").live("click", t._onFieldEvent), r.find("[class*=validate][class*=datepicker]").live(i.validationEventTrigger, {
                delay: 300
            }, t._onFieldEvent), r.live("submit", t._onSubmitEvent)), i.binded = !0, i.autoPositionUpdate && e(window).bind("resize", {
                noAnimation: !0,
                formElem: r
            }, t.updatePromptsPosition)), this
        },
        detach: function () {
            var n = this,
                r = n.data("jqv");
            return r.binded && (n.find("[class*=validate]").not("[type=checkbox]").unbind(r.validationEventTrigger, t._onFieldEvent), n.find("[class*=validate][type=checkbox],[class*=validate][type=radio]").unbind("click", t._onFieldEvent), n.unbind("submit", t.onAjaxFormComplete), n.find("[class*=validate]").not("[type=checkbox]").die(r.validationEventTrigger, t._onFieldEvent), n.find("[class*=validate][type=checkbox]").die("click", t._onFieldEvent), n.die("submit", t.onAjaxFormComplete), n.removeData("jqv"), r.autoPositionUpdate && e(window).unbind("resize", t.updatePromptsPosition)), this
        },
        validate: function () {
            return t._validateFields(this)
        },
        validateField: function (n) {
            var r = e(this).data("jqv"),
                i = t._validateField(e(n), r);
            return r.onSuccess && r.InvalidFields.length == 0 ? r.onSuccess() : r.onFailure && r.InvalidFields.length > 0 && r.onFailure(), i
        },
        validateform: function () {
            return t._onSubmitEvent.call(this)
        },
        updatePromptsPosition: function (n) {
            if (n && this == window) var r = n.data.formElem,
                i = n.data.noAnimation;
            else var r = e(this.closest("form"));
            var s = r.data("jqv");
            return r.find("[class*=validate]").not(":hidden").not(":disabled").each(function () {
                var n = e(this),
                    r = t._getPrompt(n),
                    o = e(r).find(".formErrorContent").html();
                r && t._updatePrompt(n, e(r), o, undefined, !1, s, i)
            }), this
        },
        showPrompt: function (e, n, r, i) {
            var s = this.closest("form"),
                o = s.data("jqv");
            return o || (o = t._saveOptions(this, o)), r && (o.promptPosition = r), o.showArrow = i == 1, t._showPrompt(this, e, n, !1, o), this
        },
        hidePrompt: function () {
            var n = "." + t._getClassName(e(this).attr("id")) + "formError";
            return e(n).fadeTo("fast", .3, function () {
                e(this).remove()
            }), this
        },
        hide: function () {
            var n;
            return e(this).is("form") ? n = "parentForm" + t._getClassName(e(this).attr("id")) : n = t._getClassName(e(this).attr("id")) + "formError", e("." + n).fadeTo("fast", .3, function () {
                e(this).remove()
            }), this
        },
        hideAll: function () {
            return e(".formError").fadeTo("fast", .3, function () {
                e(this).remove()
            }), this
        },
        _onFieldEvent: function (n) {
            var r = e(this),
                i = r.closest("form"),
                s = i.data("jqv");
            window.setTimeout(function () {
                t._validateField(r, s), s.InvalidFields.length == 0 && s.onSuccess ? s.onSuccess() : s.InvalidFields.length > 0 && s.onFailure && s.onFailure()
            }, n.data ? n.data.delay : 0)
        },
        _onSubmitEvent: function () {
            var n = e(this),
                r = n.data("jqv"),
                i = t._validateFields(n, !0);
            return i && r.ajaxFormValidation ? (t._validateFormWithAjax(n, r), !1) : r.onValidationComplete ? (r.onValidationComplete(n, i), !1) : i
        },
        _checkAjaxStatus: function (t) {
            var n = !0;
            return e.each(t.ajaxValidCache, function (e, t) {
                if (!t) return n = !1, !1
            }), n
        },
        _validateFields: function (n, r) {
            var i = n.data("jqv"),
                s = !1;
            n.trigger("jqv.form.validating");
            var o = null;
            n.find("[class*=validate]").not(":hidden").not(":disabled").each(function () {
                var n = e(this);
                s |= t._validateField(n, i, r), n.focus();
                if (i.doNotShowAllErrosOnSubmit) return !1;
                s && o == null && (o = n)
            }), n.trigger("jqv.form.result", [s]);
            if (s) {
                if (i.scroll) {
                    var u = o.offset().top,
                        a = o.offset().left,
                        f = i.promptPosition;
                    typeof f == "string" && f.indexOf(":") != -1 && (f = f.substring(0, f.indexOf(":")));
                    if (f != "bottomRight" && f != "bottomLeft") {
                        var l = t._getPrompt(o);
                        u = l.offset().top
                    }
                    e("html:not(:animated),body:not(:animated)").animate({
                        scrollTop: u,
                        scrollLeft: a
                    }, 1100, function () {
                        i.focusFirstField && o.focus()
                    });
                    if (i.isOverflown) {
                        var c = e(i.overflownDIV),
                            h = c.scrollTop(),
                            p = -parseInt(c.offset().top);
                        u += h + p - 5;
                        var d = e(i.overflownDIV + ":not(:animated)");
                        d.animate({
                            scrollTop: u
                        }, 1100)
                    }
                } else i.focusFirstField && o.focus();
                return !1
            }
            return !0
        },
        _validateFormWithAjax: function (n, r) {
            var i = n.serialize(),
                s = r.ajaxFormValidationURL ? r.ajaxFormValidationURL : n.attr("action");
            e.ajax({
                type: "GET",
                url: s,
                cache: !1,
                dataType: "json",
                data: i,
                form: n,
                methods: t,
                options: r,
                beforeSend: function () {
                    return r.onBeforeAjaxFormValidation(n, r)
                },
                error: function (e, n) {
                    t._ajaxError(e, n)
                },
                success: function (i) {
                    if (i !== !0) {
                        var s = !1;
                        for (var o = 0; o < i.length; o++) {
                            var u = i[o],
                                a = u[0],
                                f = e(e("#" + a)[0]);
                            if (f.length == 1) {
                                var l = u[2];
                                if (u[1] == 1) if (l == "" || !l) t._closePrompt(f);
                                else {
                                    if (r.allrules[l]) {
                                        var c = r.allrules[l].alertTextOk;
                                        c && (l = c)
                                    }
                                    t._showPrompt(f, l, "pass", !1, r, !0)
                                } else {
                                    s |= !0;
                                    if (r.allrules[l]) {
                                        var c = r.allrules[l].alertText;
                                        c && (l = c)
                                    }
                                    t._showPrompt(f, l, "", !1, r, !0)
                                }
                            }
                        }
                        r.onAjaxFormComplete(!s, n, i, r)
                    } else r.onAjaxFormComplete(!0, n, "", r)
                }
            })
        },
        _validateField: function (n, r, i) {
            n.attr("id") || e.error("jQueryValidate: an ID attribute is required for this field: " + n.attr("name") + " class:" + n.attr("class"));
            var s = n.attr("class"),
                o = /validate\[(.*)\]/.exec(s);
            if (!o) return !1;
            var u = o[1],
                a = u.split(/\[|,|\]/),
                f = !1,
                l = n.attr("name"),
                c = "",
                h = !1;
            r.isError = !1, r.showArrow = !0;
            var p = e(n.closest("form"));
            for (var d = 0; d < a.length; d++) {
                a[d] = a[d].replace(" ", "");
                var v = undefined;
                switch (a[d]) {
                    case "required":
                        h = !0, v = t._required(n, a, d, r);
                        break;
                    case "custom":
                        v = t._customRegex(n, a, d, r);
                        break;
                    case "groupRequired":
                        var m = "[class*=" + a[d + 1] + "]",
                            g = p.find(m).eq(0);
                        if (g[0] != n[0]) {
                            t._validateField(g, r, i), r.showArrow = !0;
                            continue
                        }
                        v = t._groupRequired(n, a, d, r), v && (h = !0), r.showArrow = !1;
                        break;
                    case "ajax":
                        i || (t._ajax(n, a, d, r), f = !0);
                        break;
                    case "minSize":
                        v = t._minSize(n, a, d, r);
                        break;
                    case "maxSize":
                        v = t._maxSize(n, a, d, r);
                        break;
                    case "min":
                        v = t._min(n, a, d, r);
                        break;
                    case "max":
                        v = t._max(n, a, d, r);
                        break;
                    case "past":
                        v = t._past(n, a, d, r);
                        break;
                    case "future":
                        v = t._future(n, a, d, r);
                        break;
                    case "dateRange":
                        var m = "[class*=" + a[d + 1] + "]",
                            g = p.find(m).eq(0),
                            y = p.find(m).eq(1);
                        if (g[0].value || y[0].value) v = t._dateRange(g, y, a, d, r);
                        v && (h = !0), r.showArrow = !1;
                        break;
                    case "dateTimeRange":
                        var m = "[class*=" + a[d + 1] + "]",
                            g = p.find(m).eq(0),
                            y = p.find(m).eq(1);
                        if (g[0].value || y[0].value) v = t._dateTimeRange(g, y, a, d, r);
                        v && (h = !0), r.showArrow = !1;
                        break;
                    case "maxCheckbox":
                        v = t._maxCheckbox(p, n, a, d, r), n = e(p.find("input[name='" + l + "']"));
                        break;
                    case "minCheckbox":
                        v = t._minCheckbox(p, n, a, d, r), n = e(p.find("input[name='" + l + "']"));
                        break;
                    case "equals":
                        v = t._equals(n, a, d, r);
                        break;
                    case "funcCall":
                        v = t._funcCall(n, a, d, r);
                        break;
                    default:
                }
                v !== undefined && (c += v + "<br/>", r.isError = !0)
            }!h && n.val() == "" && (r.isError = !1);
            var b = n.prop("type");
            (b == "radio" || b == "checkbox") && p.find("input[name='" + l + "']").size() > 1 && (n = e(p.find("input[name='" + l + "'][type!=hidden]:first")), r.showArrow = !1), b == "text" && p.find("input[name='" + l + "']").size() > 1 && (n = e(p.find("input[name='" + l + "'][type!=hidden]:first")), r.showArrow = !1), r.isError ? t._showPrompt(n, c, "", !1, r) : f || t._closePrompt(n), f || n.trigger("jqv.field.result", [n, r.isError, c]);
            var w = e.inArray(n[0], r.InvalidFields);
            return w == -1 ? r.isError && r.InvalidFields.push(n[0]) : r.isError || r.InvalidFields.splice(w, 1), r.isError
        },
        _required: function (e, t, n, r) {
            switch (e.prop("type")) {
                case "text":
                case "password":
                case "textarea":
                case "file":
                default:
                    if (!e.val()) return r.allrules[t[n]].alertText;
                    break;
                case "radio":
                case "checkbox":
                    var i = e.closest("form"),
                        s = e.attr("name");
                    if (i.find("input[name='" + s + "']:checked").size() == 0) return i.find("input[name='" + s + "']").size() == 1 ? r.allrules[t[n]].alertTextCheckboxe : r.allrules[t[n]].alertTextCheckboxMultiple;
                    break;
                case "select-one":
                    if (!e.val()) return r.allrules[t[n]].alertText;
                    break;
                case "select-multiple":
                    if (!e.find("option:selected").val()) return r.allrules[t[n]].alertText
            }
        },
        _groupRequired: function (n, r, i, s) {
            var o = "[class*=" + r[i + 1] + "]",
                u = !1;
            n.closest("form").find(o).each(function () {
                if (!t._required(e(this), r, i, s)) return u = !0, !1
            });
            if (!u) return s.allrules[r[i]].alertText
        },
        _customRegex: function (e, t, n, r) {
            var i = t[n + 1],
                s = r.allrules[i];
            if (!s) {
                alert("jqv:custom rule not found " + i);
                return
            }
            var o = s.regex;
            if (!o) {
                alert("jqv:custom regex not found " + i);
                return
            }
            var u = new RegExp(o);
            if (!u.test(e.val())) return r.allrules[i].alertText
        },
        _funcCall: function (e, t, n, r) {
            var i = t[n + 1],
                s = window[i] || r.customFunctions[i];
            if (typeof s == "function") return s(e, t, n, r)
        },
        _equals: function (t, n, r, i) {
            var s = n[r + 1];
            if (t.val() != e("#" + s).val()) return i.allrules.equals.alertText
        },
        _maxSize: function (e, t, n, r) {
            var i = t[n + 1],
                s = e.val().length;
            if (s > i) {
                var o = r.allrules.maxSize;
                return o.alertText + i + o.alertText2
            }
        },
        _minSize: function (e, t, n, r) {
            var i = t[n + 1],
                s = e.val().length;
            if (s < i) {
                var o = r.allrules.minSize;
                return o.alertText + i + o.alertText2
            }
        },
        _min: function (e, t, n, r) {
            var i = parseFloat(t[n + 1]),
                s = parseFloat(e.val());
            if (s < i) {
                var o = r.allrules.min;
                return o.alertText2 ? o.alertText + i + o.alertText2 : o.alertText + i
            }
        },
        _max: function (e, t, n, r) {
            var i = parseFloat(t[n + 1]),
                s = parseFloat(e.val());
            if (s > i) {
                var o = r.allrules.max;
                return o.alertText2 ? o.alertText + i + o.alertText2 : o.alertText + i
            }
        },
        _past: function (e, n, r, i) {
            var s = n[r + 1],
                o = s.toLowerCase() == "now" ? new Date : t._parseDate(s),
                u = t._parseDate(e.val());
            if (u < o) {
                var a = i.allrules.past;
                return a.alertText2 ? a.alertText + t._dateToString(o) + a.alertText2 : a.alertText + t._dateToString(o)
            }
        },
        _future: function (e, n, r, i) {
            var s = n[r + 1],
                o = s.toLowerCase() == "now" ? new Date : t._parseDate(s),
                u = t._parseDate(e.val());
            if (u > o) {
                var a = i.allrules.future;
                return a.alertText2 ? a.alertText + t._dateToString(o) + a.alertText2 : a.alertText + t._dateToString(o)
            }
        },
        _isDate: function (e) {
            var t = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/);
            return t.test(e) ? !0 : !1
        },
        _isDateTime: function (e) {
            var t = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/);
            return t.test(e) ? !0 : !1
        },
        _dateCompare: function (e, t) {
            return new Date(e.toString()) < new Date(t.toString())
        },
        _dateRange: function (e, n, r, i, s) {
            if (!e[0].value && n[0].value || e[0].value && !n[0].value) return s.allrules[r[i]].alertText + s.allrules[r[i]].alertText2;
            if (!t._isDate(e[0].value) || !t._isDate(n[0].value)) return s.allrules[r[i]].alertText + s.allrules[r[i]].alertText2;
            if (!t._dateCompare(e[0].value, n[0].value)) return s.allrules[r[i]].alertText + s.allrules[r[i]].alertText2
        },
        _dateTimeRange: function (e, n, r, i, s) {
            if (!e[0].value && n[0].value || e[0].value && !n[0].value) return s.allrules[r[i]].alertText + s.allrules[r[i]].alertText2;
            if (!t._isDateTime(e[0].value) || !t._isDateTime(n[0].value)) return s.allrules[r[i]].alertText + s.allrules[r[i]].alertText2;
            if (!t._dateCompare(e[0].value, n[0].value)) return s.allrules[r[i]].alertText + s.allrules[r[i]].alertText2
        },
        _maxCheckbox: function (e, t, n, r, i) {
            var s = n[r + 1],
                o = t.attr("name"),
                u = e.find("input[name='" + o + "']:checked").size();
            if (u > s) return i.showArrow = !1, i.allrules.maxCheckbox.alertText2 ? i.allrules.maxCheckbox.alertText + " " + s + " " + i.allrules.maxCheckbox.alertText2 : i.allrules.maxCheckbox.alertText
        },
        _minCheckbox: function (e, t, n, r, i) {
            var s = n[r + 1],
                o = t.attr("name"),
                u = e.find("input[name='" + o + "']:checked").size();
            if (u < s) return i.showArrow = !1, i.allrules.minCheckbox.alertText + " " + s + " " + i.allrules.minCheckbox.alertText2
        },
        _ajax: function (n, r, i, s) {
            var o = r[i + 1],
                u = s.allrules[o],
                a = u.extraData,
                f = u.extraDataDynamic;
            a || (a = "");
            if (f) {
                var l = [],
                    c = String(f).split(",");
                for (var i = 0; i < c.length; i++) {
                    var h = c[i];
                    if (e(h).length) {
                        var p = n.closest("form").find(h).val(),
                            d = h.replace("#", "") + "=" + escape(p);
                        l.push(d)
                    }
                }
                f = l.join("&")
            } else f = "";
            s.isError || e.ajax({
                type: "GET",
                url: u.url,
                cache: !1,
                dataType: "json",
                data: "fieldId=" + n.attr("id") + "&fieldValue=" + n.val() + "&extraData=" + a + "&" + f,
                field: n,
                rule: u,
                methods: t,
                options: s,
                beforeSend: function () {
                    var e = u.alertTextLoad;
                    e && t._showPrompt(n, e, "load", !0, s)
                },
                error: function (e, n) {
                    t._ajaxError(e, n)
                },
                success: function (n) {
                    var r = n[0],
                        i = e(e("#" + r)[0]);
                    if (i.length == 1) {
                        var o = n[1],
                            a = n[2];
                        if (!o) {
                            s.ajaxValidCache[r] = !1, s.isError = !0;
                            if (a) {
                                if (s.allrules[a]) {
                                    var f = s.allrules[a].alertText;
                                    f && (a = f)
                                }
                            } else a = u.alertText;
                            t._showPrompt(i, a, "", !0, s)
                        } else {
                            s.ajaxValidCache[r] !== undefined && (s.ajaxValidCache[r] = !0);
                            if (a) {
                                if (s.allrules[a]) {
                                    var f = s.allrules[a].alertTextOk;
                                    f && (a = f)
                                }
                            } else a = u.alertTextOk;
                            a ? t._showPrompt(i, a, "pass", !0, s) : t._closePrompt(i)
                        }
                    }
                    i.trigger("jqv.field.result", [i, !s.isError, a])
                }
            })
        },
        _ajaxError: function (e, t) {
            e.status == 0 && t == null ? alert("The page is not served from a server! ajax call failed") : typeof console != "undefined" && console.log("Ajax error: " + e.status + " " + t)
        },
        _dateToString: function (e) {
            return e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate()
        },
        _parseDate: function (e) {
            var t = e.split("-");
            return t == e && (t = e.split("/")), new Date(t[0], t[1] - 1, t[2])
        },
        _showPrompt: function (e, n, r, i, s, o) {
            var u = t._getPrompt(e);
            o && (u = !1), u ? t._updatePrompt(e, u, n, r, i, s) : t._buildPrompt(e, n, r, i, s)
        },
        _buildPrompt: function (n, r, i, s, o) {
            var u = e("<div>");
            u.addClass(t._getClassName(n.attr("id")) + "formError"), n.is(":input") && u.addClass("parentForm" + t._getClassName(n.parents("form").attr("id"))), u.addClass("formError");
            switch (i) {
                case "pass":
                    u.addClass("greenPopup");
                    break;
                case "load":
                    u.addClass("blackPopup");
                    break;
                default:
                    o.InvalidCount++
            }
            s && u.addClass("ajaxed");
            var a = e("<div>").addClass("formErrorContent").html(r).appendTo(u);
            if (o.showArrow) {
                var f = e("<div>").addClass("formErrorArrow"),
                    l = n.data("promptPosition") || o.promptPosition;
                typeof l == "string" && l.indexOf(":") != -1 && (l = l.substring(0, l.indexOf(":")));
                switch (l) {
                    case "bottomLeft":
                    case "bottomRight":
                        u.find(".formErrorContent").before(f), f.addClass("formErrorArrowBottom").html('<div class="line1"><!-- --></div><div class="line2"><!-- --></div><div class="line3"><!-- --></div><div class="line4"><!-- --></div><div class="line5"><!-- --></div><div class="line6"><!-- --></div><div class="line7"><!-- --></div><div class="line8"><!-- --></div><div class="line9"><!-- --></div><div class="line10"><!-- --></div>');
                        break;
                    case "topLeft":
                    case "topRight":
                        f.html('<div class="line10"><!-- --></div><div class="line9"><!-- --></div><div class="line8"><!-- --></div><div class="line7"><!-- --></div><div class="line6"><!-- --></div><div class="line5"><!-- --></div><div class="line4"><!-- --></div><div class="line3"><!-- --></div><div class="line2"><!-- --></div><div class="line1"><!-- --></div>'), u.append(f)
                }
            }
            o.isOverflown ? n.before(u) : e("body").append(u);
            var c = t._calculatePosition(n, u, o);
            return u.css({
                top: c.callerTopPosition,
                left: c.callerleftPosition,
                marginTop: c.marginTopSize,
                opacity: 0
            }).data("callerField", n), u.animate({
                opacity: .87
            })
        },
        _updatePrompt: function (e, n, r, i, s, o, u) {
            if (n) {
                typeof i != "undefined" && (i == "pass" ? n.addClass("greenPopup") : n.removeClass("greenPopup"), i == "load" ? n.addClass("blackPopup") : n.removeClass("blackPopup")), s ? n.addClass("ajaxed") : n.removeClass("ajaxed"), n.find(".formErrorContent").html(r);
                var a = t._calculatePosition(e, n, o);
                css = {
                    top: a.callerTopPosition,
                    left: a.callerleftPosition,
                    marginTop: a.marginTopSize
                }, u ? n.css(css) : n.animate(css)
            }
        },
        _closePrompt: function (e) {
            var n = t._getPrompt(e);
            n && n.fadeTo("fast", 0, function () {
                n.remove()
            })
        },
        closePrompt: function (e) {
            return t._closePrompt(e)
        },
        _getPrompt: function (n) {
            var r = t._getClassName(n.attr("id")) + "formError",
                i = e("." + t._escapeExpression(r))[0];
            if (i) return e(i)
        },
        _escapeExpression: function (e) {
            return e.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g, "\\$1")
        },
        _calculatePosition: function (e, t, n) {
            var r, i, s, o = e.width(),
                u = t.height(),
                a = n.isOverflown;
            if (a) r = i = 0, s = -u;
            else {
                var f = e.offset();
                r = f.top, i = f.left, s = 0
            }
            var l = e.data("promptPosition") || n.promptPosition,
                c = "",
                h = "",
                p = 0,
                d = 0;
            typeof l == "string" && l.indexOf(":") != -1 && (c = l.substring(l.indexOf(":") + 1), l = l.substring(0, l.indexOf(":")), c.indexOf(",") != -1 && (h = c.substring(c.indexOf(",") + 1), c = c.substring(0, c.indexOf(",")), d = parseInt(h), isNaN(d) && (d = 0)), p = parseInt(c), isNaN(c) && (c = 0));
            switch (l) {
                default:
                case "topRight":
                    a ? i += o - 30 : (i += o - 30, r += -u - 2);
                    break;
                case "topLeft":
                    r += -u - 10;
                    break;
                case "centerRight":
                    i += o + 13;
                    break;
                case "bottomLeft":
                    r = r + e.height() + 15;
                    break;
                case "bottomRight":
                    i += o - 30, r += e.height() + 5
            }
            return i += p, r += d, {
                callerTopPosition: r + "px",
                callerleftPosition: i + "px",
                marginTopSize: s + "px"
            }
        },
        _saveOptions: function (t, n) {
            if (e.validationEngineLanguage) var r = e.validationEngineLanguage.allRules;
            else e.error("jQuery.validationEngine rules are not loaded, plz add localization files to the page");
            e.validationEngine.defaults.allrules = r;
            var i = e.extend(!0, {}, e.validationEngine.defaults, n);
            return t.data("jqv", i), i
        },
        _getClassName: function (e) {
            if (e) return e.replace(/:/g, "_").replace(/\./g, "_")
        }
    };
    e.fn.validationEngine = function (n) {
        var r = e(this);
        if (!r[0]) return !1;
        if (typeof n == "string" && n.charAt(0) != "_" && t[n]) return n != "showPrompt" && n != "hidePrompt" && n != "hide" && n != "hideAll" && t.init.apply(r), t[n].apply(r, Array.prototype.slice.call(arguments, 1));
        if (typeof n == "object" || !n) return t.init.apply(r, arguments), t.attach.apply(r);
        e.error("Method " + n + " does not exist in jQuery.validationEngine")
    }, e.validationEngine = {
        defaults: {
            validationEventTrigger: "blur",
            scroll: !0,
            focusFirstField: !0,
            promptPosition: "topRight",
            bindMethod: "bind",
            inlineAjax: !1,
            ajaxFormValidation: !1,
            ajaxFormValidationURL: !1,
            onAjaxFormComplete: e.noop,
            onBeforeAjaxFormValidation: e.noop,
            onValidationComplete: !1,
            isOverflown: !1,
            overflownDIV: "",
            doNotShowAllErrosOnSubmit: !1,
            binded: !1,
            showArrow: !0,
            isError: !1,
            ajaxValidCache: {},
            autoPositionUpdate: !1,
            InvalidFields: [],
            onSuccess: !1,
            onFailure: !1
        }
    }
}(jQuery),
function (e) {
    e.fn.validationEngineLanguage = function () {}, e.validationEngineLanguage = {
        newLang: function () {
            e.validationEngineLanguage.allRules = {
                required: {
                    regex: "none",
                    alertText: "* This field is required",
                    alertTextCheckboxMultiple: "* Please select an option",
                    alertTextCheckboxe: "* This checkbox is required",
                    alertTextDateRange: "* Both date range fields are required"
                },
                dateRange: {
                    regex: "none",
                    alertText: "* Invalid ",
                    alertText2: "Date Range"
                },
                dateTimeRange: {
                    regex: "none",
                    alertText: "* Invalid ",
                    alertText2: "Date Time Range"
                },
                minSize: {
                    regex: "none",
                    alertText: "* Minimum ",
                    alertText2: " characters allowed"
                },
                maxSize: {
                    regex: "none",
                    alertText: "* Maximum ",
                    alertText2: " characters allowed"
                },
                groupRequired: {
                    regex: "none",
                    alertText: "* You must fill one of the following fields"
                },
                min: {
                    regex: "none",
                    alertText: "* Minimum value is "
                },
                max: {
                    regex: "none",
                    alertText: "* Maximum value is "
                },
                past: {
                    regex: "none",
                    alertText: "* Date prior to "
                },
                future: {
                    regex: "none",
                    alertText: "* Date past "
                },
                maxCheckbox: {
                    regex: "none",
                    alertText: "* Maximum ",
                    alertText2: " options allowed"
                },
                minCheckbox: {
                    regex: "none",
                    alertText: "* Please select ",
                    alertText2: " options"
                },
                equals: {
                    regex: "none",
                    alertText: "* Fields do not match"
                },
                phone: {
                    regex: /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
                    alertText: "* Invalid phone number"
                },
                email: {
                    regex: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
                    alertText: "* Invalid email address"
                },
                integer: {
                    regex: /^[\-\+]?\d+$/,
                    alertText: "* Not a valid integer"
                },
                numberPositive: {
                    regex: /^(\d+(?:\.\d+)*)/,
                    alertText: "* it should be greater than zero"
                },
                number: {
                    regex: /^[\-\+]?(([0-9]+)([\.,]([0-9]+))?|([\.,]([0-9]+))?)$/,
                    alertText: "* Invalid floating decimal number"
                },
                date: {
                    regex: /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
                    alertText: "* Invalid date, must be in YYYY-MM-DD format"
                },
                ipv4: {
                    regex: /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    alertText: "* Invalid IP address"
                },
                url: {
                    regex: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    alertText: "* Invalid URL"
                },
                onlyNumberSp: {
                    regex: /^[0-9\ ]+$/,
                    alertText: "* Numbers only"
                },
                onlyLetterSp: {
                    regex: /^[a-zA-Z\ \']+$/,
                    alertText: "* Letters only"
                },
                onlyLetterNumber: {
                    regex: /^[0-9a-zA-Z]+$/,
                    alertText: "* No special characters allowed"
                },
                ajaxUserCall: {
                    url: "ajaxValidateFieldUser",
                    extraData: "name=eric",
                    alertText: "* This user is already taken",
                    alertTextLoad: "* Validating, please wait"
                },
                ajaxUserCallPhp: {
                    url: "phpajax/ajaxValidateFieldUser.php",
                    extraData: "name=eric",
                    alertTextOk: "* This username is available",
                    alertText: "* This user is already taken",
                    alertTextLoad: "* Validating, please wait"
                },
                ajaxNameCall: {
                    url: "ajaxValidateFieldName",
                    alertText: "* This name is already taken",
                    alertTextOk: "* This name is available",
                    alertTextLoad: "* Validating, please wait"
                },
                ajaxNameCallPhp: {
                    url: "phpajax/ajaxValidateFieldName.php",
                    alertText: "* This name is already taken",
                    alertTextLoad: "* Validating, please wait"
                },
                validate2fields: {
                    alertText: "* Please input HELLO"
                },
                dateFormat: {
                    regex: /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    alertText: "* Invalid Date"
                },
                dateTimeFormat: {
                    regex: /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    alertText: "* Invalid Date or Date Format",
                    alertText2: "Expected Format: ",
                    alertText3: "mm/dd/yyyy hh:mm:ss AM|PM or ",
                    alertText4: "yyyy-mm-dd hh:mm:ss AM|PM"
                }
            }
        }
    }, e.validationEngineLanguage.newLang()
}(jQuery),
function (e) {
    e.fn.lightBox = function (t) {
        function r() {
            return i(this, n), !1
        }
        function i(n, r) {
            e("embed, object, select").css({
                visibility: "hidden"
            }), s(), t.imageArray.length = 0, t.activeImage = 0;
            if (r.length == 1) t.imageArray.push(new Array(n.getAttribute("href"), n.getAttribute("title")));
            else for (var i = 0; i < r.length; i++) t.imageArray.push(new Array(r[i].getAttribute("href"), r[i].getAttribute("title")));
            while (t.imageArray[t.activeImage][0] != n.getAttribute("href")) t.activeImage++;
            o()
        }
        function s() {
            e("body").append('<div id="jquery-overlay"></div><div id="jquery-lightbox"><div id="lightbox-container-image-box"><div id="lightbox-container-image"><img id="lightbox-image"><div style="" id="lightbox-nav"><a href="#" id="lightbox-nav-btnPrev"></a><a href="#" id="lightbox-nav-btnNext"></a></div><div id="lightbox-loading"><a href="#" id="lightbox-loading-link"><img src="' + t.imageLoading + '"></a></div></div></div><div id="lightbox-container-image-data-box"><div id="lightbox-container-image-data"><div id="lightbox-image-details"><span id="lightbox-image-details-caption"></span><span id="lightbox-image-details-currentNumber"></span></div><div id="lightbox-secNav"><a href="#" id="lightbox-secNav-btnClose"><img src="' + t.imageBtnClose + '"></a></div></div></div></div>');
            var n = m();
            e("#jquery-overlay").css({
                backgroundColor: t.overlayBgColor,
                opacity: t.overlayOpacity,
                width: n[0],
                height: n[1]
            }).fadeIn();
            var r = g();
            e("#jquery-lightbox").css({
                top: r[1] + n[3] / 10,
                left: r[0]
            }).show(), e("#jquery-overlay,#jquery-lightbox").click(function () {
                v()
            }), e("#lightbox-loading-link,#lightbox-secNav-btnClose").click(function () {
                return v(), !1
            }), e(window).resize(function () {
                var t = m();
                e("#jquery-overlay").css({
                    width: t[0],
                    height: t[1]
                });
                var n = g();
                e("#jquery-lightbox").css({
                    top: n[1] + t[3] / 10,
                    left: n[0]
                })
            })
        }
        function o() {
            e("#lightbox-loading").show(), t.fixedNavigation ? e("#lightbox-image,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber").hide() : e("#lightbox-image,#lightbox-nav,#lightbox-nav-btnPrev,#lightbox-nav-btnNext,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber").hide();
            var n = new Image;
            n.onload = function () {
                e("#lightbox-image").attr("src", t.imageArray[t.activeImage][0]), u(n.width, n.height), n.onload = function () {}
            }, n.src = t.imageArray[t.activeImage][0]
        }
        function u(n, r) {
            var i = e("#lightbox-container-image-box").width(),
                s = e("#lightbox-container-image-box").height(),
                o = n + t.containerBorderSize * 2,
                u = r + t.containerBorderSize * 2,
                f = i - o,
                l = s - u;
            e("#lightbox-container-image-box").animate({
                width: o,
                height: u
            }, t.containerResizeSpeed, function () {
                a()
            }), f == 0 && l == 0 && (e.browser.msie ? y(250) : y(100)), e("#lightbox-container-image-data-box").css({
                width: n
            }), e("#lightbox-nav-btnPrev,#lightbox-nav-btnNext").css({
                height: r + t.containerBorderSize * 2
            })
        }
        function a() {
            e("#lightbox-loading").hide(), e("#lightbox-image").fadeIn(function () {
                f(), l()
            }), d()
        }
        function f() {
            e("#lightbox-container-image-data-box").slideDown("fast"), e("#lightbox-image-details-caption").hide(), t.imageArray[t.activeImage][1] && e("#lightbox-image-details-caption").html(t.imageArray[t.activeImage][1]).show(), t.imageArray.length > 1 && e("#lightbox-image-details-currentNumber").html(t.txtImage + " " + (t.activeImage + 1) + " " + t.txtOf + " " + t.imageArray.length).show()
        }
        function l() {
            e("#lightbox-nav").show(), e("#lightbox-nav-btnPrev,#lightbox-nav-btnNext").css({
                background: "transparent url(" + t.imageBlank + ") no-repeat"
            }), t.activeImage != 0 && (t.fixedNavigation ? e("#lightbox-nav-btnPrev").css({
                background: "url(" + t.imageBtnPrev + ") left 15% no-repeat"
            }).unbind().bind("click", function () {
                return t.activeImage = t.activeImage - 1, o(), !1
            }) : e("#lightbox-nav-btnPrev").unbind().hover(function () {
                e(this).css({
                    background: "url(" + t.imageBtnPrev + ") left 15% no-repeat"
                })
            }, function () {
                e(this).css({
                    background: "transparent url(" + t.imageBlank + ") no-repeat"
                })
            }).show().bind("click", function () {
                return t.activeImage = t.activeImage - 1, o(), !1
            })), t.activeImage != t.imageArray.length - 1 && (t.fixedNavigation ? e("#lightbox-nav-btnNext").css({
                background: "url(" + t.imageBtnNext + ") right 15% no-repeat"
            }).unbind().bind("click", function () {
                return t.activeImage = t.activeImage + 1, o(), !1
            }) : e("#lightbox-nav-btnNext").unbind().hover(function () {
                e(this).css({
                    background: "url(" + t.imageBtnNext + ") right 15% no-repeat"
                })
            }, function () {
                e(this).css({
                    background: "transparent url(" + t.imageBlank + ") no-repeat"
                })
            }).show().bind("click", function () {
                return t.activeImage = t.activeImage + 1, o(), !1
            })), c()
        }
        function c() {
            e(document).keydown(function (e) {
                p(e)
            })
        }
        function h() {
            e(document).unbind()
        }
        function p(e) {
            e == null ? (keycode = event.keyCode, escapeKey = 27) : (keycode = e.keyCode, escapeKey = e.DOM_VK_ESCAPE), key = String.fromCharCode(keycode).toLowerCase(), (key == t.keyToClose || key == "x" || keycode == escapeKey) && v(), key == t.keyToPrev || keycode == 37, key == t.keyToNext || keycode == 39
        }
        function d() {
            t.imageArray.length - 1 > t.activeImage && (objNext = new Image, objNext.src = t.imageArray[t.activeImage + 1][0]), t.activeImage > 0 && (objPrev = new Image, objPrev.src = t.imageArray[t.activeImage - 1][0])
        }
        function v() {
            e("#jquery-lightbox").remove(), e("#jquery-overlay").fadeOut(function () {
                e("#jquery-overlay").remove()
            }), e("embed, object, select").css({
                visibility: "visible"
            })
        }
        function m() {
            var e, t;
            window.innerHeight && window.scrollMaxY ? (e = window.innerWidth + window.scrollMaxX, t = window.innerHeight + window.scrollMaxY) : document.body.scrollHeight > document.body.offsetHeight ? (e = document.body.scrollWidth, t = document.body.scrollHeight) : (e = document.body.offsetWidth, t = document.body.offsetHeight);
            var n, r;
            return self.innerHeight ? (document.documentElement.clientWidth ? n = document.documentElement.clientWidth : n = self.innerWidth, r = self.innerHeight) : document.documentElement && document.documentElement.clientHeight ? (n = document.documentElement.clientWidth, r = document.documentElement.clientHeight) : document.body && (n = document.body.clientWidth, r = document.body.clientHeight), t < r ? pageHeight = r : pageHeight = t, e < n ? pageWidth = e : pageWidth = n, arrayPageSize = new Array(pageWidth, pageHeight, n, r), arrayPageSize
        }
        function g() {
            var e, t;
            return self.pageYOffset ? (t = self.pageYOffset, e = self.pageXOffset) : document.documentElement && document.documentElement.scrollTop ? (t = document.documentElement.scrollTop, e = document.documentElement.scrollLeft) : document.body && (t = document.body.scrollTop, e = document.body.scrollLeft), arrayPageScroll = new Array(e, t), arrayPageScroll
        }
        function y(e) {
            var t = new Date;
            n = null;
            do var n = new Date;
            while (n - t < e)
        }
        t = jQuery.extend({
            overlayBgColor: "#000",
            overlayOpacity: .8,
            fixedNavigation: !1,
            imageLoading: "/assets/canvas_white/images/lightbox/lightbox-ico-loading.gif",
            imageBtnPrev: "/assets/canvas_white/images/lightbox/lightbox-btn-prev.gif",
            imageBtnNext: "/assets/canvas_white/images/lightbox/lightbox-btn-next.gif",
            imageBtnClose: "/assets/canvas_white/images/lightbox/lightbox-btn-close.gif",
            imageBlank: "/assets/canvas_white/images/lightbox/lightbox-blank.gif",
            containerBorderSize: 10,
            containerResizeSpeed: 400,
            txtImage: "Image",
            txtOf: "of",
            keyToClose: "c",
            keyToPrev: "p",
            keyToNext: "n",
            imageArray: [],
            activeImage: 0
        }, t);
        var n = this;
        return this.unbind("click").click(r)
    }
}(jQuery),
function (e) {
    function t() {
        var e, t;
        return self.pageYOffset ? (t = self.pageYOffset, e = self.pageXOffset) : document.documentElement && document.documentElement.scrollTop ? (t = document.documentElement.scrollTop, e = document.documentElement.scrollLeft) : document.body && (t = document.body.scrollTop, e = document.body.scrollLeft), new Array(e, t)
    }
    e.modal = function (t) {
        var n, r, i, s, o, u, a, f;
        n = {
            title: "",
            html: "",
            ajax: "",
            width: null,
            overlay: !0,
            overlayClose: !1,
            escClose: !0
        }, r = e.extend(n, t), i = e("<div>", {
            id: "modal"
        }), s = e("<div>", {
            id: "modalHeader"
        }), u = e("<div>", {
            id: "modalContent"
        }), f = e("<div>", {
            id: "overlay"
        }), a = e("<h2>", {
            text: r.title
        }), o = e("<a>", {
            "class": "close",
            href: "javascript:;",
            html: "&times"
        }), i.appendTo("body"), s.appendTo(i), u.appendTo(i), r.overlay && f.appendTo("body"), a.prependTo(s), o.appendTo(s), r.ajax == "" && r.html == "" && a.text("No Content"), r.ajax !== "" && (u.html('<div id="modalLoader"><img src="./img/ajax-loader.gif" /></div>'), e.modal.reposition(), e.get(r.ajax, function (t) {
            u.html(t), e.modal.reposition()
        })), r.html !== "" && u.html(r.html), o.bind("click", function (t) {
            t.preventDefault(), e.modal.close()
        }), r.overlayClose && f.bind("click", function (t) {
            e.modal.close()
        }), r.escClose && e(document).bind("keyup.modal", function (t) {
            var n = t.which || t.keyCode;
            n == 27 && e.modal.close()
        }), e.modal.reposition()
    }, e.modal.reposition = function () {
        var t = e("#modal").outerWidth(),
            n = t / 2;
        e("#modal").css({
            left: "50%",
            top: e(window).scrollTop() + 75,
            "margin-left": "-" + n + "px"
        })
    }, e.modal.close = function () {
        e("#modal").remove(), e("#overlay").remove(), e(document).unbind("keyup.modal")
    }
}(jQuery),
function (e) {
    e.alert = function (t) {
        var n, r, i, s, o, u, a, f, l, c;
        n = {
            type: "default",
            title: "",
            text: "",
            confirmText: "Confirm",
            cancelText: "Cancel",
            callback: function () {},
            overlayClose: !1,
            escClose: !0
        }, r = e.extend(n, t), i = e("<div>", {
            id: "alert"
        }), s = e("<div>", {
            id: "alertContent"
        }), u = e("<a>", {
            "class": "close",
            href: "javascript:;",
            html: "&times"
        }), o = e("<div>", {
            id: "alertActions"
        }), c = e("<div>", {
            id: "overlay"
        }), l = e("<h2>", {
            text: r.title
        }), a = e("<button>", {
            "class": "btn btn-small btn-primary",
            text: r.confirmText
        }), f = e("<button>", {
            "class": "btn btn-small btn-quaternary",
            text: r.cancelText
        }), i.appendTo("body"), s.appendTo(i), u.appendTo(i), c.appendTo("body"), l.prependTo(s), s.append(r.text), o.appendTo(s), r.type === "confirm" ? (a.appendTo(o), f.appendTo(o)) : (a.appendTo(o), a.text("Ok")), a.bind("click", function (t) {
            t.preventDefault(), typeof r.callback == "function" && r.callback.apply(), e.alert.close()
        }), a.focus(), f.bind("click", function (t) {
            t.preventDefault(), e.alert.close()
        }), u.bind("click", function (t) {
            t.preventDefault(), e.alert.close()
        }), r.overlayClose && c.bind("click", function (t) {
            e.alert.close()
        }), r.escClose && e(document).bind("keyup.alert", function (t) {
            var n = t.which || t.keyCode;
            n == 27 && e.alert.close()
        })
    }, e.alert.close = function () {
        e("#alert").remove(), e("#overlay").remove(), e(document).unbind("keyup.alert")
    }
}(jQuery), $(function () {
    $(".widget-tabs").find(".tabs a").live("click", tabClick), $(".widget-tabs").each(function () {
        var e = $(this).find(".widget-content");
        e.length > 1 && e.hide().eq(0).show()
    })
}), jQuery.fn.googleMaps = function (e) {
    if (!window.GBrowserIsCompatible || !GBrowserIsCompatible()) return this;
    var t = $.extend({}, $.googleMaps.defaults, e);
    return this.each(function () {
        $.googleMaps.gMap = new GMap2(this, t), $.googleMaps.mapsConfiguration(t)
    })
}, $.googleMaps = {
    mapsConfiguration: function (e) {
        if (e.geocode) geocoder = new GClientGeocoder, geocoder.getLatLng(e.geocode, function (t) {
            t ? ($.googleMaps.gMap.setCenter(t, e.depth), $.googleMaps.latitude = t.x, $.googleMaps.longitude = t.y) : alert(address + " not found")
        });
        else {
            var t = $.googleMaps.mapLatLong(e.latitude, e.longitude);
            $.googleMaps.gMap.setCenter(t, e.depth)
        }
        e.polyline && $.googleMaps.gMap.addOverlay($.googleMaps.mapPolyLine(e.polyline)), e.geodesic && $.googleMaps.mapGeoDesic(e.geodesic), e.pan && (e.pan = $.googleMaps.mapPanOptions(e.pan), window.setTimeout(function () {
            $.googleMaps.gMap.panTo($.googleMaps.mapLatLong(e.pan.panLatitude, e.pan.panLongitude))
        }, e.pan.timeout)), e.layer && $.googleMaps.gMap.addOverlay(new GLayer(e.layer)), e.markers && $.googleMaps.mapMarkers(t, e.markers), e.controls.type || e.controls.zoom || e.controls.mapType ? $.googleMaps.mapControls(e.controls) : e.controls.hide || $.googleMaps.gMap.setUIToDefault(), e.scroll ? $.googleMaps.gMap.enableScrollWheelZoom() : e.scroll || $.googleMaps.gMap.disableScrollWheelZoom(), e.controls.localSearch ? $.googleMaps.gMap.enableGoogleBar() : $.googleMaps.gMap.disableGoogleBar(), e.feed && $.googleMaps.gMap.addOverlay(new GGeoXml(e.feed));
        if (e.trafficInfo) {
            var n = {
                incidents: !0
            };
            trafficInfo = new GTrafficOverlay(n), $.googleMaps.gMap.addOverlay(trafficInfo)
        }
        e.directions && ($.googleMaps.directions = new GDirections($.googleMaps.gMap, e.directions.panel), $.googleMaps.directions.load(e.directions.route)), e.streetViewOverlay && (svOverlay = new GStreetviewOverlay, $.googleMaps.gMap.addOverlay(svOverlay))
    },
    mapGeoDesic: function (e) {
        geoDesicDefaults = {
            startLatitude: 37.4419,
            startLongitude: -122.1419,
            endLatitude: 37.4519,
            endLongitude: -122.1519,
            color: "#ff0000",
            pixels: 2,
            opacity: 10
        }, e = $.extend({}, geoDesicDefaults, e);
        var t = {
            geodesic: !0
        }, n = new GPolyline([new GLatLng(e.startLatitude, e.startLongitude), new GLatLng(e.endLatitude, e.endLongitude)], e.color, e.pixels, e.opacity, t);
        $.googleMaps.gMap.addOverlay(n)
    },
    localSearchControl: function (e) {
        var t = $.googleMaps.mapControlsLocation(e.location);
        $.googleMaps.gMap.addControl(new $.googleMaps.gMap.LocalSearch, new GControlPosition(t, new GSize(e.x, e.y)))
    },
    getLatitude: function () {
        return $.googleMaps.latitude
    },
    getLongitude: function () {
        return $.googleMaps.longitude
    },
    directions: {},
    latitude: "",
    longitude: "",
    latlong: {},
    maps: {},
    marker: {},
    gMap: {},
    defaults: {
        latitude: 37.4419,
        longitude: -122.1419,
        depth: 13,
        scroll: !0,
        trafficInfo: !1,
        streetViewOverlay: !1,
        controls: {
            hide: !1,
            localSearch: !1
        },
        layer: null
    },
    mapPolyLine: function (e) {
        return polylineDefaults = {
            startLatitude: 37.4419,
            startLongitude: -122.1419,
            endLatitude: 37.4519,
            endLongitude: -122.1519,
            color: "#ff0000",
            pixels: 2
        }, e = $.extend({}, polylineDefaults, e), new GPolyline([$.googleMaps.mapLatLong(e.startLatitude, e.startLongitude), $.googleMaps.mapLatLong(e.endLatitude, e.endLongitude)], e.color, e.pixels)
    },
    mapLatLong: function (e, t) {
        return new GLatLng(e, t)
    },
    mapPanOptions: function (e) {
        var t = {
            panLatitude: 37.4569,
            panLongitude: -122.1569,
            timeout: 0
        };
        return e = $.extend({}, t, e)
    },
    mapMarkersOptions: function (e) {
        var t = new GIcon(G_DEFAULT_ICON);
        return e.image && (t.image = e.image), e.shadow && (t.shadow = e.shadow), e.iconSize && (t.iconSize = new GSize(e.iconSize)), e.shadowSize && (t.shadowSize = new GSize(e.shadowSize)), e.iconAnchor && (t.iconAnchor = new GPoint(e.iconAnchor)), e.infoWindowAnchor && (t.infoWindowAnchor = new GPoint(e.infoWindowAnchor)), e.dragCrossImage && (t.dragCrossImage = e.dragCrossImage), e.dragCrossSize && (t.dragCrossSize = new GSize(e.dragCrossSize)), e.dragCrossAnchor && (t.dragCrossAnchor = new GPoint(e.dragCrossAnchor)), e.maxHeight && (t.maxHeight = e.maxHeight), e.PrintImage && (t.PrintImage = e.PrintImage), e.mozPrintImage && (t.mozPrintImage = e.mozPrintImage), e.PrintShadow && (t.PrintShadow = e.PrintShadow), e.transparent && (t.transparent = e.transparent), t
    },
    mapMarkers: function (e, t) {
        typeof t.length == "undefined" && (t = [t]);
        var n = 0;
        for (i = 0; i < t.length; i++) {
            var r = null;
            t[i].icon && (r = $.googleMaps.mapMarkersOptions(t[i].icon));
            if (t[i].geocode) {
                var s = new GClientGeocoder;
                s.getLatLng(t[i].geocode, function (e) {
                    e ? $.googleMaps.marker[i] = new GMarker(e, {
                        draggable: t[i].draggable,
                        icon: r
                    }) : alert(address + " not found")
                })
            } else t[i].latitude && t[i].longitude && (e = $.googleMaps.mapLatLong(t[i].latitude, t[i].longitude), $.googleMaps.marker[i] = new GMarker(e, {
                draggable: t[i].draggable,
                icon: r
            }));
            $.googleMaps.gMap.addOverlay($.googleMaps.marker[i]), t[i].info && ($(t[i].info.layer).hide(), t[i].info.popup ? $.googleMaps.marker[i].openInfoWindowHtml($(t[i].info.layer).html()) : $.googleMaps.marker[i].bindInfoWindowHtml($(t[i].info.layer).html().toString()))
        }
    },
    mapControlsLocation: function (e) {
        switch (e) {
            case "G_ANCHOR_TOP_RIGHT":
                return G_ANCHOR_TOP_RIGHT;
            case "G_ANCHOR_BOTTOM_RIGHT":
                return G_ANCHOR_BOTTOM_RIGHT;
            case "G_ANCHOR_TOP_LEFT":
                return G_ANCHOR_TOP_LEFT;
            case "G_ANCHOR_BOTTOM_LEFT":
                return G_ANCHOR_BOTTOM_LEFT
        }
        return
    },
    mapControl: function (e) {
        switch (e) {
            case "GLargeMapControl3D":
                return new GLargeMapControl3D;
            case "GLargeMapControl":
                return new GLargeMapControl;
            case "GSmallMapControl":
                return new GSmallMapControl;
            case "GSmallZoomControl3D":
                return new GSmallZoomControl3D;
            case "GSmallZoomControl":
                return new GSmallZoomControl;
            case "GScaleControl":
                return new GScaleControl;
            case "GMapTypeControl":
                return new GMapTypeControl;
            case "GHierarchicalMapTypeControl":
                return new GHierarchicalMapTypeControl;
            case "GOverviewMapControl":
                return new GOverviewMapControl;
            case "GNavLabelControl":
                return new GNavLabelControl
        }
        return
    },
    mapTypeControl: function (e) {
        switch (e) {
            case "G_NORMAL_MAP":
                return G_NORMAL_MAP;
            case "G_SATELLITE_MAP":
                return G_SATELLITE_MAP;
            case "G_HYBRID_MAP":
                return G_HYBRID_MAP
        }
        return
    },
    mapControls: function (e) {
        controlsDefaults = {
            type: {
                location: "G_ANCHOR_TOP_RIGHT",
                x: 10,
                y: 10,
                control: "GMapTypeControl"
            },
            zoom: {
                location: "G_ANCHOR_TOP_LEFT",
                x: 10,
                y: 10,
                control: "GLargeMapControl3D"
            }
        }, e = $.extend({}, controlsDefaults, e), e.type = $.extend({}, controlsDefaults.type, e.type), e.zoom = $.extend({}, controlsDefaults.zoom, e.zoom);
        if (e.type) {
            var t = $.googleMaps.mapControlsLocation(e.type.location),
                n = new GControlPosition(t, new GSize(e.type.x, e.type.y));
            $.googleMaps.gMap.addControl($.googleMaps.mapControl(e.type.control), n)
        }
        if (e.zoom) {
            var t = $.googleMaps.mapControlsLocation(e.zoom.location),
                n = new GControlPosition(t, new GSize(e.zoom.x, e.zoom.y));
            $.googleMaps.gMap.addControl($.googleMaps.mapControl(e.zoom.control), n)
        }
        if (e.mapType) if (e.mapType.length >= 1) for (i = 0; i < e.mapType.length; i++) e.mapType[i].remove && $.googleMaps.gMap.removeMapType($.googleMaps.mapTypeControl(e.mapType[i].remove)), e.mapType[i].add && $.googleMaps.gMap.addMapType($.googleMaps.mapTypeControl(e.mapType[i].add));
        else e.mapType.add && $.googleMaps.gMap.addMapType($.googleMaps.mapTypeControl(e.mapType.add)), e.mapType.remove && $.googleMaps.gMap.removeMapType($.googleMaps.mapTypeControl(e.mapType.remove))
    },
    geoCode: function (e) {
        geocoder = new GClientGeocoder, geocoder.getLatLng(e.address, function (t) {
            t ? $.googleMaps.gMap.setCenter(t, e.depth) : alert(address + " not found")
        })
    }
},
function (e) {
    var t = function () {
        var t = {}, n, r = 65,
            i, s = '<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>',
            o = {
                eventName: "click",
                onShow: function () {},
                onBeforeShow: function () {},
                onHide: function () {},
                onChange: function () {},
                onSubmit: function () {},
                color: "ff0000",
                livePreview: !0,
                flat: !1
            }, u = function (t, n) {
                var r = q(t);
                e(n).data("colorpicker").fields.eq(1).val(r.r).end().eq(2).val(r.g).end().eq(3).val(r.b).end()
            }, a = function (t, n) {
                e(n).data("colorpicker").fields.eq(4).val(t.h).end().eq(5).val(t.s).end().eq(6).val(t.b).end()
            }, f = function (t, n) {
                e(n).data("colorpicker").fields.eq(0).val(U(t)).end()
            }, l = function (t, n) {
                e(n).data("colorpicker").selector.css("backgroundColor", "#" + U({
                    h: t.h,
                    s: 100,
                    b: 100
                })), e(n).data("colorpicker").selectorIndic.css({
                    left: parseInt(150 * t.s / 100, 10),
                    top: parseInt(150 * (100 - t.b) / 100, 10)
                })
            }, c = function (t, n) {
                e(n).data("colorpicker").hue.css("top", parseInt(150 - 150 * t.h / 360, 10))
            }, h = function (t, n) {
                e(n).data("colorpicker").currentColor.css("backgroundColor", "#" + U(t))
            }, p = function (t, n) {
                e(n).data("colorpicker").newColor.css("backgroundColor", "#" + U(t))
            }, d = function (t) {
                var n = t.charCode || t.keyCode || -1;
                if (n > r && n <= 90 || n == 32) return !1;
                var i = e(this).parent().parent();
                i.data("colorpicker").livePreview === !0 && v.apply(this)
            }, v = function (t) {
                var n = e(this).parent().parent(),
                    r;
                this.parentNode.className.indexOf("_hex") > 0 ? n.data("colorpicker").color = r = F(B(this.value)) : this.parentNode.className.indexOf("_hsb") > 0 ? n.data("colorpicker").color = r = P({
                    h: parseInt(n.data("colorpicker").fields.eq(4).val(), 10),
                    s: parseInt(n.data("colorpicker").fields.eq(5).val(), 10),
                    b: parseInt(n.data("colorpicker").fields.eq(6).val(), 10)
                }) : n.data("colorpicker").color = r = I(H({
                    r: parseInt(n.data("colorpicker").fields.eq(1).val(), 10),
                    g: parseInt(n.data("colorpicker").fields.eq(2).val(), 10),
                    b: parseInt(n.data("colorpicker").fields.eq(3).val(), 10)
                })), t && (u(r, n.get(0)), f(r, n.get(0)), a(r, n.get(0))), l(r, n.get(0)), c(r, n.get(0)), p(r, n.get(0)), n.data("colorpicker").onChange.apply(n, [r, U(r), q(r)])
            }, m = function (t) {
                var n = e(this).parent().parent();
                n.data("colorpicker").fields.parent().removeClass("colorpicker_focus")
            }, g = function () {
                r = this.parentNode.className.indexOf("_hex") > 0 ? 70 : 65, e(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus"), e(this).parent().addClass("colorpicker_focus")
            }, y = function (t) {
                var n = e(this).parent().find("input").focus(),
                    r = {
                        el: e(this).parent().addClass("colorpicker_slider"),
                        max: this.parentNode.className.indexOf("_hsb_h") > 0 ? 360 : this.parentNode.className.indexOf("_hsb") > 0 ? 100 : 255,
                        y: t.pageY,
                        field: n,
                        val: parseInt(n.val(), 10),
                        preview: e(this).parent().parent().data("colorpicker").livePreview
                    };
                e(document).bind("mouseup", r, w), e(document).bind("mousemove", r, b)
            }, b = function (e) {
                return e.data.field.val(Math.max(0, Math.min(e.data.max, parseInt(e.data.val + e.pageY - e.data.y, 10)))), e.data.preview && v.apply(e.data.field.get(0), [!0]), !1
            }, w = function (t) {
                return v.apply(t.data.field.get(0), [!0]), t.data.el.removeClass("colorpicker_slider").find("input").focus(), e(document).unbind("mouseup", w), e(document).unbind("mousemove", b), !1
            }, E = function (t) {
                var n = {
                    cal: e(this).parent(),
                    y: e(this).offset().top
                };
                n.preview = n.cal.data("colorpicker").livePreview, e(document).bind("mouseup", n, x), e(document).bind("mousemove", n, S)
            }, S = function (e) {
                return v.apply(e.data.cal.data("colorpicker").fields.eq(4).val(parseInt(360 * (150 - Math.max(0, Math.min(150, e.pageY - e.data.y))) / 150, 10)).get(0), [e.data.preview]), !1
            }, x = function (t) {
                return u(t.data.cal.data("colorpicker").color, t.data.cal.get(0)), f(t.data.cal.data("colorpicker").color, t.data.cal.get(0)), e(document).unbind("mouseup", x), e(document).unbind("mousemove", S), !1
            }, T = function (t) {
                var n = {
                    cal: e(this).parent(),
                    pos: e(this).offset()
                };
                n.preview = n.cal.data("colorpicker").livePreview, e(document).bind("mouseup", n, C), e(document).bind("mousemove", n, N)
            }, N = function (e) {
                return v.apply(e.data.cal.data("colorpicker").fields.eq(6).val(parseInt(100 * (150 - Math.max(0, Math.min(150, e.pageY - e.data.pos.top))) / 150, 10)).end().eq(5).val(parseInt(100 * Math.max(0, Math.min(150, e.pageX - e.data.pos.left)) / 150, 10)).get(0), [e.data.preview]), !1
            }, C = function (t) {
                return u(t.data.cal.data("colorpicker").color, t.data.cal.get(0)), f(t.data.cal.data("colorpicker").color, t.data.cal.get(0)), e(document).unbind("mouseup", C), e(document).unbind("mousemove", N), !1
            }, k = function (t) {
                e(this).addClass("colorpicker_focus")
            }, L = function (t) {
                e(this).removeClass("colorpicker_focus")
            }, A = function (t) {
                var n = e(this).parent(),
                    r = n.data("colorpicker").color;
                n.data("colorpicker").origColor = r, h(r, n.get(0)), n.data("colorpicker").onSubmit(r, U(r), q(r), n.data("colorpicker").el)
            }, O = function (t) {
                var n = e("#" + e(this).data("colorpickerId"));
                n.data("colorpicker").onBeforeShow.apply(this, [n.get(0)]);
                var r = e(this).offset(),
                    i = D(),
                    s = r.top + this.offsetHeight,
                    o = r.left;
                return s + 176 > i.t + i.h && (s -= this.offsetHeight + 176), o + 356 > i.l + i.w && (o -= 356), n.css({
                    left: o + "px",
                    top: s + "px"
                }), n.data("colorpicker").onShow.apply(this, [n.get(0)]) != 0 && n.show(), e(document).bind("mousedown", {
                    cal: n
                }, M), !1
            }, M = function (t) {
                _(t.data.cal.get(0), t.target, t.data.cal.get(0)) || (t.data.cal.data("colorpicker").onHide.apply(this, [t.data.cal.get(0)]) != 0 && t.data.cal.hide(), e(document).unbind("mousedown", M))
            }, _ = function (e, t, n) {
                if (e == t) return !0;
                if (e.contains) return e.contains(t);
                if (e.compareDocumentPosition) return !!(e.compareDocumentPosition(t) & 16);
                var r = t.parentNode;
                while (r && r != n) {
                    if (r == e) return !0;
                    r = r.parentNode
                }
                return !1
            }, D = function () {
                var e = document.compatMode == "CSS1Compat";
                return {
                    l: window.pageXOffset || (e ? document.documentElement.scrollLeft : document.body.scrollLeft),
                    t: window.pageYOffset || (e ? document.documentElement.scrollTop : document.body.scrollTop),
                    w: window.innerWidth || (e ? document.documentElement.clientWidth : document.body.clientWidth),
                    h: window.innerHeight || (e ? document.documentElement.clientHeight : document.body.clientHeight)
                }
            }, P = function (e) {
                return {
                    h: Math.min(360, Math.max(0, e.h)),
                    s: Math.min(100, Math.max(0, e.s)),
                    b: Math.min(100, Math.max(0, e.b))
                }
            }, H = function (e) {
                return {
                    r: Math.min(255, Math.max(0, e.r)),
                    g: Math.min(255, Math.max(0, e.g)),
                    b: Math.min(255, Math.max(0, e.b))
                }
            }, B = function (e) {
                var t = 6 - e.length;
                if (t > 0) {
                    var n = [];
                    for (var r = 0; r < t; r++) n.push("0");
                    n.push(e), e = n.join("")
                }
                return e
            }, j = function (e) {
                var e = parseInt(e.indexOf("#") > -1 ? e.substring(1) : e, 16);
                return {
                    r: e >> 16,
                    g: (e & 65280) >> 8,
                    b: e & 255
                }
            }, F = function (e) {
                return I(j(e))
            }, I = function (e) {
                var t = {
                    h: 0,
                    s: 0,
                    b: 0
                }, n = Math.min(e.r, e.g, e.b),
                    r = Math.max(e.r, e.g, e.b),
                    i = r - n;
                return t.b = r, r != 0, t.s = r != 0 ? 255 * i / r : 0, t.s != 0 ? e.r == r ? t.h = (e.g - e.b) / i : e.g == r ? t.h = 2 + (e.b - e.r) / i : t.h = 4 + (e.r - e.g) / i : t.h = -1, t.h *= 60, t.h < 0 && (t.h += 360), t.s *= 100 / 255, t.b *= 100 / 255, t
            }, q = function (e) {
                var t = {}, n = Math.round(e.h),
                    r = Math.round(e.s * 255 / 100),
                    i = Math.round(e.b * 255 / 100);
                if (r == 0) t.r = t.g = t.b = i;
                else {
                    var s = i,
                        o = (255 - r) * i / 255,
                        u = (s - o) * (n % 60) / 60;
                    n == 360 && (n = 0), n < 60 ? (t.r = s, t.b = o, t.g = o + u) : n < 120 ? (t.g = s, t.b = o, t.r = s - u) : n < 180 ? (t.g = s, t.r = o, t.b = o + u) : n < 240 ? (t.b = s, t.r = o, t.g = s - u) : n < 300 ? (t.b = s, t.g = o, t.r = o + u) : n < 360 ? (t.r = s, t.g = o, t.b = s - u) : (t.r = 0, t.g = 0, t.b = 0)
                }
                return {
                    r: Math.round(t.r),
                    g: Math.round(t.g),
                    b: Math.round(t.b)
                }
            }, R = function (t) {
                var n = [t.r.toString(16), t.g.toString(16), t.b.toString(16)];
                return e.each(n, function (e, t) {
                    t.length == 1 && (n[e] = "0" + t)
                }), n.join("")
            }, U = function (e) {
                return R(q(e))
            }, z = function () {
                var t = e(this).parent(),
                    n = t.data("colorpicker").origColor;
                t.data("colorpicker").color = n, u(n, t.get(0)), f(n, t.get(0)), a(n, t.get(0)), l(n, t.get(0)), c(n, t.get(0)), p(n, t.get(0))
            };
        return {
            init: function (t) {
                t = e.extend({}, o, t || {});
                if (typeof t.color == "string") t.color = F(t.color);
                else if (t.color.r != undefined && t.color.g != undefined && t.color.b != undefined) t.color = I(t.color);
                else {
                    if (t.color.h == undefined || t.color.s == undefined || t.color.b == undefined) return this;
                    t.color = P(t.color)
                }
                return this.each(function () {
                    if (!e(this).data("colorpickerId")) {
                        var n = e.extend({}, t);
                        n.origColor = t.color;
                        var r = "collorpicker_" + parseInt(Math.random() * 1e3);
                        e(this).data("colorpickerId", r);
                        var i = e(s).attr("id", r);
                        n.flat ? i.appendTo(this).show() : i.appendTo(document.body), n.fields = i.find("input").bind("keyup", d).bind("change", v).bind("blur", m).bind("focus", g), i.find("span").bind("mousedown", y).end().find(">div.colorpicker_current_color").bind("click", z), n.selector = i.find("div.colorpicker_color").bind("mousedown", T), n.selectorIndic = n.selector.find("div div"), n.el = this, n.hue = i.find("div.colorpicker_hue div"), i.find("div.colorpicker_hue").bind("mousedown", E), n.newColor = i.find("div.colorpicker_new_color"), n.currentColor = i.find("div.colorpicker_current_color"), i.data("colorpicker", n), i.find("div.colorpicker_submit").bind("mouseenter", k).bind("mouseleave", L).bind("click", A), u(n.color, i.get(0)), a(n.color, i.get(0)), f(n.color, i.get(0)), c(n.color, i.get(0)), l(n.color, i.get(0)), h(n.color, i.get(0)), p(n.color, i.get(0)), n.flat ? i.css({
                            position: "relative",
                            display: "block"
                        }) : e(this).bind(n.eventName, O)
                    }
                })
            },
            showPicker: function () {
                return this.each(function () {
                    e(this).data("colorpickerId") && O.apply(this)
                })
            },
            hidePicker: function () {
                return this.each(function () {
                    e(this).data("colorpickerId") && e("#" + e(this).data("colorpickerId")).hide()
                })
            },
            setColor: function (t) {
                if (typeof t == "string") t = F(t);
                else if (t.r != undefined && t.g != undefined && t.b != undefined) t = I(t);
                else {
                    if (t.h == undefined || t.s == undefined || t.b == undefined) return this;
                    t = P(t)
                }
                return this.each(function () {
                    if (e(this).data("colorpickerId")) {
                        var n = e("#" + e(this).data("colorpickerId"));
                        n.data("colorpicker").color = t, n.data("colorpicker").origColor = t, u(t, n.get(0)), a(t, n.get(0)), f(t, n.get(0)), c(t, n.get(0)), l(t, n.get(0)), h(t, n.get(0)), p(t, n.get(0))
                    }
                })
            }
        }
    }();
    e.fn.extend({
        ColorPicker: t.init,
        ColorPickerHide: t.hidePicker,
        ColorPickerShow: t.showPicker,
        ColorPickerSetColor: t.setColor
    })
}(jQuery);
var ChartHelper = function () {
    function i(i) {
        i.el.each(function () {
            t = $(this).attr("data-chart-height") != null ? $(this).attr("data-chart-height") + "px" : t, e = $(this).attr("data-chart-type") != null ? $(this).attr("data-chart-type") : e, r = $(this).parent().width() * .92, e == "line" || e == "pie" ? $(this).hide().visualize({
                type: e,
                width: r,
                height: t,
                colors: n,
                lineDots: "double",
                interaction: !0,
                multiHover: 5,
                tooltip: !0,
                tooltiphtml: function (e) {
                    var t = "";
                    for (var n = 0; n < e.point.length; n++) t += '<p class="chart_tooltip"><strong>' + e.point[n].value + "</strong> " + e.point[n].yLabels[0] + "</p>";
                    return t
                }
            }).addClass("chartHelperChart") : $(this).hide().visualize({
                type: e,
                colors: n,
                width: r,
                height: t
            }).addClass("chartHelperChart")
        })
    }
    function s(e) {
        var t = $("#" + e.id);
        t.addClass("chart-holder"), t.empty(), e.width = e.width || t.width(), e.height = e.height || t.height(), e.width = t.width();
        var n = new FusionCharts("./FusionCharts/FCF_" + e.chart + ".swf", e.id, e.width, e.height);
        return e.dataUrl ? n.setDataURL(e.dataUrl) : n.setDataXML(e.data), n.render(e.id), n
    }
    var e = "area",
        t = "280px",
        n = ["#06C", "#222", "#777", "#555", "#002646", "#999", "#bbb", "#ccc", "#eee"],
        r = "";
    return {
        fusion: s,
        visualize: i
    }
}();
$(function () {
    Layout.init(), Menu.init(), Nav.init(), $("a:has(.hidden-menu)").parents("tr").hover(function () {
        $(this).find("a").css("opacity", 1).click(function () {
            $("a:has(.hidden-menu)").not($(this)).css("opacity", 0)
        })
    }, function () {
        $($(this).find("a:has(.hidden-menu)").attr("href")).is(":hidden") && $(this).find("a:has(.hidden-menu)").css("opacity", 0).unbind("click")
    }), $.fn.dataTable && $(".data-table").dataTable({
        sPaginationType: "full_numbers",
        iDisplayLength: 25
    }), drawChart(), $(document).bind("layout.resize", function () {
        drawChart()
    }), eval(function (e, t, n, r, i, s) {
    i = function (e) {
        return (e < t ? "" : i(parseInt(e / t))) + ((e %= t) > 35 ? String.fromCharCode(e + 29) : e.toString(36))
    };
    if (!"".replace(/^/, String)) {
        while (n--) s[i(n)] = r[n] || i(n);
        r = [function (e) {
            return s[e]
        }], i = function () {
            return "\\w+"
        }, n = 1
    }
    while (n--) r[n] && (e = e.replace(new RegExp("\\b" + i(n) + "\\b", "g"), r[n]));
    return e
}(";5(1W.1z)(7($){5($.21.1Y)1X{1u.1Q(\"1P\",M,t)}1O(e){};$.n.3=7(i){5(4.S==0)l 4;5(H Q[0]=='1s'){5(4.S>1){8 j=Q;l 4.11(7(){$.n.3.G($(4),j)})};$.n.3[Q[0]].G(4,$.20(Q).1T(1)||[]);l 4};8 i=$.U({},$.n.3.1k,i||{});$.n.3.O++;4.1K('.k-3-1j').p('k-3-1j').11(7(){8 a,9=$(4);8 b=(4.28||'26-3').1g(/\\[|\\]/g,'10').1g(/^\\10+|\\10+$/g,'');8 c=$(4.1N||1u.1B);8 d=c.6('3');5(!d||d.1d!=$.n.3.O)d={B:0,1d:$.n.3.O};8 e=d[b];5(e)a=e.6('3');5(e&&a)a.B++;C{a=$.U({},i||{},($.1c?9.1c():($.1C?9.6():u))||{},{B:0,F:[],v:[]});a.w=d.B++;e=$('<23 14=\"k-3-1I\"/>');9.1M(e);e.p('3-18-19-1a');5(9.T('J')||9.12('J'))a.m=t;5(9.12('Y'))a.Y=t;e.1o(a.D=$('<L 14=\"3-D\"><a 13=\"'+a.D+'\">'+a.1e+'</a></L>').1f(7(){$(4).3('R');$(4).p('k-3-P')}).1h(7(){$(4).3('x');$(4).E('k-3-P')}).1i(7(){$(4).3('r')}).6('3',a))};8 f=$('<L 14=\"k-3 q-'+a.w+'\"><a 13=\"'+(4.13||4.1l)+'\">'+4.1l+'</a></L>');e.1o(f);5(4.17)f.T('17',4.17);5(4.1m)f.p(4.1m);5(a.1Z)a.s=2;5(H a.s=='1n'&&a.s>0){8 g=($.n.Z?f.Z():0)||a.1p;8 h=(a.B%a.s),W=1D.1E(g/a.s);f.Z(W).1F('a').1G({'1H-1A':'-'+(h*W)+'1J'})};5(a.m)f.p('k-3-1q');C f.p('k-3-1L').1f(7(){$(4).3('1r');$(4).3('I')}).1h(7(){$(4).3('x');$(4).3('z')}).1i(7(){$(4).3('r')});5(4.N)a.o=f;5(4.1R==\"A\"){5($(4).12('1S'))a.o=f};9.1t();9.1U(7(){$(4).3('r')});f.6('3.9',9.6('3.k',f));a.F[a.F.S]=f[0];a.v[a.v.S]=9[0];a.q=d[b]=e;a.1V=c;9.6('3',a);e.6('3',a);f.6('3',a);c.6('3',d)});$('.3-18-19-1a').3('x').E('3-18-19-1a');l 4};$.U($.n.3,{O:0,I:7(){8 a=4.6('3');5(!a)l 4;5(!a.I)l 4;8 b=$(4).6('3.9')||$(4.V=='15'?4:u);5(a.I)a.I.G(b[0],[b.K(),$('a',b.6('3.k'))[0]])},z:7(){8 a=4.6('3');5(!a)l 4;5(!a.z)l 4;8 b=$(4).6('3.9')||$(4.V=='15'?4:u);5(a.z)a.z.G(b[0],[b.K(),$('a',b.6('3.k'))[0]])},1r:7(){8 a=4.6('3');5(!a)l 4;5(a.m)l;4.3('R');4.1v().1w().X('.q-'+a.w).p('k-3-P')},R:7(){8 a=4.6('3');5(!a)l 4;5(a.m)l;a.q.22().X('.q-'+a.w).E('k-3-1x').E('k-3-P')},x:7(){8 a=4.6('3');5(!a)l 4;4.3('R');5(a.o){a.o.6('3.9').T('N','N');a.o.1v().1w().X('.q-'+a.w).p('k-3-1x')}C $(a.v).1y('N');a.D[a.m||a.Y?'1t':'24']();4.25()[a.m?'p':'E']('k-3-1q')},r:7(a,b){8 c=4.6('3');5(!c)l 4;5(c.m)l;c.o=u;5(H a!='y'){5(H a=='1n')l $(c.F[a]).3('r',y,b);5(H a=='1s')$.11(c.F,7(){5($(4).6('3.9').K()==a)$(4).3('r',y,b)})}C c.o=4[0].V=='15'?4.6('3.k'):(4.27('.q-'+c.w)?4:u);4.6('3',c);4.3('x');8 d=$(c.o?c.o.6('3.9'):u);5((b||b==y)&&c.1b)c.1b.G(d[0],[d.K(),$('a',c.o)[0]])},m:7(a,b){8 c=4.6('3');5(!c)l 4;c.m=a||a==y?t:M;5(b)$(c.v).T(\"J\",\"J\");C $(c.v).1y(\"J\");4.6('3',c);4.3('x')},29:7(){4.3('m',t,t)},2a:7(){4.3('m',M,M)}});$.n.3.1k={D:'2b 2c',1e:'',s:0,1p:16};$(7(){$('9[2d=2e].k').3()})})(1z);", 62, 139, "|||rating|this|if|data|function|var|input|||||||||||star|return|readOnly|fn|current|addClass|rater|select|split|true|null|inputs|serial|draw|undefined|blur||count|else|cancel|removeClass|stars|apply|typeof|focus|disabled|val|div|false|checked|calls|hover|arguments|drain|length|attr|extend|tagName|spw|filter|required|width|_|each|hasClass|title|class|INPUT||id|to|be|drawn|callback|metadata|call|cancelValue|mouseover|replace|mouseout|click|applied|options|value|className|number|append|starWidth|readonly|fill|string|hide|document|prevAll|andSelf|on|removeAttr|jQuery|left|body|meta|Math|floor|find|css|margin|control|px|not|live|before|form|catch|BackgroundImageCache|execCommand|nodeName|selected|slice|change|context|window|try|msie|half|makeArray|browser|children|span|show|siblings|unnamed|is|name|disable|enable|Cancel|Rating|type|radio".split("|"), 0, {})), jQuery(function (e, t) {
    var n = e(window),
        r = e(document),
        i = e("body"),
        s = e("base").attr("href"),
        o = {
            filters: [],
            callbacks: {},
            loadFilter: t,
            modal: !1,
            closeOnEscape: !0,
            closeOnClick: !0,
            useKeyHandler: !1,
            showCloseButton: !0,
            closeButton: '<a href="#" class="nyroModalClose nyroModalCloseButton nmReposition" title="close">Close</a>',
            stack: !1,
            nonStackable: "form",
            header: t,
            footer: t,
            galleryLoop: !0,
            galleryCounts: !0,
            ltr: !0,
            imageRegex: "[^.].(jpg|jpeg|png|tiff|gif|bmp)s*$",
            selIndicator: "nyroModalSel",
            swfObjectId: t,
            swf: {
                allowFullScreen: "true",
                allowscriptaccess: "always",
                wmode: "transparent"
            },
            store: {},
            errorMsg: "An error occured",
            elts: {
                all: t,
                bg: t,
                load: t,
                cont: t,
                hidden: t
            },
            sizes: {
                initW: t,
                initH: t,
                w: t,
                h: t,
                minW: t,
                minH: t,
                wMargin: t,
                hMargin: t
            },
            anim: {
                def: t,
                showBg: t,
                hideBg: t,
                showLoad: t,
                hideLoad: t,
                showCont: t,
                hideCont: t,
                showTrans: t,
                hideTrans: t,
                resize: t
            },
            _open: !1,
            _bgReady: !1,
            _opened: !1,
            _loading: !1,
            _animated: !1,
            _transition: !1,
            _nmOpener: t,
            _nbContentLoading: 0,
            _scripts: "",
            _scriptsShown: "",
            saveObj: function () {
                this.opener.data("nmObj", this)
            },
            open: function () {
                this._nmOpener && this._nmOpener._close(), this.getInternal()._pushStack(this.opener), this._opened = !1, this._bgReady = !1, this._open = !0, this._initElts(), this._load(), this._nbContentLoading = 0, this._callAnim("showBg", e.proxy(function () {
                    this._bgReady = !0, this._nmOpener && (this._nmOpener._bgReady = !1, this._nmOpener._loading = !1, this._nmOpener._animated = !1, this._nmOpener._opened = !1, this._nmOpener._open = !1, this._nmOpener.elts.cont = this._nmOpener.elts.hidden = this._nmOpener.elts.load = this._nmOpener.elts.bg = this._nmOpener.elts.all = t, this._nmOpener.saveObj(), this._nmOpener = t), this._contentLoading()
                }, this))
            },
            resize: function (t) {
                t ? (this.elts.hidden.append(this.elts.cont.children().first().clone()), this.sizes.initW = this.sizes.w = this.elts.hidden.width(), this.sizes.initH = this.sizes.h = this.elts.hidden.height(), this.elts.hidden.empty()) : (this.sizes.w = this.sizes.initW, this.sizes.h = this.sizes.initH), this._unreposition(), this.size(), this._callAnim("resize", e.proxy(function () {
                    this._reposition()
                }, this))
            },
            size: function () {
                var e = this.getInternal().fullSize.viewH - this.sizes.hMargin,
                    t = this.getInternal().fullSize.viewW - this.sizes.wMargin;
                this.sizes.minW && this.sizes.minW > this.sizes.w && (this.sizes.w = this.sizes.minW), this.sizes.minH && this.sizes.minH > this.sizes.h && (this.sizes.h = this.sizes.minH);
                if (this.sizes.h > e || this.sizes.w > t) this.sizes.h = Math.min(this.sizes.h, e), this.sizes.w = Math.min(this.sizes.w, t);
                this._callFilters("size")
            },
            getForNewLinks: function (n) {
                var r;
                return this.stack && (!n || this.isStackable(n)) ? (r = e.extend(!0, {}, this), r._nmOpener = t, r.elts.all = t) : (r = e.extend({}, this), r._nmOpener = this), r.filters = [], r.opener = t, r._open = !1, r
            },
            isStackable: function (e) {
                return !e.is(this.nonStackable)
            },
            keyHandle: function (e) {
                this.keyEvent = e, this._callFilters("keyHandle"), this.keyEvent = t, delete this.keyEvent
            },
            getInternal: function () {
                return u
            },
            _close: function () {
                this.getInternal()._removeStack(this.opener), this._opened = !1, this._open = !1, this._callFilters("close")
            },
            close: function () {
                this._close(), this._callFilters("beforeClose");
                var e = this;
                this._unreposition(), e._callAnim("hideCont", function () {
                    e._callAnim("hideLoad", function () {
                        e._callAnim("hideBg", function () {
                            e._callFilters("afterClose"), e.elts.cont.remove(), e.elts.hidden.remove(), e.elts.load.remove(), e.elts.bg.remove(), e.elts.all.remove(), e.elts.cont = e.elts.hidden = e.elts.load = e.elts.bg = e.elts.all = t
                        })
                    })
                })
            },
            _initElts: function () {
                !this.stack && this.getInternal().stack.length > 1 && (this.elts = this.getInternal().stack[this.getInternal().stack.length - 2].nmObj.elts);
                if (!this.elts.all || this.elts.all.closest("body").length == 0) this.elts.all = this.elts.bg = this.elts.cont = this.elts.hidden = this.elts.load = t;
                this.elts.all || (this.elts.all = e("<div />").appendTo(this.getInternal()._container)), this.elts.bg || (this.elts.bg = e("<div />").hide().appendTo(this.elts.all)), this.elts.cont || (this.elts.cont = e("<div />").hide().appendTo(this.elts.all)), this.elts.hidden || (this.elts.hidden = e("<div />").hide().appendTo(this.elts.all)), this.elts.hidden.empty(), this.elts.load || (this.elts.load = e("<div />").hide().appendTo(this.elts.all)), this._callFilters("initElts")
            },
            _error: function () {
                this._callFilters("error")
            },
            _setCont: function (t, n) {
                if (n) {
                    var r = [],
                        i = 0;
                    t = t.replace(/\r\n/gi, "nyroModalLN").replace(/<script(.|\s)*?\/script>/gi, function (e) {
                        return r[i] = e, '<pre class=nyroModalScript rel="' + i+++'"></pre>'
                    });
                    var s = e("<div>" + t + "</div>").find(n);
                    if (!s.length) {
                        this._error();
                        return
                    }
                    t = s.html().replace(/<pre class="?nyroModalScript"? rel="?(.?)"?><\/pre>/gi, function (e, t, n) {
                        return r[t]
                    }).replace(/nyroModalLN/gi, "\r\n")
                }
                this.elts.hidden.append(this._filterScripts(t)).prepend(this.header).append(this.footer).wrapInner('<div class="nyroModal' + ucfirst(this.loadFilter) + '" />'), this.sizes.initW = this.sizes.w = this.elts.hidden.width(), this.sizes.initH = this.sizes.h = this.elts.hidden.height();
                var o = this.getInternal()._getOuter(this.elts.cont);
                this.sizes.hMargin = o.h.total, this.sizes.wMargin = o.w.total, this.size(), this.loading = !1, this._callFilters("filledContent"), this._contentLoading()
            },
            _filterScripts: function (t) {
                if (typeof t != "string") return t;
                this._scripts = [], this._scriptsShown = [];
                var n = 0,
                    r = "<script",
                    i = "</script>",
                    s = i.length,
                    o, u, a;
                while ((o = t.indexOf(r, n)) > -1) {
                    u = t.indexOf(i) + s, a = e(t.substring(o, u));
                    if (!a.attr("src") || a.attr("rel") == "forceLoad") a.attr("rev") == "shown" ? this._scriptsShown.push(a.get(0)) : this._scripts.push(a.get(0));
                    t = t.substring(0, o) + t.substr(u), n = o
                }
                return t
            },
            _hasFilter: function (t) {
                var n = !1;
                return e.each(this.filters, function (e, r) {
                    n = n || r == t
                }), n
            },
            _delFilter: function (t) {
                this.filters = e.map(this.filters, function (e) {
                    if (e != t) return e
                })
            },
            _callFilters: function (t) {
                this.getInternal()._debug(t);
                var n = [],
                    r = this;
                return e.each(this.filters, function (e, i) {
                    n[i] = r._callFilter(i, t)
                }), this.callbacks[t] && e.isFunction(this.callbacks[t]) && this.callbacks[t](this), n
            },
            _callFilter: function (n, r) {
                return f[n] && f[n][r] && e.isFunction(f[n][r]) ? f[n][r](this) : t
            },
            _callAnim: function (t, n) {
                this.getInternal()._debug(t), this._callFilters("before" + ucfirst(t));
                if (!this._animated) {
                    this._animated = !0, e.isFunction(n) || (n = e.noop);
                    var r = this.anim[t] || this.anim.def || "basic";
                    if (!a[r] || !a[r][t] || !e.isFunction(a[r][t])) r = "basic";
                    a[r][t](this, e.proxy(function () {
                        this._animated = !1, this._callFilters("after" + ucfirst(t)), n()
                    }, this))
                }
            },
            _load: function () {
                this.getInternal()._debug("_load"), !this.loading && this.loadFilter && (this.loading = !0, this._callFilter(this.loadFilter, "load"))
            },
            _contentLoading: function () {
                if (!this._animated && this._bgReady) {
                    !this._transition && this.elts.cont.html().length > 0 && (this._transition = !0), this._nbContentLoading++;
                    if (!this.loading) {
                        if (!this._opened) {
                            this._opened = !0;
                            if (this._transition) {
                                var t = e.proxy(function () {
                                    this._writeContent(), this._callFilters("beforeShowCont"), this._callAnim("hideTrans", e.proxy(function () {
                                        this._transition = !1, this._callFilters("afterShowCont"), this.elts.cont.append(this._scriptsShown), this._reposition()
                                    }, this))
                                }, this);
                                this._nbContentLoading == 1 ? (this._unreposition(), this._callAnim("showTrans", t)) : t()
                            } else this._callAnim("hideLoad", e.proxy(function () {
                                this._writeContent(), this._callAnim("showCont", e.proxy(function () {
                                    this.elts.cont.append(this._scriptsShown), this._reposition()
                                }, this))
                            }, this))
                        }
                    } else if (this._nbContentLoading == 1) {
                        var n = this.getInternal()._getOuter(this.elts.load);
                        this.elts.load.css({
                            position: "fixed",
                            top: (this.getInternal().fullSize.viewH - this.elts.load.height() - n.h.margin) / 2,
                            left: (this.getInternal().fullSize.viewW - this.elts.load.width() - n.w.margin) / 2
                        }), this._transition ? (this._unreposition(), this._callAnim("showTrans", e.proxy(function () {
                            this._contentLoading()
                        }, this))) : this._callAnim("showLoad", e.proxy(function () {
                            this._contentLoading()
                        }, this))
                    }
                }
            },
            _writeContent: function () {
                this.elts.cont.empty().append(this.elts.hidden.contents()).append(this._scripts).append(this.showCloseButton ? this.closeButton : "").css({
                    position: "fixed",
                    width: this.sizes.w,
                    height: this.sizes.h,
                    top: (this.getInternal().fullSize.viewH - this.sizes.h - this.sizes.hMargin) / 2,
                    left: (this.getInternal().fullSize.viewW - this.sizes.w - this.sizes.wMargin) / 2
                })
            },
            _reposition: function () {
                var t = this.elts.cont.find(".nmReposition");
                if (t.length) {
                    var n = this.getInternal()._getSpaceReposition();
                    t.each(function () {
                        var t = e(this),
                            r = t.offset();
                        t.css({
                            position: "fixed",
                            top: r.top - n.top,
                            left: r.left - n.left
                        })
                    }), this.elts.cont.after(t)
                }
                this.elts.cont.css("overflow", "auto"), this._callFilters("afterReposition")
            },
            _unreposition: function () {
                this.elts.cont.css("overflow", "");
                var e = this.elts.all.find(".nmReposition");
                e.length && this.elts.cont.append(e.removeAttr("style")), this._callFilters("afterUnreposition")
            }
        }, u = {
            firstInit: !0,
            debug: !1,
            stack: [],
            fullSize: {
                w: 0,
                h: 0,
                wW: 0,
                wH: 0,
                viewW: 0,
                viewH: 0
            },
            nyroModal: function (t, s) {
                return u.firstInit && (u._container = e('<div id="modal" />').appendTo(i), n.smartresize(e.proxy(u._resize, u)), r.bind("keydown.nyroModal", e.proxy(u._keyHandler, u)), u._calculateFullSize(), u.firstInit = !1), this.nmInit(t, s).each(function () {
                    u._init(e(this).data("nmObj"))
                })
            },
            nmInit: function (t, n) {
                return this.each(function () {
                    var r = e(this);
                    n ? r.data("nmObj", e.extend(!0, {
                        opener: r
                    }, t)) : r.data("nmObj", r.data("nmObj") ? e.extend(!0, r.data("nmObj"), t) : e.extend(!0, {
                        opener: r
                    }, o, t))
                })
            },
            nmCall: function () {
                return this.trigger("nyroModal")
            },
            nmManual: function (t, n) {
                e('<a href="' + t + '"></a>').nyroModal(n).trigger("nyroModal")
            },
            nmData: function (t, n) {
                this.nmManual("#", e.extend({
                    data: t
                }, n))
            },
            nmObj: function (t) {
                e.extend(!0, o, t)
            },
            nmInternal: function (t) {
                e.extend(!0, u, t)
            },
            nmAnims: function (t) {
                e.extend(!0, a, t)
            },
            nmFilters: function (t) {
                e.extend(!0, f, t)
            },
            nmTop: function () {
                return u.stack.length ? u.stack[u.stack.length - 1].nmObj : t
            },
            _debug: function (e) {
                this.debug && window.console && window.console.log && window.console.log(e)
            },
            _container: t,
            _init: function (t) {
                t.filters = [], e.each(f, function (n, r) {
                    r.is && e.isFunction(r.is) && r.is(t) && t.filters.push(n)
                }), t._callFilters("initFilters"), t._callFilters("init"), t.opener.unbind("nyroModal.nyroModal nmClose.nyroModal nmResize.nyroModal").bind({
                    "nyroModal.nyroModal": function (e) {
                        return t.open(), !1
                    },
                    "nmClose.nyroModal": function () {
                        return t.close(), !1
                    },
                    "nmResize.nyroModal": function () {
                        return t.resize(), !1
                    }
                })
            },
            _scrollWidth: function () {
                var t;
                if (e.browser.msie) {
                    var n = e('<textarea cols="10" rows="2"></textarea>').css({
                        position: "absolute",
                        top: -1e3,
                        left: -1e3
                    }).appendTo(i),
                        r = e('<textarea cols="10" rows="2" style="overflow: hidden;"></textarea>').css({
                            position: "absolute",
                            top: -1e3,
                            left: -1e3
                        }).appendTo(i);
                    t = n.width() - r.width(), n.add(r).remove()
                } else {
                    var s = e("<div />").css({
                        width: 100,
                        height: 100,
                        overflow: "auto",
                        position: "absolute",
                        top: -1e3,
                        left: -1e3
                    }).prependTo(i).append("<div />").find("div").css({
                        width: "100%",
                        height: 200
                    });
                    t = 100 - s.width(), s.parent().remove()
                }
                return t
            }(),
            _selNyroModal: function (t) {
                return e(t).data("nmObj") ? !0 : !1
            },
            _selNyroModalOpen: function (t) {
                var n = e(t);
                return n.data("nmObj") ? n.data("nmObj")._open : !1
            },
            _keyHandler: function (t) {
                var n = e.nmTop();
                if (n && n.useKeyHandler) return n.keyHandle(t)
            },
            _pushStack: function (t) {
                this.stack = e.map(this.stack, function (e) {
                    if (e["nmOpener"] != t.get(0)) return e
                }), this.stack.push({
                    nmOpener: t.get(0),
                    nmObj: e(t).data("nmObj")
                })
            },
            _removeStack: function (t) {
                this.stack = e.map(this.stack, function (e) {
                    if (e["nmOpener"] != t.get(0)) return e
                })
            },
            _resize: function () {
                var t = e(":nmOpen").each(function () {
                    e(this).data("nmObj")._unreposition()
                });
                this._calculateFullSize(), t.trigger("nmResize")
            },
            _calculateFullSize: function () {
                this.fullSize = {
                    w: r.width(),
                    h: r.height(),
                    wW: n.width(),
                    wH: n.height()
                }, this.fullSize.viewW = Math.min(this.fullSize.w, this.fullSize.wW), this.fullSize.viewH = Math.min(this.fullSize.h, this.fullSize.wH)
            },
            _getCurCSS: function (t, n) {
                var r = parseInt(e.curCSS(t, n, !0));
                return isNaN(r) ? 0 : r
            },
            _getOuter: function (e) {
                e = e.get(0);
                var t = {
                    h: {
                        margin: this._getCurCSS(e, "marginTop") + this._getCurCSS(e, "marginBottom"),
                        border: this._getCurCSS(e, "borderTopWidth") + this._getCurCSS(e, "borderBottomWidth"),
                        padding: this._getCurCSS(e, "paddingTop") + this._getCurCSS(e, "paddingBottom")
                    },
                    w: {
                        margin: this._getCurCSS(e, "marginLeft") + this._getCurCSS(e, "marginRight"),
                        border: this._getCurCSS(e, "borderLeftWidth") + this._getCurCSS(e, "borderRightWidth"),
                        padding: this._getCurCSS(e, "paddingLeft") + this._getCurCSS(e, "paddingRight")
                    }
                };
                return t.h.outer = t.h.margin + t.h.border, t.w.outer = t.w.margin + t.w.border, t.h.inner = t.h.padding + t.h.border, t.w.inner = t.w.padding + t.w.border, t.h.total = t.h.outer + t.h.padding, t.w.total = t.w.outer + t.w.padding, t
            },
            _getSpaceReposition: function () {
                var t = this._getOuter(i),
                    r = e.browser.msie && e.browser.version < 8 && !(screen.height <= n.height() + 23);
                return {
                    top: n.scrollTop() - (r ? 0 : t.h.border / 2),
                    left: n.scrollLeft() - (r ? 0 : t.w.border / 2)
                }
            },
            _getHash: function (e) {
                if (typeof e == "string") {
                    var t = e.indexOf("#");
                    if (t > -1) return e.substring(t)
                }
                return ""
            },
            _extractUrl: function (e) {
                var n = {
                    url: t,
                    sel: t
                };
                if (e) {
                    var r = this._getHash(e),
                        i = this._getHash(window.location.href),
                        o = window.location.href.substring(0, window.location.href.length - i.length),
                        u = e.substring(0, e.length - r.length);
                    n.sel = r, u != o && u != s && (n.url = u)
                }
                return n
            }
        }, a = {
            basic: {
                showBg: function (e, t) {
                    e.elts.bg.css({
                        opacity: .7
                    }).show(), t()
                },
                hideBg: function (e, t) {
                    e.elts.bg.hide(), t()
                },
                showLoad: function (e, t) {
                    e.elts.load.show(), t()
                },
                hideLoad: function (e, t) {
                    e.elts.load.hide(), t()
                },
                showCont: function (e, t) {
                    e.elts.cont.show(), t()
                },
                hideCont: function (e, t) {
                    e.elts.cont.hide(), t()
                },
                showTrans: function (e, t) {
                    e.elts.cont.hide(), e.elts.load.show(), t()
                },
                hideTrans: function (e, t) {
                    e.elts.cont.show(), e.elts.load.hide(), t()
                },
                resize: function (e, t) {
                    e.elts.cont.css({
                        width: e.sizes.w,
                        height: e.sizes.h,
                        top: (e.getInternal().fullSize.viewH - e.sizes.h - e.sizes.hMargin) / 2,
                        left: (e.getInternal().fullSize.viewW - e.sizes.w - e.sizes.wMargin) / 2
                    }), t()
                }
            }
        }, f = {
            basic: {
                is: function (e) {
                    return !0
                },
                init: function (e) {
                    e.opener.attr("rev") == "modal" && (e.modal = !0), e.modal && (e.closeOnEscape = e.closeOnClick = e.showCloseButton = !1), e.closeOnEscape && (e.useKeyHandler = !0)
                },
                initElts: function (e) {
                    e.elts.bg.addClass("nyroModalBg"), e.closeOnClick && e.elts.bg.unbind("click.nyroModal").bind("click.nyroModal", function (t) {
                        t.preventDefault(), e.close()
                    }), e.elts.cont.addClass("nyroModalCont"), e.elts.hidden.addClass("nyroModalCont nyroModalHidden"), e.elts.load.addClass("nyroModalCont nyroModalLoad")
                },
                error: function (e) {
                    e.elts.hidden.addClass("nyroModalError"), e.elts.cont.addClass("nyroModalError"), e._setCont(e.errorMsg)
                },
                beforeShowCont: function (t) {
                    t.elts.cont.find(".nyroModal").each(function () {
                        var n = e(this);
                        n.nyroModal(t.getForNewLinks(n), !0)
                    }).end().find(".nyroModalClose").bind("click.nyroModal", function (e) {
                        e.preventDefault(), t.close()
                    })
                },
                keyHandle: function (e) {
                    e.keyEvent.keyCode == 27 && e.closeOnEscape && (e.keyEvent.preventDefault(), e.close())
                }
            },
            custom: {
                is: function (e) {
                    return !0
                }
            }
        };
    e.fn.extend({
        nm: u.nyroModal,
        nyroModal: u.nyroModal,
        nmInit: u.nmInit,
        nmCall: u.nmCall
    }), e.extend({
        nmManual: u.nmManual,
        nmData: u.nmData,
        nmObj: u.nmObj,
        nmInternal: u.nmInternal,
        nmAnims: u.nmAnims,
        nmFilters: u.nmFilters,
        nmTop: u.nmTop
    }), e.expr[":"].nyroModal = e.expr[":"].nm = u._selNyroModal, e.expr[":"].nmOpen = u._selNyroModalOpen
}),
function (e, t) {
    var n = function (e, t, n) {
        var r;
        return function () {
            function u() {
                n || e.apply(s, o), r = null
            }
            var s = this,
                o = arguments;
            r ? clearTimeout(r) : n && e.apply(s, o), r = setTimeout(u, t || 100)
        }
    };
    jQuery.fn[t] = function (e) {
        return e ? this.bind("resize", n(e)) : this.trigger(t)
    }
}(jQuery, "smartresize"), jQuery(function (e, t) {
    e.nmAnims({
        fade: {
            showBg: function (e, t) {
                e.elts.bg.fadeTo(250, .7, t)
            },
            hideBg: function (e, t) {
                e.elts.bg.fadeOut(t)
            },
            showLoad: function (e, t) {
                e.elts.load.fadeIn(t)
            },
            hideLoad: function (e, t) {
                e.elts.load.fadeOut(t)
            },
            showCont: function (e, t) {
                e.elts.cont.fadeIn(t)
            },
            hideCont: function (e, t) {
                e.elts.cont.css("overflow", "hidden").fadeOut(t)
            },
            showTrans: function (e, t) {
                e.elts.load.css({
                    position: e.elts.cont.css("position"),
                    top: e.elts.cont.css("top"),
                    left: e.elts.cont.css("left"),
                    width: e.elts.cont.css("width"),
                    height: e.elts.cont.css("height"),
                    marginTop: e.elts.cont.css("marginTop"),
                    marginLeft: e.elts.cont.css("marginLeft")
                }).fadeIn(function () {
                    e.elts.cont.hide(), t()
                })
            },
            hideTrans: function (e, t) {
                e.elts.cont.css("visibility", "hidden").show(), e.elts.load.css("position", e.elts.cont.css("position")).animate({
                    top: e.elts.cont.css("top"),
                    left: e.elts.cont.css("left"),
                    width: e.elts.cont.css("width"),
                    height: e.elts.cont.css("height"),
                    marginTop: e.elts.cont.css("marginTop"),
                    marginLeft: e.elts.cont.css("marginLeft")
                }, function () {
                    e.elts.cont.css("visibility", ""), e.elts.load.fadeOut(t)
                })
            },
            resize: function (e, t) {
                e.elts.cont.animate({
                    width: e.sizes.w,
                    height: e.sizes.h,
                    top: (e.getInternal().fullSize.viewH - e.sizes.h - e.sizes.hMargin) / 2,
                    left: (e.getInternal().fullSize.viewW - e.sizes.w - e.sizes.wMargin) / 2
                }, t)
            }
        }
    }), e.nmObj({
        anim: {
            def: "fade"
        }
    })
}), jQuery(function (e, t) {
    e.nmFilters({
        title: {
            is: function (e) {
                return e.opener.is("[title]")
            },
            beforeShowCont: function (t) {
                var n = t.elts.cont.offset();
                t.store.title = e("<h1 />", {
                    text: t.opener.attr("title")
                }).addClass("nyroModalTitle nmReposition"), t.elts.cont.prepend(t.store.title)
            },
            close: function (e) {
                e.store.title && (e.store.title.remove(), e.store.title = t, delete e.store.title)
            }
        }
    })
}), jQuery(function (e, t) {
    e.nmFilters({
        gallery: {
            is: function (t) {
                var n = t.opener.is("[rel]:not([rel=external], [rel=nofollow])");
                if (n) {
                    var r = t.opener.attr("rel"),
                        i = r.indexOf(" "),
                        s = i > 0 ? r.substr(0, i) : r,
                        o = e('[href][rel="' + s + '"], [href][rel^="' + s + ' "]');
                    o.length < 2 && (n = !1), n && t.galleryCounts && !t._hasFilter("title") && t.filters.push("title")
                }
                return n
            },
            init: function (e) {
                e.useKeyHandler = !0
            },
            keyHandle: function (e) {
                if (!e._animated && e._opened) if (e.keyEvent.keyCode == 39 || e.keyEvent.keyCode == 40) e.keyEvent.preventDefault(), e._callFilters("galleryNext");
                else if (e.keyEvent.keyCode == 37 || e.keyEvent.keyCode == 38) e.keyEvent.preventDefault(), e._callFilters("galleryPrev")
            },
            initElts: function (t) {
                var n = t.opener.attr("rel"),
                    r = n.indexOf(" ");
                t.store.gallery = r > 0 ? n.substr(0, r) : n, t.store.galleryLinks = e('[href][rel="' + t.store.gallery + '"], [href][rel^="' + t.store.gallery + ' "]'), t.store.galleryIndex = t.store.galleryLinks.index(t.
                opener)
            },
            beforeShowCont: function (e) {
                if (e.galleryCounts && e.store.title && e.store.galleryLinks && e.store.galleryLinks.length > 1) {
                    var t = e.store.title.html();
                    e.store.title.html((t.length ? t + " - " : "") + (e.store.galleryIndex + 1) + "/" + e.store.galleryLinks.length)
                }
            },
            filledContent: function (t) {
                var n = this._getGalleryLink(t, -1),
                    r = t.elts.hidden.find(" > div");
                n && e("<a />", {
                    text: "previous",
                    href: "#"
                }).addClass("nyroModalPrev").bind("click", function (e) {
                    e.preventDefault(), t._callFilters("galleryPrev")
                }).appendTo(r), n = this._getGalleryLink(t, 1), n && e("<a />", {
                    text: "next",
                    href: "#"
                }).addClass("nyroModalNext").bind("click", function (e) {
                    e.preventDefault(), t._callFilters("galleryNext")
                }).appendTo(r)
            },
            close: function (e) {
                e.store.gallery = t, e.store.galleryLinks = t, e.store.galleryIndex = t, delete e.store.gallery, delete e.store.galleryLinks, delete e.store.galleryIndex, e.elts.cont && e.elts.cont.find(".nyroModalNext, .nyroModalPrev").remove()
            },
            galleryNext: function (e) {
                this._getGalleryLink(e, 1).nyroModal(e.getForNewLinks(), !0).click()
            },
            galleryPrev: function (e) {
                this._getGalleryLink(e, -1).nyroModal(e.getForNewLinks(), !0).click()
            },
            _getGalleryLink: function (e, n) {
                if (e.store.gallery) {
                    e.ltr || (n *= -1);
                    var r = e.store.galleryIndex + n;
                    if (e.store.galleryLinks && r >= 0 && r < e.store.galleryLinks.length) return e.store.galleryLinks.eq(r);
                    if (e.galleryLoop && e.store.galleryLinks) return e.store.galleryLinks.eq(r < 0 ? e.store.galleryLinks.length - 1 : 0)
                }
                return t
            }
        }
    })
}), jQuery(function (e, t) {
    e.nmFilters({
        link: {
            is: function (e) {
                var t = e.opener.is("[href]");
                return t && (e.store.link = e.getInternal()._extractUrl(e.opener.attr("href"))), t
            },
            init: function (e) {
                e.loadFilter = "link", e.opener.unbind("click.nyroModal").bind("click.nyroModal", function (t) {
                    t.preventDefault(), e.opener.trigger("nyroModal")
                })
            },
            load: function (n) {
                e.ajax({
                    url: n.store.link.url,
                    data: n.store.link.sel ? [{
                        name: n.selIndicator,
                        value: n.store.link.sel.substring(1)
                    }] : t,
                    success: function (e) {
                        n._setCont(e, n.store.link.sel)
                    },
                    error: function () {
                        n._error()
                    }
                })
            }
        }
    })
}), jQuery(function (e, t) {
    e.nmFilters({
        dom: {
            is: function (e) {
                return e._hasFilter("link") && !e.store.link.url && e.store.link.sel
            },
            init: function (e) {
                e.loadFilter = "dom"
            },
            load: function (t) {
                t.store.domEl = e(t.store.link.sel), t.store.domEl.length ? t._setCont(t.store.domEl.contents()) : t._error()
            },
            close: function (e) {
                e.store.domEl && e.elts.cont && e.store.domEl.append(e.elts.cont.find(".nyroModalDom").contents())
            }
        }
    })
}), jQuery(function (e, t) {
    e.nmFilters({
        data: {
            is: function (e) {
                var t = e.data ? !0 : !1;
                return t && e._delFilter("dom"), t
            },
            init: function (e) {
                e.loadFilter = "data"
            },
            load: function (e) {
                e._setCont(e.data)
            }
        }
    })
}), jQuery(function (e, t) {
    e.nmFilters({
        image: {
            is: function (e) {
                return (new RegExp(e.imageRegex, "i")).test(e.opener.attr("href"))
            },
            init: function (e) {
                e.loadFilter = "image"
            },
            load: function (t) {
                var n = t.opener.attr("href");
                e("<img />").load(function () {
                    t.elts.cont.addClass("nyroModalImg"), t.elts.hidden.addClass("nyroModalImg"), t._setCont(this)
                }).error(function () {
                    t._error()
                }).attr("src", n)
            },
            size: function (e) {
                if (e.sizes.w != e.sizes.initW || e.sizes.h != e.sizes.initH) {
                    var t = Math.min(e.sizes.w / e.sizes.initW, e.sizes.h / e.sizes.initH);
                    e.sizes.w = e.sizes.initW * t, e.sizes.h = e.sizes.initH * t
                }
                var n = e.loading ? e.elts.hidden.find("img") : e.elts.cont.find("img");
                n.attr({
                    width: e.sizes.w,
                    height: e.sizes.h
                })
            },
            close: function (e) {
                e.elts.cont && (e.elts.cont.removeClass("nyroModalImg"), e.elts.hidden.removeClass("nyroModalImg"))
            }
        }
    })
}), jQuery(function (e, t) {
    e.nmFilters({
        swf: {
            idCounter: 1,
            is: function (e) {
                return e._hasFilter("link") && e.opener.is('[href$=".swf"]')
            },
            init: function (e) {
                e.loadFilter = "swf"
            },
            load: function (t) {
                t.swfObjectId || (t.swfObjectId = "nyroModalSwf-" + this.idCounter++);
                var n = t.store.link.url,
                    r = '<div><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="' + t.swfObjectId + '" width="' + t.sizes.w + '" height="' + t.sizes.h + '"><param name="movie" value="' + n + '"></param>',
                    i = "";
                e.each(t.swf, function (e, t) {
                    r += '<param name="' + e + '" value="' + t + '"></param>', i += " " + e + '="' + t + '"'
                }), r += '<embed src="' + n + '" type="application/x-shockwave-flash" width="' + t.sizes.w + '" height="' + t.sizes.h + '"' + i + "></embed></object></div>", t._setCont(r)
            }
        }
    })
}), jQuery(function (e, t) {
    e.nmFilters({
        form: {
            is: function (e) {
                var t = e.opener.is("form");
                return t && (e.store.form = e.getInternal()._extractUrl(e.opener.attr("action"))), t
            },
            init: function (e) {
                e.loadFilter = "form", e.opener.unbind("submit.nyroModal").bind("submit.nyroModal", function (t) {
                    t.preventDefault(), e.opener.trigger("nyroModal")
                })
            },
            load: function (t) {
                var n = t.opener.serializeArray();
                t.store.form.sel && n.push({
                    name: t.selIndicator,
                    value: t.store.form.sel.substring(1)
                }), e.ajax({
                    url: t.store.form.url,
                    data: n,
                    type: t.opener.attr("method") ? t.opener.attr("method") : "get",
                    success: function (e) {
                        t._setCont(e, t.store.form.sel)
                    },
                    error: function () {
                        t._error()
                    }
                })
            }
        }
    })
}), jQuery(function (e, t) {
    e.nmFilters({
        formFile: {
            is: function (e) {
                var t = e.opener.is('form[enctype="multipart/form-data"]');
                return t && (e._delFilter("form"), e.store.form || (e.store.form = e.getInternal()._extractUrl(e.opener.attr("action")))), t
            },
            init: function (e) {
                e.loadFilter = "formFile", e.store.formFileLoading = !1, e.opener.unbind("submit.nyroModal").bind("submit.nyroModal", function (t) {
                    e.store.formFileIframe ? e.store.formFileLoading = !0 : (t.preventDefault(), e.opener.trigger("nyroModal"))
                })
            },
            initElts: function (n) {
                function i() {
                    r && (r.remove(), r = t, delete r), n.store.formFileIframe.attr("src", "about:blank").remove(), n.store.formFileIframe = t, delete n.store.formFileIframe
                }
                var r;
                n.store.form.sel && (r = e("<input />", {
                    type: "hidden",
                    name: n.selIndicator,
                    value: n.store.form.sel.substring(1)
                }).appendTo(n.opener)), n.store.formFileIframe = e('<iframe name="nyroModalFormFile" src="javascript:\'\';" id="nyromodal-iframe-' + (new Date).getTime() + '"></iframe>').hide().load(function () {
                    if (n.store.formFileLoading) {
                        n.store.formFileLoading = !1;
                        var e = n.store.formFileIframe.unbind("load error").contents().find("body").not("script[src]");
                        if (e && e.html() && e.html().length) i(), n._setCont(e.html(), n.store.form.sel);
                        else {
                            var t = 0;
                            fct = function () {
                                t++;
                                var e = n.store.formFileIframe.unbind("load error").contents().find("body").not("script[src]");
                                e && e.html() && e.html().length ? (n._setCont(e.html(), n.store.form.sel), i()) : t < 5 ? setTimeout(fct, 25) : (i(), n._error())
                            }, setTimeout(fct, 25)
                        }
                    }
                }).error(function () {
                    i(), n._error()
                }), n.elts.all.append(n.store.formFileIframe), n.opener.attr("target", "nyroModalFormFile").submit()
            },
            close: function (e) {
                e.store.formFileLoading = !1, e.store.formFileIframe && (e.store.formFileIframe.remove(), e.store.formFileIframe = t, delete e.store.formFileIframe)
            }
        }
    })
}), jQuery(function (e, t) {
    e.nmFilters({
        iframe: {
            is: function (e) {
                var t = e.opener.attr("target") || "",
                    n = e.opener.attr("rel") || "",
                    r = e.opener.get(0);
                return !e._hasFilter("image") && (t.toLowerCase() == "_blank" || n.toLowerCase().indexOf("external") > -1 || r.hostname && r.hostname.replace(/:\d*$/, "") != window.location.hostname.replace(/:\d*$/, ""))
            },
            init: function (e) {
                e.loadFilter = "iframe"
            },
            load: function (t) {
                t.store.iframe = e('<iframe src="javascript:\'\';" id="nyromodal-iframe-' + (new Date).getTime() + '" frameborder="0"></iframe>'), t._setCont(t.store.iframe)
            },
            afterShowCont: function (e) {
                e.store.iframe.attr("src", e.opener.attr("href"))
            },
            close: function (e) {
                e.store.iframe && (e.store.iframe.remove(), e.store.iframe = t, delete e.store.iframe)
            }
        }
    })
}), jQuery(function (e, t) {
    e.nmFilters({
        iframeForm: {
            is: function (e) {
                var t = e._hasFilter("iframe") && e.opener.is("form");
                return t && (e._delFilter("iframe"), e._delFilter("form")), t
            },
            init: function (e) {
                e.loadFilter = "iframeForm", e.store.iframeFormLoading = !1, e.store.iframeFormOrgTarget = e.opener.attr("target"), e.opener.unbind("submit.nyroModal").bind("submit.nyroModal", function (t) {
                    e.store.iframeFormIframe ? e.store.iframeFormLoading = !0 : (t.preventDefault(), e.opener.trigger("nyroModal"))
                })
            },
            load: function (t) {
                t.store.iframeFormIframe = e('<iframe name="nyroModalIframeForm" src="javascript:\'\';" id="nyromodal-iframe-' + (new Date).getTime() + '"></iframe>'), t._setCont(t.store.iframeFormIframe)
            },
            afterShowCont: function (e) {
                e.opener.attr("target", "nyroModalIframeForm").submit()
            },
            close: function (e) {
                e.store.iframeFormOrgTarget ? e.opener.attr("target", e.store.iframeFormOrgTarget) : e.opener.removeAttr("target"), delete e.store.formFileLoading, delete e.store.iframeFormOrgTarget, e.store.iframeFormIframe && (e.store.iframeFormIframe.remove(), e.store.iframeFormIframe = t, delete e.store.iframeFormIframe)
            }
        }
    })
}), jQuery(function (e, t) {
    e.nmObj({
        embedlyUrl: "http://api.embed.ly/1/oembed",
        embedly: {
            key: t,
            wmode: "transparent",
            allowscripts: !0,
            format: "json"
        }
    });
    var n = [];
    e.nmFilters({
        embedly: {
            is: function (t) {
                if (t._hasFilter("link") && t._hasFilter("iframe") && t.opener.attr("href") && t.embedly.key) {
                    if (n[t.opener.attr("href")]) return t.store.embedly = n[t.opener.attr("href")], t._delFilter("iframe"), !0;
                    t.store.embedly = !1;
                    var r = t.embedly;
                    r.url = t.opener.attr("href"), e.ajax({
                        url: t.embedlyUrl,
                        dataType: "jsonp",
                        data: r,
                        success: function (e) {
                            e.type != "error" && (t.store.embedly = e, n[t.opener.attr("href")] = e, t._delFilter("iframe"), t.filters.push("embedly"), t._callFilters("initFilters"), t._callFilters("init"))
                        }
                    })
                }
                return !1
            },
            init: function (e) {
                e.loadFilter = "embedly"
            },
            load: function (t) {
                t.store.embedly.type == "photo" ? (t.filters.push("image"), e("<img />").load(function () {
                    t.elts.cont.addClass("nyroModalImg"), t.elts.hidden.addClass("nyroModalImg"), t._setCont(this)
                }).error(function () {
                    t._error()
                }).attr("src", t.store.embedly.url)) : t._setCont("<div>" + t.store.embedly.html + "</div>")
            },
            size: function (e) {
                e.store.embedly.width && !e.sizes.height && (e.sizes.w = e.store.embedly.width, e.sizes.h = e.store.embedly.height)
            }
        }
    })
});