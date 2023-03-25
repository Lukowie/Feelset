import executeQuery from "../../lib/db";

export default function formHandler(req, res) {
    const body = req.body;

    const todayNow = new Date().toISOString().slice(0, 19).replace('T', ' ');

    const query = 'INSERT INTO submissions (ArtistName, Linktree, Soundcloud, Spotify, Instagram, Twitter, SongName, SongPath, DateSubmitted) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [body.artistName, body.linktree, body.soundcloud, body.spotify, body.instagram, body.twitter, body.songName, body.songPath, todayNow];

    const results = executeQuery({query, values});

    if (results.error) {
        console.log(results.error);
    } else {
        console.log('DAte inserted successfully!');
    }
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