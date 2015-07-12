$(document).ready(function(){
  /* *** parallax *** */
  $('.main-photo .background, .main-photo-landing .background').parallax("50%", .15);
  /* *** End parallax *** */
  $('[data-toggle="tooltip"]').tooltip();
  $('.dropdown-language').dropdown();
  /* *** Draggables *** */
  $('.draggables').sortable({
    revert: true,
    handle: ".ico-draggables"
  });
  /* *** End Draggables *** */
  /* *** Hide notification *** */
  $(".alert").alert();
  /* *** End 'Hide notification' *** */
  /* *** audio player *** */
  var mediaElementPlayers = new Array();
  $('audio').mediaelementplayer({
    startVolume: 0.2,
    success: function (mediaElement, domObject) {
      mediaElementPlayers.push(mediaElement);
      console.log(mediaElement);
      mediaElement.addEventListener('ended', function (e) {
        playNext(e.target);
      }, false);
    },
    keyActions: []
  });
  function playNext(currentPlayer) {
    for (i = 0; i < mediaElementPlayers.length; i++) {
      if (mediaElementPlayers[i] == currentPlayer) {
        if (mediaElementPlayers[i + 1] == undefined) {
          mediaElementPlayers[0].play();
        } else {
          mediaElementPlayers[i + 1].play();
        }
      }
    }
  }
  $(".mejs-playpause-button").click(function (event) {
    $(this).parent().addClass('countdown_track');
  });
  $(".audio-player .edit-block").click( function (event) {
    $(this).parent().addClass('write_name');
    $('.write_name input').focus();
    $('.write_name').parent().addClass('no_hover');
  });
  $(".confirm_name").click(function(){
    var text = $(".write_name input").val();
    $(".write_name .name_track").text(text);
    $(".audio-player .title").removeClass('write_name');
    $('.audio-player').removeClass('no_hover');
  });
  /* *** End 'audio player' *** */
  /* *** 'mentors page' *** */
  $("a[href='#collapseExample']").click(function(){
    $('.var_collapse').toggleClass('collapsed');
    $('.mentors_instruction').css({
      'height' : 'auto',
      'padding' : '10px 15px 10px 19px',
      'margin-bottom' : '17px',
      'border' : '1px solid #eee',
      'border-left' : '4px solid #FF8000'
    });
  });
  /* *** End 'mentors page' *** */
  /* *** file_upload *** */
  var wrapper = $( ".file_upload" ),
      inp = wrapper.find( "input" ),
      btn = wrapper.find( "button" ),
      lbl = wrapper.find( ".path" );
  btn.focus(function(){
      inp.focus()
  });
  // Crutches for the :focus style:
  inp.focus(function(){
      wrapper.addClass( "focus" );
  }).blur(function(){
      wrapper.removeClass( "focus" );
  });
  var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;
  inp.change(function(){
    var file_name;
    var _lbl = this.previousElementSibling;
    var label = $(_lbl);
    var button = $(_lbl.previousElementSibling);
    if( file_api && this.files[ 0 ] )
      file_name = this.files[ 0 ].name;
    else
      file_name = $(this).val().replace( "C:\\fakepath\\", '' );
    if( ! file_name.length )
      return;
    if( label.is( ":visible" ) ){
      label.text( file_name );
    }else
      button.text( file_name );
  }).change();
  $( window ).resize(function(){
    $( ".file_upload input" ).triggerHandler( "change" );
  });
  /* *** End 'file_upload' *** */
});