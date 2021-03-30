import React from 'react';
import profile1 from '../../img/profile1.jpg';
import profile2 from '../../img/profile2.jpg';
import profile3 from '../../img/profile3.jpg';
import {
    TestimonialsContainer,
    TestimonialsWrapper,
    TestimonialsCard,
    TestimonialsPhoto,
    TestimonialsH1,
    TestimonialsH2,
    TestimonialsP
} from './TestimonialElements';

const Testimonials = () => {
    return (
        <>
            <TestimonialsContainer id="testimonials">
                <TestimonialsH1>Testimonials</TestimonialsH1>
                <TestimonialsWrapper>
                    <TestimonialsCard>
                        <TestimonialsPhoto src={profile1} />
                        <TestimonialsH2>Mary B.</TestimonialsH2>
                        <TestimonialsP>"Say goodbye to difficult to use excel spreadsheets and say hello to Brilliant."</TestimonialsP>
                    </TestimonialsCard>
                    <TestimonialsCard>
                        <TestimonialsPhoto src={profile2} />
                        <TestimonialsH2>James W.</TestimonialsH2>
                        <TestimonialsP>"Before Brilliant, I was using pen and paper to track my expenses. Brilliant has made it much easier for me!"</TestimonialsP>
                    </TestimonialsCard>
                    <TestimonialsCard>
                        <TestimonialsPhoto src={profile3} />
                        <TestimonialsH2>Samantha R.</TestimonialsH2>
                        <TestimonialsP>"Brilliant has truly changed the way I track my day to day expenses."</TestimonialsP>
                    </TestimonialsCard>
                </TestimonialsWrapper>
            </TestimonialsContainer>
        </>
    )
}

export default Testimonials

