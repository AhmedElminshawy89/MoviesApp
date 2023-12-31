import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ContactUs from "./Screens/ContactUs";
import NotFound from "./Screens/NotFound";
import AboutUs from "./Screens/AboutUs";
import MoviesList from "./Screens/MoviesList";
import SingleMovie from "./Screens/SingleMovie";
import WatchPage from "./Screens/WatchPage";
import LogIn from "./Screens/LogIn";
import Register from "./Screens/Register";
import Profile from "./Screens/Dashboard/Profile";
import Aos from "aos";
import Password from "./Screens/Dashboard/Password";
import FavoriteMovies from "./Screens/Dashboard/FavoriteMovies";
import Dashboard from "./Screens/Dashboard/Admins/Dashboard";
import MovieList from "./Screens/Dashboard/Admins/MovieList";
import Users from "./Screens/Dashboard/Admins/Users";
import Categories from "./Screens/Dashboard/Admins/Categories";
import AddMovies from "./Screens/Dashboard/Admins/AddMovies";


function App() {
  Aos.init()
  return (
    <Routes>
      <Route path="/MoviesApp" element={<HomeScreen />}/>
      <Route path="/about-us" element={<AboutUs />}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
      <Route path="/movies" element={<MoviesList/>}/>
      <Route path="/movie/:id" element={<SingleMovie/>}/>
      <Route path="/watch/:id" element={<WatchPage/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/password" element={<Password/>}/>
      <Route path="/favorites" element={<FavoriteMovies/>}/>
      <Route path="/favorites" element={<FavoriteMovies/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/movieslist" element={<MovieList/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/categories" element={<Categories/>}/>
      <Route path="/addmovie" element={<AddMovies/>}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  );
}

export default App;
