import React from 'react'
import { services } from '../../utils/constants'

const Services = () => {
    return (
        <div className='services'>
            <article className='services__header'>
                <h2 className='title'>Services</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusamus est in excepturi ex maiores, adipisci, cumque illum non minima ducimus quidem iusto, pariatur vero molestiae. Non necessitatibus inventore voluptatum.</p>
            </article>
            <div className="services__content">
                {services.map((el) => {
                    const {id, icon, title, text} = el;
                    return <article key={id} className='services__service'>
                        <span className='services__service--icon'>
                            {icon}
                        </span>
                        <h4 className='services__service--heading'>{title}</h4>
                        <p className='services__service--text'>{text}</p>
                    </article>
                })}
            </div>
        </div>
    )
}

export default Services