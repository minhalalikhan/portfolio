import React, { useState } from 'react'
import ContactCard from './ContactCard'
import Snackbar from '@mui/material/Snackbar';


function Contact() {
    const [showSnack, setShowSnack] = useState(false)

    const email = 'minhalalikhan110@gmail.com'
    function copyGmail() {
        navigator.clipboard.writeText(email);
        setShowSnack(true)
    }

    return (
        <section id='contact'>
            <p className='heading'>
                Contact
            </p>

            <div className="contactgrid">
                <ContactCard color='#0274b3' contact='LinkedIn' img='LinkedIn' url={'https://www.linkedin.com/in/minhal-ali-khan-5b3905236/'} />
                <ContactCard color='gray' contact='Github' img='github' url='https://github.com/minhalalikhan' />
                <ContactCard color='gray' contact='X' img='X_logo' url='https://x.com/itsmeminhal' />
                <ContactCard color='#de8881' contact='minhalalikhan110@gmail.com (click to copy) ' img='Gmail' onClick={copyGmail} />
            </div>
            <Snackbar
                open={showSnack}
                autoHideDuration={3000}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                onClose={() => setShowSnack(false)}


            // action={action}
            >
                <div
                    className='snackbar'
                >
                    <p>
                        Mail Copied
                    </p>
                </div>
            </Snackbar>
        </section>
    )
}

export default Contact