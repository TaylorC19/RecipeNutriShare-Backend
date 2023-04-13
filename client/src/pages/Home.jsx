import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import Header from '../components/Header'
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
      <Header />
      <h1>Home</h1>

      <SignUp />
      <SignIn />

      <Footer text='© 2023 Meal Prep Tracker' />
    </div>
  );
}

export default Home;