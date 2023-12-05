import { toast } from 'react-toastify';

const Toast = (message, type = 'success') => {
    switch (type) {
        case 'success':
            toast.success(message, {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
            break;
        case 'error':
            toast.error(message, {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
            break;
        default:
            toast(message);
            break;
    }
};
export default Toast;