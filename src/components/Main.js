import React from "react";

//stateless component...
export const Main = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <button
                        className="btn btn-primary"
                        onClick={() => props.changeUsername('Anna')}>Find Username
                    </button>
                </div>
            </div>
        </div>
    );
}



