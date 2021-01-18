
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListAchievementComponent from './components/ListAchievementComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddAchievementComponent from './components/AddAchievementComponent';
import UpdateAchievementComponent from './components/UpdateAchievementComponent';
import ViewAchievementComponent from './components/ViewAchievementComponent';
import HomeComponent from './components/HomeComponent';
import ContactComponent from './components/ContactComponent';
import AboutUsComponent from './components/AboutUsComponent';
import TeacherRegistrationComponent from './components/TeacherRegistraionComponent';
import StudentRegistrationComponent from './components/StudentRegistrationComponent';
import LoginComponent from './components/LoginComponent';
import ListAchievement from './components/ListAchievement';

function App() {
  return (
    <div>
      <Router>
          {/* <HeaderComponent/> */}
          <HeaderComponent />
            <div >
              <Switch> 
                <Route path="/" exact component={HomeComponent}></Route>
                {/* <Route path="/achievements" component={ListAchievementComponent}></Route>  */}
                <Route path="/home" component={HomeComponent}></Route>
                <Route path="/aboutUs" component={AboutUsComponent}></Route>
                <Route path="/achievements" exact component={ListAchievementComponent}></Route>
                <Route path="/addAchievement" component={AddAchievementComponent}></Route> 
                <Route path="/updateAchievement/:id" component={UpdateAchievementComponent}></Route>
                <Route path="/viewAchievement/:id" component={ViewAchievementComponent}></Route>
                <Route path="/contactUs" component={ContactComponent}></Route>
                <Route path="/teacherSignUp" component={TeacherRegistrationComponent}></Route>
                <Route path="/studentSignUp" component={StudentRegistrationComponent}></Route>
                <Route path="/login" component={LoginComponent}></Route>
                <Route path="/achievement" component={ListAchievement}></Route>

              </Switch>
            </div>
            
          <FooterComponent/>
      </Router>
      
    </div>
  );
}

export default App;
