$(document).ready(function(){
var $textInput = $('input:text');  // create variable for text input to be used later

  $("input:submit").click(function() {
    var newListItem = $("input:text").val();  //creates new variable and assigns to text input value
    $(".toDoList").append('<li><input type="checkbox" value="' + newListItem +'">' + newListItem + '</input></li>');  //move new variable into with html surrounding
    $textInput.val(''); //empties input field
  });

  $('.toDoList').on('change', 'input[type=checkbox]', function(event) {  //runs function when to do list checkbox is checked
    var newDoneItem = $("input:checked").attr("value");  // create variable assign it to value of li that is checked
    $(".done").append('<li>' + newDoneItem + '</li>');  //move selected li value to done list
    $(this).parent().remove(); //remove task(checked) li from to do list
  });

});
