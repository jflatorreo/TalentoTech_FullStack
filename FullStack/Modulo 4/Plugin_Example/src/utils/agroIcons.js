const agroIcons = {
    compost: (props) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
            <path d="M15 6.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM9 6.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="currentColor"/>
            <path d="M12 14c-2.33 0-4.32 1.45-5.12 3.5h10.24c-.8-2.05-2.79-3.5-5.12-3.5z" fill="currentColor"/>
            <path d="M8.5 13.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM17 12c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z" fill="currentColor"/>
        </svg>
    ),
    crop_rotation: (props) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
            <path d="M15.5 7.5L12 4l-3.5 3.5h2.5v3h-3v-2.5L4 12l3.5 3.5v-2.5h3v3H8l3.5 3.5L15 16h-2.5v-3h3v2.5L19 12l-3.5-3.5v2.5h-3v-3h3z" fill="currentColor"/>
        </svg>),

    biodiversity: (props) => (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
        <path d="M7 10.5c0 .83-.67 1.5-1.5 1.5S4 11.33 4 10.5 4.67 9 5.5 9 7 9.67 7 10.5z" fill="currentColor"/>
        <path d="M9.5 6C8.67 6 8 6.67 8 7.5S8.67 9 9.5 9s1.5-.67 1.5-1.5S10.33 6 9.5 6z" fill="currentColor"/>
        <path d="M14.5 6c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S15.33 6 14.5 6z" fill="currentColor"/>
        <path d="M17 10.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S19.33 9 18.5 9 17 9.67 17 10.5z" fill="currentColor"/>
        <path d="M14.5 15c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" fill="currentColor"/>
        <path d="M9.5 15c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" fill="currentColor"/>
    </svg>),

    soil_health: (props) => (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
        <path d="M5 12h14" stroke="currentColor" stroke-width="2"/>
        <path d="M7 16c1.5-2 3.5-2 5-2s3.5 0 5 2" stroke="currentColor" stroke-width="2"/>
        <path d="M7 8c1.5 2 3.5 2 5 2s3.5 0 5-2" stroke="currentColor" stroke-width="2"/>
    </svg>),

    water_conservation: (props) => ( <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
        <path d="M12 5.5c-3.5 0-6.5 3.5-6.5 7 0 3 2.5 5.5 5.5 5.5s5.5-2.5 5.5-5.5c0-3.5-3-7-6.5-7zm0 10c-1.38 0-2.5-1.12-2.5-2.5S10.62 10.5 12 10.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
    </svg>),

    sustainable_farming: (props) => (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
        <path d="M7 13c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm10 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-5 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z" fill="currentColor"/>
        <path d="M12 6c-2.21 0-4 1.79-4 4v4h8v-4c0-2.21-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="currentColor"/>
    </svg>)
};

export default agroIcons;