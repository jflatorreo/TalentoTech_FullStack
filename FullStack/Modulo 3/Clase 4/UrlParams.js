import {useParams} from "react-router-dom";

function UrlParams() {
    const id = useParams();

    return(
        <diV>
            <h1>Id del usuario:{id}</h1>
        </diV>

    )

}

//     URLbase/users/:id
//En el componente de rutas:
<Rutes>
    <Route path={"users/:id"} element={<UrlParams/>}></Route>
</Rutes>