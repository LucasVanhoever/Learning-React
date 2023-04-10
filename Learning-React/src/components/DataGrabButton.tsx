import React from 'react'

interface Props
{
  fetchMessage: () => void;
}
const DataGrabButton = ({fetchMessage}: Props) => {

    return (
        <button className="btn btn-primary" onClick={fetchMessage}>
        Get message from backend
        </button>
    )
}

export default DataGrabButton