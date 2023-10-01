"use client";
import React , {useTransition, useState} from 'react'
import Image from "next/image"
import TabButton from './TabButton';

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  
  const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
  }
  return <section className='text-white'>
    <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gsp-16 sm:py-16 xl:px-16'>
        <Image src="/Images/about-image.jpeg" width={500} height={100}/>
        <div>
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base lg:text-lg'>
                I am going to graduate from Portland State University in June 2024 with BS in Computer Science degree.
                I have experience working with HTML,CSS,JavaScript,Python,PostgreSQL,C++,Next.JS and Git. I am a quick learner 
                and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others 
                to create amaxing applications.
            </p>
            <div className='flex flex-row mt-8'>
                <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>{" "} Skills{" "}</TabButton>
                <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>{" "} Education{" "}</TabButton>
                <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>{" "} Certifications{" "}</TabButton>
            </div>
        </div>
    </div>
</section>
}

export default AboutSection;