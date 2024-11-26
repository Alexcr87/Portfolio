import Image from "next/image"

export const ContactMe = () => {
  return (
    <>
      <div className="bg-colorLogo flex flex-col w-full border-2 border-black rounded-xl p-4" >
        <h1 className="pb-2">Contactame</h1>
        <div className="p-2 flex flex-row justify-between">

          <div>
            <label htmlFor="Nombre" className="">Nombre:</label>
            <input type="text" className="bg-colorLogo border-b-2 border-black outline-none w-11/12" />
          </div>
          <div>
            <label htmlFor="Apellido">Apellido:</label>
            <input type="text" className="bg-colorLogo border-b-2 border-black w-full outline-none" />
          </div>

        </div>
        <div className="flex flex-col p-2">
          <label htmlFor="Email" className="">Email:</label>
          <input type="text" className="bg-colorLogo border-b-2 border-black outline-none" />
          <label htmlFor="Mensaje" className="pt-4">Escribe un mensaje:</label>
          <textarea
            id="Mensaje"
            className="bg-colorLogo border-b-2 border-black p-2 outline-none h-32 resize-none "
          ></textarea>
        </div>

        <div className="flex items-center justify-between p-2 pt-4">
          <button className="bg-colorLogo border-2 border-black rounded-lg w-2/12 ">Enviar</button>
          <label htmlFor="Agradecimiento">¡Gracias por tu mensaje!</label>
        </div>

      </div>
    </>


  )
}

export default ContactMe