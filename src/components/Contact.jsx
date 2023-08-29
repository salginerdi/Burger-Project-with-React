import Banner from "../assets/banner.png";
import "../styles/Contact.css";

export const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Banner})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen Adınızı ve Soyadınızı Giriniz..."
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen Emailinizi Giriniz..."
          />
          <label>Mesajınız</label>
          <textarea
            rows="6"
            name="message"
            placeholder="Lütfen Mesajınızı Giriniz..."
          />
        </form>
      </div>
    </div>
  );
};
