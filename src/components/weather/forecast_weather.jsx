import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const WEEKS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
export const ForecastWeather = ({ data }) => {
  const dayinWeek = new Date().getDay();
  const forecastDays = WEEKS.slice(dayinWeek, WEEKS.length).concat(
    WEEKS.slice(0, dayinWeek)
  );

  console.log(forecastDays);
  return (
    <>
      <div className="flex justify-center flex-col ">
        <h1 className="text-xl font-semibold my-2">All Weather in the Week!</h1>
        <Accordion allowZeroExpanded>
          {data.list.splice(0, 7).map((item, index) => (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="flex flex-row justify-between text-center bg-forecast-color pr-4 py-2 h-9 m-1 rounded-xl mx-auto">
                    <div className="flex flex-row-reverse items-center gap-3">
                      <label htmlFor="">{forecastDays[index]}</label>
                      <img
                        className="w-10"
                        src={`icons/${item.weather[0].icon}.png`}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-row gap-3">
                      <label htmlFor="">{item.weather[0].description}</label>
                      <label htmlFor="">
                        {item.main.temp_min}/{Math.round(item.main.temp_max)} °C
                      </label>
                    </div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel></AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};
