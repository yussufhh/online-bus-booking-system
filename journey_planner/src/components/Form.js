import './Form.css';

export default function Multiple() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const trainType = formData.get('trainType');
    const fromLocation = formData.get('fromLocation');
    const toLocation = formData.get('toLocation');

    alert(`Train Type: ${trainType}, From: ${fromLocation}, To: ${toLocation}`);
  };

  return (
    <div className='container12'>
      <h3 className='header-text'>Journey_Planner Express - Online Booking</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="trainType" className='text-head'>Bus type</label>
        <select id="trainType" name="trainType">
          <option value="">Select</option> {/* Placeholder option */}
          <option value="express">Express</option>
          <option value="local">Local</option>
          <option value="sleeper">Sleeper</option>
        </select>

        <label htmlFor="fromLocation" className='text-head'>From</label>
        <select id="fromLocation" name="fromLocation">
          <option value="">Select</option> {/* Placeholder option */}
          <option value="mandera">Mandera</option>
          <option value="wajir">Wajir</option>
          <option value="garissa">Garissa</option>
          <option value="marsabit">Marsabit</option>
          <option value="isiolo">Isiolo</option>
          <option value="lamu">Lamu</option>
          <option value="mombasa">Mombasa</option>
          <option value="nairobi">Nairobi</option>
          <option value="kisumu">Kisumu</option>
          {/* Add more counties as needed */}
        </select>

        <label htmlFor="toLocation" className='text-head'>To</label>
        <select id="toLocation" name="toLocation">
          <option value="">Select</option> {/* Placeholder option */}
          <option value="mandera">Mandera</option>
          <option value="wajir">Wajir</option>
          <option value="garissa">Garissa</option>
          <option value="marsabit">Marsabit</option>
          <option value="isiolo">Isiolo</option>
          <option value="lamu">Lamu</option>
          <option value="mombasa">Mombasa</option>
          <option value="nairobi">Nairobi</option>
          <option value="kisumu">Kisumu</option>
          {/* Add more counties as needed */}
        </select>

        <label className='text-head'>Departure Date</label>
        <input
          type="date"
          id="date"
          name="date"
        />

        <button type="submit">Book a Bus</button>
      </form>
    </div>
  );
}
