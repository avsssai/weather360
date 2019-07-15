import React from 'react';

class Header extends React.Component{
    render(){
        return(

            <div className="container mt-3">
                <div className="row justify-content-md-center">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <h1 className='text-center'>Weather App</h1>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        )
    }
}
export default Header;