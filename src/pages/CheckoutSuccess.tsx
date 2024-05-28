import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCartEmpty } from '../redux/slices/cartSlice';
// import Lottie from 'react-lottie';
// import successAnimation from '../public/animations/success.json';
// import failureAnimation from '../public/animations/failure.json';

const CheckoutSuccess = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const sessionId = query.get('session_id');

    if (!sessionId) {
      navigate("/")
    }

    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
      dispatch(setCartEmpty())
    }, 4000);
    // const verifyPayment = async () => {
    //   try {
    //     const response = await axios.post('/api/verify-payment', { sessionId });
    //     if (response.data.success) {
    //       setIsSuccess(true);
    //       toast.success("Order placed successfully");
    //       dispatch(setCartEmpty());
    //     } else {
    //       setIsSuccess(false);
    //       toast.error("Payment verification failed");
    //     }
    //   } catch (error) {
    //     setIsSuccess(false);
    //     toast.error("Payment verification failed");
    //   } finally {
    //     setIsLoading(false);
    //   }
    //   verifyPayment();
    // }

  }, []);

  // const defaultOptions = {
  //   loop: false,
  //   autoplay: true,
  //   animationData: isSuccess ? successAnimation : failureAnimation,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // };

  return (
    <div className="flex items-center justify-center min-h-[700px]">
      {isLoading ? (
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl font-semibold'>Processing your order</h1>

          <img src="https://cdn.dribbble.com/users/915787/screenshots/13875171/media/fcdafdbed338b151db69b39599d2f5a6.gif" className="w-[400px] mix-blend-multiply object-contain" alt="" />
        </div>
      ) : (
        isSuccess && 
        <div className='text-center'>
          <img src="https://cdn.dribbble.com/users/1751799/screenshots/5512482/check02.gif" className="w-[400px] object-contain" alt="" />
          <h1 className='text-3xl font-semibold text-green-500'>Thankyou for shopping with us</h1>
          <p className='text-lg font-semibold text-green-500 '>Your order has been placed successfully</p>
          <button onClick={() => navigate('/')} className='text-base  font-semibold text-blue-500'>Back to home</button>
        </div>
      )}
    </div>
  );
};

export default CheckoutSuccess;

// https://cdn.dribbble.com/users/915787/screenshots/13875171/media/fcdafdbed338b151db69b39599d2f5a6.gif