import { useState, useRef } from 'react';
import dice1 from '../../images/dado1.svg';
import dice2 from '../../images/dado2.svg';
import dice3 from '../../images/dado3.svg';
import dice4 from '../../images/dado4.svg';
import dice5 from '../../images/dado5.svg';
import dice6 from '../../images/dado6.svg';

import './index.css'

function Dices() {
    const [result, setResult] = useState('Clique no botão abaixo para iniciar');
    const [history, setHistory] = useState([])

    const user1 = useRef(null);
    const user2 = useRef(null);
    const resultDice = useRef(null);
    const titleHistoryResult = useRef(null);

    let diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

    const roll = () => {

      const firstRandomNum = Math.floor(Math.random()*6);
      const secondRandomNum = Math.floor(Math.random()*6);


      if (firstRandomNum > secondRandomNum){
        setResult(`O vencedor foi o jogador 1 com ${firstRandomNum + 1} pontos`);
        setHistory([
          ...history,
          {
            id: history.length,
            value: `Jogador 1 venceu com ${firstRandomNum + 1} pontos`,
          },
        ]);
      } else if (firstRandomNum < secondRandomNum){
        setResult(`O vencedor foi o jogador 2 com ${secondRandomNum + 1} pontos`);
        setHistory([
          ...history,
          {
            id: history.length,
            value: `Jogador 2 venceu com ${secondRandomNum + 1} pontos`,
          },
        ]);
      } else{
        setResult(`Deu empate!`);
        setHistory([
          ...history,
          {
            id: history.length,
            value: `Deu empate! Ambos jogadores ficaram com ${firstRandomNum + 1} ponros`
          }
        ])
      }
      user1.current.setAttribute('src', diceImages[firstRandomNum]);
      user1.current.setAttribute('src', diceImages[secondRandomNum]);
    };

    const reset = () => {
      setHistory([]);
    };
  
    return (
      <>
    <div className='dice-wrapper'>
      <div className='dice-area'>
        <p>Jogador 1</p>
        <img src={dice1} ref={user1} alt='Dice' />
    </div>
    <div className='dice-area'>
      <p>Jogador 2</p>
      <img src={dice1}  ref={user2} alt='Dice' />
    </div>
    </div>
    <p className='result' ref={resultDice}> {result} </p>
    <button onClick={roll} className='btn'> Rolar os dados </button>
    <button onClick={reset} className='btn reset'> Limpar </button>
    <h2 ref={titleHistoryResult}> Histórico </h2>
    <ul>
      {history.map((item) => (
        <li key={item.id}> {item.value} </li>
      ))}
    </ul>
    </>
  );
}

export default Dices