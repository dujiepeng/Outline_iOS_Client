"use strict";

IntlMessageFormat.__addLocaleData({ "locale": "ka", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        i = s[0],
        i100 = i.slice(-2);if (ord) return i == 1 ? "one" : i == 0 || i100 >= 2 && i100 <= 20 || i100 == 40 || i100 == 60 || i100 == 80 ? "many" : "other";return n == 1 ? "one" : "other";
  } });