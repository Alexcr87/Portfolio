import ContactMe from "@/components/contactMe/contactMe";



const ContactMePage = () => {

  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" bg-colorSombra w-5/12 mt-2 rounded-2xl p-2  flex flex-col justify-center items-center" >
        <ContactMe />
      </div>

    </div>


  );
};

export default ContactMePage;
