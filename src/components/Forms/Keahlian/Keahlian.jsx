import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormContext } from "../../../Home";
import * as yup from "yup";

const Keahlian = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="italic text-red-600">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    keahlian1: yup.string().required("Keahlian 1 wajib diisi"),
    keahlian2: yup.string().required("Keahlian 2 wajib diisi"),
    keahlian3: yup.string().required("Keahlian 3 wajib diisi"),
  });

  return (
    <Formik
      initialValues={{
        keahlian1: "",
        keahlian2: "",
        keahlian3: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        const data = { ...formData, ...values };
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      <Form className="flex flex-col justify-center items-center">
        <div className="py-5 text-2xl font-medium self-center mb-2">
          Keahlian
        </div>
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">Keahlian 1</label>
          <Field
            name="keahlian1"
            className="rounded-md border-2 p-2"
            placeholder="HTML"
          />
        </div>
        <ErrorMessage name="keahlian1" render={renderError} />
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">Keahlian 2</label>
          <Field
            name="keahlian2"
            className="rounded-md border-2 p-2"
            placeholder="CSS"
          />
        </div>
        <ErrorMessage name="keahlian2" render={renderError} />
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">Keahlian 3</label>
          <Field
            name="keahlian3"
            className="rounded-md border-2 p-2"
            placeholder="
            JavaScript"
          />
        </div>
        <ErrorMessage name="keahlian3" render={renderError} />
        <button
          className="rounded-md bg-indigo-500 font-medium text-white my-2 p-2"
          type="submit"
        >
          Selesai
        </button>
      </Form>
    </Formik>
  );
};

export default Keahlian;
