import React from "react"
import styled from "styled-components"
import { Formik } from "formik"
import axios from "axios"
import PageInfo from "../components/PageInfo/PageInfo"
import Button from "../components/Button/Button"

const StyledInput = styled.input`
  width: ${({ as }) => (as ? "60rem" : "28rem")};
  height: ${({ as }) => (as ? "15rem" : "auto")};
  margin-bottom: ${({ as }) => as && "4rem"};
  padding: 0.8rem 1.1rem;
  background: white;
  border: 2px black solid;
  font-family: 2rem;
  display: block;
  font-family: "Montserrat";
`

const StyledLabel = styled.label`
  margin: 3rem 0 1rem;
  font-size: 1.4rem;
  display: block;
  font-weight: bold;
  font-family: "Montserrat";
`

const pageData = {
  title: "Contact",
  paragraph:
    "While artists work from real to the abstract, architects must work from the abstract to the real.",
}

const ContactPage = () => {
  return (
    <>
      <PageInfo {...pageData} />

      <Formik
        initialValues={{ email: "", name: "", message: "" }}
        validate={values => {
          const errors = {}
          if (!values.email) {
            errors.email = "Required"
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address"
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          axios
            .post(
              "https://us-central1-gatsby-hatta-2392b.cloudfunctions.net/sendEmail",
              values
            )
            .then(res => {
              console.log(res)
              setSubmitting(false)
            })
            .catch(err => {
              console.log(err)
              setSubmitting(false)
            })
          // setTimeout(() => {
          // alert(JSON.stringify(values, null, 2))
          // setSubmitting(false)
          // }, 400)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <StyledLabel htmlFor="email">E-mail</StyledLabel>
            <StyledInput
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}

            <StyledLabel htmlFor="name">Name</StyledLabel>
            <StyledInput
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}

            <StyledLabel htmlFor="message">Message</StyledLabel>
            <StyledInput
              as="textarea"
              name="message"
              id="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
            {errors.message && touched.message && errors.message}

            <Button type="submit" disabled={isSubmitting}>
              send message
            </Button>
          </form>
        )}
      </Formik>
    </>
  )
}

export default ContactPage
