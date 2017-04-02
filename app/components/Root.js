/**
 * Created by yaelo on 3/28/17.
 */
import Greeting from './Greeting'
/*

this is useless but good reference func in reatc
 <Greeting data={data}
 />

 const data = {
 name:"Mr.Dog",
 age:"4",
 };

 */


/*
 export default function App() {
 return <BrowserRouter>
 <div>
 <NavBarComponent />
 <Switch>
 <Route exact path="/" component={ PeopleListComponent } />
 <Route path="/about" component={ AboutUsComponent } />
 <Route component={ Oops } />
 </Switch>
 </div>
 </BrowserRouter>;
 }

 */



import Player from './Player'
import PlayLists from './PlayLists'
import Explore from './Explore'
import Topbar from './Topbar'
import Signup from './Signup'
import Signin from './Signin'

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

export default function Root() {

  return (
    <BrowserRouter>
    <div className="app-wraper">
      {/*<Signup/>*/}
      {/*<Signin/>*/}

      <Topbar/>

      <main>
        <Switch>
          <Route exact path="/" component={()=>(<Redirect to="/explore/trance"/>)}/>
          <Route exact path="/explore" component={()=>(<Redirect to="/explore/trance"/>)}/>
          <Route path="/explore/:genre" component={ Explore } />
          <Route path="/playlists" component={ PlayLists } />
        </Switch>
      </main>
    </div>
    </BrowserRouter>
  );
}


