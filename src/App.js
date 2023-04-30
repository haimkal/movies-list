import './App.css';
import MoviesList from './components/MoviesList';
import MoviePage from './components/MoviePage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movie-page/:id" element={<MoviePage />} />
        </Routes>



      </Router>



    </div>
  );
}

export default App;
