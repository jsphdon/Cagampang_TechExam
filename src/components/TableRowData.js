import '../index.css';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const StatusBadge = ({ status }) => (
  <p className={`mb-0 text-center font-semibold px-2 py-2 rounded-lg text-white ${status ? 'bg-green-500' : 'bg-red-500'}`}>
    {status ? 'Active' : 'Inactive'}
  </p>
);

const TableCell = ({ children, className = '' }) => (
  <td className={`px-6 py-4 ${className}`}>
    {children}
  </td>
);

const TableRow = ({ user, onDelete }) => {
  const history = useHistory();

  const handleRowClick = () => {
    history.push(`/view/${user.id}`);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(user.id);
  };

  return (
    <tr
      id={user.id}
      className="border-b bg-white text-black cursor-pointer hover:bg-gray-100"
      onClick={handleRowClick}
    >
      <TableCell className="font-bold text-black whitespace-nowrap">
        {user.name}
      </TableCell>
      <TableCell className="whitespace-nowrap overflow-hidden text-ellipsis w-[28rem]">
        {user.description}
      </TableCell>
      <TableCell>
        {user.category.category_name}
      </TableCell>
      <TableCell>
        <StatusBadge status={user.status} />
      </TableCell>
      {/* Edit Button */}
      <TableCell className="text-right">
        <Link
          to={`/edit/${user.id}`}
          onClick={(e) => e.stopPropagation()}
          className="text-center text-white border border-blue-500 duration-300 rounded-lg hover:bg-white bg-blue-500 px-4 py-2 text-md font-semibold"
        >
          Edit
        </Link>
      </TableCell>
      {/* Delete Button */}
      <TableCell className="text-right">
        <button
          onClick={handleDelete}
          className="text-center text-white hover:text-red-600 border border-red-500 duration-300 rounded-lg hover:bg-white bg-red-500 px-4 py-2 text-md font-semibold"
        >
          Delete
        </button>
      </TableCell>
    </tr>
  );
};

const TableRowData = ({ users, onDelete }) => (
  <tbody>
    {users.map((user) => (
      <TableRow key={user.id} user={user} onDelete={onDelete} />
    ))}
  </tbody>
);

export default TableRowData;
