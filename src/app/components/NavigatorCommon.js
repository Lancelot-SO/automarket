import React from "react";
import { BsGrid3X2GapFill, BsList } from "react-icons/bs";

function NavigatorCommon({
  title,
  breadcrumbs,
  leftButtons,
  rightButtons,
  leftActiveButtonIndex,
  rightActiveButtonIndex,
}) {
  return (
    <section className='grid md:grid-cols-3 gap-4 md:gap-2 xl:gap-14 md:items-center'>
      <div className='col-span-2'>
        <h2 className='text-xl'>
          <strong>{title}</strong>
        </h2>
        <div className='text-xs breadcrumbs '>
          <ul>
            {breadcrumbs.map((crumb, index) => (
              <li key={index}>
                {crumb.link ? (
                  <a href={crumb.link}>{crumb.text}</a>
                ) : (
                  <span>{crumb.text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className='flex w-full flex-row justify-between pt-20'>
          <nav>
            <div className='space-x-2'>
              {leftButtons.map((button, index) => (
                <button
                  key={index}
                  className={`btn ${
                    index === leftActiveButtonIndex
                      ? "bg-[#F88220]"
                      : "bg-[#D6D6D6]"
                  } text-white btn-sm capitalize h-[2.5rem] transition-colors duration-300 hover:bg-[#F88220]`}
                  onClick={button.onClick}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
      <div className='col-span-1 sm:place-self-end'>
        <div className='flex flex-row space-x-1 md:pt-[10rem] pt-0'>
          <div className='space-x-2'>
            {rightButtons.map((button, index) => (
              <button
                key={index}
                className={`btn ${
                  index === rightActiveButtonIndex
                    ? "bg-[#F88220]"
                    : "bg-[#D6D6D6]"
                } text-white btn-sm capitalize h-[2.5rem] transition-colors duration-300 hover:bg-[#F88220]`}
                onClick={button.onClick}
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavigatorCommon;
