import './DormitoryCompo.css';
function DormitoryItem(props) {
    const { item, onPictureClick } = props;
    return (
        <div className='dormitory-item'>
            <img className='responsive-img scale-img' src={item.image} onClick={() => onPictureClick(item)} />
            <p>{item.title}</p>
        </div>
    );
}

export default DormitoryItem;