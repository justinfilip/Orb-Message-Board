# 88888888888 888    888 8888888888       88888888888  .d88888b.  8888888b.  
#     888     888    888 888                  888     d88P" "Y88b 888   Y88b 
#     888     888    888 888                  888     888     888 888    888 
#     888     8888888888 8888888              888     888     888 888   d88P 
#     888     888    888 888                  888     888     888 8888888P"  
#     888     888    888 888                  888     888     888 888        
#     888     888    888 888                  888     Y88b. .d88P 888        
#     888     888    888 8888888888           888      "Y88888P"  888        

# THE TOP
                                                                                                       
# 888888 888888 888888 888888 888888 888888 888888 888888 888888 888888 8888

import os, time, json, requests, hmac, hashlib, mnemonic, bip32utils
from os import read
from flask import Flask, request, url_for, flash, redirect
from werkzeug.utils import secure_filename
from stem.control import Controller

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
application = Flask(__name__, static_folder='/root/Orb-Message-Board/public/')
application.config['UPLOAD_FOLDER'] = '/root/Orb-Message-Board/public/media/'
application.secret_key = 'super secret key'
application.config['SESSION_TYPE'] = 'filesystem'
application.config.from_object(__name__)

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

# 8888888 888b    888 88888888888 8888888888 8888888b.  888b    888        d8888 888                   
#   888   8888b   888     888     888        888   Y88b 8888b   888       d88888 888                   
#   888   88888b  888     888     888        888    888 88888b  888      d88P888 888                   
#   888   888Y88b 888     888     8888888    888   d88P 888Y88b 888     d88P 888 888                   
#   888   888 Y88b888     888     888        8888888P"  888 Y88b888    d88P  888 888                   
#   888   888  Y88888     888     888        888 T88b   888  Y88888   d88P   888 888                   
#   888   888   Y8888     888     888        888  T88b  888   Y8888  d8888888888 888                   
# 8888888 888    Y888     888     8888888888 888   T88b 888    Y888 d88P     888 88888888              
                                                                                                     
                                                                                                     
                                                                                                     
# 8888888888 888     888 888b    888  .d8888b.  88888888888 8888888  .d88888b.  888b    888  .d8888b.  
# 888        888     888 8888b   888 d88P  Y88b     888       888   d88P" "Y88b 8888b   888 d88P  Y88b 
# 888        888     888 88888b  888 888    888     888       888   888     888 88888b  888 Y88b.      
# 8888888    888     888 888Y88b 888 888            888       888   888     888 888Y88b 888  "Y888b.   
# 888        888     888 888 Y88b888 888            888       888   888     888 888 Y88b888     "Y88b. 
# 888        888     888 888  Y88888 888    888     888       888   888     888 888  Y88888       "888 
# 888        Y88b. .d88P 888   Y8888 Y88b  d88P     888       888   Y88b. .d88P 888   Y8888 Y88b  d88P 
# 888         "Y88888P"  888    Y888  "Y8888P"      888     8888888  "Y88888P"  888    Y888  "Y8888P"  
                                                                                            
# INTERNAL FUNCTIONS
                                                                                                                  
# 888888 888888 888888 888888 888888 888888 888888 888888 888888 888888 888888 888888 888888 888888 88

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def bip39(mnemonic_words):
    mobj = mnemonic.Mnemonic("english")
    seed = mobj.to_seed(mnemonic_words)

    bip32_root_key_obj = bip32utils.BIP32Key.fromEntropy(seed)
    bip32_child_key_obj = bip32_root_key_obj.ChildKey(
        44 + bip32utils.BIP32_HARDEN
    ).ChildKey(
        0 + bip32utils.BIP32_HARDEN
    ).ChildKey(
        0 + bip32utils.BIP32_HARDEN
    ).ChildKey(0).ChildKey(0)

    return bip32_child_key_obj.Address()

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

# 8888888888 888b    888 8888888b.  8888888b.   .d88888b.  8888888 888b    888 88888888888  .d8888b.  
# 888        8888b   888 888  "Y88b 888   Y88b d88P" "Y88b   888   8888b   888     888     d88P  Y88b 
# 888        88888b  888 888    888 888    888 888     888   888   88888b  888     888     Y88b.      
# 8888888    888Y88b 888 888    888 888   d88P 888     888   888   888Y88b 888     888      "Y888b.   
# 888        888 Y88b888 888    888 8888888P"  888     888   888   888 Y88b888     888         "Y88b. 
# 888        888  Y88888 888    888 888        888     888   888   888  Y88888     888           "888 
# 888        888   Y8888 888  .d88P 888        Y88b. .d88P   888   888   Y8888     888     Y88b  d88P 
# 8888888888 888    Y888 8888888P"  888         "Y88888P"  8888888 888    Y888     888      "Y8888P"  

# ENDPOINTS
                                                                                                                      
# 888888 888888 888888 888888 888888 888888 888888 888888 888888 888888 888888 888888 888888 888888 8

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

# 888b     d888        d8888 8888888 888b    888       888     888 8888888b.  888      
# 8888b   d8888       d88888   888   8888b   888       888     888 888   Y88b 888      
# 88888b.d88888      d88P888   888   88888b  888       888     888 888    888 888      
# 888Y88888P888     d88P 888   888   888Y88b 888       888     888 888   d88P 888      
# 888 Y888P 888    d88P  888   888   888 Y88b888       888     888 8888888P"  888      
# 888  Y8P  888   d88P   888   888   888  Y88888       888     888 888 T88b   888      
# 888   "   888  d8888888888   888   888   Y8888       Y88b. .d88P 888  T88b  888      
# 888       888 d88P     888 8888888 888    Y888        "Y88888P"  888   T88b 88888888 

# MAIN URL

