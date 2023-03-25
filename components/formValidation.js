export default function testRegex (links) {
    let errorMessages = [];
    let testArr = [];

    validateSpotifyLink(links.linktree, testArr);
    validateLinktreeLink(links.spotify, testArr);
    validateSoundcloudLink(links.soundcloud, testArr);
    validateInstagramLink(links.instagram, testArr);
    validateTwitterLink(links.twitter, testArr);
    
    for(let i =0; i <testArr.length; i++){
        let item = testArr[i];
        console.log(item.result);
        if (item.result == 'false'){
            errorMessages.push(item.name);
        }
    };

    if(errorMessages.length > 0){
        let messages = errorMessages.join('\n');
        alert(`For the social links: \n${messages} \nPlease check the link(s) and try again.`)

        return false;
    } else {
        return true;
    }
}

function validateSpotifyLink(spotifyLink, testArr){
    const spotifyRegex = /^https?:\/\/open\.spotify\.com\/user\/.+$/;

    if (spotifyLink !== "" && !spotifyRegex.test(spotifyLink)) {
        console.log("Invalid Spotify user profile link.");
        testArr.push({name: 'Spotify', result: 'false'});
    }else {
        testArr.push({name: 'Spotify', result: 'true'});
    }
}

function validateLinktreeLink(linktreeLink, testArr){
    const linktreeRegex = /^https?:\/\/linktr\.ee\/.+$/;

    if (linktreeLink !== "" && !linktreeRegex.test(linktreeLink)) {
        console.log("Invalid Linktree link.");
        testArr.push({name: 'Linktree', result: 'false'});
    }else {
        testArr.push({name: 'Linktree', result: 'true'});
    }
}

function validateSoundcloudLink(soundcloudLink, testArr){
    const soundcloudRegex =/^https?:\/\/(?:www\.)?soundcloud\.com\/.+$/;

    if (soundcloudLink !== "" && !soundcloudRegex.test(soundcloudLink)) {
        console.log("Invalid SoundCloud link.");
        testArr.push({name: 'SoundCloud', result: 'false'});
    }else {
        testArr.push({name: 'SoundCloud', result: 'true'});
    }
}

function validateTwitterLink(twitterLink, testArr){
    const twitterRegex = /^https?:\/\/(?:www\.)?twitter\.com\/.+$/;

    if (twitterLink !== "" && !twitterRegex.test(twitterLink)) {
        console.log("Invalid Twitter link.");
        testArr.push({name: 'Twitter', result: 'false'});
    }else {
        testArr.push({name: 'Twitter', result: 'true'});

}
}

function validateInstagramLink(instagramLink, testArr){
    const instagramRegex = /^https?:\/\/(?:www\.)?instagram\.com\/.+$/;

    if (instagramLink !== "" && !instagramRegex.test(instagramLink)) {
        console.log("Invalid Instagram link.");
        testArr.push({name: 'Instagram', result: 'false'});
    }else {
        testArr.push({name: 'Instagram', result: 'true'});
    }
}

