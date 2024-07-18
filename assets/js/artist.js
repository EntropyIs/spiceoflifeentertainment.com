// Get URL Params
const urlParams = new window.URLSearchParams(window.location.search);
console.log(urlParams)
console.log(urlParams.get('atrist'))

// Get Artists
const artistID = urlParams.get('atrist');
console.log(artistID);

$.getJSON('assets/data.json', function(data)
{
    console.log(data)

    // Get Artist Data
    var artistData
    $.each(data.artist, function(index, artist) {
        if (artist.id == artistID) {
            artistData = artist
            return false
        }
    });
    
    console.log(artistData)

    // Set Page Title
    $("<title>", {
        html: artistData.name + " - Spice of Life Entertainment"
    }).appendTo("head")

    // Build Artist Profile
    var profileHeader = `<header class="major"><h1>` + artistData.name + `</h1></header>`;
    var profileImage = `<span class="image main"><img src="images/` + artistData.banner_file_name + `" alt="` + artistData.name+ `" /></span>`;
    var profileParagraphs = [];

    $.each(artistData.long_description, function(index, line) {
        profileParagraphs.push(`<p>` + line + `</p>`)
    });

    var profileHTML = 

    $("<div>", {
        "class": "inner",
        html: profileHeader + profileImage + profileParagraphs.join("")
    }).appendTo( "#one" );


    // Get Artist Links
    var artistLinksHTML = [];
    $.each(artistData.links, function(index, link) {
        artistLinksHTML.push(`<section><div class="contact-method"><span class="icon ` + link.type +`"></span><a href="` + link.url + `">` + link.description + `</a></div></section>`);
    });

    $( "<section>", {
        "class": "split",
        html: artistLinksHTML.join( "" )
    }).appendTo( "#artist-links" );
    

    // Get Artist Tracks
    var artistTracks = []
    $.each(data.track, function(index, track) {
        if (track.artist_id == artistID) {
            artistTracks.push(track)
        }
    })

    console.log(artistTracks)

    // Featured Track
    $( "<iframe>", {
        "class": "bandcamp-responsive-iframe",
        "src": `https://bandcamp.com/EmbeddedPlayer/track=`+ artistTracks[0].track_id +`/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/transparent=true/`,
        "seamless" : "",
        html: `<a href="`+ artistTracks[0].beatport_url +`">`+ artistTracks[0].track_name +`</a>`
    }).appendTo("#latest")

    // Build Discography
    var discographyHTML = []
    $.each(artistTracks, function(index, track) {
        discographyHTML.push(`<div class="col-3 col-4-medium col-6-small"><a href="` + track.beatport_url + `"><span class="image fit"><img src="images/` + track.artist_id + `/` + track.image_file_name + `" /></span></a></div>`)
    });

    $( "<div>", {
        "class": "row",
        html: discographyHTML.join( "" )
    }).appendTo( "#discography" );
});