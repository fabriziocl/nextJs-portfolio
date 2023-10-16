import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectData from '../utils/ProjectData'


const ProjectsSection = () => {
  return (
    <section>
      <h2>My projects</h2>
      <div>
        {ProjectData.map((project) =>
          <ProjectCard key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            gitUrl2={project.gitUrl2}
            videoUrl={project.videoUrl}
            previewUrl={project.previewUrl}
          />)}
      </div>
    </section>
  )
}

export default ProjectsSection