
var x= document.getElementById("login");
var y= document.getElementById("register");
var z= document.getElementById("btn");

function register()
{
    x.style.left="-400px"
    y.style.left="50px";
    z.style.left="110px";
}

function login()
{
    x.style.left="50px"
    y.style.left="450px";
    z.style.left="0px";
}

function validateform(){

    console.log(validateid());
    console.log(validatepass());
    validateemail();

    window.alert("registered successfully");
}

function validateemail()
{
    var x=document.getElementById('email_registration');
    var atposition=x.indexOf("@");
    var dotposition=x.lastIndexOf(".");
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
        window.alert("Please enter a valid e-mail address \n at position:"+atposition+"\n dot position:"+dotposition);
        return false;
    }
}

function validateid()
{
    var id =document.getElementById('id_registration');

    if (id==null || id==""){
        alert("Name can't be blank");
        return false;
    }
}

function validatepass()
{
    var password =document.getElementById('password_registration');
    if(password.length<6){
        alert("Password must be at least 6 characters long.");
        return false;
    }
}