@application.route('/', methods=['GET'])
def orb_main():

    return redirect('/feed')

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

# 888       .d88888b.   .d8888b.  8888888 888b    888 
# 888      d88P" "Y88b d88P  Y88b   888   8888b   888 
# 888      888     888 888    888   888   88888b  888 
# 888      888     888 888          888   888Y88b 888 
# 888      888     888 888  88888   888   888 Y88b888 
# 888      888     888 888    888   888   888  Y88888 
# 888      Y88b. .d88P Y88b  d88P   888   888   Y8888 
# 88888888  "Y88888P"   "Y8888P88 8888888 888    Y888                                            

# LOGIN

@application.route('/login', methods=['GET'])
def orb_login():
    
    with open('/root/Orb-Message-Board/public/pages/orb_login.html', 'r') as ui_code_source:

        ui_code = ui_code_source.read()

    style = url_for('static', filename='styles/orb_login.css')
    script = url_for('static', filename='scripts/orb_login.js')

    return ui_code.format(style, script)

#  .d8888b.  888    888 8888888888  .d8888b.  888    d8P  
# d88P  Y88b 888    888 888        d88P  Y88b 888   d8P   
# 888    888 888    888 888        888    888 888  d8P    
# 888        8888888888 8888888    888        888d88K     
# 888        888    888 888        888        8888888b    
# 888    888 888    888 888        888    888 888  Y88b   
# Y88b  d88P 888    888 888        Y88b  d88P 888   Y88b  
#  "Y8888P"  888    888 8888888888  "Y8888P"  888    Y88b 
                                                        
                                                        
                                                        
#  .d8888b.  8888888b.  8888888888 8888888b.   .d8888b.   
# d88P  Y88b 888   Y88b 888        888  "Y88b d88P  Y88b  
# 888    888 888    888 888        888    888 Y88b.       
# 888        888   d88P 8888888    888    888  "Y888b.    
# 888        8888888P"  888        888    888     "Y88b.  
# 888    888 888 T88b   888        888    888       "888  
# Y88b  d88P 888  T88b  888        888  .d88P Y88b  d88P  
#  "Y8888P"  888   T88b 8888888888 8888888P"   "Y8888P"   
    
# CHECK CREDS

@application.route('/checkcreds', methods=['GET'])
def orb_check_creds():

    user_id = request.args['sn']
    key = request.args['key']
    uuk = request.args['uuk']

    with open('/root/Orb-Message-Board/orb_resources/orb_allowed_peers.json','r') as orb_allowed_peers_path:
                            
        orb_allowed_peers = json.load(orb_allowed_peers_path)

    with open('/root/Orb-Message-Board/orb_resources/orb_screennames.json','r') as orb_screennames_path:
                                
        orb_screennames = json.load(orb_screennames_path)

    if user_id in orb_screennames:
        pass
    
    else:

        return {"message": "snfail"}

    if uuk in orb_allowed_peers.keys():

        if orb_allowed_peers[uuk][0] == uuk + key:

            return {"message": "valid"}

        else:

            return {"message": "passfail"}

    else:

        return {"message": "passfail"}

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#   888888  .d88888b.  8888888 888b    888 
#     "88b d88P" "Y88b   888   8888b   888 
#      888 888     888   888   88888b  888 
#      888 888     888   888   888Y88b 888 
#      888 888     888   888   888 Y88b888 
#      888 888     888   888   888  Y88888 
#      88P Y88b. .d88P   888   888   Y8888 
#      888  "Y88888P"  8888888 888    Y888 
#    .d88P                                 
#  .d88P"                                  
# 888P" 
                                   
# JOIN

@application.route('/join', methods=['GET'])
def orb_join():

    join_key = request.args['key']

    # check that join_key is a member of orb_access_keys

    with open('/root/Orb-Message-Board/orb_resources/orb_access_keys.json','r') as orb_access_keys_path:
                                
        orb_access_keys = json.load(orb_access_keys_path)

    if join_key in orb_access_keys:

        with open('/root/Orb-Message-Board/public/pages/orb_join.html', 'r') as ui_code_source:

            ui_code = ui_code_source.read()

        style = url_for('static', filename='styles/orb_join.css')
        script = url_for('static', filename='scripts/orb_join.js')

        return ui_code.format(style, script, join_key)

    else:

        with open('/root/Orb-Message-Board/public/pages/orb_invalid.html', 'r') as ui_code_source:

            ui_code = ui_code_source.read()

        style = url_for('static', filename='styles/orb_invalid.css')
        script = url_for('static', filename='scripts/orb_invalid.js')

        return ui_code.format(style, script)

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#  .d8888b.  888    888 8888888888  .d8888b.  888    d8P  
# d88P  Y88b 888    888 888        d88P  Y88b 888   d8P   
# 888    888 888    888 888        888    888 888  d8P    
# 888        8888888888 8888888    888        888d88K     
# 888        888    888 888        888        8888888b    
# 888    888 888    888 888        888    888 888  Y88b   
# Y88b  d88P 888    888 888        Y88b  d88P 888   Y88b  
#  "Y8888P"  888    888 8888888888  "Y8888P"  888    Y88b 
                                                        
                                                        
                                                        
#  .d8888b.  888b    888                                  
# d88P  Y88b 8888b   888                                  
# Y88b.      88888b  888                                  
#  "Y888b.   888Y88b 888                                  
#     "Y88b. 888 Y88b888                                  
#       "888 888  Y88888                                  
# Y88b  d88P 888   Y8888                                  
#  "Y8888P"  888    Y888                                  
              
# USER REG

