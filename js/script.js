
document.getElementsByClassName("menu-toggle")[0].addEventListener('click', function(){
    document.getElementsByTagName('nav')[0].classList.toggle('active');
});

$(document).ready(function(){
    $('.list').click(function(){
        $('.list').removeClass('active');
        $(this).addClass('active');
        const value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.card').show('1000');
        }
        else{
            $('.card').not('.'+value).hide('1000');
            $('.card').filter('.'+value).show('1000');
        }
    });

    let zero = 0;
    $(window).on('scroll', function(){
        $('header').toggleClass('hide', $window.scrollTop() > zero);
        zero = $window.scrollTop();
    })
});


