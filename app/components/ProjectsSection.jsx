import React from 'react'
import ProjectCard from './ProjectCard'
const projectsData = [
    {
        id: 1,
        title: "Tic Tac Toe Online game",
        description: "Two players are able to play this game.",
        image: "/Images/projects/TicTacToe.png",
        gitUrl: "https://github.com/poojasounder/Tic-Tac-Toe",
        previewUrl: "/"
    }
]
const ProjectsSection = () => {
  return (
    <section id = "projects"><h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        My Projects
    </h2>
    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {projectsData.map((project) => (
        <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image} 
            gitUrl = {project.gitUrl}
            previewUrl = {project.previewUrl}
            
            />
        ))}
    </div>
    </section>
  )
}

export default ProjectsSection