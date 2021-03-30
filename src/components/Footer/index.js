import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                    <FooterLink to="#">Account</FooterLink>
                                    <FooterLink to="#">Careers</FooterLink>
                                    <FooterLink to="#">Download</FooterLink>
                                    <FooterLink to="#">Terms & Conditions</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                    <FooterLink to="#">Company</FooterLink>
                                    <FooterLink to="#">Contact</FooterLink>
                                    <FooterLink to="#">Location</FooterLink>
                                    <FooterLink to="#">Support</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Help</FooterLinkTitle>
                                    <FooterLink to="#">Chat</FooterLink>
                                    <FooterLink to="#">FAQ</FooterLink>
                                    <FooterLink to="#">Instructions</FooterLink>
                                    <FooterLink to="#">Videos</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>News & Events</FooterLinkTitle>
                                    <FooterLink to="#">Blog</FooterLink>
                                    <FooterLink to="#">Past Events</FooterLink>
                                    <FooterLink to="#">Today's Tip</FooterLink>
                                    <FooterLink to="#">Upcoming Events</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>Brilliant</SocialLogo>
                            <WebsiteRights>Brilliant &copy; {new Date().getFullYear()} All Rights Reserved</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="#" target="_blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href="#" target="_blank" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href="#" target="_blank" aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href="#" target="_blank" aria-label="YouTube">
                                    <FaYoutube />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    );
};

export default Footer;
