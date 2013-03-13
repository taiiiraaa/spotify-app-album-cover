$('document').ready(function() {
  
    var sp = getSpotifyApi();
    var models = sp.require("$api/models");
    var views = sp.require("$api/views");
    var player = models.player;

    var toplist = new models.Toplist();
    toplist.userName = models.TOPLISTUSER_CURRENT;
    console.log(toplist.userName);
    
    if(player.track)
    {
        
        /*
        var album = models.Album.fromURI(player.track.album.uri)        
        var albumCover = new views.Image('spotify:image:d0a8388a38683553ae3e1385ecbda367ba2f9af6');
        console.log(album);
        console.log(albumCover)
        albumCover.node.style.width = '1200px';
        albumCover.node.style.height = '1200px';
        albumCover.node.style.backgroundSize = 'cover';
        $('body').html(albumCover.node);
        */
        
        currentlyPlaying(player.track.album.artist.name, player.track.album.name, player.track.name)

        player.observe(models.EVENT.CHANGE, function(event) {
            currentlyPlaying(player.track.album.artist.name, player.track.album.name, player.track.name)
        });
    }
});

// Get the user's listening data
function currentlyPlaying(artist, album, trackName)
{
    // last.fm
    //var url = 'http://http://godzillafied.grito.co.uk/tymyt/ajax/';
   var url = 'http://godzillafied.grito.co.uk/album-art/ajax/'+encodeURI(artist)+'/'+encodeURI(trackName)+'/'+encodeURI(album);
    
    $.ajax({
        url: url,
        success: function(data) {
            $('#content').html(data);
        }
    });
}





