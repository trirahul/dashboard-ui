import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import ActivityChart from './components/ActivityChart';
import Feedback from './components/Feedback';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #282C34;
  color: white;
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
`;

function App() {
  return (
    <AppContainer>
      <Sidebar />
      <MainContent>
        <h1>Dashboard</h1>
        <ActivityChart />
        <Feedback />
      </MainContent>
    </AppContainer>
  );
}

export default App;
