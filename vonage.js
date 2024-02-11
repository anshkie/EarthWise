const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "51a8a1fe",
  apiSecret: "9K3Sxc51Kvdt0Gga"
})
const from = "Vonage APIs"
const to = "918625956925"
const text = 'A text message sent using the Vonage SMS API'

async function sendSMS() {
    await vonage.sms.send({to, from, text})
        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
}

sendSMS();