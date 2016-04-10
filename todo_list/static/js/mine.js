function taskType(element) {

    var time = new Date();

    // prepare date
    var day = ( time.getDate()+1 ) < 10 ? '0' + ( time.getDate()+1 ) : ( time.getDate()+1 );
    var month = ( time.getMonth()+1 ) < 10 ? '0' + ( time.getMonth()+1 ) :  time.getMonth()+1 ;
    var stringTime = time.getFullYear() + '-' + month + '-' + day;

    // foreign li element
    var result = '<li class="collection-item"> <p class="left"> <input type="checkbox" id="task-closed-{{ task.id }}" class="js-task-closed" data-url="" data-flag="False"/> <label for="task-closed-{{ task.id }}"></label> </p> <p class="left li__p__margin"> '+ element.find('#description').val()+' </p> <input data-url="" type="date" class="datepicker js-update-deadline li__input__small li__input__margin__top" value='+ element.find('#deadline').val()+'> <a class="right js-task-delete li__a_delete__margin" data-url=""><i class="fa fa-times fa-2x"></i></a> </li>';

    if ( element.find('#deadline').val() >= stringTime ) {
        return result;
    } else {
        result = '<li class="collection-item red-text"> <p class="left"> <input type="checkbox" id="task-closed-{{ task.id }}" class="js-task-closed" data-url="" data-flag="False"/> <label for="task-closed-{{ task.id }}"></label> </p> <p class="left li__p__margin"> '+ element.find('#description').val()+' </p> <input data-url="" type="date" class="datepicker js-update-deadline li__input__small li__input__margin__top" value='+ element.find('#deadline').val()+'> <a class="right js-task-delete li__a_delete__margin" data-url=""><i class="fa fa-times fa-2x"></i></a> </li>';
        return result;
    }
}

$('.js-add-task').on('submit', function(e) {
     e.preventDefault();
    var new_this = $(this);

    new_this.find('#description_error').text('');
    new_this.find('#deadline_error').text('');

    $.post(new_this.find('#description').data('url'),
        {
            description: new_this.find('#description').val(),
            deadline: new_this.find('#deadline').val()
        },
        function(response){

            try {
                 var jsonResponse = JSON.parse(response);
                 if ( jsonResponse['bad'] ) {
                    jsonResponse['bad'].forEach( function(element) {
                        new_this.find(element['key'] + "_error").text(element['desc'])
                    })
                 } else if ( jsonResponse['ok'] ) {
                     if ( $('.collection-item').length !== 0 ) {
                         $.each($('.collection-item'), function() {
                             if ($(this).find('.js-update-deadline').val() > new_this.find('#deadline').val() ) {
                                 $(this).before(taskType(new_this));
                                 return false;
                             } else if ($(this).next().find('.js-update-deadline').val() < new_this.find('#deadline').val()) {

                             } else {
                                 $(this).after(taskType(new_this));
                                 return false;
                             }
                         });
                     } else {
                         $('.collection').append(taskType(new_this));
                     }

                 }
            } catch(err) {
            }
            new_this.find('#description').val('')
        }
    );
});


$('#content_update').on('click', '.js-task-closed', function(e) {
     e.preventDefault();
    var new_this = $(this);
    $.post(new_this.find('input').data('url'),
        { is_completed: new_this.find('input').data('flag')},
        function(){
            if ( new_this.parent().find('p.li__p__margin').hasClass('completed') ) {

                new_this.find('input').removeAttr("checked", "checked");
                new_this.parent().find('p.completed').removeClass('completed');
                new_this.parent().find('input.datepicker').attr('disabled', false)

            } else {

                new_this.find('input').attr("checked", "checked");
                new_this.parent().find('p.li__p__margin').addClass('completed');
                new_this.parent().find('input.datepicker').attr('disabled', true)

            }
        }
    );
});


$('#content_update').on('change', '.js-update-deadline', function(e) {
     e.preventDefault();
    var new_this = $(this);
    $.post(new_this.data('url'),
        { deadline: new_this.val()},
        function(){
            $('#content_update').load('/ #content_update');
        }
    );
});


$('#content_update').on('click', '.js-task-delete', function(e) {
     e.preventDefault();
    var new_this = $(this);
    $.post(new_this.data('url'),
        { deadline: new_this.val()},
        function(){
            new_this.parent().remove();
        }
    );
});

