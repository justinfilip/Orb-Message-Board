// 8888888b.         d8888  .d8888b.   .d8888b.  
// 888   Y88b       d88888 d88P  Y88b d88P  Y88b 
// 888    888      d88P888 Y88b.      Y88b.      
// 888   d88P     d88P 888  "Y888b.    "Y888b.   
// 8888888P"     d88P  888     "Y88b.     "Y88b. 
// 888          d88P   888       "888       "888 
// 888         d8888888888 Y88b  d88P Y88b  d88P 
// 888        d88P     888  "Y8888P"   "Y8888P"  

// 888     888 Y88b   d88P                       
// 888     888  Y88b d88P                        
// 888     888   Y88o88P                         
// 888     888    Y888P                          
// 888     888    d888b                          
// 888     888   d88888b                         
// Y88b. .d88P  d88P Y88b                        
//  "Y88888P"  d88P   Y88b                       

var p_field = document.getElementById("login-input-password");

function pass_refresh(field) {
    
    if (field.value.length > 0) {

        if (field.className == "login-text-blur") {
            return null
        } else {
            field.placeholder = "";
            field.className = "login-textarea-blur";
        }

    } else {

        if (field.className == "login-textarea") {
            return null
        } else {
            field.placeholder = "Password";
            field.className = "login-textarea";
        }

    }
    
}

p_field.addEventListener('keyup', function(e) {
    pass_refresh(p_field);
});

//

//

//

//

//

//

//

//

//

//

//

//

//

//

//  .d8888b.   .d88888b.   .d88888b.  888    d8P  8888888 8888888888 
// d88P  Y88b d88P" "Y88b d88P" "Y88b 888   d8P     888   888        
// 888    888 888     888 888     888 888  d8P      888   888        
// 888        888     888 888     888 888d88K       888   8888888    
// 888        888     888 888     888 8888888b      888   888        
// 888    888 888     888 888     888 888  Y88b     888   888        
// Y88b  d88P Y88b. .d88P Y88b. .d88P 888   Y88b    888   888        
//  "Y8888P"   "Y88888P"   "Y88888P"  888    Y88b 8888888 8888888888 

// COOKIE

function readCookie(name) {
    
    return (name = new RegExp('(?:^|;\\s*)' + ('' + name).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + '=([^;]*)').exec(document.cookie)) && name[1];

}

function setCookie(name, value) {
    document.cookie = name + "=" + value;
}

//

//

//

//

//

//

//

//

//

//

//

//

//

//

// 888       .d88888b.   .d8888b.  8888888 888b    888 
// 888      d88P" "Y88b d88P  Y88b   888   8888b   888 
// 888      888     888 888    888   888   88888b  888 
// 888      888     888 888          888   888Y88b 888 
// 888      888     888 888  88888   888   888 Y88b888 
// 888      888     888 888    888   888   888  Y88888 
// 888      Y88b. .d88P Y88b  d88P   888   888   Y8888 
// 88888888  "Y88888P"   "Y8888P88 8888888 888    Y888 

var login_button = document.getElementById("login-button");
var hash_key_input = document.getElementById("login-input-password");
var screenname_input = document.getElementById("login-input-username");

function send_login() {

    var hash_key_input_value = document.getElementById("login-input-password").value;
    var screenname_input_value = document.getElementById("login-input-username").value;
    var hash_pass = CryptoJS.MD5(hash_key_input_value).toString();
    login_button.className = "login-button-waiting";
    login_button.innerHTML = "<b>Loading..</b>";
    var uuk = CryptoJS.MD5(hash_pass + screenname_input_value).toString();

    $.ajax({

        type: 'GET',
        url: '/checkcreds?sn=' + encodeURIComponent(screenname_input_value) + '&key=' + encodeURIComponent(hash_pass) + "&uuk=" + encodeURIComponent(uuk) + "",
        timeout: 60000,
        contentType: false,
        cache: false,
        processData: false,
        success: function(data) {
            
            if (data['message'] === "valid") {
        
                setCookie("username", screenname_input_value);
                setCookie("hashpass", hash_pass);
                window.location.href = "/feed";
        
            } else if (data['message'] === "snfail") {
        
                try {
                    login_button.className = "login-button";
                    login_button.innerHTML = "<b>Login</b>";
                    alert("Username does not exist.");
                } catch {
                    console.log("error alerting");
                }
        
            } else if (data['message'] === "passfail") {
        
                try {
                    login_button.className = "login-button";
                    login_button.innerHTML = "<b>Login</b>";
                    alert("Incorrect password.");
                } catch {
                    console.log("error alerting");
                }
        
            } else {

                // should never get here, but ya know
                try {
                    login_button.className = "login-button";
                    login_button.innerHTML = "<b>Login</b>";
                    alert("Incorrect password.");
                } catch {
                    console.log("error alerting");
                }

            }
                
        }
        
    });
    
}

screenname_input.addEventListener('keypress', function(e) {

    if (e.which == 13 || e.keyCode == 13) {

        e.preventDefault();

    }

});

hash_key_input.addEventListener('keypress', function(e) {

    if (e.which == 13 || e.keyCode == 13) {

        e.preventDefault();
        send_login();

    }

});

login_button.addEventListener('click', function(e) {
    
    send_login();

});

//

//

//

//

//

//

//

//

//

//

//

//

//

//
