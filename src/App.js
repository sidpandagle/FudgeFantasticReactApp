import './App.css';
import Footer from './components/Footer';
import SubscriptionList from './components/SubscriptionList';
import Header from './components/Header';
import HeroContent from './components/HeroContent';
import HeroContentList from './components/HeroContentList';
import SideContent from './components/SideContent';

function App() {
  return (
    <div className="min-h-[100vh] bg-[#131321] flex flex-col justify-between">
      <Header />
      {/* <Perspective /> */}
      <HeroContentList />
      <SideContent />
      <SubscriptionList />
      <Footer />
    </div>
  );
}

export default App;
