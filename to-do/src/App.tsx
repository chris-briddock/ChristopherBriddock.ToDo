import Routing from './routes/Routing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return(
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            {Routing.map(({ path, element }, key) => (
              <Route key={key} path={path} element={element} />
            ))}
          </Routes>
          {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App
