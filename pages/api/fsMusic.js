import formidable from 'formidable';

const multer = require('multer');

export const config = {
    api: {
      bodyParser: false,
    },
  }

export default async function fsMusic (req, res) {
    const form = new formidable.IncomingForm({
        uploadDir: "pages/api/uploads",
        keepExtensions: true,
    });
    form.parse(req, (err, fields, files) => {
        if(err){
            console.log(err);
            res.status(500).json({message: "Failed to Upload file"});
        }
        
        const filePath = files.file.path;
        res.status(200).json({message: filePath});
    });  
}