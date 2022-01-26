import { InformationContact } from "@containers/contact/sections";
import { CheckboxItem } from "./checkbox-item";
import { DEFINiTIONS, PERSONAL_DATA } from "./constant";

export const PolicyContainer = () => {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="container">
        <div className="grid grid-cols-2 gap-24">
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-semibold">Privacy Policy</h2>
              <span className="text-gray-400">
                This Privacy Policy was last updated August 07, 2021. If there
                will be any update, amendment, or changes to our Privacy Policy
                then these will be posted on this page
              </span>
            </div>

            <div className="flex flex-col space-y-4">
              <h2 className="text-base font-medium">Interpretation</h2>
              <span className="">
                The words of which the initial letter is capitalized have
                meanings defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in plural.
              </span>
            </div>

            <div className="flex flex-col space-y-4">
              <h2 className="text-base font-medium">Definitions</h2>
              {DEFINiTIONS.map((definition, index) => (
                <CheckboxItem key={index} label={definition} />
              ))}
            </div>

            <div className="flex flex-col space-y-4">
              <h2 className="text-base font-semibold">
                Collecting and Using Your personal Data
              </h2>
              <h2 className="text-base font-medium">Types of Data Collected</h2>
              <span>
                While using Our Service, We may ask You to provide Us with
                certain personally identifiable information that can be used to
                contact or identify You. Personally identifiable information may
                include, but is not limited to:
              </span>

              <h2 className="text-base font-medium">Personal Data</h2>
              {PERSONAL_DATA.map((data, index) => (
                <CheckboxItem key={index} label={data} />
              ))}
            </div>

            <div className="flex flex-col space-y-4">
              <h2 className="text-base font-medium">Usage Data</h2>
              <div className="flex flex-col space-y-4">
                <span>
                  Usage Data is collected automatically when using the Service.
                </span>
                <span>
                  Usage Data may include information such as Your Device’s
                  Internet Protocol address (e.g. IP address), browser type,
                  browser version, the pages of our Service that You visit, the
                  time and date of Your visit, the time spent on those pages,
                  unique device identifiers and other diagnostic data.
                </span>
                <span>
                  When you access the Service by or through a mobile device, We
                  may collect certain information automatically, including, but
                  not limited to, the type of mobile device You use, Your mobile
                  device unique ID, the IP address of Your mobile device, Your
                  mobile operating system, the type of mobile Internet browser
                  You use, unique device identifiers and other diagnostic data.
                </span>
                <span>
                  {" "}
                  We may also collect information that Your browser sends
                  whenever You visit our Service or when You access the Service
                  by or through a mobile device.
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <InformationContact />
          </div>
        </div>
      </div>
    </div>
  );
};
