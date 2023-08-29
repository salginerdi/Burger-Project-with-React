import BannerImage from "../assets/banneryeni.jpg";
import "../styles/About.css";

export const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut quas,
          doloremque ullam doloribus fuga cupiditate omnis hic incidunt
          aspernatur iusto illo corrupti esse quasi soluta eligendi mollitia
          maxime praesentium expedita? Autem doloremque reiciendis earum
          veritatis quae maiores, est nesciunt, quibusdam pariatur quis cum
          sequi velit, nobis neque eveniet optio magnam. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Atque nam aperiam natus ad expedita
          asperiores, culpa quisquam molestias repellat reprehenderit recusandae
          modi! Facilis distinctio beatae aliquid non earum maxime cum. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Totam porro et
          quidem, aperiam optio, deserunt esse quisquam dolore nisi nemo
          dolorum? Animi aperiam laborum pariatur sit. Reprehenderit porro ipsa
          eveniet, nisi ad minus velit rem nostrum possimus, neque, animi
          explicabo? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Officia illo sapiente quibusdam expedita hic rem quod quidem
          repudiandae commodi quo. Adipisci at dolorem quaerat eius voluptates
          eligendi soluta nesciunt exercitationem?
        </p>
      </div>
    </div>
  );
};
