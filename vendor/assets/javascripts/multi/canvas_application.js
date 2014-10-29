function ucfirst(e) {
    e += "";
    var t = e.charAt(0).toUpperCase();
    return t + e.substr(1)
}
function update_ordered_table() {
    orders = orders.replace(/\,$/, "");
    var e = "?orders=" + orders;
    window.location = $(".orderable_table").attr("path") + e
}
function chapter_invoice_create(e) {
    return [{
        html: e[0],
        overlayOpacity: .05
    }, {
        html: e[1],
        element: $(".client_details.form ul"),
        position: "e",
        overlayOpacity: .05,
        onShow: function (e) {
            e.css({
                background: "#fdd",
                border: "1px dashed #000"
            })
        },
        onHide: function (e) {
            e.css({
                background: "none",
                border: "none"
            })
        }
    }, {
        html: e[2],
        element: $("a.menu[href='#menuProfile']"),
        position: "sw",
        overlayOpacity: .05
    }, {
        html: e[3],
        element: $(".client_details:last li:first").eq(0),
        position: "e",
        overlayOpacity: .05,
        expose: {
            "background-color": "#fff",
            color: "#000"
        }
    }, {
        element: $(".btn-add-client"),
        html: e[4],
        steps: {
            100: function (e) {
                $(".btn-add-client").click()
            }
        },
        position: "sw",
        overlayOpacity: .05,
        live: 5e3
    }, {
        element: $(".client_details:last"),
        html: e[5],
        steps: {
            40: function (e) {
                $("input.autocomplete-client:first").teletype({
                    animDelay: 100,
                    text: "Demo Pelanggan"
                })
            },
            100: function (e) {
                $("a.add-client-address:first").click()
            }
        },
        overlayOpacity: .05,
        position: "ne"
    }, {
        element: $(".client_details:last"),
        html: e[6],
        steps: {
            40: function (e) {
                $("input#clients__email:first").teletype({
                    animDelay: 50,
                    text: "pelanggan.baru@domain.com"
                }), $("input#clients__address_1:first").teletype({
                    animDelay: 50,
                    text: "Jalan Makmur Raya No 17"
                }), $("input#clients__city:first").teletype({
                    animDelay: 50,
                    text: "Jakarta Selatan"
                }), $("input#clients__state:first").teletype({
                    animDelay: 50,
                    text: "DKI Jakarta"
                }), $("select#clients__country:first").val("Indonesia")
            }
        },
        overlayOpacity: .05,
        position: "ne"
    }, {
        element: $("input#invoice_created_at"),
        html: e[7],
        position: "w"
    }, {
        element: $("input#invoice_due_at"),
        html: e[8],
        steps: {
            40: function (e) {
                var t = new Date,
                    n = t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + (t.getDate() + 5);
                $("input#invoice_due_at").val(n)
            }
        },
        overlayOpacity: .05,
        position: "w"
    }, {
        element: $($(".widget-table-items:first th")[1]),
        html: e[9],
        steps: {
            40: function (e) {
                $("input.item-autocomplete:first").teletype({
                    animDelay: 50,
                    text: "TV LCD 32 Inci Ponitran"
                }), $("td.price:first input.prc").teletype({
                    animDelay: 50,
                    text: "3500000"
                })
            }
        },
        overlayOpacity: .05,
        position: "ne"
    }, {
        element: $(".grand_total.invoice_total:last"),
        html: e[10],
        onShow: function (e) {
            e.css({
                background: "#fdd",
                border: "1px dashed #000"
            })
        },
        onHide: function (e) {
            e.css({
                background: "none",
                border: "none"
            })
        },
        steps: {
            10: function (e) {
                $("td.price:first input.prc").change()
            }
        },
        overlayOpacity: .05,
        position: "sw"
    }, {
        element: $("#invoice_recurring_day"),
        html: e[11],
        position: "ne"
    }, {
        element: $("#invoice_discount"),
        html: e[12],
        steps: {
            40: function (e) {
                $("#invoice_discount").teletype({
                    animDelay: 50,
                    text: "20"
                })
            }
        },
        overlayOpacity: .05,
        position: "e"
    }, {
        element: $("#invoice_tax_1"),
        html: e[13],
        steps: {
            40: function (e) {
                $("#invoice_tax_1").teletype({
                    animDelay: 50,
                    text: "10"
                })
            }
        },
        overlayOpacity: .05,
        position: "e"
    }, {
        element: $("#invoice_shipping"),
        html: e[14],
        steps: {
            40: function (e) {
                $("#invoice_shipping").teletype({
                    animDelay: 50,
                    text: "50000"
                })
            }
        },
        overlayOpacity: .05,
        position: "e"
    }, {
        element: $(".grand_total.invoice_total:last"),
        html: e[15],
        onShow: function (e) {
            e.css({
                background: "#fdd",
                border: "1px dashed #000"
            })
        },
        onHide: function (e) {
            e.css({
                background: "none",
                border: "none"
            })
        },
        steps: {
            10: function (e) {
                $("td.price:first input.prc").change()
            }
        },
        overlayOpacity: .05,
        position: "sw"
    }, {
        element: $(".btn[name='btn_draft']"),
        html: e[16],
        position: "sw",
        steps: {
            40: function (e) {
                $(".btn[name='btn_draft']").click()
            }
        },
        overlayOpacity: .05
    }]
}
jQuery(function (e) {
    var t = encodeURIComponent(e("meta[name=csrf-token]").attr("content")),
        n = e("meta[name=csrf-param]").attr("content");
    e.fn.extend({
        triggerAndReturn: function (t, n) {
            var r = new e.Event(t);
            return this.trigger(r, n), r.result !== !1
        },
        callRemote: function () {
            var t = this,
                n = t.attr("method") || t.attr("data-method") || "GET",
                r = t.attr("action") || t.attr("href"),
                i = t.attr("data-type") || "script";
            if (r === undefined) throw "No URL specified for remote call (action or href must be present).";
            if (t.triggerAndReturn("ajax:before")) {
                var s = t.is("form") ? t.serializeArray() : [];
                e.ajax({
                    url: r,
                    data: s,
                    dataType: i,
                    type: n.toUpperCase(),
                    beforeSend: function (e) {
                        t.trigger("ajax:loading", e)
                    },
                    success: function (e, n, r) {
                        t.trigger("ajax:success", [e, n, r])
                    },
                    complete: function (e) {
                        t.trigger("ajax:complete", e)
                    },
                    error: function (e, n, r) {
                        t.trigger("ajax:failure", [e, n, r])
                    }
                })
            }
            t.trigger("ajax:after")
        }
    }), e("a[data-confirm],input[data-confirm]").live("click", function () {
        var t = e(this);
        if (t.triggerAndReturn("confirm") && !confirm(t.attr("data-confirm"))) return !1
    }), e("form[data-remote]").live("submit", function (t) {
        e(this).callRemote(), t.preventDefault()
    }), e("a[data-remote],input[data-remote]").live("click", function (t) {
        e(this).callRemote(), t.preventDefault()
    }), e("a[data-method]:not([data-remote])").live("click", function (r) {
        var i = e(this),
            s = i.attr("href"),
            o = i.attr("data-method"),
            u = e('<form method="post" action="' + s + '"></form>'),
            a = '<input name="_method" value="' + o + '" type="hidden" />';
        n != null && t != null && (a += '<input name="' + n + '" value="' + t + '" type="hidden" />'), u.hide().append(a).appendTo("body"), r.preventDefault(), u.submit()
    });
    var r = "input[data-disable-with]",
        i = "form[data-remote]:has(" + r + ")";
    e(i).live("ajax:before", function () {
        e(this).find(r).each(function () {
            var t = e(this);
            t.data("enable-with", t.val()).attr("value", t.attr("data-disable-with")).attr("disabled", "disabled")
        })
    }), e(i).live("ajax:complete", function () {
        e(this).find(r).each(function () {
            var t = e(this);
            t.removeAttr("disabled").val(t.data("enable-with"))
        })
    })
}),
function (e) {
    e.fn.prettynumber = function (t) {
        var n = e.extend({}, e.fn.prettynumber.defaults, t);
        return this.each(function () {
            $this = e(this);
            var t = e.meta ? e.extend({}, n, $this.data()) : n,
                r = $this.html();
            $this.html($this.html().toString().replace(new RegExp("(^\\d{" + ($this.html().toString().length % 3 || -1) + "})(?=\\d{3})"), "$1" + t.delimiter).replace(/(\d{3})(?=\d)/g, "$1" + t.delimiter))
        })
    }, e.fn.prettynumber.defaults = {
        delimiter: "."
    }
}(jQuery);
var hasTouch = "ontouchstart" in document.documentElement,
    startEvent = hasTouch ? "touchstart" : "mousedown",
    moveEvent = hasTouch ? "touchmove" : "mousemove",
    endEvent = hasTouch ? "touchend" : "mouseup";
hasTouch && $.each("touchstart touchmove touchend".split(" "), function (e, t) {
    jQuery.event.fixHooks[t] = jQuery.event.mouseHooks
}), jQuery.tableDnD = {
    currentTable: null,
    dragObject: null,
    mouseOffset: null,
    oldY: 0,
    build: function (e) {
        return this.each(function () {
            this.tableDnDConfig = jQuery.extend({
                onDragStyle: null,
                onDropStyle: null,
                onDragClass: "tDnD_whileDrag",
                onDrop: null,
                onDragStart: null,
                scrollAmount: 5,
                serializeRegexp: /[^\-]*$/,
                serializeParamName: null,
                dragHandle: null
            }, e || {}), jQuery.tableDnD.makeDraggable(this)
        }), this
    },
    makeDraggable: function (e) {
        var t = e.tableDnDConfig;
        if (t.dragHandle) {
            var n = jQuery(e.tableDnDConfig.dragHandle, e);
            n.each(function () {
                jQuery(this).bind(startEvent, function (n) {
                    return jQuery.tableDnD.initialiseDrag(jQuery(this).parents("tr")[0], e, this, n, t), !1
                })
            })
        } else {
            var r = jQuery("tr", e);
            r.each(function () {
                var n = jQuery(this);
                n.hasClass("nodrag") || n.bind(startEvent, function (n) {
                    if (n.target.tagName == "TD") return jQuery.tableDnD.initialiseDrag(this, e, this, n, t), !1
                }).css("cursor", "move")
            })
        }
    },
    initialiseDrag: function (e, t, n, r, i) {
        jQuery.tableDnD.dragObject = e, jQuery.tableDnD.currentTable = t, jQuery.tableDnD.mouseOffset = jQuery.tableDnD.getMouseOffset(n, r), jQuery.tableDnD.originalOrder = jQuery.tableDnD.serialize(), jQuery(document).bind(moveEvent, jQuery.tableDnD.mousemove).bind(endEvent, jQuery.tableDnD.mouseup), i.onDragStart && i.onDragStart(t, n)
    },
    updateTables: function () {
        this.each(function () {
            this.tableDnDConfig && jQuery.tableDnD.makeDraggable(this)
        })
    },
    mouseCoords: function (e) {
        return e.pageX || e.pageY ? {
            x: e.pageX,
            y: e.pageY
        } : {
            x: e.clientX + document.body.scrollLeft - document.body.clientLeft,
            y: e.clientY + document.body.scrollTop - document.body.clientTop
        }
    },
    getMouseOffset: function (e, t) {
        t = t || window.event;
        var n = this.getPosition(e),
            r = this.mouseCoords(t);
        return {
            x: r.x - n.x,
            y: r.y - n.y
        }
    },
    getPosition: function (e) {
        var t = 0,
            n = 0;
        e.offsetHeight == 0 && (e = e.firstChild);
        while (e.offsetParent) t += e.offsetLeft, n += e.offsetTop, e = e.offsetParent;
        return t += e.offsetLeft, n += e.offsetTop, {
            x: t,
            y: n
        }
    },
    mousemove: function (e) {
        if (jQuery.tableDnD.dragObject == null) return;
        e.type == "touchmove" && event.preventDefault();
        var t = jQuery(jQuery.tableDnD.dragObject),
            n = jQuery.tableDnD.currentTable.tableDnDConfig,
            r = jQuery.tableDnD.mouseCoords(e),
            i = r.y - jQuery.tableDnD.mouseOffset.y,
            s = window.pageYOffset;
        document.all && (typeof document.compatMode != "undefined" && document.compatMode != "BackCompat" ? s = document.documentElement.scrollTop : typeof document.body != "undefined" && (s = document.body.scrollTop));
        if (r.y - s < n.scrollAmount) window.scrollBy(0, -n.scrollAmount);
        else {
            var o = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
            o - (r.y - s) < n.scrollAmount && window.scrollBy(0, n.scrollAmount)
        }
        if (i != jQuery.tableDnD.oldY) {
            var u = i > jQuery.tableDnD.oldY;
            jQuery.tableDnD.oldY = i, n.onDragClass ? t.addClass(n.onDragClass) : t.css(n.onDragStyle);
            var a = jQuery.tableDnD.findDropTargetRow(t, i);
            a && (u && jQuery.tableDnD.dragObject != a ? jQuery.tableDnD.dragObject.parentNode.insertBefore(jQuery.tableDnD.dragObject, a.nextSibling) : !u && jQuery.tableDnD.dragObject != a && jQuery.tableDnD.dragObject.parentNode.insertBefore(jQuery.tableDnD.dragObject, a))
        }
        return !1
    },
    findDropTargetRow: function (e, t) {
        var n = jQuery.tableDnD.currentTable.rows;
        for (var r = 0; r < n.length; r++) {
            var i = n[r],
                s = this.getPosition(i).y,
                o = parseInt(i.offsetHeight) / 2;
            i.offsetHeight == 0 && (s = this.getPosition(i.firstChild).y, o = parseInt(i.firstChild.offsetHeight) / 2);
            if (t > s - o && t < s + o) {
                if (i == e) return null;
                var u = jQuery.tableDnD.currentTable.tableDnDConfig;
                if (u.onAllowDrop) return u.onAllowDrop(e, i) ? i : null;
                var a = jQuery(i).hasClass("nodrop");
                return a ? null : i
            }
        }
        return null
    },
    mouseup: function (e) {
        if (jQuery.tableDnD.currentTable && jQuery.tableDnD.dragObject) {
            jQuery(document).unbind(moveEvent, jQuery.tableDnD.mousemove).unbind(endEvent, jQuery.tableDnD.mouseup);
            var t = jQuery.tableDnD.dragObject,
                n = jQuery.tableDnD.currentTable.tableDnDConfig;
            n.onDragClass ? jQuery(t).removeClass(n.onDragClass) : jQuery(t).css(n.onDropStyle), jQuery.tableDnD.dragObject = null;
            var r = jQuery.tableDnD.serialize();
            n.onDrop && jQuery.tableDnD.originalOrder != r && n.onDrop(jQuery.tableDnD.currentTable, t), jQuery.tableDnD.currentTable = null
        }
    },
    serialize: function () {
        return jQuery.tableDnD.currentTable ? jQuery.tableDnD.serializeTable(jQuery.tableDnD.currentTable) : "Error: No Table id set, you need to set an id on your table and every row"
    },
    serializeTable: function (e) {
        var t = "",
            n = e.id,
            r = e.rows;
        for (var i = 0; i < r.length; i++) {
            t.length > 0 && (t += "&");
            var s = r[i].id;
            s && s && e.tableDnDConfig && e.tableDnDConfig.serializeRegexp && (s = s.match(e.tableDnDConfig.serializeRegexp)[0]), t += n + "[]=" + s
        }
        return t
    },
    serializeTables: function () {
        var e = "";
        return this.each(function () {
            e += jQuery.tableDnD.serializeTable(this)
        }), e
    }
}, jQuery.fn.extend({
    tableDnD: jQuery.tableDnD.build,
    tableDnDUpdate: jQuery.tableDnD.updateTables,
    tableDnDSerialize: jQuery.tableDnD.serializeTables
}), jQuery(function (e, t) {
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
                t.store.gallery = r > 0 ? n.substr(0, r) : n, t.store.galleryLinks = e('[href][rel="' + t.store.gallery + '"], [href][rel^="' + t.store.gallery + ' "]'), t.store.galleryIndex = t.store.galleryLinks.index(t.opener)
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
var UrlLoader = function (e) {
    var t = {
        load: function (e) {
            $.ajax(e)
        }
    };
    return t
}, loader = UrlLoader(document),
    UrlRequest = function (e) {
        var t = {
            defaultDataType: "json",
            alertError: function (e) {
                e.responseText ? alert(e.responseText) : e.statusText && alert(e.statusText)
            },
            defaultSuccess: function (e) {
                e.match(/<\/?\w+\s+[^>]*>/i) ? ($(".content").html(e), $(".datepicker, .datepick").datepicker(), $(".nyroModal").nyroModal()) : t.alertError(e), $(".content").length && $(".content").hideLoading()
            },
            defaultError: function (e) {
                t.alertError(e), $(".content").length && $(".content").hideLoading()
            },
            statusCode: {
                401: function () {
                    window.location = "http://" + window.location.hostname + "/"
                }
            },
            getPublicKeys: function (e) {
                return csrf_param = $("meta[name=csrf-param]").attr("content"), csrf_token = encodeURIComponent($("meta[name=csrf-token]").attr("content")), _return = {}, e == "string" ? _return = csrf_param + "=" + csrf_token : e == "object" && (_return = {
                    csrf_param: csrf_token
                }), _return
            },
            uriToDataType: function (e, t) {
                return t.match(/html/i) && (_uriElements = e.split("?"), _uriElements[0].match(/\.\w*$/) && (_uriElements[0] = _uriElements[0].split(/\.\w*$/)[0]), e = _uriElements[0] + "." + t, _uriElements.length > 1 && (e = e + "?" + _uriElements[1])), e
            },
            merge: function (e, t) {
                var n = {};
                for (var r in e) n[r] = e[r];
                for (var r in t) n[r] = t[r];
                return n
            },
            load: function (e, n, r) {
                r.dataType || (r.dataType = t.defaultDataType), r.statusCode || (r.statusCode = t.statusCode), n = t.uriToDataType(n, r.dataType), r.data && (r.data.constructor == String ? _data = r.data + "&" + t.getPublicKeys("string") : _data = t.merge(r.data, t.getPublicKeys("object"))), r.error || (r.error = t.defaultError), loader.load({
                    type: e,
                    url: n,
                    data: _data,
                    success: r.success,
                    error: r.error,
                    dataType: r.dataType
                })
            },
            get: function (e, n) {
                t.load("GET", e, n)
            },
            post: function (e, n) {
                t.load("POST", e, n)
            },
            put: function (e, n) {
                t.load("PUT", e, n)
            },
            destroy: function (e, n) {
                t.load("DELETE", e, e, n)
            }
        };
        return t
    }, request = UrlRequest(document),
    Graphz = function (e) {
        var t = {
            widget: null,
            load: function (e) {
                t.widget = e
            },
            gBar: function (e, t) {},
            gTimeLine: function (e, n) {
                _dataLoaded = function (r) {
                    $(r.rows).each(function (e) {
                        r.rows[e].c[0].v = new Date(r.rows[e].c[0].v)
                    });
                    var i = new t.widget.visualization.DataTable(r);
                    n.chart || (n.chart = new t.widget.visualization.AnnotatedTimeLine($(e)[0])), n.chart.draw(i, n.draw)
                }, _dataFailed = function (t) {
                    $(e).html("<b> Failed to load chart </b>")
                }, request.get(n.url, {
                    data: {},
                    success: _dataLoaded,
                    error: _dataFailed,
                    dataType: "json"
                })
            }
        };
        return t
    }, chartz = Graphz(document);
window && !window.InflectionJS && (window.InflectionJS = null), InflectionJS = {
    uncountable_words: ["equipment", "information", "rice", "money", "species", "series", "fish", "sheep", "moose", "deer", "news"],
    plural_rules: [
        [new RegExp("(m)an$", "gi"), "$1en"],
        [new RegExp("(pe)rson$", "gi"), "$1ople"],
        [new RegExp("(child)$", "gi"), "$1ren"],
        [new RegExp("^(ox)$", "gi"), "$1en"],
        [new RegExp("(ax|test)is$", "gi"), "$1es"],
        [new RegExp("(octop|vir)us$", "gi"), "$1i"],
        [new RegExp("(alias|status)$", "gi"), "$1es"],
        [new RegExp("(bu)s$", "gi"), "$1ses"],
        [new RegExp("(buffal|tomat|potat)o$", "gi"), "$1oes"],
        [new RegExp("([ti])um$", "gi"), "$1a"],
        [new RegExp("sis$", "gi"), "ses"],
        [new RegExp("(?:([^f])fe|([lr])f)$", "gi"), "$1$2ves"],
        [new RegExp("(hive)$", "gi"), "$1s"],
        [new RegExp("([^aeiouy]|qu)y$", "gi"), "$1ies"],
        [new RegExp("(x|ch|ss|sh)$", "gi"), "$1es"],
        [new RegExp("(matr|vert|ind)ix|ex$", "gi"), "$1ices"],
        [new RegExp("([m|l])ouse$", "gi"), "$1ice"],
        [new RegExp("(quiz)$", "gi"), "$1zes"],
        [new RegExp("s$", "gi"), "s"],
        [new RegExp("$", "gi"), "s"]
    ],
    singular_rules: [
        [new RegExp("(m)en$", "gi"), "$1an"],
        [new RegExp("(pe)ople$", "gi"), "$1rson"],
        [new RegExp("(child)ren$", "gi"), "$1"],
        [new RegExp("([ti])a$", "gi"), "$1um"],
        [new RegExp("((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$", "gi"), "$1$2sis"],
        [new RegExp("(hive)s$", "gi"), "$1"],
        [new RegExp("(tive)s$", "gi"), "$1"],
        [new RegExp("(curve)s$", "gi"), "$1"],
        [new RegExp("([lr])ves$", "gi"), "$1f"],
        [new RegExp("([^fo])ves$", "gi"), "$1fe"],
        [new RegExp("([^aeiouy]|qu)ies$", "gi"), "$1y"],
        [new RegExp("(s)eries$", "gi"), "$1eries"],
        [new RegExp("(m)ovies$", "gi"), "$1ovie"],
        [new RegExp("(x|ch|ss|sh)es$", "gi"), "$1"],
        [new RegExp("([m|l])ice$", "gi"), "$1ouse"],
        [new RegExp("(bus)es$", "gi"), "$1"],
        [new RegExp("(o)es$", "gi"), "$1"],
        [new RegExp("(shoe)s$", "gi"), "$1"],
        [new RegExp("(cris|ax|test)es$", "gi"), "$1is"],
        [new RegExp("(octop|vir)i$", "gi"), "$1us"],
        [new RegExp("(alias|status)es$", "gi"), "$1"],
        [new RegExp("^(ox)en", "gi"), "$1"],
        [new RegExp("(vert|ind)ices$", "gi"), "$1ex"],
        [new RegExp("(matr)ices$", "gi"), "$1ix"],
        [new RegExp("(quiz)zes$", "gi"), "$1"],
        [new RegExp("s$", "gi"), ""]
    ],
    non_titlecased_words: ["and", "or", "nor", "a", "an", "the", "so", "but", "to", "of", "at", "by", "from", "into", "on", "onto", "off", "out", "in", "over", "with", "for"],
    id_suffix: new RegExp("(_ids|_id)$", "g"),
    underbar: new RegExp("_", "g"),
    space_or_underbar: new RegExp("[ _]", "g"),
    uppercase: new RegExp("([A-Z])", "g"),
    underbar_prefix: new RegExp("^_"),
    apply_rules: function (e, t, n, r) {
        if (r) e = r;
        else {
            var i = n.indexOf(e.toLowerCase()) > -1;
            if (!i) for (var s = 0; s < t.length; s++) if (e.match(t[s][0])) {
                e = e.replace(t[s][0], t[s][1]);
                break
            }
        }
        return e
    }
}, Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t, n) {
    t || (t = -1);
    var r = -1;
    for (var i = t; i < this.length; i++) if (this[i] === e || n && n(this[i], e)) {
        r = i;
        break
    }
    return r
}), String.prototype._uncountable_words || (String.prototype._uncountable_words = InflectionJS.uncountable_words), String.prototype._plural_rules || (String.prototype._plural_rules = InflectionJS.plural_rules), String.prototype._singular_rules || (String.prototype._singular_rules = InflectionJS.singular_rules), String.prototype._non_titlecased_words || (String.prototype._non_titlecased_words = InflectionJS.non_titlecased_words), String.prototype.pluralize || (String.prototype.pluralize = function (e) {
    return InflectionJS.apply_rules(this, this._plural_rules, this._uncountable_words, e)
}), String.prototype.singularize || (String.prototype.singularize = function (e) {
    return InflectionJS.apply_rules(this, this._singular_rules, this._uncountable_words, e)
}), String.prototype.camelize || (String.prototype.camelize = function (e) {
    var t = this.toLowerCase(),
        n = t.split("/");
    for (var r = 0; r < n.length; r++) {
        var i = n[r].split("_"),
            s = e && r + 1 === n.length ? 1 : 0;
        for (var o = s; o < i.length; o++) i[o] = i[o].charAt(0).toUpperCase() + i[o].substring(1);
        n[r] = i.join("")
    }
    return t = n.join("::"), t
}), String.prototype.underscore || (String.prototype.underscore = function () {
    var e = this,
        t = e.split("::");
    for (var n = 0; n < t.length; n++) t[n] = t[n].replace(InflectionJS.uppercase, "_$1"), t[n] = t[n].replace(InflectionJS.underbar_prefix, "");
    return e = t.join("/").toLowerCase(), e
}), String.prototype.humanize || (String.prototype.humanize = function (e) {
    var t = this.toLowerCase();
    return t = t.replace(InflectionJS.id_suffix, ""), t = t.replace(InflectionJS.underbar, " "), e || (t = t.capitalize()), t
}), String.prototype.capitalize || (String.prototype.capitalize = function () {
    var e = this.toLowerCase();
    return e = e.substring(0, 1).toUpperCase() + e.substring(1), e
}), String.prototype.dasherize || (String.prototype.dasherize = function () {
    var e = this;
    return e = e.replace(InflectionJS.space_or_underbar, "-"), e
}), String.prototype.titleize || (String.prototype.titleize = function () {
    var e = this.toLowerCase();
    e = e.replace(InflectionJS.underbar, " ");
    var t = e.split(" ");
    for (var n = 0; n < t.length; n++) {
        var r = t[n].split("-");
        for (var i = 0; i < r.length; i++) this._non_titlecased_words.indexOf(r[i].toLowerCase()) < 0 && (r[i] = r[i].capitalize());
        t[n] = r.join("-")
    }
    return e = t.join(" "), e = e.substring(0, 1).toUpperCase() + e.substring(1), e
}), String.prototype.demodulize || (String.prototype.demodulize = function () {
    var e = this,
        t = e.split("::");
    return e = t[t.length - 1], e
}), String.prototype.tableize || (String.prototype.tableize = function () {
    var e = this;
    return e = e.underscore().pluralize(), e
}), String.prototype.classify || (String.prototype.classify = function () {
    var e = this;
    return e = e.camelize().singularize(), e
}), String.prototype.foreign_key || (String.prototype.foreign_key = function (e) {
    var t = this;
    return t = t.demodulize().underscore() + (e ? "" : "_") + "id", t
}), String.prototype.ordinalize || (String.prototype.ordinalize = function () {
    var e = this,
        t = e.split(" ");
    for (var n = 0; n < t.length; n++) {
        var r = parseInt(t[n]);
        if (r === NaN) {
            var i = t[n].substring(t[n].length - 2),
                s = t[n].substring(t[n].length - 1),
                o = "th";
            i != "11" && i != "12" && i != "13" && (s === "1" ? o = "st" : s === "2" ? o = "nd" : s === "3" && (o = "rd")), t[n] += o
        }
    }
    return e = t.join(" "), e
});
var InvoiceSetting = function (e) {
    var t = {
        create: function (e) {
            $("#invoice_created_at").val(e.created_at), $("#invoice_due_at").val(e.due_at), $("#invoice_due_day").val(e.due_day), $("#due_day").val(e.due_day), $("#invoice_currency").val(e.currency), $("#invoice_send_copy").prop("checked", e.send_copy), $("#invoice_attach_pdf").prop("checked", e.attach_pdf), $("#invoice_tax_1").val(e.tax_1), $("#invoice_tax_2").val(e.tax_2), $("#invoice_discount").val(e.discount), $("#invoice_shipping").val(e.shipping), $("#invoice_notes").html(e.notes), $("#invoice_accept_terms").html(e.accept_terms), $("#invoice_invoice_type").val().match(/invoice/) || $("#invoice_accept_terms-wysiwyg-iframe").contents().find("body").html(e.accept_terms), $("#invoice_notes-wysiwyg-iframe").contents().find("body").html(e.notes), invoice.calculatePrice()
        }
    };
    return t
}, invoiceSetting = InvoiceSetting(document),
    InvoiceEvents = function (e) {
        var t = {
            container: null,
            showMore: function (e) {
                $(e).html() == "Hide Setting" ? ($(".invisible").slideUp(), $(e).html("Show More")) : ($(".invisible").slideDown(), $(e).html("Hide Setting"))
            },
            hideSetting: function () {
                $(".invisible").slideUp(), $(".show_more").slideDown()
            },
            cancelDueAt: function () {
                $(".due_at").fadeOut(), $("#due_day").val(""), $(".due_day, #due_day").fadeIn()
            },
            deleteMultiple: function () {
                $(".checkbox_delete:checked").length > 0 ? confirm("Are you sure you want to delete the selected items?") && (el = $(".deleteMultiple"), params = $(".checkbox_delete:checked").serialize(), onSuccess = function (e) {
                    el.removeClass("disabled").find("span").text("Delete"), index_url = $(".deleteMultiple").attr("href").replace(/\/delete_multiple/i, ""), window.location = index_url
                }, request.post($(".deleteMultiple").attr("href"), {
                    data: params,
                    success: onSuccess,
                    dataType: "html"
                })) : alert("Please select item that you want delete.")
            },
            addSelected: function (e) {
                return $(".checkbox_delete:checked").length > 0 ? ($(".checkbox_delete:checked").map(function (e) {
                    return invoice.products.create($.parseJSON($(this).attr("object-data")))
                }), $.nmTop().close()) : alert("Please select item that you want to add."), !1
            },
            addPaymentRule: function () {
                return invoice.paymentRules.build()
            },
            massMailers: function () {
                $(".checkbox_delete:checked").length > 0 ? (params = $(".checkbox_delete:checked").serialize(), onSuccess = function (e) {
                    alert("All messages have been emailed successfully")
                }, request.post($(".emails").attr("href"), {
                    data: params,
                    success: onSuccess,
                    error: request.defaultError,
                    dataType: "json"
                })) : alert("Please select invoice before sending email.")
            },
            addContacts: function () {
                $(".checkbox_delete:checked").length > 0 ? (el = $(".addContacts"), params = $(".checkbox_delete:checked").serialize(), onSuccess = function (e) {
                    window.location.pathname.match(/(\users\/\profile)|affiliate|emailing/i) ? window.location = "/users/profile" : window.location = "/clients", $.nmTop().close()
                }, request.post($(".addContacts").attr("href"), {
                    data: params,
                    success: onSuccess,
                    error: onSuccess
                })) : alert("Please select item that you want to import as client.")
            },
            addInvoiceClients: function () {
                $(".checkbox_delete:checked").length > 0 ? (el = $(".addInvoiceClients"), params = $(".checkbox_delete:checked").serialize(), onSuccess = function (e) {
                    $(".third_party_clients").length > 0 ? $(".third_party_clients").append(e.responseText) : alert("Your request has been processed"), $.nmTop().close()
                }, request.post($(".addInvoiceClients").attr("href"), {
                    data: params,
                    success: onSuccess,
                    error: onSuccess
                })) : alert("Please select any item to process your request.")
            },
            linkListeners: function () {
                selectors = ".show_more, .hide_setting, .addContacts, .addInvoiceClients, .addInvoiceClients, .cancel_due_at, .deleteMultiple:not('.disabled'), .addSelected, .emails, .addPaymentRule", $(selectors).live("click", function (e) {
                    return e.stopImmediatePropagation(), className = $(this).attr("class"), className.match(/show_more/i) ? t.showMore($(this)) : className.match(/hide_setting/i) ? t.hideSetting() : className.match(/cancel_due_at/i) ? t.cancelDueAt() : className.match(/deleteMultiple/i) ? t.deleteMultiple() : className.match(/addSelected/i) ? t.addSelected($(this)) : className.match(/emails/i) ? t.massMailers() : className.match(/addPaymentRule/i) ? t.addPaymentRule() : className.match(/addContacts/i) ? t.addContacts() : className.match(/addInvoiceClients/i) && t.addInvoiceClients(), !1
                }), $(".add_item_desc").live("click", function (e) {
                    return e.stopImmediatePropagation(), $.parent = $(this).parents("td").first(), $.itemDesc = $.parent.find(".itemDesc"), $.itemDesc.css("display") == "none" ? ($.itemDesc.show(), $(this).html("[-] hide description")) : ($.itemDesc.hide(), $(this).html("[+] add description")), !1
                }), $(".add_item_disc").live("click", function (e) {
                    return e.stopImmediatePropagation(), $.parent = $(this).parents("td").first(), $.itemDisc = $.parent.find(".itemDisc"), $.itemDisc.css("display") == "none" ? ($.itemDisc.show(), $(this).html("[-] hide disc")) : ($.itemDisc.hide(), $(this).html("[+] add disc")), !1
                }), $(".change_client").live("click", function (e) {
                    return e.stopImmediatePropagation(), $(".client_form").show(), $(".client_info").hide(), !1
                }), $(".save_item").live("click", function (e) {
                    return e.stopImmediatePropagation(), invoice.products.save($(this)), !1
                }), $(".add_currency_item").live("click", function (e) {
                    return e.stopImmediatePropagation(), invoice.currencies.build(), !1
                }), $("#invoice_currency").live("change", function (e) {
                    return e.stopImmediatePropagation(), _currencyVal = $(this).val(), $.each($(".currency_to"), function () {
                        $(this).html(_currencyVal)
                    }), !1
                }), $(".delete_currency_item").live("click", function (e) {
                    return e.stopImmediatePropagation(), invoice.currencies.destroy($(this)), !1
                }), $(".yahoo_convertor").live("click", function (e) {
                    return e.stopImmediatePropagation(), invoice.currencies.convert($(this)), !1
                }), $(".multicurrencies").live("change", function (e) {
                    return e.stopImmediatePropagation(), $(this).parents("tr").first().find(".yahoo_convertor").click(), !1
                }), $(".delete_contacts").live("click", function (e) {
                    return e.stopImmediatePropagation(), $(".checkbox_delete:checked").length > 0 ? $("#contacts_container tbody").find(".contact_item").length > 1 ? confirm("You will delete selected contacts, are you sure?") && $.each($(".checkbox_delete:checked"), function () {
                        invoice.contacts.destroy(this)
                    }) : alert("You can not delete this, because client should have at least 1 contact information") : alert("Please select item that you want delete."), !1
                }), t.container.find(".delete_invoice_item").live("click", function (e) {
                    return e.stopImmediatePropagation(), invoice.products.destroy($(this)), !1
                }), t.container.find(".delete_payrule_item").live("click", function (e) {
                    return e.stopImmediatePropagation(), invoice.paymentRules.destroy($(this)), !1
                }), t.container.find(".add_invoice_item").live("click", function (e) {
                    return e.stopImmediatePropagation(), invoice.products.create({
                        description: "",
                        title: "",
                        price: 0,
                        quantity: 0,
                        itemDisc: 0
                    }), !1
                }), t.container.find(".add_contact_item").live("click", function (e) {
                    return e.stopImmediatePropagation(), invoice.contacts.build(), !1
                }), t.container.find(".delete_contact_item").live("click", function (e) {
                    return e.stopImmediatePropagation(), invoice.contacts.destroy($(this)), !1
                })
            },
            inputListeners: function () {
                t.container.find("input.qty, input.prc, input.discount, input.itemDisc, input.shipping, input.tax_1, input.tax_2").live("change", function (e) {
                    return e.stopImmediatePropagation(), $(this).attr("class").match(/qty|prc|itemDisc/i) && invoice.totalPrice($(this).parents("tr")), invoice.calculatePrice()
                }), $("#invoice_due_day").live("change", function (e) {
                    return e.stopImmediatePropagation(), $(this).val() === "" && ($(".due_day").hide(), $(".due_at").show()), !1
                }), $(".cb_multipayment").live("click", function (e) {
                    e.stopImmediatePropagation(), $(this).is(":checked") ? ($(".payment_rule_fieldset").slideDown("slow"), $(this).html("Set Up Installment")) : ($(".payment_rule_fieldset").slideUp("slow"), $(this).html("Hide Installment"))
                }), $("#invoice_currency").live("change", function (e) {
                    e.stopImmediatePropagation(), mainCurrency = $(this).val(), $.each($(".price.main_currency"), function () {
                        $(this).html(mainCurrency)
                    })
                }), $(".checkbox_delete").live("click", function (e) {
                    e.stopImmediatePropagation(), $(this).is(":checked") ? $(this).parents("tr").addClass("deleted_row") : $(this).parents("tr").removeClass("deleted_row")
                }), $(".invoice_setting").live("change", function (e) {
                    return e.stopImmediatePropagation(), $.selected_id = $(this).val(), $.uri = $(this).attr("path").replace(/_ID_/, $.selected_id), _onSuccess = function (e) {
                        invoiceSetting.create(e)
                    }, request.get($.uri, {
                        data: {},
                        success: _onSuccess,
                        error: request.defaultError,
                        dataType: "json"
                    }), !1
                }), $("input.search_keyword").live("blur", function (e) {
                    e.stopImmediatePropagation(), _defaultText = "Or enter company, contact, invoice code ...", this.value = _defaultText, $(this).css("font-style", "italic")
                }), $("input.search_keyword").live("focus", function () {
                    this.value = "", $(this).css("font-style", "normal")
                }), $("#invoice_client_id").live("change", function (e) {
                    e.stopImmediatePropagation(), _onSuccess = function (e) {
                        $(".client_form").hide(), $(".client_info").html(e), $(".client_info").show()
                    }, $(this).val() != "" && request.get($(this).attr("info_url"), {
                        data: {
                            cid: $(this).val()
                        },
                        success: _onSuccess,
                        error: request.defaultError,
                        dataType: "html"
                    })
                }), $("#search_category").live("change", function (e) {
                    e.stopImmediatePropagation(), $(this).val().match(/saved_item/) ? ($(".invoice,.estimation,.client").hide(), $(".product").show()) : $(this).val().match(/estimation/) ? ($(".invoice,.product,.client").hide(), $(".estimation").show()) : $(this).val().match(/invoice/) ? ($(".estimation,.product,.client").hide(), $(".invoice").show()) : $(this).val().match(/client/) && ($(".estimation,.product,.invoice").hide(), $(".client").show())
                })
            },
            dispatch: function (e) {
                t.container = e, t.linkListeners(), t.inputListeners()
            },
            addListener: function (e, t, n) {
                $(e).live(t, n)
            }
        };
        return t
    }, invoiceEvents = InvoiceEvents(document);
