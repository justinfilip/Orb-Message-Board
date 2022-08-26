# Orb Chat
### A Self-hosted, Tor secured, privacy first, invite only chat platform.
Twitter: @OrbChat

Orb Chat was born out of a desire for a way to communicate with people securely and privately. I don't want to have to trust that apps like Signal, WhatsApp, Telegram, etc.. have my best interest in mind. Companies who offer free apps are notorious for capturing and selling your data.

#### Recommended minimum host machine specifications:

1 core processor
1GB of RAM
25GB of drive storage
Wired network connection
Ubuntu Server Operating System

## Setup

1) Install Ubuntu Server on your machine or deploy an instance on your cloud hosting provider of choice.

2) SSH into your machine.

3) Open a terminal.

4) Ensure "root" is shown as the user. Change to "root" if not.

5) In the terminal, from the /root directory, run the following command:

    git clone https://github.com/FilipActual/Orb-Chat.git

6) Then, run the following command:

    cd /root/Orb-Chat/

7) Finally, run the following command:

    sudo sh system_resources/init.sh

8) Wait a few minutes. The machine will reboot itself.

9) Open /root/Orb-Chat/orb_resources/orb_information.json, there you will find the onion address for your Orb.

10) Using a Tor VPN (such as Orbot, orbot.app) and your Chrome or Safari mobile browser; or Tor Browser (torproject.com) for desktop, take the .onion address you got and add /join?key=admin, navigate to that full URL in your browser and complete your profile setup.

(Ex: bzgjjfernk5bm3kp2p72id6vizi56cxgzowdkt566efiwjd34jbmcwqd.onion/join?key=admin)

#### Tips

1) Using a virtual machine or dedicated machine is fine, either way.
Limit to 1 Orb per LAN, unlimited if used with a VPN that is installed on the machine (not included).

2) When installing Orbot, allow the VPN configuration.

3) Brave browser and most built-in-app browsers force https, which invalidates the security model of Tor, so do not use them. It will likely not work anyway.