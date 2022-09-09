
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home.page';
import Footer from './components/Footer';
import ExerciseDetail from './pages/ExerciseDetail.page';

function App() {
  return <Box width='400px' sx={{width: {xl: '1488px'}}} m='auto'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/exercise/:id' element={<ExerciseDetail />} />
    </Routes>
    <Footer />
  </Box>
}

export default App;