$.fn.clearForm = function () {
    return this.each(function () {
        var e, t;
        t = this.type, e = this.tagName.toLowerCase();
        if (e === "form") return $(":input", this).clearForm();
        if (t === "text" || t === "password" || e === "textarea") return this.value = "";
        if (t === "checkbox" || t === "radio") return this.checked = !1;
        if (e === "select") return this.selectedIndex = -1
    })
}, $.fn.formBlank = function () {
    return $.is_true = !0, $(":input", this).each(function () {
        return $(this).val() === "" && ($.is_true = !1), !1
    }), $.is_true
};
var Invoice = function (e) {
    var t = {
        container: null,
        sPrice: "input.prc",
        sItemDisc: "input.itemDisc",
        sQuantity: "input.qty",
        sDiscount: "#invoice_discount",
        sTax1: "#invoice_tax_1",
        sTax2: "input.tax_2",
        sShipping: "#invoice_shipping",
        sGrandTotal: "",
        sAmount: ".invoice_total",
        sSummary: ".sum",
        listItems: null,
        paymentRow: null,
        productRow: null,
        currencyRow: null,
        convertPercent: function (e, t) {
            return _result = t * e / 100, _result
        },
        price: function (e) {
            return t.floatValue(e, t.sPrice)
        },
        quantity: function (e) {
            return t.floatValue(e, t.sQuantity)
        },
        discount: function (e) {
            return _discount = 0, Number($(t.sDiscount).val() > 0) && (_discount = t.convertPercent(Number($(t.sDiscount).val()), Number(e))), _discount
        },
        tax1: function (e) {
            return t.convertPercent(Number($(t.sTax1).val()), Number(e))
        },
        tax2: function (e) {
            return t.convertPercent(Number($(t.sTax2).val()), Number(e))
        },
        totalPrice: function (e) {
            return _disc = Number($(e).find(t.sItemDisc).val()) / 100, _total = t.price(e) * t.quantity(e), _disc > 0 && (_total -= Number(_disc * _total)), $(e).find(".total").html(_total.toFixed(2)), $(e).find(".total").prettynumber({
                delimiter: ","
            }), _total
        },
        getValue: function (e, t) {
            return $(e).find(t).val()
        },
        grandTotal: function () {
            var e = 0;
            $.each(t.listItems, function () {
                _totalPrice = t.totalPrice($(this)), t.totalItem($(this), _totalPrice), e += _totalPrice
            }), $(".subtotal").html(e.toFixed(2)), $(".subtotal").prettynumber({
                delimiter: ","
            });
            var n = t.discount(e);
            $(".total_discount").html(n.toFixed(2)), $(".total_discount").prettynumber({
                delimiter: ","
            }), e -= n;
            var r = t.tax1(e);
            $(".total_tax").html(r.toFixed(2)), $(".total_tax").prettynumber({
                delimiter: ","
            }), e += r;
            var i = Number($(t.sShipping).val());
            $(".total_shipping").html(i.toFixed(2)), $(".total_shipping").prettynumber({
                delimiter: ","
            }), e += i, $(t.sAmount).html(e.toFixed(2)), $(t.sAmount).prettynumber({
                delimiter: ","
            })
        },
        floatValue: function (e, n) {
            return Number(t.getValue(e, n))
        },
        totalItem: function (e, n) {
            e.find(t.sSummary).html(n.toFixed(2)), $(t.sSummary).prettynumber({
                delimiter: ","
            })
        },
        calculatePrice: function () {
            return t.listItems = $(".invoice_item"), t.grandTotal()
        },
        totalRow: function () {
            return $.total = Number($(".product_table").attr("total-item")) + 1, $(".product_table").attr("total-item", $.total), $.total
        },
        loadModules: function (e) {
            t.container = $(e), t.events.dispatch()
        },
        events: {
            dispatch: function () {
                invoiceEvents.dispatch(t.container)
            },
            addListener: function (e, t, n) {
                invoiceEvents.addListener(e, t, n)
            }
        },
        paymentRules: {
            build: function () {
                $.total = Number($(".installment_header").attr("total-item")) + 1, $(".installment_header").attr("total-item", $.total), $.rowRule = $(".installment_item").first(), t.paymentRow || ($.cloned = $(".installment_item").first(), $.cloned.is("ul") ? $el = "ul" : $el = "tr", t.paymentRow = "<" + $el + ' class="layout_line installment_item" style="height:45px;">' + $.cloned.html() + "</" + $el + ">"), $.newRow = t.paymentRow.replace(/\[\d\]/g, "[" + $.total + "]").replace(/\_\d\_/g, "_" + $.total + "_").replace(/value=\".*?\"/g, 'value=""').replace(/hasDatepicker/g, ""), $(".installment_header").append($.newRow), $(".installment_header").children().last().find("textarea").html(""), $(".datepicker").datepicker()
            },
            destroy: function (e) {
                _item = $(e).parents(".installment_item"), t.paymentRow || (t.paymentRow = _item.html()), $.idSelector = _item.find("input").first()[0].id.replace(/amount|_percent|due_at|notes/g, "id"), $.idVal = $("#" + $.idSelector).val(), _item.remove(), $.idVal && ($("#" + $.idSelector).remove(), $.delItemUri = $("#info_container").attr("delete-item-uri"), request.get($.delItemUri, {
                    data: {
                        item_id: $.idVal,
                        paymentrule: !0
                    },
                    dataType: "json"
                }))
            }
        },
        products: {
            create: function (e) {
                t.products.build();
                var n = e.price * e.quantity;
                $.list = $(".invoice_item").last(), n > 0 ? ($.list.find(".total").html(n.toFixed(2)), $.list.find(".total").prettynumber({
                    delimiter: ","
                }), _price = e.price > 0 ? e.price : "", $.list.find("input.prc").val(_price), _discount = Number(e.discount) > 0 ? e.discount : "", $.list.find("input.itemDisc").val(_discount), $.list.find(".description input").val(e.title), $.list.find(".description input").val(e.title), $.list.find(".description textarea").val(e.description), _qty = e.quantity > 0 ? e.quantity : "", $.list.find(".qty input").val(_qty), e._id && $.list.find("input.item_origin_id").val(e._id), t.calculatePrice()) : e.title.length < 1 && $(".invoice_item").length > 1
            },
            save: function (e) {
                return $.list = $(e).parents("ul").first(), $.qty = $.list.find("input.qty").val(), $.prc = $.list.find("input.prc").val(), $.desc = $.list.find(".description input").val(), $.saveItemUri = $("#info_container").attr("create-item-uri"), params = {
                    saved_item: {
                        quantity: $.qty,
                        price: $.prc,
                        title: $.desc
                    }
                }, request.post($.saveItemUri, {
                    data: params,
                    dataType: "json"
                }), !1
            },
            build: function () {
                $.total = t.totalRow(), t.productRow || (t.productRow = t.products.cloning()), $.content = t.productRow.replace(/\[\d\]/g, "[" + $.total + "]").replace(/\_\d\_/g, "_" + $.total + "_").replace(/value=\".*?\"/g, 'value=""'), _item = $(".invoice_item").last(), _item.length > 0 ? ($(".invoice_item").last().after($.content), $(".invoice_item").last().find("textarea").val(""), initProductAutocomplete($(".invoice_item").last().find(".item-autocomplete")), $.idSelector = _item.find("input").first()[0].id.replace(/quantity|price|description/g, "id"), $.idVal = $("#" + $.idSelector).
                val(), _total = t.totalPrice(_item), !$.idVal && _total <= 0, _item.find(".description").find("input").first().val().length < 1 && _item.find(".price").find("input.prc").first().val().length < 1 && _item.remove()) : ($(".product_table tbody").prepend($.content), $(".invoice_item").last().find("textarea").val(""))
            },
            destroy: function (e) {
                _item = $(e).parents(".invoice_item"), t.productRow || (t.productRow = t.products.cloning()), $.idSelector = _item.find("input").first()[0].id.replace(/quantity|price|description/g, "id"), $.idVal = $("#" + $.idSelector).val(), $(".formError").remove(), _item.remove(), t.calculatePrice(), $.idVal && ($("#" + $.idSelector).remove(), $.delItemUri = $("#info_container").attr("delete-item-uri"), request.get($.delItemUri, {
                    data: {
                        item_id: $.idVal
                    },
                    dataType: "json"
                }))
            },
            cloning: function () {
                return _html = '<tr class="invoice_item">', _html += '<td class="qty">', _html += '<input type="text" style="width: 30px" size="30" placeholder="0" name="invoice[invoice_items_attributes][0][quantity]" ', _html += 'id="invoice_invoice_items_attributes_0_quantity" class="qty onlyNums validate[custom[numberPositive]]">', _html += '<input type="hidden" style="width: 30px" size="30" placeholder="0" name="invoice[invoice_items_attributes][0][origin_id]" ', _html += 'id="invoice_invoice_items_attributes_0_origin_id" class="item_origin_id">', _html += "</td>", _html += '<td style="width:330px;" class="description">', _html += '<input type="text" style="width:100%" size="30" placeholder="enter product title" class=\'item-autocomplete\'', _html += 'name="invoice[invoice_items_attributes][0][title]" id="invoice_invoice_items_attributes_0_title">', _html += '<textarea style="width:100%;display:none;" rows="3" placeholder="enter product description" ', _html += 'name="invoice[invoice_items_attributes][0][description]" id="invoice_invoice_items_attributes_0_description" cols="40" class="itemDesc"></textarea>', _html += '<a style="" class="add_item_desc" href="">[+] add description</a>', _html += '</td><td class="price"><input type="text" style="width: 75px" size="30" placeholder="0.00" ', _html += 'name="invoice[invoice_items_attributes][0][price]" id="invoice_invoice_items_attributes_0_price" class="prc onlyFloat validate[custom[numberPositive]]">', _html += '<br><input type="text" style="width: 75px;margin-top:2px;display:none" size="30" placeholder="Disc.%" ', _html += 'name="invoice[invoice_items_attributes][0][discount]" id="invoice_invoice_items_attributes_0_discount" class="itemDisc onlyFloat validate[custom[numberPositive]]">', _html += '<a style="" class="add_item_disc" href="">[+] add disc.%</a>', _html += '</td><td class="total">0.00</td><td class="action">', _html += '', _html += '<span class="iconic-remove">&nbsp;</span></a></td></tr>', _html
            }
        },
        currencies: {
            build: function () {
                $.total = Number($(".currency_header").attr("total-item")) + 1, $(".currency_header").attr("total-item", $.total), t.currencyRow || ($.cloned = $(".currency_item").first(), $.cloned.is("ul") ? $el = "ul" : $el = "tr", _clone = $.cloned.html().replace(/selected\=\"selected\"/, "").replace(/uniform-/, "").replace(/class=\"selector\"/, "").replace(/\<span.*>.*<\/span>/, ""), t.currencyRow = "<" + $el + ' class="layout_line currency_item">' + _clone + "</" + $el + ">"), $.content = t.currencyRow.replace(/\[\d\]/g, "[" + $.total + "]").replace(/\_\d\_/g, "_" + $.total + "_"), $(".currency_header").append($.content), $(".currency_item").last().find("input.conversion").val(""), $(".currency_item").last().find("select").attr("selected", !1), $(".currency_item").last().find("select").not(".uniform-ignore").uniform()
            },
            destroy: function (e) {
                confirm("You will delete invoice currency, do you want continue?") && (_item = $(e).parents(".currency_item"), t.currencyRow || (t.currencyRow = _item.html()), _item.attr("data-path") && $.get(_item.attr("data-path"), {}, function () {
                    $.idSelector = _item.next().attr("id").replace(/currency|conversion/g, "id"), $.idVal = $("#" + $.idSelector).val(), $.idVal && $("#" + $.idSelector).remove()
                }), $(".formError").remove(), _item.remove())
            },
            convert: function (e) {
                $("#commerce_currency_currency_from").length > 0 ? ($.from = $("#commerce_currency_currency_from").val(), $.to = $("#commerce_currency_currency_to").val(), $.yahoo_url = $(".yahoo_convertor").attr("href"), _row = $(".yahoo_convertor").parents("form")) : $("#invoice_currency").length < 1 ? (_row = $(e).parents("tr").first(), $.from = _row.find(".currency_from").val(), $.to = _row.find(".currency_to").val().replace(/\s/, ""), $.yahoo_url = $(".yahoo_convertor").attr("href")) : (_row = $(e).parent().parent(), $.from = _row.find(".description select").val(), $.to = $("#invoice_currency").val(), $.yahoo_url = $(".currency_header").attr("convertor-uri")), $.from.length < 1 ? alert("Please select any currency before converting it to main currency from yahoo finance") : $.to.length < 1 ? alert("Please select main currency") : $.to == $.from ? alert("Multi Currency could not be the same with main currency") : (_onSuccess = function (e) {
                    e = Math.round(Number(e) * Math.pow(10, 2)) / Math.pow(10, 2), _row.find(".conversion").val(e)
                }, request.get($.yahoo_url, {
                    data: {
                        from: $.from,
                        to: $.to
                    },
                    success: _onSuccess,
                    dataType: "json"
                }))
            }
        },
        contacts: {
            build: function () {
                $.total = Number($("#contacts_container").attr("total-item")) + 1, $("#contacts_container").attr("total-item", $.total), $.cloned = $("#contacts_container tr.contact_item").first(), $.content = $.cloned.html().replace(/\[\d\]/g, "[" + $.total + "]").replace(/\_\d\_/g, "_" + $.total + "_").replace(/value=\".*?\"/g, 'value=""'), $("#contacts_container tbody").append('<tr class="contact_item">' + $.content + "</tr>"), $("input").not(".uniform-ignore").uniform()
            },
            destroy: function (e) {
                $("#contacts_container tbody").find(".contact_item").length > 1 ? ($.parent = $(e).parents("tr"), $.idVal = $(e).val(), $.idVal && ($.parent.next().is("input") && $.parent.next().remove(), $.delItemUri = $("#info_container").attr("delete-item-uri"), $.get($.delItemUri, {
                    item_id: $.idVal,
                    contact: !0
                }, function (e) {}, "json")), $.parent.remove()) : alert("You can not delete this, because client should have at least 1 contact information")
            }
        }
    };
    return t
}, invoice = Invoice(document);
invoice.loadModules(".private"), $(document).ready(function () {
    invoice.calculatePrice()
});
var Notification = function (document) {
    var self = {
        channels: [],
        channelHash: {},
        connecting: !1,
        environment: "development",
        path: null,
        client: null,
        api: null,
        statuses: {},
        logger: {
            incoming: function (e, t) {
                return t(e)
            },
            outgoing: function (e, t) {
                return e.connectionType == "websocket" && !self.connecting && (self.connecting = !0, options = {
                    data: {
                        connected: !0,
                        channels: self.channels
                    }
                }, request.post("/users/apis", options)), t(e)
            }
        },
        onError: function (e) {
            console.log(e)
        },
        updateCollection: function (e, t) {
            e.match(/progress/i) ? $(".progress_status").html(t) : $("." + e).html(t)
        },
        paid_money_callback: function (e) {
            e != "" && $(".paid_money").html(e)
        },
        overdue_money_callback: function (e) {
            e != "" && $(".overdue_money").html(e)
        },
        fayeCallback: function (response, channel) {
            channel.match(/money/i) ? (functionName = "self." + channel + "_callback", eval(functionName)(response)) : self.updateCollection(channel, response)
        },
        setupSubscribes: function (e) {
            try {
                self.client = new Faye.Client(e.server)
            } catch (t) {
                console.log(t)
            }
            self.client && (self.client.addExtension(self.logger), self.sessionKey = e.session_key, self.path = "/" + self.sessionKey, self.channels = e.channels, $.each(e.channels, function (e, t) {
                t && t != "" && (fayePath = self.path + "/" + t, self.client.subscribe(fayePath, function (e) {
                    self.fayeCallback(e, t)
                }))
            }))
        },
        requestApi: function (e, t) {
            self.api = e, postData = {
                data: {
                    channels: t.channels,
                    api: e
                },
                success: self.setupSubscribes,
                error: self.onError
            }, request.post("/users/apis", postData)
        },
        load: function (e, t, n) {
            e && !self.connecting && (self.environment = t, self.requestApi(e, n))
        }
    };
    return self
}, notifier = Notification(document);
(function (e) {
    "use strict";

    function r() {
        this.controls = {
            bold: {
                groupIndex: 0,
                visible: !0,
                tags: ["b", "strong"],
                css: {
                    fontWeight: "bold"
                },
                hotkey: {
                    ctrl: 1,
                    key: 66
                }
            },
            copy: {
                groupIndex: 8,
                visible: !1,
            },
            createLink: {
                groupIndex: 6,
                visible: !0,
                exec: function () {
                    var n = this;
                    e.wysiwyg.controls && e.wysiwyg.controls.link ? e.wysiwyg.controls.link.init(this) : e.wysiwyg.autoload ? e.wysiwyg.autoload.control("wysiwyg.link.js", function () {
                        n.controls.createLink.exec.apply(n)
                    }) : t.error("$.wysiwyg.controls.link not defined. You need to include wysiwyg.link.js file")
                },
                tags: ["a"],
            },
            cut: {
                groupIndex: 8,
                visible: !1,
            },
            decreaseFontSize: {
                groupIndex: 9,
                visible: !1,
                tags: ["small"],
                exec: function () {
                    this.decreaseFontSize()
                }
            },
            h1: {
                groupIndex: 7,
                visible: !0,
                className: "h1",
                command: e.browser.msie || e.browser.safari ? "FormatBlock" : "heading",
                arguments: e.browser.msie || e.browser.safari ? "<h1>" : "h1",
                tags: ["h1"],
            },
            h2: {
                groupIndex: 7,
                visible: !0,
                className: "h2",
                command: e.browser.msie || e.browser.safari ? "FormatBlock" : "heading",
                arguments: e.browser.msie || e.browser.safari ? "<h2>" : "h2",
                tags: ["h2"],
            },
            h3: {
                groupIndex: 7,
                visible: !0,
                className: "h3",
                command: e.browser.msie || e.browser.safari ? "FormatBlock" : "heading",
                arguments: e.browser.msie || e.browser.safari ? "<h3>" : "h3",
                tags: ["h3"],
            },
            highlight: {
                className: "highlight",
                groupIndex: 1,
                visible: !1,
                css: {
                    backgroundColor: "rgb(255, 255, 102)"
                },
                exec: function () {
                    var t, n, r, i;
                    e.browser.msie || e.browser.safari ? t = "backcolor" : t = "hilitecolor";
                    if (e.browser.msie) n = this.getInternalRange().parentElement();
                    else {
                        r = this.getInternalSelection(), n = r.extentNode || r.focusNode;
                        while (n.style === undefined) {
                            n = n.parentNode;
                            if (n.tagName && n.tagName.toLowerCase() === "body") return
                        }
                    }
                    n.style.backgroundColor === "rgb(255, 255, 102)" || n.style.backgroundColor === "#ffff66" ? i = "#ffffff" : i = "#ffff66", this.editorDoc.execCommand(t, !1, i)
                }
            },
            html: {
                groupIndex: 10,
                visible: !1,
                exec: function () {
                    var t;
                    this.options.resizeOptions && e.fn.resizable && (t = this.element.height()), this.viewHTML ? (this.setContent(this.original.value), e(this.original).hide(), this.editor.show(), this.options.resizeOptions && e.fn.resizable && (t === this.element.height() && this.element.height(t + this.editor.height()), this.element.resizable(e.extend(!0, {
                        alsoResize: this.editor
                    }, this.options.resizeOptions))), this.ui.toolbar.find("li").each(function () {
                        var t = e(this);
                        t.hasClass("html") ? t.removeClass("active") : t.removeClass("disabled")
                    })) : (this.saveContent(), e(this.original).css({
                        width: this.element.outerWidth() - 6,
                        height: this.element.height() - this.ui.toolbar.height() - 6,
                        resize: "none"
                    }).show(), this.editor.hide(), this.options.resizeOptions && e.fn.resizable && (t === this.element.height() && this.element.height(this.ui.toolbar.height()), this.element.resizable("destroy")), this.ui.toolbar.find("li").each(function () {
                        var t = e(this);
                        t.hasClass("html") ? t.addClass("active") : !1 === t.hasClass("fullscreen") && t.removeClass("active").addClass("disabled")
                    })), this.viewHTML = !this.viewHTML
                },
            },
            increaseFontSize: {
                groupIndex: 9,
                visible: !1,
                tags: ["big"],
                exec: function () {
                    this.increaseFontSize()
                }
            },
            indent: {
                groupIndex: 2,
                visible: !0,
            },
            insertHorizontalRule: {
                groupIndex: 6,
                visible: !0,
                tags: ["hr"],
            },
            insertImage: {
                groupIndex: 6,
                visible: !0,
                exec: function () {
                    var n = this;
                    e.wysiwyg.controls && e.wysiwyg.controls.image ? e.wysiwyg.controls.image.init(this) : e.wysiwyg.autoload ? e.wysiwyg.autoload.control("wysiwyg.image.js", function () {
                        n.controls.insertImage.exec.apply(n)
                    }) : t.error("$.wysiwyg.controls.image not defined. You need to include wysiwyg.image.js file")
                },
                tags: ["img"],
            },
            insertOrderedList: {
                groupIndex: 5,
                visible: !0,
                tags: ["ol"],
            },
            insertTable: {
                groupIndex: 6,
                visible: !0,
                exec: function () {
                    var n = this;
                    e.wysiwyg.controls && e.wysiwyg.controls.table ? e.wysiwyg.controls.table(this) : e.wysiwyg.autoload ? e.wysiwyg.autoload.control("wysiwyg.table.js", function () {
                        n.controls.insertTable.exec.apply(n)
                    }) : t.error("$.wysiwyg.controls.table not defined. You need to include wysiwyg.table.js file")
                },
                tags: ["table"],
            },
            insertUnorderedList: {
                groupIndex: 5,
                visible: !0,
                tags: ["ul"],
            },
            italic: {
                groupIndex: 0,
                visible: !0,
                tags: ["i", "em"],
                css: {
                    fontStyle: "italic"
                },
                hotkey: {
                    ctrl: 1,
                    key: 73
                }
            },
            justifyCenter: {
                groupIndex: 1,
                visible: !0,
                tags: ["center"],
                css: {
                    textAlign: "center"
                },
            },
            justifyFull: {
                groupIndex: 1,
                visible: !0,
                css: {
                    textAlign: "justify"
                },
            },
            justifyLeft: {
                visible: !0,
                groupIndex: 1,
                css: {
                    textAlign: "left"
                },
            },
            justifyRight: {
                groupIndex: 1,
                visible: !0,
                css: {
                    textAlign: "right"
                },
            },
            ltr: {
                groupIndex: 10,
                visible: !1,
                exec: function () {
                    var t = this.dom.getElement("p");
                    return t ? (e(t).attr("dir", "ltr"), !0) : !1
                },
            },
            outdent: {
                groupIndex: 2,
                visible: !0,
            },
            paragraph: {
                groupIndex: 7,
                visible: !1,
                className: "paragraph",
                command: "FormatBlock",
                arguments: e.browser.msie || e.browser.safari ? "<p>" : "p",
                tags: ["p"],
            },
            paste: {
                groupIndex: 8,
                visible: !1,
            },
            redo: {
                groupIndex: 4,
                visible: !0,
            },
            removeFormat: {
                groupIndex: 10,
                visible: !0,
                exec: function () {
                    this.removeFormat()
                },
            },
            rtl: {
                groupIndex: 10,
                visible: !1,
                exec: function () {
                    var t = this.dom.getElement("p");
                    return t ? (e(t).attr("dir", "rtl"), !0) : !1
                },
            },
            strikeThrough: {
                groupIndex: 0,
                visible: !0,
                tags: ["s", "strike"],
                css: {
                    textDecoration: "line-through"
                },
            },
            subscript: {
                groupIndex: 3,
                visible: !0,
                tags: ["sub"],
            },
            superscript: {
                groupIndex: 3,
                visible: !0,
                tags: ["sup"],
            },
            underline: {
                groupIndex: 0,
                visible: !0,
                tags: ["u"],
                css: {
                    textDecoration: "underline"
                },
                hotkey: {
                    ctrl: 1,
                    key: 85
                }
            },
            undo: {
                groupIndex: 4,
                visible: !0,
            },
            code: {
                visible: !0,
                groupIndex: 6,
                exec: function () {
                    var t = this.getInternalRange(),
                        n = e(t.commonAncestorContainer),
                        r = t.commonAncestorContainer.nodeName.toLowerCase();
                    n.parent("code").length ? n.unwrap() : r !== "body" && n.wrap("<code/>")
                }
            },
            cssWrap: {
                visible: !1,
                groupIndex: 6,
                exec: function () {
                    e.wysiwyg.controls.cssWrap.init(this)
                }
            }
        }, this.defaults = {
            html: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" style="margin: 0"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></head><body style="margin: 0; padding: 0; font: 12px Arial; color: #424242;"><div class="oneone">INITIAL_CONTENT</div></body></html>',
            debug: !1,
            controls: {},
            css: {},
            events: {},
            autoGrow: !1,
            autoSave: !0,
            brIE: !0,
            formHeight: 270,
            formWidth: 440,
            iFrameClass: null,
            initialContent: "",
            maxHeight: 1e4,
            maxLength: 0,
            messages: {
                nonSelection: "Select the text you wish to link"
            },
            toolbarHtml: '<ul role="menu" class="toolbar"></ul>',
            removeHeadings: !1,
            replaceDivWithP: !1,
            resizeOptions: !1,
            rmUnusedControls: !1,
            rmUnwantedBr: !0,
            tableFiller: "Lorem ipsum",
            initialMinHeight: null,
            controlImage: {
                forceRelativeUrls: !1
            },
            controlLink: {
                forceRelativeUrls: !1
            },
            plugins: {
                autoload: !1,
                i18n: !1,
                rmFormat: {
                    rmMsWordMarkup: !1
                }
            },
            dialog: "default"
        }, this.availableControlProperties = ["arguments", "callback", "className", "command", "css", "custom", "exec", "groupIndex", "hotkey", "icon", "tags", "visible"], this.editor = null, this.editorDoc = null, this.element = null, this.options = {}, this.original = null, this.savedRange = null, this.timers = [], this.validKeyCodes = [8, 9, 13, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46], this.isDestroyed = !1, this.dom = {
            ie: {
                parent: null
            },
            w3c: {
                parent: null
            }
        }, this.dom.parent = this, this.dom.ie.parent = this.dom, this.dom.w3c.parent = this.dom, this.ui = {}, this.ui.self = this, this.ui.toolbar = null, this.ui.initialHeight = null, this.dom.getAncestor = function (e, t) {
            t = t.toLowerCase();
            while (e && typeof e.tagName != "undefined" && "body" !== e.tagName.toLowerCase()) {
                if (t === e.tagName.toLowerCase()) return e;
                e = e.parentNode
            }
            if (!e.tagName && (e.previousSibling || e.nextSibling)) {
                if (e.previousSibling && e.previousSibling.tagName.toLowerCase() == t) return e.previousSibling;
                if (e.nextSibling && e.nextSibling.tagName.toLowerCase() == t) return e.nextSibling
            }
            return null
        }, this.dom.getElement = function (e) {
            var t = this;
            return e = e.toLowerCase(), window.getSelection ? t.w3c.getElement(e) : t.ie.getElement(e)
        }, this.dom.ie.getElement = function (e) {
            var t = this.parent,
                n = t.parent.getInternalSelection(),
                r = n.createRange(),
                i;
            if ("Control" === n.type) {
                if (1 !== r.length) return null;
                i = r.item(0)
            } else i = r.parentElement();
            return t.getAncestor(i, e)
        }, this.dom.w3c.getElement = function (e) {
            var t = this.parent,
                n = t.parent.getInternalRange(),
                r;
            if (!n) return null;
            r = n.commonAncestorContainer, 3 === r.nodeType && (r = r.parentNode), r === n.startContainer && (r = r.childNodes[n.startOffset]);
            if (!r.tagName && (r.previousSibiling || r.nextSibling)) {
                if (r.previousSibiling && r.previousSibiling.tagName.toLowerCase() == e) return r.previousSibiling;
                if (r.nextSibling && r.nextSibling.tagName.toLowerCase() == e) return r.nextSibling
            }
            return t.getAncestor(r, e)
        }, this.ui.addHoverClass = function () {
            e(this).addClass("wysiwyg-button-hover")
        }, this.ui.appendControls = function () {
            var t = this,
                n = this.self,
                r = n.parseControls(),
                i = !0,
                s = [],
                o = {}, u, a, f = function (e, n) {
                    n.groupIndex && a !== n.groupIndex && (a = n.groupIndex, i = !1);
                    if (!n.visible) return;
                    i || (t.appendItemSeparator(), i = !0), n.custom ? t.appendItemCustom(e, n) : t.appendItem(e, n)
                };
            e.each(r, function (e, t) {
                var n = "empty";
                undefined !== t.groupIndex && ("" === t.groupIndex ? n = "empty" : n = t.groupIndex), undefined === o[n] && (s.push(n), o[n] = {}), o[n][e] = t
            }), s.sort(function (e, t) {
                return "number" == typeof e && typeof e == typeof t ? e - t : (e = e.toString(), t = t.toString(), e > t ? 1 : e === t ? 0 : -1)
            }), 0 < s.length && (a = s[0]);
            for (u = 0; u < s.length; u += 1) e.each(o[s[u]], f)
        }, this.ui.appendItem = function (t, n) {
            var r = this.self,
                i = n.className || n.command || t || "empty",
                s = n.command || t || "";
            return e('<li role="menuitem" unselectable="on">' + i + "</li>").addClass(i).attr("title", s).hover(this.addHoverClass, this.removeHoverClass).click(function (i) {
                if (e(this).hasClass("disabled")) return !1;
                r.triggerControl.apply(r, [t, n]);
                var s = e(i.target);
                for (var o in r.controls) if (s.hasClass(o)) {
                    r.ui.toolbar.find("." + o).toggleClass("active"), r.editorDoc.rememberCommand = !0;
                    break
                }
                return this.blur(), r.ui.returnRange(), r.ui.focus(), !0
            }).appendTo(r.ui.toolbar)
        }, this.ui.appendItemCustom = function (t, n) {
            var r = this.self,
                i = n.command || t || "";
            return n.callback && e(window).bind("trigger-" + t + ".wysiwyg", n.callback), e('<li role="menuitem" unselectable="on" style="background: url(\'' + n.icon + "') no-repeat;\"></li>").addClass("custom-command-" + t).addClass("wysiwyg-custom-command").addClass(t).attr("title", i).hover(this.addHoverClass, this.removeHoverClass).click(function () {
                return e(this).hasClass("disabled") ? !1 : (r.triggerControl.apply(r, [t, n]), this.blur(), r.ui.returnRange(), r.ui.focus(), r.triggerControlCallback(t), !0)
            }).appendTo(r.ui.toolbar)
        }, this.ui.appendItemSeparator = function () {
            var t = this.self;
            return e('<li role="separator" class="separator"></li>').appendTo(t.ui.toolbar)
        }, this.autoSaveFunction = function () {
            this.saveContent()
        }, this.ui.checkTargets = function (t) {
            var n = this.self;
            e.each(n.options.controls, function (r, i) {
                var s = i.className || i.command || r || "empty",
                    o, u, a, f, l = function (e, t) {
                        var r;
                        "function" == typeof t ? (r = t, r(f.css(e).toString().toLowerCase(), n) && n.ui.toolbar.find("." + s).addClass("active")) : f.css(e).toString().toLowerCase() === t && n.ui.toolbar.find("." + s).addClass("active")
                    };
                "fullscreen" !== s && n.ui.toolbar.find("." + s).removeClass("active");
                if (i.tags || i.options && i.options.tags) {
                    o = i.tags || i.options && i.options.tags, u = t;
                    while (u) {
                        if (u.nodeType !== 1) break;
                        e.inArray(u.tagName.toLowerCase(), o) !== -1 && n.ui.toolbar.find("." + s).addClass("active"), u = u.parentNode
                    }
                }
                if (i.css || i.options && i.options.css) {
                    a = i.css || i.options && i.options.css, f = e(t);
                    while (f) {
                        if (f[0].nodeType !== 1) break;
                        e.each(a, l), f = f.parent()
                    }
                }
            })
        }, this.ui.designMode = function () {
            var e = 3,
                t = this.self,
                n;
            n = function (e) {
                if ("on" === t.editorDoc.designMode) {
                    t.timers.designMode && window.clearTimeout(t.timers.designMode), t.innerDocument() !== t.editorDoc && t.ui.initFrame();
                    return
                }
                try {
                    t.editorDoc.designMode = "on"
                } catch (r) {}
                e -= 1, e > 0 && (t.timers.designMode = window.setTimeout(function () {
                    n(e)
                }, 100))
            }, n(e)
        }, this.destroy = function () {
            this.isDestroyed = !0;
            var t, n = this.element.closest("form");
            for (t = 0; t < this.timers.length; t += 1) window.clearTimeout(this.timers[t]);
            return n.unbind(".wysiwyg"), this.element.remove(), e.removeData(this.original, "wysiwyg"), e(this.original).show(), this
        }, this.getRangeText = function () {
            var e = this.getInternalRange();
            return e.toString ? e = e.toString() : e.text && (e = e.text), e
        }, this.execute = function (e, t) {
            typeof t == "undefined" && (t = null), this.editorDoc.execCommand(e, !1, t)
        }, this.extendOptions = function (t) {
            var n = {};
            return "object" == typeof t.controls && (n = t.controls, delete t.controls), t = e.extend(!0, {}, this.defaults, t), t.controls = e.extend(!0, {}, n, this.controls, n), t.rmUnusedControls && e.each(t.controls, function (e) {
                n[e] || delete t.controls[e]
            }), t
        }, this.ui.focus = function () {
            var e = this.self;
            return e.editor.get(0).contentWindow.focus(), e
        }, this.ui.returnRange = function () {
            var e = this.self,
                n;
            if (e.savedRange !== null) {
                if (window.getSelection) {
                    n = window.getSelection(), n.rangeCount > 0 && n.removeAllRanges();
                    try {
                        n.addRange(e.savedRange)
                    } catch (r) {
                        t.error(r)
                    }
                } else window.document.createRange ? window.getSelection().addRange(e.savedRange) : window.document.selection && e.savedRange.select();
                e.savedRange = null
            }
        }, this.increaseFontSize = function () {
            if (e.browser.mozilla || e.browser.opera) this.editorDoc.execCommand("increaseFontSize", !1, null);
            else if (e.browser.safari) {
                var n = this.getInternalRange(),
                    r = this.getInternalSelection(),
                    i = this.editorDoc.createElement("big");
                if (!0 === n.collapsed && 3 === n.commonAncestorContainer.nodeType) {
                    var s = n.commonAncestorContainer.nodeValue.toString(),
                        o = s.lastIndexOf(" ", n.startOffset) + 1,
                        u = -1 === s.indexOf(" ", n.startOffset) ? s : s.indexOf(" ", n.startOffset);
                    n.setStart(n.commonAncestorContainer, o), n.setEnd(n.commonAncestorContainer, u), n.surroundContents(i), r.addRange(n)
                } else n.surroundContents(i), r.removeAllRanges(), r.addRange(n)
            } else t.error("Internet Explorer?")
        }, this.decreaseFontSize = function () {
            if (e.browser.mozilla || e.browser.opera) this.editorDoc.execCommand("decreaseFontSize", !1, null);
            else if (e.browser.safari) {
                var n = this.getInternalRange(),
                    r = this.getInternalSelection(),
                    i = this.editorDoc.createElement("small");
                if (!0 === n.collapsed && 3 === n.commonAncestorContainer.nodeType) {
                    var s = n.commonAncestorContainer.nodeValue.toString(),
                        o = s.lastIndexOf(" ", n.startOffset) + 1,
                        u = -1 === s.indexOf(" ", n.startOffset) ? s : s.indexOf(" ", n.startOffset);
                    n.setStart(n.commonAncestorContainer, o), n.setEnd(n.commonAncestorContainer, u), n.surroundContents(i), r.addRange(n)
                } else n.surroundContents(i), r.removeAllRanges(), r.addRange(n)
            } else t.error("Internet Explorer?")
        }, this.getContent = function () {
            return this.viewHTML && this.setContent(this.original.value), this.events.filter("getContent", this.editorDoc.body.innerHTML)
        }, this.events = {
            _events: {},
            bind: function (e, t) {
                typeof this._events.eventName != "object" && (this._events[e] = []), this._events[e].push(t)
            },
            trigger: function (t, n) {
                if (typeof this._events.eventName == "object") {
                    var r = this.editor;
                    e.each(this._events[t], function (e, t) {
                        typeof t == "function" && t.apply(r, n)
                    })
                }
            },
            filter: function (t, n) {
                if (typeof this._events[t] == "object") {
                    var r = this.editor,
                        i = Array.prototype.slice.call(arguments, 1);
                    e.each(this._events[t], function (e, t) {
                        typeof t == "function" && (n = t.apply(r, i))
                    })
                }
                return n
            }
        }, this.getElementByAttributeValue = function (t, n, r) {
            var i, s, o = this.editorDoc.getElementsByTagName(t);
            for (i = 0; i < o.length; i += 1) {
                s = o[i].getAttribute(n), e.browser.msie && (s = s.substr(s.length - r.length));
                if (s === r) return o[i]
            }
            return !1
        }, this.getInternalRange = function () {
            var e = this.getInternalSelection();
            return e ? e.rangeCount && e.rangeCount > 0 ? e.getRangeAt(0) : e.createRange ? e.createRange() : null : null
        }, this.getInternalSelection = function () {
            if (this.editor.get(0).contentWindow) {
                if (this.editor.get(0).contentWindow.getSelection) return this.editor.get(0).contentWindow.getSelection();
                if (this.editor.get(0).contentWindow.selection) return this.editor.get(0).contentWindow.selection
            }
            return this.editorDoc.getSelection ? this.editorDoc.getSelection() : this.editorDoc.selection ? this.editorDoc.selection : null
        }, this.getRange = function () {
            var e = this.getSelection();
            if (!e) return null;
            if (e.rangeCount && e.rangeCount > 0) e.getRangeAt(0);
            else if (e.createRange) return e.createRange();
            return null
        }, this.getSelection = function () {
            return window.getSelection ? window.getSelection() : window.document.selection
        }, this.ui.grow = function () {
            var t = this.self,
                n = e(t.editorDoc.body),
                r = e.browser.msie ? n[0].scrollHeight : n.height() + 2 + 20,
                i = t.ui.initialHeight,
                s = Math.max(r, i);
            return s = Math.min(s, t.options.maxHeight), t.editor.attr("scrolling", s < t.options.maxHeight ? "no" : "auto"), n.css("overflow", s < t.options.maxHeight ? "hidden" : ""), t.editor.get(0).height = s, t
        }, this.init = function (t, n) {
            var r = this,
                i = e(t).closest("form"),
                s = t.width || t.clientWidth || 0,
                o = t.height || t.clientHeight || 0;
            this.options = this.extendOptions(n), this.original = t, this.ui.toolbar = e(this.options.toolbarHtml), e.browser.msie && parseInt(e.browser.version, 10) < 8 && (this.options.autoGrow = !1), s === 0 && t.cols && (s = t.cols * 8 + 21), o === 0 && t.rows && (o = t.rows * 16 + 16), this.editor = e(window.location.protocol === "https:" ? '<iframe src="javascript:false;"></iframe>' : "<iframe></iframe>").attr("frameborder", "0"), this.options.iFrameClass ? this.editor.addClass(this.options.iFrameClass) : (this.editor.css({
                minHeight: (o - 6).toString() + "px",
                width: s > 50 ? (s - 8).toString() + "px" : ""
            }), e.browser.msie && parseInt(e.browser.version, 10) < 7 && this.editor.css("height", o.toString() + "px"));
            if (t.id) {
                var u = t.id + "-wysiwyg-iframe";
                document.getElementById(u) || this.editor.attr("id", u)
            }
            this.editor.attr("tabindex", e(t).attr("tabindex")), this.element = e("<div/>").addClass("wysiwyg"), this.options.iFrameClass || this.element.css({
                width: s > 0 ? s.toString() + "px" : "100%"
            }), e(t).hide().before(this.element), this.viewHTML = !1, this.initialContent = e(t).val(), this.ui.initFrame(), this.options.resizeOptions && e.fn.resizable && this.element.resizable(e.extend(!0, {
                alsoResize: this.editor
            }, this.options.resizeOptions)), this.options.autoSave && i.bind("submit.wysiwyg", function () {
                r.autoSaveFunction()
            }), i.bind("reset.wysiwyg", function () {
                r.resetFunction()
            })
        }, this.ui.initFrame = function () {
            var n = this.self,
                r, i, s;
            n.ui.appendControls(), n.element.append(n.ui.toolbar).append(e("<div><!-- --></div>").css({
                clear: "both"
            })).append(n.editor), n.editorDoc = n.innerDocument();
            if (n.isDestroyed) return null;
            n.ui.designMode(), n.editorDoc.open(), n.editorDoc.write(n.options.html.replace(/INITIAL_CONTENT/, function () {
                return n.wrapInitialContent()
            })), n.editorDoc.close(), e.wysiwyg.plugin.bind(n), e(n.editorDoc).trigger("initFrame.wysiwyg"), e(n.editorDoc).bind("click.wysiwyg", function (e) {
                n.ui.checkTargets(e.target ? e.target : e.srcElement)
            }), setInterval(function () {
                var r = null;
                try {
                    var i = n.getInternalRange();
                    i && (r = {
                        range: i,
                        parent: e.browser.msie ? i.parentElement() : i.endContainer.parentNode,
                        width: (e.browser.msie ? i.boundingWidth : i.startOffset - i.endOffset) || 0
                    })
                } catch (s) {
                    t.error(s)
                }
                r && r.width == 0 && !n.editorDoc.rememberCommand && n.ui.checkTargets(r.parent)
            }, 400), e(n.original).focus(function () {
                if (e(this).filter(":visible").length === 0) return;
                n.ui.focus()
            }), e(n.editorDoc).keydown(function (e) {
                var t;
                if (e.keyCode === 8) {
                    t = /^<([\w]+)[^>]*>(<br\/?>)?<\/\1>$/;
                    if (t.test(n.getContent())) return e.stopPropagation(), !1
                }
                return n.editorDoc.rememberCommand = !1, !0
            }), e.browser.msie ? n.options.brIE && e(n.editorDoc).keydown(function (e) {
                if (e.keyCode === 13) {
                    var t = n.getRange();
                    return t.pasteHTML("<br/>"), t.collapse(!1), t.select(), !1
                }
                return !0
            }) : e(n.editorDoc).keydown(function (e) {
                var t;
                if (e.ctrlKey || e.metaKey) for (t in n.controls) if (n.controls[t].hotkey && n.controls[t].hotkey.ctrl && e.keyCode === n.controls[t].hotkey.key) return n.triggerControl.apply(n, [t, n.controls[t]]), !1;
                return !0
            }), n.options.plugins.rmFormat.rmMsWordMarkup && e(n.editorDoc).bind("keyup.wysiwyg", function (t) {
                (t.ctrlKey || t.metaKey) && 86 === t.keyCode && e.wysiwyg.rmFormat && ("object" == typeof n.options.plugins.rmFormat.rmMsWordMarkup ? e.wysiwyg.rmFormat.run(n, {
                    rules: {
                        msWordMarkup: n.options.plugins.rmFormat.rmMsWordMarkup
                    }
                }) : e.wysiwyg.rmFormat.run(n, {
                    rules: {
                        msWordMarkup: {
                            enabled: !0
                        }
                    }
                }))
            }), n.options.autoSave && e(n.editorDoc).keydown(function () {
                n.autoSaveFunction()
            }).keyup(function () {
                n.autoSaveFunction()
            }).mousedown(function () {
                n.autoSaveFunction()
            }).bind(e.support.noCloneEvent ? "input.wysiwyg" : "paste.wysiwyg", function () {
                n.autoSaveFunction()
            }), n.options.autoGrow && (n.options.initialMinHeight !== null ? n.ui.initialHeight = n.options.initialMinHeight : n.ui.initialHeight = e(n.editorDoc).height(), e(n.editorDoc.body).css("border", "1px solid white"), i = function () {
                n.ui.grow()
            }, e(n.editorDoc).keyup(i), e(n.editorDoc).bind("editorRefresh.wysiwyg", i), n.ui.grow()), n.options.css && (String === n.options.css.constructor ? e.browser.msie ? (r = n.editorDoc.createStyleSheet(n.options.css), e(r).attr({
                media: "all"
            })) : (r = e("<link/>").attr({
                href: n.options.css,
                media: "all",
                rel: "stylesheet",
                type: "text/css"
            }), e(n.editorDoc).find("head").append(r)) : n.timers.initFrame_Css = window.setTimeout(function () {
                e(n.editorDoc.body).css(n.options.css)
            }, 0)), n.initialContent.length === 0 && ("function" == typeof n.options.initialContent ? n.setContent(n.options.initialContent()) : n.setContent(n.options.initialContent)), n.options.maxLength > 0 && e(n.editorDoc).keydown(function (t) {
                e(n.editorDoc).text().length >= n.options.maxLength && e.inArray(t.which, n.validKeyCodes) === -1 && t.preventDefault()
            }), e.each(n.options.events, function (t, r) {
                e(n.editorDoc).bind(t + ".wysiwyg", function (e) {
                    r.apply(n.editorDoc, [e, n])
                })
            }), e.browser.msie ? e(n.editorDoc).bind("beforedeactivate.wysiwyg", function () {
                n.savedRange = n.getInternalRange()
            }) : e(n.editorDoc).bind("blur.wysiwyg", function () {
                n.savedRange = n.getInternalRange()
            }), e(n.editorDoc.body).addClass("wysiwyg"), n.options.events && n.options.events.save && (s = n.options.events.save, e(n.editorDoc).bind("keyup.wysiwyg", s), e(n.editorDoc).bind("change.wysiwyg", s), e.support.noCloneEvent ? e(n.editorDoc).bind("input.wysiwyg", s) : (e(n.editorDoc).bind("paste.wysiwyg", s), e(n.editorDoc).bind("cut.wysiwyg", s)));
            if (n.options.xhtml5 && n.options.unicode) {
                var o = {
                    ne: 8800,
                    le: 8804,
                    para: 182,
                    xi: 958,
                    darr: 8595,
                    nu: 957,
                    oacute: 243,
                    Uacute: 218,
                    omega: 969,
                    prime: 8242,
                    pound: 163,
                    igrave: 236,
                    thorn: 254,
                    forall: 8704,
                    emsp: 8195,
                    lowast: 8727,
                    brvbar: 166,
                    alefsym: 8501,
                    nbsp: 160,
                    delta: 948,
                    clubs: 9827,
                    lArr: 8656,
                    Omega: 937,
                    Auml: 196,
                    cedil: 184,
                    and: 8743,
                    plusmn: 177,
                    ge: 8805,
                    raquo: 187,
                    uml: 168,
                    equiv: 8801,
                    laquo: 171,
                    rdquo: 8221,
                    Epsilon: 917,
                    divide: 247,
                    fnof: 402,
                    chi: 967,
                    Dagger: 8225,
                    iacute: 237,
                    rceil: 8969,
                    sigma: 963,
                    Oslash: 216,
                    acute: 180,
                    frac34: 190,
                    lrm: 8206,
                    upsih: 978,
                    Scaron: 352,
                    part: 8706,
                    exist: 8707,
                    nabla: 8711,
                    image: 8465,
                    prop: 8733,
                    zwj: 8205,
                    omicron: 959,
                    aacute: 225,
                    Yuml: 376,
                    Yacute: 221,
                    weierp: 8472,
                    rsquo: 8217,
                    otimes: 8855,
                    kappa: 954,
                    thetasym: 977,
                    harr: 8596,
                    Ouml: 214,
                    Iota: 921,
                    ograve: 242,
                    sdot: 8901,
                    copy: 169,
                    oplus: 8853,
                    acirc: 226,
                    sup: 8835,
                    zeta: 950,
                    Iacute: 205,
                    Oacute: 211,
                    crarr: 8629,
                    Nu: 925,
                    bdquo: 8222,
                    lsquo: 8216,
                    apos: 39,
                    Beta: 914,
                    eacute: 233,
                    egrave: 232,
                    lceil: 8968,
                    Kappa: 922,
                    piv: 982,
                    Ccedil: 199,
                    ldquo: 8220,
                    Xi: 926,
                    cent: 162,
                    uarr: 8593,
                    hellip: 8230,
                    Aacute: 193,
                    ensp: 8194,
                    sect: 167,
                    Ugrave: 217,
                    aelig: 230,
                    ordf: 170,
                    curren: 164,
                    sbquo: 8218,
                    macr: 175,
                    Phi: 934,
                    Eta: 919,
                    rho: 961,
                    Omicron: 927,
                    sup2: 178,
                    euro: 8364,
                    aring: 229,
                    Theta: 920,
                    mdash: 8212,
                    uuml: 252,
                    otilde: 245,
                    eta: 951,
                    uacute: 250,
                    rArr: 8658,
                    nsub: 8836,
                    agrave: 224,
                    notin: 8713,
                    ndash: 8211,
                    Psi: 936,
                    Ocirc: 212,
                    sube: 8838,
                    szlig: 223,
                    micro: 181,
                    not: 172,
                    sup1: 185,
                    middot: 183,
                    iota: 953,
                    ecirc: 234,
                    lsaquo: 8249,
                    thinsp: 8201,
                    sum: 8721,
                    ntilde: 241,
                    scaron: 353,
                    cap: 8745,
                    atilde: 227,
                    lang: 10216,
                    __replacement: 65533,
                    isin: 8712,
                    gamma: 947,
                    Euml: 203,
                    ang: 8736,
                    upsilon: 965,
                    Ntilde: 209,
                    hearts: 9829,
                    Alpha: 913,
                    Tau: 932,
                    spades: 9824,
                    dagger: 8224,
                    THORN: 222,
                    "int": 8747,
                    lambda: 955,
                    Eacute: 201,
                    Uuml: 220,
                    infin: 8734,
                    rlm: 8207,
                    Aring: 197,
                    ugrave: 249,
                    Egrave: 200,
                    Acirc: 194,
                    rsaquo: 8250,
                    ETH: 208,
                    oslash: 248,
                    alpha: 945,
                    Ograve: 210,
                    Prime: 8243,
                    mu: 956,
                    ni: 8715,
                    real: 8476,
                    bull: 8226,
                    beta: 946,
                    icirc: 238,
                    eth: 240,
                    prod: 8719,
                    larr: 8592,
                    ordm: 186,
                    perp: 8869,
                    Gamma: 915,
                    reg: 174,
                    ucirc: 251,
                    Pi: 928,
                    psi: 968,
                    tilde: 732,
                    asymp: 8776,
                    zwnj: 8204,
                    Agrave: 192,
                    deg: 176,
                    AElig: 198,
                    times: 215,
                    Delta: 916,
                    sim: 8764,
                    Otilde: 213,
                    Mu: 924,
                    uArr: 8657,
                    circ: 710,
                    theta: 952,
                    Rho: 929,
                    sup3: 179,
                    diams: 9830,
                    tau: 964,
                    Chi: 935,
                    frac14: 188,
                    oelig: 339,
                    shy: 173,
                    or: 8744,
                    dArr: 8659,
                    phi: 966,
                    iuml: 239,
                    Lambda: 923,
                    rfloor: 8971,
                    iexcl: 161,
                    cong: 8773,
                    ccedil: 231,
                    Icirc: 206,
                    frac12: 189,
                    loz: 9674,
                    rarr: 8594,
                    cup: 8746,
                    radic: 8730,
                    frasl: 8260,
                    euml: 235,
                    OElig: 338,
                    hArr: 8660,
                    Atilde: 195,
                    Upsilon: 933,
                    there4: 8756,
                    ouml: 246,
                    oline: 8254,
                    Ecirc: 202,
                    yacute: 253,
                    auml: 228,
                    permil: 8240,
                    sigmaf: 962,
                    iquest: 191,
                    empty: 8709,
                    pi: 960,
                    Ucirc: 219,
                    supe: 8839,
                    Igrave: 204,
                    yen: 165,
                    rang: 10217,
                    trade: 8482,
                    lfloor: 8970,
                    minus: 8722,
                    Zeta: 918,
                    sub: 8834,
                    epsilon: 949,
                    yuml: 255,
                    Sigma: 931,
                    Iuml: 207,
                    ocirc: 244
                };
                n.events.bind("getContent", function (e) {
                    return e.replace(/&(?:amp;)?(?!amp|lt|gt|quot)([a-z][a-z0-9]*);/gi, function (e, t) {
                        o[t] || (t = t.toLowerCase(), o[t] || (t = "__replacement"));
                        var n = o[t];
                        return String.fromCharCode(n)
                    })
                })
            }
            e(n.original).trigger("ready.jwysiwyg", [n.editorDoc, n])
        }, this.innerDocument = function () {
            var e = this.editor.get(0);
            if (e.nodeName.toLowerCase() === "iframe") {
                if (e.contentDocument) return e.contentDocument;
                if (e.contentWindow) return e.contentWindow.document;
                if (this.isDestroyed) return null;
                t.error("Unexpected error in innerDocument")
            }
            return e
        }, this.insertHtml = function (t) {
            var n, r;
            return !t || t.length === 0 ? this : (e.browser.msie ? (this.ui.focus(), this.editorDoc.execCommand("insertImage", !1, "#jwysiwyg#"), n = this.getElementByAttributeValue("img", "src", "#jwysiwyg#"), n && e(n).replaceWith(t)) : e.browser.mozilla ? 1 === e(t).length ? (r = this.getInternalRange(), r.deleteContents(), r.insertNode(e(t).get(0))) : this.editorDoc.execCommand("insertHTML", !1, t) : this.editorDoc.execCommand("insertHTML", !1, t) || (this.editor.focus(), this.editorDoc.execCommand("insertHTML", !1, t)), this.saveContent(), this)
        }, this.parseControls = function () {
            var t = this;
            return e.each(this.options.controls, function (n, r) {
                e.each(r, function (r) {
                    if (-1 === e.inArray(r, t.availableControlProperties)) throw n + '["' + r + '"]: property "' + r + '" not exists in Wysiwyg.availableControlProperties'
                })
            }), this.options.parseControls ? this.options.parseControls.call(this) : this.options.controls
        }, this.removeFormat = function () {
            return e.browser.msie && this.ui.focus(), this.options.removeHeadings && this.editorDoc.execCommand("formatBlock", !1, "<p>"), this.editorDoc.execCommand("removeFormat", !1, null), this.editorDoc.execCommand("unlink", !1, null), e.wysiwyg.rmFormat && e.wysiwyg.rmFormat.enabled && ("object" == typeof this.options.plugins.rmFormat.rmMsWordMarkup ? e.wysiwyg.rmFormat.run(this, {
                rules: {
                    msWordMarkup: this.options.plugins.rmFormat.rmMsWordMarkup
                }
            }) : e.wysiwyg.rmFormat.run(this, {
                rules: {
                    msWordMarkup: {
                        enabled: !0
                    }
                }
            })), this
        }, this.ui.removeHoverClass = function () {
            e(this).removeClass("wysiwyg-button-hover")
        }, this.resetFunction = function () {
            this.setContent(this.initialContent)
        }, this.saveContent = function () {
            if (this.viewHTML) return;
            if (this.original) {
                var t, n;
                t = this.getContent(), this.options.rmUnwantedBr && (t = t.replace(/<br\/?>$/, "")), this.options.replaceDivWithP && (n = e("<div/>").addClass("temp").append(t), n.children("div").each(function () {
                    var t = e(this),
                        n = t.find("p"),
                        r;
                    if (0 === n.length) {
                        n = e("<p></p>");
                        if (this.attributes.length > 0) for (r = 0; r < this.attributes.length; r += 1) n.attr(this.attributes[r].name, t.attr(this.attributes[r].name));
                        n.append(t.html()), t.replaceWith(n)
                    }
                }), t = n.html()), e(this.original).val(t), this.options.events && this.options.events.save && this.options.events.save.call(this)
            }
            return this
        }, this.setContent = function (e) {
            return this.editorDoc.body.innerHTML = e, this.saveContent(), this
        }, this.triggerControl = function (e, n) {
            var r = n.command || e,
                i = n.arguments || [];
            if (n.exec) n.exec.apply(this);
            else {
                this.ui.focus(), this.ui.withoutCss();
                try {
                    this.editorDoc.execCommand(r, !1, i)
                } catch (s) {
                    t.error(s)
                }
            }
            this.options.autoSave && this.autoSaveFunction()
        }, this.triggerControlCallback = function (t) {
            e(window).trigger("trigger-" + t + ".wysiwyg", [this])
        }, this.ui.withoutCss = function () {
            var t = this.self;
            if (e.browser.mozilla) try {
                t.editorDoc.execCommand("styleWithCSS", !1, !1)
            } catch (n) {
                try {
                    t.editorDoc.execCommand("useCSS", !1, !0)
                } catch (r) {}
            }
            return t
        }, this.wrapInitialContent = function () {
            var e = this.initialContent,
                t = e.match(/<\/?p>/gi);
            return t ? e : "<p>" + e + "</p>"
        }
    }
    var t = window.console ? window.console : {
        log: e.noop,
        error: function (t) {
            e.error(t)
        }
    }, n = "prop" in e.fn && "removeProp" in e.fn;
    e.wysiwyg = {
        messages: {
            noObject: "Something goes wrong, check object"
        },
        addControl: function (t, n, r) {
            return t.each(function () {
                var t = e(this).data("wysiwyg"),
                    i = {}, s;
                if (!t) return this;
                i[n] = e.extend(!0, {
                    visible: !0,
                    custom: !0
                }, r), e.extend(!0, t.options.controls, i), s = e(t.options.toolbarHtml), t.ui.toolbar.replaceWith(s), t.ui.toolbar = s, t.ui.appendControls()
            })
        },
        clear: function (t) {
            return t.each(function () {
                var t = e(this).data("wysiwyg");
                if (!t) return this;
                t.setContent("")
            })
        },
        console: t,
        destroy: function (t) {
            return t.each(function () {
                var t = e(this).data("wysiwyg");
                if (!t) return this;
                t.destroy()
            })
        },
        document: function (t) {
            var n = t.data("wysiwyg");
            return n ? e(n.editorDoc) : undefined
        },
        getContent: function (e) {
            var t = e.data("wysiwyg");
            return t ? t.getContent() : undefined
        },
        init: function (t, n) {
            return t.each(function () {
                var t = e.extend(!0, {}, n),
                    i;
                if ("textarea" !== this.nodeName.toLowerCase() || e(this).data("wysiwyg")) return;
                i = new r, i.init(this, t), e.data(this, "wysiwyg", i), e(i.editorDoc).trigger("afterInit.wysiwyg")
            })
        },
        insertHtml: function (t, n) {
            return t.each(function () {
                var t = e(this).data("wysiwyg");
                if (!t) return this;
                t.insertHtml(n)
            })
        },
        plugin: {
            listeners: {},
            bind: function (t) {
                var n = this;
                e.each(this.listeners, function (r, i) {
                    var s, o;
                    for (s = 0; s < i.length; s += 1) o = n.parseName(i[s]), e(t.editorDoc).bind(r + ".wysiwyg", {
                        plugin: o
                    }, function (n) {
                        e.wysiwyg[n.data.plugin.name][n.data.plugin.method].apply(e.wysiwyg[n.data.plugin.name], [t])
                    })
                })
            },
            exists: function (t) {
                var n;
                return "string" != typeof t ? !1 : (n = this.parseName(t), !e.wysiwyg[n.name] || !e.wysiwyg[n.name][n.method] ? !1 : !0)
            },
            listen: function (t, n) {
                var r;
                return r = this.parseName(n), !e.wysiwyg[r.name] || !e.wysiwyg[r.name][r.method] ? !1 : (this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push(n), !0)
            },
            parseName: function (e) {
                var t;
                return "string" != typeof e ? !1 : (t = e.split("."), 2 > t.length ? !1 : {
                    name: t[0],
                    method: t[1]
                })
            },
            register: function (n) {
                return n.name || t.error("Plugin name missing"), e.each(e.wysiwyg, function (e) {
                    e === n.name && t.error("Plugin with name '" + n.name + "' was already registered")
                }), e.wysiwyg[n.name] = n, !0
            }
        },
        removeFormat: function (t) {
            return t.each(function () {
                var t = e(this).data("wysiwyg");
                if (!t) return this;
                t.removeFormat()
            })
        },
        save: function (t) {
            return t.each(function () {
                var t = e(this).data("wysiwyg");
                if (!t) return this;
                t.saveContent()
            })
        },
        selectAll: function (e) {
            var t = e.data("wysiwyg"),
                n, r, i;
            if (!t) return this;
            n = t.editorDoc.body, window.getSelection ? (i = t.getInternalSelection(), i.selectAllChildren(n)) : (r = n.createTextRange(), r.moveToElementText(n), r.select())
        },
        setContent: function (t, n) {
            return t.each(function () {
                var t = e(this).data("wysiwyg");
                if (!t) return this;
                t.setContent(n)
            })
        },
        triggerControl: function (n, r) {
            return n.each(function () {
                var n = e(this).data("wysiwyg");
                if (!n) return this;
                n.controls[r] || t.error("Control '" + r + "' not exists"), n.triggerControl.apply(n, [r, n.controls[r]])
            })
        },
        support: {
            prop: n
        },
        utils: {
            extraSafeEntities: [
                ["<", ">", "'", '"', " "],
                [32]
            ],
            encodeEntities: function (t) {
                var n = this,
                    r, i = [];
                return this.extraSafeEntities[1].length === 0 && e.each(this.extraSafeEntities[0], function (e, t) {
                    n.extraSafeEntities[1].push(t.charCodeAt(0))
                }), r = t.split(""), e.each(r, function (t) {
                    var s = r[t].charCodeAt(0);
                    e.inArray(s, n.extraSafeEntities[1]) && (s < 65 || s > 127 || s > 90 && s < 97) ? i.push("&#" + s + ";") : i.push(r[t])
                }), i.join("")
            }
        }
    }, e.wysiwyg.dialog = function (t, n) {
        var r = t && t.options && t.options.dialog ? t.options.dialog : n.theme ? n.theme : "default",
            i = new e.wysiwyg.dialog.createDialog(r),
            s = this,
            o = e(s);
        return this.options = {
            modal: !0,
            draggable: !0,
            title: "Title",
            content: "Content",
            width: "auto",
            height: "auto",
            zIndex: 2e3,
            open: !1,
            close: !1
        }, this.isOpen = !1, e.extend(this.options, n), this.object = i, this.open = function () {
            this.isOpen = !0, i.init.apply(s, []);
            var e = i.show.apply(s, []);
            o.trigger("afterOpen", [e])
        }, this.show = function () {
            this.isOpen = !0, o.trigger("beforeShow");
            var e = i.show.apply(s, []);
            o.trigger("afterShow")
        }, this.hide = function () {
            this.isOpen = !1, o.trigger("beforeHide");
            var e = i.hide.apply(s, []);
            o.trigger("afterHide", [e])
        }, this.close = function () {
            this.isOpen = !1;
            var e = i.hide.apply(s, []);
            o.trigger("beforeClose", [e]), i.destroy.apply(s, []), o.trigger("afterClose", [e])
        }, this.options.open && o.bind("afterOpen", this.options.open), this.options.close && o.bind("afterClose", this.options.close), this
    }, e.extend(!0, e.wysiwyg.dialog, {
        _themes: {},
        _theme: "",
        register: function (t, n) {
            e.wysiwyg.dialog._themes[t] = n
        },
        deregister: function (t) {
            delete e.wysiwyg.dialog._themes[t]
        },
        createDialog: function (t) {
            return new e.wysiwyg.dialog._themes[t]
        },
        getDimensions: function () {
            var t = document.body.scrollWidth,
                n = document.body.scrollHeight;
            return e.browser.opera && (n = Math.max(e(document).height(), e(window).height(), document.documentElement.clientHeight)), [t, n]
        }
    }), e(function () {
        jQuery.ui && e.wysiwyg.dialog.register("jqueryui", function () {
            var t = this;
            this._$dialog = null, this.init = function () {
                var n = this,
                    r = this.options.content;
                typeof r == "object" && (typeof r.html == "function" ? r = r.html() : typeof r.toString == "function" && (r = r.toString())), t._$dialog = e("<div></div>").attr("title", this.options.title).html(r);
                var i = this.options.height == "auto" ? 300 : this.options.height,
                    s = this.options.width == "auto" ? 450 : this.options.width;
                return t._$dialog.dialog({
                    modal: this.options.modal,
                    draggable: this.options.draggable,
                    height: i,
                    width: s
                }), t._$dialog
            }, this.show = function () {
                return t._$dialog.dialog("open"), t._$dialog
            }, this.hide = function () {
                return t._$dialog.dialog("close"), t._$dialog
            }, this.destroy = function () {
                return t._$dialog.dialog("destroy"), t._$dialog
            }
        }), e.wysiwyg.dialog.register("default", function () {
            var t = this;
            this._$dialog = null, this.init = function () {
                var n = this,
                    r = this.options.content;
                typeof r == "object" && (typeof r.html == "function" ? r = r.html() : typeof r.toString == "function" && (r = r.toString())), t._$dialog = e('<div class="wysiwyg-dialog"></div>').css({
                    "z-index": this.options.zIndex
                });
                var i = e('<div class="wysiwyg-dialog-topbar"><div class="wysiwyg-dialog-close-wrapper"></div><div class="wysiwyg-dialog-title">' + this.options.title + "</div></div>"),
                    s = e('<a href="#" class="wysiwyg-dialog-close-button">X</a>');
                s.click(function () {
                    n.close()
                }), i.find(".wysiwyg-dialog-close-wrapper").prepend(s);
                var o = e('<div class="wysiwyg-dialog-content">' + r + "</div>");
                t._$dialog.append(i).append(o);
                var u = this.options.height == "auto" ? 300 : this.options.height,
                    a = this.options.width == "auto" ? 450 : this.options.width;
                return t._$dialog.hide().css({
                    width: a,
                    height: u,
                    left: (e(window).width() - a) / 2,
                    top: (e(window).height() - u) / 3
                }), e("body").append(t._$dialog), t._$dialog
            }, this.show = function () {
                if (this.options.modal) {
                    var n = e.wysiwyg.dialog.getDimensions(),
                        r = e('<div class="wysiwyg-dialog-modal-div"></div>').css({
                            width: n[0],
                            height: n[1]
                        });
                    t._$dialog.wrap(r)
                }
                if (this.options.draggable) {
                    var i = !1;
                    t._$dialog.find("div.wysiwyg-dialog-topbar").bind("mousedown", function (t) {
                        t.preventDefault(), e(this).css({
                            cursor: "move"
                        });
                        var n = e(this),
                            r = e(this).parents(".wysiwyg-dialog"),
                            s = t.pageX - parseInt(r.css("left"), 10),
                            o = t.pageY - parseInt(r.css("top"), 10);
                        i = !0, e(this).css({
                            cursor: "move"
                        }), e(document).bind("mousemove", function (e) {
                            e.preventDefault(), i && r.css({
                                top: e.pageY - o,
                                left: e.pageX - s
                            })
                        }).bind("mouseup", function (t) {
                            t.preventDefault(), i = !1, n.css({
                                cursor: "auto"
                            }), e(document).unbind("mousemove").unbind("mouseup")
                        })
                    })
                }
                return t._$dialog.show(), t._$dialog
            }, this.hide = function () {
                return t._$dialog.hide(), t._$dialog
            }, this.destroy = function () {
                return this.options.modal && t._$dialog.unwrap(), this.options.draggable && t._$dialog.find("div.wysiwyg-dialog-topbar").unbind("mousedown"), t._$dialog.remove(), t._$dialog
            }
        })
    }), e.fn.wysiwyg = function (n) {
        var r = arguments,
            i;
        if ("undefined" != typeof e.wysiwyg[n]) return r = Array.prototype.concat.call([r[0]], [this], Array.prototype.slice.call(r, 1)), e.wysiwyg[n].apply(e.wysiwyg, Array.prototype.slice.call(r, 1));
        if ("object" == typeof n || !n) return Array.prototype.unshift.call(r, this), e.wysiwyg.init.apply(e.wysiwyg, r);
        if (e.wysiwyg.plugin.exists(n)) return i = e.wysiwyg.plugin.parseName(n), r = Array.prototype.concat.call([r[0]], [this], Array.prototype.slice.call(r, 1)), e.wysiwyg[i.name][i.method].apply(e.wysiwyg[i.name], Array.prototype.slice.call(r, 1));
        t.error("Method '" + n + "' does not exist on jQuery.wysiwyg.\nTry to include some extra controls or plugins")
    }, e.fn.getWysiwyg = function () {
        return this.data("wysiwyg")
    }
})(jQuery),
function (e) {
    "use strict";
    if (undefined === e.wysiwyg) throw "wysiwyg.image.js depends on $.wysiwyg";
    e.wysiwyg.controls || (e.wysiwyg.controls = {}), e.wysiwyg.controls.image = {
        groupIndex: 6,
        visible: !0,
        exec: function () {
            e.wysiwyg.controls.image.init(this)
        },
        tags: ["img"],
        init: function (t) {
            var n = this,
                r, i, s, o, u, a, f, l, c = {
                    alt: "",
                    self: t.dom ? t.dom.getElement("img") : null,
                    src: "http://",
                    title: ""
                };
            a = {
                legend: "Insert Image",
                preview: "Preview",
                url: "URL",
                title: "Title",
                description: "Description",
                width: "Width",
                height: "Height",
                original: "Original W x H",
                "float": "Float",
                floatNone: "None",
                floatLeft: "Left",
                floatRight: "Right",
                submit: "Insert Image",
                reset: "Cancel",
                fileManagerIcon: "Select file from server"
            }, o = '<form class="wysiwyg" id="wysiwyg-addImage"><fieldset><div class="form-row"><span class="form-row-key">{preview}:</span><div class="form-row-value"><img src="" alt="{preview}" style="margin: 2px; padding:5px; max-width: 100%; overflow:hidden; max-height: 100px; border: 1px solid rgb(192, 192, 192);"/></div></div><div class="form-row"><label for="name">{url}:</label><div class="form-row-value"><input type="text" name="src" value=""/>', e.wysiwyg.fileManager && e.wysiwyg.fileManager.ready && (o += '<div class="wysiwyg-fileManager" title="{fileManagerIcon}"/>'), o += '</div></div><div class="form-row"><label for="name">{title}:</label><div class="form-row-value"><input type="text" name="imgtitle" value=""/></div></div><div class="form-row"><label for="name">{description}:</label><div class="form-row-value"><input type="text" name="description" value=""/></div></div><div class="form-row"><label for="name">{width} x {height}:</label><div class="form-row-value"><input type="text" name="width" value="" class="width-small"/> x <input type="text" name="height" value="" class="width-small"/></div></div><div class="form-row"><label for="name">{original}:</label><div class="form-row-value"><input type="text" name="naturalWidth" value="" class="width-small" disabled="disabled"/> x <input type="text" name="naturalHeight" value="" class="width-small" disabled="disabled"/></div></div><div class="form-row"><label for="name">{float}:</label><div class="form-row-value"><select name="float"><option value="">{floatNone}</option><option value="left">{floatLeft}</option><option value="right">{floatRight}</option></select></div></div><div class="form-row form-row-last"><label for="name"></label><div class="form-row-value"><input type="submit" class="button" value="{submit}"/> <input type="reset" value="{reset}"/></div></div></fieldset></form>';
            for (f in a) e.wysiwyg.i18n && (l = e.wysiwyg.i18n.t(a[f], "dialogs.image"), l === a[f] && (l = e.wysiwyg.i18n.t(a[f], "dialogs")), a[f] = l), u = new RegExp("{" + f + "}", "g"), o = o.replace(u, a[f]);
            c.self && (c.src = c.self.src ? c.self.src : "", c.alt = c.self.alt ? c.self.alt : "", c.title = c.self.title ? c.self.title : "", c.width = c.self.width ? c.self.width : "", c.height = c.self.height ? c.self.height : "", c.styleFloat = e(c.self).css("float")), i = new e.wysiwyg.dialog(t, {
                title: a.legend,
                content: o
            }), e(i).bind("afterOpen", function (r, s) {
                s.find("form#wysiwyg-addImage").submit(function (e) {
                    return e.preventDefault(), n.processInsert(s.container, t, c), i.close(), !1
                }), e.wysiwyg.fileManager && e("div.wysiwyg-fileManager").bind("click", function () {
                    e.wysiwyg.fileManager.init(function (e) {
                        s.find("input[name=src]").val(e), s.find("input[name=src]").trigger("change")
                    })
                }), e("input:reset", s).click(function (e) {
                    return i.close(), !1
                }), e("fieldset", s).click(function (e) {
                    e.stopPropagation()
                }), n.makeForm(s, c)
            }), i.open(), e(t.editorDoc).trigger("editorRefresh.wysiwyg")
        },
        processInsert: function (t, n, r) {
            var i, s = e('input[name="src"]', t).val(),
                o = e('input[name="imgtitle"]', t).val(),
                u = e('input[name="description"]', t).val(),
                a = e('input[name="width"]', t).val(),
                f = e('input[name="height"]', t).val(),
                l = e('select[name="float"]', t).val(),
                c = [],
                h = "",
                p, d;
            n.options.controlImage && n.options.controlImage.forceRelativeUrls && (d = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : ""), 0 === s.indexOf(d) && (s = s.substr(d.length))), r.self ? (e(r.self).attr("src", s).attr("title", o).attr("alt", u).css("float", l), a.toString().match(/^[0-9]+(px|%)?$/) ? e(r.self).css("width", a) : e(r.self).css("width", ""), f.toString().match(/^[0-9]+(px|%)?$/) ? e(r.self).css("height", f) : e(r.self).css("height", ""), n.saveContent()) : (p = a.toString().match(/^[0-9]+(px|%)?$/), p && (p[1] ? c.push("width: " + a + ";") : c.push("width: " + a + "px;")), p = f.toString().match(/^[0-9]+(px|%)?$/), p && (p[1] ? c.push("height: " + f + ";") : c.push("height: " + f + "px;")), l.length > 0 && c.push("float: " + l + ";"), c.length > 0 && (h = ' style="' + c.join(" ") + '"'), i = "<img src='" + s + "' title='" + o + "' alt='" + u + "'" + h + "/>", n.insertHtml(i))
        },
        makeForm: function (e, t) {
            return e.find("input[name=src]").val(t.src), e.find("input[name=imgtitle]").val(t.title), e.find("input[name=description]").val(t.alt), e.find('input[name="width"]').val(t.width), e.find('input[name="height"]').val(t.height), e.find('select[name="float"]').val(t.styleFloat), e.find("img").attr("src", t.src), e.find("img").bind("load", function () {
                e.find("img").get(0).naturalWidth ? (e.find('input[name="naturalWidth"]').val(e.find("img").get(0).naturalWidth), e.find('input[name="naturalHeight"]').val(e.find("img").get(0).naturalHeight)) : e.find("img").attr("naturalWidth") && (e.find('input[name="naturalWidth"]').val(e.find("img").attr("naturalWidth")), e.find('input[name="naturalHeight"]').val(e.find("img").attr("naturalHeight")))
            }), e.find("input[name=src]").bind("change", function () {
                e.find("img").attr("src", this.value)
            }), e
        }
    }, e.wysiwyg.insertImage = function (t, n, r) {
        return t.each(function () {
            var t = e(this).data("wysiwyg"),
                i, s;
            if (!t) return this;
            if (!n || n.length === 0) return this;
            e.browser.msie && t.ui.focus();
            if (r) {
                t.editorDoc.execCommand("insertImage", !1, "#jwysiwyg#"), i = t.getElementByAttributeValue("img", "src", "#jwysiwyg#");
                if (i) {
                    i.src = n;
                    for (s in r) r.hasOwnProperty(s) && i.setAttribute(s, r[s])
                }
            } else t.editorDoc.execCommand("insertImage", !1, n);
            return t.saveContent(), e(t.editorDoc).trigger("editorRefresh.wysiwyg"), this
        })
    }
}(jQuery),
function (e) {
    "use strict";
    if (undefined === e.wysiwyg) throw "wysiwyg.link.js depends on $.wysiwyg";
    e.wysiwyg.controls || (e.wysiwyg.controls = {}), e.wysiwyg.controls.link = {
        init: function (t) {
            var n = this,
                r, i, s, o, u, a, f, l, c, h, p, d;
            f = {
                legend: "Insert Link",
                url: "Link URL",
                title: "Link Title",
                target: "Link Target",
                submit: "Insert Link",
                reset: "Cancel"
            }, a = '<form class="wysiwyg"><fieldset><legend>{legend}</legend><label>{url}: <input type="text" name="linkhref" value=""/></label><label>{title}: <input type="text" name="linktitle" value=""/></label><label>{target}: <input type="text" name="linktarget" value=""/></label><input type="submit" class="button" value="{submit}"/> <input type="reset" value="{reset}"/></fieldset></form>';
            for (l in f) e.wysiwyg.i18n && (c = e.wysiwyg.i18n.t(f[l], "dialogs.link"), c === f[l] && (c = e.wysiwyg.i18n.t(f[l], "dialogs")), f[l] = c), h = new RegExp("{" + l + "}", "g"), a = a.replace(h, f[l]);
            o = {
                self: t.dom.getElement("a"),
                href: "http://",
                title: "",
                target: ""
            }, o.self && (o.href = o.self.href ? o.self.href : o.href, o.title = o.self.title ? o.self.title : "", o.target = o.self.target ? o.self.target : "");
            if (e.fn.dialog) {
                r = e(a), r.find("input[name=linkhref]").val(o.href), r.find("input[name=linktitle]").val(o.title), r.find("input[name=linktarget]").val(o.target);
                if (e.browser.msie) try {
                    i = r.appendTo(t.editorDoc.body)
                } catch (v) {
                    i = r.appendTo("body")
                } else i = r.appendTo("body");
                i.dialog({
                    modal: !0,
                    open: function (n, r) {
                        e("input:submit", i).click(function (n) {
                            n.preventDefault();
                            var r = e('input[name="linkhref"]', i).val(),
                                s = e('input[name="linktitle"]', i).val(),
                                a = e('input[name="linktarget"]', i).val(),
                                f, l;
                            t.options.controlLink.forceRelativeUrls && (f = window.location.protocol + "//" + window.location.hostname, 0 === r.indexOf(f) && (r = r.substr(f.length))), o.self ? "string" == typeof r && (r.length > 0 ? e(o.self).attr("href", r).attr("title", s).attr("target", a) : e(o.self).replaceWith(o.self.innerHTML)) : (e.browser.msie && t.ui.returnRange(), u = t.getRangeText(), l = t.dom.getElement("img"), u && u.length > 0 || l ? (e.browser.msie && t.ui.focus(), "string" == typeof r && (r.length > 0 ? t.editorDoc.execCommand("createLink", !1, r) : t.editorDoc.execCommand("unlink", !1, null)), o.self = t.dom.getElement("a"), e(o.self).attr("href", r).attr("title", s), e(o.self).attr("target", a)) : t.options.messages.nonSelection && window.alert(t.options.messages.nonSelection)), t.saveContent(), e(i).dialog("close")
                        }), e("input:reset", i).click(function (t) {
                            t.preventDefault(), e(i).dialog("close")
                        })
                    },
                    close: function (e, t) {
                        i.dialog("destroy"), i.remove()
                    }
                })
            } else o.self ? (s = window.prompt("URL", o.href), t.options.controlLink.forceRelativeUrls && (p = window.location.protocol + "//" + window.location.hostname, 0 === s.indexOf(p) && (s = s.substr(p.length))), "string" == typeof s && (s.length > 0 ? e(o.self).attr("href", s) : e(o.self).replaceWith(o.self.innerHTML))) : (u = t.getRangeText(), d = t.dom.getElement("img"), u && u.length > 0 || d ? e.browser.msie ? (t.ui.focus(), t.editorDoc.execCommand("createLink", !0, null)) : (s = window.prompt(f.url, o.href), t.options.controlLink.forceRelativeUrls && (p = window.location.protocol + "//" + window.location.hostname, 0 === s.indexOf(p) && (s = s.substr(p.length))), "string" == typeof s && (s.length > 0 ? t.editorDoc.execCommand("createLink", !1, s) : t.editorDoc.execCommand("unlink", !1, null))) : t.options.messages.nonSelection && window.alert(t.options.messages.nonSelection)), t.saveContent();
            e(t.editorDoc).trigger("editorRefresh.wysiwyg")
        }
    }, e.wysiwyg.createLink = function (t, n) {
        return t.each(function () {
            var t = e(this).data("wysiwyg"),
                r;
            return t ? !n || n.length === 0 ? this : (r = t.getRangeText(), r && r.length > 0 ? (e.browser.msie && t.ui.focus(), t.editorDoc.execCommand("unlink", !1, null), t.editorDoc.execCommand("createLink", !1, n)) : t.options.messages.nonSelection && window.alert(t.options.messages.nonSelection), this) : this
        })
    }
}(jQuery),
function (e) {
    "use strict";
    if (undefined === e.wysiwyg) throw "wysiwyg.table.js depends on $.wysiwyg";
    e.wysiwyg.controls || (e.wysiwyg.controls = {});
    var t = function (e, t, n) {
        if (isNaN(t) || isNaN(e) || t === null || e === null) return;
        var r, i, s = ['<table border="1" style="width: 100%;"><tbody>'];
        e = parseInt(e, 10), t = parseInt(t, 10), n === null && (n = "&nbsp;"), n = "<td>" + n + "</td>";
        for (r = t; r > 0; r -= 1) {
            s.push("<tr>");
            for (i = e; i > 0; i -= 1) s.push(n);
            s.push("</tr>")
        }
        return s.push("</tbody></table>"), this.insertHtml(s.join(""))
    };
    e.wysiwyg.controls.table = function (n) {
        var r, i, s, o, u, a, f, l, c;
        a = {
            legend: "Insert table",
            cols: "Count of columns",
            rows: "Count of rows",
            submit: "Insert table",
            reset: "Cancel"
        }, u = '<form class="wysiwyg" id="wysiwyg-tableInsert"><fieldset><legend>{legend}</legend><label>{cols}: <input type="text" name="colCount" value="3" /></label><br/><label>{rows}: <input type="text" name="rowCount" value="3" /></label><br/><input type="submit" class="button" value="{submit}"/> <input type="reset" value="{reset}"/></fieldset></form>';
        for (f in a) e.wysiwyg.i18n && (l = e.wysiwyg.i18n.t(a[f], "dialogs.table"), l === a[f] && (l = e.wysiwyg.i18n.t(a[f], "dialogs")), a[f] = l), c = new RegExp("{" + f + "}", "g"), u = u.replace(c, a[f]);
        n.insertTable || (n.insertTable = t), r = new e.wysiwyg.dialog(n, {
            title: a.legend,
            content: u,
            open: function (e, t) {
                t.find("form#wysiwyg-tableInsert").submit(function (e) {
                    return e.preventDefault(), o = t.find("input[name=rowCount]").val(), s = t.find("input[name=colCount]").val(), n.insertTable(s, o, n.defaults.tableFiller), r.close(), !1
                }), t.find("input:reset").click(function (e) {
                    return e.preventDefault(), r.close(), !1
                })
            }
        }), r.open(), e(n.editorDoc).trigger("editorRefresh.wysiwyg")
    }, e.wysiwyg.insertTable = function (n, r, i, s) {
        return n.each(function () {
            var n = e(this).data("wysiwyg");
            return n.insertTable || (n.insertTable = t), n ? (n.insertTable(r, i, s), e(n.editorDoc).trigger("editorRefresh.wysiwyg"), this) : this
        })
    }
}(jQuery);
var orders = "";
$(document).ready(function () {
    function t(t) {
        e = window.open(), self.focus(), e.document.open(), e.document.write("<html><head><style>"), e.document.write("body, td { font-family: Verdana; font-size: 10pt;}"), e.document.write("</style></head><body>"), e.document.write(t), e.document.write("</body></html>"), e.document.close(), e.print(), e.close()
    }
    function r(e) {
        notifier.load(e, "production", {
            channels: ["paid_money", "overdue_money", "paids", "approveds", "rejecteds", "overdues"]
        })
    }
    function t(t) {
        e = window.open(), self.focus(), e.document.open(), e.document.write("<html><head><style>"), e.document.write("body, td { font-family: Verdana; font-size: 10pt;}"), e.document.write("</style></head><body>"), e.document.write(t), e.document.write("</body></html>"), e.document.close(), e.print(), e.close()
    }
    window.initClientAutocomplete = function (e) {
        e.autocomplete({
            source: function (e, t) {
                $.ajax({
                    url: "/clients/search_name",
                    data: {
                        q: e.term
                    },
                    dataType: "jsonp",
                    method: "GET",
                    success: function (e) {
                        t($.map(e, function (e) {
                            return first_contact = e.contacts[0], _email = first_contact ? first_contact.email : "", _phone = first_contact ? first_contact.phone : "", {
                                id: e._id,
                                value: e.company_name,
                                address_1: e.address_1,
                                address_2: e.address_2,
                                city: e.city,
                                state: e.state,
                                postcode: e.postcode,
                                country: e.country,
                                email: _email,
                                phone: _phone
                            }
                        }))
                    }
                })
            },
            minLength: 1,
            delay: 0,
            autoFocus: !0,
            select: function (e, t) {
                $.client_wrapper = $(this).parents(".client_info, .invoice-client-item").first(), $.client_wrapper.find(".auto-origin-id").val(t.item.id), $.client_wrapper.find(".auto-address-1").val(t.item.address_1), $.client_wrapper.find(".auto-address-2").val(t.item.address_2), $.client_wrapper.find(".auto-city").val(t.item.city), $.client_wrapper.find(".auto-state").val(t.item.state), $.client_wrapper.find(".auto-postcode").val(t.item.postcode), $.client_wrapper.find(".auto-country").val(t.item.country), $.client_wrapper.find(".auto-email").val(t.item.email), $.client_wrapper.find(".auto-phone").val(t.item.phone)
            }
        })
    }, window.initProductAutocomplete = function (e) {
        e.autocomplete({
            source: function (e, t) {
                $.ajax({
                    url: "/saved_items/products_json",
                    data: {
                        q: e.term
                    },
                    dataType: "jsonp",
                    method: "GET",
                    success: function (e) {
                        t($.map(e, function (e) {
                            return {
                                id: e._id,
                                value: e.title,
                                price: e.price
                            }
                        }))
                    }
                })
            },
            select: function (e, t) {
                $_tr = $(this).parents("tr"), $_tr.find(".prc").val(t.item.price), index = $_tr.find("input.qty").attr("id").replace("invoice_invoice_items_attributes_", "").replace("_quantity", ""), _html = '<input type="hidden" name="invoice[invoice_items_attributes][' + index + '][origin_id]" ', _html += 'id="invoice_invoice_items_attributes_' + index + '_origin_id" class="item_origin_id" value=\'' + t.item.id + "'>", $_qty = $_tr.find(".qty"), $_qty.val("1"), console.log($_tr.find(".item_origin_id").length), $_tr.find(".item_origin_id").length ? $_tr.find(".item_origin_id").replaceWith(_html) : $_qty.after(_html), invoice.calculatePrice()
            }
        })
    }, initProductAutocomplete($(".item-autocomplete")), initClientAutocomplete($(".autocomplete-client")), $.datepicker.setDefaults({
        dateFormat: "yy-mm-dd"
    }), $(".orderable_table").tableDnD({
        onDragClass: "myDragClass",
        onDrop: function (e, t) {
            var n = e.tBodies[0].rows;
            orders = "";
            for (var r = 0; r < n.length; r++) orders += n[r].id + ","
        }
    }), $(".delete_invoice_client").live("click", function () {
        return client = $(this).parents(".invoice-client-item").first(), client.slideUp("slow", function () {
            client.remove()
        }), !1
    }), $(".add-client-address").live("click", function () {
        return $(this).hide(), $(this).parents(".invoice-client-item").first().find(".client-item-address").slideDown(), !1
    }), $(".hide-client-address").live("click", function () {
        return $(this).parents(".invoice-client-item").first().find(".client-item-address").slideUp(), $(this).parents(".invoice-client-item").first().find(".add-client-address").show(), !1
    }), $("ul.gallery").sortable({
        update: function () {
            var e = $("ul.gallery").sortable("serialize");
            $.get($("ul.gallery").attr("path"), e)
        }
    }), $("#newsletter_form").live("submit", function () {
        return clients = $(".newsletterbox").attr("href").replace($(".newsletter").attr("href"), "").replace("?cids=", ""), $(".btn-newsletter").hide(), $(".newsletter_loading").show(), $(".msgletter").val().length > 4 ? $.post($("#newsletter_form").attr("action"), {
            cids: clients,
            message: $(".msgletter").val(),
            subject: $(".msgsubject").val(),
            authenticity_token: $("#newsletter_form input[name=authenticity_token]").val()
        }, function (e) {
            $(".btn-newsletter").show(), $(".newsletter_loading").hide(), $.nmTop().close(), alert("Your letter has been sent to selected clients and they will receive it soon.")
        }) : (alert("please enter your newsletter correctly."), $(".btn-newsletter").show(), $(".newsletter_loading").hide()), !1
    }), $(".tips_n").tipsy({
        gravity: "n"
    }), $(".tips_s").tipsy({
        gravity: "s"
    }), $(".tips_e").tipsy({
        gravity: "e"
    }), $(".tips_w").tipsy({
        gravity: "w"
    }), $(".tips_nw").tipsy({
        gravity: "nw"
    }), $(".tips_ne").tipsy({
        gravity: "ne"
    }), $(".tips_sw").tipsy({
        gravity: "sw"
    }), $(".tips_se").tipsy({
        gravity: "se"
    }), $(".wysiwyg").wysiwyg({
        controls: {
            strikeThrough: {
                visible: !1
            },
            justifyLeft: {
                visible: !0
            },
            justifyCenter: {
                visible: !0
            },
            justifyRight: {
                visible: !0
            },
            justifyFull: {
                visible: !0
            },
            insertImage: {
                visible: !0
            },
            insertTable: {
                visible: !0
            },
            insertUnorderedList: {
                visible: !1
            },
            indent: {
                visible: !1
            },
            outdent: {
                visible: !1
            },
            subscript: {
                visible: !1
            },
            superscript: {
                visible: !1
            },
            undo: {
                visible: !0
            },
            redo: {
                visible: !0
            },
            insertOrderedList: {
                visible: !0
            },
            insertUnorderedList: {
                visible: !0
            },
            insertHorizontalRule: {
                visible: !0
            },
            h1: {
                visible: !0
            },
            h2: {
                visible: !0
            },
            h3: {
                visible: !0
            },
            h4: {
                visible: !0
            },
            h5: {
                visible: !0
            },
            h6: {
                visible: !0
            },
            cut: {
                visible: !0
            },
            copy: {
                visible: !0
            },
            paste: {
                visible: !0
            },
            html: {
                visible: !0
            },
            increaseFontSize: {
                visible: !0
            },
            decreaseFontSize: {
                visible: !0
            }
        }
    }), $(".table_invoice_client").live("click", function (e) {
        return $(this).next().css("display").match(/none/i) ? $(this).next().slideDown("slow") : $(this).next().slideUp("slow"), !1
    }), $(".setup_installment > a").live("click", function (e) {
        return e.stopImmediatePropagation(), $(".payment_rule_fieldset").css("display").match(/none/i) ? ($(".payment_rule_fieldset").slideDown("slow"), $(this).html("Hide Installment")) : ($(".payment_rule_fieldset").slideUp("slow"), $(this).html("Set Up Installment")), !1
    }), $(".setup_purchase > a").live("click", function (e) {
        return e.stopImmediatePropagation(), $(".product_table").css("display").match(/none/i) ? ($(".product_table").slideDown("slow"), $(this).html("Hide Purchase Table")) : ($(".product_table").slideUp("slow"), $(this).html("Set Purchase Item")), !1
    }), $(".setup_note > a").live("click", function (e) {
        return e.stopImmediatePropagation(), $(".invoice_msg").css("display").match(/none/i) ? ($(".invoice_msg").slideDown("slow"), $(this).html("Hide This Box")) : ($(".invoice_msg").slideUp("slow"), $(this).html("Write Your Messages")), !1
    }), $(".check_all").live("change", function (e) {
        status = this.checked, status == "true" ? $(this).parents("table").find("td input[type=checkbox]").attr("checked", status) : $(this).parents("table").find("td input[type=checkbox]").removeAttr("checked")
    });
    var e = null;
    $(".print_invoice").live("click", function (e) {
        return e.stopImmediatePropagation(), $.get($(this).attr("href"), {}, function (e) {
            t(e)
        }), !1
    });
    var n = {
        color: "#FF9900",
        onShow: function (e) {
            return $(e).fadeIn(500), !1
        },
        onHide: function (e) {
            return $(e).fadeOut(500), !1
        },
        onSubmit: function (e, t, n, r) {
            $(r).ColorPickerHide()
        }
    };
    $("#colorSelector.selectorNo8").ColorPicker($.extend(!0, {
        onChange: function (e, t, n) {
            $(".selectorNo8 div").css({
                "background-color": "#" + t
            }), $(".colorpicker8").val("#" + t), $("#content").css("color", "#" + t), $(".form .field-group label").css("color", "#" + t)
        }
    }, n)), $("#colorSelector.selectorNo7").ColorPicker($.extend(!0, {
        onChange: function (e, t, n) {
            $(".selectorNo7 div").css({
                "background-color": "#" + t
            }), $(".colorpicker7").val("#" + t), $("#content").css("background-color", "#" + t)
        }
    }, n)), $("#colorSelector.selectorNo6").ColorPicker($.extend(!0, {
        onChange: function (e, t, n) {
            $(".selectorNo6 div").css({
                "background-color": "#" + t
            }), $(".colorpicker6").val("#" + t), $("#contentHeader h1").css("color", "#" + t)
        }
    }, n)), $("#colorSelector.selectorNo5a").ColorPicker($.extend(!0, {
        onChange: function (e, t, n) {
            $(".selectorNo5a div").css({
                "background-color": "#" + t
            }), $(".colorpicker5a").val("#" + t), updateGradientBG($("#contentHeader"), "#" + t, null)
        }
    }, n)), $("#colorSelector.selectorNo5b").ColorPicker($.extend(!0, {
        onChange: function (e, t, n) {
            $(".selectorNo5b div").css({
                "background-color": "#" + t
            }), $(".colorpicker5b").val("#" + t), updateGradientBG($("#contentHeader"), null, "#" + t)
        }
    }, n)), $("#colorSelector.selectorNo4").ColorPicker($.extend(!0, {
        onChange: function (e, t, n) {
            $(".selectorNo4 div").css({
                "background-color": "#" + t
            }), $(".colorpicker4").val("#" + t), $("#header").css("color", "#" + t), $("#topNav a").css("color", "#" + t)
        }
    }, n)), $("#colorSelector.selectorNo3a").ColorPicker($.extend(!0, {
        onChange: function (e, t, n) {
            $(".selectorNo3a div").css({
                "background-color": "#" + t
            }), $(".colorpicker3a").val("#" + t), updateGradientBG($("#header"), "#" + t, null)
        }
    }, n)), $("#colorSelector.selectorNo3b").ColorPicker($.extend(!0, {
        onChange: function (e, t, n) {
            $(".selectorNo3b div").css({
                "background-color": "#" + t
            }), $(".colorpicker3b").val("#" + t), updateGradientBG($("#header"), null, "#" + t)
        }
    }, n)), $("#colorSelector.selectorNo1").ColorPicker($.extend(!0, {
        onChange: function (e, t, n) {
            $(".selectorNo1 div").css({
                "background-color": "#" + t
            }), $(".colorpicker1").val("#" + t), $("body").css("background", "#" + t), $("body").css("background-image", "none")
        }
    }, n)), $("#colorSelector.selectorNo2").ColorPicker($.extend(!0, {
        onChange: function (e, t, n) {
            $(".selectorNo2 div").css({
                "background-color": "#" + t
            }), $(".colorpicker2").val("#" + t), $("#mainNav li.nav a").css("color", "#" + t)
        }
    }, n)), $("#colorSelector.selector_tw_font_color").ColorPicker($.extend(!0, {
        onChange: function (e, t, n) {
            $(".selector_tw_font_color div").css({
                "background-color": "#" + t
            }), $(".tw_font_color").val("#" + t), $(".widget_track_invoice").find("h2").css("color", "#" + t), updateWidgetCode()
        }
    }, n)), $("#colorSelector.selector_tw_border").ColorPicker($.extend(!0, {
        onChange: function (e, t, n) {
            $(".selector_tw_border div").css({
                "background-color": "#" + t
            }), $(".tw_border").val("#" + t), $(".widget_track_invoice").css("border-color", "#" + t), updateWidgetCode()
        }
    }, n)), $("#colorSelector.selector_tw_background").ColorPicker($.extend(!0, {
        onChange: function (e, t, n) {
            $(".selector_tw_background div").css({
                "background-color": "#" + t
            }), $(".tw_background").val("#" + t), $(".widget_track_invoice").css("background-color", "#" + t), updateWidgetCode()
        }
    }, n)), $(".tw_button").live("change", function () {
        btns = $(".widget_track_invoice").find("button").attr("class").split(" "), btns[2] = "btn-" + $(this).val().toLowerCase(), $(".widget_track_invoice").find("button").attr("class", btns.join(" ")), updateWidgetCode()
    }), $(".tw_font_size").live("change", function () {
        $(".widget_track_invoice").find("h2").css("font-size", $(this).val()), updateWidgetCode()
    }), $(".tw_width").live("change", function () {
        $(".widget_track_invoice").css("max-width", $(this).val()), updateWidgetCode()
    }), $(".tw_height").live("change", function () {
        $(".widget_track_invoice").css("min-height", $(this).val()), updateWidgetCode()
    }), updateWidgetCode = function () {
        params = "tracker.js?", params += "&height=" + $(".tw_height").val(), params += "&width=" + $(".tw_width").val(), params += "&font_size=" + $(".tw_font_size").val(), params += "&button=" + $(".tw_button").val(), params += "&background=" + $(".tw_background").val().replace("#", ""), params += "&border=" + $(".tw_border").val().replace("#", ""), params += "&color=" + $(".tw_font_color").val().replace("#", ""), origin_host = $("#widget_invoice_form").attr("action"), widget_host = (new RegExp(/\w+\:\/\/[^\/]+\//i)).exec(origin_host), widget_host = widget_host ? widget_host[0] : "", widget_host.length > 0 && (new_url = widget_host + params, new_value = '<script src="' + new_url + '" type="text/javascript" id="widget_invoice_source"></script>' + '<div id="track_invoice"></div>', $("#source_code").val(new_value))
    }, updateGradientBG = function (e, t, n) {
        bg_origin = $(e).css("background-image").split(/rgb/), t ? (from_css = bg_origin[1].replace(/\(.*\)\s/, t + " "), new_background = bg_origin[0] + from_css + "rgb" + bg_origin[2]) : (to_css = bg_origin[2].replace(/\(.*\)\s/, n + " "), new_background = bg_origin[0] + "rgb" + bg_origin[1] + to_css), $(e).css("background-image", new_background)
    }, $(".panel_control").live("click", function (e) {
        e.stopImmediatePropagation(), origin_src = $(this).attr("src"), target_el = ".invoice_msg, .payment_rule_fieldset, .invoice_options_fieldset, .late_fee_fieldset", origin_src.match(/pencil|down/i) ? (origin_src.match(/pencil/i) ? $(this).attr("src", origin_src.replace("pencil", "cross")) : $(this).attr("src", origin_src.replace("down", "up")), $(this).parents(".advance_filter, .grid-25.preview_body").find(target_el).slideDown(), $(this).attr("original-title", "Close")) : (origin_src.match(/cross/i) ? $(this).attr("src", origin_src.replace("cross", "pencil")) : $(this).attr("src", origin_src.replace("up", "down")), $(this).parents(".advance_filter, .grid-25.preview_body").find(target_el).slideUp(), $(this).attr("original-title", "Open"))
    }), $(".setup_multicurrency > a").live("click", function (e) {
        return e.stopImmediatePropagation(), $(".multi_currency_fieldset").css("display").match(/none/i) ? ($(".multi_currency_fieldset").slideDown("slow"), $(this).html("Hide Multi Currency")) : ($(".multi_currency_fieldset").slideUp("slow"), $(this).html("Set Up Multi Currency")), !1
    }), $(".setup_invoiceoption > a").live("click", function (e) {
        return e.stopImmediatePropagation(), $(".invoice_options_fieldset").css("display").match(/none/i) ? ($(".invoice_options_fieldset").slideDown("slow"), $(this).html("Hide Invoice Options")) : ($(".invoice_options_fieldset").slideUp("slow"), $(this).html("Add More Options")), !1
    }), $(".datepicker").datepicker().attr("readonly", !0);
    var e = null;
    $(".printinvoice").live("click", function (e) {
        return e.stopImmediatePropagation(), $.get($(this).attr("href"), {}, function (e) {
            t(e)
        }), !1
    }), $(".DataTables_sort_icon").first().hide()
}), jQuery(function () {
    function e() {
        $(".notif_menu").is(":visible") ? $(".notif_menu").fadeOut(function () {
            $(".notif_menu").hide(), $(".notif_sub_menu").fadeIn(function () {
                $(".notif_sub_menu").show()
            })
        }) : $(".notif_menu").fadeIn(function () {
            $(".notif_menu").show(), $(".notif_sub_menu").fadeOut(function () {
                $(".notif_sub_menu").hide()
            })
        })
    }
    $("#mainNav a[href='javascript:;']").click(function () {
        $(this).hasClass("tasks_menu") ? e() : ($(".notif_menu").show(), $(".notif_sub_menu").fadeOut(function () {
            $(".notif_sub_menu").hide()
        }))
    }), $(".taskSubNav").is(":visible") && ($(".notif_menu").hide(), $(".notif_sub_menu").show())
}),
function (e) {
    e.fn.textfill = function (t) {
        var n = t.maxFontPixels,
            r = e("span:visible:first", this),
            i = e(this).height(),
            s = e(this).width(),
            o, u;
        do r.css("font-size", n), o = r.height(), u = r.width(), n -= 1;
        while ((o > i || u > s) && n > 3);
        return this
    }
}(jQuery), $(document).ready(function () {
    checkCookie(getUrlNoParam()) && $(".notify-info").remove(), window.location.href.match(/dashboard/i) && ($(".dataTables_paginate").hide(), $(".dataTables_info").hide()), $.each($(".product_table select"), function () {
        $(this).css({
            width: 100
        })
    }), $(".dashboard_report .value").textfill({
        maxFontPixels: 36
    }), $("#invoice_late_fee_attributes_penalty").live("change", function () {
        $(this).parents(".widget-content").find(".recurring_day").html(Number($(this).val()))
    }), $("#invoice_late_fee_attributes_fee_type").live("change", function () {
        _symbol = "", $(this).val().match(/percent/i) && (_symbol = "%"), $(this).parents(".widget-content").find(".amount_late").html(_symbol)
    }), $(".apply_all").live("click", function () {
        return $(".print_labels_qty").val($(this).parents("tr").find(".print_labels_qty").val()), !1
    }), $(".apply_next").live("click", function () {
        return $.tr = $(this).parents("tr"), $.val = $.tr.find(".print_labels_qty").val(), $.tr.nextUntil($.tr.find("tbody").children().last()).find(".print_labels_qty").val($.val), !1
    }), $(".remove_label").live("click", function () {
        return $(this).parents("tr").effect("highlight", {
            color: "#FB6B5E",
            mode: "hide"
        }, 1e3, function () {
            $(this).remove()
        }), !1
    }), $(".product_label").live("click", function () {
        return $(".checkbox_delete:checked").length > 0 ? ($(".labels_form").attr("action", $(this).attr("href")), $.tbody = $("#before_printing").find("tbody"), $.tbody.children().remove(), $.each($(".checkbox_delete:checked"), function (e, t) {
            $.json = $.parseJSON($(t).attr("object-data")), $.tr = '<tr class="gradeA">' + $(t).parents("tr").html() + "</tr>", $.tbody.append($.tr), $.last = $.tbody.children().last(), $.cell_id = $.last.find(".checkbox_delete").val(), $.last.find("td.del_later").remove(), $.input_tags = '<input type="text" id="print_labels_qty_" value="' + $.json.quantity + '" class="print_labels_qty" name="print_labels[qty][]" style="width:50px"/>' + '<input type="hidden" id="print_labels_id_" value="' + $.cell_id + '" name="print_labels[id][]"/>', $.last.find("td.item_qty").html($.input_tags), $.last.find("td.opts_label").attr("style", "")
        }), $(".link_opener").click()) : alert("Please select product, before process your request!"), !1
    })
}),
function () {
    var e;
    e = function () {
        function e() {
            this.options_index = 0, this.parsed = []
        }
        return e.prototype.add_node = function (e) {
            return e.nodeName === "OPTGROUP" ? this.add_group(e) : this.add_option(e)
        }, e.prototype.add_group = function (e) {
            var t, n, r, i, s, o;
            t = this.parsed.length, this.parsed.push({
                array_index: t,
                group: !0,
                label: e.label,
                children: 0,
                disabled: e.disabled
            }), s = e.childNodes, o = [];
            for (r = 0, i = s.length; r < i; r++) n = s[r], o.push(this.add_option(n, t, e.disabled));
            return o
        }, e.prototype.add_option = function (e, t, n) {
            if (e.nodeName === "OPTION") return e.text !== "" ? (t != null && (this.parsed[t].children += 1), this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                value: e.value,
                text: e.text,
                html: e.innerHTML,
                selected: e.selected,
                disabled: n === !0 ? n : e.disabled,
                group_array_index: t,
                classes: e.className,
                style: e.style.cssText
            })) : this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                empty: !0
            }), this.options_index += 1
        }, e
    }(), e.select_to_array = function (t) {
        var n, r, i, s, o;
        r = new e, o = t.childNodes;
        for (i = 0, s = o.length; i < s; i++) n = o[i], r.add_node(n);
        return r.parsed
    }, this.SelectParser = e
}.call(this),
function () {
    var e, t;
    t = this, e = function () {
        function e(e, t) {
            this.form_field = e, this.options = t != null ? t : {}, this.set_default_values(), this.is_multiple = this.form_field.multiple, this.set_default_text(), this.setup(), this.set_up_html(), this.register_observers(), this.finish_setup()
        }
        return e.prototype.set_default_values = function () {
            var e = this;
            return this.click_test_action = function (t) {
                return e.test_active_click(t)
            }, this.activate_action = function (t) {
                return e.activate_field(t)
            }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.result_single_selected = null, this.allow_single_deselect = this.options.allow_single_deselect != null && this.form_field.options[0] != null && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.search_contains = this.options.search_contains || !1, this.choices = 0, this.single_backstroke_delete = this.options.single_backstroke_delete || !1, this.max_selected_options = this.options.max_selected_options || Infinity
        }, e.prototype.set_default_text = function () {
            return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || "Select Some Options" : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || "Select an Option", this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || "No results match"
        }, e.prototype.mouse_enter = function () {
            return this.mouse_on_container = !0
        }, e.prototype.mouse_leave = function () {
            return this.mouse_on_container = !1
        }, e.prototype.input_focus = function (e) {
            var t = this;
            if (!this.active_field) return setTimeout(function () {
                return t.container_mousedown()
            }, 50)
        }, e.prototype.input_blur = function (e) {
            var t = this;
            if (!this.mouse_on_container) return this.active_field = !1, setTimeout(function () {
                return t.blur_test()
            }, 100)
        }, e.prototype.result_add_option = function (e) {
            var t, n;
            return e.disabled ? "" : (e.dom_id = this.container_id + "_o_" + e.array_index, t = e.selected && this.is_multiple ? [] : ["active-result"], e.selected && t.push("result-selected"), e.group_array_index != null && t.push("group-option"), e.classes !== "" && t.push(e.classes), n = e.style.cssText !== "" ? ' style="' + e.style + '"' : "", '<li id="' + e.dom_id + '" class="' + t.join(" ") + '"' + n + ">" + e.html + "</li>")
        }, e.prototype.results_update_field = function () {
            return this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.result_single_selected = null, this.results_build()
        }, e.prototype.results_toggle = function () {
            return this.results_showing ? this.results_hide() : this.results_show()
        }, e.prototype.results_search = function (e) {
            return this.results_showing ? this.winnow_results() : this.results_show()
        }, e.prototype.keyup_checker = function (e) {
            var t, n;
            t = (n = e.which) != null ? n : e.keyCode, this.search_field_scale();
            switch (t) {
                case 8:
                    if (this.is_multiple && this.backstroke_length < 1 && this.choices > 0) return this.keydown_backstroke();
                    if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                    break;
                case 13:
                    e.preventDefault();
                    if (this.results_showing) return this.result_select(e);
                    break;
                case 27:
                    return this.results_showing && this.results_hide(), !0;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                    break;
                default:
                    return this.results_search()
            }
        }, e.prototype.generate_field_id = function () {
            var e;
            return e = this.generate_random_id(), this.form_field.id = e, e
        }, e.prototype.generate_random_char = function () {
            var e, t, n;
            return e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", n = Math.floor(Math.random() * e.length), t = e.substring(n, n + 1)
        }, e
    }(), t.AbstractChosen = e
}.call(this),
function () {
    var e, t, n, r, i = Object.prototype.hasOwnProperty,
        s = function (e, t) {
            function n() {
                this.constructor = e
            }
            for (var r in t) i.call(t, r) && (e[r] = t[r]);
            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
        };
    r = this, e = jQuery, e.fn.extend({
        chosen: function (n) {
            return !e.browser.msie || e.browser.version !== "6.0" && e.browser.version !== "7.0" ? this.each(function (r) {
                var i;
                i = e(this);
                if (!i.hasClass("chzn-done")) return i.data("chosen", new t(this, n))
            }) : this
        }
    }), t = function (t) {
        function i() {
            i.__super__.constructor.apply(this, arguments)
        }
        return s(i, t), i.prototype.setup = function () {
            return this.form_field_jq = e(this.form_field), this.current_value = this.form_field_jq.val(), this.is_rtl = this.form_field_jq.hasClass("chzn-rtl")
        }, i.prototype.finish_setup = function () {
            return this.form_field_jq.addClass("chzn-done")
        }, i.prototype.set_up_html = function () {
            var t, r, i, s;
            return this.container_id = this.form_field.id.length ? this.form_field.id.replace(/[^\w]/g, "_") : this.generate_field_id(), this.container_id += "_chzn", this.f_width = this.form_field_jq.outerWidth(), t = e("<div />", {
                id: this.container_id,
                "class": "chzn-container" + (this.is_rtl ? " chzn-rtl" : ""),
                style: "width: " + this.f_width + "px;"
            }), this.is_multiple ? t.html('<ul class="chzn-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chzn-drop" style="left:-9000px;"><ul class="chzn-results"></ul></div>') : t.html('<a href="javascript:void(0)" class="chzn-single chzn-default"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chzn-drop" style="left:-9000px;"><div class="chzn-search"><input type="text" autocomplete="off" /></div><ul class="chzn-results"></ul></div>'), this.form_field_jq.hide().after(t), this.container = e("#" + this.container_id), this.container.addClass("chzn-container-" + (this.is_multiple ? "multi" : "single")), this.dropdown = this.container.find("div.chzn-drop").first(), r = this.container.height(), i = this.f_width - n(this.dropdown), this.dropdown.css({
                width: i + "px",
                top: r + "px"
            }), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chzn-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chzn-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chzn-search").first(), this.selected_item = this.container.find(".chzn-single").first(), s = i - n(this.search_container) - n(this.search_field), this.search_field.css({
                width: s + "px"
            })), this.results_build(), this.set_tab_index(), this.form_field_jq.trigger("liszt:ready", {
                chosen: this
            })
        }, i.prototype.register_observers = function () {
            var e = this;
            return this.container.mousedown(function (t) {
                return e.container_mousedown(t)
            }), this.container.mouseup(function (t) {
                return e.container_mouseup(t)
            }), this.container.mouseenter(function (t) {
                return e.mouse_enter(t)
            }), this.container.mouseleave(function (t) {
                return e.mouse_leave(t)
            }), this.search_results.mouseup(function (t) {
                return e.search_results_mouseup(t)
            }), this.search_results.mouseover(function (t) {
                return e.search_results_mouseover(t)
            }), this.search_results.mouseout(function (t) {
                return e.search_results_mouseout(t)
            }), this.form_field_jq.bind("liszt:updated", function (t) {
                return e.results_update_field(t)
            }), this.search_field.blur(function (t) {
                return e.input_blur(t)
            }), this.search_field.keyup(function (t) {
                return e.keyup_checker(t)
            }), this.search_field.keydown(function (t) {
                return e.keydown_checker(t)
            }), this.is_multiple ? (this.search_choices.click(function (t) {
                return e.choices_click(t)
            }), this.search_field.focus(function (t) {
                return e.input_focus(t)
            })) : this.container.click(function (e) {
                return e.preventDefault()
            })
        }, i.prototype.search_field_disabled = function () {
            this.is_disabled = this.form_field_jq[0].disabled;
            if (this.is_disabled) return this.container.addClass("chzn-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus", this.activate_action), this.close_field();
            this.container.removeClass("chzn-disabled"), this.search_field[0].disabled = !1;
            if (!this.is_multiple) return this.selected_item.bind("focus", this.activate_action)
        }, i.prototype.container_mousedown = function (t) {
            var n;
            if (!this.is_disabled) return n = t != null ? e(t.target).hasClass("search-choice-close") : !1, t && t.type === "mousedown" && !this.results_showing && t.stopPropagation(), !this.pending_destroy_click && !n ? (this.active_field ? !this.is_multiple && t && (e(t.target)[0] === this.selected_item[0] || e(t.target).parents("a.chzn-single").length) && (t.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), e(document).click(this.click_test_action), this.results_show()), this.activate_field()) : this.pending_destroy_click = !1
        }, i.prototype.container_mouseup = function (e) {
            if (e.target.nodeName === "ABBR" && !this.is_disabled) return this.results_reset(e)
        }, i.prototype.blur_test = function (e) {
            if (!this.active_field && this.container.hasClass("chzn-container-active")) return this.close_field()
        }, i.prototype.close_field = function () {
            return e(document).unbind("click", this.click_test_action), this.is_multiple || (this.selected_item.attr("tabindex", this.search_field.attr("tabindex")), this.search_field.attr("tabindex", -1)), this.active_field = !1, this.results_hide(), this.container.removeClass("chzn-container-active"), this.winnow_results_clear(), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
        }, i.prototype.activate_field = function () {
            return !this.is_multiple && !this.active_field && (this.search_field.attr("tabindex", this.selected_item.attr("tabindex")), this.selected_item.attr("tabindex", -1)), this.container.addClass("chzn-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
        }, i.prototype.test_active_click = function (t) {
            return e(t.target).parents("#" + this.container_id).length ? this.active_field = !0 : this.close_field()
        }, i.prototype.results_build = function () {
            var e, t, n, i, s;
            this.parsing = !0, this.results_data = r.SelectParser.select_to_array(this.form_field), this.is_multiple && this.choices > 0 ? (this.search_choices.find("li.search-choice").remove(), this.choices = 0) : this.is_multiple || (this.selected_item.addClass("chzn-default").find("span").text(this.default_text), this.form_field.options.length <= this.disable_search_threshold ? this.container.addClass("chzn-container-single-nosearch") : this.container.removeClass("chzn-container-single-nosearch")), e = "", s = this.results_data;
            for (n = 0, i = s.length; n < i; n++) t = s[n], t.group ? e += this.result_add_group(t) : t.empty || (e += this.result_add_option(t), t.selected && this.is_multiple ? this.choice_build(t) : t.selected && !this.is_multiple && (this.selected_item.removeClass("chzn-default").find("span").text(t.text), this.allow_single_deselect && this.single_deselect_control_build()));
            return this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.search_results.html(e), this.parsing = !1
        }, i.prototype.result_add_group = function (t) {
            return t.disabled ? "" : (t.dom_id = this.container_id + "_g_" + t.array_index, '<li id="' + t.dom_id + '" class="group-result">' + e("<div />").text(t.label).html() + "</li>")
        }, i.prototype.result_do_highlight = function (e) {
            var t, n, r, i, s;
            if (e.length) {
                this.result_clear_highlight(), this.result_highlight = e, this.result_highlight.addClass("highlighted"), r = parseInt(this.search_results.css("maxHeight"), 10), s = this.search_results.scrollTop(), i = r + s, n = this.result_highlight.position().top + this.search_results.scrollTop(), t = n + this.result_highlight.outerHeight();
                if (t >= i) return this.search_results.scrollTop(t - r > 0 ? t - r : 0);
                if (n < s) return this.search_results.scrollTop(n)
            }
        }, i.prototype.result_clear_highlight = function () {
            return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
        }, i.prototype.results_show = function () {
            var e;
            if (!this.is_multiple) this.selected_item.addClass("chzn-single-with-drop"), this.result_single_selected && this.result_do_highlight(this.result_single_selected);
            else if (this.max_selected_options <= this.choices) return this.form_field_jq.trigger("liszt:maxselected", {
                chosen: this
            }), !1;
            return e = this.is_multiple ? this.container.height() : this.container.height() - 1, this.form_field_jq.trigger("liszt:showing_dropdown", {
                chosen: this
            }), this.dropdown.css({
                top: e + "px",
                left: 0
            }), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results()
        }, i.prototype.results_hide = function () {
            return this.is_multiple || this.selected_item.removeClass("chzn-single-with-drop"), this.result_clear_highlight(), this.form_field_jq.trigger("liszt:hiding_dropdown", {
                chosen: this
            }), this.dropdown.css({
                left: "-9000px"
            }), this.results_showing = !1
        }, i.prototype.set_tab_index = function (e) {
            var t;
            if (this.form_field_jq.attr("tabindex")) return t = this.form_field_jq.attr("tabindex"), this.form_field_jq.attr("tabindex", -1), this.is_multiple ? this.search_field.attr("tabindex", t) : (this.selected_item.attr("tabindex", t), this.search_field.attr("tabindex", -1))
        }, i.prototype.show_search_field_default = function () {
            return this.is_multiple && this.choices < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
        }, i.prototype.search_results_mouseup = function (t) {
            var n;
            n = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first();
            if (n.length) return this.result_highlight = n, this.result_select(t)
        }, i.prototype.search_results_mouseover = function (t) {
            var n;
            n = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first();
            if (n) return this.result_do_highlight(n)
        }, i.prototype.search_results_mouseout = function (t) {
            if (e(t.target).hasClass("active-result")) return this.result_clear_highlight()
        }, i.prototype.choices_click = function (t) {
            t.preventDefault();
            if (this.active_field && !e(t.target).hasClass("search-choice") && !this.results_showing) return this.results_show()
        }, i.prototype.choice_build = function (t) {
            var n, r, i = this;
            return this.is_multiple && this.max_selected_options <= this.choices ? (this.form_field_jq.trigger("liszt:maxselected", {
                chosen: this
            }), !1) : (n = this.container_id + "_c_" + t.array_index, this.choices += 1, this.search_container.before('<li class="search-choice" id="' + n + '"><span>' + t.html + '</span><a href="javascript:void(0)" class="search-choice-close" rel="' + t.array_index + '"></a></li>'), r = e("#" + n).find("a").first(), r.click(function (e) {
                return i.choice_destroy_link_click(e)
            }))
        }, i.prototype.choice_destroy_link_click = function (t) {
            return t.preventDefault(), this.is_disabled ? t.stopPropagation : (this.pending_destroy_click = !0, this.choice_destroy(e(t.target)))
        }, i.prototype.choice_destroy = function (e) {
            return this.choices -= 1, this.show_search_field_default(), this.is_multiple && this.choices > 0 && this.search_field.val().length < 1 && this.results_hide(), this.result_deselect(e.attr("rel")), e.parents("li").first().remove()
        }, i.prototype.results_reset = function () {
            this.form_field.options[0].selected = !0, this.selected_item.find("span").text(this.default_text), this.is_multiple || this.selected_item.addClass("chzn-default"), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change");
            if (this.active_field) return this.results_hide()
        }, i.prototype.results_reset_cleanup = function () {
            return this.selected_item.find("abbr").remove()
        }, i.prototype.result_select = function (e) {
            var t, n, r, i;
            if (this.result_highlight) return t = this.result_highlight, n = t.attr("id"), this.result_clear_highlight(), this.is_multiple ? this.result_deactivate(t) : (this.search_results.find(".result-selected").removeClass("result-selected"), this.result_single_selected = t, this.selected_item.removeClass("chzn-default")), t.addClass("result-selected"), i = n.substr(n.lastIndexOf("_") + 1), r = this.results_data[i], r.selected = !0, this.form_field.options[r.options_index].selected = !0, this.is_multiple ? this.choice_build(r) : (this.selected_item.find("span").first().text(r.text), this.allow_single_deselect && this.single_deselect_control_build()), (!e.metaKey || !this.is_multiple) && this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field_jq.val() !== this.current_value) && this.form_field_jq.trigger("change", {
                selected: this.form_field.options[r.options_index].value
            }), this.current_value = this.form_field_jq.val(), this.search_field_scale()
        }, i.prototype.result_activate = function (e) {
            return e.addClass("active-result")
        }, i.prototype.result_deactivate = function (e) {
            return e.removeClass("active-result")
        }, i.prototype.result_deselect = function (t) {
            var n, r;
            return r = this.results_data[t], r.selected = !1, this.form_field.options[r.options_index].selected = !1, n = e("#" + this.container_id + "_o_" + t), n.removeClass("result-selected").addClass("active-result").show(), this.result_clear_highlight(), this.winnow_results(), this.form_field_jq.trigger("change", {
                deselected: this.form_field.options[r.options_index].value
            }), this.search_field_scale()
        }, i.prototype.single_deselect_control_build = function () {
            if (this.allow_single_deselect && this.selected_item.find("abbr").length < 1) return this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>')
        }, i.prototype.winnow_results = function () {
            var t, n, r, i, s, o, u, f, l, c, h, p, d, v, m, g, y, b;
            this.no_results_clear(), l = 0, c = this.search_field.val() === this.default_text ? "" : e("<div/>").text(e.trim(this.search_field.val())).html(), o = this.search_contains ? "" : "^", s = new RegExp(o + c.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i"), d = new RegExp(c.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i"), b = this.results_data;
            for (v = 0, g = b.length; v < g; v++) {
                n = b[v];
                if (!n.disabled && !n.empty) if (n.group) e("#" + n.dom_id).css("display", "none");
                else if (!this.is_multiple || !n.selected) {
                    t = !1, f = n.dom_id, u = e("#" + f);
                    if (s.test(n.html)) t = !0, l += 1;
                    else if (n.html.indexOf(" ") >= 0 || n.html.indexOf("[") === 0) {
                        i = n.html.replace(/\[|\]/g, "").split(" ");
                        if (i.length) for (m = 0, y = i.length; m < y; m++) r = i[m], s.test(r) && (t = !0, l += 1)
                    }
                    t ? (c.length ? (h = n.html.search(d), p = n.html.substr(0, h + c.length) + "</em>" + n.html.substr(h + c.length), p = p.substr(0, h) + "<em>" + p.substr(h)) : p = n.html, u.html(p), this.result_activate(u), n.group_array_index != null && e("#" + this.results_data[n.group_array_index].dom_id).css("display", "list-item")) : (this.result_highlight && f === this.result_highlight.attr("id") && this.result_clear_highlight(), this.result_deactivate(u))
                }
            }
            return l < 1 && c.length ? this.no_results(c) : this.winnow_results_set_highlight()
        }, i.prototype.winnow_results_clear = function () {
            var t, n, r, i, s;
            this.search_field.val(""), n = this.search_results.find("li"), s = [];
            for (r = 0, i = n.length; r < i; r++) t = n[r], t = e(t), t.hasClass("group-result") ? s.push(t.css("display", "auto")) : !this.is_multiple || !t.hasClass("result-selected") ? s.push(this.result_activate(t)) : s.push(void 0);
            return s
        }, i.prototype.winnow_results_set_highlight = function () {
            var e, t;
            if (!this.result_highlight) {
                t = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), e = t.length ? t.first() : this.search_results.find(".active-result").first();
                if (e != null) return this.result_do_highlight(e)
            }
        }, i.prototype.no_results = function (t) {
            var n;
            return n = e('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), n.find("span").first().html(t), this.search_results.append(n)
        }, i.prototype.no_results_clear = function () {
            return this.search_results.find(".no-results").remove()
        }, i.prototype.keydown_arrow = function () {
            var t, n;
            this.result_highlight ? this.results_showing && (n = this.result_highlight.nextAll("li.active-result").first(), n && this.result_do_highlight(n)) : (t = this.search_results.find("li.active-result").first(), t && this.result_do_highlight(e(t)));
            if (!this.results_showing) return this.results_show()
        }, i.prototype.keyup_arrow = function () {
            var e;
            if (!this.results_showing && !this.is_multiple) return this.results_show();
            if (this.result_highlight) return e = this.result_highlight.prevAll("li.active-result"), e.length ? this.result_do_highlight(e.first()) : (this.choices > 0 && this.results_hide(), this.result_clear_highlight())
        }, i.prototype.keydown_backstroke = function () {
            return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (this.pending_backstroke = this.search_container.siblings("li.search-choice").last(), this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus"))
        }, i.prototype.clear_backstroke = function () {
            return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
        }, i.prototype.keydown_checker = function (e) {
            var t, n;
            t = (n = e.which) != null ? n : e.keyCode, this.search_field_scale(), t !== 8 && this.pending_backstroke && this.clear_backstroke();
            switch (t) {
                case 8:
                    this.backstroke_length = this.search_field.val().length;
                    break;
                case 9:
                    this.results_showing && !this.is_multiple && this.result_select(e), this.mouse_on_container = !1;
                    break;
                case 13:
                    e.preventDefault();
                    break;
                case 38:
                    e.preventDefault(), this.keyup_arrow();
                    break;
                case 40:
                    this.keydown_arrow()
            }
        }, i.prototype.search_field_scale = function () {
            var t, n, r, i, s, o, u, f, l;
            if (this.is_multiple) {
                r = 0, u = 0, s = "position:absolute; left: -1000px; top: -1000px; display:none;", o = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"];
                for (f = 0, l = o.length; f < l; f++) i = o[f], s += i + ":" + this.search_field.css(i) + ";";
                return n = e("<div />", {
                    style: s
                }), n.text(this.search_field.val()), e("body").append(n), u = n.width() + 25, n.remove(), u > this.f_width - 10 && (u = this.f_width - 10), this.search_field.css({
                    width: u + "px"
                }), t = this.container.height(), this.dropdown.css({
                    top: t + "px"
                })
            }
        }, i.prototype.generate_random_id = function () {
            var t;
            t = "sel" + this.generate_random_char() + this.generate_random_char() + this.generate_random_char();
            while (e("#" + t).length > 0) t += this.generate_random_char();
            return t
        }, i
    }(AbstractChosen), n = function (e) {
        var t;
        return t = e.outerWidth() - e.width()
    }, r.get_side_border_padding = n
}.call(this),
function (e) {
    e.cookie = function (t, n, r) {
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(n)) || n === null || n === undefined)) {
            r = e.extend({}, r);
            if (n === null || n === undefined) r.expires = -1;
            if (typeof r.expires == "number") {
                var i = r.expires,
                    s = r.expires = new Date;
                s.setDate(s.getDate() + i)
            }
            return n = String(n), document.cookie = [encodeURIComponent(t), "=", r.raw ? n : encodeURIComponent(n), r.expires ? "; expires=" + r.expires.toUTCString() : "", r.path ? "; path=" + r.path : "", r.domain ? "; domain=" + r.domain : "", r.secure ? "; secure" : ""].join("")
        }
        r = n || {};
        var o = r.raw ? function (e) {
                return e
            } : decodeURIComponent,
            u = document.cookie.split("; ");
        for (var a = 0, f; f = u[a] && u[a].split("="); a++) if (o(f[0]) === t) return o(f[1] || "");
        return null
    }
}(window.jQuery),
function () {
    (function (e, t) {
        var n, r;
        return r = t.document, n = function () {
            function n(t) {
                var n = this;
                this._options = e.extend({
                    name: "tour",
                    labels: {
                        end: "Berhenti",
                        next: "Lanjutkan &raquo;",
                        prev: "&laquo; Kembali"
                    },
                    keyboard: !0,
                    afterSetState: function (e, t) {},
                    afterGetState: function (e, t) {},
                    onShow: function (e) {},
                    onHide: function (e) {}
                }, t), this._steps = [], this.setCurrentStep(), this._options.keyboard && e(r).on("keyup.bootstrap-tour", function (e) {
                    if (!e.which) return;
                    switch (e.which) {
                        case 39:
                            e.preventDefault();
                            if (n._current < n._steps.length - 1) return n.next();
                            break;
                        case 37:
                            e.preventDefault();
                            if (n._current > 0) return n.prev()
                    }
                }), e(r).on("click.bootstrap-tour", ".popover .next", function (e) {
                    return e.preventDefault(), n.next()
                }), e(r).on("click.bootstrap-tour", ".popover .prev", function (e) {
                    return e.preventDefault(), n.prev()
                }), e(r).on("click.bootstrap-tour", ".popover .end", function (e) {
                    return e.preventDefault(), n.end()
                }), this._onresize(function () {
                    if (!n.ended) return n.showStep(n._current)
                })
            }
            return n.prototype.setState = function (t, n) {
                return e.cookie("" + this._options.name + "_" + t, n, {
                    expires: 36500,
                    path: "/"
                }), this._options.afterSetState(t, n)
            }, n.prototype.getState = function (t) {
                var n;
                return n = e.cookie("" + this._options.name + "_" + t), this._options.afterGetState(t, n), n
            }, n.prototype.addStep = function (e) {
                return this._steps.push(e)
            }, n.prototype.getStep = function (t) {
                if (this._steps[t] != null) return e.extend({
                    path: "",
                    placement: "right",
                    title: "",
                    content: "",
                    next: t === this._steps.length - 1 ? -1 : t + 1,
                    prev: t - 1,
                    animation: !0,
                    onShow: this._options.onShow,
                    onHide: this._options.onHide
                }, this._steps[t])
            }, n.prototype.start = function (e) {
                e == null && (e = !1);
                if (e || !this.ended()) return this.showStep(this._current)
            }, n.prototype.next = function () {
                return this.hideStep(this._current), this.showNextStep()
            }, n.prototype.prev = function () {
                return this.hideStep(this._current), this.showPrevStep()
            }, n.prototype.end = function () {
                return this.hideStep(this._current), e(r).off(".bootstrap-tour"), this.setState("end", "yes")
            }, n.prototype.ended = function () {
                return !!this.getState("end")
            }, n.prototype.restart = function () {
                return this.setState("current_step", null), this.setState("end", null), this.setCurrentStep(0), this.start()
            }, n.prototype.hideStep = function (t) {
                var n;
                return n = this.getStep(t), n.onHide != null && n.onHide(this), e(n.element).popover("hide")
            }, n.prototype.showStep = function (e) {
                var t;
                t = this.getStep(e);
                if (!t) return;
                this.setCurrentStep(e);
                if (t.path !== "" && r.location.pathname !== t.path && r.location.pathname.replace(/^.*[\\\/]/, "") !== t.path) {
                    r.location.href = t.path;
                    return
                }
                return t.onShow != null && t.onShow(this), this._showPopover(t, e)
            }, n.prototype.setCurrentStep = function (e) {
                return e != null ? (this._current = e, this.setState("current_step", e)) : (this._current = this.getState("current_step"), this._current === null || this._current === "null" ? this._current = 0 : this._current = parseInt(this._current))
            }, n.prototype.showNextStep = function () {
                var e;
                return e = this.getStep(this._current), this.showStep(e.next)
            }, n.prototype.showPrevStep = function () {
                var e;
                return e = this.getStep(this._current), this.showStep(e.prev)
            }, n.prototype._showPopover = function (t, n) {
                var r, i, s, o, u = this;
                return r = "" + t.content + "<br /><p>", s = e.extend({}, this._options), t.options && e.extend(s, t.options), t.reflex && (e(t.element).css("cursor", "pointer"), e(t.element).on("click", function (n) {
                    e(t.element).css("cursor", "auto"), setTimeout(function () {
                        return u.next()
                    }, 100)
                })), i = [], t.prev >= 0 && i.push("<a href='#" + t.prev + "' class='prev'>" + s.labels.prev + "</a>"), t.next >= 0 && i.push("<a href='#" + t.next + "' class='next'>" + s.labels.next + "</a>"), r += i.join(" | "), r += "<a href='#' class='pull-right end'>" + s.labels.end + "</a>", e(t.element).popover({
                    placement: t.placement,
                    trigger: "manual",
                    title: t.title,
                    content: r,
                    animation: t.animation
                }).popover("show"), o = e(t.element).data("popover").tip(), this._reposition(o), this._scrollIntoView(o)
            }, n.prototype._reposition = function (t) {
                var n, i, s;
                return s = t.offset(), n = e(r).outerHeight() - s.top - e(t).outerHeight(), n < 0 && (s.top = s.top + n), i = e(r).outerWidth() - s.left - e(t).outerWidth(), i < 0 && (s.left = s.left + i), s.top < 0 && (s.top = 0), s.left < 0 && (s.left = 0), t.offset(s)
            }, n.prototype._scrollIntoView = function (n) {
                var r;
                r = n.get(0).getBoundingClientRect();
                if (!(r.top > 0 && r.bottom < e(t).height() && r.left > 0 && r.right < e(t).width())) return n.get(0).scrollIntoView(!0)
            }, n.prototype._onresize = function (e, n) {
                return t.onresize = function () {
                    return clearTimeout(n), n = setTimeout(e, 100)
                }
            }, n
        }(), t.Tour = n
    })(jQuery, window)
}.call(this), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, t, n, r, i) {
        return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
    },
    easeInQuad: function (e, t, n, r, i) {
        return r * (t /= i) * t + n
    },
    easeOutQuad: function (e, t, n, r, i) {
        return -r * (t /= i) * (t - 2) + n
    },
    easeInOutQuad: function (e, t, n, r, i) {
        return 1 > (t /= i / 2) ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function (e, t, n, r, i) {
        return r * (t /= i) * t * t + n
    },
    easeOutCubic: function (e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t + 1) + n
    },
    easeInOutCubic: function (e, t, n, r, i) {
        return 1 > (t /= i / 2) ? r / 2 * t * t * t + n : r / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function (e, t, n, r, i) {
        return r * (t /= i) * t * t * t + n
    },
    easeOutQuart: function (e, t, n, r, i) {
        return -r * ((t = t / i - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function (e, t, n, r, i) {
        return 1 > (t /= i / 2) ? r / 2 * t * t * t * t + n : -r / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function (e, t, n, r, i) {
        return r * (t /= i) * t * t * t * t + n
    },
    easeOutQuint: function (e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function (e, t, n, r, i) {
        return 1 > (t /= i / 2) ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n
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
        return 0 == t ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
    },
    easeOutExpo: function (e, t, n, r, i) {
        return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
    },
    easeInOutExpo: function (e, t, n, r, i) {
        return 0 == t ? n : t == i ? n + r : 1 > (t /= i / 2) ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
    },
    easeInCirc: function (e, t, n, r, i) {
        return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
    },
    easeOutCirc: function (e, t, n, r, i) {
        return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
    },
    easeInOutCirc: function (e, t, n, r, i) {
        return 1 > (t /= i / 2) ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function (e, t, n, r, i) {
        var e = 1.70158,
            s = 0,
            o = r;
        return 0 == t ? n : 1 == (t /= i) ? n + r : (s || (s = .3 * i), o < Math.abs(r) ? (o = r, e = s / 4) : e = s / (2 * Math.PI) * Math.asin(r / o), -(o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - e) * 2 * Math.PI / s)) + n)
    },
    easeOutElastic: function (e, t, n, r, i) {
        var e = 1.70158,
            s = 0,
            o = r;
        return 0 == t ? n : 1 == (t /= i) ? n + r : (s || (s = .3 * i), o < Math.abs(r) ? (o = r, e = s / 4) : e = s / (2 * Math.PI) * Math.asin(r / o), o * Math.pow(2, -10 * t) * Math.sin((t * i - e) * 2 * Math.PI / s) + r + n)
    },
    easeInOutElastic: function (e, t, n, r, i) {
        var e = 1.70158,
            s = 0,
            o = r;
        return 0 == t ? n : 2 == (t /= i / 2) ? n + r : (s || (s = i * .3 * 1.5), o < Math.abs(r) ? (o = r, e = s / 4) : e = s / (2 * Math.PI) * Math.asin(r / o), 1 > t ? -0.5 * o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - e) * 2 * Math.PI / s) + n : .5 * o * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - e) * 2 * Math.PI / s) + r + n)
    },
    easeInBack: function (e, t, n, r, i, s) {
        return void 0 == s && (s = 1.70158), r * (t /= i) * t * ((s + 1) * t - s) + n
    },
    easeOutBack: function (e, t, n, r, i, s) {
        return void 0 == s && (s = 1.70158), r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n
    },
    easeInOutBack: function (e, t, n, r, i, s) {
        return void 0 == s && (s = 1.70158), 1 > (t /= i / 2) ? r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n : r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
    },
    easeInBounce: function (e, t, n, r, i) {
        return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
    },
    easeOutBounce: function (e, t, n, r, i) {
        return (t /= i) < 1 / 2.75 ? r * 7.5625 * t * t + n : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    },
    easeInOutBounce: function (e, t, n, r, i) {
        return t < i / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, r, i) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - i, 0, r, i) + .5 * r + n
    }
}),
function () {
    jQuery(function () {
        window.tour = new Tour({
            keyboard: !1
        }), window.timer_tour = null, window.delayed_tour = function () {}, window.remove_delayed = function () {
            if (timer_tour) return clearTimout(timer_tour)
        }, tour.addStep({
            element: "a.menu[href=#menuProfile]",
            placement: "bottom",
            title: "Pengaturan Akun",
            content: "Klik nama akun anda untuk melihat beberapa pilihan pengaturan.",
            reflex: !0,
            onShow: function () {
                return $(document).unbind("click.bootstrap-tour"), $(document).on("click.bootstrap-tour", ".popover .next", function (e) {
                    return e.preventDefault(), $(e.target).is("a[href=#1]") ? !1 : tour.next()
                }), $("a.next[href=#1]").live("click", function (e) {
                    return e.stopImmediatePropagation(), $("a.menu[href=#menuProfile]").click()
                })
            }
        }), tour.addStep({
            element: "li:has(a[href='/users/profile'])",
            placement: "left",
            title: "Pengaturan Profil",
            content: "Anda dapat memperbarui profil anda sepert upload logo, ubah alamat, nama perusahaan.",
            reflex: !0,
            onShow: delayed_tour,
            onHide: remove_delayed
        }), tour.addStep({
            element: "li:has(a[href='/user_accounts'])",
            placement: "left",
            title: "Pengaturan Pembayaran",
            content: "Anda dapat menambahkan metode pembayaran seperti bank transfer, kartu kredit dan paypal.",
            reflex: !0,
            onShow: delayed_tour,
            onHide: remove_delayed
        }), tour.addStep({
            element: "li:has(a[href='/plugin_stores'])",
            placement: "left",
            title: "Pengaturan Fasilitas",
            content: "Anda dapat mengintegrasikan fasilitas baru ke dalam halaman akun anda sesuai dengan kebutuhan.",
            reflex: !0,
            onShow: delayed_tour,
            onHide: remove_delayed
        }), tour.addStep({
            element: "li:has(a[href='/users/plans'])",
            placement: "left",
            title: "Pengaturan Berlanganan",
            content: "Anda dapat merubah paket berlangganan sesuai dengan kebutuhan bisnis anda.",
            reflex: !0,
            onShow: delayed_tour,
            onHide: remove_delayed
        }), tour.addStep({
            element: ".menu-content a[href='/users/profile']",
            placement: "bottom",
            title: "Mari perbarui profil anda",
            content: "Sebelum anda membuat invoice, silahkan klik tautan diatas untuk memperbarui profil anda.",
            reflex: !0,
            next: -1
        }), tour.addStep({
            element: "#user_subdomain",
            placement: "right",
            title: "Alamat Publik",
            content: "Subdomain digunakan oleh client anda untuk mengakses halaman bisnis anda melalui invoice.co.id",
            onShow: delayed_tour,
            onHide: remove_delayed
        }), tour.addStep({
            element: "#user_profile_attributes_company_name",
            placement: "right",
            title: "Nama Perusahaan",
            content: "Masukan nama perusahaan anda untuk ditampilkan pada setiap invoice, jika tidak maka nama lengkap anda yang akan ditampilkan",
            onShow: delayed_tour,
            onHide: remove_delayed
        }), tour.addStep({
            element: "#uniform-user_logo",
            placement: "right",
            title: "Upload logo",
            content: "Klik disini untuk mengupload logo bisnis atau perusahaan anda.",
            onShow: delayed_tour,
            onHide: remove_delayed
        }), tour.addStep({
            element: "a[href=#address]",
            placement: "bottom",
            title: "Perbarui Alamat",
            content: "Klik disini untuk merubah alamat anda yang akan ditampilkan di invoice",
            onShow: delayed_tour,
            onHide: remove_delayed
        }), tour.addStep({
            element: "a[href=#personal]",
            placement: "bottom",
            title: "Kontak Informasi",
            content: "Klik disini untuk memperbarui informasi agar pelanggan anda dengan mudah menghubungi anda",
            onShow: delayed_tour,
            onHide: remove_delayed
        }), tour.addStep({
            element: "a[href=#account]",
            placement: "bottom",
            title: "Ganti Kata Sandi",
            content: "Klik disini untuk memperbarui kata sandi atau alamat email anda",
            onShow: delayed_tour,
            onHide: remove_delayed
        }), tour.addStep({
            element: "a[href=#social_media]",
            placement: "bottom",
            title: "Jaringan Media Sosial",
            content: "Klik disini untuk menambahkan akun sosial media. Anda dapat mengirim invoice ke teman facebook anda.",
            onShow: delayed_tour,
            onHide: remove_delayed
        }), tour.addStep({
            element: "#invoice button[type=submit]",
            placement: "left",
            title: "Simpan",
            content: "Klik disini untuk menyimpan perubahan yang baru saja anda lakukan."
        }), tour.addStep({
            element: "a[href='/invoices/new']",
            placement: "bottom",
            title: "Buat Invoice Pertama Anda",
            content: "Klik menu diatas ini untuk memulai membuat dan mengirim invoice"
        }), tour.addStep({
            element: ".ribbon_label",
            placement: "right",
            title: "Status Invoice",
            content: "Ini adalah status invoice yang sedang atau telah anda dibuat.",
            prev: -1
        }), tour.addStep({
            element: ".client_details.form",
            placement: "right",
            title: "Informasi Bisnis Anda",
            content: "Logo, nama dan alamat bisnis anda akan ditampilkan sebagai kop surat di invoice anda. Jika kurang lengkap, silahkan perbarui profil anda."
        }), tour.addStep({
            element: ".barcode_details",
            placement: "left",
            title: "Informasi Invoice",
            content: "Pada kop surat sebelah kanan invoice terdapat gambar barcode yang dapat di scan dengan scanner seperti handphone atau webcam yang dan langsung mengarah ke alamat invoice online anda. Informasi lainnya adalah nomor invoice dan total pembayaran."
        }), tour.addStep({
            element: ".client_details:last ul span:last",
            placement: "bottom",
            title: "Tambahkan Penerima Invoice",
            content: "Jika anda ingin mengirim invoice ke teman facebook, silahkan klik tombol <b>Facebook</b>. Atau jika ingin menambahkan pelanggan lain, silahkan klik tombol <b>Pelanggan</b>."
        }), tour.addStep({
            element: "input[name='invoice[created_at]']",
            placement: "left",
            title: "Tanggal Diterbitkan Invoice",
            content: "Pilih tanggal kapan invoice akan diterbitkan atau akan aktif."
        }), tour.addStep({
            element: "input[name='invoice[due_at]']",
            placement: "left",
            title: "Tanggal Jatuh Tempo",
            content: "Pilih tanggal untuk jatuh tempo dari invoice yang sedang anda buat."
        }), tour.addStep({
            element: "tr.invoice_item:first",
            placement: "top",
            title: "Unit Barang Ditagih",
            content: "Pilih atau masukan barang atau produk yang akan ditagih melalui invoice."
        }), tour.addStep({
            element: "#uniform-invoice_recurring_day",
            placement: "right",
            title: "Pengaturan Invoice Berkala",
            content: "Jika anda ingin membuat invoice ini ditagih secara otomatis berdasarkan periode tertentu, silahkan pilih jenis pengulangan."
        }), tour.addStep({
            element: "#invoice_discount",
            placement: "right",
            title: "Pengaturan Diskon, Pajak, Biaya Pengiriman",
            content: "Anda dapat menambahkan beberapa opsi untuk invoice anda sepert pemotongan harga melalui diskon dari keseluruhan harga barang, pajak invoice atau biaya pengiriman."
        }), tour.addStep({
            element: ".btn-quaternary.btn-invoice-opts",
            placement: "top",
            title: "Simpan Sebagai Draf",
            content: "Anda dapat menyimpan invoice sebagai draf dan tidak akan dikirim ke penerima."
        }), tour.addStep({
            element: ".btn-blue.btn-invoice-opts",
            placement: "top",
            title: "Simpan Dan Kirim",
            content: "Jika anda yakin dengan yang dibuat, klik tombol dibawah ini untuk mengirim langsung invoice ke pernerima."
        });
        if (window.location.pathname === "/users/dashboard") return tour.setState("current_step", null), tour.setState("end", null), tour.setCurrentStep(0)
    })
}.call(this),
function () {
    jQuery(function () {
        window.tour = new Tour({
            labels: {
                end: "Stop",
                next: "Next &raquo;",
                prev: "&laquo; Back"
            },
            keyboard: !1
        }), window.timer_tour = null, window.delayed_tour = function () {}, window.remove_delayed = function () {
            if (timer_tour) return clearTimout(timer_tour)
        }, tour.addStep({
            element: "a.menu[href=#menuProfile]",
            placement: "bottom",
            title: "Setup Account",
            content: "Click your account name to see some options for account configuration.",
            reflex: !0,
            onShow: function () {
                return $(document).unbind("click.bootstrap-tour"), $(document).on("click.bootstrap-tour", ".popover .next", function (e) {
                    return e.preventDefault(), $(e.target).is("a[href=#1]") ? !1 : tour.next()
                }), $("a.next[href=#1]").live("click", function (e) {
                    return e.stopImmediatePropagation(), $("a.menu[href=#menuProfile]").click()
                })
            }
        }), tour.addStep({
            element: "li:has(a[href='/users/profile'])",
            placement: "left",
            title: "Edit Profile",
            content: "You can update your profile such as uploading logo, change address, company name.",
            reflex: !0,
            onShow: delayed_tour,
            onHide: remove_delayed
        }), tour.addStep({
            element: "li:has(a[href='/user_accounts'])",
            placement: "left",
            title: "Payment Methods",
            content: "You can change or add payment option such as bank transfer, credit card or paypal.",
            reflex: !0,
            onShow: delayed_tour,
            onHide: remove_delayed
        }), tour.addStep({
            element: "li:has(a[href='/plugin_stores'])",
            placement: "left",
            title: "Plugin Store",
            content: "You can add feature based on your needs.",
            reflex: !0,
            onShow: delayed_tour,
            onHide: remove_delayed
        }), tour.addStep({
            element: "li:has(a[href='/users/plans'])",
            placement: "left",
            title: "Upgrade Account",
            content: "You can upgrade and downgrade your account any time.",
            reflex: !0,
            onShow: delayed_tour,
            onHide: remove_delayed
        }), tour.addStep({
            element: ".menu-content a[href='/users/profile']",
            placement: "bottom",
            title: "Let's edit your profile",
            content: "Before preparing any invoice, please click link above to write or update your profile.",
            reflex: !0,
            next: -1
        }), tour.addStep({
            element: "#user_subdomain",
            placement: "right",
            title: "Subdomain Address",
            content: "Subdomain is used by your client or customer to access your invoice or store online through invoice.co.id",
            onShow: delayed_tour,
            onHide: remove_delayed
        }), tour.addStep({
            element: "#user_profile_attributes_company_name",
            placement: "right",
            title: "Company Name",
            content: "Enter your company name to appear on invoice receipt",
            onShow: delayed_tour,
            onHide: remove_delayed
        }), tour.addStep({
            element: "#uniform-user_logo",
            placement: "right",
            title: "Upload logo",
            content: "Click here to upload your logo.",
            onShow: delayed_tour,
            onHide: remove_delayed
        }), tour.addStep({
            element: "a[href=#address]",
            placement: "bottom",
            title: "Edit Address",
            content: "Click here to change your address, it will appear on the invoice.",
            onShow: delayed_tour,
            onHide: remove_delayed
        }), tour.addStep({
            element: "a[href=#personal]",
            placement: "bottom",
            title: "Contact Information",
            content: "Click here to change your contact information. Make your self contactable!",
            onShow: delayed_tour,
            onHide: remove_delayed
        }), tour.addStep({
            element: "a[href=#account]",
            placement: "bottom",
            title: "Change Password",
            content: "Click here to change your password",
            onShow: delayed_tour,
            onHide: remove_delayed
        }), tour.addStep({
            element: "a[href=#social_media]",
            placement: "bottom",
            title: "Social Media",
            content: "Click here to link your invoice with any social network like facebook, hotmail and google.",
            onShow: delayed_tour,
            onHide: remove_delayed
        }), tour.addStep({
            element: "#invoice button[type=submit]",
            placement: "left",
            title: "Save The Changes",
            content: "Click here to save any changes from your profile."
        }), tour.addStep({
            element: "a[href='/invoices/new']",
            placement: "bottom",
            title: "Create Your First Invoice",
            content: "Click the menu above to get started with your first invoice."
        }), tour.addStep({
            element: ".ribbon_label",
            placement: "right",
            title: "Invoice Status",
            content: "This is current status for your invoice or estimate.",
            prev: -1
        }), tour.addStep({
            element: ".client_details.form",
            placement: "right",
            title: "Sender Information",
            content: "This space could contain information like logo, your name or company, address, email, and phone."
        }), tour.addStep({
            element: ".barcode_details",
            placement: "left",
            title: "Invoice Information",
            content: "On the right side of your invoice header includes barode image, invoice number and total amount."
        }), tour.addStep({
            element: ".client_details:last ul span:last",
            placement: "bottom",
            title: "Add Invoice Recipient",
            content: "You could send invoice to facebook or create from exist clients."
        }), tour.addStep({
            element: "input[name='invoice[created_at]']",
            placement: "left",
            title: "Published Date",
            content: "Choose a creation date for invoice."
        }), tour.addStep({
            element: "input[name='invoice[due_at]']",
            placement: "left",
            title: "Due Date",
            content: "Choose a date for invoice due"
        }), tour.addStep({
            element: "tr.invoice_item:first",
            placement: "top",
            title: "Invoice Items",
            content: "Enter any item or product which will be included on your invoice."
        }), tour.addStep({
            element: "#uniform-invoice_recurring_day",
            placement: "right",
            title: "Recurring Bill",
            content: "If you want send invoice recurly based on date period please choose recurring type."
        }), tour.addStep({
            element: "#invoice_discount",
            placement: "right",
            title: "Set Discount, Tax, and Shipping Cost",
            content: "You could set some optional fee for your invoice if any."
        }), tour.addStep({
            element: ".btn-quaternary.btn-invoice-opts",
            placement: "top",
            title: "Save as Draft",
            content: "You could save as draft your invoice and continue later, the recipient will not receive your invoice."
        }), tour.addStep({
            element: ".btn-blue.btn-invoice-opts",
            placement: "top",
            title: "Approve and Send",
            content: "If your invoice is ready for sent, you can click button below and it will automatically be sent to your recipient(s)."
        });
        if (window.location.pathname === "/users/dashboard") return tour.setState("current_step", null), tour.setState("end", null), tour.setCurrentStep(0)
    })
}.call(this), window.jTour = function (e, t) {
    function n() {
        _ = (window.innerWidth || document.documentElement.clientWidth) / H, D = (window.innerHeight || document.documentElement.clientHeight) / H
    }
    function r(e) {
        switch (e.keyCode) {
            case 37:
                "keyup" == e.type && 0 < x ? f() : e.preventDefault();
                break;
            case 39:
                "keyup" == e.type ? a() : e.preventDefault();
                break;
            case 38:
                "keyup" == e.type ? h(.25) : e.preventDefault();
                break;
            case 40:
                "keyup" == e.type ? h(-0.25) : e.preventDefault();
                break;
            case 32:
                manualskip = !0, "keyup" == e.type ? o(!0) : e.preventDefault();
                break;
            case 27:
                "keyup" == e.type ? s() : e.preventDefault()
        }
    }
    function i(e) {
        e || (e = x), O = O || $(window).scrollTop(), M = M || $(window).scrollLeft(), w.show().fadeIn(function () {
            I.pauseOnHover && v.bind({
                "mouseenter.jTour": o,
                "mouseleave.jTour": u
            }), I.keyboardNav && $(document).bind({
                "keyup.jTour": r,
                "keydown.jTour": r
            }), A = !1, x = e, I.onStart.call(R, x), l(e)
        }), I.showControls && (b.find(".play").hide(), b.find(".pause").show())
    }
    function s() {
        busy || (clearTimeout(C), g.clearQueue().stop(), w.hide(), I.pauseOnHover && v.unbind(".jTour"), I.keyboardNav && $(document).unbind(".jTour"), I.scrollBack ? d(M, O, I.scrollDuration, function () {
            I.onStop.call(R, x)
        }) : I.onStop.call(R, x), T && T.exposeElement && T.exposeElement.css(T.exposeElement.data("jTour")).removeData("jTour").removeClass(E + "exposed"), c(), x = 0, I.showControls && (b.find(".play").show(), b.find(".pause").hide()))
    }
    function o(e, t) {
        if (A) {
            if (!0 === e) {
                manualskip = !manualskip, u();
                return
            }
            if (!manualskip) return
        }!1 !== t && I.onPause.call(R, x), clearTimeout(C), g.clearQueue().stop(), I.showControls && manualskip && (b.find(".play").show(), b.find(".pause").hide()), A = !0
    }
    function u(t) {
        if (A && !manualskip) {
            !1 !== t && I.onPlay.call(R, x), clearTimeout(C);
            var t = g.width() / (m.width() / 100) / 100,
                n = e[x].live || q.live,
                n = n - n * t;
            g.clearQueue().stop().animate({
                width: "100%"
            }, {
                duration: n * (1 / I.speed),
                easing: "linear",
                step: L,
                complete: a
            }), I.showControls && (b.find(".play").hide(), b.find(".pause").show()), A = !1
        }
    }
    function a() {
        if (!busy) {
            k && e[x].steps && (e[x].onStep && e[x].onStep.call(R, T, 100), $.each(k, function (t, n) {
                e[x].steps[k[t]].call(R, T, n)
            }), k = null);
            if (e[x].goTo) return window.location = e[x].goTo + "#jTour=" + (x + 1), setTimeout(function () {
                location.reload()
            }, 1e3), !1;
            x + 1 < N ? (clearTimeout(C), g.clearQueue().stop(), l(++x)) : (s(), I.onFinish.call(R, x))
        }
    }
    function f() {
        !busy && 0 < x && (clearTimeout(C), g.clearQueue().stop(), l(--x))
    }
    function l(t) {
        var n = $.extend({}, q, e[t]),
            r = n.element = n.element ? "string" == typeof n.element ? $(n.element) : n.element : 0;
        if (r.length) {
            if ("auto" === n.live) {
                var i = $("<div>").html(n.html).text().length;
                n.live = e[t].live = Math.max(2500, 2500 * Math.log(i / 10) + 1e3)
            }
            n.live = Math.abs(n.live), n.isArea = "area" == n.element[0].nodeName.toLowerCase(), T ? T.onBeforeHide.call(R, T.element) : (n.delayOut = 0, n.animationOut = "hide"), busy = !0, v[n.animationOut](n.delayOut, function () {
                v.css({
                    left: 0,
                    top: 0,
                    "min-width": 0
                }), T && T.onHide.call(R, T.element), C = setTimeout(function () {
                    var e, i, s, o, u;
                    m.html(n.html), I.onChange.call(R, t);
                    if (r[0] === S[0]) e = _ * H, i = D * H / 2 - v.outerHeight() / 2, s = 0, o = 0;
                    else if (n.isArea) {
                        o = r[0].coords.split(","), e = n.exposeElement = $("img[usemap=#" + r.parent().attr("name") + "]");
                        var f = e.offset(),
                            l = parseInt(e.css("paddingTop"), 10);
                        s = parseInt(e.css("paddingLeft"), 10);
                        var c = parseInt(e.css("borderTopWidth"), 10),
                            h = parseInt(e.css("borderLeftWidth"), 10);
                        e = o[2] - o[0], i = o[3] - o[1], s = parseInt(o[0], 10) + f.left + s + h, o = parseInt(o[1], 10) + f.top + l + c
                    } else e = r.outerWidth(), i = r.outerHeight(), s = r.offset().left, o = r.offset().top;
                    u = {
                        left: s,
                        top: o
                    }, f = {
                        x: 0,
                        y: 0
                    };
                    switch (n.position) {
                        case "ne":
                            isNaN(n.offset) || (n.offset = {
                                x: 0,
                                y: n.offset
                            }), u.top -= v.outerHeight() + n.offset.y, u.left = s + e - v.outerWidth() + n.offset.x, f.x = e / 2 - +v.outerWidth() / 2 + n.offset.x, f.y = -i / 2 - v.outerHeight() / 2 - n.offset.y;
                            break;
                        case "nw":
                            isNaN(n.offset) || (n.offset = {
                                x: 0,
                                y: n.offset
                            }), u.top -= v.outerHeight() + n.offset.y, u.left = s - n.offset.x, f.x = -e / 2 + v.outerWidth() / 2 - n.offset.x, f.y = -i / 2 - v.outerHeight() / 2 - n.offset.y;
                            break;
                        case "n":
                            isNaN(n.offset) || (n.offset = {
                                x: 0,
                                y: n.offset
                            }), u.top -= v.outerHeight() + n.offset.y, u.left += (e - v.outerWidth()) / 2 + n.offset.x, f.x = n.offset.x, f.y = -i / 2 - v.outerHeight() / 2 - n.offset.y;
                            break;
                        case "se":
                            isNaN(n.offset) || (n.offset = {
                                x: 0,
                                y: n.offset
                            }), u.top += i + n.offset.y, u.left = s + e - v.outerWidth() + n.offset.x, f.x = e / 2 - v.outerWidth() / 2 + n.offset.x, f.y = i / 2 + v.outerHeight() / 2 + n.offset.y;
                            break;
                        case "sw":
                            isNaN(n.offset) || (n.offset = {
                                x: 0,
                                y: n.offset
                            }), u.top += i + n.offset.y, u.left = s - n.offset.x, f.x = -e / 2 + v.outerWidth() / 2 - n.offset.x, f.y = i / 2 + v.outerHeight() / 2 + n.offset.y;
                            break;
                        case "s":
                            isNaN(n.offset) || (n.offset = {
                                x: 0,
                                y: n.offset
                            }), u.top += i + n.offset.y, u.left += (e - v.outerWidth()) / 2 + n.offset.x, f.x = n.offset.x, f.y = i / 2 + v.outerHeight() / 2 + n.offset.y;
                            break;
                        case "w":
                            isNaN(n.offset) || (n.offset = {
                                x: n.offset,
                                y: 0
                            }), u.top -= v.outerHeight() / 2 - i / 2 - n.offset.y, u.left -= v.outerWidth() + n.offset.x, f.x = -e / 2 + v.outerWidth() / 2 - n.offset.x, f.y = -n.offset.y;
                            break;
                        case "e":
                            isNaN(n.offset) || (n.offset = {
                                x: n.offset,
                                y: 0
                            }), u.top -= v.outerHeight() / 2 - i / 2 - n.offset.y, u.left += e + n.offset.x, f.x = e / 2 - v.outerWidth() / 2 + n.offset.x, f.y = -n.offset.y;
                            break;
                        case "c":
                            isNaN(n.offset) || (n.offset = {
                                x: 0,
                                y: n.offset
                            }), u.top -= v.outerHeight() / 2 - i / 2 - n.offset.y, u.left += (e - v.outerWidth()) / 2 + n.offset.x, f.x = n.offset.x, f.y = n.offset.y
                    }
                    scrolltopos = {
                        x: Math.max(0, s - (_ * H / 2 - e / 2) + f.x),
                        y: Math.max(0, o - (D * H / 2 - i / 2) + f.y)
                    }, T && T.exposeElement && !n.isArea && T.exposeElement.css(T.exposeElement.data("jTour")).removeData("jTour").removeClass(E + "exposed"), d(scrolltopos.x, scrolltopos.y, I.scrollDuration, function () {
                        y.removeAttr("class").addClass(E + "arrow " + n.position), n.steps ? (k = [], $.each(n.steps, function (e) {
                            k.push(e)
                        }), L = function (e) {
                            n.onStep.call(R, r, e);
                            var t = k.length;
                            if (t) for (var i = 0; i < t; i++) e >= k[i] && (n.steps[k[i]].call(R, r), k.shift())
                        }) : L = function (e) {
                            n.onStep.call(R, r, e)
                        }, I.showControls && (0 == t ? b.find("a.prev").hide() : t == N - 1 ? b.find("a.next").hide() : b.find("a.next, a.prev").show()), n.onBeforeShow.call(R, r), g.clearQueue().stop().css({
                            width: $.browser.opera ? "1%" : "0%"
                        }), u["min-width"] = v.width();
                        if (n.expose && r != S) {
                            var e = {
                                position: r.css("position"),
                                zIndex: r.css("zIndex")
                            }, i = {
                                position: "relative",
                                zIndex: P + 1
                            };
                            n.exposeElement = n.exposeElement || r, "object" == typeof n.expose && $.each(n.expose, function (t, n) {
                                e[t] = r.css(t), i[t] = n
                            }), n.exposeElement.data("jTour", e).css(i).addClass(E + "exposed")
                        }
                        T ? T.overlayOpacity != n.overlayOpacity && w.fadeTo(2 * n.delayIn, n.overlayOpacity) : w.css({
                            opacity: n.overlayOpacity
                        }), v.css(u).attr("class", B + " step-" + t)[n.animationIn](n.delayIn, function () {
                            busy = !1, n.onShow.call(R, r), T = n, I.autoplay && !A && (manualskip = !1, g.stop().animate({
                                width: "100%"
                            }, {
                                duration: n.live * (1 / I.speed),
                                easing: "linear",
                                step: L,
                                complete: a
                            }))
                        })
                    })
                }, n.wait)
            })
        } else console && r && console.log('Element $("' + r.selector + "\") doesn't exist!"), N--, a()
    }
    function c() {
        T && (T.onBeforeHide.call(R, T.element), g.clearQueue().stop(), v.stop(), v[T.animationOut](T.delayOut, function () {
            m.empty(), T.onHide.call(R, T.element), T = null
        }))
    }
    function h(e) {
        I.speed = Math.max(.1, I.speed + e), busy || (o(null, !1), u(!1))
    }
    function p(e, t, n, r) {
        "object" == typeof e && (r = $.isFunction(t) ? t : $.isFunction(n) ? n : !1, n = isNaN(t) ? 0 : t, t = e.offset().top, e = e.offset().left), $.isFunction(n) && (r = n, n = !1);
        var i = {};
        null != e && (i.left = e), null != t && (i.top = t), v.animate(i, {
            duration: !1 === n ? 0 : n,
            complete: r && function () {
                r.call(R)
            }
        })
    }
    function d(e, t, n, r) {
        S.scrollTop() == t && S.scrollLeft() == e && (n = 1);
        var i = {};
        $.each(I.axis, function (n, r) {
            i[j[r]] = "x" == r ? e : t
        }), S.animate(i, {
            duration: n || I.scrollDuration,
            complete: r && function () {
                r.call(R)
            },
            queue: !0,
            easing: I.easing
        })
    }
    if (this === window) return new jTour(e, t);
    if ("function" != typeof jQuery || 171 > jQuery.fn.jquery.replace(/\./g, "")) return alert("jQuery >=1.7.1 is required for jTour!"), !1;
    $.isArray(e) || $.error("tourdata must be a valid array");
    var v, m, g, y, b, w, E = "jTour_",
        S = $.browser.webkit ? $("body") : $("html"),
        x = 0,
        T, N = e.length,
        C, k, L, A = manualskip = busy = !1,
        O, M, _, D, P = 2e4,
        H = 2.5,
        B, j = {
            x: "scrollLeft",
            y: "scrollTop"
        }, F = {
            speed: 1,
            axis: "xy",
            autostart: !1,
            autoplay: !0,
            pauseOnHover: !0,
            keyboardNav: !0,
            showProgress: !0,
            showControls: !0,
            scrollBack: !1,
            scrollDuration: 300,
            easing: "swing",
            onStart: function () {},
            onStop: function () {},
            onPause: function () {},
            onPlay: function () {},
            onChange: function () {},
            onFinish: function () {},
            position: "c",
            live: "auto",
            offset: 0,
            wait: 0,
            expose: !1,
            overlayOpacity: .2,
            delayIn: 200,
            delayOut: 100,
            animationIn: "fadeIn",
            animationOut: "fadeOut",
            onBeforeShow: function () {},
            onShow: function () {},
            onBeforeHide: function () {},
            onHide: function () {},
            onStep: function () {}
        };
    "boolean" != typeof rx && (F = {});
    var I = $.extend({}, F, t),
        q = {
            position: I.position,
            live: I.live,
            offset: I.offset,
            wait: I.wait,
            expose: I.expose,
            overlayOpacity: I.overlayOpacity,
            delayIn: I.delayIn,
            delayOut: I.delayOut,
            animationIn: I.animationIn,
            animationOut: I.animationOut,
            onBeforeShow: I.onBeforeShow,
            onShow: I.onShow,
            onBeforeHide: I.onBeforeHide,
            onHide: I.onHide,
            onStep: I.onStep,
            element: S,
            goTo: null
        }, R = {
            start: function (e) {
                i(e)
            },
            restart: function (e) {
                c(), x = e || 0, i(e)
            },
            pause: function (e) {
                manualskip = !0, o(e)
            },
            play: function () {
                manualskip = !1, u()
            },
            stop: function () {
                s()
            },
            next: function () {
                a()
            },
            prev: function () {
                f()
            },
            faster: function (e) {
                h(e || .25)
            },
            slower: function (e) {
                h(e || -0.25)
            },
            moveTo: function (e, t, n, r) {
                p(e, t, n, r)
            },
            offset: function (e, t, n, r) {
                p("+=" + e, "+=" + t, n, r)
            },
            scroll: function (e, t, n, r) {
                d(e, t, n, r)
            }
        };
    return R.box = R.content = R.overlay = null, R.tourdata = e,
    function () {
        v = $("<div/>", {
            "class": E + "box"
        }).hide().appendTo("body"), y = $("<div/>", {
            "class": E + "arrow"
        }).appendTo(v), m = $("<div/>", {
            "class": E + "content"
        }).appendTo(v), $("<div/>", {
            "class": E + "progress"
        }).html('<div class="' + E + 'progress_bar"></div>').appendTo(v), g = v.find("." + E + "progress_bar"), I.showControls && (b = $("<ul/>", {
            "class": E + "nav"
        }).html('<li><a class="' + E + 'nav_btn prev" title="previous" data-role="prev">&nbsp;</a></li><li><a class="' + E + 'nav_btn play" title="play" data-role="play">&nbsp;</a></li><li><a class="' + E + 'nav_btn pause" title="pause" data-role="pause">&nbsp;</a></li><li><a class="' + E + 'nav_btn stop" title="stop" data-role="stop">&nbsp;</a></li><li><a class="' + E + 'nav_btn next" title="next" data-role="next">&nbsp;</a></li><li><a class="' + E + 'nav_btn slower" title="slower" data-role="slower">&nbsp;</a></li><li><a class="' + E + 'nav_btn faster" title="faster" data-role="faster">&nbsp;</a></li>').appendTo(v).delegate("a", "click.jTour", function () {
            manualskip = !0;
            switch ($(this).data("role")) {
                case "next":
                    a();
                    break;
                case "prev":
                    f();
                    break;
                case "slower":
                    manualskip = !1, h(-0.25);
                    break;
                case "faster":
                    manualskip = !1, h(.25);
                    break;
                case "pause":
                    o();
                    break;
                case "play":
                    manualskip = !1, u(), v.trigger("mouseleave");
                    break;
                case "stop":
                    s()
            }
        }), v.addClass("has-controls")), w = $("<div/>", {
            "class": E + "overlay"
        }).css("opacity", I.overlayOpacity).hide(), I.showProgress || v.find("." + E + "progress").hide(), !1 !== I.overlayOpacity ? w.appendTo("body").css("height", $(document).height()) : w.remove(), B = v.attr("class"), $(window).unbind("resize.jTour").bind("resize.jTour", n).resize(), R.box = v, R.content = m, R.overlay = w, I.axis = I.axis.split("");
        if (location.hash) {
            var e = location.hash.split("=");
            if (e[0].match(/jTour/)) return location.hash = "", i(parseInt(e[1], 10)), !1
        }
        I.autostart && i()
    }(), R
}, $.fn.teletype = function (e) {
    var t = this,
        n = {
            animDelay: 80
        }, r = $.extend(n, e);
    $.each(r.text, function (e, n) {
        setTimeout(function () {
            t.is("input") ? t.val(t.val() + n) : t.html(t.html() + n)
        }, r.animDelay * e)
    })
};
var tour_settings = {
    axis: "y",
    animationIn: "slideDown",
    animationOut: "hide",
    easing: "easeInOutExpo",
    scrollDuration: 600
};
! function (e) {
    "use strict";
    var t = function (t, n) {
        this.options = n, this.$element = e(t), this.$container = e('<div id="ms-' + this.$element.attr("id") + '" class="ms-container"></div>'), this.$selectableContainer = e('<div class="ms-selectable"></div>'), this.$selectionContainer = e('<div class="ms-selection"></div>'), this.$selectableUl = e('<ul class="ms-list"></ul>'), this.$selectionUl = e('<ul class="ms-list"></ul>'), this.scrollTo = 0
    };
    t.prototype = {
        constructor: t,
        init: function () {
            var t = this,
                n = this.$element;
            if (n.next(".ms-container").length == 0) {
                n.css({
                    position: "absolute",
                    left: "-9999px"
                }), n.attr("id", n.attr("id") ? n.attr("id") : "ms-" + Math.ceil(Math.random() * 1e3));
                var r = null,
                    i = null,
                    s = 0,
                    o = 0,
                    u = '<li class="ms-optgroup-container"></li>',
                    a = '<ul class="ms-optgroup"></ul>',
                    f = '<li class="ms-optgroup-label"><span></span></li>';
                n.find("optgroup, option").each(function () {
                    if (e(this).is("optgroup")) {
                        r = "<span>" + e(this).attr("label") + "</span>", i = "ms-" + n.attr("id") + "-optgroup-" + s;
                        var o = e(this),
                            l = e(u),
                            c = e(u),
                            h = e(f),
                            p = e(f);
                        t.options.selectableOptgroup && (p.on("click", function () {
                            var n = o.children(":not(:selected)").map(function () {
                                return e(this).val()
                            }).get();
                            t.select(n)
                        }), h.on("click", function () {
                            var n = o.children(":selected").map(function () {
                                return e(this).val()
                            }).get();
                            t.deselect(n)
                        })), p.html(r), l.attr("id", i + "-selectable").append(e(a).append(p)), t.$selectableUl.append(l), h.html(r), c.attr("id", i + "-selection").append(e(a).append(h)), t.$selectionUl.append(c), s++
                    } else {
                        var d = "";
                        for (var v = 0; v < this.attributes.length; v++) {
                            var m = this.attributes[v];
                            t.isDomNode(m.name) && (d += m.name + '="' + m.value + '" ')
                        }
                        var g = e("<li " + d + "><span>" + e(this).text() + "</span></li>"),
                            y = e("<li " + d + '><span class="ui-icon ui-icon-arrowthick-2-n-s"></span><span>' + e(this).text() + "</span></li>"),
                            b = e(this).val();
                        g.addClass("ms-elem-selectable").attr("id", b + "-selectable"), y.addClass("ui-state-default ms-elem-selection").attr("id", b + "-selection").hide(), t.$selectionUl.find(".ms-optgroup-label").hide();
                        if (e(this).prop("disabled") || n.prop("disabled")) g.prop("disabled", !0), g.addClass(t.options.disabledClass);
                        i ? (t.$selectableUl.children("#" + i + "-selectable").find("ul").first().append(g), t.$selectionUl.children("#" + i + "-selection").find("ul").first().append(y)) : (t.$selectableUl.append(g), t.$selectionUl.append(y))
                    }
                }), t.options.selectableHeader && t.$selectableContainer.append(t.options.selectableHeader), t.$selectableContainer.append(t.$selectableUl), t.options.selectionHeader && t.$selectionContainer.append(t.options.selectionHeader), this.$selectionContainer.append(t.$selectionUl), t.$container.append(t.$selectableContainer), t.$container.append(t.$selectionContainer), n.after(t.$container), t.$selectableUl.on("mouseenter", ".ms-elem-selectable", function () {
                    e("li", t.$container).removeClass("ms-hover"), e(this).addClass("ms-hover")
                }).on("mouseleave", function () {
                    e("li", t.$container).removeClass("ms-hover")
                }), t.options.dblClick ? (t.$selectableUl.on("dblclick", ".ms-elem-selectable", function () {
                    t.select(e(this).attr("id").replace(/-selectable/, ""))
                }), t.$selectionUl.on("dblclick", ".ms-elem-selection", function () {
                    t.deselect(e(this).attr("id").replace(/-selection/, ""))
                })) : (t.$selectableUl.on("click", ".ms-elem-selectable", function () {
                    t.select(e(this).attr("id").replace(/-selectable/, ""))
                }), t.$selectionUl.on("click", ".ms-elem-selection", function () {
                    t.deselect(e(this).attr("id").replace(/-selection/, ""))
                })), t.$selectionUl.on("mouseenter", ".ms-elem-selection", function () {
                    e("li", t.$selectionUl).removeClass("ms-hover"), e(this).addClass("ms-hover")
                }).on("mouseleave", function () {
                    e("li", t.$selectionUl).removeClass("ms-hover")
                }), t.$selectableUl.on("focusin", function () {
                    e(this).addClass("ms-focus"), t.$selectionUl.focusout()
                }).on("focusout", function () {
                    e(this).removeClass("ms-focus"), e("li", t.$container).removeClass("ms-hover")
                }), t.$selectionUl.on("focusin", function () {
                    e(this).addClass("ms-focus")
                }).on("focusout", function () {
                    e(this).removeClass("ms-focus"), e("li", t.$container).removeClass("ms-hover")
                }), n.on("focusin", function () {
                    n.focusout(), t.$selectableUl.focusin()
                }).on("focusout", function () {
                    t.$selectableUl.removeClass("ms-focus"), t.$selectionUl.removeClass("ms-focus")
                }), n.onKeyDown = function (e, n) {
                    var r = t.$container.find("." + n).find(".ms-list"),
                        i = r.find("li:visible:not(.ms-optgroup-label, .ms-optgroup-container)"),
                        s = i.length,
                        o = r.find("li.ms-hover"),
                        u = o.length > 0 ? i.index(o) : -1,
                        a = r.innerHeight(),
                        f = i.first().outerHeight(!0),
                        l = Math.floor(a / f);
                    if (e.keyCode == 32) {
                        if (o.length > 0) {
                            var c = n == "ms-selectable" ? "select" : "deselect";
                            n == "ms-selectable" ? t.select(o.attr("id").replace("-selectable", "")) : t.deselect(o.attr("id").replace("-selection", "")), i.removeClass("ms-hover"), t.scrollTo = 0, r.scrollTop(t.scrollTo)
                        }
                    } else if (e.keyCode == 40) {
                        if (i.length > 0) {
                            var h = u + 1,
                                p = s != h ? i.eq(h) : i.first(),
                                d = r.position().top,
                                v = p.position().top;
                            i.removeClass("ms-hover"), p.addClass("ms-hover"), s == h ? t.scrollTo = 0 : v >= d + l * f && (t.scrollTo += f), r.scrollTop(t.scrollTo)
                        }
                    } else if (e.keyCode == 38) {
                        if (i.length > 0) {
                            var m = Math.max(u - 1, -1),
                                g = i.eq(m),
                                d = r.position().top,
                                y = g.position().top;
                            i.removeClass("ms-hover"), g.addClass("ms-hover"), y <= d ? t.scrollTo -= f : m < 0 && (t.scrollTo = (s - l) * f), r.scrollTop(t.scrollTo)
                        }
                    } else if (e.keyCode == 37 || e.keyCode == 39) t.$selectableUl.hasClass("ms-focus") ? (t.$selectableUl.focusout(), t.$selectionUl.focusin()) : (t.$selectableUl.focusin(), t.$selectionUl.focusout())
                }, n.on("keydown", function (e) {
                    if (n.is(":focus")) {
                        var r = t.$selectableUl.hasClass("ms-focus") ? "ms-selectable" : "ms-selection";
                        n.onKeyDown(e, r)
                    }
                })
            }
            var l = n.find("option:selected").map(function () {
                return e(this).val()
            }).get();
            t.select(l, "init"), typeof t.options.afterInit == "function" && t.options.afterInit.call(this, this.$container)
        },
        refresh: function () {
            e("#ms-" + this.$element.attr("id")).remove(), this.init(this.options)
        },
        select: function (t, n) {
            typeof t == "string" && (t = [t]);
            var r = this,
                i = this.$element,
                s = this.$selectableUl.find("#" + t.join("-selectable, #") + "-selectable").filter(":not(." + r.options.disabledClass + ")"),
                o = this.$selectionUl.find("#" + t.join("-selection, #") + "-selection"),
                u = i.find("option").filter(function (n) {
                    return e.inArray(this.value, t) > -1
                });
            if (s.length > 0) {
                s.addClass("ms-selected").hide(), o.addClass("ms-selected").show(), u.prop("selected", !0);
                var a = r.$selectableUl.children(".ms-optgroup-container");
                if (a.length > 0) {
                    a.each(function () {
                        var t = e(this).find(".ms-elem-selectable");
                        t.length == t.filter(".ms-selected").length && e(this).find(".ms-optgroup-label").hide()
                    });
                    var f = r.$selectionUl.children(".ms-optgroup-container");
                    f.each(function () {
                        var t = e(this).find(".ms-elem-selection");
                        t.filter(".ms-selected").length > 0 && e(this).find(".ms-optgroup-label").show()
                    })
                }
                n != "init" && (r.$selectionUl.focusout(), r.$selectableUl.focusin(), i.trigger("change"), typeof r.options.afterSelect == "function" && r.options.afterSelect.call(this, t))
            }
        },
        deselect: function (t) {
            typeof t == "string" && (t = [t]);
            var n = this,
                r = this.$element,
                i = this.$selectableUl.find("#" + t.join("-selectable, #") + "-selectable"),
                s = this.$selectionUl.find("#" + t.join("-selection, #") + "-selection").filter(".ms-selected"),
                o = r.find("option").filter(function (n) {
                    return e.inArray(this.value, t) > -1
                });
            if (s.length > 0) {
                i.removeClass("ms-selected").show(), s.removeClass("ms-selected").hide(), o.prop("selected", !1);
                var u = n.$selectableUl.children(".ms-optgroup-container");
                if (u.length > 0) {
                    u.each(function () {
                        var t = e(this).find(".ms-elem-selectable");
                        t.filter(":not(.ms-selected)").length > 0 && e(this).find(".ms-optgroup-label").show()
                    });
                    var a = n.$selectionUl.children(".ms-optgroup-container");
                    a.each(function () {
                        var t = e(this).find(".ms-elem-selection");
                        t.filter(".ms-selected").length == 0 && e(this).find(".ms-optgroup-label").hide()
                    })
                }
                this.$selectableUl.focusout(), this.$selectionUl.focusin(), r.trigger("change"), typeof n.options.afterDeselect == "function" && n.options.afterDeselect.call(this, t)
            }
        },
        select_all: function () {
            var e = this.$element;
            e.find("option").prop("selected", !0), this.$selectableUl.find(".ms-elem-selectable").addClass("ms-selected").hide(), this.$selectionUl.find(".ms-optgroup-label").show(), this.$selectableUl.find(".ms-optgroup-label").hide(), this.$selectionUl.find(".ms-elem-selection").addClass("ms-selected").show(), this.$selectionUl.focusin(), this.$selectableUl.focusout(), e.trigger("change")
        },
        deselect_all: function () {
            var e = this.$element;
            e.find("option").prop("selected", !1), this.$selectableUl.find(".ms-elem-selectable").removeClass("ms-selected").show(), this.$selectionUl.find(".ms-optgroup-label").hide(), this.$selectableUl.find(".ms-optgroup-label").show(), this.$selectionUl.find(".ms-elem-selection").removeClass("ms-selected").hide(), this.$selectableUl.focusin(), this.$selectionUl.focusout(), e.trigger("change")
        },
        isDomNode: function (e) {
            return e && typeof e == "object" && typeof e.nodeType == "number" && typeof e.nodeName == "string"
        }
    }, e.fn.multiSelect = function () {
        var n = arguments[0],
            r = arguments;
        return this.each(function () {
            var i = e(this),
                s = i.data("multiselect"),
                o = e.extend({}, e.fn.multiSelect.defaults, i.data(), typeof n == "object" && n);
            s || i.data("multiselect", s = new t(this, o)), typeof n == "string" ? s[n](r[1]) : s.init()
        })
    }, e.fn.multiSelect.defaults = {
        selectableOptgroup: !1,
        disabledClass: "disabled",
        dblClick: !1
    }, e.fn.multiSelect.Constructor = t
}(window.jQuery), Array.prototype.clean = function () {
    for (var e = 0; e < this.length; e++) if (this[e] == "" || this[e] == null || this[e] == undefined) this.splice(e, 1), e--;
    return this
},
$(document).ready(function () {
    function r(e, t) {
        $(".sortable-schema").val(""), $.map($(".ms-selection li.ms-selected"), function (e) {
            return tmp_result = $(".sortable-schema").val() + "," + $(e).attr("id").replace(/-selection/i, ""), $(".sortable-schema").val(tmp_result.replace(/^\,|\,$/g, "")), $(".sortable-schema").val(tmp_result.replace(/^\,|\,$/g, ""))
        })
    }
    $(".summary-btn").live("click", function () {
        $(".loading-summary").show()
    }), $(".status-counter .pad a").live("click", function () {
        $(".loading-listing").show()
    }), $(document).live("click", function (e) {
        $(".popover").length > 0 && e.stopImmediatePropagation()
    }), $(".delete-invoice-client").live("click", function () {
        return $(this).parents(".invoice-client-item").first().remove(), !1
    });
    var e = function (e, t) {
        summary_url = $(".listing-summary-content").attr("data-url"), timeline_colors || (timeline_colors = ["orange", "red", "blue", "purple"]), hideColumns = $.map($(".summary-cb:not(:checked)"), function (e, t) {
            return Number($(e).val())
        }), chartz.gTimeLine($(".listing-summary-content"), {
            url: summary_url,
            chart: t,
            draw: {
                allowRedraw: !0,
                legendPosition: "sameRow",
                displayZoomButtons: !0,
                fill: 4,
                colors: timeline_colors,
                displayZoomButtons: !0,
                hideColumns: hideColumns,
                displayAnnotationsFilter: !0
            },
            title: ""
        })
    };
    if ($(".listing-summary-content")[0] != null) {
        chartz.load(google);
        var t = new chartz.widget.visualization.AnnotatedTimeLine($(".listing-summary-content")[0]);
        $(".summary-cb").live("click", function () {
            $(this).is(":checked") ? t.showDataColumns($(this).val()) : t.hideDataColumns($(this).val())
        }), e("paid", t)
    }
    var n = ["member_id", "invoice_id", "full_name", "quantity", "title", "price", "invoice_type"];
    $(".import-schema-fields").multiSelect({
        selectableHeader: "<div class='custom-header'>Available Header</div>",
        selectionHeader: "<div class='custom-header'>Selected Header</div>",
        dblClick: !0,
        afterSelect: function (e, t) {
            r(e, t)
        },
        afterDeselect: function (e, t) {
            if ($.inArray(e, n) > -1) return alert("You should not delete, " + e + ", it is required!"), !1;
            r(null, null)
        }
    }), $(".ms-selection .ms-list").sortable({
        stop: r
    }), $(".import-all-fields").click(function () {
        return $(".import-schema-fields").multiSelect("select_all"), !2
    }), $(".unimport-all-fields").click(function () {
        return $(".import-schema-fields").multiSelect("deselect_all"), !1
    });
    if (window.location.search.match(/virtual_tour=true/i)) {
        var i = window.location.pathname.split(/\//).clean()[0].singularize(),
            s = window.location.pathname.split(/\//).clean()[1];
        window.location.search.match(/task=import/i) ? start_tutorial(i + ".import") : s === "new" && (i === "transaction" && !window.location.search.match(/token|code/i) ? start_tutorial(i + ".new") : start_tutorial(i + ".create"))
    }
    $("#plans a.more_plan").live("click", function (e) {
        return $(this).html().match(/show/i) ? (console.log($(this).parents("ul").find("li.not_shown")), $(this).parents("ul").find("li.not_shown").slideDown("slow"), $(this).html("Hide Features")) : ($(this).parents("ul").find("li.not_shown").slideUp("slow"), $(this).html("Show More")), !1
    }), $("#plans li.dropdown").live("click", function () {
        $(this).parents("ul").hasClass("active") ? ($(this).parents("ul").removeClass("active"), $(this).parents("ul").find("li.dropdown").removeClass("selected"), $(this).addClass("selected"), $(this).parents(".pricingtable").find(".recurring_field").val($(this).attr("data-object")), $(this).parents("ul").find("li.dropdown").not(".selected").slideUp("slow")) : ($(this).parents("ul").addClass("active"), $(this).parents("ul").find("li.dropdown").slideDown("slow"))
    })

    $(window).ready(function () {
        $(".sortable-schema").val(""), $.map($(".ms-selection li.ms-selected"), function (e) {
            return tmp_result = $(".sortable-schema").val() + "," + $(e).attr("id").replace(/-selection/i, ""), $(".sortable-schema").val(tmp_result.replace(/^\,|\,$/g, "")), $(".sortable-schema").val(tmp_result.replace(/^\,|\,$/g, ""))
        })
    });
    $(".import-all-fields").click(function () {
        $(".sortable-schema").val(""), $.map($(".ms-selection li.ms-selected"), function (e) {
            return tmp_result = $(".sortable-schema").val() + "," + $(e).attr("id").replace(/-selection/i, ""), $(".sortable-schema").val(tmp_result.replace(/^\,|\,$/g, "")), $(".sortable-schema").val(tmp_result.replace(/^\,|\,$/g, ""))
        })
    });
    $(".unimport-all-fields").click(function () {
        $(".sortable-schema").val("");
    })
});