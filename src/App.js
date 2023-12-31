import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import { Header } from "./Components/Header/Header";
import { UserContextProvider } from "./Context/userContext";
import ContactManager from "./Components/Contacts/ContactManager";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { HomePage } from "./Components/HomePage/HomePage";
import Home from './Movies_Imdb/pages/home/home';
import MovieList from './Movies_Imdb/components/movieList/movieList';
import Movie from './Movies_Imdb/pages/movieDetail/movie';
import { MovieManager } from "./Components/Movies_Manager/MovieManager"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/home/*" element={<ContactManager />}></Route>
            <Route path="/signup" element={<SignUp />} />
                <Route path="/movies_imdb" element={<Home />}></Route>
                <Route path="movie_imdb/:id" element={<Movie />}></Route>
                <Route path="movie_imdbs/:type" element={<MovieList />}></Route> 
            <Route path="/movie/*" element={<MovieManager />}></Route>
          </Routes>
        </UserContextProvider>
      </Provider>
    </div>
  );
}

export default App;
