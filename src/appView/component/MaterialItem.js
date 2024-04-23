import './Material-Room.css';

function MaterialItem(props) {
    const { material } = props;
    return (
        <div className="card">
            <img className="card-img-top" src={material.thumbnailUrl} />
            <a href="" className='card-text'><button>{material.title}</button></a>
        </div>
   

    );
}

export default MaterialItem;