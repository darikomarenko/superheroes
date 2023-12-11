import React from 'react';

function Card(props) {
    return (
        <span className="card">
                <h3 className="card-title">Имя:{props.name}</h3>
                <h4 className="card-universe">Вселенная:{props.universe}</h4>
                <p className="card-job">Занятие:{props.occupation}</p>
                <p className="card-friends">Друзья:{props.friends}</p>
                <p className="card-powers">Суперсилы:{props.superpowers}</p>
                <img src={props.url} alt={props.info}/>
        </span>
    );
}

export default Card;