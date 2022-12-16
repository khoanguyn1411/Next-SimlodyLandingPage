/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import React, { ReactNode } from "react";
import { Feature } from "../constant";

type Props = Feature & { children?: ReactNode; className?: string };

const ImageComponent: React.FC<Props> = (props) => {
  return (
    <div
      className={classNames(
        { "col-span-2 hidden md:block": !props.className },
        props.className
      )}
    >
      <div className="w-full relative">
        <img src={props.image} alt={props.title} />
        <div className="hidden md:block">{props.children}</div>
      </div>
    </div>
  );
};

export const GeneralSection: React.FC<Props> = (props) => {
  return (
    <div
      className={classNames(
        "grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-10 justify-between items-center"
      )}
      data-aos={!props.isRight ? "fade-right" : "fade-left"}
      data-aos-once
      data-aos-delay="200"
      data-aos-duration="500"
    >
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
      {
        <ImageComponent
          {...props}
          className={"block col-span-1 bg-primary-50 rounded-lg md:hidden"}
        />
      }
    </div>
  );
};
