var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');

fetch(
  'https://api.openweathermap.org/data/2.5/weather?q=Sidoarjo,id&appid=3d2bf4920f84fd2059751bbe45a62b3a'
)
  .then((response) => response.json())
  .then((data) => {
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];
    desc.innerHTML = descValue;
    temp.innerHTML = Math.trunc(tempValue - 273) + '\u00B0C';
  });

jQuery(document).ready(function ($) {
  'use strict';

  $(document).on('click', 'a.smooth-scroll', function (event) {
    event.preventDefault();

    $('html, body').animate(
      {
        scrollTop: $($.attr(this, 'href')).offset().top - 80,
      },
      500
    );
  });
});

if (localStorage.getItem('theme') == 'light') setLightMode();

function setLightMode() {
  let isLight = document.body.classList.toggle('lightmode');
  if (isLight) {
    toggle = '[<u>L:ght</u>]';
    localStorage.setItem('theme', 'light');
  } else {
    toggle = '[<del>L:ght</del>]';
    localStorage.removeItem('theme');
  }
  document.getElementById('lightBtn').innerHTML = toggle;
}

/*!
 *
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.12
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 *
 */
(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define([], e)
    : 'object' == typeof exports
    ? (exports.Typed = e())
    : (t.Typed = e());
})(this, function () {
  return (function (t) {
    function e(n) {
      if (s[n]) return s[n].exports;
      var i = (s[n] = { exports: {}, id: n, loaded: !1 });
      return t[n].call(i.exports, i, i.exports, e), (i.loaded = !0), i.exports;
    }
    var s = {};
    return (e.m = t), (e.c = s), (e.p = ''), e(0);
  })([
    function (t, e, s) {
      'use strict';
      function n(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      }
      Object.defineProperty(e, '__esModule', { value: !0 });
      var i = (function () {
          function t(t, e) {
            for (var s = 0; s < e.length; s++) {
              var n = e[s];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, s, n) {
            return s && t(e.prototype, s), n && t(e, n), e;
          };
        })(),
        r = s(1),
        o = s(3),
        a = (function () {
          function t(e, s) {
            n(this, t), r.initializer.load(this, s, e), this.begin();
          }
          return (
            i(t, [
              {
                key: 'toggle',
                value: function () {
                  this.pause.status ? this.start() : this.stop();
                },
              },
              {
                key: 'stop',
                value: function () {
                  this.typingComplete ||
                    this.pause.status ||
                    (this.toggleBlinking(!0),
                    (this.pause.status = !0),
                    this.options.onStop(this.arrayPos, this));
                },
              },
              {
                key: 'start',
                value: function () {
                  this.typingComplete ||
                    (this.pause.status &&
                      ((this.pause.status = !1),
                      this.pause.typewrite
                        ? this.typewrite(
                            this.pause.curString,
                            this.pause.curStrPos
                          )
                        : this.backspace(
                            this.pause.curString,
                            this.pause.curStrPos
                          ),
                      this.options.onStart(this.arrayPos, this)));
                },
              },
              {
                key: 'destroy',
                value: function () {
                  this.reset(!1), this.options.onDestroy(this);
                },
              },
              {
                key: 'reset',
                value: function () {
                  var t =
                    arguments.length <= 0 ||
                    void 0 === arguments[0] ||
                    arguments[0];
                  clearInterval(this.timeout),
                    this.replaceText(''),
                    this.cursor &&
                      this.cursor.parentNode &&
                      (this.cursor.parentNode.removeChild(this.cursor),
                      (this.cursor = null)),
                    (this.strPos = 0),
                    (this.arrayPos = 0),
                    (this.curLoop = 0),
                    t &&
                      (this.insertCursor(),
                      this.options.onReset(this),
                      this.begin());
                },
              },
              {
                key: 'begin',
                value: function () {
                  var t = this;
                  this.options.onBegin(this),
                    (this.typingComplete = !1),
                    this.shuffleStringsIfNeeded(this),
                    this.insertCursor(),
                    this.bindInputFocusEvents && this.bindFocusEvents(),
                    (this.timeout = setTimeout(function () {
                      t.currentElContent && 0 !== t.currentElContent.length
                        ? t.backspace(
                            t.currentElContent,
                            t.currentElContent.length
                          )
                        : t.typewrite(
                            t.strings[t.sequence[t.arrayPos]],
                            t.strPos
                          );
                    }, this.startDelay));
                },
              },
              {
                key: 'typewrite',
                value: function (t, e) {
                  var s = this;
                  this.fadeOut &&
                    this.el.classList.contains(this.fadeOutClass) &&
                    (this.el.classList.remove(this.fadeOutClass),
                    this.cursor &&
                      this.cursor.classList.remove(this.fadeOutClass));
                  var n = this.humanizer(this.typeSpeed),
                    i = 1;
                  return this.pause.status === !0
                    ? void this.setPauseStatus(t, e, !0)
                    : void (this.timeout = setTimeout(function () {
                        e = o.htmlParser.typeHtmlChars(t, e, s);
                        var n = 0,
                          r = t.substr(e);
                        if ('^' === r.charAt(0) && /^\^\d+/.test(r)) {
                          var a = 1;
                          (r = /\d+/.exec(r)[0]),
                            (a += r.length),
                            (n = parseInt(r)),
                            (s.temporaryPause = !0),
                            s.options.onTypingPaused(s.arrayPos, s),
                            (t = t.substring(0, e) + t.substring(e + a)),
                            s.toggleBlinking(!0);
                        }
                        if ('`' === r.charAt(0)) {
                          for (
                            ;
                            '`' !== t.substr(e + i).charAt(0) &&
                            (i++, !(e + i > t.length));

                          );
                          var u = t.substring(0, e),
                            l = t.substring(u.length + 1, e + i),
                            c = t.substring(e + i + 1);
                          (t = u + l + c), i--;
                        }
                        s.timeout = setTimeout(function () {
                          s.toggleBlinking(!1),
                            e >= t.length
                              ? s.doneTyping(t, e)
                              : s.keepTyping(t, e, i),
                            s.temporaryPause &&
                              ((s.temporaryPause = !1),
                              s.options.onTypingResumed(s.arrayPos, s));
                        }, n);
                      }, n));
                },
              },
              {
                key: 'keepTyping',
                value: function (t, e, s) {
                  0 === e &&
                    (this.toggleBlinking(!1),
                    this.options.preStringTyped(this.arrayPos, this)),
                    (e += s);
                  var n = t.substr(0, e);
                  this.replaceText(n), this.typewrite(t, e);
                },
              },
              {
                key: 'doneTyping',
                value: function (t, e) {
                  var s = this;
                  this.options.onStringTyped(this.arrayPos, this),
                    this.toggleBlinking(!0),
                    (this.arrayPos === this.strings.length - 1 &&
                      (this.complete(),
                      this.loop === !1 || this.curLoop === this.loopCount)) ||
                      (this.timeout = setTimeout(function () {
                        s.backspace(t, e);
                      }, this.backDelay));
                },
              },
              {
                key: 'backspace',
                value: function (t, e) {
                  var s = this;
                  if (this.pause.status === !0)
                    return void this.setPauseStatus(t, e, !1);
                  if (this.fadeOut) return this.initFadeOut();
                  this.toggleBlinking(!1);
                  var n = this.humanizer(this.backSpeed);
                  this.timeout = setTimeout(function () {
                    e = o.htmlParser.backSpaceHtmlChars(t, e, s);
                    var n = t.substr(0, e);
                    if ((s.replaceText(n), s.smartBackspace)) {
                      var i = s.strings[s.arrayPos + 1];
                      i && n === i.substr(0, e)
                        ? (s.stopNum = e)
                        : (s.stopNum = 0);
                    }
                    e > s.stopNum
                      ? (e--, s.backspace(t, e))
                      : e <= s.stopNum &&
                        (s.arrayPos++,
                        s.arrayPos === s.strings.length
                          ? ((s.arrayPos = 0),
                            s.options.onLastStringBackspaced(),
                            s.shuffleStringsIfNeeded(),
                            s.begin())
                          : s.typewrite(s.strings[s.sequence[s.arrayPos]], e));
                  }, n);
                },
              },
              {
                key: 'complete',
                value: function () {
                  this.options.onComplete(this),
                    this.loop ? this.curLoop++ : (this.typingComplete = !0);
                },
              },
              {
                key: 'setPauseStatus',
                value: function (t, e, s) {
                  (this.pause.typewrite = s),
                    (this.pause.curString = t),
                    (this.pause.curStrPos = e);
                },
              },
              {
                key: 'toggleBlinking',
                value: function (t) {
                  this.cursor &&
                    (this.pause.status ||
                      (this.cursorBlinking !== t &&
                        ((this.cursorBlinking = t),
                        t
                          ? this.cursor.classList.add('typed-cursor--blink')
                          : this.cursor.classList.remove(
                              'typed-cursor--blink'
                            ))));
                },
              },
              {
                key: 'humanizer',
                value: function (t) {
                  return Math.round((Math.random() * t) / 2) + t;
                },
              },
              {
                key: 'shuffleStringsIfNeeded',
                value: function () {
                  this.shuffle &&
                    (this.sequence = this.sequence.sort(function () {
                      return Math.random() - 0.5;
                    }));
                },
              },
              {
                key: 'initFadeOut',
                value: function () {
                  var t = this;
                  return (
                    (this.el.className += ' ' + this.fadeOutClass),
                    this.cursor &&
                      (this.cursor.className += ' ' + this.fadeOutClass),
                    setTimeout(function () {
                      t.arrayPos++,
                        t.replaceText(''),
                        t.strings.length > t.arrayPos
                          ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0)
                          : (t.typewrite(t.strings[0], 0), (t.arrayPos = 0));
                    }, this.fadeOutDelay)
                  );
                },
              },
              {
                key: 'replaceText',
                value: function (t) {
                  this.attr
                    ? this.el.setAttribute(this.attr, t)
                    : this.isInput
                    ? (this.el.value = t)
                    : 'html' === this.contentType
                    ? (this.el.innerHTML = t)
                    : (this.el.textContent = t);
                },
              },
              {
                key: 'bindFocusEvents',
                value: function () {
                  var t = this;
                  this.isInput &&
                    (this.el.addEventListener('focus', function (e) {
                      t.stop();
                    }),
                    this.el.addEventListener('blur', function (e) {
                      (t.el.value && 0 !== t.el.value.length) || t.start();
                    }));
                },
              },
              {
                key: 'insertCursor',
                value: function () {
                  this.showCursor &&
                    (this.cursor ||
                      ((this.cursor = document.createElement('span')),
                      (this.cursor.className = 'typed-cursor'),
                      this.cursor.setAttribute('aria-hidden', !0),
                      (this.cursor.innerHTML = this.cursorChar),
                      this.el.parentNode &&
                        this.el.parentNode.insertBefore(
                          this.cursor,
                          this.el.nextSibling
                        )));
                },
              },
            ]),
            t
          );
        })();
      (e['default'] = a), (t.exports = e['default']);
    },
    function (t, e, s) {
      'use strict';
      function n(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function i(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      }
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var s = arguments[e];
              for (var n in s)
                Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
            }
            return t;
          },
        o = (function () {
          function t(t, e) {
            for (var s = 0; s < e.length; s++) {
              var n = e[s];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, s, n) {
            return s && t(e.prototype, s), n && t(e, n), e;
          };
        })(),
        a = s(2),
        u = n(a),
        l = (function () {
          function t() {
            i(this, t);
          }
          return (
            o(t, [
              {
                key: 'load',
                value: function (t, e, s) {
                  if (
                    ('string' == typeof s
                      ? (t.el = document.querySelector(s))
                      : (t.el = s),
                    (t.options = r({}, u['default'], e)),
                    (t.isInput = 'input' === t.el.tagName.toLowerCase()),
                    (t.attr = t.options.attr),
                    (t.bindInputFocusEvents = t.options.bindInputFocusEvents),
                    (t.showCursor = !t.isInput && t.options.showCursor),
                    (t.cursorChar = t.options.cursorChar),
                    (t.cursorBlinking = !0),
                    (t.elContent = t.attr
                      ? t.el.getAttribute(t.attr)
                      : t.el.textContent),
                    (t.contentType = t.options.contentType),
                    (t.typeSpeed = t.options.typeSpeed),
                    (t.startDelay = t.options.startDelay),
                    (t.backSpeed = t.options.backSpeed),
                    (t.smartBackspace = t.options.smartBackspace),
                    (t.backDelay = t.options.backDelay),
                    (t.fadeOut = t.options.fadeOut),
                    (t.fadeOutClass = t.options.fadeOutClass),
                    (t.fadeOutDelay = t.options.fadeOutDelay),
                    (t.isPaused = !1),
                    (t.strings = t.options.strings.map(function (t) {
                      return t.trim();
                    })),
                    'string' == typeof t.options.stringsElement
                      ? (t.stringsElement = document.querySelector(
                          t.options.stringsElement
                        ))
                      : (t.stringsElement = t.options.stringsElement),
                    t.stringsElement)
                  ) {
                    (t.strings = []), (t.stringsElement.style.display = 'none');
                    var n = Array.prototype.slice.apply(
                        t.stringsElement.children
                      ),
                      i = n.length;
                    if (i)
                      for (var o = 0; o < i; o += 1) {
                        var a = n[o];
                        t.strings.push(a.innerHTML.trim());
                      }
                  }
                  (t.strPos = 0),
                    (t.arrayPos = 0),
                    (t.stopNum = 0),
                    (t.loop = t.options.loop),
                    (t.loopCount = t.options.loopCount),
                    (t.curLoop = 0),
                    (t.shuffle = t.options.shuffle),
                    (t.sequence = []),
                    (t.pause = {
                      status: !1,
                      typewrite: !0,
                      curString: '',
                      curStrPos: 0,
                    }),
                    (t.typingComplete = !1);
                  for (var o in t.strings) t.sequence[o] = o;
                  (t.currentElContent = this.getCurrentElContent(t)),
                    (t.autoInsertCss = t.options.autoInsertCss),
                    this.appendAnimationCss(t);
                },
              },
              {
                key: 'getCurrentElContent',
                value: function (t) {
                  var e = '';
                  return (e = t.attr
                    ? t.el.getAttribute(t.attr)
                    : t.isInput
                    ? t.el.value
                    : 'html' === t.contentType
                    ? t.el.innerHTML
                    : t.el.textContent);
                },
              },
              {
                key: 'appendAnimationCss',
                value: function (t) {
                  var e = 'data-typed-js-css';
                  if (
                    t.autoInsertCss &&
                    (t.showCursor || t.fadeOut) &&
                    !document.querySelector('[' + e + ']')
                  ) {
                    var s = document.createElement('style');
                    (s.type = 'text/css'), s.setAttribute(e, !0);
                    var n = '';
                    t.showCursor &&
                      (n +=
                        '\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      '),
                      t.fadeOut &&
                        (n +=
                          '\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      '),
                      0 !== s.length &&
                        ((s.innerHTML = n), document.body.appendChild(s));
                  }
                },
              },
            ]),
            t
          );
        })();
      e['default'] = l;
      var c = new l();
      e.initializer = c;
    },
    function (t, e) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var s = {
        strings: [
          'These are the default values...',
          'You know what you should do?',
          'Use your own!',
          'Have a great day!',
        ],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        smartBackspace: !0,
        shuffle: !1,
        backDelay: 700,
        fadeOut: !1,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500,
        loop: !1,
        loopCount: 1 / 0,
        showCursor: !0,
        cursorChar: '|',
        autoInsertCss: !0,
        attr: null,
        bindInputFocusEvents: !1,
        contentType: 'html',
        onBegin: function (t) {},
        onComplete: function (t) {},
        preStringTyped: function (t, e) {},
        onStringTyped: function (t, e) {},
        onLastStringBackspaced: function (t) {},
        onTypingPaused: function (t, e) {},
        onTypingResumed: function (t, e) {},
        onReset: function (t) {},
        onStop: function (t, e) {},
        onStart: function (t, e) {},
        onDestroy: function (t) {},
      };
      (e['default'] = s), (t.exports = e['default']);
    },
    function (t, e) {
      'use strict';
      function s(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      }
      Object.defineProperty(e, '__esModule', { value: !0 });
      var n = (function () {
          function t(t, e) {
            for (var s = 0; s < e.length; s++) {
              var n = e[s];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, s, n) {
            return s && t(e.prototype, s), n && t(e, n), e;
          };
        })(),
        i = (function () {
          function t() {
            s(this, t);
          }
          return (
            n(t, [
              {
                key: 'typeHtmlChars',
                value: function (t, e, s) {
                  if ('html' !== s.contentType) return e;
                  var n = t.substr(e).charAt(0);
                  if ('<' === n || '&' === n) {
                    var i = '';
                    for (
                      i = '<' === n ? '>' : ';';
                      t.substr(e + 1).charAt(0) !== i &&
                      (e++, !(e + 1 > t.length));

                    );
                    e++;
                  }
                  return e;
                },
              },
              {
                key: 'backSpaceHtmlChars',
                value: function (t, e, s) {
                  if ('html' !== s.contentType) return e;
                  var n = t.substr(e).charAt(0);
                  if ('>' === n || ';' === n) {
                    var i = '';
                    for (
                      i = '>' === n ? '<' : '&';
                      t.substr(e - 1).charAt(0) !== i && (e--, !(e < 0));

                    );
                    e--;
                  }
                  return e;
                },
              },
            ]),
            t
          );
        })();
      e['default'] = i;
      var r = new i();
      e.htmlParser = r;
    },
  ]);
});

