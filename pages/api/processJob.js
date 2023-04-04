import discordHandling from './discordBot/discordHandling';


const windowsComputerIpAddress = '<IP address of your Windows computer>';
const windowsComputerUsername = '<username of your Windows computer>';
const windowsComputerPassword = '<password of your Windows computer>';

const processJob = async (job, data) => {
    // Send Discord message to approval user
    discordHandling(job, data);
    // ...
    // Execute PowerShell script on Windows computer
    // ...
    // Read specifications of the rendered file
   // const filePath = '/path/to/rendered/file.json';
   // const fileContents = fs.readFileSync(filePath, 'utf8');
    // Send confirmation message back to node.js server with file specifications
    // ...
};

export default async function handler(req, res) {
    console.log(req.body);
    await processJob(req.body.id, req.body);
    res.status(200).end();
}

