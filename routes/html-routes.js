
// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  // about route loads about.html
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });
    // page2 route loads page2.html
  app.get("/page2", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/page2.html"));
  });

  // print.js route loads PDFs
  app.get('/print.js*', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/js/print.js"));
  });

  // pdf.js route loads PDFs
  app.get('/pdf.js*', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/js/pdf.js"));
  });


};
