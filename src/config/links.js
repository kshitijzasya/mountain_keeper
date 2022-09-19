
const number = process.env.REACT_APP_WHATSAPP_NO;

const social = {
    twitter: 'https://twitter.com/OURA_INDIA?t=rlBjH3joqxS1VjSTiFXJDQ&s=09',
    facebook: 'https://www.facebook.com/OuraIndia',
    instagram: 'https://www.instagram.com/oura_india',
    youtube: 'https://youtube.com/channel/UCBWH5VEcJkYWRKiZilN81LA',
    whatsapp: `https://api.whatsapp.com/send/?phone=${number}&text&type=phone_number&app_absent=0`
}

const emailjs = {
    YOUR_SERVICE_ID: 'service_magogmk',
    YOUR_TEMPLATE_ID: 'template_kl6e4nm',
    YOUR_PUBLIC_KEY: 'EUtXlciSmIc8Wo2fe'
}

export default {
    social,
    email: emailjs
}