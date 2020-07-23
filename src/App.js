import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import CheckoutPage from './pages/checkoutpage/checkout-page.component';
import ContactPage from './pages/contact/contact-page.component';
import HomePage from './pages/homepage/homepage.component';
import NotFoundPage from './pages/notfound/notfound.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up-page.component';
import { setCurrentUser } from './redux/user/user.action';

// function App() {
//   const [currentUser, setCurrentUser] = useState(null);
//   const unsubscribeFromAuthRef = useRef(null);

//   // func onChangeState when login with gg account and update state
//   function onAuthStateChange() {
//     return auth.onAuthStateChanged(async userAuth => {
//       console.log("userAuth", userAuth);

//       if (userAuth) {
//         const userRef = await createUserProfileDocument(userAuth);
//         userRef.onSnapshot(snapShot => {
//           setCurrentUser({
//             id: snapShot.id,
//             ...snapShot.data()
//           })
//         })
//       }
//     });
//   }


//   useEffect(() => {
//     unsubscribeFromAuthRef.current = onAuthStateChange()
//     return () => {
//       unsubscribeFromAuthRef();
//     }
//   }, []);


//   console.log("currentUser", currentUser);
//   return (
//     <div className="App" >
//       <Header currentUser={currentUser} />
//       <Switch>
//         <Route exact path="/" component={HomePage} />
//         <Route path="/shop" component={ShopPage} />
//         <Route path="/signin" component={SignInSignUpPage} />
//         <Route exact path="" component={NotFoundPage} />
//       </Switch>
//     </div>
//   );
// }



class App extends Component {

  unsubcribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data());
          setCurrentUser(
            {
              id: snapShot.id,
              ...snapShot.data()

            }
          )
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }
  componentWillUnmount() {
    this.unsubcribeFromAuth();
    console.log("unmounted");
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={ContactPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInSignUpPage />)} />
          <Route exact path="" component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => {
      dispatch(setCurrentUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
