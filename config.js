/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default 
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device
	
	modules: [
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"},
					{
						symbol: "Eve's Calendar",
						url: "https://calendar.google.com/calendar/ical/eveboulanger48%40gmail.com/public/basic.ics"
					},
					{
						symbol: "University Calendar",
						url: "https://calendar.google.com/calendar/ical/f9h14jlks5a2rf49aqjjbp2chk%40group.calendar.google.com/public/basic.ics"
					},
					{
						symbol: "Assignment Due Dates",
						url: "https://calendar.google.com/calendar/ical/ajpst1b1314vv676k35a92knio%40group.calendar.google.com/public/basic.ics"
					},
					{
						symbol: "Final Exam Schedule",
						url: "https://calendar.google.com/calendar/ical/d5cdjmipmi4dcdqmhefkaju1m8%40group.calendar.google.com/public/basic.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "top_right"
		},
		{
			module: "helloworld",
			position: "bottom_center"
		},
		{
			module: "currentweather",
			position: "top_center",
			config: {
				location: "Guelph",
				locationID: "5967629",
				appid: "9202dca691a00d2a7a88c1ece0f2f867"
			}
		},
		{
			module: "weatherforecast",
			position: "middle_center",
			header: "Weather Forecast",
			config: {
				location: "Guelph",
				locationID: "5967629",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "9202dca691a00d2a7a88c1ece0f2f867"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "CNN Top Stories",
						url: "http://rss.cnn.com/rss/cnn_topstories.rss"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
