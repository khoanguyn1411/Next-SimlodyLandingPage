/* eslint-disable @next/next/no-img-element */
import { ColItem } from "./col-item";
import { description, title } from "./constant";
import actionable from '../images/actionable.png';
import Image from 'next/image';

export const ActionableSection = () => {
  return (
    <section className="pt-24 py-36">
      <div className="mx-auto flex flex-row">
        <div className="text-base text-white flex-1 flex items-center justify-center py-24"
        style={{
          background:
            'linear-gradient(96.03deg, #0B9BFB 1.05%, rgba(29, 65, 123, 0) 180.46%, #BDE1FF 180.46%)',
        }}
        >
          <div className="flex flex-col px-32 justify-center space-y-16">
            <div className="flex flex-col space-y-4">
              <h2 className=" text-3xl font-semibold">{title}</h2>

              <span>{description}</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <ColItem title="8K+" description="Companies use our products from over the world"/>
                <ColItem title="25K+" description="Countries have our customer"/>
                <ColItem title="98%" description="Customers satisfaction with our products"/>
                <ColItem title="10k+" description="Issues resolved by 3 years"/>
            </div>
          </div>
        </div>

      	<div
					className='flex flex-1 flex-row w-full'
          style={{
						backgroundImage: "url('/product/test.jpg')",
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'left',
					}}
				> 
       
				</div>
      </div>
    </section>
  );
};
