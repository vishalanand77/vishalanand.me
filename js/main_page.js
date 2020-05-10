

var photoIndex = 2;
setInterval(function(){
    let lastPhoto = photoIndex - 1;  
    if(photoIndex > $('div[class^="image-slide"]').length){
        photoIndex = 1;
        lastPhoto = $('div[class^="image-slide"]').length;
    }
    $('.image-slide-'+photoIndex).show()
    $('.image-slide-'+lastPhoto).hide()
    photoIndex++;
}, 6000)

/*
    font_spacing       : {number},
    first_letter_size  : {number},
    other_letters_size : {number}
*/
function firstFontBigFollowedSmall(font_spacing = null, first_letter_size = null, other_letters_size = null){
    let text = $('.caps_change').text();
    let text_array = text.split(' ');
    let first_letter = '';
    let letter_list = '';
    if(font_spacing == null){
        font_spacing = 0.9;
    }
    if(first_letter_size == null){
        first_letter_size = 4;
    }
    if(other_letters_size == null){
        other_letters_size = 2;
    }
    $('.caps_change').html('');
    text_array.forEach(function(item, index){
        first_letter = item.charAt(0).toUpperCase();
        letter_list = item.substring(1, item.length).toUpperCase();        
        $('.caps_change').append(`<span style="display: inline-block; margin-right: `+font_spacing+`vw; align-items: baseline;"><p style="font-size: `+first_letter_size+`vw; display: inline-block;">`+' '+first_letter+`</p><p style="font-size: `+other_letters_size+`vw; display: inline-block;">`+letter_list+`</p></span>`)
    })
    $('.caps_change').css('display', 'inline-block');

}
firstFontBigFollowedSmall();

$('#technical_btn').off('click');
$('#technical_btn').on('click', function(){
    $('.technical_skills_div').show();
    $('.education_div').hide();
    $('.certification_div').hide();
})

$('#education_btn').off('click');
$('#education_btn').on('click', function(){
    $('.technical_skills_div').hide();
    $('.education_div').show();
    $('.certification_div').hide();
})

$('#certificate_btn').off('click');
$('#certificate_btn').on('click', function(){
    $('.technical_skills_div').hide();
    $('.education_div').hide();
    $('.certification_div').show();
})


var certificate_array = ['java-certificate.jpg', 'certificate-machine-learning.jpg'];


function nextPrevDivSwitch(prev_btn, next_btn, current_photo, image_array ){
    $('.'+prev_btn).on('click', function(){
        if(current_photo == 0){
            $('.certificate_change').attr('src', './images/'+image_array[image_array.length-1]);
            current_photo = image_array.length-1;
        } else {
            current_photo = current_photo - 1;
            $('.certificate_change').attr('src', './images/'+image_array[current_photo]);
        }  
    })
    
    $('.'+next_btn).on('click', function(){
        if(current_photo == image_array.length-1){
            $('.certificate_change').attr('src', './images/'+image_array[0]);
            current_photo = 0;
        } else {
            current_photo = current_photo + 1;
            $('.certificate_change').attr('src', './images/'+image_array[current_photo]);
        }
    })
}

nextPrevDivSwitch('prev_btn','next_btn', current_photo = 0, certificate_array);

$(document).ready(function(){
    $('#contact_btn').on('click', function(e){
        e.preventDefault();
        $('#contact_modal').modal('show');
    })    

    if(window.matchMedia("(max-width: 767px)").matches){
        $('.vertical_line').hide();
    } else{
        $('.vertical_line').show()
    }

})