import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormContext } from "../../../Home";
import * as yup from "yup";

const PengalamanKerja = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="italic text-red-600">{message}</p>
  );
  const ValidationSchema = yup.object().shape({
    jabatan: yup.string().required("Nama Jabatan wajib diisi"),
    perusahaan: yup.string().required("Nama Perusahaan wajib diisi"),
    lama_bekerja: yup.string().required("Lama Bekerja wajib diisi"),
    deskripsi: yup.string().required("Deskripsi Pekerjaan wajib diisi"),
  });

  return (
    <Formik
      initialValues={{
        jabatan: "",
        perusahaan: "",
        lama_bekerja: "",
        deskripsi: "",
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
          Pengalaman Kerja
        </div>
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">Jabatan</label>
          <Field
            name="jabatan"
            className="rounded-md border-2 p-2"
            placeholder="Nama Jabatan"
          />
        </div>
        <ErrorMessage name="jabatan" render={renderError} />
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">Perusahaan</label>
          <Field
            name="perusahaan"
            className="rounded-md border-2 p-2"
            placeholder="Nama Perusahaan"
          />
        </div>
        <ErrorMessage name="perusahaan" render={renderError} />
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">Lama Bekerja</label>
          <Field
            name="lama_bekerja"
            className="rounded-md border-2 p-2"
            placeholder="
            Lama Bekerja"
          />
        </div>
        <ErrorMessage name="lama_bekerja" render={renderError} />
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">
            Deskripsi Pekerjaan
          </label>
          <Field
            name="deskripsi"
            className="rounded-md border-2 p-2"
            placeholder="
            Deskripsi Pekerjaan"
          />
        </div>
        <ErrorMessage name="deskripsi" render={renderError} />
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

export default PengalamanKerja;
