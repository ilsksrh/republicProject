import React, { useState, useEffect } from 'react';
import './CalendarComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import authHeader from '../../services/auth-header';

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [plans, setPlans] = useState([]);

  const months = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];

  useEffect(() => {
    fetchPlans();
  }, [selectedMonth, selectedYear]);

  const fetchPlans = () => {
    axios.get(`http://localhost:8080/api/plans/${selectedYear}/${selectedMonth + 1}`, { headers: authHeader() })
      .then(response => {
        setPlans(response.data);
      })
      .catch(error => {
        console.error('Error fetching plans:', error);
      });
  };

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendar = () => {
    const days = [];
    const totalDays = daysInMonth(selectedMonth, selectedYear);
    for (let i = 1; i <= totalDays; i++) {
      days.push(i);
    }
    return days;
  };

  const handleDateClick = (day) => {
    setSelectedDate(day === selectedDate ? null : day);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
    setSelectedDate(null);
  };

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
    setSelectedDate(null);
  };

  const addPlan = () => {
    if (selectedDate === null) {
      alert('Выберите дату, чтобы добавить план.');
      return;
    }

    const formattedDate = `${selectedYear}-${(selectedMonth + 1).toString().padStart(2, '0')}-${selectedDate.toString().padStart(2, '0')}`;

    const planText = prompt(`Введите план на ${selectedDate} ${months[selectedMonth]} ${selectedYear}:`);
    if (planText) {
      axios.post('http://localhost:8080/api/plans/create', {
        date: formattedDate,
        description: planText
      }, { headers: authHeader() })
        .then(response => {
          console.log('Plan added successfully:', response.data);
          fetchPlans(); // Update plans after successful addition
        })
        .catch(error => {
          console.error('Error adding plan:', error);
        });
    }
  };

  const deletePlan = (planId) => {
    axios.delete(`http://localhost:8080/api/plans/${planId}`, { headers: authHeader() })
      .then(response => {
        console.log('Plan deleted successfully:', response.data);
        fetchPlans(); // Update plans after successful deletion
      })
      .catch(error => {
        console.error('Error deleting plan:', error);
      });
  };

  return (
    <div className="calendar-container">
      <div className="calendar">
        <div className="calendar-header">
          <select className="month-select" value={selectedMonth} onChange={handleMonthChange}>
            {months.map((month, index) => (
              <option key={index} value={index}>{month}</option>
            ))}
          </select>
          <input type="number" className="year-input" value={selectedYear} onChange={handleYearChange} />
        </div>
        <div className="days-grid">
          {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day, index) => (
            <div key={index} className="day-name">{day}</div>
          ))}
          {generateCalendar().map((day) => {
            const formattedDate = `${selectedYear}-${(selectedMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
            const planForDay = plans.find(plan => plan.date === formattedDate);
            const hasPlans = planForDay && planForDay.plans && planForDay.plans.length > 0;

            return (
              <div
                key={day}
                className={`calendar-day ${selectedDate === day ? 'selected' : ''}`}
                onClick={() => handleDateClick(day)}
              >
                {day}
                {hasPlans && <div className="plan-indicator" />}
              </div>
            );
          })}
        </div>
        {selectedDate !== null &&
          <div className="selected-date-info">
            <p>{selectedDate} {months[selectedMonth]}, {selectedYear}</p>
            {plans.find(plan => plan.date === `${selectedYear}-${(selectedMonth + 1).toString().padStart(2, '0')}-${selectedDate.toString().padStart(2, '0')}`) ?
              <div>
                {plans.find(plan => plan.date === `${selectedYear}-${(selectedMonth + 1).toString().padStart(2, '0')}-${selectedDate.toString().padStart(2, '0')}`).plans.length > 0 ? (
                  <>
                    <p>Планы на {selectedDate} {months[selectedMonth]}:</p>
                    {plans.find(plan => plan.date === `${selectedYear}-${(selectedMonth + 1).toString().padStart(2, '0')}-${selectedDate.toString().padStart(2, '0')}`).plans.map((plan, index) => (
                      <div key={index} className="plan-item">
                        <p>{index + 1}. {plan.description}</p>
                        <button className="delete-button" onClick={() => deletePlan(plan.id)}>
                          <FontAwesomeIcon icon={faTimes} />
                        </button>
                      </div>
                    ))}
                  </>
                ) : (
                  <p className="no-plans">Нет планов на {selectedDate} {months[selectedMonth]}</p>
                )}
              </div>
              :
              <p className="no-plans">Нет планов на {selectedDate} {months[selectedMonth]}</p>
            }
            {(!plans.find(plan => plan.date === `${selectedYear}-${(selectedMonth + 1).toString().padStart(2, '0')}-${selectedDate.toString().padStart(2, '0')}`) ||
              plans.find(plan => plan.date === `${selectedYear}-${(selectedMonth + 1).toString().padStart(2, '0')}-${selectedDate.toString().padStart(2, '0')}`).plans.length < 10) &&
              <button className="add-plan-button" onClick={addPlan}>Добавить план на {selectedDate} {months[selectedMonth]}</button>
            }
          </div>
        }
      </div>
    </div>
  );
};

export default CalendarComponent;
