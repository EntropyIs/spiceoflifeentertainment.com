const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const artist = urlParams.get('atrist');

console.log(artist);

$.getJSON('assets/data/discography.json', function(data)
{
    console.log(data);
    var items = [];
    $.each(data, function(key, val) {
        items.push("<li id='" + key + "'>" + val + "</li>");
    });

    $( "<ul/>", {
        "class" : "my-new-list",
        html: items.join("")
    }).appendTo("body");
});