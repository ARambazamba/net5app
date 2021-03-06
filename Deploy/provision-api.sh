grp=Hosting
appPlan=Hosting
web=net5-mvc-at
loc=westeurope

# create a resource group
az group create -n $grp -l $loc

# create an App Service plan
az appservice plan create -n $appPlan -g $grp --sku B1 

# create a Web App
az webapp create -n $web -g $grp --plan $appPlan

# print out the FQDN for the Web App
echo "Web Url: http://$web.azurewebsites.net"