import loading from './loading.gif'

const spinner =()=>{
    return (
        <div className="text-center">
            <img src={loading} alt="Loading..." className="loading-gif" width={40} />
        </div>
    )
}

export default spinner
