#!/bin/bash
#Stopping existing node servers
echo "Stopping tourism Multiplayer"

# pm2 stop --silent office-mp 
# pm2 delete --silent office-mp 

pm2 describe tourism-mp > /dev/null
RUNNING=$?

if [ "${RUNNING}" == 0 ]; then
  pm2 delete --silent tourism-mp
fi;