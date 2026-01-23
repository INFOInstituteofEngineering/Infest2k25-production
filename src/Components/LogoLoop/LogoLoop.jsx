import React from 'react';
import './LogoLoop.css';
import EleczaLogo from '../../assets/logos/elecza.png';
import ElcostaLogo from '../../assets/logos/elcosta.png';
import InfinitLogo from '../../assets/logos/infinit.png';
import IntelliqLogo from '../../assets/logos/intelliq.png';
import InfomeisterLogo from '../../assets/logos/infomeister.png';
import MechstellarLogo from '../../assets/logos/mechstellar.png';
import CiameeLogo from '../../assets/logos/ciamee.png';
import ManetraLogo from '../../assets/logos/manetra.png';

const logos = [
    { src: EleczaLogo, alt: 'Elecza', text: 'ELECZA - Association of EEE' },
    { src: ElcostaLogo, alt: 'Elcosta', text: 'ELCOSTA - Association of ECE' },
    { src: InfinitLogo, alt: 'Infinit', text: 'INFINIT - Association of IT' },
    { src: IntelliqLogo, alt: 'Intelliq', text: 'INTELLIQ - Association of AI&DS' },
    { src: InfomeisterLogo, alt: 'Infomeister', text: 'INFOMEISTER - Association of CSE' },
    { src: MechstellarLogo, alt: 'Mechstellar', text: 'MECHSTELLAR - Association of MECH' },
    { src: CiameeLogo, alt: 'Ciamee', text: 'CIAMEE - Association of S&H' },
    { src: ManetraLogo, alt: 'Manetra', text: 'MANETRA - Association of MBA' },
];

const LogoLoop = () => {
    return (
        <section className="py-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 logoloop__heading">
                    Our Associations
                </h2>
                <p className="text-gray-400 text-base">Proudly supported by</p>
            </div>

            <div className="logoloop">
                <div className="logoloop__track">
                    {/* First set of logos */}
                    <div className="logoloop__list">
                        {logos.map((logo, index) => (
                            <div key={`first-${index}`} className="logoloop__item">
                                <div className="logoloop__node">
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        loading="lazy"
                                    />
                                    <span className="logoloop__tooltip">{logo.text}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className="logoloop__list">
                        {logos.map((logo, index) => (
                            <div key={`second-${index}`} className="logoloop__item">
                                <div className="logoloop__node">
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        loading="lazy"
                                    />
                                    <span className="logoloop__tooltip">{logo.text}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoLoop;
