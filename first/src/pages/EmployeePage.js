import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const EmployeePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const [leaveDetails, setLeaveDetails] = useState({
    cl: 6,
    el: 4,
    nh: 0,
    fh: 0,
  });

  const [showModal, setShowModal] = useState(false);

  const [leaveRequest, setLeaveRequest] = useState({
    fromDate: '',
    numDays: 0,
  });

  const handleLeaveButtonClick = (type) => {
    setShowModal(true);
    setLeaveRequest({
      fromDate: '',
      numDays: leaveDetails[type],
    });
  };

  const handleTotalButtonClick = () => {
    const total = Object.values(leaveDetails).reduce((acc, val) => acc + val, 0);
    alert(`Total: ${total}`);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmitLeaveRequest = () => {
    const fromDate = new Date(leaveRequest.fromDate);
    const toDate = new Date(fromDate);
    toDate.setDate(fromDate.getDate() + leaveRequest.numDays);

    alert(`Leave requested from ${leaveRequest.fromDate} to ${toDate.toISOString().split('T')[0]}`);
    setShowModal(false);
  };

  return (
    <div className="container-flex bg-blue-200 mx-auto p-8 m-6 min-h-screen relative">
      <Navbar handleLogout={handleLogout} />

      <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4"> Employee Page</h1>

      <div className="flex flex-wrap">
        
        
          <button
            className="w-1/2 h-20 bg-red-300 rounded-full"
            onClick={() => handleLeaveButtonClick('cl')}
          >
            CL
          </button>
          <button
            className="w-1/2 h-20 bg-blue-300 rounded-full"
            onClick={() => handleLeaveButtonClick('el')}
          >
            EL({leaveDetails.el })
          </button>
          
          <button
          className=" w-full justify-center h-20 bg-gray-300 rounded-full"
          onClick={handleTotalButtonClick}
        >
          Total
        </button>
       
          <button
            className="w-1/2 h-20 bg-green-300 rounded-full"
            onClick={() => handleLeaveButtonClick('nh')}
          >
            
            NH
          </button>
          <button
            className="w-1/2 h-20 bg-yellow-300 rounded-full"
            onClick={() => handleLeaveButtonClick('fh')}
          >
            FH
          </button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-tl-md rounded-tr-md rounded-br-md">
  Your Button
</button>
<button class="relative bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full overflow-hidden">
  <span class="absolute top-0 left-0 h-full w-full bg-blue-500 rounded-tr-full transform -rotate-45"></span>
  Your Button
</button>        
      </div>

      <button
        onClick={handleLogout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border border-red-500 mt-4 w-full"
      >
        Logout
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="modal bg-white p-4 rounded shadow-lg w-full md:w-80 h-full md:h-80">
            <h2 className="text-xl md:text-2xl mb-4">Leave Request</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">From Date</label>
                <input
                  type="date"
                  className="border rounded p-2 w-full"
                  value={leaveRequest.fromDate}
                  onChange={(e) =>
                    setLeaveRequest({ ...leaveRequest, fromDate: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Number of Days</label>
                <select
                  className="border rounded p-2 w-full"
                  value={leaveRequest.numDays}
                  onChange={(e) =>
                    setLeaveRequest({
                      ...leaveRequest,
                      numDays: parseInt(e.target.value, 10),
                    })
                  }
                >
                  {Array.from(
                    { length: leaveDetails.el + leaveDetails.cl + leaveDetails.nh + leaveDetails.fh + 1 },
                    (_, i) => i
                  ).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleSubmitLeaveRequest}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeePage;










// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar';

// const EmployeePage = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate('/');
//   };

//   const [leaveDetails, setLeaveDetails] = useState({
//     cl: 6,
//     el: 4,
//     nh: 0,
//     fh: 0,
//   });

//   const [showModal, setShowModal] = useState(false);

//   const [leaveRequest, setLeaveRequest] = useState({
//     fromDate: '',
//     numDays: 0,
//   });

//   const handleLeaveButtonClick = (type) => {
//     setShowModal(true);
//     setLeaveRequest({
//       fromDate: '',
//       numDays: leaveDetails[type],
//     });
//   };

//   const handleTotalButtonClick = () => {
//     const total = Object.values(leaveDetails).reduce((acc, val) => acc + val, 0);
//     alert(`Total: ${total}`);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handleSubmitLeaveRequest = () => {
//     const fromDate = new Date(leaveRequest.fromDate);
//     const toDate = new Date(fromDate);
//     toDate.setDate(fromDate.getDate() + leaveRequest.numDays);

//     alert(`Leave requested from ${leaveRequest.fromDate} to ${toDate.toISOString().split('T')[0]}`);
//     setShowModal(false);
//   };

//   return (
//     <div className="container-flex bg-blue-200 mx-auto p-4 h-screen">
//       <Navbar handleLogout={handleLogout} />

    
//       <h1 className="text-3xl mb-4">Welcome to the Employee Page</h1>

//       <div className="flex flex-wrap">
//         {Object.keys(leaveDetails).map((type, index) => (
//           <div key={index} className="w-full sm:w-1/2 md:w-1/4 mb-4 flex items-center justify-center">
//             <button
//               className="bg-blue-500 hover:bg-blue-700 w-40 text-white font-bold py-8 px-4 rounded text-center relative"
//               style={{ height: '150px' }}
//               onClick={() => handleLeaveButtonClick(type)}
//             >
//               {type.toUpperCase()}
//               <span className="badge badge-secondary absolute top-2 right-2">
//                 {leaveDetails[type]}
//               </span>
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="w-full mt-4 flex items-center justify-center">
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-4 rounded text-center w-60 "
//           style={{ height: '150px' }}
//           onClick={handleTotalButtonClick}
//         >
//           Total
//         </button>
//       </div>

//       <button
//         onClick={handleLogout}
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border border-red-500 mt-4"
//       >
//         Logout
//       </button>

//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 ">
//           <div className="modal bg-white p-4 rounded shadow-lg w-80 h-80">
//             <h2 className="text-2xl mb-4">Leave Request</h2>
//             <form>
//               <div className="mb-4">
//                 <label className="block text-sm font-bold mb-2">From Date</label>
//                 <input
//                   type="date"
//                   className="border rounded p-2 w-full"
//                   value={leaveRequest.fromDate}
//                   onChange={(e) => setLeaveRequest({ ...leaveRequest, fromDate: e.target.value })}
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-bold mb-2">Number of Days</label>
//                 <select
//                   className="border rounded p-2 w-full"
//                   value={leaveRequest.numDays}
//                   onChange={(e) => setLeaveRequest({ ...leaveRequest, numDays: parseInt(e.target.value, 10) })}
//                 >
//                   {Array.from({ length: leaveDetails.el + leaveDetails.cl + leaveDetails.nh + leaveDetails.fh + 1 }, (_, i) => i).map((num) => (
//                     <option key={num} value={num}>
//                       {num}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
//                   onClick={handleCloseModal}
//                 >
//                   Close
//                 </button>
//                 <button
//                   type="button"
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                   onClick={handleSubmitLeaveRequest}
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmployeePage;

