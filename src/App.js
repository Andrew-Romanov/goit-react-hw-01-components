import MainContainer from "./components/MainContainer/MainContainer";
import PageHeader from "./components/PageHeader/PageHeader";
import Subheader from "./components/Subheader/Subheader";
import Profile from "./components/Profile/Profile";
import userData from "./components/Profile/user.json";
// import './App.css';

// const tempVar = 223;

// console.log(tempVar2);

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
      <Subheader>Task 3. Friends List</Subheader>
      <Subheader>Task 4. Transaction History</Subheader>
      {/* <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
    </MainContainer>
  );
}

export default App;