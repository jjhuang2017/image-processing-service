var express = require('express');
var router = express.Router();
var multer  = require('multer');
var sharp = require('sharp');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/')
    },
    filename: function (req, file, cb) {
		var fileFormat = (file.originalname).split(".");
        cb(null, 'crop_image.png');
		//cb(null, Date.now() + '.png');
  }
})

var upload = multer({ storage: storage })
var path = 'public/images/';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/Image-Upload-Service', upload.single('imageupload'),function(req, res) {
  res.send("image upload sucessfully.");
});

router.get('/Large-Image-URL', function(req, res) {
	sharp(path + 'crop_image.png')
		.resize(150, 150)
		.toFile(path + '/large/' + Math.floor(Date.now() / 1000) + '.png', function(err) {  
		if (err) {  
			throw err;  
		}  
	});
	res.send('http://127.0.0.1:3003/images/large/' + Math.floor(Date.now() / 1000) + '.png');
});

router.get('/Medium-Image-URL', function(req, res) {
	sharp(path + 'crop_image.png')
		.resize(100, 100)
		.toFile(path + '/medium/' + Math.floor(Date.now() / 1000) + '.png', function(err) {  
		if (err) {  
			throw err;  
		}  
	});
	res.send('http://127.0.0.1:3003/images/medium/' + Math.floor(Date.now() / 1000) + '.png');
});

router.get('/Small-Image-URL', function(req, res) {
	sharp(path + 'crop_image.png')
		.resize(50, 50)
		.toFile(path + '/small/' + Math.floor(Date.now() / 1000) + '.png', function(err) {  
		if (err) {  
			throw err;  
		}  
	});
	res.send('http://127.0.0.1:3003/images/small/' + Math.floor(Date.now() / 1000) + '.png');
});

module.exports = router;
