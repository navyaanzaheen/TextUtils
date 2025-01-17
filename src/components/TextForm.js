import React,{useState} from 'react'




export default function Textform(props) {

  const [text, setText] = useState('');
  const [whiteSpaceCount, setWhiteSpaceCount] = useState(0);
 
  
  const handleUpClick = () =>{
    
    let newText =text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to upper case","success")
  }


  const clearText = () =>{
       setText("");
       props.showAlert("The text has been cleared","success")
  }

  
  const handleLowClick = () =>{
      
      let newText =text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lower case","success")
    }




const whiteSpaceCharacter = () =>{
let count=0;     
for (let index = 0; index < text.length; index++) {
        if(text[index]===" "){
          count = count+1;
    } 
  }
  setWhiteSpaceCount(count);
  props.showAlert("White spaces has been counted","success")
}
    
  
  


  const handleOnChange = (event) =>{
    
    setText(event.target.value);
  }





  // setText("new Text");
   return (
<> 
 <div className="container"style={{color:props.mode ==='dark'?'white':'#042743'}}>
  <h1 >{props.heading} </h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'grey':'white',color:props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}  >Convert to Upper Case</button>
<button className="btn btn-primary mx-1" onClick={handleLowClick}  >Convert to Lower Case</button>
<button className="btn btn-primary mx-1" onClick={whiteSpaceCharacter}  >Count White Spaces </button>
<button className="btn btn-primary mx-1" onClick={clearText}>Clear Text </button>
</div>

<div className="container my-3" style={{color:props.mode ==='dark'?'white':'#042743'}}>

<h1>Your Text summary</h1>
<p>{text.split(" ").length} words and { text.length} characters</p>

{/* 125 words ko parhney mn aik minute lagta h toh aik word ko kitna time agay ga 1/125 = 0.008 toh iska matlab agar mmein no. of words ko 0.008 se  multiply krdein toh pata chal jayega k total words ko parhney mn kitna time lagayga  */}
<p>{0.008 * text.split(" ").length} minutes read</p>

<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>


<h2>White Space Characters</h2>
      <p>There are {whiteSpaceCount} white space characters in the text.</p>

</div>



</>
  )
}


// website: 1) Text Analyzer  2) word counter 3) convert to upper case online


