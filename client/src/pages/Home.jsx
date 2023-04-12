import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import Header from '../components/Header'


const Home = () => {
  return (
    <div>
      <Header />
      <h1>Home</h1>

      <SignUp />
      <SignIn />
    </div>
  );
}

export default Home;