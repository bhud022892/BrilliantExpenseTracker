import React from 'react';
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    ForgotPassword,
    SignUpRoute
} from './SigninElements';

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>Brilliant</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign In To Your Account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <ForgotPassword
                            to='#'
                            >Forgot Password</ForgotPassword>
                            <FormButton type='submit'>Continue</FormButton>
                            <SignUpRoute
                            to='/signup'
                            >Don't Have An Account?</SignUpRoute>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default SignIn;
