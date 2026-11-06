import React from 'react';

interface PageHeaderProps {
  index?: string;
  title: string;
  children?: React.ReactNode;
  compact?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ index, title, children, compact = false }) => {
  return (
    <header className={compact ? 'mb-6 max-w-3xl' : 'mb-10 max-w-3xl md:mb-12'}>
      {index && (
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.32em] text-muted">{index}</p>
      )}
      <h1 className="font-display text-5xl font-normal leading-[0.95] tracking-tight text-ink md:text-6xl">
        {title}
      </h1>
      {children && (
        <div className="mt-7 max-w-xl text-[15px] font-light leading-relaxed text-muted">{children}</div>
      )}
    </header>
  );
};

export default PageHeader;
