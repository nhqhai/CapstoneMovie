import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserTemplate from './template/UserTemplate';
import HomePage from './pages/HomePage/HomePage';
import Page404 from './pages/Page404/Page404';
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
