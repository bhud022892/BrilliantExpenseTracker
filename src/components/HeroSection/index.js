import React, { useState } from 'react';
import {
    HeroContainer,
    HeroContent,
    HeroTitle,
    TitleSpan,
    HeroTagline,
    Span1,
    Span2,
    HeroBtnWrapper,
    ArrowRight,
    ArrowForward,
    SignupLink
} from './HeroElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <HeroContainer id="home">
            <HeroContent>
                <HeroTitle>Expense Tracking... <TitleSpan>Simplified</TitleSpan></HeroTitle>
                <HeroTagline>Say <Span1>goodbye</Span1> to the old ways of tracking your finances and say <Span2>hello</Span2> to Brilliant.</HeroTagline>
                <HeroBtnWrapper>
                    <SignupLink
                    to='/signup'
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    >
                    Start Tracking { hover ? <ArrowForward /> : <ArrowRight /> }       
                    </SignupLink>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
