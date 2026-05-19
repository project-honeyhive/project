//Show & hide password f 
let loginpassinput = document.getElementById('loginpassword');
let loginpassicon = document.getElementById('loginpasswordicon');

let signuppassinput = document.getElementById('signuppassword');
let signuppassicon = document.getElementById('signuppasswordicon')

function showpassword (passinput,passicon){
    if (passinput.type == 'password'){
        passinput.type = 'text';
        passicon.className = 'bx bxs-show';
    }
    else {
        passinput.type = 'password';
        passicon.className = 'bx bxs-lock-alt';
}
}

loginpassicon.onclick = function(){
    showpassword(loginpassinput,loginpassicon);
}
signuppassicon.onclick = function(){
    showpassword(signuppassinput,signuppassicon);
}


let loginnameinput = document.getElementById('loginusername');
let loginbutton = document.getElementById('loginbutton');
let signupnameinput = document.getElementById('signupusername');
let signupphoneinput = document.getElementById('signupphone')
let signupaddressinput = document.getElementById('signupaddress')
let signupbutton = document.getElementById('signupbutton');

function showerror (input,errormessage){
    input.placeholder = errormessage;
    input.style.border = '2px solid red';
}
loginbutton.onclick = function(){
    if (loginnameinput.value ==""){
        showerror(loginnameinput,'Please Enter your Username');
    }
    if (loginpassinput.value == ""){
        showerror(loginpassinput,'Please Enter your Password!');
    }
}

signupbutton.onclick = function(){
    if(signupnameinput.value ==""){
        showerror(signupnameinput,'Please Enter your Username!');
    }
    if (signupphoneinput.value == ""){
        showerror(signupphoneinput,'Please Enter your phone!');
    }
    if (signuppassinput.value ==""){
        showerror(signuppassinput,'Please Enter your Password!');
    }
    if (signupaddressinput.value == ""){
        showerror(signupaddressinput ,'Plase Enter your Address!');
    }
}

function removeerror(input){
    input.style.border = '2px solid rgba(225, 225, 225, 0.2)';
}
loginnameinput.oninput = function(){
    removeerror(loginnameinput);
}
loginpassinput.oninput = function(){
    removeerror(loginpassinput);
}
signupnameinput.oninput = function(){
    removeerror(signupnameinput);
}
signupphoneinput.oninput = function(){
    removeerror(signupphoneinput);
}
signuppassinput.oninput = function(){
    removeerror(signuppassinput);
}
signupaddressinput.oninput = function(){
    removeerror(signupaddressinput);
}

// To switch bettwen login & signup 
let login = document.getElementById('loginform');
let signup = document.getElementById('signupform');
let tosignuplink = document.getElementById('tosignup');
let tologinlink = document.getElementById('tologin')

tosignuplink.onclick = function(){
    login.classList.add('hidden');
    signup.classList.remove ('hidden');
}

tologinlink.onclick = function(){
    signup.classList.add ('hidden');
    login.classList.remove ('hidden');
}