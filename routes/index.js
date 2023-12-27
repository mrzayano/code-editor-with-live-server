var express = require('express');
var router = express.Router();
// const bodyParser = require('body-parser');



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/code', function (req, res, next) {
  const { htmlCode, cssCode, jsCode } = req.body;
  // You can now use htmlCode, cssCode, and jsCode
  // for further processing or rendering

  // For now, you might just want to console.log them
  console.log(htmlCode);
  console.log(cssCode);
  console.log(jsCode);


  let combinedCode = `
  <html>
  <head>
      <style>${cssCode}</style>
  </head>
  <body>
      ${htmlCode}
      <script>${jsCode}</script>
  </body>
  </html>
`;
  res.render('run', { code: combinedCode });
});




module.exports = router;
