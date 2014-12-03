var user = function UserManagement(userInfo){
		var user = userInfo; 
		// Default user settings after sign up
		var settingConfig = [
			{ id: 0, name: 'Facebook', com:'com.facebook.katana',allow: false, installed: true, icon: 'ion-social-facebook'},
			{ id: 1, name: 'Twitter', com:'com.twitter.android',allow: false, installed: true, icon: 'ion-social-twitter' },
			{ id: 2, name: 'WhatsApp',com:'com.whatsapp',allow: false, installed: true, icon: 'ion-android-chat' },
			{ id: 3, name: 'Instagram', com:'com.app.instagram',allow: false, installed: false, icon: 'ion-social-instagram' },
			{ id: 4, name: 'Youtube', com:'com.app.youtube',allow: false, installed: false, icon:'ion-social-youtube'},
			{ id: 5, name: 'Linkedin', com:'com.app.linkedin',allow: false, installed: false, icon: 'ion-social-linkedin'},
			{ id: 6, name: 'Google+',com:'com.app.googleplus',allow: false, installed: false, icon: 'ion-social-googleplus' },
			{ id: 7, name: 'Reddit', com:'com.app.reddit',allow: false, installed: false, icon: 'ion-social-reddit' }
		];		

		this.signUp = function(){
			user.signedIn = true;
			console.log('@@@User Signed up successfully: '+user.userName + '***');
			console.log('settingConfig Loaded...');
		};
		
		this.logout = function(){
			console.log('Logout success for user : ' + user.userName);
			user.userName = '';
			user.firstName = '';
			user.lastName = '';
			user.email = '';
			user.password = '';
			user.retypePassword = '';
			user.signedIn = false;
			user.settings = null;
			user = null;
		};
		
		this.login = function(){
			console.log('***User logged in successfully: '+user.userName + '***');
		};
		
		this.getSettings = function(){
			if(user.settings == null)
				return settingConfig;
			else{
				console.log('returning  settings back');
				return user.settings;
			}
			
			
		};
}
module.exports = user;