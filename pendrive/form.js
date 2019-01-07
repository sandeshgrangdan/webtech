function validate_login_form(){
	//alert('test');
	var msg ='';
	var username = document.loginform.username.value;
	var password = document.loginform.password.value;
	var password1 = document.loginform.password1.value;
	var email = document.loginform.email.value;
	var phonenumber=document.loginform.phonenumber.value;
	var country=document.loginform.country.value;
    var gender=document.loginform.gender.value;
		
	// username= username.trim();
	// alert(username.length);
	if (username.trim()==''){
		alert('Enter username');
		document.loginform.username.focus();
		return false;
	}
	else{
		if (username.length<6) {
			alert('Username must be of 6 characters');
			document.loginform.username.focus();
			return false;
		}else{
			//alert('Your username is' + username);
			msg= 'Your username is' + username+'</br>';
		}

	}


	if(password ==''){
		alert('Enter password');
		document.loginform.password.focus();
		return false;

	}else{
			msg+= ' Your password is' +password+'</br>';
	}
	if(password1==''){
		alert('Re-enter the password');
		document.loginform.password1.focus();
		return false;
	}else{
		if(password1!=password){
			alert('The password you entered is not correct');
			document.loginform.password.focus();
			return false;
		}else{
			alert('Login successful');
		}
	}
		//Email validation//
		var emailpattern=/^([a-zA-Z0-9\.\-])+\@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(email.trim()==''){
			alert('Enter Email');
			document.loginform.email.focus();
			return false;
		}else{
			if(!emailpattern.test(email)){
				alert('Please enter a valid email');
				document.loginform.email.focus();
			}
			else{
				msg+='your email is' + email+'</br>';
			}
		}
		//Phonenumber validation//
		var phonenumberpattern=/^([0-9]{10})$/;
		if(phonenumber.trim()==''){
			alert('Enter your phonenumber');
			document.loginform.phonenumber.focus();
			return false;
		}else{
			if(!phonenumberpattern.test(phonenumber)){
				alert('Please enter valid phonenumber');
				document.loginform.focus();
			}else{
				msg+= 'your phonenumber is' +phonenumber+'</br>';
			}
		}


		if(document.loginform.country.selectedIndex==0){
			alert('Please select country');
				document.loginform.country.focus();
				return false;
		}else{

			msg+=' Your country is' +country+'</br>';
		}

	 if(document.loginform.gender[0].checked==false&&
		document.loginform.gender[1].checked==false){
	 		alert('Select gender');
	 			document.loginform.gender.focus();
	 			return false;
			}else{
	 			msg+=' Your gender is'+gender+'</br>';
			}



	 		var games = document.getElementsByName("games[]");
			if(games[0].checked==false &&
	 			games[1].checked==false &&
	 			games[2].checked==false){
	 			alert('Select games');
	 		return false;
		}else{
			msg+='The game you selected is'+games+'</br>';
		}

	 //document.write(msg);
	document.getElementById('message').innerHTML=msg;
	return false;
}

