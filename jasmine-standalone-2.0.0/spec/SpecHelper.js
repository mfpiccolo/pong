beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var player = actual;

          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          }
        }
      };
    }
  });
});

var console = {
    panel: $('body').append('<div>').css({position:'fixed', top:0, right:0,background:'transpatent'}),
    log: function(m){
        this.panel.prepend('<div>'+m+'</div>');
    }

};
