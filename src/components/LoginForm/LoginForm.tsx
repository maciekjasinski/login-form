import { Formik, Form, Field } from "formik";
import { useLoginForm } from "./LoginForm.hooks";
import { Container, Button, ErrorMessage } from "./LoginForm.styles";

export const LoginForm = () => {
  const { handleSubmit, loginErrorMessage } = useLoginForm();
  return (
    <Container>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          email: "",
          password: ""
        }}
      >
        <Form>
          <Field
            name="email"
            placeholder="Email"
          />
          <Field
            name="password"
            type="password"
            placeholder="Password"
          />
          {loginErrorMessage &&
            <ErrorMessage>{loginErrorMessage}</ErrorMessage>
          }
          <Button>Login</Button>
        </Form>
      </Formik>
    </Container>
  )
}
