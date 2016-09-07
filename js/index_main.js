!
    function(a, b) {
        function c(a) {
            return K.isWindow(a) ? a: 9 === a.nodeType ? a.defaultView || a.parentWindow: !1
        }
        function d(a) {
            if (!tb[a]) {
                var b = H.body,
                    c = K("<" + a + ">").appendTo(b),
                    d = c.css("display");
                c.remove(),
                ("none" === d || "" === d) && (pb || (pb = H.createElement("iframe"), pb.frameBorder = pb.width = pb.height = 0), b.appendChild(pb), qb && pb.createElement || (qb = (pb.contentWindow || pb.contentDocument).document, qb.write(("CSS1Compat" === H.compatMode ? "<!doctype html>": "") + "<html><body>"), qb.close()), c = qb.createElement(a), qb.body.appendChild(c), d = K.css(c, "display"), b.removeChild(pb)),
                    tb[a] = d
            }
            return tb[a]
        }
        function e(a, b) {
            var c = {};
            return K.each(wb.concat.apply([], wb.slice(0, b)),
                function() {
                    c[this] = a
                }),
                c
        }
        function f() {
            sb = b
        }
        function g() {
            return setTimeout(f, 0),
                sb = K.now()
        }
        function h() {
            try {
                return new a.ActiveXObject("Microsoft.XMLHTTP")
            } catch(b) {}
        }
        function i() {
            try {
                return new a.XMLHttpRequest
            } catch(b) {}
        }
        function j(a, c) {
            a.dataFilter && (c = a.dataFilter(c, a.dataType));
            var d, e, f, g, h, i, j, k, l = a.dataTypes,
                m = {},
                n = l.length,
                o = l[0];
            for (d = 1; n > d; d++) {
                if (1 === d) for (e in a.converters)"string" == typeof e && (m[e.toLowerCase()] = a.converters[e]);
                if (g = o, o = l[d], "*" === o) o = g;
                else if ("*" !== g && g !== o) {
                    if (h = g + " " + o, i = m[h] || m["* " + o], !i) {
                        k = b;
                        for (j in m) if (f = j.split(" "), (f[0] === g || "*" === f[0]) && (k = m[f[1] + " " + o])) {
                            j = m[j],
                                j === !0 ? i = k: k === !0 && (i = j);
                            break
                        }
                    } ! i && !k && K.error("No conversion from " + h.replace(" ", " to ")),
                    i !== !0 && (c = i ? i(c) : k(j(c)))
                }
            }
            return c
        }
        function k(a, c, d) {
            var e, f, g, h, i = a.contents,
                j = a.dataTypes,
                k = a.responseFields;
            for (f in k) f in d && (c[k[f]] = d[f]);
            for (;
                "*" === j[0];) j.shift(),
            e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
            if (e) for (f in i) if (i[f] && i[f].test(e)) {
                j.unshift(f);
                break
            }
            if (j[0] in d) g = j[0];
            else {
                for (f in d) {
                    if (!j[0] || a.converters[f + " " + j[0]]) {
                        g = f;
                        break
                    }
                    h || (h = f)
                }
                g = g || h
            }
            return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0
        }
        function l(a, b, c, d) {
            if (K.isArray(b)) K.each(b,
                function(b, e) {
                    c || Ta.test(a) ? d(a, e) : l(a + "[" + ("object" == typeof e || K.isArray(e) ? b: "") + "]", e, c, d)
                });
            else if (c || null == b || "object" != typeof b) d(a, b);
            else for (var e in b) l(a + "[" + e + "]", b[e], c, d)
        }
        function m(a, c) {
            var d, e, f = K.ajaxSettings.flatOptions || {};
            for (d in c) c[d] !== b && ((f[d] ? a: e || (e = {}))[d] = c[d]);
            e && K.extend(!0, a, e)
        }
        function n(a, c, d, e, f, g) {
            f = f || c.dataTypes[0],
                g = g || {},
                g[f] = !0;
            for (var h, i = a[f], j = 0, k = i ? i.length: 0, l = a === gb; k > j && (l || !h); j++) h = i[j](c, d, e),
            "string" == typeof h && (!l || g[h] ? h = b: (c.dataTypes.unshift(h), h = n(a, c, d, e, h, g)));
            return (l || !h) && !g["*"] && (h = n(a, c, d, e, "*", g)),
                h
        }
        function o(a) {
            return function(b, c) {
                if ("string" != typeof b && (c = b, b = "*"), K.isFunction(c)) for (var d, e, f, g = b.toLowerCase().split(cb), h = 0, i = g.length; i > h; h++) d = g[h],
                    f = /^\+/.test(d),
                f && (d = d.substr(1) || "*"),
                    e = a[d] = a[d] || [],
                    e[f ? "unshift": "push"](c)
            }
        }
        function p(a, b, c) {
            var d = "width" === b ? a.offsetWidth: a.offsetHeight,
                e = "width" === b ? Oa: Pa,
                f = 0,
                g = e.length;
            if (d > 0) {
                if ("border" !== c) for (; g > f; f++) c || (d -= parseFloat(K.css(a, "padding" + e[f])) || 0),
                    "margin" === c ? d += parseFloat(K.css(a, c + e[f])) || 0 : d -= parseFloat(K.css(a, "border" + e[f] + "Width")) || 0;
                return d + "px"
            }
            if (d = Ea(a, b, b), (0 > d || null == d) && (d = a.style[b] || 0), d = parseFloat(d) || 0, c) for (; g > f; f++) d += parseFloat(K.css(a, "padding" + e[f])) || 0,
            "padding" !== c && (d += parseFloat(K.css(a, "border" + e[f] + "Width")) || 0),
            "margin" === c && (d += parseFloat(K.css(a, c + e[f])) || 0);
            return d + "px"
        }
        function q(a, b) {
            b.src ? K.ajax({
                url: b.src,
                async: !1,
                dataType: "script"
            }) : K.globalEval((b.text || b.textContent || b.innerHTML || "").replace(Ba, "/*$0*/")),
            b.parentNode && b.parentNode.removeChild(b)
        }
        function r(a) {
            var b = H.createElement("div");
            return Da.appendChild(b),
                b.innerHTML = a.outerHTML,
                b.firstChild
        }
        function s(a) {
            var b = (a.nodeName || "").toLowerCase();
            "input" === b ? t(a) : "script" !== b && "undefined" != typeof a.getElementsByTagName && K.grep(a.getElementsByTagName("input"), t)
        }
        function t(a) { ("checkbox" === a.type || "radio" === a.type) && (a.defaultChecked = a.checked)
        }
        function u(a) {
            return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll("*") : []
        }
        function v(a, b) {
            var c;
            1 === b.nodeType && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), "object" === c ? b.outerHTML = a.outerHTML: "input" !== c || "checkbox" !== a.type && "radio" !== a.type ? "option" === c ? b.selected = a.defaultSelected: ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(K.expando))
        }
        function w(a, b) {
            if (1 === b.nodeType && K.hasData(a)) {
                var c, d, e, f = K._data(a),
                    g = K._data(b, f),
                    h = f.events;
                if (h) {
                    delete g.handle,
                        g.events = {};
                    for (c in h) for (d = 0, e = h[c].length; e > d; d++) K.event.add(b, c + (h[c][d].namespace ? ".": "") + h[c][d].namespace, h[c][d], h[c][d].data)
                }
                g.data && (g.data = K.extend({},
                    g.data))
            }
        }
        function x(a, b) {
            return K.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }
        function y(a) {
            var b = pa.split("|"),
                c = a.createDocumentFragment();
            if (c.createElement) for (; b.length;) c.createElement(b.pop());
            return c
        }
        function z(a, b, c) {
            if (b = b || 0, K.isFunction(b)) return K.grep(a,
                function(a, d) {
                    var e = !!b.call(a, d, a);
                    return e === c
                });
            if (b.nodeType) return K.grep(a,
                function(a, d) {
                    return a === b === c
                });
            if ("string" == typeof b) {
                var d = K.grep(a,
                    function(a) {
                        return 1 === a.nodeType
                    });
                if (la.test(b)) return K.filter(b, d, !c);
                b = K.filter(b, d)
            }
            return K.grep(a,
                function(a, d) {
                    return K.inArray(a, b) >= 0 === c
                })
        }
        function A(a) {
            return ! a || !a.parentNode || 11 === a.parentNode.nodeType
        }
        function B() {
            return ! 0
        }
        function C() {
            return ! 1
        }
        function D(a, b, c) {
            var d = b + "defer",
                e = b + "queue",
                f = b + "mark",
                g = K._data(a, d); ! (!g || "queue" !== c && K._data(a, e) || "mark" !== c && K._data(a, f) || !setTimeout(function() { ! K._data(a, e) && !K._data(a, f) && (K.removeData(a, d, !0), g.fire())
                },
                0))
        }
        function E(a) {
            for (var b in a) if (("data" !== b || !K.isEmptyObject(a[b])) && "toJSON" !== b) return ! 1;
            return ! 0
        }
        function F(a, c, d) {
            if (d === b && 1 === a.nodeType) {
                var e = "data-" + c.replace(O, "-$1").toLowerCase();
                if (d = a.getAttribute(e), "string" == typeof d) {
                    try {
                        d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null: K.isNumeric(d) ? parseFloat(d) : N.test(d) ? K.parseJSON(d) : d
                    } catch(f) {}
                    K.data(a, c, d)
                } else d = b
            }
            return d
        }
        function G(a) {
            var b, c, d = L[a] = {};
            for (a = a.split(/\s+/), b = 0, c = a.length; c > b; b++) d[a[b]] = !0;
            return d
        }
        var H = a.document,
            I = a.navigator,
            J = a.location,
            K = function() {
                function c() {
                    if (!h.isReady) {
                        try {
                            H.documentElement.doScroll("left")
                        } catch(a) {
                            return void setTimeout(c, 1)
                        }
                        h.ready()
                    }
                }
                var d, e, f, g, h = function(a, b) {
                        return new h.fn.init(a, b, d)
                    },
                    i = a.jQuery,
                    j = a.$,
                    k = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                    l = /\S/,
                    m = /^\s+/,
                    n = /\s+$/,
                    o = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                    p = /^[\],:{}\s]*$/,
                    q = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                    r = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                    s = /(?:^|:|,)(?:\s*\[)+/g,
                    t = /(webkit)[ \/]([\w.]+)/,
                    u = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                    v = /(msie) ([\w.]+)/,
                    w = /(mozilla)(?:.*? rv:([\w.]+))?/,
                    x = /-([a-z]|[0-9])/gi,
                    y = /^-ms-/,
                    z = function(a, b) {
                        return (b + "").toUpperCase()
                    },
                    A = I.userAgent,
                    B = Object.prototype.toString,
                    C = Object.prototype.hasOwnProperty,
                    D = Array.prototype.push,
                    E = Array.prototype.slice,
                    F = String.prototype.trim,
                    G = Array.prototype.indexOf,
                    J = {};
                return h.fn = h.prototype = {
                    constructor: h,
                    init: function(a, c, d) {
                        var e, f, g, i;
                        if (!a) return this;
                        if (a.nodeType) return this.context = this[0] = a,
                            this.length = 1,
                            this;
                        if ("body" === a && !c && H.body) return this.context = H,
                            this[0] = H.body,
                            this.selector = a,
                            this.length = 1,
                            this;
                        if ("string" == typeof a) {
                            if (e = "<" !== a.charAt(0) || ">" !== a.charAt(a.length - 1) || a.length < 3 ? k.exec(a) : [null, a, null], e && (e[1] || !c)) {
                                if (e[1]) return c = c instanceof h ? c[0] : c,
                                    i = c ? c.ownerDocument || c: H,
                                    g = o.exec(a),
                                    g ? h.isPlainObject(c) ? (a = [H.createElement(g[1])], h.fn.attr.call(a, c, !0)) : a = [i.createElement(g[1])] : (g = h.buildFragment([e[1]], [i]), a = (g.cacheable ? h.clone(g.fragment) : g.fragment).childNodes),
                                    h.merge(this, a);
                                if (f = H.getElementById(e[2]), f && f.parentNode) {
                                    if (f.id !== e[2]) return d.find(a);
                                    this.length = 1,
                                        this[0] = f
                                }
                                return this.context = H,
                                    this.selector = a,
                                    this
                            }
                            return ! c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
                        }
                        return h.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), h.makeArray(a, this))
                    },
                    selector: "",
                    jquery: "1.7.1",
                    length: 0,
                    size: function() {
                        return this.length
                    },
                    toArray: function() {
                        return E.call(this, 0)
                    },
                    get: function(a) {
                        return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
                    },
                    pushStack: function(a, b, c) {
                        var d = this.constructor();
                        return h.isArray(a) ? D.apply(d, a) : h.merge(d, a),
                            d.prevObject = this,
                            d.context = this.context,
                            "find" === b ? d.selector = this.selector + (this.selector ? " ": "") + c: b && (d.selector = this.selector + "." + b + "(" + c + ")"),
                            d
                    },
                    each: function(a, b) {
                        return h.each(this, a, b)
                    },
                    ready: function(a) {
                        return h.bindReady(),
                            f.add(a),
                            this
                    },
                    eq: function(a) {
                        return a = +a,
                            -1 === a ? this.slice(a) : this.slice(a, a + 1)
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq( - 1)
                    },
                    slice: function() {
                        return this.pushStack(E.apply(this, arguments), "slice", E.call(arguments).join(","))
                    },
                    map: function(a) {
                        return this.pushStack(h.map(this,
                            function(b, c) {
                                return a.call(b, c, b)
                            }))
                    },
                    end: function() {
                        return this.prevObject || this.constructor(null)
                    },
                    push: D,
                    sort: [].sort,
                    splice: [].splice
                },
                    h.fn.init.prototype = h.fn,
                    h.extend = h.fn.extend = function() {
                        var a, c, d, e, f, g, i = arguments[0] || {},
                            j = 1,
                            k = arguments.length,
                            l = !1;
                        for ("boolean" == typeof i && (l = i, i = arguments[1] || {},
                            j = 2), "object" != typeof i && !h.isFunction(i) && (i = {}), k === j && (i = this, --j); k > j; j++) if (null != (a = arguments[j])) for (c in a) d = i[c],
                            e = a[c],
                        i !== e && (l && e && (h.isPlainObject(e) || (f = h.isArray(e))) ? (f ? (f = !1, g = d && h.isArray(d) ? d: []) : g = d && h.isPlainObject(d) ? d: {},
                            i[c] = h.extend(l, g, e)) : e !== b && (i[c] = e));
                        return i
                    },
                    h.extend({
                        noConflict: function(b) {
                            return a.$ === h && (a.$ = j),
                            b && a.jQuery === h && (a.jQuery = i),
                                h
                        },
                        isReady: !1,
                        readyWait: 1,
                        holdReady: function(a) {
                            a ? h.readyWait++:h.ready(!0)
                        },
                        ready: function(a) {
                            if (a === !0 && !--h.readyWait || a !== !0 && !h.isReady) {
                                if (!H.body) return setTimeout(h.ready, 1);
                                if (h.isReady = !0, a !== !0 && --h.readyWait > 0) return;
                                f.fireWith(H, [h]),
                                h.fn.trigger && h(H).trigger("ready").off("ready")
                            }
                        },
                        bindReady: function() {
                            if (!f) {
                                if (f = h.Callbacks("once memory"), "complete" === H.readyState) return setTimeout(h.ready, 1);
                                if (H.addEventListener) H.addEventListener("DOMContentLoaded", g, !1),
                                    a.addEventListener("load", h.ready, !1);
                                else if (H.attachEvent) {
                                    H.attachEvent("onreadystatechange", g),
                                        a.attachEvent("onload", h.ready);
                                    var b = !1;
                                    try {
                                        b = null == a.frameElement
                                    } catch(d) {}
                                    H.documentElement.doScroll && b && c()
                                }
                            }
                        },
                        isFunction: function(a) {
                            return "function" === h.type(a)
                        },
                        isArray: Array.isArray ||
                        function(a) {
                            return "array" === h.type(a)
                        },
                        isWindow: function(a) {
                            return a && "object" == typeof a && "setInterval" in a
                        },
                        isNumeric: function(a) {
                            return ! isNaN(parseFloat(a)) && isFinite(a)
                        },
                        type: function(a) {
                            return null == a ? String(a) : J[B.call(a)] || "object"
                        },
                        isPlainObject: function(a) {
                            if (!a || "object" !== h.type(a) || a.nodeType || h.isWindow(a)) return ! 1;
                            try {
                                if (a.constructor && !C.call(a, "constructor") && !C.call(a.constructor.prototype, "isPrototypeOf")) return ! 1
                            } catch(c) {
                                return ! 1
                            }
                            var d;
                            for (d in a);
                            return d === b || C.call(a, d)
                        },
                        isEmptyObject: function(a) {
                            for (var b in a) return ! 1;
                            return ! 0
                        },
                        error: function(a) {
                            throw new Error(a)
                        },
                        parseJSON: function(b) {
                            return "string" == typeof b && b ? (b = h.trim(b), a.JSON && a.JSON.parse ? a.JSON.parse(b) : p.test(b.replace(q, "@").replace(r, "]").replace(s, "")) ? new Function("return " + b)() : void h.error("Invalid JSON: " + b)) : null
                        },
                        parseXML: function(c) {
                            var d, e;
                            try {
                                a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                            } catch(f) {
                                d = b
                            }
                            return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && h.error("Invalid XML: " + c),
                                d
                        },
                        noop: function() {},
                        globalEval: function(b) {
                            b && l.test(b) && (a.execScript ||
                            function(b) {
                                a.eval.call(a, b)
                            })(b)
                        },
                        camelCase: function(a) {
                            return a.replace(y, "ms-").replace(x, z)
                        },
                        nodeName: function(a, b) {
                            return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                        },
                        each: function(a, c, d) {
                            var e, f = 0,
                                g = a.length,
                                i = g === b || h.isFunction(a);
                            if (d) if (i) {
                                for (e in a) if (c.apply(a[e], d) === !1) break
                            } else for (; g > f && c.apply(a[f++], d) !== !1;);
                            else if (i) {
                                for (e in a) if (c.call(a[e], e, a[e]) === !1) break
                            } else for (; g > f && c.call(a[f], f, a[f++]) !== !1;);
                            return a
                        },
                        trim: F ?
                            function(a) {
                                return null == a ? "": F.call(a)
                            }: function(a) {
                            return null == a ? "": (a + "").replace(m, "").replace(n, "")
                        },
                        makeArray: function(a, b) {
                            var c = b || [];
                            if (null != a) {
                                var d = h.type(a);
                                null == a.length || "string" === d || "function" === d || "regexp" === d || h.isWindow(a) ? D.call(c, a) : h.merge(c, a)
                            }
                            return c
                        },
                        inArray: function(a, b, c) {
                            var d;
                            if (b) {
                                if (G) return G.call(b, a, c);
                                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c: 0; d > c; c++) if (c in b && b[c] === a) return c
                            }
                            return - 1
                        },
                        merge: function(a, c) {
                            var d = a.length,
                                e = 0;
                            if ("number" == typeof c.length) for (var f = c.length; f > e; e++) a[d++] = c[e];
                            else for (; c[e] !== b;) a[d++] = c[e++];
                            return a.length = d,
                                a
                        },
                        grep: function(a, b, c) {
                            var d, e = [];
                            c = !!c;
                            for (var f = 0,
                                     g = a.length; g > f; f++) d = !!b(a[f], f),
                            c !== d && e.push(a[f]);
                            return e
                        },
                        map: function(a, c, d) {
                            var e, f, g = [],
                                i = 0,
                                j = a.length,
                                k = a instanceof h || j !== b && "number" == typeof j && (j > 0 && a[0] && a[j - 1] || 0 === j || h.isArray(a));
                            if (k) for (; j > i; i++) e = c(a[i], i, d),
                            null != e && (g[g.length] = e);
                            else for (f in a) e = c(a[f], f, d),
                            null != e && (g[g.length] = e);
                            return g.concat.apply([], g)
                        },
                        guid: 1,
                        proxy: function(a, c) {
                            if ("string" == typeof c) {
                                var d = a[c];
                                c = a,
                                    a = d
                            }
                            if (!h.isFunction(a)) return b;
                            var e = E.call(arguments, 2),
                                f = function() {
                                    return a.apply(c, e.concat(E.call(arguments)))
                                };
                            return f.guid = a.guid = a.guid || f.guid || h.guid++,
                                f
                        },
                        access: function(a, c, d, e, f, g) {
                            var i = a.length;
                            if ("object" == typeof c) {
                                for (var j in c) h.access(a, j, c[j], e, f, d);
                                return a
                            }
                            if (d !== b) {
                                e = !g && e && h.isFunction(d);
                                for (var k = 0; i > k; k++) f(a[k], c, e ? d.call(a[k], k, f(a[k], c)) : d, g);
                                return a
                            }
                            return i ? f(a[0], c) : b
                        },
                        now: function() {
                            return (new Date).getTime()
                        },
                        uaMatch: function(a) {
                            a = a.toLowerCase();
                            var b = t.exec(a) || u.exec(a) || v.exec(a) || a.indexOf("compatible") < 0 && w.exec(a) || [];
                            return {
                                browser: b[1] || "",
                                version: b[2] || "0"
                            }
                        },
                        sub: function() {
                            function a(b, c) {
                                return new a.fn.init(b, c)
                            }
                            h.extend(!0, a, this),
                                a.superclass = this,
                                a.fn = a.prototype = this(),
                                a.fn.constructor = a,
                                a.sub = this.sub,
                                a.fn.init = function(c, d) {
                                    return d && d instanceof h && !(d instanceof a) && (d = a(d)),
                                        h.fn.init.call(this, c, d, b)
                                },
                                a.fn.init.prototype = a.fn;
                            var b = a(H);
                            return a
                        },
                        browser: {}
                    }),
                    h.each("Boolean Number String Function Array Date RegExp Object".split(" "),
                        function(a, b) {
                            J["[object " + b + "]"] = b.toLowerCase()
                        }),
                    e = h.uaMatch(A),
                e.browser && (h.browser[e.browser] = !0, h.browser.version = e.version),
                h.browser.webkit && (h.browser.safari = !0),
                l.test(" ") && (m = /^[\s\xA0]+/, n = /[\s\xA0]+$/),
                    d = h(H),
                    H.addEventListener ? g = function() {
                        H.removeEventListener("DOMContentLoaded", g, !1),
                            h.ready()
                    }: H.attachEvent && (g = function() {
                        "complete" === H.readyState && (H.detachEvent("onreadystatechange", g), h.ready())
                    }),
                    h
            } (),
            L = {};
        K.Callbacks = function(a) {
            a = a ? L[a] || G(a) : {};
            var c, d, e, f, g, h = [],
                i = [],
                j = function(b) {
                    var c, d, e, f;
                    for (c = 0, d = b.length; d > c; c++) e = b[c],
                        f = K.type(e),
                        "array" === f ? j(e) : "function" === f && (!a.unique || !l.has(e)) && h.push(e)
                },
                k = function(b, j) {
                    for (j = j || [], c = !a.memory || [b, j], d = !0, g = e || 0, e = 0, f = h.length; h && f > g; g++) if (h[g].apply(b, j) === !1 && a.stopOnFalse) {
                        c = !0;
                        break
                    }
                    d = !1,
                    h && (a.once ? c === !0 ? l.disable() : h = [] : i && i.length && (c = i.shift(), l.fireWith(c[0], c[1])))
                },
                l = {
                    add: function() {
                        if (h) {
                            var a = h.length;
                            j(arguments),
                                d ? f = h.length: c && c !== !0 && (e = a, k(c[0], c[1]))
                        }
                        return this
                    },
                    remove: function() {
                        if (h) for (var b = arguments,
                                        c = 0,
                                        e = b.length; e > c; c++) for (var i = 0; i < h.length && (b[c] !== h[i] || (d && f >= i && (f--, g >= i && g--), h.splice(i--, 1), !a.unique)); i++);
                        return this
                    },
                    has: function(a) {
                        if (h) for (var b = 0,
                                        c = h.length; c > b; b++) if (a === h[b]) return ! 0;
                        return ! 1
                    },
                    empty: function() {
                        return h = [],
                            this
                    },
                    disable: function() {
                        return h = i = c = b,
                            this
                    },
                    disabled: function() {
                        return ! h
                    },
                    lock: function() {
                        return i = b,
                        (!c || c === !0) && l.disable(),
                            this
                    },
                    locked: function() {
                        return ! i
                    },
                    fireWith: function(b, e) {
                        return i && (d ? a.once || i.push([b, e]) : (!a.once || !c) && k(b, e)),
                            this
                    },
                    fire: function() {
                        return l.fireWith(this, arguments),
                            this
                    },
                    fired: function() {
                        return !! c
                    }
                };
            return l
        };
        var M = [].slice;
        K.extend({
            Deferred: function(a) {
                var b, c = K.Callbacks("once memory"),
                    d = K.Callbacks("once memory"),
                    e = K.Callbacks("memory"),
                    f = "pending",
                    g = {
                        resolve: c,
                        reject: d,
                        notify: e
                    },
                    h = {
                        done: c.add,
                        fail: d.add,
                        progress: e.add,
                        state: function() {
                            return f
                        },
                        isResolved: c.fired,
                        isRejected: d.fired,
                        then: function(a, b, c) {
                            return i.done(a).fail(b).progress(c),
                                this
                        },
                        always: function() {
                            return i.done.apply(i, arguments).fail.apply(i, arguments),
                                this
                        },
                        pipe: function(a, b, c) {
                            return K.Deferred(function(d) {
                                K.each({
                                        done: [a, "resolve"],
                                        fail: [b, "reject"],
                                        progress: [c, "notify"]
                                    },
                                    function(a, b) {
                                        var c, e = b[0],
                                            f = b[1];
                                        i[a](K.isFunction(e) ?
                                            function() {
                                                c = e.apply(this, arguments),
                                                    c && K.isFunction(c.promise) ? c.promise().then(d.resolve, d.reject, d.notify) : d[f + "With"](this === i ? d: this, [c])
                                            }: d[f])
                                    })
                            }).promise()
                        },
                        promise: function(a) {
                            if (null == a) a = h;
                            else for (var b in h) a[b] = h[b];
                            return a
                        }
                    },
                    i = h.promise({});
                for (b in g) i[b] = g[b].fire,
                    i[b + "With"] = g[b].fireWith;
                return i.done(function() {
                        f = "resolved"
                    },
                    d.disable, e.lock).fail(function() {
                        f = "rejected"
                    },
                    c.disable, e.lock),
                a && a.call(i, i),
                    i
            },
            when: function(a) {
                function b(a) {
                    return function(b) {
                        g[a] = arguments.length > 1 ? M.call(arguments, 0) : b,
                            i.notifyWith(j, g)
                    }
                }
                function c(a) {
                    return function(b) {
                        d[a] = arguments.length > 1 ? M.call(arguments, 0) : b,
                        --h || i.resolveWith(i, d)
                    }
                }
                var d = M.call(arguments, 0),
                    e = 0,
                    f = d.length,
                    g = Array(f),
                    h = f,
                    i = 1 >= f && a && K.isFunction(a.promise) ? a: K.Deferred(),
                    j = i.promise();
                if (f > 1) {
                    for (; f > e; e++) d[e] && d[e].promise && K.isFunction(d[e].promise) ? d[e].promise().then(c(e), i.reject, b(e)) : --h;
                    h || i.resolveWith(i, d)
                } else i !== a && i.resolveWith(i, f ? [a] : []);
                return j
            }
        }),
            K.support = function() {
                {
                    var b, c, d, e, f, g, h, i, j, k, l, m, n = H.createElement("div");
                    H.documentElement
                }
                if (n.setAttribute("className", "t"), n.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", c = n.getElementsByTagName("*"), d = n.getElementsByTagName("a")[0], !c || !c.length || !d) return {};
                e = H.createElement("select"),
                    f = e.appendChild(H.createElement("option")),
                    g = n.getElementsByTagName("input")[0],
                    b = {
                        leadingWhitespace: 3 === n.firstChild.nodeType,
                        tbody: !n.getElementsByTagName("tbody").length,
                        htmlSerialize: !!n.getElementsByTagName("link").length,
                        style: /top/.test(d.getAttribute("style")),
                        hrefNormalized: "/a" === d.getAttribute("href"),
                        opacity: /^0.55/.test(d.style.opacity),
                        cssFloat: !!d.style.cssFloat,
                        checkOn: "on" === g.value,
                        optSelected: f.selected,
                        getSetAttribute: "t" !== n.className,
                        enctype: !!H.createElement("form").enctype,
                        html5Clone: "<:nav></:nav>" !== H.createElement("nav").cloneNode(!0).outerHTML,
                        submitBubbles: !0,
                        changeBubbles: !0,
                        focusinBubbles: !1,
                        deleteExpando: !0,
                        noCloneEvent: !0,
                        inlineBlockNeedsLayout: !1,
                        shrinkWrapBlocks: !1,
                        reliableMarginRight: !0
                    },
                    g.checked = !0,
                    b.noCloneChecked = g.cloneNode(!0).checked,
                    e.disabled = !0,
                    b.optDisabled = !f.disabled;
                try {
                    delete n.test
                } catch(o) {
                    b.deleteExpando = !1
                }
                if (!n.addEventListener && n.attachEvent && n.fireEvent && (n.attachEvent("onclick",
                        function() {
                            b.noCloneEvent = !1
                        }), n.cloneNode(!0).fireEvent("onclick")), g = H.createElement("input"), g.value = "t", g.setAttribute("type", "radio"), b.radioValue = "t" === g.value, g.setAttribute("checked", "checked"), n.appendChild(g), i = H.createDocumentFragment(), i.appendChild(n.lastChild), b.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = g.checked, i.removeChild(g), i.appendChild(n), n.innerHTML = "", a.getComputedStyle && (h = H.createElement("div"), h.style.width = "0", h.style.marginRight = "0", n.style.width = "2px", n.appendChild(h), b.reliableMarginRight = 0 === (parseInt((a.getComputedStyle(h, null) || {
                            marginRight: 0
                        }).marginRight, 10) || 0)), n.attachEvent) for (l in {
                    submit: 1,
                    change: 1,
                    focusin: 1
                }) k = "on" + l,
                    m = k in n,
                m || (n.setAttribute(k, "return;"), m = "function" == typeof n[k]),
                    b[l + "Bubbles"] = m;
                return i.removeChild(n),
                    i = e = f = h = n = g = null,
                    K(function() {
                        var a, c, d, e, f, g, h, i, k, l, o = H.getElementsByTagName("body")[0]; ! o || (g = 1, h = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;", i = "visibility:hidden;border:0;", k = "style='" + h + "border:5px solid #000;padding:0;'", l = "<div " + k + "><div></div></div><table " + k + " cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", a = H.createElement("div"), a.style.cssText = i + "width:0;height:0;position:static;top:0;margin-top:" + g + "px", o.insertBefore(a, o.firstChild), n = H.createElement("div"), a.appendChild(n), n.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", j = n.getElementsByTagName("td"), m = 0 === j[0].offsetHeight, j[0].style.display = "", j[1].style.display = "none", b.reliableHiddenOffsets = m && 0 === j[0].offsetHeight, n.innerHTML = "", n.style.width = n.style.paddingLeft = "1px", K.boxModel = b.boxModel = 2 === n.offsetWidth, "undefined" != typeof n.style.zoom && (n.style.display = "inline", n.style.zoom = 1, b.inlineBlockNeedsLayout = 2 === n.offsetWidth, n.style.display = "", n.innerHTML = "<div style='width:4px;'></div>", b.shrinkWrapBlocks = 2 !== n.offsetWidth), n.style.cssText = h + i, n.innerHTML = l, c = n.firstChild, d = c.firstChild, e = c.nextSibling.firstChild.firstChild, f = {
                            doesNotAddBorder: 5 !== d.offsetTop,
                            doesAddBorderForTableAndCells: 5 === e.offsetTop
                        },
                            d.style.position = "fixed", d.style.top = "20px", f.fixedPosition = 20 === d.offsetTop || 15 === d.offsetTop, d.style.position = d.style.top = "", c.style.overflow = "hidden", c.style.position = "relative", f.subtractsBorderForOverflowNotVisible = -5 === d.offsetTop, f.doesNotIncludeMarginInBodyOffset = o.offsetTop !== g, o.removeChild(a), n = a = null, K.extend(b, f))
                    }),
                    b
            } ();
        var N = /^(?:\{.*\}|\[.*\])$/,
            O = /([A-Z])/g;
        K.extend({
            cache: {},
            uuid: 0,
            expando: "jQuery" + (K.fn.jquery + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(a) {
                return a = a.nodeType ? K.cache[a[K.expando]] : a[K.expando],
                !!a && !E(a)
            },
            data: function(a, c, d, e) {
                if (K.acceptData(a)) {
                    var f, g, h, i = K.expando,
                        j = "string" == typeof c,
                        k = a.nodeType,
                        l = k ? K.cache: a,
                        m = k ? a[i] : a[i] && i,
                        n = "events" === c;
                    if (! (m && l[m] && (n || e || l[m].data) || !j || d !== b)) return;
                    return m || (k ? a[i] = m = ++K.uuid: m = i),
                    l[m] || (l[m] = {},
                    k || (l[m].toJSON = K.noop)),
                    ("object" == typeof c || "function" == typeof c) && (e ? l[m] = K.extend(l[m], c) : l[m].data = K.extend(l[m].data, c)),
                        f = g = l[m],
                    e || (g.data || (g.data = {}), g = g.data),
                    d !== b && (g[K.camelCase(c)] = d),
                        n && !g[c] ? f.events: (j ? (h = g[c], null == h && (h = g[K.camelCase(c)])) : h = g, h)
                }
            },
            removeData: function(a, b, c) {
                if (K.acceptData(a)) {
                    var d, e, f, g = K.expando,
                        h = a.nodeType,
                        i = h ? K.cache: a,
                        j = h ? a[g] : g;
                    if (!i[j]) return;
                    if (b && (d = c ? i[j] : i[j].data)) {
                        K.isArray(b) || (b in d ? b = [b] : (b = K.camelCase(b), b = b in d ? [b] : b.split(" ")));
                        for (e = 0, f = b.length; f > e; e++) delete d[b[e]];
                        if (! (c ? E: K.isEmptyObject)(d)) return
                    }
                    if (!c && (delete i[j].data, !E(i[j]))) return;
                    K.support.deleteExpando || !i.setInterval ? delete i[j] : i[j] = null,
                    h && (K.support.deleteExpando ? delete a[g] : a.removeAttribute ? a.removeAttribute(g) : a[g] = null)
                }
            },
            _data: function(a, b, c) {
                return K.data(a, b, c, !0)
            },
            acceptData: function(a) {
                if (a.nodeName) {
                    var b = K.noData[a.nodeName.toLowerCase()];
                    if (b) return b !== !0 && a.getAttribute("classid") === b
                }
                return ! 0
            }
        }),
            K.fn.extend({
                data: function(a, c) {
                    var d, e, f, g = null;
                    if ("undefined" == typeof a) {
                        if (this.length && (g = K.data(this[0]), 1 === this[0].nodeType && !K._data(this[0], "parsedAttrs"))) {
                            e = this[0].attributes;
                            for (var h = 0,
                                     i = e.length; i > h; h++) f = e[h].name,
                            0 === f.indexOf("data-") && (f = K.camelCase(f.substring(5)), F(this[0], f, g[f]));
                            K._data(this[0], "parsedAttrs", !0)
                        }
                        return g
                    }
                    return "object" == typeof a ? this.each(function() {
                        K.data(this, a)
                    }) : (d = a.split("."), d[1] = d[1] ? "." + d[1] : "", c === b ? (g = this.triggerHandler("getData" + d[1] + "!", [d[0]]), g === b && this.length && (g = K.data(this[0], a), g = F(this[0], a, g)), g === b && d[1] ? this.data(d[0]) : g) : this.each(function() {
                        var b = K(this),
                            e = [d[0], c];
                        b.triggerHandler("setData" + d[1] + "!", e),
                            K.data(this, a, c),
                            b.triggerHandler("changeData" + d[1] + "!", e)
                    }))
                },
                removeData: function(a) {
                    return this.each(function() {
                        K.removeData(this, a)
                    })
                }
            }),
            K.extend({
                _mark: function(a, b) {
                    a && (b = (b || "fx") + "mark", K._data(a, b, (K._data(a, b) || 0) + 1))
                },
                _unmark: function(a, b, c) {
                    if (a !== !0 && (c = b, b = a, a = !1), b) {
                        c = c || "fx";
                        var d = c + "mark",
                            e = a ? 0 : (K._data(b, d) || 1) - 1;
                        e ? K._data(b, d, e) : (K.removeData(b, d, !0), D(b, c, "mark"))
                    }
                },
                queue: function(a, b, c) {
                    var d;
                    return a ? (b = (b || "fx") + "queue", d = K._data(a, b), c && (!d || K.isArray(c) ? d = K._data(a, b, K.makeArray(c)) : d.push(c)), d || []) : void 0
                },
                dequeue: function(a, b) {
                    b = b || "fx";
                    var c = K.queue(a, b),
                        d = c.shift(),
                        e = {};
                    "inprogress" === d && (d = c.shift()),
                    d && ("fx" === b && c.unshift("inprogress"), K._data(a, b + ".run", e), d.call(a,
                        function() {
                            K.dequeue(a, b)
                        },
                        e)),
                    c.length || (K.removeData(a, b + "queue " + b + ".run", !0), D(a, b, "queue"))
                }
            }),
            K.fn.extend({
                queue: function(a, c) {
                    return "string" != typeof a && (c = a, a = "fx"),
                        c === b ? K.queue(this[0], a) : this.each(function() {
                            var b = K.queue(this, a, c);
                            "fx" === a && "inprogress" !== b[0] && K.dequeue(this, a)
                        })
                },
                dequeue: function(a) {
                    return this.each(function() {
                        K.dequeue(this, a)
                    })
                },
                delay: function(a, b) {
                    return a = K.fx ? K.fx.speeds[a] || a: a,
                        b = b || "fx",
                        this.queue(b,
                            function(b, c) {
                                var d = setTimeout(b, a);
                                c.stop = function() {
                                    clearTimeout(d)
                                }
                            })
                },
                clearQueue: function(a) {
                    return this.queue(a || "fx", [])
                },
                promise: function(a, c) {
                    function d() {--i || f.resolveWith(g, [g])
                    }
                    "string" != typeof a && (c = a, a = b),
                        a = a || "fx";
                    for (var e, f = K.Deferred(), g = this, h = g.length, i = 1, j = a + "defer", k = a + "queue", l = a + "mark"; h--;)(e = K.data(g[h], j, b, !0) || (K.data(g[h], k, b, !0) || K.data(g[h], l, b, !0)) && K.data(g[h], j, K.Callbacks("once memory"), !0)) && (i++, e.add(d));
                    return d(),
                        f.promise()
                }
            });
        var P, Q, R, S = /[\n\t\r]/g,
            T = /\s+/,
            U = /\r/g,
            V = /^(?:button|input)$/i,
            W = /^(?:button|input|object|select|textarea)$/i,
            X = /^a(?:rea)?$/i,
            Y = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            Z = K.support.getSetAttribute;
        K.fn.extend({
            attr: function(a, b) {
                return K.access(this, a, b, !0, K.attr)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    K.removeAttr(this, a)
                })
            },
            prop: function(a, b) {
                return K.access(this, a, b, !0, K.prop)
            },
            removeProp: function(a) {
                return a = K.propFix[a] || a,
                    this.each(function() {
                        try {
                            this[a] = b,
                                delete this[a]
                        } catch(c) {}
                    })
            },
            addClass: function(a) {
                var b, c, d, e, f, g, h;
                if (K.isFunction(a)) return this.each(function(b) {
                    K(this).addClass(a.call(this, b, this.className))
                });
                if (a && "string" == typeof a) for (b = a.split(T), c = 0, d = this.length; d > c; c++) if (e = this[c], 1 === e.nodeType) if (e.className || 1 !== b.length) {
                    for (f = " " + e.className + " ", g = 0, h = b.length; h > g; g++)~f.indexOf(" " + b[g] + " ") || (f += b[g] + " ");
                    e.className = K.trim(f)
                } else e.className = a;
                return this
            },
            removeClass: function(a) {
                var c, d, e, f, g, h, i;
                if (K.isFunction(a)) return this.each(function(b) {
                    K(this).removeClass(a.call(this, b, this.className))
                });
                if (a && "string" == typeof a || a === b) for (c = (a || "").split(T), d = 0, e = this.length; e > d; d++) if (f = this[d], 1 === f.nodeType && f.className) if (a) {
                    for (g = (" " + f.className + " ").replace(S, " "), h = 0, i = c.length; i > h; h++) g = g.replace(" " + c[h] + " ", " ");
                    f.className = K.trim(g)
                } else f.className = "";
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a,
                    d = "boolean" == typeof b;
                return this.each(K.isFunction(a) ?
                    function(c) {
                        K(this).toggleClass(a.call(this, c, this.className, b), b)
                    }: function() {
                    if ("string" === c) for (var e, f = 0,
                                                 g = K(this), h = b, i = a.split(T); e = i[f++];) h = d ? h: !g.hasClass(e),
                        g[h ? "addClass": "removeClass"](e);
                    else("undefined" === c || "boolean" === c) && (this.className && K._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "": K._data(this, "__className__") || "")
                })
            },
            hasClass: function(a) {
                for (var b = " " + a + " ",
                         c = 0,
                         d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(S, " ").indexOf(b) > -1) return ! 0;
                return ! 1
            },
            val: function(a) {
                var c, d, e, f = this[0];
                return arguments.length ? (e = K.isFunction(a), this.each(function(d) {
                    var f, g = K(this);
                    1 === this.nodeType && (f = e ? a.call(this, d, g.val()) : a, null == f ? f = "": "number" == typeof f ? f += "": K.isArray(f) && (f = K.map(f,
                        function(a) {
                            return null == a ? "": a + ""
                        })), c = K.valHooks[this.nodeName.toLowerCase()] || K.valHooks[this.type], c && "set" in c && c.set(this, f, "value") !== b || (this.value = f))
                })) : f ? (c = K.valHooks[f.nodeName.toLowerCase()] || K.valHooks[f.type], c && "get" in c && (d = c.get(f, "value")) !== b ? d: (d = f.value, "string" == typeof d ? d.replace(U, "") : null == d ? "": d)) : void 0
            }
        }),
            K.extend({
                valHooks: {
                    option: {
                        get: function(a) {
                            var b = a.attributes.value;
                            return ! b || b.specified ? a.value: a.text
                        }
                    },
                    select: {
                        get: function(a) {
                            var b, c, d, e, f = a.selectedIndex,
                                g = [],
                                h = a.options,
                                i = "select-one" === a.type;
                            if (0 > f) return null;
                            for (c = i ? f: 0, d = i ? f + 1 : h.length; d > c; c++) if (e = h[c], !(!e.selected || (K.support.optDisabled ? e.disabled: null !== e.getAttribute("disabled")) || e.parentNode.disabled && K.nodeName(e.parentNode, "optgroup"))) {
                                if (b = K(e).val(), i) return b;
                                g.push(b)
                            }
                            return i && !g.length && h.length ? K(h[f]).val() : g
                        },
                        set: function(a, b) {
                            var c = K.makeArray(b);
                            return K(a).find("option").each(function() {
                                this.selected = K.inArray(K(this).val(), c) >= 0
                            }),
                            c.length || (a.selectedIndex = -1),
                                c
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
                attr: function(a, c, d, e) {
                    var f, g, h, i = a.nodeType;
                    return a && 3 !== i && 8 !== i && 2 !== i ? e && c in K.attrFn ? K(a)[c](d) : "undefined" == typeof a.getAttribute ? K.prop(a, c, d) : (h = 1 !== i || !K.isXMLDoc(a), h && (c = c.toLowerCase(), g = K.attrHooks[c] || (Y.test(c) ? Q: P)), d !== b ? null === d ? void K.removeAttr(a, c) : g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f: (a.setAttribute(c, "" + d), d) : g && "get" in g && h && null !== (f = g.get(a, c)) ? f: (f = a.getAttribute(c), null === f ? b: f)) : void 0
                },
                removeAttr: function(a, b) {
                    var c, d, e, f, g = 0;
                    if (b && 1 === a.nodeType) for (d = b.toLowerCase().split(T), f = d.length; f > g; g++) e = d[g],
                    e && (c = K.propFix[e] || e, K.attr(a, e, ""), a.removeAttribute(Z ? e: c), Y.test(e) && c in a && (a[c] = !1))
                },
                attrHooks: {
                    type: {
                        set: function(a, b) {
                            if (V.test(a.nodeName) && a.parentNode) K.error("type property can't be changed");
                            else if (!K.support.radioValue && "radio" === b && K.nodeName(a, "input")) {
                                var c = a.value;
                                return a.setAttribute("type", b),
                                c && (a.value = c),
                                    b
                            }
                        }
                    },
                    value: {
                        get: function(a, b) {
                            return P && K.nodeName(a, "button") ? P.get(a, b) : b in a ? a.value: null
                        },
                        set: function(a, b, c) {
                            return P && K.nodeName(a, "button") ? P.set(a, b, c) : void(a.value = b)
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
                prop: function(a, c, d) {
                    var e, f, g, h = a.nodeType;
                    return a && 3 !== h && 8 !== h && 2 !== h ? (g = 1 !== h || !K.isXMLDoc(a), g && (c = K.propFix[c] || c, f = K.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e: a[c] = d: f && "get" in f && null !== (e = f.get(a, c)) ? e: a[c]) : void 0
                },
                propHooks: {
                    tabIndex: {
                        get: function(a) {
                            var c = a.getAttributeNode("tabindex");
                            return c && c.specified ? parseInt(c.value, 10) : W.test(a.nodeName) || X.test(a.nodeName) && a.href ? 0 : b
                        }
                    }
                }
            }),
            K.attrHooks.tabindex = K.propHooks.tabIndex,
            Q = {
                get: function(a, c) {
                    var d, e = K.prop(a, c);
                    return e === !0 || "boolean" != typeof e && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
                },
                set: function(a, b, c) {
                    var d;
                    return b === !1 ? K.removeAttr(a, c) : (d = K.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())),
                        c
                }
            },
        Z || (R = {
            name: !0,
            id: !0
        },
            P = K.valHooks.button = {
                get: function(a, c) {
                    var d;
                    return d = a.getAttributeNode(c),
                        d && (R[c] ? "" !== d.nodeValue: d.specified) ? d.nodeValue: b
                },
                set: function(a, b, c) {
                    var d = a.getAttributeNode(c);
                    return d || (d = H.createAttribute(c), a.setAttributeNode(d)),
                        d.nodeValue = b + ""
                }
            },
            K.attrHooks.tabindex.set = P.set, K.each(["width", "height"],
            function(a, b) {
                K.attrHooks[b] = K.extend(K.attrHooks[b], {
                    set: function(a, c) {
                        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
                    }
                })
            }), K.attrHooks.contenteditable = {
            get: P.get,
            set: function(a, b, c) {
                "" === b && (b = "false"),
                    P.set(a, b, c)
            }
        }),
        K.support.hrefNormalized || K.each(["href", "src", "width", "height"],
            function(a, c) {
                K.attrHooks[c] = K.extend(K.attrHooks[c], {
                    get: function(a) {
                        var d = a.getAttribute(c, 2);
                        return null === d ? b: d
                    }
                })
            }),
        K.support.style || (K.attrHooks.style = {
            get: function(a) {
                return a.style.cssText.toLowerCase() || b
            },
            set: function(a, b) {
                return a.style.cssText = "" + b
            }
        }),
        K.support.optSelected || (K.propHooks.selected = K.extend(K.propHooks.selected, {
            get: function(a) {
                var b = a.parentNode;
                return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
                    null
            }
        })),
        K.support.enctype || (K.propFix.enctype = "encoding"),
        K.support.checkOn || K.each(["radio", "checkbox"],
            function() {
                K.valHooks[this] = {
                    get: function(a) {
                        return null === a.getAttribute("value") ? "on": a.value
                    }
                }
            }),
            K.each(["radio", "checkbox"],
                function() {
                    K.valHooks[this] = K.extend(K.valHooks[this], {
                        set: function(a, b) {
                            return K.isArray(b) ? a.checked = K.inArray(K(a).val(), b) >= 0 : void 0
                        }
                    })
                });
        var $ = /^(?:textarea|input|select)$/i,
            _ = /^([^\.]*)?(?:\.(.+))?$/,
            aa = /\bhover(\.\S+)?\b/,
            ba = /^key/,
            ca = /^(?:mouse|contextmenu)|click/,
            da = /^(?:focusinfocus|focusoutblur)$/,
            ea = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
            fa = function(a) {
                var b = ea.exec(a);
                return b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)")),
                    b
            },
            ga = function(a, b) {
                var c = a.attributes || {};
                return ! (b[1] && a.nodeName.toLowerCase() !== b[1] || b[2] && (c.id || {}).value !== b[2] || b[3] && !b[3].test((c["class"] || {}).value))
            },
            ha = function(a) {
                return K.event.special.hover ? a: a.replace(aa, "mouseenter$1 mouseleave$1")
            };
        K.event = {
            add: function(a, c, d, e, f) {
                var g, h, i, j, k, l, m, n, o, p, q;
                if (3 !== a.nodeType && 8 !== a.nodeType && c && d && (g = K._data(a))) {
                    for (d.handler && (o = d, d = o.handler), d.guid || (d.guid = K.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function(a) {
                        return "undefined" == typeof K || a && K.event.triggered === a.type ? b: K.event.dispatch.apply(h.elem, arguments)
                    },
                        h.elem = a), c = K.trim(ha(c)).split(" "), j = 0; j < c.length; j++) k = _.exec(c[j]) || [],
                        l = k[1],
                        m = (k[2] || "").split(".").sort(),
                        q = K.event.special[l] || {},
                        l = (f ? q.delegateType: q.bindType) || l,
                        q = K.event.special[l] || {},
                        n = K.extend({
                                type: l,
                                origType: k[1],
                                data: e,
                                handler: d,
                                guid: d.guid,
                                selector: f,
                                quick: fa(f),
                                namespace: m.join(".")
                            },
                            o),
                        p = i[l],
                    p || (p = i[l] = [], p.delegateCount = 0, q.setup && q.setup.call(a, e, m, h) !== !1 || (a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h))),
                    q.add && (q.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)),
                        f ? p.splice(p.delegateCount++, 0, n) : p.push(n),
                        K.event.global[l] = !0;
                    a = null
                }
            },
            global: {},
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q, r = K.hasData(a) && K._data(a);
                if (r && (m = r.events)) {
                    for (b = K.trim(ha(b || "")).split(" "), f = 0; f < b.length; f++) if (g = _.exec(b[f]) || [], h = i = g[1], j = g[2], h) {
                        for (n = K.event.special[h] || {},
                                 h = (d ? n.delegateType: n.bindType) || h, p = m[h] || [], k = p.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, l = 0; l < p.length; l++) q = p[l],
                            !(!e && i !== q.origType || c && c.guid !== q.guid || j && !j.test(q.namespace) || d && d !== q.selector && ("**" !== d || !q.selector) || (p.splice(l--, 1), q.selector && p.delegateCount--, !n.remove || !n.remove.call(a, q)));
                        0 === p.length && k !== p.length && ((!n.teardown || n.teardown.call(a, j) === !1) && K.removeEvent(a, h, r.handle), delete m[h])
                    } else for (h in m) K.event.remove(a, h + b[f], c, d, !0);
                    K.isEmptyObject(m) && (o = r.handle, o && (o.elem = null), K.removeData(a, ["events", "handle"], !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(c, d, e, f) {
                if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
                    var g, h, i, j, k, l, m, n, o, p, q = c.type || c,
                        r = [];
                    if (da.test(q + K.event.triggered)) return;
                    if (q.indexOf("!") >= 0 && (q = q.slice(0, -1), h = !0), q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), (!e || K.event.customEvent[q]) && !K.event.global[q]) return;
                    if (c = "object" == typeof c ? c[K.expando] ? c: new K.Event(q, c) : new K.Event(q), c.type = q, c.isTrigger = !0, c.exclusive = h, c.namespace = r.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, l = q.indexOf(":") < 0 ? "on" + q: "", !e) {
                        g = K.cache;
                        for (i in g) g[i].events && g[i].events[q] && K.event.trigger(c, d, g[i].handle.elem, !0);
                        return
                    }
                    if (c.result = b, c.target || (c.target = e), d = null != d ? K.makeArray(d) : [], d.unshift(c), m = K.event.special[q] || {},
                        m.trigger && m.trigger.apply(e, d) === !1) return;
                    if (o = [[e, m.bindType || q]], !f && !m.noBubble && !K.isWindow(e)) {
                        for (p = m.delegateType || q, j = da.test(p + q) ? e: e.parentNode, k = null; j; j = j.parentNode) o.push([j, p]),
                            k = j;
                        k && k === e.ownerDocument && o.push([k.defaultView || k.parentWindow || a, p])
                    }
                    for (i = 0; i < o.length && !c.isPropagationStopped(); i++) j = o[i][0],
                        c.type = o[i][1],
                        n = (K._data(j, "events") || {})[c.type] && K._data(j, "handle"),
                    n && n.apply(j, d),
                        n = l && j[l],
                    n && K.acceptData(j) && n.apply(j, d) === !1 && c.preventDefault();
                    return c.type = q,
                        !(f || c.isDefaultPrevented() || m._default && m._default.apply(e.ownerDocument, d) !== !1 || "click" === q && K.nodeName(e, "a") || !K.acceptData(e) || !l || !e[q] || ("focus" === q || "blur" === q) && 0 === c.target.offsetWidth || K.isWindow(e) || (k = e[l], k && (e[l] = null), K.event.triggered = q, e[q](), K.event.triggered = b, !k || !(e[l] = k))),
                        c.result
                }
            },
            dispatch: function(c) {
                c = K.event.fix(c || a.event);
                var d, e, f, g, h, i, j, k, l, m, n = (K._data(this, "events") || {})[c.type] || [],
                    o = n.delegateCount,
                    p = [].slice.call(arguments, 0),
                    q = !c.exclusive && !c.namespace,
                    r = [];
                if (p[0] = c, c.delegateTarget = this, o && !c.target.disabled && (!c.button || "click" !== c.type)) for (g = K(this), g.context = this.ownerDocument || this, f = c.target; f != this; f = f.parentNode || this) {
                    for (i = {},
                             k = [], g[0] = f, d = 0; o > d; d++) l = n[d],
                        m = l.selector,
                    i[m] === b && (i[m] = l.quick ? ga(f, l.quick) : g.is(m)),
                    i[m] && k.push(l);
                    k.length && r.push({
                        elem: f,
                        matches: k
                    })
                }
                for (n.length > o && r.push({
                    elem: this,
                    matches: n.slice(o)
                }), d = 0; d < r.length && !c.isPropagationStopped(); d++) for (j = r[d], c.currentTarget = j.elem, e = 0; e < j.matches.length && !c.isImmediatePropagationStopped(); e++) l = j.matches[e],
                (q || !c.namespace && !l.namespace || c.namespace_re && c.namespace_re.test(l.namespace)) && (c.data = l.data, c.handleObj = l, h = ((K.event.special[l.origType] || {}).handle || l.handler).apply(j.elem, p), h !== b && (c.result = h, h === !1 && (c.preventDefault(), c.stopPropagation())));
                return c.result
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode: b.keyCode),
                        a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, c) {
                    var d, e, f, g = c.button,
                        h = c.fromElement;
                    return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || H, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)),
                    !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement: h),
                    !a.which && g !== b && (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
                        a
                }
            },
            fix: function(a) {
                if (a[K.expando]) return a;
                var c, d, e = a,
                    f = K.event.fixHooks[a.type] || {},
                    g = f.props ? this.props.concat(f.props) : this.props;
                for (a = K.Event(e), c = g.length; c;) d = g[--c],
                    a[d] = e[d];
                return a.target || (a.target = e.srcElement || H),
                3 === a.target.nodeType && (a.target = a.target.parentNode),
                a.metaKey === b && (a.metaKey = a.ctrlKey),
                    f.filter ? f.filter(a, e) : a
            },
            special: {
                ready: {
                    setup: K.bindReady
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
                    setup: function(a, b, c) {
                        K.isWindow(this) && (this.onbeforeunload = c)
                    },
                    teardown: function(a, b) {
                        this.onbeforeunload === b && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = K.extend(new K.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? K.event.trigger(e, null, b) : K.event.dispatch.call(b, e),
                e.isDefaultPrevented() && c.preventDefault()
            }
        },
            K.event.handle = K.event.dispatch,
            K.removeEvent = H.removeEventListener ?
                function(a, b, c) {
                    a.removeEventListener && a.removeEventListener(b, c, !1)
                }: function(a, b, c) {
                a.detachEvent && a.detachEvent("on" + b, c)
            },
            K.Event = function(a, b) {
                return this instanceof K.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? B: C) : this.type = a, b && K.extend(this, b), this.timeStamp = a && a.timeStamp || K.now(), this[K.expando] = !0, void 0) : new K.Event(a, b)
            },
            K.Event.prototype = {
                preventDefault: function() {
                    this.isDefaultPrevented = B;
                    var a = this.originalEvent; ! a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
                },
                stopPropagation: function() {
                    this.isPropagationStopped = B;
                    var a = this.originalEvent; ! a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
                },
                stopImmediatePropagation: function() {
                    this.isImmediatePropagationStopped = B,
                        this.stopPropagation()
                },
                isDefaultPrevented: C,
                isPropagationStopped: C,
                isImmediatePropagationStopped: C
            },
            K.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout"
                },
                function(a, b) {
                    K.event.special[a] = {
                        delegateType: b,
                        bindType: b,
                        handle: function(a) {
                            {
                                var c, d = this,
                                    e = a.relatedTarget,
                                    f = a.handleObj;
                                f.selector
                            }
                            return (!e || e !== d && !K.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b),
                                c
                        }
                    }
                }),
        K.support.submitBubbles || (K.event.special.submit = {
            setup: function() {
                return K.nodeName(this, "form") ? !1 : void K.event.add(this, "click._submit keypress._submit",
                    function(a) {
                        var c = a.target,
                            d = K.nodeName(c, "input") || K.nodeName(c, "button") ? c.form: b;
                        d && !d._submit_attached && (K.event.add(d, "submit._submit",
                            function(a) {
                                this.parentNode && !a.isTrigger && K.event.simulate("submit", this.parentNode, a, !0)
                            }), d._submit_attached = !0)
                    })
            },
            teardown: function() {
                return K.nodeName(this, "form") ? !1 : void K.event.remove(this, "._submit")
            }
        }),
        K.support.changeBubbles || (K.event.special.change = {
            setup: function() {
                return $.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (K.event.add(this, "propertychange._change",
                    function(a) {
                        "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                    }), K.event.add(this, "click._change",
                    function(a) {
                        this._just_changed && !a.isTrigger && (this._just_changed = !1, K.event.simulate("change", this, a, !0))
                    })), !1) : void K.event.add(this, "beforeactivate._change",
                    function(a) {
                        var b = a.target;
                        $.test(b.nodeName) && !b._change_attached && (K.event.add(b, "change._change",
                            function(a) {
                                this.parentNode && !a.isSimulated && !a.isTrigger && K.event.simulate("change", this.parentNode, a, !0)
                            }), b._change_attached = !0)
                    })
            },
            handle: function(a) {
                var b = a.target;
                return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return K.event.remove(this, "._change"),
                    $.test(this.nodeName)
            }
        }),
        K.support.focusinBubbles || K.each({
                focus: "focusin",
                blur: "focusout"
            },
            function(a, b) {
                var c = 0,
                    d = function(a) {
                        K.event.simulate(b, a.target, K.event.fix(a), !0)
                    };
                K.event.special[b] = {
                    setup: function() {
                        0 === c++&&H.addEventListener(a, d, !0)
                    },
                    teardown: function() {
                        0 === --c && H.removeEventListener(a, d, !0)
                    }
                }
            }),
            K.fn.extend({
                on: function(a, c, d, e, f) {
                    var g, h;
                    if ("object" == typeof a) {
                        "string" != typeof c && (d = c, c = b);
                        for (h in a) this.on(h, c, d, a[h], f);
                        return this
                    }
                    if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = C;
                    else if (!e) return this;
                    return 1 === f && (g = e, e = function(a) {
                        return K().off(a),
                            g.apply(this, arguments)
                    },
                        e.guid = g.guid || (g.guid = K.guid++)),
                        this.each(function() {
                            K.event.add(this, a, e, d, c)
                        })
                },
                one: function(a, b, c, d) {
                    return this.on.call(this, a, b, c, d, 1)
                },
                off: function(a, c, d) {
                    if (a && a.preventDefault && a.handleObj) {
                        var e = a.handleObj;
                        return K(a.delegateTarget).off(e.namespace ? e.type + "." + e.namespace: e.type, e.selector, e.handler),
                            this
                    }
                    if ("object" == typeof a) {
                        for (var f in a) this.off(f, c, a[f]);
                        return this
                    }
                    return (c === !1 || "function" == typeof c) && (d = c, c = b),
                    d === !1 && (d = C),
                        this.each(function() {
                            K.event.remove(this, a, d, c)
                        })
                },
                bind: function(a, b, c) {
                    return this.on(a, null, b, c)
                },
                unbind: function(a, b) {
                    return this.off(a, null, b)
                },
                live: function(a, b, c) {
                    return K(this.context).on(a, this.selector, b, c),
                        this
                },
                die: function(a, b) {
                    return K(this.context).off(a, this.selector || "**", b),
                        this
                },
                delegate: function(a, b, c, d) {
                    return this.on(b, a, c, d)
                },
                undelegate: function(a, b, c) {
                    return 1 == arguments.length ? this.off(a, "**") : this.off(b, a, c)
                },
                trigger: function(a, b) {
                    return this.each(function() {
                        K.event.trigger(a, b, this)
                    })
                },
                triggerHandler: function(a, b) {
                    return this[0] ? K.event.trigger(a, b, this[0], !0) : void 0
                },
                toggle: function(a) {
                    var b = arguments,
                        c = a.guid || K.guid++,
                        d = 0,
                        e = function(c) {
                            var e = (K._data(this, "lastToggle" + a.guid) || 0) % d;
                            return K._data(this, "lastToggle" + a.guid, e + 1),
                                c.preventDefault(),
                            b[e].apply(this, arguments) || !1
                        };
                    for (e.guid = c; d < b.length;) b[d++].guid = c;
                    return this.click(e)
                },
                hover: function(a, b) {
                    return this.mouseenter(a).mouseleave(b || a)
                }
            }),
            K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
                function(a, b) {
                    K.fn[b] = function(a, c) {
                        return null == c && (c = a, a = null),
                            arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
                    },
                    K.attrFn && (K.attrFn[b] = !0),
                    ba.test(b) && (K.event.fixHooks[b] = K.event.keyHooks),
                    ca.test(b) && (K.event.fixHooks[b] = K.event.mouseHooks)
                }),
            function() {
                function a(a, b, c, d, f, g) {
                    for (var h = 0,
                             i = d.length; i > h; h++) {
                        var j = d[h];
                        if (j) {
                            var k = !1;
                            for (j = j[a]; j;) {
                                if (j[e] === c) {
                                    k = d[j.sizset];
                                    break
                                }
                                if (1 === j.nodeType) if (g || (j[e] = c, j.sizset = h), "string" != typeof b) {
                                    if (j === b) {
                                        k = !0;
                                        break
                                    }
                                } else if (m.filter(b, [j]).length > 0) {
                                    k = j;
                                    break
                                }
                                j = j[a]
                            }
                            d[h] = k
                        }
                    }
                }
                function c(a, b, c, d, f, g) {
                    for (var h = 0,
                             i = d.length; i > h; h++) {
                        var j = d[h];
                        if (j) {
                            var k = !1;
                            for (j = j[a]; j;) {
                                if (j[e] === c) {
                                    k = d[j.sizset];
                                    break
                                }
                                if (1 === j.nodeType && !g && (j[e] = c, j.sizset = h), j.nodeName.toLowerCase() === b) {
                                    k = j;
                                    break
                                }
                                j = j[a]
                            }
                            d[h] = k
                        }
                    }
                }
                var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                    e = "sizcache" + (Math.random() + "").replace(".", ""),
                    f = 0,
                    g = Object.prototype.toString,
                    h = !1,
                    i = !0,
                    j = /\\/g,
                    k = /\r\n/g,
                    l = /\W/; [0, 0].sort(function() {
                    return i = !1,
                        0
                });
                var m = function(a, b, c, e) {
                    c = c || [],
                        b = b || H;
                    var f = b;
                    if (1 !== b.nodeType && 9 !== b.nodeType) return [];
                    if (!a || "string" != typeof a) return c;
                    var h, i, j, k, l, n, q, r, t = !0,
                        u = m.isXML(b),
                        v = [],
                        x = a;
                    do
                        if (d.exec(""), h = d.exec(x), h && (x = h[3], v.push(h[1]), h[2])) {
                            k = h[3];
                            break
                        }
                    while (h);
                    if (v.length > 1 && p.exec(a)) if (2 === v.length && o.relative[v[0]]) i = w(v[0] + v[1], b, e);
                    else for (i = o.relative[v[0]] ? [b] : m(v.shift(), b); v.length;) a = v.shift(),
                        o.relative[a] && (a += v.shift()),
                            i = w(a, i, e);
                    else if (!e && v.length > 1 && 9 === b.nodeType && !u && o.match.ID.test(v[0]) && !o.match.ID.test(v[v.length - 1]) && (l = m.find(v.shift(), b, u), b = l.expr ? m.filter(l.expr, l.set)[0] : l.set[0]), b) for (l = e ? {
                        expr: v.pop(),
                        set: s(e)
                    }: m.find(v.pop(), 1 !== v.length || "~" !== v[0] && "+" !== v[0] || !b.parentNode ? b: b.parentNode, u), i = l.expr ? m.filter(l.expr, l.set) : l.set, v.length > 0 ? j = s(i) : t = !1; v.length;) n = v.pop(),
                        q = n,
                        o.relative[n] ? q = v.pop() : n = "",
                    null == q && (q = b),
                        o.relative[n](j, q, u);
                    else j = v = [];
                    if (j || (j = i), j || m.error(n || a), "[object Array]" === g.call(j)) if (t) if (b && 1 === b.nodeType) for (r = 0; null != j[r]; r++) j[r] && (j[r] === !0 || 1 === j[r].nodeType && m.contains(b, j[r])) && c.push(i[r]);
                    else for (r = 0; null != j[r]; r++) j[r] && 1 === j[r].nodeType && c.push(i[r]);
                    else c.push.apply(c, j);
                    else s(j, c);
                    return k && (m(k, f, c, e), m.uniqueSort(c)),
                        c
                };
                m.uniqueSort = function(a) {
                    if (u && (h = i, a.sort(u), h)) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1);
                    return a
                },
                    m.matches = function(a, b) {
                        return m(a, null, null, b)
                    },
                    m.matchesSelector = function(a, b) {
                        return m(b, null, null, [a]).length > 0
                    },
                    m.find = function(a, b, c) {
                        var d, e, f, g, h, i;
                        if (!a) return [];
                        for (e = 0, f = o.order.length; f > e; e++) if (h = o.order[e], (g = o.leftMatch[h].exec(a)) && (i = g[1], g.splice(1, 1), "\\" !== i.substr(i.length - 1) && (g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c), null != d))) {
                            a = a.replace(o.match[h], "");
                            break
                        }
                        return d || (d = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : []),
                        {
                            set: d,
                            expr: a
                        }
                    },
                    m.filter = function(a, c, d, e) {
                        for (var f, g, h, i, j, k, l, n, p, q = a,
                                 r = [], s = c, t = c && c[0] && m.isXML(c[0]); a && c.length;) {
                            for (h in o.filter) if (null != (f = o.leftMatch[h].exec(a)) && f[2]) {
                                if (k = o.filter[h], l = f[1], g = !1, f.splice(1, 1), "\\" === l.substr(l.length - 1)) continue;
                                if (s === r && (r = []), o.preFilter[h]) if (f = o.preFilter[h](f, s, d, r, e, t)) {
                                    if (f === !0) continue
                                } else g = i = !0;
                                if (f) for (n = 0; null != (j = s[n]); n++) j && (i = k(j, f, n, s), p = e ^ i, d && null != i ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                                if (i !== b) {
                                    if (d || (s = r), a = a.replace(o.match[h], ""), !g) return [];
                                    break
                                }
                            }
                            if (a === q) {
                                if (null != g) break;
                                m.error(a)
                            }
                            q = a
                        }
                        return s
                    },
                    m.error = function(a) {
                        throw new Error("Syntax error, unrecognized expression: " + a)
                    };
                var n = m.getText = function(a) {
                        var b, c, d = a.nodeType,
                            e = "";
                        if (d) {
                            if (1 === d || 9 === d) {
                                if ("string" == typeof a.textContent) return a.textContent;
                                if ("string" == typeof a.innerText) return a.innerText.replace(k, "");
                                for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
                            } else if (3 === d || 4 === d) return a.nodeValue
                        } else for (b = 0; c = a[b]; b++) 8 !== c.nodeType && (e += n(c));
                        return e
                    },
                    o = m.selectors = {
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
                            href: function(a) {
                                return a.getAttribute("href")
                            },
                            type: function(a) {
                                return a.getAttribute("type")
                            }
                        },
                        relative: {
                            "+": function(a, b) {
                                var c = "string" == typeof b,
                                    d = c && !l.test(b),
                                    e = c && !d;
                                d && (b = b.toLowerCase());
                                for (var f, g = 0,
                                         h = a.length; h > g; g++) if (f = a[g]) {
                                    for (; (f = f.previousSibling) && 1 !== f.nodeType;);
                                    a[g] = e || f && f.nodeName.toLowerCase() === b ? f || !1 : f === b
                                }
                                e && m.filter(b, a, !0)
                            },
                            ">": function(a, b) {
                                var c, d = "string" == typeof b,
                                    e = 0,
                                    f = a.length;
                                if (d && !l.test(b)) {
                                    for (b = b.toLowerCase(); f > e; e++) if (c = a[e]) {
                                        var g = c.parentNode;
                                        a[e] = g.nodeName.toLowerCase() === b ? g: !1
                                    }
                                } else {
                                    for (; f > e; e++) c = a[e],
                                    c && (a[e] = d ? c.parentNode: c.parentNode === b);
                                    d && m.filter(b, a, !0)
                                }
                            },
                            "": function(b, d, e) {
                                var g, h = f++,
                                    i = a;
                                "string" == typeof d && !l.test(d) && (d = d.toLowerCase(), g = d, i = c),
                                    i("parentNode", d, h, b, g, e)
                            },
                            "~": function(b, d, e) {
                                var g, h = f++,
                                    i = a;
                                "string" == typeof d && !l.test(d) && (d = d.toLowerCase(), g = d, i = c),
                                    i("previousSibling", d, h, b, g, e)
                            }
                        },
                        find: {
                            ID: function(a, b, c) {
                                if ("undefined" != typeof b.getElementById && !c) {
                                    var d = b.getElementById(a[1]);
                                    return d && d.parentNode ? [d] : []
                                }
                            },
                            NAME: function(a, b) {
                                if ("undefined" != typeof b.getElementsByName) {
                                    for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length; f > e; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                                    return 0 === c.length ? null: c
                                }
                            },
                            TAG: function(a, b) {
                                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a[1]) : void 0
                            }
                        },
                        preFilter: {
                            CLASS: function(a, b, c, d, e, f) {
                                if (a = " " + a[1].replace(j, "") + " ", f) return a;
                                for (var g, h = 0; null != (g = b[h]); h++) g && (e ^ (g.className && (" " + g.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(g) : c && (b[h] = !1));
                                return ! 1
                            },
                            ID: function(a) {
                                return a[1].replace(j, "")
                            },
                            TAG: function(a, b) {
                                return a[1].replace(j, "").toLowerCase()
                            },
                            CHILD: function(a) {
                                if ("nth" === a[1]) {
                                    a[2] || m.error(a[0]),
                                        a[2] = a[2].replace(/^\+|\s*/g, "");
                                    var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                                    a[2] = b[1] + (b[2] || 1) - 0,
                                        a[3] = b[3] - 0
                                } else a[2] && m.error(a[0]);
                                return a[0] = f++,
                                    a
                            },
                            ATTR: function(a, b, c, d, e, f) {
                                var g = a[1] = a[1].replace(j, "");
                                return ! f && o.attrMap[g] && (a[1] = o.attrMap[g]),
                                    a[4] = (a[4] || a[5] || "").replace(j, ""),
                                "~=" === a[2] && (a[4] = " " + a[4] + " "),
                                    a
                            },
                            PSEUDO: function(a, b, c, e, f) {
                                if ("not" === a[1]) {
                                    if (! ((d.exec(a[3]) || "").length > 1 || /^\w/.test(a[3]))) {
                                        var g = m.filter(a[3], b, c, !0 ^ f);
                                        return c || e.push.apply(e, g),
                                            !1
                                    }
                                    a[3] = m(a[3], null, null, b)
                                } else if (o.match.POS.test(a[0]) || o.match.CHILD.test(a[0])) return ! 0;
                                return a
                            },
                            POS: function(a) {
                                return a.unshift(!0),
                                    a
                            }
                        },
                        filters: {
                            enabled: function(a) {
                                return a.disabled === !1 && "hidden" !== a.type
                            },
                            disabled: function(a) {
                                return a.disabled === !0
                            },
                            checked: function(a) {
                                return a.checked === !0
                            },
                            selected: function(a) {
                                return a.parentNode && a.parentNode.selectedIndex,
                                a.selected === !0
                            },
                            parent: function(a) {
                                return !! a.firstChild
                            },
                            empty: function(a) {
                                return ! a.firstChild
                            },
                            has: function(a, b, c) {
                                return !! m(c[3], a).length
                            },
                            header: function(a) {
                                return /h\d/i.test(a.nodeName)
                            },
                            text: function(a) {
                                var b = a.getAttribute("type"),
                                    c = a.type;
                                return "input" === a.nodeName.toLowerCase() && "text" === c && (b === c || null === b)
                            },
                            radio: function(a) {
                                return "input" === a.nodeName.toLowerCase() && "radio" === a.type
                            },
                            checkbox: function(a) {
                                return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type
                            },
                            file: function(a) {
                                return "input" === a.nodeName.toLowerCase() && "file" === a.type
                            },
                            password: function(a) {
                                return "input" === a.nodeName.toLowerCase() && "password" === a.type
                            },
                            submit: function(a) {
                                var b = a.nodeName.toLowerCase();
                                return ("input" === b || "button" === b) && "submit" === a.type
                            },
                            image: function(a) {
                                return "input" === a.nodeName.toLowerCase() && "image" === a.type
                            },
                            reset: function(a) {
                                var b = a.nodeName.toLowerCase();
                                return ("input" === b || "button" === b) && "reset" === a.type
                            },
                            button: function(a) {
                                var b = a.nodeName.toLowerCase();
                                return "input" === b && "button" === a.type || "button" === b
                            },
                            input: function(a) {
                                return /input|select|textarea|button/i.test(a.nodeName)
                            },
                            focus: function(a) {
                                return a === a.ownerDocument.activeElement
                            }
                        },
                        setFilters: {
                            first: function(a, b) {
                                return 0 === b
                            },
                            last: function(a, b, c, d) {
                                return b === d.length - 1
                            },
                            even: function(a, b) {
                                return b % 2 === 0
                            },
                            odd: function(a, b) {
                                return b % 2 === 1
                            },
                            lt: function(a, b, c) {
                                return b < c[3] - 0
                            },
                            gt: function(a, b, c) {
                                return b > c[3] - 0
                            },
                            nth: function(a, b, c) {
                                return c[3] - 0 === b
                            },
                            eq: function(a, b, c) {
                                return c[3] - 0 === b
                            }
                        },
                        filter: {
                            PSEUDO: function(a, b, c, d) {
                                var e = b[1],
                                    f = o.filters[e];
                                if (f) return f(a, c, b, d);
                                if ("contains" === e) return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                                if ("not" === e) {
                                    for (var g = b[3], h = 0, i = g.length; i > h; h++) if (g[h] === a) return ! 1;
                                    return ! 0
                                }
                                m.error(e)
                            },
                            CHILD: function(a, b) {
                                var c, d, f, g, h, i, j = b[1],
                                    k = a;
                                switch (j) {
                                    case "only":
                                    case "first":
                                        for (; k = k.previousSibling;) if (1 === k.nodeType) return ! 1;
                                        if ("first" === j) return ! 0;
                                        k = a;
                                    case "last":
                                        for (; k = k.nextSibling;) if (1 === k.nodeType) return ! 1;
                                        return ! 0;
                                    case "nth":
                                        if (c = b[2], d = b[3], 1 === c && 0 === d) return ! 0;
                                        if (f = b[0], g = a.parentNode, g && (g[e] !== f || !a.nodeIndex)) {
                                            for (h = 0, k = g.firstChild; k; k = k.nextSibling) 1 === k.nodeType && (k.nodeIndex = ++h);
                                            g[e] = f
                                        }
                                        return i = a.nodeIndex - d,
                                            0 === c ? 0 === i: i % c === 0 && i / c >= 0
                                }
                            },
                            ID: function(a, b) {
                                return 1 === a.nodeType && a.getAttribute("id") === b
                            },
                            TAG: function(a, b) {
                                return "*" === b && 1 === a.nodeType || !!a.nodeName && a.nodeName.toLowerCase() === b
                            },
                            CLASS: function(a, b) {
                                return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                            },
                            ATTR: function(a, b) {
                                var c = b[1],
                                    d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c),
                                    e = d + "",
                                    f = b[2],
                                    g = b[4];
                                return null == d ? "!=" === f: !f && m.attr ? null != d: "=" === f ? e === g: "*=" === f ? e.indexOf(g) >= 0 : "~=" === f ? (" " + e + " ").indexOf(g) >= 0 : g ? "!=" === f ? e !== g: "^=" === f ? 0 === e.indexOf(g) : "$=" === f ? e.substr(e.length - g.length) === g: "|=" === f ? e === g || e.substr(0, g.length + 1) === g + "-": !1 : e && d !== !1
                            },
                            POS: function(a, b, c, d) {
                                var e = b[2],
                                    f = o.setFilters[e];
                                return f ? f(a, c, b, d) : void 0
                            }
                        }
                    },
                    p = o.match.POS,
                    q = function(a, b) {
                        return "\\" + (b - 0 + 1)
                    };
                for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source),
                    o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
                var s = function(a, b) {
                    return a = Array.prototype.slice.call(a, 0),
                        b ? (b.push.apply(b, a), b) : a
                };
                try {
                    Array.prototype.slice.call(H.documentElement.childNodes, 0)[0].nodeType
                } catch(t) {
                    s = function(a, b) {
                        var c = 0,
                            d = b || [];
                        if ("[object Array]" === g.call(a)) Array.prototype.push.apply(d, a);
                        else if ("number" == typeof a.length) for (var e = a.length; e > c; c++) d.push(a[c]);
                        else for (; a[c]; c++) d.push(a[c]);
                        return d
                    }
                }
                var u, v;
                H.documentElement.compareDocumentPosition ? u = function(a, b) {
                    return a === b ? (h = !0, 0) : a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
                }: (u = function(a, b) {
                    if (a === b) return h = !0,
                        0;
                    if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
                    var c, d, e = [],
                        f = [],
                        g = a.parentNode,
                        i = b.parentNode,
                        j = g;
                    if (g === i) return v(a, b);
                    if (!g) return - 1;
                    if (!i) return 1;
                    for (; j;) e.unshift(j),
                        j = j.parentNode;
                    for (j = i; j;) f.unshift(j),
                        j = j.parentNode;
                    c = e.length,
                        d = f.length;
                    for (var k = 0; c > k && d > k; k++) if (e[k] !== f[k]) return v(e[k], f[k]);
                    return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
                },
                    v = function(a, b, c) {
                        if (a === b) return c;
                        for (var d = a.nextSibling; d;) {
                            if (d === b) return - 1;
                            d = d.nextSibling
                        }
                        return 1
                    }),
                    function() {
                        var a = H.createElement("div"),
                            c = "script" + (new Date).getTime(),
                            d = H.documentElement;
                        a.innerHTML = "<a name='" + c + "'/>",
                            d.insertBefore(a, d.firstChild),
                        H.getElementById(c) && (o.find.ID = function(a, c, d) {
                            if ("undefined" != typeof c.getElementById && !d) {
                                var e = c.getElementById(a[1]);
                                return e ? e.id === a[1] || "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b: []
                            }
                        },
                            o.filter.ID = function(a, b) {
                                var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                                return 1 === a.nodeType && c && c.nodeValue === b
                            }),
                            d.removeChild(a),
                            d = a = null
                    } (),
                    function() {
                        var a = H.createElement("div");
                        a.appendChild(H.createComment("")),
                        a.getElementsByTagName("*").length > 0 && (o.find.TAG = function(a, b) {
                            var c = b.getElementsByTagName(a[1]);
                            if ("*" === a[1]) {
                                for (var d = [], e = 0; c[e]; e++) 1 === c[e].nodeType && d.push(c[e]);
                                c = d
                            }
                            return c
                        }),
                            a.innerHTML = "<a href='#'></a>",
                        a.firstChild && "undefined" != typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (o.attrHandle.href = function(a) {
                            return a.getAttribute("href", 2)
                        }),
                            a = null
                    } (),
                H.querySelectorAll &&
                function() {
                    var a = m,
                        b = H.createElement("div"),
                        c = "__sizzle__";
                    if (b.innerHTML = "<p class='TEST'></p>", !b.querySelectorAll || 0 !== b.querySelectorAll(".TEST").length) {
                        m = function(b, d, e, f) {
                            if (d = d || H, !f && !m.isXML(d)) {
                                var g = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                                if (g && (1 === d.nodeType || 9 === d.nodeType)) {
                                    if (g[1]) return s(d.getElementsByTagName(b), e);
                                    if (g[2] && o.find.CLASS && d.getElementsByClassName) return s(d.getElementsByClassName(g[2]), e)
                                }
                                if (9 === d.nodeType) {
                                    if ("body" === b && d.body) return s([d.body], e);
                                    if (g && g[3]) {
                                        var h = d.getElementById(g[3]);
                                        if (!h || !h.parentNode) return s([], e);
                                        if (h.id === g[3]) return s([h], e)
                                    }
                                    try {
                                        return s(d.querySelectorAll(b), e)
                                    } catch(i) {}
                                } else if (1 === d.nodeType && "object" !== d.nodeName.toLowerCase()) {
                                    var j = d,
                                        k = d.getAttribute("id"),
                                        l = k || c,
                                        n = d.parentNode,
                                        p = /^\s*[+~]/.test(b);
                                    k ? l = l.replace(/'/g, "\\$&") : d.setAttribute("id", l),
                                    p && n && (d = d.parentNode);
                                    try {
                                        if (!p || n) return s(d.querySelectorAll("[id='" + l + "'] " + b), e)
                                    } catch(q) {} finally {
                                        k || j.removeAttribute("id")
                                    }
                                }
                            }
                            return a(b, d, e, f)
                        };
                        for (var d in a) m[d] = a[d];
                        b = null
                    }
                } (),
                    function() {
                        var a = H.documentElement,
                            b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
                        if (b) {
                            var c = !b.call(H.createElement("div"), "div"),
                                d = !1;
                            try {
                                b.call(H.documentElement, "[test!='']:sizzle")
                            } catch(e) {
                                d = !0
                            }
                            m.matchesSelector = function(a, e) {
                                if (e = e.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !m.isXML(a)) try {
                                    if (d || !o.match.PSEUDO.test(e) && !/!=/.test(e)) {
                                        var f = b.call(a, e);
                                        if (f || !c || a.document && 11 !== a.document.nodeType) return f
                                    }
                                } catch(g) {}
                                return m(e, null, null, [a]).length > 0
                            }
                        }
                    } (),
                    function() {
                        var a = H.createElement("div");
                        if (a.innerHTML = "<div class='test e'></div><div class='test'></div>", a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length) {
                            if (a.lastChild.className = "e", 1 === a.getElementsByClassName("e").length) return;
                            o.order.splice(1, 0, "CLASS"),
                                o.find.CLASS = function(a, b, c) {
                                    return "undefined" == typeof b.getElementsByClassName || c ? void 0 : b.getElementsByClassName(a[1])
                                },
                                a = null
                        }
                    } (),
                    m.contains = H.documentElement.contains ?
                        function(a, b) {
                            return a !== b && (a.contains ? a.contains(b) : !0)
                        }: H.documentElement.compareDocumentPosition ?
                        function(a, b) {
                            return !! (16 & a.compareDocumentPosition(b))
                        }: function() {
                        return ! 1
                    },
                    m.isXML = function(a) {
                        var b = (a ? a.ownerDocument || a: 0).documentElement;
                        return b ? "HTML" !== b.nodeName: !1
                    };
                var w = function(a, b, c) {
                    for (var d, e = [], f = "", g = b.nodeType ? [b] : b; d = o.match.PSEUDO.exec(a);) f += d[0],
                        a = a.replace(o.match.PSEUDO, "");
                    a = o.relative[a] ? a + "*": a;
                    for (var h = 0,
                             i = g.length; i > h; h++) m(a, g[h], e, c);
                    return m.filter(f, e)
                };
                m.attr = K.attr,
                    m.selectors.attrMap = {},
                    K.find = m,
                    K.expr = m.selectors,
                    K.expr[":"] = K.expr.filters,
                    K.unique = m.uniqueSort,
                    K.text = m.getText,
                    K.isXMLDoc = m.isXML,
                    K.contains = m.contains
            } ();
        var ia = /Until$/,
            ja = /^(?:parents|prevUntil|prevAll)/,
            ka = /,/,
            la = /^.[^:#\[\.,]*$/,
            ma = Array.prototype.slice,
            na = K.expr.match.POS,
            oa = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        K.fn.extend({
            find: function(a) {
                var b, c, d = this;
                if ("string" != typeof a) return K(a).filter(function() {
                    for (b = 0, c = d.length; c > b; b++) if (K.contains(d[b], this)) return ! 0
                });
                var e, f, g, h = this.pushStack("", "find", a);
                for (b = 0, c = this.length; c > b; b++) if (e = h.length, K.find(a, this[b], h), b > 0) for (f = e; f < h.length; f++) for (g = 0; e > g; g++) if (h[g] === h[f]) {
                    h.splice(f--, 1);
                    break
                }
                return h
            },
            has: function(a) {
                var b = K(a);
                return this.filter(function() {
                    for (var a = 0,
                             c = b.length; c > a; a++) if (K.contains(this, b[a])) return ! 0
                })
            },
            not: function(a) {
                return this.pushStack(z(this, a, !1), "not", a)
            },
            filter: function(a) {
                return this.pushStack(z(this, a, !0), "filter", a)
            },
            is: function(a) {
                return !! a && ("string" == typeof a ? na.test(a) ? K(a, this.context).index(this[0]) >= 0 : K.filter(a, this).length > 0 : this.filter(a).length > 0)
            },
            closest: function(a, b) {
                var c, d, e = [],
                    f = this[0];
                if (K.isArray(a)) {
                    for (var g = 1; f && f.ownerDocument && f !== b;) {
                        for (c = 0; c < a.length; c++) K(f).is(a[c]) && e.push({
                            selector: a[c],
                            elem: f,
                            level: g
                        });
                        f = f.parentNode,
                            g++
                    }
                    return e
                }
                var h = na.test(a) || "string" != typeof a ? K(a, b || this.context) : 0;
                for (c = 0, d = this.length; d > c; c++) for (f = this[c]; f;) {
                    if (h ? h.index(f) > -1 : K.find.matchesSelector(f, a)) {
                        e.push(f);
                        break
                    }
                    if (f = f.parentNode, !f || !f.ownerDocument || f === b || 11 === f.nodeType) break
                }
                return e = e.length > 1 ? K.unique(e) : e,
                    this.pushStack(e, "closest", a)
            },
            index: function(a) {
                return a ? "string" == typeof a ? K.inArray(this[0], K(a)) : K.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length: -1
            },
            add: function(a, b) {
                var c = "string" == typeof a ? K(a, b) : K.makeArray(a && a.nodeType ? [a] : a),
                    d = K.merge(this.get(), c);
                return this.pushStack(A(c[0]) || A(d[0]) ? d: K.unique(d))
            },
            andSelf: function() {
                return this.add(this.prevObject)
            }
        }),
            K.each({
                    parent: function(a) {
                        var b = a.parentNode;
                        return b && 11 !== b.nodeType ? b: null
                    },
                    parents: function(a) {
                        return K.dir(a, "parentNode")
                    },
                    parentsUntil: function(a, b, c) {
                        return K.dir(a, "parentNode", c)
                    },
                    next: function(a) {
                        return K.nth(a, 2, "nextSibling")
                    },
                    prev: function(a) {
                        return K.nth(a, 2, "previousSibling")
                    },
                    nextAll: function(a) {
                        return K.dir(a, "nextSibling")
                    },
                    prevAll: function(a) {
                        return K.dir(a, "previousSibling")
                    },
                    nextUntil: function(a, b, c) {
                        return K.dir(a, "nextSibling", c)
                    },
                    prevUntil: function(a, b, c) {
                        return K.dir(a, "previousSibling", c)
                    },
                    siblings: function(a) {
                        return K.sibling(a.parentNode.firstChild, a)
                    },
                    children: function(a) {
                        return K.sibling(a.firstChild)
                    },
                    contents: function(a) {
                        return K.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document: K.makeArray(a.childNodes)
                    }
                },
                function(a, b) {
                    K.fn[a] = function(c, d) {
                        var e = K.map(this, b, c);
                        return ia.test(a) || (d = c),
                        d && "string" == typeof d && (e = K.filter(d, e)),
                            e = this.length > 1 && !oa[a] ? K.unique(e) : e,
                        (this.length > 1 || ka.test(d)) && ja.test(a) && (e = e.reverse()),
                            this.pushStack(e, a, ma.call(arguments).join(","))
                    }
                }),
            K.extend({
                filter: function(a, b, c) {
                    return c && (a = ":not(" + a + ")"),
                        1 === b.length ? K.find.matchesSelector(b[0], a) ? [b[0]] : [] : K.find.matches(a, b)
                },
                dir: function(a, c, d) {
                    for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !K(f).is(d));) 1 === f.nodeType && e.push(f),
                        f = f[c];
                    return e
                },
                nth: function(a, b, c, d) {
                    b = b || 1;
                    for (var e = 0; a && (1 !== a.nodeType || ++e !== b); a = a[c]);
                    return a
                },
                sibling: function(a, b) {
                    for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                    return c
                }
            });
        var pa = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            qa = / jQuery\d+="(?:\d+|null)"/g,
            ra = /^\s+/,
            sa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            ta = /<([\w:]+)/,
            ua = /<tbody/i,
            va = /<|&#?\w+;/,
            wa = /<(?:script|style)/i,
            xa = /<(?:script|object|embed|option|style)/i,
            ya = new RegExp("<(?:" + pa + ")", "i"),
            za = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Aa = /\/(java|ecma)script/i,
            Ba = /^\s*<!(?:\[CDATA\[|\-\-)/,
            Ca = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                area: [1, "<map>", "</map>"],
                _default: [0, "", ""]
            },
            Da = y(H);
        Ca.optgroup = Ca.option,
            Ca.tbody = Ca.tfoot = Ca.colgroup = Ca.caption = Ca.thead,
            Ca.th = Ca.td,
        K.support.htmlSerialize || (Ca._default = [1, "div<div>", "</div>"]),
            K.fn.extend({
                text: function(a) {
                    return K.isFunction(a) ? this.each(function(b) {
                        var c = K(this);
                        c.text(a.call(this, b, c.text()))
                    }) : "object" != typeof a && a !== b ? this.empty().append((this[0] && this[0].ownerDocument || H).createTextNode(a)) : K.text(this)
                },
                wrapAll: function(a) {
                    if (K.isFunction(a)) return this.each(function(b) {
                        K(this).wrapAll(a.call(this, b))
                    });
                    if (this[0]) {
                        var b = K(a, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && b.insertBefore(this[0]),
                            b.map(function() {
                                for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                                return a
                            }).append(this)
                    }
                    return this
                },
                wrapInner: function(a) {
                    return this.each(K.isFunction(a) ?
                        function(b) {
                            K(this).wrapInner(a.call(this, b))
                        }: function() {
                        var b = K(this),
                            c = b.contents();
                        c.length ? c.wrapAll(a) : b.append(a)
                    })
                },
                wrap: function(a) {
                    var b = K.isFunction(a);
                    return this.each(function(c) {
                        K(this).wrapAll(b ? a.call(this, c) : a)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
                    }).end()
                },
                append: function() {
                    return this.domManip(arguments, !0,
                        function(a) {
                            1 === this.nodeType && this.appendChild(a)
                        })
                },
                prepend: function() {
                    return this.domManip(arguments, !0,
                        function(a) {
                            1 === this.nodeType && this.insertBefore(a, this.firstChild)
                        })
                },
                before: function() {
                    if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
                        function(a) {
                            this.parentNode.insertBefore(a, this)
                        });
                    if (arguments.length) {
                        var a = K.clean(arguments);
                        return a.push.apply(a, this.toArray()),
                            this.pushStack(a, "before", arguments)
                    }
                },
                after: function() {
                    if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
                        function(a) {
                            this.parentNode.insertBefore(a, this.nextSibling)
                        });
                    if (arguments.length) {
                        var a = this.pushStack(this, "after", arguments);
                        return a.push.apply(a, K.clean(arguments)),
                            a
                    }
                },
                remove: function(a, b) {
                    for (var c, d = 0; null != (c = this[d]); d++)(!a || K.filter(a, [c]).length) && (!b && 1 === c.nodeType && (K.cleanData(c.getElementsByTagName("*")), K.cleanData([c])), c.parentNode && c.parentNode.removeChild(c));
                    return this
                },
                empty: function() {
                    for (var a, b = 0; null != (a = this[b]); b++) for (1 === a.nodeType && K.cleanData(a.getElementsByTagName("*")); a.firstChild;) a.removeChild(a.firstChild);
                    return this
                },
                clone: function(a, b) {
                    return a = null == a ? !1 : a,
                        b = null == b ? a: b,
                        this.map(function() {
                            return K.clone(this, a, b)
                        })
                },
                html: function(a) {
                    if (a === b) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(qa, "") : null;
                    if ("string" != typeof a || wa.test(a) || !K.support.leadingWhitespace && ra.test(a) || Ca[(ta.exec(a) || ["", ""])[1].toLowerCase()]) K.isFunction(a) ? this.each(function(b) {
                        var c = K(this);
                        c.html(a.call(this, b, c.html()))
                    }) : this.empty().append(a);
                    else {
                        a = a.replace(sa, "<$1></$2>");
                        try {
                            for (var c = 0,
                                     d = this.length; d > c; c++) 1 === this[c].nodeType && (K.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
                        } catch(e) {
                            this.empty().append(a)
                        }
                    }
                    return this
                },
                replaceWith: function(a) {
                    return this[0] && this[0].parentNode ? K.isFunction(a) ? this.each(function(b) {
                        var c = K(this),
                            d = c.html();
                        c.replaceWith(a.call(this, b, d))
                    }) : ("string" != typeof a && (a = K(a).detach()), this.each(function() {
                        var b = this.nextSibling,
                            c = this.parentNode;
                        K(this).remove(),
                            b ? K(b).before(a) : K(c).append(a)
                    })) : this.length ? this.pushStack(K(K.isFunction(a) ? a() : a), "replaceWith", a) : this
                },
                detach: function(a) {
                    return this.remove(a, !0)
                },
                domManip: function(a, c, d) {
                    var e, f, g, h, i = a[0],
                        j = [];
                    if (!K.support.checkClone && 3 === arguments.length && "string" == typeof i && za.test(i)) return this.each(function() {
                        K(this).domManip(a, c, d, !0)
                    });
                    if (K.isFunction(i)) return this.each(function(e) {
                        var f = K(this);
                        a[0] = i.call(this, e, c ? f.html() : b),
                            f.domManip(a, c, d)
                    });
                    if (this[0]) {
                        if (h = i && i.parentNode, e = K.support.parentNode && h && 11 === h.nodeType && h.childNodes.length === this.length ? {
                                fragment: h
                            }: K.buildFragment(a, this, j), g = e.fragment, f = 1 === g.childNodes.length ? g = g.firstChild: g.firstChild, f) {
                            c = c && K.nodeName(f, "tr");
                            for (var k = 0,
                                     l = this.length,
                                     m = l - 1; l > k; k++) d.call(c ? x(this[k], f) : this[k], e.cacheable || l > 1 && m > k ? K.clone(g, !0, !0) : g)
                        }
                        j.length && K.each(j, q)
                    }
                    return this
                }
            }),
            K.buildFragment = function(a, b, c) {
                var d, e, f, g, h = a[0];
                return b && b[0] && (g = b[0].ownerDocument || b[0]),
                g.createDocumentFragment || (g = H),
                1 === a.length && "string" == typeof h && h.length < 512 && g === H && "<" === h.charAt(0) && !xa.test(h) && (K.support.checkClone || !za.test(h)) && (K.support.html5Clone || !ya.test(h)) && (e = !0, f = K.fragments[h], f && 1 !== f && (d = f)),
                d || (d = g.createDocumentFragment(), K.clean(a, g, d, c)),
                e && (K.fragments[h] = f ? d: 1),
                {
                    fragment: d,
                    cacheable: e
                }
            },
            K.fragments = {},
            K.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                },
                function(a, b) {
                    K.fn[a] = function(c) {
                        var d = [],
                            e = K(c),
                            f = 1 === this.length && this[0].parentNode;
                        if (f && 11 === f.nodeType && 1 === f.childNodes.length && 1 === e.length) return e[b](this[0]),
                            this;
                        for (var g = 0,
                                 h = e.length; h > g; g++) {
                            var i = (g > 0 ? this.clone(!0) : this).get();
                            K(e[g])[b](i),
                                d = d.concat(i)
                        }
                        return this.pushStack(d, a, e.selector)
                    }
                }),
            K.extend({
                clone: function(a, b, c) {
                    var d, e, f, g = K.support.html5Clone || !ya.test("<" + a.nodeName) ? a.cloneNode(!0) : r(a);
                    if (! (K.support.noCloneEvent && K.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || K.isXMLDoc(a))) for (v(a, g), d = u(a), e = u(g), f = 0; d[f]; ++f) e[f] && v(d[f], e[f]);
                    if (b && (w(a, g), c)) for (d = u(a), e = u(g), f = 0; d[f]; ++f) w(d[f], e[f]);
                    return d = e = null,
                        g
                },
                clean: function(a, b, c, d) {
                    var e;
                    b = b || H,
                    "undefined" == typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument || H);
                    for (var f, g, h = [], i = 0; null != (g = a[i]); i++) if ("number" == typeof g && (g += ""), g) {
                        if ("string" == typeof g) if (va.test(g)) {
                            g = g.replace(sa, "<$1></$2>");
                            var j = (ta.exec(g) || ["", ""])[1].toLowerCase(),
                                k = Ca[j] || Ca._default,
                                l = k[0],
                                m = b.createElement("div");
                            for (b === H ? Da.appendChild(m) : y(b).appendChild(m), m.innerHTML = k[1] + g + k[2]; l--;) m = m.lastChild;
                            if (!K.support.tbody) {
                                var n = ua.test(g),
                                    o = "table" !== j || n ? "<table>" !== k[1] || n ? [] : m.childNodes: m.firstChild && m.firstChild.childNodes;
                                for (f = o.length - 1; f >= 0; --f) K.nodeName(o[f], "tbody") && !o[f].childNodes.length && o[f].parentNode.removeChild(o[f])
                            } ! K.support.leadingWhitespace && ra.test(g) && m.insertBefore(b.createTextNode(ra.exec(g)[0]), m.firstChild),
                                g = m.childNodes
                        } else g = b.createTextNode(g);
                        var p;
                        if (!K.support.appendChecked) if (g[0] && "number" == typeof(p = g.length)) for (f = 0; p > f; f++) s(g[f]);
                        else s(g);
                        g.nodeType ? h.push(g) : h = K.merge(h, g)
                    }
                    if (c) for (e = function(a) {
                        return ! a.type || Aa.test(a.type)
                    },
                                    i = 0; h[i]; i++) if (!d || !K.nodeName(h[i], "script") || h[i].type && "text/javascript" !== h[i].type.toLowerCase()) {
                        if (1 === h[i].nodeType) {
                            var q = K.grep(h[i].getElementsByTagName("script"), e);
                            h.splice.apply(h, [i + 1, 0].concat(q))
                        }
                        c.appendChild(h[i])
                    } else d.push(h[i].parentNode ? h[i].parentNode.removeChild(h[i]) : h[i]);
                    return h
                },
                cleanData: function(a) {
                    for (var b, c, d, e = K.cache,
                             f = K.event.special,
                             g = K.support.deleteExpando,
                             h = 0; null != (d = a[h]); h++) if ((!d.nodeName || !K.noData[d.nodeName.toLowerCase()]) && (c = d[K.expando])) {
                        if (b = e[c], b && b.events) {
                            for (var i in b.events) f[i] ? K.event.remove(d, i) : K.removeEvent(d, i, b.handle);
                            b.handle && (b.handle.elem = null)
                        }
                        g ? delete d[K.expando] : d.removeAttribute && d.removeAttribute(K.expando),
                            delete e[c]
                    }
                }
            });
        var Ea, Fa, Ga, Ha = /alpha\([^)]*\)/i,
            Ia = /opacity=([^)]*)/,
            Ja = /([A-Z]|^ms)/g,
            Ka = /^-?\d+(?:px)?$/i,
            La = /^-?\d/,
            Ma = /^([\-+])=([\-+.\de]+)/,
            Na = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Oa = ["Left", "Right"],
            Pa = ["Top", "Bottom"];
        K.fn.css = function(a, c) {
            return 2 === arguments.length && c === b ? this: K.access(this, a, c, !0,
                function(a, c, d) {
                    return d !== b ? K.style(a, c, d) : K.css(a, c)
                })
        },
            K.extend({
                cssHooks: {
                    opacity: {
                        get: function(a, b) {
                            if (b) {
                                var c = Ea(a, "opacity", "opacity");
                                return "" === c ? "1": c
                            }
                            return a.style.opacity
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
                    "float": K.support.cssFloat ? "cssFloat": "styleFloat"
                },
                style: function(a, c, d, e) {
                    if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                        var f, g, h = K.camelCase(c),
                            i = a.style,
                            j = K.cssHooks[h];
                        if (c = K.cssProps[h] || h, d === b) return j && "get" in j && (f = j.get(a, !1, e)) !== b ? f: i[c];
                        if (g = typeof d, "string" === g && (f = Ma.exec(d)) && (d = +(f[1] + 1) * +f[2] + parseFloat(K.css(a, c)), g = "number"), null == d || "number" === g && isNaN(d)) return;
                        if ("number" === g && !K.cssNumber[h] && (d += "px"), !(j && "set" in j && (d = j.set(a, d)) === b)) try {
                            i[c] = d
                        } catch(k) {}
                    }
                },
                css: function(a, c, d) {
                    var e, f;
                    return c = K.camelCase(c),
                        f = K.cssHooks[c],
                        c = K.cssProps[c] || c,
                    "cssFloat" === c && (c = "float"),
                        f && "get" in f && (e = f.get(a, !0, d)) !== b ? e: Ea ? Ea(a, c) : void 0
                },
                swap: function(a, b, c) {
                    var d = {};
                    for (var e in b) d[e] = a.style[e],
                        a.style[e] = b[e];
                    c.call(a);
                    for (e in b) a.style[e] = d[e]
                }
            }),
            K.curCSS = K.css,
            K.each(["height", "width"],
                function(a, b) {
                    K.cssHooks[b] = {
                        get: function(a, c, d) {
                            var e;
                            return c ? 0 !== a.offsetWidth ? p(a, b, d) : (K.swap(a, Na,
                                function() {
                                    e = p(a, b, d)
                                }), e) : void 0
                        },
                        set: function(a, b) {
                            return Ka.test(b) ? (b = parseFloat(b), b >= 0 ? b + "px": void 0) : b
                        }
                    }
                }),
        K.support.opacity || (K.cssHooks.opacity = {
            get: function(a, b) {
                return Ia.test((b && a.currentStyle ? a.currentStyle.filter: a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "": b ? "1": ""
            },
            set: function(a, b) {
                var c = a.style,
                    d = a.currentStyle,
                    e = K.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")": "",
                    f = d && d.filter || c.filter || "";
                c.zoom = 1,
                b >= 1 && "" === K.trim(f.replace(Ha, "")) && (c.removeAttribute("filter"), d && !d.filter) || (c.filter = Ha.test(f) ? f.replace(Ha, e) : f + " " + e)
            }
        }),
            K(function() {
                K.support.reliableMarginRight || (K.cssHooks.marginRight = {
                    get: function(a, b) {
                        var c;
                        return K.swap(a, {
                                display: "inline-block"
                            },
                            function() {
                                c = b ? Ea(a, "margin-right", "marginRight") : a.style.marginRight
                            }),
                            c
                    }
                })
            }),
        H.defaultView && H.defaultView.getComputedStyle && (Fa = function(a, b) {
            var c, d, e;
            return b = b.replace(Ja, "-$1").toLowerCase(),
            (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), "" === c && !K.contains(a.ownerDocument.documentElement, a) && (c = K.style(a, b))),
                c
        }),
        H.documentElement.currentStyle && (Ga = function(a, b) {
            var c, d, e, f = a.currentStyle && a.currentStyle[b],
                g = a.style;
            return null === f && g && (e = g[b]) && (f = e),
            !Ka.test(f) && La.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = "fontSize" === b ? "1em": f || 0, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d)),
                "" === f ? "auto": f
        }),
            Ea = Fa || Ga,
        K.expr && K.expr.filters && (K.expr.filters.hidden = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight;
            return 0 === b && 0 === c || !K.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || K.css(a, "display"))
        },
            K.expr.filters.visible = function(a) {
                return ! K.expr.filters.hidden(a)
            });
        var Qa, Ra, Sa = /%20/g,
            Ta = /\[\]$/,
            Ua = /\r?\n/g,
            Va = /#.*$/,
            Wa = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Xa = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
            Ya = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
            Za = /^(?:GET|HEAD)$/,
            $a = /^\/\//,
            _a = /\?/,
            ab = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            bb = /^(?:select|textarea)/i,
            cb = /\s+/,
            db = /([?&])_=[^&]*/,
            eb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
            fb = K.fn.load,
            gb = {},
            hb = {},
            ib = ["*/"] + ["*"];
        try {
            Qa = J.href
        } catch(jb) {
            Qa = H.createElement("a"),
                Qa.href = "",
                Qa = Qa.href
        }
        Ra = eb.exec(Qa.toLowerCase()) || [],
            K.fn.extend({
                load: function(a, c, d) {
                    if ("string" != typeof a && fb) return fb.apply(this, arguments);
                    if (!this.length) return this;
                    var e = a.indexOf(" ");
                    if (e >= 0) {
                        var f = a.slice(e, a.length);
                        a = a.slice(0, e)
                    }
                    var g = "GET";
                    c && (K.isFunction(c) ? (d = c, c = b) : "object" == typeof c && (c = K.param(c, K.ajaxSettings.traditional), g = "POST"));
                    var h = this;
                    return K.ajax({
                        url: a,
                        type: g,
                        dataType: "html",
                        data: c,
                        complete: function(a, b, c) {
                            c = a.responseText,
                            a.isResolved() && (a.done(function(a) {
                                c = a
                            }), h.html(f ? K("<div>").append(c.replace(ab, "")).find(f) : c)),
                            d && h.each(d, [c, b, a])
                        }
                    }),
                        this
                },
                serialize: function() {
                    return K.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        return this.elements ? K.makeArray(this.elements) : this
                    }).filter(function() {
                        return this.name && !this.disabled && (this.checked || bb.test(this.nodeName) || Xa.test(this.type))
                    }).map(function(a, b) {
                        var c = K(this).val();
                        return null == c ? null: K.isArray(c) ? K.map(c,
                            function(a, c) {
                                return {
                                    name: b.name,
                                    value: a.replace(Ua, "\r\n")
                                }
                            }) : {
                            name: b.name,
                            value: c.replace(Ua, "\r\n")
                        }
                    }).get()
                }
            }),
            K.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
                function(a, b) {
                    K.fn[b] = function(a) {
                        return this.on(b, a)
                    }
                }),
            K.each(["get", "post"],
                function(a, c) {
                    K[c] = function(a, d, e, f) {
                        return K.isFunction(d) && (f = f || e, e = d, d = b),
                            K.ajax({
                                type: c,
                                url: a,
                                data: d,
                                success: e,
                                dataType: f
                            })
                    }
                }),
            K.extend({
                getScript: function(a, c) {
                    return K.get(a, b, c, "script")
                },
                getJSON: function(a, b, c) {
                    return K.get(a, b, c, "json")
                },
                ajaxSetup: function(a, b) {
                    return b ? m(a, K.ajaxSettings) : (b = a, a = K.ajaxSettings),
                        m(a, b),
                        a
                },
                ajaxSettings: {
                    url: Qa,
                    isLocal: Ya.test(Ra[1]),
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
                        "*": ib
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
                        "* text": a.String,
                        "text html": !0,
                        "text json": K.parseJSON,
                        "text xml": K.parseXML
                    },
                    flatOptions: {
                        context: !0,
                        url: !0
                    }
                },
                ajaxPrefilter: o(gb),
                ajaxTransport: o(hb),
                ajax: function(a, c) {
                    function d(a, c, d, g) {
                        if (2 !== x) {
                            x = 2,
                            i && clearTimeout(i),
                                h = b,
                                f = g || "",
                                y.readyState = a > 0 ? 4 : 0;
                            var l, n, o, v, w, z = c,
                                A = d ? k(p, y, d) : b;
                            if (a >= 200 && 300 > a || 304 === a) if (p.ifModified && ((v = y.getResponseHeader("Last-Modified")) && (K.lastModified[e] = v), (w = y.getResponseHeader("Etag")) && (K.etag[e] = w)), 304 === a) z = "notmodified",
                                l = !0;
                            else try {
                                    n = j(p, A),
                                        z = "success",
                                        l = !0
                                } catch(B) {
                                    z = "parsererror",
                                        o = B
                                } else o = z,
                            (!z || a) && (z = "error", 0 > a && (a = 0));
                            y.status = a,
                                y.statusText = "" + (c || z),
                                l ? s.resolveWith(q, [n, z, y]) : s.rejectWith(q, [y, z, o]),
                                y.statusCode(u),
                                u = b,
                            m && r.trigger("ajax" + (l ? "Success": "Error"), [y, p, l ? n: o]),
                                t.fireWith(q, [y, z]),
                            m && (r.trigger("ajaxComplete", [y, p]), --K.active || K.event.trigger("ajaxStop"))
                        }
                    }
                    "object" == typeof a && (c = a, a = b),
                        c = c || {};
                    var e, f, g, h, i, l, m, o, p = K.ajaxSetup({},
                            c),
                        q = p.context || p,
                        r = q !== p && (q.nodeType || q instanceof K) ? K(q) : K.event,
                        s = K.Deferred(),
                        t = K.Callbacks("once memory"),
                        u = p.statusCode || {},
                        v = {},
                        w = {},
                        x = 0,
                        y = {
                            readyState: 0,
                            setRequestHeader: function(a, b) {
                                if (!x) {
                                    var c = a.toLowerCase();
                                    a = w[c] = w[c] || a,
                                        v[a] = b
                                }
                                return this
                            },
                            getAllResponseHeaders: function() {
                                return 2 === x ? f: null
                            },
                            getResponseHeader: function(a) {
                                var c;
                                if (2 === x) {
                                    if (!g) for (g = {}; c = Wa.exec(f);) g[c[1].toLowerCase()] = c[2];
                                    c = g[a.toLowerCase()]
                                }
                                return c === b ? null: c
                            },
                            overrideMimeType: function(a) {
                                return x || (p.mimeType = a),
                                    this
                            },
                            abort: function(a) {
                                return a = a || "abort",
                                h && h.abort(a),
                                    d(0, a),
                                    this
                            }
                        };
                    if (s.promise(y), y.success = y.done, y.error = y.fail, y.complete = t.add, y.statusCode = function(a) {
                            if (a) {
                                var b;
                                if (2 > x) for (b in a) u[b] = [u[b], a[b]];
                                else b = a[y.status],
                                    y.then(b, b)
                            }
                            return this
                        },
                            p.url = ((a || p.url) + "").replace(Va, "").replace($a, Ra[1] + "//"), p.dataTypes = K.trim(p.dataType || "*").toLowerCase().split(cb), null == p.crossDomain && (l = eb.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] == Ra[1] && l[2] == Ra[2] && (l[3] || ("http:" === l[1] ? 80 : 443)) == (Ra[3] || ("http:" === Ra[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = K.param(p.data, p.traditional)), n(gb, p, c, y), 2 === x) return ! 1;
                    if (m = p.global, p.type = p.type.toUpperCase(), p.hasContent = !Za.test(p.type), m && 0 === K.active++&&K.event.trigger("ajaxStart"), !p.hasContent && (p.data && (p.url += (_a.test(p.url) ? "&": "?") + p.data, delete p.data), e = p.url, p.cache === !1)) {
                        var z = K.now(),
                            A = p.url.replace(db, "$1_=" + z);
                        p.url = A + (A === p.url ? (_a.test(p.url) ? "&": "?") + "_=" + z: "")
                    } (p.data && p.hasContent && p.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", p.contentType),
                    p.ifModified && (e = e || p.url, K.lastModified[e] && y.setRequestHeader("If-Modified-Since", K.lastModified[e]), K.etag[e] && y.setRequestHeader("If-None-Match", K.etag[e])),
                        y.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + ib + "; q=0.01": "") : p.accepts["*"]);
                    for (o in p.headers) y.setRequestHeader(o, p.headers[o]);
                    if (p.beforeSend && (p.beforeSend.call(q, y, p) === !1 || 2 === x)) return y.abort(),
                        !1;
                    for (o in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) y[o](p[o]);
                    if (h = n(hb, p, c, y)) {
                        y.readyState = 1,
                        m && r.trigger("ajaxSend", [y, p]),
                        p.async && p.timeout > 0 && (i = setTimeout(function() {
                                y.abort("timeout")
                            },
                            p.timeout));
                        try {
                            x = 1,
                                h.send(v, d)
                        } catch(B) {
                            if (! (2 > x)) throw B;
                            d( - 1, B)
                        }
                    } else d( - 1, "No Transport");
                    return y
                },
                param: function(a, c) {
                    var d = [],
                        e = function(a, b) {
                            b = K.isFunction(b) ? b() : b,
                                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                        };
                    if (c === b && (c = K.ajaxSettings.traditional), K.isArray(a) || a.jquery && !K.isPlainObject(a)) K.each(a,
                        function() {
                            e(this.name, this.value)
                        });
                    else for (var f in a) l(f, a[f], c, e);
                    return d.join("&").replace(Sa, "+")
                }
            }),
            K.extend({
                active: 0,
                lastModified: {},
                etag: {}
            });
        var kb = K.now(),
            lb = /(\=)\?(&|$)|\?\?/i;
        K.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                return K.expando + "_" + kb++
            }
        }),
            K.ajaxPrefilter("json jsonp",
                function(b, c, d) {
                    var e = "application/x-www-form-urlencoded" === b.contentType && "string" == typeof b.data;
                    if ("jsonp" === b.dataTypes[0] || b.jsonp !== !1 && (lb.test(b.url) || e && lb.test(b.data))) {
                        var f, g = b.jsonpCallback = K.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                            h = a[g],
                            i = b.url,
                            j = b.data,
                            k = "$1" + g + "$2";
                        return b.jsonp !== !1 && (i = i.replace(lb, k), b.url === i && (e && (j = j.replace(lb, k)), b.data === j && (i += (/\?/.test(i) ? "&": "?") + b.jsonp + "=" + g))),
                            b.url = i,
                            b.data = j,
                            a[g] = function(a) {
                                f = [a]
                            },
                            d.always(function() {
                                a[g] = h,
                                f && K.isFunction(h) && a[g](f[0])
                            }),
                            b.converters["script json"] = function() {
                                return f || K.error(g + " was not called"),
                                    f[0]
                            },
                            b.dataTypes[0] = "json",
                            "script"
                    }
                }),
            K.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /javascript|ecmascript/
                },
                converters: {
                    "text script": function(a) {
                        return K.globalEval(a),
                            a
                    }
                }
            }),
            K.ajaxPrefilter("script",
                function(a) {
                    a.cache === b && (a.cache = !1),
                    a.crossDomain && (a.type = "GET", a.global = !1)
                }),
            K.ajaxTransport("script",
                function(a) {
                    if (a.crossDomain) {
                        var c, d = H.head || H.getElementsByTagName("head")[0] || H.documentElement;
                        return {
                            send: function(e, f) {
                                c = H.createElement("script"),
                                    c.async = "async",
                                a.scriptCharset && (c.charset = a.scriptCharset),
                                    c.src = a.url,
                                    c.onload = c.onreadystatechange = function(a, e) { (e || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || f(200, "success"))
                                    },
                                    d.insertBefore(c, d.firstChild)
                            },
                            abort: function() {
                                c && c.onload(0, 1)
                            }
                        }
                    }
                });
        var mb, nb = a.ActiveXObject ?
                function() {
                    for (var a in mb) mb[a](0, 1)
                }: !1,
            ob = 0;
        K.ajaxSettings.xhr = a.ActiveXObject ?
            function() {
                return ! this.isLocal && i() || h()
            }: i,
            function(a) {
                K.extend(K.support, {
                    ajax: !!a,
                    cors: !!a && "withCredentials" in a
                })
            } (K.ajaxSettings.xhr()),
        K.support.ajax && K.ajaxTransport(function(c) {
            if (!c.crossDomain || K.support.cors) {
                var d;
                return {
                    send: function(e, f) {
                        var g, h, i = c.xhr();
                        if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields) for (h in c.xhrFields) i[h] = c.xhrFields[h];
                        c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType),
                        !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (h in e) i.setRequestHeader(h, e[h])
                        } catch(j) {}
                        i.send(c.hasContent && c.data || null),
                            d = function(a, e) {
                                var h, j, k, l, m;
                                try {
                                    if (d && (e || 4 === i.readyState)) if (d = b, g && (i.onreadystatechange = K.noop, nb && delete mb[g]), e) 4 !== i.readyState && i.abort();
                                    else {
                                        h = i.status,
                                            k = i.getAllResponseHeaders(),
                                            l = {},
                                            m = i.responseXML,
                                        m && m.documentElement && (l.xml = m),
                                            l.text = i.responseText;
                                        try {
                                            j = i.statusText
                                        } catch(n) {
                                            j = ""
                                        }
                                        h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                                    }
                                } catch(o) {
                                    e || f( - 1, o)
                                }
                                l && f(h, j, l, k)
                            },
                            c.async && 4 !== i.readyState ? (g = ++ob, nb && (mb || (mb = {},
                                K(a).unload(nb)), mb[g] = d), i.onreadystatechange = d) : d()
                    },
                    abort: function() {
                        d && d(0, 1)
                    }
                }
            }
        });
        var pb, qb, rb, sb, tb = {},
            ub = /^(?:toggle|show|hide)$/,
            vb = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
            wb = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
        K.fn.extend({
            show: function(a, b, c) {
                var f, g;
                if (a || 0 === a) return this.animate(e("show", 3), a, b, c);
                for (var h = 0,
                         i = this.length; i > h; h++) f = this[h],
                f.style && (g = f.style.display, !K._data(f, "olddisplay") && "none" === g && (g = f.style.display = ""), "" === g && "none" === K.css(f, "display") && K._data(f, "olddisplay", d(f.nodeName)));
                for (h = 0; i > h; h++) f = this[h],
                f.style && (g = f.style.display, ("" === g || "none" === g) && (f.style.display = K._data(f, "olddisplay") || ""));
                return this
            },
            hide: function(a, b, c) {
                if (a || 0 === a) return this.animate(e("hide", 3), a, b, c);
                for (var d, f, g = 0,
                         h = this.length; h > g; g++) d = this[g],
                d.style && (f = K.css(d, "display"), "none" !== f && !K._data(d, "olddisplay") && K._data(d, "olddisplay", f));
                for (g = 0; h > g; g++) this[g].style && (this[g].style.display = "none");
                return this
            },
            _toggle: K.fn.toggle,
            toggle: function(a, b, c) {
                var d = "boolean" == typeof a;
                return K.isFunction(a) && K.isFunction(b) ? this._toggle.apply(this, arguments) : null == a || d ? this.each(function() {
                    var b = d ? a: K(this).is(":hidden");
                    K(this)[b ? "show": "hide"]()
                }) : this.animate(e("toggle", 3), a, b, c),
                    this
            },
            fadeTo: function(a, b, c, d) {
                return this.filter(":hidden").css("opacity", 0).show().end().animate({
                        opacity: b
                    },
                    a, c, d)
            },
            animate: function(a, b, c, e) {
                function f() {
                    g.queue === !1 && K._mark(this);
                    var b, c, e, f, h, i, j, k, l, m = K.extend({},
                            g),
                        n = 1 === this.nodeType,
                        o = n && K(this).is(":hidden");
                    m.animatedProperties = {};
                    for (e in a) {
                        if (b = K.camelCase(e), e !== b && (a[b] = a[e], delete a[e]), c = a[b], K.isArray(c) ? (m.animatedProperties[b] = c[1], c = a[b] = c[0]) : m.animatedProperties[b] = m.specialEasing && m.specialEasing[b] || m.easing || "swing", "hide" === c && o || "show" === c && !o) return m.complete.call(this);
                        n && ("height" === b || "width" === b) && (m.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === K.css(this, "display") && "none" === K.css(this, "float") && (K.support.inlineBlockNeedsLayout && "inline" !== d(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
                    }
                    null != m.overflow && (this.style.overflow = "hidden");
                    for (e in a) f = new K.fx(this, m, e),
                        c = a[e],
                        ub.test(c) ? (l = K._data(this, "toggle" + e) || ("toggle" === c ? o ? "show": "hide": 0), l ? (K._data(this, "toggle" + e, "show" === l ? "hide": "show"), f[l]()) : f[c]()) : (h = vb.exec(c), i = f.cur(), h ? (j = parseFloat(h[2]), k = h[3] || (K.cssNumber[e] ? "": "px"), "px" !== k && (K.style(this, e, (j || 1) + k), i = (j || 1) / f.cur() * i, K.style(this, e, i + k)), h[1] && (j = ("-=" === h[1] ? -1 : 1) * j + i), f.custom(i, j, k)) : f.custom(i, c, ""));
                    return ! 0
                }
                var g = K.speed(b, c, e);
                return K.isEmptyObject(a) ? this.each(g.complete, [!1]) : (a = K.extend({},
                    a), g.queue === !1 ? this.each(f) : this.queue(g.queue, f))
            },
            stop: function(a, c, d) {
                return "string" != typeof a && (d = c, c = a, a = b),
                c && a !== !1 && this.queue(a || "fx", []),
                    this.each(function() {
                        function b(a, b, c) {
                            var e = b[c];
                            K.removeData(a, c, !0),
                                e.stop(d)
                        }
                        var c, e = !1,
                            f = K.timers,
                            g = K._data(this);
                        if (d || K._unmark(!0, this), null == a) for (c in g) g[c] && g[c].stop && c.indexOf(".run") === c.length - 4 && b(this, g, c);
                        else g[c = a + ".run"] && g[c].stop && b(this, g, c);
                        for (c = f.length; c--;) f[c].elem === this && (null == a || f[c].queue === a) && (d ? f[c](!0) : f[c].saveState(), e = !0, f.splice(c, 1)); (!d || !e) && K.dequeue(this, a)
                    })
            }
        }),
            K.each({
                    slideDown: e("show", 1),
                    slideUp: e("hide", 1),
                    slideToggle: e("toggle", 1),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                },
                function(a, b) {
                    K.fn[a] = function(a, c, d) {
                        return this.animate(b, a, c, d)
                    }
                }),
            K.extend({
                speed: function(a, b, c) {
                    var d = a && "object" == typeof a ? K.extend({},
                        a) : {
                        complete: c || !c && b || K.isFunction(a) && a,
                        duration: a,
                        easing: c && b || b && !K.isFunction(b) && b
                    };
                    return d.duration = K.fx.off ? 0 : "number" == typeof d.duration ? d.duration: d.duration in K.fx.speeds ? K.fx.speeds[d.duration] : K.fx.speeds._default,
                    (null == d.queue || d.queue === !0) && (d.queue = "fx"),
                        d.old = d.complete,
                        d.complete = function(a) {
                            K.isFunction(d.old) && d.old.call(this),
                                d.queue ? K.dequeue(this, d.queue) : a !== !1 && K._unmark(this)
                        },
                        d
                },
                easing: {
                    linear: function(a, b, c, d) {
                        return c + d * a
                    },
                    swing: function(a, b, c, d) {
                        return ( - Math.cos(a * Math.PI) / 2 + .5) * d + c
                    }
                },
                timers: [],
                fx: function(a, b, c) {
                    this.options = b,
                        this.elem = a,
                        this.prop = c,
                        b.orig = b.orig || {}
                }
            }),
            K.fx.prototype = {
                update: function() {
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                        (K.fx.step[this.prop] || K.fx.step._default)(this)
                },
                cur: function() {
                    if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
                    var a, b = K.css(this.elem, this.prop);
                    return isNaN(a = parseFloat(b)) ? b && "auto" !== b ? b: 0 : a
                },
                custom: function(a, c, d) {
                    function e(a) {
                        return f.step(a)
                    }
                    var f = this,
                        h = K.fx;
                    this.startTime = sb || g(),
                        this.end = c,
                        this.now = this.start = a,
                        this.pos = this.state = 0,
                        this.unit = d || this.unit || (K.cssNumber[this.prop] ? "": "px"),
                        e.queue = this.options.queue,
                        e.elem = this.elem,
                        e.saveState = function() {
                            f.options.hide && K._data(f.elem, "fxshow" + f.prop) === b && K._data(f.elem, "fxshow" + f.prop, f.start)
                        },
                    e() && K.timers.push(e) && !rb && (rb = setInterval(h.tick, h.interval))
                },
                show: function() {
                    var a = K._data(this.elem, "fxshow" + this.prop);
                    this.options.orig[this.prop] = a || K.style(this.elem, this.prop),
                        this.options.show = !0,
                        a !== b ? this.custom(this.cur(), a) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()),
                        K(this.elem).show()
                },
                hide: function() {
                    this.options.orig[this.prop] = K._data(this.elem, "fxshow" + this.prop) || K.style(this.elem, this.prop),
                        this.options.hide = !0,
                        this.custom(this.cur(), 0)
                },
                step: function(a) {
                    var b, c, d, e = sb || g(),
                        f = !0,
                        h = this.elem,
                        i = this.options;
                    if (a || e >= i.duration + this.startTime) {
                        this.now = this.end,
                            this.pos = this.state = 1,
                            this.update(),
                            i.animatedProperties[this.prop] = !0;
                        for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (f = !1);
                        if (f) {
                            if (null != i.overflow && !K.support.shrinkWrapBlocks && K.each(["", "X", "Y"],
                                    function(a, b) {
                                        h.style["overflow" + b] = i.overflow[a]
                                    }), i.hide && K(h).hide(), i.hide || i.show) for (b in i.animatedProperties) K.style(h, b, i.orig[b]),
                                K.removeData(h, "fxshow" + b, !0),
                                K.removeData(h, "toggle" + b, !0);
                            d = i.complete,
                            d && (i.complete = !1, d.call(h))
                        }
                        return ! 1
                    }
                    return i.duration == 1 / 0 ? this.now = e: (c = e - this.startTime, this.state = c / i.duration, this.pos = K.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos),
                        this.update(),
                        !0
                }
            },
            K.extend(K.fx, {
                tick: function() {
                    for (var a, b = K.timers,
                             c = 0; c < b.length; c++) a = b[c],
                    !a() && b[c] === a && b.splice(c--, 1);
                    b.length || K.fx.stop()
                },
                interval: 13,
                stop: function() {
                    clearInterval(rb),
                        rb = null
                },
                speeds: {
                    slow: 600,
                    fast: 200,
                    _default: 400
                },
                step: {
                    opacity: function(a) {
                        K.style(a.elem, "opacity", a.now)
                    },
                    _default: function(a) {
                        a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = a.now + a.unit: a.elem[a.prop] = a.now
                    }
                }
            }),
            K.each(["width", "height"],
                function(a, b) {
                    K.fx.step[b] = function(a) {
                        K.style(a.elem, b, Math.max(0, a.now) + a.unit)
                    }
                }),
        K.expr && K.expr.filters && (K.expr.filters.animated = function(a) {
            return K.grep(K.timers,
                function(b) {
                    return a === b.elem
                }).length
        });
        var xb = /^t(?:able|d|h)$/i,
            yb = /^(?:body|html)$/i;
        K.fn.offset = "getBoundingClientRect" in H.documentElement ?
            function(a) {
                var b, d = this[0];
                if (a) return this.each(function(b) {
                    K.offset.setOffset(this, a, b)
                });
                if (!d || !d.ownerDocument) return null;
                if (d === d.ownerDocument.body) return K.offset.bodyOffset(d);
                try {
                    b = d.getBoundingClientRect()
                } catch(e) {}
                var f = d.ownerDocument,
                    g = f.documentElement;
                if (!b || !K.contains(g, d)) return b ? {
                    top: b.top,
                    left: b.left
                }: {
                    top: 0,
                    left: 0
                };
                var h = f.body,
                    i = c(f),
                    j = g.clientTop || h.clientTop || 0,
                    k = g.clientLeft || h.clientLeft || 0,
                    l = i.pageYOffset || K.support.boxModel && g.scrollTop || h.scrollTop,
                    m = i.pageXOffset || K.support.boxModel && g.scrollLeft || h.scrollLeft,
                    n = b.top + l - j,
                    o = b.left + m - k;
                return {
                    top: n,
                    left: o
                }
            }: function(a) {
            var b = this[0];
            if (a) return this.each(function(b) {
                K.offset.setOffset(this, a, b)
            });
            if (!b || !b.ownerDocument) return null;
            if (b === b.ownerDocument.body) return K.offset.bodyOffset(b);
            for (var c, d = b.offsetParent,
                     e = b,
                     f = b.ownerDocument,
                     g = f.documentElement,
                     h = f.body,
                     i = f.defaultView,
                     j = i ? i.getComputedStyle(b, null) : b.currentStyle, k = b.offsetTop, l = b.offsetLeft; (b = b.parentNode) && b !== h && b !== g && (!K.support.fixedPosition || "fixed" !== j.position);) c = i ? i.getComputedStyle(b, null) : b.currentStyle,
                k -= b.scrollTop,
                l -= b.scrollLeft,
            b === d && (k += b.offsetTop, l += b.offsetLeft, K.support.doesNotAddBorder && (!K.support.doesAddBorderForTableAndCells || !xb.test(b.nodeName)) && (k += parseFloat(c.borderTopWidth) || 0, l += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent),
            K.support.subtractsBorderForOverflowNotVisible && "visible" !== c.overflow && (k += parseFloat(c.borderTopWidth) || 0, l += parseFloat(c.borderLeftWidth) || 0),
                j = c;
            return ("relative" === j.position || "static" === j.position) && (k += h.offsetTop, l += h.offsetLeft),
            K.support.fixedPosition && "fixed" === j.position && (k += Math.max(g.scrollTop, h.scrollTop), l += Math.max(g.scrollLeft, h.scrollLeft)),
            {
                top: k,
                left: l
            }
        },
            K.offset = {
                bodyOffset: function(a) {
                    var b = a.offsetTop,
                        c = a.offsetLeft;
                    return K.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(K.css(a, "marginTop")) || 0, c += parseFloat(K.css(a, "marginLeft")) || 0),
                    {
                        top: b,
                        left: c
                    }
                },
                setOffset: function(a, b, c) {
                    var d = K.css(a, "position");
                    "static" === d && (a.style.position = "relative");
                    var e, f, g = K(a),
                        h = g.offset(),
                        i = K.css(a, "top"),
                        j = K.css(a, "left"),
                        k = ("absolute" === d || "fixed" === d) && K.inArray("auto", [i, j]) > -1,
                        l = {},
                        m = {};
                    k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0),
                    K.isFunction(b) && (b = b.call(a, c, h)),
                    null != b.top && (l.top = b.top - h.top + e),
                    null != b.left && (l.left = b.left - h.left + f),
                        "using" in b ? b.using.call(a, l) : g.css(l)
                }
            },
            K.fn.extend({
                position: function() {
                    if (!this[0]) return null;
                    var a = this[0],
                        b = this.offsetParent(),
                        c = this.offset(),
                        d = yb.test(b[0].nodeName) ? {
                            top: 0,
                            left: 0
                        }: b.offset();
                    return c.top -= parseFloat(K.css(a, "marginTop")) || 0,
                        c.left -= parseFloat(K.css(a, "marginLeft")) || 0,
                        d.top += parseFloat(K.css(b[0], "borderTopWidth")) || 0,
                        d.left += parseFloat(K.css(b[0], "borderLeftWidth")) || 0,
                    {
                        top: c.top - d.top,
                        left: c.left - d.left
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var a = this.offsetParent || H.body; a && !yb.test(a.nodeName) && "static" === K.css(a, "position");) a = a.offsetParent;
                        return a
                    })
                }
            }),
            K.each(["Left", "Top"],
                function(a, d) {
                    var e = "scroll" + d;
                    K.fn[e] = function(d) {
                        var f, g;
                        return d === b ? (f = this[0]) ? (g = c(f), g ? "pageXOffset" in g ? g[a ? "pageYOffset": "pageXOffset"] : K.support.boxModel && g.document.documentElement[e] || g.document.body[e] : f[e]) : null: this.each(function() {
                            g = c(this),
                                g ? g.scrollTo(a ? K(g).scrollLeft() : d, a ? d: K(g).scrollTop()) : this[e] = d
                        })
                    }
                }),
            K.each(["Height", "Width"],
                function(a, c) {
                    var d = c.toLowerCase();
                    K.fn["inner" + c] = function() {
                        var a = this[0];
                        return a ? a.style ? parseFloat(K.css(a, d, "padding")) : this[d]() : null
                    },
                        K.fn["outer" + c] = function(a) {
                            var b = this[0];
                            return b ? b.style ? parseFloat(K.css(b, d, a ? "margin": "border")) : this[d]() : null
                        },
                        K.fn[d] = function(a) {
                            var e = this[0];
                            if (!e) return null == a ? null: this;
                            if (K.isFunction(a)) return this.each(function(b) {
                                var c = K(this);
                                c[d](a.call(this, b, c[d]()))
                            });
                            if (K.isWindow(e)) {
                                var f = e.document.documentElement["client" + c],
                                    g = e.document.body;
                                return "CSS1Compat" === e.document.compatMode && f || g && g["client" + c] || f
                            }
                            if (9 === e.nodeType) return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
                            if (a === b) {
                                var h = K.css(e, d),
                                    i = parseFloat(h);
                                return K.isNumeric(i) ? i: h
                            }
                            return this.css(d, "string" == typeof a ? a: a + "px")
                        }
                }),
            a.jQuery = a.$ = K,
        "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [],
            function() {
                return K
            })
    } (window),
    function(a, b) {
        function c(a, b) {
            for (a = "" + a, b = b || 2; a.length < b;) a = "0" + a;
            return a
        }
        function d(a, b, d, e) {
            var f = b.getDate(),
                g = b.getDay(),
                h = b.getMonth(),
                i = b.getFullYear(),
                f = {
                    d: f,
                    dd: c(f),
                    ddd: m[e].shortDays[g],
                    dddd: m[e].days[g],
                    m: h + 1,
                    mm: c(h + 1),
                    mmm: m[e].shortMonths[h],
                    mmmm: m[e].months[h],
                    yy: ("" + i).slice(2),
                    yyyy: i
                },
                a = k[a](d, b, f, e);
            return n.html(a).html()
        }
        function e(a) {
            return parseInt(a, 10)
        }
        function f(a, b) {
            return a.getFullYear() === b.getFullYear() && a.getMonth() == b.getMonth() && a.getDate() == b.getDate()
        }
        function g(a) {
            if (a !== b) {
                if (a.constructor == Date) return a;
                if ("string" == typeof a) {
                    var c = a.split("-");
                    if (3 == c.length) return new Date(e(c[0]), e(c[1]) - 1, e(c[2]));
                    if (!/^-?\d+$/.test(a)) return;
                    a = e(a)
                }
                return c = new Date,
                    c.setDate(c.getDate() + a),
                    c
            }
        }
        function h(c, h) {
            function i(b, e, f) {
                C = b,
                    q = b.getFullYear(),
                    r = b.getMonth(),
                    s = b.getDate(),
                f || (f = a.Event("api")),
                "click" == f.type && !a.browser.msie && c.focus(),
                    f.type = "beforeChange",
                    F.trigger(f, [b]),
                f.isDefaultPrevented() || (c.val(d(e.formatter, b, e.format, e.lang)), f.type = "change", F.trigger(f), c.data("date", b), v.hide(f))
            }
            function k(b) {
                b.type = "onShow",
                    F.trigger(b),
                    a(document).on("keydown.d",
                        function(b) {
                            if (b.ctrlKey) return ! 0;
                            var d = b.keyCode;
                            if (8 == d || 46 == d) return c.val(""),
                                v.hide(b);
                            if (27 == d || 9 == d) return v.hide(b);
                            if (0 <= a(l).index(d)) {
                                if (!t) return v.show(b),
                                    b.preventDefault();
                                var e = a("#" + y.weeks + " a"),
                                    f = a("." + y.focus),
                                    g = e.index(f);
                                return f.removeClass(y.focus),
                                    74 == d || 40 == d ? g += 7 : 75 == d || 38 == d ? g -= 7 : 76 == d || 39 == d ? g += 1 : (72 == d || 37 == d) && (g -= 1),
                                    g > 41 ? (v.addMonth(), f = a("#" + y.weeks + " a:eq(" + (g - 42) + ")")) : 0 > g ? (v.addMonth( - 1), f = a("#" + y.weeks + " a:eq(" + (g + 42) + ")")) : f = e.eq(g),
                                    f.addClass(y.focus),
                                    b.preventDefault()
                            }
                            return 34 == d ? v.addMonth() : 33 == d ? v.addMonth( - 1) : 36 == d ? v.today() : (13 == d && (a(b.target).is("select") || a("." + y.focus).click()), 0 <= a([16, 17, 18, 9]).index(d))
                        }),
                    a(document).on("click.d",
                        function(b) {
                            var d = b.target; ! a(d).parents("#" + y.root).length && d != c[0] && (!n || d != n[0]) && v.hide(b)
                        })
            }
            var n, o, p, q, r, s, t, u, v = this,
                w = new Date,
                x = w.getFullYear(),
                y = h.css,
                z = m[h.lang],
                A = a("#" + y.root),
                B = A.find("#" + y.title),
                C = c.attr("data-value") || h.value || c.val(),
                D = c.attr("min") || h.min,
                E = c.attr("max") || h.max;
            if (0 === D && (D = "0"), C = g(C) || w, D = g(D || new Date(x + h.yearRange[0], 1, 1)), E = g(E || new Date(x + h.yearRange[1] + 1, 1, -1)), !z) throw "Dateinput: invalid language: " + h.lang;
            "date" == c.attr("type") && (u = c.clone(), x = u.wrap("<div/>").parent().html(), x = a(x.replace(/type/i, "type=text data-orig-type")), h.value && x.val(h.value), c.replaceWith(x), c = x),
                c.addClass(y.input);
            var F = c.add(v);
            if (!A.length) {
                if (A = a("<div><div><a/><div/><a/></div><div><div/><div/></div></div>").hide().css({
                        position: "absolute"
                    }).attr("id", y.root), A.children().eq(0).attr("id", y.head).end().eq(1).attr("id", y.body).children().eq(0).attr("id", y.days).end().eq(1).attr("id", y.weeks).end().end().end().find("a").eq(0).attr("id", y.prev).end().eq(1).attr("id", y.next), B = A.find("#" + y.head).find("div").attr("id", y.title), h.selectors) {
                    var G = a("<select/>").attr("id", y.month),
                        H = a("<select/>").attr("id", y.year);

                    B.html(G.add(H))
                }
                for (var x = A.find("#" + y.days), I = 0; 7 > I; I++) x.append(a("<span/>").text(z.shortDays[(I + h.firstDay) % 7]));
                a("body").append(A)
            }
            h.trigger && (n = a("<a/>").attr("href", "#").addClass(y.trigger).click(function(a) {
                return h.toggle ? v.toggle() : v.show(),
                    a.preventDefault()
            }).insertAfter(c));
            var J = A.find("#" + y.weeks),
                H = A.find("#" + y.year),
                G = A.find("#" + y.month);
            a.extend(v, {
                show: function(b) {
                    if (! (c.attr("readonly") || c.attr("disabled") || t || (b = b || a.Event(), b.type = "onBeforeShow", F.trigger(b), b.isDefaultPrevented()))) {
                        a.each(j,
                            function() {
                                this.hide()
                            }),
                            t = !0,
                            G.off("change").change(function() {
                                v.setValue(e(H.val()), e(a(this).val()))
                            }),
                            H.off("change").change(function() {
                                v.setValue(e(a(this).val()), e(G.val()))
                            }),
                            o = A.find("#" + y.prev).off("click").click(function() {
                                return o.hasClass(y.disabled) || v.addMonth( - 1),
                                    !1
                            }),
                            p = A.find("#" + y.next).off("click").click(function() {
                                return p.hasClass(y.disabled) || v.addMonth(),
                                    !1
                            }),
                            v.setValue(C);
                        var d = c.offset();
                        return /iPad/i.test(navigator.userAgent) && (d.top = d.top - a(window).scrollTop()),
                            A.css({
                                top: d.top + c.outerHeight({
                                    margins: !0
                                }) + h.offset[0],
                                left: d.left + h.offset[1]
                            }),
                            h.speed ? A.show(h.speed,
                                function() {
                                    k(b)
                                }) : (A.show(), k(b)),
                            v
                    }
                },
                setValue: function(c, d, j) {
                    var k = e(d) >= -1 ? new Date(e(c), e(d), e(j == b || isNaN(j) ? 1 : j)) : c || C;
                    if (D > k ? k = D: k > E && (k = E), "string" == typeof c && (k = g(c)), c = k.getFullYear(), d = k.getMonth(), j = k.getDate(), -1 == d ? (d = 11, c--) : 12 == d && (d = 0, c++), !t) return i(k, h),
                        v;
                    r = d,
                        q = c,
                        s = j;
                    var l, j = new Date(c, d, 1 - h.firstDay).getDay(),
                        m = new Date(c, d + 1, 0).getDate(),
                        n = new Date(c, d - 1 + 1, 0).getDate();
                    if (h.selectors) {
                        G.empty(),
                            a.each(z.months,
                                function(b, d) {
                                    D < new Date(c, b + 1, 1) && E > new Date(c, b, 0) && G.append(a("<option/>").html(d).attr("value", b))
                                }),
                            H.empty();
                        for (var k = w.getFullYear(), u = k + h.yearRange[0]; u < k + h.yearRange[1]; u++) D < new Date(u + 1, 0, 1) && E > new Date(u, 0, 0) && H.append(a("<option/>").text(u));
                        G.val(d),
                            H.val(c)
                    } else B.html(z.months[d] + " " + c);
                    J.empty(),
                        o.add(p).removeClass(y.disabled);
                    for (var x, A, u = j ? 0 : -7; (j ? 42 : 35) > u; u++) x = a("<a/>"),
                    u % 7 === 0 && (l = a("<div/>").addClass(y.week), J.append(l)),
                        j > u ? (x.addClass(y.off), A = n - j + u + 1, k = new Date(c, d - 1, A)) : u >= j + m ? (x.addClass(y.off), A = u - m - j + 1, k = new Date(c, d + 1, A)) : (A = u - j + 1, k = new Date(c, d, A), f(C, k) ? x.attr("id", y.current).addClass(y.focus) : f(w, k) && x.attr("id", y.today)),
                    D && D > k && x.add(o).addClass(y.disabled),
                    E && k > E && x.add(p).addClass(y.disabled),
                        x.attr("href", "#" + A).text(A).data("date", k),
                        l.append(x);
                    return J.find("a").click(function(b) {
                        var c = a(this);
                        return c.hasClass(y.disabled) || (a("#" + y.current).removeAttr("id"), c.attr("id", y.current), i(c.data("date"), h, b)),
                            !1
                    }),
                    y.sunday && J.find("." + y.week).each(function() {
                        var b = h.firstDay ? 7 - h.firstDay: 0;
                        a(this).children().slice(b, b + 1).addClass(y.sunday)
                    }),
                        v
                },
                setMin: function(a, b) {
                    return D = g(a),
                    b && D > C && v.setValue(D),
                        v
                },
                setMax: function(a, b) {
                    return E = g(a),
                    b && C > E && v.setValue(E),
                        v
                },
                today: function() {
                    return v.setValue(w)
                },
                addDay: function(a) {
                    return this.setValue(q, r, s + (a || 1))
                },
                addMonth: function(a) {
                    var a = r + (a || 1),
                        b = new Date(q, a + 1, 0).getDate();
                    return this.setValue(q, a, b >= s ? s: b)
                },
                addYear: function(a) {
                    return this.setValue(q + (a || 1), r, s)
                },
                destroy: function() {
                    c.add(document).off("click.d keydown.d"),
                        A.add(n).remove(),
                        c.removeData("dateinput").removeClass(y.input),
                    u && c.replaceWith(u)
                },
                hide: function(b) {
                    if (t) {
                        if (b = a.Event(), b.type = "onHide", F.trigger(b), b.isDefaultPrevented()) return;
                        a(document).off("click.d keydown.d"),
                            A.hide(),
                            t = !1
                    }
                    return v
                },
                toggle: function() {
                    return v.isOpen() ? v.hide() : v.show()
                },
                getConf: function() {
                    return h
                },
                getInput: function() {
                    return c
                },
                getCalendar: function() {
                    return A
                },
                getValue: function(a) {
                    return a ? d(h.formatter, C, a, h.lang) : C
                },
                isOpen: function() {
                    return t
                }
            }),
                a.each(["onBeforeShow", "onShow", "change", "onHide"],
                    function(b, c) {
                        a.isFunction(h[c]) && a(v).on(c, h[c]),
                            v[c] = function(b) {
                                return b && a(v).on(c, b),
                                    v
                            }
                    }),
            h.editable || c.on("focus.d click.d", v.show).keydown(function(b) {
                var d = b.keyCode;
                return ! t && a(l).index(d) >= 0 ? (v.show(b), b.preventDefault()) : ((8 == d || 46 == d) && c.val(""), b.shiftKey || b.ctrlKey || b.altKey || 9 == d ? !0 : b.preventDefault())
            }),
            g(c.val()) && i(C, h)
        }
        a.tools = a.tools || {
                version: "@VERSION"
            };
        var i, j = [],
            k = {},
            l = [75, 76, 38, 39, 74, 72, 40, 37],
            m = {};
        i = a.tools.dateinput = {
            conf: {
                format: "mm/dd/yy",
                formatter: "default",
                selectors: !1,
                yearRange: [ - 5, 5],
                lang: "en",
                offset: [0, 0],
                speed: 0,
                firstDay: 0,
                min: b,
                max: b,
                trigger: 0,
                toggle: 0,
                editable: 0,
                css: {
                    prefix: "cal",
                    input: "date",
                    root: 0,
                    head: 0,
                    title: 0,
                    prev: 0,
                    next: 0,
                    month: 0,
                    year: 0,
                    days: 0,
                    body: 0,
                    weeks: 0,
                    today: 0,
                    current: 0,
                    week: 0,
                    off: 0,
                    sunday: 0,
                    focus: 0,
                    disabled: 0,
                    trigger: 0
                }
            },
            addFormatter: function(a, b) {
                k[a] = b
            },
            localize: function(b, c) {
                a.each(c,
                    function(a, b) {
                        c[a] = b.split(",")
                    }),
                    m[b] = c
            }
        },
            i.localize("en", {
                months: "January,February,March,April,May,June,July,August,September,October,November,December",
                shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",
                days: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",
                shortDays: "Sun,Mon,Tue,Wed,Thu,Fri,Sat"
            });
        var n = a("<a/>");
        i.addFormatter("default",
            function(a, b, c) {
                return a.replace(/d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*'/g,
                    function(a) {
                        return a in c ? c[a] : a
                    })
            }),
            i.addFormatter("prefixed",
                function(a, b, c) {
                    return a.replace(/%(d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*')/g,
                        function(a, b) {
                            return b in c ? c[b] : a
                        })
                }),
            a.expr[":"].date = function(b) {
                var c = b.getAttribute("type");
                return c && "date" == c || !!a(b).data("dateinput")
            },
            a.fn.dateinput = function(b) {
                if (this.data("dateinput")) return this;
                b = a.extend(!0, {},
                    i.conf, b),
                    a.each(b.css,
                        function(a, c) { ! c && "prefix" != a && (b.css[a] = (b.css.prefix || "") + (c || a))
                        });
                var c;
                return this.each(function() {
                    var d = new h(a(this), b);
                    j.push(d),
                        d = d.getInput().data("dateinput", d),
                        c = c ? c.add(d) : d
                }),
                    c ? c: this
            }
    } (jQuery),
    function(a) {
        function b(b, e) {
            var f, g, h, i = this,
                j = b.add(i),
                k = a(window),
                l = a.tools.expose && (e.mask || e.expose),
                m = Math.random().toString().slice(10);
            l && ("string" == typeof l && (l = {
                color: l
            }), l.closeOnClick = l.closeOnEsc = !1);
            var n = e.target || b.attr("rel");
            if (g = n ? a(n) : b, !g.length) throw "Could not find Overlay: " + n;
            b && -1 == b.index(g) && b.click(function(a) {
                return i.load(a),
                    a.preventDefault()
            }),
                a.extend(i, {
                    load: function(b) {
                        if (i.isOpened()) return i;
                        var f = d[e.effect];
                        if (!f) throw 'Overlay: cannot find effect : "' + e.effect + '"';
                        if (e.oneInstance && a.each(c,
                                function() {
                                    this.close(b)
                                }), b = b || a.Event(), b.type = "onBeforeLoad", j.trigger(b), b.isDefaultPrevented()) return i;
                        h = !0,
                        l && a(g).expose(l);
                        var n = e.top,
                            o = e.left,
                            p = g.outerWidth({
                                margin: !0
                            }),
                            q = g.outerHeight({
                                margin: !0
                            });
                        return "string" == typeof n && (n = "center" == n ? Math.max((k.height() - q) / 2, 0) : parseInt(n, 10) / 100 * k.height()),
                        "center" == o && (o = Math.max((k.width() - p) / 2, 0)),
                            f[0].call(i, {
                                    top: n,
                                    left: o
                                },
                                function() {
                                    h && (b.type = "onLoad", j.trigger(b))
                                }),
                        l && e.closeOnClick && a.mask.getMask().one("click", i.close),
                        e.closeOnClick && a(document).on("click." + m,
                            function(b) {
                                a(b.target).parents(g).length || i.close(b)
                            }),
                        e.closeOnEsc && a(document).on("keydown." + m,
                            function(a) {
                                27 == a.keyCode && i.close(a)
                            }),
                            i
                    },
                    close: function(b) {
                        return i.isOpened() ? (b = b || a.Event(), b.type = "onBeforeClose", j.trigger(b), b.isDefaultPrevented() ? void 0 : (h = !1, d[e.effect][1].call(i,
                            function() {
                                b.type = "onClose",
                                    j.trigger(b)
                            }), a(document).off("click." + m + " keydown." + m), l && a.mask.close(), i)) : i
                    },
                    getOverlay: function() {
                        return g
                    },
                    getTrigger: function() {
                        return b
                    },
                    getClosers: function() {
                        return f
                    },
                    isOpened: function() {
                        return h
                    },
                    getConf: function() {
                        return e
                    }
                }),
                a.each(["onBeforeLoad", "onStart", "onLoad", "onBeforeClose", "onClose"],
                    function(b, c) {
                        a.isFunction(e[c]) && a(i).on(c, e[c]),
                            i[c] = function(b) {
                                return b && a(i).on(c, b),
                                    i
                            }
                    }),
                f = g.find(e.close || ".close"),
            !f.length && !e.close && (f = a('<a class="close"></a>'), g.prepend(f)),
                f.click(function(a) {
                    i.close(a)
                }),
            e.load && i.load()
        }
        a.tools = a.tools || {
                version: "@VERSION"
            },
            a.tools.overlay = {
                addEffect: function(a, b, c) {
                    d[a] = [b, c]
                },
                conf: {
                    close: null,
                    closeOnClick: !0,
                    closeOnEsc: !0,
                    closeSpeed: "fast",
                    effect: "default",
                    fixed: !a.browser.msie || 6 < a.browser.version,
                    left: "center",
                    load: !1,
                    mask: null,
                    oneInstance: !0,
                    speed: "normal",
                    target: null,
                    top: "10%"
                }
            };
        var c = [],
            d = {};
        a.tools.overlay.addEffect("default",
            function(b, c) {
                var d = this.getConf(),
                    e = a(window);
                d.fixed || (b.top += e.scrollTop(), b.left += e.scrollLeft()),
                    b.position = d.fixed ? "fixed": "absolute",
                    this.getOverlay().css(b).fadeIn(d.speed, c)
            },
            function(a) {
                this.getOverlay().fadeOut(this.getConf().closeSpeed, a)
            }),
            a.fn.overlay = function(d) {
                var e = this.data("overlay");
                return e ? e: (a.isFunction(d) && (d = {
                    onBeforeLoad: d
                }), d = a.extend(!0, {},
                    a.tools.overlay.conf, d), this.each(function() {
                    e = new b(a(this), d),
                        c.push(e),
                        a(this).data("overlay", e)
                }), d.api ? e: this)
            }
    } (jQuery),
    function(a) {
        function b(a) {
            var b = a.offset();
            return {
                top: b.top + a.height() / 2,
                left: b.left + a.width() / 2
            }
        }
        var c = a.tools.overlay,
            d = a(window);
        a.extend(c.conf, {
            start: {
                top: null,
                left: null
            },
            fadeInSpeed: "fast",
            zIndex: 9999
        }),
            c.addEffect("apple",
                function(c, e) {
                    var f = this.getOverlay(),
                        g = this.getConf(),
                        h = this.getTrigger(),
                        i = this,
                        j = f.outerWidth({
                            margin: !0
                        }),
                        k = f.data("img"),
                        l = g.fixed ? "fixed": "absolute";
                    if (!k) {
                        if (k = f.css("backgroundImage"), !k) throw "background-image CSS property not set for overlay";
                        k = k.slice(k.indexOf("(") + 1, k.indexOf(")")).replace(/\"/g, ""),
                            f.css("backgroundImage", "none"),
                            k = a('<img src="' + k + '"/>'),
                            k.css({
                                border: 0,
                                display: "none"
                            }).width(j),
                            a("body").append(k),
                            f.data("img", k)
                    }
                    var m = g.start.top || Math.round(d.height() / 2),
                        n = g.start.left || Math.round(d.width() / 2);
                    h && (h = b(h), m = h.top, n = h.left),
                        g.fixed ? (m -= d.scrollTop(), n -= d.scrollLeft()) : (c.top += d.scrollTop(), c.left += d.scrollLeft()),
                        k.css({
                            position: "absolute",
                            top: m,
                            left: n,
                            width: 0,
                            zIndex: g.zIndex
                        }).show(),
                        c.position = l,
                        f.css(c),
                        k.animate({
                                top: c.top,
                                left: c.left,
                                width: j
                            },
                            g.speed,
                            function() {
                                f.css("zIndex", g.zIndex + 1).fadeIn(g.fadeInSpeed,
                                    function() {
                                        i.isOpened() && !a(this).index(f) ? e.call() : f.hide()
                                    })
                            }).css("position", l)
                },
                function(c) {
                    var e = this.getOverlay().hide(),
                        f = this.getConf(),
                        g = this.getTrigger(),
                        e = e.data("img"),
                        h = {
                            top: f.start.top,
                            left: f.start.left,
                            width: 0
                        };
                    g && a.extend(h, b(g)),
                    f.fixed && e.css({
                        position: "absolute"
                    }).animate({
                            top: "+=" + d.scrollTop(),
                            left: "+=" + d.scrollLeft()
                        },
                        0),
                        e.animate(h, f.closeSpeed, c)
                })
    } (jQuery),
    function(a) {
        function b(a, b) {
            var c = Math.pow(10, b);
            return Math.round(a * c) / c
        }
        function c(a, b) {
            var c = parseInt(a.css(b), 10);
            return c ? c: (c = a[0].currentStyle) && c.width && parseInt(c.width, 10)
        }
        function d(a) {
            return (a = a.data("events")) && a.onSlide
        }
        function e(e, f) {
            function g(a, c, d, g) {
                if (void 0 === d ? d = c / m * s: g && (d -= f.min), t && (d = Math.round(d / t) * t), (void 0 === c || t) && (c = d * m / s), isNaN(d)) return n;
                c = Math.max(0, Math.min(c, m)),
                    d = c / m * s,
                (g || !j) && (d += f.min),
                j && (g ? c = m - c: d = f.max - d);
                var d = b(d, u),
                    h = "click" == a.type;
                return x && void 0 !== k && !h && (a.type = "onSlide", w.trigger(a, [d, c]), a.isDefaultPrevented()) ? n: (g = h ? f.speed: 0, h = h ?
                    function() {
                        a.type = "change",
                            w.trigger(a, [d])
                    }: null, j ? (q.animate({
                        top: c
                    },
                    g, h), f.progress && r.animate({
                        height: m - c + q.height() / 2
                    },
                    g)) : (q.animate({
                        left: c
                    },
                    g, h), f.progress && r.animate({
                        width: c + q.width() / 2
                    },
                    g)), k = d, e.val(d), n)
            }
            function h() { (j = f.vertical || c(p, "height") > c(p, "width")) ? (m = c(p, "height") - c(q, "height"), l = p.offset().top + m) : (m = c(p, "width") - c(q, "width"), l = p.offset().left)
            }
            function i() {
                h(),
                    n.setValue(void 0 !== f.value ? f.value: f.min)
            }
            var j, k, l, m, n = this,
                o = f.css,
                p = a("<div><div/><a href='#'/></div>").data("rangeinput", n);
            e.before(p);
            var q = p.addClass(o.slider).find("a").addClass(o.handle),
                r = p.find("div").addClass(o.progress);
            a.each(["min", "max", "step", "value"],
                function(a, b) {
                    var c = e.attr(b);
                    parseFloat(c) && (f[b] = parseFloat(c, 10))
                });
            var s = f.max - f.min,
                t = "any" == f.step ? 0 : f.step,
                u = f.precision;
            if (void 0 === u && (u = t.toString().split("."), u = 2 === u.length ? u[1].length: 0), "range" == e.attr("type")) {
                var v = e.clone().wrap("<div/>").parent().html(),
                    v = a(v.replace(/type/i, "type=text data-orig-type"));
                v.val(f.value),
                    e.replaceWith(v),
                    e = v
            }
            e.addClass(o.input);
            var w = a(n).add(e),
                x = !0;
            a.extend(n, {
                getValue: function() {
                    return k
                },
                setValue: function(b, c) {
                    return h(),
                        g(c || a.Event("api"), void 0, b, !0)
                },
                getConf: function() {
                    return f
                },
                getProgress: function() {
                    return r
                },
                getHandle: function() {
                    return q
                },
                getInput: function() {
                    return e
                },
                step: function(b, c) {
                    c = c || a.Event(),
                        n.setValue(k + ("any" == f.step ? 1 : f.step) * (b || 1), c)
                },
                stepUp: function(a) {
                    return n.step(a || 1)
                },
                stepDown: function(a) {
                    return n.step( - a || -1)
                }
            }),
                a.each(["onSlide", "change"],
                    function(b, c) {
                        a.isFunction(f[c]) && a(n).on(c, f[c]),
                            n[c] = function(b) {
                                return b && a(n).on(c, b),
                                    n
                            }
                    }),
                q.drag({
                    drag: !1
                }).on("dragStart",
                    function() {
                        h(),
                            x = d(a(n)) || d(e)
                    }).on("drag",
                    function(a, b, c) {
                        return e.is(":disabled") ? !1 : void g(a, j ? b: c)
                    }).on("dragEnd",
                    function(a) {
                        a.isDefaultPrevented() || (a.type = "change", w.trigger(a, [k]))
                    }).click(function(a) {
                        return a.preventDefault()
                    }),
                p.click(function(a) {
                    if (e.is(":disabled") || a.target == q[0]) return a.preventDefault();
                    h();
                    var b = j ? q.height() / 2 : q.width() / 2;
                    g(a, j ? m - l - b + a.pageY: a.pageX - l - b)
                }),
            f.keyboard && e.keydown(function(b) {
                if (!e.attr("readonly")) {
                    var c = b.keyCode,
                        d = -1 != a([75, 76, 38, 33, 39]).index(c),
                        f = -1 != a([74, 72, 40, 34, 37]).index(c);
                    if ((d || f) && !b.shiftKey && !b.altKey && !b.ctrlKey) return d ? n.step(33 == c ? 10 : 1, b) : f && n.step(34 == c ? -10 : -1, b),
                        b.preventDefault()
                }
            }),
                e.blur(function(b) {
                    var c = a(this).val();
                    c !== k && n.setValue(c, b)
                }),
                a.extend(e[0], {
                    stepUp: n.stepUp,
                    stepDown: n.stepDown
                }),
                i(),
            m || a(window).load(i)
        }
        a.tools = a.tools || {
                version: "@VERSION"
            };
        var f;
        f = a.tools.rangeinput = {
            conf: {
                min: 0,
                max: 100,
                step: "any",
                steps: 0,
                value: 0,
                precision: void 0,
                vertical: 0,
                keyboard: !0,
                progress: !1,
                speed: 100,
                css: {
                    input: "range",
                    slider: "slider",
                    progress: "progress",
                    handle: "handle"
                }
            }
        };
        var g, h;
        a.fn.drag = function(b) {
            return document.ondragstart = function() {
                return ! 1
            },
                b = a.extend({
                        x: !0,
                        y: !0,
                        drag: !0
                    },
                    b),
                g = g || a(document).on("mousedown mouseup",
                        function(c) {
                            var d = a(c.target);
                            if ("mousedown" == c.type && d.data("drag")) {
                                var e = d.position(),
                                    f = c.pageX - e.left,
                                    i = c.pageY - e.top,
                                    j = !0;
                                g.on("mousemove.drag",
                                    function(a) {
                                        var c = a.pageX - f,
                                            a = a.pageY - i,
                                            e = {};
                                        b.x && (e.left = c),
                                        b.y && (e.top = a),
                                        j && (d.trigger("dragStart"), j = !1),
                                        b.drag && d.css(e),
                                            d.trigger("drag", [a, c]),
                                            h = d
                                    }),
                                    c.preventDefault()
                            } else try {
                                h && h.trigger("dragEnd")
                            } finally {
                                g.off("mousemove.drag"),
                                    h = null
                            }
                        }),
                this.data("drag", !0)
        },
            a.expr[":"].range = function(b) {
                var c = b.getAttribute("type");
                return c && "range" == c || !!a(b).filter("input").data("rangeinput")
            },
            a.fn.rangeinput = function(b) {
                if (this.data("rangeinput")) return this;
                var c, b = a.extend(!0, {},
                    f.conf, b);
                return this.each(function() {
                    var d = new e(a(this), a.extend(!0, {},
                            b)),
                        d = d.getInput().data("rangeinput", d);
                    c = c ? c.add(d) : d
                }),
                    c ? c: this
            }
    } (jQuery),
    function(a) {
        function b(b, c) {
            var d = a(c);
            return 2 > d.length ? d: b.parent().find(c)
        }
        function c(c, e) {
            var f = this,
                g = c.add(f),
                h = c.children(),
                i = 0,
                j = e.vertical;
            if (d || (d = f), 1 < h.length && (h = a(e.items, c)), 1 < e.size && (e.circular = !1), a.extend(f, {
                    getConf: function() {
                        return e
                    },
                    getIndex: function() {
                        return i
                    },
                    getSize: function() {
                        return f.getItems().size()
                    },
                    getNaviButtons: function() {
                        return n.add(o)
                    },
                    getRoot: function() {
                        return c
                    },
                    getItemWrap: function() {
                        return h
                    },
                    getItems: function() {
                        return h.find(e.item).not("." + e.clonedClass)
                    },
                    move: function(a, b) {
                        return f.seekTo(i + a, b)
                    },
                    next: function(a) {
                        return f.move(e.size, a)
                    },
                    prev: function(a) {
                        return f.move( - e.size, a)
                    },
                    begin: function(a) {
                        return f.seekTo(0, a)
                    },
                    end: function(a) {
                        return f.seekTo(f.getSize() - 1, a)
                    },
                    focus: function() {
                        return d = f
                    },
                    addItem: function(b) {
                        return b = a(b),
                            e.circular ? (h.children().last().before(b), h.children().first().replaceWith(b.clone().addClass(e.clonedClass))) : (h.append(b), o.removeClass("disabled")),
                            g.trigger("onAddItem", [b]),
                            f
                    },
                    seekTo: function(b, c, k) {
                        if (b.jquery || (b = 1 * b), e.circular && 0 === b && -1 == i && 0 !== c || !e.circular && 0 > b || b > f.getSize() || -1 > b) return f;
                        var l = b;
                        b.jquery ? b = f.getItems().index(b) : l = f.getItems().eq(b);
                        var m = a.Event("onBeforeSeek");
                        return k || (g.trigger(m, [b, c]), !m.isDefaultPrevented() && l.length) ? (l = j ? {
                            top: -l.position().top
                        }: {
                            left: -l.position().left
                        },
                            i = b, d = f, void 0 === c && (c = e.speed), h.animate(l, c, e.easing, k ||
                            function() {
                                g.trigger("onSeek", [b])
                            }), f) : f
                    }
                }), a.each(["onBeforeSeek", "onSeek", "onAddItem"],
                    function(b, c) {
                        a.isFunction(e[c]) && a(f).on(c, e[c]),
                            f[c] = function(b) {
                                return b && a(f).on(c, b),
                                    f
                            }
                    }), e.circular) {
                var k = f.getItems().slice( - 1).clone().prependTo(h),
                    l = f.getItems().eq(1).clone().appendTo(h);
                k.add(l).addClass(e.clonedClass),
                    f.onBeforeSeek(function(a, b, c) {
                        if (!a.isDefaultPrevented()) {
                            if ( - 1 == b) return f.seekTo(k, c,
                                function() {
                                    f.end(0)
                                }),
                                a.preventDefault();
                            b == f.getSize() && f.seekTo(l, c,
                                function() {
                                    f.begin(0)
                                })
                        }
                    });
                var m = c.parents().add(c).filter(function() {
                    return "none" === a(this).css("display") ? !0 : void 0
                });
                m.length ? (m.show(), f.seekTo(0, 0,
                    function() {}), m.hide()) : f.seekTo(0, 0,
                    function() {})
            }
            var n = b(c, e.prev).click(function(a) {
                    a.stopPropagation(),
                        f.prev()
                }),
                o = b(c, e.next).click(function(a) {
                    a.stopPropagation(),
                        f.next()
                });
            if (e.circular || (f.onBeforeSeek(function(a, b) {
                    setTimeout(function() {
                            a.isDefaultPrevented() || (n.toggleClass(e.disabledClass, 0 >= b), o.toggleClass(e.disabledClass, b >= f.getSize() - 1))
                        },
                        1)
                }), e.initialIndex || n.addClass(e.disabledClass)), 2 > f.getSize() && n.add(o).addClass(e.disabledClass), e.mousewheel && a.fn.mousewheel && c.mousewheel(function(a, b) {
                    return e.mousewheel ? (f.move(0 > b ? 1 : -1, e.wheelSpeed || 50), !1) : void 0
                }), e.touch) {
                var p, q;
                h[0].ontouchstart = function(a) {
                    a = a.touches[0],
                        p = a.clientX,
                        q = a.clientY
                },
                    h[0].ontouchmove = function(a) {
                        if (1 == a.touches.length && !h.is(":animated")) {
                            var b = a.touches[0],
                                c = p - b.clientX,
                                b = q - b.clientY;
                            f[j && b > 0 || !j && c > 0 ? "next": "prev"](),
                                a.preventDefault()
                        }
                    }
            }
            e.keyboard && a(document).on("keydown.scrollable",
                function(b) {
                    if (! (!e.keyboard || b.altKey || b.ctrlKey || b.metaKey || a(b.target).is(":input") || "static" != e.keyboard && d != f)) {
                        var c = b.keyCode;
                        if (j && (38 == c || 40 == c)) return f.move(38 == c ? -1 : 1),
                            b.preventDefault();
                        if (!j && (37 == c || 39 == c)) return f.move(37 == c ? -1 : 1),
                            b.preventDefault()
                    }
                }),
            e.initialIndex && f.seekTo(e.initialIndex, 0,
                function() {})
        }
        a.tools = a.tools || {
                version: "@VERSION"
            },
            a.tools.scrollable = {
                conf: {
                    activeClass: "active",
                    circular: !1,
                    clonedClass: "cloned",
                    disabledClass: "disabled",
                    easing: "swing",
                    initialIndex: 0,
                    item: "> *",
                    items: ".items",
                    keyboard: !0,
                    mousewheel: !1,
                    next: ".next",
                    prev: ".prev",
                    size: 1,
                    speed: 400,
                    vertical: !1,
                    touch: !0,
                    wheelSpeed: 0
                }
            };
        var d;
        a.fn.scrollable = function(b) {
            var d = this.data("scrollable");
            return d ? d: (b = a.extend({},
                a.tools.scrollable.conf, b), this.each(function() {
                d = new c(a(this), b),
                    a(this).data("scrollable", d)
            }), b.api ? d: this)
        }
    } (jQuery),
    function(a) {
        var b = a.tools.scrollable;
        b.autoscroll = {
            conf: {
                autoplay: !0,
                interval: 3e3,
                autopause: !0
            }
        },
            a.fn.autoscroll = function(c) {
                "number" == typeof c && (c = {
                    interval: c
                });
                var d, e = a.extend({},
                    b.autoscroll.conf, c);
                return this.each(function() {
                    function b() {
                        c && clearTimeout(c),
                            c = setTimeout(function() {
                                    f.next()
                                },
                                e.interval)
                    }
                    var c, f = a(this).data("scrollable"),
                        g = f.getRoot(),
                        h = !1;
                    f && (d = f),
                        f.play = function() {
                            c || (h = !1, g.on("onSeek", b), b())
                        },
                        f.pause = function() {
                            c = clearTimeout(c),
                                g.off("onSeek", b)
                        },
                        f.resume = function() {
                            h || f.play()
                        },
                        f.stop = function() {
                            h = !0,
                                f.pause()
                        },
                    e.autopause && g.add(f.getNaviButtons()).hover(f.pause, f.resume),
                    e.autoplay && f.play()
                }),
                    e.api ? d: this
            }
    } (jQuery),
    function(a) {
        function b(b, c) {
            var d = a(c);
            return 2 > d.length ? d: b.parent().find(c)
        }
        var c = a.tools.scrollable;
        c.navigator = {
            conf: {
                navi: ".navi",
                naviItem: null,
                activeClass: "active",
                indexed: !1,
                idPrefix: null,
                history: !1
            }
        },
            a.fn.navigator = function(d) {
                "string" == typeof d && (d = {
                    navi: d
                });
                var e, d = a.extend({},
                    c.navigator.conf, d);
                return this.each(function() {
                    function c() {
                        return h.find(d.naviItem || "> *")
                    }
                    function f(b) {
                        var c = a("<" + (d.naviItem || "a") + "/>").click(function(c) {
                            a(this),
                                g.seekTo(b),
                                c.preventDefault(),
                            k && history.pushState({
                                    i: b
                                },
                                "")
                        });
                        return 0 === b && c.addClass(j),
                        d.indexed && c.text(b + 1),
                        d.idPrefix && c.attr("id", d.idPrefix + b),
                            c.appendTo(h)
                    }
                    var g = a(this).data("scrollable"),
                        h = d.navi.jquery ? d.navi: b(g.getRoot(), d.navi),
                        i = g.getNaviButtons(),
                        j = d.activeClass,
                        k = d.history && !!history.pushState,
                        l = g.getConf().size;
                    g && (e = g),
                        g.getNaviButtons = function() {
                            return i.add(h)
                        },
                    k && (history.pushState({
                            i: 0
                        },
                        ""), a(window).on("popstate",
                        function(a) { (a = a.originalEvent.state) && g.seekTo(a.i)
                        })),
                        c().length ? c().each(function(b) {
                            a(this).click(function(c) {
                                a(this),
                                    g.seekTo(b),
                                    c.preventDefault(),
                                k && history.pushState({
                                        i: b
                                    },
                                    "")
                            })
                        }) : a.each(g.getItems(),
                            function(a) {
                                a % l == 0 && f(a)
                            }),
                        g.onBeforeSeek(function(a, b) {
                            setTimeout(function() {
                                    if (!a.isDefaultPrevented()) {
                                        var d = b / l;
                                        c().eq(d).length && c().removeClass(j).eq(d).addClass(j)
                                    }
                                },
                                1)
                        }),
                        g.onAddItem(function(a, b) {
                            var c = g.getItems().index(b);
                            c % l == 0 && f(c)
                        })
                }),
                    d.api ? e: this
            }
    } (jQuery),
    function(a) {
        function b(b, c, d) {
            var f, g = this,
                h = b.add(this),
                i = b.find(d.tabs),
                j = c.jquery ? c: b.children(c);
            i.length || (i = b.children()),
            j.length || (j = b.parent().find(c)),
            j.length || (j = a(c)),
                a.extend(this, {
                    click: function(c, j) {
                        var k = i.eq(c),
                            l = !b.data("tabs");
                        if ("string" == typeof c && c.replace("#", "") && (k = i.filter('[href*="' + c.replace("#", "") + '"]'), c = Math.max(i.index(k), 0)), d.rotate) {
                            var m = i.length - 1;
                            if (0 > c) return g.click(m, j);
                            if (c > m) return g.click(0, j)
                        }
                        if (!k.length) {
                            if (f >= 0) return g;
                            c = d.initialIndex,
                                k = i.eq(c)
                        }
                        return c === f ? g: (j = j || a.Event(), j.type = "onBeforeClick", h.trigger(j, [c]), j.isDefaultPrevented() ? void 0 : (e[l ? d.initialEffect && d.effect || "default": d.effect].call(g, c,
                            function() {
                                f = c,
                                    j.type = "onClick",
                                    h.trigger(j, [c])
                            }), i.removeClass(d.current), k.addClass(d.current), g))
                    },
                    getConf: function() {
                        return d
                    },
                    getTabs: function() {
                        return i
                    },
                    getPanes: function() {
                        return j
                    },
                    getCurrentPane: function() {
                        return j.eq(f)
                    },
                    getCurrentTab: function() {
                        return i.eq(f)
                    },
                    getIndex: function() {
                        return f
                    },
                    next: function() {
                        return g.click(f + 1)
                    },
                    prev: function() {
                        return g.click(f - 1)
                    },
                    destroy: function() {
                        return i.off(d.event).removeClass(d.current),
                            j.find('a[href^="#"]').off("click.T"),
                            g
                    }
                }),
                a.each(["onBeforeClick", "onClick"],
                    function(b, c) {
                        a.isFunction(d[c]) && a(g).on(c, d[c]),
                            g[c] = function(b) {
                                return b && a(g).on(c, b),
                                    g
                            }
                    }),
            d.history && a.fn.history && (a.tools.history.init(i), d.event = "history"),
                i.each(function(b) {
                    a(this).on(d.event,
                        function(a) {
                            return g.click(b, a),
                                a.preventDefault()
                        })
                }),
                j.find('a[href^="#"]').on("click.T",
                    function(b) {
                        g.click(a(this).attr("href"), b)
                    }),
                location.hash && "a" == d.tabs && b.find('[href="' + location.hash + '"]').length ? g.click(location.hash) : (0 === d.initialIndex || 0 < d.initialIndex) && g.click(d.initialIndex)
        }
        a.tools = a.tools || {
                version: "@VERSION"
            },
            a.tools.tabs = {
                conf: {
                    tabs: "a",
                    current: "current",
                    onBeforeClick: null,
                    onClick: null,
                    effect: "default",
                    initialEffect: !1,
                    initialIndex: 0,
                    event: "click",
                    rotate: !1,
                    slideUpSpeed: 400,
                    slideDownSpeed: 400,
                    history: !1
                },
                addEffect: function(a, b) {
                    e[a] = b
                }
            };
        var c, d, e = {
            "default": function(a, b) {
                this.getPanes().hide().eq(a).show(),
                    b.call()
            },
            fade: function(a, b) {
                var c = this.getConf(),
                    d = c.fadeOutSpeed,
                    e = this.getPanes();
                d ? e.fadeOut(d) : e.hide(),
                    e.eq(a).fadeIn(c.fadeInSpeed, b)
            },
            slide: function(a, b) {
                var c = this.getConf();
                this.getPanes().slideUp(c.slideUpSpeed),
                    this.getPanes().eq(a).slideDown(c.slideDownSpeed, b)
            },
            ajax: function(a, b) {
                this.getPanes().eq(0).load(this.getTabs().eq(a).attr("href"), b)
            }
        };
        a.tools.tabs.addEffect("horizontal",
            function(b, e) {
                if (!c) {
                    var f = this.getPanes().eq(b),
                        g = this.getCurrentPane();
                    d || (d = this.getPanes().eq(0).width()),
                        c = !0,
                        f.show(),
                        g.animate({
                                width: 0
                            },
                            {
                                step: function(a) {
                                    f.css("width", d - a)
                                },
                                complete: function() {
                                    a(this).hide(),
                                        e.call(),
                                        c = !1
                                }
                            }),
                    g.length || (e.call(), c = !1)
                }
            }),
            a.fn.tabs = function(c, d) {
                var e = this.data("tabs");
                return e && (e.destroy(), this.removeData("tabs")),
                a.isFunction(d) && (d = {
                    onBeforeClick: d
                }),
                    d = a.extend({},
                        a.tools.tabs.conf, d),
                    this.each(function() {
                        e = new b(a(this), c, d),
                            a(this).data("tabs", e)
                    }),
                    d.api ? e: this
            }
    } (jQuery),
    function(a) {
        function b(b, c) {
            function d(c) {
                var d = a(c);
                return 2 > d.length ? d: b.parent().find(c)
            }
            function e() {
                f = setTimeout(function() {
                        i.next()
                    },
                    c.interval)
            }
            var f, g = this,
                h = b.add(this),
                i = b.data("tabs"),
                j = !0,
                k = d(c.next).click(function() {
                    i.next()
                }),
                l = d(c.prev).click(function() {
                    i.prev()
                });
            if (a.extend(g, {
                    getTabs: function() {
                        return i
                    },
                    getConf: function() {
                        return c
                    },
                    play: function() {
                        if (f) return g;
                        var b = a.Event("onBeforePlay");
                        return h.trigger(b),
                            b.isDefaultPrevented() ? g: (j = !1, h.trigger("onPlay"), h.on("onClick", e), e(), g)
                    },
                    pause: function() {
                        if (!f) return g;
                        var b = a.Event("onBeforePause");
                        return h.trigger(b),
                            b.isDefaultPrevented() ? g: (f = clearTimeout(f), h.trigger("onPause"), h.off("onClick", e), g)
                    },
                    resume: function() {
                        j || g.play()
                    },
                    stop: function() {
                        g.pause(),
                            j = !0
                    }
                }), a.each(["onBeforePlay", "onPlay", "onBeforePause", "onPause"],
                    function(b, d) {
                        a.isFunction(c[d]) && a(g).on(d, c[d]),
                            g[d] = function(b) {
                                return a(g).on(d, b)
                            }
                    }), c.autopause && i.getTabs().add(k).add(l).add(i.getPanes()).hover(g.pause, g.resume), c.autoplay && g.play(), c.clickable && i.getPanes().click(function() {
                    i.next()
                }), !i.getConf().rotate) {
                var m = c.disabledClass;
                i.getIndex() || l.addClass(m),
                    i.onBeforeClick(function(a, b) {
                        l.toggleClass(m, !b),
                            k.toggleClass(m, b == i.getTabs().length - 1)
                    })
            }
        }
        var c;
        c = a.tools.tabs.slideshow = {
            conf: {
                next: ".forward",
                prev: ".backward",
                disabledClass: "disabled",
                autoplay: !1,
                autopause: !0,
                interval: 3e3,
                clickable: !0,
                api: !1
            }
        },
            a.fn.slideshow = function(d) {
                var e = this.data("slideshow");
                return e ? e: (d = a.extend({},
                    c.conf, d), this.each(function() {
                    e = new b(a(this), d),
                        a(this).data("slideshow", e)
                }), d.api ? e: this)
            }
    } (jQuery),
    function(a) {
        function b() {
            if (a.browser.msie) {
                var b = a(document).height(),
                    c = a(window).height();
                return [window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, 20 > b - c ? c: b]
            }
            return [a(document).width(), a(document).height()]
        }
        function c(b) {
            return b ? b.call(a.mask) : void 0
        }
        a.tools = a.tools || {
                version: "@VERSION"
            };
        var d;
        d = a.tools.expose = {
            conf: {
                maskId: "exposeMask",
                loadSpeed: "slow",
                closeSpeed: "fast",
                closeOnClick: !0,
                closeOnEsc: !0,
                zIndex: 9998,
                opacity: .8,
                startOpacity: 0,
                color: "#fff",
                onLoad: null,
                onClose: null
            }
        };
        var e, f, g, h, i;
        a.mask = {
            load: function(j, k) {
                if (g) return this;
                "string" == typeof j && (j = {
                    color: j
                }),
                    j = j || h,
                    h = j = a.extend(a.extend({},
                        d.conf), j),
                    e = a("#" + j.maskId),
                e.length || (e = a("<div/>").attr("id", j.maskId), a("body").append(e));
                var l = b();
                return e.css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: l[0],
                    height: l[1],
                    display: "none",
                    opacity: j.startOpacity,
                    zIndex: j.zIndex
                }),
                j.color && e.css("backgroundColor", j.color),
                    !1 === c(j.onBeforeLoad) ? this: (j.closeOnEsc && a(document).on("keydown.mask",
                        function(b) {
                            27 == b.keyCode && a.mask.close(b)
                        }), j.closeOnClick && e.on("click.mask",
                        function(b) {
                            a.mask.close(b)
                        }), a(window).on("resize.mask",
                        function() {
                            a.mask.fit()
                        }), k && k.length && (i = k.eq(0).css("zIndex"), a.each(k,
                        function() {
                            var b = a(this);
                            /relative|absolute|fixed/i.test(b.css("position")) || b.css("position", "relative")
                        }), f = k.css({
                        zIndex: Math.max(j.zIndex + 1, "auto" == i ? 0 : i)
                    })), e.css({
                        display: "block"
                    }).fadeTo(j.loadSpeed, j.opacity,
                        function() {
                            a.mask.fit(),
                                c(j.onLoad),
                                g = "full"
                        }), g = !0, this)
            },
            close: function() {
                if (g) {
                    if (!1 === c(h.onBeforeClose)) return this;
                    e.fadeOut(h.closeSpeed,
                        function() {
                            c(h.onClose),
                            f && f.css({
                                zIndex: i
                            }),
                                g = !1
                        }),
                        a(document).off("keydown.mask"),
                        e.off("click.mask"),
                        a(window).off("resize.mask")
                }
                return this
            },
            fit: function() {
                if (g) {
                    var a = b();
                    e.css({
                        width: a[0],
                        height: a[1]
                    })
                }
            },
            getMask: function() {
                return e
            },
            isLoaded: function(a) {
                return a ? "full" == g: g
            },
            getConf: function() {
                return h
            },
            getExposed: function() {
                return f
            }
        },
            a.fn.mask = function(b) {
                return a.mask.load(b),
                    this
            },
            a.fn.expose = function(b) {
                return a.mask.load(b, this),
                    this
            }
    } (jQuery),
    function() {
        function a(a, b) {
            if (b) for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
            return a
        }
        function b(a, b) {
            var c, d = [];
            for (c in a) a.hasOwnProperty(c) && (d[c] = b(a[c]));
            return d
        }
        function c(b, c, f) {
            if (i.isSupported(c.version)) b.innerHTML = i.getHTML(c, f);
            else if (c.expressInstall && i.isSupported([6, 65])) b.innerHTML = i.getHTML(a(c, {
                src: c.expressInstall
            }), {
                MMredirectURL: location.href,
                MMplayerType: "PlugIn",
                MMdoctitle: document.title
            });
            else if (b.innerHTML.replace(/\s/g, "") || (b.innerHTML = "<h2>Flash version " + c.version + " or greater is required</h2><h3>" + (0 < j[0] ? "Your version is " + j: "You have no flash plugin installed") + "</h3>" + ("A" == b.tagName ? "<p>Click here to download latest version</p>": "<p>Download latest version from <a href='" + e + "'>here</a></p>"), "A" == b.tagName && (b.onclick = function() {
                    location.href = e
                })), c.onFail) {
                var g = c.onFail.call(this);
                "string" == typeof g && (b.innerHTML = g)
            }
            d && (window[c.id] = document.getElementById(c.id)),
                a(this, {
                    getRoot: function() {
                        return b
                    },
                    getOptions: function() {
                        return c
                    },
                    getConf: function() {
                        return f
                    },
                    getApi: function() {
                        return b.firstChild
                    }
                })
        }
        var d = document.all,
            e = "http://www.adobe.com/go/getflashplayer",
            f = "function" == typeof jQuery,
            g = /(\d+)[^\d]+(\d+)[^\d]*(\d*)/,
            h = {
                width: "100%",
                height: "100%",
                id: "_" + ("" + Math.random()).slice(9),
                allowfullscreen: !0,
                allowscriptaccess: "always",
                quality: "high",
                version: [3, 0],
                onFail: null,
                expressInstall: null,
                w3c: !1,
                cachebusting: !1
            };
        window.attachEvent && window.attachEvent("onbeforeunload",
            function() {
                __flash_unloadHandler = function() {},
                    __flash_savedUnloadHandler = function() {}
            }),
            window.flashembed = function(b, d, e) {
                return "string" == typeof b && (b = document.getElementById(b.replace("#", ""))),
                    b ? ("string" == typeof d && (d = {
                        src: d
                    }), new c(b, a(a({},
                        h), d), e)) : void 0
            };
        var i = a(window.flashembed, {
                conf: h,
                getVersion: function() {
                    var a, b;
                    try {
                        b = navigator.plugins["Shockwave Flash"].description.slice(16)
                    } catch(c) {
                        try {
                            b = (a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")) && a.GetVariable("$version")
                        } catch(d) {
                            try {
                                b = (a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6")) && a.GetVariable("$version")
                            } catch(e) {}
                        }
                    }
                    return (b = g.exec(b)) ? [b[1], b[3]] : [0, 0]
                },
                asString: function(a) {
                    if (null === a || void 0 === a) return null;
                    var c = typeof a;
                    switch ("object" == c && a.push && (c = "array"), c) {
                        case "string":
                            return a = a.replace(RegExp('(["\\\\])', "g"), "\\$1"),
                                a = a.replace(/^\s?(\d+\.?\d*)%/, "$1pct"),
                            '"' + a + '"';
                        case "array":
                            return "[" + b(a,
                                    function(a) {
                                        return i.asString(a)
                                    }).join(",") + "]";
                        case "function":
                            return '"function()"';
                        case "object":
                            var d, c = [];
                            for (d in a) a.hasOwnProperty(d) && c.push('"' + d + '":' + i.asString(a[d]));
                            return "{" + c.join(",") + "}"
                    }
                    return ("" + a).replace(/\s/g, " ").replace(/\'/g, '"')
                },
                getHTML: function(b, c) {
                    var b = a({},
                            b),
                        e = '<object width="' + b.width + '" height="' + b.height + '" id="' + b.id + '" name="' + b.id + '"';
                    b.cachebusting && (b.src += ( - 1 != b.src.indexOf("?") ? "&": "?") + Math.random()),
                        e = b.w3c || !d ? e + (' data="' + b.src + '" type="application/x-shockwave-flash"') : e + ' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"',
                        e += ">",
                    (b.w3c || d) && (e += '<param name="movie" value="' + b.src + '" />'),
                        b.width = b.height = b.id = b.w3c = b.src = null,
                        b.onFail = b.version = b.expressInstall = null;
                    for (var f in b) b[f] && (e += '<param name="' + f + '" value="' + b[f] + '" />');
                    if (f = "", c) {
                        for (var g in c) if (c[g]) {
                            var h = c[g];
                            f += g + "=" + encodeURIComponent(/function|object/.test(typeof h) ? i.asString(h) : h) + "&"
                        }
                        f = f.slice(0, -1),
                            e += '<param name="flashvars" value=\'' + f + "' />"
                    }
                    return e + "</object>"
                },
                isSupported: function(a) {
                    return j[0] > a[0] || j[0] == a[0] && j[1] >= a[1]
                }
            }),
            j = i.getVersion();
        f && (jQuery.tools = jQuery.tools || {
                version: "@VERSION"
            },
            jQuery.tools.flashembed = {
                conf: h
            },
            jQuery.fn.flashembed = function(a, b) {
                return this.each(function() {
                    jQuery(this).data("flashembed", flashembed(this, a, b))
                })
            })
    } (),
    function(a) {
        function b(a) {
            if (a) {
                var b = d.contentWindow.document;
                b.open().close(),
                    b.location.hash = a
            }
        }
        var c, d, e, f;
        a.tools = a.tools || {
                version: "@VERSION"
            },
            a.tools.history = {
                init: function(g) {
                    f || (a.browser.msie && "8" > a.browser.version ? d || (d = a("<iframe/>").attr("src", "javascript:false;").hide().get(0), a("body").append(d), setInterval(function() {
                            var b = d.contentWindow.document.location.hash;
                            c !== b && a(window).trigger("hash", b)
                        },
                        100), b(location.hash || "#")) : setInterval(function() {
                            var b = location.hash;
                            b !== c && a(window).trigger("hash", b)
                        },
                        100), e = e ? e.add(g) : g, g.click(function(c) {
                        var e = a(this).attr("href");
                        return d && b(e),
                            "#" != e.slice(0, 1) ? (location.href = "#" + e, c.preventDefault()) : void 0
                    }), f = !0)
                }
            },
            a(window).on("hash",
                function(b, d) {
                    d ? e.filter(function() {
                        var b = a(this).attr("href");
                        return b == d || b == d.replace("#", "")
                    }).trigger("history", [d]) : e.eq(0).trigger("history", [d]),
                        c = d
                }),
            a.fn.history = function(b) {
                return a.tools.history.init(this),
                    this.on("history", b)
            }
    } (jQuery),
    function(a) {
        function b(b) {
            switch (b.type) {
                case "mousemove":
                    return a.extend(b.data, {
                        clientX: b.clientX,
                        clientY: b.clientY,
                        pageX: b.pageX,
                        pageY: b.pageY
                    });
                case "DOMMouseScroll":
                    a.extend(b, b.data),
                        b.delta = -b.detail / 3;
                    break;
                case "mousewheel":
                    b.delta = b.wheelDelta / 120
            }
            return b.type = "wheel",
                a.event.handle.call(this, b, b.delta)
        }
        a.fn.mousewheel = function(a) {
            return this[a ? "on": "trigger"]("wheel", a)
        },
            a.event.special.wheel = {
                setup: function() {
                    a.event.add(this, c, b, {})
                },
                teardown: function() {
                    a.event.remove(this, c, b)
                }
            };
        var c = a.browser.mozilla ? "DOMMouseScroll" + ("1.9" > a.browser.version ? " mousemove": "") : "mousewheel"
    } (jQuery),
    function(a) {
        function b(b, c, d) {
            var e = d.relative ? b.position().top: b.offset().top,
                f = d.relative ? b.position().left: b.offset().left,
                g = d.position[0],
                e = e - (c.outerHeight() - d.offset[0]),
                f = f + (b.outerWidth() + d.offset[1]);
            /iPad/i.test(navigator.userAgent) && (e -= a(window).scrollTop());
            var h = c.outerHeight() + b.outerHeight();
            return "center" == g && (e += h / 2),
            "bottom" == g && (e += h),
                g = d.position[1],
                b = c.outerWidth() + b.outerWidth(),
            "center" == g && (f -= b / 2),
            "left" == g && (f -= b),
            {
                top: e,
                left: f
            }
        }
        function c(c, e) {
            var f, g, h = this,
                i = c.add(h),
                j = 0,
                k = 0,
                l = c.attr("title"),
                m = c.attr("data-tooltip"),
                n = d[e.effect],
                o = c.is(":input"),
                p = o && c.is(":checkbox, :radio, select, :button, :submit"),
                q = c.attr("type"),
                r = e.events[q] || e.events[o ? p ? "widget": "input": "def"];

            if (!n) throw 'Nonexistent effect "' + e.effect + '"';
            if (r = r.split(/,\s*/), 2 != r.length) throw "Tooltip: bad events configuration for " + q;
            c.on(r[0],
                function(a) {
                    clearTimeout(j),
                        e.predelay ? k = setTimeout(function() {
                                h.show(a)
                            },
                            e.predelay) : h.show(a)
                }).on(r[1],
                function(a) {
                    clearTimeout(k),
                        e.delay ? j = setTimeout(function() {
                                h.hide(a)
                            },
                            e.delay) : h.hide(a)
                }),
            l && e.cancelDefault && (c.removeAttr("title"), c.data("title", l)),
                a.extend(h, {
                    show: function(d) {
                        if (!f && (m ? f = a(m) : e.tip ? f = a(e.tip).eq(0) : l ? f = a(e.layout).addClass(e.tipClass).appendTo(document.body).hide().append(l) : (f = c.next(), f.length || (f = c.parent().next())), !f.length)) throw "Cannot find tooltip for " + c;
                        if (h.isShown()) return h;
                        f.stop(!0, !0);
                        var o = b(c, f, e);
                        return e.tip && f.html(c.data("title")),
                            d = a.Event(),
                            d.type = "onBeforeShow",
                            i.trigger(d, [o]),
                            d.isDefaultPrevented() ? h: (o = b(c, f, e), f.css({
                                position: "absolute",
                                top: o.top,
                                left: o.left
                            }), g = !0, n[0].call(h,
                                function() {
                                    d.type = "onShow",
                                        g = "full",
                                        i.trigger(d)
                                }), o = e.events.tooltip.split(/,\s*/), f.data("__set") || (f.off(o[0]).on(o[0],
                                function() {
                                    clearTimeout(j),
                                        clearTimeout(k)
                                }), o[1] && !c.is("input:not(:checkbox, :radio), textarea") && f.off(o[1]).on(o[1],
                                function(a) {
                                    a.relatedTarget != c[0] && c.trigger(r[1].split(" ")[0])
                                }), e.tip || f.data("__set", !0)), h)
                    },
                    hide: function(b) {
                        return f && h.isShown() ? (b = a.Event(), b.type = "onBeforeHide", i.trigger(b), b.isDefaultPrevented() ? void 0 : (g = !1, d[e.effect][1].call(h,
                            function() {
                                b.type = "onHide",
                                    i.trigger(b)
                            }), h)) : h
                    },
                    isShown: function(a) {
                        return a ? "full" == g: g
                    },
                    getConf: function() {
                        return e
                    },
                    getTip: function() {
                        return f
                    },
                    getTrigger: function() {
                        return c
                    }
                }),
                a.each(["onHide", "onBeforeShow", "onShow", "onBeforeHide"],
                    function(b, c) {
                        a.isFunction(e[c]) && a(h).on(c, e[c]),
                            h[c] = function(b) {
                                return b && a(h).on(c, b),
                                    h
                            }
                    })
        }
        a.tools = a.tools || {
                version: "@VERSION"
            },
            a.tools.tooltip = {
                conf: {
                    effect: "toggle",
                    fadeOutSpeed: "fast",
                    predelay: 0,
                    delay: 30,
                    opacity: 1,
                    tip: 0,
                    fadeIE: !1,
                    position: ["top", "center"],
                    offset: [0, 0],
                    relative: !1,
                    cancelDefault: !0,
                    events: {
                        def: "mouseenter,mouseleave",
                        input: "focus,blur",
                        widget: "focus mouseenter,blur mouseleave",
                        tooltip: "mouseenter,mouseleave"
                    },
                    layout: "<div/>",
                    tipClass: "tooltip"
                },
                addEffect: function(a, b, c) {
                    d[a] = [b, c]
                }
            };
        var d = {
            toggle: [function(a) {
                var b = this.getConf(),
                    c = this.getTip(),
                    b = b.opacity;
                1 > b && c.css({
                    opacity: b
                }),
                    c.show(),
                    a.call()
            },
                function(a) {
                    this.getTip().hide(),
                        a.call()
                }],
            fade: [function(b) {
                var c = this.getConf(); ! a.browser.msie || c.fadeIE ? this.getTip().fadeTo(c.fadeInSpeed, c.opacity, b) : (this.getTip().show(), b())
            },
                function(b) {
                    var c = this.getConf(); ! a.browser.msie || c.fadeIE ? this.getTip().fadeOut(c.fadeOutSpeed, b) : (this.getTip().hide(), b())
                }]
        };
        a.fn.tooltip = function(b) {
            var d = this.data("tooltip");
            return d ? d: (b = a.extend(!0, {},
                a.tools.tooltip.conf, b), "string" == typeof b.position && (b.position = b.position.split(/,?\s/)), this.each(function() {
                d = new c(a(this), b),
                    a(this).data("tooltip", d)
            }), b.api ? d: this)
        }
    } (jQuery),
    function(a) {
        var b = a.tools.tooltip;
        b.dynamic = {
            conf: {
                classNames: "top right bottom left"
            }
        },
            a.fn.dynamic = function(c) {
                "number" == typeof c && (c = {
                    speed: c
                });
                var d, c = a.extend({},
                        b.dynamic.conf, c),
                    e = a.extend(!0, {},
                        c),
                    f = c.classNames.split(/\s/);
                return this.each(function() {
                    var b = a(this).tooltip().onBeforeShow(function(b, c) {
                        var g = this.getTip(),
                            h = this.getConf();
                        d || (d = [h.position[0], h.position[1], h.offset[0], h.offset[1], a.extend({},
                            h)]),
                            a.extend(h, d[4]),
                            h.position = [d[0], d[1]],
                            h.offset = [d[2], d[3]],
                            g.css({
                                visibility: "hidden",
                                position: "absolute",
                                top: c.top,
                                left: c.left
                            }).show();
                        var i, j = a.extend(!0, {},
                            e);
                        i = a(window);
                        var k = i.width() + i.scrollLeft(),
                            l = i.height() + i.scrollTop();
                        i = [g.offset().top <= i.scrollTop(), k <= g.offset().left + g.width(), l <= g.offset().top + g.height(), i.scrollLeft() >= g.offset().left];
                        a: {
                            for (k = i.length; k--;) if (i[k]) {
                                k = !1;
                                break a
                            }
                            k = !0
                        }
                        k || (i[2] && (a.extend(h, j.top), h.position[0] = "top", g.addClass(f[0])), i[3] && (a.extend(h, j.right), h.position[1] = "right", g.addClass(f[1])), i[0] && (a.extend(h, j.bottom), h.position[0] = "bottom", g.addClass(f[2])), i[1] && (a.extend(h, j.left), h.position[1] = "left", g.addClass(f[3])), (i[0] || i[2]) && (h.offset[0] *= -1), (i[1] || i[3]) && (h.offset[1] *= -1)),
                            g.css({
                                visibility: "visible"
                            }).hide()
                    });
                    b.onBeforeShow(function() {
                        var a = this.getConf();
                        this.getTip(),
                            setTimeout(function() {
                                    a.position = [d[0], d[1]],
                                        a.offset = [d[2], d[3]]
                                },
                                0)
                    }),
                        b.onHide(function() {
                            this.getTip().removeClass(c.classNames)
                        }),
                        ret = b
                }),
                    c.api ? ret: this
            }
    } (jQuery),
    function(a) {
        var b = a.tools.tooltip;
        a.extend(b.conf, {
            direction: "up",
            bounce: !1,
            slideOffset: 10,
            slideInSpeed: 200,
            slideOutSpeed: 200,
            slideFade: !a.browser.msie
        });
        var c = {
            up: ["-", "top"],
            down: ["+", "top"],
            left: ["-", "left"],
            right: ["+", "left"]
        };
        b.addEffect("slide",
            function(a) {
                var b = this.getConf(),
                    d = this.getTip(),
                    e = b.slideFade ? {
                        opacity: b.opacity
                    }: {},
                    f = c[b.direction] || c.up;
                e[f[1]] = f[0] + "=" + b.slideOffset,
                b.slideFade && d.css({
                    opacity: 0
                }),
                    d.show().animate(e, b.slideInSpeed, a)
            },
            function(b) {
                var d = this.getConf(),
                    e = d.slideOffset,
                    f = d.slideFade ? {
                        opacity: 0
                    }: {},
                    g = c[d.direction] || c.up,
                    h = "" + g[0];
                d.bounce && (h = "+" == h ? "-": "+"),
                    f[g[1]] = h + "=" + e,
                    this.getTip().animate(f, d.slideOutSpeed,
                        function() {
                            a(this).hide(),
                                b.call()
                        })
            })
    } (jQuery),
    function(a) {
        function b(b, c, d) {
            var c = a(c).first() || c,
                e = b.offset().top,
                f = b.offset().left,
                g = d.position.split(/,?\s+/),
                h = g[0],
                g = g[1],
                e = e - (c.outerHeight() - d.offset[0]),
                f = f + (b.outerWidth() + d.offset[1]);
            return /iPad/i.test(navigator.userAgent) && (e -= a(window).scrollTop()),
                d = c.outerHeight() + b.outerHeight(),
            "center" == h && (e += d / 2),
            "bottom" == h && (e += d),
                b = b.outerWidth(),
            "center" == g && (f -= (b + c.outerWidth()) / 2),
            "left" == g && (f -= b),
            {
                top: e,
                left: f
            }
        }
        function c(a) {
            function b() {
                return this.getAttribute("type") == a
            }
            return b.key = '[type="' + a + '"]',
                b
        }
        function d(c, d, f) {
            function g(b, c, d) {
                if (f.grouped || !b.length) {
                    var g; ! 1 === d || a.isArray(d) ? (g = e.messages[c.key || c] || e.messages["*"], g = g[f.lang] || e.messages["*"].en, (c = g.match(/\$\d/g)) && a.isArray(d) && a.each(c,
                        function(a) {
                            g = g.replace(this, d[a])
                        })) : g = d[f.lang] || d,
                        b.push(g)
                }
            }
            var i = this,
                j = d.add(i),
                c = c.not(":button, :image, :reset, :submit");
            d.attr("novalidate", "novalidate"),
                a.extend(i, {
                    getConf: function() {
                        return f
                    },
                    getForm: function() {
                        return d
                    },
                    getInputs: function() {
                        return c
                    },
                    reflow: function() {
                        return c.each(function() {
                            var c = a(this),
                                d = c.data("msg.el");
                            d && (c = b(c, d, f), d.css({
                                top: c.top,
                                left: c.left
                            }))
                        }),
                            i
                    },
                    invalidate: function(b, d) {
                        if (!d) {
                            var e = [];
                            a.each(b,
                                function(a, b) {
                                    var d = c.filter("[name='" + a + "']");
                                    d.length && (d.trigger("OI", [b]), e.push({
                                        input: d,
                                        messages: [b]
                                    }))
                                }),
                                b = e,
                                d = a.Event()
                        }
                        return d.type = "onFail",
                            j.trigger(d, [b]),
                        d.isDefaultPrevented() || l[f.effect][0].call(i, b, d),
                            i
                    },
                    reset: function(b) {
                        return b = b || c,
                            b.removeClass(f.errorClass).each(function() {
                                var b = a(this).data("msg.el");
                                b && (b.remove(), a(this).data("msg.el", null))
                            }).off(f.errorInputEvent + ".v" || ""),
                            i
                    },
                    destroy: function() {
                        return d.off(f.formEvent + ".V reset.V"),
                            c.off(f.inputEvent + ".V change.V"),
                            i.reset()
                    },
                    checkValidity: function(b, d) {
                        var b = b || c,
                            b = b.not(":disabled"),
                            e = {},
                            b = b.filter(function() {
                                var b = a(this).attr("name");
                                return e[b] ? void 0 : (e[b] = !0, a(this))
                            });
                        if (!b.length) return ! 0;
                        if (d = d || a.Event(), d.type = "onBeforeValidate", j.trigger(d, [b]), d.isDefaultPrevented()) return d.result;
                        var m = [];
                        b.each(function() {
                            var b = [],
                                c = a(this).data("messages", b),
                                e = h && c.is(":date") ? "onHide.v": f.errorInputEvent + ".v";
                            return c.off(e),
                                a.each(k,
                                    function() {
                                        var a = this[0];
                                        if (c.filter(a).length) {
                                            var e = this[1].call(i, c, c.val());
                                            if (!0 !== e) {
                                                if (d.type = "onBeforeFail", j.trigger(d, [c, a]), d.isDefaultPrevented()) return ! 1;
                                                var h = c.attr(f.messageAttr);
                                                if (h) return b = [h],
                                                    !1;
                                                g(b, a, e)
                                            }
                                        }
                                    }),
                            b.length && (m.push({
                                input: c,
                                messages: b
                            }), c.trigger("OI", [b]), f.errorInputEvent) && c.on(e,
                                function(a) {
                                    i.checkValidity(c, a)
                                }),
                                f.singleError && m.length ? !1 : void 0
                        });
                        var n = l[f.effect];
                        if (!n) throw 'Validator: cannot find effect "' + f.effect + '"';
                        return m.length ? (i.invalidate(m, d), !1) : (n[1].call(i, b, d), d.type = "onSuccess", j.trigger(d, [b]), b.off(f.errorInputEvent + ".v"), !0)
                    }
                }),
                a.each(["onBeforeValidate", "onBeforeFail", "onFail", "onSuccess"],
                    function(b, c) {
                        a.isFunction(f[c]) && a(i).on(c, f[c]),
                            i[c] = function(b) {
                                return b && a(i).on(c, b),
                                    i
                            }
                    }),
            f.formEvent && d.on(f.formEvent + ".V",
                function(a) {
                    return i.checkValidity(null, a) ? (a.target = d, void(a.type = f.formEvent)) : a.preventDefault()
                }),
                d.on("reset.V",
                    function() {
                        i.reset()
                    }),
            c[0] && c[0].validity && c.each(function() {
                this.oninvalid = function() {
                    return ! 1
                }
            }),
            d[0] && (d[0].checkValidity = i.checkValidity),
            f.inputEvent && c.on(f.inputEvent + ".V",
                function(b) {
                    i.checkValidity(a(this), b)
                }),
                c.filter(":checkbox, select").filter("[required]").on("change.V",
                    function(b) {
                        var c = a(this); (this.checked || c.is("select") && a(this).val()) && l[f.effect][1].call(i, c, b)
                    }),
                c.filter(":radio[required]").on("change.V",
                    function(b) {
                        var c = a("[name='" + a(b.srcElement).attr("name") + "']");
                        null != c && 0 != c.length && i.checkValidity(c, b)
                    }),
                a(window).resize(function() {
                    i.reflow()
                })
        }
        a.tools = a.tools || {
                version: "@VERSION"
            };
        var e, f = /\[type=([a-z]+)\]/,
            g = /^-?[0-9]*(\.[0-9]+)?$/,
            h = a.tools.dateinput,
            i = /^([a-z0-9_\.\-\+]+)@([\da-z\.\-]+)\.([a-z\.]{2,6})$/i,
            j = /^(https?:\/\/)?[\da-z\.\-]+\.[a-z\.]{2,6}[#&+_\?\/\w \.\-=]*$/i;
        e = a.tools.validator = {
            conf: {
                grouped: !1,
                effect: "default",
                errorClass: "invalid",
                inputEvent: null,
                errorInputEvent: "keyup",
                formEvent: "submit",
                lang: "en",
                message: "<div/>",
                messageAttr: "data-message",
                messageClass: "error",
                offset: [0, 0],
                position: "center right",
                singleError: !1,
                speed: "normal"
            },
            messages: {
                "*": {
                    en: "Please correct this value"
                }
            },
            localize: function(b, c) {
                a.each(c,
                    function(a, c) {
                        e.messages[a] = e.messages[a] || {},
                            e.messages[a][b] = c
                    })
            },
            localizeFn: function(b, c) {
                e.messages[b] = e.messages[b] || {},
                    a.extend(e.messages[b], c)
            },
            fn: function(b, d, e) {
                a.isFunction(d) ? e = d: ("string" == typeof d && (d = {
                    en: d
                }), this.messages[b.key || b] = d),
                (d = f.exec(b)) && (b = c(d[1])),
                    k.push([b, e])
            },
            addEffect: function(a, b, c) {
                l[a] = [b, c]
            }
        };
        var k = [],
            l = {
                "default": [function(c) {
                    var d = this.getConf();
                    a.each(c,
                        function(c, e) {
                            var f = e.input;
                            f.addClass(d.errorClass);
                            var g = f.data("msg.el");
                            g || (g = a(d.message).addClass(d.messageClass).appendTo(document.body), f.data("msg.el", g)),
                                g.css({
                                    visibility: "hidden"
                                }).find("p").remove(),
                                a.each(e.messages,
                                    function(b, c) {
                                        a("<p/>").html(c).appendTo(g)
                                    }),
                            g.outerWidth() == g.parent().width() && g.add(g.find("p")).css({
                                display: "inline"
                            }),
                                f = b(f, g, d),
                                g.css({
                                    visibility: "visible",
                                    position: "absolute",
                                    top: f.top,
                                    left: f.left
                                }).fadeIn(d.speed)
                        })
                },
                    function(b) {
                        var c = this.getConf();
                        b.removeClass(c.errorClass).each(function() {
                            var b = a(this).data("msg.el");
                            b && b.css({
                                visibility: "hidden"
                            })
                        })
                    }]
            };
        a.each(["email", "url", "number"],
            function(b, c) {
                a.expr[":"][c] = function(a) {
                    return a.getAttribute("type") === c
                }
            }),
            a.fn.oninvalid = function(a) {
                return this[a ? "on": "trigger"]("OI", a)
            },
            e.fn(":email", "Please enter a valid email address",
                function(a, b) {
                    return ! b || i.test(b)
                }),
            e.fn(":url", "Please enter a valid URL",
                function(a, b) {
                    return ! b || j.test(b)
                }),
            e.fn(":number", "Please enter a numeric value.",
                function(a, b) {
                    return g.test(b)
                }),
            e.fn("[max]", "Please enter a value no larger than $1",
                function(a, b) {
                    if ("" === b || h && a.is(":date")) return ! 0;
                    var c = a.attr("max");
                    return parseFloat(b) <= parseFloat(c) ? !0 : [c]
                }),
            e.fn("[min]", "Please enter a value of at least $1",
                function(a, b) {
                    if ("" === b || h && a.is(":date")) return ! 0;
                    var c = a.attr("min");
                    return parseFloat(b) >= parseFloat(c) ? !0 : [c]
                }),
            e.fn("[required]", "Please complete this mandatory field.",
                function(a, b) {
                    return a.is(":checkbox") ? a.is(":checked") : !!b
                }),
            e.fn("[pattern]",
                function(a, b) {
                    return "" === b || RegExp("^" + a.attr("pattern") + "$").test(b)
                }),
            e.fn(":radio", "Please select an option.",
                function(b) {
                    var c = !1;
                    return a("[name='" + b.attr("name") + "']").each(function(b, d) {
                        a(d).is(":checked") && (c = !0)
                    }),
                        c ? !0 : !1
                }),
            a.fn.validator = function(b) {
                var c = this.data("validator");
                return c && (c.destroy(), this.removeData("validator")),
                    b = a.extend(!0, {},
                        e.conf, b),
                    this.is("form") ? this.each(function() {
                        var e = a(this);
                        c = new d(e.find(":input"), e, b),
                            e.data("validator", c)
                    }) : (c = new d(this, this.eq(0).closest("form"), b), this.data("validator", c))
            }
    } (jQuery);
var Current = 0,
    Index = {
        liveFall: "",
        loading: !1,
        searchEvents: function() {
            function a() {
                $(".search_input").submit()
            }
            $("#btn-search").on("click", a)
        },
        topNavScroller: function() {
            var a, b = 15,
                c = !0;
            $(window).on("scroll",
                function() {
                    c === !0 && (c = !1, a = Math.round($(window).scrollTop()), a >= b ? ($("#header").removeClass("new-index"), $(".top-nav").addClass("fixed"), $("#float-alarm").show()) : ($("#header").addClass("new-index"), $(".top-nav").removeClass("fixed"), $("#float-alarm").hide()), setTimeout(function() {
                            c = !0
                        },
                        20))
                })
        },
        sliderEvents: function() {
            $("#features .items .item").each(function() {
                $(this).css("width", $(window).width())
            });
            var a = 1;
            $(".navi-next").click(function() {
                a = 1
            }),
                $(".navi-prev").click(function() {
                    a = 0
                }),
                $(".scrollable").scrollable({
                    circular: !0,
                    mousewheel: !1,
                    next: ".navi-next",
                    prev: ".navi-prev"
                }).autoscroll({
                    interval: 7e3
                });
            var b = $(".scrollable").data("scrollable");
            $(".index_v4 #features").on("mouseover",
                function() {
                    $(this).find(".navi-prev").show(),
                        $(this).find(".navi-next").show()
                }),
                $(".index_v4 #features").on("mouseleave",
                    function() {
                        $(this).find(".navi-prev").hide(),
                            $(this).find(".navi-next").hide()
                    });
            var b = $(".scrollable").data("scrollable");
            if (b.onSeek(function() {
                    Current = this.getIndex(),
                        a = 1
                }), !$.browser.msie || $.browser.msie && $.browser.version > 8) {
                var c = $("<div></div>");
                c.addClass("extra-info"),
                    $("#bg0").append(c)
            } else $.browser.msie && $.browser.version <= 8 && 6 != $.browser.version && $("#bg0 .bg").addClass("bg0-IE");
            $(".index-icons-create").on("click",
                function(a) {
                    a.preventDefault(),
                        BT_USER_ID ? bt.misc.showPopup($("#new-trip-popup")) : bt.misc.redirect_to_login()
                }),
                $(".index-icons-activity").on("click",
                    function(a) {
                        a.preventDefault(),
                            window.location.href = window.location.origin + "/hunter/self/publish/?bts=webzizhutijiao20160624"
                    })
        },
        liveEvents: function() {
            Index.liveFall = new WarterFall({
                fallCount: 4,
                fallClassPrefix: "col-"
            }),
                Index.addToWaterFall(),
                Index.initLoadMoreLiveEvent(),
                $(".pic img").each(function() {
                    $(this).fadeIn()
                }),
                $(".pic img").load(function() {
                    $(this).fadeIn()
                })
        },
        loadMoreLive: function(a) {
            if (!Index.loading) {
                $("#load-more").find("img").show(),
                    Index.loading = !0,
                    a = a || 12;
                var b = $(".talent-flow").attr("data-before");
                $.ajax({
                    url: "/index_live_more/",
                    data: "count=" + a + "&before=" + b,
                    success: function(a) {
                        $(".tmp-container").html(a),
                            Index.addToWaterFall(),
                            $(".talent-flow").attr("data-before", $(".before").data("before")),
                            $(".before").remove(),
                            $("#load-more").find("img").hide(),
                            Index.loading = !1
                    }
                })
            }
        },
        initLiveItemEvents: function(a) {
            a = $(a),
                a.find(".pic img").load(function() {
                    $(this).fadeIn()
                }),
                a.find(".need-login").click(function() {
                    bt.misc.redirect_to_login()
                })
        },
        addToWaterFall: function() {
            for (var a = $(".talent .tmp-container .feed"), b = 0; b < a.length; b++) Index.liveFall.addItem(a[b]),
                Index.initLiveItemEvents(a[b])
        },
        initLoadMoreLiveEvent: function() {
            $("#load-more").on("click",
                function(a) {
                    a.preventDefault(),
                        Index.loadMoreLive()
                })
        }
    },
    WarterFall = function(a) {
        var b = {
            fallCount: 1,
            fallClassPrefix: "col-"
        };
        this.opts = b;
        for (i in a) this.opts[i] = a[i]
    };
WarterFall.prototype.getShortestFall = function() {
    for (var a = $("." + this.opts.fallClassPrefix + "0"), b = a.height(), c = 1; c < this.opts.fallCount; c++) {
        var d = $("." + this.opts.fallClassPrefix + c);
        b > d.height() && (b = d.height(), a = d)
    }
    return a
},
    WarterFall.prototype.addItem = function(a) {
        var b = this.getShortestFall();
        b.append($(a))
    },
    $(document).ready(function() {
        Index.topNavScroller(),
            Index.searchEvents(),
            Index.sliderEvents(),
            Index.liveEvents()
    }),
    $(window).resize(function() {
        var a = $(window).width(),
            b = $("#content .center-align").width();
        b > a && (a = b),
            $("#features .items .item").each(function() {
                $(this).css("width", a)
            }),
            $("#features .items").css("left", 0 - a * (Current + 1))
    });