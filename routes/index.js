var express = require('express');
var router = express.Router();
var multer  = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/Image-Upload-Service', upload.single('imageupload'),function(req, res) {
  res.send("image upload sucessfully.");
});

router.get('/Large-Image-URL', function(req, res) {
	res.send("http://127.0.0.1:3003/images/large/xIOfB.jpg");
});

router.get('/Medium-Image-URL', function(req, res) {
	res.send("http://127.0.0.1:3003/images/medium/xIOfB.jpg");
});

router.get('/Small-Image-URL', function(req, res) {
	res.send("http://127.0.0.1:3003/images/small/xIOfB.jpg");
});

router.post('/upload_image', function (req, res) {
    req.pipe(req.busboy);
    req.busboy.on('file', function (fieldname, file, filename) {
        console.log('\n\nUploading file: '.underline.bold +filename .underline.bold);
        gm(file,'public/images/' + filename)
        .resize(50,50)
        .write('public/images/' + filename, function (err) {
            console.log("finished");
        });
    });

    req.busboy.on('finish', function () {
        res.writeHead(303, { Connection: 'close', Location: '/' });
        res.end();
    });
});

module.exports = router;
