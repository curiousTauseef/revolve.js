/**
The packaged Revolve.js theme library.
@file revolve-themes.js
@copyright Copyright (c) 2019 | James M. Devlin | https://revolvejs.org
*/
//------------------------------------------------------------------------------
// Wrap the Revolve.js theme library in a universal module definition (UMD)
// wrapper to support a variety of clients including CommonJS, AMD, and
// browser-global.
// See: https://github.com/umdjs/umd/blob/master/templates/returnExports.js
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.RevolveThemes = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
// Okay, UMD wrapper nonsense concluded. Commence with Revolve.js themes!
//------------------------------------------------------------------------------
let themes =
{
  "classic": {
    "name": "classic",
    "layers": {
      "rim": {
        "type": "circle",
        "color": {
          "extent": [
            0,
            -256,
            0,
            256
          ],
          "stops": [
            {
              "pos": 0,
              "color": "#bdbd97"
            },
            {
              "pos": 1,
              "color": "#fffff2"
            }
          ]
        },
        "border": {
          "width": 10,
          "color": "black"
        }
      },
      "minor": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 4,
        "length": 10,
        "color": "#232323",
        "layout": "minute"
      },
      "major": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 5,
        "length": 30,
        "color": "#121212",
        "layout": "hour"
      },
      "numerals": {
        "type": "radial",
        "content": "text",
        "text": "12",
        "radius": 190,
        "weight": 300,
        "size": 60,
        "color": "black",
        "family": "Quattrocento, Impact, Helvetica, serif"
      },
      "hour": {
        "type": "arm",
        "axis": "hours",
        "width": 10,
        "length": 120,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2
      },
      "minute": {
        "type": "arm",
        "axis": "minutes",
        "width": 5,
        "length": 166,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2
      },
      "second": {
        "type": "arm",
        "axis": "seconds",
        "width": 2.5,
        "length": 216,
        "offset": 20,
        "color": "#DD2323",
        "shadowColor": "black",
        "shadow": 2
      },
      "glass": {
        "type": "circle",
        "radius": 246,
        "color": {
          "extent": [
            0,
            -256,
            0,
            256
          ],
          "stops": [
            {
              "pos": 0,
              "color": "#FFFFFF11"
            },
            {
              "pos": 0.5,
              "color": "#FFFFFF77"
            },
            {
              "pos": 0.5,
              "color": "#FFFFFF44"
            },
            {
              "pos": 1,
              "color": "#f5f5dc11"
            }
          ]
        }
      }
    }
  },
  "dark": {
    "name": "dark",
    "layers": {
      "outer_rim": {
        "type": "circle",
        "color": "#010101",
        "border": {
          "width": 10,
          "color": "black"
        }
      },
      "minor": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 5,
        "length": 10,
        "color": "darkred",
        "layout": "minute"
      },
      "major": {
        "type": "radial",
        "content": "ticks",
        "radius": 250,
        "width": 14,
        "length": 30,
        "color": "red",
        "layout": "hour",
        "border": {
          "color": "darkred",
          "width": 2
        }
      },
      "rim": {
        "type": "circle",
        "color": "transparent",
        "border": {
          "width": 10,
          "color": "black"
        }
      },
      "numerals": {
        "type": "radial",
        "content": "text",
        "text": "12",
        "radius": 190,
        "weight": 300,
        "size": 40,
        "color": "#898989",
        "family": "Oswald, Calibri, Impact, sans-serif",
        "shadowColor": "#ffffff55",
        "shadow": 10
      },
      "hour": {
        "type": "arm",
        "color": "#434343",
        "axis": "hours",
        "width": 20,
        "length": 120,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2
      },
      "minute": {
        "type": "arm",
        "color": "#545454",
        "axis": "minutes",
        "width": 15,
        "length": 166,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2
      },
      "second": {
        "type": "arm",
        "axis": "seconds",
        "width": 5,
        "length": 236,
        "offset": 20,
        "color": "#DD2323",
        "shadowColor": "black",
        "shadow": 2
      },
      "glass": {
        "type": "circle",
        "radius": 246,
        "color": {
          "extent": [
            0,
            -256,
            0,
            256
          ],
          "stops": [
            {
              "pos": 0,
              "color": "#FFFFFF11"
            },
            {
              "pos": 0.5,
              "color": "#44444433"
            },
            {
              "pos": 0.5,
              "color": "#55555522"
            },
            {
              "pos": 1,
              "color": "#f5f5dc11"
            }
          ]
        }
      }
    }
  },
  "dartboard": {
    "name": "dartboard",
    "layers": {
      "rim": {
        "type": "circle",
        "color": "black",
        "border": {
          "width": 10,
          "color": "black"
        }
      },
      "numbers": {
        "type": "radial",
        "content": "text",
        "text": [
          "20",
          "1",
          "18",
          "4",
          "13",
          "6",
          "10",
          "15",
          "2",
          "17",
          "3",
          "19",
          "7",
          "16",
          "8",
          "11",
          "14",
          "9",
          "12",
          "5"
        ],
        "count": 20,
        "color": "white",
        "weight": "bold",
        "family": "Calibri",
        "size": 30,
        "radius": 238,
        "orient": true
      },
      "odd": {
        "type": "radial",
        "content": "arcs",
        "radius": 216,
        "degrees": 18,
        "count": 20,
        "start": 9,
        "border": {
          "width": 20,
          "color": "red"
        }
      },
      "even": {
        "type": "radial",
        "content": "arcs",
        "start": 9,
        "radius": 216,
        "degrees": 18,
        "count": 20,
        "exclude": [
          0,
          2,
          4,
          6,
          8,
          10,
          12,
          14,
          16,
          18,
          20
        ],
        "border": {
          "width": 20,
          "color": "green"
        }
      },
      "black": {
        "type": "radial",
        "content": "arcs",
        "start": 9,
        "radius": 196,
        "degrees": 18,
        "count": 20,
        "border": {
          "width": 60,
          "color": "black"
        }
      },
      "white": {
        "type": "radial",
        "content": "arcs",
        "start": 9,
        "radius": 196,
        "degrees": 18,
        "count": 20,
        "exclude": [
          0,
          2,
          4,
          6,
          8,
          10,
          12,
          14,
          16,
          18,
          20
        ],
        "border": {
          "width": 60,
          "color": "white"
        }
      },
      "odd2": {
        "type": "radial",
        "content": "arcs",
        "start": 9,
        "radius": 136,
        "degrees": 18,
        "count": 20,
        "border": {
          "width": 20,
          "color": "red"
        }
      },
      "even2": {
        "type": "radial",
        "start": 9,
        "content": "arcs",
        "radius": 136,
        "degrees": 18,
        "count": 20,
        "exclude": [
          0,
          2,
          4,
          6,
          8,
          10,
          12,
          14,
          16,
          18,
          20
        ],
        "border": {
          "width": 20,
          "color": "green"
        }
      },
      "black2": {
        "type": "radial",
        "start": 9,
        "content": "arcs",
        "radius": 116,
        "degrees": 18,
        "count": 20,
        "border": {
          "width": 116,
          "color": "black"
        }
      },
      "white2": {
        "type": "radial",
        "start": 9,
        "content": "arcs",
        "radius": 116,
        "degrees": 18,
        "count": 20,
        "exclude": [
          0,
          2,
          4,
          6,
          8,
          10,
          12,
          14,
          16,
          18,
          20
        ],
        "border": {
          "width": 116,
          "color": "white"
        }
      },
      "inner": {
        "type": "circle",
        "color": "green",
        "radius": 30
      },
      "bullseye": {
        "type": "circle",
        "color": "red",
        "radius": 10
      }
    }
  },
  "decimal": {
    "name": "decimal",
    "pulse": 864,
    "axes": {
      "HOUR10": {
        "name": "hour10",
        "pointA": {
          "angle": 0,
          "value": 0
        },
        "pointB": {
          "angle": 360,
          "value": 86400000,
          "comment": "24 * 60 * 60 * 1000"
        }
      },
      "MINUTE100": {
        "name": "minute100",
        "pointA": {
          "angle": 0,
          "value": 0
        },
        "pointB": {
          "angle": 360,
          "value": 8640000,
          "comment": "2.4 * 60 * 60 * 1000"
        }
      },
      "SECOND100": {
        "name": "second100",
        "pointA": {
          "angle": 0,
          "value": 0
        },
        "pointB": {
          "angle": 360,
          "value": 86400,
          "comment": ".024 * 60 * 60 * 1000"
        }
      }
    },
    "layers": {
      "rim": {
        "type": "circle",
        "color": "beige",
        "border": {
          "width": 10,
          "color": "black"
        }
      },
      "minor": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 4,
        "length": 10,
        "color": "#660000",
        "count": 100,
        "exclude": [
          5,
          15,
          25,
          35,
          45,
          55,
          65,
          75,
          85,
          95
        ]
      },
      "medium": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 4,
        "length": 20,
        "color": "#232323",
        "count": 100,
        "include": [
          5,
          15,
          25,
          35,
          45,
          55,
          65,
          75,
          85,
          95
        ]
      },
      "major": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 5,
        "length": 30,
        "count": 10,
        "color": "#121212"
      },
      "numerals": {
        "type": "radial",
        "content": "text",
        "text": "10",
        "degrees": 36,
        "radius": 190,
        "weight": 300,
        "size": 60,
        "color": "black",
        "count": 10,
        "family": "Quattrocento, Impact, Helvetica, serif"
      },
      "hour": {
        "type": "arm",
        "axis": "hour10",
        "width": 10,
        "length": 120,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2
      },
      "minute": {
        "type": "arm",
        "axis": "minute100",
        "width": 5,
        "length": 166,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2
      },
      "second": {
        "type": "arm",
        "axis": "second100",
        "width": 2.5,
        "length": 216,
        "offset": 20,
        "color": "#DD2323",
        "shadowColor": "black",
        "shadow": 2
      }
    }
  },
  "elite": {
    "name": "elite",
    "layers": {
      "rim": {
        "type": "circle",
        "color": "beige",
        "border": {
          "width": 10,
          "color": "black"
        }
      },
      "minor": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 5,
        "length": 10,
        "color": "#9A9A9A",
        "layout": "minute"
      },
      "major": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 15,
        "length": 30,
        "color": "#ABABAB",
        "layout": "hour"
      },
      "numerals": {
        "type": "radial",
        "content": "text",
        "radius": 190,
        "orient": true,
        "weight": 300,
        "size": 40,
        "color": "#232323",
        "text": "roman",
        "family": "Six Caps, Oswald, Calibri, Impact, sans-serif"
      },
      "face": {
        "type": "circle",
        "color": "#DD2323",
        "radius": 10,
        "border": {
          "width": 5,
          "color": "#DD2323"
        }
      },
      "second": {
        "type": "arm",
        "axis": "seconds",
        "width": 5,
        "length": 236,
        "offset": -8,
        "color": "#DD2323",
        "layers": [
          {
            "type": "path",
            "points": [
              {
                "x": -0.5,
                "y": -235
              },
              {
                "x": -3,
                "y": 65
              },
              {
                "x": 3,
                "y": 65
              },
              {
                "x": 0.5,
                "y": -235
              }
            ]
          }
        ]
      },
      "hour": {
        "type": "arm",
        "axis": "hours",
        "color": "#121212",
        "width": 10,
        "length": 120,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2,
        "layers": [
          {
            "type": "path",
            "points": [
              {
                "x": -3.5,
                "y": -120
              },
              {
                "x": -5,
                "y": 45
              },
              {
                "x": 5,
                "y": 45
              },
              {
                "x": 3.5,
                "y": -120
              }
            ]
          }
        ]
      },
      "minute": {
        "type": "arm",
        "axis": "minutes",
        "color": "#121212",
        "width": 5,
        "length": 166,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2,
        "layers": [
          {
            "type": "path",
            "points": [
              {
                "x": -1.5,
                "y": -165
              },
              {
                "x": -3,
                "y": 65
              },
              {
                "x": 3,
                "y": 65
              },
              {
                "x": 1.5,
                "y": -165
              }
            ]
          }
        ]
      }
    }
  },
  "informatic": {
    "name": "informatic",
    "axes": {
      "REV24": {
        "name": "MPH",
        "pointA": {
          "angle": 180,
          "value": 0
        },
        "pointB": {
          "angle": 540,
          "value": 86400000,
          "comment": "24 * 60 * 60 * 1000"
        }
      }
    },
    "layers": {
      "rim": {
        "type": "circle",
        "color": "#121212",
        "border": {
          "width": 6,
          "color": "black"
        }
      },
      "work": {
        "type": "circle",
        "color": "#0c52eb",
        "radius": 250
      },
      "work2": {
        "type": "sector",
        "color2": "#0c52eb",
        "color": "orange",
        "from": 270,
        "to": 105,
        "radius": 250
      },
      "rim2": {
        "type": "circle",
        "color": "#121212",
        "radius": 246
      },
      "minorTicks": {
        "type": "radial",
        "content": "ticks",
        "radius": 250,
        "width": 2,
        "length": 10,
        "color": "darkgray",
        "layout": 96
      },
      "majorTicks": {
        "type": "radial",
        "content": "ticks",
        "radius": 250,
        "width": 14,
        "length": 20,
        "color": "gray",
        "layout": "24"
      },
      "majorHours": {
        "type": "radial",
        "content": "text",
        "text": "24",
        "start": 180,
        "include": [
          0,
          6,
          12,
          18
        ],
        "orient": true,
        "count": 24,
        "radius": 200,
        "weight": 300,
        "size": 50,
        "color": "#787878",
        "family": "Oswald, Calibri, Impact, sans-serif"
      },
      "minorHours": {
        "type": "radial",
        "content": "text",
        "text": "24",
        "start": 180,
        "exclude": [
          0,
          6,
          12,
          18
        ],
        "orient": true,
        "count": 24,
        "radius": 202,
        "weight": 300,
        "size": 30,
        "color": "#565656",
        "family": "Oswald, Calibri, Impact, sans-serif"
      },
      "minutes": {
        "type": "radial",
        "content": "text",
        "text": "minutes",
        "orient": true,
        "radius": 166,
        "weight": 300,
        "size": 16,
        "color": "#9a9a9a",
        "family": "Oswald, Calibri, Impact, sans-serif"
      },
      "minor3": {
        "type": "radial",
        "content": "ticks",
        "radius": 172,
        "width": 4,
        "length": 10,
        "color": "gray",
        "layout": "minute",
        "exclude": [
          0,
          5,
          10,
          15,
          20,
          25,
          30,
          35,
          40,
          45,
          50,
          55
        ]
      },
      "minor2": {
        "type": "radial",
        "content": "ticks",
        "radius": 158,
        "width": 4,
        "length": 5,
        "color": "#DD2323",
        "layout": "minute"
      },
      "events": {
        "type": "events",
        "radius": [
          150,
          79
        ],
        "width": 10
      },
      "hour": {
        "type": "arm",
        "start": 180,
        "axis": "REV24",
        "width": 14,
        "length": 186,
        "offset": 20,
        "color": "gray",
        "shadowColor": "black",
        "shadow": 2
      },
      "minute": {
        "type": "arm",
        "axis": "minutes",
        "width": 6,
        "length": 158,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2
      },
      "second": {
        "type": "arm",
        "axis": "seconds",
        "width": 4,
        "length": 148,
        "offset": 14,
        "color": "#DD2323",
        "shadowColor": "black",
        "shadow": 2
      },
      "inner2": {
        "type": "circle",
        "color": "#232323",
        "radius": 3
      },
      "glass": {
        "type": "circle",
        "radius": 246,
        "color": {
          "extent": [
            0,
            -256,
            0,
            256
          ],
          "stops": [
            {
              "pos": 0,
              "color": "#FFFFFF11"
            },
            {
              "pos": 0.5,
              "color": "#22222244"
            },
            {
              "pos": 0.5,
              "color": "#22222233"
            },
            {
              "pos": 1,
              "color": "#FFFFFF11"
            }
          ]
        }
      }
    }
  },
  "military": {
    "name": "military",
    "layers": {
      "rim": {
        "type": "circle",
        "color": "beige",
        "border": {
          "width": 10,
          "color": "black"
        }
      },
      "minor": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 5,
        "length": 10,
        "color": "#232323",
        "layout": "minute",
        "exclude": [
          0,
          5,
          10,
          15,
          20,
          25,
          30,
          35,
          40,
          45,
          50,
          55
        ]
      },
      "numerals2": {
        "orient": true,
        "radius": 200,
        "type": "radial",
        "content": "text",
        "weight": 300,
        "size": 36,
        "color": "#121212",
        "family": "Oswald, Calibri, Impact, sans-serif",
        "count": 60,
        "include": [
          0,
          5,
          10,
          15,
          20,
          25,
          30,
          35,
          40,
          45,
          50,
          55
        ],
        "text": "NN"
      },
      "minorLarge": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 10,
        "length": 20,
        "color": "#232323",
        "layout": "minute",
        "include": [
          0,
          5,
          10,
          15,
          20,
          25,
          30,
          35,
          40,
          45,
          50,
          55
        ]
      },
      "major": {
        "type": "radial",
        "content": "ticks",
        "radius": 154,
        "width": 15,
        "length": 24,
        "color": "#232323",
        "layout": "24",
        "exclude": [
          0,
          3,
          6,
          9,
          12,
          15,
          18,
          21
        ]
      },
      "numeralsLarge": {
        "type": "radial",
        "content": "text",
        "layout": "24",
        "text": "NN",
        "degrees": 15,
        "radius": 140,
        "weight": 400,
        "size": 36,
        "color": "black",
        "family": "Oswald, Calibri, Impact, 'Segoe UI', Helvetica",
        "include": [
          0,
          3,
          6,
          9,
          12,
          15,
          18,
          21
        ],
        "orient": true
      },
      "label": {
        "type": "text",
        "pos": [
          0,
          56
        ],
        "value": "$label",
        "family": "Calibri",
        "weight": 400,
        "size": 18,
        "color": "black",
        "align": "center"
      },
      "hour": {
        "type": "arm",
        "axis": "HOURS24",
        "width": 20,
        "length": 120,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2
      },
      "minute": {
        "type": "arm",
        "axis": "MINUTES",
        "width": 15,
        "length": 186,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2
      },
      "second": {
        "type": "arm",
        "axis": "SECONDS",
        "width": 5,
        "length": 236,
        "offset": 20,
        "color": "#DD2323",
        "shadowColor": "black",
        "shadow": 2
      }
    }
  },
  "office": {
    "name": "office",
    "layers": {
      "rim": {
        "type": "circle",
        "color": "beige",
        "border": {
          "width": 10,
          "color": "black"
        }
      },
      "minor": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 5,
        "length": 10,
        "color": "#232323",
        "layout": "minute"
      },
      "major": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 15,
        "length": 30,
        "color": "#232323",
        "layout": "hour"
      },
      "numerals": {
        "type": "radial",
        "content": "text",
        "text": "12",
        "radius": 190,
        "weight": 300,
        "size": 40,
        "color": "black",
        "family": "Impact, Calibri, 'Segoe UI', Helvetica"
      },
      "label": {
        "type": "text",
        "pos": [
          0,
          56
        ],
        "value": "$label",
        "family": "Calibri",
        "weight": 400,
        "size": 18,
        "color": "black",
        "align": "center"
      },
      "hour": {
        "type": "arm",
        "axis": "HOURS",
        "width": 20,
        "length": 120,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2
      },
      "minute": {
        "type": "arm",
        "axis": "MINUTES",
        "width": 15,
        "length": 166,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2
      },
      "second": {
        "type": "arm",
        "axis": "SECONDS",
        "width": 5,
        "length": 236,
        "offset": 20,
        "color": "#DD2323",
        "shadowColor": "black",
        "shadow": 2
      }
    }
  },
  "pressure": {
    "name": "pressure",
    "axes": {
      "PSI2KPA": {
        "name": "hour10",
        "pointA": {
          "angle": 225,
          "value": 0
        },
        "pointB": {
          "angle": 135,
          "value": 300
        }
      }
    },
    "layers": {
      "rim": {
        "type": "circle",
        "color": "beige",
        "border": {
          "width": 10,
          "color": "#343434"
        }
      },
      "edge": {
        "type": "circle",
        "color": "beige",
        "border": {
          "width": 2,
          "color": "#121212"
        },
        "radius": 246
      },
      "numbers": {
        "type": "radial",
        "content": "text",
        "text": [
          "0",
          "30",
          "60",
          "90",
          "120",
          "150",
          "180",
          "210",
          "240",
          "270",
          "300"
        ],
        "count": 11,
        "color": "black",
        "degrees": 27,
        "weight": "bold",
        "family": "Calibri",
        "size": 40,
        "start": 225,
        "radius": 208,
        "orient": true
      },
      "majorRimBlack": {
        "type": "arc",
        "radius": 168,
        "border": {
          "width": 2,
          "color": "black"
        },
        "start": 225,
        "degrees": 135
      },
      "majorBlack": {
        "type": "radial",
        "content": "ticks",
        "start": 225,
        "count": 11,
        "degrees": 27,
        "radius": 188,
        "color": "black",
        "width": 6,
        "length": 20
      },
      "minorBlack": {
        "type": "radial",
        "content": "ticks",
        "start": 225,
        "count": 60,
        "degrees": 4.5,
        "radius": 182,
        "color": "black",
        "width": 2,
        "length": 14,
        "exclude": [
          0,
          6,
          12,
          18,
          24,
          30,
          36,
          42,
          48,
          54,
          60
        ]
      },
      "majorRim": {
        "type": "arc",
        "radius": 163,
        "border": {
          "width": 2,
          "color": "darkred"
        },
        "start": 225,
        "degrees": 135
      },
      "major": {
        "type": "radial",
        "content": "ticks",
        "start": 225,
        "count": 11,
        "degrees": 26.10675729901423,
        "radius": 163,
        "color": "darkred",
        "width": 6,
        "length": 24
      },
      "minor": {
        "type": "radial",
        "content": "ticks",
        "start": 225,
        "count": 50,
        "degrees": 5.221351459802846,
        "radius": 163,
        "color": "darkred",
        "width": 2,
        "length": 14
      },
      "numbers2": {
        "type": "radial",
        "content": "text",
        "text": [
          "0",
          "400",
          "800",
          "1200",
          "1600",
          "2000"
        ],
        "count": 6,
        "color": "darkred",
        "degrees": 52.21351459802846,
        "weight": "bold",
        "family": "Calibri",
        "size": 30,
        "start": 225,
        "radius": 113,
        "orient": false
      },
      "inner2": {
        "type": "circle",
        "color": "#232323",
        "radius": 6
      },
      "labelKPA": {
        "type": "text",
        "pos": [
          0,
          66
        ],
        "value": "kPa",
        "family": "Calibri",
        "weight": 400,
        "size": 36,
        "color": "darkred",
        "align": "center"
      },
      "labelPSI": {
        "type": "text",
        "pos": [
          0,
          106
        ],
        "value": "psi",
        "family": "Calibri",
        "weight": 400,
        "size": 36,
        "color": "black",
        "align": "center"
      },
      "labelWatermark": {
        "type": "text",
        "pos": [
          0,
          176
        ],
        "value": "$label",
        "family": "Calibri",
        "weight": "bold",
        "size": 18,
        "color": "#b9b9a7",
        "align": "center"
      },
      "pointer": {
        "type": "arm",
        "axis": "PSI2KPA",
        "width": 8,
        "length": 188,
        "offset": 20,
        "color": "#DD2323",
        "shadowColor": "black",
        "shadow": 2,
        "layers": [
          {
            "type": "path",
            "points": [
              {
                "x": -1.5,
                "y": -235
              },
              {
                "x": -5,
                "y": 65
              },
              {
                "x": 5,
                "y": 65
              },
              {
                "x": 1.5,
                "y": -235
              }
            ]
          }
        ]
      },
      "glass": {
        "type": "circle",
        "radius": 246,
        "color": {
          "extent": [
            0,
            -256,
            0,
            256
          ],
          "stops": [
            {
              "pos": 0,
              "color": "#FFFFFF11"
            },
            {
              "pos": 0.5,
              "color": "#22222244"
            },
            {
              "pos": 0.5,
              "color": "#22222233"
            },
            {
              "pos": 1,
              "color": "#FFFFFF11"
            }
          ]
        }
      }
    }
  },
  "simple": {
    "name": "simple",
    "layers": {
      "hour": {
        "type": "arm",
        "axis": "hours",
        "width": 4,
        "length": 200,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 1
      },
      "major_ticks": {
        "type": "radial",
        "content": "ticks",
        "layout": "hour",
        "color": "darkblue",
        "width": 8,
        "length": 40,
        "include": [
          0,
          3,
          6,
          9,
          12
        ]
      },
      "minor_ticks": {
        "type": "radial",
        "content": "ticks",
        "layout": "hour",
        "color": "black",
        "width": 4,
        "length": 10,
        "exclude": [
          0,
          3,
          6,
          9,
          12
        ]
      },
      "inner2": {
        "type": "circle",
        "color": "#232323",
        "radius": 6
      }
    }
  },
  "speedometer": {
    "name": "speedometer",
    "axes": {
      "MPH": {
        "name": "MPH",
        "pointA": {
          "angle": 225,
          "value": 0
        },
        "pointB": {
          "angle": 135,
          "value": 150
        }
      }
    },
    "layers": {
      "back": {
        "type": "circle",
        "color": "black",
        "radius": 256
      },
      "major": {
        "type": "radial",
        "content": "ticks",
        "start": 225,
        "count": 31,
        "degrees": 9,
        "radius": 245,
        "color": "#fff",
        "width": 4,
        "length": 40
      },
      "minor": {
        "type": "radial",
        "content": "ticks",
        "start": 225,
        "count": 90,
        "degrees": 3,
        "radius": 245,
        "color": "#1ec9e8",
        "width": 6,
        "length": 20,
        "exclude": [
          0,
          3,
          6,
          9,
          12,
          15,
          18,
          21,
          24,
          27,
          30,
          33,
          36,
          39,
          42,
          45,
          48,
          51,
          54,
          57,
          60,
          63,
          66,
          69,
          72,
          75,
          78,
          81,
          84,
          87,
          90
        ]
      },
      "arm": {
        "type": "arm",
        "style": "rect",
        "offset": 0,
        "length": 180,
        "axis": "MPH",
        "color": "red",
        "width": 6
      },
      "loop": {
        "type": "circle",
        "radius": 30,
        "color": "black",
        "border": {
          "color": "red",
          "width": 6
        }
      },
      "labels": {
        "type": "radial",
        "content": "text",
        "radius": 180,
        "weight": "bold",
        "text": "*10",
        "count": 16,
        "degrees": 18,
        "start": 225,
        "orient": true,
        "family": "Calibri",
        "size": 30,
        "color": "#fff"
      }
    }
  },
  "stopwatch": {
    "name": "stopwatch",
    "layers": {
      "rim": {
        "type": "circle",
        "color": "#121212",
        "border": {
          "width": 10,
          "color": "black"
        }
      },
      "numerals2": {
        "orient": true,
        "radius": 222,
        "type": "radial",
        "content": "text",
        "weight": 300,
        "size": 18,
        "color": "#565656",
        "family": "Oswald, Calibri, Impact, sans-serif",
        "count": 60,
        "exclude": [
          0,
          5,
          10,
          15,
          20,
          25,
          30,
          35,
          40,
          45,
          50,
          55
        ],
        "text": "NN"
      },
      "minor": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 5,
        "length": 10,
        "color": "darkgray",
        "layout": "minute"
      },
      "major": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 15,
        "length": 30,
        "color": "gray",
        "layout": "hour"
      },
      "numerals": {
        "orient": true,
        "radius": 190,
        "type": "radial",
        "content": "text",
        "weight": 300,
        "size": 40,
        "color": "#565656",
        "family": "Oswald, Calibri, Impact, sans-serif",
        "text": "minutes",
        "exclude": [
          0,
          3,
          6,
          9
        ]
      },
      "numerals3": {
        "content": "text",
        "orient": true,
        "radius": 180,
        "type": "radial",
        "weight": 300,
        "size": 60,
        "color": "#898989",
        "family": "Oswald, Calibri, Impact, sans-serif",
        "text": "minutes",
        "exclude": [
          1,
          2,
          4,
          5,
          7,
          8,
          10,
          11
        ]
      },
      "second": {
        "type": "arm",
        "axis": "seconds",
        "relative": true,
        "width": 5,
        "length": 236,
        "offset": -8,
        "color": "#DD2323"
      },
      "inner2": {
        "type": "circle",
        "color": "#DD2323",
        "radius": 10,
        "border": {
          "width": 5,
          "color": "#DD2323"
        }
      },
      "minute": {
        "type": "arm",
        "axis": "minutes",
        "relative": true,
        "color": "#343434",
        "width": 5,
        "length": 216,
        "offset": 0,
        "shadowColor": "black",
        "shadow": 2
      },
      "inner3": {
        "type": "circle",
        "color": "#232323",
        "radius": 5
      }
    }
  },
  "theory": {
    "name": "theory",
    "layers": {
      "degree_ticks_major": {
        "type": "radial",
        "content": "ticks",
        "layout": "hour",
        "color": "black",
        "width": 1,
        "count": 12,
        "length": 34,
        "degrees": 30
      },
      "degree_ticks_minor": {
        "type": "radial",
        "content": "ticks",
        "layout": "hour",
        "color": "black",
        "width": 1,
        "count": 72,
        "length": 6,
        "degrees": 5,
        "exclude": [
          0,
          18,
          36,
          54
        ]
      },
      "degree_circle": {
        "type": "circle",
        "border": {
          "width": 1,
          "color": "black"
        }
      },
      "degree_numerals": {
        "orient": true,
        "radius": 242,
        "type": "radial",
        "content": "text",
        "weight": 300,
        "size": 10,
        "count": 72,
        "degrees": 5,
        "color": "#565656",
        "family": "Oswald, Calibri, Impact, sans-serif",
        "text": "minutes",
        "background": "white"
      },
      "minute_ticks_major": {
        "type": "radial",
        "content": "ticks",
        "layout": "minute",
        "color": "black",
        "width": 1,
        "length": 34,
        "radius": 222,
        "include": [
          0,
          5,
          10,
          15,
          20,
          25,
          30,
          35,
          40,
          45,
          50,
          55
        ]
      },
      "minute_ticks_minor": {
        "type": "radial",
        "content": "ticks",
        "layout": "minute",
        "color": "black",
        "width": 1,
        "length": 6,
        "exclude": [
          0,
          5,
          10,
          15,
          20,
          25,
          30,
          35,
          40,
          45,
          50,
          55
        ],
        "radius": 222
      },
      "minute_circle": {
        "type": "circle",
        "border": {
          "width": 1,
          "color": "black"
        },
        "radius": 222
      },
      "minute_numerals": {
        "orient": true,
        "radius": 202,
        "type": "radial",
        "content": "text",
        "weight": 300,
        "size": 14,
        "color": "#565656",
        "family": "Oswald, Calibri, Impact, sans-serif",
        "text": "minutes",
        "background": "white"
      },
      "hour24_ticks_major": {
        "type": "radial",
        "content": "ticks",
        "layout": "24",
        "color": "black",
        "width": 1,
        "radius": 188,
        "length": 34,
        "include": [
          0,
          2,
          4,
          6,
          8,
          10,
          12,
          14,
          16,
          18,
          20,
          22,
          24
        ]
      },
      "hour24_ticks_minor": {
        "type": "radial",
        "content": "ticks",
        "layout": "24",
        "color": "black",
        "width": 1,
        "radius": 188,
        "length": 10,
        "exclude": [
          0,
          2,
          4,
          6,
          8,
          10,
          12,
          14,
          16,
          18,
          20,
          22,
          24
        ]
      },
      "hour24_circle": {
        "type": "circle",
        "radius": 188,
        "border": {
          "width": 1,
          "color": "black"
        }
      },
      "hour24_numerals": {
        "orient": true,
        "radius": 168,
        "type": "radial",
        "content": "text",
        "weight": 300,
        "size": 14,
        "color": "#565656",
        "family": "Oswald, Calibri, Impact, sans-serif",
        "layout": "24",
        "degrees": 15,
        "text": "NN",
        "background": "white"
      },
      "hour_ticks": {
        "type": "radial",
        "content": "ticks",
        "layout": "hour",
        "color": "black",
        "width": 1,
        "radius": 154,
        "length": 10
      },
      "hour_circle": {
        "type": "circle",
        "radius": 154,
        "border": {
          "width": 1,
          "color": "black"
        }
      },
      "hour_numerals": {
        "orient": true,
        "radius": 134,
        "type": "radial",
        "content": "text",
        "weight": 300,
        "size": 14,
        "color": "#565656",
        "family": "Oswald, Calibri, Impact, sans-serif",
        "text": "12"
      },
      "radian_ticks": {
        "type": "radial",
        "content": "ticks",
        "layout": "hour",
        "color": "black",
        "width": 1,
        "count": 7,
        "radius": 120,
        "length": 10,
        "radians": 1
      },
      "radian_circle": {
        "type": "circle",
        "radius": 120,
        "border": {
          "width": 1,
          "color": "black"
        }
      },
      "radian_numerals": {
        "orient": true,
        "radius": 100,
        "type": "radial",
        "content": "text",
        "weight": 300,
        "size": 14,
        "count": 7,
        "color": "#565656",
        "family": "Oswald, Calibri, Impact, sans-serif",
        "text": [
          "0rad",
          "1rad",
          "2rad",
          "3rad",
          "4rad",
          "5rad",
          "6rad"
        ],
        "radians": 1
      }
    }
  },
  "unitless": {
    "name": "unitless",
    "axes": {
      "TEN": {
        "name": "TEN",
        "pointA": {
          "angle": 225,
          "value": 0
        },
        "pointB": {
          "angle": 135,
          "value": 10
        }
      }
    },
    "layers": {
      "major_ticks": {
        "type": "radial",
        "content": "ticks",
        "layout": "hour",
        "color": "#343434",
        "width": 8,
        "degrees": 27,
        "length": 40,
        "include": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10
        ],
        "start": 225
      },
      "major_circle": {
        "type": "arc",
        "radius": 226,
        "border": {
          "width": 10,
          "color": "#343434"
        },
        "start": 225,
        "degrees": 135
      },
      "pointer": {
        "type": "arm",
        "axis": "TEN",
        "color": "#DD2323",
        "layers": [
          {
            "type": "path",
            "points": [
              {
                "x": -2,
                "y": -212
              },
              {
                "x": -5,
                "y": 65
              },
              {
                "x": 5,
                "y": 65
              },
              {
                "x": 2,
                "y": -212
              }
            ]
          }
        ]
      },
      "pin": {
        "type": "circle",
        "radius": 26,
        "color": "white",
        "border": {
          "color": "#DD2323",
          "width": 6
        }
      }
    }
  },
  "uptown": {
    "name": "uptown",
    "layers": {
      "rim": {
        "type": "circle",
        "color": "#fff4ab",
        "border": {
          "width": 10,
          "color": "black"
        }
      },
      "centroid": {
        "type": "circle",
        "color": "#fff",
        "radius": 216,
        "border": {
          "width": 1,
          "color": "#343434"
        }
      },
      "centroid2": {
        "type": "circle",
        "color": "beige",
        "radius": 145,
        "border": {
          "width": 1,
          "color": "#343434"
        }
      },
      "minor": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 5,
        "length": 10,
        "color": "#676767",
        "layout": "minute"
      },
      "major": {
        "type": "radial",
        "content": "ticks",
        "radius": 246,
        "width": 10,
        "length": 30,
        "color": "#454545",
        "layout": "hour"
      },
      "numerals": {
        "type": "radial",
        "content": "text",
        "radius": 175,
        "orient": true,
        "weight": 300,
        "size": 60,
        "color": "#232323",
        "text": "roman",
        "family": "Six Caps, Oswald, Calibri, Impact, sans-serif"
      },
      "hour": {
        "type": "arm",
        "axis": "hours",
        "color": "#121212",
        "width": 6,
        "length": 120,
        "offset": 20,
        "layers": [
          {
            "type": "rect",
            "bounds": [
              -3,
              -145,
              6,
              165
            ]
          },
          {
            "type": "rect",
            "bounds": [
              -7,
              -145,
              14,
              40
            ]
          },
          {
            "type": "rect",
            "bounds": [
              -9,
              20,
              18,
              40
            ]
          }
        ]
      },
      "minute": {
        "type": "arm",
        "axis": "minutes",
        "color": "#121212",
        "width": 5,
        "length": 216,
        "offset": 20,
        "shadowColor": "black",
        "shadow": 2,
        "layers": [
          {
            "type": "rect",
            "bounds": [
              -2,
              -216,
              4,
              266
            ]
          },
          {
            "type": "rect",
            "bounds": [
              -4,
              -216,
              8,
              30
            ]
          },
          {
            "type": "rect",
            "bounds": [
              -5,
              20,
              10,
              40
            ]
          }
        ]
      }
    }
  }
}
;
return themes;
}));
