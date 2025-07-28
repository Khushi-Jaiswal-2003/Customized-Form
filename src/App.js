import { useState } from 'react';
import './App.css';

function App() {

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "India", streetAddress: "", city: "",
    state: "", postalCode: "", comments: false, candidates: false, offers: false, pushNotifications: ""
  })

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))

  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally the printing the value of Form Data: ");
    console.log(formData);

  }

  return (
    <div className='flex flex-col items-center mt-1'>

      <form onSubmit={submitHandler} className='bg-white p-6 rounded-lg shadow-md w-full max-w-4xl'>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            {/* First Name */}
            <label htmlFor='firstName' className="block font-medium mb-1">First Name</label>
            <input
              type='text'
              name='firstName'
              id='firstName'
              placeholder='Kartik'
              value={FormData.firstName}
              onChange={changeHandler}
              className='w-full border border-gray-300 p-2 rounded'
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor='lastName' className="block font-medium mb-1">Last Name</label>
            <input
              type='text'
              name='lastName'
              id='lastName'
              placeholder='Kumar'
              value={FormData.lastName}
              onChange={changeHandler}
              className='w-full border border-gray-300 p-2 rounded"'
            />
          </div>


          <div>
            {/* Email */}
            <label htmlFor='email' className="block font-medium mb-1">Email Address</label>
            <input
              type='text'
              name='email'
              id='email'
              placeholder='xyz@gmail.com'
              value={FormData.email}
              onChange={changeHandler}
              className='w-full border border-gray-300 p-2 rounded"' />
          </div>


          <div>
            {/* Country */}
            <label htmlFor='country' className="block font-medium mb-1">Country</label>

            <select
              id='country'
              name='country'
              value={formData.country}
              onChange={changeHandler}
              className='w-full border border-gray-300 p-2 rounded"'>

              <option>India</option>
              <option>USA</option>
              <option>Canada</option>
              <option>Mexico</option>

            </select>
          </div>

          <div>
            {/* Street Adress */}
            <label htmlFor='streetAddress' className="block font-medium mb-1">Street Address</label>
            <input
              type='text'
              name='streetAddress'
              id='streetAddress'
              placeholder='123 Main St'
              value={FormData.streetAddress}
              onChange={changeHandler}
              className='w-full border border-gray-300 p-2 rounded"'
            />
          </div>

          <div>
            {/* City */}
            <label htmlFor='city' className="block font-medium mb-1">City</label>

            <input
              type='text'
              name='city'
              id='city'
              placeholder='Indore'
              value={FormData.city}
              onChange={changeHandler}
              className='w-full border border-gray-300 p-2 rounded"'
            />
          </div>

          <div>
            {/* State */}
            <label htmlFor='state' className="block font-medium mb-1" >State /Province</label>

            <input
              type='text'
              name='state'
              id='state'
              placeholder='Madhya Pradesh'
              value={FormData.state}
              onChange={changeHandler}
              className='w-full border border-gray-300 p-2 rounded"'
            />

          </div>


          <div>
            {/* Zip CODE */}
            <label htmlFor='postalCode' className="block font-medium mb-1">ZIP / Postal code</label>

            <input
              type='text'
              name='postalCode'
              id='postalCode'
              placeholder='454773'
              value={FormData.postalCode}
              onChange={changeHandler}
              className='w-full border border-gray-300 p-2 rounded"'
            />
          </div>

        </div>

        <fieldset className="mt-6">

          <legend className="text-lg font-semibold mb-2">By Email</legend>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className='flex items-start gap-2 border p-3 rounded'>
              <input
                type='checkbox'
                name='comments'
                id='comments'
                checked={formData.comments}
                onChange={changeHandler}
                className='mt-1'></input>

              <div>
                <label htmlFor='comments' className="font-medium">Comments</label>
                <p className="text-sm text-gray-600">Get notified when someones posts a comment on a posting.</p>
              </div>
            </div>

            <div className='flex items-start gap-2 border p-3 rounded '>
              <input
                type='checkbox'
                name='candidates'
                id='candidates'
                checked={formData.candidates}
                onChange={changeHandler}
                className='mt-1'></input>

              <div>
                <label htmlFor='candidates' className="font-medium">Candidate</label>
                <p className="text-sm text-gray-600">Get notified when a candidate applies for a job.</p>
              </div>
            </div>


            <div className='flex items-start gap-2 border p-3 rounded '>
              <input
                type='checkbox'
                name='offers'
                id='offers'
                checked={formData.offers}
                onChange={changeHandler}
                className='mt-1'></input>

              <div>
                <label htmlFor='offers' className="font-medium">Offers</label>
                <p className="text-sm text-gray-600">Get notified when a candidate accepts or rejects an offer.</p>
              </div>
            </div>
          </div>
        </fieldset>

        <br></br>

        <fieldset className="mt-6">

          <legend className="text-lg font-semibold mb-2">Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          <div className="flex items-start gap-2 mb-3">
            <input
              type='radio'
              id='pushEverything'
              name='pushNotifications'
              value="Everything"
              onChange={changeHandler}
              className="mt-1">
            </input>

            <div>
              <label htmlFor="pushEverything" className="font-medium">Everything</label>
              <p className="text-sm text-gray-600">Receive all notifications.</p>
            </div>
          </div>

          <div className="flex items-start gap-2 mb-3">
            <input
              type="radio"
              id="pushEmail"
              name="pushNotifications"
              value="Same as Email"
              onChange={changeHandler}
              checked={formData.pushNotifications === "Same as Email"}
              className="mt-1"/>
            <div>
              <label htmlFor="pushEmail" className="font-medium">Same as Email</label>
              <p className="text-sm text-gray-600">Only notifications selected by email.</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <input
              type="radio"
              id="pushNothing"
              name="pushNotifications"
              value="No push Notification"
              onChange={changeHandler}
              checked={formData.pushNotifications === "No push Notification"}
              className="mt-1"
            />
            <div>
              <label htmlFor="pushNothing" className="font-medium">No Push</label>
              <p className="text-sm text-gray-600">You won’t receive any push notifications.</p>
            </div>
          </div>
        </fieldset>

        {/* Button */}
        <button className='mt-6 w-full md:w-auto bg-blue-800 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded shadow-sm transition duration-200'>Save</button>

      </form>
    // </div >
  );
}

export default App;

