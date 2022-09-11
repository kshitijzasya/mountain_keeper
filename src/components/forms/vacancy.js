import React, { useRef, useState } from "react";
import config from "config/links";
import * as emailjs from '@emailjs/browser';

import Alert from "components/Alerts/email";

const { email } = config;


function FormData(props) {

    const form = useRef();

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const [showProgress, setShowProgress] = useState(false);
    const [progress, setProgress] = useState(0);

    const closeAlert = _ => setShowAlert(false) && setAlertMessage('');

    
    function sendEmail(e){
        e.preventDefault();
        setShowProgress(true);
        const interval =  setInterval(() => {
            setProgress(oldValue => {
                let val = oldValue + 25;
                if (val === 100) {
                    clearInterval(interval);
                    return 0;
                }
                return val;
            })
        }, 200)

        //Form Params
        let params = {
            user_name: form.current.user_name.value,
            user_email: form.current.user_email.value,
            user_message: form.current.user_message.value
        }
        console.log('event', {e,'sdf' :this})

        //Sending email
        // emailjs.send(email.YOUR_SERVICE_ID, email.YOUR_TEMPLATE_ID, params, email.YOUR_PUBLIC_KEY)
        //   .then((result) => {
        //       if(result.status === 200) {
        //         setShowAlert(true);
        //         setAlertMessage("Email sent successfully.")
        //       }
        //       setShowProgress(false);
        //       form.current.reset();
        //   }, (error) => {
        //     console.table(error)
        //       console.log(error.text);
        //   });
      };


    const Progress = _ => {
        return (
            <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-lightBlue-200">
                    <div style={{width:`${progress}%`}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lightBlue-500"></div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="flex flex-wrap justify-center mt-4 ">
                <div className="w-full px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                    <div className="flex-auto p-5 lg:p-10">
                        {
                            showAlert && <Alert message={alertMessage} onClose={closeAlert}/>
                        }
                        <h4 className="text-2xl text-center font-semibold">
                        Join Our Team
                        </h4>
                        <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                        If you're interested in one of our open positions, start by applying here and attaching your resume.
                        </p>
                        <p>
                            <strong>Apply Now</strong>
                        </p>
                        <form ref={form} enctype="multipart/form-data" onSubmit={sendEmail}>
                            <div className="relative w-full mb-3 mt-8">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="full-name"
                            >
                                Full Name*
                            </label>
                            <input
                                type="text"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="Full Name"
                                name="user_name"
                                required
                            />
                            </div>
                            <div className="relative w-full mb-3 mt-8">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="full-name"
                            >
                                Phone*
                            </label>
                            <input
                                type="tel"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="01234-56789"
                                name="phone"
                                pattern="[0-9]{5}-[0-9]{5}"
                                required
                            />
                            </div>

                            <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="email"
                            >
                                Email*
                            </label>
                            <input
                                type="email"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="Email"
                                name="user_email"
                                required
                            />
                            </div>

                            <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <textarea
                                rows="4"
                                cols="80"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                placeholder="Type a message..."
                                name="user_message"
                                required
                            />
                            </div>
                            <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="email"
                            >
                                Attach Resume
                            </label>
                                <input type="file" name="resume"/>
                            </div>
                            <div className="text-center mt-6">
                            <button
                                className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="submit"
                            >
                                Submit Application
                            </button>
                            </div>
                            {
                                showProgress && <Progress />
                                
                            }
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormData;