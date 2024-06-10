import adminDashboard from "../assets/portfolio/adminDashboard.png";
import chatApp from "../assets/portfolio/chatApp.png";
import blogApp from "../assets/portfolio/blogApp.png";
import bulkEmail from "../assets/portfolio/bulkEmail.png";
import passwordReset from "../assets/portfolio/passwordReset.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: bulkEmail,
      githubLink: "https://github.com/manu-git-b-s/bulk-email-frontend",
      deployedLink: "https://bulk-email-manu.netlify.app/",
      projectTitle: "Bulk Email App MERN Stack",
    },
    {
      id: 2,
      src: chatApp,
      githubLink: "https://github.com/manu-git-b-s/chat_app_mern.git",
      deployedLink: "https://chat-app-mern-hq5g.onrender.com/",
      projectTitle: "Chat App MERN Stack",
    },
    {
      id: 3,
      src: blogApp,
      githubLink: "https://github.com/manu-git-b-s/blog_app_mern.git",
      deployedLink: "https://blog-app-mern-g7v9.onrender.com",
      projectTitle: "Blog App MERN Stack",
    },
    {
      id: 4,
      src: passwordReset,
      githubLink: "https://github.com/manu-git-b-s/password_reset-frontend",
      deployedLink: "https://manu-password-reset.netlify.app/",
      projectTitle: "Password Reset App MERN Stack",
    },
    {
      id: 5,
      src: adminDashboard,
      githubLink: "https://github.com/manu-git-b-s/admin_dashboard",
      deployedLink: "https://admin-dashboard-manu.netlify.app/",
      projectTitle: "React Admin Dashboard App",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check Out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(
            ({ id, src, githubLink, deployedLink, projectTitle }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <h1 className="text-white my-3 text-center">{projectTitle}</h1>

                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex justify-center items-center">
                  <a
                    href={deployedLink}
                    target="_blank"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Demo
                  </a>
                  <a
                    href={githubLink}
                    target="_blank"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Code
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
