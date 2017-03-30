/**
 * Created by yaelo on 3/26/17.
 */
import React from 'react'

export default class Greeting extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      isVisible: false,
      people: [
        {
          name: 'John Doe',
          kills: 0
        },
        {
          name: 'Peter Pan',
          kills: 0
        }
      ]
    }

  }

  /*
   constructor() {
   super();
   this.state = {
   people: [{
   name: 'Hillary Clinton',
   age: 69,
   gender: 'female'
   },
   {
   name: 'Bill Clinton',
   age: 70,
   gender: 'male'
   }],
   };
   }

   handleIncrementAge(i) {
   const people = [...this.state.people];
   const person = people[i];

   people[i] = Object.assign({}, person, { age: person.age + 1 });

   this.setState({ people });


   }
   */
  addOne() {

    const people = this.state.people.map((value)=> Object.assign({}, value, { kills: value.kills + 1 }));
    let counter = this.state.counter + 1 ;

    this.setState({people, counter});
  }

  visible() {
    const isVisible = !this.state.isVisible;

    this.setState({isVisible});

  }

  createPepole(){
    return(
      <ul>
        {this.state.people.map((value)=>{
          return <li key={value.name}> {value.name} {value.kills}</li>
        })}
      </ul>
    )
  }

  render() {

    const iTry = this.state.isVisible;
    console.info(iTry);

    (iTry)
      ? console.info('its closing!')
      : console.info('its opening!');
    //iTry = false

    let btnStyle = {
      display: 'block',
      marginTop: 10 +'px'
    };

    let counterBtnStyle = {
      marginLeft: 10 +'px'
    };


    let isVisibleTxt = 'close counter';
    let counter = <span>counter {this.state.counter}</span>;
    let counterBtn = <button onClick={ () => this.addOne() } style = { counterBtnStyle }>plus one!</button>;


    if(!this.state.isVisible){
      console.info('rendering');
      counter = null;
      counterBtn = null;
      isVisibleTxt = 'open counter';
    }

    /*

     variablename = (condition) ? value1:value2

     var stop = false, age = 23;

     age > 18 ? (
     alert('OK, you can go.'),
     location.assign('continue.html')
     ) : (
     stop = true,
     alert('Sorry, you are much too young!')
     );
     */
    // var elvisLives = Math.PI > 4 ? 'Yep' : 'Nope';

    return (
      <div>
        <p>Hi, my name is {this.props.data.name}, my age is {this.props.data.age} and If fits i sits</p>
        {counter}
        {counterBtn}
        <button onClick={ () => this.visible() } style = { btnStyle }>{isVisibleTxt}</button>
        {this.createPepole()}
      </div>
    )
  }
}

/*
 const divStyle = {
 color: 'blue',
 backgroundImage: 'url(' + imgUrl + ')',
 };

 function HelloWorldComponent() {
 return <div style={divStyle}>Hello World!</div>;
 }
 */
/*



 render() {
 const isLoggedIn = this.state.isLoggedIn;

 let button = null;
 if (isLoggedIn) {
 button = <LogoutButton onClick={this.handleLogoutClick} />;
 } else {
 button = <LoginButton onClick={this.handleLoginClick} />;
 }

 return (
 <div>
 <Greeting isLoggedIn={isLoggedIn} />
 {button}
 </div>
 );
 }
 }
 */
/*
 const people = this.state.people;

 people[i].age++;

 this.setState({ people });
 */

//create const
/*
 export default function Greeting(props){
 console.info(props.data);
 return (
 <div>
 <p>Hi, my name is {props.data.name}, my age is {props.data.age} and If fits i sits</p>
 <span>counter{props.data.counter}</span>
 <button onClick={props.data.func}>plus one!</button>
 </div>
 )
 }





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
