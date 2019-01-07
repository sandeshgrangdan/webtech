function validate_loging_form()
{
	// alert('test')
	 var username = document.login.username.value;
	 var pass = document.login.password.value;
	 var rpass = document.login.retype.value;
	 let email=document.login.email.value
	let country=document.login.country.value
	let gender=document.login.gender.value
	let course=document.login.course.value
	let course1=''
	let course2=''
	let course3=''
	 var msg = '';

	username = username.trim();
	alert(username.length)
	if(username.trim() == ''){
		alert('Enter username');
		document.login.username.focus();
		return false; 
	}else {
		if (username.length < 6) {
			alert('username must be 6 character');
			document.login.username.focus();
		    return false;
		}
		else
		{ 
			msg += 'Your username is ' + username;
		}
	}

	if(pass == ''){
        alert('Password is empty');
		document.login.password.focus();
		return false; 
	}

	if(pass == rpass){
		msg += "<br>your password is " + pass;
	}else{
			alert('Password is invallid');
	}
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



	 if ((document.login.course[0].checked=== false) && (document.login.course[1].checked === false) && (document.login.course[2].checked === false))
	{
		alert('Selest Course')
		document.login.course[0].focus()
		return false
	}

	else{
			if (document.login.course[0].checked== true)
				course1=document.login.course[0].value
			if (document.formlogin.course[1].checked== true)
				course2=document.login.course[1].value
			if (document.formlogin.course[2].checked== true)
				course3=document.login.course[2].value
		msg += 'Your course is'+course1+' ' +course2+' '+course3 ;
		//document.write(`Your username is ${username}, password is ${password} and phone is ${phone}`)
		// return false
	}

	// document.write(msg);
	document.getElementById('message').innerHTML = msg ;
	return false;
}
