 $(".datepicker").pickadate();

$('.js-add-task').on('submit', function(e) {
     e.preventDefault();
    var new_this = $(this);
    $.post(new_this.find('#task').data('url'),
        { description: new_this.find('#task').val() },
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


