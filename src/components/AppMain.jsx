import { useState } from 'react'

export default function AppMain() {
    const [active, setActive] = useState(0)

    return (
        <main>
            <div className="container">
                <div className="snippet">
                    <button>HTML</button>
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