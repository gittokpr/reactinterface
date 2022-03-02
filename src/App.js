import { useState, useEffect, useCallback } from 'react';
import { BiCalendar } from 'react-icons/bi';
import AddAppointment from './components/AddAppointment';
import AppointmentInfo from './components/AppointmentInfo';
import Search from './components/Search';

function App() {

  let [appointmentList, setAppointmentList] = useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("petName");
  let [orderBy, setOrderBy] = useState("asc");

  const fetchData = useCallback(
    () => {
      fetch('./data.json')
        .then(response => response.json())
        .then(data => setAppointmentList(data))
    },
    [],
  )

  const filteredList = appointmentList.filter(
    appointment => {
      return (
        appointment.petName.toLowerCase().includes(query.toLowerCase()) ||
        appointment.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        appointment.aptNotes.toLowerCase().includes(query.toLowerCase())
      )
    }
  ).sort((a, b) => {
    let order = (orderBy === "asc") ? 1 : -1;
    return (
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order : 1 * order
    )
  })

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="container mx-auto p-3 mt-3 font-thin">
      <h1 className='text-5xl mb-3'>
        <BiCalendar className='inline-block text-red-400 aling-top' />Your Appointments
      </h1>
      <AddAppointment
        onSendAppointment={newAppointment => setAppointmentList([...appointmentList, newAppointment])}
        lastId={appointmentList.reduce((max, item) => (Number(item.id) > max ? Number(item.id) : max), 0)}
      />
      <Search query={query} onQueryChanged={
        (query) => setQuery(query)
      }
        sortBy={sortBy}
        onSortByChange={(mySort) => setSortBy(mySort)}
        orderBy={orderBy}
        onOrderByChange={(myOrder) => setOrderBy(myOrder)}
      />
      {
        filteredList.map(appointment => (
          <AppointmentInfo appointment={appointment} deleteAppointment={
            (appointmentId) => setAppointmentList(appointmentList.filter(appointment => appointment.id !== appointmentId))
          } />
        ))
      }
    </div>
  );
}

export default App;
