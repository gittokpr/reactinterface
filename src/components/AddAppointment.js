import { useState } from 'react';
import { BiCalendarPlus } from 'react-icons/bi';
const AddAppointment = ({ onSendAppointment, lastId }) => {

    const clearData = {
        ownerName: '',
        petName: '',
        date: '',
        time: '',
        note: ''
    }
    let [toggleAppointment, setToggleAppointment] = useState(false);
    let [formData, setFormData] = useState(clearData);

    const submitFormData = () => {
        const appointmentInfo = {
            id: lastId,
            ownerName: formData.ownerName,
            petName: formData.petName,
            aptDate: formData.date + '' + formData.time,
            aptNotes: formData.note
        }
        onSendAppointment(appointmentInfo);
        setFormData(clearData);
        setToggleAppointment(!toggleAppointment);
    }

    return (
        <div>
            <button className={`bg-blue-400 text-white px-2 py-3 w-full text-left ${toggleAppointment ? 'rounded-t-md' : 'rounded-md'}`}
                onClick={() => { setToggleAppointment(!toggleAppointment) }}>
                <div>
                    <BiCalendarPlus className="inline-block align-text-top" />
                    Add Appointment
                </div>
            </button>
            {toggleAppointment &&
                <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Owner Name
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input type="text" name="ownerName" id="ownerName"
                                onChange={(event) => setFormData({ ...formData, ownerName: event.target.value })}
                                value={formData.ownerName}
                                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="petName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Pet Name
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input type="text" name="petName" id="petName"
                                onChange={(event) => setFormData({ ...formData, petName: event.target.value })}
                                value={formData.petName}
                                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="aptDate" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Apt Date
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input type="date" name="aptDate" id="aptDate"
                                onChange={(event) => setFormData({ ...formData, date: event.target.value })}
                                value={formData.date}
                                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="aptTime" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Apt Time
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input type="time" name="aptTime" id="aptTime"
                                onChange={(event) => setFormData({ ...formData, time: event.target.value })}
                                value={formData.time}
                                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="aptNotes" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Appointment Notes
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <textarea id="aptNotes" name="aptNotes" rows="3"
                                onChange={(event) => setFormData({ ...formData, note: event.target.value })}
                                value={formData.note}
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Detailed comments about the condition"></textarea>
                        </div>
                    </div>


                    <div className="pt-5">
                        <div className="flex justify-end">
                            <button type="submit"
                                onClick={() => submitFormData()}
                                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default AddAppointment;