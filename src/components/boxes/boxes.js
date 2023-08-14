import './boxes.css'
const Boxes =(props)=>{
    const {text,className}=props;
    const containerClass = `on-top-container ${className}`
    return(
<div className={containerClass}>
<p>{text}</p>
</div>
    )
}
const BoxesList =()=>(
    <div className='container-list'>
        <h1 className='box-heading'>Boxes</h1>
        <div className='only-boxes-container'>
            <Boxes
            className="small"
            text="small"
             />
             <Boxes
            className="medium"
            text="medium"
             />
             <Boxes
            className="large"
            text="large"
             />
        </div>
    </div>
)
export default BoxesList