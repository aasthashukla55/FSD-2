import {BrowserRouter,Routes,Route,Link,useLocation,matchPath} from 'react-router-dom';
import Home from './Home.jsx';
import Formc from './Form.jsx';
import { Container } from '@mui/material';

const SinglePageApp = ()=>{

    return(
        <BrowserRouter>
        <Container maxWidth='sm' component={'nav'} sx={{border:'2px solid red' ,textAlign:'center',mb:2}}>
       <nav>
        <Link to='/Home' >Home</Link> | {" "}
        <Link to='/'>Form</Link>
       </nav>
       </Container>
        <Routes>
            <Route path="/Home" element={<Home />}/>
            <Route path="/" element={<Formc />} />
        </Routes>
        </BrowserRouter>
    )

}

export default SinglePageApp;