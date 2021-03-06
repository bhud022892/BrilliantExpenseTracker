import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    min-height: 100vh;
    background: #3f4243;
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const Icon = styled(Link)`
    margin: 32px auto;
    text-decoration: none;
    color: #f2f2f2;
    font-weight: 700;
    font-size: 32px;
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form`
    background: #a2c5c1;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #202122;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #202122;
`;

export const FormInput = styled.input`
    padding: 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const FormButton = styled.button`
    background: #3f4243;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #f2f2f2;
    font-size: 20px;
    margin-bottom: 32px;
    cursor: pointer;

    &:hover {
        background: #202122;
        transition: all 0.3s ease-in-out;
    }
`;

export const SignInRoute = styled(Link)`
    text-decoration: none;
    text-align: center;
    margin-bottom: 32px;
    color: #202122;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        color: #f2f2f2;
        transition: all 0.3s ease-in-out;
    }
`;



