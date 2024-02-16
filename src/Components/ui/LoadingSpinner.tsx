import { PulseLoader } from 'react-spinners';


const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Set height as needed to center vertically
};

const LoadingSpinner = ({ size = 15, color = 'white' }) => {
    return (
        <div className="flex items-center justify-center h-full" style={{ ...containerStyle, ...containerStyle }}>
            <PulseLoader  size={size} color={color} />
        </div>
    );
};

export default LoadingSpinner;
