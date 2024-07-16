const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const artist = urlParams.get('atrist');

console.log(artist);

$.getJSON('assets/data/discography.json', function(data)
{
    console.log(data);
});