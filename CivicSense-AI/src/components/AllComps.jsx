import React from 'react';
import { format } from 'date-fns';
import { AlertTriangle, CheckCircle, Clock, ArrowUpRight } from 'lucide-react';

const AllComps = ({ complaints }) => {
  const getPriorityBadge = (priority) => {
    const classes = {
      low: 'bg-green-100 text-green-800',
      medium: 'bg-yellow-100 text-yellow-800',
      high: 'bg-orange-100 text-orange-800',
      critical: 'bg-red-100 text-red-800',
    };

    return (
      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${classes[priority]}`}>
        {priority.charAt(0).toUpperCase() + priority.slice(1)}
      </span>
    );
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'in-progress':
        return <ArrowUpRight className="h-5 w-5 text-blue-500" />;
      case 'escalated':
        return <AlertTriangle className="h-5 w-5 text-orange-500" />;
      case 'resolved':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden flex-grow">
      {/* Header */}
      <div className="p-5 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">All Complaints</h3>
      </div>

      {/* Complaints Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Complaint</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {complaints.slice(0, 5).map((complaint) => (
              <tr key={complaint.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{complaint.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate max-w-xs">{complaint.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{complaint.department}</td>
                <td className="px-6 py-4 whitespace-nowrap">{getPriorityBadge(complaint.priority)}</td>
                <td className="px-6 py-4 whitespace-nowrap flex items-center">
                  {getStatusIcon(complaint.status)}
                  <span className="ml-2 text-sm text-gray-700">
                    {complaint.status.replace('-', ' ')}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {format(new Date(complaint.createdAt), 'MMM dd, yyyy')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-end">
      </div>
    </div>
  );
};

export default AllComps;
