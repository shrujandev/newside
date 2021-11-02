import './App.css';
import Auth from './pages/Auth';
import { GeistProvider, CssBaseline } from '@geist-ui/react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import TopicNews from './pages/TopicNews';
import Article from './pages/Article';
import Explore from './pages/Explore';
import Bookmarks from './pages/Bookmarks';
import Error404 from './pages/Error404';

// import bgSvg from './assets/images/bg.png';
// import bgSvg from './assets/svgs/bg.svg';
import bgSvg from './assets/svgs/bg2.svg';

import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './hooks/ScrollToTop';
// const myTheme = {
//     type: 'Custom',
// };

function App() {
    return (
        <GeistProvider>
            <CssBaseline />
            <Router>
                <ScrollToTop />
                <div
                    className='App'
                    style={{
                        backgroundImage: `url(${bgSvg})`,
                        // width: '100vw',
                        // height: '100vh',
                        backgroundRepeat: 'repeat',
                        backgroundSize: 'cover',
                    }}>
                    <Navbar />
                    <AnimatePresence exitBeforeEnter>
                        <Switch>
                            <Route exact path='/'>
                                <Home />
                            </Route>
                            <Route path='/auth'>
                                <Auth />
                            </Route>
                            <Route path='/me'>
                                <UserProfile />
                            </Route>
                            <Route path='/bookmarks'>
                                <Bookmarks />
                            </Route>
                            <Route path='/explore'>
                                <Explore />
                            </Route>
                            <Route path='/article/:id'>
                                <Article />
                            </Route>
                            <Route path='/topic/:topic'>
                                <TopicNews />
                            </Route>
                            <Route path='*'>
                                <Error404 />
                            </Route>
                        </Switch>
                    </AnimatePresence>
                    <Footer />
                </div>
            </Router>
        </GeistProvider>
    );
}

export default App;
