import { MainContext, useContext } from '../MainContext'

const LeaveComponentText = () => {

    const { position } = useContext(MainContext);

    return (
        <div>
            <div className='leave-comment-text' style={{ position: 'fixed', top: position.y, left: position.x + 20 }}> Yorum yazmak için tıkla </div>
        </div>
    )
}

export default LeaveComponentText