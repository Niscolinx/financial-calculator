import React from 'react'
import {
    Switch,
    Route,
    Redirect,
    withRouter,
} from 'react-router-dom'

import Home from './Home'

function App() {
   

    let AuthGuard = (
        <Switch>
            <Route path='/' exact component={Home} />
            
            <Redirect to='/' />
       
        </Switch>
    )

    return <div className='rootApp'>{AuthGuard}</div>
}

export default withRouter(App)
