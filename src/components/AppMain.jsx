import { useState } from 'react'
import languages from '../data/languages';
import Languages from '../data/languages';

export default function AppMain() {
    const [active, setActive] = useState(0)

    function handleClick(e) {
        console.log(active);

    }


    return (
        <main>
            <div className="container">
                <div className="snippet">
                    {Languages.map((language, index) =>
                        <button key={language.id}>{language.title}</button>
                    )}
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3>Titolo</h3>
                    </div>
                    <div className="card-body">
                        <p>Description</p>
                    </div>
                </div>
            </div>
        </main>
    )
}