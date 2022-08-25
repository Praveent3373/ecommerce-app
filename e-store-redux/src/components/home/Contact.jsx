import React from 'react'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact__content">
                <h2 className='title'>Join our newsletter</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. esse incidunt similique voluptas illo consectetur minus.
                </p>
            </div>
            <div className="contact__form">
                <form action="https://formspree.io/f/xrgdgnlg" method="POST">
                    <input type="email" name='email' placeholder='Enter email' />
                    <button type='submit'>Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default Contact