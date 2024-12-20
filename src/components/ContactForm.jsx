import styles from './ContactForm.module.css'
import Button from '../ui/Button'


function Fieldset({label, children, error}) {
    return (
        <fieldset>
            {label && <label htmlFor={children.props.id}>{label}</label>}
            {children}
            {error && <span className={styles.errorMsg}>{error}</span>}
        </fieldset>
    )
}


function ContactForm() {

    const handleSubmit = (e) => {
        e.preventDefault();
        return (
            console.log('submitted')
        )
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <Fieldset label={'name'} error={'wrong entry'}>
                <input type="text" id="name" name="name" required />
            </Fieldset>
            <Fieldset label={'e-mail'}>
                <input type="email" id="email" name="email" required />
            </Fieldset>
            <Fieldset label={'number'}>
                <input type="text" id="number" name="number" />
            </Fieldset>
            <Fieldset label={'message'}>
                <textarea id='message' name='message' required></textarea>
            </Fieldset>
            <Fieldset>
                <Button>Send</Button>
            </Fieldset>
        </form>
    )
}

export default ContactForm