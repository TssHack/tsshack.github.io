(() => {
  "use strict";
  var e = {
    9149: (e, t, r) => {
      r.r(t), r.d(t, { default: () => V });
      var n = r(5004),
        o = r(5222),
        a = r(7573),
        i = r(9385),
        s = r(1054),
        l = r(5288),
        c = r(5722),
        d = r(3287),
        u = r(6792),
        f = r(1318),
        p = r(9514),
        h = r(2629),
        g = u.default.create({
          container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
          },
          title: { fontSize: 30, marginTop: "10px", fontWeight: "bold" },
          subtitle: { fontSize: 20, marginTop: "8px", color: "#666" },
          buttonContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          },
          button: {
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            borderRadius: 20,
            backgroundColor: "#ddd",
            marginHorizontal: 10,
          },
          buttonText: { fontSize: 20, marginLeft: 10 },
          footer: { position: "absolute", bottom: 10 },
          profileImage: { width: 40, height: 40, borderRadius: 25, marginRight: 2 },
          appLogo: { width: 70, height: 70, borderRadius: 25, marginRight: 2 },
        });
      const y = function () {
        var e = (0, f.useNavigation)();
        return (0, h.jsxs)(i.default, {
          style: g.container,
          children: [
            (0, h.jsx)(d.default, { source: r(7270), style: g.appLogo }),
            (0, h.jsx)(s.default, { style: g.title, children: "ChatGPT" }),
            (0, h.jsx)(s.default, {
              style: g.subtitle,
              children: "open source chatbot app",
            }),
            (0, h.jsxs)(i.default, {
              style: g.buttonContainer,
              children: [
                (0, h.jsxs)(l.default, {
                  style: g.button,
                  onPress: function () {
                    return e.navigate("Chat");
                  },
                  children: [
                    (0, h.jsx)(p.default, { name: "comments", size: 20, color: "#000" }),
                    (0, h.jsx)(s.default, {
                      style: g.buttonText,
                      children: "ChatGPT",
                    }),
                  ],
                }),
                (0, h.jsxs)(l.default, {
                  style: g.button,
                  onPress: function () {
                    return e.navigate("DarkGPT");
                  },
                  children: [
                    (0, h.jsx)(p.default, { name: "bug", size: 20, color: "#000" }),
                    (0, h.jsx)(s.default, {
                      style: g.buttonText,
                      children: "DarkGPT",
                    }),
                  ],
                }),
              ],
            }),
            (0, h.jsx)(i.default, {
              style: g.buttonContainer,
              children: (0, h.jsxs)(l.default, {
                style: g.button,
                onPress: function () {
                  return e.navigate("Sam Alie");
                },
                children: [
                  (0, h.jsx)(d.default, { source: r(8756), style: g.profileImage }),
                  (0, h.jsx)(s.default, {
                    style: g.buttonText,
                    children: "Sam Alie",
                  }),
                ],
              }),
            }),
            (0, h.jsxs)(i.default, {
              style: g.buttonContainer,
              children: [
                (0, h.jsxs)(l.default, {
                  style: g.button,
                  onPress: function () {
                    return c.default.openURL("https://myket.ir/app");
                  },
                  children: [
                    (0, h.jsx)(p.default, { name: "android", size: 20, color: "#000" }),
                    (0, h.jsx)(s.default, {
                      style: g.buttonText,
                      children: "Android App",
                    }),
                  ],
                }),
                (0, h.jsxs)(l.default, {
                  style: g.button,
                  onPress: function () {
                    return c.default.openURL("https://myket.ir/app");
                  },
                  children: [
                    (0, h.jsx)(p.default, { name: "android", size: 20, color: "#000" }),
                    (0, h.jsx)(s.default, {
                      style: g.buttonText,
                      children: "sam Alie App",
                    }),
                  ],
                }),
              ],
            }),
            (0, h.jsxs)(i.default, {
              style: g.buttonContainer,
              children: [
                (0, h.jsxs)(l.default, {
                  style: g.button,
                  onPress: function () {
                    return e.navigate("API");
                  },
                  children: [
                    (0, h.jsx)(p.default, { name: "code", size: 20, color: "#000" }),
                    (0, h.jsx)(s.default, {
                      style: g.buttonText,
                      children: "API Docs",
                    }),
                  ],
                }),
                (0, h.jsxs)(l.default, {
                  style: g.button,
                  onPress: function () {
                    return c.default.openURL("https://github.com/TssHack");
                  },
                  children: [
                    (0, h.jsx)(p.default, { name: "github", size: 20, color: "#000" }),
                    (0, h.jsx)(s.default, {
                      style: g.buttonText,
                      children: "Github Page",
                    }),
                  ],
                }),
              ],
            }),
            (0, h.jsx)(i.default, {
              style: g.buttonContainer,
              children: (0, h.jsxs)(l.default, {
                style: g.button,
                onPress: function () {
                  return c.default.openURL("https://t.me/devehsan");
                },
                children: [
                  (0, h.jsx)(p.default, { name: "telegram", size: 20, color: "#000" }),
                  (0, h.jsx)(s.default, {
                    style: g.buttonText,
                    children: "Telegram Contact",
                  }),
                ],
              }),
            }),
            (0, h.jsx)(s.default, {
              style: g.footer,
              children: "Developer: ehsan fazli",
            }),
          ],
        });
      };
      var m = r(4942),
        b = r(5861),
        j = r(885),
        x = r(229),
        v = r(5306),
        O = r(8352),
        C = r(4472),
        S = r.n(C);
      function P(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? P(Object(r), !0).forEach(function (t) {
                (0, m.default)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : P(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function T() {
        var e = (0, n.useState)([]),
          t = (0, j.default)(e, 2),
          o = t[0],
          a = t[1],
          s = (0, n.useState)(!1),
          c = (0, j.default)(s, 2),
          u = c[0],
          f = c[1];
        (0, n.useEffect)(function () {
          p();
        }, []),
          (0, n.useEffect)(function () {
            g(o);
          }, [o]);
        var p = function () {
            var e = (0, b.default)(function* () {
              try {
                var e = yield S().getItem("messages");
                null !== e && a(e);
              } catch (t) {
                console.error("Failed to retrieve messages", t);
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          }(),
          g = function () {
            var e = (0, b.default)(function* (e) {
              try {
                yield S().setItem("messages", e);
              } catch (t) {
                console.error("Failed to store messages", t);
              }
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          }(),
          y = function () {
            var e = (0, b.default)(function* () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
              if ("" !== e[0].text.trim()) {
                f(!0), a(function (t) {
                  return v.GiftedChat.append(t, e);
                });
                try {
                  var t = yield fetch(
                    `https://req.wiki-api.ir/apis-2/ChatGPT4?q=${encodeURIComponent(
                      e[0].text
                    )}`,
                    {
                      method: "GET",
                      headers: {
                        "Content-Type": "application/json; charset=UTF-8",
                      },
                    }
                  );
                  if (!t.ok) throw new Error("Failed to get response from chatbot");
                  var n = yield t.json(),
                    o = {
                      _id: Math.random().toString(36).substring(7),
                      text: n.results, // دریافت پاسخ از پارامتر results
                      createdAt: new Date().toISOString(),
                      user: {
                        _id: 2,
                        name: "ChatGPT",
                        avatar: r(7270),
                      },
                    };
                  f(!1), a(function (e) {
                    return v.GiftedChat.append(e, o);
                  });
                } catch (s) {
                  f(!1), alert("Error: " + s.message);
                  var i = {
                    _id: Math.random().toString(36).substring(7),
                    text: "Failed to send message. Please try again.",
                    createdAt: new Date().toISOString(),
                    user: {
                      _id: 2,
                      name: "ChatGPT",
                      avatar: r(7270),
                    },
                  };
                  a(function (e) {
                    return v.GiftedChat.append(e, i);
                  });
                }
              } else alert("Message cannot be empty");
            });
            return function () {
              return e.apply(this, arguments);
            };
          };
        return (0, h.jsxs)(i.default, {
          style: [I.container, { backgroundColor: "#fff" }],
          children: [
            (0, h.jsxs)(i.default, {
              style: I.header,
              children: [
                (0, h.jsx)(d.default, { source: r(7270), style: I.profileImage }),
                (0, h.jsx)(i.default, {
                  style: { flexDirection: "row", alignItems: "center" },
                  children: (0, h.jsx)(l.default, {
                    onPress: function () {
                      if (window.confirm("Are you sure you want to delete this chat?"))
                        try {
                          S()
                            .removeItem("messages")
                            .then(function () {
                              a([]);
                            })
                            .catch(function (e) {
                              console.error("Failed to delete chat", e);
                            });
                        } catch (e) {
                          console.error("Failed to delete chat", e);
                        }
                    },
                    children: (0, h.jsx)(O.default, {
                      name: "trash-outline",
                      size: 24,
                      color: "#000",
                    }),
                  }),
                }),
              ],
            }),
            (0, h.jsx)(v.GiftedChat, {
              messages: o,
              onSend: function (e) {
                return y(e);
              },
              user: { _id: 1 },
              renderBubble: function (e) {
                return (0, h.jsx)(v.Bubble, w(w({}, e), {}, {
                  wrapperStyle: { right: { backgroundColor: "#000" } },
                  textStyle: { right: { color: "#fff" } },
                  timeTextStyle: { right: { color: "rgba(255,255,255,0.5)" } },
                }));
              },
              renderSend: u
                ? function (e) {
                    return (0, h.jsx)(v.Send, w(w({}, e), {}, {
                      children: (0, h.jsx)(i.default, {
                        style: I.sendingContainer,
                        children: (0, h.jsx)(x.default, {
                          size: "small",
                          color: "#007aff",
                        }),
                      }),
                    }));
                  }
                : null,
              renderLoading: function () {
                return (0, h.jsx)(i.default, {
                  style: I.loadingContainer,
                  children: (0, h.jsx)(x.default, { size: "large", color: "#007aff" }),
                });
              },
              renderTime: function (e) {
                return (0, h.jsx)(v.Time, w(w({}, e), {}, {
                  timeTextStyle: { left: { color: "grey" }, right: { color: "grey" } },
                  format: "HH:mm",
                }));
              },
              renderInputToolbar: function (e) {
                return (0, h.jsx)(v.InputToolbar, w(w({}, e), {}, {
                  containerStyle: {
                    backgroundColor: "#fff",
                    borderTopColor: "#000",
                    borderTopWidth: 1,
                  },
                }));
              },
              renderComposer: function (e) {
                return (0, h.jsx)(v.Composer, w(w({}, e), {}, {
                  textInputStyle: {
                    color: "#000",
                    backgroundColor: "#f0f0f0",
                    paddingTop: 12,
                    paddingBottom: 12,
                    paddingHorizontal: 12,
                    marginLeft: 0,
                  },
                }));
              },
            }),
          ],
        });
      }
      var I = u.default.create({
        container: { flex: 1 },
        header: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
        },
        loadingContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
        sendingContainer: { justifyContent: "center", alignItems: "center" },
        profileImage: { width: 25, height: 25, borderRadius: 25, marginRight: 2 },
      });
      function k(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? k(Object(r), !0).forEach(function (t) {
                (0, m.default)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : k(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function G() {
        var e = (0, n.useState)([]),
          t = (0, j.default)(e, 2),
          o = t[0],
          a = t[1],
          s = (0, n.useState)(!1),
          c = (0, j.default)(s, 2),
          u = c[0],
          f = c[1];
        (0, n.useEffect)(function () {
          p();
        }, []),
          (0, n.useEffect)(function () {
            g(o);
          }, [o]);
        var p = function () {
            var e = (0, b.default)(function* () {
              try {
                var e = yield S().getItem("darkmessages");
                null !== e && a(e);
              } catch (t) {
                console.error("Failed to retrieve messages", t);
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          }(),
          g = function () {
            var e = (0, b.default)(function* (e) {
              try {
                yield S().setItem("darkmessages", e);
              } catch (t) {
                console.error("Failed to store messages", t);
              }
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          }(),
          y = function () {
            var e = (0, b.default)(function* () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
              if ("" !== e[0].text.trim()) {
                f(!0), a(function (t) {
                  return v.GiftedChat.append(t, e);
                });
                try {
                  var t = yield fetch(
                    `https://req.wiki-api.ir/apis-2/ChatGPT4?q=${encodeURIComponent(
                      e[0].text
                    )}`,
                    {
                      method: "GET",
                      headers: {
                        "Content-Type": "application/json; charset=UTF-8",
                      },
                    }
                  );
                  if (!t.ok) throw new Error("Failed to get response from chatbot");
                  var n = yield t.json(),
                    o = {
                      _id: Math.random().toString(36).substring(7),
                      text: n.results, // دریافت پاسخ از پارامتر results
                      createdAt: new Date().toISOString(),
                      user: {
                        _id: 2,
                        name: "DarkGPT",
                        avatar: r(8169),
                      },
                    };
                  f(!1), a(function (e) {
                    return v.GiftedChat.append(e, o);
                  });
                } catch (s) {
                  f(!1), alert("Error: " + s.message);
                  var i = {
                    _id: Math.random().toString(36).substring(7),
                    text: "Failed to send message. Please try again.",
                    createdAt: new Date().toISOString(),
                    user: {
                      _id: 2,
                      name: "DarkGPT",
                      avatar: r(8169),
                    },
                  };
                  a(function (e) {
                    return v.GiftedChat.append(e, i);
                  });
                }
              } else alert("Message cannot be empty");
            });
            return function () {
              return e.apply(this, arguments);
            };
          };
        return (0, h.jsxs)(i.default, {
          style: [E.container, { backgroundColor: "#fff" }],
          children: [
            (0, h.jsxs)(i.default, {
              style: E.header,
              children: [
                (0, h.jsx)(d.default, { source: r(8169), style: E.profileImage }),
                (0, h.jsx)(i.default, {
                  style: { flexDirection: "row", alignItems: "center" },
                  children: (0, h.jsx)(l.default, {
                    onPress: function () {
                      if (window.confirm("Are you sure you want to delete this chat?"))
                        try {
                          S()
                            .removeItem("darkmessages")
                            .then(function () {
                              a([]);
                            })
                            .catch(function (e) {
                              console.error("Failed to delete chat", e);
                            });
                        } catch (e) {
                          console.error("Failed to delete chat", e);
                        }
                    },
                    children: (0, h.jsx)(O.default, {
                      name: "trash-outline",
                      size: 24,
                      color: "#000",
                    }),
                  }),
                }),
              ],
            }),
            (0, h.jsx)(v.GiftedChat, {
              messages: o,
              onSend: function (e) {
                return y(e);
              },
              user: { _id: 1 },
              renderBubble: function (e) {
                return (0, h.jsx)(v.Bubble, D(D({}, e), {}, {
                  wrapperStyle: { right: { backgroundColor: "#000" } },
                  textStyle: { right: { color: "#fff" } },
                  timeTextStyle: { right: { color: "rgba(255,255,255,0.5)" } },
                }));
              },
              renderSend: u
                ? function (e) {
                    return (0, h.jsx)(v.Send, D(D({}, e), {}, {
                      children: (0, h.jsx)(i.default, {
                        style: E.sendingContainer,
                        children: (0, h.jsx)(x.default, {
                          size: "small",
                          color: "#007aff",
                        }),
                      }),
                    }));
                  }
                : null,
              renderLoading: function () {
                return (0, h.jsx)(i.default, {
                  style: E.loadingContainer,
                  children: (0, h.jsx)(x.default, { size: "large", color: "#007aff" }),
                });
              },
              renderTime: function (e) {
                return (0, h.jsx)(v.Time, D(D({}, e), {}, {
                  timeTextStyle: { left: { color: "grey" }, right: { color: "grey" } },
                  format: "HH:mm",
                }));
              },
              renderInputToolbar: function (e) {
                return (0, h.jsx)(v.InputToolbar, D(D({}, e), {}, {
                  containerStyle: {
                    backgroundColor: "#fff",
                    borderTopColor: "#000",
                    borderTopWidth: 1,
                  },
                }));
              },
              renderComposer: function (e) {
                return (0, h.jsx)(v.Composer, D(D({}, e), {}, {
                  textInputStyle: {
                    color: "#000",
                    backgroundColor: "#f0f0f0",
                    paddingTop: 12,
                    paddingBottom: 12,
                    paddingHorizontal: 12,
                    marginLeft: 0,
                  },
                }));
              },
            }),
          ],
        });
      }
      var E = u.default.create({
        container: { flex: 1 },
        header: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
        },
        loadingContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
        sendingContainer: { justifyContent: "center", alignItems: "center" },
        profileImage: { width: 25, height: 25, borderRadius: 25, marginRight: 2 },
      });
      function F(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? F(Object(r), !0).forEach(function (t) {
                (0, m.default)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : F(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function z() {
        var e = (0, n.useState)([]),
          t = (0, j.default)(e, 2),
          o = t[0],
          a = t[1],
          s = (0, n.useState)(!1),
          c = (0, j.default)(s, 2),
          u = c[0],
          f = c[1];
        (0, n.useEffect)(function () {
          p();
        }, []),
          (0, n.useEffect)(function () {
            g(o);
          }, [o]);
        var p = function () {
            var e = (0, b.default)(function* () {
              try {
                var e = yield S().getItem("osmessages");
                null !== e && a(e);
              } catch (t) {
                console.error("Failed to retrieve messages", t);
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          }(),
          g = function () {
            var e = (0, b.default)(function* (e) {
              try {
                yield S().setItem("osmessages", e);
              } catch (t) {
                console.error("Failed to store messages", t);
              }
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          }(),
          y = function () {
            var e = (0, b.default)(function* () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
              if ("" !== e[0].text.trim()) {
                f(!0), a(function (t) {
                  return v.GiftedChat.append(t, e);
                });
                try {
                  var t = yield fetch(
                    `https://req.wiki-api.ir/apis-2/ChatGPT4?q=${encodeURIComponent(
                      e[0].text
                    )}`,
                    {
                      method: "GET",
                      headers: {
                        "Content-Type": "application/json; charset=UTF-8",
                      },
                    }
                  );
                  if (!t.ok) throw new Error("Failed to get response from chatbot");
                  var n = yield t.json(),
                    o = {
                      _id: Math.random().toString(36).substring(7),
                      text: n.results, // دریافت پاسخ از پارامتر results
                      createdAt: new Date().toISOString(),
                      user: {
                        _id: 2,
                        name: "Sam Alie",
                        avatar: r(8756),
                      },
                    };
                  f(!1), a(function (e) {
                    return v.GiftedChat.append(e, o);
                  });
                } catch (s) {
                  f(!1), alert("Error: " + s.message);
                  var i = {
                    _id: Math.random().toString(36).substring(7),
                    text: "Failed to send message. Please try again.",
                    createdAt: new Date().toISOString(),
                    user: {
                      _id: 2,
                      name: "Sam Alie",
                      avatar: r(8756),
                    },
                  };
                  a(function (e) {
                    return v.GiftedChat.append(e, i);
                  });
                }
              } else alert("Message cannot be empty");
            });
            return function () {
              return e.apply(this, arguments);
            };
          };
        return (0, h.jsxs)(i.default, {
          style: [A.container, { backgroundColor: "#fff" }],
          children: [
            (0, h.jsxs)(i.default, {
              style: A.header,
              children: [
                (0, h.jsx)(d.default, { source: r(8756), style: A.profileImage }),
                (0, h.jsx)(i.default, {
                  style: { flexDirection: "row", alignItems: "center" },
                  children: (0, h.jsx)(l.default, {
                    onPress: function () {
                      if (window.confirm("Are you sure you want to delete this chat?"))
                        try {
                          S()
                            .removeItem("osmessages")
                            .then(function () {
                              a([]);
                            })
                            .catch(function (e) {
                              console.error("Failed to delete chat", e);
                            });
                        } catch (e) {
                          console.error("Failed to delete chat", e);
                        }
                    },
                    children: (0, h.jsx)(O.default, {
                      name: "trash-outline",
                      size: 24,
                      color: "#000",
                    }),
                  }),
                }),
              ],
            }),
            (0, h.jsx)(v.GiftedChat, {
              messages: o,
              onSend: function (e) {
                return y(e);
              },
              user: { _id: 1 },
              renderBubble: function (e) {
                return (0, h.jsx)(v.Bubble, _(_({}, e), {}, {
                  wrapperStyle: { right: { backgroundColor: "#000" } },
                  textStyle: { right: { color: "#fff" } },
                  timeTextStyle: { right: { color: "rgba(255,255,255,0.5)" } },
                }));
              },
              renderSend: u
                ? function (e) {
                    return (0, h.jsx)(v.Send, _(_({}, e), {}, {
                      children: (0, h.jsx)(i.default, {
                        style: A.sendingContainer,
                        children: (0, h.jsx)(x.default, {
                          size: "small",
                          color: "#007aff",
                        }),
                      }),
                    }));
                  }
                : null,
              renderLoading: function () {
                return (0, h.jsx)(i.default, {
                  style: A.loadingContainer,
                  children: (0, h.jsx)(x.default, { size: "large", color: "#007aff" }),
                });
              },
              renderTime: function (e) {
                return (0, h.jsx)(v.Time, _(_({}, e), {}, {
                  timeTextStyle: { left: { color: "grey" }, right: { color: "grey" } },
                  format: "HH:mm",
                }));
              },
              renderInputToolbar: function (e) {
                return (0, h.jsx)(v.InputToolbar, _(_({}, e), {}, {
                  containerStyle: {
                    backgroundColor: "#fff",
                    borderTopColor: "#000",
                    borderTopWidth: 1,
                  },
                }));
              },
              renderComposer: function (e) {
                return (0, h.jsx)(v.Composer, _(_({}, e), {}, {
                  textInputStyle: {
                    color: "#000",
                    backgroundColor: "#f0f0f0",
                    paddingTop: 12,
                    paddingBottom: 12,
                    paddingHorizontal: 12,
                    marginLeft: 0,
                  },
                }));
              },
            }),
          ],
        });
      }
      var A = u.default.create({
        container: { flex: 1 },
        header: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
        },
        loadingContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
        sendingContainer: { justifyContent: "center", alignItems: "center" },
        profileImage: { width: 25, height: 25, borderRadius: 25, marginRight: 2 },
      }),
        R = r(3982),
        H = r(3779),
        B = r(8287),
        M = r(691),
        L = r(3976);
      function J(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? J(Object(r), !0).forEach(function (t) {
                (0, m.default)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : J(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      var W = function (e) {
        var t = e.endpoint,
          r = e.method,
          n = e.headers,
          o = e.body;
        return (0, h.jsx)(R.default, {
          style: $.card,
          children: (0, h.jsxs)(R.default.Content, {
            children: [
              (0, h.jsxs)(H.default, {
                style: $.endpoint,
                children: ["Endpoint: ", t],
              }),
              (0, h.jsxs)(B.default, {
                style: $.method,
                children: ["Method: ", r],
              }),
              (0, h.jsxs)(B.default, {
                style: $.headers,
                children: ["Headers: ", JSON.stringify(n, null, 2)],
              }),
              (0, h.jsxs)(B.default, {
                style: $.body,
                children: ["Body: ", JSON.stringify(o, null, 2)],
              }),
              (0, h.jsx)(M.default, {
                mode: "contained",
                onPress: function () {
                  var e = `Endpoint: ${t}\nMethod: ${r}\nHeaders: ${JSON.stringify(
                    n,
                    null,
                    2
                  )}\nBody: ${JSON.stringify(o, null, 2)}`;
                  "undefined" !== typeof navigator && navigator.clipboard
                    ? navigator.clipboard
                        .writeText(e)
                        .then(function () {
                          alert("API data copied to clipboard!");
                        })
                        .catch(function (e) {
                          alert("Could not copy text: ", e);
                        })
                    : (L.default.setString(e), alert("API data copied to clipboard!"));
                },
                style: { alignSelf: "flex-start", marginTop: 10 },
                children: "Copy API",
              }),
            ],
          }),
        });
      };
      function U() {
        return (0, h.jsxs)(i.default, {
          style: $.container,
          children: [
            (0, h.jsx)(s.default, {
              style: $.title,
              children: "ChatGPT 4 API",
            }),
            (0, h.jsx)(W, N({}, {
              endpoint: "https://req.wiki-api.ir/apis-2/ChatGPT4",
              method: "GET",
              headers: {
                "Content-Type": "application/json; charset=utf-8",
              },
              body: {
                q: "Hello ChatGPT",
              },
            })),
          ],
        });
      }
      var $ = u.default.create({
        container: {
          flex: 1,
          justifyContent: "center",
          padding: 16,
          backgroundColor: "#f5f5f5",
        },
        card: {
          margin: 16,
          backgroundColor: "#ffffff",
          borderRadius: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 2,
          elevation: 5,
        },
        title: { fontSize: 24, fontWeight: "bold", marginVertical: 10, color: "#333" },
        endpoint: { color: "#1976d2", fontFamily: "monospace" },
        method: { color: "#388e3c", fontFamily: "monospace" },
        headers: { color: "#f57c00", fontFamily: "monospace" },
        body: { color: "#5d4037", fontFamily: "monospace" },
      }),
        K = (0, a.default)();
      const V = function () {
        return (0, h.jsx)(o.default, {
          children: (0, h.jsxs)(K.Navigator, {
            initialRouteName: "Home",
            children: [
              (0, h.jsx)(K.Screen, {
                name: "Home",
                component: y,
                options: { title: "Home Page" },
              }),
              (0, h.jsx)(K.Screen, {
                name: "Chat",
                component: T,
                options: { title: "ChatGPT" },
              }),
              (0, h.jsx)(K.Screen, {
                name: "DarkGPT",
                component: G,
                options: { title: "DarkGPT - Evil ChatGPT" },
              }),
              (0, h.jsx)(K.Screen, {
                name: "Sam Alie",
                component: z,
                options: { title: "Sam Alie" },
              }),
              (0, h.jsx)(K.Screen, {
                name: "API",
                component: U,
                options: { title: "API Docs" },
              }),
            ],
          }),
        });
      };
    },
    8169: (e, t, r) => {
      e.exports = r.p + "static/media/evil.672cf9a8956c954eede5.png";
    },
    7270: (e, t, r) => {
      e.exports = r.p + "static/media/icon.2a8ba17c99b635094f6b.png";
    },
    8756: (e, t, r) => {
      e.exports = r.p + "static/media/os.0a591486bbd39d55589b.png";
    },
  },
  t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var a = t[n] = { exports: {} };
    return e[n].call(a.exports, a, a.exports, r), a.exports;
  }
  r.m = e;
  (() => {
    var e = [];
    r.O = (t, n, o, a) => {
      if (!n) {
        var i = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [n, o, a] = e[d], s = !0, l = 0; l < n.length; l++)
            (!1 & a || i >= a) &&
            Object.keys(r.O).every((e) => r.O[e](n[l]))
              ? n.splice(l--, 1)
              : (s = !1, a < i && (i = a));
          if (s) {
            e.splice(d--, 1);
            var c = o();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      a = a || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > a; d--) e[d] = e[d - 1];
      e[d] = [n, o, a];
    };
  })();
  r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  };
  (() => {
    var e,
      t = Object.getPrototypeOf
        ? (e) => Object.getPrototypeOf(e)
        : (e) => e.__proto__;
    r.t = function (n, o) {
      if (1 & o && (n = this(n)), 8 & o) return n;
      if ("object" === typeof n && n) {
        if (4 & o && n.__esModule) return n;
        if (16 & o && "function" === typeof n.then) return n;
      }
      var a = Object.create(null);
      r.r(a);
      var i = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var s = 2 & o && n; "object" == typeof s && !~e.indexOf(s); s = t(s))
        Object.getOwnPropertyNames(s).forEach((e) => (i[e] = () => n[e]));
      return (i.default = () => n), r.d(a, i), a;
    };
  })();
  r.d = (e, t) => {
    for (var n in t)
      r.o(t, n) &&
        !r.o(e, n) &&
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
  };
  r.g = (function () {
    if ("object" === typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" === typeof window) return window;
    }
  })();
  r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
  r.r = (e) => {
    "undefined" !== typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
      Object.defineProperty(e, "__esModule", { value: !0 });
  };
  r.p = "/";
  (() => {
    var e = { 179: 0 };
    r.O.j = (t) => 0 === e[t];
    var t = (t, n) => {
      var o,
        a,
        [i, s, l] = n,
        c = 0;
      if (i.some((t) => 0 !== e[t])) {
        for (o in s) r.o(s, o) && (r.m[o] = s[o]);
        if (l) var d = l(r);
      }
      for (t && t(n); c < i.length; c++)
        (a = i[c]), r.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
      return r.O(d);
    };
    var n = (self.webpackChunkweb = self.webpackChunkweb || []);
    n.forEach(t.bind(null, 0)), n.push(t.bind(null, n.push.bind(n)));
  })();
  var n = r.O(void 0, [952], () => r(6271));
  n = r.O(n);
})();
//# sourceMappingURL=main.13abeb88.js.map
