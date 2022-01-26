import Image from "next/image";
import vietnam from "../../images/vietnam.png";

export const InformationContact = () => {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-3xl font-semibold">Office</h2>

      <span className="">
        Vietnam <br /> Vietan building, No. 4E, Street 6, Ward An Phu, District
        2, Ho Chi Minh City
      </span>

      <div className="flex flex-col space-y-4">
        <span className="text-base">For Quick Inquiries</span>

        <div className="flex items-center space-x-2">
          <Image src={vietnam} width={24} height={20} alt="" />
          <span>84+ 1652237832</span>
        </div>
      </div>

      <div>
        <iframe
          className="w-full h-80"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0365499584273!2d106.74992921436065!3d10.808512592299758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527768e3eb047%3A0xb557943498dfcd81!2sVi%E1%BB%87t+An+Group+-+VAG!5e0!3m2!1svi!2s!4v1545677047577"
        ></iframe>
      </div>
    </div>
  );
};
