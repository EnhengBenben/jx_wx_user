#!/bin/bash
set -e 
set -o pipefail

PROJECT_DIR=/var/www/vhosts/jx/jx_wx_user
SERVER_IP=123.56.76.41

echo 'Create temporary directory...'
ssh deploy@$SERVER_IP "mkdir -p $PROJECT_DIR/tmp && rm -rf $PROJECT_DIR/tmp/*"
echo 'Uploading source code...'
scp -r -v ./dist/* deploy@$SERVER_IP:$PROJECT_DIR/tmp/
echo 'Publish new version...'
ssh deploy@$SERVER_IP "rm -rf $PROJECT_DIR/current && mv $PROJECT_DIR/tmp $PROJECT_DIR/current"
echo 'Done'