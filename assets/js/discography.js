const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const artist = urlParams.get('atrist');

console.log(artist);

$.get('assets/data/discograpy.csv', function(csvData)
{
    console.log(csvData)
    var data = $.csv.toObjects(csvData);
    console.log(data);
});

