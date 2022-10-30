import React from 'react';
import ProjectCards from '../../components/Project';
import portfolio from '../../portfolio.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function Wrapper(props) {
    return < div className='wrapper'>{props.children}</div>;
}

function Portfolio() {
    return(
        <section className='container'>
            <div className='project'> 
           <h2 className='portfolio-title'> Portfolio</h2>
           <hr></hr>
            </div>

            <Wrapper id='card-content'>
                {portfolio.map((project)=>(
                    <ProjectCards key={project.id} image={project.image} github={project.github} deploy={project.deploy} topics={project.topics}/>
                ))}
            </Wrapper>
        </section>
    )
}

export default Portfolio;