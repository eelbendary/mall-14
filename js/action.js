
document.forms.register.onsubmit = function(e){
				e.preventDefault();
				localStorage.setItem('email',event.target.email.value);
				localStorage.setItem('password',event.target.password.value);
				alert('user has been added successfully');
			}
			
			document.forms.login.onsubmit = function(e){
				e.preventDefault();
				if(localStorage.getItem('email') && localStorage.getItem('password')){
					// check if email in storage = email that user entered and same in password
					if(localStorage.getItem('email') == event.target.email.value && localStorage.getItem('password') == event.target.password.value){
						alert('you are login successfully ...!')
					}else{
						alert('failed to to login')
					}
				}else{
					alert('no found user in the system');
				}
			}
