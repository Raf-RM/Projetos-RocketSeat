import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { NewMovie } from '../pages/NewMovie';
import { MoviePreview } from '../pages/MoviePreview';
import { Profile } from '../pages/Profile';

export function AppRoutes(){
  return(
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/new' element={<NewMovie/>} />
      <Route path='/preview' element={<MoviePreview/>} />
      <Route path='/profile' element={<Profile/>} />
    </Routes>
  )
}