import React from 'react';
import {Outlet} from 'react-router-dom'
function Home() {
    return (
        <div className="container">
            <h1 className="mt-5">Welcome to MyApp</h1>

            {/* <p>This is the home page.</p> */}
            <img src="https://th.bing.com/th/id/OIP.-vX128VI_j-j8-QOue1kugHaDt?w=346&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7" style={{"height":"350px","margin":"auto","display":"block"}}/>
        </div>
    );
}

export default Home;
