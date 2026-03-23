import '../assets/css/Button.css'

export default function Button({ type, children }) {
    return (
        <button className={`app-btn ${type} mt-4`}>
            {children}
        </button>
    )
}