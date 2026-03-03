"use client";

import {
    Globe,
    Instagram,
    Trophy,
    ExternalLink as LinkIcon,
    Globe as WebsiteIcon,
    Video as TiktokIcon
} from "lucide-react";

export default function Home() {
    return (
        <div className="linktree-container">
            <section className="profile-section">
                <div className="profile-image-container">
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: '900',
                        fontSize: '2rem'
                    }}>
                        <img src="/logo.jpg" alt="ViraWeb" />
                    </div>
                </div>
                <h1 className="username">VIRARWEB</h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '300px', marginTop: '4px' }}>
                    Performance Digital no Futebol
                </p>
            </section>

            <div className="links-list">
                {/* Updated Belgium Link */}
                <a
                    href="https://bel.viraweb.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-button"
                >
                    <span className="belgium-flag">🇧🇪</span>
                    BÉLGICA
                    <LinkIcon size={18} opacity={0.5} />
                </a>
            </div>

            <div className="links-list">
                <a
                    href="https://din.viraweb.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-button"
                >
                    <span className="belgium-flag">🇩🇰</span>
                    DINAMARCA
                    <LinkIcon size={18} opacity={0.5} />
                </a>
            </div>

            <div className="social-icons">
                <a
                    href="https://instagram.com/viraweb.online/"
                    target="_blank"
                    className="social-link instagram"
                >
                    <Instagram size={28} />
                </a>
                <a
                    href="https://www.tiktok.com/@viraweb.online"
                    target="_blank"
                    className="social-link tiktok"
                >
                    {/* TikTok icon fallback since it's newer in Lucide */}
                    <TiktokIcon size={28} />
                </a>
                <a
                    href="https://viraweb.online"
                    target="_blank"
                    className="social-link website"
                >
                    <WebsiteIcon size={28} />
                </a>
            </div>

            <div className="hashtag">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center', marginBottom: '8px' }}>
                    <Trophy size={18} color="var(--flemish-gold)" />
                    <span style={{ fontWeight: '700', color: '#fff', textTransform: 'uppercase' }}>COPA 2026</span>
                </div>
                #BelgianRedDevils 🖤💛❤️
                <div style={{ marginTop: '16px', fontSize: '0.75rem', opacity: 0.3 }}>Powered by ViraWeb</div>
            </div>
        </div>
    );
}
