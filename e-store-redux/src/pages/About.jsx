import React from 'react'
import about_image from '../assets/images/about_image.avif'
import { PageHero } from '../components'

const About = () => {
  return (
      <>
        <PageHero title='About'/>
        <div className='about section-center'>
          <div className="about_image">
              <img src={about_image} width="100%" alt='about' />
          </div>
          <div className="about__content">
            <div className="about__title">
              <h2>About us</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dolorum illum minima repudiandae at veritatis consequuntur id enim vel facere mollitia. Enim porro quaerat eaque non quo asperiores blanditiis natus!
            Eos incidunt culpa eveniet atque odio? Eos dolor fuga porro sed ea est aliquid consectetur illo minima ab. Sapiente eius fugiat eligendi laborum vitae architecto aliquid repellendus quae impedit quam.
            Similique ducimus neque eaque consequatur? Tempora velit adipisci magnam distinctio aut dolores, doloribus ratione molestiae magni natus est esse? Magnam unde eaque eius asperiores, numquam qui error quaerat dolor autem.</p>
          </div>
        </div>
      </>
  )
}

export default About