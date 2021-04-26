import React from 'react';
import { useState, useEffect } from 'react';

export default function MovieList() {

    const [eventInfo, setEventInfo] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true)
            const res = await fetch('http://api.tvmaze.com/search/shows?q=golden%20girls')
            const events = await res.json()

            setEventInfo(events)
            setLoading(false)
        }
        fetchEvents()
    }, [])
    return (
        <div className="movie-list">
            {eventInfo !== undefined && eventInfo.map(TvShows =>
                <div>
                    <h1>{TvShows.show.name}</h1>
                    <img src={TvShows.show.image.medium} alt="" />
                </div>
            )}
        </div>
    )

}
