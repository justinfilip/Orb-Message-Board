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

import os, json, time, binascii, mnemonic, bip32utils
from stem.control import Controller

key_path = os.path.expanduser('/root/Orb-Message-Board/system_resources/')

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

# 8888888888 888     888 888b    888  .d8888b.  88888888888 8888888  .d88888b.  888b    888  .d8888b.  
# 888        888     888 8888b   888 d88P  Y88b     888       888   d88P" "Y88b 8888b   888 d88P  Y88b 
# 888        888     888 88888b  888 888    888     888       888   888     888 88888b  888 Y88b.      
# 8888888    888     888 888Y88b 888 888            888       888   888     888 888Y88b 888  "Y888b.   
# 888        888     888 888 Y88b888 888            888       888   888     888 888 Y88b888     "Y88b. 
# 888        888     888 888  Y88888 888    888     888       888   888     888 888  Y88888       "888 
# 888        Y88b. .d88P 888   Y8888 Y88b  d88P     888       888   Y88b. .d88P 888   Y8888 Y88b  d88P 
# 888         "Y88888P"  888    Y888  "Y8888P"      888     8888888  "Y88888P"  888    Y888  "Y8888P"  

# FUNCTIONS

# 888888 888888 888888 888888 888888 888888 888888 888888 888888 888888 888888 888888 888888 888888 88
                                                                                                                           
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

    # return {
    #     'mnemonic_words': mnemonic_words,
    #     'bip32_root_key': bip32_root_key_obj.ExtendedKey(),
    #     'bip32_extended_private_key': bip32_child_key_obj.ExtendedKey(),
    #     'bip32_derivation_path': "m/44'/0'/0'/0",
    #     'bip32_derivation_addr': bip32_child_key_obj.Address(),
    #     'coin': 'BTC'
    # }

    return bip32_child_key_obj.Address(), binascii.hexlify(bip32_child_key_obj.PublicKey()).decode(), bip32_child_key_obj.WalletImportFormat()

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

# Ephemeral service, persistent address problem solved 

with Controller.from_port() as controller:
  controller.authenticate()

  if not os.path.exists(key_path + 'secret_key'):
    service = controller.create_ephemeral_hidden_service({80: 8000}, await_publication = True)
    # print("Started a new hidden service with the address of %s.onion" % service.service_id)

    onion_address = "%s.onion" % service.service_id

    with open(key_path + 'secret_key', 'w') as key_file:
      key_file.write('%s:%s' % (service.private_key_type, service.private_key))
    
  else:
    with open(key_path + 'secret_key', 'r') as key_file:
      key_type, key_content = key_file.read().split(':', 1)

    service = controller.create_ephemeral_hidden_service({80: 8000}, key_type = key_type, key_content = key_content, await_publication = True)
    # print("Resumed %s.onion" % service.service_id)

  

  orb_information_path = '/root/Orb-Message-Board/orb_resources/orb_information.json'

  if not os.path.exists(orb_information_path):

      mnemo = mnemonic.Mnemonic("english")

      mnemonic_words = mnemo.generate(strength=256)
      # mnemonic_words = "roof invite maid gown frown subway fluid feel pizza flat kit patch gaze course month north jar genuine miss enjoy nest damp aspect solid"

      seed = mnemo.to_seed(mnemonic_words, passphrase="")

      entropy = mnemo.to_entropy(mnemonic_words)

      address, publickey, privatekey = bip39(mnemonic_words)
      
      timestamp = float(time.time())
      orb_information = {onion_address:[timestamp, mnemonic_words, address, publickey, privatekey]}

      with open(orb_information_path, 'w') as orb_information_file:

        json.dump(orb_information, orb_information_file)
      

  # input('press any key to shut the service down...')
  # controller.remove_ephemeral_hidden_service(service.service_id)
  while True:
    time.sleep(1)
