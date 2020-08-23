var username = $("#username") ;
var email = $("#email") ;
var password = $("#password") ;
var confirmPassword = $("#confirmPassword") ;

$( document ).ready(function() {
    $("small").text("") ;
});


$("#submit").click( () => {
    var allOkay = true ;

    // userName validity
    if (username.val() === "") {
        allOkay = false ;
        $("#nameHelpId").text( "Set Username" ) ;
    }
    else if ( username.val().length <6 ){
        allOkay = false ;
        $("#nameHelpId").text( "Username mustbe atleast 6 character" ) ;
    }
    else {
        $("#nameHelpId").text( "" ) ;
    }

    // Email Validity
    if (email.val() === "") {
        allOkay = false ;
        $("#emailHelpId").text( "Set Email" ) ;
    }
    else if (email.val().indexOf('@') == -1 || email.val().indexOf('.') == -1 || email.val().indexOf('.') - email.val().indexOf('@') <2){
        allOkay = false ;
        $("#emailHelpId").text( "Set a valid Email" ) ;
    }
    else {
        $("#emailHelpId").text( "" ) ;
    }

    // Password Validate
    if (password.val()===""){
        $("#passwordHelpId").text("Give password") ;
    }
    else if (password.val().length <6){
        $("#passwordHelpId").text("Password mustbe atleast 6 character") ;
    }
    else {
        $("#passwordHelpId").text("") ;
    }

    // Confirm Password
    if (confirmPassword.val()===""){
        $("#confirmpasswordHelpId").text("Give confirm password") ;
    }
    else if (password.val() !==confirmPassword.val()){
        $("#confirmpasswordHelpId").text("Password didn't match") ;
    }
    else {
        $("#confirmpasswordHelpId").text("") ;
    }

    
} ) ;