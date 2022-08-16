const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${process.cwd()}/src/images`)
        // cb(null, '/src/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + file.originalname; //60423412312+ten_img.jpg
        cb(null, uniqueSuffix)
    }
})

const upload = multer({ storage })

module.exports = upload