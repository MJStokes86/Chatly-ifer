/*=============================!!!!NOTE!!!!===============================*/

// When I fetch the api json data, I get double the results. Using .forEach() method, I get double data printed to the HTML. The issue may have something to due with the WebPack config file. I couldn't figure it out but according to the Network tab in Chrome, I do see two fetch requests. One from VM and the other from app.js. They are both being printed to the HTML. You'll will see repeated messages once the page is loaded. 

// Also the image url from the api isn't working. That's the reason why the image parameter isn't included from the data. 


/*=================================================================*/

import './sass/main.scss';


//Fetching API Data 

var url = 'https://api.myjson.com/bins/1geede';

fetch(url)
.then(response => response.json())
.then(data =>  {



// Setting the header date
		
		headerDate (getWeekDay(getDateNow(data.data.conversationDate).getDay()) + ', ' + getMonth(getDateNow(data.data.conversationDate).getMonth())+ ' ' + getDateNow(data.data.conversationDate).getDate() + ',' + ' ' + ((getDateNow(data.data.conversationDate).getYear()) + 1900))

		//Declaring the scope variable for user data

		const scope = data.data.messages;

		//Looping through the user data

		scope.forEach((i) => {

            let user = i;

			if (user.username == "Mygel van Trabel") {

				user1( user.focused, user.message, getTimeStamp(user.timestamp), user.username);

			} else {

				user2( user.focused, user.message, getTimeStamp(user.timestamp), user.username);

			}

		

		});

		

		





	}).catch( error => console.error(error));



	//Creating Chat logs for HTML for User1 
		
	const user1 = (focused, message, timestamp, username) =>  {

 	//Appending the HTML to the DOM

 		__('chat').innerHTML += 

	 		'<div class="chat-log user1">' + 
	 		'<ul>' + '<li class="avatar">' + 
	 		'<img src="../img/user1.jpg" alt="Mygel van Trable">' 
	 		+'</li>' + '<span class="chat_arrow_left"></span>' +
	 		'<li class="message">' +'<li class="message-box">' +
	 		'<p class="text"> ' + message + '</p>' +
	 		'<ul class="text-bottom">' +'<li class="user-name">' + username + '</li>' + '<li class="timestamp">' +
	 		'<ul>' + '<li class="clock-icon">' + 
	 		'<img src="../img/clock.png" alt="clock-icon">' + 
	 		'<li class="time">' + 
	 		'<p>' + timestamp + '</p>' + '</li>' +
	 		'</ul>' +'</li>' +'</ul>' +'</div>' +'</li>' +'</ul>' +
	 		'</div>';


		
	}

	//Creating Chat logs for HTML for User2

	const user2 = (focused, message, timestamp, username) => {
		
		if (focused == true) {
			var styleFocused  = ' box-shadow: 0 15px 50px 0 rgba(0,0,0,0.13); ' + 'background-color: #fff;';
			var styleArrow = 'border-right:10px solid #fff;';

		} 


 	//Appending the HTML to the DOM


 		__('chat').innerHTML += 

	 		'<div class="chat-log user2">' + '<ul>' +
	 		'<li class="avatar">' + 
	 		'<img src="../img/user2.jpg" alt="Charlie Hemn">' +
	 		'</li>' +'<span class="chat_arrow_right" style="'+ styleArrow +'"></span>' + '<li class="message">' +
	 		'<li class="message-box" style= " '+ styleFocused +'">' +'<p class="text"> ' + message + '</p>' +
	 		'<ul class="text-bottom">' +'<li class="timestamp">' +
	 		'<ul>' + '<li class="time">' + '<p>' + timestamp + 
	 		'</p>' + '</li>' +'<li class="clock-icon">' +
	 		'<img src="../img/clock.png" alt="clock-icon">' + 
	 		'<li class="user-name">' + username + '</li>' +
	 		'</ul>' + '</li>' + '</ul>' + '</div>' + '</li>' + 
	 		'</ul>' +
	 		'</div>';


	}
	 
	 //Setting the Title Date
	const headerDate = (date) => {
		__('header-date').innerHTML = date;
	}


	const getDateNow = (date) => {
		return new Date(date);
	}

	const getWeekDay = (week) => {
		
		let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

		return weekDays[week];
	}

	const getMonth = (month) => {
		let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		return months[month];
	}


//Setting up the timestamp for message box 


	const getTimeStamp = (time) => { 
		
		let timeNow = getDateNow(time);
		let hour = timeNow.getHours();
		let minute = timeNow.getMinutes();
		let day = 'AM';

		
		  if (hour   > 11) { day = "PM";            }
		  if (hour   > 12) { hour = hour - 12;      }
		  if (hour   == 0) { hour = 12;             }
		  if (hour   < 10) { hour   = " " + hour;   }
		  if (minute < 10) { minute = "0" + minute; }
		
		const timeStamp = hour + ':' + minute + " " + day;

		return timeStamp;

	}

	 // Setting up the innerHTML

	const __ = (id) => {
		return document.getElementById(id);
	}







		


