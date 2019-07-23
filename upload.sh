#!/bin/bash

zip -r lambda.zip index.js
aws lambda update-function-code --function-name sample-web-app --zip-file fileb://lambda.zip --region us-west-2

