'use client';
import React from 'react';
import TopNav from './components/top-navbar';


const onChange = (key: string) => {
  console.log(key);
};


const App: React.FC = () => (
  <>
  <TopNav></TopNav>
  </>
);

export default App;