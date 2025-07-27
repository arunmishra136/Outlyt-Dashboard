import React, { useState } from 'react';
import { Pencil, Image, Video, BarChart2, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';
// Import the new CSS file
import '../styles/MainContent.css';

// --- Mock Data for Posts ---
const posts = [
  {
    id: 1,
    author: 'Nakshatra Sharma',
    title: 'Founder at Councilia',
    timestamp: '20 hours ago',
    avatar: 'https://placehold.co/40x40/3B82F6/FFFFFF?text=NS',
    content: 'Maecenas porttitor integer viverra lorem metus et in eu...',
    image: 'https://media.istockphoto.com/id/1830126474/photo/portrait-of-a-business-man-sitting-in-an-office.jpg?s=612x612&w=0&k=20&c=jFJl6x5NUZOXEH230n2asejE-vDZ0YtATM0pbfJFTgk=',
    likes: 42,
    comments: 8,
  },
  {
    id: 2,
    author: 'Mohd Qadir',
    title: 'Sales Manager',
    timestamp: '23 hours ago',
    avatar: 'https://placehold.co/40x40/3B82F6/FFFFFF?text=MQ',
    content: 'Maecenas porttitor integer viverra lorem metus et in eu...',
    image: 'https://media.istockphoto.com/id/1346125184/photo/group-of-successful-multiethnic-business-team.jpg?s=612x612&w=0&k=20&c=5FHgRQZSZed536rHji6w8o5Hco9JVMRe8bpgTa69hE8=',
    likes: 42,
    comments: 8,
  },
];

// --- Card Component ---
const Card = ({ children, className = '' }) => (
  <div className={`card ${className}`}>
    {children}
  </div>
);

// --- Create Post Section ---
const CreatePost = () => (
  <Card>
    <div className="create-post-input-wrapper">
      <Pencil style={{ width: '1.5rem', height: '1.5rem', color: '#9ca3af' }} />
      <input
        type="text"
        placeholder="Create a new post..."
        className="create-post-input"
      />
      <div className="create-post-icons">
        <Image style={{ width: '1.25rem', height: '1.25rem' }} />
        <Video style={{ width: '1.25rem', height: '1.25rem' }} />
      </div>
    </div>
    <div className="create-post-actions">
      <button className="action-button action-button-primary">
        <Image size={20} />
        <span>Image</span>
      </button>
      <button className="action-button action-button-secondary">
        <Video size={20} />
        <span>Video</span>
      </button>
      <button className="action-button action-button-secondary">
        <BarChart2 size={20} />
        <span>Poll</span>
      </button>
    </div>
  </Card>
);

// --- Post Card with Like Functionality ---
const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <Card>
      {/* Post Header */}
      <div className="post-header">
        <div className="post-author-info">
          <img src={post.avatar} alt={post.author} className="post-avatar" />
          <div>
            <p className="post-author-name">
              {post.author} <span className="post-timestamp">{post.timestamp}</span>
            </p>
            <p className="post-author-title">{post.title}</p>
          </div>
        </div>
        <button className="follow-button">
          Follow
        </button>
      </div>

      {/* Post Content */}
      <p className="post-content">
        {post.content.substring(0, 250)}...
        <a href="#" className="see-more-link">See more</a>
      </p>

      {/* Post Image */}
      {post.image && (
        <img src={post.image} alt="Post content" className="post-image" />
      )}

      {/* Post Actions */}
      <div className="post-actions">
        <div className="post-actions-left">
          <button onClick={handleLike} className="post-action-button">
            <ThumbsUp size={20} />
            <span className="post-action-text">{likes}</span>
          </button>
          <button className="post-action-button">
            <MessageCircle size={20} />
            <span className="post-action-text">{post.comments}</span>
          </button>
        </div>
        <button className="action-button action-button-secondary">
          <Share2 size={20} />
          <span>Share</span>
        </button>
      </div>
    </Card>
  );
};

// --- Main Content Container ---
const MainContent = () => {
  return (
    <main className="main-content">
      <CreatePost />

      <div className="timeline-divider">
        <span className="timeline-text">TIMELINE FOR YOU</span>
      </div>

      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
};

export default MainContent;
