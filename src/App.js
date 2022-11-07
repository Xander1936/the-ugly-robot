import React from 'react';
import ProfileCard from './components/ProfileCard';
import profiles from './components/fakeData';
import './App.css';

function App() {
  return (
    <div className="container">
    {/*Add the Profile Card Component dynamically
    Loop throw the fakeData array and build the profileCard
    */}
      {profiles.map(profile => (
        <ProfileCard 
          image={`https://robohash.org/${Math.random()}.png`}
          title={profile.title}
          name={profile.name}
          description={profile.description}
        />
      ))}
    </div>
 );
} 

export default App;
