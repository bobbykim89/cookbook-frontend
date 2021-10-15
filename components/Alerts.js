import { AlertContext } from '@/context/alert/AlertContext';
import { useContext } from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div
        className='px-3 py-3 text-white text-center bg-red-500 shadow-md'
        key={alert.id}
      >
        <FaInfoCircle /> {alert.msg}
      </div>
    ))
  );
};

export default Alerts;
