import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";

const About = () => {
 
  return(
  <div>
    <div>
    <h3 style={{fontWeight: 'bold', color:"#a64848", fontSize: 35, textAlign:"center"}}><br></br>About </h3>
    <form style={{width:1000, marginLeft:250,}}>
<h4>
  MySociety gave the facility to the seller and buyer of flat where they sell and buy their flat easily and also provide the contact desk where buyer and seller directly raise their issues.
  Where the customers who make a decision to book a tour or rental don’t want to wait until you are in the office — they want to lock in the activity on their own schedule. Using our website MySociety means that your business is open 24 hours a day, seven days a week.
</h4>
<h4>
Our website MySociety, provides a multiple function where the buyer and seller easiler find their destination. Like we have the Contact desk where buyer and seller directly raise their issue and ask their question. 
</h4>
<h4>
  Our website MySociety, reaches all the customers so every customer is important and we also provide the flat in particular area and city so every customer of our websites reaches whenever they wants to move on.
  Mysociety also gave the facility where seller provides the picture of flat and buyer see the picture decide according the desire.
    Our website MySociety, secure their site by cyber crime, you can't enter the site without your login or register youself in the website, if their any type of cyber crime happen we reaches them as soon as possible.</h4> 
  </form>   
    </div>
    <div style={{marginLeft:180}}>
    <img
                      src={"https://img.freepik.com/free-photo/colleagues-giving-fist-bump_53876-64857.jpg?w=360"}
                      alt=""
                      height={120}
                      width={1200}
                    />
    </div>
   </div>
  )
 
 
  
}

export default About;