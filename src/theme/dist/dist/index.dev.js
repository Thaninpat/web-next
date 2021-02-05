"use strict";

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__esModule = true;

var react_1 = require("@chakra-ui/react");

var icons_1 = require("@chakra-ui/icons");

var fonts = __assign(__assign({}, react_1.theme.fonts), {
  mono: "'Menlo', monospace"
});

var breakpoints = ['40em', '52em', '64em'];

var theme = __assign(__assign({}, react_1.theme), {
  colors: __assign(__assign({}, react_1.theme.colors), {
    black: '#16161D'
  }),
  fonts: fonts,
  breakpoints: breakpoints,
  icons: __assign(__assign({}, icons_1.AddIcon), {
    logo: {
      path: React.createElement("svg", {
        width: '3000',
        height: '3163',
        viewBox: '0 0 3000 3163',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg'
      }, React.createElement("rect", {
        width: '3000',
        height: '3162.95',
        fill: 'none'
      }), React.createElement("path", {
        d: 'M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z',
        fill: 'currentColor'
      })),
      viewBox: '0 0 3000 3163'
    }
  })
});

exports["default"] = theme;