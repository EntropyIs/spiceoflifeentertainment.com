
$("<a>", {
    href : "index.html",
    class : "logo",
    html :  `<img src="images/logo_nt.png" /> <span>Spice of Life Entertainment</span>`
}).appendTo("#header");

var links = []
links.push(`<a href="index.html">Home</a>`)
links.push(`<a href="artists.html">Artists</a>`)

$("<nav>", {
    html : links.join( " | " )
}).appendTo("#header");