import React from "react";
import MainView from "./MainView";
import AboutMe from "./AboutMe";
import Work from "./Work";

function App() {
  return(
    <>
    <MainView />
    <AboutMe />
    <Work />
    <footer id="footer"><a name="contact">
        <div id="footer-div1">515.210.4898</div>
        <div id="footer-div2"><a href="mailto:leocdickenson@gmail.com"> leocdickenson@gmail.com </a></div>
        <div id="footer-div1"><a
                href="https://www.linkedin.com/in/leo-dickens-564664226?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNN2ftCBhQKW6PjBcNMN%2FGQ%3D%3D"
                target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
    </a></footer>
<br>
</br>
    </>
  )

}

export default App;
