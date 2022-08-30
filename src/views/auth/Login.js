import React, {useState} from "react";
import {useHistory} from "react-router-dom"

//Components
import Alert from "../../components/Alerts/simple"

//Actions
import Actions from "../../processors/auth.js";


const handleForm = ({user = '', password = ''}, history, errorCallback, alertCallback) => { 
  const {validateField, submitForm} = Actions;
  if (!validateField(user, 3)) {
    errorCallback({
      user: 'Email/Username not valid'
    })
    return
  }
  if (!validateField(password, 6)) {
    errorCallback({
      password: 'Password not valid'
    })
    return
  }

  let result = submitForm({user, password});
  if (result.status) {
    errorCallback({}, true)
    //redirect to admin dashboard
    setTimeout(_ => history.push('/admin/dashboard'), 3000);
  } else {
    alertCallback({
      show: true,
      message: 'Invalid credentials!',
      type: 'error'
    })
  }
}

export default function Login() {

  let history = useHistory();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  //Alert
  const [alert, setAlert] = useState({
    show: false,
    message: 'You got it mate!',
    type: 'info'
  });

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
            {
              alert.show && <Alert {...alert}/>
            }
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Sign in with credentials</small>
                </div>
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Username/Email
                    </label>
                    <input
                      type="email"
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${ errors.user ? 'border-2 border-rose-600' : ''}`}
                      placeholder="Email"
                      value={user}
                      onChange={e => setUser(e.target.value)}
                    />
                    {
                      errors.user && <span className="text-rose-600 text-xs">{errors.user}</span>
                    }
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${ errors.password ? 'border-2 border-rose-600' : ''}`}
                      placeholder="Password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                    {
                      errors.password && <span className="text-rose-600 text-xs">{errors.password}</span>
                    }
                  </div>
                  {/* <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label>
                  </div> */}

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={e => handleForm({user, password}, history, (error, newAlert = false) => {setErrors(error); setAlert({...alert, ...newAlert})}, information => {setAlert({...alert, ...information})})}
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
