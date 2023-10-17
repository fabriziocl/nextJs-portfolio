"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectData from '../utils/ProjectData'
import ProjectTag from './ProjectTag'

const ProjectsSection = () => {
  const [tag, setTag] = useState("All")
  const handleTagChange = (newTag) => {
    setTag(newTag)
  }
  const filteredProjects = ProjectData.filter((project) => 
    project.tag.includes(tag)
  )
  
  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Responsive"
          isSelected={tag === "Responsive"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) =>
          <ProjectCard key={index}
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