import cosas from './cosas.json';
import { Pjdetect } from './Pjdetect';

export function Lista() {
    return (
        <div>
            <ul>
                {
                    cosas.map((element)=>(
                        <Pjdetect key={element.id} titulo={element.titulo} imagen={element.imagen}/>
                    ))
                }
            </ul>
        </div>
    );
};