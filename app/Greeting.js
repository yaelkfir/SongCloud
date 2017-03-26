/**
 * Created by yaelo on 3/26/17.
 */
import React from 'react'


export default function Greeting(props){
  console.info(props.data);
  return (
    <div>
      <p>Hi, my name is {props.data.name}, my age is {props.data.age} and If fits i sits</p>
      <button onClick={props.data.func}>Woohoo!</button>
      <img src="http://moderndogmagazine.com/sites/default/files/images/articles/top_images/DogIfItFits.JPG" alt=""/>
    </div>
  )
}


//create const
/*
 export default function PersonComponent(props) {
 return <form>
 <label>
 <input type="radio" name="gender" checked={ props.gender === 'female' } value="female"
 onChange={ () => props.changeGender('female') } />
 Female
 </label>
 <label>
 <input type="radio" name="gender" checked={ props.gender === 'male' } value="male"
 onChange={ () => props.changeGender('male') } />
 Male
 </label>
 <input type="button" value={ props.decrementText || '-' } onClick={props.decrementAge}></input>
 <span>{props.age}</span>
 <input type="button" value={props.incrementText || '+'} onClick={props.incrementAge}></input>
 </form>;
 }

 export default function Numeric(props) {
 return <div>
 <input type="button" value={ props.decrementText || '-' }></input>
 <span>{props.value}</span>
 <input type="button" value={ props.incrementText || '+' }></input>
 </div>;
 }

 ReactDOM.render(<Numeric incrementText="inc" decrementText="dec" value={4} />, document.getElementById('root'));

 */
