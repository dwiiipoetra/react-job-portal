import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormContext } from "../../../Home";
import * as yup from "yup";

const RiwayatPendidikan = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="italic text-red-600">{message}</p>
  );
  const ValidationSchema = yup.object().shape({
    tingkat: yup.string().required("Tingkat Pendidikan wajib diisi"),
    lembaga: yup.string().required("Lembaga Pendidikan wajib diisi"),
    jurusan: yup.string().required("Jurusan wajib diisi"),
  });

  return (
    <Formik
      initialValues={{
        tingkat: "",
        lembaga: "",
        jurusan: "",
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
          Riwayat Pendidikan
        </div>
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">
            Tingkat Pendidikan
          </label>
          <Field
            name="tingkat"
            className="rounded-md border-2 p-2"
            placeholder="Tingkat Pendidikan"
          />
        </div>
        <ErrorMessage name="tingkat" render={renderError} />
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">
            Nama Sekolah / Universitas
          </label>
          <Field
            name="lembaga"
            className="rounded-md border-2 p-2"
            placeholder="Nama Sekolah / Universitas"
          />
        </div>
        <ErrorMessage name="lembaga" render={renderError} />
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">Jurusan</label>
          <Field
            name="jurusan"
            className="rounded-md border-2 p-2"
            placeholder="
            Nama Jurusan"
          />
        </div>
        <ErrorMessage name="jurusan" render={renderError} />
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

export default RiwayatPendidikan;
