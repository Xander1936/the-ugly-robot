import React, { useEffect, useState } from 'react';
import ProfileCard from './components/ProfileCard';
import profiles from './components/fakeData';
import './App.css';

function App() {
  const [fullname, setFullname] = useState('waiting for data');

  //API: async is use to fetch something from the web 
  //and run it at the same time with the offline code.
  const getRandomName = async () => {
    const response = await fetch('https://randomuser.me/api');
    //Turns the APi into Object
    const data = await response.json();
    //Get the result of the api's response, 
    //loop and concat the features first and last Name into the fullname useState
    setFullname(data.results[0].name.first + ' ' + data.results[0].name.last);
    //console.log(fullname);
    return fullname;
  }
  //Empty arry means Break the infinite Loop of the useState Hook 
  //and runs the data from the API once the page loads. 
  useEffect(() => {
    getRandomName();
  },[])

  return (
    <div className="container">
    {/*Add the Profile Card Component dynamically
    Loop throw the fakeData array and build the profileCard
    */}
      {profiles.map(profile => (
        <ProfileCard
        //JSX + Template Literals {``} to generate a random robot image from https://robohash.org/
        //for each different ProfileCard component 
        //Template Literals `` introduces here some JavaScript Code Math.random() to the image's url link 
          image={`https://robohash.org/${Math.random()}.png`}
          title={profile.title}
          name={fullname}
          description={profile.description}
        />
      ))}
    </div>
 );
} 

export default App;

//<></>