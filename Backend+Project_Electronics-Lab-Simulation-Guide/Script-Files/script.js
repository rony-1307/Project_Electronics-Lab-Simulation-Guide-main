function knwmr(){
    alert("Need to sign in!!");
}
function signupsucess() {
    document.getElementById("susucess").innerHTML = "Sign Up Sucesssfully!!";
    alert("Sign Up Sucesssfully!!");
  }
  function signinsucess() {
    document.getElementById("sisucess").innerHTML = "Sign in Sucesssfully!!";
    alert("Sign in Sucesssfully!!");
  }
  function callac(){
    document.getElementById("calltoaction").innerHTML = "**Need to login!!";
    document.getElementById("calltoaction").style.color ="red";
    alert("**Need to login!!");
  }

  function showvalue(){
    var inputvalue = document.getElementById("pass").value;
    console.log(inputvalue);
}