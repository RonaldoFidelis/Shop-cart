import { Link } from 'react-router-dom';
import error404 from '../../public/error404.jpg';

export function NotFound() {

  return(
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center">
        <img
          className='w-[90%] md:w-[65%] lg:w-[40%]'
          src={error404} alt="error-404" />
          <Link
            className='border-2 border-[#007DFE] flex items-center justify-center p-2 font-medium'
            to='/'>
            Return to home
          </Link>
      </div>
    </div>
  )
}

