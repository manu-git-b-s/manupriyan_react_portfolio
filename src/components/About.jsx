const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center p-4 w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Passionate and highly skilled UI Developer with close to 2 years of
          experience in creating visually stunning and user-friendly web and
          mobile interfaces. Proficient in front-end technologies such as HTML,
          CSS, JavaScript, and react.js. Dedicated to delivering pixel-perfect
          designs and exceptional user experiences. Seeking to contribute my
          expertise to a dynamic team and drive innovation in UI development
        </p>
        <br />
        <p className="text-xl">
          Developed reusable and dynamic UI components and screens using
          React.js to precisely match provided design specifications.
          Implemented multi-language support through translation for enhanced
          accessibility and user experience.Proficiently utilized Git for source
          code version management, ensuring seamless collaboration with the
          development team Enhanced code quality and reliability by implementing
          comprehensive unit tests and integrating testing for UI components,
          resulting in increased code coverage.Actively engaged in code reviews,
          actively contributing to the project's overall code quality and
          ensuring alignment with best practices.Collaborated closely with team
          members to identify and resolve UI-related issues and bugs, ensuring a
          smooth and error-free user experience.
        </p>
      </div>
    </div>
  );
};

export default About;
