export default function formHandler(req, res) {
    const body = req.body;

    res.status(200).json(
        {
            data: 
            {
                artistName: body.artistName
            }
        }
    );
}