let validate_login_form = function(){
	// alert('Test')
	let username=document.formlogin.username.value
	let password=document.formlogin.password.value
	let cpassword=document.formlogin.cpassword.value
	let phone=document.formlogin.phone.value
	let email=document.formlogin.email.value
	let country=document.formlogin.country.value
	let gender=document.formlogin.gender.value
	let course=document.formlogin.course.value
	let course1=''
	let course2=''
	let course3=''
	let emailPattern=/^([a-zA-Z0-9\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{4})+$/
	let phonePattern=/^([0-9]{10})+$/
	//username=username.trim()
	if ((username).trim() === ''){
		alert('Enter username')
		document.formlogin.username.focus()
		return false
	}
	else if (username.length < 6){
			alert('Username must be 6 character')
			document.formlogin.username.focus()
			return false
	}
	else if(password !== cpassword  || password.length === 0)
	{
		alert('Password Doesnt match')
		document.formlogin.cpassword.focus()
			return false

	}


	else if (!phonePattern.test(phone)){
			alert('Phone must be 10 character')
			document.formlogin.phone.focus()
			return false
		
}
	// Email Validation
	else if (email.trim() ==='')
	{
		alert('Enter Email')
		 document.formlogin.email.focus()
		 return false
	}
	else if (!emailPattern.test(email))
	{
		alert('Please Enter valid email')
		 document.formlogin.email.focus()
		 return false
	}
	//option box

	// else if(document.formlogin.country.selectedIndex == 0){
	// 	alert('Select Country')
	// 	 document.formlogin.country.focus()
	// 	 return false
	// }


	else if(country ===''){
		alert('Select Country')
		 document.formlogin.country.focus()
		 return false
	}

	//radio buton
	else if ((document.formlogin.gender[0].checked=== false) && (document.formlogin.gender[1].checked === false))
	{
		alert('Selest Gender')
		document.formlogin.gender[0].focus()
		return false
	}

	//checkbox
	else if ((document.formlogin.course[0].checked=== false) && (document.formlogin.course[1].checked === false) && (document.formlogin.course[2].checked === false))
	{
		alert('Selest Course')
		document.formlogin.course[0].focus()
		return false
	}

	else{
			if (document.formlogin.course[0].checked=== true)
				course1=document.formlogin.course[0].value
			if (document.formlogin.course[1].checked=== true)
				course2=document.formlogin.course[1].value
			if (document.formlogin.course[2].checked=== true)
				course3=document.formlogin.course[2].value
		document.getElementById("message").innerHTML=`Your username is ${username}, password is ${password} and phone is ${phone} and email is ${email} and country is ${country} and gender is ${gender} and course is ${course1} ${course2} ${course3} `;
		//document.write(`Your username is ${username}, password is ${password} and phone is ${phone}`)
		return false
	}

}
	
// function validate_login_form(){
// 	alert('test')
// }