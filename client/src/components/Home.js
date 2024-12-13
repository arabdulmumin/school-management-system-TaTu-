import React from 'react';
import Dashboard from './Dashboard'
import Profile from './Profile'
import Inbox from './Inbox'
import Calendar from './Calendar'
import Help from './Help'
const Home = () => {
 return (
<div>
<h1>HOME</h1>
<Dashboard/>
<Profile/>
<Inbox/>
<Calendar/>
<Help/>
 </div>
 );
};

export default Home;