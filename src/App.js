import MainContainer from './components/MainContainer/MainContainer';
import PageHeader from './components/PageHeader/PageHeader';
import Subheader from './components/Subheader/Subheader';
import Profile from './components/Profile/Profile';
import userData from './components/Profile/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';
// import './App.css';

const App = () => {
  return (
    <MainContainer>
      <PageHeader>React Homework 01. Components</PageHeader>

      <Subheader>Task 1. Social Network Profile</Subheader>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />

      <Subheader>Task 2. Statistics Section</Subheader>
      <Statistics title="Upload Stats" stats={statisticalData} />

      <Subheader>Task 3. Friends List</Subheader>

      <Subheader>Task 4. Transaction History</Subheader>
    </MainContainer>
  );
};

export default App;
