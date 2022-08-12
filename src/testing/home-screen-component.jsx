import './home-screen-style.css'


function Home() {

    return( 
    <div className='home-screen-form'>
    <h1 className='home-screen-title'>Enter ID Number</h1>
    <p><b> If you are not a member you must create a new profile</b></p>

    <input className='home-screen-input' type="password" placeholder="'0000'">

    </input>
<button className='home-screen-button' placeholder='Submit'>

</button>
    </div>
)}

export default Home;