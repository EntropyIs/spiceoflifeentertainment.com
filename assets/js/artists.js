

$.getJSON('assets/data.json', function(data)
{
    // Build Artist Panel
    var artist_panels = []
    $.each(data.artist, function(index, artist){
        if (artist.id != "") {
            var url = `artist.html?atrist=` + artist.id;
            
            artist_panels.push( 
                `<a href="` + url + `" class="image"><img src="images/` + artist.id + `.png" alt="` + artist.name + `" data-position="center center" /></a>`
            +   `<div class="content"><div class="inner"><header class="major"><h3>` + artist.name + `</header>`
            +   `<p>` + artist.short_description + `</p>`
            +   `<ul class="actions">`
            +       `<li><a href="` + url + `" class="button">Learn more</a></li>`
            +   `</ul></div></div>`
            );
        };
    });

    console.log(artist_panels)

    $.each(artist_panels, function(index, panel_html){
        $("<section>", {
            html : panel_html
        }).appendTo("#artists")

    });
});