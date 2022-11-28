/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from "react";
import { Feature } from "../constant";

type Props = Feature & { children?: ReactNode };

const ImageComponent: React.FC<Props> = (props) => {
  return (
    <div className="col-span-2">
      <div className="w-full relative">
        <img className="w-full" src={props.image} alt={props.title} />
        {props.children}
      </div>
    </div>
  );
};

export const GeneralSection: React.FC<Props> = (props) => {
  return (
    <div className="grid grid-cols-3 gap-4 justify-between items-center">
      {!props.isRight && <ImageComponent {...props} />}

      <div className="flex flex-col col-span-1">
        <h2 className="text-2xl font-medium text-primary-800">{props.title}</h2>
        <span className="mt-2 text-gray-400 text-base">
          {props.description}
        </span>
        <div className="flex flex-col mt-6 space-y-4">
          {props.contents.map((content, idx) => (
            <div key={idx} className="flex items-center space-x-2 text-base">
              <i className="fas fa-check-circle text-primary-400" />
              <span>{content}</span>
            </div>
          ))}
        </div>
      </div>

      {props.isRight && <ImageComponent {...props} />}
    </div>
  );
};
