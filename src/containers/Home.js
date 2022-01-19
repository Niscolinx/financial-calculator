import React from 'react'

import Main from '../components/Main'
import '../styles/styles.css'

function Layout() {
    return (
        <div className='h-screen overflow-x-hidden justify-items-center'>
            <div className='grid w-full md:mx-auto'>
                
                <div className=' mx-auto my-9'>
                    <Main />
                </div>
               
            </div>
        </div>
    )
}

export default Layout
