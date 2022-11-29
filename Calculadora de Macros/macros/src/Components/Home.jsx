import React from "react";
import '../sass/home.scss';

//Edat, Altura, Kg, Genero
function genre(){
    let value = document.querySelectorAll(".c-home__buttons--ellipse");
    console.log(value.value);
}

class Home extends React.Component {
    render() {
        return (
            <div className="c-home">
                <div className="c-home__container">
                    {/*Botones de la elección del genero*/}
                    <div className="c-home__row">
                        <div className="c-home__box">
                            <div className="c-home__box-content c-home__box-content--genre">
                                <form onClick={genre}>
                                    <div className="c-home__buttons">
                                        <button type="button" value="Hombre" className="c-home__buttons--ellipse">Hombre</button>
                                        <button type="button" value="Mujer" className="c-home__buttons--ellipse">Mujer</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/*Inputs de Edat, Altura y Kg de peso*/}
                    <div className="c-home__row">
                        <div className="c-home__box">
                            <div className="c-home__box-content c-home__box-content--kgHeightWeight">
                                <form>
                                    <div className="c-home__box-inputs">
                                        <label className="c-home__box-labels">Peso</label>
                                        <input type="text"></input>
                                    </div>
                                    <div className="c-home__box-inputs">
                                        <label className="c-home__box-labels">Altura</label>
                                        <input type="text"></input>
                                    </div>
                                    <div className="c-home__box-inputs">
                                        <label className="c-home__box-labels">Edad</label>
                                        <input type="text"></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;