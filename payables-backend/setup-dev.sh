#!/bin/bash
docker rm -f $(docker ps -aq)
docker build -t payable-nestjs . && docker compose up -d --build
