import React from 'react';
import ReactDOM from 'react-dom/client'; 
// import App from './App';
// import React from 'react';
import './index.css';
import {BrowserRouter as Router,Routes,Route,Navigate, Link, Outlet, useParams, NavLink, useNavigate, useLocation} from 'react-router-dom';//step 1

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Routes>
        <Route path='/' element={ <HOME />} />       
        <Route path='/myapps' element={<Navigate replace to="/learn" />} />       
        <Route path='/learn' element={<Learn/>}>
          <Route path='courses' element={<Courses/>} >
            <Route path=':courseID' element={<CourseID/>} />
            {/* this should be starting with ":" and the value should match with the variable down in component */}
          </Route>
          <Route path='bundles' element={<Bundles/>} />
        </Route>   
        {/* if want to nest some routes...then this is the method..those routes should be enclosed in between that 1 route */}
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </Router>
);

function HOME(){

  const navigate=useNavigate();
  return(
    <>
      <p>HOME ROUTE COMPONENT</p>
      <button
      className='bg-green-400 mx-5 mt-5'
      onClick={()=>{
        navigate("/learn");
      }}
      >
        CLICK HERE
      </button>
    </>
  )
}
function Learn(){
  return(
    <>
      <p>Learn ROUTE COMPONENT</p>
      <h3>Learn React Router v6</h3>
      <Link className='mt-5 mx-5 bg-blue-300 text-red-800 rounded-md' to="/learn/courses">COURSES</Link>{" "}
      <Link className='mt-5 mx-5 bg-blue-300 text-red-800 rounded-md' to="/learn/bundles">BUNDLES</Link>{" "}
      <Outlet></Outlet>
      {/* the nested route components will automatically go in outlet..it's like a water pipe..where we want to open it depends upon us..the nested components of learn will be displayed in outlet */}
    </>
  )
}
function Courses(){

  const courseList=["REACT","ANGULAR","C++","VUE","HTML","CSS","JavaScript"];
  const randomCourseName=courseList[Math.floor(Math.random()*courseList.length)]
  return(
    <>
      <p>All courses are listed here</p>
      <NavLink
      style={({isActive})=>{//with this we can pass CSS properties to the link which is active...Link doesn't give this feature
        return{
          backgroundColor:isActive?"green" : "red"
        }
      }}
      to={`/learn/courses/${randomCourseName}`}
      >
      {randomCourseName}
      </NavLink>

      <NavLink
      style={({isActive})=>{//with this we can pass CSS properties to the link which is active.
        return{//it's an object...so we need to use { } while returning 
          backgroundColor: isActive ? "green" : "red"
        }
      }}
      className="mx-10" 
      to={`/learn/courses/tests`}>
      TESTS
      </NavLink>
      {/* advantage of NavLink is that it gives us isActive property(for CSS)...rest is same as of Link To */}
      <Outlet></Outlet> 
    </>
  )
}
function Bundles(){
  return(
    <>
      <p>All bundles are listed here</p>
    </>
  )
}
function Dashboard(){
  const location=useLocation();//it is used to get the info which was passed with Navigate
  return(
    <>
      <p>Info which is received is :- --{location.state}--</p>
                                        {/* retriving info */}
    </>
  )
}
function CourseID(){
  const {courseID} = useParams();
  //to get values from the URL...this variable value should match with the route path
  // The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.
  //The react-router-dom package has useParams hooks that let you access the parameters of the current route.

  const navigate = useNavigate();
  //we can use onclick for navigation also with the help of useNavigate hook
  return(
    <>
      <h1 className='text-4xl'>URL Param is : {courseID}</h1>
      <button 
      onClick={()=>{
        //we can use onclick for navigation also with the help of "useNavigate" hook..it also accepts 2nd parameter for passing some info with state variable.
        navigate("/dashboard" , {state : "299"})//here we are passing info in state
      }}
      className='bg-orange-500 rounded-lg mx-10'>PRICE</button>
    </>
  )
}