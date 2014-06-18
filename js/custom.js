+function(){
//  navigation toggle
  $('.nav-toggle').click(function(){
    $('body').toggleClass('sidebar-open');
  });

//  Condition for modal on check list items
  var photoList = $('.photo-based li span');
  photoList.on('click', function(){
    if($(this).find('input').is(':checked')){
      $(this).find('label').removeAttr('data-toggle');
    }
    else{
      $(this).find('label').attr("data-toggle","modal");
    }
  });

//  View more
  var viewMore = $('.btn-view-more');
  var sponsorGroup = $('.sponsor-list.multi.hidden');
  viewMore.click(function(){
    $('.sponsor-list.multi.hidden:first').removeClass('hidden');
    return false;
  });


  //  image zoom effect
  $('.img-zoom').click(function(){
    $('.mask').fadeIn(800);
    var imgSource = $(this).attr('src');
    $('.mask').append("<div class='zoomed-image-wrap'><img src="+ imgSource + " /></div>");
  });
  $('.mask').on('click', function(){
    $(this).fadeOut();
    $(this).find('.zoomed-image-wrap').remove();
  });

//  Select All
  $('#aboutme-select-all').on('change', function(){
    if($(this).is(':checked')){
      $('.question-list input').prop('checked', true);
    }
    else{
      $('.question-list input').prop('checked', false);
    }
  });

//  Select Album
  var singleAlbum = $('.select-album li');
  singleAlbum.click(function(){
    $('.select-album-single-modal .modal-header,.select-album-single-modal .select-album').hide();
    $('.album-picture-gallery-wrap').fadeIn(800);
    $('.'+$(this).attr('id')).fadeIn();
    //console.log($(this).attr('id'));
  });

  $('.back-to-album').click(function(){
    $('.album-picture-gallery-wrap, .album-picture-gallery').hide();
    $('.select-album-single-modal .modal-header,.select-album-single-modal .select-album').fadeIn(800);
  });

  $('.album-picture-gallery img').click(function(){
    console.log($(this).parent().attr('class'));
  });
}()