import './contact.css'
import img from '../../assets/1708726551223.jpg'
import quote from '../../assets/quote-icon.png'
function Contact() {
    return (
        <div className='contact-container'>
            <div className='contact'>
                <h2>Available for select freelance opportunities</h2>
                <p>
                    Have an exciting project you need help with?
                    Send me an email or contact me via instant message!
                </p>
                <a href="mailto:jeremy.millet37@gmail.com">jeremy.millet37@gmail.com</a>
                <ul>
                    <a href="https://github.com/jeremymillet">
                        <li>GitHub</li>
                    </a>
                    <a href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-millet/">
                        <li>LinkedIn</li>
                    </a>
                </ul>
            </div>
            <div className='avis-container'>
                <div className='avis'>
                    <div className='avis-img-container'>
                        <img className="quotes" src={quote} alt="" />
                        <img className="profil"src={img} alt="" />
                    </div>
                    <p className='avis-text'>J'ai eu le plaisir d'être le mentor de Jérémy pendant près d'un an.
                        C'est une personne investit dans son apprentissage,
                        qui n'hésites pas à aller toujours plus loin par envie et curiosité.
                        Le développement est clairement fait pour lui ! Il sait être méthodique et organisé.</p>
                    <div className='avis-info'>
                        <p className='name'>- Kévin Monteiro</p>
                        <p>Développeur web full stack / DevOps</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact