import './notification.css'
const Notification = (props) => {
    const { iconurl, message,className } = props;
    const containerclass=`on-top-container ${className}`
    return (
      <div className={containerclass}>
        
        <img className='icon' src={iconurl} alt="avatar"></img>
        
        <p className='message'>{message}</p>
       
      </div>
    );
  };
  
  const Greeting = () => (
    <div className='message-container' >
      <h1 className='heading'>Notification</h1>
      <div className='notification-list-container'>
        <Notification
        className="primary"
          iconurl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          message="Information Message"
        />
        <Notification iconurl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"
        className="secondary"
         />
         <Notification iconurl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
         message="Warning Message"
         className="teratary"
         />
         <Notification iconurl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
         message="Error Message"
         className="errortory"
         />
      </div>
    </div>
  );
  export default Greeting  

  