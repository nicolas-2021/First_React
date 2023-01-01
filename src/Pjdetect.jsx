
export function Pjdetect(props){
    return <li>
        <img src={props.imagen}  alt={props.titulo}/>
        <div className="titulo">
        {props.titulo} 
        </div>
        </li>
    
}