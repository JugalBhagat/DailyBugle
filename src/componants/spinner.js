import loading from './loading.gif'

const spinner =()=>{
    return (
        <div className="text-center">
            <img src={loading} alt="Loading..." className="loading-gif" width={45} />
        </div>
    )
}

export default spinner
