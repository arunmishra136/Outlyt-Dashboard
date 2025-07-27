import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Plus, MessageSquare, Menu, X } from 'lucide-react';
// Import the new CSS file
import '../styles/LeftSidebar.css';

// --- Mock Data ---
const pages = [
  { name: 'Amazon', icon: 'https://placehold.co/32x32/A78BFA/FFFFFF?text=A' },
  { name: 'Nvidia INC', avatar: 'https://i.pravatar.cc/32?u=nudgest' },
  { name: 'Goog Inc.', icon: 'https://placehold.co/32x32/FDBA74/FFFFFF?text=G' },
  { name: 'Meta', avatar: 'https://i.pravatar.cc/32?u=guy' },
];
const people = [
  { name: 'Daniel Steward', status: 'Active', avatar: 'https://i.pravatar.cc/32?u=daniel' },
   { name: 'Daniel Steward', status: 'Active', avatar: 'https://i.pravatar.cc/32?u=daniel' },
  { name: 'Ariene MacCoy', status: 'Inactive', avatar: 'https://i.pravatar.cc/32?u=daniel' },
];
const articles = [
  { title: 'The guide, which is...', views: '12,000 views', image: 'https://placehold.co/100x60/E2E8F0/4A5568?text=Img' },
  { title: 'How to get a job...', views: '6,345 views', image: 'https://placehold.co/100x60/CBD5E1/4A5568?text=Img' },
  { title: 'When you know it is time...', views: '2,127 views', image: 'https://placehold.co/100x60/E5E7EB/4A5568?text=Img' },
];

// --- Reusable Components ---
const InfoCard = ({ title, children }) => (
  <div className="info-card">
    <div className="info-card-header">
      <h3 className="info-card-title">{title}</h3>
      <a href="#" className="info-card-arrow"><ArrowRight size={20} /></a>
    </div>
    <div className="info-card-content">{children}</div>
  </div>
);

const StatusTag = ({ status }) => {
  const statusClasses = {
    Active: "status-active",
    Inactive: "status-inactive",
    Away: "status-away",
  };
  return <span className={`status-tag ${statusClasses[status] || 'status-inactive'}`}>{status}</span>;
};

// --- Header Component with Menu Button ---
const Header = ({ onMenuClick }) => {
    return (
        <header style={{ backgroundColor: '#e4e4e7', padding: '1rem', display: 'flex', alignItems: 'center' }}>
            <button onClick={onMenuClick} className="lg:hidden" style={{ color: '#4b5563', marginRight: '1rem' }}>
                <Menu size={24} />
            </button>
        </header>
    );
};

// --- Updated LeftSidebar Component ---
const LeftSidebar = ({ isOpen, onClose }) => {
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    return (
        <>
            <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
            
            <aside ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h2 className="sidebar-title">Menu</h2>
                    <button onClick={onClose} className="close-button">
                        <X size={24} />
                    </button>
                </div>
                
                <InfoCard title="Pages">
                    {pages.map((page, index) => (
                        <div key={index} className="list-item">
                            <div className="list-item-content">
                                <img src={page.avatar || page.icon} alt={page.name} className="list-item-avatar" />
                                <span className="list-item-name">{page.name}</span>
                            </div>
                            <button className="add-button"><Plus size={18} /></button>
                        </div>
                    ))}
                </InfoCard>

                <InfoCard title="People">
                    {people.map((person, index) => (
                        <div key={index} className="list-item">
                            <div className="list-item-content">
                                <div className="list-item-avatar" style={{ backgroundColor: person.bgColor || 'transparent' }}>
                                    {person.avatar ? <img src={person.avatar} alt={person.name} className="list-item-avatar" /> : person.icon}
                                </div>
                                <div>
                                    <p className="list-item-name">{person.name}</p>
                                    <StatusTag status={person.status} />
                                </div>
                            </div>
                            <button className="add-button"><Plus size={18} /></button>
                        </div>
                    ))}
                </InfoCard>

                <InfoCard title="Articles">
                    {articles.map((article, index) => (
                        <div key={index} className="list-item-content">
                            <img src={article.image} alt={article.title} style={{width: '64px', height: '48px', borderRadius: '0.5rem', objectFit: 'cover'}} />
                            <div>
                                <p className="list-item-name" style={{whiteSpace: 'normal'}}>{article.title}</p>
                                <p style={{fontSize: '0.75rem', color: '#6b7280'}}>{article.views}</p>
                            </div>
                        </div>
                    ))}
                </InfoCard>
            </aside>
        </>
    );
};


// --- Main App Component ---
export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#e4e4e7', fontFamily: 'sans-serif' }}>
      <Header onMenuClick={() => setIsMobileMenuOpen(true)} />
      <div style={{ display: 'flex' }}>
        <LeftSidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      </div>
    </div>
  );
}
