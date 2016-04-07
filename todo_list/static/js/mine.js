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
                 }
            } catch(err) {
                $('#content_update').load('/ #content_update');
            }
            new_this.find('#description').val('')
        }
    );
});


$('#content_update').on('click', '.js-task-closed', function(e) {
     e.preventDefault();
    var new_this = $(this);
    $.post(new_this.data('url'),
        { is_completed: new_this.data('flag')},
        function(){
            $('#content_update').load('/ #content_update');
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
            $('#content_update').load('/ #content_update');
        }
    );
});

