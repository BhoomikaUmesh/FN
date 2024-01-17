import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const HrPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const [leaveRequests, setLeaveRequests] = useState([
    {
      id: 1,
      name: 'Soniya',
      daysTaken: 3,
      reason: 'Family Emergency',
      status: 'Pending',
    },
    {
      id: 2,
      name: 'Bhoomika',
      daysTaken: 2,
      reason: 'Personal',
      status: 'Pending',
    },
    // Add more leave requests as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleApprove = (id) => {
    const updatedRequests = leaveRequests.map((request) =>
      request.id === id ? { ...request, status: 'Approved' } : request
    );
    setLeaveRequests(updatedRequests);
    alert('Request Approved!');
  };

  const handleReject = (id) => {
    const updatedRequests = leaveRequests.map((request) =>
      request.id === id ? { ...request, status: 'Rejected' } : request
    );
    setLeaveRequests(updatedRequests);
    alert('Request Rejected!');
  };

  const handleSearch = () => {
    // Perform search logic here
    // You might filter the data based on the searchTerm and update the state
  };

  const filteredRequests = leaveRequests.filter((request) =>
    request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.id.toString().includes(searchTerm)
  );

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <h1 className="text-2xl md:text-5xl mb-4">Leave Requests</h1>
      <div className="flex flex-col md:flex-row md:items-center mb-4">
        <input
          type="text"
          placeholder="Search by employee name or ID"
          className="border p-2 mb-2 md:mb-0 md:mr-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Employee ID</th>
              <th className="py-2 px-4 border-b">Days Taken</th>
              <th className="py-2 px-4 border-b">Reason</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map((request) => (
              <tr key={request.id}>
                <td className="py-2 px-4 border-b">{request.name}</td>
                <td className="py-2 px-4 border-b">{request.id}</td>
                <td className="py-2 px-4 border-b">{request.daysTaken}</td>
                <td className="py-2 px-4 border-b">{request.reason}</td>
                <td className="py-2 px-4 border-b">{request.status}</td>
                <td className="py-2 px-4 border-b">
                  {request.status === 'Pending' && (
                    <>
                      <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                        onClick={() => handleApprove(request.id)}
                      >
                        Approve
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleReject(request.id)}
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={handleLogout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Logout
      </button>
    </div>
  );
};

export default HrPage;
