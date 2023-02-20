import { send } from "emailjs-com";
import { useState } from "react";

const ContactForm = () => {
  const [visible, setVisible] = useState({
    form: true,
    succesAlert: false,
    failAlert: false,
  });

  const [toSend, setToSend] = useState({
    name: "",
    phone: "",
    email: "",
    msg: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (toSend.name == "") {
      alert("Lütfen isim kısmını doldurunuz.");
    } else if (toSend.phone == "") {
      alert("Lütfen telefon numarası kısmını doldurunuz.");
    } else if (toSend.email == "") {
      alert("Lütfen email adresi kısmını doldurunuz.");
    } else if (toSend.msg == "") {
      alert("Lütfen mesaj kısmını doldurunuz.");
    } else {
      send("service_cnc3vmf", "template_fc2mnwn", toSend, "QLYVyt1WerYE1MUti")
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setVisible({ ...visible, form: false, succesAlert: true });
        })
        .catch((err) => {
          console.log("FAILED...", err);
          setVisible({ ...visible, failAlert: true });
          setInterval(() => {
            setVisible({ ...visible, failAlert: false });
          }, 1500);
        });
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="content contacts">
      {/* title */}
      <div className="title">İletişim Formu</div>
      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="contact_form">
            {visible.form ? (
              <form id="cform" method="post" onSubmit={onSubmit}>
                <div className="row">
                  <div className="col col-d-6 col-t-6 col-m-12">
                    <div className="group-val">
                      <input
                        type="text"
                        name="name"
                        placeholder="Ad Soyad"
                        value={toSend.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col col-d-6 col-t-6 col-m-12">
                    <div className="group-val">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Telefon Numaranız"
                        value={toSend.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col col-d-12 col-t-12 col-m-12">
                    <div className="group-val">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email Adresiniz"
                        value={toSend.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col col-d-12 col-t-12 col-m-12">
                    <div className="group-val">
                      <textarea
                        name="msg"
                        placeholder="Mesajınız ..."
                        value={toSend.msg}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="align-left">
                  <a href="#" className="button" onClick={onSubmit}>
                    <span className="text">Mesaj Gönder</span>
                    <span className="arrow" />
                  </a>
                </div>
              </form>
            ) : (
              <>
                <p>Teşekkürler, mesajınız başarıyla gönderildi.</p>
                <div className="align-left">
                  <a
                    href="#"
                    className="button"
                    onClick={() => {
                      setVisible({ form: true });
                      setToSend({ name: "", phone: "", email: "", msg: "" });
                    }}
                  >
                    <span className="text">
                      Yeni form doldurmak için tıklayınız.
                    </span>
                    <span className="arrow" />
                  </a>
                </div>
              </>
            )}

            {visible.failAlert ? (
              <div className="alert-success">
                <p>Hata mesajınız gönderilemedi!</p>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default ContactForm;
