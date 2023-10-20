"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import TAB_DATA from '../utils/TabData'

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }

    return (
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap:16 sm:py-16 xl:py-16">
                <Image src={"/images/about-section.png"} width={500} height={500} alt={"about-section"}/>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
                    <p className="text-base lg:text-lg">{`I am Fabrizio, a dedicated fullstack developer with a passion for details and a results-driven mindset.
                        I thrive on challenges and love working collaboratively as a team player.
                        My skill set includes React, Next.js, JavaScript, TypeScript, Redux, Node.js, Express, PostgreSQL, Sequelize, Git, HTML, CSS, and a willingness to learn new technologies.
                        I am also well-versed in Scrum methodologies. Let's work together to create exceptional solutions!`}
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === 'skills'}>
                            Skills
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === 'education'}>
                            Education
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === 'certifications'}>
                            Certifications
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection