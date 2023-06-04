import React from 'react'
import './Navbar.css'

export default function Navbar(props) {
  return (
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
        
        
        
        <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} text-${props.mode==='light'?'dark':'light'} `}>
            <div className="nav-wrapper">
                <label className="brand-logo">Text Analyzer</label>
                <ul>
                    <a href="#" className={`active text-${props.mode==='light'?'dark':'light'}`}>Home</a>
                    <a href="/about" className={` text-${props.mode==='light'?'dark':'light'}`}>About</a>
                    <a href ="#" className={` text-${props.mode==='light'?'dark':'light'}`} >FAQ</a>
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                        <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>

                </ul>
            
            </div>
        </nav>
    </div>

  )
}
