import executeQuery from "../../lib/db";

export default async function formHandler(req, res) {
    const body = req.body;
    const _state = "Submitted";

    const todayNow = new Date().toISOString().slice(0, 19).replace('T', ' ');

    let query = 'INSERT INTO submissions (ArtistName, Linktree, Soundcloud, Spotify, Instagram, Twitter, SongName, SongPath, DateSubmitted, State) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [body.artistName, body.linktree, body.soundcloud, body.spotify, body.instagram, body.twitter, body.songName, body.songPath, todayNow, _state];

    const results = await executeQuery({query, values});

    if (results.error) {
        console.log(results.error);
    } else {
        console.log('Data inserted successfully!' + results);
    }

    res.status(200).json(
        {
                id: results.insertId,
                artistName: body.artistName,
                linktree: body.linktree,
                soundcloud: body.soundcloud,
                spotify: body.spotify,
                twitter: body.twitter,
                instagram: body.instagram,
                songName: body.songName,
                songPath: body.songPath,
                state: _state,
        }
    );
}