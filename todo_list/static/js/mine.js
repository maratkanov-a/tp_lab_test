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