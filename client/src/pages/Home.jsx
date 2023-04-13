import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import Header from '../components/Header'
import Footer from '../components/Footer';
import { UserAuth } from '../components/context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut(); 
      navigate('/signin')
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Header />
      <h1>Home</h1>
      <p>current user: {user.user && user.user.email}</p>
      <button onClick={handleLogOut}>Logout</button>
      <SignUp />
      <SignIn />

      <Footer text='© 2023 Meal Prep Tracker' />
    </div>
  );
}

export default Home;