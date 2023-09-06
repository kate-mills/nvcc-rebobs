//import {navigate} from 'gatsby'

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const handleSubmitContactForm = async (values={}, formName="contact-form", actions={}) => {
  const {setSubmitting, resetForm} = actions


  fetch('/', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: encode({'form-name': formName, ...values})
  }).then(() => {
      setSubmitting(false)
      resetForm()
      console.log('success')
    }).catch((error) => console.log(error))
}

export {handleSubmitContactForm}

