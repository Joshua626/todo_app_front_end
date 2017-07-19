$(document).ready(function(){
    $("#submit-button").click(function(){ 
        var todoblock = $(this).closest("#new-todo-block");
        var description =todoblock.find("#text") ;
        $("ul").append("<li><input type='checkbox'/><a href='show.html'><span class ='todo'>"+description.val() + "</span></a></li>");
        description.val("");
    })
})
