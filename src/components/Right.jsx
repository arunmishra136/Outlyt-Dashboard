import React from 'react';
import { 
    ArrowRight, 
    MoreHorizontal, 
    Users, 
    Briefcase, 
    Lightbulb, 
    TrendingUp, 
    Newspaper, 
    Bookmark,
    Rss 
} from 'lucide-react';
// Import the new CSS file
import '../styles/RightSidebar.css';

// --- Mock Data ---
const userProfile = {
  name: 'Nakshatra Sharma',
  title: 'Founder at Councilia',
  avatar: 'https://placehold.co/80x80/3B82F6/FFFFFF?text=NS&font=roboto',
  connections: 205,
  postViews: 9767,
  tags: ['Founder', 'Software Engineer'],
};

const navLinks = [
  { icon: <Users size={20} />, text: 'Connections' },
  { icon: <Briefcase size={20} />, text: 'Jobs' },
  { icon: <Lightbulb size={20} />, text: 'Ideas' },
  { icon: <TrendingUp size={20} />, text: 'Investments' },
  { icon: <Users size={20} />, text: 'Group' },
  { icon: <Bookmark size={20} />, text: 'Pages' },
  { icon: <Newspaper size={20} />, text: 'News' },
  { icon: <Rss size={20} />, text: 'Following' },
];

const trendingTopics = [
  { title: '2M $ Investment Approved', source: 'Google Start working' },
  { title: 'Councilia Start Working in US', source: 'Councilia' },
  { title: 'Councilia Start Working in US', source: 'Councilia' },
];

// --- Reusable Components ---
const InfoCard = ({ children, className = '' }) => (
  <div className={`info-card ${className}`}>
    {children}
  </div>
);

const Tag = ({ text, color }) => {
  const colorClass = color === 'red' ? 'tag-red' : 'tag-green';
  return <span className={`tag ${colorClass}`}>{text}</span>
};


// --- Main Sidebar Component ---
const RightSidebar = () => {
  return (
    <aside className="right-sidebar">
      {/* Profile Card */}
      <InfoCard className="text-center">
        <div className="profile-avatar-wrapper">
            <img src={userProfile.avatar} alt="User Avatar" className="profile-avatar" />
            <div className="profile-status-icon">
                <img src="https://placehold.co/20x20/FFFFFF/3B82F6?text=S" className="rounded-full" alt="status icon"/>
            </div>
        </div>
        <h3 className="profile-name">
            {userProfile.name}
            <span className="verified-badge">✓</span>
        </h3>
        <p className="profile-title">{userProfile.title}</p>
        <div className="tags-container">
          <Tag text="Founder" color="red" />
          <Tag text="Software Engineer" color="green" />
        </div>
        <div className="stats-container">
          <div>
            <p className="stat-value">{userProfile.connections}</p>
            <p className="stat-label">Connections</p>
          </div>
          <div>
            <p className="stat-value">{userProfile.postViews.toLocaleString()}</p>
            <p className="stat-label">Posts Views</p>
          </div>
        </div>
      </InfoCard>
      
      {/* View Profile Button */}
      <button className="view-profile-button">
        View Profile
      </button>

      {/* Navigation Links */}
      <InfoCard>
        <ul className="nav-list">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href="#" className="nav-link">
                {link.icon}
                <span>{link.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </InfoCard>

      {/* Trending Topics */}
      <InfoCard>
        <div className="trending-header">
            <h3 className="trending-title">Trending Topics</h3>
            <a href="#" className="trending-arrow">
                <ArrowRight size={20} />
            </a>
        </div>
        <div className="trending-list">
            {trendingTopics.map((topic, index) => (
                <div key={index}>
                    <p className="trending-item-title">{topic.title}</p>
                    <p className="trending-item-source">{topic.source}</p>
                </div>
            ))}
        </div>
      </InfoCard>
    </aside>
  );
};


// --- Example App Layout ---
// This shows how you might use the RightSidebar in a full page layout.
export default function App() {
  return (
    <div style={{ minHeight: '100vh', fontFamily: 'sans-serif', backgroundColor: '#e4e4e7' }}>
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '1280px', margin: '0 auto' }}>
        <RightSidebar />
      </div>
    </div>
  );
}