@application.route('/checksn', methods=['GET'])
def orb_check_sn():

    user_id = request.args['sn']
    join_key = request.args['joinkey']

    with open('/root/Orb-Message-Board/orb_resources/orb_access_keys.json','r') as orb_access_keys_path:
                                
        orb_access_keys = json.load(orb_access_keys_path)

    if join_key in orb_access_keys.keys():

        with open('/root/Orb-Message-Board/orb_resources/orb_screennames.json','r') as orb_screennames_path:
                                
            orb_screennames = json.load(orb_screennames_path)

            application.logger.info(user_id)
            print(user_id)
            
            if user_id in orb_screennames.keys():

                return {"message": "fail"}

            else:

                return {"message": "available"}

    else:

        return {"message": "not authorized"}

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

# 888     888  .d8888b.  8888888888 8888888b.  
# 888     888 d88P  Y88b 888        888   Y88b 
# 888     888 Y88b.      888        888    888 
# 888     888  "Y888b.   8888888    888   d88P 
# 888     888     "Y88b. 888        8888888P"  
# 888     888       "888 888        888 T88b   
# Y88b. .d88P Y88b  d88P 888        888  T88b  
#  "Y88888P"   "Y8888P"  8888888888 888   T88b 
                                             
                                             
                                             
# 8888888b.  8888888888  .d8888b.              
# 888   Y88b 888        d88P  Y88b             
# 888    888 888        888    888             
# 888   d88P 8888888    888                    
# 8888888P"  888        888  88888             
# 888 T88b   888        888    888             
# 888  T88b  888        Y88b  d88P             
# 888   T88b 8888888888  "Y8888P88             
                    
# USER REG

@application.route('/reg', methods=['GET'])
def orb_reg():

    uuk = request.args['uuk']
    user_id = request.args['sn']
    user_dn = request.args['dn']
    user_key = request.args['key']
    user_image = request.args['img']
    join_key = request.args['joinkey']

    user_likes_path = '/root/Orb-Message-Board/public/likes/' + uuk + '.json'

    with open('/root/Orb-Message-Board/orb_resources/orb_access_keys.json','r') as orb_access_keys_path:
                                
        orb_access_keys = json.load(orb_access_keys_path)

    del orb_access_keys[join_key]
    
    with open('/root/Orb-Message-Board/orb_resources/orb_access_keys.json','w') as orb_access_keys_path:

        json.dump(orb_access_keys, orb_access_keys_path)

    with open('/root/Orb-Message-Board/orb_resources/orb_allowed_peers.json','r') as orb_allowed_peers_path:
                            
        orb_allowed_peers = json.load(orb_allowed_peers_path)

    # DELETE A USER

    if uuk in orb_allowed_peers.keys():

        if orb_allowed_peers[uuk][0] == uuk + user_key:

            del orb_allowed_peers[uuk]

            with open('/root/Orb-Message-Board/orb_resources/orb_access_keys.json','w') as orb_access_keys_path:

                json.dump(orb_access_keys, orb_access_keys_path)

            with open('/root/Orb-Message-Board/orb_resources/orb_users.json','r') as orb_users_path:
                                
                orb_users = json.load(orb_users_path)

            if uuk + user_key in orb_users.keys():

                del orb_users[uuk + user_key]

            with open('/root/Orb-Message-Board/orb_resources/orb_users.json','w') as orb_users_path:
                                
                json.dump(orb_users, orb_users_path)

            with open('/root/Orb-Message-Board/orb_resources/orb_user_meta.json','r') as orb_user_meta_path:
                                
                orb_user_meta = json.load(orb_user_meta_path)

            if uuk in orb_user_meta.keys():

                del orb_user_meta[uuk]

            with open('/root/Orb-Message-Board/orb_resources/orb_user_meta.json','w') as orb_user_meta_path:
                                
                json.dump(orb_user_meta, orb_user_meta_path)

            return {"message": "success"}

    else:

        # add new user

        orb_allowed_peers[uuk] = [uuk + user_key]

        with open('/root/Orb-Message-Board/orb_resources/orb_allowed_peers.json','w') as orb_allowed_peers_path:
                            
            json.dump(orb_allowed_peers, orb_allowed_peers_path)

        with open('/root/Orb-Message-Board/orb_resources/orb_users.json','r') as orb_users_path:
                            
            orb_users = json.load(orb_users_path)

        orb_users[uuk + user_key] = [user_id, user_dn, user_image]

        with open('/root/Orb-Message-Board/orb_resources/orb_users.json','w') as orb_users_path:
                            
            json.dump(orb_users, orb_users_path)

        with open('/root/Orb-Message-Board/orb_resources/orb_user_meta.json','r') as orb_user_meta_path:
                            
            orb_user_meta = json.load(orb_user_meta_path)

        orb_user_meta[uuk] = [user_id, user_dn, user_image]

        with open('/root/Orb-Message-Board/orb_resources/orb_user_meta.json','w') as orb_user_meta_path:
                            
            json.dump(orb_user_meta, orb_user_meta_path)

        with open('/root/Orb-Message-Board/orb_resources/orb_screennames.json','r') as orb_screennames_path:
                            
            orb_screennames = json.load(orb_screennames_path)

        if user_id in orb_screennames.keys():

            return {"message": "fail"} # should never get here, but ya know

        else:

            orb_screennames[user_id] = []

            with open('/root/Orb-Message-Board/orb_resources/orb_screennames.json','w') as orb_screennames_path:
                                
                json.dump(orb_screennames, orb_screennames_path)

        if os.path.exists(user_likes_path):

            pass
        
        else:

            with open(user_likes_path, 'w') as user_likes_records:
                json.dump({}, user_likes_records)

        return {"message": "success"}

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#   888888  .d88888b.  8888888 888b    888     
#     "88b d88P" "Y88b   888   8888b   888     
#      888 888     888   888   88888b  888     
#      888 888     888   888   888Y88b 888     
#      888 888     888   888   888 Y88b888     
#      888 888     888   888   888  Y88888     
#      88P Y88b. .d88P   888   888   Y8888     
#      888  "Y88888P"  8888888 888    Y888     
#    .d88P                                     
#  .d88P"                                      
# 888P"  
#                                      
#  .d8888b.   .d88888b.  8888888b.  8888888888 
# d88P  Y88b d88P" "Y88b 888  "Y88b 888        
# 888    888 888     888 888    888 888        
# 888        888     888 888    888 8888888    
# 888        888     888 888    888 888        
# 888    888 888     888 888    888 888        
# Y88b  d88P Y88b. .d88P 888  .d88P 888        
#  "Y8888P"   "Y88888P"  8888888P"  8888888888 
                                               
