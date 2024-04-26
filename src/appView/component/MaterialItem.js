import './Material-Room.css';

function MaterialItem(props) {
    const { material } = props;
    return (
        <div className="card">
            <img className="card-img-top" src={material.thumbnailUrl} />
            <button className='card-text'>{material.title}</button>
        </div>
   

    );
}

export default MaterialItem;