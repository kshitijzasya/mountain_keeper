
import React from "react";
import Colors from "../../config/colors";

const Alert = (props) => {
  const [showAlert, setShowAlert] = React.useState(true);
  let {type = 'info'} = props;

  return (
    <>
      {showAlert && props.show ? (
        <div
          className={`text-white px-6 py-4 border-0 rounded relative mb-4 ${Colors.backgrounds[type]}`}
        >
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-bell" />
          </span>
          <span className="inline-block align-middle mr-8 pl-4">
            {
                props.message 
                ? 
                <b className="capitalize">{props.message}!</b> 
                :
                ""
            }
          </span>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            onClick={() => setShowAlert(false)}
          >
            <span>×</span>
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Alert;