# JOIN CODE

@application.route('/getcode', methods=['GET'])
def get_code():
#ex
    uuk = request.args['uuk']
    user_key = request.args['key']

    with open('/root/Orb-Message-Board/orb_resources/orb_allowed_peers.json','r') as orb_allowed_peers_path:
                                
        orb_allowed_peers = json.load(orb_allowed_peers_path)

    if uuk in orb_allowed_peers.keys():

        if orb_allowed_peers[uuk][0] == uuk + user_key:

            mnemo = mnemonic.Mnemonic("english")

            mnemonic_words = mnemo.generate(strength=256)
            # mnemonic_words = "roof invite maid gown frown subway fluid feel pizza flat kit patch gaze course month north jar genuine miss enjoy nest damp aspect solid"

            seed = mnemo.to_seed(mnemonic_words, passphrase=user_key)

            entropy = mnemo.to_entropy(mnemonic_words)

            key = bip39(mnemonic_words)

            # add_key to orb_access_keys
            with open('/root/Orb-Message-Board/orb_resources/orb_access_keys.json','r') as orb_access_keys_path:
                                        
                orb_access_keys = json.load(orb_access_keys_path)

            orb_access_keys.update({key: []})

            with open('/root/Orb-Message-Board/orb_resources/orb_access_keys.json','w') as orb_access_keys_path:

                json.dump(orb_access_keys, orb_access_keys_path)

            orb_information_path = os.path.expanduser('/root/Orb-Message-Board/orb_resources/orb_information.json')

            orb_address = ''

            with open(orb_information_path, 'r') as orb_information:
                orb_info = json.load(orb_information)

                for orb_entity in orb_info.keys():
                    orb_address = orb_entity

            connection_info = orb_address + '/join?key=' + key

            return {"join":connection_info}
        
        else:
            
            # redirect to invalid join key page

            return {"join":"not authorized"}
    else:
            
        # redirect to invalid join key page

        return {"join":"not authorized"}

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

# 8888888888 8888888888 8888888888 8888888b.  
# 888        888        888        888  "Y88b 
# 888        888        888        888    888 
# 8888888    8888888    8888888    888    888 
# 888        888        888        888    888 
# 888        888        888        888    888 
# 888        888        888        888  .d88P 
# 888        8888888888 8888888888 8888888P"  

# FEED

@application.route('/feed', methods=['GET'])
def orb_feed():

    with open('/root/Orb-Message-Board/public/pages/orb_feed.html', 'r') as ui_code_source:
        ui_code = ui_code_source.read()

    style = url_for('static', filename='styles/orb_feed.css')
    script = url_for('static', filename='scripts/orb_feed.js')

    return ui_code.format(style, script) # pull connection info separately
  
#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#  .d8888b.  8888888888 88888888888                        
# d88P  Y88b 888            888                            
# 888    888 888            888                            
# 888        8888888        888                            
# 888  88888 888            888                            
# 888    888 888            888                            
# Y88b  d88P 888            888                            
#  "Y8888P88 8888888888     888                            

# 8888888b.   .d88888b.   .d8888b.  88888888888  .d8888b.  
# 888   Y88b d88P" "Y88b d88P  Y88b     888     d88P  Y88b 
# 888    888 888     888 Y88b.          888     Y88b.      
# 888   d88P 888     888  "Y888b.       888      "Y888b.   
# 8888888P"  888     888     "Y88b.     888         "Y88b. 
# 888        888     888       "888     888           "888 
# 888        Y88b. .d88P Y88b  d88P     888     Y88b  d88P 
# 888         "Y88888P"   "Y8888P"      888      "Y8888P"  

# GET POSTS

