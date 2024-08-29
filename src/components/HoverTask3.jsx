//using map method

//Task 3

function Hover (){
    const cardTitle = ["JavaScript", "React.js", "CSS", "Bootstrap", "HTML", "Java"];
    return(
        <>
            <div className="container">
                <div className="row">
                    {cardTitle.map ((cardTitle) =>(
                        <div key={cardTitle} className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
                        <div className="card card-hover">
                            <div className="card-body">
                                <div className="card-title">
                                    <h5>{cardTitle}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Hover;