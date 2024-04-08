import React, { useEffect, useRef, useState } from 'react';
import "./nav.css";
import logo from "../img/output-onlinepngtools.png";
import Banner from '../banner/Banner';
import About from '../About/About';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';


const Nav = () => {
  const [show, handleShow] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 500) {
				handleShow(true);
			} else handleShow(false);
		});
		// return () => {
		// 	window.removeEventListener("scroll");
		// };
	}, []);


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Detect screen size change for responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 995) {
        setIsOpen(false); // Close list on resize to larger screen
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);



  // Create refs
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    console.log('ref.current:', ref.current); // Log the ref value

    if (ref.current) {
      const element = ref.current;
      const elementPosition = element.offsetTop;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    } else {
      console.error('Ref not found:', ref);
    }
  };

  return (
    <>
    <section className='w-100%'>
      <div className={`nav ${show && "nav__black"}`}>

        <div className="logo col-10 col-lg-5 col-xl-6">
          <img src={logo} alt="logo" />
        </div>

      
        <div className="icon  col-2  " onClick={toggleMenu} >
          <DensityMediumIcon fontSize='large' />
        </div>

        <div className="nav__link col-12 col-lg">

            <ul className={`navbar-list row col-12 ${isOpen ? 'show' : ''}`}>

            <li className='col-10 col-lg'> <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}> HOME</a></li>
            <li className='col-10 col-lg'><a  onClick={(event) => {
            event.preventDefault();
            scrollToSection(aboutRef);
            }}>ABOUT</a></li>

            <li className='col-10 col-lg'><a  onClick={(event) => {
            event.preventDefault();
            scrollToSection(servicesRef);
            }}>SERVICES</a></li>
            <li className='col-10 col-lg'><a onClick={(event) => {
            event.preventDefault();
            scrollToSection(portfolioRef);
            }}>PORTFOLIO</a></li>
            <li className='col-10 col-lg' ><a onClick={(event) => {
            event.preventDefault();
            scrollToSection(contactRef);
            }}>CONTACTS</a></li>
            </ul>
          
        </div>
        
        </div>
        <Banner />
        <About ref={aboutRef} />
        <Services ref={servicesRef} />
        <Portfolio ref={portfolioRef} />
        <Contact ref={contactRef} />
    </section>
   
  </>
  )
}

export default Nav;