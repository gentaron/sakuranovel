import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import chapters from '../data/chapters.json';
import { generateCertificate } from '../utils/pdfGenerator';

const ChapterReader = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const chapterId = parseInt(id);
    const chapter = chapters.find(c => c.id === chapterId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [chapterId]);

    if (!chapter) {
        return <div className="container">Chapter not found</div>;
    }

    const handleFinish = () => {
        generateCertificate(chapter.title);
    };

    const nextChapterId = chapterId < chapters.length ? chapterId + 1 : null;
    const prevChapterId = chapterId > 1 ? chapterId - 1 : null;

    return (
        <div className="container" style={{ maxWidth: '700px' }}>
            <nav style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ color: 'var(--color-accent)', textDecoration: 'none' }}>&larr; Table of Contents</Link>
                <span style={{ color: '#666' }}>{chapter.title}</span>
            </nav>

            <article style={{ fontSize: '1.2rem', lineHeight: '2', marginBottom: '4rem' }}>
                {chapter.content.split('\n').map((line, index) => (
                    <p key={index} style={{ marginBottom: '1.5rem', minHeight: line.trim() ? 'auto' : '1rem' }}>
                        {line}
                    </p>
                ))}
            </article>

            <div style={{
                borderTop: '1px solid var(--color-surface)',
                paddingTop: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
            }}>
                <button onClick={handleFinish} className="btn" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                    Finish & Get Certificate 🏆
                </button>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', width: '100%', justifyContent: 'space-between' }}>
                    {prevChapterId ? (
                        <Link to={`/chapter/${prevChapterId}`} className="btn" style={{ background: 'var(--color-surface)', color: '#fff' }}>
                            &larr; Previous
                        </Link>
                    ) : <div></div>}

                    {nextChapterId ? (
                        <Link to={`/chapter/${nextChapterId}`} className="btn" style={{ background: 'var(--color-surface)', color: '#fff' }}>
                            Next &rarr;
                        </Link>
                    ) : <div></div>}
                </div>
            </div>
        </div>
    );
};

export default ChapterReader;