@application.route('/posts', methods=['GET'])
def send_posts():

    user_key = request.args['key']
    post_id = request.args['id']
    unique_user_key = request.args['uuk']

    with open('/root/Orb-Message-Board/orb_resources/orb_allowed_peers.json','r') as orb_allowed_peers_path:
                                
        orb_allowed_peers = json.load(orb_allowed_peers_path)

    user_likes_path = '/root/Orb-Message-Board/public/likes/' + unique_user_key + '.json'

    if unique_user_key in orb_allowed_peers.keys():

        if orb_allowed_peers[unique_user_key][0] == unique_user_key + user_key:

            posts = ''

            with open('/root/Orb-Message-Board/public/feeds/orb_likes.json','r') as likes_records_path:
                                    
                likes_records_source = json.load(likes_records_path)

            with open('/root/Orb-Message-Board/public/feeds/orb_feed.json','r') as local_records_path:
                                
                updated_local_records_source = json.load(local_records_path)

            with open('/root/Orb-Message-Board/public/feeds/orb_feed.json','r') as local_records_path:
                                
                updated_local_records_source = json.load(local_records_path)

                if len(updated_local_records_source) < 1:

                    return {'content':'', 'cid':'-1', 'nid':'-1'}

            keys_list = list(updated_local_records_source)

            if post_id == "-1": #start new post request stream

                try:

                    # get the first post
                    local_record = keys_list[0]
                    current_id = local_record

                except:

                    # there are no posts
                    return {'content':'', 'cid':'', 'nid':'-1'}

                try:

                    #get the next post
                    next_id = keys_list[1]

                except:

                    # no more posts after this one
                    next_id = "0"

            else: # next post id has been supplied

                local_record = post_id
                current_id = local_record

                try:

                    #get the next post
                    next_id = keys_list[keys_list.index(local_record) + 1]
                except:

                    # no more posts after this one
                    next_id = "0"


            uuk = updated_local_records_source[local_record][3]

            with open('/root/Orb-Message-Board/orb_resources/orb_user_meta.json','r') as orb_user_meta_path:
                                    
                orb_user_meta = json.load(orb_user_meta_path)

            post_user_record = orb_user_meta[uuk]

            profile_image = url_for('static', filename='media/' + post_user_record[2] + '') # = profile image of screenname from post, found in orb_user_meta.json

            profile_name = post_user_record[1]

            profile_handle = post_user_record[0]

            with open(user_likes_path,'r') as user_likes_records_path:
                                        
                user_likes_records_source = json.load(user_likes_records_path)

            if local_record in user_likes_records_source.keys() and user_likes_records_source[local_record][0] != "0":

                like_class = 'like-button'
                like_count_class = 'like-count-liked'
                like_button_src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFP0lEQVRogdXaZ4hcVRTA8V+G1WjEFgsGNagYgyVYo4klxm7sisau2MACoqASNSiWiAWx4AcbiVgRFSwoK0pib7GAYIkasSaxGwsaW/xw3svcec7MTnm7bv6w7D1nztx7zy3v3XPuDNn6lsVaYDXsgrFYH8vhR7yHmXi1lUqasCV2w6ZZW3/iE7yR1b+grwp6+vh8FC7GQVihid17uAYz+mqwwGRMEY404g88gUvxViOjSpMKpuIDHK25E7AxpmMW1uzDlpjRh3G/5k7AsmIg38RVjYyGNFha94vRSvlNTPU8LMJKYsY2Kdh9LZbhuw3aXAvPY8OC/kPMwQ9YBiOwOVYp2D2N/bI+LKHe0nosM8z5Btfj9qyTRfYQy2PXTF4Ts8UsfVawXRGvY+1E9yquFDNUZGUcj7OxXqbbHc9gfGpYXFqXF5zoxWhc0cAJeEps1HMS3TAx6kVmFZy4FOMaOAELcWPWh/sS/TixlJeQOrINLkzkOzBJTHUrXIvDEnkkbk3kqdg6kU8XD5JW+ANH4bpEdwL2z4V0j8zBRln5LWzVYiNFzio0OFwMRroZr8F5Hdbfi72y8vficb1kRiaqOgH7dtgIsZ9eSuSb1c7MRzp3Ag7Er1l5OI6k6siUxPA6zO+iITgiKU/GKYl8VJd1L8JFiXw+sbSG47vkgxFaeJO2wG04uaDrFfuuW4aKB8HQTN6ogr0TgxeU4wRcUkd3YR1dJyzCI4l8UAUTEsUjyuMLtWewT8XbuSzSvo6vYINE8XKJDcEtSXl6Q6vOeD0pj+zBuoniy5Ibu1O8W4aJ90yZLBDHpuWxRo/qIe83sYHK5G/sU3KdOT8JZ9bHihVxQIO/sr+lid+z/z2VRBiq+jhbGhgiTuDwZwVfZcKy4rS5tDBcdVv8VBEhZc7oAe9O54xU3RbzK+KwmDPhv/aDlh2T8scVPJkoDhngznRDGsHOrIhg55dMMUrfMfRgYB21M/JwRTxy0+hrisHP2Um5F9/ngdVovJ98OErEDYORVcRpPQ9BJuD5XJiD5xLjuweuX20zQ9WJD2S5gTRmPz0pb4fDB6ZfbbGHyHHlnJYXUkfeEcFQzr1YvV+71R49It+W0yvSqfhvOuhUkdPNP5tp8NCLVbPy37JYPafoyD84OJHHiMTc/83lIneWc6zqgKN+7vcZTEvkk3BuyR1rh2PUhsgz1L4u0DiJPVXkWHOuFqMw0OyFuxJ5Nk6sZ9gsG7+neLzl3Kn/gqR6jBX7IudbkfetSzNHFmMHtWvxcbVHg/5ic7xY6Mv2IiqsSzNHiFHYUdwg5TyLnTrsYCtsIjKVyyS6XcS1Q0P6coR4v4wrfOe5rPKyGSPuYIYlukli8JrSiiNEPmrngm6myBmXxWYiD7ZcojtM7T5pSKuOUH8WZiknBbqtyFMtn+gOxYOtVtCOI8Q7ZmJB94TknqIDxuMVtYmPA/BQO5W06wjVzZ7edzwqRrBddhcbe0iiO1hc/7VFJ44Qye5xai8kHxC3SK1ygLi2S5mk8TVcUzp1BF4TazvNTk7HGS18d7LaJPRicZna0sauRzeOwNsidvkx0d2EM5t850i1x/H8xTurm4506wgRXW6j9pbrBlxQx/YUEefk/CIGoutbgDIcgbnixvbzRDcNlyXymWrvEn8WF66zy+hAX79FaYf5omMvieQFcYr+TpyRbkhsvxWP3dISHI1+wtENK4sD36YNPp8nDoCfltloWUsrZaHGS2YutlCyE/SPI8QvFbYVj+icuSKL+U1/NFjmHqnHdrhHnKGOU03Nls6/kn8H2GYDuI4AAAAASUVORK5CYII="

            else:

                like_class = 'like-button'
                like_count_class = 'like-count'
                like_button_src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFQklEQVRogdXaeazcUxTA8U/Ha1Gx1RKCRkWJpbFUaa1Fq2qpJdROSDSWpCERKRpijSVShMSWVqwRJJaQJ6S170tCkKJiL1r7Wlv9cX4/c+fXmXnzZn7v5fWbTN69Z87ce89dzz33DZo2bZoWWAt7YgxGYCX8gPcwFy+3UkgTtsPe2Cqr6y98jNez8r/qqYCuHr4fiQtwMFZpovcersKcniosMBUzhCGN+BOP4SK82Uip0qSAmXgfx2huBGyB2ZiHdXvQJUb0QdyruREwRHTkG7iikVKjEblX9FbK72Kov8QSrCZGbMtEZzzeFtPw3QZlr4dnsWlB/gHm43sMxvrYBmskOmdjexyQtaGpIY9kijmLcA1uxTd19CeK6bFXll8Xr4pR+rSguypewwaJ7GVcLkaoyOo4AWdi40w2AU9hXKpYnFqXFIzoxua4rIER8IRYqGclsqGi14vMKxhxEcY2MAJ+xHVZG+5J5GPFVP6f1JAdcF6Svw2TxVC3wtU4PMkPx81JfiZGJ/nTxEbSCn/iaMxKZCfiwDwzKNl+52OzLP2mmIvtcEahwmGiM5YmsqvEfG+HbkzK0t+J7fr/ERmvagTs32YlxHp6IcnfqHZkPtS+EXAQfs3Sw3AUVUNmJIqzsLCDiuDIJD0VJyf5ozssewnOT/LnEIYMUx0quLLDiuAzscsV6RY7WqfcoLr9jsLICvZNFJ7TgjvQIhfWkZ1XR9YOS/BQkj+4gt0TwUPK43O1Ptgn4nQui7St4yrYJBG8WGJFcFOSnt1Qqz1eS9LDu7BRIvii5MpuF2fLUHHOlMlXwm1aGet0qTp5v4uTtEz+wX4ll5nzkzBmBFatCAcN/s4+yxN/ZH+7KklmxeyzvDBIeODwVwVfZ5khwttcXhimuix+qogrZc7m/d6c9hmuuiwWVoSzmLP7svoDll2T9EcVPJ4IDu3nxnRCeoOdWxGXnV8ywUg936EHAhuqHZEHK2LLTW9fMwx8zkzS3fgud+PTU3eqZQMDA4k1xOUt5zKq95H5eCb58s5+aVJ7zFFt9/uy2EB6Zz8tSe+EI/qnXb1ioohx5ZyaJ1JD3sEtSf5urN2nzeodXSLeltMtwqlYNhx0iojp5t/NNXDoxppZ+h/ZXT2naMi/OCTJj1L/ytrfXCJiZznHqXY4WGH06DTUhHBZBque8tvjN7WRkf7kWLXhpTm4tKjUKIg9E08m+StFL/Q3k3BHkn8VJ9VTbBaN30dsbzm367tLUj3GiHWRs1jEfevSzJCl2EXtXHxUrWvQV2yD5wtt2VncCuvSzBCiF3YVL0g5T2O3NhvYCluK9Tg4ke0pnh0a0pMhxPkytvCbZ7LCy2aUeIMZmsgmi85rSiuGEPGoPQqyuSJmXBZbizjYSonscLXrpCGtGkL9UZgneqxTdhRxqpUT2WG4v9UCemMI8VI0viB7TPJO0Qbj8JLawMcUPNCbQnprCNXFnr53PCx6sLdMEAt7UCI7RDz/9Yp2DCGC3WPVPkjeJ16RWmWKeLZLmazxM1xT2jUEXhFzO41OzsbpLfx2qtog9FLxmNrSwq5HJ4bAW+Lu8kMiux7Tm/zmKLXueH7wzuukIZ0aQtwud1D7ynUtzq2je7K45+T8Ijqi41eAMgyBBeLF9rNEdikuTvLT1b4l/iw86zJesHr8X5TesFA07AURViK86G+Fj3RtortYbLsfllV5mYYQDRwjHL6tMtmsgs6XwgH8pMyKy5paKT9qPGUWYFslG0HfGEL8p8KOYovOWSCimIv6osKyp1aRnXCX8KGOVw3Nls5/xe4BZeNvxXMAAAAASUVORK5CYII="

            try:

                current_like_count = likes_records_source[local_record][0]

                if current_like_count == '0':

                    current_like_count = ''

            except:

                current_like_count = ''
                application.logger.info('no likes')
                
            post_images = ""

            image_count = 0
            file_names = []

            for image_file in updated_local_records_source[local_record][2].split("+"):

                file_names.append(image_file)

            for filename in file_names:

                if filename != '':

                    image_count += 1

                    post_images = post_images + "<img id='" + filename + "' src='" + url_for('static', filename='media/' + filename) + "' class='image-item' style='width: 100%; max-width: 1000px; float: left;'></img>"

            post_string = "<div class='profile-header'><img src=" + profile_image + " class='profile-image'></img><div class='name'><b>" + profile_name + "</b><div class='profile-bubble'><b class='handle'>@" + profile_handle + "</b></div></div></div><div class='post-body'>" + updated_local_records_source[local_record][1].replace('``', '<div class="small-spacer"></div>') + "<div class='small-spacer'></div><div id='image-area' class='image-area'>{}</div></div><div id='submit-button' class='reactor'><div id='like-button' metadata='" + local_record + "-like'><img id='" + local_record + "-like' class='" + like_class + "' src='" + like_button_src + "'></img></div><div metadata='" + local_record + "-like-count' class='" + like_count_class + "'>" + current_like_count + "</div></div>"

            posts += post_string.format(post_images)

            return {'content':posts, 'cid':current_id, 'nid':next_id}
            
        else:

            return {'content':'', 'cid':'-1', 'nid':'-1'}
        
    else:

        return {'content':'', 'cid':'-1', 'nid':'-1'}
  
