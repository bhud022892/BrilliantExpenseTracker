import styled from 'styled-components';

export const TestimonialsContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f2f2f2;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        height: 1200px;
    }

    @media screen and (max-width: 480px) {
        height: 1500px;
    }
`;

export const TestimonialsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 50px 20px;
    }
`;

export const TestimonialsCard = styled.div`
    background: #3f4243;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const TestimonialsPhoto = styled.img`
    height: 160px;
    width: auto;
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const TestimonialsH1 = styled.h1`
    font-size: 2.5rem;
    color: #a2c5c1;
    margin-bottom: 20px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const TestimonialsH2 = styled.h2`
    font-size: 1rem;
    color: #a2c5c1;
    margin-bottom: 10px;
`;

export const TestimonialsP = styled.p`
    font-size: 1rem;
    text-align: center;
    color: #f2f2f2;
`;