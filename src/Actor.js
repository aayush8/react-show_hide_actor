import React from 'react';

const Actor = props => {

    return (
        <div className="col-lg-4 col-md-6">
            <div className="card mb-4">
                <img className="img-fluid card-img-top" src={props.actor.url} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.actor.name}</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    );
}

export default Actor;