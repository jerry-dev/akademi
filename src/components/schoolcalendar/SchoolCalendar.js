import React from 'react';
import styles from './schoolcalendar.module.css';
import SectionTitle from '../sectiontitle/SectionTitle.js';
import getCalendarCells from './getCalendarCells.js';
import getOptions from './getOptions.js';
import selectArrow from '../../assets/icons/shared/dropdown.svg';

// Will pass event dates to this from the parent container
const SchoolCalendar = (props) => {
    const [ selectedMonth, setSelectedMonth ] = React.useState(new Date().getMonth());

    const selectArrowStyles = {backgroundImage: `url(${selectArrow})`, backgroundSize: "1.5rem 1.5rem", backgroundRepeat: "no-repeat", backgroundPosition: "right"}
    return (
        <section className={styles.schoolCalendar}>
            <div>
                <header>
                    <SectionTitle title="School Calendar"/>
                    <select style={selectArrowStyles} value={selectedMonth} onChange={(event) => setSelectedMonth(event.target.value)}>
                        {getOptions()}
                    </select>
                </header>
            </div>
            <div className={styles.detailsContainer}>
                <ul className={styles.dayLabels}>
                    <li>Sun</li>
                    <li>Mon</li>
                    <li>Tue</li>
                    <li>Wed</li>
                    <li>Thu</li>
                    <li>Fri</li>
                    <li>Sat</li>
                </ul>
                <ul className={styles.calendarBlocks}>
                    {/* props.events will be passed to getCalendarCells for processing */}
                    {getCalendarCells(selectedMonth)}
                </ul>
            </div>
        </section>
    );
}

export default SchoolCalendar;