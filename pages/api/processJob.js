const Queue = require('bull');
import discordHandling from './discordBot/discordHandling';


const windowsComputerIpAddress = '<IP address of your Windows computer>';
const windowsComputerUsername = '<username of your Windows computer>';
const windowsComputerPassword = '<password of your Windows computer>';

const jobQueue = new Queue('my-queue');

const processJob = async (job) => {
    // Send Discord message to approval user
    discordHandling(job);
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
    try {
        const jobId = req.query.jobId;
        console.log("hi");
        const job = await jobQueue.getJob(jobId);
        if (job === null) {
            res.status(404).end();
            return;
        }
        await processJob(job);
        res.status(200).json({message: 'good'});
    } catch (error) {
        console.error(error);
        res.status(500).end();
    }
}

