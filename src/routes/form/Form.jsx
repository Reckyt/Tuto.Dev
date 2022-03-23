import React from 'react'

// import { TextField, IntegerField, DateField, FloatField, EmailField } from '../../components/form/field'

import "./Form.css"

export default function Form() {
    return (
        <div className='container form'>
            <h1>Les différents type d'input</h1>
            <div className='container-input'>
                {/* <TextField title="Précisez" name="contactOriginOther" placeholder="text" /> */}
                {/* <IntegerField title="Précisez" name="contactOriginOther" placeholder="number" required /> */}
                {/* <DateField title="Précisez" name="contactOriginOther" placeholder="number" /> */}
                {/* <FloatField title="Précisez" name="contactOriginOther" placeholder="number" /> */}
                {/* <EmailField title="Précisez" name="contactOriginOther" placeholder="email" /> */}
            </div>
        </div>
    )
}
