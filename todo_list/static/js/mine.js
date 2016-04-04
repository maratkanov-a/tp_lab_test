$('.js-add-task').on('submit', function(e) {
     e.preventDefault();
    var new_this = $(this);
    $.post(new_this.find('#task').data('url'),
        {
            description: new_this.find('#task').val(),
            deadline: new_this.find('#deadline').val()
        },
        function(){
            $('html').load('/')
        }
    );
});


$('.js-task-closed').on('click', function(e) {
     e.preventDefault();
    var new_this = $(this);
    $.post(new_this.data('url'),
        { is_completed: new_this.data('flag')},
        function(){
            $('html').load('/')
        }
    );
});


$('.js-update-deadline').on('change', function(e) {
     e.preventDefault();
    var new_this = $(this);
    $.post(new_this.data('url'),
        { deadline: new_this.val()},
        function(){
            $('html').load('/')
        }
    );
});


$('.js-task-delete').on('click', function(e) {
     e.preventDefault();
    var new_this = $(this);
    $.post(new_this.data('url'),
        { deadline: new_this.val()},
        function(){
            $('html').load('/')
        }
    );
});

