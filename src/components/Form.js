import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    lastName: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    cpf: Yup.string()
        .min(11, "O campo deve ter 11 digitos")
        .max(11, "O campo deve ter 11 digitos")
        .required("Required"),
    email: Yup.string().email('Invalid email').required('Required'),
    genero: Yup.string().required("Required"),
    nascimento:  Yup.date()
    .default(new Date())
    .max(new Date(), "Data inválida")
    .required("Required"),
    telefone: Yup.string().min(11, "O número de celular deve possuir 11 caracteres incluindo o DDD").required("Required")
    
});

function SignupForm() {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        cpf: '',
        email: '',
        nascimento: new Date(),
        genero: '',
        telefone: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        alert("Dados enviados!");
        console.log(values);
      }}
    >
      {({ values, errors, touched }) => (
        <div>
          <Form>
            <label>Nome:</label>
            <Field type="text" name="firstName" />
            { touched.firstName && errors.firstName ? <div>{ errors.firstName }</div> : null }
            <br />
            <label>Sobrenome:</label>
            <Field type="text" name="lastName" />
            { touched.lastName && errors.lastName ? <div>{ errors.lastName }</div> : null }
            <br />
            <label>CPF:</label>
            <Field type="text" name="cpf" />
            { touched.cpf && errors.cpf ? <div>{ errors.cpf }</div> : null }
            <br />
            <label>Email</label>
              <Field name="email" type="email" />
              {errors.email && touched.email ? (
                <div>{errors.email}</div>
              ) : null}
              <br />
               <label>Data de nascimento</label>
              <Field name="nascimento" type="date" />
              {errors.nascimento && touched.nascimento ? (
                <div>{errors.nascimento}</div>
              ) : null}
              <br />
              <label>Celular</label>
              <Field name="telefone" />
              <br />
              {errors.telefone && touched.telefone ? (
                <div>{errors.telefone}</div>
              ) : null}
            <label>Genero:</label>
            <Field as="select" name="genero">
              <option value="0">Selecione</option>
              <option value="1">Masculino</option>
              <option value="2">Feminino</option>
            </Field>
            {errors.genero && touched.genero ? (
                <div>{errors.genero}</div>
              ) : null}
            <br />
            <input type="submit" value="Enviar" />
          </Form>
        </div>
        
      )}
    </Formik>    
  );
}

export default SignupForm;