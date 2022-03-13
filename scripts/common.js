


let headerTemp =()=>{
let header=`<nav id="nav">
    <div class="logo">
    <a href="index.html"><img id="logo_image" src="assests/images/logo.png" alt="logo" height="100px" width="150px"></img></a>
    </div><button id="login" style="color:black;background-color: white; box-shadow: none;" type="button" class="btn btn-light" data-toggle="modal" data-target="#exampleModal1" data-backdrop="false">
        LOGIN
      </button><button id="logout" onclick="userLoggout()" style="display:none;background-color:white;color:black;box-shadow:none;" class="btn btn-light">LOGOUT</button></nav> 
      <div class="modal fade" id="exampleModal1" role="dialog" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Please Login</h5>
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
      </div>
      <form action="index.html"></form>
      <div class="modal-body justify-content:center">
        <form id="login-form" actions="index.html" method="get">
        <label for="Username">Username:</label>
        <input type="username" id="Username" name="Username" value="Enter Username" required/>
        <br>
        <label for="Password">Password:</label>
        <input type="password" id="Password" name="Password" value="Enter Password" autocomplete="off" required/>
      </form>
        <br>
      </div>
      <div class="modal-footer justify-content:center">
        <button  type="submit" id="modal-login" class="btn btn-primary"  data-dismiss="" onclick="login()">Login</button>
      </form>
      </div>
  
    </div>
  </div>
</div>`;
      
      document.getElementById('header').innerHTML +=header;
   
}
headerTemp();
let footerTemp =()=>{
    let footer=
` <div id="contacts">
<div style="flex-grow: 2;">
 <button id="contact" style=" color: white" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal2" data-backdrop="false">
   Contact Us
 </button>
 </div>
 <div style="flex-grow: 2;">
   <p><small>&copy 2020 ROOM SEARCH PVT LIMITED</small></p>
 </div>
<section id="social_media">
 <a href="https://www.facebook.com">
   <img id="social" src="assests/images/facebook.png" alt="">
   </a>
   <a href="https://www.instagram.com">
       <img id="social" src="assests/images/instagram.png" alt="">
     </a>
     <a href="https://www.twitter.com">
       <img id="social" src="assests/images/twitter.png" alt="">
     </a>
   </section>
    
   </div> 
   <div class="modal fade" role="dialog" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Please Login</h5>
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>s
      </div>
      <form action="index.html"></form>
      <div class="modal-body">
        <p>Thank you for reaching out!!!</p>
    
        <p>Please enter your email and we will get back to you</p>
        <form action="index.html" method="get">
        <input type="email" id="email" name="email" value="Enter your email" required="required">
        <br>
   
</form> </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary"  value="Submit">Submit</button>
      </form>
      </div>
  
    </div>
  </div>
</div>`;
document.getElementById('footer').innerHTML +=footer;
}
footerTemp();
let buttonLogin = document.getElementById("login");
let buttonLoggout = document.getElementById("logout");
let dialogButton = document.getElementById("modal-login");


localStorage.setItem('username','admin');
    localStorage.setItem('password','admin');
    localStorage.setItem('islogged','true');




function login(){
    
    
    let userName=document.getElementById('Username');
    let passWord=document.getElementById('Password');

    let sUsername=localStorage.getItem('username');
    let sPassword=localStorage.getItem('password');

    if(userName.value === sUsername && passWord.value===sPassword){
        localStorage.setItem("islogged","true");
        alert("Successfully Logged In!");
        buttonLogin.style.display="none";
        buttonLoggout.style.display="flex";
        dialogButton.dataset.dismiss = "modal";
        
       
    }
    else {
      alert("Invalid Credentials!, Login Failed!");
    }
    userElement.value = "";
    passwordElement.value = "";
};




let userLoggout = () => {
  if (localStorage.getItem("islogged") === "true") {
    localStorage.setItem("islogged", "false");
    localStorage.clear();
    buttonLoggout.style.display="none";
    alert("Logged out successfuly, Please visit again!");
   
  }
};

