const About = ({ about, logo }) => {
  return (
    <aside>
      <img src={logo} alt="blog logo" />

      <h2>About This Blog</h2>

      <p>{about}</p>
    </aside>
  );
};

export default About;