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

var p_field = document.getElementById("join-input-password");
var pc_field = document.getElementById("join-input-pass-confirm");
var screenname_input = document.getElementById("join-input-username");

function pass_refresh(field) {

    if (p_field.className == "join-textarea-blur-error") {
        p_field.className = "join-textarea-blur";
    }

    if (pc_field.className == "join-textarea-blur-error") {
        pc_field.className = "join-textarea-blur";
    }
    
    if (field.value.length !== 0) {
        if (field.className == "join-textarea-blur") {
            return null
        } else {
            field.placeholder = "";
            field.className = "join-textarea-blur";
        }

    } else {

        if (field.id == "join-input-password") {
            if (field.className == "join-textarea") {
                return null
            } else {
                field.placeholder = "Password";
                field.className = "join-textarea";
            }

        } else {
            if (field.className == "join-textarea") {
                return null
            } else {
                field.placeholder = "Confirm Password";
                field.className = "join-textarea";
            }
            
        }
    }
    

}

screenname_input.addEventListener('keypress', function(e) {

    if (e.which == 13 || e.keyCode == 13) {

        e.preventDefault();

    }

});

p_field.addEventListener('keyup', function(e) {
    pass_refresh(p_field);
});

p_field.addEventListener('keypress', function(e) {

    if (e.which == 13 || e.keyCode == 13) {

        e.preventDefault();

    }

});

// pc_field.addEventListener('keyup', function(e) {

//     if (enter_status == 0) {
//         pass_refresh(pc_field);
//     }

// });

