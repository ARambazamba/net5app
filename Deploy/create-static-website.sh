grp=Hosting
loc=westeurope
acct=net5-ng-ui
path='./ngUI/dist/ngUI'

az group create -n $grp -l $loc

az storage account create -l $loc -n $acct -g $grp --sku Standard_LRS

key=$(az storage account keys list -n $acct --query "[0].[value][0]")

echo "Website Key: " $key

ep=$(az storage account show -g $grp -n $acct --query "primaryEndpoints.web")

echo "Primary Endpoint for Static Web: " $ep

az storage blob service-properties update --account-name $acct --static-website --404-document error.html --index-document index.html

az storage blob upload-batch --account-name $acct --account-key $key -s $path -d '$web'

az storage account show --name $acct -g $grp --query "primaryEndpoints.web" --output tsv