import './App.css';
import Footer from './components/Footer';
import SubscriptionList from './components/SubscriptionList';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-[100vh] bg-[#131321] flex flex-col justify-between">
      <Header />
        <SubscriptionList />
      <Footer />
    </div>
  );
}

export default App;
