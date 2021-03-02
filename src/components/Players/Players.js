import React, { useEffect, useState } from 'react';
import './Players.css'
import playersData from '../../playersData/playersData.json';
import PlayersInfo from '../PlayersInfo/PlayersInfo';
import BudgetCart from '../BudgetCart/BudgetCart';

const Players = () => {
   const [players, setPlayers] = useState([]);
   useEffect(() => {
       setPlayers(playersData);
   },[])

   const [cart, setCart] = useState([]);

   const handleAddToTeam = (playerInfo) => {
       const newCart = [...cart, playerInfo];
       setCart(newCart);
   }

    return (
        <div className="players_container">
            <div className="players_info">
                {
                    players.map(player => <PlayersInfo 
                        playerInfo={player}
                        handleAddToTeam = {handleAddToTeam}
                        ></PlayersInfo>)
                } 
            </div>
            <div className="budget_cart">
                <BudgetCart cart={cart}></BudgetCart>
            </div>
        
        </div>
    );
};

export default Players;