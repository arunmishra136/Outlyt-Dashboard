import { useState, useEffect, useRef } from 'react';
import { Home, Users, Briefcase, MessageSquare, Bell, MessageCircle, Search, Sun } from 'lucide-react';
// Import the new CSS file
import '../styles/header.css'

// The Tag and ProfilePopup components still use Tailwind for simplicity,
// but their parent `Header` component does not.
const Tag = ({ text, color }) => {
    const colors = {
        red: "bg-red-100 text-red-700",
        green: "bg-green-100 text-green-700",
    }
    return <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors[color]}`}>{text}</span>
};

const ProfilePopup = () => (
    <div className="profile-popup">
        <div className="relative flex flex-col items-center">
            <div className="relative w-20 h-20">
                 <img 
                    src="https://placehold.co/80x80/3B82F6/FFFFFF?text=NS&font=roboto" 
                    alt="User Avatar" 
                    className="w-20 h-20 rounded-2xl border-4 border-white"
                 />
            </div>
            <h3 className="text-md font-bold mt-3 text-gray-800 flex items-center">
                Nakshatra Sharma
            </h3>
            <p className="text-sm text-gray-500">Founder at Councilia</p>
            <div className="flex space-x-2 my-3">
                <Tag text="Founder" color="red" />
                <Tag text="Software Engineer" color="green" />
            </div>
            <div className="w-full flex justify-around text-center border-t pt-3">
                <div>
                    <p className="font-bold text-blue-600 text-lg">205</p>
                    <p className="text-xs text-gray-500">Connections</p>
                </div>
                <div>
                    <p className="font-bold text-blue-600 text-lg">9,767</p>
                    <p className="text-xs text-gray-500">Posts Views</p>
                </div>
            </div>
        </div>
    </div>
);


// --- The Header Component ---
const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleAvatarClick = () => {
      if (screenWidth < 1024) {
          setIsPopupOpen(!isPopupOpen);
      }
  }

  return (
    <header className="header">
      <div className="container">
        <div className="flex-container">
          
          <div className="left-section">
            <div ref={popupRef} className="left-section-content">
              <img 
                src="https://i.pravatar.cc/40" 
                alt="User Avatar" 
                className="avatar"
                onClick={handleAvatarClick}
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/40x40/E2E8F0/4A5568?text=Error'; }}
              />
              <Sun className="sun-icon" />
              {isPopupOpen && screenWidth < 1000 && <ProfilePopup />}
            </div>
          </div>

          <div className="center-section">
            <div className="search-wrapper">
              <div className="search-icon-wrapper">
                <Search className="search-icon" />
              </div>
              <input
                type="text"
                placeholder="Global search"
                className="search-input"
              />
            </div>
          </div>

          <div className="right-section">
            <div className="right-section-content">
              <nav className="nav">
                <a href="#" className="nav-link"><Home size={22}/></a>
                <a href="#" className="nav-link"><Users size={22}/></a>
                <a href="#" className="nav-link"><Briefcase size={22}/></a>
                <a href="#" className="nav-link"><MessageSquare size={22}/></a>
                <a href="#" className="nav-link relative">
                  <Bell className="h-6 w-6" />
                  <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-blue-500"></span>
                </a>
                <a href="#" className="nav-link"><MessageCircle size={22}/></a>
              </nav>
              <div className="divider"></div>
              <a className='outlyt-link' href="#">Outlyt</a>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

// --- Main App Component ---
export default function App() {
  return (
    <div className="bg-zinc-200 font-sans p-4">
      <Header />
    </div>
  );
}
