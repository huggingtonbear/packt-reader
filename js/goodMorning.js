$.fn.goodMorning = function(input){
	var settings = $.extend({
		morning: 7,
		noon: 12,
		evening:18,
		night:22,
		icon: true,
		monday: true,
		tgif: true
	}, input);


	var sun = {};
	
	//retrieve time and day. Format for display.
	sun.time = function(){
		var date = new Date();
		sun.hh = date.getHours()
		sun.min = date.getMinutes();
		sun.week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		sun.day = sun.week[date.getDay()];
		var ampm = (sun.hh >= 12) ? "pm" : "am";
		sun.h = ((sun.hh + 11) % 12 + 1);
		sun.min = sun.min < 10 ? "0" + sun.min : sun.min;
		var time = sun.h + ":" + sun.min + " " + ampm;
		sun.good();
	}
	setInterval(sun.time
		, 1000);

	//use day and time info to display messages and icons.
	sun.good = function(input){
		if (sun.hh >= settings.morning && sun.hh < settings.noon) {
			var goodMorning = $('<p>').text('Good Morning');	
			$('.timeDisplay').html(goodMorning)
			if(settings.monday == true && sun.day == 'Monday' && settings.icon == true){
				var goodMonday = $('<p>').text('Happy Monday');
				$('.timeDisplay').html(goodMonday);
				var iconMonday = $('<img src="assets/monday.svg" alt="steaming coffee mug">');
				$('.sunriseIcon').html(iconMonday);
				}
				
			else if(settings.icon == true){
				var iconMorning = $('<img src="assets/sun.svg" alt="sun">');
				$('.sunriseIcon').html(iconMorning);
			}
		} else if(sun.hh >= settings.noon && sun.hh < settings.evening){
			var goodAfternoon = $('<p>').text('Good Afternoon');
			$('.timeDisplay').html(goodAfternoon);
			if(settings.icon == true){
				var iconAfternoon = $('<img src="assets/sun.svg" alt="sun">');
				$('.sunriseIcon').html(iconAfternoon);
			}
		} else if(sun.hh >= settings.evening && sun.hh < settings.night){
			var goodEvening = $('<p>').text('Good Evening');
			$('.timeDisplay').html(goodEvening);
			if(settings.tgif == true && sun.day == 'Friday' && settings.icon == true){
				var goodTGIF = $('<p>').text('Happy Friday!');
				$('.timeDisplay').html(goodTGIF);
				var iconTGIF = $('<img src="assets/tgif.svg" alt= "a martini">');
				$('.sunriseIcon').html(iconTGIF);
				
			}
			else if(settings.icon == true){
				var iconEvening = $('<img src="assets/evening.svg" alt= "sun setting">');
				$('.sunriseIcon').html(iconEvening);
			}
			
		} else if(sun.hh >= settings.night && sun.hh <= 23 || sun.hh < settings.morning){
			var goodNight = $('<p>').text('Good Night');
			$('.timeDisplay').html(goodNight);
			if(settings.icon == true){
				var iconNight = $('<img src="assets/moon.svg" alt= "moon and stars">');
				$('.sunriseIcon').html(iconNight);
			}
		} 


	}

}