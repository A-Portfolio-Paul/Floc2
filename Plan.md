
# OVERVIEW
The app is 2 separate parts
1. Standard Web part
2. Unique Application part

Standard Web App Platform
* User Authentication
* User Settings
* Website landing pages

Unique Application (In this case the creation of the floc documents)
* View my Docs
* View / edit a document

Run on different ports or ability switch to run only 1. standardWebApp or only 2. Unique Application

# DATA FLOW
STANDARD WEB APP
Database:dbUser    >                                                                        > Svelete Store
               | interface (read)   >  Svelete Store (User) -> Documents -> docUpdate()   | 
Mock Data:dbUser   >
(User Data Only)                                                                            > Database update Interface > Database

FUNCTIONAL APPLICATION
Database: dbDocs                            >                                                                       > Svelete Store
                                | interface (read)    >  Svelete Store (Document) -> Documents -> docUpdate()   | 
Mock Data:dbDocs                            >                                                                       > Database update Interface > Database

1. Standard Web part (interface (read))     > 
                                                         

