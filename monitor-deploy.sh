#!/bin/bash

# Function to check deployment status
check_deployment() {
    vercel deploy --prod --yes
    DEPLOY_STATUS=$?
    
    if [ $DEPLOY_STATUS -eq 0 ]; then
        echo "✅ Deployment successful!"
        return 0
    else
        echo "❌ Deployment failed with status $DEPLOY_STATUS"
        return 1
    fi
}

# Main deployment loop
MAX_ATTEMPTS=5
ATTEMPT=1

while [ $ATTEMPT -le $MAX_ATTEMPTS ]; do
    echo "🚀 Deployment attempt $ATTEMPT of $MAX_ATTEMPTS"
    
    if check_deployment; then
        echo "🎉 Deployment completed successfully!"
        exit 0
    else
        echo "⏳ Waiting 30 seconds before retry..."
        sleep 30
        ATTEMPT=$((ATTEMPT + 1))
    fi
done

echo "❌ Maximum deployment attempts reached. Please check the deployment logs manually."
exit 1 