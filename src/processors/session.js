export default function Session() {
    return {
        setSession: _ => {
            let now = new Date();
            let data = {
                'expiry': new Date(now.setMinutes(now.getMinutes() + 10)),
                'active' : true
            }
            localStorage.setItem('session', JSON.stringify(data));
        },
        isValid: _ => {
            let session = JSON.parse(localStorage.getItem('session'));
            return session && session.active && (new Date(session.expiry) > new Date())
        },
        remove: _ => localStorage.removeItem('session')
    }
}