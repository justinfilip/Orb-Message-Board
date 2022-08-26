#!/bin/sh
cd /root/Orb-Message-Board/orb_services/ && sleep 40 && gunicorn -b 0.0.0.0:8000 orb_api:application