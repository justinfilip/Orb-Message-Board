#!/bin/sh
# doctl compute droplet create test --size s-1vcpu-1gb --image 103200841 --region nyc3 --ssh-keys ba:4f:ac:ac:81:f4:de:c3:26:74:47:8f:19:2a:a7:1f
export DEBIAN_FRONTEND=noninteractive && dpkg -r google-chrome-stable && dpkg --purge google-chrome-stable && apt-get update && apt-get upgrade -y && apt-get -y install nginx && cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.bak && cp system_resources/nginx.conf /etc/nginx/nginx.conf && rm /etc/nginx/sites-available/default && cp system_resources/orb /etc/nginx/sites-available/orb && cd /etc/nginx/sites-enabled/ && sudo ln -s ../sites-available/orb . && cd /root/Orb-Message-Board/ && apt-get -y install apt-utils && apt-get update && apt-get upgrade -y && apt-get -y install software-properties-common && apt-get -y install fonts-liberation && apt-get -y install libasound2 && apt-get -y install libatk-bridge2.0-0 && apt-get -y install libatk1.0-0 && apt-get -y install libatspi2.0-0 && apt-get -y install libcups2 && apt-get -y install libdbus-1-3 && apt-get -y install libdrm2 && apt-get -y install libgbm1 && apt-get -y install libgtk-3-0 && apt-get -y install libnspr4 && apt-get -y install libnss3 && apt-get -y install libxcomposite1 && apt-get -y install libxdamage1 && apt-get -y install libxfixes3 && apt-get -y install libxkbcommon0 && apt-get -y install libxrandr2 && apt-get -y install xdg-utils && apt-get -y install cron && apt-get -y install python3-pip && apt-get -y install tor && cp system_resources/torrc /etc/tor/torrc && pip3 install -r system_resources/requirements.txt && cp system_resources/system_lord.service /etc/systemd/system/system_lord.service && chmod 744 /etc/systemd/system/system_lord.service && systemctl enable system_lord.service && cp system_resources/tors.service /etc/systemd/system/tors.service && chmod 744 /etc/systemd/system/tors.service && systemctl enable tors.service && chmod 744 system_resources/start_tors.sh && cp system_resources/orb.service /etc/systemd/system/orb.service && chmod 744 /etc/systemd/system/orb.service && systemctl enable orb.service && chmod 744 system_resources/start_orb.sh && reboot












# && systemctl stop ssh && systemctl disable ssh


# && dpkg -i Resources/google-chrome-stable_96.0.4664.110-1_amd64.deb && chmod +x Resources/chromedriver_a && chmod +x Resources/chromedriver_b && cp Resources/persistent_stenographer.service /etc/systemd/system/persistent_stenographer.service && cp Resources/diligent_observer.service /etc/systemd/system/diligent_observer.service && cp Resources/rebooter.service /etc/systemd/system/rebooter.service && chmod 744 start_ps.sh && chmod 744 start_do.sh && chmod 744 reboot_timer.sh && chmod 744 persistent_stenographer.py && chmod 744 diligent_observer.py && chmod 744 /etc/systemd/system/persistent_stenographer.service && chmod 744 /etc/systemd/system/diligent_observer.service && chmod 744 /etc/systemd/system/rebooter.service && systemctl enable persistent_stenographer.service && systemctl enable diligent_observer.service && systemctl enable rebooter.service && systemctl daemon-reload 

# && cp Resources/orb.service /etc/systemd/system/orb.service
# && chmod 744 /etc/systemd/system/orb.service
# && systemctl enable orb.service



# && chmod 744 start_orb.sh


# && systemctl stop ssh && systemctl disable ssh && reboot

# recent
# && dpkg -i Resources/google-chrome-stable_96.0.4664.110-1_amd64.deb && chmod +x Resources/chromedriver_a && chmod +x Resources/chromedriver_b && cp Resources/persistent_stenographer.service /etc/systemd/system/persistent_stenographer.service && cp Resources/diligent_observer.service /etc/systemd/system/diligent_observer.service && cp Resources/rebooter.service /etc/systemd/system/rebooter.service && chmod 744 start_ps.sh && chmod 744 start_do.sh && chmod 744 reboot_timer.sh && chmod 744 persistent_stenographer.py && chmod 744 diligent_observer.py && chmod 744 /etc/systemd/system/persistent_stenographer.service && chmod 744 /etc/systemd/system/diligent_observer.service && chmod 744 /etc/systemd/system/rebooter.service && systemctl enable persistent_stenographer.service && systemctl enable diligent_observer.service && systemctl enable rebooter.service && systemctl daemon-reload && systemctl stop ssh && systemctl disable ssh && reboot



# old
# && chmod 744 start.sh && chmod 644 /etc/systemd/system/rebooter.service && systemctl daemon-reload  && reboot

# #!/bin/sh
# apt-get update && apt-get upgrade -y && apt-get -y install apt-utils && apt-get update && apt-get upgrade -y && apt-get -y install software-properties-common && apt-get -y install fonts-liberation && apt-get -y install libasound2 && apt-get -y install libatk-bridge2.0-0 && apt-get -y install libatk1.0-0 && apt-get -y install libatspi2.0-0 && apt-get -y install libcups2 && apt-get -y install libdbus-1-3 && apt-get -y install libdrm2 && apt-get -y install libgbm1 && apt-get -y install libgtk-3-0 && apt-get -y install libnspr4 && apt-get -y install libnss3 && apt-get -y install libxcomposite1 && apt-get -y install libxdamage1 && apt-get -y install libxfixes3 && apt-get -y install libxkbcommon0 && apt-get -y install libxrandr2 && apt-get -y install xdg-utils && apt-get -y install cron && apt-get install -y python3-pip && pip3 install -r requirements.txt && dpkg -r google-chrome-stable && dpkg -i Resources/google-chrome-stable_96.0.4664.110-1_amd64.deb && chmod +x Resources/chromedriver_a && chmod +x Resources/chromedriver_b && chmod 744 start.sh && chmod 755 /home/autonoted-core/Cacher-Node/* && cp Resources/cacher-node.service /etc/systemd/system/cacher-node.service && chmod 644 /etc/systemd/system/cacher-node.service && systemctl daemon-reload && systemctl enable cacher-node.service && chmod 744 reboot_timer.sh && cp Resources/rebooter.service /etc/systemd/system/rebooter.service && chmod 644 /etc/systemd/system/rebooter.service && systemctl daemon-reload && systemctl enable rebooter.service && reboot