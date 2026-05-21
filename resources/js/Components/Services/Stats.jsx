export default function Stats() {
    const stats = [
        { num: '10', label: 'Service lines' },
        { num: '120', suffix: '+', label: 'Clients delivered' },
        { num: '14', label: 'Countries served' },
        { num: '4.9', suffix: '★', label: 'Average rating' }
    ];

    return (
        <div className="container">
            <div className="services-stats">
                {stats.map((stat, index) => (
                    <div className="stat" key={index}>
                        <span className="num">
                            {stat.num}
                            {stat.suffix && <em>{stat.suffix}</em>}
                        </span>
                        <span className="lbl">{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
