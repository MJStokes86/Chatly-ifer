import './sass/main.scss';
$(document).ready(function() {



//Fetching API Data 

fetch('https://api.myjson.com/bins/1geede')
	.then(response => response.json())
	.then(function(data) {

// Setting the header date
		
		headerDate (getWeekDay(getDateNow(data.data.conversationDate).getDay()) + ',' + getMonth(getDateNow(data.data.conversationDate).getMonth()) + getDateNow(data.data.conversationDate).getDate() + ', ' + ((getDateNow(data.data.conversationDate).getYear()) + 1900))

		//Declaring the scope variable for user data

		const scope = data.data.messages;

		//Looping through the user data

		scope.forEach((i) => {

            let user = i;

			if (user.username == 'Mygel van Trable') {
				user1( user.focused, user.image, user.message, getTimeStamp(user.timestamp), user.username);
			} else {
				user2( user.focused, user.image, user.message, getTimeStamp(user.timestamp), user.username);
			}
			console.log(user.timestamp);



		});



	});
		

	//Creating Chat logs for HTML for User1 
		
	const user1 = (focused, image, message, timestamp, username) =>  {

		

		if (focused == true) {
			$('#focused .message-box').css("box-shadow", "0 15px 50px 0 rgba(0,0,0,0.13)","background-color", "#ffffff");

 		} else {
			$('#focused .message-box').css("background-color", "#f3f3f3f3");

 		}


 	//Appending the HTML to the DOM

 	$('.chat').innerHTML += 

 		'<div class="chat-log user1">' +
 		'<ul>' +
 		'<li class="avatar">' +
 		'<img src="'+ image + '" alt="Mygel van Trable">' +
 		'</li>' +
 		'<span class="chat_arrow_left"></span>' +
 		'<li class="message">' +
 		'<li class="message-box">' +
 		'<p class="text"> ' + message + '</p>' +
 		'<ul class="text-bottom">' +
 		'<ul class="user-name">' + username + '</li>' +
 		'<li class="timestamp">' +
 		'<ul>' + 
 		'<li class="clock-icon">' +
 		'<img src="./img/clock.png" alt="clock-icon">' +
 		'<li class="time">' + '<p>' + timestamp + '</p>' + '</li>' +
 		'</ul>' +
 		'</li>' +
 		'</ul>' +
 		'</div>' +
 		'</li>' +
 		'</ul>' +
 		'</div>';


		
	}

	//Creating Chat logs for HTML for User2

	const user2 = (focused, image, message, timestamp, username) => {
		
		if (focused == true) {
			$('#focused .message-box').css("box-shadow", "0 15px 50px 0 rgba(0,0,0,0.13)","background-color", "#ffffff");

 		} else {
			$('#focused .message-box').css("background-color", "#f3f3f3f3");

 		}


 	//Appending the HTML to the DOM


 	$('.chat').innerHTML += 

 		'<div class="chat-log user1">' +
 		'<ul>' +
 		'<li class="avatar">' +
 		'<img src="'+ image + '" alt="Mygel van Trable">' +
 		'</li>' +
 		'<span class="chat_arrow_left"></span>' +
 		'<li class="message">' +
 		'<li class="message-box">' +
 		'<p class="text"> ' + message + '</p>' +
 		'<ul class="text-bottom">' +
 		'<li class="timestamp">' +
 		'<ul>' + 
 		'<li class="clock-icon">' +
 		'<img src="./img/clock.png" alt="clock-icon">' +
 		'<li class="time">' + '<p>' + timestamp + '</p>' + '</li>' +
 		'<ul class="user-name">' + username + '</li>' +
 		'</ul>' +
 		'</li>' +
 		'</ul>' +
 		'</div>' +
 		'</li>' +
 		'</ul>' +
 		'</div>';


	}
	 
	 //Setting the Title Date
	const headerDate = (date) => {
		$('.header-date').innerHTML = date;
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

		switch (time) {
			case (hour > 11) : day = 'PM';
			break;
			case (hour > 12) : hour = hour - 12;
			break;
			case (hour == 0) : hour = 12;
			break;
			case (hour < 10) : hour = "0" + hour;
			break;
			case (minute < 10) : minute = "0" + minute;
			break;
			
		}
		
		const timeStamp = hour + ':' + minute + " " + 'day';

		return timeStamp;

	}

	//Declaring $ for the innerHTML

	// const __ = (className) => {
	// 	return document.getElementsByClassName(className);
	// }



});






		


