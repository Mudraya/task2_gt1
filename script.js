$( ".div_form" ).append( "<form id=\"myForm\" method=\"post\" >\n" +
    "    <input type=\"text\" placeholder=\"Your name\" name=\"inp_name\"/>\n" +
    "    <input type=\"text\" placeholder=\"Your email address\" name=\"inp_email\"/>\n" +
    "    <button id='submitButton' type=\"button\" >Submit</button>\n" +
    "</form><br>" );

$('#submitButton').click(function (e) {
    e.preventDefault();
    $.ajax({
        url: 'script.php',
        type: 'post',
        // dataType: 'json',
        data: $('#myForm').serialize(),
        success: function (res) {
            if (!res) alert('No data!');
            $( "div.answer" ).replaceWith( '<div class="answer">'+ res +'</div>' );
        },
        error: function (data) {
            alert('Error!');
            console.log(data);
        }
    });
});
