import logo from './logo.svg';
import './App.css';
import User1 from './components/user1';
import User2 from './components/user2';
// import UserForm from './components/UserForm';

function App() {
  return (
    <>
      <div className="App">

        <User1
          title="Graphic Designer"
          name="Amit"
          description="‘Highly creative and multitalented Graphic Designer with extensive experience in multimedia, marketing, and print design.’"
        />

        <br />

        <User2
          title="Singer"
          name="Ruhi"
          description="‘perform a variety of music for recordings and live audiences. They audition for positions in choruses, orchestras, bands, plays,and other types of music groups. ’"
        />


      </div>
    </>
  );
}

export default App;
