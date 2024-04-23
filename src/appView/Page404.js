import { Link } from 'react-router-dom';
import './Page404.css';
function Page404() {
    return (
        <div className='page'>
            <div className='detail-404'>
                
                <h1>Error 404.</h1>
                <h2>Page not found!</h2>
                <p>please check URL.</p>
                <p>or return to <Link to="/" >Home</Link></p>
            </div>

        </div>

    );
}

export default Page404;