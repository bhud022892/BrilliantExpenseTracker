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
    SignInRoute
} from './SignupElements';

const SignUp = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>Brilliant</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Register Your Account</FormH1>
                            <FormLabel htmlFor='for'>First Name</FormLabel>
                            <FormInput type='text' required />
                            <FormLabel htmlFor='for'>Last Name</FormLabel>
                            <FormInput type='text' required />
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Submit</FormButton>
                            <SignInRoute
                            to='/signin'
                            >Already Have An Account?</SignInRoute>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default SignUp;
