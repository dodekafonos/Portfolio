
function Card() {

  return (
    <>

        <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
            <img
            src="src\assets\commie_tux.png"
            alt="Shoes"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">Project</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
            <button className="btn btn-primary">
                <a target="_blank" href="https://github.com/m-u-l-a-s/API-SIATT/tree/main">Check it out!</a></button>
            </div>
        </div>
        </div>

    </>
  )
}

export default Card;
