"use strict";

IntlMessageFormat.__addLocaleData({ "locale": "tr", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";return n == 1 ? "one" : "other";
  } });
IntlMessageFormat.__addLocaleData({ "locale": "tr-CY", "parentLocale": "tr" });