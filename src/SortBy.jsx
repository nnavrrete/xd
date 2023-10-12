import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function SortBy () {
        
        const [sortOrder, setSortOrder] = useState('asc');

       

        

        return(<div className="mt-5" style={{ width:'60%'}}>
                    <div class="btn-group" role="group">
        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Ordenar Por
        </button>
        <ul class="dropdown-menu">
        <button type="button" class="btn btn- w-100">Precio Asc</button>
        <button type="button" class="btn btn- w-100">Precio Des</button>
        <button type="button" class="btn btn- w-100">Valoracion</button>
        <button type="button" class="btn btn- w-100">Servicios</button>
        </ul>
    </div>
        </div>);





}

export default SortBy;