#!/bin/sh
git pull origin main && yarn && yarn build && yarn pm2:reload
