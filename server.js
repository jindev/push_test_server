var gcm = require('node-gcm');


// ... or some given values
var message = new gcm.Message({
    collapseKey: 'demo',
    delayWhileIdle: true,
    timeToLive: 3,
    data: {
        key1: '안녕하세요',
        key2: '푸시에요'
    }
});



// Set up the sender with you API key
var sender = new gcm.Sender('AIzaSyBbr3Kx6134lOk5Xzi218eUFa0urS7pcBQ');

// Add the registration IDs of the devices you want to send to
var registrationIds = [];
registrationIds.push('APA91bFbeZdNeeGkhHohZcOZVi5VLHnwz0OiBvXQsqQQtMi8UA3x_LiA-Wt3UVa9fiCDL4wBlSCpsvNsq0pScD8zqSVZJm_Obxe5CooJwntA4-6kLvb3dyaeV8cXg06u3oDp3lpBdSYq4mR8rHeC5iZwaD11vviqRQ');


// ... or retrying a specific number of times (10)
sender.send(message, registrationIds, 10, function (err, result) {
	 
  if(err) console.error(err);
  else    console.log(result);


});