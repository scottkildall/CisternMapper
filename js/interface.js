// Modal Button JS
$('.button').click(function () {
    $('#modal').css('display', 'block').fadeIn();
    $('.modal-bg').fadeIn();
});

$('#close').click(function () {
    $('.modal-bg').fadeOut();
    $('#modal').fadeOut();
    return false;
});

$('#modal').click(function () {
    $('.modal-bg').fadeOut();
    $('#modal').fadeOut();
    return false;
});
