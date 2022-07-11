//ấn hiện password
const password = document.getElementById("password");
const toggle = document.getElementById("toggle")

function showPassword() {
  if (password.type === "password"){
    password.setAttribute("type","text");
    toggle.classList.add('hide');
  }
  else {
    password.setAttribute("type","password");
    toggle.classList.remove('hide');
  }
}
var button = document.getElementById("btn");
            button.onclick = function(){
                alert("Đăng nhập thất bại!,Sai Email hoặc Password!");
            }
//scroll ve dau trang
$(window).scroll(function(){

  if($(window).scrollTop() >= 10) {

   $('.button_scroll2top').show();

  } else {

   $('.button_scroll2top').hide();

  }

 });

 function page_scroll2top(){

  $('html,body').animate({

   scrollTop: 0

     }, 'fast');
 }
 //text err an hien khi nhap du lieu
 //email
 document.getElementById("email").addEventListener("keypress", myFunction1);

function myFunction1() {
  document.getElementById('err1').style.visibility = "hidden";
}
//password
document.getElementById("password").addEventListener("keypress", myFunction);

function myFunction() {
  document.getElementById('err2').style.visibility = "hidden";
}
//hien err khi input = ''
const checkemail = document.getElementById('email');
const checkpassword = document.getElementById('password');
function myFunctionCheckEmail() {
  let checkemailvalue = checkemail.value;
  if(checkemailvalue == ''){
  document.getElementById('err1').style.visibility = "visible";
}else{
  document.getElementById('err1').style.visibility = "hidden";
}
}
function myFunctionCheckPass() {
  let checkpassvalue = checkpassword.value;
  if(checkpassvalue == ''){
  document.getElementById('err2').style.visibility = "visible";
}else{
  document.getElementById('err2').style.visibility = "hidden";
}
}