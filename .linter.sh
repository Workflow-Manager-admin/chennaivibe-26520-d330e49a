#!/bin/bash
cd /home/kavia/workspace/code-generation/chennaivibe-26520-d330e49a/chennavibe
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