pc_field.addEventListener('keypress', function(e) {

    // pass_refresh(pc_field);
    if (e.which == 13 || e.keyCode == 13) {

        e.preventDefault();

        if (processing_join == 0) {
            send_join();
        }

    } else {

        pass_refresh(pc_field);

    }

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

//        d8888 8888888b.  8888888b.                        
//       d88888 888  "Y88b 888  "Y88b                       
//      d88P888 888    888 888    888                       
//     d88P 888 888    888 888    888                       
//    d88P  888 888    888 888    888                       
//   d88P   888 888    888 888    888                       
//  d8888888888 888  .d88P 888  .d88P                       
// d88P     888 8888888P"  8888888P"     

// 8888888 888b     d888        d8888  .d8888b.  8888888888 
//   888   8888b   d8888       d88888 d88P  Y88b 888        
//   888   88888b.d88888      d88P888 888    888 888        
//   888   888Y88888P888     d88P 888 888        8888888    
//   888   888 Y888P 888    d88P  888 888  88888 888        
//   888   888  Y8P  888   d88P   888 888    888 888        
//   888   888   "   888  d8888888888 Y88b  d88P 888        
// 8888888 888       888 d88P     888  "Y8888P88 8888888888 

const fileList = document.getElementById("file");
var md5_files = [];
var selectedFiles = [];
var image_present = 0;

fileList.addEventListener('change', function(e) {

    e.preventDefault();

    md5_files = [];
    selectedFiles = [];
    var fileDisplayArea = document.getElementById('join-avi');
    var media_button = document.getElementById('pick-avi-button');

    selectedFiles = document.getElementById('file').files;


    if (window.File && window.FileList && window.FileReader) {

        var files = fileList.files; //FileList object

        for (var i = 0; i < files.length; i++) {

            var file = files[i];

            //Only pics
            if (!file.type.match('image')) continue;

            var picReader = new FileReader();

            if (document.getElementById('actor-image')) {

                document.getElementById('actor-image').remove();

            }
            
            picReader.addEventListener("load", function(event) {

                var picFile = event.target;
                // var div = document.createElement("div");

                // fileDisplayArea.innerHTML = fileDisplayArea.innerHTML + "<div id='actor-image'><img style = 'width: 100%; max-width: 1000px; float: left;' src='" + picFile.result + "'" + "title='" + file.name + "'/>";
                // fileDisplayArea.insertBefore(div, null);

                fileDisplayArea.src = picFile.result;

                var md5 = CryptoJS.MD5(picFile.result).toString();

                md5_files.push(md5);

            });

            //Read the image
            picReader.readAsDataURL(file);

        }

        media_button.className = "pick-avi-button-hidden";
        fileDisplayArea.addEventListener('click', function(e) {
            media_button.click();
        })

    } else {

        console.log("Your browser does not support File API");
        // shouldn't happen

    }

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

//  .d8888b.  888     888 888888b.   888b     d888 8888888 88888888888 
// d88P  Y88b 888     888 888  "88b  8888b   d8888   888       888     
// Y88b.      888     888 888  .88P  88888b.d88888   888       888     
//  "Y888b.   888     888 8888888K.  888Y88888P888   888       888     
//     "Y88b. 888     888 888  "Y88b 888 Y888P 888   888       888     
//       "888 888     888 888    888 888  Y8P  888   888       888     
// Y88b  d88P Y88b. .d88P 888   d88P 888   "   888   888       888     
//  "Y8888P"   "Y88888P"  8888888P"  888       888 8888888     888     

// 8888888b.  8888888888  .d8888b.                                     
// 888   Y88b 888        d88P  Y88b                                    
// 888    888 888        888    888                                    
// 888   d88P 8888888    888                                           
// 8888888P"  888        888  88888                                    
// 888 T88b   888        888    888                                    
// 888  T88b  888        Y88b  d88P                                    
// 888   T88b 8888888888  "Y8888P88                                    

// SUBMIT REG

// var img_name_input = document.getElementById("");
var join_button = document.getElementById("join-button");
var processing_join = 0;

function send_join() {

    processing_join = 1;

    var screenname_input = document.getElementById("join-input-username");
    var display_name_input = document.getElementById("join-input-display-name");
    var hash_key_input = document.getElementById("join-input-password");
    var hash_key_conf = document.getElementById("join-input-pass-confirm");
    var join_key_input = document.getElementById("temp-code");
    var join_button = document.getElementById("join-button");
    var avi_container = document.getElementById("join-avi-container");

    join_key_string = join_key_input.innerHTML;
    join_button.className = "join-button-loading";
    join_button.innerHTML = "<b>Loading..</b>";

    if (screenname_input.value == "" || display_name_input.value == "") {

        try {
            processing_join = 0;
            join_button.className = "join-button";
            join_button.innerHTML = "<b>Join</b>";
            window.alert("Please fill out all fields according to the criteria.");
        } catch {
            console.log("error alerting");
        }

        return null
    }

    // if passwords match
    if (hash_key_input.value == hash_key_conf.value && hash_key_input.value !== "") {


        // check if username already taken 

        $.ajax({

            type: 'GET',
            url: '/checksn?sn=' + encodeURIComponent(screenname_input) + "&joinkey=" + encodeURIComponent(join_key_string) + "",
            timeout: 60000,
            contentType: false,
            cache: false,
            processData: false,
            success: function(data) {
                
                // if user avi  upload was success, redirect user to feed
                if (data['message'] === "available") {
            
                    var user_sn = screenname_input.value;
                    var user_dn = display_name_input.value;
                    var hash_pass = CryptoJS.MD5(hash_key_conf.value).toString();
                    var unique_user_key = CryptoJS.MD5(hash_pass + user_sn).toString();
            
                    setCookie("username", user_sn);
                    setCookie("hashpass", hash_pass);
                    
                    try {
                        var new_filename_title = md5_files[0];
                        var new_filename_extension = selectedFiles[0].name.substring(selectedFiles[0].name.length - 5).split('.').pop();
                        var new_filename = new_filename_title.concat('.', new_filename_extension);
                        var form_data = new FormData();
                    } catch {
                        try {
                            processing_join = 0;
                            join_button.className = "join-button";
                            join_button.innerHTML = "<b>Join</b>";
                            window.alert("Please provide a profile image.");
                        } catch {
                            console.log("error alerting");
                        }
                    }
                    
        
                    form_data.append('file', selectedFiles[0], new_filename);

                    // submit the user registration
                    $.ajax({
                
                        type: 'GET',
                        url: "/reg?uuk=" + unique_user_key + "&sn=" + encodeURIComponent(readCookie("username")) + '&dn=' + encodeURIComponent(user_dn) + "&key=" + encodeURIComponent(readCookie("hashpass")) + "&img=" + encodeURIComponent(new_filename) + "&joinkey=" + encodeURIComponent(join_key_string) + "",
                        timeout: 60000,
                        contentType: false,
                        cache: false,
                        processData: false,
                        success: function(data) {
    
                            // if user registration returns successful, submit user avi media upload
                            if (data['message'] == "success") {
    
                                console.log("reg success");

                                for (var i = 0; i < selectedFiles.length; i++) {
                
                                    try {
                        
                                        // console.log(join_key_string);
                        
                                        // console.log(data['message']);

                                        console.log(unique_user_key);
                                        console.log(hash_pass);
                                
                                        $.ajax({
                            
                                            type: 'POST',
                                            url: '/media_post?filename=' + new_filename + '&uuk=' + encodeURIComponent(unique_user_key) + "&key=" + encodeURIComponent(readCookie("hashpass")) + "",
                                            data: form_data,
                                            timeout: 600000,
                                            contentType: false,
                                            cache: false,
                                            processData: false,
                                            success: function(data) {
                                                
                                                console.log(data['message']);
                                                // if user avi  upload was success, redirect user to feed
                                                if (data['message'] == "success") {
                            
                                                    
                                                    window.location.href = "/feed";
                                                    return null
                                                    
                            
                                                } else {
                            
                                                    // user avi upload failed
                                                    throw 'user avi upload failed'
                                                    
                            
                                                }
                                                
                                            }
                                        
                                        });
                                        
                                        
                        
                                    } catch (e) {
            
                                        try {
                                            window.alert(e + ': try refreshing the page');
                                        } catch {
                                            console.log("error alerting");
                                        }
                                        // user registration failed, try refreshing
                        
                                    }
                        
                                }
    
                            } else {

                                processing_join = 0;
    
                                // user registration failed
                                try {
                                    window.alert("Username taken");
                                } catch {
                                    console.log("error alerting");
                                }

                                return null
    
                            }
                            
                        }
    
                    });


                } else {

                    processing_join = 0;

                    join_button.className = "join-button";
                    join_button.innerHTML = "<b>Join</b>";

                    try {
                        window.alert("Username is already taken. Please try another.");
                    } catch {
                        console.log("error alerting");
                    }

                }
                
            }
        
        });

    } else {

        processing_join = 0;

        hash_key_input.className = "join-textarea-blur-error";
        hash_key_conf.className = "join-textarea-blur-error";

        try {
            join_button.className = "join-button";
            join_button.innerHTML = "<b>Join</b>";
            window.alert("Please make sure the passwords match, are not blank, and meet the critiera.");
        } catch {
            console.log("error alerting");
        }

        return null
    }

    return null

}

join_button.addEventListener('click', function(e) {

    if (processing_join == 0) {
        send_join();
    }

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

// document.cookie = object.title + "=liked;";

// var keyValuePairs = document.cookie.split(';');

// for (var i = 0; i < keyValuePairs.length; i++) {