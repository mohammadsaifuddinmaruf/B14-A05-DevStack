import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-50">
      <Header />
      <Banner />
      <Main />
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2400} />
    </div>
  );
}

export default App;
