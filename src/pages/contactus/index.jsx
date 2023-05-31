import React, { Component } from 'react'
import Header from '../../Componet/Headers/Header'
import chair00 from '../../assets/imge/sallo.png'
import Footer from '../../Componet/Footer/Footer'
import { Formik, Form, ErrorMessage, Field } from 'formik';
import Services from '../../api/services';
import * as Yup from 'yup';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SiginSchema = Yup.object().shape({
    name:Yup.string()
    .required("Please enter the required field")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    email: Yup.string().email('Invalid email').required('Email is required.'),
    phoneNumber: Yup.string().required('Phone Number is required.'),
});


class ContactUS extends Component {
    constructor(props)
  {
    super(props)
    AOS.init({
        });

    }
    render() {
        return (
            <>
                <div className='bgDarkHeader'>

                    <Header />
                </div>
                <div className="banner_about">
                    <div className="banner_img contact_banner" style={{ backgroundImage: `url('${chair00}')` }}>
                        <div className="banner_text">
                            <div className="inner_content_abbner">
                                <h1 >Contact us</h1>
                                <p style={{fontSize:20,}}>Contact the Salloon Management Team if you're <br />
                                    facing any difficulties </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="contact_main">
                    <Formik
                initialValues={{
                  name:'',
                  email: '',
                  phoneNumber: '',
                  websiteUrl:'',
                  message: ''
                }}
                validationSchema={SiginSchema}
                onSubmit={values => {

                  this.setState({ apiLoader: true, apiError:''})
                  Services.addContactInfo(values).then(response => {

                    if(response.data.Error == false){
                        alert("data added successfully")
                        ("data added successfully")
                    }
                  }).catch(error=>{

                   alert(error)
                  })
                //   AuthApi.login(values).then(response=>{
                //    if(response.data.Error==false){
                //      localStorage.setItem("token",response.data.token)
                //      localStorage.setItem("profile", JSON.stringify(response.data.user))
                //      this.props.history.push("/")
                //    }
                //     ("success")
                //     ("success", response)
                //     this.setState({
                //       apiError:response.data.msg,
                //       apiLoader: false
                //     })
                //   }).catch(error=>{
                //     ("error")
                //     (error)
                //     this.setState({
                //       apiLoader: false
                //     })

                //   })


                }}
              >
                   {({ errors, touched, values, setFieldValue }) => (
                  <Form>

                        <div className="contact_form">
                            <div className="head_form">
                                <h3>Leave your message and we'll get back to you shortly</h3>
                            </div>
                            <div className="form_main">
                            <Field type="text" name="name" placeholder="Your Name *"  />
                            {(errors.name && touched.name) ? <div className="formik-error">{errors.name}</div> : null}
                            <Field type="email" name="email" placeholder="Email Address *"  />
                            {(errors.email && touched.email) ? <div className="formik-error">{errors.email}</div> : null}
                            <Field type="number" name="phoneNumber" placeholder="Phone Number *"  />
                            {(errors.phoneNumber && touched.phoneNumber) ? <div className="formik-error">{errors.phoneNumber}</div> : null}
                            <Field  name="websiteUrl" type="url" placeholder="Website URL" />
                            <textarea name="message" onChange={(e)=>{setFieldValue("message",e.target.value)}} id="" placeholder="Message ( optional)" cols="4" rows="4"></textarea>
                            </div>
                            <div className="submitbtn_contact text-right">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                        </Form>
                         )}
                        </Formik>
                    </div>
                </div>

                < Footer />

            </>
        )
    }
}

export default ContactUS