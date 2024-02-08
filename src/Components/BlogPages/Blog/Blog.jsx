import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import Section from '../Section/Section';
import { useNavigate } from 'react-router';


export default function BlogMain() {
    const navigtae=useNavigate()

    return (
        <>
        <Banner/>
        <Section onClick={()=>navigtae('/firstBlog')}/>


           
        </>
    );
}
