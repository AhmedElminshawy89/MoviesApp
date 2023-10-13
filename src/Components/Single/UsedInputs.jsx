import { Fragment } from "react";

export const Message = ({label,placeholder}) => {
    return(
        <div className="text-sm w-full">
            <label htmlFor={label} className="text-border font-semibold">{label}</label>
            <textarea name={label} id={label} className="w-full h-40 mt-2 p-6 bg-main border border-border rounded focus:outline-none focus:border-primary" placeholder={placeholder}></textarea>
        </div>
    );
};


export const Select = ({label,option,onChange}) => {
    return(
    <Fragment>
        <label htmlFor={label} className="text-border font-semibold">{label}</label>
        <select name={label} id={label} className="w-full mt-2 px-6 py-4 text-text bg-main border border-border rounded" onChange={onChange}>
            {option.map((o,i)=>(
                <option key={i} value={o.value}>
                    {o.title}
                </option>
            ))}
        </select>
    </Fragment>
    )
} 

export const Input = ({label,placeholder,type,bg}) => {
    return(
    <div className="text-sm w-full">
        <label htmlFor={label} className="text-border font-semibold">{label}</label>
        <input required type={type} placeholder={placeholder} className={`w-full text-sm mt-2 p-4 text-white ${bg?"bg-main":"bg-dry"} border border-border rounded`}/>
    </div>
    )
} 
