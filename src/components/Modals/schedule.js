import React, { useRef, useEffect } from "react";
import './transition.css';

const timing = [
  'Sun', 'Mon', 'Tue', 'wed', 'Thu', 'Fri', 'Sat'
]

export default function Modal({close = _ => {}, active = false}) {

  const wrapper = useRef(null);

  useEffect(function() {
  wrapper.current.classList.toggle('transit');
    
  }, [active])

  return (
    <>
          <div
            ref={wrapper}
            className="justify-start items-center flex overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none wrapper"
          >
            <div className="relative w-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <table className="border-collapse border border-slate-400" style={{width: '100%', tableLayout: 'fixed'}}>
                    <thead>
                      <tr>
                        <th>Day</th>
                        <th width="70%">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        timing.map((index, day) => <tr key={index}><td>{day}</td><td className="text-center" width="70%">{day !== 'Sun' ? '10:00 am – 07:00 pm' : 'Closed'}</td></tr>)
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}