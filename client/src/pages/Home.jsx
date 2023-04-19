import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer';
import { UserAuth } from '../components/context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  console.log(user);

  const handleLogOut = async () => {
    try {
      console.log('user', user);
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

      <Footer text='© 2023 Meal Prep Tracker' />
    </div>
  );
}

export default Home;