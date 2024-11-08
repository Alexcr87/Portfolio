import { tourney } from "@/fonts"
import "@/utils/starWarsEffect.css"

export const AboutMe = () => {
  return (
    <div className={`${tourney.variable} font-tourney text-white p-8`}>
      <h1 className="font-tourney flex justify-center text-8xl">¡Hola!</h1>
      <h2 className="font-tourney flex justify-center text-6xl">
        Mi nombre es Christian,
      </h2>
      <div className="star-wars-container">
        <div className="star-wars-wrapper">
          <p className="star-wars-text text-2xl">
            Soy desarrollador Full Stack y analista de sistemas con una sólida base en desarrollo web y una gran pasión por la tecnología.
          </p>
          <p className="star-wars-text text-2xl">
            Con una trayectoria de más de 10 años en resolución de problemas, gestión de equipos y mejora de procesos, recientemente he enfocado mi carrera en el desarrollo de software, combinando mi experiencia profesional en administración y servicio al cliente con habilidades técnicas de programación.
          </p>
          <p className="star-wars-text text-2xl">
            Mi stack principal incluye Next.js, NestJS, React, Node.js, TypeScript, JavaScript, PostgreSQL, MongoDB, Tailwind CSS y Git, así como herramientas de desarrollo y colaboración como OAuth2, Cloudinary, Nodemailer, Redux, TypeORM y Jira.
          </p>
          <p className="star-wars-text text-2xl">
            A través de proyectos realizados durante mi tiempo como Teaching Assistant en Henry Bootcamp y en experiencias profesionales, he tenido la oportunidad de liderar la implementación de autenticación segura (usando Auth0 y OAuth2), configurar arquitecturas backend en NestJS, y manejar flujos de pago con integraciones de terceros como Mercado Pago.
          </p>
          <p className="star-wars-text text-2xl">
            Además, mi enfoque en el desarrollo de aplicaciones escalables y seguras está respaldado por una constante orientación al cliente y al detalle, cualidades que desarrollé a lo largo de mis años de experiencia en administración y en la mejora de espacios públicos.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe