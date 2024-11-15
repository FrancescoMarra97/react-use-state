import { useState } from 'react'
import languages from '../data/languages';
import Languages from '../data/languages';

export default function AppMain() {
    const [active, setActive] = useState(0)

    function handleClick(e) {
        const newActvie = Number(e.target.getAttribute("data-index"))
        console.log(newActvie);
        setActive(newActvie)

    }


    return (
        <main>
            <div className="container">
                <div className="snippet">
                    {Languages.map((language, index) =>
                        <button key={language.id} data-index={index} onClick={handleClick}>{language.title}</button>
                    )}
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3>{languages[active].title}</h3>
                    </div>
                    <div className="card-body">
                        <p>{languages[active].description}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}