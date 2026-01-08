interface PlayStoreBadgeProps {
  className?: string;
}

const PlayStoreBadge = ({ className = "" }: PlayStoreBadgeProps) => {
  return (
    <div
      className={`inline-flex items-center gap-3 bg-muted text-muted-foreground px-5 py-3 rounded-xl cursor-not-allowed opacity-70 ${className}`}
      aria-label="Próximamente en Play Store"
    >
      {/* Official Google Play Logo SVG */}
      <svg
        viewBox="0 0 512 512"
        fill="currentColor"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
      </svg>
      <div className="flex flex-col items-start leading-tight">
        <span className="text-[10px] font-medium opacity-90">Próximamente en</span>
        <span className="text-lg font-semibold -mt-0.5">Play Store</span>
      </div>
    </div>
  );
};

export default PlayStoreBadge;
