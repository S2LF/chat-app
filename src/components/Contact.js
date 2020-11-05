
import './Contact.css'

function Contact(){

    return(
        <div className="Contact">
            <img className="avatar" alt="avatar" src="https://randomuser.me/api/portraits/men/86.jpg"/>
            <div>
                <h3 className="name">Tracy Gregory</h3>
                <br/>
                <div className="status"><i className="status-online"/> <span className="status-text">online</span></div>
            </div>
        </div>
    )

}

export default Contact