import  {React, useState} from "react";
import { Field, useFormik } from "formik";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const RepportForm = () => {
  const [value, setValue] = useState()
  const formik = useFormik({
    initialValues: {
      lastname: "",
      phone: "",
      type: "",
      concerning: "",
      child: "",
      fromwho: "",
      details: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="lastname">Nom</label>
      <input
        id="lastname"
        name="lastname"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastname}
      />

      <label htmlFor="phone">Téléphone</label>
      <PhoneInput
      defaultCountry="FR"
  value={value}
  onChange={setValue} />
      <label htmlFor="type">Type</label>
      <select
        id="type"
        name="type"
        type="select"
        onChange={formik.handleChange}
        value={formik.values.type}
      >
        <option value="" label="Select a color" />
        <option value="Psychologique" label="Psychologique" />
        <option value="Verbale" label="Verbale" />
        <option value="Économique" label="Économique" />
        <option value="Physique" label="Physique" />
        <option value="Sexuelle" label="Sexuelle" />
        <option value="Plusieurs sortes" label="Plusieurs sortes" />
      </select>

      <label htmlFor="concerning">Qui est concerné ?</label>
      <select
        id="concerning"
        name="concerning"
        type="select"
        onChange={formik.handleChange}
        value={formik.values.concerning}
      >
        <option value="" label="Select a color" />
        <option value="Femme" label="Femme" />
        <option value="Homme" label="Homme" />
        <option value="Très jeune adulte (F)" label="Très jeune adulte (F)" />
        <option value="Très jeune adulte (H)" label="Très jeune adulte (M)" />
        <option value="Enfant (F)" label="Enfant (F)" />
        <option value="Enfant (H)" label="Enfant (M)" />
      </select>

      <label htmlFor="concerning">Enfant(s) dans le foyer ?</label>
      <select
        id="child"
        name="child"
        type="select"
        onChange={formik.handleChange}
        value={formik.values.child}
      >
        <option value="" label="Select a color" />
        <option value="Oui" label="Oui" />
        <option value="Non" label="Non" />
        <option value="Non applicable" label="Non applicable" />
      </select>

      <label htmlFor="origine">Origine</label>
      <select
        id="fromwho"
        name="fromwho"
        type="select"
        onChange={formik.handleChange}
        value={formik.values.fromwho}
      >
        <option value="" label="Select a color" />
        <option value="Moi-même" label="Moi-même" />
        <option value="Témoin" label="Témoin" />
        <option value="Porte-parole" label="Porte-parole" />
        <option value="Services sociaux" label="Services sociaux" />
        <option value="Professionnel de santé" label="Professionnel de santé" />
      </select>

      <label htmlFor="details">Information complémentaire</label>
      <textarea
        cols="30"
        rows="10"
        id="details"
        name="details"
        onChange={formik.handleChange}
        value={formik.values.details}
      ></textarea>

      <button type="submit">Envoyer la demande</button>
    </form>
  );
};

export default RepportForm;
