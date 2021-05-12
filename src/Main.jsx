import "./main.css";
import Header from "./Header";
import { NavLink } from "react-router-dom";
const Main = () => {
  const mode = () => {
    const small = document.querySelector(".small");
    const files = document.querySelector(".files");
    const links = document.getElementsByClassName("links");
    const def = document.getElementsByClassName("def");
    const theme = document.querySelector(".theme");
    const text = document.querySelector(".text");
    const round = document.querySelector(".round");
    const div = document.querySelector(".div");
    const border = document.querySelector(".border");
    const about = document.querySelector(".about");
    const link = document.querySelector(".link");
    const header = document.querySelector(".header");
    const h4 = document.querySelector(".h4");
    if (document.body.style.backgroundColor != "white") {
      document.body.style.backgroundColor = "white";
      small.style.backgroundColor = "rgb(228, 226, 226)";
      for (var i = 0; i < links.length; i++) {
        links[i].style.color = "black";
      }
      for (var i = 0; i < def.length; i++) {
        def[i].style.color = "blue";
      }
      h4.innerHTML = "⚫ Rushil Makvana - Portfolio";
      header.style.backgroundColor = "rgb(224, 224, 224)";
      header.style.color = "black";
      text.style.color = "black";
      theme.style.color = "black";
      border.style.color = "black";
      link.innerHTML = "⚫ about.json";
      link.style.color = "black";
      border.style.borderLeft = "5px solid black";
      files.style.backgroundColor = "#f3f3f3";
      about.style.backgroundColor = "rgb(223, 223, 223)";
      round.style.paddingLeft = "1px";
      round.innerHTML = "⚫";
      div.style.backgroundColor = "rgb(192, 192, 192)";
    } else {
      document.body.style.backgroundColor = "rgb(46, 45, 45)";
      small.style.backgroundColor = "rgb(68, 68, 68)";
      div.style.backgroundColor = "rgb(131, 131, 131)";
      for (var i = 0; i < links.length; i++) {
        links[i].style.color = "rgb(187, 182, 182)";
      }
      for (var i = 0; i < def.length; i++) {
        def[i].style.color = "rgb(94, 209, 255)";
      }
      h4.innerHTML = "⚪ Rushil Makvana - Portfolio";
      header.style.backgroundColor = "rgb(66, 66, 66)";
      header.style.color = "white";
      text.style.color = "white";
      link.innerHTML = "⚪ about.json";
      link.style.color = "white";
      theme.style.color = "rgb(187, 182, 182)";
      border.style.color = "rgb(187, 182, 182)";
      border.style.borderLeft = "3px solid white";
      files.style.backgroundColor = "rgb(53, 53, 53)";
      round.style.paddingLeft = "24px";
      round.innerHTML = "⚪";
      about.style.backgroundColor = "rgb(85, 85, 85)";
    }
  };
  return (
    <>
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossorigin="anonymous"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap"
        rel="stylesheet"
      ></link>
      <Header />
      <div className="left-pane">
        <div className="small">
          <ul className="ul">
            <li className="li border">
              <i className="far fa-file fa-2x"></i>
            </li>
            <li className="li">
              <a
                className="links"
                href="https://www.instagram.com/rushil.9/"
                target="_blank"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </li>
            <li className="li">
              <a
                className="links"
                href="https://github.com/rushilmakvana"
                target="_blank"
              >
                <i className="fab fa-github fa-2x"></i>
              </a>
            </li>
            <li className="li">
              <a
                className="links"
                href="https://www.linkedin.com/in/rushil-makvana-57a28b207/"
                target="_blank"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </li>
            <li className="theme" onClick={mode}>
              <div className="div">
                <div className="round">⚪</div>
              </div>
              <span>DARK</span>
            </li>
          </ul>
        </div>
        <div className="files">
          <div className="text">EXPLORER</div>
          <div className="about">
            <div className="link">⚪ about.json</div>
          </div>
        </div>
        <div className="content">
          <span style={{ color: "green" }}>
            /* &nbsp; WEB - ANDROID -PROGRAMMING &nbsp; */
          </span>
          <br />
          <br />
          <br />
          <span className="def">[</span>
          <br /> &nbsp;&nbsp; <span className="def"> "name" :</span>
          <span className="val"> "Rushil Makvana", </span>
          <br />
          &nbsp;&nbsp;<span className="def"> "work" :</span>
          <span className="val"> "learning new things", </span>
          <br />
          &nbsp;&nbsp;<span className="def"> "major" : </span>
          <span className="val"> "computer science" </span>
          <br />
          <span className="def"> ]</span>
          <br />
          <br />
          <span style={{ color: "green" }}>// Projects </span>
          <br />
          <br />
          <span className="def"> "Projects" : [</span> <br />
          &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp;
          <span className="val">
            "BlockChain Based Voting System - "VoteChain"&nbsp; &nbsp;
          </span>
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;&nbsp; &nbsp;
          <span className="def"> ]</span>
          <br />
          <br />
          <span style={{ color: "green" }}>// LANGUAGES </span>
          <br />
          <br />
          <span className="def">"languages" : [</span> <br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <span className="val">
            "Javascript",
            <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"ReactJs",
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "PHP",
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Android",
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "ASP .NET",
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Java",
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Kotlin",
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "HTML",
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "CSS",
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "C", <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "C++",
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "Python"
          </span>
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;<span className="def"> ]</span>
          <br />
          <br />
          <span style={{ color: "green" }}>// DATABASES </span>
          <br />
          <br />
          <span className="def">"databases" : [ </span>
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <span className="val">
            "MySQL",
            <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"MongoDB",
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "SQLite"
          </span>
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;<span className="def"> ]</span>
          <br />
          <br />
          <span style={{ color: "green" }}>// TOOLS </span>
          <br />
          <br />
          <span className="def"> "Tools" : [</span> <br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <span className="val">
            "React",
            <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp;"Flask",
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; "FireBase"
          </span>
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <span className="def"> ]</span>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default Main;
