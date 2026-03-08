'use client';

export default function GitHubStats({ username }: { username: string }) {
  return (
    <div className="github-stats-section">
      <div className="github-stats-grid">
        <div className="github-stat-card hover-card">
          <span className="section-mini">GitHub Activity</span>
          <div className="github-img-wrapper">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=66d9ff&icon_color=7c72ff&text_color=a7b8cf&bg_color=00000000`}
              alt="GitHub Stats"
              className="github-stats-img"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
          <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer" className="github-cta">
            View full profile on GitHub ↗
          </a>
        </div>

        <div className="github-stat-card hover-card">
          <span className="section-mini">Top Languages</span>
          <div className="github-img-wrapper">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=66d9ff&text_color=a7b8cf&bg_color=00000000`}
              alt="Top Languages"
              className="github-stats-img"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
          <a href={`https://github.com/${username}?tab=repositories`} target="_blank" rel="noreferrer" className="github-cta">
            Browse repositories ↗
          </a>
        </div>
      </div>
    </div>
  );
}
