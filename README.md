# GLPIAPIClient

GLPIClient is made for simplify interations between the developer and GLPI, with authentication and requests classes, with all CommonDB classes and requests from GLPI

 - Actives, Administration, Assistance, Dropdowns, Management and Tools classes and interfaces
 - Simple authentication with User Token or User Credentials

	`npm i glpi-api-client`

 
## Example use
### Instancing the GLPIClient

    const  glpi  =  new  GLPIAPI({app_token:  "APP_TOKEN_HERE", glpi_url:  "http://GLPI_URL_HERE" })
### Authenticating examples
    glpi.authenticate.withUserCredential("LOGIN,"PASSWORD");
    or
    glpi.authenticate.withUserToken("USER_TOKEN_HERE");
   ##### Will return a promise that will can call requests, that is a wrapper with all classes from GLPI CommonDB
### Making a request

    glpi.authenticate.withUserToken("TOKEN").then(requests => {
	    requests.actives.computer.getById("itemId", custom_params_here).then(response => {
		    const { data } = response; // will return all properties of a computer to handle
		    data.
	    })
    })

   

