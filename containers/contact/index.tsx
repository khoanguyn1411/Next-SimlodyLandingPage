import { Button, FormItem, Input } from "@components/elements";
import Image from "next/image";
import vietnam from "./images/vietnam.png";
export const ContactContainer = () => {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="container">
        <div className="grid grid-cols-2 gap-24">
          <div className="col-span-1">
            <div className="flex flex-col justify-center space-y-4 max-w-xl">
              <h2 className="text-4xl font-semibold">Contact Us</h2>

              <h2 className="text-gray-400 text-base">
                Fill out the form to get a free consultation.
              </h2>

              <form>
                <FormItem label="Name of Company" isRequired>
                  <Input
                    placeholder="ex: TungTung venture company"
                    type="primary"
                  />
                </FormItem>

                <FormItem label="Nature of bussines">
                  <Input
                    placeholder="ex: TungTung venture company"
                    type="primary"
                  />
                </FormItem>

                <FormItem label="Your email address" isRequired>
                  <Input placeholder="ex: TungTung@gmail.com" type="primary" />
                </FormItem>

                <FormItem label="Contact number" isRequired>
                  <Input placeholder="ex: +84 901 960 ***" type="primary" />
                </FormItem>

                <FormItem label="What can we help you" isRequired>
                  <textarea
                    placeholder="ex: I want to build new Saas product for my company..."
                    rows={3}
                    className="px-4 py-3 bg-gray-100 rounded-md outline-none w-full"
                  />
                </FormItem>

                <Button text="Submit Aplication" type="primary" block />
              </form>
            </div>
          </div>

          <div className="col-span-1">
            <div className="flex flex-col space-y-4">
              <h2 className="text-4xl font-semibold">Office</h2>

              <span className="text-base">
                Vietnam <br /> Vietan building, No. 4E, Street 6, Ward An Phu,
                District 2, Ho Chi Minh City
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
          </div>
        </div>
      </div>
    </div>
  );
};
