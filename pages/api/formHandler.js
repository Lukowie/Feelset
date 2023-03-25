export default function formHandler(req, res) {
    const body = req.body;
    res.status(200).json(
        {
            data: 
            {
                artistName: body.artistName,
                linktree: body.linktree,
                soundcloud: body.soundcloud,
                spotify: body.spotify,
                twitter: body.twitter,
                instagram: body.instagram,
                songName: body.songName,
                songPath: body.songPath,
            }
        }
    );
}