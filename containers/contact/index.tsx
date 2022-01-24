import { Button, FormItem, Input } from "@components/elements";

export const ContactContainer = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="container">
        <div className="grid grid-cols-3 gap-32">
          <div className="col-span-2 space-y-8">
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

          <div className="col-span-1 flex justify-center w-full">
            <div className="flex flex-col space-y-8">
              <h2 className="text-4xl font-semibold">Office</h2>

              <span className="text-base">
                Vietnam <br /> Vietan building, No. 4E, Street 6, Ward An Phu,
                District 2, Ho Chi Minh City
              </span>


              <div className="flex flex-col space-y-4">
              <span className="text-base">For Quick Inquiries</span>

                <span>84+ 1652237832</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
