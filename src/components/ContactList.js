import './Contact.css'

const users = [
    {
      name: 'Robert Reyes',
      avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
      online: false
    },
    {
      name: 'Nellie Caldwell',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      online: true
    },
    {
      name: 'Vernon Mason',
      avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
      online: true
    },
    {
      name: 'Erica Hunt',
      avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
      online: false
    },
    {
      name: 'Juanita Phillips',
      avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
      online: true
    }
  ];

function ContactList({name, avatar, online}){

    return(
        users.map(({name, avatar, online}) => {
            return(
                <div className="Contact">
                    <img className="avatar" alt="avatar" src={avatar} />
                    <div>
                        <h3 className="name">{name}</h3>
                        <br />
                        <div className="status">
                            <i className={online ? "status-online" : "status-offline"} />
                            <span className="status-text">{online ? "online" : "offline"}</span>
                        </div>
                    </div>
                </div>
            )
        })

    )


}

export default ContactList