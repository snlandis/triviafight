// lets map routes to controller
const express       = require('express');
const router        = express.Router();
const phone         =   require('phone');
const config          = require('../../config');
const twilio        = require('twilio')
const client        = new twilio.RestClient(config.accountSid, config.authToken);

router.post('/api/sms-promotion', function(req, res) {
    let phoneNumber_array = phone(req.body.phone);
    let phoneNumber = phoneNumber_array[0];
    let TimeStatus = '';
    TimeStatus = "Someone has challenged you to a Trivia Fight! Accept the challenge @ https://trivia-fight.herokuapp.com/";


    let promise =  client.messages.create({
        to      :   phoneNumber,
        from    :   config.sendingNumber,
        body    :   TimeStatus,
    });

    promise.then(function() {
        res.send("Challenge sent.");
    }, function(erorr) {
        res.send("There was error sending a sms. Please try again later.");
    });

});

module.exports = router;
