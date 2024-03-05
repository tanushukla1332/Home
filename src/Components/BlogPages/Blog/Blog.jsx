import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import Section from '../Section/Section';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router';


export default function BlogMain() {
    const navigtae=useNavigate()

    return (
        <>
        <Helmet>
        <title>Blogs Page</title>
        <meta
        name="Blog page"
        content="This is my Blog page"
         />

        </Helmet>
        <Banner/>
        <Section onClick={()=>navigtae('/firstBlog')}/>


           
        </>
    );
}
