import { useId } from "react";
import styles from "./CatalogFilter.module.css";
import { useSearchParams } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/catalogSlice";

export default function CatalogFilter() {
  const [_, setSearchParams] = useSearchParams();
  const filter = useSelector(selectFilter);
  const locationId = useId();
  const acId = useId();
  const automaticId = useId();
  const kitchenId = useId();
  const tvId = useId();
  const bathroomId = useId();
  const vanId = useId();
  const integratedId = useId();
  const alcoveId = useId();

  const handleFilterSubmit = (event) => {
    const formData = {};

    Object.keys(event).forEach((key) => {
      let value = event[key];

      if (Array.isArray(value)) {
        value = value.join(",");
      }

      if (value) formData[key] = value;
    });

    setSearchParams(formData);
  };

  const handleRadioChange = (event) => {};

  if (!filter) return null;

  const initialValues = {
    location: "",
    AC: false,
    automatic: false,
    kitchen: false,
    tv: false,
    bathroom: false,
    form: null,
    ...filter,
  };

  return (
    <aside>
      <Formik initialValues={initialValues} onSubmit={handleFilterSubmit}>
        <Form className={styles.filter}>
          <label className={styles.locationFilter} htmlFor={locationId}>
            Location
            <div className={styles.input_box}>
              <Field id={locationId} type="text" name="location" />
              <svg width={20} height={20} className={styles.icon}>
                <use xlinkHref="/sprite.svg#map-black"></use>
              </svg>
            </div>
          </label>
          {/* location input here */}
          <h2>Filters</h2>
          <fieldset>
            <legend>Vehicle equipment</legend>
            <label htmlFor={acId}>
              <Field id={acId} type="checkbox" name="AC" />
              <div className={styles.border}>
                <svg width={32} height={32}>
                  <use xlinkHref="/sprite.svg#wind"></use>
                </svg>
                AC
              </div>
            </label>

            <label htmlFor={automaticId}>
              <Field id={automaticId} type="checkbox" name="automatic" />
              <div className={styles.border}>
                <svg width={32} height={32}>
                  <use xlinkHref="/sprite.svg#diagram"></use>
                </svg>
                Automatic
              </div>
            </label>

            <label htmlFor={kitchenId}>
              <Field id={kitchenId} type="checkbox" name="kitchen" />
              <div className={styles.border}>
                <svg width={32} height={32}>
                  <use xlinkHref="/sprite.svg#cup-hot"></use>
                </svg>
                Kitchen
              </div>
            </label>

            <label htmlFor={tvId}>
              <Field id={tvId} type="checkbox" name="TV" />
              <div className={styles.border}>
                <svg width={32} height={32}>
                  <use xlinkHref="/sprite.svg#tv"></use>
                </svg>
                TV
              </div>
            </label>

            <label htmlFor={bathroomId}>
              <Field id={bathroomId} type="checkbox" name="bathroom" />
              <div className={styles.border}>
                <svg width={32} height={32}>
                  <use xlinkHref="/sprite.svg#droplet"></use>
                </svg>
                Bathroom
              </div>
            </label>
          </fieldset>
          <fieldset onClick={handleRadioChange}>
            <legend>Vehicle type</legend>

            <label htmlFor={vanId}>
              <Field id={vanId} type="radio" name="form" value="panelTruck" />
              <div className={styles.border}>
                <svg width={32} height={32}>
                  <use xlinkHref="/sprite.svg#grid-1x2"></use>
                </svg>
                Van
              </div>
            </label>

            <label htmlFor={integratedId}>
              <Field
                id={integratedId}
                type="radio"
                name="form"
                value="fullyIntegrated"
              />
              <div className={styles.border}>
                <svg width={32} height={32}>
                  <use xlinkHref="/sprite.svg#grid"></use>
                </svg>
                Fully integrated
              </div>
            </label>

            <label htmlFor={alcoveId}>
              <Field id={alcoveId} type="radio" name="form" value="alcove" />
              <div className={styles.border}>
                <svg width={32} height={32}>
                  <use xlinkHref="/sprite.svg#grid-3x3"></use>
                </svg>
                Alcove
              </div>
            </label>
          </fieldset>
          <div>
            <input className="button" type="submit" value="Search" />
          </div>
        </Form>
      </Formik>
    </aside>
  );
}
