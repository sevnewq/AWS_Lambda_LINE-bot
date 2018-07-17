# AWS_Lambda_LINE-bot
LINE Messaging API echo bot on AWS Lambda

1. Create Lambda function and API Gateway on AWS.

2. Install using npm.

    $ npm install
    
3. Modify ChannelAccessToken and ChannelSecret

    Get ChannelAccessToken and ChannelSecret from LINE Developer console.
    
    Modify in index.js (Line #6 & Line #7).
    
3. Zip files and folders and upload to Lambda.

    index.js
    
    package.json
    
    package-lock.json
    
    node_modules/
    
4. Set webhook URL to LINE Developer console.

    Get invoke URL in Lambda function.
    
    looks like https://xxxxxxxxxx.execute-api.region.amazonaws.com/stage/functionname
