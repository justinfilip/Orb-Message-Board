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

function setCookie(name, value) {
    document.cookie = name + "=" + value;
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

//

// 888    888  .d88888b.  888b     d888 8888888888 
// 888    888 d88P" "Y88b 8888b   d8888 888        
// 888    888 888     888 88888b.d88888 888        
// 8888888888 888     888 888Y88888P888 8888888    
// 888    888 888     888 888 Y888P 888 888        
// 888    888 888     888 888  Y8P  888 888        
// 888    888 Y88b. .d88P 888   "   888 888        
// 888    888  "Y88888P"  888       888 8888888888 

// HOME

function home() {

    global_east_panel.scrollTo({top: 0, behavior: 'smooth'});

    setTimeout(() => {

        location.reload();

    }, 300);

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

// 888       .d88888b.   .d8888b.   .d88888b.  888     888 88888888888 
// 888      d88P" "Y88b d88P  Y88b d88P" "Y88b 888     888     888     
// 888      888     888 888    888 888     888 888     888     888     
// 888      888     888 888        888     888 888     888     888     
// 888      888     888 888  88888 888     888 888     888     888     
// 888      888     888 888    888 888     888 888     888     888     
// 888      Y88b. .d88P Y88b  d88P Y88b. .d88P Y88b. .d88P     888     
// 88888888  "Y88888P"   "Y8888P88  "Y88888P"   "Y88888P"      888     

// HOME

function logout() {

    setCookie("username", "");
    setCookie("hashpass", "");
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

//  888888  .d88888b.  8888888 888b    888 
//    "88b d88P" "Y88b   888   8888b   888 
//     888 888     888   888   88888b  888 
//     888 888     888   888   888Y88b 888 
//     888 888     888   888   888 Y88b888 
//     888 888     888   888   888  Y88888 
//     88P Y88b. .d88P   888   888   Y8888 
//     888  "Y88888P"  8888888 888    Y888 
//   .d88P                                 
//  .d88P"                                  
// 888P"       
//                             
// 888     888 8888888b.  888               
// 888     888 888   Y88b 888               
// 888     888 888    888 888               
// 888     888 888   d88P 888               
// 888     888 8888888P"  888               
// 888     888 888 T88b   888               
// Y88b. .d88P 888  T88b  888               
//  "Y88888P"  888   T88b 88888888          

// JOIN URL

var processing = 0;

function join_url() {

    if (processing === 0) {

        processing = 1;
    
        var connect_url = document.getElementById("connect-url");
        var loading_dots = document.getElementById("loading-dots");
        var new_url_button = document.getElementById("new-url-button");
        var qr_code = document.getElementById("qrcode");
        // const connect_url_string = connect_url.value;

        connect_url.className = "none";
        loading_dots.className = "dot-elastic";
        new_url_button.className = "connect-paste-waiting";
        qr_code.innerHTML = "";
        qr_code.className = "none";

        $.ajax({

            type: 'GET',
            url: '/getcode?key=' + encodeURIComponent(readCookie("hashpass")) + "&uuk=" + encodeURIComponent(uuk),
            timeout: 60000,
            contentType: false,
            cache: false,
            processData: false,
            success: function(data) {

                var connect_url_value = data['join'];

                var connect_qr = new QRCode(qr_code, {
                    text: 'http://' + connect_url_value,
                    width: 250,
                    height: 250,
                    colorDark : "#ffffff",
                    colorLight : "#717070",
                    correctLevel : QRCode.CorrectLevel.H
                });

                setTimeout(() => {

                    connect_url.value = connect_url_value;
                    connect_url.className = "connect-code";
                    new_url_button.className = "connect-paste";
                    qr_code.className = "qr-code";
                    loading_dots.className = "none";
                    processing = 0;
            
                }, 500);
                
                return null
            }

        });

    } else {

        return null
    
    }

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

//  .d8888b.  888       888        d8888 8888888b.                                                                            
// d88P  Y88b 888   o   888       d88888 888   Y88b                                                                           
// Y88b.      888  d8b  888      d88P888 888    888                                                                           
//  "Y888b.   888 d888b 888     d88P 888 888   d88P                                                                           
//     "Y88b. 888d88888b888    d88P  888 8888888P"                                                                            
//       "888 88888P Y88888   d88P   888 888                                                                                  
// Y88b  d88P 8888P   Y8888  d8888888888 888                                                                                  
//  "Y8888P"  888P     Y888 d88P     888 888                                                                                  
                                                                                                                           
                                                                                                                           
                                                                                                                           
//  .d88888b.  8888888b.  8888888 8888888888 888b    888 88888888888        d8888 88888888888 8888888  .d88888b.  888b    888 
// d88P" "Y88b 888   Y88b   888   888        8888b   888     888           d88888     888       888   d88P" "Y88b 8888b   888 
// 888     888 888    888   888   888        88888b  888     888          d88P888     888       888   888     888 88888b  888 
// 888     888 888   d88P   888   8888888    888Y88b 888     888         d88P 888     888       888   888     888 888Y88b 888 
// 888     888 8888888P"    888   888        888 Y88b888     888        d88P  888     888       888   888     888 888 Y88b888 
// 888     888 888 T88b     888   888        888  Y88888     888       d88P   888     888       888   888     888 888  Y88888 
// Y88b. .d88P 888  T88b    888   888        888   Y8888     888      d8888888888     888       888   Y88b. .d88P 888   Y8888 
//  "Y88888P"  888   T88b 8888888 8888888888 888    Y888     888     d88P     888     888     8888888  "Y88888P"  888    Y888 

// SWAP ORIENTATION

function swap_orientation() {

    var connect_button = document.getElementById("conn-button");
    var home_button = document.getElementById("home-button-icon");
    var logout_button = document.getElementById("logout-button");

    if (hand_button.className == 'left-hand') {

        hand_button.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAETUlEQVRoge3aW6gWVRQH8J+V5SVLo6CkshvdyYcs9KEkKaJSyEAwooKgDKKgUgsKirKQytJ6OhVZKSH0UEgFFWE3CCNJNKwEy7xkCJkWnlLM08Pew3yNs78z8505+hH94fDfs2ft/a01a2bvtdY+Q/r6+rRi1qxZGsZYPIXpGI4PMA+fdzJZT09Paf8RHSpXFaOxFse19F0d/6ZgRVM/dFhTE2E8lmEj1uNRvCkYsQYTcF6UgaV4AF9hEz7EtE5/vCmPTMQXhb5HIu/DVGyO1zdiEsZhfov8KbgS9+CFugo04ZFheC+238UVwpPdFPt2yo3IsCHyPtyByVgQ+57H2XWVaMIjkzAGPwtPPsNmrMZIjEBvy73hke/FS7H9Kc7FdcKDWKAGmvBI9iF/Xej/PvJwDCncGxq5uHKtjHxMXSWaMGRf5KMK/VWUObZwfXRhzspowpBsIyo+9eJ1GVJj+oqC/aHJ5bdJ7Ko7YLA3xE4xTlimx+M3YVVc225Atxpyf+F6Pu7Dc6kB3fpqEfaax+SRwLNCaFOKbvXIN7hI/tFvwWzMwftlA7rVI6/798r1SuRLUwO61ZCiXqMiDy0KpgZ0C4oKZ5/A3tSAbjWkNv43pNvwnzGkyj4yEicIRu8QEqWuQ8ojR+JBfCbEOj8KO+0OIQucXpA95CjzyFjBgDNK7g3BtfHvHSGTWz1YytVBmUd6BCNW4nacj+OF0s4FeDLKTRW8c8mga1kBZR65JvIcwTOt2IWHsAQfyb0Dfw+GglVR5pHlkZfi5MS474S4p7WgUMzqDm9pFzPBMZFHFPqz1LeRnH0mVuFUoVaVWhC2CqWf1Fw7sSfyX4V76yNvKPSvi/xtSuEUypTci8vwh+CRZSUyGb7Eotg+sXCvF6fjHAcWE2bgTHmlJcMinIXFhf7M28ntIvW0/5Q/7Rm4JTWBkLktERKfIrZhe0n/bvyQmK/oJfLXtLfkHtrv7KswN7Zfk7/XRewXDH21zVwDRfYtbUwJ9BeiPC0UoOHlBhTqFJkhv6YEqsRaN0e+QUg/DwWGRd6TEqhiyBphKSZPOQ82Mo/sTglUjX7vjnyxQ7OTZ9/njpRAVUN2CqELPDEAhTpF9kpvSQnUyUcej3yV8oByMDE58rqUQB1DtuLt2F7YmT4d4TShhAofp4TqZoizI08TDmUOBmZG/gS/p4TqGrIBb8V2MYwYLNwV+cV2Qp3k7HdGnohbOxhfB9OFeK9X+5ivI0O2C2d/hLDkpA7mqIpnWnh/O8FOqygL5ed9y9vIDQTzhNVxt3zFTGIg5aDrI08QDv6bxBQhEyV87P2eKQ7EkF9wU2zPF3L7JjBKfm6/WChy9IuBFujekK9ic9sJ1sDDwgnxWtxWdVATlcZ5kS9vYC5ClE2oq1VGE4ZkoXUq8aqL7Kx9W51BTRiSVTxGNzAXoTzLgf9M0BZNnCH+JHz4tSsfCazAhfJKSyX8A20ltt2NkkvzAAAAAElFTkSuQmCC';
        hand_button.className = "right-hand";
        connect_button.className = connect_button.className + "-left";
        home_button.className = home_button.className + "-left";
        logout_button.className = logout_button.className + "-left";

    } else {

        hand_button.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAETElEQVRoge3aachUVRgH8N+bS+6pqVFCEEZCCygVIX2oQAmitJXALKggKdqgD0VIGiJRkERfwiwKEyppU4koCrMsDLFVpc00wYiszKKFgt4+nHOdmfPO3Jk5M+/bEP3h8j/3Oct9/vOce+95zp2+/v5+9bB48eK69hZwGpbjAvRjA5bgs9wB62HVqlU158O7OThOwUfoq7JdjgWx7osuX+8wjuig77nYiH3YgbvwtCDidZwqRGczRuBZITI78TXWY04H169BbkSuwLrEdl/knzCvyr4A32N2PAocj/mxfkOmH4eRE5GpKiKewDlYKAggRKgah3Awlg/iythnbbStx9EZftQgJyKXRN6G66rsw/AUjkzaj6qyXYVXYvktYWrNwFxh6mUjJyLTI29N7Dsjj0jsfRgdyx8mdTsiT8rwowY5Qv6MPDaxjyvpUzzjj0rsRaT+yvCjBjlCCqf6Ent6Xg+N+tR/mbWBHCEHmzcZerRys88QHpHT8ClOGlSPMtFMyNVYMxSOdIqyqTVbRcTLuBfvD7pHmSgTsizyGlwYz0/Hu4PrUh7KhJwX+bHE/twg+dIRyoQUj8b0/ZC+8HoCZUKKl1T6QOj20r8r6GQZ31P4X0iv4T8jpCdv3IjxQhLXjx/wc1njXonIyKryPLwopMe78ZWQfW7FUkysN0CvRGRX5LVCFpmiD2fF42Zh42NndYNeicgJeFxFxEphrTdJyOdnYpGQHk8R9gpq8G9HpEionoz8q5C/p2n0j/gcH8fjzHSgHCETI6dp65jIaf7dp3IPjEzq0sxwDj5pcN2xeCaW30krc6bWe5HTLdDifG9i/wN7YvmbpG5YVXmBxiJgC06O489PK8siUlwk/dWex4kGOrxHmOuHEvvfwnyfiANJ3eTILyjfpHsIs4SNj7OFqVaDMiG/Y4LaX63A7gZ99jawHzJQIKzAZbixxI+5uC2WLzIwqigXsg/HGLjt0028FI9GGC7MAHgYrzVqWHaPFNNgTEmbwcaDwqzYrxKVuigT8kvkUV1yql0ci1tj+fpmjcuEFPtXo0vaDCYeibwJrzZrXCbk28jHdepRBmYKj2O4oZUOZUL2R57VgUO5WB55I75spUOZkA8in9GJRxmYIHxIgnta7VQmZLtww4/TxU9kLaD48rXNwM8QDdFsiVK8bRdmOJSDqbgplm9vp2MzIasjX2to9rMejfymNnc0mwnZLCwJxipfRnQDc3FxLDd9b6RoZfW7LPJSrX3MycFola3YlUJ62xZaEbJaWHdNVkmAuo11Qn6zB3fkDNBqPnJp5GuE1Wo3sUjY7SesbrPQqpDtwpKbMAWml7RtB9OET9pwp2RDoR20kyEuwduxfH/uBRPcHXkLHuhkoHZT3Vsiz8/oWw/nR15R2qoFtOtMkZ2NN/AfDjkoNiN+63SgdoVUZ4vdeBRPiTzk/3w4IKyKdwm7I53iDXwnfPbuCP8Aweiw3AcnSAoAAAAASUVORK5CYII=';
        hand_button.className = "left-hand";
        connect_button.className = connect_button.className.substring(0, connect_button.className.length - 5);
        home_button.className = home_button.className.substring(0, home_button.className.length - 5);
        logout_button.className = logout_button.className.substring(0, logout_button.className.length - 5);
        
    }
    
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

//        d8888 8888888b.  8888888b.            
//       d88888 888  "Y88b 888  "Y88b           
//      d88P888 888    888 888    888           
//     d88P 888 888    888 888    888           
//    d88P  888 888    888 888    888           
//   d88P   888 888    888 888    888           
//  d8888888888 888  .d88P 888  .d88P           
// d88P     888 8888888P"  8888888P"            
                                             
                                             
                                             
// 888     888  .d8888b.  8888888888 8888888b.  
// 888     888 d88P  Y88b 888        888   Y88b 
// 888     888 Y88b.      888        888    888 
// 888     888  "Y888b.   8888888    888   d88P 
// 888     888     "Y88b. 888        8888888P"  
// 888     888       "888 888        888 T88b   
// Y88b. .d88P Y88b  d88P 888        888  T88b  
//  "Y88888P"   "Y8888P"  8888888888 888   T88b 

// ADD USER

function show_connect_info() {

    var actor_parent = document.getElementById("body-headers");
    var conn_button = document.getElementById("conn-button");
    var conn_code_div = document.getElementById("conn");

    if (conn_present == 0) {

        actor_parent.className = "hidden";

        conn_present = 1;

        var loading_dots = document.getElementById("loading-dots");
        // var code = document.getElementById("temp-code").innerText;
        var code = '';
        
        global_east_panel.className = "global-east-panel-hidden";
        conn_code_div.className = "conn-visible";
        conn_button.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEYUlEQVRogdXaW6gVdRTH8c/ZbbvYDSpPiWmRZllK1uleFmREUBgWVhB0kqIbZTciMSiisp66CZaUpT70YBphF3uIKEtKyh6UhEzQyqzEjC6GZh57WHt3xtPs2Xv2jB77wmb/95z/rPX/zf8/819rzenomrVTCRyASbgEJ+MYVLEBq/AxFuDbMpyl0VGCkLswFUc16bcDM/AwfivqtC+VAuceiU/wjOYiYB/cjTW4oIDfVNoVcjiW4+w2zh2EDzG+Td+ptCOkQ8zEkIK+38PRBW38SztCnsXxJfl/oyQ7uYUMxp1lOUcXJpZhKK+QKWU47cODZRjJK+TKMpz2oQtDixrJI2QQRhZ12IDTihrII2RUUWcZDC5qII+QA4s6y2C/ogbyCPm5qLMM/ihqII+QL7G9qMMGFA4m8wjZgi+KOkyhB58XNZL38TuvqMMU3sIvRY3kFTIbW4s67cMjZRjJK2SbckOUuUparu0EjS9hfgm+12JyCXbQfj5yDd4u4HedyGVKybMpliFejqfbOO8djMXGjD6dOFMkX+O0kDYUEQL34iwsaqHvZ6JAcRl+bdDnOizGN1gmkq8lWC32scc0SKvLKD7UGYmLMBrDMQDfYSWW1gbWiLF4QVyUZvwpih0zkgeruYfLMEwT8dF92Fw7vrr2aUZFbIJ1rpAvUxyI53A6upNGW+VgPIGvcQtuEBWRR8UVbcYJeBwnJY6dp/1093rxBEXrS2siZsou+6wUlZV1+F5c9U4xg6fgXPyA48SmWhX3ysCcAvoyAW+2srSexAMt9BtT+2TRrTcymCpbRA8WinsuKxd6GYOazcjrSioO4HccKvaOASK+yspxbsaLYvmvl518XZs1I4txaa6hZrNC7wZ4vuaJ2le17x7NE6+rGgmZq1wRxD1Up1HJdKuYhc3i0V1nmigITsKJKeeNSRNyj3gilM2GRLvRMrkdr6Qcn1X7fgibRMk2ybC+j9/heCrvCFukI9EubReu2+s7IwtKdpAkOQs/NegzE6eKpTVXRMjEvjUEV/vvbMD6pJBJWtvY2mV0or2kQZ/99eY77+sVMh2HZdhekVxau2tJ1RmbaH8kYqYsRiTa25r0XVgXMk6JJf4GHISLa+3tYqPN4nkRgiyXvYdswvy6kNuKjDAHUxPt6bJnZV/cqHk5dTJ2VsS6nFBoeK0zXm+ovkO8PC3CbFGFUcEZdm85tC+vJdpLRRjfDvNwU/1HBRcWGFQ7DMWcxO9FIn//tMXzt4g8qDt5sCLyhD1Nt3iFV2cZzhGp7rvSa2f1VHeElCdsVbxm7g+miL3hDr05/Ku1TyeOFcncXyKPWZNlrKNr1s61tZP6i40i35lTxEgFR5QxmgJ0ikBxlSifjhd5S5IBYkO9VYM9pWrXYK4/GSWiW+JfPH4UN3ZVXOy6gA/EUtuFql0rGnsLh9Q+aaRuokULdP1B6gqqiFDg/0Tqxa8o4UXkHubvtINVEcjdb++fmR4RBWxI++M/mAnEf0Wn+OAAAAAASUVORK5CYII=";
        
        function show_code(orb_code) {

            const connect_code = document.createElement("textarea");
            const paste_message = document.createElement("b");
            const qr_element = document.createElement("div");
            const new_url_button = document.createElement("div");
            const new_url_button_text = document.createElement("b");

            connect_code.id = "connect-url";
            connect_code.className = "connect-code";
            connect_code.value = orb_code;

            qr_element.id = "qrcode";
            // var connect_qr = new QRCode(qr_element, {

            //     text: 'http://' + orb_code,
            //     width: 250,
            //     height: 250,
            //     colorDark : "#ffffff",
            //     colorLight : "#717070",
            //     correctLevel : QRCode.CorrectLevel.H

            // });

            paste_message.className = "connect-message";
            paste_message.innerText = "Get a new one-time join link:";

            new_url_button_text.innerText = "New";
            new_url_button.className = "connect-paste";
            new_url_button.id = "new-url-button";

            loading_dots.className = "none";

            new_url_button.appendChild(new_url_button_text);
            
            conn_code_div.appendChild(connect_code);
            conn_code_div.appendChild(qr_element);
            conn_code_div.appendChild(paste_message);
            conn_code_div.appendChild(new_url_button);

            conn_visible = 1;

            new_url_button_text.addEventListener('click', function(e) {

                e.preventDefault();
                join_url();

            });

            connect_code.addEventListener('pointerdown', function(e) {

                e.preventDefault();
                var connect_url = document.getElementById("connect-url");
                connect_url.select();

            });

        }

        show_code(code);
        join_url();

    } else {

        if (conn_visible == 1) {

            global_east_panel.className = "global-east-panel";
            conn_code_div.className = "conn-hidden";
            conn_button.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEaElEQVRogdXaW+gUZRjH8c9/WzvYCSotMS3SMkvJsnNZkBFBYViYF0UmhVmUnQjFoIjKootOghVlpRddmEbYwS4iypKSsgslIROyMisxo4OhWX+7eHb7z3+dnd3ZGQ99YdjZ2XeeZ37zvvO+z/PMdk2ZMkUJHIAJuAQn4xhUsQGr8REW4tsynKVRLcHG7ZiBo1J+G1bbxuMxzMb9+K0Ev72oFDj3SHyMJ6WLaGQf3IG1uKCA31Q6FXI4VuDsDs7thw8wtkPfqXQipEv0xMCCvt/F0QVt/EcnQp7C8SX5f70kO7mFDMBtZTnHaDERFCavkGllOG3g3jKM5BVyZRlOGxiNQUWN5BHSDycUddiE04oayCNkeFFnGQwoaiCPkAOLOstgv6IG8gj5uaizDP4oaiCPkC+wvajDJhQOJvMI2YLPizpMoRufFTWSd/qdX9RhCm/il6JG8gqZi61FnTbwQBlG8grZptwQZZ6ShmsnQeMLWFCC768xuQQ76DwfmYi3CvhdJ3KZHQVs9KJIhng5nujgvLcxChsz2vTHmSL5GqONtKGIELgLZ2FxG20/FQWKy/BrkzbXYAm+wXKRfC3FGrGOPaRJWt1VUhWFCCgvwggMQR98h1VYVruwZozCs+KmtOJPUeyYnTzYSRVlMGaK+OhubK4dX1PbWlERi2CdK+TLFPviaZyOSUmj7XIwHsFXuAnXi4rIg+KOtmIYHsZJiWPn6TzdvU7MoGh/aI3HHNlln1WisrIO34u73l/04Ck4Fz/gOLGoVsWz0jengEbG4Y12htajmN5Gu5G1LYtJeiKDGbJFdGOReOaycqEX0a+VkNeUVBzA72IWIiaCGS3aT8XzYviv1zz5OgITs4QswaXtX2dLVupZAM/XOlH7svbZrXXidVUzIfOUK4J4huo0K5luFb2wWUzddWaKguAEnJhy3sg0IXeKGaFsNiT2mw2TW/BSyvHnap/3YZMo2SYZ3Dj9DsHjea+wTboS+6XFWHV7jT2ysGQHSZK98FOTNnNwqhha80SETKxbA3G1nXsD1ieFTNDewtYpIxL7S5u02V9PvvOeHiGzcFiG7ZXJobWrhlSdUYn9D0XMlMXQxP62Fm0X1YWMUWKJvwkH4eLa/nax0GbxjAhBVsgu4G3CgrqQm4tcYQ6Si+As2b2yL27Qupw6GTsqYlyOK3R57TNWT6j+j3h5WoS5ogqjgjPs2nJoI68m9peJML4T5uPG+pcKLixwUZ0wCC8nvi8W+fsnbZ6/ReRBk5IHKyJP2N1MEq/w6izHOSLVfUd67aye6g6VMsNWxWvmPcE0sTbcqieHf6W29cexIpn7S+Qxa7OMVZX3YrMTrhUP/HS9h9tG2VWWnaiIeH5P0l8EiqtF+XQsDm1o00csqFM1WVOqegdze5LhIrol/uLxo3iwq+Jm1wW8L4ZaL6p6VzT2Fg6pbWmkLqJFC3R7gtQRVBGhwP+J1JtfUcKLyN3M32kHqyKQu8fe3zPdIgrYkPbjv0VwvXuCF5gmAAAAAElFTkSuQmCC";
            actor_parent.className = "global-headers";
            conn_visible = 0;

        } else {

            actor_parent.className = "hidden";
            conn_code_div.className = "conn-visible";
            global_east_panel.className = "global-east-panel-hidden";
            conn_button.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEYUlEQVRogdXaW6gVdRTH8c/ZbbvYDSpPiWmRZllK1uleFmREUBgWVhB0kqIbZTciMSiisp66CZaUpT70YBphF3uIKEtKyh6UhEzQyqzEjC6GZh57WHt3xtPs2Xv2jB77wmb/95z/rPX/zf8/819rzenomrVTCRyASbgEJ+MYVLEBq/AxFuDbMpyl0VGCkLswFUc16bcDM/AwfivqtC+VAuceiU/wjOYiYB/cjTW4oIDfVNoVcjiW4+w2zh2EDzG+Td+ptCOkQ8zEkIK+38PRBW38SztCnsXxJfl/oyQ7uYUMxp1lOUcXJpZhKK+QKWU47cODZRjJK+TKMpz2oQtDixrJI2QQRhZ12IDTihrII2RUUWcZDC5qII+QA4s6y2C/ogbyCPm5qLMM/ihqII+QL7G9qMMGFA4m8wjZgi+KOkyhB58XNZL38TuvqMMU3sIvRY3kFTIbW4s67cMjZRjJK2SbckOUuUparu0EjS9hfgm+12JyCXbQfj5yDd4u4HedyGVKybMpliFejqfbOO8djMXGjD6dOFMkX+O0kDYUEQL34iwsaqHvZ6JAcRl+bdDnOizGN1gmkq8lWC32scc0SKvLKD7UGYmLMBrDMQDfYSWW1gbWiLF4QVyUZvwpih0zkgeruYfLMEwT8dF92Fw7vrr2aUZFbIJ1rpAvUxyI53A6upNGW+VgPIGvcQtuEBWRR8UVbcYJeBwnJY6dp/1093rxBEXrS2siZsou+6wUlZV1+F5c9U4xg6fgXPyA48SmWhX3ysCcAvoyAW+2srSexAMt9BtT+2TRrTcymCpbRA8WinsuKxd6GYOazcjrSioO4HccKvaOASK+yspxbsaLYvmvl518XZs1I4txaa6hZrNC7wZ4vuaJ2le17x7NE6+rGgmZq1wRxD1Up1HJdKuYhc3i0V1nmigITsKJKeeNSRNyj3gilM2GRLvRMrkdr6Qcn1X7fgibRMk2ybC+j9/heCrvCFukI9EubReu2+s7IwtKdpAkOQs/NegzE6eKpTVXRMjEvjUEV/vvbMD6pJBJWtvY2mV0or2kQZ/99eY77+sVMh2HZdhekVxau2tJ1RmbaH8kYqYsRiTa25r0XVgXMk6JJf4GHISLa+3tYqPN4nkRgiyXvYdswvy6kNuKjDAHUxPt6bJnZV/cqHk5dTJ2VsS6nFBoeK0zXm+ovkO8PC3CbFGFUcEZdm85tC+vJdpLRRjfDvNwU/1HBRcWGFQ7DMWcxO9FIn//tMXzt4g8qDt5sCLyhD1Nt3iFV2cZzhGp7rvSa2f1VHeElCdsVbxm7g+miL3hDr05/Ku1TyeOFcncXyKPWZNlrKNr1s61tZP6i40i35lTxEgFR5QxmgJ0ikBxlSifjhd5S5IBYkO9VYM9pWrXYK4/GSWiW+JfPH4UN3ZVXOy6gA/EUtuFql0rGnsLh9Q+aaRuokULdP1B6gqqiFDg/0Tqxa8o4UXkHubvtINVEcjdb++fmR4RBWxI++M/mAnEf0Wn+OAAAAAASUVORK5CYII=";
            conn_visible = 1;

        }
    }

    conn_loading = 0;

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
// 8888888888 Y88b   d88P 8888888b.         d8888 888b    888 8888888b.  
// 888         Y88b d88P  888   Y88b       d88888 8888b   888 888  "Y88b 
// 888          Y88o88P   888    888      d88P888 88888b  888 888    888 
// 8888888       Y888P    888   d88P     d88P 888 888Y88b 888 888    888 
// 888           d888b    8888888P"     d88P  888 888 Y88b888 888    888 
// 888          d88888b   888          d88P   888 888  Y88888 888    888 
// 888         d88P Y88b  888         d8888888888 888   Y8888 888  .d88P 
// 8888888888 d88P   Y88b 888        d88P     888 888    Y888 8888888P"  
                                                                      
                                                                      
                                                                      
// 8888888b.   .d88888b.   .d8888b.  88888888888                         
// 888   Y88b d88P" "Y88b d88P  Y88b     888                             
// 888    888 888     888 Y88b.          888                             
// 888   d88P 888     888  "Y888b.       888                             
// 8888888P"  888     888     "Y88b.     888                             
// 888        888     888       "888     888                             
// 888        Y88b. .d88P Y88b  d88P     888                             
// 888         "Y88888P"   "Y8888P"      888                             
                                                                      
                                                                      
                                                                      
// 888888b.    .d88888b.  Y88b   d88P                                    
// 888  "88b  d88P" "Y88b  Y88b d88P                                     
// 888  .88P  888     888   Y88o88P                                      
// 8888888K.  888     888    Y888P                                       
// 888  "Y88b 888     888    d888b                                       
// 888    888 888     888   d88888b                                      
// 888   d88P Y88b. .d88P  d88P Y88b                                     
// 8888888P"   "Y88888P"  d88P   Y88b                                    

// EXPAND POST BOX

function toggle_post_box() {

    var post_box = document.getElementById("post-input");
    var toggle_expand_icon = document.getElementById("expand-button");

    // if (comments_visible == 0) {
    //     global_class = "global-east-panel";
    //     open_actor_global_class = "global-east-panel-lowered";
    // } else {
    //     global_class = "global-comment-panel";
    //     open_actor_global_class = "global-comment-panel-lowered";
    // }

    if (post_box.className == "message-box") {

        post_box.className = "message-box-open";
        // global_east_panel.className = "global-east-panel-lowered";
        toggle_expand_icon.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACh0lEQVRoge2Zu3LTQBSGv3hMYpyKGXBkp2HSEAhU5A14BArudHTESYaKiieA4drQQmIlBQMMBRUPwCVAx9BS5iFMsV5GFmclrbzr7Hj2bzw6K+/up6P/6MieGw6HzIIaR70BV4ogoSmChKYIEpoiSGiaGZDm+kuv858A7gPzwEPgj6+Fmr4mBjrAD6A7Or4DXAR++VjM163VZRwCoA18B877WNAHSAL8ZBxCqwUcAOdcL+oapAt8A04VnHMM+IJjGJcgPdTt1KtwbhuVmTOuFncFojPREcYuA5eE+AIKZs3FBlyAJCgTJ8JYH3gDfAKuCeNt1AU4O+kmJgXRmVgSxu4BzzLHKXBTOG8BB56ZBKSHyoTkiT7wSIjvAFeE+CLqgtQuzXVBEsyZ2GY8E3ntAzeEeAv4TM3M1AFZRlUnkyceV5hjF9kzx6npGVuQBFVppEz0Kc5EXilwW4i3qOEZG5Au6oktlVhbCK1XwFUhvohlaa4KsjSaWIIo80SZ9iiuZpVusyogy6hMSJ7YpJonyrSD2TMHwIWyCcpAdCZMnnhatoCFUmQYXc0KM1MEoquTS0+UqQimsGs2gSSYS+xd/EBopcAtIa6rmZgZCURn4qQwtgW8qLU9O73G3JuJnsmDdICvyJ7YBJ5MuEEblXlmNRvMguj3CVN1cmnsqirzzL/eTIPkfyjIaoOjgdBKkRtN3c6sggLpoZ4T0uvpNvDc0wZttA9cF+LzqA58rQm8w1ydpmHsqhqMPndz8RbwvgGsC1/aIiwIrQFyZlYaqMYtqz7TrU62GvB/o/mxiWqlfwOngQ/A26luq572gENUdg6BB3Px7+nAFEFCUwQJTREkNEWQ0DQzIH8BZihqByVpUfYAAAAASUVORK5CYII=";
    
    } else {

        post_box.className = "message-box";
        // global_east_panel.className = "global-east-panel";
        toggle_expand_icon.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACmElEQVRoge2ZvXLTQBDHf9akhqegoYIkxuEZcGySF+AzZijpaalpIcYaXoBvGgpeIIBDQcFMAAtmMnRgoE1sitMNitiTT9YpuvHo1/lWZ+3fe7u3d25Mp1MWgaBqB1xRC/GNWohv1EJ8oxbiGwsjpNHr9QBuAaeAR8DrSj2ypwlcBr4Dd5aAe8CN2HgTuAaElbhmzzrwPPF5OeCfCM0A2Do2l/LT5agIgI0A+CA8vA1cKt2l/HSBp8L4fgB0gLFgfAhcL82l/JhETIBOAIyAM8Af4aE+cLUsz3LQRhYBsAoMdfn9CiwjR2ZAtZHpAC+E8QnQAnbh6D7yCTiLLKZPNWK6wDNhfIKKxI4eSG+IEao+j4XJxy0mKyfOE0dCI+3sOjKmnLlSzD8rNpFFHKB+6J20wdSiRJhzJkRtmmXRRnUYaSbAGjCUJmX1WjoyvwTbA8oRs46c2FNUJN6ZJs5qGiNgBbMYlznT4f8dW2OMhMam+/2M2mfGgq0P9Cy+YxYXsaxOJmzb+AiVM1Jk7lOsALSBJwZbi4zllCTPeUR3AL8FW8h8HcAGck4coCLx1vaL8h6sovgFkpgB+cS0gccGm3UkNPOcEPcw54ztEaCLue1oMiOxJeY96o4wV7NtsnMmqwFcI8dySlLkzP4Ftc/8EGwhcjXbxJwTTeDNvM4UvXzQkZFyJl3NLiDv2FAgEpqlIpNjIlRkhsDJlC0E9lFL8KUw9xDVAOZKbAkXQkAtsxWUmBMp26uMeavAexcOuLzX0h3AT4tnD4FzOBIB7i/osnImSYsCiS1Rxk3jCHM105EonBNpyroy1aV5nBjTDaDTSGhcJbvEN+A0cDt+z13gY1kva9R/T3tGLcQ3aiG+UQvxjVqIbyyMkL8QG5DcpwMSpwAAAABJRU5ErkJggg==";
    
    }

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

// 8888888b.   .d88888b.   .d8888b.  88888888888                       
// 888   Y88b d88P" "Y88b d88P  Y88b     888                           
// 888    888 888     888 Y88b.          888                           
// 888   d88P 888     888  "Y888b.       888                           
// 8888888P"  888     888     "Y88b.     888                           
// 888        888     888       "888     888                           
// 888        Y88b. .d88P Y88b  d88P     888                           
// 888         "Y88888P"   "Y8888P"      888                           
                                                                    
                                                                    
                                                                    
//  .d8888b.  888     888 888888b.   888b     d888 8888888 88888888888 
// d88P  Y88b 888     888 888  "88b  8888b   d8888   888       888     
// Y88b.      888     888 888  .88P  88888b.d88888   888       888     
//  "Y888b.   888     888 8888888K.  888Y88888P888   888       888     
//     "Y88b. 888     888 888  "Y88b 888 Y888P 888   888       888     
//       "888 888     888 888    888 888  Y8P  888   888       888     
// Y88b  d88P Y88b. .d88P 888   d88P 888   "   888   888       888     
//  "Y8888P"   "Y88888P"  8888888P"  888       888 8888888     888     

// POST SUBMIT

function db_action(uuk) {

    // var actor_textarea_placeholder = document.getElementById("post-input").placeholder;

    var post_message = document.getElementById("post-input").value;

    var encoded_message = post_message.replace(/\n/g, "``");

    var panel = document.getElementById("global-east-panel");
    // var search_parent = document.getElementById("search-panel");

    var actor_parent = document.getElementById("body-headers");
    var nav_parent = document.getElementById("navigation-panel");

    var loading_icon = document.getElementById("loading-icon");
    var loading_target = document.getElementById("loading-target");
    
    loading_icon.className = "loading-icon";
    loading_target.appendChild(loading_icon);
    
    panel.className = "hidden";
    actor_parent.className = "hidden";
    nav_parent.className = "hidden";

    // if there are no media, just submit a text post

    if (selectedFiles === undefined || selectedFiles.length == 0) {

        $.ajax({

            type: 'GET',
            url: "/post?content=" + encodeURIComponent(encoded_message) + '&uuk=' + encodeURIComponent(uuk) + "&key=" + encodeURIComponent(readCookie("hashpass")) + "",
            timeout: 60000,
            contentType: false,
            cache: false,
            processData: false,
            success: function(data) {
                window.location.href = "/feed";
                return null
            }

        })

    } else { // making a text / media post

        // if there is no message attached, just do a media post

        if (post_message.length < 1) {

            var file_actions = '';

            for (var i = 0; i < selectedFiles.length; i++) {

                var new_filename_title = md5_files[i];
                var new_filename_extension = selectedFiles[i].name.substring(selectedFiles[i].name.length - 5).split('.').pop();
                var new_filename = new_filename_title.concat('.', new_filename_extension);
                var form_data = new FormData();

                file_actions = file_actions.concat('+', new_filename);

                form_data.append('file', selectedFiles[i], new_filename);

                try {

                    
                    $.ajax({

                        type: 'POST',
                        url: '/media_post?filename=' + encodeURIComponent(new_filename) + '&uuk=' + encodeURIComponent(uuk) + "&key=" + encodeURIComponent(readCookie("hashpass")),
                        data: form_data,
                        timeout: 60000,
                        contentType: false,
                        cache: false,
                        processData: false,
                        success: function(data) {

                                $.ajax({

                                    type: 'GET',
                                    url: "/post?content=" + encodeURIComponent("0") + "&fileactions=" + encodeURIComponent(file_actions) + '&uuk=' + encodeURIComponent(uuk) + "&key=" + encodeURIComponent(readCookie("hashpass")) + "",
                                    timeout: 60000,
                                    contentType: false,
                                    cache: false,
                                    processData: false,
                                    success: function(data) {

                                        window.location.href = "/feed";
                                        return null
                                    }

                                });

                        }

                    });

                } catch {


                    try {
                        alert("SOMEBODY FUKCED UP");
                    } catch {
                        console.log("error alerting");
                    }

                }

            }

        } else { // media and a message are present

            var file_actions = '';

            for (var i = 0; i < selectedFiles.length; i++) {

                var new_filename_title = md5_files[i];
                var new_filename_extension = selectedFiles[i].name.substring(selectedFiles[i].name.length - 5).split('.').pop();
                var new_filename = new_filename_title.concat('.', new_filename_extension);
                var form_data = new FormData();

                form_data.append('file', selectedFiles[i], new_filename);

                file_actions = file_actions.concat('+', new_filename);

                if (post_message == "") {
                    encoded_message = "0";
                }

                try {

                    $.ajax({

                        type: 'POST',
                        url: '/media_post?filename=' + encodeURIComponent(new_filename) + '&uuk=' + encodeURIComponent(uuk) + "&key=" + encodeURIComponent(readCookie("hashpass")),
                        data: form_data,
                        timeout: 60000,
                        contentType: false,
                        cache: false,
                        processData: false,
                        success: function(data) {

                            console.log()

                            $.ajax({

                                type: 'GET',
                                url: "/post?content=" + encodeURIComponent(encoded_message) + "&fileactions=" + encodeURIComponent(file_actions) + '&uuk=' + encodeURIComponent(uuk) + "&key=" + encodeURIComponent(readCookie("hashpass")) + "",
                                timeout: 60000,
                                contentType: false,
                                cache: false,
                                processData: false,
                                success: function(data) {

                                    window.location.href = "/feed";
                                    return null

                                }

                            });

                        }

                    });

                } catch {

                    try {
                        alert("SOMEBODY FUKCED UP");
                    } catch {
                        console.log("error alerting");
                    }
                    // means that either a media post failed or the summary post failed

                }

            }

        }

    }


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

// 8888888b.   .d88888b.   .d8888b.  88888888888                                             
// 888   Y88b d88P" "Y88b d88P  Y88b     888                                                 
// 888    888 888     888 Y88b.          888                                                 
// 888   d88P 888     888  "Y888b.       888                                                 
// 8888888P"  888     888     "Y88b.     888                                                 
// 888        888     888       "888     888                                                 
// 888        Y88b. .d88P Y88b  d88P     888                                                 
// 888         "Y88888P"   "Y8888P"      888                                                 
                                                                                          
                                                                                          
                                                                                          
// 8888888b.  8888888888        d8888  .d8888b.  88888888888 8888888  .d88888b.  888b    888 
// 888   Y88b 888              d88888 d88P  Y88b     888       888   d88P" "Y88b 8888b   888 
// 888    888 888             d88P888 888    888     888       888   888     888 88888b  888 
// 888   d88P 8888888        d88P 888 888            888       888   888     888 888Y88b 888 
// 8888888P"  888           d88P  888 888            888       888   888     888 888 Y88b888 
// 888 T88b   888          d88P   888 888    888     888       888   888     888 888  Y88888 
// 888  T88b  888         d8888888888 Y88b  d88P     888       888   Y88b. .d88P 888   Y8888 
// 888   T88b 8888888888 d88P     888  "Y8888P"      888     8888888  "Y88888P"  888    Y888 
                                                                                     
// POST REACTION

function reaction(action, object) {

    var cookie = document.cookie;
    var selected_object = object.getAttribute("metadata");

    var like_button = document.getElementById(selected_object);
    var like_count = document.querySelector("[metadata='" + selected_object + "-count']");

    switch (action) {
        
        case 0:

            if (cookie.indexOf(selected_object) == -1) {

                document.cookie = selected_object + "=liked;";

                like_button.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFP0lEQVRogdXaZ4hcVRTA8V+G1WjEFgsGNagYgyVYo4klxm7sisau2MACoqASNSiWiAWx4AcbiVgRFSwoK0pib7GAYIkasSaxGwsaW/xw3svcec7MTnm7bv6w7D1nztx7zy3v3XPuDNn6lsVaYDXsgrFYH8vhR7yHmXi1lUqasCV2w6ZZW3/iE7yR1b+grwp6+vh8FC7GQVihid17uAYz+mqwwGRMEY404g88gUvxViOjSpMKpuIDHK25E7AxpmMW1uzDlpjRh3G/5k7AsmIg38RVjYyGNFha94vRSvlNTPU8LMJKYsY2Kdh9LZbhuw3aXAvPY8OC/kPMwQ9YBiOwOVYp2D2N/bI+LKHe0nosM8z5Btfj9qyTRfYQy2PXTF4Ts8UsfVawXRGvY+1E9yquFDNUZGUcj7OxXqbbHc9gfGpYXFqXF5zoxWhc0cAJeEps1HMS3TAx6kVmFZy4FOMaOAELcWPWh/sS/TixlJeQOrINLkzkOzBJTHUrXIvDEnkkbk3kqdg6kU8XD5JW+ANH4bpEdwL2z4V0j8zBRln5LWzVYiNFzio0OFwMRroZr8F5Hdbfi72y8vficb1kRiaqOgH7dtgIsZ9eSuSb1c7MRzp3Ag7Er1l5OI6k6siUxPA6zO+iITgiKU/GKYl8VJd1L8JFiXw+sbSG47vkgxFaeJO2wG04uaDrFfuuW4aKB8HQTN6ogr0TgxeU4wRcUkd3YR1dJyzCI4l8UAUTEsUjyuMLtWewT8XbuSzSvo6vYINE8XKJDcEtSXl6Q6vOeD0pj+zBuoniy5Ibu1O8W4aJ90yZLBDHpuWxRo/qIe83sYHK5G/sU3KdOT8JZ9bHihVxQIO/sr+lid+z/z2VRBiq+jhbGhgiTuDwZwVfZcKy4rS5tDBcdVv8VBEhZc7oAe9O54xU3RbzK+KwmDPhv/aDlh2T8scVPJkoDhngznRDGsHOrIhg55dMMUrfMfRgYB21M/JwRTxy0+hrisHP2Um5F9/ngdVovJ98OErEDYORVcRpPQ9BJuD5XJiD5xLjuweuX20zQ9WJD2S5gTRmPz0pb4fDB6ZfbbGHyHHlnJYXUkfeEcFQzr1YvV+71R49It+W0yvSqfhvOuhUkdPNP5tp8NCLVbPy37JYPafoyD84OJHHiMTc/83lIneWc6zqgKN+7vcZTEvkk3BuyR1rh2PUhsgz1L4u0DiJPVXkWHOuFqMw0OyFuxJ5Nk6sZ9gsG7+neLzl3Kn/gqR6jBX7IudbkfetSzNHFmMHtWvxcbVHg/5ic7xY6Mv2IiqsSzNHiFHYUdwg5TyLnTrsYCtsIjKVyyS6XcS1Q0P6coR4v4wrfOe5rPKyGSPuYIYlukli8JrSiiNEPmrngm6myBmXxWYiD7ZcojtM7T5pSKuOUH8WZiknBbqtyFMtn+gOxYOtVtCOI8Q7ZmJB94TknqIDxuMVtYmPA/BQO5W06wjVzZ7edzwqRrBddhcbe0iiO1hc/7VFJ44Qye5xai8kHxC3SK1ygLi2S5mk8TVcUzp1BF4TazvNTk7HGS18d7LaJPRicZna0sauRzeOwNsidvkx0d2EM5t850i1x/H8xTurm4506wgRXW6j9pbrBlxQx/YUEefk/CIGoutbgDIcgbnixvbzRDcNlyXymWrvEn8WF66zy+hAX79FaYf5omMvieQFcYr+TpyRbkhsvxWP3dISHI1+wtENK4sD36YNPp8nDoCfltloWUsrZaHGS2YutlCyE/SPI8QvFbYVj+icuSKL+U1/NFjmHqnHdrhHnKGOU03Nls6/kn8H2GYDuI4AAAAASUVORK5CYII=";
                like_count.className = "like-count-liked";

                try {

                    new_like_count = parseInt(like_count.innerText) + 1;

                    if (isNaN(new_like_count)) {

                        new_like_count = '1';

                    }

                } catch {

                    new_like_count = '1';

                }

                like_count.innerText = new_like_count.toString();

                try {

                    $.ajax({

                        type: 'POST',
                        url: '/react?reaction=' + encodeURIComponent(action.toString()) + '1' + "&id=" + encodeURIComponent(selected_object.split('-like')[0]) + '&uuk=' + encodeURIComponent(uuk) + "&key=" + encodeURIComponent(readCookie("hashpass")),
                        timeout: 60000,
                        contentType: false,
                        cache: false,
                        processData: false,
                        success: function(data) {

                            return null

                        }

                    });

                } catch {

                    try {
                        alert("SOMEBODY FUKCED UP");
                    } catch {
                        console.log("error alerting");
                    }
                    // means the reaction request failed

                }

            } else {

                var cookie_value = readCookie(selected_object);

                if (cookie_value == 'liked') {

                    document.cookie = selected_object + "=unliked;";

                    like_button.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFQklEQVRogdXaeazcUxTA8U/Ha1Gx1RKCRkWJpbFUaa1Fq2qpJdROSDSWpCERKRpijSVShMSWVqwRJJaQJ6S170tCkKJiL1r7Wlv9cX4/c+fXmXnzZn7v5fWbTN69Z87ce89dzz33DZo2bZoWWAt7YgxGYCX8gPcwFy+3UkgTtsPe2Cqr6y98jNez8r/qqYCuHr4fiQtwMFZpovcersKcniosMBUzhCGN+BOP4SK82Uip0qSAmXgfx2huBGyB2ZiHdXvQJUb0QdyruREwRHTkG7iikVKjEblX9FbK72Kov8QSrCZGbMtEZzzeFtPw3QZlr4dnsWlB/gHm43sMxvrYBmskOmdjexyQtaGpIY9kijmLcA1uxTd19CeK6bFXll8Xr4pR+rSguypewwaJ7GVcLkaoyOo4AWdi40w2AU9hXKpYnFqXFIzoxua4rIER8IRYqGclsqGi14vMKxhxEcY2MAJ+xHVZG+5J5GPFVP6f1JAdcF6Svw2TxVC3wtU4PMkPx81JfiZGJ/nTxEbSCn/iaMxKZCfiwDwzKNl+52OzLP2mmIvtcEahwmGiM5YmsqvEfG+HbkzK0t+J7fr/ERmvagTs32YlxHp6IcnfqHZkPtS+EXAQfs3Sw3AUVUNmJIqzsLCDiuDIJD0VJyf5ozssewnOT/LnEIYMUx0quLLDiuAzscsV6RY7WqfcoLr9jsLICvZNFJ7TgjvQIhfWkZ1XR9YOS/BQkj+4gt0TwUPK43O1Ptgn4nQui7St4yrYJBG8WGJFcFOSnt1Qqz1eS9LDu7BRIvii5MpuF2fLUHHOlMlXwm1aGet0qTp5v4uTtEz+wX4ll5nzkzBmBFatCAcN/s4+yxN/ZH+7KklmxeyzvDBIeODwVwVfZ5khwttcXhimuix+qogrZc7m/d6c9hmuuiwWVoSzmLP7svoDll2T9EcVPJ4IDu3nxnRCeoOdWxGXnV8ywUg936EHAhuqHZEHK2LLTW9fMwx8zkzS3fgud+PTU3eqZQMDA4k1xOUt5zKq95H5eCb58s5+aVJ7zFFt9/uy2EB6Zz8tSe+EI/qnXb1ioohx5ZyaJ1JD3sEtSf5urN2nzeodXSLeltMtwqlYNhx0iojp5t/NNXDoxppZ+h/ZXT2naMi/OCTJj1L/ytrfXCJiZznHqXY4WGH06DTUhHBZBque8tvjN7WRkf7kWLXhpTm4tKjUKIg9E08m+StFL/Q3k3BHkn8VJ9VTbBaN30dsbzm367tLUj3GiHWRs1jEfevSzJCl2EXtXHxUrWvQV2yD5wtt2VncCuvSzBCiF3YVL0g5T2O3NhvYCluK9Tg4ke0pnh0a0pMhxPkytvCbZ7LCy2aUeIMZmsgmi85rSiuGEPGoPQqyuSJmXBZbizjYSonscLXrpCGtGkL9UZgneqxTdhRxqpUT2WG4v9UCemMI8VI0viB7TPJO0Qbj8JLawMcUPNCbQnprCNXFnr53PCx6sLdMEAt7UCI7RDz/9Yp2DCGC3WPVPkjeJ16RWmWKeLZLmazxM1xT2jUEXhFzO41OzsbpLfx2qtog9FLxmNrSwq5HJ4bAW+Lu8kMiux7Tm/zmKLXueH7wzuukIZ0aQtwud1D7ynUtzq2je7K45+T8Ijqi41eAMgyBBeLF9rNEdikuTvLT1b4l/iw86zJesHr8X5TesFA07AURViK86G+Fj3RtortYbLsfllV5mYYQDRwjHL6tMtmsgs6XwgH8pMyKy5paKT9qPGUWYFslG0HfGEL8p8KOYovOWSCimIv6osKyp1aRnXCX8KGOVw3Nls5/xe4BZeNvxXMAAAAASUVORK5CYII=";
                    like_count.className = "like-count";

                    try {

                        new_like_count = parseInt(like_count.innerText) - 1;

                        if (new_like_count == 0) {

                            new_like_count = '';

                        }

                    } catch {

                        new_like_count = '1';

                    }

                    like_count.innerText = new_like_count.toString();

                    try {

                            $.ajax({

                                type: 'POST',
                                url: '/react?reaction=' + encodeURIComponent(action.toString()) + '0' + "&id=" + encodeURIComponent(selected_object.split('-like')[0]) + '&uuk=' + encodeURIComponent(uuk) + "&key=" + encodeURIComponent(readCookie("hashpass")),
                                timeout: 60000,
                                contentType: false,
                                cache: false,
                                processData: false,
                                success: function(data) {

                                    return null

                                }

                            });

                    } catch {

                        try {
                            alert("SOMEBODY FUKCED UP");
                        } catch {
                            console.log("error alerting");
                        }
                        // means the reaction request failed

                    }

                } else {

                    document.cookie = selected_object + "=liked;";

                    like_button.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFP0lEQVRogdXaZ4hcVRTA8V+G1WjEFgsGNagYgyVYo4klxm7sisau2MACoqASNSiWiAWx4AcbiVgRFSwoK0pib7GAYIkasSaxGwsaW/xw3svcec7MTnm7bv6w7D1nztx7zy3v3XPuDNn6lsVaYDXsgrFYH8vhR7yHmXi1lUqasCV2w6ZZW3/iE7yR1b+grwp6+vh8FC7GQVihid17uAYz+mqwwGRMEY404g88gUvxViOjSpMKpuIDHK25E7AxpmMW1uzDlpjRh3G/5k7AsmIg38RVjYyGNFha94vRSvlNTPU8LMJKYsY2Kdh9LZbhuw3aXAvPY8OC/kPMwQ9YBiOwOVYp2D2N/bI+LKHe0nosM8z5Btfj9qyTRfYQy2PXTF4Ts8UsfVawXRGvY+1E9yquFDNUZGUcj7OxXqbbHc9gfGpYXFqXF5zoxWhc0cAJeEps1HMS3TAx6kVmFZy4FOMaOAELcWPWh/sS/TixlJeQOrINLkzkOzBJTHUrXIvDEnkkbk3kqdg6kU8XD5JW+ANH4bpEdwL2z4V0j8zBRln5LWzVYiNFzio0OFwMRroZr8F5Hdbfi72y8vficb1kRiaqOgH7dtgIsZ9eSuSb1c7MRzp3Ag7Er1l5OI6k6siUxPA6zO+iITgiKU/GKYl8VJd1L8JFiXw+sbSG47vkgxFaeJO2wG04uaDrFfuuW4aKB8HQTN6ogr0TgxeU4wRcUkd3YR1dJyzCI4l8UAUTEsUjyuMLtWewT8XbuSzSvo6vYINE8XKJDcEtSXl6Q6vOeD0pj+zBuoniy5Ibu1O8W4aJ90yZLBDHpuWxRo/qIe83sYHK5G/sU3KdOT8JZ9bHihVxQIO/sr+lid+z/z2VRBiq+jhbGhgiTuDwZwVfZcKy4rS5tDBcdVv8VBEhZc7oAe9O54xU3RbzK+KwmDPhv/aDlh2T8scVPJkoDhngznRDGsHOrIhg55dMMUrfMfRgYB21M/JwRTxy0+hrisHP2Um5F9/ngdVovJ98OErEDYORVcRpPQ9BJuD5XJiD5xLjuweuX20zQ9WJD2S5gTRmPz0pb4fDB6ZfbbGHyHHlnJYXUkfeEcFQzr1YvV+71R49It+W0yvSqfhvOuhUkdPNP5tp8NCLVbPy37JYPafoyD84OJHHiMTc/83lIneWc6zqgKN+7vcZTEvkk3BuyR1rh2PUhsgz1L4u0DiJPVXkWHOuFqMw0OyFuxJ5Nk6sZ9gsG7+neLzl3Kn/gqR6jBX7IudbkfetSzNHFmMHtWvxcbVHg/5ic7xY6Mv2IiqsSzNHiFHYUdwg5TyLnTrsYCtsIjKVyyS6XcS1Q0P6coR4v4wrfOe5rPKyGSPuYIYlukli8JrSiiNEPmrngm6myBmXxWYiD7ZcojtM7T5pSKuOUH8WZiknBbqtyFMtn+gOxYOtVtCOI8Q7ZmJB94TknqIDxuMVtYmPA/BQO5W06wjVzZ7edzwqRrBddhcbe0iiO1hc/7VFJ44Qye5xai8kHxC3SK1ygLi2S5mk8TVcUzp1BF4TazvNTk7HGS18d7LaJPRicZna0sauRzeOwNsidvkx0d2EM5t850i1x/H8xTurm4506wgRXW6j9pbrBlxQx/YUEefk/CIGoutbgDIcgbnixvbzRDcNlyXymWrvEn8WF66zy+hAX79FaYf5omMvieQFcYr+TpyRbkhsvxWP3dISHI1+wtENK4sD36YNPp8nDoCfltloWUsrZaHGS2YutlCyE/SPI8QvFbYVj+icuSKL+U1/NFjmHqnHdrhHnKGOU03Nls6/kn8H2GYDuI4AAAAASUVORK5CYII=";
                    like_count.className = "like-count-liked";

                    new_like_count = parseInt(like_count.innerText) + 1;

                    if (new_like_count == 0) {

                        new_like_count = '';

                    } else if (isNaN(new_like_count)) {

                        new_like_count = '1';

                    }

                    like_count.innerText = new_like_count.toString();

                    try {

                        $.ajax({

                            type: 'POST',
                            url: '/react?reaction=' + encodeURIComponent(action.toString()) + '1' + "&id=" + encodeURIComponent(selected_object.split('-like')[0]) + '&uuk=' + encodeURIComponent(uuk) + "&key=" + encodeURIComponent(readCookie("hashpass")),
                            timeout: 60000,
                            contentType: false,
                            cache: false,
                            processData: false,
                            success: function(data) {

                                return null

                            }

                        });

                    } catch {

                        try {
                            alert("SOMEBODY FUKCED UP");
                        } catch {
                            console.log("error alerting");
                        }
                        // means the reaction request failed

                    }

                }

            }

        case 1:

            // comment
            // might move this function to the page where comments for a post are viewed

            break;

    }

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

// .d8888b.  8888888888 88888888888                        
// d88P  Y88b 888            888                            
// 888    888 888            888                            
// 888        8888888        888                            
// 888  88888 888            888                            
// 888    888 888            888                            
// Y88b  d88P 888            888                            
//  "Y8888P88 8888888888     888                            

// 8888888b.   .d88888b.   .d8888b.  88888888888  .d8888b.  
// 888   Y88b d88P" "Y88b d88P  Y88b     888     d88P  Y88b 
// 888    888 888     888 Y88b.          888     Y88b.      
// 888   d88P 888     888  "Y888b.       888      "Y888b.   
// 8888888P"  888     888     "Y88b.     888         "Y88b. 
// 888        888     888       "888     888           "888 
// 888        Y88b. .d88P Y88b  d88P     888     Y88b  d88P 
// 888         "Y88888P"   "Y8888P"      888      "Y8888P"  

// GET POSTS

var post_counter = 0;
var stored_next_id = "";

function get_posts(id, count) {

    if (stored_next_id == "-1") {

        return null

    }

    var loading_icon = document.getElementById("loading-icon");
    loading_icon.className = "loading-icon";

    post_counter++;
    
    $.ajax({

        type: 'GET',
        url: '/posts?id=' + id + '&key=' + encodeURIComponent(readCookie("hashpass")) + "&uuk=" + encodeURIComponent(uuk),
        timeout: 60000,
        contentType: false,
        cache: false,
        processData: false,
        success: function(data) {

            var retrieved_posts = data['content'];
            var current_id = data['cid'];
            var next_id = data['nid'];
            var post_container = document.getElementById("posts");

            if (next_id == "0") {

                stored_next_id = "-1";

            } else {

                stored_next_id = next_id;
            }

            if (post_counter == count) {

                next_id = "0";

            }

            function display_post() {

                var post_div = document.createElement("div");
                post_div.id = "post-headers";
                post_div.className = "global-east-content-container-gone";
                post_div.setAttribute("metadata", current_id + "-post");

                post_div.innerHTML = retrieved_posts;

                post_container.appendChild(post_div);
                
                // var post_like_button = post_container.querySelector('[title="' + current_id + '-like"]');
                var post_like_button = post_container.querySelector("[metadata='" + current_id + "-like']");
                // var post_comment_button = post_container.querySelector('[title="' + current_id + '-comment"]');
                // var post_comment_button = post_container.querySelector("[metadata='" + current_id + "-comment']");

                post_like_button.addEventListener('pointerdown', function(e) {

                    e.preventDefault();
                    reaction(0, this);
            
                });

                setTimeout(() => {

                    post_div.className = "global-east-content-container-loaded";
    
                }, 1000);


            }

            if (next_id == "0") {

                post_counter = 0;
                update_in_progress = 0;
                display_post();
                loading_icon.className = "loading-hidden";

            } else if (next_id == "-1") {

                post_counter = 0;
                update_in_progress = 0;
                loading_icon.className = "loading-hidden";

            } else {

                display_post();

                if (loading_icon.className != "loading-done") {

                        loading_icon.className = "loading-hidden";
            
                }

                var next_task = get_posts(next_id, count);
    
            }

        }

    });

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

// 888b     d888        d8888 8888888 888b    888 
// 8888b   d8888       d88888   888   8888b   888 
// 88888b.d88888      d88P888   888   88888b  888 
// 888Y88888P888     d88P 888   888   888Y88b 888 
// 888 Y888P 888    d88P  888   888   888 Y88b888 
// 888  Y8P  888   d88P   888   888   888  Y88888 
// 888   "   888  d8888888888   888   888   Y8888 
// 888       888 d88P     888 8888888 888    Y888                                           

// MAIN
                                                                                                                            
// 888888 888888 888888 888888 888888 888888 8888

//

// PAGE SETUP

//

const connect_button = document.getElementById("connect-button");
const post_button = document.getElementById("post-button");
const actor = document.getElementById("body-headers");
const hand_button = document.getElementById("hand-button-icon");
const home_button = document.getElementById("home-button");
const logout_button = document.getElementById("logout-button");
const global_east_panel = document.getElementById("global-east-panel");
const navigation_panel = document.getElementById("navigation-panel");
const actor_div = document.getElementById("body-headers");

//

// ADD BUTTON LISTENERS

//

var conn_present = 0;
var conn_visible = 0;
var first_click_stamp = 0;

connect_button.addEventListener('pointerdown', function(e) {

    e.preventDefault();
    
    if (first_click_stamp == 0) {

        first_click_stamp = Math.floor((new Date().getTime()) / 1000);
        show_connect_info();

    } else {

        var current_click_stamp = Math.floor((new Date().getTime()) / 1000);

        if (current_click_stamp > first_click_stamp) {

            first_click_stamp = Math.floor((new Date().getTime()) / 1000);
            show_connect_info();

        } else {

            return null;

        }

    }
    
});

home_button.addEventListener('pointerdown', function(e) {

    e.preventDefault();
    home();

});

hand_button.addEventListener('pointerdown', function(e) {

    e.preventDefault();
    swap_orientation();

});

logout_button.addEventListener('pointerdown', function(e) {

    e.preventDefault();
    logout();

});

// close_search_button.addEventListener('pointerdown', function(e) {

//     e.preventDefault();
//     toggle_search();

// });

post_button.addEventListener('click', function(e) {

    e.preventDefault();
    db_action(uuk);

});

//

// pull to refresh

//
    
const reloadScreen = async () => {

    setTimeout(() => {

        location.reload();

    }, 200);

}

var pStart = {x: 0, y:0};
var pStop = {x:0, y:0};

function swipeStart(e) {
    if (typeof e['targetTouches'] !== "undefined"){
        var touch = e.targetTouches[0];
        pStart.x = touch.screenX;
        pStart.y = touch.screenY;
    } else {
        pStart.x = e.screenX;
        pStart.y = e.screenY;
    }
}

function swipeEnd(e){
    if (typeof e['changedTouches'] !== "undefined"){
        var touch = e.changedTouches[0];
        pStop.x = touch.screenX;
        pStop.y = touch.screenY;
    } else {
        pStop.x = e.screenX;
        pStop.y = e.screenY;
    }

    swipeCheck();
}

function swipeCheck(){
    var changeY = pStart.y - pStop.y;
    var changeX = pStart.x - pStop.x;
    if (isPullDown(changeY, changeX) ) {

        reloadScreen();
    }
}

function isPullDown(dY, dX) {
    // methods of checking slope, length, direction of line created by swipe action 
    return dY < 0 && (
        (Math.abs(dX) <= 200 && Math.abs(dY) >= 200)
        || (Math.abs(dX)/Math.abs(dY) <= 0.3 && dY >= 100)
    );
}

global_east_panel.addEventListener('touchstart', function(e){ swipeStart(e); }, false);
global_east_panel.addEventListener('touchend', function(e){ swipeEnd(e); }, false);

//

// auto-toggle tools and auto load posts

//

var update_in_progress = 0;
var lastScrollTop = 0;

global_east_panel.addEventListener('scroll', function() {
var st = window.pageYOffset || global_east_panel.scrollTop;

var current_height = global_east_panel.offsetHeight;

if (st > current_height - 1 && update_in_progress == 0) {

    update_in_progress = 1;

    get_posts(stored_next_id, 1);


}

if (st > lastScrollTop + 1) {

    // hide navigator and actor

    if (navigation_panel.className == "navigation-panel") {

        navigation_panel.className = "navigation-panel-hidden";
        actor_div.className = "global-headers-hidden";

    }
    
} else if (st < lastScrollTop - 1) {

    // show navigator and actor
    if (navigation_panel.className == "navigation-panel-hidden") {

        navigation_panel.className = "navigation-panel";
        actor_div.className = "global-headers";

    }

}

lastScrollTop = st <= 0 ? 0 : st;

}, false);

//

// ADD IMAGE TO MESSAGE BOX

//

const fileList = document.getElementById("file");
var md5_files = [];
var selectedFiles = [];
var image_present = 0;

fileList.addEventListener('change', function(e) {

    e.preventDefault();

    md5_files = [];
    selectedFiles = [];
    var fileDisplayArea = document.getElementById('image-area');
    var media_button = document.getElementById('media-button');

    selectedFiles = document.getElementById('file').files;

    fileDisplayArea.style = "height: 275px; background-color: #f9f9f9;";

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
                var div = document.createElement("div");

                fileDisplayArea.innerHTML = fileDisplayArea.innerHTML + "<div id='actor-image'><img style = 'width: 100%; max-width: 1000px; float: left;' src='" + picFile.result + "'/>";
                fileDisplayArea.insertBefore(div, null);

                var md5 = CryptoJS.MD5(picFile.result).toString();

                md5_files.push(md5);
                media_button.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7klEQVRogdXaaaxdUxTA8d+7fYYqUULTVIkpMSeioUoalZgJoaihpvBBCa2EqukLMU9VYw0RoompRcQ8R3ygiCn4UDGlSGglykO1fT6sc9x9rnvvO/e89r3X/5e71z777LvWXWevvfY6t2vc3F4J++EsjMdoQ5MleA8P4fm8szsZMBvTB1anSmyErXE8HsZp1A2Z7f9G9GAVugZEvb7pRQ0bJH2nYn1M6cZeikY8jJvxvaFpyGhMw3lZ//GY142Lk8GPylw1hPkV52MlZmR9M7vGze1djDFZxxb4YeB1q0Q3fsd6WNKNTbILPVhaYoKNcQoOwJb4Gx/haby8enVtywrx+G+P4d3CRcR6WA9/tbl5Cu7AZg39E8Rz+xxOxy+rT9+2rMo/a2IREYu63cI+V6yhRiNSDsfH6l5e09Syz95a22F1dhaeyPkCZ2JPTBJRLmeM8MyA0t33EHBX0n5NrI+Ut4Tyr2fyBBwm2XnXNGU8MlakLrAcR7UY9wauSuRp/dCrY8oYsnvSfhF/tBl7n/qa26WiTpUoY8iIpP19H2OXqkeSdStpVJEyhixO2vv2MXY3DMvav1bSqCJlDPlQrA3iMTu4zdhrkvYbFXWqRBlDehTD63wc2jBmOG7H/knfrf1TrTPKht/LMVWkJCNEWH1bpCYbCsPSg9gl+LqCPieIsD1MhPR7y95Y1pBVmIhXRW4jkyc2GTsH15VVIOExkZLnnIQTFb3ckrI7O3wrQuoczUPwR+IXrXLKfEHRiJxJSmYJZT2Ss1woepVIT7YWSeaneL/DuXKewiGJPAPL8EAmH4arcVm7STo1JOcX8Sv2lxcVo+B04XHYFDdm7UvxARa0mqiTR2t1s0DRiIvUjYCb8Hgiz8cOrSYbLEOexdGJfL5QvJEp+CyR38Q6zSYcDEPm44hEvlDsQa2YhN+y9mjFU2ieRQy4IS/gmEQ+R3GzbcYSxWPDJFybtXvyziqGjMK2Fe59UjE6zcTdJe9dKIzOmSX2mW/yjk6UGSkW37f4KpvkgpL3Po/JiTxdPSKV5W7ck8jzJElsWUN2FGfx40Rlj0hXbhEFvXYsUMzNZilGp06YJuq+OSPzRhlDjsIn2Crp+zJpn4J3NC9KPKMYnWbg+hLf2Y798VNjZ1+GnC3qVXnIWyZKrDupLzjYR3hsj6TvCRyZyBfjtk40bkEPDmzsbDRkWNK+U3Exfi5yrYWZfKlYcDljxO47Fffj2OTaebihitYt+EzkdXlNTte4ub2/iVL9clGgI57r9JF4RdSs/mky6XgRVlvVsmbqfGGXZRG2w7LUI99hG1HSSY24HQdpbgS8Kzz1bpNrF1hzRhBlUxQfrY2Fy9L8f5ZIH/riR+wtzhTpvbMrq1iO/5ZCmv1u3jBosjbZZgtOwEuiSv5EJdUq0iyN/1nE/Q8qzvlgdXWq0xi1FoqSTlUjBo3UI3+J0uifg6RLv0g98o/WkWnIU2tobzhYivSXwTzqrlZq6m+petUr6WsLecG8q6a+qdTUa7xrC7kTajX18/BwxVcIawNbZJ9/19T3jC5cOTj6VOIK9b9zLKopHv6niYPP2IHWqgNGiSJ5+qPP6cr+5vQITk4urBRn8xWGTmRbJdbzWPXjBtnL2XxnnyoUPjGTh4lKyVDnJVllJk1RThIF5TOwq+RgP8RYJt7zz5MkqP8CvLbqx/YzipkAAAAASUVORK5CYII=";

            });

            //Read the image
            picReader.readAsDataURL(file);

        }

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
        throw 'You are not logged in, you will be taken to the login page.';

    }

    uuk = CryptoJS.MD5(hash + usr).toString();
    var post_id = "-1";
    update_in_progress = 1;
    get_posts(post_id, 10);

} catch (e) {

    try {
        alert(e);
    } catch {
        console.log("error alerting");
    }
    
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