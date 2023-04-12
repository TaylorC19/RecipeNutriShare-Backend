import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';
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