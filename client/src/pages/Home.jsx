import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import Header from '../components/Header'
import Footer from '../components/Footer';
import { UserAuth } from '../components/context/AuthContext';


const Home = () => {
  const { user } = UserAuth();

  return (
    <div>
      <Header />
      <h1>Home</h1>
      <p>current user: {user.user && user.user.email}</p>
      <SignUp />
      <SignIn />

      <Footer text='© 2023 Meal Prep Tracker' />
    </div>
  );
}

export default Home;