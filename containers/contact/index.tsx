import { Button, FormItem, Input } from "@components/elements";

import { InformationContact } from "./sections";

export const ContactContainer = () => {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="col-span-1">
            <div className="flex flex-col justify-center space-y-4 max-w-xl">
              <h2 className="text-3xl font-semibold">Contact Us</h2>

              <h2 className="text-gray-400">
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
           <InformationContact/>
          </div>
        </div>
      </div>
    </div>
  );
};
