'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, ButtonGroup } from "@nextui-org/button";

import heroStyles from './styles/hero-section.module.css'


export default function HeroSection() {



    return (
        <div className={heroStyles.mainContainer}>
            <div className={heroStyles.subContainerLeft}>
                <div className={heroStyles.titleText}>
                    <div className={heroStyles.titleTextPartOne}>
                        Lorem Ipsum,
                    </div>
                    <div className={heroStyles.titleTextPartTwo}>
                        Pellentesque
                        Suspit.
                    </div>

                    <div className={heroStyles.heroDescription}>

                        <div className={heroStyles.heroDescriptionText}>
                            Steer your future with our cutting-edge consulting services, where today's innovations shape the leadership strategies driving your business to the forefront of tomorrow.
                        </div>
                    </div>

                    <div className={heroStyles.heroButtons}>

                        <Button className={heroStyles.buttonOne}>
                            Our Services
                        </Button>

                        <Button className={heroStyles.buttonTwo}>
                            Our Services
                        </Button>
                    </div>

                </div>





            </div>
            <div className={heroStyles.subContainerRight} >
                {/* <Image
                    src= "/hero-1.png"
                    alt="Descriptive text for screen readers"
                    width={500}
                    height={300}
                    layout="responsive"
                /> */}
            </div>
        </div>
    );
}