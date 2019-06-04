import React from 'react';
import './styles.scss';
import UserHoliday from '../UserHoliday';
import Calendar from '../Calendar';
import Select from '../Select';
import PropTypes from 'prop-types';

function Main(props) {
  const {
    selectedUser,
    usersData,
    handlerChangeSelect,
    isDisabled,
    loggedUser,
    selectRange,
    selectedRange,
    year,
    selectedDay,
    goToToday,
    onNextYear,
    datePicked,
    onPrevYear,
    rangePicked,
    selectRangeAvailable
  } = props;
  return (
    <main className='Main'>
      <section className='content-info-filter'>
        <UserHoliday selectedUser={selectedUser} />
        <Select
          usersData={usersData}
          handlerChangeSelect={handlerChangeSelect}
          selectedUser={selectedUser}
        />
      </section>
      <Calendar
        selectedUser={selectedUser}
        isDisabled={isDisabled}
        loggedUser={loggedUser}
        selectRange={selectRange}
        selectedRange={selectedRange}
        year={year}
        selectedDay={selectedDay}
        goToToday={goToToday}
        onNextYear={onNextYear}
        datePicked={datePicked}
        onPrevYear={onPrevYear}
        rangePicked={rangePicked}
        selectRangeAvailable={selectRangeAvailable}
      />
    </main>
  );
}

Main.propTypes = {
  selectedUser: PropTypes.object.isRequired
};

export default Main;
