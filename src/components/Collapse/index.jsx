import { useState } from 'react';
import '../../styles/Collapse.css';

function Collapse({ id, label, description, parentClassName }) {
  const [isVisible, setIsVisible] = useState(true);

  const collapseClassName = parentClassName ? `${parentClassName}-collapse` : '';

  return isVisible ? (
    <section className={`kasa-dropDown ${collapseClassName}`}>
      <button
        className={`kasa-dropDownClose ${collapseClassName}`}
        onClick={() => setIsVisible(false)}
      >
        <div className="kasa-collapse-flex">
          <h3>{label}</h3>
          <span>Ouvrir le descriptif</span>
          <i className="fa-sharp fa-solid fa-chevron-down"></i>
        </div>
      </button>
    </section>
  ) : (
    <section className={`kasa-dropDown ${collapseClassName}`}>
      <button
        className={`kasa-dropDownOpen ${collapseClassName}`}
        onClick={() => setIsVisible(true)}
      >
        <div className="kasa-collapse-flex">
          <h3>{label}</h3>
          <span>Fermer le descriptif</span>
          <i className="fa-sharp fa-solid fa-chevron-up"></i>
        </div>
      </button>
      <div className="kasa-collapseDescription" key={id}>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default Collapse;