#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

# 8888888b.  8888888888        d8888  .d8888b.  88888888888 8888888  .d88888b.  888b    888 
# 888   Y88b 888              d88888 d88P  Y88b     888       888   d88P" "Y88b 8888b   888 
# 888    888 888             d88P888 888    888     888       888   888     888 88888b  888 
# 888   d88P 8888888        d88P 888 888            888       888   888     888 888Y88b 888 
# 8888888P"  888           d88P  888 888            888       888   888     888 888 Y88b888 
# 888 T88b   888          d88P   888 888    888     888       888   888     888 888  Y88888 
# 888  T88b  888         d8888888888 Y88b  d88P     888       888   Y88b. .d88P 888   Y8888 
# 888   T88b 8888888888 d88P     888  "Y8888P"      888     8888888  "Y88888P"  888    Y888 
                                                                                     
# REACTION

@application.route('/react', methods=['POST'])
def orb_react():

    uuk = request.args['uuk']
    post_id = request.args['id']
    user_key = request.args['key']


    user_likes_path = '/root/Orb-Message-Board/public/likes/' + uuk + '.json'

    with open('/root/Orb-Message-Board/orb_resources/orb_allowed_peers.json','r') as orb_allowed_peers_path:
                                
        orb_allowed_peers = json.load(orb_allowed_peers_path)

    if uuk in orb_allowed_peers.keys():

        if orb_allowed_peers[uuk][0] == uuk + user_key:

            # user specific like tracker 

            with open(user_likes_path,'r') as likes_records_path:
                                        
                likes_records_source = json.load(likes_records_path)

            try:
                reaction = request.args['reaction']

                if reaction[0] == '0':

                    if post_id in likes_records_source.keys():

                        if reaction[1] == '1':
                            # add like

                            timestamp = float(time.time())

                            current_like_count = int(likes_records_source[post_id][0])

                            like_record = {post_id: [str(current_like_count + 1)]}
                            likes_records_source.update(like_record)

                            with open(user_likes_path, 'w') as likes_records_path:

                                json.dump(likes_records_source, likes_records_path)

                        else:
                            # remove like
                            timestamp = float(time.time())

                            current_like_count = int(likes_records_source[post_id][0])

                            like_record = {post_id: [str(current_like_count - 1)]}
                            likes_records_source.update(like_record)

                            with open(user_likes_path, 'w') as likes_records_path:

                                json.dump(likes_records_source, likes_records_path)

                    else:

                        like_record = {post_id: ['1']}
                        likes_records_source.update(like_record)

                        with open(user_likes_path, 'w') as likes_records_path:

                            json.dump(likes_records_source, likes_records_path)

            except:

                return {"message":"failure"}


            # global like tracker (this is split out from user likes for no good reason other than maybe I will want isolated like action behaviors, probably will end up condensing this and above block though)

            with open('/root/Orb-Message-Board/public/feeds/orb_likes.json','r') as likes_records_path:
                                        
                likes_records_source = json.load(likes_records_path)

            try:
                reaction = request.args['reaction']

                if reaction[0] == '0':

                    if post_id in likes_records_source.keys():

                        if reaction[1] == '1':
                            # add like

                            timestamp = float(time.time())

                            current_like_count = int(likes_records_source[post_id][0])

                            like_record = {post_id: [str(current_like_count + 1)]}
                            likes_records_source.update(like_record)

                            with open('/root/Orb-Message-Board/public/feeds/orb_likes.json', 'w') as likes_records_path:

                                json.dump(likes_records_source, likes_records_path)

                        else:
                            # remove like
                            timestamp = float(time.time())

                            current_like_count = int(likes_records_source[post_id][0])

                            like_record = {post_id: [str(current_like_count - 1)]}
                            likes_records_source.update(like_record)

                            with open('/root/Orb-Message-Board/public/feeds/orb_likes.json', 'w') as likes_records_path:

                                json.dump(likes_records_source, likes_records_path)

                    else:

                        like_record = {post_id: ['1']}
                        likes_records_source.update(like_record)

                        with open('/root/Orb-Message-Board/public/feeds/orb_likes.json', 'w') as likes_records_path:

                            json.dump(likes_records_source, likes_records_path)

                    return {"message":"success"}
            except:

                return {"message":"failure"}

        else:

            return {"message":"not authorized"}

    else:

        return {"message":"not authorized"}

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

