// 8888888b.  8888888888        d8888 8888888b.                      
// 888   Y88b 888              d88888 888  "Y88b                     
// 888    888 888             d88P888 888    888                     
// 888   d88P 8888888        d88P 888 888    888                     
// 8888888P"  888           d88P  888 888    888                     
// 888 T88b   888          d88P   888 888    888                     
// 888  T88b  888         d8888888888 888  .d88P                     
// 888   T88b 8888888888 d88P     888 8888888P"                      
                                                                  
                                                                  
                                                                  
//  .d8888b.   .d88888b.   .d88888b.  888    d8P  8888888 8888888888 
// d88P  Y88b d88P" "Y88b d88P" "Y88b 888   d8P     888   888        
// 888    888 888     888 888     888 888  d8P      888   888        
// 888        888     888 888     888 888d88K       888   8888888    
// 888        888     888 888     888 8888888b      888   888        
// 888    888 888     888 888     888 888  Y88b     888   888        
// Y88b  d88P Y88b. .d88P Y88b. .d88P 888   Y88b    888   888        
//  "Y8888P"   "Y88888P"   "Y88888P"  888    Y88b 8888888 8888888888 
                                                                  
// READ COOKIE

function readCookie(name) {
    
    return (name = new RegExp('(?:^|;\\s*)' + ('' + name).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + '=([^;]*)').exec(document.cookie)) && name[1];

}

// var keyValuePairs = document.cookie.split(';');

// for (var i = 0; i < keyValuePairs.length; i++) {

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

// 888       .d88888b.         d8888 8888888b.  
// 888      d88P" "Y88b       d88888 888  "Y88b 
// 888      888     888      d88P888 888    888 
// 888      888     888     d88P 888 888    888 
// 888      888     888    d88P  888 888    888 
// 888      888     888   d88P   888 888    888 
// 888      Y88b. .d88P  d8888888888 888  .d88P 
// 88888888  "Y88888P"  d88P     888 8888888P"  

try {

    var usr = readCookie("username");
    var hash = readCookie("hashpass");

    if (usr == -1 || hash == -1 || usr == null || hash == null) {
        
        console.log("no cookie set");
        throw 'auth expired';

    }

    usr = '';
    hash = '';

    var uuk = "";

    if (uuk == "") {

        $.ajax({

            type: 'GET',
            url: url = '/uuk?key=' + encodeURIComponent(readCookie("hashpass")),
            timeout: 60000,
            contentType: false,
            cache: false,
            processData: false,
            success: function(data) {

                uuk = data['uuk'];

                return null
    
            }
    
        });
    }

    

    var post_id = "-1";
    update_in_progress = 1;
    get_posts(post_id, 10);

} catch (e) {

    alert(e);
    window.location.href = "/login";

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