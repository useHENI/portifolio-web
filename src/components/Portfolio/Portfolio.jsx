import React from 'react';
import amazon from "./img/amazon.jpg";
import appleb from "./img/apple-bootstrap.jpeg";
import appler from "./img/apple-react.jpeg";
import netflix from "./img/netflix.jpg";
import snake from "./img/snake-game.jpeg";
import zoom from "./img/zoom-node.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Portfolio.css"


const Portfolio = React.forwardRef((props, ref) => {

  return (
    <section ref={ref} className='container'>
        <div className='po-container'>
            <div className='dot'>.</div>
            <div>
                <h2>Recent Works</h2>
            </div>
            <div className='portfolio row'>

                <div className='p1 po col-12 col-sm-10 col-lg-6 col-xl-4' >
                    <div className='poimg'>

                    <div className='gradient'>
                    </div>

                    <img alt="" src={amazon} />
                    </div>

                    <div id='link'>
                    <div className='title'>
                        Amazon Clone
                    </div>
                    <div id='vilink'>
                    <a href="https://github.com/useHENI/Amazon" target="_blank" rel="noreferrer" class="btn">View Code On Github</a>  
                    </div>
                    <div id='vlink'>
                    <a href="https://amazon-build-by-hena.netlify.app/" target="_blank" rel="noreferrer" class="btn">Visit Site</a>
                    </div>
                    </div>
                </div>

                <div className='p2 po  col-12 col-sm-10 col-lg-6 col-xl-4'>
                    <div className='poimg'>

                    <div className='gradient'>
                    </div>

                    <img alt="" src={appler} />
                    </div>

                    <div className='link'>
                    <div className='title'>
                        Apple Website Replica with React
                    </div>
                    <div id='vilink'>
                    <a href="https://github.com/useHENI/Apple" target="_blank" rel="noreferrer" class="btn">View Code On Github</a>  
                    </div>
                    <div id='vlink'>
                    <a href="https://full-stack-apple-clone.netlify.app" target="_blank" rel="noreferrer" class="btn">Visit Site</a>
                    </div>
                    </div>
                </div>

                <div className='p3 po col-12 col-sm-10 col-lg-6 col-xl-4'>
                    <div className='poimg'>
                        <div className='gradient'>
                        </div>
                    <img alt="" src={netflix} />
                    </div>

                    <div id='link'>
                    <div className='title'>
                        Netflix Clone
                    </div>
                    <div id='vilink'>
                    <a href="https://github.com/useHENI/Netflex" target="_blank" rel="noreferrer" class="btn">View Code On Github</a>  
                    </div>
                    <div id='vlink'>
                    <a href="https://65fc842b3365df63c04aedb2--radiant-elf-880769.netlify.app/" target="_blank" rel="noreferrer" class="btn">Visit Site</a>
                    </div>
                    </div>
                </div>

                <div className='p4 po col-12 col-sm-10 col-lg-6 col-xl-4'>
                    <div className='poimg'>
                        <div className='gradient'>
                        </div>
                    <img alt="" src={zoom} />
                    </div>

                    <div id='link'>
                    <div className='title'>
                        Zoom Replica
                    </div>
                    <div id='gitlink'>
                    <a href="https://github.com/useHENI/zoom" target="_blank" rel="noreferrer" class="btn">View Code On Github</a>  
                    </div>
                    </div>
                </div>

                <div className='p5 po  col-12 col-sm-10 col-lg-6 col-xl-4'>
                    <div className='poimg'>
                        <div className='gradient'>
                        </div>
                    <img alt="" src={snake} />
                    </div>

                    <div className='link'>
                    <div className='title'>
                        Snake Game with <br /> JS & DB
                    </div>
                    <div id='gitlink'>
                    <a href="https://github.com/useHENI/nokia-phone-s-snake-game" target="_blank" rel="noreferrer" class="btn">View Code On Github</a>  
                    </div>
                    </div>
                </div>

                <div className='p6 po  col-12 col-sm-10 col-lg-6 col-xl-4'>
                    <div className='poimg'>

                    <div className='gradient'>
                    </div>
                    <img alt="" src={appleb} />
                    </div>

                    <div className='link'>
                    <div className='title'>
                        Apple Website Replica with Bootstrap
                    </div>
                    <div id='vilink'>
                    <a href="https://github.com/useHENI/Apple" target="_blank" rel="noreferrer" class="btn">View Code On Github</a>  
                    </div>
                    <div id='vlink'>
                    <a href="https://apple-clone-inboot.netlify.app" target="_blank" rel="noreferrer" class="btn">Visit Site</a>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
});

export default Portfolio;