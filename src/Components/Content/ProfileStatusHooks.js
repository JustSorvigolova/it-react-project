import React, {useEffect, useState} from "react"



const ProfileStatusHooks=(props)=> {
    let [state, setState] = useState(false)
    let [status, setStatus] = useState(status)

        useEffect(()=>{
            setStatus(props.status)
        }, [props.status])


    let activateEditMode = () => {
        setState( true);
    }

    const deactivateEditMode = () => {
        setState(false)
        props.updateStatus(status);
    }
      let onStatusChange = (e)=>{
       setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!setState &&
            <div>
                <span onDoubleClick={activateEditMode}> {props.status || "----"}</span>
            </div>
            }
            {setState &&
            <div>
                <input onChange={onStatusChange}
                       value={status}
                    autoFocus={true}
                       onBlur={deactivateEditMode}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusHooks;