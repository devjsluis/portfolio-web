function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">Habilidades</h2>
      <div className="container">
        <div className="row" id="skillsContainer">
          <div className="bar">
            <div className="info">
              <img src="/src/assets/image/node.png" alt="" />
              <span>Node.js</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <img
                className="express"
                src="/src/assets/image/icon-expressjs.svg"
                alt=""
              />
              <span>Express.js</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <img src="/src/assets/image/mysql.png" alt="" />
              <span>MySQL</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <img
                src="/src/assets/image/bootstrap.png"
                className="bootstrap"
                alt=""
              />
              <span>Bootstrap</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <img src="/src/assets/image/git.png" alt="" />
              <span>Git</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <img src="/src/assets/react.svg" alt="" />
              <span>React</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <img src="/src/assets/image/angular.png" alt="" />
              <span>Angular</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <img src="/src/assets/image/vue.png" alt="" />
              <span>Vue.js</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <img src="/src/assets/image/js.png" alt="" />
              <span>Javascript</span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <img src="/src/assets/image/typescript.png" alt="" />
              <span>Typescript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