new Typed('#typed', {
  strings: [
    '^1500 an ^1000 IT ^800 Support',
    '^1500 an ^500 invoice ^700 clerk',
    '^1500 a ^1000 UI / ^200 UX ^300 designer',
    '^1500 a ^1000 web ^700 developer',
    '^1500 a ^1500 part ^500 time ^100 gamer',
    '^1500 a ^1000 full time ^800 learner',
    '^1500 welcoming ^1000 you',
    '^2000 nothing',
  ],
  typeSpeed: 80,
  backSpeed: 40,
  backDelay: 8000,
  loop: true,
  smartBackspace: true,
});

var quotes = [
  "This is my dream? I'm not even sleeping.",
  'Everything takes longer than you think.',
  'Sooner your dream comes, sooner you get bored.',
  'Your life is fine, you are the disaster itself.',
  'Deny, anger, bragaining, depression and acceptance.',
  'Life seems but a quick succession of busy nothings.',
  'Our scars make us know that our past was for real.',
  'I cannot speak well enough to be unintelligible.',
  "I didn't choose this life.",
  'Every solution breeds new problems.',
  'This is not what I want, but this is what it should be.',
  'Good designer copy, great designer steal.',
  "I'm the designer of my own cataclysm.",
  "Silence isn't empty, it's full of answer.",
  "You miss 100% of shots you don't take.",
  'Spoiler, we die in the end.',
  'Failure builds character.',
  'If you get tired, learn to rest not quit.',
  'The pure and simple truth is rarely pure and never simple.',
  'Man invented language to satisfy his deep need to complain.',
  'But without the dark, we never see the stars.',
  'The world is full of monsters with friendly faces.',
  'Hell is empty and all the devils are here.',
  'Fake people have an image to maintain.',
  "Don't try to be the best, just try to be good.",
  "Words are free, it's how you use them that may cost you.",
  'Sometimes you have to unfollow people in real life.',
  "You can't chase happiness, you must create them.",
  "Everything's real but not everyone's true.",
  "What we know is a drop, what we don't know is an ocean.",
  'Icarus flew too close to the sun and melted his wings.',
  'Time is just a stubborn illusion.',
  'Time without purpose is a prison.',
  'No sound without silence.',
  'Pain makes people change.',
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').innerHTML = quotes[randomNumber];
}

newQuote();
