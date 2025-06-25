import { useState } from "react";

export default function FormAddPeople ({travel, update}) {
   const defaultFormData = {
    id: 0,
    firstName: "",
    lastName: "",
    idCode: "",
    email: "",
    phone: ""
   };

   const [formData, setFormData] = useState(defaultFormData);

   const idGenerate = (travel) => {
    const id = travel.peopleList.length +1;
    return id;
   };

    const changeFormData = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData,
        id: idGenerate(travel),
        [name]: value
    });
   };

   const handleSubmit = (e) => {
    e.preventDefault();

    const errorData = [];
    if (formData.firstName.length < 3 || /\d/.test(formData.firstName)) {
      errorData.push("Nome non valido");
    };
    if (formData.lastName.length < 3 || /\d/.test(formData.lastName)) {
      errorData.push(" Cognome non valido");
    };
    if (formData.idCode.length !== 16 ) {
      errorData.push(" Codice fiscale non valido");
    };
    // if (formData.email. ) {
    //   errorData.push(" Email non valida");
    // };
    if (formData.phone.length !== 10 || isNaN(parseInt(formData.phone))) {
      errorData.push(" Numero non valido")
    };

    if (errorData.length) {
      alert(errorData)
      return;
    }

    travel.peopleList.push(formData);
    update();
    console.log(formData);
    setFormData(defaultFormData)
   };

    return (
        <div className="container mt-5">
        <h1>Aggiungi nuovi partecipanti</h1>
        <form className="row align-items-end g-3" onSubmit={handleSubmit}>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <label htmlFor="firstName">Nome</label>
              <input
                className="form-control"
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={changeFormData}
                required
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <label htmlFor="lastName">Cognome</label>
              <input
                className="form-control"
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={changeFormData}
                required
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <label htmlFor="idCode">Codice fiscale</label>
              <input
                className="form-control"
                type="text"
                id="idCode"
                name="idCode"
                value={formData.idCode}
                onChange={changeFormData}
                required
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <label htmlFor="email">Email</label>
                <input className="form-control" 
                type="email"
                id="email"
                name="email"
                value={formData.email} 
                onChange={changeFormData}
                required
                />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <label htmlFor="phone">Telefono</label>
                <input className="form-control" 
                type="text"
                id="phone"
                name="phone"
                value={formData.phone} 
                onChange={changeFormData}
                required
                />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 text-end">
                <button className="btn btn-primary" type="submit">Aggiungi partecipante</button>
            </div>
          </form>
        </div>
    )
}