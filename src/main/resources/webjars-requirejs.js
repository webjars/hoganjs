/*global requirejs */
/*global webjars */

requirejs.config({
  "paths": {
    "hoganjs": webjars.path("hoganjs", "hogan")
  },
  "shim": {
    "hoganjs": {"exports": "Hogan"}
  },
  "packages": []
});

