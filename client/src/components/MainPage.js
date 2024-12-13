import Header from './Header';
import Home from './Home';
import Academics from './Academics';
import Accommodation from './Accommodation';
import Finance from './Finance';
import Counseling from './Counseling';

function MainPage () {
    return(
        <>
        <Header/>
        <div>
        <Route path="/dashboard" component={Home} />
        <Route path="/profile" component={Home} />
        <Route path="/inbox" component={Home} />
        <Route path="/calendar" component={Home} />
        <Route path="/help" component={Home} />
        </div>
        <div>
        <Route path="/admission" component={Academics} />
        <Route path="/course registration" component={Academics} />
        <Route path="/courses" component={Academics} />
        <Route path="/schedule" component={Academics} />
        <Route path="/Thesis" component={Academics} />
        <Route path="/studentresults" component={Academics} />
        <Route path="/rules & regulations" component={Academics} />
        </div>
        <Accommodation/>
        <Finance/>
        <Counseling/>
        </>
    )
}
export default MainPage;