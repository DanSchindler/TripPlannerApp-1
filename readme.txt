//Postman collection invite: https://app.getpostman.com/join-team?invite_code=bf6c9985b6ecf46a22b384f75454cefa&target_code=d94ed8dd4c0c21705fb2a4088f589a87


//Mongodb connection//{

	1.Download mongoDB compass
	2.Enter the following uri to connect
	MONGO_URI = mongodb+srv://RavidYael:qBkBoWfvb0K3t5RL@tripplannerappcluster.8mi8ewj.mongodb.net/test
}


//Run Server//{

	npm run dev

	should get in the terminal:

		Server is listening on port: 3003
		Connected successfully to MongoDB

	*if so, server is running and each save of each file in the project it will re run.
	}


//END-POINTS//{

	##User Authentication##

	-user sing-up/registration-

	http://localhost:3003/users/register

	expected to get in req body:

	{   
	      "userFirstName":   "",
	      "userLastName":  "",
	      "userEmail": "" ,
	      "password":   ""
	}

	validaion: 
		first/last name - should be string
		email - should be am email...
		password - at least 6 characters long and has to have at least 1 capital letter

		*All the following conditions are checked in the Back-End


	-user Login-

	http://localhost:3003/users/login

	expected to get in req body:

	{  
	    "userEmail": "",
	    "password":   ""
	}

	validaion: 
		email - should be an existing  email...
		password - at least 6 characters long and has to have at least 1 capital letter

		*All the following conditions are checked in the Back-End


}
