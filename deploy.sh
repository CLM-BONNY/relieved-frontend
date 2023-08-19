#!/bin/bash
if [[ `id -u` != 0 ]]; then
    echo "restarting as root..."
    sudo bash deploy.sh
    exit 0
fi

md5_ori=($(md5sum deploy.sh))
git pull
md5=($(md5sum deploy.sh))
if [ "$md5_ori" != "$md5" ]; then
    echo "md5sum changed, restarting"
    bash deploy.sh
    exit 0
fi

npm i
npm run build
sudo mv -f build/* /var/www/html