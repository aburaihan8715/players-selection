import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import './PlayersInfo.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const PlayersInfo = (props) => {

    const Button = () => {}
    const {name, salary, img} = props.playerInfo;
    return (
        <div className="players_info_two">
            <div className="players_img">
                <img src={img} alt=""/>
            </div>
            <div className="players_description">
                <h3>Name : {name}</h3>
                <h3>Salary : ${salary}</h3>
                <button 
                    className="add_team_btn btn btn-primary"
                    onClick={() => props.handleAddToTeam(props.playerInfo)}
                    >
                        <FontAwesomeIcon icon={faPlusSquare} />add to team
                    </button>
            </div>
        </div>
    );
};

export default PlayersInfo;