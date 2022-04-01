import React from 'react';

const daysOfTheWeek = {
    '0': `Sunday`,
    '1': `Monday`,
    '2': `Tuesday`,
    '3': `Wednesday`,
    '4': `Thursday`,
    '5': `Friday`,
    '6': `Saturday`,
}

const getCalendarCells = (month, events) => {
    month = Number(month);

    const firstDayOfTheMonth = new Date(
        Date.UTC(
            new Date().getFullYear(),
            month,
            1,
            new Date().getUTCHours(),
        )
    ).getDay();

    const lastDayOfTheMonth = new Date(
        Date.UTC(
            new Date().getFullYear(),
            month+1,
            1-1,
            new Date().getUTCHours(),
        )
    ).getDate();

    const lastDayOfLastMonth = new Date(
        Date.UTC(
            new Date().getFullYear(),
            month,
            1-1,
            new Date().getUTCHours(),
        )
    ).getDate();

    const dayCells = [];

    const returnCalendarCell = (details) => {
        return <li
            key={Math.floor(Math.random() * 99999)}
            {...(details.eventType) ? {'data-eventtype': details.eventType} : null}
            {...{'data-isoutermonth': details.isOuterMonth}}
            {...{'data-isthefirstisonasunday': details.isTheFirstIsOnASunday}}
            {...{'data-dayofweek': details.dayOfWeek}}><label>{details.dayCellValue}</label>
        </li>;
    };


    let dayCellValue;
    let lastMonthIncrementer = 1;
    let nextMonthIncrementer = 1;
    let dayOfTheWeek = 0;
    let isTheFirstIsOnASunday = false;
    let isOuterMonth = true;
    let eventType = null;

    let dateInjectionState = 'injectIngLastMonthDates';
    
    // The design has 35 cells, but calendars have 42 cells
    for (let i = 0; i < 42; i++) {

        if (dateInjectionState === 'injectIngLastMonthDates') {
            if (firstDayOfTheMonth === i) {
                dateInjectionState = 'injectIngSelectedMonthDates';
                dayCellValue = 1;
                isOuterMonth = false;

                if (i === 0) isTheFirstIsOnASunday = true;
            } else {
                isOuterMonth = true;
                dayCellValue = (lastDayOfLastMonth - firstDayOfTheMonth)+lastMonthIncrementer;
                lastMonthIncrementer++;
            }
        }

        if (dateInjectionState === 'injectIngSelectedMonthDates') {
            if (dayCellValue > lastDayOfTheMonth) {
                dateInjectionState = 'injectIngNextMonthDates';
            } else {
                events.forEach((event) => {
                    if (event.date === dayCellValue) {
                        eventType = event.type;
                    }
                });
            }
        }

        if (dateInjectionState === 'injectIngNextMonthDates') {
            isOuterMonth = true;
            dayCellValue = nextMonthIncrementer;
            nextMonthIncrementer++;
        }

        const details = {
            'dayCellValue': dayCellValue,
            'isOuterMonth': isOuterMonth,
            'isTheFirstIsOnASunday': isTheFirstIsOnASunday,
            'dayOfWeek': daysOfTheWeek[dayOfTheWeek],
            'eventType': eventType
        };

        dayCells[dayCells.length] = returnCalendarCell(details);
        dayCellValue++;
        if (isTheFirstIsOnASunday === true) isTheFirstIsOnASunday = false;
        (dayOfTheWeek === 6) ? dayOfTheWeek = 0 : dayOfTheWeek++;
        eventType = null;
    }
    return dayCells;
}

export default getCalendarCells;