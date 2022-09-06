import React from 'react';
import  ReactDOM from 'react-dom/client';
import './index.css';

class SquareBtn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:null,
        };
    }
    render(){
        return(
            <button className='squareBtn' 
            onClick={() => this.setState({value :'X'})}>
                {this.state.value}
            </button>
        );
    }
}

class GameBoard extends React.Component{
    renderButton(i){
        return <SquareBtn value={i}/>
    }
    render(){

        const status = "Next player : X";

        return(
            <div className='gameBoard'>
                <div className='status'>{status}</div>
                <div className='gameBoardRow'>
                    {this.renderButton(0)}
                    {this.renderButton(1)}
                    {this.renderButton(2)}
                </div>
                <div className='gameBoardRow'>
                    {this.renderButton(3)}
                    {this.renderButton(4)}
                    {this.renderButton(5)}
                </div>
                <div className='gameBoardRow'>
                    {this.renderButton(6)}
                    {this.renderButton(7)}
                    {this.renderButton(8)}
                </div>

            </div>
        );
    }
}

class Tic_tac_toe_board extends React.Component{
    render(){
        return(
            <div className='TheGame'>
                <div className='Game'>
                    <GameBoard />
                </div>
                <div className="game-info">
                <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
            
        );
    }
}
  
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Tic_tac_toe_board />);
  