# 8888888b.   .d88888b.   .d8888b.  88888888888                                 
# 888   Y88b d88P" "Y88b d88P  Y88b     888                                     
# 888    888 888     888 Y88b.          888                                     
# 888   d88P 888     888  "Y888b.       888                                     
# 8888888P"  888     888     "Y88b.     888                                     
# 888        888     888       "888     888                                     
# 888        Y88b. .d88P Y88b  d88P     888                                     
# 888         "Y88888P"   "Y8888P"      888                                     
                                                                                                                                              
# 888    888        d8888 888b    888 8888888b.  888      8888888888 8888888b.  
# 888    888       d88888 8888b   888 888  "Y88b 888      888        888   Y88b 
# 888    888      d88P888 88888b  888 888    888 888      888        888    888 
# 8888888888     d88P 888 888Y88b 888 888    888 888      8888888    888   d88P 
# 888    888    d88P  888 888 Y88b888 888    888 888      888        8888888P"  
# 888    888   d88P   888 888  Y88888 888    888 888      888        888 T88b   
# 888    888  d8888888888 888   Y8888 888  .d88P 888      888        888  T88b  
# 888    888 d88P     888 888    Y888 8888888P"  88888888 8888888888 888   T88b 
                         
# POST HANDLER

@application.route('/post', methods=['GET'])
def orb_post():

    uuk = request.args['uuk']
    user_key = request.args['key']
    
    with open('/root/Orb-Message-Board/orb_resources/orb_allowed_peers.json','r') as orb_allowed_peers_path:
                                
        orb_allowed_peers = json.load(orb_allowed_peers_path)

    if uuk in orb_allowed_peers.keys():

        if orb_allowed_peers[uuk][0] == uuk + user_key:

            #   POSTS THAT CONTAIN MEDIA

            def media_post(file_actions):

                text_content = ''
                try:
                    text_content = request.args['content']

                    if text_content == "0":
                        text_content = " "
                        
                except:
                    text_content = ""

                def write_record(text_content, file_actions):

                    timestamp = float(time.time())

                    post_string = str(timestamp) + file_actions + uuk
                    post_id = hmac.new(b'secret', post_string.encode('utf-8'), hashlib.sha256).hexdigest()

                    with open('/root/Orb-Message-Board/public/feeds/orb_feed.json','r') as local_records_path:
                                    
                        updated_local_records_source = json.load(local_records_path)

                    if post_id not in updated_local_records_source:

                        updated_local_records = {post_id:[timestamp, text_content, file_actions, uuk]}
                        updated_local_records.update(updated_local_records_source)

                        with open('/root/Orb-Message-Board/public/feeds/orb_feed.json', 'w') as local_records_path:

                            json.dump(updated_local_records, local_records_path)

                write_record(text_content, file_actions)

            #   POSTS THAT JUST CONTAIN TEXT

            def text_post():
                
                text_content = ''

                try:
                    text_content = request.args['content']
                except:
                    text_content = ''

                def write_record(text_content):

                    post_id = hmac.new(b'secret', text_content.encode('utf-8'), hashlib.sha256).hexdigest()

                    if text_content == '':
                        return "you shouldn't be here!"
                    
                    else:

                        with open('/root/Orb-Message-Board/public/feeds/orb_feed.json','r') as local_records_path:
                                        
                            updated_local_records_source = json.load(local_records_path)

                        if post_id not in updated_local_records_source:

                            timestamp = float(time.time())
                            updated_local_records = {post_id:[timestamp, text_content, '', uuk]}
                            updated_local_records.update(updated_local_records_source)

                            with open('/root/Orb-Message-Board/public/feeds/orb_feed.json', 'w') as local_records_path:

                                json.dump(updated_local_records, local_records_path)

                write_record(text_content)


            file_actions = ""

            try:

                file_actions = request.args['fileactions']

                if len(file_actions) > 0:
                    # this is a text/media post
                    media_post(file_actions)
                else:
                    text_post()

                return {"message":"success"}

            except:

                text_post()

                return {"message":"success"}

        else:

            return {"message":"not authorized"}
        

    else:

        return {"message":"not authorized"}
