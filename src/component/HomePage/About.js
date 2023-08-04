import React from 'react'
//import './About.css'

const AboutUs = () => {
    return (
        <React.Fragment>
            <section className="content-container">
                <div className="textArea"> 
                    <h2>About Us</h2>
                    <p>
                    Welcome to CarbonizeX, a platform dedicated to helping individuals and businesses make informed decisions about their impact on the environment. 
                     We provide data and analysis on carbon emissions from sources such as electricity, flights, ships, and fuel combustion. 
                     By using our predictive tools, you can make more informed choices about how to reduce your carbon footprint and play your part in tackling climate change.
                      Join us on our mission to create a more sustainable future for all
                    </p>
                    <p>
                        Our goal is to empower individuals and organizations with the knowledge and tools they need to make informed decisions and take action to reduce their carbon footprint.
                         From practical tips and strategies for reducing energy consumption to the latest research and developments in sustainable technology, we've got you covered.
                          Join the climate conscious movement and help create a sustainable future for all.
                    </p>
                    <div className='P2'>
                    
                    <h2>CarbonizeX  Is:</h2>
                    <ul>
                   <li> Committed to reducing carbon emissions at source</li>
                   <li>Challenging global industries to reduce emissions reduction</li>
                   <li>Committed to the environment</li>
                   <li>Committed to quality</li>
                   <li>Leading in carbon offsetting</li>
                    </ul>
                    
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default AboutUs;