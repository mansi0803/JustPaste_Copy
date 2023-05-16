import React from 'react' ;
import "./styles.css";
function Mainbody(){
  return <div className="content"> 

   <div  className="mainbox">

<div className="cont1"><div className="cont1div">You are going to leave JustPaste.it</div></div>

<div className="cont2">
  <div className="cont2div1">
  You have clicked a link that will redirect you outside JustPaste.it:
  </div>
  <div className="cont2div2">
 <div className="cont2div2div1"> <a href="https://legacy.reactjs.org/docs/components-and-props.html">https:/reactjs.org/component-and-props.html</a>
  </div></div>
  </div>
<div className="cont3">
  <div className="cont3div">
  Warning! It looks like you came here from different page. Verify link above before continuing.
  </div>
</div>

<div className="cont4">

<label className ="input_val">Skip this message next time</label>

</div>

<div className="cont5">
<div className="cont5div1">
  <div className="button3">
  <button  type="button">Back to Article</button> 
  </div>
  <div className="button4">
  <button type="button">Continue</button> 
    </div>
  </div>

</div>

   </div>

 
   </div>
}
 
export default Mainbody