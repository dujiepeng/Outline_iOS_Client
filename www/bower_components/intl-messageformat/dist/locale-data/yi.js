"use strict";

IntlMessageFormat.__addLocaleData({ "locale": "yi", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        v0 = !s[1];if (ord) return "other";return n == 1 && v0 ? "one" : "other";
  } });