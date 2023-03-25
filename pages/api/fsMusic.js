import formidable from 'formidable';
import path from 'path';
import fs from 'fs';

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
        // can use to check for the file's properties.
        //console.log(files);

        //  rename the file
        const oldFilePath = files.musicfile.filepath;
        const newFileName = files.musicfile.originalFilename.split(" ").join(""); // to store without spaces
        const newFilePath = `${form.uploadDir}/${newFileName}`;

        await fs.promises.rename(oldFilePath, newFilePath);

        const songFilePath = newFilePath;
        const songFileName = newFileName;
        res.status(200).json(
            {
                message: "Uploaded!",
                songPath: songFilePath,
                songName: songFileName,
            });
    });  
}