import React from 'react';
import { Link } from 'react-router-dom';
import chapters from '../data/chapters.json';

const ChapterList = () => {
    return (
        <div className="container">
            <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '3rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Sakura Story</h1>
                <p style={{ color: '#888' }}>A Modern Web Novel Experience</p>
            </header>

            <div style={{ display: 'grid', gap: '1rem' }}>
                {chapters.map((chapter) => (
                    <Link
                        key={chapter.id}
                        to={`/chapter/${chapter.id}`}
                        style={{ textDecoration: 'none' }}
                    >
                        <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ margin: 0 }}>{chapter.title}</h3>
                            <span style={{ color: 'var(--color-accent)' }}>Read &rarr;</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ChapterList;