#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

# 888b     d888 8888888888 8888888b.  8888888        d8888                                  
# 8888b   d8888 888        888  "Y88b   888         d88888                                  
# 88888b.d88888 888        888    888   888        d88P888                                  
# 888Y88888P888 8888888    888    888   888       d88P 888                                  
# 888 Y888P 888 888        888    888   888      d88P  888                                  
# 888  Y8P  888 888        888    888   888     d88P   888                                  
# 888   "   888 888        888  .d88P   888    d8888888888                                  
# 888       888 8888888888 8888888P"  8888888 d88P     888                                  
                                                   
# 888     888 8888888b.  888       .d88888b.         d8888 8888888b.  8888888888 8888888b.  
# 888     888 888   Y88b 888      d88P" "Y88b       d88888 888  "Y88b 888        888   Y88b 
# 888     888 888    888 888      888     888      d88P888 888    888 888        888    888 
# 888     888 888   d88P 888      888     888     d88P 888 888    888 8888888    888   d88P 
# 888     888 8888888P"  888      888     888    d88P  888 888    888 888        8888888P"  
# 888     888 888        888      888     888   d88P   888 888    888 888        888 T88b   
# Y88b. .d88P 888        888      Y88b. .d88P  d8888888888 888  .d88P 888        888  T88b  
#  "Y88888P"  888        88888888  "Y88888P"  d88P     888 8888888P"  8888888888 888   T88b 

# MEDIA UPLOADER

@application.route('/media_post', methods=['GET', 'POST'])
def upload_media():

    uuk = request.args['uuk']
    user_key = request.args['key']

    with open('/root/Orb-Message-Board/orb_resources/orb_allowed_peers.json','r') as orb_allowed_peers_path:
                                
        orb_allowed_peers = json.load(orb_allowed_peers_path)

    if uuk in orb_allowed_peers.keys():

        if orb_allowed_peers[uuk][0] == uuk + user_key:

            file_name = secure_filename(request.args['filename'])

            file = request.files['file']

            file.save(os.path.join(application.config['UPLOAD_FOLDER'], file_name))
            return {"message":"success"}

        else:

            return {"message":"not authorized"}

    else:

        return {"message":"not authorized"}

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

#

# 888b     d888        d8888 8888888 888b    888 
# 8888b   d8888       d88888   888   8888b   888 
# 88888b.d88888      d88P888   888   88888b  888 
# 888Y88888P888     d88P 888   888   888Y88b 888 
# 888 Y888P 888    d88P  888   888   888 Y88b888 
# 888  Y8P  888   d88P   888   888   888  Y88888 
# 888   "   888  d8888888888   888   888   Y8888 
# 888       888 d88P     888 8888888 888    Y888 

# MAIN
                                                                                                                            
# 888888 888888 888888 888888 888888 888888 8888

if __name__ == '__main__':

    application.run(debug=True, host='0.0.0.0')
