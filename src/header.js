import React from 'react' ;
import "./styles.css";
function Header(){
  return <div className="heading"> 
  <div className="logo">
    <img  src='https://justpaste.it/static/img/jp_logo_v3.svg' />
  </div>

  <div className="logo_button">
   <div  classname="button1"> <button classname="button1_1" type="button">🖍Add</button>  
   </div >
    <div  classname="button1"> <button classname="button2" type="button">‍️Account</button>  
</div>
  </div>
   </div>
}
 
export default Header 