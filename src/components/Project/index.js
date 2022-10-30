import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectCards(props) {
    return (
        <div className='card'>
            <div className='img-container'>
                <img alt={props.name} src={props.image}/>
            </div>
            <div className='content'>
                <p className='card-title'>{props.name}</p>
                <p class='icons'>
                <a href={props.github}><img class='project-icon' src='https://img.icons8.com/fluent/48/000000/github.png' alt='Github Repo'/></a>
                <a href={props.deploy}><img class='project-icon' src='https://img.icons8.com/fluent/48/000000/domain.png' alt='Live App'/></a>
                </p>
                <p class="topics">
                    ({props.topics})
                </p>
            </div>
        </div>
    );
}

export default ProjectCards;