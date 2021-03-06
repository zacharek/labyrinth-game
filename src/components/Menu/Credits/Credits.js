import React, {Component} from "react";
import './Credits.scss'

class Credits extends Component{
    render() {
        return(
            <div className="credits__box">
                <h2>CREDITS</h2>
                <div className="list">
                    <div>Project made by <a href="https://github.com/zacharek">zacharek</a></div>
                    <div>Icons made by <a href="https://www.flaticon.com/authors/zlatko-najdenovski" title="Zlatko Najdenovski">Zlatko Najdenovski</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    <a href="https://www.vecteezy.com/">Vectors by Vecteezy</a>
                    <div>ArcadeClassic font is copyright (c) Jakob Fischer at www.pizzadude.dk,  all rights reserved.</div>
                    <div>Textures of rock and exit are based on the ones from The Binding of Isaac: Rebirth</div>
                </div>
                <div className="button" onClick={this.props.handleCredits}>CLOSE</div>
            </div>
        )
    }
}
 export default Credits;