import React from "react";
import { BsGrid3X2GapFill, BsList } from "react-icons/bs";

function Navigator({
  title,
  breadcrumbs,
  buttons,
  listDisplay,
  setListDisplay,
  activeButtonIndex,
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
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className={`btn ${
                    index === activeButtonIndex
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
          <button
            onClick={() => setListDisplay(!listDisplay)}
            className={`block ${
              listDisplay ? "bg-[#F88220]" : "bg-[#D6D6D6]"
            } hover:bg-[#F37D1A] p-1 rounded-md`}
          >
            <BsList className='w-7 h-7 text-white' />
          </button>
          <button
            onClick={() => setListDisplay(!listDisplay)}
            className={`block ${
              listDisplay ? "bg-[#D6D6D6]" : "bg-[#F88220]"
            } p-1 rounded-sm`}
          >
            <BsGrid3X2GapFill className='w-7 h-7 text-white' />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Navigator;
