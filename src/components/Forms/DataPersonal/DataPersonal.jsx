import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormContext } from "../../../Home";
import * as yup from "yup";

const DataPersonal = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="italic text-red-600">{message}</p>
  );
  const ValidationSchema = yup.object().shape({
    nama: yup.string().required("Nama wajib diisi"),
    email: yup.string().email().required("Email wajib diisi"),
    alamat: yup.string().required("Alamat wajib diisi"),
  });

  return (
    <Formik
      initialValues={{
        id: Math.floor(Math.random() * 101),
        nama: "",
        email: "",
        alamat: "",
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
          Data Personal
        </div>
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">Nama</label>
          <Field
            name="nama"
            className="rounded-md border-2 p-2"
            placeholder="John Doe"
          />
        </div>
        <ErrorMessage name="nama" render={renderError} />
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">Email</label>
          <Field
            name="email"
            className="rounded-md border-2 p-2"
            placeholder="john.doe@gmail.com"
          />
        </div>
        <ErrorMessage name="email" render={renderError} />
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">Alamat</label>
          <Field
            name="alamat"
            className="rounded-md border-2 p-2"
            placeholder="
            Jl. Kenanga Terusan, no. 44B, Kec. Cilandak, Jakarta Selatan"
          />
        </div>
        <ErrorMessage name="alamat" render={renderError} />
        <button
          className="rounded-md bg-indigo-500 font-medium text-white my-2 p-2"
          type="submit"
        >
          Selanjutnya
        </button>
      </Form>
    </Formik>
  );
};

export default DataPersonal;
