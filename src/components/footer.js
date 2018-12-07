import React from 'react';

class Footer extends React.Component {
  render() {
   return(
     <section id ="footer">
         <div className="copyright-info">
             <p>
                 &copy; {(new Date().getFullYear())} Stamp. All Rights Reserved
             </p>
         </div>
         <div className="footer-menu-container">
             <ul className="footer-menu">
                 <li><a>CONTACT</a></li>
                 <li><a>HELP</a></li>
                 <li><a>TERMS OF USE</a></li>
                 <li><a>PRIVACY POLICY</a></li>
             </ul>
         </div>
     </section>
    )
  }
}

export default Footer;
