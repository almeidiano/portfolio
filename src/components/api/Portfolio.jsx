import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import Skeleton from 'react-loading-skeleton';
import axios from 'axios';
import Tooltip from '@mui/material/Tooltip';
import Title from '../Title';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'react-loading-skeleton/dist/skeleton.css'

export default function Portfolio() {
  const [projects, setProjects] = useState(null);
  const swiperSkeletonRef = useRef();

  useEffect(() => {
    async function getAllProjects() {
      let req = await axios.get("https://almeidiano.dev/allProjects.json");
      setProjects(req.data);
    } 

    getAllProjects();
  }, [])

  const ProjectLoading = () => {
    return (
    // SwiperSlide with skeleton structure
    <SwiperSlide ref={swiperSkeletonRef}> <div className='project'> <div className='project-img'> <div className='project-thumb'>  <Skeleton height={300} width={320} /> </div> </div> <div className='project-info'> <h2 className='project-title'><Skeleton height={25} width={120} /></h2> <p className='project-desc'><Skeleton height={100} width={300} /></p> <div className='project-techs'> <Skeleton height={35} width={35} /> <Skeleton height={35} width={35} /> <Skeleton height={35} width={35} /> <Skeleton height={35} width={35} /> </div> <div className='button-area'> <Skeleton height={45} width={120} /> <Skeleton height={45} width={120} /> </div> </div> </div> </SwiperSlide>
    )
  }

  return (
    <section id='portfolio'>
        <Title title='Portfolio' subtitle='Meus projetos ou experiências mais revelantes' />
        <div className='container-fluid'>
        <Swiper loop={true} navigation={true} pagination={true} modules={[Navigation, Pagination]} className="mySwiper">
        {
            projects === null ? <ProjectLoading />
            :
            projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className='project'>
                  <div className='project-img'>
                    <div className='project-thumb'>
                      <img src={project.thumbImg} />
                    </div>
                  </div>
                  <div className='project-info'>
                    <h2 className='text-2xl font-semibold'>{project.projectName}</h2>
                    <p className='project-desc'>{project.projectDesc}</p>
                    <div className='project-techs'>
                      {
                        project.projectStacks.map((stack) => (
                          <Tooltip title={stack}>
                            <img src={`https://almeidiano.dev/projects/stacks/${stack}.svg`} />
                          </Tooltip>
                        ))
                      }  
                    </div>
                    <div className='button-area'>
                      {project.viaLink[0].demoLink ? <Button href={project.viaLink[0].demoLink} className='main-button' variant="contained" startIcon={<OpenInNewIcon />}>Demo</Button> : <Button disabled className='main-button' variant="contained" startIcon={<OpenInNewIcon />}>Demo</Button>}
                      {project.viaLink[1].githubLink ? <Button href={project.viaLink[1].githubLink} variant='outlined' startIcon={<GitHubIcon />}>GitHub</Button> : <Button disabled variant='outlined' startIcon={<GitHubIcon />}>GitHub</Button>}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )) 
          }
        </Swiper>
        </div>
    </section>
  )
}