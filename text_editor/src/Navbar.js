import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
        <nav>
            <div class="nav-wrapper">
                <label class="brand-logo">Text Analyzer</label>
                <ul>
                
                    <a href="#" class="active">Home</a>
                    <a href="#" class="active">About</a>
                    <a href="#" class="active">FAQ</a>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label class="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
                  </div>

                </ul>
            
            </div>
        </nav>
    </div>

  )
}
