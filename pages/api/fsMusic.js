import formidable from 'formidable';
//import path from 'path';
//import fs from 'fs';

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
    form.parse(req, async (err, fields, files) => {
        if(err){
            console.log(err);
            res.status(500).json({message: "Failed to Upload file"});
        }
        
        res.status(200).json(
            {
                message: "Uploaded!",
                songPath: files.musicfile.filepath,
                songName: files.musicfile.originalFilename,
            });
    });  
}