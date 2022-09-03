
const number = process.env.REACT_APP_WHATSAPP_NO;

const social = {
    twitter: '',
    facebook: '',
    instagram: '',
    youtube: '',
    whatsapp: `https://api.whatsapp.com/send/?phone=${number}&text&type=phone_number&app_absent=0`
}

export default {
    social
}