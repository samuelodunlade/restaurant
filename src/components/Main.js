import { useEffect, useState } from "react";

export const Main = () => {

    const[meals, setMeals] =  useState(null);

    function getMeals(){
        const getM = fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
                    .then(function(response){
                        return response.json();
                    })
                    .then(function(result){
                       setMeals(result);
                    })
                    .catch(function(err){
                        console.log(err)
                    })
    }

    useEffect(function(){
        getMeals();
    }, [])






  return (
    <>
        <main>
            <section
                className="container-fluid p-0 m-0"
                style={{
                backgroundImage: 'url("assets/images/banner.jpg")',
                height: 200,
                backgroundSize: "cover"
                }}
            >
                <div
                className="row"
                style={{ backgroundColor: "rgba(0,0,0,0.6)", height: "inherit" }}
                >
                <div className="col">
                    <h1 className="text-center text-light mt-4">
                    Browse our Range of Mouth-Watering Menu
                    </h1>
                </div>
                </div>
            </section>

            <div className="album py-5 bg-light">
                <div className="container" id="shopnow">
                <div className="row">
                    <div className="col-md-12">
                    <h5 className="mb-3 text-danger">CATEGORIES</h5>
                    <div
                        className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3"
                        id="shopnow"
                    >
                    {
                        // check if meals is not empty and the map through it
                        meals && meals.categories.map(function(meal){
                            return (
                                <div className="col">
                                    <div className="card shadow-sm">
                                        <img src={meal.strCategoryThumb} alt="" className="img-fluid" />
                                        <div className="card-body">
                                        <p className="card-text">{meal.strCategory}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-danger">
                                                More Details
                                            </button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                
                            )
                        })
                        
                    }
                        
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </main>

    </>
  )
}
