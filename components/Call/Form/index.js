import { React, useState } from "react";
import { Field, useFormik } from "formik";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const RepportForm = () => {
  const [value, setValue] = useState();
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
    <form onSubmit="">
      <label htmlFor="lastname">Nom</label>
      <input
        id="lastname"
        placeholder="Saisir votre nom (prénom)"
        name="lastname"
        type="text"
      />

      <label htmlFor="phone">Téléphone</label>
      <PhoneInput defaultCountry="FR" value={value} onChange={setValue} />

      <div className="select">
        <select id="type" name="type" type="select">
          <option value="" label="Type" />
          <option value="Psychologique" label="Psychologique" />
          <option value="Verbale" label="Verbale" />
          <option value="Économique" label="Économique" />
          <option value="Physique" label="Physique" />
          <option value="Sexuelle" label="Sexuelle" />
          <option value="Plusieurs sortes" label="Plusieurs sortes" />
        </select>
      </div>
      <div className="select">
        <select id="concerning" name="concerning" type="select">
          <option value="" label="Qui est concerné ?" />
          <option value="Femme" label="Femme" />
          <option value="Homme" label="Homme" />
          <option value="Très jeune adulte (F)" label="Très jeune adulte (F)" />
          <option value="Très jeune adulte (H)" label="Très jeune adulte (M)" />
          <option value="Enfant (F)" label="Enfant (F)" />
          <option value="Enfant (H)" label="Enfant (M)" />
        </select>
      </div>
      <div className="select">
        <select id="child" name="child" type="select">
          <option value="" label="Enfant(s) dans le foyer ?" />
          <option value="Oui" label="Oui" />
          <option value="Non" label="Non" />
          <option value="Non applicable" label="Non applicable" />
        </select>
      </div>
      <div className="select">
        <select id="fromwho" placeholder="Origine" name="fromwho" type="select">
          <option value="" label="Origine" />
          <option value="Moi-même" label="Moi-même" />
          <option value="Témoin" label="Témoin" />
          <option value="Porte-parole" label="Porte-parole" />
          <option value="Services sociaux" label="Services sociaux" />
          <option
            value="Professionnel de santé"
            label="Professionnel de santé"
          />
        </select>{" "}
      </div>

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
