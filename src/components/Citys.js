import React from 'react'
import { useForm } from 'react-hook-form'
export default function Citys(props) {
    
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {

        props.changeLocation(data.place)
    }

    return (

        <div>
            <form className="form-group" onSubmit={handleSubmit(onSubmit)} > 
                <select className="form-control mb-2" name="place" ref={register}>
                    <option>Bogota</option>
                    <option>London</option>
                    <option>Soacha</option>
                    <option>Mexico</option>
                    <option>Bucaramanga</option>
                </select>
                
                <button className="btn btn-outline-dark">Select Location</button>
            </form>
        </div>
    )
}
