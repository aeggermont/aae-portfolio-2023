import React from 'react';
import "./portfolio.scss";

import fsReference from '../../firebase';
import { useEffect, useState } from 'react';
import  Project  from './project';

import { collection, where, getDoc, onSnapshot, orderBy, query, deleteDoc, doc } from "firebase/firestore";;

function Portfolio()  {
    const [projects, setProjects] = useState([]);
    const [headers, setHeaders] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState();

    const projectDesc = {
        title: 'Disney A.R. Magic Tours',
        description: 'Enhancing the guests experience when visiting Disney World theme parks by making the environment an attraction itself using Augment Reality.',
        skills: 'iOS, HCI, Figma, ML/CV',
        projectId: 1,
        projectLink: 'http://link1',
        similarProjects: [1, 2],
        index: 1
    };

    console.log('>>> About to get list of projects <<<');

    useEffect(() => {
        const docRef = doc(fsReference, 'projects_page', 'projects');
        getDoc(docRef)
            .then((doc) => {
                setProjects(doc.data());
                setIsLoading(false);
                console.log('>>> projects >>>');
                console.log(doc.data());
            })
            .catch(() => setError('error getting document'));
    },[]);

    if (isLoading) {
        return <p>loading...</p>
    }

    if (hasError) {
        return <p>Has error!</p>
    }

    return (
        <section className='portfolio-header-area'>
            <span className='portfolio-main-header'> Portfolio</span>
            <p className='portfolio-main-summary'> The projects I have developed and collaborate  range from applications development using technologies like Angular, React JS, NodeJs,  and iOS. 
            Design methodologies I employ include Design Thinking, Human Centered Design, and Human Computer Interaction</p>
        
            <Project info= {projectDesc} />

            {/* 
            <Card
                sx={{
                    width: 300,
                    bgcolor: 'initial',
                    boxShadow: 'none',
                    '--Card-padding': '0px',
                }}
                >
                    <Box sx={{ position: 'relative' }}>
                        <AspectRatio ratio="4/3">
                            <figure>
                                <img
                                    src="hq
                                    srcSet="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300&dpr=2 2x"
                                    loading="lazy"
                                    alt="Yosemite by Casey Horner" />
                            </figure>
                        </AspectRatio>
                        <CardCover
                            className="gradient-cover"
                            sx={{
                                '&:hover, &:focus-within': {
                                opacity: 1,
                                },
                                opacity: 0,
                                transition: '0.1s ease-in',
                                background:
                                'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
                            }}>
                       
                            <Box>
                                <Box
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1.5,
                                        flexGrow: 1,
                                        alignSelf: 'flex-end',
                                    }}>
                                    <Typography level="h2" noWrap sx={{ fontSize: 'lg' }}>
                                        <Link
                                            href="#dribbble-shot"
                                            overlay
                                            underline="none"
                                            sx={{
                                                color: '#fff',
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden',
                                                display: 'block',
                                            }}>
                                            Yosemite
                                        </Link>
                                    </Typography>
                                    <IconButton size="sm" color="neutral" sx={{ ml: 'auto' }}>
                                        <CreateNewFolder />
                                    </IconButton>
                                    <IconButton size="sm" color="neutral">
                                        <Favorite />
                                    </IconButton>
                                </Box>
                            </Box>
                        </CardCover>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, mt: 1.5, alignItems: 'center' }}>
                        <Avatar
                            src="https://images.unsplash.com/profile-1502669002421-a8d274ad2897?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
                            size="sm"
                            sx={{ '--Avatar-size': '1.5rem' }}/>

                        <Typography sx={{ fontSize: 'sm', fontWeight: 'md' }}>
                            National Park
                        </Typography>
                        <Chip
                            variant="outlined"
                            color="neutral"
                            size="sm"
                            sx={{
                                borderRadius: 'sm',
                                py: 0.25,
                                px: 0.5,
                            }}>
                            Featured
                        </Chip>
                        <Link
                            href="#dribbble-shot"
                            level="body3"
                            underline="none"
                            startDecorator={<Favorite />}
                            sx={{
                                fontWeight: 'md',
                                ml: 'auto',
                                color: 'text.secondary',
                                '&:hover': { color: 'danger.plainColor' },
                            }}>
                            117
                        </Link>
                        <Link
                            href="#dribbble-shot"
                            level="body3"
                            underline="none"
                            startDecorator={<Visibility />}
                            sx={{
                                fontWeight: 'md',
                                color: 'text.secondary',
                                '&:hover': { color: 'primary.plainColor' },
                                }}>
                            10.4k
                        </Link>
                    </Box>
            </Card>
        */}
        </section>
    );
}

export default Portfolio;