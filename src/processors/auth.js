import creds from "../config/auth.json";
// import Session from './session';

const dataToAuthenticate = JSON.parse(creds).auth;
const submitForm = (form, pass, callback) => {
    const {user, password} = dataToAuthenticate;
    let status = false;
    //logic to setup session
    if (user === form.user && password === form.password) {

    }
    return { status };
}

const collection = {
    submitForm,
    validateField : (field, limit) => field.length > limit
};

export default collection;