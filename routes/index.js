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
        cb(null, 'crop_image_' + Math.floor(Date.now() / 10000) + '.png');
	}
})

var upload = multer({ storage: storage })
var path = 'public/images/';
var host = '127.0.0.1:3003';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/Image-Upload-Service/large', upload.single('imageupload'),function(req, res) { 
	sharp(path + 'crop_image_' + Math.floor(Date.now() / 10000) + '.png')
	.resize(150, 150)
	.toFile(path + '/large/' + Math.floor(Date.now() / 10000) + '.png', function(err) {  
		if (err) {  
			throw err;  
		}  
	});
	res.send('http://' + host + '/images/large/' + Math.floor(Date.now() / 10000) + '.png');
});

router.post('/Image-Upload-Service/medium', upload.single('imageupload'),function(req, res) { 
	sharp(path + 'crop_image_' + Math.floor(Date.now() / 10000) + '.png')
	.resize(100, 100)
	.toFile(path + '/medium/' + Math.floor(Date.now() / 10000) + '.png', function(err) {  
		if (err) {  
			throw err;  
		}  
	});
	res.send('http://' + host + '/images/medium/' + Math.floor(Date.now() / 10000) + '.png');
});

router.post('/Image-Upload-Service/small', upload.single('imageupload'),function(req, res) { 
	sharp(path + 'crop_image_' + Math.floor(Date.now() / 10000) + '.png')
	.resize(50, 50)
	.toFile(path + '/small/' + Math.floor(Date.now() / 10000) + '.png', function(err) {  
		if (err) {  
			throw err;  
		}  
	});
	res.send('http://' + host + '/images/small/' + Math.floor(Date.now() / 10000) + '.png');
});

module.exports = router;
