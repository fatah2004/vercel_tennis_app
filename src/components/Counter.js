import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css'
import audio2 from "../assets/audio2.mp3"
import audio1 from "../assets/audio3.mp3"
import applause from "../assets/applause.mp3"
import { increment1, increment2, makepause ,restart} from '../redux/actions';
import React, { useState } from 'react';
import store from '../redux/store';
import './counter.css'

// components/Counter.js


const Counter = ({ paused,cpt1,cpt2, incrementer1, incrementer2,makepause ,restart  }) => {
const [won,setwon] = useState(false);
const [winner,setWinner] = useState();
  console.log(store.getState());
  function inc1(){
    new Audio(audio2).play();
    incrementer1()
  }
  function inc2(){
    new Audio(audio1).play();
    incrementer2()
  }
  const output=()=>{
  if(won){

    return(<>
  {winner}
    </>)
  }else{
    if(cpt1<=45 && cpt2<=45){
      if(cpt1===cpt2 && cpt1 !=0 ){
        return(
        <>Draw</>
        )}else{
          return(
            <>{cpt1}-{cpt2}</>      
            )
          }
    }else{
  
      if(cpt1===cpt2){
        return(<>
          Draw
          </>)
      }else if(cpt1-cpt2==15){
        return(<>
        Player one advantageous
        </>)
      }else if(cpt2-cpt1==15){
        return(<>
        Player two advantageous
        </>)
      }else if(cpt1-cpt2>=30){
        setwon(true)
        setWinner('Player One won!')

        new Audio(applause).play();
        
      }else if(cpt2-cpt1>=30){
        setwon(true)
        setWinner('Player Two won!')
        new Audio(applause).play();
      }
    }
  }
}
return (
  <div className='container'>
  <h1>{output()}</h1>
      <button className='btn btn-primary m-3' onClick={paused===true && won===false? inc1:null}>Player one</button>
      <button className='btn btn-primary m-3' onClick={paused===true && won===false? inc2:null}>Player two</button><br/>
      <button className={`${paused ?'btn btn-light m-3':'btn btn-dark m-3 paused'}`}  onClick={makepause}>Pause</button>
      <button className='btn btn-light m-3' onClick={()=>{
        restart()
        setwon(false)
      }}>restart</button>
    </div>
  );
};

// mapStateToProps function with ownProps
const mapStateToProps = (state,ownProps) => {
 
  return {
    cpt1: state.compteur1,
    cpt2: state.compteur2,
    paused: state.paused,

  };
};

// mapDispatchToProps to dispatch actions
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    incrementer1: () => dispatch(increment1()),
    incrementer2: () => dispatch(increment2()),
    makepause: () => dispatch(makepause()),
    restart: () => dispatch(restart()),
  };
};

// Connect the component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
